/**
 * Fill in the blanks to create a script
 * that prints the total cost if someone would buy one of every item
 * taking into consideration that it's impossible to buy items that are out of stuck,
 * and taking the discount rates into account
 */

import "./qs.js";
async function ex4() {
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
  // console.log("The query string", query);

  // call the matching endpoint and include the querystring after the ?
  const baseUrl = "http://localhost:1337/api/products";
  const response = await fetch(`${baseUrl}?${query}`);
  const result = await response.json();

  let totalPrice = 0;

  for (let i = 0; i < result.data.length; i++) {
    let price = result.data[i].attributes.price;

    if (result.data[i].attributes.discount.data !== null) {
      const discount =
        result.data[i].attributes.discount.data.attributes.percentage;

      const discountPerc = discount / 100;

      price = Math.floor(price - price * discountPerc);
    }

    totalPrice += price;
  }

  console.log(totalPrice);
}
ex4();

// other solution with else statement:

// let totalPrice = 0;
// let normalTotal = 0;
// let discountTotal = 0;

//  for (let i = 0; i < result.data.length; i++) {

//     let price = result.data[i].attributes.price;
//     // console.log(price);

//     if (result.data[i].attributes.discount.data !== null) {

//       const discount = result.data[i].attributes.discount.data.attributes.percentage;
//       // console.log(discount);

//       const discountPerc = discount / 100;
//       // console.log(discountPerc);

//       const discountPrice = price - price * discountPerc;
//       // console.log(discountPrice);

//       discountTotal += discountPrice;
//     } else {

//       const normalPrice = price;
//       // console.log(price)
//       normalTotal += normalPrice;
//     }

//     totalPrice = normalTotal + discountTotal;
//   }

//   console.log(totalPrice)

// }
// ex4();
