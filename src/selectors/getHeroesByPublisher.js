import { heroes } from '../data/heroes';


// Return heroe for mark

export const getHeroesByPublisher = ( publisher ) => {

    const validPublisher =  ['DC Comics', 'Marvel Comics'];

    if( !validPublisher.includes( publisher ) ){
        throw new Error(`Publisher incorret`);
    }

    return heroes.filter( hero => hero.publisher === publisher );

}