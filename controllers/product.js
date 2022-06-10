"use strict";

const axios = require("axios");
const helper = require("./../helpers/common");
const constants = require("./../constants/product");
const mapper = require("./../mappers/product");

const getProduct = async (req, res) => {
  axios
    .get(`${constants.searchItems}?${helper.queryToStr(req.query)}`)
    .then((response) => {
      res.status(200).send(mapper.onlyBasicData(response.data));
    })
    .catch((error) => {
      res.status(503).send(error);
    });
};

const getProductById = async (req, res) => {
  const id = req.params.id;
  Promise.allSettled([
    axios.get(constants.searchItemById.replace(":id", id)),
    axios.get(constants.getItemDescriptionById.replace(":id", id)),
  ])
    .then((response) => {
      const data = {
        ...response[0]?.value?.data,
        description:
          response[1]?.value?.data?.plain_text || constants.withoutDescription,
      };
      axios
        .get(constants.getCategoryById.replace(":id", data.category_id))
        .then((categoriesResponse) => {
          data.categories = categoriesResponse.data;
          res.status(200).send(mapper.onlyBasicDataById(data));
        });
    })
    .catch((error) => {
      res.status(503).send(error);
    });
};

module.exports = {
  getProduct,
  getProductById,
};
