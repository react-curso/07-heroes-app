import { heroes } from '../data/heroes';


// Return heroe contain name == name 
export const getHeroesByName = ( name ) => {

    if(name === ''){
        return [];
    }
    name = name.toLowerCase();

    return heroes.filter( hero => hero.superhero.toLowerCase().includes( name ) );

}