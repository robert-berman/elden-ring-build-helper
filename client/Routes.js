import React, { Component, Fragment, useEffect } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { withRouter, Route, Switch, Redirect } from "react-router-dom";
import { Login, Signup } from "./components/AuthForm";
import Home from "./components/Home";
import AllWeapons from "./components/AllWeapons";
import { me } from "./store";
import SingleWeapon from "./components/SingleWeapon";
import NewCharacter from "./components/NewCharacter";
import EditCharacter from "./components/EditCharacter";
import ViewCharacter from "./components/ViewCharacter";

/**
 * COMPONENT
 */

const Routes = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.id);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(me());
  }, []);

  return (
    <div>
      {isLoggedIn ? (
        <Switch>
          <Route path="/home" component={Home} />
          <Route exact path="/weapons" component={AllWeapons} />
          <Route exact path="/weapons/:id" component={SingleWeapon} />
          <Route exact path="/character/create" component={NewCharacter} />
          <Route exact path="/character/" component={EditCharacter} />
        </Switch>
      ) : (
        <Switch>
          <Route path="/" exact>
            {Login}
          </Route>
          <Route path="/login">{Login}</Route>
          <Route path="/signup">{Signup}</Route>
          <Route path="/weapons/:id" component={SingleWeapon} />
          <Route exact path="/weapons" component={AllWeapons} />
        </Switch>
      )}
    </div>
  );
};

export default Routes;
