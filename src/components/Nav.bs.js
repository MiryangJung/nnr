// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var React = require("react");
var Link = require("next/link").default;

function Nav(Props) {
  return React.createElement("nav", undefined, React.createElement("ul", undefined, React.createElement("li", undefined, React.createElement(Link, {
                          children: "getServerSideProps & Query.fetchPromised",
                          href: "/"
                        })), React.createElement("li", undefined, React.createElement(Link, {
                          children: "getStaticProps & Query.fetchPromised",
                          href: "/static"
                        }))));
}

var make = Nav;

exports.make = make;
/* react Not a pure module */
