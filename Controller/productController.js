import ProductModel from "../Model/productModel.js";
import { getCards } from "../DialogFlow/utils.js";

export default class ProductController {
  handleIntents(req, res) {
    try {
      const model = new ProductModel();
      const products = model.getProducts();

      const payload = req.body;
      const { intent, outputContexts } = payload.queryResult;
      const { source } = payload.originalDetectIntentRequest;

      if (intent?.displayName === "Menu e Preços") {
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

      if (intent?.displayName === "ColetarPedido" && outputContexts.length) {
        const productsRequest = outputContexts[0].parameters["carnes"];
        const quantityRequest = outputContexts[0].parameters["unit-weight"];

        const orderItems = productsRequest.map((product, index) => {
          const productPrice = products.find(
            (item) => item.title === product
          ).price;

          const normalizedQuantity =
            quantityRequest[index].unit === "kg"
              ? quantityRequest[index].amount
              : quantityRequest[index].amount / 1000;
          const normalizedPrice = productPrice * normalizedQuantity;

          return {
            product: product,
            quantity: `${normalizedQuantity} Kg`,
            price: normalizedPrice,
          };
        });

        if (global.orderItems) {
          global.orderItems = [...global.orderItems, ...orderItems];
          return res.status(200);
        }

        global.orderItems = orderItems;
        return res.status(200);
      }

      if (intent?.displayName === "ColetarDados" && outputContexts.length) {
        const name = outputContexts[0].parameters["person.original"];
        const phone = outputContexts[0].parameters["phone-number.original"];
        const address = outputContexts[0].parameters["street-address.original"];

        const customer = {
          name,
          phone,
          address,
        };

        global.customer = customer;
        return res.status(200);
      }

      if (intent?.displayName === "ConfirmarPedido") {
        const items = global.orderItems || [];
        const order = {
          totalPrice: items.reduce((acc, item) => acc + item.price, 0),
          items: items.map((item) => `${item.product} - ${item.quantity}`),
          code: Math.floor(Math.random() * 1000),
          customer: global.customer,
        };

        if (source) {
          if (source === "DIALOGFLOW_CONSOLE") {
            const orderText = {
              text: {
                text: [
                  "Aqui está seu pedido:",
                  `Número: ${order.code}`,
                  ...order.items,
                  `Total: R$ ${order.totalPrice}`,
                  "Obrigado pela preferência!",
                ],
              },
            };
            const response = { fulfillmentMessages: [orderText] };
            return res.status(200).json(response);
          }
        }

        const orderCard = [
          {
            type: "description",
            title: "Aqui está seu pedido:",
            text: [
              `Número: ${order.code}`,
              ...order.items,
              `Total: R$ ${order.totalPrice}`,
            ],
          },
        ];
        const thanksText = [
          {
            type: "description",
            title: "Obrigado pela preferência!",
          },
        ];

        const response = {
          fulfillmentMessages: [
            {
              payload: {
                richContent: [orderCard, thanksText],
              },
            },
          ],
        };

        global.orderItems = [];
        global.customer = {};

        return res.status(200).json(response);
      }

      if (intent?.displayName === "CancelarPedido") {
        global.orderItems = [];
        global.customer = {};
      }

      return res.status(400);
    } catch (error) {
      res.status(500).json({ msg: error });
    }
  }
}
