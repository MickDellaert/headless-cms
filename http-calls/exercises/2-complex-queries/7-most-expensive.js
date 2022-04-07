/**
 * Fill in the blanks to create a script
 * that prints the name of the most expensive item that someone can buy (after applying any discounts,
 * and not including any items that are out of stock)
 */

import "./qs.js";
async function mostExpensiveProduct() {
  const query = qs.stringify(
    {
      fields: ["price", "name"],

      populate: {
        discount: {
          fields: ["percentage"],
        },
      },
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

  let priceArr = [];

  for (let i = 0; i < result.data.length; i++) {
    let price = result.data[i].attributes.price;

    if (result.data[i].attributes.discount.data !== null) {
      const discount =
        result.data[i].attributes.discount.data.attributes.percentage;

      const discountPerc = discount / 100;

      price = Math.floor(price - price * discountPerc);
    }
    priceArr.push(price);
    // console.log(typeof price);
    // console.log(priceArr);
  }
  const mostExpensive = Math.max(...priceArr);
  const index = priceArr.indexOf(mostExpensive);

  const mostExpensiveName = result.data[index].attributes.name;
  console.log(mostExpensiveName);
}

// async function test() {
//   console.log("Products containing name", await searchProductByName("name"));
//   console.log("Products containing prog", await searchProductByName("prog"));
//   console.log("Products containing pro", await searchProductByName("pro"));
// }

mostExpensiveProduct();
