async function request (url, options = {}) {
  const response = await fetch(
    url, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache, max-age=0, must-revalidate, no-store'
      },
      ...options
    }
  )
  const json = await response.json()
  return json
}

export default request
