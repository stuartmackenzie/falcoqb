// ==UserScript==
// @name         FalcoQB AMD
// @author       stuymack#9033
// @namespace    falcoqb.com
// @version      1.0.0
// @description  FalcoQB AMD webstore helper
// @match        https://www.amd.com/*
// @connect      www.amd.com
// @connect      data.falcoqueue.com
// @resource     IMPORTED_CSS https://falcoqb.com/dist/d9df9734-bdb7-4d94-9cbe-e9acccae7922/style.css
// @require      https://code.jquery.com/jquery-3.6.0.min.js
// @require      https://falcoqb.com/dist/d9df9734-bdb7-4d94-9cbe-e9acccae7922/falcoqb.amd.js
// @grant        GM_getResourceText
// @grant        GM_addStyle
// @grant        GM_setValue
// @grant        GM_deleteValue
// @grant        GM_getValue
// @grant        GM_xmlhttpRequest
// @grant        GM_addValueChangeListener
// ==/UserScript==

(function () {
  "use strict";
  const my_css = GM_getResourceText("IMPORTED_CSS");
  GM_addStyle(my_css);
  if (typeof fqb !== "undefined") fqb.start();
})();
