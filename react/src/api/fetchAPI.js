console.log('ENV', process.env)

export default function fetchAPI(path, options) {
    return fetch(process.env.REACT_APP_API_URL + path, options)
      .then(res => res.json())
}