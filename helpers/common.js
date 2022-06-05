"use strict";

const queryToStr = (query) => {
  const keys = Object.keys(query);
  let result = [];
  keys.forEach((key) => {
    result.push(`${key}=${query[key]}`);
  });
  return result.join("&");
};

module.exports = {
  queryToStr,
};
