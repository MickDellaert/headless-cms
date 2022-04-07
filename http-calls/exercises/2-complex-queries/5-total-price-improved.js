/**
 * Fill in the blanks to create a script
 * that prints the total cost if someone would buy one of every item
 * without applying any discount, but only count items that are currently in stock
 */

import "./qs.js";
async function ex4() {
  const query = qs.stringify(
    {
      fields: ["price"],
      filters: {
        outOfStock: {
          $eq: "false",
        },
      },
    },
    {
      encodeValuesOnly: true,
    }
  );
  console.log("The query string", query);

  // call the matching endpoint and include the querystring after the ?
  const baseUrl = "http://localhost:1337/api/products";
  const response = await fetch(`${baseUrl}?${query}`);
  const result = await response.json();

  let totalArr = [];

  result.data.forEach((singlePrice) =>
    totalArr.push(singlePrice.attributes.price)
  );

  console.log(totalArr.reduce((a, b) => a + b));
}
ex4();
