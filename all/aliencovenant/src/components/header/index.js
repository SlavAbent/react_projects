import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink} from "react-router-dom";
import Body from '../../components/body'
import Trailer from '../../components/header/trailer'
import Tickets from '../../components/header/tickets'
import News from '../../components/header/news'
import './index.sass'

export default function Header() {
    return (
        <div className="header">
            <Router>
                <div className="header__block">
                    <nav className="link__nav">
                        <ul className="link__ul">
                            <li className="link__li link__active">
                                <NavLink to="/" className="link__a" to="/" activeClassName="active">SummΛry</NavLink>
                                <div className="link__hover">
                                    <div className="link__triangle"></div>
                                </div>
                                <div className="link__triangles"></div>
                            </li>
                            <li className="link__li">
                                <NavLink className="link__a" to="/news">News</NavLink>
                                <div className="link__hover">
                                    <div className="link__triangle"></div>
                                </div>
                            </li>
                            <li className="link__li">
                                <NavLink className="link__a" to="/trailer">TrΛiler</NavLink>
                                <div className="link__hover">
                                    <div className="link__triangle"></div>
                                </div>
                            </li>
                            <li className="link__li">
                                <NavLink className="link__a" to="/tickets">Tickets</NavLink>
                                <div className="link__hover">
                                    <div className="link__triangle"></div>
                                </div>
                            </li>
                        </ul>
                    </nav>
                    <Switch>
                        <Route exact path="/">
                            <Body />
                        </Route>
                        <Route path="/news">
                            <News />
                        </Route>
                        <Route path="/trailer">
                            <Trailer />
                        </Route>
                        <Route path="/tickets">
                            <Tickets />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </div>
    )

}

