import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const HeroeCard = ({ hero }) => {

    const { id, superhero, alter_ego, first_appearance } = hero;

    return (

        <div className="card mb-3" style={{ maxWidth: 540 }}>
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src={`./assets/heroes/${id}.jpg`} className="card-img" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{superhero}</h5>
                        <h6 className="card-title">{alter_ego}</h6>
                        <p className="card-title">{first_appearance}</p>

                        <Link
                            to={`./heroe/${id}`}
                            className="btn btn-outline-primary"
                        >
                            More
                        </Link>

                    </div>
                </div>
            </div>
        </div >
    )
}

HeroeCard.propTypes = {
    hero: PropTypes.object.isRequired
}
