import beersData from './../../fake-api/datas.json';

export const fetchBeers = async () => {
    const beers = beersData.beers;

    return beers;
};