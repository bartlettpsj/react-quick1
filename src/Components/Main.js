import React, { Fragment } from "react";
import { Switch, Route, Link } from 'react-router-dom'
import './Main.css';

import Users from "./Users";
import Messages from "./Messages";

const Header = () => (
  <div className={'header'}>
    <Link to={'/users'}>Users</Link>
    <Link to={'/messages'}>Messages</Link>
  </div>
)

export default () => (
  <Fragment>
    <h1>Main Menu</h1>
    <Header/>
    <Switch>
      <Route path={'/users'}><Users/></Route>
      <Route path={'/messages'}><Messages/></Route>
      <Route>Nothing to say!</Route>
    </Switch>
  </Fragment>
)


