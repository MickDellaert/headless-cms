/**
 * Take a look at: https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/rest-api.html#create-an-entry
 *
 * and complete the following function that allows
 * the user to create a new category
 */

async function createNewCategory(name, description) {
  const path = 'categories';
  const body = { data: { name: name, description: description } };
  const url = `http://localhost:1337/api/${path}`;
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  return response.json();
}

createNewCategory(
  'Demo category',
  'This is a cool category made by an api call',
);
