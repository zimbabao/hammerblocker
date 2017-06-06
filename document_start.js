
"use strict";

function injectScript(fn, arg)
{
  let script = document.createElement("script");
  script.type = "application/javascript";
  script.textContent = "(" + fn + ")(" + JSON.stringify(arg) + ");";
  document.documentElement.appendChild(script);
  document.documentElement.removeChild(script);
}


if (document instanceof HTMLDocument)
{
  // injectScript(() => {
  //   let emptyF = function() {
  //   };
  //   let obj = {value: emptyF, configurable: false, writable: false};
  //   let nuetralizeFunctions = ["write", "writeln"];
  //   nuetralizeFunctions.forEach(function(fname) {
  //     Object.defineProperty(Object.getPrototypeOf(document), fname, obj);
  //   });
  // })

  // injectScript(() => {
  //   let emptyF = function() {
  //   };
  //   let obj = {value: emptyF, configurable: false, writable: false};
  //   let nuetralizeFunctions = ["RTCPeerConnection"];
  //   nuetralizeFunctions.forEach(function(fname) {
  //     Object.defineProperty(Object.getPrototypeOf(window), fname, obj);
  //   });
  // })
}

//TODO: Intercept all cookies and not allowing setting any cookie for more than 6 hours