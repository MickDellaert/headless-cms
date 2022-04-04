/**
 * Complete the following function that
 * removes the product with the given id
 */

async function updateProduct(productId) {
  const url = `http://localhost:1337/api/products/${productId}`;
  const response = await fetch(url, {
    method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    // body: JSON.stringify(newData),
  });
  return response.json();
}

updateProduct(12);
