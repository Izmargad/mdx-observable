import React from "react";
import ReactDOM from "react-dom";
import Dataviz from "./dataviz.mdx";
import Counter from "./counter.mdx";
import CounterRender from "./counter-child-function.mdx";
import Toggle from "./toggle.mdx";
import { Router, Link, Redirect } from "@reach/router";

const NavLink = props => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      return {
        style: {
          fontWeight: isCurrent ? "bold" : undefined
        }
      };
    }}
  />
);

const Nav = () => (
  <nav>
    <NavLink to="/dataviz">Data Viz</NavLink> |{" "}
    <NavLink to="/toggle">Toggle</NavLink> |{" "}
    <NavLink to="/counter">Counter</NavLink> |{" "}
    <NavLink to="/counter-child-function">Counter w/Render Prop</NavLink>
  </nav>
);

const Demo = (
  <React.Fragment>
    <Nav />
    <Router>
      <Redirect from="/" to="/dataviz" />
      <Counter path="/counter" />
      <CounterRender path="/counter-child-function" />
      <Toggle path="/toggle" />
      <Dataviz path="/dataviz" />
    </Router>
  </React.Fragment>
);

ReactDOM.render(Demo, document.querySelector("#root"));
