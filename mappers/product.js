const config = require("./../config");

const onlyBasicData = (data) => {
  return {
    author: config.author,
    categories:
      data.filters
        .find((filter) => filter.id === "category")
        ?.values[0]?.path_from_root?.map((category) => category.name) || [],
    items: data.results.map((item) => {
      const price = item.prices.prices.find(
        (price) => price.type === "standard"
      );
      return {
        id: item.id,
        title: item.title,
        price: {
          currency: item.currency_id,
          amount: price.amount,
          decimals: parseInt((price.amount + "").split(".")[1], 10),
        },
        picture: item.thumbnail,
        condition: item.condition,
        free_shipping: item.shipping.free_shipping,
      };
    }),
  };
};

const onlyBasicDataById = (data) => {
  return {
    author: config.author,
    categories: data.categories.path_from_root.map((category) => category.name),
    item: {
      id: data.id,
      title: data.title,
      price: {
        currency: data.currency_id,
        amount: data.price,
        decimals: parseInt((data.price + "").split(".")[1], 10),
      },
      picture: data.pictures[0].secure_url,
      condition: data.condition,
      free_shipping: data.shipping.free_shipping,
      sold_quantity: data.sold_quantity,
      description: data.description,
    },
  };
};

module.exports = {
  onlyBasicData,
  onlyBasicDataById,
};
