import ProductModel from "../Model/productModel.js";
import { getCards } from "../DialogFlow/utils.js";

export default class ProductController {
  handleIntents(req, res) {
    try {
      const model = new ProductModel();
      const products = model.getProducts();

      const payload = req.body;
      const { intent } = payload.queryResult;

      if (intent && intent.displayName === "Menu e Preços") {
        const { source } = payload.originalDetectIntentRequest;
        if (source) {
          if (source === "DIALOGFLOW_CONSOLE") {
            const cards = getCards(products);
            const response = { fulfillmentMessages: cards };
            return res.status(200).json(response);
          }
        }
        const cards = getCards(products, "messenger");
        const appresentationText = [
          {
            type: "description",
            title: "Aqui está a lista de opções e preços do Churras du Bom:",
          },
        ];
        const askOrderText = [
          {
            type: "description",
            title: "Oque deseja levar hoje?",
          },
        ];

        const response = {
          fulfillmentMessages: [
            {
              payload: {
                richContent: [appresentationText, cards, askOrderText],
              },
            },
          ],
        };
        return res.status(200).json(response);
      }

      return res.status(400);
    } catch (error) {
      res.status(500).json({ msg: error });
    }
  }
}
