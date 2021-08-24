import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'
import { HeroeCard } from './HeroeCard';

export const HeroList = ({ publisher }) => {

    const heroes = useMemo( () => getHeroesByPublisher( publisher ), [publisher] )


    return (
        <div className="card-columns animate__animated animate__fadeIn animate__delay-0.5s">

            {heroes.map( hero => (
                <HeroeCard hero={hero} key={hero.id} />
                // <HeroeCard {...hero} /> PARA ENVIAR CADA ARGUMENTO
            ))}
            
        </div>
    )
}
