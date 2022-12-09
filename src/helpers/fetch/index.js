export default function fetchData({
  url,
  method = 'GET',
  host = process.env.REACT_APP_API_URL,
  body,
}) {
  return fetch(`${host}${url}`, {
    method,
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body,
  }).then(async (response) => {
    const responseJson = await response.json();
    if (response.ok) return responseJson;

    throw new Error(JSON.stringify('erorr'));
  });
}
