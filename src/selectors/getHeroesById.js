import { heroes } from '../data/heroes';


// Return one heroe 
export const getHeroesById = ( id ) => {

    return heroes.find( hero => hero.id === id );

}