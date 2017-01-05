export default function fetchAPI(path, options) {
    return fetch(process.env.REACT_APP_API_URL + path, options)
      .then(res => res.json())
}

export function postAPI(path, bodyJSON) {
  return fetchAPI(path, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(bodyJSON)
  })
}

export function patchAPI(path, bodyJSON) {
  return fetchAPI(path, {
      method: 'PATCH',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(bodyJSON)
  })
}
