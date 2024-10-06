export function createMessengerCards(productsList) {
  const cards = productsList.flatMap((product) => [
    {
      type: "info",
      title: `${product.title} - R$ ${product.price}/Kg`,
      subtitle: `${product.category}: ${product.description}`,
      image: {
        src: {
          rawUrl: product.urlImage,
        },
      },
    },
    {
      type: "divider",
    },
  ]);

  return cards;
}

export function createCustomCards(productsList) {
  const cards = productsList.map((product) => ({
    card: {
      title: `${product.title} - R$ ${product.price}/Kg`,
      subtitle: `${product.category}: ${product.description}`,
      imageUri: product.urlImage,
    },
  }));

  return cards;
}

export function getCards(products, type = "custom") {
  if (type === "custom") {
    return createCustomCards(products);
  }

  return createMessengerCards(products);
}
