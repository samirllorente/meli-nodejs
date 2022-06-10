"use strict";

const endpoint = "https://api.mercadolibre.com";
const searchItems = endpoint + "/sites/MLA/search";
const searchItemById = endpoint + "/items/:id";
const getItemDescriptionById = endpoint + "/items/:id/description";
const getCategoryById = endpoint + "/categories/:id";

const withoutDescription = "No se encontro descripción para este producto";

module.exports = {
  searchItems,
  searchItemById,
  getItemDescriptionById,
  getCategoryById,
  withoutDescription,
};
