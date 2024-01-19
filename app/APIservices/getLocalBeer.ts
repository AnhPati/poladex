import beersData from './../../fake-api/datas.json';

export const getBeer = async (beerId: string) => {
    const errorServer = 'Le serveur est actuellement inaccessible.';
    const beer = beersData.beers.find(beer => beer.id === beerId);

    if (!beer) {
        throw new Error('La bière demandée n\'a pas été trouvée.');
    }

    return beer;
};
