"use strict";

const endpoint = "https://api.mercadolibre.com";
const searchItems = endpoint + '/sites/MLA/search';
const searchItemById = endpoint + '/items/:id';
const getItemDescriptionById = endpoint + '/items/:id/description';

module.exports = {
    searchItems,
    searchItemById,
    getItemDescriptionById
}