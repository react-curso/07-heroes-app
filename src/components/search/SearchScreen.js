import React, { useMemo } from 'react'
import queryString from "query-string";

import { useLocation } from 'react-router-dom';
import { useForm } from '../../hook/useForm';
import { HeroeCard } from '../heroes/HeroeCard';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = ({ history }) => {

    const location = useLocation();
    const { q = '' } = queryString.parse(location.search);

    const { valueForm, handleInputChange } = useForm({
        search: q
    })
    
    const { search } = valueForm;

    const filter =  useMemo(() => getHeroesByName(q) , [ q ])

    const handleSubmit = (e) => {
        e.preventDefault();
        history.push(`?q=${search}`);
    };

    return (
        <div>
            <h1>Search Screen</h1>
            <hr />

            <div className="row" >
                <div className="col-5" >

                    <h4>Search Hero</h4>

                    <form onSubmit={handleSubmit} >
                        <input
                            type="text"
                            placeholder="Find your hero"
                            className="form-control"
                            autoComplete="off"
                            name="search"
                            onChange={handleInputChange}
                            value={search}
                        />
                    </form>

                    <button
                        className="btn btn-outline-primary btn-block mt-3"
                        type="submit"
                    >
                        Search...
                    </button>

                </div>

                <div className="col-7" >

                    <h4>Results</h4>

                    {
                        filter.map(hero => (
                            <HeroeCard
                                hero={hero}
                                key={hero.id}
                            />
                        ))
                    }

                </div>
            </div>

        </div>
    )
}
