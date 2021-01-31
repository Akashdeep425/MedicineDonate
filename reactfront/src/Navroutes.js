import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Dashboard from "./components/Dashboard";
import ProfileForm from "./components/ProfileForm";
import PostMed from "./components/PostMed";
import SearchMed from "./components/SearchMed";

function Navroutes() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={HomePage}></Route>
        <Route path="/searchmed" exact component={SearchMed}></Route>
        <Route path="/dashboard" exact component={Dashboard}></Route>
        <Route path="/profile-form" exact component={ProfileForm}></Route>
        <Route path="/post-med" exact component={PostMed}></Route>
      </Switch>
    </div>
  );
}

export default Navroutes;
