/**
 * Complete the following function that creates a new product
 */

async function createNewProduct(
  name,
  description,
  price,
  discount,
  category,
  outOfStock,
) {
  const url = `http://localhost:1337/api/products/`;
  const body = {
    data: {
      name: name,
      description: description,
      price: price,
      discount: { id: discount },
      category: { id: category },
      outOfStock: outOfStock,
    },
  };
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(body),
  });
  return response.json();
}

createNewProduct('chess', 'lkjlkkjljljljljlj', 22, 2, 3, true);
