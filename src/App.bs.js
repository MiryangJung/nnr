// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Nav = require("./components/Nav.bs.js");
var React = require("react");
var RelayEnv = require("./RelayEnv.bs.js");
var RescriptRelay = require("rescript-relay/src/RescriptRelay.bs.js");

var PageComponent = {};

function $$default(props) {
  var content = React.createElement(props.Component, props.pageProps);
  return React.createElement(RescriptRelay.Context.Provider.make, {
              environment: RelayEnv.environment,
              children: null
            }, React.createElement(Nav.make, {}), content);
}

exports.PageComponent = PageComponent;
exports.$$default = $$default;
exports.default = $$default;
exports.__esModule = true;
/* Nav Not a pure module */
