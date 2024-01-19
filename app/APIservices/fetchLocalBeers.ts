import beersData from './../../fake-api/small-datas.json';

export const fetchBeers = async () => {
    const beers = beersData.beers;

    return beers;
};