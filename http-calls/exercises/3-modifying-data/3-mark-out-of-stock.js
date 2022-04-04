/**
 * Complete the following function
 * that can be used to mark a product
 * as out of stock
 * @param {*} productId the id of the product that is out of stuck
 */
async function markOutOfStock(productId) {
  const url = `http://localhost:1337/api/products/${productId}`;
  const body = {data: {outOfStock : true }}
  const response = await fetch(url, {
    method: 'PUT', // *GET, POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(body),
  });
  return response.json();
}

markOutOfStock(7);
