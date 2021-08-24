import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { NavBar } from '../components/ui/NavBar'

import { DcScreen } from '../components/dc/DcScreen'
import { HeroeScreen } from '../components/heroes/HeroeScreen'
import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { HomeScreen } from '../components/ui/HomeScreen'
import { SearchScreen } from '../components/search/SearchScreen'

export const DashboardRoutes = () => {
    return (
        <>
            <NavBar />

            <div className="container mt-5">
                <Switch >

                    <Route exact={true} path="/" component={HomeScreen} />

                    <Route exact={true} path="/dc" component={DcScreen} />

                    <Route exact={true} path="/marvel" component={MarvelScreen} />

                    <Route exact={true} path="/heroe/:heroeId" component={ HeroeScreen } />

                    <Route exact={true} path="/search" component={ SearchScreen } />

                    <Redirect to="/" />

                </Switch>

            </div>

        </>
    )
}
