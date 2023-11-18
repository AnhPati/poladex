export const fetchBeers = async () => {
    const urlApi = 'http://localhost:3000/beers'
    const errorServer = 'Le serveur est actuellement inaccessible.'

    const beers = await fetch(urlApi)
        .then(response => {
            if (response.status >= 400) {
                throw new Error(errorServer)
            } else {
                return response.json()
            }
        }).catch((err) => err.message)

    return beers
}
