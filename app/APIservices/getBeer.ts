export const getBeer = async (beerId: string) => {
    const urlApi = `http://localhost:8000/beers/${beerId}`
    const errorServer = 'Le serveur est actuellement inaccessible.'

    const beer = await fetch(urlApi)
        .then(response => {
            if (response.status >= 400) {
                throw new Error(errorServer)
            } else {
                return response.json()
            }
        }).catch((err) => err.message)

    return beer
}
