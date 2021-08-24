import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { getHeroesById } from '../../selectors/getHeroesById';

export const HeroeScreen = ({ history }) => {

    // params in Path 
    const { heroeId } = useParams();

    // no redered until heroeId CHANGE
    const hero = useMemo(() => getHeroesById(heroeId), [heroeId]);

    // if hero not exist
    if (!hero) {
        return <Redirect to="/" />
    }

    const { superhero, publisher, alter_ego, first_appearance, characters } = hero;


    // button return
    const handleRedirect = () => {
        if (history.length <= 2) {
            // when paste PATH
            history.push('/');
        } else {
            history.goBack();
        }
    };

    return (
        <div className="row mt-5">
            <div className="col-4" >
                <img
                    src={`../assets/heroes/${heroeId}.jpg`}
                    alt={alter_ego}
                    className="img-thumbnail animate__animated animate__rotateIn " />
            </div>
            <div className="col-8" >
                <h3>{superhero}</h3>
                <ul className="list-group list-group-flush" >
                    <li className="list-group-item" >Alter ego: <b>{alter_ego}</b> </li>
                    <li className="list-group-item" >First Appearance: <b>{first_appearance}</b> </li>
                    <li className="list-group-item" >Publisher: <b>{publisher}</b> </li>

                </ul>

                <h5>Characters</h5>
                <p>{characters}</p>

                <button
                    className="btn btn-primary m-2"
                    onClick={handleRedirect}
                >Return
                </button>

            </div>

        </div>
    )
}
