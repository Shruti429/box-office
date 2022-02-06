const API_BASE_URL = 'https://api.tvmaze.com';
export async function apiGet(queryString) {
  const response = await fetch(`${API_BASE_URL}${queryString}`).then(res =>
    res.json()
  );
  return response;
}

// fetch(`https://api.tvmaze.com/search/shows?q=${input}`)
//       .then(res => res.json())
//       .then(result => {
//         setResults(result);
//       });
