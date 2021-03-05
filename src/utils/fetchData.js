export default function fetchData(method, id = "", body = "", page = "", limit = "") {
  if (page) {
    return fetch(
      `https://andrews-things-mongo-heroku.herokuapp.com/api/v2/things?page=${page}&limit=${limit}`,
      {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }

  if (!body) {
    return fetch(
      `https://andrews-things-mongo-heroku.herokuapp.com/api/v2/things/${id}`,
      {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }

  return fetch(
    `https://andrews-things-mongo-heroku.herokuapp.com/api/v2/things/${id}`,
    {
      method: method,
      body: body,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}
