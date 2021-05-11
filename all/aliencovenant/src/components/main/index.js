import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink} from "react-router-dom";
import Body from '../../components/body'
import Trailer from '../../components/main/trailer'
import Tickets from '../../components/main/tickets'
import News from '../../components/main/news'
import './index.sass'

export default function Header({data}) {
    return (
        <div className="header">
            <Router>
                <div className="header__block">
                    <nav className="link__nav">
                        <ul className="link__ul">
                            <li className="link__li">
                                <NavLink exact to="/" className="link__a" to="/" activeClassName="link__active">
                                    SummΛry
                                    <div className="link__triangles"></div>
                                </NavLink>
                               
                            </li>
                            <li className="link__li">
                                <NavLink className="link__a" to="/news" activeClassName="link__active">
                                    News
                                    <div className="link__triangles"></div>
                                 </NavLink>
                            </li>
                            <li className="link__li">
                                <NavLink className="link__a" to="/trailer" activeClassName="link__active">
                                    TrΛiler
                                    <div className="link__triangles"></div>
                                </NavLink>
                            </li>
                            <li className="link__li">
                                <NavLink className="link__a" to="/tickets" activeClassName="link__active">
                                    Tickets
                                    <div className="link__triangles"></div>
                                </NavLink>
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
                            <Trailer data={data}/>
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

