/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/App.js":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthContext": function() { return /* binding */ AuthContext; }
/* harmony export */ });
/* harmony import */ var C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./node_modules/react-router/dist/index.js");
/* harmony import */ var _components_Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/components/Home.js");
/* harmony import */ var _components_Login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/components/Login.js");
/* harmony import */ var _components_Download__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/components/Download.js");
/* harmony import */ var _store_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/store/reducer/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
var AuthContext=/*#__PURE__*/(0, react__WEBPACK_IMPORTED_MODULE_1__.createContext)();function App(){var _useReducer=(0, react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(_store_reducer__WEBPACK_IMPORTED_MODULE_5__.reducer,_store_reducer__WEBPACK_IMPORTED_MODULE_5__.initialState),_useReducer2=(0, C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_useReducer,2),state=_useReducer2[0],dispatch=_useReducer2[1];return/*#__PURE__*/(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(AuthContext.Provider,{value:{state:state,dispatch:dispatch},children:/*#__PURE__*/(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.BrowserRouter,{children:/*#__PURE__*/(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Routes,{children:[/*#__PURE__*/(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route,{path:"*",element:/*#__PURE__*/(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Navigate,{to:"/"})}),/*#__PURE__*/(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route,{path:"/",element:/*#__PURE__*/(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_Home__WEBPACK_IMPORTED_MODULE_2__["default"],{})}),/*#__PURE__*/(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route,{path:"/login",element:/*#__PURE__*/(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_Login__WEBPACK_IMPORTED_MODULE_3__["default"],{})}),/*#__PURE__*/(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route,{path:"/download",element:/*#__PURE__*/(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_Download__WEBPACK_IMPORTED_MODULE_4__["default"],{})})]})})});}/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/components/Download.js":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Download; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/App.js");
/* harmony import */ var react_use_websocket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react-use-websocket/dist/index.js");
/* harmony import */ var _helpers_utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/helpers/utilities.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
var activities=[];function Download(){var _useContext=(0, react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_App__WEBPACK_IMPORTED_MODULE_1__.AuthContext);_useContext.state;_useContext.dispatch;var _useWebSocket=(0, react_use_websocket__WEBPACK_IMPORTED_MODULE_2__["default"])((0, _helpers_utilities__WEBPACK_IMPORTED_MODULE_3__.wssUrl)(),{onOpen:function onOpen(){console.log('WebSocket connection established.');},share:true,filter:function filter(){return true;}}),lastMessage=_useWebSocket.lastMessage;activities.push(lastMessage===null||lastMessage===void 0?void 0:lastMessage.data);return/*#__PURE__*/(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("ul",{children:activities.map(function(activity,index){return/*#__PURE__*/(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("li",{children:activity},"activity-".concat(index));})});}

/***/ }),

/***/ "./src/components/Home.js":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/react-router/dist/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/App.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
var _templateObject;function Home(){var _useContext=(0, react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_App__WEBPACK_IMPORTED_MODULE_2__.AuthContext),state=_useContext.state,dispatch=_useContext.dispatch;var navigate=(0, react_router_dom__WEBPACK_IMPORTED_MODULE_4__.useNavigate)();if(!state.isLoggedIn){return/*#__PURE__*/(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Navigate,{to:"/login"});}var _state$user=state.user,AvatarUrl=_state$user.AvatarUrl,Name=_state$user.Name,PublicRepos=_state$user.PublicRepos,Followers=_state$user.Followers,Following=_state$user.Following;var handleLogout=function handleLogout(){fetch("/api/signout",{method:"GET",headers:{'Content-Type':'application/json'}}).then(function(_){dispatch({type:"LOGOUT"});}).catch(function(error){dispatch({type:"LOGOUT"});});};return/*#__PURE__*/(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Wrapper,{children:/*#__PURE__*/(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:"container",children:[/*#__PURE__*/(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{onClick:function onClick(){return handleLogout();},children:"Logout"}),/*#__PURE__*/(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{children:/*#__PURE__*/(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:"content",children:[/*#__PURE__*/(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img",{src:AvatarUrl,alt:"Avatar"}),/*#__PURE__*/(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{children:Name}),/*#__PURE__*/(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span",{children:[PublicRepos," Repos"]}),/*#__PURE__*/(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span",{children:[Followers," Followers"]}),/*#__PURE__*/(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span",{children:[Following," Following"]}),state.user.Contributor&&/*#__PURE__*/(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{children:"Contributor to wfrp4core-pl"}),state.user.Contributor&&/*#__PURE__*/(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{children:/*#__PURE__*/(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{onClick:function onClick(){return navigate("/download");},children:"Download Translation"})}),!state.user.Contributor&&/*#__PURE__*/(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{children:"Limited Access - you are not contributor to wfrp4core-pl"})]})})]})});}var Wrapper=styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].section(_templateObject||(_templateObject=(0, C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n.container{\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n  font-family: Arial;\n\n  button{\n    all: unset;\n    width: 100px;\n    height: 35px;\n    margin: 10px 10px 0 0;\n    align-self: flex-end;\n    background-color: #0041C2;\n    color: #fff;\n    text-align: center;\n    border-radius: 3px;\n    border: 1px solid #0041C2;\n\n    &:hover{\n      background-color: #fff;\n      color: #0041C2;\n    }\n  }\n\n  >div{\n    height: 100%;\n    width: 100%;\n    display: flex;\n    font-size: 18px;\n    justify-content: center;\n    align-items: center;\n\n    .content{\n      display: flex;\n      flex-direction: column;\n      padding: 20px 100px;    \n      box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2);\n      width: auto;\n  \n      img{\n        height: 150px;\n        width: 150px;\n        border-radius: 50%;\n      }\n  \n      >span:nth-child(2){\n        margin-top: 20px;\n        font-weight: bold;\n      }\n  \n      >span:not(:nth-child(2)){\n        margin-top: 8px;\n        font-size: 14px;\n      }\n  \n    }\n\n  }\n}\n"])));

/***/ }),

/***/ "./src/components/Login.js":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Login; }
/* harmony export */ });
/* harmony import */ var C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/react-router/dist/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var mdi_react_GithubIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/mdi-react/GithubIcon.js");
/* harmony import */ var mdi_react_GithubIcon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mdi_react_GithubIcon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/App.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
var _templateObject;function Login(){var _useContext=(0, react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_App__WEBPACK_IMPORTED_MODULE_4__.AuthContext),state=_useContext.state,dispatch=_useContext.dispatch;var _useState=(0, react__WEBPACK_IMPORTED_MODULE_2__.useState)({errorMessage:"",isLoading:false}),_useState2=(0, C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState,2),data=_useState2[0],setData=_useState2[1];(0, react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function(){var match=document.cookie.match(new RegExp('(^| )IsAuthenticated=([^;]+)'));if(match&&match[2]==="true"){fetch("/api/profile",{method:"GET",headers:{'Content-Type':'application/json'}}).then(function(response){return response.json();}).then(function(data){dispatch({type:"LOGIN",payload:{user:data,isLoggedIn:true}});}).catch(function(error){setData({isLoading:false,errorMessage:"Sorry! Login failed"});});}},[state,dispatch,data]);if(state.isLoggedIn){return/*#__PURE__*/(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Navigate,{to:"/"});}return/*#__PURE__*/(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Wrapper,{children:/*#__PURE__*/(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("section",{className:"container",children:/*#__PURE__*/(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{children:[/*#__PURE__*/(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h1",{children:"Welcome"}),/*#__PURE__*/(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span",{children:"Super amazing app"}),/*#__PURE__*/(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span",{children:data.errorMessage}),/*#__PURE__*/(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{className:"login-container",children:data.isLoading?/*#__PURE__*/(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{className:"loader-container",children:/*#__PURE__*/(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{className:"loader"})}):/*#__PURE__*/(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment,{children:/*#__PURE__*/(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("a",{className:"login-link",href:"/api/signin",children:[/*#__PURE__*/(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)((mdi_react_GithubIcon__WEBPACK_IMPORTED_MODULE_3___default()),{}),/*#__PURE__*/(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span",{children:"Login with GitHub"})]})})})]})})});}var Wrapper=styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].section(_templateObject||(_templateObject=(0, C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  .container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100vh;\n    font-family: Arial;\n    \n\n    > div:nth-child(1) {\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      align-items: center;\n      box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2);\n      transition: 0.3s;\n      width: 25%;\n      height: 45%;\n\n      > h1 {\n        font-size: 2rem;\n        margin-bottom: 20px;\n      }\n\n      > span:nth-child(2) {\n        font-size: 1.1rem;\n        color: #808080;\n        margin-bottom: 70px;\n      }\n\n      > span:nth-child(3) {\n        margin: 10px 0 20px;\n        color: red;\n      }\n\n      .login-container {\n        background-color: #000;\n        width: 70%;\n        border-radius: 3px;\n        color: #fff;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n\n        > .login-link {\n          text-decoration: none;\n          color: #fff;\n          text-transform: uppercase;\n          cursor: default;\n          display: flex;\n          align-items: center;          \n          height: 40px;\n\n          > span:nth-child(2) {\n            margin-left: 5px;\n          }\n        }\n\n        .loader-container {\n          display: flex;\n          justify-content: center;\n          align-items: center;          \n          height: 40px;\n        }\n\n        .loader {\n          border: 4px solid #f3f3f3;\n          border-top: 4px solid #3498db;\n          border-radius: 50%;\n          width: 12px;\n          height: 12px;\n          animation: spin 2s linear infinite;\n        }\n\n        @keyframes spin {\n          0% {\n            transform: rotate(0deg);\n          }\n          100% {\n            transform: rotate(360deg);\n          }\n        }\n      }\n    }\n  }\n"])));

/***/ }),

/***/ "./src/helpers/utilities.js":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "wssUrl": function() { return /* binding */ wssUrl; }
/* harmony export */ });
var wssUrl=function wssUrl(){var url="wss://"+window.location.host+"/api/ws";return url;};

/***/ }),

/***/ "./src/store/reducer/index.js":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialState": function() { return /* binding */ initialState; },
/* harmony export */   "reducer": function() { return /* binding */ reducer; }
/* harmony export */ });
/* harmony import */ var C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
var initialState={isLoggedIn:JSON.parse(sessionStorage.getItem("isLoggedIn"))||false,user:JSON.parse(sessionStorage.getItem("user"))||null};var reducer=function reducer(state,action){switch(action.type){case"LOGIN":{sessionStorage.setItem("isLoggedIn",JSON.stringify(action.payload.isLoggedIn));sessionStorage.setItem("user",JSON.stringify(action.payload.user));return (0, C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])((0, C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])({},state),{},{isLoggedIn:action.payload.isLoggedIn,user:action.payload.user});}case"LOGOUT":{sessionStorage.clear();return (0, C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])((0, C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])({},state),{},{isLoggedIn:false,user:null});}default:return state;}};

/***/ }),

/***/ "./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_memoize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@emotion/memoize/dist/memoize.browser.esm.js");

var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var index = (0, _emotion_memoize__WEBPACK_IMPORTED_MODULE_0__["default"])(function (prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
  /* o */ && prop.charCodeAt(1) === 110
  /* n */ && prop.charCodeAt(2) < 91;
}
/* Z+1 */);

/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ }),

/***/ "./node_modules/@emotion/memoize/dist/memoize.browser.esm.js":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
function memoize(fn) {
  var cache = {};
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}
/* harmony default export */ __webpack_exports__["default"] = (memoize);

/***/ }),

/***/ "./node_modules/@emotion/stylis/dist/stylis.browser.esm.js":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
function stylis_min(W) {
  function M(d, c, e, h, a) {
    for (var m = 0, b = 0, v = 0, n = 0, q, g, x = 0, K = 0, k, u = k = q = 0, l = 0, r = 0, I = 0, t = 0, B = e.length, J = B - 1, y, f = '', p = '', F = '', G = '', C; l < B;) {
      g = e.charCodeAt(l);
      l === J && 0 !== b + n + v + m && (0 !== b && (g = 47 === b ? 10 : 47), n = v = m = 0, B++, J++);
      if (0 === b + n + v + m) {
        if (l === J && (0 < r && (f = f.replace(N, '')), 0 < f.trim().length)) {
          switch (g) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              f += e.charAt(l);
          }
          g = 59;
        }
        switch (g) {
          case 123:
            f = f.trim();
            q = f.charCodeAt(0);
            k = 1;
            for (t = ++l; l < B;) {
              switch (g = e.charCodeAt(l)) {
                case 123:
                  k++;
                  break;
                case 125:
                  k--;
                  break;
                case 47:
                  switch (g = e.charCodeAt(l + 1)) {
                    case 42:
                    case 47:
                      a: {
                        for (u = l + 1; u < J; ++u) {
                          switch (e.charCodeAt(u)) {
                            case 47:
                              if (42 === g && 42 === e.charCodeAt(u - 1) && l + 2 !== u) {
                                l = u + 1;
                                break a;
                              }
                              break;
                            case 10:
                              if (47 === g) {
                                l = u + 1;
                                break a;
                              }
                          }
                        }
                        l = u;
                      }
                  }
                  break;
                case 91:
                  g++;
                case 40:
                  g++;
                case 34:
                case 39:
                  for (; l++ < J && e.charCodeAt(l) !== g;) {}
              }
              if (0 === k) break;
              l++;
            }
            k = e.substring(t, l);
            0 === q && (q = (f = f.replace(ca, '').trim()).charCodeAt(0));
            switch (q) {
              case 64:
                0 < r && (f = f.replace(N, ''));
                g = f.charCodeAt(1);
                switch (g) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    r = c;
                    break;
                  default:
                    r = O;
                }
                k = M(c, r, k, g, a + 1);
                t = k.length;
                0 < A && (r = X(O, f, I), C = H(3, k, r, c, D, z, t, g, a, h), f = r.join(''), void 0 !== C && 0 === (t = (k = C.trim()).length) && (g = 0, k = ''));
                if (0 < t) switch (g) {
                  case 115:
                    f = f.replace(da, ea);
                  case 100:
                  case 109:
                  case 45:
                    k = f + '{' + k + '}';
                    break;
                  case 107:
                    f = f.replace(fa, '$1 $2');
                    k = f + '{' + k + '}';
                    k = 1 === w || 2 === w && L('@' + k, 3) ? '@-webkit-' + k + '@' + k : '@' + k;
                    break;
                  default:
                    k = f + k, 112 === h && (k = (p += k, ''));
                } else k = '';
                break;
              default:
                k = M(c, X(c, f, I), k, h, a + 1);
            }
            F += k;
            k = I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
            break;
          case 125:
          case 59:
            f = (0 < r ? f.replace(N, '') : f).trim();
            if (1 < (t = f.length)) switch (0 === u && (q = f.charCodeAt(0), 45 === q || 96 < q && 123 > q) && (t = (f = f.replace(' ', ':')).length), 0 < A && void 0 !== (C = H(1, f, c, d, D, z, p.length, h, a, h)) && 0 === (t = (f = C.trim()).length) && (f = '\x00\x00'), q = f.charCodeAt(0), g = f.charCodeAt(1), q) {
              case 0:
                break;
              case 64:
                if (105 === g || 99 === g) {
                  G += f + e.charAt(l);
                  break;
                }
              default:
                58 !== f.charCodeAt(t - 1) && (p += P(f, q, g, f.charCodeAt(2)));
            }
            I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
        }
      }
      switch (g) {
        case 13:
        case 10:
          47 === b ? b = 0 : 0 === 1 + q && 107 !== h && 0 < f.length && (r = 1, f += '\x00');
          0 < A * Y && H(0, f, c, d, D, z, p.length, h, a, h);
          z = 1;
          D++;
          break;
        case 59:
        case 125:
          if (0 === b + n + v + m) {
            z++;
            break;
          }
        default:
          z++;
          y = e.charAt(l);
          switch (g) {
            case 9:
            case 32:
              if (0 === n + m + b) switch (x) {
                case 44:
                case 58:
                case 9:
                case 32:
                  y = '';
                  break;
                default:
                  32 !== g && (y = ' ');
              }
              break;
            case 0:
              y = '\\0';
              break;
            case 12:
              y = '\\f';
              break;
            case 11:
              y = '\\v';
              break;
            case 38:
              0 === n + b + m && (r = I = 1, y = '\f' + y);
              break;
            case 108:
              if (0 === n + b + m + E && 0 < u) switch (l - u) {
                case 2:
                  112 === x && 58 === e.charCodeAt(l - 3) && (E = x);
                case 8:
                  111 === K && (E = K);
              }
              break;
            case 58:
              0 === n + b + m && (u = l);
              break;
            case 44:
              0 === b + v + n + m && (r = 1, y += '\r');
              break;
            case 34:
            case 39:
              0 === b && (n = n === g ? 0 : 0 === n ? g : n);
              break;
            case 91:
              0 === n + b + v && m++;
              break;
            case 93:
              0 === n + b + v && m--;
              break;
            case 41:
              0 === n + b + m && v--;
              break;
            case 40:
              if (0 === n + b + m) {
                if (0 === q) switch (2 * x + 3 * K) {
                  case 533:
                    break;
                  default:
                    q = 1;
                }
                v++;
              }
              break;
            case 64:
              0 === b + v + n + m + u + k && (k = 1);
              break;
            case 42:
            case 47:
              if (!(0 < n + m + v)) switch (b) {
                case 0:
                  switch (2 * g + 3 * e.charCodeAt(l + 1)) {
                    case 235:
                      b = 47;
                      break;
                    case 220:
                      t = l, b = 42;
                  }
                  break;
                case 42:
                  47 === g && 42 === x && t + 2 !== l && (33 === e.charCodeAt(t + 2) && (p += e.substring(t, l + 1)), y = '', b = 0);
              }
          }
          0 === b && (f += y);
      }
      K = x;
      x = g;
      l++;
    }
    t = p.length;
    if (0 < t) {
      r = c;
      if (0 < A && (C = H(2, p, r, d, D, z, t, h, a, h), void 0 !== C && 0 === (p = C).length)) return G + p + F;
      p = r.join(',') + '{' + p + '}';
      if (0 !== w * E) {
        2 !== w || L(p, 2) || (E = 0);
        switch (E) {
          case 111:
            p = p.replace(ha, ':-moz-$1') + p;
            break;
          case 112:
            p = p.replace(Q, '::-webkit-input-$1') + p.replace(Q, '::-moz-$1') + p.replace(Q, ':-ms-input-$1') + p;
        }
        E = 0;
      }
    }
    return G + p + F;
  }
  function X(d, c, e) {
    var h = c.trim().split(ia);
    c = h;
    var a = h.length,
      m = d.length;
    switch (m) {
      case 0:
      case 1:
        var b = 0;
        for (d = 0 === m ? '' : d[0] + ' '; b < a; ++b) {
          c[b] = Z(d, c[b], e).trim();
        }
        break;
      default:
        var v = b = 0;
        for (c = []; b < a; ++b) {
          for (var n = 0; n < m; ++n) {
            c[v++] = Z(d[n] + ' ', h[b], e).trim();
          }
        }
    }
    return c;
  }
  function Z(d, c, e) {
    var h = c.charCodeAt(0);
    33 > h && (h = (c = c.trim()).charCodeAt(0));
    switch (h) {
      case 38:
        return c.replace(F, '$1' + d.trim());
      case 58:
        return d.trim() + c.replace(F, '$1' + d.trim());
      default:
        if (0 < 1 * e && 0 < c.indexOf('\f')) return c.replace(F, (58 === d.charCodeAt(0) ? '' : '$1') + d.trim());
    }
    return d + c;
  }
  function P(d, c, e, h) {
    var a = d + ';',
      m = 2 * c + 3 * e + 4 * h;
    if (944 === m) {
      d = a.indexOf(':', 9) + 1;
      var b = a.substring(d, a.length - 1).trim();
      b = a.substring(0, d).trim() + b + ';';
      return 1 === w || 2 === w && L(b, 1) ? '-webkit-' + b + b : b;
    }
    if (0 === w || 2 === w && !L(a, 1)) return a;
    switch (m) {
      case 1015:
        return 97 === a.charCodeAt(10) ? '-webkit-' + a + a : a;
      case 951:
        return 116 === a.charCodeAt(3) ? '-webkit-' + a + a : a;
      case 963:
        return 110 === a.charCodeAt(5) ? '-webkit-' + a + a : a;
      case 1009:
        if (100 !== a.charCodeAt(4)) break;
      case 969:
      case 942:
        return '-webkit-' + a + a;
      case 978:
        return '-webkit-' + a + '-moz-' + a + a;
      case 1019:
      case 983:
        return '-webkit-' + a + '-moz-' + a + '-ms-' + a + a;
      case 883:
        if (45 === a.charCodeAt(8)) return '-webkit-' + a + a;
        if (0 < a.indexOf('image-set(', 11)) return a.replace(ja, '$1-webkit-$2') + a;
        break;
      case 932:
        if (45 === a.charCodeAt(4)) switch (a.charCodeAt(5)) {
          case 103:
            return '-webkit-box-' + a.replace('-grow', '') + '-webkit-' + a + '-ms-' + a.replace('grow', 'positive') + a;
          case 115:
            return '-webkit-' + a + '-ms-' + a.replace('shrink', 'negative') + a;
          case 98:
            return '-webkit-' + a + '-ms-' + a.replace('basis', 'preferred-size') + a;
        }
        return '-webkit-' + a + '-ms-' + a + a;
      case 964:
        return '-webkit-' + a + '-ms-flex-' + a + a;
      case 1023:
        if (99 !== a.charCodeAt(8)) break;
        b = a.substring(a.indexOf(':', 15)).replace('flex-', '').replace('space-between', 'justify');
        return '-webkit-box-pack' + b + '-webkit-' + a + '-ms-flex-pack' + b + a;
      case 1005:
        return ka.test(a) ? a.replace(aa, ':-webkit-') + a.replace(aa, ':-moz-') + a : a;
      case 1e3:
        b = a.substring(13).trim();
        c = b.indexOf('-') + 1;
        switch (b.charCodeAt(0) + b.charCodeAt(c)) {
          case 226:
            b = a.replace(G, 'tb');
            break;
          case 232:
            b = a.replace(G, 'tb-rl');
            break;
          case 220:
            b = a.replace(G, 'lr');
            break;
          default:
            return a;
        }
        return '-webkit-' + a + '-ms-' + b + a;
      case 1017:
        if (-1 === a.indexOf('sticky', 9)) break;
      case 975:
        c = (a = d).length - 10;
        b = (33 === a.charCodeAt(c) ? a.substring(0, c) : a).substring(d.indexOf(':', 7) + 1).trim();
        switch (m = b.charCodeAt(0) + (b.charCodeAt(7) | 0)) {
          case 203:
            if (111 > b.charCodeAt(8)) break;
          case 115:
            a = a.replace(b, '-webkit-' + b) + ';' + a;
            break;
          case 207:
          case 102:
            a = a.replace(b, '-webkit-' + (102 < m ? 'inline-' : '') + 'box') + ';' + a.replace(b, '-webkit-' + b) + ';' + a.replace(b, '-ms-' + b + 'box') + ';' + a;
        }
        return a + ';';
      case 938:
        if (45 === a.charCodeAt(5)) switch (a.charCodeAt(6)) {
          case 105:
            return b = a.replace('-items', ''), '-webkit-' + a + '-webkit-box-' + b + '-ms-flex-' + b + a;
          case 115:
            return '-webkit-' + a + '-ms-flex-item-' + a.replace(ba, '') + a;
          default:
            return '-webkit-' + a + '-ms-flex-line-pack' + a.replace('align-content', '').replace(ba, '') + a;
        }
        break;
      case 973:
      case 989:
        if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4)) break;
      case 931:
      case 953:
        if (!0 === la.test(d)) return 115 === (b = d.substring(d.indexOf(':') + 1)).charCodeAt(0) ? P(d.replace('stretch', 'fill-available'), c, e, h).replace(':fill-available', ':stretch') : a.replace(b, '-webkit-' + b) + a.replace(b, '-moz-' + b.replace('fill-', '')) + a;
        break;
      case 962:
        if (a = '-webkit-' + a + (102 === a.charCodeAt(5) ? '-ms-' + a : '') + a, 211 === e + h && 105 === a.charCodeAt(13) && 0 < a.indexOf('transform', 10)) return a.substring(0, a.indexOf(';', 27) + 1).replace(ma, '$1-webkit-$2') + a;
    }
    return a;
  }
  function L(d, c) {
    var e = d.indexOf(1 === c ? ':' : '{'),
      h = d.substring(0, 3 !== c ? e : 10);
    e = d.substring(e + 1, d.length - 1);
    return R(2 !== c ? h : h.replace(na, '$1'), e, c);
  }
  function ea(d, c) {
    var e = P(c, c.charCodeAt(0), c.charCodeAt(1), c.charCodeAt(2));
    return e !== c + ';' ? e.replace(oa, ' or ($1)').substring(4) : '(' + c + ')';
  }
  function H(d, c, e, h, a, m, b, v, n, q) {
    for (var g = 0, x = c, w; g < A; ++g) {
      switch (w = S[g].call(B, d, x, e, h, a, m, b, v, n, q)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          x = w;
      }
    }
    if (x !== c) return x;
  }
  function T(d) {
    switch (d) {
      case void 0:
      case null:
        A = S.length = 0;
        break;
      default:
        if ('function' === typeof d) S[A++] = d;else if ('object' === typeof d) for (var c = 0, e = d.length; c < e; ++c) {
          T(d[c]);
        } else Y = !!d | 0;
    }
    return T;
  }
  function U(d) {
    d = d.prefix;
    void 0 !== d && (R = null, d ? 'function' !== typeof d ? w = 1 : (w = 2, R = d) : w = 0);
    return U;
  }
  function B(d, c) {
    var e = d;
    33 > e.charCodeAt(0) && (e = e.trim());
    V = e;
    e = [V];
    if (0 < A) {
      var h = H(-1, c, e, e, D, z, 0, 0, 0, 0);
      void 0 !== h && 'string' === typeof h && (c = h);
    }
    var a = M(O, e, c, 0, 0);
    0 < A && (h = H(-2, a, e, e, D, z, a.length, 0, 0, 0), void 0 !== h && (a = h));
    V = '';
    E = 0;
    z = D = 1;
    return a;
  }
  var ca = /^\0+/g,
    N = /[\0\r\f]/g,
    aa = /: */g,
    ka = /zoo|gra/,
    ma = /([,: ])(transform)/g,
    ia = /,\r+?/g,
    F = /([\t\r\n ])*\f?&/g,
    fa = /@(k\w+)\s*(\S*)\s*/,
    Q = /::(place)/g,
    ha = /:(read-only)/g,
    G = /[svh]\w+-[tblr]{2}/,
    da = /\(\s*(.*)\s*\)/g,
    oa = /([\s\S]*?);/g,
    ba = /-self|flex-/g,
    na = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
    la = /stretch|:\s*\w+\-(?:conte|avail)/,
    ja = /([^-])(image-set\()/,
    z = 1,
    D = 1,
    E = 0,
    w = 1,
    O = [],
    S = [],
    A = 0,
    R = null,
    Y = 0,
    V = '';
  B.use = T;
  B.set = U;
  void 0 !== W && U(W);
  return B;
}
/* harmony default export */ __webpack_exports__["default"] = (stylis_min);

/***/ }),

/***/ "./node_modules/@emotion/unitless/dist/unitless.browser.esm.js":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};
/* harmony default export */ __webpack_exports__["default"] = (unitlessKeys);

/***/ }),

/***/ "./node_modules/@remix-run/router/dist/router.js":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AbortedDeferredError": function() { return /* binding */ AbortedDeferredError; },
/* harmony export */   "Action": function() { return /* binding */ Action; },
/* harmony export */   "ErrorResponse": function() { return /* binding */ ErrorResponse; },
/* harmony export */   "IDLE_BLOCKER": function() { return /* binding */ IDLE_BLOCKER; },
/* harmony export */   "IDLE_FETCHER": function() { return /* binding */ IDLE_FETCHER; },
/* harmony export */   "IDLE_NAVIGATION": function() { return /* binding */ IDLE_NAVIGATION; },
/* harmony export */   "UNSAFE_DEFERRED_SYMBOL": function() { return /* binding */ UNSAFE_DEFERRED_SYMBOL; },
/* harmony export */   "UNSAFE_DeferredData": function() { return /* binding */ DeferredData; },
/* harmony export */   "UNSAFE_convertRoutesToDataRoutes": function() { return /* binding */ convertRoutesToDataRoutes; },
/* harmony export */   "UNSAFE_getPathContributingMatches": function() { return /* binding */ getPathContributingMatches; },
/* harmony export */   "createBrowserHistory": function() { return /* binding */ createBrowserHistory; },
/* harmony export */   "createHashHistory": function() { return /* binding */ createHashHistory; },
/* harmony export */   "createMemoryHistory": function() { return /* binding */ createMemoryHistory; },
/* harmony export */   "createPath": function() { return /* binding */ createPath; },
/* harmony export */   "createRouter": function() { return /* binding */ createRouter; },
/* harmony export */   "createStaticHandler": function() { return /* binding */ createStaticHandler; },
/* harmony export */   "defer": function() { return /* binding */ defer; },
/* harmony export */   "generatePath": function() { return /* binding */ generatePath; },
/* harmony export */   "getStaticContextFromError": function() { return /* binding */ getStaticContextFromError; },
/* harmony export */   "getToPathname": function() { return /* binding */ getToPathname; },
/* harmony export */   "invariant": function() { return /* binding */ invariant; },
/* harmony export */   "isRouteErrorResponse": function() { return /* binding */ isRouteErrorResponse; },
/* harmony export */   "joinPaths": function() { return /* binding */ joinPaths; },
/* harmony export */   "json": function() { return /* binding */ json; },
/* harmony export */   "matchPath": function() { return /* binding */ matchPath; },
/* harmony export */   "matchRoutes": function() { return /* binding */ matchRoutes; },
/* harmony export */   "normalizePathname": function() { return /* binding */ normalizePathname; },
/* harmony export */   "parsePath": function() { return /* binding */ parsePath; },
/* harmony export */   "redirect": function() { return /* binding */ redirect; },
/* harmony export */   "resolvePath": function() { return /* binding */ resolvePath; },
/* harmony export */   "resolveTo": function() { return /* binding */ resolveTo; },
/* harmony export */   "stripBasename": function() { return /* binding */ stripBasename; },
/* harmony export */   "warning": function() { return /* binding */ warning; }
/* harmony export */ });
/* harmony import */ var C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_wrapNativeSuper_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/wrapNativeSuper.js");
/* harmony import */ var C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_toArray_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/toArray.js");
/* harmony import */ var C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js");
/* harmony import */ var C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");












/**
 * @remix-run/router v1.3.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

////////////////////////////////////////////////////////////////////////////////
//#region Types and Constants
////////////////////////////////////////////////////////////////////////////////

/**
 * Actions represent the type of change to a location value.
 */
var Action;
(function (Action) {
  /**
   * A POP indicates a change to an arbitrary index in the history stack, such
   * as a back or forward navigation. It does not describe the direction of the
   * navigation, only that the current index changed.
   *
   * Note: This is the default action for newly created history objects.
   */
  Action["Pop"] = "POP";
  /**
   * A PUSH indicates a new entry being added to the history stack, such as when
   * a link is clicked and a new page loads. When this happens, all subsequent
   * entries in the stack are lost.
   */

  Action["Push"] = "PUSH";
  /**
   * A REPLACE indicates the entry at the current index in the history stack
   * being replaced by a new one.
   */

  Action["Replace"] = "REPLACE";
})(Action || (Action = {}));
var PopStateEventType = "popstate";
/**
 * Memory history stores the current location in memory. It is designed for use
 * in stateful non-browser environments like tests and React Native.
 */

function createMemoryHistory(options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options,
    _options$initialEntri = _options.initialEntries,
    initialEntries = _options$initialEntri === void 0 ? ["/"] : _options$initialEntri,
    initialIndex = _options.initialIndex,
    _options$v5Compat = _options.v5Compat,
    v5Compat = _options$v5Compat === void 0 ? false : _options$v5Compat;
  var entries; // Declare so we can access from createMemoryLocation

  entries = initialEntries.map(function (entry, index) {
    return createMemoryLocation(entry, typeof entry === "string" ? null : entry.state, index === 0 ? "default" : undefined);
  });
  var index = clampIndex(initialIndex == null ? entries.length - 1 : initialIndex);
  var action = Action.Pop;
  var listener = null;
  function clampIndex(n) {
    return Math.min(Math.max(n, 0), entries.length - 1);
  }
  function getCurrentLocation() {
    return entries[index];
  }
  function createMemoryLocation(to, state, key) {
    if (state === void 0) {
      state = null;
    }
    var location = createLocation(entries ? getCurrentLocation().pathname : "/", to, state, key);
    warning$1(location.pathname.charAt(0) === "/", "relative pathnames are not supported in memory history: " + JSON.stringify(to));
    return location;
  }
  function createHref(to) {
    return typeof to === "string" ? to : createPath(to);
  }
  var history = {
    get index() {
      return index;
    },
    get action() {
      return action;
    },
    get location() {
      return getCurrentLocation();
    },
    createHref: createHref,
    createURL: function createURL(to) {
      return new URL(createHref(to), "http://localhost");
    },
    encodeLocation: function encodeLocation(to) {
      var path = typeof to === "string" ? parsePath(to) : to;
      return {
        pathname: path.pathname || "",
        search: path.search || "",
        hash: path.hash || ""
      };
    },
    push: function push(to, state) {
      action = Action.Push;
      var nextLocation = createMemoryLocation(to, state);
      index += 1;
      entries.splice(index, entries.length, nextLocation);
      if (v5Compat && listener) {
        listener({
          action: action,
          location: nextLocation,
          delta: 1
        });
      }
    },
    replace: function replace(to, state) {
      action = Action.Replace;
      var nextLocation = createMemoryLocation(to, state);
      entries[index] = nextLocation;
      if (v5Compat && listener) {
        listener({
          action: action,
          location: nextLocation,
          delta: 0
        });
      }
    },
    go: function go(delta) {
      action = Action.Pop;
      var nextIndex = clampIndex(index + delta);
      var nextLocation = entries[nextIndex];
      index = nextIndex;
      if (listener) {
        listener({
          action: action,
          location: nextLocation,
          delta: delta
        });
      }
    },
    listen: function listen(fn) {
      listener = fn;
      return function () {
        listener = null;
      };
    }
  };
  return history;
}
/**
 * Browser history stores the location in regular URLs. This is the standard for
 * most web apps, but it requires some configuration on the server to ensure you
 * serve the same app at multiple URLs.
 *
 * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#createbrowserhistory
 */

function createBrowserHistory(options) {
  if (options === void 0) {
    options = {};
  }
  function createBrowserLocation(window, globalHistory) {
    var _window$location = window.location,
      pathname = _window$location.pathname,
      search = _window$location.search,
      hash = _window$location.hash;
    return createLocation("", {
      pathname: pathname,
      search: search,
      hash: hash
    },
    // state defaults to `null` because `window.history.state` does
    globalHistory.state && globalHistory.state.usr || null, globalHistory.state && globalHistory.state.key || "default");
  }
  function createBrowserHref(window, to) {
    return typeof to === "string" ? to : createPath(to);
  }
  return getUrlBasedHistory(createBrowserLocation, createBrowserHref, null, options);
}
/**
 * Hash history stores the location in window.location.hash. This makes it ideal
 * for situations where you don't want to send the location to the server for
 * some reason, either because you do cannot configure it or the URL space is
 * reserved for something else.
 *
 * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#createhashhistory
 */

function createHashHistory(options) {
  if (options === void 0) {
    options = {};
  }
  function createHashLocation(window, globalHistory) {
    var _parsePath = parsePath(window.location.hash.substr(1)),
      _parsePath$pathname = _parsePath.pathname,
      pathname = _parsePath$pathname === void 0 ? "/" : _parsePath$pathname,
      _parsePath$search = _parsePath.search,
      search = _parsePath$search === void 0 ? "" : _parsePath$search,
      _parsePath$hash = _parsePath.hash,
      hash = _parsePath$hash === void 0 ? "" : _parsePath$hash;
    return createLocation("", {
      pathname: pathname,
      search: search,
      hash: hash
    },
    // state defaults to `null` because `window.history.state` does
    globalHistory.state && globalHistory.state.usr || null, globalHistory.state && globalHistory.state.key || "default");
  }
  function createHashHref(window, to) {
    var base = window.document.querySelector("base");
    var href = "";
    if (base && base.getAttribute("href")) {
      var url = window.location.href;
      var hashIndex = url.indexOf("#");
      href = hashIndex === -1 ? url : url.slice(0, hashIndex);
    }
    return href + "#" + (typeof to === "string" ? to : createPath(to));
  }
  function validateHashLocation(location, to) {
    warning$1(location.pathname.charAt(0) === "/", "relative pathnames are not supported in hash history.push(" + JSON.stringify(to) + ")");
  }
  return getUrlBasedHistory(createHashLocation, createHashHref, validateHashLocation, options);
}
function invariant(value, message) {
  if (value === false || value === null || typeof value === "undefined") {
    throw new Error(message);
  }
}
function warning$1(cond, message) {
  if (!cond) {
    // eslint-disable-next-line no-console
    if (typeof console !== "undefined") console.warn(message);
    try {
      // Welcome to debugging history!
      //
      // This error is thrown as a convenience so you can more easily
      // find the source for a warning that appears in the console by
      // enabling "pause on exceptions" in your JavaScript debugger.
      throw new Error(message); // eslint-disable-next-line no-empty
    } catch (e) {}
  }
}
function createKey() {
  return Math.random().toString(36).substr(2, 8);
}
/**
 * For browser-based histories, we combine the state and key into an object
 */

function getHistoryState(location, index) {
  return {
    usr: location.state,
    key: location.key,
    idx: index
  };
}
/**
 * Creates a Location object with a unique key from the given Path
 */

function createLocation(current, to, state, key) {
  if (state === void 0) {
    state = null;
  }
  var location = _extends({
    pathname: typeof current === "string" ? current : current.pathname,
    search: "",
    hash: ""
  }, typeof to === "string" ? parsePath(to) : to, {
    state: state,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: to && to.key || key || createKey()
  });
  return location;
}
/**
 * Creates a string URL path from the given pathname, search, and hash components.
 */

function createPath(_ref) {
  var _ref$pathname = _ref.pathname,
    pathname = _ref$pathname === void 0 ? "/" : _ref$pathname,
    _ref$search = _ref.search,
    search = _ref$search === void 0 ? "" : _ref$search,
    _ref$hash = _ref.hash,
    hash = _ref$hash === void 0 ? "" : _ref$hash;
  if (search && search !== "?") pathname += search.charAt(0) === "?" ? search : "?" + search;
  if (hash && hash !== "#") pathname += hash.charAt(0) === "#" ? hash : "#" + hash;
  return pathname;
}
/**
 * Parses a string URL path into its separate pathname, search, and hash components.
 */

function parsePath(path) {
  var parsedPath = {};
  if (path) {
    var hashIndex = path.indexOf("#");
    if (hashIndex >= 0) {
      parsedPath.hash = path.substr(hashIndex);
      path = path.substr(0, hashIndex);
    }
    var searchIndex = path.indexOf("?");
    if (searchIndex >= 0) {
      parsedPath.search = path.substr(searchIndex);
      path = path.substr(0, searchIndex);
    }
    if (path) {
      parsedPath.pathname = path;
    }
  }
  return parsedPath;
}
function getUrlBasedHistory(getLocation, _createHref, validateLocation, options) {
  if (options === void 0) {
    options = {};
  }
  var _options2 = options,
    _options2$window = _options2.window,
    window = _options2$window === void 0 ? document.defaultView : _options2$window,
    _options2$v5Compat = _options2.v5Compat,
    v5Compat = _options2$v5Compat === void 0 ? false : _options2$v5Compat;
  var globalHistory = window.history;
  var action = Action.Pop;
  var listener = null;
  var index = getIndex(); // Index should only be null when we initialize. If not, it's because the
  // user called history.pushState or history.replaceState directly, in which
  // case we should log a warning as it will result in bugs.

  if (index == null) {
    index = 0;
    globalHistory.replaceState(_extends({}, globalHistory.state, {
      idx: index
    }), "");
  }
  function getIndex() {
    var state = globalHistory.state || {
      idx: null
    };
    return state.idx;
  }
  function handlePop() {
    action = Action.Pop;
    var nextIndex = getIndex();
    var delta = nextIndex == null ? null : nextIndex - index;
    index = nextIndex;
    if (listener) {
      listener({
        action: action,
        location: history.location,
        delta: delta
      });
    }
  }
  function push(to, state) {
    action = Action.Push;
    var location = createLocation(history.location, to, state);
    if (validateLocation) validateLocation(location, to);
    index = getIndex() + 1;
    var historyState = getHistoryState(location, index);
    var url = history.createHref(location); // try...catch because iOS limits us to 100 pushState calls :/

    try {
      globalHistory.pushState(historyState, "", url);
    } catch (error) {
      // They are going to lose state here, but there is no real
      // way to warn them about it since the page will refresh...
      window.location.assign(url);
    }
    if (v5Compat && listener) {
      listener({
        action: action,
        location: history.location,
        delta: 1
      });
    }
  }
  function replace(to, state) {
    action = Action.Replace;
    var location = createLocation(history.location, to, state);
    if (validateLocation) validateLocation(location, to);
    index = getIndex();
    var historyState = getHistoryState(location, index);
    var url = history.createHref(location);
    globalHistory.replaceState(historyState, "", url);
    if (v5Compat && listener) {
      listener({
        action: action,
        location: history.location,
        delta: 0
      });
    }
  }
  function createURL(to) {
    // window.location.origin is "null" (the literal string value) in Firefox
    // under certain conditions, notably when serving from a local HTML file
    // See https://bugzilla.mozilla.org/show_bug.cgi?id=878297
    var base = window.location.origin !== "null" ? window.location.origin : window.location.href;
    var href = typeof to === "string" ? to : createPath(to);
    invariant(base, "No window.location.(origin|href) available to create URL for href: " + href);
    return new URL(href, base);
  }
  var history = {
    get action() {
      return action;
    },
    get location() {
      return getLocation(window, globalHistory);
    },
    listen: function listen(fn) {
      if (listener) {
        throw new Error("A history only accepts one active listener");
      }
      window.addEventListener(PopStateEventType, handlePop);
      listener = fn;
      return function () {
        window.removeEventListener(PopStateEventType, handlePop);
        listener = null;
      };
    },
    createHref: function createHref(to) {
      return _createHref(window, to);
    },
    createURL: createURL,
    encodeLocation: function encodeLocation(to) {
      // Encode a Location the same way window.location would
      var url = createURL(to);
      return {
        pathname: url.pathname,
        search: url.search,
        hash: url.hash
      };
    },
    push: push,
    replace: replace,
    go: function go(n) {
      return globalHistory.go(n);
    }
  };
  return history;
} //#endregion

var ResultType;
(function (ResultType) {
  ResultType["data"] = "data";
  ResultType["deferred"] = "deferred";
  ResultType["redirect"] = "redirect";
  ResultType["error"] = "error";
})(ResultType || (ResultType = {}));
function isIndexRoute(route) {
  return route.index === true;
} // Walk the route tree generating unique IDs where necessary so we are working
// solely with AgnosticDataRouteObject's within the Router

function convertRoutesToDataRoutes(routes, parentPath, allIds) {
  if (parentPath === void 0) {
    parentPath = [];
  }
  if (allIds === void 0) {
    allIds = new Set();
  }
  return routes.map(function (route, index) {
    var treePath = [].concat((0, C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_11__["default"])(parentPath), [index]);
    var id = typeof route.id === "string" ? route.id : treePath.join("-");
    invariant(route.index !== true || !route.children, "Cannot specify children on an index route");
    invariant(!allIds.has(id), "Found a route id collision on id \"" + id + "\".  Route " + "id's must be globally unique within Data Router usages");
    allIds.add(id);
    if (isIndexRoute(route)) {
      var indexRoute = _extends({}, route, {
        id: id
      });
      return indexRoute;
    } else {
      var pathOrLayoutRoute = _extends({}, route, {
        id: id,
        children: route.children ? convertRoutesToDataRoutes(route.children, treePath, allIds) : undefined
      });
      return pathOrLayoutRoute;
    }
  });
}
/**
 * Matches the given routes to a location and returns the match data.
 *
 * @see https://reactrouter.com/utils/match-routes
 */

function matchRoutes(routes, locationArg, basename) {
  if (basename === void 0) {
    basename = "/";
  }
  var location = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
  var pathname = stripBasename(location.pathname || "/", basename);
  if (pathname == null) {
    return null;
  }
  var branches = flattenRoutes(routes);
  rankRouteBranches(branches);
  var matches = null;
  for (var i = 0; matches == null && i < branches.length; ++i) {
    matches = matchRouteBranch(branches[i],
    // Incoming pathnames are generally encoded from either window.location
    // or from router.navigate, but we want to match against the unencoded
    // paths in the route definitions.  Memory router locations won't be
    // encoded here but there also shouldn't be anything to decode so this
    // should be a safe operation.  This avoids needing matchRoutes to be
    // history-aware.
    safelyDecodeURI(pathname));
  }
  return matches;
}
function flattenRoutes(routes, branches, parentsMeta, parentPath) {
  if (branches === void 0) {
    branches = [];
  }
  if (parentsMeta === void 0) {
    parentsMeta = [];
  }
  if (parentPath === void 0) {
    parentPath = "";
  }
  var flattenRoute = function flattenRoute(route, index, relativePath) {
    var meta = {
      relativePath: relativePath === undefined ? route.path || "" : relativePath,
      caseSensitive: route.caseSensitive === true,
      childrenIndex: index,
      route: route
    };
    if (meta.relativePath.startsWith("/")) {
      invariant(meta.relativePath.startsWith(parentPath), "Absolute route path \"" + meta.relativePath + "\" nested under path " + ("\"" + parentPath + "\" is not valid. An absolute child route path ") + "must start with the combined path of all its parent routes.");
      meta.relativePath = meta.relativePath.slice(parentPath.length);
    }
    var path = joinPaths([parentPath, meta.relativePath]);
    var routesMeta = parentsMeta.concat(meta); // Add the children before adding this route to the array so we traverse the
    // route tree depth-first and child routes appear before their parents in
    // the "flattened" version.

    if (route.children && route.children.length > 0) {
      invariant(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      route.index !== true, "Index routes must not have child routes. Please remove " + ("all child routes from route path \"" + path + "\"."));
      flattenRoutes(route.children, branches, routesMeta, path);
    } // Routes without a path shouldn't ever match by themselves unless they are
    // index routes, so don't add them to the list of possible branches.

    if (route.path == null && !route.index) {
      return;
    }
    branches.push({
      path: path,
      score: computeScore(path, route.index),
      routesMeta: routesMeta
    });
  };
  routes.forEach(function (route, index) {
    var _route$path;

    // coarse-grain check for optional params
    if (route.path === "" || !((_route$path = route.path) != null && _route$path.includes("?"))) {
      flattenRoute(route, index);
    } else {
      var _iterator = (0, C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_10__["default"])(explodeOptionalSegments(route.path)),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var exploded = _step.value;
          flattenRoute(route, index, exploded);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  });
  return branches;
}
/**
 * Computes all combinations of optional path segments for a given path,
 * excluding combinations that are ambiguous and of lower priority.
 *
 * For example, `/one/:two?/three/:four?/:five?` explodes to:
 * - `/one/three`
 * - `/one/:two/three`
 * - `/one/three/:four`
 * - `/one/three/:five`
 * - `/one/:two/three/:four`
 * - `/one/:two/three/:five`
 * - `/one/three/:four/:five`
 * - `/one/:two/three/:four/:five`
 */

function explodeOptionalSegments(path) {
  var segments = path.split("/");
  if (segments.length === 0) return [];
  var _segments = (0, C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_toArray_js__WEBPACK_IMPORTED_MODULE_9__["default"])(segments),
    first = _segments[0],
    rest = _segments.slice(1); // Optional path segments are denoted by a trailing `?`

  var isOptional = first.endsWith("?"); // Compute the corresponding required segment: `foo?` -> `foo`

  var required = first.replace(/\?$/, "");
  if (rest.length === 0) {
    // Intepret empty string as omitting an optional segment
    // `["one", "", "three"]` corresponds to omitting `:two` from `/one/:two?/three` -> `/one/three`
    return isOptional ? [required, ""] : [required];
  }
  var restExploded = explodeOptionalSegments(rest.join("/"));
  var result = []; // All child paths with the prefix.  Do this for all children before the
  // optional version for all children so we get consistent ordering where the
  // parent optional aspect is preferred as required.  Otherwise, we can get
  // child sections interspersed where deeper optional segments are higher than
  // parent optional segments, where for example, /:two would explodes _earlier_
  // then /:one.  By always including the parent as required _for all children_
  // first, we avoid this issue

  result.push.apply(result, (0, C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_11__["default"])(restExploded.map(function (subpath) {
    return subpath === "" ? required : [required, subpath].join("/");
  }))); // Then if this is an optional value, add all child versions without

  if (isOptional) {
    result.push.apply(result, (0, C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_11__["default"])(restExploded));
  } // for absolute paths, ensure `/` instead of empty segment

  return result.map(function (exploded) {
    return path.startsWith("/") && exploded === "" ? "/" : exploded;
  });
}
function rankRouteBranches(branches) {
  branches.sort(function (a, b) {
    return a.score !== b.score ? b.score - a.score // Higher score first
    : compareIndexes(a.routesMeta.map(function (meta) {
      return meta.childrenIndex;
    }), b.routesMeta.map(function (meta) {
      return meta.childrenIndex;
    }));
  });
}
var paramRe = /^:\w+$/;
var dynamicSegmentValue = 3;
var indexRouteValue = 2;
var emptySegmentValue = 1;
var staticSegmentValue = 10;
var splatPenalty = -2;
var isSplat = function isSplat(s) {
  return s === "*";
};
function computeScore(path, index) {
  var segments = path.split("/");
  var initialScore = segments.length;
  if (segments.some(isSplat)) {
    initialScore += splatPenalty;
  }
  if (index) {
    initialScore += indexRouteValue;
  }
  return segments.filter(function (s) {
    return !isSplat(s);
  }).reduce(function (score, segment) {
    return score + (paramRe.test(segment) ? dynamicSegmentValue : segment === "" ? emptySegmentValue : staticSegmentValue);
  }, initialScore);
}
function compareIndexes(a, b) {
  var siblings = a.length === b.length && a.slice(0, -1).every(function (n, i) {
    return n === b[i];
  });
  return siblings ?
  // If two routes are siblings, we should try to match the earlier sibling
  // first. This allows people to have fine-grained control over the matching
  // behavior by simply putting routes with identical paths in the order they
  // want them tried.
  a[a.length - 1] - b[b.length - 1] :
  // Otherwise, it doesn't really make sense to rank non-siblings by index,
  // so they sort equally.
  0;
}
function matchRouteBranch(branch, pathname) {
  var routesMeta = branch.routesMeta;
  var matchedParams = {};
  var matchedPathname = "/";
  var matches = [];
  for (var i = 0; i < routesMeta.length; ++i) {
    var meta = routesMeta[i];
    var end = i === routesMeta.length - 1;
    var remainingPathname = matchedPathname === "/" ? pathname : pathname.slice(matchedPathname.length) || "/";
    var match = matchPath({
      path: meta.relativePath,
      caseSensitive: meta.caseSensitive,
      end: end
    }, remainingPathname);
    if (!match) return null;
    Object.assign(matchedParams, match.params);
    var route = meta.route;
    matches.push({
      // TODO: Can this as be avoided?
      params: matchedParams,
      pathname: joinPaths([matchedPathname, match.pathname]),
      pathnameBase: normalizePathname(joinPaths([matchedPathname, match.pathnameBase])),
      route: route
    });
    if (match.pathnameBase !== "/") {
      matchedPathname = joinPaths([matchedPathname, match.pathnameBase]);
    }
  }
  return matches;
}
/**
 * Returns a path with params interpolated.
 *
 * @see https://reactrouter.com/utils/generate-path
 */

function generatePath(originalPath, params) {
  if (params === void 0) {
    params = {};
  }
  var path = originalPath;
  if (path.endsWith("*") && path !== "*" && !path.endsWith("/*")) {
    warning(false, "Route path \"" + path + "\" will be treated as if it were " + ("\"" + path.replace(/\*$/, "/*") + "\" because the `*` character must ") + "always follow a `/` in the pattern. To get rid of this warning, " + ("please change the route path to \"" + path.replace(/\*$/, "/*") + "\"."));
    path = path.replace(/\*$/, "/*");
  }
  return path.replace(/^:(\w+)(\??)/g, function (_, key, optional) {
    var param = params[key];
    if (optional === "?") {
      return param == null ? "" : param;
    }
    if (param == null) {
      invariant(false, "Missing \":" + key + "\" param");
    }
    return param;
  }).replace(/\/:(\w+)(\??)/g, function (_, key, optional) {
    var param = params[key];
    if (optional === "?") {
      return param == null ? "" : "/" + param;
    }
    if (param == null) {
      invariant(false, "Missing \":" + key + "\" param");
    }
    return "/" + param;
  }) // Remove any optional markers from optional static segments
  .replace(/\?/g, "").replace(/(\/?)\*/, function (_, prefix, __, str) {
    var star = "*";
    if (params[star] == null) {
      // If no splat was provided, trim the trailing slash _unless_ it's
      // the entire path
      return str === "/*" ? "/" : "";
    } // Apply the splat

    return "" + prefix + params[star];
  });
}
/**
 * Performs pattern matching on a URL pathname and returns information about
 * the match.
 *
 * @see https://reactrouter.com/utils/match-path
 */

function matchPath(pattern, pathname) {
  if (typeof pattern === "string") {
    pattern = {
      path: pattern,
      caseSensitive: false,
      end: true
    };
  }
  var _compilePath = compilePath(pattern.path, pattern.caseSensitive, pattern.end),
    _compilePath2 = (0, C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_compilePath, 2),
    matcher = _compilePath2[0],
    paramNames = _compilePath2[1];
  var match = pathname.match(matcher);
  if (!match) return null;
  var matchedPathname = match[0];
  var pathnameBase = matchedPathname.replace(/(.)\/+$/, "$1");
  var captureGroups = match.slice(1);
  var params = paramNames.reduce(function (memo, paramName, index) {
    // We need to compute the pathnameBase here using the raw splat value
    // instead of using params["*"] later because it will be decoded then
    if (paramName === "*") {
      var splatValue = captureGroups[index] || "";
      pathnameBase = matchedPathname.slice(0, matchedPathname.length - splatValue.length).replace(/(.)\/+$/, "$1");
    }
    memo[paramName] = safelyDecodeURIComponent(captureGroups[index] || "", paramName);
    return memo;
  }, {});
  return {
    params: params,
    pathname: matchedPathname,
    pathnameBase: pathnameBase,
    pattern: pattern
  };
}
function compilePath(path, caseSensitive, end) {
  if (caseSensitive === void 0) {
    caseSensitive = false;
  }
  if (end === void 0) {
    end = true;
  }
  warning(path === "*" || !path.endsWith("*") || path.endsWith("/*"), "Route path \"" + path + "\" will be treated as if it were " + ("\"" + path.replace(/\*$/, "/*") + "\" because the `*` character must ") + "always follow a `/` in the pattern. To get rid of this warning, " + ("please change the route path to \"" + path.replace(/\*$/, "/*") + "\"."));
  var paramNames = [];
  var regexpSource = "^" + path.replace(/\/*\*?$/, "") // Ignore trailing / and /*, we'll handle it below
  .replace(/^\/*/, "/") // Make sure it has a leading /
  .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&") // Escape special regex chars
  .replace(/\/:(\w+)/g, function (_, paramName) {
    paramNames.push(paramName);
    return "/([^\\/]+)";
  });
  if (path.endsWith("*")) {
    paramNames.push("*");
    regexpSource += path === "*" || path === "/*" ? "(.*)$" // Already matched the initial /, just match the rest
    : "(?:\\/(.+)|\\/*)$"; // Don't include the / in params["*"]
  } else if (end) {
    // When matching to the end, ignore trailing slashes
    regexpSource += "\\/*$";
  } else if (path !== "" && path !== "/") {
    // If our path is non-empty and contains anything beyond an initial slash,
    // then we have _some_ form of path in our regex so we should expect to
    // match only if we find the end of this path segment.  Look for an optional
    // non-captured trailing slash (to match a portion of the URL) or the end
    // of the path (if we've matched to the end).  We used to do this with a
    // word boundary but that gives false positives on routes like
    // /user-preferences since `-` counts as a word boundary.
    regexpSource += "(?:(?=\\/|$))";
  } else ;
  var matcher = new RegExp(regexpSource, caseSensitive ? undefined : "i");
  return [matcher, paramNames];
}
function safelyDecodeURI(value) {
  try {
    return decodeURI(value);
  } catch (error) {
    warning(false, "The URL path \"" + value + "\" could not be decoded because it is is a " + "malformed URL segment. This is probably due to a bad percent " + ("encoding (" + error + ")."));
    return value;
  }
}
function safelyDecodeURIComponent(value, paramName) {
  try {
    return decodeURIComponent(value);
  } catch (error) {
    warning(false, "The value for the URL param \"" + paramName + "\" will not be decoded because" + (" the string \"" + value + "\" is a malformed URL segment. This is probably") + (" due to a bad percent encoding (" + error + ")."));
    return value;
  }
}
/**
 * @private
 */

function stripBasename(pathname, basename) {
  if (basename === "/") return pathname;
  if (!pathname.toLowerCase().startsWith(basename.toLowerCase())) {
    return null;
  } // We want to leave trailing slash behavior in the user's control, so if they
  // specify a basename with a trailing slash, we should support it

  var startIndex = basename.endsWith("/") ? basename.length - 1 : basename.length;
  var nextChar = pathname.charAt(startIndex);
  if (nextChar && nextChar !== "/") {
    // pathname does not start with basename/
    return null;
  }
  return pathname.slice(startIndex) || "/";
}
/**
 * @private
 */

function warning(cond, message) {
  if (!cond) {
    // eslint-disable-next-line no-console
    if (typeof console !== "undefined") console.warn(message);
    try {
      // Welcome to debugging @remix-run/router!
      //
      // This error is thrown as a convenience so you can more easily
      // find the source for a warning that appears in the console by
      // enabling "pause on exceptions" in your JavaScript debugger.
      throw new Error(message); // eslint-disable-next-line no-empty
    } catch (e) {}
  }
}
/**
 * Returns a resolved path object relative to the given pathname.
 *
 * @see https://reactrouter.com/utils/resolve-path
 */

function resolvePath(to, fromPathname) {
  if (fromPathname === void 0) {
    fromPathname = "/";
  }
  var _ref3 = typeof to === "string" ? parsePath(to) : to,
    toPathname = _ref3.pathname,
    _ref3$search = _ref3.search,
    search = _ref3$search === void 0 ? "" : _ref3$search,
    _ref3$hash = _ref3.hash,
    hash = _ref3$hash === void 0 ? "" : _ref3$hash;
  var pathname = toPathname ? toPathname.startsWith("/") ? toPathname : resolvePathname(toPathname, fromPathname) : fromPathname;
  return {
    pathname: pathname,
    search: normalizeSearch(search),
    hash: normalizeHash(hash)
  };
}
function resolvePathname(relativePath, fromPathname) {
  var segments = fromPathname.replace(/\/+$/, "").split("/");
  var relativeSegments = relativePath.split("/");
  relativeSegments.forEach(function (segment) {
    if (segment === "..") {
      // Keep the root "" segment so the pathname starts at /
      if (segments.length > 1) segments.pop();
    } else if (segment !== ".") {
      segments.push(segment);
    }
  });
  return segments.length > 1 ? segments.join("/") : "/";
}
function getInvalidPathError(char, field, dest, path) {
  return "Cannot include a '" + char + "' character in a manually specified " + ("`to." + field + "` field [" + JSON.stringify(path) + "].  Please separate it out to the ") + ("`to." + dest + "` field. Alternatively you may provide the full path as ") + "a string in <Link to=\"...\"> and the router will parse it for you.";
}
/**
 * @private
 *
 * When processing relative navigation we want to ignore ancestor routes that
 * do not contribute to the path, such that index/pathless layout routes don't
 * interfere.
 *
 * For example, when moving a route element into an index route and/or a
 * pathless layout route, relative link behavior contained within should stay
 * the same.  Both of the following examples should link back to the root:
 *
 *   <Route path="/">
 *     <Route path="accounts" element={<Link to=".."}>
 *   </Route>
 *
 *   <Route path="/">
 *     <Route path="accounts">
 *       <Route element={<AccountsLayout />}>       // <-- Does not contribute
 *         <Route index element={<Link to=".."} />  // <-- Does not contribute
 *       </Route
 *     </Route>
 *   </Route>
 */

function getPathContributingMatches(matches) {
  return matches.filter(function (match, index) {
    return index === 0 || match.route.path && match.route.path.length > 0;
  });
}
/**
 * @private
 */

function resolveTo(toArg, routePathnames, locationPathname, isPathRelative) {
  if (isPathRelative === void 0) {
    isPathRelative = false;
  }
  var to;
  if (typeof toArg === "string") {
    to = parsePath(toArg);
  } else {
    to = _extends({}, toArg);
    invariant(!to.pathname || !to.pathname.includes("?"), getInvalidPathError("?", "pathname", "search", to));
    invariant(!to.pathname || !to.pathname.includes("#"), getInvalidPathError("#", "pathname", "hash", to));
    invariant(!to.search || !to.search.includes("#"), getInvalidPathError("#", "search", "hash", to));
  }
  var isEmptyPath = toArg === "" || to.pathname === "";
  var toPathname = isEmptyPath ? "/" : to.pathname;
  var from; // Routing is relative to the current pathname if explicitly requested.
  //
  // If a pathname is explicitly provided in `to`, it should be relative to the
  // route context. This is explained in `Note on `<Link to>` values` in our
  // migration guide from v5 as a means of disambiguation between `to` values
  // that begin with `/` and those that do not. However, this is problematic for
  // `to` values that do not provide a pathname. `to` can simply be a search or
  // hash string, in which case we should assume that the navigation is relative
  // to the current location's pathname and *not* the route pathname.

  if (isPathRelative || toPathname == null) {
    from = locationPathname;
  } else {
    var routePathnameIndex = routePathnames.length - 1;
    if (toPathname.startsWith("..")) {
      var toSegments = toPathname.split("/"); // Each leading .. segment means "go up one route" instead of "go up one
      // URL segment".  This is a key difference from how <a href> works and a
      // major reason we call this a "to" value instead of a "href".

      while (toSegments[0] === "..") {
        toSegments.shift();
        routePathnameIndex -= 1;
      }
      to.pathname = toSegments.join("/");
    } // If there are more ".." segments than parent routes, resolve relative to
    // the root / URL.

    from = routePathnameIndex >= 0 ? routePathnames[routePathnameIndex] : "/";
  }
  var path = resolvePath(to, from); // Ensure the pathname has a trailing slash if the original "to" had one

  var hasExplicitTrailingSlash = toPathname && toPathname !== "/" && toPathname.endsWith("/"); // Or if this was a link to the current path which has a trailing slash

  var hasCurrentTrailingSlash = (isEmptyPath || toPathname === ".") && locationPathname.endsWith("/");
  if (!path.pathname.endsWith("/") && (hasExplicitTrailingSlash || hasCurrentTrailingSlash)) {
    path.pathname += "/";
  }
  return path;
}
/**
 * @private
 */

function getToPathname(to) {
  // Empty strings should be treated the same as / paths
  return to === "" || to.pathname === "" ? "/" : typeof to === "string" ? parsePath(to).pathname : to.pathname;
}
/**
 * @private
 */

var joinPaths = function joinPaths(paths) {
  return paths.join("/").replace(/\/\/+/g, "/");
};
/**
 * @private
 */

var normalizePathname = function normalizePathname(pathname) {
  return pathname.replace(/\/+$/, "").replace(/^\/*/, "/");
};
/**
 * @private
 */

var normalizeSearch = function normalizeSearch(search) {
  return !search || search === "?" ? "" : search.startsWith("?") ? search : "?" + search;
};
/**
 * @private
 */

var normalizeHash = function normalizeHash(hash) {
  return !hash || hash === "#" ? "" : hash.startsWith("#") ? hash : "#" + hash;
};
/**
 * This is a shortcut for creating `application/json` responses. Converts `data`
 * to JSON and sets the `Content-Type` header.
 */

var json = function json(data, init) {
  if (init === void 0) {
    init = {};
  }
  var responseInit = typeof init === "number" ? {
    status: init
  } : init;
  var headers = new Headers(responseInit.headers);
  if (!headers.has("Content-Type")) {
    headers.set("Content-Type", "application/json; charset=utf-8");
  }
  return new Response(JSON.stringify(data), _extends({}, responseInit, {
    headers: headers
  }));
};
var AbortedDeferredError = /*#__PURE__*/function (_Error) {
  (0, C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_5__["default"])(AbortedDeferredError, _Error);
  var _super = (0, C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_6__["default"])(AbortedDeferredError);
  function AbortedDeferredError() {
    (0, C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4__["default"])(this, AbortedDeferredError);
    return _super.apply(this, arguments);
  }
  return (0, C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_3__["default"])(AbortedDeferredError);
}( /*#__PURE__*/(0, C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_wrapNativeSuper_js__WEBPACK_IMPORTED_MODULE_7__["default"])(Error));
var DeferredData = /*#__PURE__*/function () {
  function DeferredData(data, responseInit) {
    var _this = this;
    (0, C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4__["default"])(this, DeferredData);
    this.pendingKeysSet = new Set();
    this.subscribers = new Set();
    this.deferredKeys = [];
    invariant(data && typeof data === "object" && !Array.isArray(data), "defer() only accepts plain objects"); // Set up an AbortController + Promise we can race against to exit early
    // cancellation

    var reject;
    this.abortPromise = new Promise(function (_, r) {
      return reject = r;
    });
    this.controller = new AbortController();
    var onAbort = function onAbort() {
      return reject(new AbortedDeferredError("Deferred data aborted"));
    };
    this.unlistenAbortSignal = function () {
      return _this.controller.signal.removeEventListener("abort", onAbort);
    };
    this.controller.signal.addEventListener("abort", onAbort);
    this.data = Object.entries(data).reduce(function (acc, _ref) {
      var _ref4 = (0, C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_ref, 2),
        key = _ref4[0],
        value = _ref4[1];
      return Object.assign(acc, (0, C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])({}, key, _this.trackPromise(key, value)));
    }, {});
    if (this.done) {
      // All incoming values were resolved
      this.unlistenAbortSignal();
    }
    this.init = responseInit;
  }
  (0, C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_3__["default"])(DeferredData, [{
    key: "trackPromise",
    value: function trackPromise(key, value) {
      var _this2 = this;
      if (!(value instanceof Promise)) {
        return value;
      }
      this.deferredKeys.push(key);
      this.pendingKeysSet.add(key); // We store a little wrapper promise that will be extended with
      // _data/_error props upon resolve/reject

      var promise = Promise.race([value, this.abortPromise]).then(function (data) {
        return _this2.onSettle(promise, key, null, data);
      }, function (error) {
        return _this2.onSettle(promise, key, error);
      }); // Register rejection listeners to avoid uncaught promise rejections on
      // errors or aborted deferred values

      promise.catch(function () {});
      Object.defineProperty(promise, "_tracked", {
        get: function get() {
          return true;
        }
      });
      return promise;
    }
  }, {
    key: "onSettle",
    value: function onSettle(promise, key, error, data) {
      if (this.controller.signal.aborted && error instanceof AbortedDeferredError) {
        this.unlistenAbortSignal();
        Object.defineProperty(promise, "_error", {
          get: function get() {
            return error;
          }
        });
        return Promise.reject(error);
      }
      this.pendingKeysSet.delete(key);
      if (this.done) {
        // Nothing left to abort!
        this.unlistenAbortSignal();
      }
      if (error) {
        Object.defineProperty(promise, "_error", {
          get: function get() {
            return error;
          }
        });
        this.emit(false, key);
        return Promise.reject(error);
      }
      Object.defineProperty(promise, "_data", {
        get: function get() {
          return data;
        }
      });
      this.emit(false, key);
      return data;
    }
  }, {
    key: "emit",
    value: function emit(aborted, settledKey) {
      this.subscribers.forEach(function (subscriber) {
        return subscriber(aborted, settledKey);
      });
    }
  }, {
    key: "subscribe",
    value: function subscribe(fn) {
      var _this3 = this;
      this.subscribers.add(fn);
      return function () {
        return _this3.subscribers.delete(fn);
      };
    }
  }, {
    key: "cancel",
    value: function cancel() {
      var _this4 = this;
      this.controller.abort();
      this.pendingKeysSet.forEach(function (v, k) {
        return _this4.pendingKeysSet.delete(k);
      });
      this.emit(true);
    }
  }, {
    key: "resolveData",
    value: function () {
      var _resolveData = (0, C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/(0, C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee(signal) {
        var _this5 = this;
        var aborted, onAbort;
        return (0, C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              aborted = false;
              if (this.done) {
                _context.next = 7;
                break;
              }
              onAbort = function onAbort() {
                return _this5.cancel();
              };
              signal.addEventListener("abort", onAbort);
              _context.next = 6;
              return new Promise(function (resolve) {
                _this5.subscribe(function (aborted) {
                  signal.removeEventListener("abort", onAbort);
                  if (aborted || _this5.done) {
                    resolve(aborted);
                  }
                });
              });
            case 6:
              aborted = _context.sent;
            case 7:
              return _context.abrupt("return", aborted);
            case 8:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function resolveData(_x) {
        return _resolveData.apply(this, arguments);
      }
      return resolveData;
    }()
  }, {
    key: "done",
    get: function get() {
      return this.pendingKeysSet.size === 0;
    }
  }, {
    key: "unwrappedData",
    get: function get() {
      invariant(this.data !== null && this.done, "Can only unwrap data on initialized and settled deferreds");
      return Object.entries(this.data).reduce(function (acc, _ref2) {
        var _ref5 = (0, C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_ref2, 2),
          key = _ref5[0],
          value = _ref5[1];
        return Object.assign(acc, (0, C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])({}, key, unwrapTrackedPromise(value)));
      }, {});
    }
  }, {
    key: "pendingKeys",
    get: function get() {
      return Array.from(this.pendingKeysSet);
    }
  }]);
  return DeferredData;
}();
function isTrackedPromise(value) {
  return value instanceof Promise && value._tracked === true;
}
function unwrapTrackedPromise(value) {
  if (!isTrackedPromise(value)) {
    return value;
  }
  if (value._error) {
    throw value._error;
  }
  return value._data;
}
var defer = function defer(data, init) {
  if (init === void 0) {
    init = {};
  }
  var responseInit = typeof init === "number" ? {
    status: init
  } : init;
  return new DeferredData(data, responseInit);
};
/**
 * A redirect response. Sets the status code and the `Location` header.
 * Defaults to "302 Found".
 */

var redirect = function redirect(url, init) {
  if (init === void 0) {
    init = 302;
  }
  var responseInit = init;
  if (typeof responseInit === "number") {
    responseInit = {
      status: responseInit
    };
  } else if (typeof responseInit.status === "undefined") {
    responseInit.status = 302;
  }
  var headers = new Headers(responseInit.headers);
  headers.set("Location", url);
  return new Response(null, _extends({}, responseInit, {
    headers: headers
  }));
};
/**
 * @private
 * Utility class we use to hold auto-unwrapped 4xx/5xx Response bodies
 */
var ErrorResponse = /*#__PURE__*/(0, C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_3__["default"])(function ErrorResponse(status, statusText, data, internal) {
  (0, C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4__["default"])(this, ErrorResponse);
  if (internal === void 0) {
    internal = false;
  }
  this.status = status;
  this.statusText = statusText || "";
  this.internal = internal;
  if (data instanceof Error) {
    this.data = data.toString();
    this.error = data;
  } else {
    this.data = data;
  }
});
/**
 * Check if the given error is an ErrorResponse generated from a 4xx/5xx
 * Response thrown from an action/loader
 */
function isRouteErrorResponse(error) {
  return error != null && typeof error.status === "number" && typeof error.statusText === "string" && typeof error.internal === "boolean" && "data" in error;
}
var validMutationMethodsArr = ["post", "put", "patch", "delete"];
var validMutationMethods = new Set(validMutationMethodsArr);
var validRequestMethodsArr = ["get"].concat(validMutationMethodsArr);
var validRequestMethods = new Set(validRequestMethodsArr);
var redirectStatusCodes = new Set([301, 302, 303, 307, 308]);
var redirectPreserveMethodStatusCodes = new Set([307, 308]);
var IDLE_NAVIGATION = {
  state: "idle",
  location: undefined,
  formMethod: undefined,
  formAction: undefined,
  formEncType: undefined,
  formData: undefined
};
var IDLE_FETCHER = {
  state: "idle",
  data: undefined,
  formMethod: undefined,
  formAction: undefined,
  formEncType: undefined,
  formData: undefined
};
var IDLE_BLOCKER = {
  state: "unblocked",
  proceed: undefined,
  reset: undefined,
  location: undefined
};
var ABSOLUTE_URL_REGEX = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
var isBrowser = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined";
var isServer = !isBrowser; //#endregion
////////////////////////////////////////////////////////////////////////////////
//#region createRouter
////////////////////////////////////////////////////////////////////////////////

/**
 * Create a router and listen to history POP navigations
 */

function createRouter(init) {
  invariant(init.routes.length > 0, "You must provide a non-empty routes array to createRouter");
  var dataRoutes = convertRoutesToDataRoutes(init.routes); // Cleanup function for history

  var unlistenHistory = null; // Externally-provided functions to call on all state changes

  var subscribers = new Set(); // Externally-provided object to hold scroll restoration locations during routing

  var savedScrollPositions = null; // Externally-provided function to get scroll restoration keys

  var getScrollRestorationKey = null; // Externally-provided function to get current scroll position

  var getScrollPosition = null; // One-time flag to control the initial hydration scroll restoration.  Because
  // we don't get the saved positions from <ScrollRestoration /> until _after_
  // the initial render, we need to manually trigger a separate updateState to
  // send along the restoreScrollPosition
  // Set to true if we have `hydrationData` since we assume we were SSR'd and that
  // SSR did the initial scroll restoration.

  var initialScrollRestored = init.hydrationData != null;
  var initialMatches = matchRoutes(dataRoutes, init.history.location, init.basename);
  var initialErrors = null;
  if (initialMatches == null) {
    // If we do not match a user-provided-route, fall back to the root
    // to allow the error boundary to take over
    var error = getInternalRouterError(404, {
      pathname: init.history.location.pathname
    });
    var _getShortCircuitMatch = getShortCircuitMatches(dataRoutes),
      matches = _getShortCircuitMatch.matches,
      route = _getShortCircuitMatch.route;
    initialMatches = matches;
    initialErrors = (0, C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])({}, route.id, error);
  }
  var initialized = !initialMatches.some(function (m) {
    return m.route.loader;
  }) || init.hydrationData != null;
  var router;
  var state = {
    historyAction: init.history.action,
    location: init.history.location,
    matches: initialMatches,
    initialized: initialized,
    navigation: IDLE_NAVIGATION,
    // Don't restore on initial updateState() if we were SSR'd
    restoreScrollPosition: init.hydrationData != null ? false : null,
    preventScrollReset: false,
    revalidation: "idle",
    loaderData: init.hydrationData && init.hydrationData.loaderData || {},
    actionData: init.hydrationData && init.hydrationData.actionData || null,
    errors: init.hydrationData && init.hydrationData.errors || initialErrors,
    fetchers: new Map(),
    blockers: new Map()
  }; // -- Stateful internal variables to manage navigations --
  // Current navigation in progress (to be committed in completeNavigation)

  var pendingAction = Action.Pop; // Should the current navigation prevent the scroll reset if scroll cannot
  // be restored?

  var pendingPreventScrollReset = false; // AbortController for the active navigation

  var pendingNavigationController; // We use this to avoid touching history in completeNavigation if a
  // revalidation is entirely uninterrupted

  var isUninterruptedRevalidation = false; // Use this internal flag to force revalidation of all loaders:
  //  - submissions (completed or interrupted)
  //  - useRevalidate()
  //  - X-Remix-Revalidate (from redirect)

  var isRevalidationRequired = false; // Use this internal array to capture routes that require revalidation due
  // to a cancelled deferred on action submission

  var cancelledDeferredRoutes = []; // Use this internal array to capture fetcher loads that were cancelled by an
  // action navigation and require revalidation

  var cancelledFetcherLoads = []; // AbortControllers for any in-flight fetchers

  var fetchControllers = new Map(); // Track loads based on the order in which they started

  var incrementingLoadId = 0; // Track the outstanding pending navigation data load to be compared against
  // the globally incrementing load when a fetcher load lands after a completed
  // navigation

  var pendingNavigationLoadId = -1; // Fetchers that triggered data reloads as a result of their actions

  var fetchReloadIds = new Map(); // Fetchers that triggered redirect navigations from their actions

  var fetchRedirectIds = new Set(); // Most recent href/match for fetcher.load calls for fetchers

  var fetchLoadMatches = new Map(); // Store DeferredData instances for active route matches.  When a
  // route loader returns defer() we stick one in here.  Then, when a nested
  // promise resolves we update loaderData.  If a new navigation starts we
  // cancel active deferreds for eliminated routes.

  var activeDeferreds = new Map(); // Store blocker functions in a separate Map outside of router state since
  // we don't need to update UI state if they change

  var blockerFunctions = new Map(); // Flag to ignore the next history update, so we can revert the URL change on
  // a POP navigation that was blocked by the user without touching router state

  var ignoreNextHistoryUpdate = false; // Initialize the router, all side effects should be kicked off from here.
  // Implemented as a Fluent API for ease of:
  //   let router = createRouter(init).initialize();

  function initialize() {
    // If history informs us of a POP navigation, start the navigation but do not update
    // state.  We'll update our own state once the navigation completes
    unlistenHistory = init.history.listen(function (_ref) {
      var historyAction = _ref.action,
        location = _ref.location,
        delta = _ref.delta;

      // Ignore this event if it was just us resetting the URL from a
      // blocked POP navigation
      if (ignoreNextHistoryUpdate) {
        ignoreNextHistoryUpdate = false;
        return;
      }
      warning(blockerFunctions.size === 0 || delta != null, "You are trying to use a blocker on a POP navigation to a location " + "that was not created by @remix-run/router. This will fail silently in " + "production. This can happen if you are navigating outside the router " + "via `window.history.pushState`/`window.location.hash` instead of using " + "router navigation APIs.  This can also happen if you are using " + "createHashRouter and the user manually changes the URL.");
      var blockerKey = shouldBlockNavigation({
        currentLocation: state.location,
        nextLocation: location,
        historyAction: historyAction
      });
      if (blockerKey && delta != null) {
        // Restore the URL to match the current UI, but don't update router state
        ignoreNextHistoryUpdate = true;
        init.history.go(delta * -1); // Put the blocker into a blocked state

        updateBlocker(blockerKey, {
          state: "blocked",
          location: location,
          proceed: function proceed() {
            updateBlocker(blockerKey, {
              state: "proceeding",
              proceed: undefined,
              reset: undefined,
              location: location
            }); // Re-do the same POP navigation we just blocked

            init.history.go(delta);
          },
          reset: function reset() {
            deleteBlocker(blockerKey);
            updateState({
              blockers: new Map(router.state.blockers)
            });
          }
        });
        return;
      }
      return startNavigation(historyAction, location);
    }); // Kick off initial data load if needed.  Use Pop to avoid modifying history

    if (!state.initialized) {
      startNavigation(Action.Pop, state.location);
    }
    return router;
  } // Clean up a router and it's side effects

  function dispose() {
    if (unlistenHistory) {
      unlistenHistory();
    }
    subscribers.clear();
    pendingNavigationController && pendingNavigationController.abort();
    state.fetchers.forEach(function (_, key) {
      return deleteFetcher(key);
    });
    state.blockers.forEach(function (_, key) {
      return deleteBlocker(key);
    });
  } // Subscribe to state updates for the router

  function subscribe(fn) {
    subscribers.add(fn);
    return function () {
      return subscribers.delete(fn);
    };
  } // Update our state and notify the calling context of the change

  function updateState(newState) {
    state = _extends({}, state, newState);
    subscribers.forEach(function (subscriber) {
      return subscriber(state);
    });
  } // Complete a navigation returning the state.navigation back to the IDLE_NAVIGATION
  // and setting state.[historyAction/location/matches] to the new route.
  // - Location is a required param
  // - Navigation will always be set to IDLE_NAVIGATION
  // - Can pass any other state in newState

  function completeNavigation(location, newState) {
    var _location$state, _location$state2;

    // Deduce if we're in a loading/actionReload state:
    // - We have committed actionData in the store
    // - The current navigation was a mutation submission
    // - We're past the submitting state and into the loading state
    // - The location being loaded is not the result of a redirect
    var isActionReload = state.actionData != null && state.navigation.formMethod != null && isMutationMethod(state.navigation.formMethod) && state.navigation.state === "loading" && ((_location$state = location.state) == null ? void 0 : _location$state._isRedirect) !== true;
    var actionData;
    if (newState.actionData) {
      if (Object.keys(newState.actionData).length > 0) {
        actionData = newState.actionData;
      } else {
        // Empty actionData -> clear prior actionData due to an action error
        actionData = null;
      }
    } else if (isActionReload) {
      // Keep the current data if we're wrapping up the action reload
      actionData = state.actionData;
    } else {
      // Clear actionData on any other completed navigations
      actionData = null;
    } // Always preserve any existing loaderData from re-used routes

    var loaderData = newState.loaderData ? mergeLoaderData(state.loaderData, newState.loaderData, newState.matches || [], newState.errors) : state.loaderData; // On a successful navigation we can assume we got through all blockers
    // so we can start fresh
    var _iterator2 = (0, C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_10__["default"])(blockerFunctions),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var _step2$value = (0,C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_step2.value, 1),
          key = _step2$value[0];
        deleteBlocker(key);
      } // Always respect the user flag.  Otherwise don't reset on mutation
      // submission navigations unless they redirect
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    var preventScrollReset = pendingPreventScrollReset === true || state.navigation.formMethod != null && isMutationMethod(state.navigation.formMethod) && ((_location$state2 = location.state) == null ? void 0 : _location$state2._isRedirect) !== true;
    updateState(_extends({}, newState, {
      actionData: actionData,
      loaderData: loaderData,
      historyAction: pendingAction,
      location: location,
      initialized: true,
      navigation: IDLE_NAVIGATION,
      revalidation: "idle",
      restoreScrollPosition: getSavedScrollPosition(location, newState.matches || state.matches),
      preventScrollReset: preventScrollReset,
      blockers: new Map(state.blockers)
    }));
    if (isUninterruptedRevalidation) ;else if (pendingAction === Action.Pop) ;else if (pendingAction === Action.Push) {
      init.history.push(location, location.state);
    } else if (pendingAction === Action.Replace) {
      init.history.replace(location, location.state);
    } // Reset stateful navigation vars

    pendingAction = Action.Pop;
    pendingPreventScrollReset = false;
    isUninterruptedRevalidation = false;
    isRevalidationRequired = false;
    cancelledDeferredRoutes = [];
    cancelledFetcherLoads = [];
  } // Trigger a navigation event, which can either be a numerical POP or a PUSH
  // replace with an optional submission
  function navigate(_x2, _x3) {
    return _navigate.apply(this, arguments);
  } // Revalidate all current loaders.  If a navigation is in progress or if this
  // is interrupted by a navigation, allow this to "succeed" by calling all
  // loaders during the next loader round
  function _navigate() {
    _navigate = (0, C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/(0, C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee2(to, opts) {
      var _normalizeNavigateOpt2, path, submission, error, currentLocation, nextLocation, userReplace, historyAction, preventScrollReset, blockerKey;
      return (0, C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            if (!(typeof to === "number")) {
              _context2.next = 3;
              break;
            }
            init.history.go(to);
            return _context2.abrupt("return");
          case 3:
            _normalizeNavigateOpt2 = normalizeNavigateOptions(to, opts), path = _normalizeNavigateOpt2.path, submission = _normalizeNavigateOpt2.submission, error = _normalizeNavigateOpt2.error;
            currentLocation = state.location;
            nextLocation = createLocation(state.location, path, opts && opts.state); // When using navigate as a PUSH/REPLACE we aren't reading an already-encoded
            // URL from window.location, so we need to encode it here so the behavior
            // remains the same as POP and non-data-router usages.  new URL() does all
            // the same encoding we'd get from a history.pushState/window.location read
            // without having to touch history
            nextLocation = _extends({}, nextLocation, init.history.encodeLocation(nextLocation));
            userReplace = opts && opts.replace != null ? opts.replace : undefined;
            historyAction = Action.Push;
            if (userReplace === true) {
              historyAction = Action.Replace;
            } else if (userReplace === false) ;else if (submission != null && isMutationMethod(submission.formMethod) && submission.formAction === state.location.pathname + state.location.search) {
              // By default on submissions to the current location we REPLACE so that
              // users don't have to double-click the back button to get to the prior
              // location.  If the user redirects to a different location from the
              // action/loader this will be ignored and the redirect will be a PUSH
              historyAction = Action.Replace;
            }
            preventScrollReset = opts && "preventScrollReset" in opts ? opts.preventScrollReset === true : undefined;
            blockerKey = shouldBlockNavigation({
              currentLocation: currentLocation,
              nextLocation: nextLocation,
              historyAction: historyAction
            });
            if (!blockerKey) {
              _context2.next = 15;
              break;
            }
            // Put the blocker into a blocked state
            updateBlocker(blockerKey, {
              state: "blocked",
              location: nextLocation,
              proceed: function proceed() {
                updateBlocker(blockerKey, {
                  state: "proceeding",
                  proceed: undefined,
                  reset: undefined,
                  location: nextLocation
                }); // Send the same navigation through

                navigate(to, opts);
              },
              reset: function reset() {
                deleteBlocker(blockerKey);
                updateState({
                  blockers: new Map(state.blockers)
                });
              }
            });
            return _context2.abrupt("return");
          case 15:
            _context2.next = 17;
            return startNavigation(historyAction, nextLocation, {
              submission: submission,
              // Send through the formData serialization error if we have one so we can
              // render at the right error boundary after we match routes
              pendingError: error,
              preventScrollReset: preventScrollReset,
              replace: opts && opts.replace
            });
          case 17:
            return _context2.abrupt("return", _context2.sent);
          case 18:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return _navigate.apply(this, arguments);
  }
  function revalidate() {
    interruptActiveLoads();
    updateState({
      revalidation: "loading"
    }); // If we're currently submitting an action, we don't need to start a new
    // navigation, we'll just let the follow up loader execution call all loaders

    if (state.navigation.state === "submitting") {
      return;
    } // If we're currently in an idle state, start a new navigation for the current
    // action/location and mark it as uninterrupted, which will skip the history
    // update in completeNavigation

    if (state.navigation.state === "idle") {
      startNavigation(state.historyAction, state.location, {
        startUninterruptedRevalidation: true
      });
      return;
    } // Otherwise, if we're currently in a loading state, just start a new
    // navigation to the navigation.location but do not trigger an uninterrupted
    // revalidation so that history correctly updates once the navigation completes

    startNavigation(pendingAction || state.historyAction, state.navigation.location, {
      overrideNavigation: state.navigation
    });
  } // Start a navigation to the given action/location.  Can optionally provide a
  // overrideNavigation which will override the normalLoad in the case of a redirect
  // navigation
  function startNavigation(_x4, _x5, _x6) {
    return _startNavigation.apply(this, arguments);
  } // Call the action matched by the leaf route for this navigation and handle
  // redirects/errors
  function _startNavigation() {
    _startNavigation = (0, C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/(0, C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee3(historyAction, location, opts) {
      var loadingNavigation, matches, _error, _getShortCircuitMatch2, notFoundMatches, _route, request, pendingActionData, pendingError, actionOutput, navigation, _yield$handleLoaders, shortCircuited, loaderData, errors;
      return (0, C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            // Abort any in-progress navigations and start a new one. Unset any ongoing
            // uninterrupted revalidations unless told otherwise, since we want this
            // new navigation to update history normally
            pendingNavigationController && pendingNavigationController.abort();
            pendingNavigationController = null;
            pendingAction = historyAction;
            isUninterruptedRevalidation = (opts && opts.startUninterruptedRevalidation) === true; // Save the current scroll position every time we start a new navigation,
            // and track whether we should reset scroll on completion

            saveScrollPosition(state.location, state.matches);
            pendingPreventScrollReset = (opts && opts.preventScrollReset) === true;
            loadingNavigation = opts && opts.overrideNavigation;
            matches = matchRoutes(dataRoutes, location, init.basename); // Short circuit with a 404 on the root error boundary if we match nothing
            if (matches) {
              _context3.next = 14;
              break;
            }
            _error = getInternalRouterError(404, {
              pathname: location.pathname
            });
            _getShortCircuitMatch2 = getShortCircuitMatches(dataRoutes), notFoundMatches = _getShortCircuitMatch2.matches, _route = _getShortCircuitMatch2.route; // Cancel all pending deferred on 404s since we don't keep any routes
            cancelActiveDeferreds();
            completeNavigation(location, {
              matches: notFoundMatches,
              loaderData: {},
              errors: (0, C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])({}, _route.id, _error)
            });
            return _context3.abrupt("return");
          case 14:
            if (!(isHashChangeOnly(state.location, location) && !(opts && opts.submission && isMutationMethod(opts.submission.formMethod)))) {
              _context3.next = 17;
              break;
            }
            completeNavigation(location, {
              matches: matches
            });
            return _context3.abrupt("return");
          case 17:
            // Create a controller/Request for this navigation

            pendingNavigationController = new AbortController();
            request = createClientSideRequest(init.history, location, pendingNavigationController.signal, opts && opts.submission);
            if (!(opts && opts.pendingError)) {
              _context3.next = 23;
              break;
            }
            // If we have a pendingError, it means the user attempted a GET submission
            // with binary FormData so assign here and skip to handleLoaders.  That
            // way we handle calling loaders above the boundary etc.  It's not really
            // different from an actionError in that sense.
            pendingError = (0, C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])({}, findNearestBoundary(matches).route.id, opts.pendingError);
            _context3.next = 34;
            break;
          case 23:
            if (!(opts && opts.submission && isMutationMethod(opts.submission.formMethod))) {
              _context3.next = 34;
              break;
            }
            _context3.next = 26;
            return handleAction(request, location, opts.submission, matches, {
              replace: opts.replace
            });
          case 26:
            actionOutput = _context3.sent;
            if (!actionOutput.shortCircuited) {
              _context3.next = 29;
              break;
            }
            return _context3.abrupt("return");
          case 29:
            pendingActionData = actionOutput.pendingActionData;
            pendingError = actionOutput.pendingActionError;
            navigation = _extends({
              state: "loading",
              location: location
            }, opts.submission);
            loadingNavigation = navigation; // Create a GET request for the loaders

            request = new Request(request.url, {
              signal: request.signal
            });
          case 34:
            _context3.next = 36;
            return handleLoaders(request, location, matches, loadingNavigation, opts && opts.submission, opts && opts.replace, pendingActionData, pendingError);
          case 36:
            _yield$handleLoaders = _context3.sent;
            shortCircuited = _yield$handleLoaders.shortCircuited;
            loaderData = _yield$handleLoaders.loaderData;
            errors = _yield$handleLoaders.errors;
            if (!shortCircuited) {
              _context3.next = 42;
              break;
            }
            return _context3.abrupt("return");
          case 42:
            // Clean up now that the action/loaders have completed.  Don't clean up if
            // we short circuited because pendingNavigationController will have already
            // been assigned to a new controller for the next navigation

            pendingNavigationController = null;
            completeNavigation(location, _extends({
              matches: matches
            }, pendingActionData ? {
              actionData: pendingActionData
            } : {}, {
              loaderData: loaderData,
              errors: errors
            }));
          case 44:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    return _startNavigation.apply(this, arguments);
  }
  function handleAction(_x7, _x8, _x9, _x10, _x11) {
    return _handleAction.apply(this, arguments);
  } // Call all applicable loaders for the given matches, handling redirects,
  // errors, etc.
  function _handleAction() {
    _handleAction = (0, C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/(0, C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee4(request, location, submission, matches, opts) {
      var navigation, result, actionMatch, replace, boundaryMatch;
      return (0, C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            interruptActiveLoads(); // Put us in a submitting state
            navigation = _extends({
              state: "submitting",
              location: location
            }, submission);
            updateState({
              navigation: navigation
            }); // Call our action and get the result
            actionMatch = getTargetMatch(matches, location);
            if (actionMatch.route.action) {
              _context4.next = 8;
              break;
            }
            result = {
              type: ResultType.error,
              error: getInternalRouterError(405, {
                method: request.method,
                pathname: location.pathname,
                routeId: actionMatch.route.id
              })
            };
            _context4.next = 13;
            break;
          case 8:
            _context4.next = 10;
            return callLoaderOrAction("action", request, actionMatch, matches, router.basename);
          case 10:
            result = _context4.sent;
            if (!request.signal.aborted) {
              _context4.next = 13;
              break;
            }
            return _context4.abrupt("return", {
              shortCircuited: true
            });
          case 13:
            if (!isRedirectResult(result)) {
              _context4.next = 18;
              break;
            }
            if (opts && opts.replace != null) {
              replace = opts.replace;
            } else {
              // If the user didn't explicity indicate replace behavior, replace if
              // we redirected to the exact same location we're currently at to avoid
              // double back-buttons
              replace = result.location === state.location.pathname + state.location.search;
            }
            _context4.next = 17;
            return startRedirectNavigation(state, result, {
              submission: submission,
              replace: replace
            });
          case 17:
            return _context4.abrupt("return", {
              shortCircuited: true
            });
          case 18:
            if (!isErrorResult(result)) {
              _context4.next = 22;
              break;
            }
            // Store off the pending error - we use it to determine which loaders
            // to call and will commit it when we complete the navigation
            boundaryMatch = findNearestBoundary(matches, actionMatch.route.id); // By default, all submissions are REPLACE navigations, but if the
            // action threw an error that'll be rendered in an errorElement, we fall
            // back to PUSH so that the user can use the back button to get back to
            // the pre-submission form location to try again
            if ((opts && opts.replace) !== true) {
              pendingAction = Action.Push;
            }
            return _context4.abrupt("return", {
              // Send back an empty object we can use to clear out any prior actionData
              pendingActionData: {},
              pendingActionError: (0, C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])({}, boundaryMatch.route.id, result.error)
            });
          case 22:
            if (!isDeferredResult(result)) {
              _context4.next = 24;
              break;
            }
            throw getInternalRouterError(400, {
              type: "defer-action"
            });
          case 24:
            return _context4.abrupt("return", {
              pendingActionData: (0, C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])({}, actionMatch.route.id, result.data)
            });
          case 25:
          case "end":
            return _context4.stop();
        }
      }, _callee4);
    }));
    return _handleAction.apply(this, arguments);
  }
  function handleLoaders(_x12, _x13, _x14, _x15, _x16, _x17, _x18, _x19) {
    return _handleLoaders.apply(this, arguments);
  }
  function _handleLoaders() {
    _handleLoaders = (0, C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/(0, C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee5(request, location, matches, overrideNavigation, submission, replace, pendingActionData, pendingError) {
      var loadingNavigation, navigation, activeSubmission, _getMatchesToLoad, _getMatchesToLoad2, matchesToLoad, revalidatingFetchers, actionData, _yield$callLoadersAnd, results, loaderResults, fetcherResults, redirect, _processLoaderData, loaderData, errors, didAbortFetchLoads;
      return (0, C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            // Figure out the right navigation we want to use for data loading
            loadingNavigation = overrideNavigation;
            if (!loadingNavigation) {
              navigation = _extends({
                state: "loading",
                location: location,
                formMethod: undefined,
                formAction: undefined,
                formEncType: undefined,
                formData: undefined
              }, submission);
              loadingNavigation = navigation;
            } // If this was a redirect from an action we don't have a "submission" but
            // we have it on the loading navigation so use that if available
            activeSubmission = submission ? submission : loadingNavigation.formMethod && loadingNavigation.formAction && loadingNavigation.formData && loadingNavigation.formEncType ? {
              formMethod: loadingNavigation.formMethod,
              formAction: loadingNavigation.formAction,
              formData: loadingNavigation.formData,
              formEncType: loadingNavigation.formEncType
            } : undefined;
            _getMatchesToLoad = getMatchesToLoad(init.history, state, matches, activeSubmission, location, isRevalidationRequired, cancelledDeferredRoutes, cancelledFetcherLoads, pendingActionData, pendingError, fetchLoadMatches), _getMatchesToLoad2 = (0, C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_getMatchesToLoad, 2), matchesToLoad = _getMatchesToLoad2[0], revalidatingFetchers = _getMatchesToLoad2[1]; // Cancel pending deferreds for no-longer-matched routes or routes we're
            // about to reload.  Note that if this is an action reload we would have
            // already cancelled all pending deferreds so this would be a no-op
            cancelActiveDeferreds(function (routeId) {
              return !(matches && matches.some(function (m) {
                return m.route.id === routeId;
              })) || matchesToLoad && matchesToLoad.some(function (m) {
                return m.route.id === routeId;
              });
            }); // Short circuit if we have no loaders to run
            if (!(matchesToLoad.length === 0 && revalidatingFetchers.length === 0)) {
              _context5.next = 8;
              break;
            }
            completeNavigation(location, _extends({
              matches: matches,
              loaderData: {},
              // Commit pending error if we're short circuiting
              errors: pendingError || null
            }, pendingActionData ? {
              actionData: pendingActionData
            } : {}));
            return _context5.abrupt("return", {
              shortCircuited: true
            });
          case 8:
            // If this is an uninterrupted revalidation, we remain in our current idle
            // state.  If not, we need to switch to our loading state and load data,
            // preserving any new action data or existing action data (in the case of
            // a revalidation interrupting an actionReload)

            if (!isUninterruptedRevalidation) {
              revalidatingFetchers.forEach(function (rf) {
                var fetcher = state.fetchers.get(rf.key);
                var revalidatingFetcher = {
                  state: "loading",
                  data: fetcher && fetcher.data,
                  formMethod: undefined,
                  formAction: undefined,
                  formEncType: undefined,
                  formData: undefined,
                  " _hasFetcherDoneAnything ": true
                };
                state.fetchers.set(rf.key, revalidatingFetcher);
              });
              actionData = pendingActionData || state.actionData;
              updateState(_extends({
                navigation: loadingNavigation
              }, actionData ? Object.keys(actionData).length === 0 ? {
                actionData: null
              } : {
                actionData: actionData
              } : {}, revalidatingFetchers.length > 0 ? {
                fetchers: new Map(state.fetchers)
              } : {}));
            }
            pendingNavigationLoadId = ++incrementingLoadId;
            revalidatingFetchers.forEach(function (rf) {
              return fetchControllers.set(rf.key, pendingNavigationController);
            });
            _context5.next = 13;
            return callLoadersAndMaybeResolveData(state.matches, matches, matchesToLoad, revalidatingFetchers, request);
          case 13:
            _yield$callLoadersAnd = _context5.sent;
            results = _yield$callLoadersAnd.results;
            loaderResults = _yield$callLoadersAnd.loaderResults;
            fetcherResults = _yield$callLoadersAnd.fetcherResults;
            if (!request.signal.aborted) {
              _context5.next = 19;
              break;
            }
            return _context5.abrupt("return", {
              shortCircuited: true
            });
          case 19:
            // Clean up _after_ loaders have completed.  Don't clean up if we short
            // circuited because fetchControllers would have been aborted and
            // reassigned to new controllers for the next navigation

            revalidatingFetchers.forEach(function (rf) {
              return fetchControllers.delete(rf.key);
            }); // If any loaders returned a redirect Response, start a new REPLACE navigation
            redirect = findRedirect(results);
            if (!redirect) {
              _context5.next = 25;
              break;
            }
            _context5.next = 24;
            return startRedirectNavigation(state, redirect, {
              replace: replace
            });
          case 24:
            return _context5.abrupt("return", {
              shortCircuited: true
            });
          case 25:
            // Process and commit output from loaders
            _processLoaderData = processLoaderData(state, matches, matchesToLoad, loaderResults, pendingError, revalidatingFetchers, fetcherResults, activeDeferreds), loaderData = _processLoaderData.loaderData, errors = _processLoaderData.errors; // Wire up subscribers to update loaderData as promises settle
            activeDeferreds.forEach(function (deferredData, routeId) {
              deferredData.subscribe(function (aborted) {
                // Note: No need to updateState here since the TrackedPromise on
                // loaderData is stable across resolve/reject
                // Remove this instance if we were aborted or if promises have settled
                if (aborted || deferredData.done) {
                  activeDeferreds.delete(routeId);
                }
              });
            });
            markFetchRedirectsDone();
            didAbortFetchLoads = abortStaleFetchLoads(pendingNavigationLoadId);
            return _context5.abrupt("return", _extends({
              loaderData: loaderData,
              errors: errors
            }, didAbortFetchLoads || revalidatingFetchers.length > 0 ? {
              fetchers: new Map(state.fetchers)
            } : {}));
          case 30:
          case "end":
            return _context5.stop();
        }
      }, _callee5);
    }));
    return _handleLoaders.apply(this, arguments);
  }
  function getFetcher(key) {
    return state.fetchers.get(key) || IDLE_FETCHER;
  } // Trigger a fetcher load/submit for the given fetcher key

  function fetch(key, routeId, href, opts) {
    if (isServer) {
      throw new Error("router.fetch() was called during the server render, but it shouldn't be. " + "You are likely calling a useFetcher() method in the body of your component. " + "Try moving it to a useEffect or a callback.");
    }
    if (fetchControllers.has(key)) abortFetcher(key);
    var matches = matchRoutes(dataRoutes, href, init.basename);
    if (!matches) {
      setFetcherError(key, routeId, getInternalRouterError(404, {
        pathname: href
      }));
      return;
    }
    var _normalizeNavigateOpt = normalizeNavigateOptions(href, opts, true),
      path = _normalizeNavigateOpt.path,
      submission = _normalizeNavigateOpt.submission;
    var match = getTargetMatch(matches, path);
    pendingPreventScrollReset = (opts && opts.preventScrollReset) === true;
    if (submission && isMutationMethod(submission.formMethod)) {
      handleFetcherAction(key, routeId, path, match, matches, submission);
      return;
    } // Store off the match so we can call it's shouldRevalidate on subsequent
    // revalidations

    fetchLoadMatches.set(key, {
      routeId: routeId,
      path: path,
      match: match,
      matches: matches
    });
    handleFetcherLoader(key, routeId, path, match, matches, submission);
  } // Call the action for the matched fetcher.submit(), and then handle redirects,
  // errors, and revalidation
  function handleFetcherAction(_x20, _x21, _x22, _x23, _x24, _x25) {
    return _handleFetcherAction.apply(this, arguments);
  } // Call the matched loader for fetcher.load(), handling redirects, errors, etc.
  function _handleFetcherAction() {
    _handleFetcherAction = (0, C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/(0, C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee6(key, routeId, path, match, requestMatches, submission) {
      var _error2, existingFetcher, fetcher, abortController, fetchRequest, actionResult, loadingFetcher, nextLocation, revalidationRequest, matches, loadId, loadFetcher, _getMatchesToLoad3, _getMatchesToLoad4, matchesToLoad, revalidatingFetchers, _yield$callLoadersAnd2, results, loaderResults, fetcherResults, redirect, _processLoaderData2, loaderData, errors, doneFetcher, didAbortFetchLoads;
      return (0, C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            interruptActiveLoads();
            fetchLoadMatches.delete(key);
            if (match.route.action) {
              _context6.next = 6;
              break;
            }
            _error2 = getInternalRouterError(405, {
              method: submission.formMethod,
              pathname: path,
              routeId: routeId
            });
            setFetcherError(key, routeId, _error2);
            return _context6.abrupt("return");
          case 6:
            // Put this fetcher into it's submitting state
            existingFetcher = state.fetchers.get(key);
            fetcher = _extends({
              state: "submitting"
            }, submission, {
              data: existingFetcher && existingFetcher.data,
              " _hasFetcherDoneAnything ": true
            });
            state.fetchers.set(key, fetcher);
            updateState({
              fetchers: new Map(state.fetchers)
            }); // Call the action for the fetcher
            abortController = new AbortController();
            fetchRequest = createClientSideRequest(init.history, path, abortController.signal, submission);
            fetchControllers.set(key, abortController);
            _context6.next = 15;
            return callLoaderOrAction("action", fetchRequest, match, requestMatches, router.basename);
          case 15:
            actionResult = _context6.sent;
            if (!fetchRequest.signal.aborted) {
              _context6.next = 19;
              break;
            }
            // We can delete this so long as we weren't aborted by ou our own fetcher
            // re-submit which would have put _new_ controller is in fetchControllers
            if (fetchControllers.get(key) === abortController) {
              fetchControllers.delete(key);
            }
            return _context6.abrupt("return");
          case 19:
            if (!isRedirectResult(actionResult)) {
              _context6.next = 26;
              break;
            }
            fetchControllers.delete(key);
            fetchRedirectIds.add(key);
            loadingFetcher = _extends({
              state: "loading"
            }, submission, {
              data: undefined,
              " _hasFetcherDoneAnything ": true
            });
            state.fetchers.set(key, loadingFetcher);
            updateState({
              fetchers: new Map(state.fetchers)
            });
            return _context6.abrupt("return", startRedirectNavigation(state, actionResult, {
              isFetchActionRedirect: true
            }));
          case 26:
            if (!isErrorResult(actionResult)) {
              _context6.next = 29;
              break;
            }
            setFetcherError(key, routeId, actionResult.error);
            return _context6.abrupt("return");
          case 29:
            if (!isDeferredResult(actionResult)) {
              _context6.next = 31;
              break;
            }
            throw getInternalRouterError(400, {
              type: "defer-action"
            });
          case 31:
            // Start the data load for current matches, or the next location if we're
            // in the middle of a navigation
            nextLocation = state.navigation.location || state.location;
            revalidationRequest = createClientSideRequest(init.history, nextLocation, abortController.signal);
            matches = state.navigation.state !== "idle" ? matchRoutes(dataRoutes, state.navigation.location, init.basename) : state.matches;
            invariant(matches, "Didn't find any matches after fetcher action");
            loadId = ++incrementingLoadId;
            fetchReloadIds.set(key, loadId);
            loadFetcher = _extends({
              state: "loading",
              data: actionResult.data
            }, submission, {
              " _hasFetcherDoneAnything ": true
            });
            state.fetchers.set(key, loadFetcher);
            _getMatchesToLoad3 = getMatchesToLoad(init.history, state, matches, submission, nextLocation, isRevalidationRequired, cancelledDeferredRoutes, cancelledFetcherLoads, (0, C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])({}, match.route.id, actionResult.data), undefined,
            // No need to send through errors since we short circuit above
            fetchLoadMatches), _getMatchesToLoad4 = (0, C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_getMatchesToLoad3, 2), matchesToLoad = _getMatchesToLoad4[0], revalidatingFetchers = _getMatchesToLoad4[1]; // Put all revalidating fetchers into the loading state, except for the
            // current fetcher which we want to keep in it's current loading state which
            // contains it's action submission info + action data
            revalidatingFetchers.filter(function (rf) {
              return rf.key !== key;
            }).forEach(function (rf) {
              var staleKey = rf.key;
              var existingFetcher = state.fetchers.get(staleKey);
              var revalidatingFetcher = {
                state: "loading",
                data: existingFetcher && existingFetcher.data,
                formMethod: undefined,
                formAction: undefined,
                formEncType: undefined,
                formData: undefined,
                " _hasFetcherDoneAnything ": true
              };
              state.fetchers.set(staleKey, revalidatingFetcher);
              fetchControllers.set(staleKey, abortController);
            });
            updateState({
              fetchers: new Map(state.fetchers)
            });
            _context6.next = 44;
            return callLoadersAndMaybeResolveData(state.matches, matches, matchesToLoad, revalidatingFetchers, revalidationRequest);
          case 44:
            _yield$callLoadersAnd2 = _context6.sent;
            results = _yield$callLoadersAnd2.results;
            loaderResults = _yield$callLoadersAnd2.loaderResults;
            fetcherResults = _yield$callLoadersAnd2.fetcherResults;
            if (!abortController.signal.aborted) {
              _context6.next = 50;
              break;
            }
            return _context6.abrupt("return");
          case 50:
            fetchReloadIds.delete(key);
            fetchControllers.delete(key);
            revalidatingFetchers.forEach(function (r) {
              return fetchControllers.delete(r.key);
            });
            redirect = findRedirect(results);
            if (!redirect) {
              _context6.next = 56;
              break;
            }
            return _context6.abrupt("return", startRedirectNavigation(state, redirect));
          case 56:
            // Process and commit output from loaders
            _processLoaderData2 = processLoaderData(state, state.matches, matchesToLoad, loaderResults, undefined, revalidatingFetchers, fetcherResults, activeDeferreds), loaderData = _processLoaderData2.loaderData, errors = _processLoaderData2.errors;
            doneFetcher = {
              state: "idle",
              data: actionResult.data,
              formMethod: undefined,
              formAction: undefined,
              formEncType: undefined,
              formData: undefined,
              " _hasFetcherDoneAnything ": true
            };
            state.fetchers.set(key, doneFetcher);
            didAbortFetchLoads = abortStaleFetchLoads(loadId); // If we are currently in a navigation loading state and this fetcher is
            // more recent than the navigation, we want the newer data so abort the
            // navigation and complete it with the fetcher data
            if (state.navigation.state === "loading" && loadId > pendingNavigationLoadId) {
              invariant(pendingAction, "Expected pending action");
              pendingNavigationController && pendingNavigationController.abort();
              completeNavigation(state.navigation.location, {
                matches: matches,
                loaderData: loaderData,
                errors: errors,
                fetchers: new Map(state.fetchers)
              });
            } else {
              // otherwise just update with the fetcher data, preserving any existing
              // loaderData for loaders that did not need to reload.  We have to
              // manually merge here since we aren't going through completeNavigation
              updateState(_extends({
                errors: errors,
                loaderData: mergeLoaderData(state.loaderData, loaderData, matches, errors)
              }, didAbortFetchLoads ? {
                fetchers: new Map(state.fetchers)
              } : {}));
              isRevalidationRequired = false;
            }
          case 61:
          case "end":
            return _context6.stop();
        }
      }, _callee6);
    }));
    return _handleFetcherAction.apply(this, arguments);
  }
  function handleFetcherLoader(_x26, _x27, _x28, _x29, _x30, _x31) {
    return _handleFetcherLoader.apply(this, arguments);
  }
  /**
   * Utility function to handle redirects returned from an action or loader.
   * Normally, a redirect "replaces" the navigation that triggered it.  So, for
   * example:
   *
   *  - user is on /a
   *  - user clicks a link to /b
   *  - loader for /b redirects to /c
   *
   * In a non-JS app the browser would track the in-flight navigation to /b and
   * then replace it with /c when it encountered the redirect response.  In
   * the end it would only ever update the URL bar with /c.
   *
   * In client-side routing using pushState/replaceState, we aim to emulate
   * this behavior and we also do not update history until the end of the
   * navigation (including processed redirects).  This means that we never
   * actually touch history until we've processed redirects, so we just use
   * the history action from the original navigation (PUSH or REPLACE).
   */
  function _handleFetcherLoader() {
    _handleFetcherLoader = (0, C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/(0, C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee7(key, routeId, path, match, matches, submission) {
      var existingFetcher, loadingFetcher, abortController, fetchRequest, result, boundaryMatch, doneFetcher;
      return (0, C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            existingFetcher = state.fetchers.get(key); // Put this fetcher into it's loading state
            loadingFetcher = _extends({
              state: "loading",
              formMethod: undefined,
              formAction: undefined,
              formEncType: undefined,
              formData: undefined
            }, submission, {
              data: existingFetcher && existingFetcher.data,
              " _hasFetcherDoneAnything ": true
            });
            state.fetchers.set(key, loadingFetcher);
            updateState({
              fetchers: new Map(state.fetchers)
            }); // Call the loader for this fetcher route match
            abortController = new AbortController();
            fetchRequest = createClientSideRequest(init.history, path, abortController.signal);
            fetchControllers.set(key, abortController);
            _context7.next = 9;
            return callLoaderOrAction("loader", fetchRequest, match, matches, router.basename);
          case 9:
            result = _context7.sent;
            if (!isDeferredResult(result)) {
              _context7.next = 17;
              break;
            }
            _context7.next = 13;
            return resolveDeferredData(result, fetchRequest.signal, true);
          case 13:
            _context7.t0 = _context7.sent;
            if (_context7.t0) {
              _context7.next = 16;
              break;
            }
            _context7.t0 = result;
          case 16:
            result = _context7.t0;
          case 17:
            // We can delete this so long as we weren't aborted by ou our own fetcher
            // re-load which would have put _new_ controller is in fetchControllers

            if (fetchControllers.get(key) === abortController) {
              fetchControllers.delete(key);
            }
            if (!fetchRequest.signal.aborted) {
              _context7.next = 20;
              break;
            }
            return _context7.abrupt("return");
          case 20:
            if (!isRedirectResult(result)) {
              _context7.next = 24;
              break;
            }
            _context7.next = 23;
            return startRedirectNavigation(state, result);
          case 23:
            return _context7.abrupt("return");
          case 24:
            if (!isErrorResult(result)) {
              _context7.next = 29;
              break;
            }
            boundaryMatch = findNearestBoundary(state.matches, routeId);
            state.fetchers.delete(key); // TODO: In remix, this would reset to IDLE_NAVIGATION if it was a catch -
            // do we need to behave any differently with our non-redirect errors?
            // What if it was a non-redirect Response?

            updateState({
              fetchers: new Map(state.fetchers),
              errors: (0, C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])({}, boundaryMatch.route.id, result.error)
            });
            return _context7.abrupt("return");
          case 29:
            invariant(!isDeferredResult(result), "Unhandled fetcher deferred data"); // Put the fetcher back into an idle state
            doneFetcher = {
              state: "idle",
              data: result.data,
              formMethod: undefined,
              formAction: undefined,
              formEncType: undefined,
              formData: undefined,
              " _hasFetcherDoneAnything ": true
            };
            state.fetchers.set(key, doneFetcher);
            updateState({
              fetchers: new Map(state.fetchers)
            });
          case 33:
          case "end":
            return _context7.stop();
        }
      }, _callee7);
    }));
    return _handleFetcherLoader.apply(this, arguments);
  }
  function startRedirectNavigation(_x32, _x33, _x34) {
    return _startRedirectNavigation.apply(this, arguments);
  }
  function _startRedirectNavigation() {
    _startRedirectNavigation = (0, C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/(0, C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee8(state, redirect, _temp) {
      var _window, _ref6, submission, replace, isFetchActionRedirect, redirectLocation, newOrigin, redirectHistoryAction, _state$navigation, formMethod, formAction, formEncType, formData;
      return (0, C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee8$(_context8) {
        while (1) switch (_context8.prev = _context8.next) {
          case 0:
            _ref6 = _temp === void 0 ? {} : _temp, submission = _ref6.submission, replace = _ref6.replace, isFetchActionRedirect = _ref6.isFetchActionRedirect;
            if (redirect.revalidate) {
              isRevalidationRequired = true;
            }
            redirectLocation = createLocation(state.location, redirect.location,
            // TODO: This can be removed once we get rid of useTransition in Remix v2
            _extends({
              _isRedirect: true
            }, isFetchActionRedirect ? {
              _isFetchActionRedirect: true
            } : {}));
            invariant(redirectLocation, "Expected a location on the redirect navigation"); // Check if this an absolute external redirect that goes to a new origin
            if (!(ABSOLUTE_URL_REGEX.test(redirect.location) && isBrowser && typeof ((_window = window) == null ? void 0 : _window.location) !== "undefined")) {
              _context8.next = 9;
              break;
            }
            newOrigin = init.history.createURL(redirect.location).origin;
            if (!(window.location.origin !== newOrigin)) {
              _context8.next = 9;
              break;
            }
            if (replace) {
              window.location.replace(redirect.location);
            } else {
              window.location.assign(redirect.location);
            }
            return _context8.abrupt("return");
          case 9:
            // There's no need to abort on redirects, since we don't detect the
            // redirect until the action/loaders have settled

            pendingNavigationController = null;
            redirectHistoryAction = replace === true ? Action.Replace : Action.Push; // Use the incoming submission if provided, fallback on the active one in
            // state.navigation
            _state$navigation = state.navigation, formMethod = _state$navigation.formMethod, formAction = _state$navigation.formAction, formEncType = _state$navigation.formEncType, formData = _state$navigation.formData;
            if (!submission && formMethod && formAction && formData && formEncType) {
              submission = {
                formMethod: formMethod,
                formAction: formAction,
                formEncType: formEncType,
                formData: formData
              };
            } // If this was a 307/308 submission we want to preserve the HTTP method and
            // re-submit the GET/POST/PUT/PATCH/DELETE as a submission navigation to the
            // redirected location
            if (!(redirectPreserveMethodStatusCodes.has(redirect.status) && submission && isMutationMethod(submission.formMethod))) {
              _context8.next = 18;
              break;
            }
            _context8.next = 16;
            return startNavigation(redirectHistoryAction, redirectLocation, {
              submission: _extends({}, submission, {
                formAction: redirect.location
              }),
              // Preserve this flag across redirects
              preventScrollReset: pendingPreventScrollReset
            });
          case 16:
            _context8.next = 20;
            break;
          case 18:
            _context8.next = 20;
            return startNavigation(redirectHistoryAction, redirectLocation, {
              overrideNavigation: {
                state: "loading",
                location: redirectLocation,
                formMethod: submission ? submission.formMethod : undefined,
                formAction: submission ? submission.formAction : undefined,
                formEncType: submission ? submission.formEncType : undefined,
                formData: submission ? submission.formData : undefined
              },
              // Preserve this flag across redirects
              preventScrollReset: pendingPreventScrollReset
            });
          case 20:
          case "end":
            return _context8.stop();
        }
      }, _callee8);
    }));
    return _startRedirectNavigation.apply(this, arguments);
  }
  function callLoadersAndMaybeResolveData(_x35, _x36, _x37, _x38, _x39) {
    return _callLoadersAndMaybeResolveData.apply(this, arguments);
  }
  function _callLoadersAndMaybeResolveData() {
    _callLoadersAndMaybeResolveData = (0, C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/(0, C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee9(currentMatches, matches, matchesToLoad, fetchersToLoad, request) {
      var results, loaderResults, fetcherResults;
      return (0, C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee9$(_context9) {
        while (1) switch (_context9.prev = _context9.next) {
          case 0:
            _context9.next = 2;
            return Promise.all([].concat((0, C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_11__["default"])(matchesToLoad.map(function (match) {
              return callLoaderOrAction("loader", request, match, matches, router.basename);
            })), (0, C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_11__["default"])(fetchersToLoad.map(function (f) {
              return callLoaderOrAction("loader", createClientSideRequest(init.history, f.path, request.signal), f.match, f.matches, router.basename);
            }))));
          case 2:
            results = _context9.sent;
            loaderResults = results.slice(0, matchesToLoad.length);
            fetcherResults = results.slice(matchesToLoad.length);
            _context9.next = 7;
            return Promise.all([resolveDeferredResults(currentMatches, matchesToLoad, loaderResults, request.signal, false, state.loaderData), resolveDeferredResults(currentMatches, fetchersToLoad.map(function (f) {
              return f.match;
            }), fetcherResults, request.signal, true)]);
          case 7:
            return _context9.abrupt("return", {
              results: results,
              loaderResults: loaderResults,
              fetcherResults: fetcherResults
            });
          case 8:
          case "end":
            return _context9.stop();
        }
      }, _callee9);
    }));
    return _callLoadersAndMaybeResolveData.apply(this, arguments);
  }
  function interruptActiveLoads() {
    var _cancelledDeferredRou;
    // Every interruption triggers a revalidation
    isRevalidationRequired = true; // Cancel pending route-level deferreds and mark cancelled routes for
    // revalidation

    (_cancelledDeferredRou = cancelledDeferredRoutes).push.apply(_cancelledDeferredRou, (0, C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_11__["default"])(cancelActiveDeferreds())); // Abort in-flight fetcher loads

    fetchLoadMatches.forEach(function (_, key) {
      if (fetchControllers.has(key)) {
        cancelledFetcherLoads.push(key);
        abortFetcher(key);
      }
    });
  }
  function setFetcherError(key, routeId, error) {
    var boundaryMatch = findNearestBoundary(state.matches, routeId);
    deleteFetcher(key);
    updateState({
      errors: (0, C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])({}, boundaryMatch.route.id, error),
      fetchers: new Map(state.fetchers)
    });
  }
  function deleteFetcher(key) {
    if (fetchControllers.has(key)) abortFetcher(key);
    fetchLoadMatches.delete(key);
    fetchReloadIds.delete(key);
    fetchRedirectIds.delete(key);
    state.fetchers.delete(key);
  }
  function abortFetcher(key) {
    var controller = fetchControllers.get(key);
    invariant(controller, "Expected fetch controller: " + key);
    controller.abort();
    fetchControllers.delete(key);
  }
  function markFetchersDone(keys) {
    var _iterator3 = (0, C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_10__["default"])(keys),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var key = _step3.value;
        var fetcher = getFetcher(key);
        var doneFetcher = {
          state: "idle",
          data: fetcher.data,
          formMethod: undefined,
          formAction: undefined,
          formEncType: undefined,
          formData: undefined,
          " _hasFetcherDoneAnything ": true
        };
        state.fetchers.set(key, doneFetcher);
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
  }
  function markFetchRedirectsDone() {
    var doneKeys = [];
    var _iterator4 = (0, C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_10__["default"])(fetchRedirectIds),
      _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var key = _step4.value;
        var fetcher = state.fetchers.get(key);
        invariant(fetcher, "Expected fetcher: " + key);
        if (fetcher.state === "loading") {
          fetchRedirectIds.delete(key);
          doneKeys.push(key);
        }
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
    markFetchersDone(doneKeys);
  }
  function abortStaleFetchLoads(landedId) {
    var yeetedKeys = [];
    var _iterator5 = (0, C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_10__["default"])(fetchReloadIds),
      _step5;
    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var _step5$value = (0,C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_step5.value, 2),
          key = _step5$value[0],
          id = _step5$value[1];
        if (id < landedId) {
          var fetcher = state.fetchers.get(key);
          invariant(fetcher, "Expected fetcher: " + key);
          if (fetcher.state === "loading") {
            abortFetcher(key);
            fetchReloadIds.delete(key);
            yeetedKeys.push(key);
          }
        }
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }
    markFetchersDone(yeetedKeys);
    return yeetedKeys.length > 0;
  }
  function getBlocker(key, fn) {
    var blocker = state.blockers.get(key) || IDLE_BLOCKER;
    if (blockerFunctions.get(key) !== fn) {
      blockerFunctions.set(key, fn);
    }
    return blocker;
  }
  function deleteBlocker(key) {
    state.blockers.delete(key);
    blockerFunctions.delete(key);
  } // Utility function to update blockers, ensuring valid state transitions

  function updateBlocker(key, newBlocker) {
    var blocker = state.blockers.get(key) || IDLE_BLOCKER; // Poor mans state machine :)
    // https://mermaid.live/edit#pako:eNqVkc9OwzAMxl8l8nnjAYrEtDIOHEBIgwvKJTReGy3_lDpIqO27k6awMG0XcrLlnz87nwdonESogKXXBuE79rq75XZO3-yHds0RJVuv70YrPlUrCEe2HfrORS3rubqZfuhtpg5C9wk5tZ4VKcRUq88q9Z8RS0-48cE1iHJkL0ugbHuFLus9L6spZy8nX9MP2CNdomVaposqu3fGayT8T8-jJQwhepo_UtpgBQaDEUom04dZhAN1aJBDlUKJBxE1ceB2Smj0Mln-IBW5AFU2dwUiktt_2Qaq2dBfaKdEup85UV7Yd-dKjlnkabl2Pvr0DTkTreM

    invariant(blocker.state === "unblocked" && newBlocker.state === "blocked" || blocker.state === "blocked" && newBlocker.state === "blocked" || blocker.state === "blocked" && newBlocker.state === "proceeding" || blocker.state === "blocked" && newBlocker.state === "unblocked" || blocker.state === "proceeding" && newBlocker.state === "unblocked", "Invalid blocker state transition: " + blocker.state + " -> " + newBlocker.state);
    state.blockers.set(key, newBlocker);
    updateState({
      blockers: new Map(state.blockers)
    });
  }
  function shouldBlockNavigation(_ref2) {
    var currentLocation = _ref2.currentLocation,
      nextLocation = _ref2.nextLocation,
      historyAction = _ref2.historyAction;
    if (blockerFunctions.size === 0) {
      return;
    } // We ony support a single active blocker at the moment since we don't have
    // any compelling use cases for multi-blocker yet

    if (blockerFunctions.size > 1) {
      warning(false, "A router only supports one blocker at a time");
    }
    var entries = Array.from(blockerFunctions.entries());
    var _entries = (0, C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__["default"])(entries[entries.length - 1], 2),
      blockerKey = _entries[0],
      blockerFunction = _entries[1];
    var blocker = state.blockers.get(blockerKey);
    if (blocker && blocker.state === "proceeding") {
      // If the blocker is currently proceeding, we don't need to re-check
      // it and can let this navigation continue
      return;
    } // At this point, we know we're unblocked/blocked so we need to check the
    // user-provided blocker function

    if (blockerFunction({
      currentLocation: currentLocation,
      nextLocation: nextLocation,
      historyAction: historyAction
    })) {
      return blockerKey;
    }
  }
  function cancelActiveDeferreds(predicate) {
    var cancelledRouteIds = [];
    activeDeferreds.forEach(function (dfd, routeId) {
      if (!predicate || predicate(routeId)) {
        // Cancel the deferred - but do not remove from activeDeferreds here -
        // we rely on the subscribers to do that so our tests can assert proper
        // cleanup via _internalActiveDeferreds
        dfd.cancel();
        cancelledRouteIds.push(routeId);
        activeDeferreds.delete(routeId);
      }
    });
    return cancelledRouteIds;
  } // Opt in to capturing and reporting scroll positions during navigations,
  // used by the <ScrollRestoration> component

  function enableScrollRestoration(positions, getPosition, getKey) {
    savedScrollPositions = positions;
    getScrollPosition = getPosition;
    getScrollRestorationKey = getKey || function (location) {
      return location.key;
    }; // Perform initial hydration scroll restoration, since we miss the boat on
    // the initial updateState() because we've not yet rendered <ScrollRestoration/>
    // and therefore have no savedScrollPositions available

    if (!initialScrollRestored && state.navigation === IDLE_NAVIGATION) {
      initialScrollRestored = true;
      var y = getSavedScrollPosition(state.location, state.matches);
      if (y != null) {
        updateState({
          restoreScrollPosition: y
        });
      }
    }
    return function () {
      savedScrollPositions = null;
      getScrollPosition = null;
      getScrollRestorationKey = null;
    };
  }
  function saveScrollPosition(location, matches) {
    if (savedScrollPositions && getScrollRestorationKey && getScrollPosition) {
      var userMatches = matches.map(function (m) {
        return createUseMatchesMatch(m, state.loaderData);
      });
      var key = getScrollRestorationKey(location, userMatches) || location.key;
      savedScrollPositions[key] = getScrollPosition();
    }
  }
  function getSavedScrollPosition(location, matches) {
    if (savedScrollPositions && getScrollRestorationKey && getScrollPosition) {
      var userMatches = matches.map(function (m) {
        return createUseMatchesMatch(m, state.loaderData);
      });
      var key = getScrollRestorationKey(location, userMatches) || location.key;
      var y = savedScrollPositions[key];
      if (typeof y === "number") {
        return y;
      }
    }
    return null;
  }
  router = {
    get basename() {
      return init.basename;
    },
    get state() {
      return state;
    },
    get routes() {
      return dataRoutes;
    },
    initialize: initialize,
    subscribe: subscribe,
    enableScrollRestoration: enableScrollRestoration,
    navigate: navigate,
    fetch: fetch,
    revalidate: revalidate,
    // Passthrough to history-aware createHref used by useHref so we get proper
    // hash-aware URLs in DOM paths
    createHref: function createHref(to) {
      return init.history.createHref(to);
    },
    encodeLocation: function encodeLocation(to) {
      return init.history.encodeLocation(to);
    },
    getFetcher: getFetcher,
    deleteFetcher: deleteFetcher,
    dispose: dispose,
    getBlocker: getBlocker,
    deleteBlocker: deleteBlocker,
    _internalFetchControllers: fetchControllers,
    _internalActiveDeferreds: activeDeferreds
  };
  return router;
} //#endregion
////////////////////////////////////////////////////////////////////////////////
//#region createStaticHandler
////////////////////////////////////////////////////////////////////////////////

var UNSAFE_DEFERRED_SYMBOL = Symbol("deferred");
function createStaticHandler(routes, opts) {
  invariant(routes.length > 0, "You must provide a non-empty routes array to createStaticHandler");
  var dataRoutes = convertRoutesToDataRoutes(routes);
  var basename = (opts ? opts.basename : null) || "/";
  /**
   * The query() method is intended for document requests, in which we want to
   * call an optional action and potentially multiple loaders for all nested
   * routes.  It returns a StaticHandlerContext object, which is very similar
   * to the router state (location, loaderData, actionData, errors, etc.) and
   * also adds SSR-specific information such as the statusCode and headers
   * from action/loaders Responses.
   *
   * It _should_ never throw and should report all errors through the
   * returned context.errors object, properly associating errors to their error
   * boundary.  Additionally, it tracks _deepestRenderedBoundaryId which can be
   * used to emulate React error boundaries during SSr by performing a second
   * pass only down to the boundaryId.
   *
   * The one exception where we do not return a StaticHandlerContext is when a
   * redirect response is returned or thrown from any action/loader.  We
   * propagate that out and return the raw Response so the HTTP server can
   * return it directly.
   */
  function query(_x40, _x41) {
    return _query.apply(this, arguments);
  }
  /**
   * The queryRoute() method is intended for targeted route requests, either
   * for fetch ?_data requests or resource route requests.  In this case, we
   * are only ever calling a single action or loader, and we are returning the
   * returned value directly.  In most cases, this will be a Response returned
   * from the action/loader, but it may be a primitive or other value as well -
   * and in such cases the calling context should handle that accordingly.
   *
   * We do respect the throw/return differentiation, so if an action/loader
   * throws, then this method will throw the value.  This is important so we
   * can do proper boundary identification in Remix where a thrown Response
   * must go to the Catch Boundary but a returned Response is happy-path.
   *
   * One thing to note is that any Router-initiated Errors that make sense
   * to associate with a status code will be thrown as an ErrorResponse
   * instance which include the raw Error, such that the calling context can
   * serialize the error as they see fit while including the proper response
   * code.  Examples here are 404 and 405 errors that occur prior to reaching
   * any user-defined loaders.
   */
  function _query() {
    _query = (0, C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/(0, C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee10(request, _temp2) {
      var _ref7, requestContext, url, method, location, matches, error, _getShortCircuitMatch3, methodNotAllowedMatches, route, _error3, _getShortCircuitMatch4, notFoundMatches, _route2, result;
      return (0, C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee10$(_context10) {
        while (1) switch (_context10.prev = _context10.next) {
          case 0:
            _ref7 = _temp2 === void 0 ? {} : _temp2, requestContext = _ref7.requestContext;
            url = new URL(request.url);
            method = request.method.toLowerCase();
            location = createLocation("", createPath(url), null, "default");
            matches = matchRoutes(dataRoutes, location, basename); // SSR supports HEAD requests while SPA doesn't
            if (!(!isValidMethod(method) && method !== "head")) {
              _context10.next = 11;
              break;
            }
            error = getInternalRouterError(405, {
              method: method
            });
            _getShortCircuitMatch3 = getShortCircuitMatches(dataRoutes), methodNotAllowedMatches = _getShortCircuitMatch3.matches, route = _getShortCircuitMatch3.route;
            return _context10.abrupt("return", {
              basename: basename,
              location: location,
              matches: methodNotAllowedMatches,
              loaderData: {},
              actionData: null,
              errors: (0, C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])({}, route.id, error),
              statusCode: error.status,
              loaderHeaders: {},
              actionHeaders: {},
              activeDeferreds: null
            });
          case 11:
            if (matches) {
              _context10.next = 15;
              break;
            }
            _error3 = getInternalRouterError(404, {
              pathname: location.pathname
            });
            _getShortCircuitMatch4 = getShortCircuitMatches(dataRoutes), notFoundMatches = _getShortCircuitMatch4.matches, _route2 = _getShortCircuitMatch4.route;
            return _context10.abrupt("return", {
              basename: basename,
              location: location,
              matches: notFoundMatches,
              loaderData: {},
              actionData: null,
              errors: (0, C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])({}, _route2.id, _error3),
              statusCode: _error3.status,
              loaderHeaders: {},
              actionHeaders: {},
              activeDeferreds: null
            });
          case 15:
            _context10.next = 17;
            return queryImpl(request, location, matches, requestContext);
          case 17:
            result = _context10.sent;
            if (!isResponse(result)) {
              _context10.next = 20;
              break;
            }
            return _context10.abrupt("return", result);
          case 20:
            return _context10.abrupt("return", _extends({
              location: location,
              basename: basename
            }, result));
          case 21:
          case "end":
            return _context10.stop();
        }
      }, _callee10);
    }));
    return _query.apply(this, arguments);
  }
  function queryRoute(_x42, _x43) {
    return _queryRoute.apply(this, arguments);
  }
  function _queryRoute() {
    _queryRoute = (0, C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/(0, C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee11(request, _temp3) {
      var _ref8, routeId, requestContext, url, method, location, matches, match, result, error, _result$activeDeferre, data;
      return (0, C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee11$(_context11) {
        while (1) switch (_context11.prev = _context11.next) {
          case 0:
            _ref8 = _temp3 === void 0 ? {} : _temp3, routeId = _ref8.routeId, requestContext = _ref8.requestContext;
            url = new URL(request.url);
            method = request.method.toLowerCase();
            location = createLocation("", createPath(url), null, "default");
            matches = matchRoutes(dataRoutes, location, basename); // SSR supports HEAD requests while SPA doesn't
            if (!(!isValidMethod(method) && method !== "head" && method !== "options")) {
              _context11.next = 9;
              break;
            }
            throw getInternalRouterError(405, {
              method: method
            });
          case 9:
            if (matches) {
              _context11.next = 11;
              break;
            }
            throw getInternalRouterError(404, {
              pathname: location.pathname
            });
          case 11:
            match = routeId ? matches.find(function (m) {
              return m.route.id === routeId;
            }) : getTargetMatch(matches, location);
            if (!(routeId && !match)) {
              _context11.next = 16;
              break;
            }
            throw getInternalRouterError(403, {
              pathname: location.pathname,
              routeId: routeId
            });
          case 16:
            if (match) {
              _context11.next = 18;
              break;
            }
            throw getInternalRouterError(404, {
              pathname: location.pathname
            });
          case 18:
            _context11.next = 20;
            return queryImpl(request, location, matches, requestContext, match);
          case 20:
            result = _context11.sent;
            if (!isResponse(result)) {
              _context11.next = 23;
              break;
            }
            return _context11.abrupt("return", result);
          case 23:
            error = result.errors ? Object.values(result.errors)[0] : undefined;
            if (!(error !== undefined)) {
              _context11.next = 26;
              break;
            }
            throw error;
          case 26:
            if (!result.actionData) {
              _context11.next = 28;
              break;
            }
            return _context11.abrupt("return", Object.values(result.actionData)[0]);
          case 28:
            if (!result.loaderData) {
              _context11.next = 32;
              break;
            }
            data = Object.values(result.loaderData)[0];
            if ((_result$activeDeferre = result.activeDeferreds) != null && _result$activeDeferre[match.route.id]) {
              data[UNSAFE_DEFERRED_SYMBOL] = result.activeDeferreds[match.route.id];
            }
            return _context11.abrupt("return", data);
          case 32:
            return _context11.abrupt("return", undefined);
          case 33:
          case "end":
            return _context11.stop();
        }
      }, _callee11);
    }));
    return _queryRoute.apply(this, arguments);
  }
  function queryImpl(_x44, _x45, _x46, _x47, _x48) {
    return _queryImpl.apply(this, arguments);
  }
  function _queryImpl() {
    _queryImpl = (0, C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/(0, C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee12(request, location, matches, requestContext, routeMatch) {
      var _result, result;
      return (0, C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee12$(_context12) {
        while (1) switch (_context12.prev = _context12.next) {
          case 0:
            invariant(request.signal, "query()/queryRoute() requests must contain an AbortController signal");
            _context12.prev = 1;
            if (!isMutationMethod(request.method.toLowerCase())) {
              _context12.next = 7;
              break;
            }
            _context12.next = 5;
            return submit(request, matches, routeMatch || getTargetMatch(matches, location), requestContext, routeMatch != null);
          case 5:
            _result = _context12.sent;
            return _context12.abrupt("return", _result);
          case 7:
            _context12.next = 9;
            return loadRouteData(request, matches, requestContext, routeMatch);
          case 9:
            result = _context12.sent;
            return _context12.abrupt("return", isResponse(result) ? result : _extends({}, result, {
              actionData: null,
              actionHeaders: {}
            }));
          case 13:
            _context12.prev = 13;
            _context12.t0 = _context12["catch"](1);
            if (!isQueryRouteResponse(_context12.t0)) {
              _context12.next = 19;
              break;
            }
            if (!(_context12.t0.type === ResultType.error && !isRedirectResponse(_context12.t0.response))) {
              _context12.next = 18;
              break;
            }
            throw _context12.t0.response;
          case 18:
            return _context12.abrupt("return", _context12.t0.response);
          case 19:
            if (!isRedirectResponse(_context12.t0)) {
              _context12.next = 21;
              break;
            }
            return _context12.abrupt("return", _context12.t0);
          case 21:
            throw _context12.t0;
          case 22:
          case "end":
            return _context12.stop();
        }
      }, _callee12, null, [[1, 13]]);
    }));
    return _queryImpl.apply(this, arguments);
  }
  function submit(_x49, _x50, _x51, _x52, _x53) {
    return _submit.apply(this, arguments);
  }
  function _submit() {
    _submit = (0, C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/(0, C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee13(request, matches, actionMatch, requestContext, isRouteRequest) {
      var result, error, method, _error4, boundaryMatch, _context13, loaderRequest, context;
      return (0, C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee13$(_context14) {
        while (1) switch (_context14.prev = _context14.next) {
          case 0:
            if (actionMatch.route.action) {
              _context14.next = 7;
              break;
            }
            error = getInternalRouterError(405, {
              method: request.method,
              pathname: new URL(request.url).pathname,
              routeId: actionMatch.route.id
            });
            if (!isRouteRequest) {
              _context14.next = 4;
              break;
            }
            throw error;
          case 4:
            result = {
              type: ResultType.error,
              error: error
            };
            _context14.next = 13;
            break;
          case 7:
            _context14.next = 9;
            return callLoaderOrAction("action", request, actionMatch, matches, basename, true, isRouteRequest, requestContext);
          case 9:
            result = _context14.sent;
            if (!request.signal.aborted) {
              _context14.next = 13;
              break;
            }
            method = isRouteRequest ? "queryRoute" : "query";
            throw new Error(method + "() call aborted");
          case 13:
            if (!isRedirectResult(result)) {
              _context14.next = 15;
              break;
            }
            throw new Response(null, {
              status: result.status,
              headers: {
                Location: result.location
              }
            });
          case 15:
            if (!isDeferredResult(result)) {
              _context14.next = 20;
              break;
            }
            _error4 = getInternalRouterError(400, {
              type: "defer-action"
            });
            if (!isRouteRequest) {
              _context14.next = 19;
              break;
            }
            throw _error4;
          case 19:
            result = {
              type: ResultType.error,
              error: _error4
            };
          case 20:
            if (!isRouteRequest) {
              _context14.next = 24;
              break;
            }
            if (!isErrorResult(result)) {
              _context14.next = 23;
              break;
            }
            throw result.error;
          case 23:
            return _context14.abrupt("return", {
              matches: [actionMatch],
              loaderData: {},
              actionData: (0, C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])({}, actionMatch.route.id, result.data),
              errors: null,
              // Note: statusCode + headers are unused here since queryRoute will
              // return the raw Response or value
              statusCode: 200,
              loaderHeaders: {},
              actionHeaders: {},
              activeDeferreds: null
            });
          case 24:
            if (!isErrorResult(result)) {
              _context14.next = 30;
              break;
            }
            // Store off the pending error - we use it to determine which loaders
            // to call and will commit it when we complete the navigation
            boundaryMatch = findNearestBoundary(matches, actionMatch.route.id);
            _context14.next = 28;
            return loadRouteData(request, matches, requestContext, undefined, (0, C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])({}, boundaryMatch.route.id, result.error));
          case 28:
            _context13 = _context14.sent;
            return _context14.abrupt("return", _extends({}, _context13, {
              statusCode: isRouteErrorResponse(result.error) ? result.error.status : 500,
              actionData: null,
              actionHeaders: _extends({}, result.headers ? (0, C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])({}, actionMatch.route.id, result.headers) : {})
            }));
          case 30:
            // Create a GET request for the loaders
            loaderRequest = new Request(request.url, {
              headers: request.headers,
              redirect: request.redirect,
              signal: request.signal
            });
            _context14.next = 33;
            return loadRouteData(loaderRequest, matches, requestContext);
          case 33:
            context = _context14.sent;
            return _context14.abrupt("return", _extends({}, context, result.statusCode ? {
              statusCode: result.statusCode
            } : {}, {
              actionData: (0, C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])({}, actionMatch.route.id, result.data),
              actionHeaders: _extends({}, result.headers ? (0, C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])({}, actionMatch.route.id, result.headers) : {})
            }));
          case 35:
          case "end":
            return _context14.stop();
        }
      }, _callee13);
    }));
    return _submit.apply(this, arguments);
  }
  function loadRouteData(_x54, _x55, _x56, _x57, _x58) {
    return _loadRouteData.apply(this, arguments);
  }
  function _loadRouteData() {
    _loadRouteData = (0, C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/(0, C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee14(request, matches, requestContext, routeMatch, pendingActionError) {
      var isRouteRequest, requestMatches, matchesToLoad, results, method, activeDeferreds, context, executedLoaders;
      return (0, C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee14$(_context15) {
        while (1) switch (_context15.prev = _context15.next) {
          case 0:
            isRouteRequest = routeMatch != null; // Short circuit if we have no loaders to run (queryRoute())
            if (!(isRouteRequest && !(routeMatch != null && routeMatch.route.loader))) {
              _context15.next = 3;
              break;
            }
            throw getInternalRouterError(400, {
              method: request.method,
              pathname: new URL(request.url).pathname,
              routeId: routeMatch == null ? void 0 : routeMatch.route.id
            });
          case 3:
            requestMatches = routeMatch ? [routeMatch] : getLoaderMatchesUntilBoundary(matches, Object.keys(pendingActionError || {})[0]);
            matchesToLoad = requestMatches.filter(function (m) {
              return m.route.loader;
            }); // Short circuit if we have no loaders to run (query())
            if (!(matchesToLoad.length === 0)) {
              _context15.next = 7;
              break;
            }
            return _context15.abrupt("return", {
              matches: matches,
              // Add a null for all matched routes for proper revalidation on the client
              loaderData: matches.reduce(function (acc, m) {
                return Object.assign(acc, (0, C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])({}, m.route.id, null));
              }, {}),
              errors: pendingActionError || null,
              statusCode: 200,
              loaderHeaders: {},
              activeDeferreds: null
            });
          case 7:
            _context15.next = 9;
            return Promise.all((0, C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_11__["default"])(matchesToLoad.map(function (match) {
              return callLoaderOrAction("loader", request, match, matches, basename, true, isRouteRequest, requestContext);
            })));
          case 9:
            results = _context15.sent;
            if (!request.signal.aborted) {
              _context15.next = 13;
              break;
            }
            method = isRouteRequest ? "queryRoute" : "query";
            throw new Error(method + "() call aborted");
          case 13:
            // Process and commit output from loaders
            activeDeferreds = new Map();
            context = processRouteLoaderData(matches, matchesToLoad, results, pendingActionError, activeDeferreds); // Add a null for any non-loader matches for proper revalidation on the client
            executedLoaders = new Set(matchesToLoad.map(function (match) {
              return match.route.id;
            }));
            matches.forEach(function (match) {
              if (!executedLoaders.has(match.route.id)) {
                context.loaderData[match.route.id] = null;
              }
            });
            return _context15.abrupt("return", _extends({}, context, {
              matches: matches,
              activeDeferreds: activeDeferreds.size > 0 ? Object.fromEntries(activeDeferreds.entries()) : null
            }));
          case 18:
          case "end":
            return _context15.stop();
        }
      }, _callee14);
    }));
    return _loadRouteData.apply(this, arguments);
  }
  return {
    dataRoutes: dataRoutes,
    query: query,
    queryRoute: queryRoute
  };
} //#endregion
////////////////////////////////////////////////////////////////////////////////
//#region Helpers
////////////////////////////////////////////////////////////////////////////////

/**
 * Given an existing StaticHandlerContext and an error thrown at render time,
 * provide an updated StaticHandlerContext suitable for a second SSR render
 */

function getStaticContextFromError(routes, context, error) {
  var newContext = _extends({}, context, {
    statusCode: 500,
    errors: (0, C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])({}, context._deepestRenderedBoundaryId || routes[0].id, error)
  });
  return newContext;
}
function isSubmissionNavigation(opts) {
  return opts != null && "formData" in opts;
} // Normalize navigation options by converting formMethod=GET formData objects to
// URLSearchParams so they behave identically to links with query params

function normalizeNavigateOptions(to, opts, isFetcher) {
  if (isFetcher === void 0) {
    isFetcher = false;
  }
  var path = typeof to === "string" ? to : createPath(to); // Return location verbatim on non-submission navigations

  if (!opts || !isSubmissionNavigation(opts)) {
    return {
      path: path
    };
  }
  if (opts.formMethod && !isValidMethod(opts.formMethod)) {
    return {
      path: path,
      error: getInternalRouterError(405, {
        method: opts.formMethod
      })
    };
  } // Create a Submission on non-GET navigations

  var submission;
  if (opts.formData) {
    submission = {
      formMethod: opts.formMethod || "get",
      formAction: stripHashFromPath(path),
      formEncType: opts && opts.formEncType || "application/x-www-form-urlencoded",
      formData: opts.formData
    };
    if (isMutationMethod(submission.formMethod)) {
      return {
        path: path,
        submission: submission
      };
    }
  } // Flatten submission onto URLSearchParams for GET submissions

  var parsedPath = parsePath(path);
  var searchParams = convertFormDataToSearchParams(opts.formData); // Since fetcher GET submissions only run a single loader (as opposed to
  // navigation GET submissions which run all loaders), we need to preserve
  // any incoming ?index params

  if (isFetcher && parsedPath.search && hasNakedIndexQuery(parsedPath.search)) {
    searchParams.append("index", "");
  }
  parsedPath.search = "?" + searchParams;
  return {
    path: createPath(parsedPath),
    submission: submission
  };
} // Filter out all routes below any caught error as they aren't going to
// render so we don't need to load them

function getLoaderMatchesUntilBoundary(matches, boundaryId) {
  var boundaryMatches = matches;
  if (boundaryId) {
    var index = matches.findIndex(function (m) {
      return m.route.id === boundaryId;
    });
    if (index >= 0) {
      boundaryMatches = matches.slice(0, index);
    }
  }
  return boundaryMatches;
}
function getMatchesToLoad(history, state, matches, submission, location, isRevalidationRequired, cancelledDeferredRoutes, cancelledFetcherLoads, pendingActionData, pendingError, fetchLoadMatches) {
  var actionResult = pendingError ? Object.values(pendingError)[0] : pendingActionData ? Object.values(pendingActionData)[0] : undefined;
  var currentUrl = history.createURL(state.location);
  var nextUrl = history.createURL(location);
  var defaultShouldRevalidate =
  // Forced revalidation due to submission, useRevalidate, or X-Remix-Revalidate
  isRevalidationRequired ||
  // Clicked the same link, resubmitted a GET form
  currentUrl.toString() === nextUrl.toString() ||
  // Search params affect all loaders
  currentUrl.search !== nextUrl.search; // Pick navigation matches that are net-new or qualify for revalidation

  var boundaryId = pendingError ? Object.keys(pendingError)[0] : undefined;
  var boundaryMatches = getLoaderMatchesUntilBoundary(matches, boundaryId);
  var navigationMatches = boundaryMatches.filter(function (match, index) {
    if (match.route.loader == null) {
      return false;
    } // Always call the loader on new route instances and pending defer cancellations

    if (isNewLoader(state.loaderData, state.matches[index], match) || cancelledDeferredRoutes.some(function (id) {
      return id === match.route.id;
    })) {
      return true;
    } // This is the default implementation for when we revalidate.  If the route
    // provides it's own implementation, then we give them full control but
    // provide this value so they can leverage it if needed after they check
    // their own specific use cases

    var currentRouteMatch = state.matches[index];
    var nextRouteMatch = match;
    return shouldRevalidateLoader(match, _extends({
      currentUrl: currentUrl,
      currentParams: currentRouteMatch.params,
      nextUrl: nextUrl,
      nextParams: nextRouteMatch.params
    }, submission, {
      actionResult: actionResult,
      defaultShouldRevalidate: defaultShouldRevalidate || isNewRouteInstance(currentRouteMatch, nextRouteMatch)
    }));
  }); // Pick fetcher.loads that need to be revalidated

  var revalidatingFetchers = [];
  fetchLoadMatches && fetchLoadMatches.forEach(function (f, key) {
    if (!matches.some(function (m) {
      return m.route.id === f.routeId;
    })) {
      // This fetcher is not going to be present in the subsequent render so
      // there's no need to revalidate it
      return;
    } else if (cancelledFetcherLoads.includes(key)) {
      // This fetcher was cancelled from a prior action submission - force reload
      revalidatingFetchers.push(_extends({
        key: key
      }, f));
    } else {
      // Revalidating fetchers are decoupled from the route matches since they
      // hit a static href, so they _always_ check shouldRevalidate and the
      // default is strictly if a revalidation is explicitly required (action
      // submissions, useRevalidator, X-Remix-Revalidate).
      var shouldRevalidate = shouldRevalidateLoader(f.match, _extends({
        currentUrl: currentUrl,
        currentParams: state.matches[state.matches.length - 1].params,
        nextUrl: nextUrl,
        nextParams: matches[matches.length - 1].params
      }, submission, {
        actionResult: actionResult,
        defaultShouldRevalidate: defaultShouldRevalidate
      }));
      if (shouldRevalidate) {
        revalidatingFetchers.push(_extends({
          key: key
        }, f));
      }
    }
  });
  return [navigationMatches, revalidatingFetchers];
}
function isNewLoader(currentLoaderData, currentMatch, match) {
  var isNew =
  // [a] -> [a, b]
  !currentMatch ||
  // [a, b] -> [a, c]
  match.route.id !== currentMatch.route.id; // Handle the case that we don't have data for a re-used route, potentially
  // from a prior error or from a cancelled pending deferred

  var isMissingData = currentLoaderData[match.route.id] === undefined; // Always load if this is a net-new route or we don't yet have data

  return isNew || isMissingData;
}
function isNewRouteInstance(currentMatch, match) {
  var currentPath = currentMatch.route.path;
  return (
    // param change for this match, /users/123 -> /users/456
    currentMatch.pathname !== match.pathname ||
    // splat param changed, which is not present in match.path
    // e.g. /files/images/avatar.jpg -> files/finances.xls
    currentPath != null && currentPath.endsWith("*") && currentMatch.params["*"] !== match.params["*"]
  );
}
function shouldRevalidateLoader(loaderMatch, arg) {
  if (loaderMatch.route.shouldRevalidate) {
    var routeChoice = loaderMatch.route.shouldRevalidate(arg);
    if (typeof routeChoice === "boolean") {
      return routeChoice;
    }
  }
  return arg.defaultShouldRevalidate;
}
function callLoaderOrAction(_x59, _x60, _x61, _x62, _x63, _x64, _x65, _x66) {
  return _callLoaderOrAction.apply(this, arguments);
} // Utility method for creating the Request instances for loaders/actions during
// client-side navigations and fetches.  During SSR we will always have a
// Request instance from the static handler (query/queryRoute)
function _callLoaderOrAction() {
  _callLoaderOrAction = (0, C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/(0, C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee15(type, request, match, matches, basename, isStaticRequest, isRouteRequest, requestContext) {
    var resultType, result, reject, abortPromise, onReject, handler, status, location, activeMatches, routePathnames, resolvedLocation, path, currentUrl, url, data, contentType;
    return (0, C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee15$(_context16) {
      while (1) switch (_context16.prev = _context16.next) {
        case 0:
          if (basename === void 0) {
            basename = "/";
          }
          if (isStaticRequest === void 0) {
            isStaticRequest = false;
          }
          if (isRouteRequest === void 0) {
            isRouteRequest = false;
          }
          abortPromise = new Promise(function (_, r) {
            return reject = r;
          });
          onReject = function onReject() {
            return reject();
          };
          request.signal.addEventListener("abort", onReject);
          _context16.prev = 6;
          handler = match.route[type];
          invariant(handler, "Could not find the " + type + " to run on the \"" + match.route.id + "\" route");
          _context16.next = 11;
          return Promise.race([handler({
            request: request,
            params: match.params,
            context: requestContext
          }), abortPromise]);
        case 11:
          result = _context16.sent;
          invariant(result !== undefined, "You defined " + (type === "action" ? "an action" : "a loader") + " for route " + ("\"" + match.route.id + "\" but didn't return anything from your `" + type + "` ") + "function. Please return a value or `null`.");
          _context16.next = 19;
          break;
        case 15:
          _context16.prev = 15;
          _context16.t0 = _context16["catch"](6);
          resultType = ResultType.error;
          result = _context16.t0;
        case 19:
          _context16.prev = 19;
          request.signal.removeEventListener("abort", onReject);
          return _context16.finish(19);
        case 22:
          if (!isResponse(result)) {
            _context16.next = 47;
            break;
          }
          status = result.status; // Process redirects
          if (!redirectStatusCodes.has(status)) {
            _context16.next = 32;
            break;
          }
          location = result.headers.get("Location");
          invariant(location, "Redirects returned/thrown from loaders/actions must have a Location header"); // Support relative routing in internal redirects

          if (!ABSOLUTE_URL_REGEX.test(location)) {
            activeMatches = matches.slice(0, matches.indexOf(match) + 1);
            routePathnames = getPathContributingMatches(activeMatches).map(function (match) {
              return match.pathnameBase;
            });
            resolvedLocation = resolveTo(location, routePathnames, new URL(request.url).pathname);
            invariant(createPath(resolvedLocation), "Unable to resolve redirect location: " + location); // Prepend the basename to the redirect location if we have one

            if (basename) {
              path = resolvedLocation.pathname;
              resolvedLocation.pathname = path === "/" ? basename : joinPaths([basename, path]);
            }
            location = createPath(resolvedLocation);
          } else if (!isStaticRequest) {
            // Strip off the protocol+origin for same-origin absolute redirects.
            // If this is a static reques, we can let it go back to the browser
            // as-is
            currentUrl = new URL(request.url);
            url = location.startsWith("//") ? new URL(currentUrl.protocol + location) : new URL(location);
            if (url.origin === currentUrl.origin) {
              location = url.pathname + url.search + url.hash;
            }
          } // Don't process redirects in the router during static requests requests.
          // Instead, throw the Response and let the server handle it with an HTTP
          // redirect.  We also update the Location header in place in this flow so
          // basename and relative routing is taken into account
          if (!isStaticRequest) {
            _context16.next = 31;
            break;
          }
          result.headers.set("Location", location);
          throw result;
        case 31:
          return _context16.abrupt("return", {
            type: ResultType.redirect,
            status: status,
            location: location,
            revalidate: result.headers.get("X-Remix-Revalidate") !== null
          });
        case 32:
          if (!isRouteRequest) {
            _context16.next = 34;
            break;
          }
          throw {
            type: resultType || ResultType.data,
            response: result
          };
        case 34:
          contentType = result.headers.get("Content-Type"); // Check between word boundaries instead of startsWith() due to the last
          // paragraph of https://httpwg.org/specs/rfc9110.html#field.content-type
          if (!(contentType && /\bapplication\/json\b/.test(contentType))) {
            _context16.next = 41;
            break;
          }
          _context16.next = 38;
          return result.json();
        case 38:
          data = _context16.sent;
          _context16.next = 44;
          break;
        case 41:
          _context16.next = 43;
          return result.text();
        case 43:
          data = _context16.sent;
        case 44:
          if (!(resultType === ResultType.error)) {
            _context16.next = 46;
            break;
          }
          return _context16.abrupt("return", {
            type: resultType,
            error: new ErrorResponse(status, result.statusText, data),
            headers: result.headers
          });
        case 46:
          return _context16.abrupt("return", {
            type: ResultType.data,
            data: data,
            statusCode: result.status,
            headers: result.headers
          });
        case 47:
          if (!(resultType === ResultType.error)) {
            _context16.next = 49;
            break;
          }
          return _context16.abrupt("return", {
            type: resultType,
            error: result
          });
        case 49:
          if (!(result instanceof DeferredData)) {
            _context16.next = 51;
            break;
          }
          return _context16.abrupt("return", {
            type: ResultType.deferred,
            deferredData: result
          });
        case 51:
          return _context16.abrupt("return", {
            type: ResultType.data,
            data: result
          });
        case 52:
        case "end":
          return _context16.stop();
      }
    }, _callee15, null, [[6, 15, 19, 22]]);
  }));
  return _callLoaderOrAction.apply(this, arguments);
}
function createClientSideRequest(history, location, signal, submission) {
  var url = history.createURL(stripHashFromPath(location)).toString();
  var init = {
    signal: signal
  };
  if (submission && isMutationMethod(submission.formMethod)) {
    var formMethod = submission.formMethod,
      formEncType = submission.formEncType,
      formData = submission.formData;
    init.method = formMethod.toUpperCase();
    init.body = formEncType === "application/x-www-form-urlencoded" ? convertFormDataToSearchParams(formData) : formData;
  } // Content-Type is inferred (https://fetch.spec.whatwg.org/#dom-request)

  return new Request(url, init);
}
function convertFormDataToSearchParams(formData) {
  var searchParams = new URLSearchParams();
  var _iterator6 = (0, C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_10__["default"])(formData.entries()),
    _step6;
  try {
    for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
      var _step6$value = (0,C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_step6.value, 2),
        key = _step6$value[0],
        value = _step6$value[1];
      // https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#converting-an-entry-list-to-a-list-of-name-value-pairs
      searchParams.append(key, value instanceof File ? value.name : value);
    }
  } catch (err) {
    _iterator6.e(err);
  } finally {
    _iterator6.f();
  }
  return searchParams;
}
function processRouteLoaderData(matches, matchesToLoad, results, pendingError, activeDeferreds) {
  // Fill in loaderData/errors from our loaders
  var loaderData = {};
  var errors = null;
  var statusCode;
  var foundError = false;
  var loaderHeaders = {}; // Process loader results into state.loaderData/state.errors

  results.forEach(function (result, index) {
    var id = matchesToLoad[index].route.id;
    invariant(!isRedirectResult(result), "Cannot handle redirect results in processLoaderData");
    if (isErrorResult(result)) {
      // Look upwards from the matched route for the closest ancestor
      // error boundary, defaulting to the root match
      var boundaryMatch = findNearestBoundary(matches, id);
      var error = result.error; // If we have a pending action error, we report it at the highest-route
      // that throws a loader error, and then clear it out to indicate that
      // it was consumed

      if (pendingError) {
        error = Object.values(pendingError)[0];
        pendingError = undefined;
      }
      errors = errors || {}; // Prefer higher error values if lower errors bubble to the same boundary

      if (errors[boundaryMatch.route.id] == null) {
        errors[boundaryMatch.route.id] = error;
      } // Clear our any prior loaderData for the throwing route

      loaderData[id] = undefined; // Once we find our first (highest) error, we set the status code and
      // prevent deeper status codes from overriding

      if (!foundError) {
        foundError = true;
        statusCode = isRouteErrorResponse(result.error) ? result.error.status : 500;
      }
      if (result.headers) {
        loaderHeaders[id] = result.headers;
      }
    } else {
      if (isDeferredResult(result)) {
        activeDeferreds.set(id, result.deferredData);
        loaderData[id] = result.deferredData.data;
      } else {
        loaderData[id] = result.data;
      } // Error status codes always override success status codes, but if all
      // loaders are successful we take the deepest status code.

      if (result.statusCode != null && result.statusCode !== 200 && !foundError) {
        statusCode = result.statusCode;
      }
      if (result.headers) {
        loaderHeaders[id] = result.headers;
      }
    }
  }); // If we didn't consume the pending action error (i.e., all loaders
  // resolved), then consume it here.  Also clear out any loaderData for the
  // throwing route

  if (pendingError) {
    errors = pendingError;
    loaderData[Object.keys(pendingError)[0]] = undefined;
  }
  return {
    loaderData: loaderData,
    errors: errors,
    statusCode: statusCode || 200,
    loaderHeaders: loaderHeaders
  };
}
function processLoaderData(state, matches, matchesToLoad, results, pendingError, revalidatingFetchers, fetcherResults, activeDeferreds) {
  var _processRouteLoaderDa = processRouteLoaderData(matches, matchesToLoad, results, pendingError, activeDeferreds),
    loaderData = _processRouteLoaderDa.loaderData,
    errors = _processRouteLoaderDa.errors; // Process results from our revalidating fetchers

  for (var index = 0; index < revalidatingFetchers.length; index++) {
    var _revalidatingFetchers = revalidatingFetchers[index],
      key = _revalidatingFetchers.key,
      match = _revalidatingFetchers.match;
    invariant(fetcherResults !== undefined && fetcherResults[index] !== undefined, "Did not find corresponding fetcher result");
    var result = fetcherResults[index]; // Process fetcher non-redirect errors

    if (isErrorResult(result)) {
      var boundaryMatch = findNearestBoundary(state.matches, match.route.id);
      if (!(errors && errors[boundaryMatch.route.id])) {
        errors = _extends({}, errors, (0, C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])({}, boundaryMatch.route.id, result.error));
      }
      state.fetchers.delete(key);
    } else if (isRedirectResult(result)) {
      // Should never get here, redirects should get processed above, but we
      // keep this to type narrow to a success result in the else
      invariant(false, "Unhandled fetcher revalidation redirect");
    } else if (isDeferredResult(result)) {
      // Should never get here, deferred data should be awaited for fetchers
      // in resolveDeferredResults
      invariant(false, "Unhandled fetcher deferred data");
    } else {
      var doneFetcher = {
        state: "idle",
        data: result.data,
        formMethod: undefined,
        formAction: undefined,
        formEncType: undefined,
        formData: undefined,
        " _hasFetcherDoneAnything ": true
      };
      state.fetchers.set(key, doneFetcher);
    }
  }
  return {
    loaderData: loaderData,
    errors: errors
  };
}
function mergeLoaderData(loaderData, newLoaderData, matches, errors) {
  var mergedLoaderData = _extends({}, newLoaderData);
  var _iterator7 = (0, C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_10__["default"])(matches),
    _step7;
  try {
    for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
      var match = _step7.value;
      var id = match.route.id;
      if (newLoaderData.hasOwnProperty(id)) {
        if (newLoaderData[id] !== undefined) {
          mergedLoaderData[id] = newLoaderData[id];
        }
      } else if (loaderData[id] !== undefined) {
        mergedLoaderData[id] = loaderData[id];
      }
      if (errors && errors.hasOwnProperty(id)) {
        // Don't keep any loader data below the boundary
        break;
      }
    }
  } catch (err) {
    _iterator7.e(err);
  } finally {
    _iterator7.f();
  }
  return mergedLoaderData;
} // Find the nearest error boundary, looking upwards from the leaf route (or the
// route specified by routeId) for the closest ancestor error boundary,
// defaulting to the root match

function findNearestBoundary(matches, routeId) {
  var eligibleMatches = routeId ? matches.slice(0, matches.findIndex(function (m) {
    return m.route.id === routeId;
  }) + 1) : (0, C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_11__["default"])(matches);
  return eligibleMatches.reverse().find(function (m) {
    return m.route.hasErrorBoundary === true;
  }) || matches[0];
}
function getShortCircuitMatches(routes) {
  // Prefer a root layout route if present, otherwise shim in a route object
  var route = routes.find(function (r) {
    return r.index || !r.path || r.path === "/";
  }) || {
    id: "__shim-error-route__"
  };
  return {
    matches: [{
      params: {},
      pathname: "",
      pathnameBase: "",
      route: route
    }],
    route: route
  };
}
function getInternalRouterError(status, _temp4) {
  var _ref11 = _temp4 === void 0 ? {} : _temp4,
    pathname = _ref11.pathname,
    routeId = _ref11.routeId,
    method = _ref11.method,
    type = _ref11.type;
  var statusText = "Unknown Server Error";
  var errorMessage = "Unknown @remix-run/router error";
  if (status === 400) {
    statusText = "Bad Request";
    if (method && pathname && routeId) {
      errorMessage = "You made a " + method + " request to \"" + pathname + "\" but " + ("did not provide a `loader` for route \"" + routeId + "\", ") + "so there is no way to handle the request.";
    } else if (type === "defer-action") {
      errorMessage = "defer() is not supported in actions";
    }
  } else if (status === 403) {
    statusText = "Forbidden";
    errorMessage = "Route \"" + routeId + "\" does not match URL \"" + pathname + "\"";
  } else if (status === 404) {
    statusText = "Not Found";
    errorMessage = "No route matches URL \"" + pathname + "\"";
  } else if (status === 405) {
    statusText = "Method Not Allowed";
    if (method && pathname && routeId) {
      errorMessage = "You made a " + method.toUpperCase() + " request to \"" + pathname + "\" but " + ("did not provide an `action` for route \"" + routeId + "\", ") + "so there is no way to handle the request.";
    } else if (method) {
      errorMessage = "Invalid request method \"" + method.toUpperCase() + "\"";
    }
  }
  return new ErrorResponse(status || 500, statusText, new Error(errorMessage), true);
} // Find any returned redirect errors, starting from the lowest match

function findRedirect(results) {
  for (var i = results.length - 1; i >= 0; i--) {
    var result = results[i];
    if (isRedirectResult(result)) {
      return result;
    }
  }
}
function stripHashFromPath(path) {
  var parsedPath = typeof path === "string" ? parsePath(path) : path;
  return createPath(_extends({}, parsedPath, {
    hash: ""
  }));
}
function isHashChangeOnly(a, b) {
  return a.pathname === b.pathname && a.search === b.search && a.hash !== b.hash;
}
function isDeferredResult(result) {
  return result.type === ResultType.deferred;
}
function isErrorResult(result) {
  return result.type === ResultType.error;
}
function isRedirectResult(result) {
  return (result && result.type) === ResultType.redirect;
}
function isResponse(value) {
  return value != null && typeof value.status === "number" && typeof value.statusText === "string" && typeof value.headers === "object" && typeof value.body !== "undefined";
}
function isRedirectResponse(result) {
  if (!isResponse(result)) {
    return false;
  }
  var status = result.status;
  var location = result.headers.get("Location");
  return status >= 300 && status <= 399 && location != null;
}
function isQueryRouteResponse(obj) {
  return obj && isResponse(obj.response) && (obj.type === ResultType.data || ResultType.error);
}
function isValidMethod(method) {
  return validRequestMethods.has(method);
}
function isMutationMethod(method) {
  return validMutationMethods.has(method);
}
function resolveDeferredResults(_x67, _x68, _x69, _x70, _x71, _x72) {
  return _resolveDeferredResults.apply(this, arguments);
}
function _resolveDeferredResults() {
  _resolveDeferredResults = (0, C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/(0, C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee16(currentMatches, matchesToLoad, results, signal, isFetcher, currentLoaderData) {
    var _loop, index;
    return (0, C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee16$(_context18) {
      while (1) switch (_context18.prev = _context18.next) {
        case 0:
          _loop = /*#__PURE__*/(0, C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _loop(index) {
            var result, match, currentMatch, isRevalidatingLoader;
            return (0, C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _loop$(_context17) {
              while (1) switch (_context17.prev = _context17.next) {
                case 0:
                  result = results[index];
                  match = matchesToLoad[index];
                  currentMatch = currentMatches.find(function (m) {
                    return m.route.id === match.route.id;
                  });
                  isRevalidatingLoader = currentMatch != null && !isNewRouteInstance(currentMatch, match) && (currentLoaderData && currentLoaderData[match.route.id]) !== undefined;
                  if (!(isDeferredResult(result) && (isFetcher || isRevalidatingLoader))) {
                    _context17.next = 7;
                    break;
                  }
                  _context17.next = 7;
                  return resolveDeferredData(result, signal, isFetcher).then(function (result) {
                    if (result) {
                      results[index] = result || results[index];
                    }
                  });
                case 7:
                case "end":
                  return _context17.stop();
              }
            }, _loop);
          });
          index = 0;
        case 2:
          if (!(index < results.length)) {
            _context18.next = 7;
            break;
          }
          return _context18.delegateYield(_loop(index), "t0", 4);
        case 4:
          index++;
          _context18.next = 2;
          break;
        case 7:
        case "end":
          return _context18.stop();
      }
    }, _callee16);
  }));
  return _resolveDeferredResults.apply(this, arguments);
}
function resolveDeferredData(_x73, _x74, _x75) {
  return _resolveDeferredData.apply(this, arguments);
}
function _resolveDeferredData() {
  _resolveDeferredData = (0, C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/(0, C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().mark(function _callee17(result, signal, unwrap) {
    var aborted;
    return (0, C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__["default"])().wrap(function _callee17$(_context19) {
      while (1) switch (_context19.prev = _context19.next) {
        case 0:
          if (unwrap === void 0) {
            unwrap = false;
          }
          _context19.next = 3;
          return result.deferredData.resolveData(signal);
        case 3:
          aborted = _context19.sent;
          if (!aborted) {
            _context19.next = 6;
            break;
          }
          return _context19.abrupt("return");
        case 6:
          if (!unwrap) {
            _context19.next = 14;
            break;
          }
          _context19.prev = 7;
          return _context19.abrupt("return", {
            type: ResultType.data,
            data: result.deferredData.unwrappedData
          });
        case 11:
          _context19.prev = 11;
          _context19.t0 = _context19["catch"](7);
          return _context19.abrupt("return", {
            type: ResultType.error,
            error: _context19.t0
          });
        case 14:
          return _context19.abrupt("return", {
            type: ResultType.data,
            data: result.deferredData.data
          });
        case 15:
        case "end":
          return _context19.stop();
      }
    }, _callee17, null, [[7, 11]]);
  }));
  return _resolveDeferredData.apply(this, arguments);
}
function hasNakedIndexQuery(search) {
  return new URLSearchParams(search).getAll("index").some(function (v) {
    return v === "";
  });
} // Note: This should match the format exported by useMatches, so if you change
// this please also change that :)  Eventually we'll DRY this up

function createUseMatchesMatch(match, loaderData) {
  var route = match.route,
    pathname = match.pathname,
    params = match.params;
  return {
    id: route.id,
    pathname: pathname,
    params: params,
    data: loaderData[route.id],
    handle: route.handle
  };
}
function getTargetMatch(matches, location) {
  var search = typeof location === "string" ? parsePath(location).search : location.search;
  if (matches[matches.length - 1].route.index && hasNakedIndexQuery(search || "")) {
    // Return the leaf index route when index is present
    return matches[matches.length - 1];
  } // Otherwise grab the deepest "path contributing" match (ignoring index and
  // pathless layout routes)

  var pathMatches = getPathContributingMatches(matches);
  return pathMatches[pathMatches.length - 1];
} //#endregion



/***/ }),

/***/ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var reactIs = __webpack_require__("./node_modules/hoist-non-react-statics/node_modules/react-is/index.js");

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;
function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above

  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}
var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);
      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }
    var keys = getOwnPropertyNames(sourceComponent);
    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }
    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);
    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];
      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }
  return targetComponent;
}
module.exports = hoistNonReactStatics;

/***/ }),

/***/ "./node_modules/hoist-non-react-statics/node_modules/react-is/cjs/react-is.production.min.js":
/***/ (function(__unused_webpack_module, exports) {
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var b = "function" === typeof Symbol && Symbol.for,
  c = b ? Symbol.for("react.element") : 60103,
  d = b ? Symbol.for("react.portal") : 60106,
  e = b ? Symbol.for("react.fragment") : 60107,
  f = b ? Symbol.for("react.strict_mode") : 60108,
  g = b ? Symbol.for("react.profiler") : 60114,
  h = b ? Symbol.for("react.provider") : 60109,
  k = b ? Symbol.for("react.context") : 60110,
  l = b ? Symbol.for("react.async_mode") : 60111,
  m = b ? Symbol.for("react.concurrent_mode") : 60111,
  n = b ? Symbol.for("react.forward_ref") : 60112,
  p = b ? Symbol.for("react.suspense") : 60113,
  q = b ? Symbol.for("react.suspense_list") : 60120,
  r = b ? Symbol.for("react.memo") : 60115,
  t = b ? Symbol.for("react.lazy") : 60116,
  v = b ? Symbol.for("react.block") : 60121,
  w = b ? Symbol.for("react.fundamental") : 60117,
  x = b ? Symbol.for("react.responder") : 60118,
  y = b ? Symbol.for("react.scope") : 60119;
function z(a) {
  if ("object" === typeof a && null !== a) {
    var u = a.$$typeof;
    switch (u) {
      case c:
        switch (a = a.type, a) {
          case l:
          case m:
          case e:
          case g:
          case f:
          case p:
            return a;
          default:
            switch (a = a && a.$$typeof, a) {
              case k:
              case n:
              case t:
              case r:
              case h:
                return a;
              default:
                return u;
            }
        }
      case d:
        return u;
    }
  }
}
function A(a) {
  return z(a) === m;
}
exports.AsyncMode = l;
exports.ConcurrentMode = m;
exports.ContextConsumer = k;
exports.ContextProvider = h;
exports.Element = c;
exports.ForwardRef = n;
exports.Fragment = e;
exports.Lazy = t;
exports.Memo = r;
exports.Portal = d;
exports.Profiler = g;
exports.StrictMode = f;
exports.Suspense = p;
exports.isAsyncMode = function (a) {
  return A(a) || z(a) === l;
};
exports.isConcurrentMode = A;
exports.isContextConsumer = function (a) {
  return z(a) === k;
};
exports.isContextProvider = function (a) {
  return z(a) === h;
};
exports.isElement = function (a) {
  return "object" === typeof a && null !== a && a.$$typeof === c;
};
exports.isForwardRef = function (a) {
  return z(a) === n;
};
exports.isFragment = function (a) {
  return z(a) === e;
};
exports.isLazy = function (a) {
  return z(a) === t;
};
exports.isMemo = function (a) {
  return z(a) === r;
};
exports.isPortal = function (a) {
  return z(a) === d;
};
exports.isProfiler = function (a) {
  return z(a) === g;
};
exports.isStrictMode = function (a) {
  return z(a) === f;
};
exports.isSuspense = function (a) {
  return z(a) === p;
};
exports.isValidElementType = function (a) {
  return "string" === typeof a || "function" === typeof a || a === e || a === m || a === g || a === f || a === p || a === q || "object" === typeof a && null !== a && (a.$$typeof === t || a.$$typeof === r || a.$$typeof === h || a.$$typeof === k || a.$$typeof === n || a.$$typeof === w || a.$$typeof === x || a.$$typeof === y || a.$$typeof === v);
};
exports.typeOf = z;

/***/ }),

/***/ "./node_modules/hoist-non-react-statics/node_modules/react-is/index.js":
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


{
  module.exports = __webpack_require__("./node_modules/hoist-non-react-statics/node_modules/react-is/cjs/react-is.production.min.js");
}

/***/ }),

/***/ "./node_modules/mdi-react/GithubIcon.js":
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


function _interopDefault(ex) {
  return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex;
}
var React = _interopDefault(__webpack_require__("./node_modules/react/index.js"));
var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
};
var objectWithoutProperties = function objectWithoutProperties(obj, keys) {
  var target = {};
  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }
  return target;
};
var GithubIcon = function GithubIcon(_ref) {
  var _ref$color = _ref.color,
    color = _ref$color === undefined ? 'currentColor' : _ref$color,
    _ref$size = _ref.size,
    size = _ref$size === undefined ? 24 : _ref$size;
    _ref.children;
    var props = objectWithoutProperties(_ref, ['color', 'size', 'children']);
  var className = 'mdi-icon ' + (props.className || '');
  return React.createElement('svg', _extends({}, props, {
    className: className,
    width: size,
    height: size,
    fill: color,
    viewBox: '0 0 24 24'
  }), React.createElement('path', {
    d: 'M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z'
  }));
};
var GithubIcon$1 = React.memo ? React.memo(GithubIcon) : GithubIcon;
module.exports = GithubIcon$1;

/***/ }),

/***/ "./node_modules/react-dom/cjs/react-dom.production.min.js":
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/*
 Modernizr 3.0.0pre (Custom Build) | MIT
*/


var aa = __webpack_require__("./node_modules/react/index.js"),
  ca = __webpack_require__("./node_modules/scheduler/index.js");
function p(a) {
  for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++) b += "&args[]=" + encodeURIComponent(arguments[c]);
  return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var da = new Set(),
  ea = {};
function fa(a, b) {
  ha(a, b);
  ha(a + "Capture", b);
}
function ha(a, b) {
  ea[a] = b;
  for (a = 0; a < b.length; a++) da.add(b[a]);
}
var ia = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement),
  ja = Object.prototype.hasOwnProperty,
  ka = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  la = {},
  ma = {};
function oa(a) {
  if (ja.call(ma, a)) return !0;
  if (ja.call(la, a)) return !1;
  if (ka.test(a)) return ma[a] = !0;
  la[a] = !0;
  return !1;
}
function pa(a, b, c, d) {
  if (null !== c && 0 === c.type) return !1;
  switch (typeof b) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      if (d) return !1;
      if (null !== c) return !c.acceptsBooleans;
      a = a.toLowerCase().slice(0, 5);
      return "data-" !== a && "aria-" !== a;
    default:
      return !1;
  }
}
function qa(a, b, c, d) {
  if (null === b || "undefined" === typeof b || pa(a, b, c, d)) return !0;
  if (d) return !1;
  if (null !== c) switch (c.type) {
    case 3:
      return !b;
    case 4:
      return !1 === b;
    case 5:
      return isNaN(b);
    case 6:
      return isNaN(b) || 1 > b;
  }
  return !1;
}
function v(a, b, c, d, e, f, g) {
  this.acceptsBooleans = 2 === b || 3 === b || 4 === b;
  this.attributeName = d;
  this.attributeNamespace = e;
  this.mustUseProperty = c;
  this.propertyName = a;
  this.type = b;
  this.sanitizeURL = f;
  this.removeEmptyString = g;
}
var z = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function (a) {
  z[a] = new v(a, 0, !1, a, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function (a) {
  var b = a[0];
  z[b] = new v(b, 1, !1, a[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (a) {
  z[a] = new v(a, 2, !1, a.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (a) {
  z[a] = new v(a, 2, !1, a, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function (a) {
  z[a] = new v(a, 3, !1, a.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function (a) {
  z[a] = new v(a, 3, !0, a, null, !1, !1);
});
["capture", "download"].forEach(function (a) {
  z[a] = new v(a, 4, !1, a, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (a) {
  z[a] = new v(a, 6, !1, a, null, !1, !1);
});
["rowSpan", "start"].forEach(function (a) {
  z[a] = new v(a, 5, !1, a.toLowerCase(), null, !1, !1);
});
var ra = /[\-:]([a-z])/g;
function sa(a) {
  return a[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function (a) {
  var b = a.replace(ra, sa);
  z[b] = new v(b, 1, !1, a, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (a) {
  var b = a.replace(ra, sa);
  z[b] = new v(b, 1, !1, a, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function (a) {
  var b = a.replace(ra, sa);
  z[b] = new v(b, 1, !1, a, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (a) {
  z[a] = new v(a, 1, !1, a.toLowerCase(), null, !1, !1);
});
z.xlinkHref = new v("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function (a) {
  z[a] = new v(a, 1, !1, a.toLowerCase(), null, !0, !0);
});
function ta(a, b, c, d) {
  var e = z.hasOwnProperty(b) ? z[b] : null;
  if (null !== e ? 0 !== e.type : d || !(2 < b.length) || "o" !== b[0] && "O" !== b[0] || "n" !== b[1] && "N" !== b[1]) qa(b, c, e, d) && (c = null), d || null === e ? oa(b) && (null === c ? a.removeAttribute(b) : a.setAttribute(b, "" + c)) : e.mustUseProperty ? a[e.propertyName] = null === c ? 3 === e.type ? !1 : "" : c : (b = e.attributeName, d = e.attributeNamespace, null === c ? a.removeAttribute(b) : (e = e.type, c = 3 === e || 4 === e && !0 === c ? "" : "" + c, d ? a.setAttributeNS(d, b, c) : a.setAttribute(b, c)));
}
var ua = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  va = Symbol.for("react.element"),
  wa = Symbol.for("react.portal"),
  ya = Symbol.for("react.fragment"),
  za = Symbol.for("react.strict_mode"),
  Aa = Symbol.for("react.profiler"),
  Ba = Symbol.for("react.provider"),
  Ca = Symbol.for("react.context"),
  Da = Symbol.for("react.forward_ref"),
  Ea = Symbol.for("react.suspense"),
  Fa = Symbol.for("react.suspense_list"),
  Ga = Symbol.for("react.memo"),
  Ha = Symbol.for("react.lazy");
var Ia = Symbol.for("react.offscreen");
var Ja = Symbol.iterator;
function Ka(a) {
  if (null === a || "object" !== typeof a) return null;
  a = Ja && a[Ja] || a["@@iterator"];
  return "function" === typeof a ? a : null;
}
var A = Object.assign,
  La;
function Ma(a) {
  if (void 0 === La) try {
    throw Error();
  } catch (c) {
    var b = c.stack.trim().match(/\n( *(at )?)/);
    La = b && b[1] || "";
  }
  return "\n" + La + a;
}
var Na = !1;
function Oa(a, b) {
  if (!a || Na) return "";
  Na = !0;
  var c = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (b) {
      if (b = function b() {
        throw Error();
      }, Object.defineProperty(b.prototype, "props", {
        set: function set() {
          throw Error();
        }
      }), "object" === typeof Reflect && Reflect.construct) {
        try {
          Reflect.construct(b, []);
        } catch (l) {
          var d = l;
        }
        Reflect.construct(a, [], b);
      } else {
        try {
          b.call();
        } catch (l) {
          d = l;
        }
        a.call(b.prototype);
      }
    } else {
      try {
        throw Error();
      } catch (l) {
        d = l;
      }
      a();
    }
  } catch (l) {
    if (l && d && "string" === typeof l.stack) {
      for (var e = l.stack.split("\n"), f = d.stack.split("\n"), g = e.length - 1, h = f.length - 1; 1 <= g && 0 <= h && e[g] !== f[h];) h--;
      for (; 1 <= g && 0 <= h; g--, h--) if (e[g] !== f[h]) {
        if (1 !== g || 1 !== h) {
          do if (g--, h--, 0 > h || e[g] !== f[h]) {
            var k = "\n" + e[g].replace(" at new ", " at ");
            a.displayName && k.includes("<anonymous>") && (k = k.replace("<anonymous>", a.displayName));
            return k;
          } while (1 <= g && 0 <= h);
        }
        break;
      }
    }
  } finally {
    Na = !1, Error.prepareStackTrace = c;
  }
  return (a = a ? a.displayName || a.name : "") ? Ma(a) : "";
}
function Pa(a) {
  switch (a.tag) {
    case 5:
      return Ma(a.type);
    case 16:
      return Ma("Lazy");
    case 13:
      return Ma("Suspense");
    case 19:
      return Ma("SuspenseList");
    case 0:
    case 2:
    case 15:
      return a = Oa(a.type, !1), a;
    case 11:
      return a = Oa(a.type.render, !1), a;
    case 1:
      return a = Oa(a.type, !0), a;
    default:
      return "";
  }
}
function Qa(a) {
  if (null == a) return null;
  if ("function" === typeof a) return a.displayName || a.name || null;
  if ("string" === typeof a) return a;
  switch (a) {
    case ya:
      return "Fragment";
    case wa:
      return "Portal";
    case Aa:
      return "Profiler";
    case za:
      return "StrictMode";
    case Ea:
      return "Suspense";
    case Fa:
      return "SuspenseList";
  }
  if ("object" === typeof a) switch (a.$$typeof) {
    case Ca:
      return (a.displayName || "Context") + ".Consumer";
    case Ba:
      return (a._context.displayName || "Context") + ".Provider";
    case Da:
      var b = a.render;
      a = a.displayName;
      a || (a = b.displayName || b.name || "", a = "" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
      return a;
    case Ga:
      return b = a.displayName || null, null !== b ? b : Qa(a.type) || "Memo";
    case Ha:
      b = a._payload;
      a = a._init;
      try {
        return Qa(a(b));
      } catch (c) {}
  }
  return null;
}
function Ra(a) {
  var b = a.type;
  switch (a.tag) {
    case 24:
      return "Cache";
    case 9:
      return (b.displayName || "Context") + ".Consumer";
    case 10:
      return (b._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return a = b.render, a = a.displayName || a.name || "", b.displayName || ("" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return b;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Qa(b);
    case 8:
      return b === za ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if ("function" === typeof b) return b.displayName || b.name || null;
      if ("string" === typeof b) return b;
  }
  return null;
}
function Sa(a) {
  switch (typeof a) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return a;
    case "object":
      return a;
    default:
      return "";
  }
}
function Ta(a) {
  var b = a.type;
  return (a = a.nodeName) && "input" === a.toLowerCase() && ("checkbox" === b || "radio" === b);
}
function Ua(a) {
  var b = Ta(a) ? "checked" : "value",
    c = Object.getOwnPropertyDescriptor(a.constructor.prototype, b),
    d = "" + a[b];
  if (!a.hasOwnProperty(b) && "undefined" !== typeof c && "function" === typeof c.get && "function" === typeof c.set) {
    var e = c.get,
      f = c.set;
    Object.defineProperty(a, b, {
      configurable: !0,
      get: function get() {
        return e.call(this);
      },
      set: function set(a) {
        d = "" + a;
        f.call(this, a);
      }
    });
    Object.defineProperty(a, b, {
      enumerable: c.enumerable
    });
    return {
      getValue: function getValue() {
        return d;
      },
      setValue: function setValue(a) {
        d = "" + a;
      },
      stopTracking: function stopTracking() {
        a._valueTracker = null;
        delete a[b];
      }
    };
  }
}
function Va(a) {
  a._valueTracker || (a._valueTracker = Ua(a));
}
function Wa(a) {
  if (!a) return !1;
  var b = a._valueTracker;
  if (!b) return !0;
  var c = b.getValue();
  var d = "";
  a && (d = Ta(a) ? a.checked ? "true" : "false" : a.value);
  a = d;
  return a !== c ? (b.setValue(a), !0) : !1;
}
function Xa(a) {
  a = a || ("undefined" !== typeof document ? document : void 0);
  if ("undefined" === typeof a) return null;
  try {
    return a.activeElement || a.body;
  } catch (b) {
    return a.body;
  }
}
function Ya(a, b) {
  var c = b.checked;
  return A({}, b, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: null != c ? c : a._wrapperState.initialChecked
  });
}
function Za(a, b) {
  var c = null == b.defaultValue ? "" : b.defaultValue,
    d = null != b.checked ? b.checked : b.defaultChecked;
  c = Sa(null != b.value ? b.value : c);
  a._wrapperState = {
    initialChecked: d,
    initialValue: c,
    controlled: "checkbox" === b.type || "radio" === b.type ? null != b.checked : null != b.value
  };
}
function ab(a, b) {
  b = b.checked;
  null != b && ta(a, "checked", b, !1);
}
function bb(a, b) {
  ab(a, b);
  var c = Sa(b.value),
    d = b.type;
  if (null != c) {
    if ("number" === d) {
      if (0 === c && "" === a.value || a.value != c) a.value = "" + c;
    } else a.value !== "" + c && (a.value = "" + c);
  } else if ("submit" === d || "reset" === d) {
    a.removeAttribute("value");
    return;
  }
  b.hasOwnProperty("value") ? cb(a, b.type, c) : b.hasOwnProperty("defaultValue") && cb(a, b.type, Sa(b.defaultValue));
  null == b.checked && null != b.defaultChecked && (a.defaultChecked = !!b.defaultChecked);
}
function db(a, b, c) {
  if (b.hasOwnProperty("value") || b.hasOwnProperty("defaultValue")) {
    var d = b.type;
    if (!("submit" !== d && "reset" !== d || void 0 !== b.value && null !== b.value)) return;
    b = "" + a._wrapperState.initialValue;
    c || b === a.value || (a.value = b);
    a.defaultValue = b;
  }
  c = a.name;
  "" !== c && (a.name = "");
  a.defaultChecked = !!a._wrapperState.initialChecked;
  "" !== c && (a.name = c);
}
function cb(a, b, c) {
  if ("number" !== b || Xa(a.ownerDocument) !== a) null == c ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c && (a.defaultValue = "" + c);
}
var eb = Array.isArray;
function fb(a, b, c, d) {
  a = a.options;
  if (b) {
    b = {};
    for (var e = 0; e < c.length; e++) b["$" + c[e]] = !0;
    for (c = 0; c < a.length; c++) e = b.hasOwnProperty("$" + a[c].value), a[c].selected !== e && (a[c].selected = e), e && d && (a[c].defaultSelected = !0);
  } else {
    c = "" + Sa(c);
    b = null;
    for (e = 0; e < a.length; e++) {
      if (a[e].value === c) {
        a[e].selected = !0;
        d && (a[e].defaultSelected = !0);
        return;
      }
      null !== b || a[e].disabled || (b = a[e]);
    }
    null !== b && (b.selected = !0);
  }
}
function gb(a, b) {
  if (null != b.dangerouslySetInnerHTML) throw Error(p(91));
  return A({}, b, {
    value: void 0,
    defaultValue: void 0,
    children: "" + a._wrapperState.initialValue
  });
}
function hb(a, b) {
  var c = b.value;
  if (null == c) {
    c = b.children;
    b = b.defaultValue;
    if (null != c) {
      if (null != b) throw Error(p(92));
      if (eb(c)) {
        if (1 < c.length) throw Error(p(93));
        c = c[0];
      }
      b = c;
    }
    null == b && (b = "");
    c = b;
  }
  a._wrapperState = {
    initialValue: Sa(c)
  };
}
function ib(a, b) {
  var c = Sa(b.value),
    d = Sa(b.defaultValue);
  null != c && (c = "" + c, c !== a.value && (a.value = c), null == b.defaultValue && a.defaultValue !== c && (a.defaultValue = c));
  null != d && (a.defaultValue = "" + d);
}
function jb(a) {
  var b = a.textContent;
  b === a._wrapperState.initialValue && "" !== b && null !== b && (a.value = b);
}
function kb(a) {
  switch (a) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function lb(a, b) {
  return null == a || "http://www.w3.org/1999/xhtml" === a ? kb(b) : "http://www.w3.org/2000/svg" === a && "foreignObject" === b ? "http://www.w3.org/1999/xhtml" : a;
}
var mb,
  nb = function (a) {
    return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function (b, c, d, e) {
      MSApp.execUnsafeLocalFunction(function () {
        return a(b, c, d, e);
      });
    } : a;
  }(function (a, b) {
    if ("http://www.w3.org/2000/svg" !== a.namespaceURI || "innerHTML" in a) a.innerHTML = b;else {
      mb = mb || document.createElement("div");
      mb.innerHTML = "<svg>" + b.valueOf().toString() + "</svg>";
      for (b = mb.firstChild; a.firstChild;) a.removeChild(a.firstChild);
      for (; b.firstChild;) a.appendChild(b.firstChild);
    }
  });
function ob(a, b) {
  if (b) {
    var c = a.firstChild;
    if (c && c === a.lastChild && 3 === c.nodeType) {
      c.nodeValue = b;
      return;
    }
  }
  a.textContent = b;
}
var pb = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  },
  qb = ["Webkit", "ms", "Moz", "O"];
Object.keys(pb).forEach(function (a) {
  qb.forEach(function (b) {
    b = b + a.charAt(0).toUpperCase() + a.substring(1);
    pb[b] = pb[a];
  });
});
function rb(a, b, c) {
  return null == b || "boolean" === typeof b || "" === b ? "" : c || "number" !== typeof b || 0 === b || pb.hasOwnProperty(a) && pb[a] ? ("" + b).trim() : b + "px";
}
function sb(a, b) {
  a = a.style;
  for (var c in b) if (b.hasOwnProperty(c)) {
    var d = 0 === c.indexOf("--"),
      e = rb(c, b[c], d);
    "float" === c && (c = "cssFloat");
    d ? a.setProperty(c, e) : a[c] = e;
  }
}
var tb = A({
  menuitem: !0
}, {
  area: !0,
  base: !0,
  br: !0,
  col: !0,
  embed: !0,
  hr: !0,
  img: !0,
  input: !0,
  keygen: !0,
  link: !0,
  meta: !0,
  param: !0,
  source: !0,
  track: !0,
  wbr: !0
});
function ub(a, b) {
  if (b) {
    if (tb[a] && (null != b.children || null != b.dangerouslySetInnerHTML)) throw Error(p(137, a));
    if (null != b.dangerouslySetInnerHTML) {
      if (null != b.children) throw Error(p(60));
      if ("object" !== typeof b.dangerouslySetInnerHTML || !("__html" in b.dangerouslySetInnerHTML)) throw Error(p(61));
    }
    if (null != b.style && "object" !== typeof b.style) throw Error(p(62));
  }
}
function vb(a, b) {
  if (-1 === a.indexOf("-")) return "string" === typeof b.is;
  switch (a) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var wb = null;
function xb(a) {
  a = a.target || a.srcElement || window;
  a.correspondingUseElement && (a = a.correspondingUseElement);
  return 3 === a.nodeType ? a.parentNode : a;
}
var yb = null,
  zb = null,
  Ab = null;
function Bb(a) {
  if (a = Cb(a)) {
    if ("function" !== typeof yb) throw Error(p(280));
    var b = a.stateNode;
    b && (b = Db(b), yb(a.stateNode, a.type, b));
  }
}
function Eb(a) {
  zb ? Ab ? Ab.push(a) : Ab = [a] : zb = a;
}
function Fb() {
  if (zb) {
    var a = zb,
      b = Ab;
    Ab = zb = null;
    Bb(a);
    if (b) for (a = 0; a < b.length; a++) Bb(b[a]);
  }
}
function Gb(a, b) {
  return a(b);
}
function Hb() {}
var Ib = !1;
function Jb(a, b, c) {
  if (Ib) return a(b, c);
  Ib = !0;
  try {
    return Gb(a, b, c);
  } finally {
    if (Ib = !1, null !== zb || null !== Ab) Hb(), Fb();
  }
}
function Kb(a, b) {
  var c = a.stateNode;
  if (null === c) return null;
  var d = Db(c);
  if (null === d) return null;
  c = d[b];
  a: switch (b) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (d = !d.disabled) || (a = a.type, d = !("button" === a || "input" === a || "select" === a || "textarea" === a));
      a = !d;
      break a;
    default:
      a = !1;
  }
  if (a) return null;
  if (c && "function" !== typeof c) throw Error(p(231, b, typeof c));
  return c;
}
var Lb = !1;
if (ia) try {
  var Mb = {};
  Object.defineProperty(Mb, "passive", {
    get: function get() {
      Lb = !0;
    }
  });
  window.addEventListener("test", Mb, Mb);
  window.removeEventListener("test", Mb, Mb);
} catch (a) {
  Lb = !1;
}
function Nb(a, b, c, d, e, f, g, h, k) {
  var l = Array.prototype.slice.call(arguments, 3);
  try {
    b.apply(c, l);
  } catch (m) {
    this.onError(m);
  }
}
var Ob = !1,
  Pb = null,
  Qb = !1,
  Rb = null,
  Sb = {
    onError: function onError(a) {
      Ob = !0;
      Pb = a;
    }
  };
function Tb(a, b, c, d, e, f, g, h, k) {
  Ob = !1;
  Pb = null;
  Nb.apply(Sb, arguments);
}
function Ub(a, b, c, d, e, f, g, h, k) {
  Tb.apply(this, arguments);
  if (Ob) {
    if (Ob) {
      var l = Pb;
      Ob = !1;
      Pb = null;
    } else throw Error(p(198));
    Qb || (Qb = !0, Rb = l);
  }
}
function Vb(a) {
  var b = a,
    c = a;
  if (a.alternate) for (; b.return;) b = b.return;else {
    a = b;
    do b = a, 0 !== (b.flags & 4098) && (c = b.return), a = b.return; while (a);
  }
  return 3 === b.tag ? c : null;
}
function Wb(a) {
  if (13 === a.tag) {
    var b = a.memoizedState;
    null === b && (a = a.alternate, null !== a && (b = a.memoizedState));
    if (null !== b) return b.dehydrated;
  }
  return null;
}
function Xb(a) {
  if (Vb(a) !== a) throw Error(p(188));
}
function Yb(a) {
  var b = a.alternate;
  if (!b) {
    b = Vb(a);
    if (null === b) throw Error(p(188));
    return b !== a ? null : a;
  }
  for (var c = a, d = b;;) {
    var e = c.return;
    if (null === e) break;
    var f = e.alternate;
    if (null === f) {
      d = e.return;
      if (null !== d) {
        c = d;
        continue;
      }
      break;
    }
    if (e.child === f.child) {
      for (f = e.child; f;) {
        if (f === c) return Xb(e), a;
        if (f === d) return Xb(e), b;
        f = f.sibling;
      }
      throw Error(p(188));
    }
    if (c.return !== d.return) c = e, d = f;else {
      for (var g = !1, h = e.child; h;) {
        if (h === c) {
          g = !0;
          c = e;
          d = f;
          break;
        }
        if (h === d) {
          g = !0;
          d = e;
          c = f;
          break;
        }
        h = h.sibling;
      }
      if (!g) {
        for (h = f.child; h;) {
          if (h === c) {
            g = !0;
            c = f;
            d = e;
            break;
          }
          if (h === d) {
            g = !0;
            d = f;
            c = e;
            break;
          }
          h = h.sibling;
        }
        if (!g) throw Error(p(189));
      }
    }
    if (c.alternate !== d) throw Error(p(190));
  }
  if (3 !== c.tag) throw Error(p(188));
  return c.stateNode.current === c ? a : b;
}
function Zb(a) {
  a = Yb(a);
  return null !== a ? $b(a) : null;
}
function $b(a) {
  if (5 === a.tag || 6 === a.tag) return a;
  for (a = a.child; null !== a;) {
    var b = $b(a);
    if (null !== b) return b;
    a = a.sibling;
  }
  return null;
}
var ac = ca.unstable_scheduleCallback,
  bc = ca.unstable_cancelCallback,
  cc = ca.unstable_shouldYield,
  dc = ca.unstable_requestPaint,
  B = ca.unstable_now,
  ec = ca.unstable_getCurrentPriorityLevel,
  fc = ca.unstable_ImmediatePriority,
  gc = ca.unstable_UserBlockingPriority,
  hc = ca.unstable_NormalPriority,
  ic = ca.unstable_LowPriority,
  jc = ca.unstable_IdlePriority,
  kc = null,
  lc = null;
function mc(a) {
  if (lc && "function" === typeof lc.onCommitFiberRoot) try {
    lc.onCommitFiberRoot(kc, a, void 0, 128 === (a.current.flags & 128));
  } catch (b) {}
}
var oc = Math.clz32 ? Math.clz32 : nc,
  pc = Math.log,
  qc = Math.LN2;
function nc(a) {
  a >>>= 0;
  return 0 === a ? 32 : 31 - (pc(a) / qc | 0) | 0;
}
var rc = 64,
  sc = 4194304;
function tc(a) {
  switch (a & -a) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return a & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return a & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return a;
  }
}
function uc(a, b) {
  var c = a.pendingLanes;
  if (0 === c) return 0;
  var d = 0,
    e = a.suspendedLanes,
    f = a.pingedLanes,
    g = c & 268435455;
  if (0 !== g) {
    var h = g & ~e;
    0 !== h ? d = tc(h) : (f &= g, 0 !== f && (d = tc(f)));
  } else g = c & ~e, 0 !== g ? d = tc(g) : 0 !== f && (d = tc(f));
  if (0 === d) return 0;
  if (0 !== b && b !== d && 0 === (b & e) && (e = d & -d, f = b & -b, e >= f || 16 === e && 0 !== (f & 4194240))) return b;
  0 !== (d & 4) && (d |= c & 16);
  b = a.entangledLanes;
  if (0 !== b) for (a = a.entanglements, b &= d; 0 < b;) c = 31 - oc(b), e = 1 << c, d |= a[c], b &= ~e;
  return d;
}
function vc(a, b) {
  switch (a) {
    case 1:
    case 2:
    case 4:
      return b + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return b + 5E3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function wc(a, b) {
  for (var c = a.suspendedLanes, d = a.pingedLanes, e = a.expirationTimes, f = a.pendingLanes; 0 < f;) {
    var g = 31 - oc(f),
      h = 1 << g,
      k = e[g];
    if (-1 === k) {
      if (0 === (h & c) || 0 !== (h & d)) e[g] = vc(h, b);
    } else k <= b && (a.expiredLanes |= h);
    f &= ~h;
  }
}
function xc(a) {
  a = a.pendingLanes & -1073741825;
  return 0 !== a ? a : a & 1073741824 ? 1073741824 : 0;
}
function yc() {
  var a = rc;
  rc <<= 1;
  0 === (rc & 4194240) && (rc = 64);
  return a;
}
function zc(a) {
  for (var b = [], c = 0; 31 > c; c++) b.push(a);
  return b;
}
function Ac(a, b, c) {
  a.pendingLanes |= b;
  536870912 !== b && (a.suspendedLanes = 0, a.pingedLanes = 0);
  a = a.eventTimes;
  b = 31 - oc(b);
  a[b] = c;
}
function Bc(a, b) {
  var c = a.pendingLanes & ~b;
  a.pendingLanes = b;
  a.suspendedLanes = 0;
  a.pingedLanes = 0;
  a.expiredLanes &= b;
  a.mutableReadLanes &= b;
  a.entangledLanes &= b;
  b = a.entanglements;
  var d = a.eventTimes;
  for (a = a.expirationTimes; 0 < c;) {
    var e = 31 - oc(c),
      f = 1 << e;
    b[e] = 0;
    d[e] = -1;
    a[e] = -1;
    c &= ~f;
  }
}
function Cc(a, b) {
  var c = a.entangledLanes |= b;
  for (a = a.entanglements; c;) {
    var d = 31 - oc(c),
      e = 1 << d;
    e & b | a[d] & b && (a[d] |= b);
    c &= ~e;
  }
}
var C = 0;
function Dc(a) {
  a &= -a;
  return 1 < a ? 4 < a ? 0 !== (a & 268435455) ? 16 : 536870912 : 4 : 1;
}
var Ec,
  Fc,
  Gc,
  Hc,
  Ic,
  Jc = !1,
  Kc = [],
  Lc = null,
  Mc = null,
  Nc = null,
  Oc = new Map(),
  Pc = new Map(),
  Qc = [],
  Rc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Sc(a, b) {
  switch (a) {
    case "focusin":
    case "focusout":
      Lc = null;
      break;
    case "dragenter":
    case "dragleave":
      Mc = null;
      break;
    case "mouseover":
    case "mouseout":
      Nc = null;
      break;
    case "pointerover":
    case "pointerout":
      Oc.delete(b.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Pc.delete(b.pointerId);
  }
}
function Tc(a, b, c, d, e, f) {
  if (null === a || a.nativeEvent !== f) return a = {
    blockedOn: b,
    domEventName: c,
    eventSystemFlags: d,
    nativeEvent: f,
    targetContainers: [e]
  }, null !== b && (b = Cb(b), null !== b && Fc(b)), a;
  a.eventSystemFlags |= d;
  b = a.targetContainers;
  null !== e && -1 === b.indexOf(e) && b.push(e);
  return a;
}
function Uc(a, b, c, d, e) {
  switch (b) {
    case "focusin":
      return Lc = Tc(Lc, a, b, c, d, e), !0;
    case "dragenter":
      return Mc = Tc(Mc, a, b, c, d, e), !0;
    case "mouseover":
      return Nc = Tc(Nc, a, b, c, d, e), !0;
    case "pointerover":
      var f = e.pointerId;
      Oc.set(f, Tc(Oc.get(f) || null, a, b, c, d, e));
      return !0;
    case "gotpointercapture":
      return f = e.pointerId, Pc.set(f, Tc(Pc.get(f) || null, a, b, c, d, e)), !0;
  }
  return !1;
}
function Vc(a) {
  var b = Wc(a.target);
  if (null !== b) {
    var c = Vb(b);
    if (null !== c) if (b = c.tag, 13 === b) {
      if (b = Wb(c), null !== b) {
        a.blockedOn = b;
        Ic(a.priority, function () {
          Gc(c);
        });
        return;
      }
    } else if (3 === b && c.stateNode.current.memoizedState.isDehydrated) {
      a.blockedOn = 3 === c.tag ? c.stateNode.containerInfo : null;
      return;
    }
  }
  a.blockedOn = null;
}
function Xc(a) {
  if (null !== a.blockedOn) return !1;
  for (var b = a.targetContainers; 0 < b.length;) {
    var c = Yc(a.domEventName, a.eventSystemFlags, b[0], a.nativeEvent);
    if (null === c) {
      c = a.nativeEvent;
      var d = new c.constructor(c.type, c);
      wb = d;
      c.target.dispatchEvent(d);
      wb = null;
    } else return b = Cb(c), null !== b && Fc(b), a.blockedOn = c, !1;
    b.shift();
  }
  return !0;
}
function Zc(a, b, c) {
  Xc(a) && c.delete(b);
}
function $c() {
  Jc = !1;
  null !== Lc && Xc(Lc) && (Lc = null);
  null !== Mc && Xc(Mc) && (Mc = null);
  null !== Nc && Xc(Nc) && (Nc = null);
  Oc.forEach(Zc);
  Pc.forEach(Zc);
}
function ad(a, b) {
  a.blockedOn === b && (a.blockedOn = null, Jc || (Jc = !0, ca.unstable_scheduleCallback(ca.unstable_NormalPriority, $c)));
}
function bd(a) {
  function b(b) {
    return ad(b, a);
  }
  if (0 < Kc.length) {
    ad(Kc[0], a);
    for (var c = 1; c < Kc.length; c++) {
      var d = Kc[c];
      d.blockedOn === a && (d.blockedOn = null);
    }
  }
  null !== Lc && ad(Lc, a);
  null !== Mc && ad(Mc, a);
  null !== Nc && ad(Nc, a);
  Oc.forEach(b);
  Pc.forEach(b);
  for (c = 0; c < Qc.length; c++) d = Qc[c], d.blockedOn === a && (d.blockedOn = null);
  for (; 0 < Qc.length && (c = Qc[0], null === c.blockedOn);) Vc(c), null === c.blockedOn && Qc.shift();
}
var cd = ua.ReactCurrentBatchConfig,
  dd = !0;
function ed(a, b, c, d) {
  var e = C,
    f = cd.transition;
  cd.transition = null;
  try {
    C = 1, fd(a, b, c, d);
  } finally {
    C = e, cd.transition = f;
  }
}
function gd(a, b, c, d) {
  var e = C,
    f = cd.transition;
  cd.transition = null;
  try {
    C = 4, fd(a, b, c, d);
  } finally {
    C = e, cd.transition = f;
  }
}
function fd(a, b, c, d) {
  if (dd) {
    var e = Yc(a, b, c, d);
    if (null === e) hd(a, b, d, id, c), Sc(a, d);else if (Uc(e, a, b, c, d)) d.stopPropagation();else if (Sc(a, d), b & 4 && -1 < Rc.indexOf(a)) {
      for (; null !== e;) {
        var f = Cb(e);
        null !== f && Ec(f);
        f = Yc(a, b, c, d);
        null === f && hd(a, b, d, id, c);
        if (f === e) break;
        e = f;
      }
      null !== e && d.stopPropagation();
    } else hd(a, b, d, null, c);
  }
}
var id = null;
function Yc(a, b, c, d) {
  id = null;
  a = xb(d);
  a = Wc(a);
  if (null !== a) if (b = Vb(a), null === b) a = null;else if (c = b.tag, 13 === c) {
    a = Wb(b);
    if (null !== a) return a;
    a = null;
  } else if (3 === c) {
    if (b.stateNode.current.memoizedState.isDehydrated) return 3 === b.tag ? b.stateNode.containerInfo : null;
    a = null;
  } else b !== a && (a = null);
  id = a;
  return null;
}
function jd(a) {
  switch (a) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (ec()) {
        case fc:
          return 1;
        case gc:
          return 4;
        case hc:
        case ic:
          return 16;
        case jc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var kd = null,
  ld = null,
  md = null;
function nd() {
  if (md) return md;
  var a,
    b = ld,
    c = b.length,
    d,
    e = "value" in kd ? kd.value : kd.textContent,
    f = e.length;
  for (a = 0; a < c && b[a] === e[a]; a++);
  var g = c - a;
  for (d = 1; d <= g && b[c - d] === e[f - d]; d++);
  return md = e.slice(a, 1 < d ? 1 - d : void 0);
}
function od(a) {
  var b = a.keyCode;
  "charCode" in a ? (a = a.charCode, 0 === a && 13 === b && (a = 13)) : a = b;
  10 === a && (a = 13);
  return 32 <= a || 13 === a ? a : 0;
}
function pd() {
  return !0;
}
function qd() {
  return !1;
}
function rd(a) {
  function b(b, d, e, f, g) {
    this._reactName = b;
    this._targetInst = e;
    this.type = d;
    this.nativeEvent = f;
    this.target = g;
    this.currentTarget = null;
    for (var c in a) a.hasOwnProperty(c) && (b = a[c], this[c] = b ? b(f) : f[c]);
    this.isDefaultPrevented = (null != f.defaultPrevented ? f.defaultPrevented : !1 === f.returnValue) ? pd : qd;
    this.isPropagationStopped = qd;
    return this;
  }
  A(b.prototype, {
    preventDefault: function preventDefault() {
      this.defaultPrevented = !0;
      var a = this.nativeEvent;
      a && (a.preventDefault ? a.preventDefault() : "unknown" !== typeof a.returnValue && (a.returnValue = !1), this.isDefaultPrevented = pd);
    },
    stopPropagation: function stopPropagation() {
      var a = this.nativeEvent;
      a && (a.stopPropagation ? a.stopPropagation() : "unknown" !== typeof a.cancelBubble && (a.cancelBubble = !0), this.isPropagationStopped = pd);
    },
    persist: function persist() {},
    isPersistent: pd
  });
  return b;
}
var sd = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function timeStamp(a) {
      return a.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  },
  td = rd(sd),
  ud = A({}, sd, {
    view: 0,
    detail: 0
  }),
  vd = rd(ud),
  wd,
  xd,
  yd,
  Ad = A({}, ud, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: zd,
    button: 0,
    buttons: 0,
    relatedTarget: function relatedTarget(a) {
      return void 0 === a.relatedTarget ? a.fromElement === a.srcElement ? a.toElement : a.fromElement : a.relatedTarget;
    },
    movementX: function movementX(a) {
      if ("movementX" in a) return a.movementX;
      a !== yd && (yd && "mousemove" === a.type ? (wd = a.screenX - yd.screenX, xd = a.screenY - yd.screenY) : xd = wd = 0, yd = a);
      return wd;
    },
    movementY: function movementY(a) {
      return "movementY" in a ? a.movementY : xd;
    }
  }),
  Bd = rd(Ad),
  Cd = A({}, Ad, {
    dataTransfer: 0
  }),
  Dd = rd(Cd),
  Ed = A({}, ud, {
    relatedTarget: 0
  }),
  Fd = rd(Ed),
  Gd = A({}, sd, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }),
  Hd = rd(Gd),
  Id = A({}, sd, {
    clipboardData: function clipboardData(a) {
      return "clipboardData" in a ? a.clipboardData : window.clipboardData;
    }
  }),
  Jd = rd(Id),
  Kd = A({}, sd, {
    data: 0
  }),
  Ld = rd(Kd),
  Md = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  },
  Nd = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  },
  Od = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
function Pd(a) {
  var b = this.nativeEvent;
  return b.getModifierState ? b.getModifierState(a) : (a = Od[a]) ? !!b[a] : !1;
}
function zd() {
  return Pd;
}
var Qd = A({}, ud, {
    key: function key(a) {
      if (a.key) {
        var b = Md[a.key] || a.key;
        if ("Unidentified" !== b) return b;
      }
      return "keypress" === a.type ? (a = od(a), 13 === a ? "Enter" : String.fromCharCode(a)) : "keydown" === a.type || "keyup" === a.type ? Nd[a.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: zd,
    charCode: function charCode(a) {
      return "keypress" === a.type ? od(a) : 0;
    },
    keyCode: function keyCode(a) {
      return "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
    },
    which: function which(a) {
      return "keypress" === a.type ? od(a) : "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
    }
  }),
  Rd = rd(Qd),
  Sd = A({}, Ad, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }),
  Td = rd(Sd),
  Ud = A({}, ud, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: zd
  }),
  Vd = rd(Ud),
  Wd = A({}, sd, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }),
  Xd = rd(Wd),
  Yd = A({}, Ad, {
    deltaX: function deltaX(a) {
      return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
    },
    deltaY: function deltaY(a) {
      return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }),
  Zd = rd(Yd),
  $d = [9, 13, 27, 32],
  ae = ia && "CompositionEvent" in window,
  be = null;
ia && "documentMode" in document && (be = document.documentMode);
var ce = ia && "TextEvent" in window && !be,
  de = ia && (!ae || be && 8 < be && 11 >= be),
  ee = String.fromCharCode(32),
  fe = !1;
function ge(a, b) {
  switch (a) {
    case "keyup":
      return -1 !== $d.indexOf(b.keyCode);
    case "keydown":
      return 229 !== b.keyCode;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function he(a) {
  a = a.detail;
  return "object" === typeof a && "data" in a ? a.data : null;
}
var ie = !1;
function je(a, b) {
  switch (a) {
    case "compositionend":
      return he(b);
    case "keypress":
      if (32 !== b.which) return null;
      fe = !0;
      return ee;
    case "textInput":
      return a = b.data, a === ee && fe ? null : a;
    default:
      return null;
  }
}
function ke(a, b) {
  if (ie) return "compositionend" === a || !ae && ge(a, b) ? (a = nd(), md = ld = kd = null, ie = !1, a) : null;
  switch (a) {
    case "paste":
      return null;
    case "keypress":
      if (!(b.ctrlKey || b.altKey || b.metaKey) || b.ctrlKey && b.altKey) {
        if (b.char && 1 < b.char.length) return b.char;
        if (b.which) return String.fromCharCode(b.which);
      }
      return null;
    case "compositionend":
      return de && "ko" !== b.locale ? null : b.data;
    default:
      return null;
  }
}
var le = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0
};
function me(a) {
  var b = a && a.nodeName && a.nodeName.toLowerCase();
  return "input" === b ? !!le[a.type] : "textarea" === b ? !0 : !1;
}
function ne(a, b, c, d) {
  Eb(d);
  b = oe(b, "onChange");
  0 < b.length && (c = new td("onChange", "change", null, c, d), a.push({
    event: c,
    listeners: b
  }));
}
var pe = null,
  qe = null;
function re(a) {
  se(a, 0);
}
function te(a) {
  var b = ue(a);
  if (Wa(b)) return a;
}
function ve(a, b) {
  if ("change" === a) return b;
}
var we = !1;
if (ia) {
  var xe;
  if (ia) {
    var ye = ("oninput" in document);
    if (!ye) {
      var ze = document.createElement("div");
      ze.setAttribute("oninput", "return;");
      ye = "function" === typeof ze.oninput;
    }
    xe = ye;
  } else xe = !1;
  we = xe && (!document.documentMode || 9 < document.documentMode);
}
function Ae() {
  pe && (pe.detachEvent("onpropertychange", Be), qe = pe = null);
}
function Be(a) {
  if ("value" === a.propertyName && te(qe)) {
    var b = [];
    ne(b, qe, a, xb(a));
    Jb(re, b);
  }
}
function Ce(a, b, c) {
  "focusin" === a ? (Ae(), pe = b, qe = c, pe.attachEvent("onpropertychange", Be)) : "focusout" === a && Ae();
}
function De(a) {
  if ("selectionchange" === a || "keyup" === a || "keydown" === a) return te(qe);
}
function Ee(a, b) {
  if ("click" === a) return te(b);
}
function Fe(a, b) {
  if ("input" === a || "change" === a) return te(b);
}
function Ge(a, b) {
  return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
}
var He = "function" === typeof Object.is ? Object.is : Ge;
function Ie(a, b) {
  if (He(a, b)) return !0;
  if ("object" !== typeof a || null === a || "object" !== typeof b || null === b) return !1;
  var c = Object.keys(a),
    d = Object.keys(b);
  if (c.length !== d.length) return !1;
  for (d = 0; d < c.length; d++) {
    var e = c[d];
    if (!ja.call(b, e) || !He(a[e], b[e])) return !1;
  }
  return !0;
}
function Je(a) {
  for (; a && a.firstChild;) a = a.firstChild;
  return a;
}
function Ke(a, b) {
  var c = Je(a);
  a = 0;
  for (var d; c;) {
    if (3 === c.nodeType) {
      d = a + c.textContent.length;
      if (a <= b && d >= b) return {
        node: c,
        offset: b - a
      };
      a = d;
    }
    a: {
      for (; c;) {
        if (c.nextSibling) {
          c = c.nextSibling;
          break a;
        }
        c = c.parentNode;
      }
      c = void 0;
    }
    c = Je(c);
  }
}
function Le(a, b) {
  return a && b ? a === b ? !0 : a && 3 === a.nodeType ? !1 : b && 3 === b.nodeType ? Le(a, b.parentNode) : "contains" in a ? a.contains(b) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b) & 16) : !1 : !1;
}
function Me() {
  for (var a = window, b = Xa(); b instanceof a.HTMLIFrameElement;) {
    try {
      var c = "string" === typeof b.contentWindow.location.href;
    } catch (d) {
      c = !1;
    }
    if (c) a = b.contentWindow;else break;
    b = Xa(a.document);
  }
  return b;
}
function Ne(a) {
  var b = a && a.nodeName && a.nodeName.toLowerCase();
  return b && ("input" === b && ("text" === a.type || "search" === a.type || "tel" === a.type || "url" === a.type || "password" === a.type) || "textarea" === b || "true" === a.contentEditable);
}
function Oe(a) {
  var b = Me(),
    c = a.focusedElem,
    d = a.selectionRange;
  if (b !== c && c && c.ownerDocument && Le(c.ownerDocument.documentElement, c)) {
    if (null !== d && Ne(c)) if (b = d.start, a = d.end, void 0 === a && (a = b), "selectionStart" in c) c.selectionStart = b, c.selectionEnd = Math.min(a, c.value.length);else if (a = (b = c.ownerDocument || document) && b.defaultView || window, a.getSelection) {
      a = a.getSelection();
      var e = c.textContent.length,
        f = Math.min(d.start, e);
      d = void 0 === d.end ? f : Math.min(d.end, e);
      !a.extend && f > d && (e = d, d = f, f = e);
      e = Ke(c, f);
      var g = Ke(c, d);
      e && g && (1 !== a.rangeCount || a.anchorNode !== e.node || a.anchorOffset !== e.offset || a.focusNode !== g.node || a.focusOffset !== g.offset) && (b = b.createRange(), b.setStart(e.node, e.offset), a.removeAllRanges(), f > d ? (a.addRange(b), a.extend(g.node, g.offset)) : (b.setEnd(g.node, g.offset), a.addRange(b)));
    }
    b = [];
    for (a = c; a = a.parentNode;) 1 === a.nodeType && b.push({
      element: a,
      left: a.scrollLeft,
      top: a.scrollTop
    });
    "function" === typeof c.focus && c.focus();
    for (c = 0; c < b.length; c++) a = b[c], a.element.scrollLeft = a.left, a.element.scrollTop = a.top;
  }
}
var Pe = ia && "documentMode" in document && 11 >= document.documentMode,
  Qe = null,
  Re = null,
  Se = null,
  Te = !1;
function Ue(a, b, c) {
  var d = c.window === c ? c.document : 9 === c.nodeType ? c : c.ownerDocument;
  Te || null == Qe || Qe !== Xa(d) || (d = Qe, "selectionStart" in d && Ne(d) ? d = {
    start: d.selectionStart,
    end: d.selectionEnd
  } : (d = (d.ownerDocument && d.ownerDocument.defaultView || window).getSelection(), d = {
    anchorNode: d.anchorNode,
    anchorOffset: d.anchorOffset,
    focusNode: d.focusNode,
    focusOffset: d.focusOffset
  }), Se && Ie(Se, d) || (Se = d, d = oe(Re, "onSelect"), 0 < d.length && (b = new td("onSelect", "select", null, b, c), a.push({
    event: b,
    listeners: d
  }), b.target = Qe)));
}
function Ve(a, b) {
  var c = {};
  c[a.toLowerCase()] = b.toLowerCase();
  c["Webkit" + a] = "webkit" + b;
  c["Moz" + a] = "moz" + b;
  return c;
}
var We = {
    animationend: Ve("Animation", "AnimationEnd"),
    animationiteration: Ve("Animation", "AnimationIteration"),
    animationstart: Ve("Animation", "AnimationStart"),
    transitionend: Ve("Transition", "TransitionEnd")
  },
  Xe = {},
  Ye = {};
ia && (Ye = document.createElement("div").style, "AnimationEvent" in window || (delete We.animationend.animation, delete We.animationiteration.animation, delete We.animationstart.animation), "TransitionEvent" in window || delete We.transitionend.transition);
function Ze(a) {
  if (Xe[a]) return Xe[a];
  if (!We[a]) return a;
  var b = We[a],
    c;
  for (c in b) if (b.hasOwnProperty(c) && c in Ye) return Xe[a] = b[c];
  return a;
}
var $e = Ze("animationend"),
  af = Ze("animationiteration"),
  bf = Ze("animationstart"),
  cf = Ze("transitionend"),
  df = new Map(),
  ef = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function ff(a, b) {
  df.set(a, b);
  fa(b, [a]);
}
for (var gf = 0; gf < ef.length; gf++) {
  var hf = ef[gf],
    jf = hf.toLowerCase(),
    kf = hf[0].toUpperCase() + hf.slice(1);
  ff(jf, "on" + kf);
}
ff($e, "onAnimationEnd");
ff(af, "onAnimationIteration");
ff(bf, "onAnimationStart");
ff("dblclick", "onDoubleClick");
ff("focusin", "onFocus");
ff("focusout", "onBlur");
ff(cf, "onTransitionEnd");
ha("onMouseEnter", ["mouseout", "mouseover"]);
ha("onMouseLeave", ["mouseout", "mouseover"]);
ha("onPointerEnter", ["pointerout", "pointerover"]);
ha("onPointerLeave", ["pointerout", "pointerover"]);
fa("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
fa("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
fa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
fa("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
fa("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
fa("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var lf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
  mf = new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
function nf(a, b, c) {
  var d = a.type || "unknown-event";
  a.currentTarget = c;
  Ub(d, b, void 0, a);
  a.currentTarget = null;
}
function se(a, b) {
  b = 0 !== (b & 4);
  for (var c = 0; c < a.length; c++) {
    var d = a[c],
      e = d.event;
    d = d.listeners;
    a: {
      var f = void 0;
      if (b) for (var g = d.length - 1; 0 <= g; g--) {
        var h = d[g],
          k = h.instance,
          l = h.currentTarget;
        h = h.listener;
        if (k !== f && e.isPropagationStopped()) break a;
        nf(e, h, l);
        f = k;
      } else for (g = 0; g < d.length; g++) {
        h = d[g];
        k = h.instance;
        l = h.currentTarget;
        h = h.listener;
        if (k !== f && e.isPropagationStopped()) break a;
        nf(e, h, l);
        f = k;
      }
    }
  }
  if (Qb) throw a = Rb, Qb = !1, Rb = null, a;
}
function D(a, b) {
  var c = b[of];
  void 0 === c && (c = b[of] = new Set());
  var d = a + "__bubble";
  c.has(d) || (pf(b, a, 2, !1), c.add(d));
}
function qf(a, b, c) {
  var d = 0;
  b && (d |= 4);
  pf(c, a, d, b);
}
var rf = "_reactListening" + Math.random().toString(36).slice(2);
function sf(a) {
  if (!a[rf]) {
    a[rf] = !0;
    da.forEach(function (b) {
      "selectionchange" !== b && (mf.has(b) || qf(b, !1, a), qf(b, !0, a));
    });
    var b = 9 === a.nodeType ? a : a.ownerDocument;
    null === b || b[rf] || (b[rf] = !0, qf("selectionchange", !1, b));
  }
}
function pf(a, b, c, d) {
  switch (jd(b)) {
    case 1:
      var e = ed;
      break;
    case 4:
      e = gd;
      break;
    default:
      e = fd;
  }
  c = e.bind(null, b, c, a);
  e = void 0;
  !Lb || "touchstart" !== b && "touchmove" !== b && "wheel" !== b || (e = !0);
  d ? void 0 !== e ? a.addEventListener(b, c, {
    capture: !0,
    passive: e
  }) : a.addEventListener(b, c, !0) : void 0 !== e ? a.addEventListener(b, c, {
    passive: e
  }) : a.addEventListener(b, c, !1);
}
function hd(a, b, c, d, e) {
  var f = d;
  if (0 === (b & 1) && 0 === (b & 2) && null !== d) a: for (;;) {
    if (null === d) return;
    var g = d.tag;
    if (3 === g || 4 === g) {
      var h = d.stateNode.containerInfo;
      if (h === e || 8 === h.nodeType && h.parentNode === e) break;
      if (4 === g) for (g = d.return; null !== g;) {
        var k = g.tag;
        if (3 === k || 4 === k) if (k = g.stateNode.containerInfo, k === e || 8 === k.nodeType && k.parentNode === e) return;
        g = g.return;
      }
      for (; null !== h;) {
        g = Wc(h);
        if (null === g) return;
        k = g.tag;
        if (5 === k || 6 === k) {
          d = f = g;
          continue a;
        }
        h = h.parentNode;
      }
    }
    d = d.return;
  }
  Jb(function () {
    var d = f,
      e = xb(c),
      g = [];
    a: {
      var h = df.get(a);
      if (void 0 !== h) {
        var k = td,
          n = a;
        switch (a) {
          case "keypress":
            if (0 === od(c)) break a;
          case "keydown":
          case "keyup":
            k = Rd;
            break;
          case "focusin":
            n = "focus";
            k = Fd;
            break;
          case "focusout":
            n = "blur";
            k = Fd;
            break;
          case "beforeblur":
          case "afterblur":
            k = Fd;
            break;
          case "click":
            if (2 === c.button) break a;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            k = Bd;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            k = Dd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            k = Vd;
            break;
          case $e:
          case af:
          case bf:
            k = Hd;
            break;
          case cf:
            k = Xd;
            break;
          case "scroll":
            k = vd;
            break;
          case "wheel":
            k = Zd;
            break;
          case "copy":
          case "cut":
          case "paste":
            k = Jd;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            k = Td;
        }
        var t = 0 !== (b & 4),
          J = !t && "scroll" === a,
          x = t ? null !== h ? h + "Capture" : null : h;
        t = [];
        for (var w = d, u; null !== w;) {
          u = w;
          var F = u.stateNode;
          5 === u.tag && null !== F && (u = F, null !== x && (F = Kb(w, x), null != F && t.push(tf(w, F, u))));
          if (J) break;
          w = w.return;
        }
        0 < t.length && (h = new k(h, n, null, c, e), g.push({
          event: h,
          listeners: t
        }));
      }
    }
    if (0 === (b & 7)) {
      a: {
        h = "mouseover" === a || "pointerover" === a;
        k = "mouseout" === a || "pointerout" === a;
        if (h && c !== wb && (n = c.relatedTarget || c.fromElement) && (Wc(n) || n[uf])) break a;
        if (k || h) {
          h = e.window === e ? e : (h = e.ownerDocument) ? h.defaultView || h.parentWindow : window;
          if (k) {
            if (n = c.relatedTarget || c.toElement, k = d, n = n ? Wc(n) : null, null !== n && (J = Vb(n), n !== J || 5 !== n.tag && 6 !== n.tag)) n = null;
          } else k = null, n = d;
          if (k !== n) {
            t = Bd;
            F = "onMouseLeave";
            x = "onMouseEnter";
            w = "mouse";
            if ("pointerout" === a || "pointerover" === a) t = Td, F = "onPointerLeave", x = "onPointerEnter", w = "pointer";
            J = null == k ? h : ue(k);
            u = null == n ? h : ue(n);
            h = new t(F, w + "leave", k, c, e);
            h.target = J;
            h.relatedTarget = u;
            F = null;
            Wc(e) === d && (t = new t(x, w + "enter", n, c, e), t.target = u, t.relatedTarget = J, F = t);
            J = F;
            if (k && n) b: {
              t = k;
              x = n;
              w = 0;
              for (u = t; u; u = vf(u)) w++;
              u = 0;
              for (F = x; F; F = vf(F)) u++;
              for (; 0 < w - u;) t = vf(t), w--;
              for (; 0 < u - w;) x = vf(x), u--;
              for (; w--;) {
                if (t === x || null !== x && t === x.alternate) break b;
                t = vf(t);
                x = vf(x);
              }
              t = null;
            } else t = null;
            null !== k && wf(g, h, k, t, !1);
            null !== n && null !== J && wf(g, J, n, t, !0);
          }
        }
      }
      a: {
        h = d ? ue(d) : window;
        k = h.nodeName && h.nodeName.toLowerCase();
        if ("select" === k || "input" === k && "file" === h.type) var na = ve;else if (me(h)) {
          if (we) na = Fe;else {
            na = De;
            var xa = Ce;
          }
        } else (k = h.nodeName) && "input" === k.toLowerCase() && ("checkbox" === h.type || "radio" === h.type) && (na = Ee);
        if (na && (na = na(a, d))) {
          ne(g, na, c, e);
          break a;
        }
        xa && xa(a, h, d);
        "focusout" === a && (xa = h._wrapperState) && xa.controlled && "number" === h.type && cb(h, "number", h.value);
      }
      xa = d ? ue(d) : window;
      switch (a) {
        case "focusin":
          if (me(xa) || "true" === xa.contentEditable) Qe = xa, Re = d, Se = null;
          break;
        case "focusout":
          Se = Re = Qe = null;
          break;
        case "mousedown":
          Te = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Te = !1;
          Ue(g, c, e);
          break;
        case "selectionchange":
          if (Pe) break;
        case "keydown":
        case "keyup":
          Ue(g, c, e);
      }
      var $a;
      if (ae) b: {
        switch (a) {
          case "compositionstart":
            var ba = "onCompositionStart";
            break b;
          case "compositionend":
            ba = "onCompositionEnd";
            break b;
          case "compositionupdate":
            ba = "onCompositionUpdate";
            break b;
        }
        ba = void 0;
      } else ie ? ge(a, c) && (ba = "onCompositionEnd") : "keydown" === a && 229 === c.keyCode && (ba = "onCompositionStart");
      ba && (de && "ko" !== c.locale && (ie || "onCompositionStart" !== ba ? "onCompositionEnd" === ba && ie && ($a = nd()) : (kd = e, ld = "value" in kd ? kd.value : kd.textContent, ie = !0)), xa = oe(d, ba), 0 < xa.length && (ba = new Ld(ba, a, null, c, e), g.push({
        event: ba,
        listeners: xa
      }), $a ? ba.data = $a : ($a = he(c), null !== $a && (ba.data = $a))));
      if ($a = ce ? je(a, c) : ke(a, c)) d = oe(d, "onBeforeInput"), 0 < d.length && (e = new Ld("onBeforeInput", "beforeinput", null, c, e), g.push({
        event: e,
        listeners: d
      }), e.data = $a);
    }
    se(g, b);
  });
}
function tf(a, b, c) {
  return {
    instance: a,
    listener: b,
    currentTarget: c
  };
}
function oe(a, b) {
  for (var c = b + "Capture", d = []; null !== a;) {
    var e = a,
      f = e.stateNode;
    5 === e.tag && null !== f && (e = f, f = Kb(a, c), null != f && d.unshift(tf(a, f, e)), f = Kb(a, b), null != f && d.push(tf(a, f, e)));
    a = a.return;
  }
  return d;
}
function vf(a) {
  if (null === a) return null;
  do a = a.return; while (a && 5 !== a.tag);
  return a ? a : null;
}
function wf(a, b, c, d, e) {
  for (var f = b._reactName, g = []; null !== c && c !== d;) {
    var h = c,
      k = h.alternate,
      l = h.stateNode;
    if (null !== k && k === d) break;
    5 === h.tag && null !== l && (h = l, e ? (k = Kb(c, f), null != k && g.unshift(tf(c, k, h))) : e || (k = Kb(c, f), null != k && g.push(tf(c, k, h))));
    c = c.return;
  }
  0 !== g.length && a.push({
    event: b,
    listeners: g
  });
}
var xf = /\r\n?/g,
  yf = /\u0000|\uFFFD/g;
function zf(a) {
  return ("string" === typeof a ? a : "" + a).replace(xf, "\n").replace(yf, "");
}
function Af(a, b, c) {
  b = zf(b);
  if (zf(a) !== b && c) throw Error(p(425));
}
function Bf() {}
var Cf = null,
  Df = null;
function Ef(a, b) {
  return "textarea" === a || "noscript" === a || "string" === typeof b.children || "number" === typeof b.children || "object" === typeof b.dangerouslySetInnerHTML && null !== b.dangerouslySetInnerHTML && null != b.dangerouslySetInnerHTML.__html;
}
var Ff = "function" === typeof setTimeout ? setTimeout : void 0,
  Gf = "function" === typeof clearTimeout ? clearTimeout : void 0,
  Hf = "function" === typeof Promise ? Promise : void 0,
  Jf = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof Hf ? function (a) {
    return Hf.resolve(null).then(a).catch(If);
  } : Ff;
function If(a) {
  setTimeout(function () {
    throw a;
  });
}
function Kf(a, b) {
  var c = b,
    d = 0;
  do {
    var e = c.nextSibling;
    a.removeChild(c);
    if (e && 8 === e.nodeType) if (c = e.data, "/$" === c) {
      if (0 === d) {
        a.removeChild(e);
        bd(b);
        return;
      }
      d--;
    } else "$" !== c && "$?" !== c && "$!" !== c || d++;
    c = e;
  } while (c);
  bd(b);
}
function Lf(a) {
  for (; null != a; a = a.nextSibling) {
    var b = a.nodeType;
    if (1 === b || 3 === b) break;
    if (8 === b) {
      b = a.data;
      if ("$" === b || "$!" === b || "$?" === b) break;
      if ("/$" === b) return null;
    }
  }
  return a;
}
function Mf(a) {
  a = a.previousSibling;
  for (var b = 0; a;) {
    if (8 === a.nodeType) {
      var c = a.data;
      if ("$" === c || "$!" === c || "$?" === c) {
        if (0 === b) return a;
        b--;
      } else "/$" === c && b++;
    }
    a = a.previousSibling;
  }
  return null;
}
var Nf = Math.random().toString(36).slice(2),
  Of = "__reactFiber$" + Nf,
  Pf = "__reactProps$" + Nf,
  uf = "__reactContainer$" + Nf,
  of = "__reactEvents$" + Nf,
  Qf = "__reactListeners$" + Nf,
  Rf = "__reactHandles$" + Nf;
function Wc(a) {
  var b = a[Of];
  if (b) return b;
  for (var c = a.parentNode; c;) {
    if (b = c[uf] || c[Of]) {
      c = b.alternate;
      if (null !== b.child || null !== c && null !== c.child) for (a = Mf(a); null !== a;) {
        if (c = a[Of]) return c;
        a = Mf(a);
      }
      return b;
    }
    a = c;
    c = a.parentNode;
  }
  return null;
}
function Cb(a) {
  a = a[Of] || a[uf];
  return !a || 5 !== a.tag && 6 !== a.tag && 13 !== a.tag && 3 !== a.tag ? null : a;
}
function ue(a) {
  if (5 === a.tag || 6 === a.tag) return a.stateNode;
  throw Error(p(33));
}
function Db(a) {
  return a[Pf] || null;
}
var Sf = [],
  Tf = -1;
function Uf(a) {
  return {
    current: a
  };
}
function E(a) {
  0 > Tf || (a.current = Sf[Tf], Sf[Tf] = null, Tf--);
}
function G(a, b) {
  Tf++;
  Sf[Tf] = a.current;
  a.current = b;
}
var Vf = {},
  H = Uf(Vf),
  Wf = Uf(!1),
  Xf = Vf;
function Yf(a, b) {
  var c = a.type.contextTypes;
  if (!c) return Vf;
  var d = a.stateNode;
  if (d && d.__reactInternalMemoizedUnmaskedChildContext === b) return d.__reactInternalMemoizedMaskedChildContext;
  var e = {},
    f;
  for (f in c) e[f] = b[f];
  d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b, a.__reactInternalMemoizedMaskedChildContext = e);
  return e;
}
function Zf(a) {
  a = a.childContextTypes;
  return null !== a && void 0 !== a;
}
function $f() {
  E(Wf);
  E(H);
}
function ag(a, b, c) {
  if (H.current !== Vf) throw Error(p(168));
  G(H, b);
  G(Wf, c);
}
function bg(a, b, c) {
  var d = a.stateNode;
  b = b.childContextTypes;
  if ("function" !== typeof d.getChildContext) return c;
  d = d.getChildContext();
  for (var e in d) if (!(e in b)) throw Error(p(108, Ra(a) || "Unknown", e));
  return A({}, c, d);
}
function cg(a) {
  a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || Vf;
  Xf = H.current;
  G(H, a);
  G(Wf, Wf.current);
  return !0;
}
function dg(a, b, c) {
  var d = a.stateNode;
  if (!d) throw Error(p(169));
  c ? (a = bg(a, b, Xf), d.__reactInternalMemoizedMergedChildContext = a, E(Wf), E(H), G(H, a)) : E(Wf);
  G(Wf, c);
}
var eg = null,
  fg = !1,
  gg = !1;
function hg(a) {
  null === eg ? eg = [a] : eg.push(a);
}
function ig(a) {
  fg = !0;
  hg(a);
}
function jg() {
  if (!gg && null !== eg) {
    gg = !0;
    var a = 0,
      b = C;
    try {
      var c = eg;
      for (C = 1; a < c.length; a++) {
        var d = c[a];
        do d = d(!0); while (null !== d);
      }
      eg = null;
      fg = !1;
    } catch (e) {
      throw null !== eg && (eg = eg.slice(a + 1)), ac(fc, jg), e;
    } finally {
      C = b, gg = !1;
    }
  }
  return null;
}
var kg = [],
  lg = 0,
  mg = null,
  ng = 0,
  og = [],
  pg = 0,
  qg = null,
  rg = 1,
  sg = "";
function tg(a, b) {
  kg[lg++] = ng;
  kg[lg++] = mg;
  mg = a;
  ng = b;
}
function ug(a, b, c) {
  og[pg++] = rg;
  og[pg++] = sg;
  og[pg++] = qg;
  qg = a;
  var d = rg;
  a = sg;
  var e = 32 - oc(d) - 1;
  d &= ~(1 << e);
  c += 1;
  var f = 32 - oc(b) + e;
  if (30 < f) {
    var g = e - e % 5;
    f = (d & (1 << g) - 1).toString(32);
    d >>= g;
    e -= g;
    rg = 1 << 32 - oc(b) + e | c << e | d;
    sg = f + a;
  } else rg = 1 << f | c << e | d, sg = a;
}
function vg(a) {
  null !== a.return && (tg(a, 1), ug(a, 1, 0));
}
function wg(a) {
  for (; a === mg;) mg = kg[--lg], kg[lg] = null, ng = kg[--lg], kg[lg] = null;
  for (; a === qg;) qg = og[--pg], og[pg] = null, sg = og[--pg], og[pg] = null, rg = og[--pg], og[pg] = null;
}
var xg = null,
  yg = null,
  I = !1,
  zg = null;
function Ag(a, b) {
  var c = Bg(5, null, null, 0);
  c.elementType = "DELETED";
  c.stateNode = b;
  c.return = a;
  b = a.deletions;
  null === b ? (a.deletions = [c], a.flags |= 16) : b.push(c);
}
function Cg(a, b) {
  switch (a.tag) {
    case 5:
      var c = a.type;
      b = 1 !== b.nodeType || c.toLowerCase() !== b.nodeName.toLowerCase() ? null : b;
      return null !== b ? (a.stateNode = b, xg = a, yg = Lf(b.firstChild), !0) : !1;
    case 6:
      return b = "" === a.pendingProps || 3 !== b.nodeType ? null : b, null !== b ? (a.stateNode = b, xg = a, yg = null, !0) : !1;
    case 13:
      return b = 8 !== b.nodeType ? null : b, null !== b ? (c = null !== qg ? {
        id: rg,
        overflow: sg
      } : null, a.memoizedState = {
        dehydrated: b,
        treeContext: c,
        retryLane: 1073741824
      }, c = Bg(18, null, null, 0), c.stateNode = b, c.return = a, a.child = c, xg = a, yg = null, !0) : !1;
    default:
      return !1;
  }
}
function Dg(a) {
  return 0 !== (a.mode & 1) && 0 === (a.flags & 128);
}
function Eg(a) {
  if (I) {
    var b = yg;
    if (b) {
      var c = b;
      if (!Cg(a, b)) {
        if (Dg(a)) throw Error(p(418));
        b = Lf(c.nextSibling);
        var d = xg;
        b && Cg(a, b) ? Ag(d, c) : (a.flags = a.flags & -4097 | 2, I = !1, xg = a);
      }
    } else {
      if (Dg(a)) throw Error(p(418));
      a.flags = a.flags & -4097 | 2;
      I = !1;
      xg = a;
    }
  }
}
function Fg(a) {
  for (a = a.return; null !== a && 5 !== a.tag && 3 !== a.tag && 13 !== a.tag;) a = a.return;
  xg = a;
}
function Gg(a) {
  if (a !== xg) return !1;
  if (!I) return Fg(a), I = !0, !1;
  var b;
  (b = 3 !== a.tag) && !(b = 5 !== a.tag) && (b = a.type, b = "head" !== b && "body" !== b && !Ef(a.type, a.memoizedProps));
  if (b && (b = yg)) {
    if (Dg(a)) throw Hg(), Error(p(418));
    for (; b;) Ag(a, b), b = Lf(b.nextSibling);
  }
  Fg(a);
  if (13 === a.tag) {
    a = a.memoizedState;
    a = null !== a ? a.dehydrated : null;
    if (!a) throw Error(p(317));
    a: {
      a = a.nextSibling;
      for (b = 0; a;) {
        if (8 === a.nodeType) {
          var c = a.data;
          if ("/$" === c) {
            if (0 === b) {
              yg = Lf(a.nextSibling);
              break a;
            }
            b--;
          } else "$" !== c && "$!" !== c && "$?" !== c || b++;
        }
        a = a.nextSibling;
      }
      yg = null;
    }
  } else yg = xg ? Lf(a.stateNode.nextSibling) : null;
  return !0;
}
function Hg() {
  for (var a = yg; a;) a = Lf(a.nextSibling);
}
function Ig() {
  yg = xg = null;
  I = !1;
}
function Jg(a) {
  null === zg ? zg = [a] : zg.push(a);
}
var Kg = ua.ReactCurrentBatchConfig;
function Lg(a, b) {
  if (a && a.defaultProps) {
    b = A({}, b);
    a = a.defaultProps;
    for (var c in a) void 0 === b[c] && (b[c] = a[c]);
    return b;
  }
  return b;
}
var Mg = Uf(null),
  Ng = null,
  Og = null,
  Pg = null;
function Qg() {
  Pg = Og = Ng = null;
}
function Rg(a) {
  var b = Mg.current;
  E(Mg);
  a._currentValue = b;
}
function Sg(a, b, c) {
  for (; null !== a;) {
    var d = a.alternate;
    (a.childLanes & b) !== b ? (a.childLanes |= b, null !== d && (d.childLanes |= b)) : null !== d && (d.childLanes & b) !== b && (d.childLanes |= b);
    if (a === c) break;
    a = a.return;
  }
}
function Tg(a, b) {
  Ng = a;
  Pg = Og = null;
  a = a.dependencies;
  null !== a && null !== a.firstContext && (0 !== (a.lanes & b) && (Ug = !0), a.firstContext = null);
}
function Vg(a) {
  var b = a._currentValue;
  if (Pg !== a) if (a = {
    context: a,
    memoizedValue: b,
    next: null
  }, null === Og) {
    if (null === Ng) throw Error(p(308));
    Og = a;
    Ng.dependencies = {
      lanes: 0,
      firstContext: a
    };
  } else Og = Og.next = a;
  return b;
}
var Wg = null;
function Xg(a) {
  null === Wg ? Wg = [a] : Wg.push(a);
}
function Yg(a, b, c, d) {
  var e = b.interleaved;
  null === e ? (c.next = c, Xg(b)) : (c.next = e.next, e.next = c);
  b.interleaved = c;
  return Zg(a, d);
}
function Zg(a, b) {
  a.lanes |= b;
  var c = a.alternate;
  null !== c && (c.lanes |= b);
  c = a;
  for (a = a.return; null !== a;) a.childLanes |= b, c = a.alternate, null !== c && (c.childLanes |= b), c = a, a = a.return;
  return 3 === c.tag ? c.stateNode : null;
}
var $g = !1;
function ah(a) {
  a.updateQueue = {
    baseState: a.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: {
      pending: null,
      interleaved: null,
      lanes: 0
    },
    effects: null
  };
}
function bh(a, b) {
  a = a.updateQueue;
  b.updateQueue === a && (b.updateQueue = {
    baseState: a.baseState,
    firstBaseUpdate: a.firstBaseUpdate,
    lastBaseUpdate: a.lastBaseUpdate,
    shared: a.shared,
    effects: a.effects
  });
}
function ch(a, b) {
  return {
    eventTime: a,
    lane: b,
    tag: 0,
    payload: null,
    callback: null,
    next: null
  };
}
function dh(a, b, c) {
  var d = a.updateQueue;
  if (null === d) return null;
  d = d.shared;
  if (0 !== (K & 2)) {
    var e = d.pending;
    null === e ? b.next = b : (b.next = e.next, e.next = b);
    d.pending = b;
    return Zg(a, c);
  }
  e = d.interleaved;
  null === e ? (b.next = b, Xg(d)) : (b.next = e.next, e.next = b);
  d.interleaved = b;
  return Zg(a, c);
}
function eh(a, b, c) {
  b = b.updateQueue;
  if (null !== b && (b = b.shared, 0 !== (c & 4194240))) {
    var d = b.lanes;
    d &= a.pendingLanes;
    c |= d;
    b.lanes = c;
    Cc(a, c);
  }
}
function fh(a, b) {
  var c = a.updateQueue,
    d = a.alternate;
  if (null !== d && (d = d.updateQueue, c === d)) {
    var e = null,
      f = null;
    c = c.firstBaseUpdate;
    if (null !== c) {
      do {
        var g = {
          eventTime: c.eventTime,
          lane: c.lane,
          tag: c.tag,
          payload: c.payload,
          callback: c.callback,
          next: null
        };
        null === f ? e = f = g : f = f.next = g;
        c = c.next;
      } while (null !== c);
      null === f ? e = f = b : f = f.next = b;
    } else e = f = b;
    c = {
      baseState: d.baseState,
      firstBaseUpdate: e,
      lastBaseUpdate: f,
      shared: d.shared,
      effects: d.effects
    };
    a.updateQueue = c;
    return;
  }
  a = c.lastBaseUpdate;
  null === a ? c.firstBaseUpdate = b : a.next = b;
  c.lastBaseUpdate = b;
}
function gh(a, b, c, d) {
  var e = a.updateQueue;
  $g = !1;
  var f = e.firstBaseUpdate,
    g = e.lastBaseUpdate,
    h = e.shared.pending;
  if (null !== h) {
    e.shared.pending = null;
    var k = h,
      l = k.next;
    k.next = null;
    null === g ? f = l : g.next = l;
    g = k;
    var m = a.alternate;
    null !== m && (m = m.updateQueue, h = m.lastBaseUpdate, h !== g && (null === h ? m.firstBaseUpdate = l : h.next = l, m.lastBaseUpdate = k));
  }
  if (null !== f) {
    var q = e.baseState;
    g = 0;
    m = l = k = null;
    h = f;
    do {
      var r = h.lane,
        y = h.eventTime;
      if ((d & r) === r) {
        null !== m && (m = m.next = {
          eventTime: y,
          lane: 0,
          tag: h.tag,
          payload: h.payload,
          callback: h.callback,
          next: null
        });
        a: {
          var n = a,
            t = h;
          r = b;
          y = c;
          switch (t.tag) {
            case 1:
              n = t.payload;
              if ("function" === typeof n) {
                q = n.call(y, q, r);
                break a;
              }
              q = n;
              break a;
            case 3:
              n.flags = n.flags & -65537 | 128;
            case 0:
              n = t.payload;
              r = "function" === typeof n ? n.call(y, q, r) : n;
              if (null === r || void 0 === r) break a;
              q = A({}, q, r);
              break a;
            case 2:
              $g = !0;
          }
        }
        null !== h.callback && 0 !== h.lane && (a.flags |= 64, r = e.effects, null === r ? e.effects = [h] : r.push(h));
      } else y = {
        eventTime: y,
        lane: r,
        tag: h.tag,
        payload: h.payload,
        callback: h.callback,
        next: null
      }, null === m ? (l = m = y, k = q) : m = m.next = y, g |= r;
      h = h.next;
      if (null === h) if (h = e.shared.pending, null === h) break;else r = h, h = r.next, r.next = null, e.lastBaseUpdate = r, e.shared.pending = null;
    } while (1);
    null === m && (k = q);
    e.baseState = k;
    e.firstBaseUpdate = l;
    e.lastBaseUpdate = m;
    b = e.shared.interleaved;
    if (null !== b) {
      e = b;
      do g |= e.lane, e = e.next; while (e !== b);
    } else null === f && (e.shared.lanes = 0);
    hh |= g;
    a.lanes = g;
    a.memoizedState = q;
  }
}
function ih(a, b, c) {
  a = b.effects;
  b.effects = null;
  if (null !== a) for (b = 0; b < a.length; b++) {
    var d = a[b],
      e = d.callback;
    if (null !== e) {
      d.callback = null;
      d = c;
      if ("function" !== typeof e) throw Error(p(191, e));
      e.call(d);
    }
  }
}
var jh = new aa.Component().refs;
function kh(a, b, c, d) {
  b = a.memoizedState;
  c = c(d, b);
  c = null === c || void 0 === c ? b : A({}, b, c);
  a.memoizedState = c;
  0 === a.lanes && (a.updateQueue.baseState = c);
}
var nh = {
  isMounted: function isMounted(a) {
    return (a = a._reactInternals) ? Vb(a) === a : !1;
  },
  enqueueSetState: function enqueueSetState(a, b, c) {
    a = a._reactInternals;
    var d = L(),
      e = lh(a),
      f = ch(d, e);
    f.payload = b;
    void 0 !== c && null !== c && (f.callback = c);
    b = dh(a, f, e);
    null !== b && (mh(b, a, e, d), eh(b, a, e));
  },
  enqueueReplaceState: function enqueueReplaceState(a, b, c) {
    a = a._reactInternals;
    var d = L(),
      e = lh(a),
      f = ch(d, e);
    f.tag = 1;
    f.payload = b;
    void 0 !== c && null !== c && (f.callback = c);
    b = dh(a, f, e);
    null !== b && (mh(b, a, e, d), eh(b, a, e));
  },
  enqueueForceUpdate: function enqueueForceUpdate(a, b) {
    a = a._reactInternals;
    var c = L(),
      d = lh(a),
      e = ch(c, d);
    e.tag = 2;
    void 0 !== b && null !== b && (e.callback = b);
    b = dh(a, e, d);
    null !== b && (mh(b, a, d, c), eh(b, a, d));
  }
};
function oh(a, b, c, d, e, f, g) {
  a = a.stateNode;
  return "function" === typeof a.shouldComponentUpdate ? a.shouldComponentUpdate(d, f, g) : b.prototype && b.prototype.isPureReactComponent ? !Ie(c, d) || !Ie(e, f) : !0;
}
function ph(a, b, c) {
  var d = !1,
    e = Vf;
  var f = b.contextType;
  "object" === typeof f && null !== f ? f = Vg(f) : (e = Zf(b) ? Xf : H.current, d = b.contextTypes, f = (d = null !== d && void 0 !== d) ? Yf(a, e) : Vf);
  b = new b(c, f);
  a.memoizedState = null !== b.state && void 0 !== b.state ? b.state : null;
  b.updater = nh;
  a.stateNode = b;
  b._reactInternals = a;
  d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e, a.__reactInternalMemoizedMaskedChildContext = f);
  return b;
}
function qh(a, b, c, d) {
  a = b.state;
  "function" === typeof b.componentWillReceiveProps && b.componentWillReceiveProps(c, d);
  "function" === typeof b.UNSAFE_componentWillReceiveProps && b.UNSAFE_componentWillReceiveProps(c, d);
  b.state !== a && nh.enqueueReplaceState(b, b.state, null);
}
function rh(a, b, c, d) {
  var e = a.stateNode;
  e.props = c;
  e.state = a.memoizedState;
  e.refs = jh;
  ah(a);
  var f = b.contextType;
  "object" === typeof f && null !== f ? e.context = Vg(f) : (f = Zf(b) ? Xf : H.current, e.context = Yf(a, f));
  e.state = a.memoizedState;
  f = b.getDerivedStateFromProps;
  "function" === typeof f && (kh(a, b, f, c), e.state = a.memoizedState);
  "function" === typeof b.getDerivedStateFromProps || "function" === typeof e.getSnapshotBeforeUpdate || "function" !== typeof e.UNSAFE_componentWillMount && "function" !== typeof e.componentWillMount || (b = e.state, "function" === typeof e.componentWillMount && e.componentWillMount(), "function" === typeof e.UNSAFE_componentWillMount && e.UNSAFE_componentWillMount(), b !== e.state && nh.enqueueReplaceState(e, e.state, null), gh(a, c, e, d), e.state = a.memoizedState);
  "function" === typeof e.componentDidMount && (a.flags |= 4194308);
}
function sh(a, b, c) {
  a = c.ref;
  if (null !== a && "function" !== typeof a && "object" !== typeof a) {
    if (c._owner) {
      c = c._owner;
      if (c) {
        if (1 !== c.tag) throw Error(p(309));
        var d = c.stateNode;
      }
      if (!d) throw Error(p(147, a));
      var e = d,
        f = "" + a;
      if (null !== b && null !== b.ref && "function" === typeof b.ref && b.ref._stringRef === f) return b.ref;
      b = function b(a) {
        var b = e.refs;
        b === jh && (b = e.refs = {});
        null === a ? delete b[f] : b[f] = a;
      };
      b._stringRef = f;
      return b;
    }
    if ("string" !== typeof a) throw Error(p(284));
    if (!c._owner) throw Error(p(290, a));
  }
  return a;
}
function th(a, b) {
  a = Object.prototype.toString.call(b);
  throw Error(p(31, "[object Object]" === a ? "object with keys {" + Object.keys(b).join(", ") + "}" : a));
}
function uh(a) {
  var b = a._init;
  return b(a._payload);
}
function vh(a) {
  function b(b, c) {
    if (a) {
      var d = b.deletions;
      null === d ? (b.deletions = [c], b.flags |= 16) : d.push(c);
    }
  }
  function c(c, d) {
    if (!a) return null;
    for (; null !== d;) b(c, d), d = d.sibling;
    return null;
  }
  function d(a, b) {
    for (a = new Map(); null !== b;) null !== b.key ? a.set(b.key, b) : a.set(b.index, b), b = b.sibling;
    return a;
  }
  function e(a, b) {
    a = wh(a, b);
    a.index = 0;
    a.sibling = null;
    return a;
  }
  function f(b, c, d) {
    b.index = d;
    if (!a) return b.flags |= 1048576, c;
    d = b.alternate;
    if (null !== d) return d = d.index, d < c ? (b.flags |= 2, c) : d;
    b.flags |= 2;
    return c;
  }
  function g(b) {
    a && null === b.alternate && (b.flags |= 2);
    return b;
  }
  function h(a, b, c, d) {
    if (null === b || 6 !== b.tag) return b = xh(c, a.mode, d), b.return = a, b;
    b = e(b, c);
    b.return = a;
    return b;
  }
  function k(a, b, c, d) {
    var f = c.type;
    if (f === ya) return m(a, b, c.props.children, d, c.key);
    if (null !== b && (b.elementType === f || "object" === typeof f && null !== f && f.$$typeof === Ha && uh(f) === b.type)) return d = e(b, c.props), d.ref = sh(a, b, c), d.return = a, d;
    d = yh(c.type, c.key, c.props, null, a.mode, d);
    d.ref = sh(a, b, c);
    d.return = a;
    return d;
  }
  function l(a, b, c, d) {
    if (null === b || 4 !== b.tag || b.stateNode.containerInfo !== c.containerInfo || b.stateNode.implementation !== c.implementation) return b = zh(c, a.mode, d), b.return = a, b;
    b = e(b, c.children || []);
    b.return = a;
    return b;
  }
  function m(a, b, c, d, f) {
    if (null === b || 7 !== b.tag) return b = Ah(c, a.mode, d, f), b.return = a, b;
    b = e(b, c);
    b.return = a;
    return b;
  }
  function q(a, b, c) {
    if ("string" === typeof b && "" !== b || "number" === typeof b) return b = xh("" + b, a.mode, c), b.return = a, b;
    if ("object" === typeof b && null !== b) {
      switch (b.$$typeof) {
        case va:
          return c = yh(b.type, b.key, b.props, null, a.mode, c), c.ref = sh(a, null, b), c.return = a, c;
        case wa:
          return b = zh(b, a.mode, c), b.return = a, b;
        case Ha:
          var d = b._init;
          return q(a, d(b._payload), c);
      }
      if (eb(b) || Ka(b)) return b = Ah(b, a.mode, c, null), b.return = a, b;
      th(a, b);
    }
    return null;
  }
  function r(a, b, c, d) {
    var e = null !== b ? b.key : null;
    if ("string" === typeof c && "" !== c || "number" === typeof c) return null !== e ? null : h(a, b, "" + c, d);
    if ("object" === typeof c && null !== c) {
      switch (c.$$typeof) {
        case va:
          return c.key === e ? k(a, b, c, d) : null;
        case wa:
          return c.key === e ? l(a, b, c, d) : null;
        case Ha:
          return e = c._init, r(a, b, e(c._payload), d);
      }
      if (eb(c) || Ka(c)) return null !== e ? null : m(a, b, c, d, null);
      th(a, c);
    }
    return null;
  }
  function y(a, b, c, d, e) {
    if ("string" === typeof d && "" !== d || "number" === typeof d) return a = a.get(c) || null, h(b, a, "" + d, e);
    if ("object" === typeof d && null !== d) {
      switch (d.$$typeof) {
        case va:
          return a = a.get(null === d.key ? c : d.key) || null, k(b, a, d, e);
        case wa:
          return a = a.get(null === d.key ? c : d.key) || null, l(b, a, d, e);
        case Ha:
          var f = d._init;
          return y(a, b, c, f(d._payload), e);
      }
      if (eb(d) || Ka(d)) return a = a.get(c) || null, m(b, a, d, e, null);
      th(b, d);
    }
    return null;
  }
  function n(e, g, h, k) {
    for (var l = null, m = null, u = g, w = g = 0, x = null; null !== u && w < h.length; w++) {
      u.index > w ? (x = u, u = null) : x = u.sibling;
      var n = r(e, u, h[w], k);
      if (null === n) {
        null === u && (u = x);
        break;
      }
      a && u && null === n.alternate && b(e, u);
      g = f(n, g, w);
      null === m ? l = n : m.sibling = n;
      m = n;
      u = x;
    }
    if (w === h.length) return c(e, u), I && tg(e, w), l;
    if (null === u) {
      for (; w < h.length; w++) u = q(e, h[w], k), null !== u && (g = f(u, g, w), null === m ? l = u : m.sibling = u, m = u);
      I && tg(e, w);
      return l;
    }
    for (u = d(e, u); w < h.length; w++) x = y(u, e, w, h[w], k), null !== x && (a && null !== x.alternate && u.delete(null === x.key ? w : x.key), g = f(x, g, w), null === m ? l = x : m.sibling = x, m = x);
    a && u.forEach(function (a) {
      return b(e, a);
    });
    I && tg(e, w);
    return l;
  }
  function t(e, g, h, k) {
    var l = Ka(h);
    if ("function" !== typeof l) throw Error(p(150));
    h = l.call(h);
    if (null == h) throw Error(p(151));
    for (var u = l = null, m = g, w = g = 0, x = null, n = h.next(); null !== m && !n.done; w++, n = h.next()) {
      m.index > w ? (x = m, m = null) : x = m.sibling;
      var t = r(e, m, n.value, k);
      if (null === t) {
        null === m && (m = x);
        break;
      }
      a && m && null === t.alternate && b(e, m);
      g = f(t, g, w);
      null === u ? l = t : u.sibling = t;
      u = t;
      m = x;
    }
    if (n.done) return c(e, m), I && tg(e, w), l;
    if (null === m) {
      for (; !n.done; w++, n = h.next()) n = q(e, n.value, k), null !== n && (g = f(n, g, w), null === u ? l = n : u.sibling = n, u = n);
      I && tg(e, w);
      return l;
    }
    for (m = d(e, m); !n.done; w++, n = h.next()) n = y(m, e, w, n.value, k), null !== n && (a && null !== n.alternate && m.delete(null === n.key ? w : n.key), g = f(n, g, w), null === u ? l = n : u.sibling = n, u = n);
    a && m.forEach(function (a) {
      return b(e, a);
    });
    I && tg(e, w);
    return l;
  }
  function J(a, d, f, h) {
    "object" === typeof f && null !== f && f.type === ya && null === f.key && (f = f.props.children);
    if ("object" === typeof f && null !== f) {
      switch (f.$$typeof) {
        case va:
          a: {
            for (var k = f.key, l = d; null !== l;) {
              if (l.key === k) {
                k = f.type;
                if (k === ya) {
                  if (7 === l.tag) {
                    c(a, l.sibling);
                    d = e(l, f.props.children);
                    d.return = a;
                    a = d;
                    break a;
                  }
                } else if (l.elementType === k || "object" === typeof k && null !== k && k.$$typeof === Ha && uh(k) === l.type) {
                  c(a, l.sibling);
                  d = e(l, f.props);
                  d.ref = sh(a, l, f);
                  d.return = a;
                  a = d;
                  break a;
                }
                c(a, l);
                break;
              } else b(a, l);
              l = l.sibling;
            }
            f.type === ya ? (d = Ah(f.props.children, a.mode, h, f.key), d.return = a, a = d) : (h = yh(f.type, f.key, f.props, null, a.mode, h), h.ref = sh(a, d, f), h.return = a, a = h);
          }
          return g(a);
        case wa:
          a: {
            for (l = f.key; null !== d;) {
              if (d.key === l) {
                if (4 === d.tag && d.stateNode.containerInfo === f.containerInfo && d.stateNode.implementation === f.implementation) {
                  c(a, d.sibling);
                  d = e(d, f.children || []);
                  d.return = a;
                  a = d;
                  break a;
                } else {
                  c(a, d);
                  break;
                }
              } else b(a, d);
              d = d.sibling;
            }
            d = zh(f, a.mode, h);
            d.return = a;
            a = d;
          }
          return g(a);
        case Ha:
          return l = f._init, J(a, d, l(f._payload), h);
      }
      if (eb(f)) return n(a, d, f, h);
      if (Ka(f)) return t(a, d, f, h);
      th(a, f);
    }
    return "string" === typeof f && "" !== f || "number" === typeof f ? (f = "" + f, null !== d && 6 === d.tag ? (c(a, d.sibling), d = e(d, f), d.return = a, a = d) : (c(a, d), d = xh(f, a.mode, h), d.return = a, a = d), g(a)) : c(a, d);
  }
  return J;
}
var Bh = vh(!0),
  Ch = vh(!1),
  Dh = {},
  Eh = Uf(Dh),
  Fh = Uf(Dh),
  Gh = Uf(Dh);
function Hh(a) {
  if (a === Dh) throw Error(p(174));
  return a;
}
function Ih(a, b) {
  G(Gh, b);
  G(Fh, a);
  G(Eh, Dh);
  a = b.nodeType;
  switch (a) {
    case 9:
    case 11:
      b = (b = b.documentElement) ? b.namespaceURI : lb(null, "");
      break;
    default:
      a = 8 === a ? b.parentNode : b, b = a.namespaceURI || null, a = a.tagName, b = lb(b, a);
  }
  E(Eh);
  G(Eh, b);
}
function Jh() {
  E(Eh);
  E(Fh);
  E(Gh);
}
function Kh(a) {
  Hh(Gh.current);
  var b = Hh(Eh.current);
  var c = lb(b, a.type);
  b !== c && (G(Fh, a), G(Eh, c));
}
function Lh(a) {
  Fh.current === a && (E(Eh), E(Fh));
}
var M = Uf(0);
function Mh(a) {
  for (var b = a; null !== b;) {
    if (13 === b.tag) {
      var c = b.memoizedState;
      if (null !== c && (c = c.dehydrated, null === c || "$?" === c.data || "$!" === c.data)) return b;
    } else if (19 === b.tag && void 0 !== b.memoizedProps.revealOrder) {
      if (0 !== (b.flags & 128)) return b;
    } else if (null !== b.child) {
      b.child.return = b;
      b = b.child;
      continue;
    }
    if (b === a) break;
    for (; null === b.sibling;) {
      if (null === b.return || b.return === a) return null;
      b = b.return;
    }
    b.sibling.return = b.return;
    b = b.sibling;
  }
  return null;
}
var Nh = [];
function Oh() {
  for (var a = 0; a < Nh.length; a++) Nh[a]._workInProgressVersionPrimary = null;
  Nh.length = 0;
}
var Ph = ua.ReactCurrentDispatcher,
  Qh = ua.ReactCurrentBatchConfig,
  Rh = 0,
  N = null,
  O = null,
  P = null,
  Sh = !1,
  Th = !1,
  Uh = 0,
  Vh = 0;
function Q() {
  throw Error(p(321));
}
function Wh(a, b) {
  if (null === b) return !1;
  for (var c = 0; c < b.length && c < a.length; c++) if (!He(a[c], b[c])) return !1;
  return !0;
}
function Xh(a, b, c, d, e, f) {
  Rh = f;
  N = b;
  b.memoizedState = null;
  b.updateQueue = null;
  b.lanes = 0;
  Ph.current = null === a || null === a.memoizedState ? Yh : Zh;
  a = c(d, e);
  if (Th) {
    f = 0;
    do {
      Th = !1;
      Uh = 0;
      if (25 <= f) throw Error(p(301));
      f += 1;
      P = O = null;
      b.updateQueue = null;
      Ph.current = $h;
      a = c(d, e);
    } while (Th);
  }
  Ph.current = ai;
  b = null !== O && null !== O.next;
  Rh = 0;
  P = O = N = null;
  Sh = !1;
  if (b) throw Error(p(300));
  return a;
}
function bi() {
  var a = 0 !== Uh;
  Uh = 0;
  return a;
}
function ci() {
  var a = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null
  };
  null === P ? N.memoizedState = P = a : P = P.next = a;
  return P;
}
function di() {
  if (null === O) {
    var a = N.alternate;
    a = null !== a ? a.memoizedState : null;
  } else a = O.next;
  var b = null === P ? N.memoizedState : P.next;
  if (null !== b) P = b, O = a;else {
    if (null === a) throw Error(p(310));
    O = a;
    a = {
      memoizedState: O.memoizedState,
      baseState: O.baseState,
      baseQueue: O.baseQueue,
      queue: O.queue,
      next: null
    };
    null === P ? N.memoizedState = P = a : P = P.next = a;
  }
  return P;
}
function ei(a, b) {
  return "function" === typeof b ? b(a) : b;
}
function fi(a) {
  var b = di(),
    c = b.queue;
  if (null === c) throw Error(p(311));
  c.lastRenderedReducer = a;
  var d = O,
    e = d.baseQueue,
    f = c.pending;
  if (null !== f) {
    if (null !== e) {
      var g = e.next;
      e.next = f.next;
      f.next = g;
    }
    d.baseQueue = e = f;
    c.pending = null;
  }
  if (null !== e) {
    f = e.next;
    d = d.baseState;
    var h = g = null,
      k = null,
      l = f;
    do {
      var m = l.lane;
      if ((Rh & m) === m) null !== k && (k = k.next = {
        lane: 0,
        action: l.action,
        hasEagerState: l.hasEagerState,
        eagerState: l.eagerState,
        next: null
      }), d = l.hasEagerState ? l.eagerState : a(d, l.action);else {
        var q = {
          lane: m,
          action: l.action,
          hasEagerState: l.hasEagerState,
          eagerState: l.eagerState,
          next: null
        };
        null === k ? (h = k = q, g = d) : k = k.next = q;
        N.lanes |= m;
        hh |= m;
      }
      l = l.next;
    } while (null !== l && l !== f);
    null === k ? g = d : k.next = h;
    He(d, b.memoizedState) || (Ug = !0);
    b.memoizedState = d;
    b.baseState = g;
    b.baseQueue = k;
    c.lastRenderedState = d;
  }
  a = c.interleaved;
  if (null !== a) {
    e = a;
    do f = e.lane, N.lanes |= f, hh |= f, e = e.next; while (e !== a);
  } else null === e && (c.lanes = 0);
  return [b.memoizedState, c.dispatch];
}
function gi(a) {
  var b = di(),
    c = b.queue;
  if (null === c) throw Error(p(311));
  c.lastRenderedReducer = a;
  var d = c.dispatch,
    e = c.pending,
    f = b.memoizedState;
  if (null !== e) {
    c.pending = null;
    var g = e = e.next;
    do f = a(f, g.action), g = g.next; while (g !== e);
    He(f, b.memoizedState) || (Ug = !0);
    b.memoizedState = f;
    null === b.baseQueue && (b.baseState = f);
    c.lastRenderedState = f;
  }
  return [f, d];
}
function hi() {}
function ii(a, b) {
  var c = N,
    d = di(),
    e = b(),
    f = !He(d.memoizedState, e);
  f && (d.memoizedState = e, Ug = !0);
  d = d.queue;
  ji(ki.bind(null, c, d, a), [a]);
  if (d.getSnapshot !== b || f || null !== P && P.memoizedState.tag & 1) {
    c.flags |= 2048;
    li(9, mi.bind(null, c, d, e, b), void 0, null);
    if (null === R) throw Error(p(349));
    0 !== (Rh & 30) || ni(c, b, e);
  }
  return e;
}
function ni(a, b, c) {
  a.flags |= 16384;
  a = {
    getSnapshot: b,
    value: c
  };
  b = N.updateQueue;
  null === b ? (b = {
    lastEffect: null,
    stores: null
  }, N.updateQueue = b, b.stores = [a]) : (c = b.stores, null === c ? b.stores = [a] : c.push(a));
}
function mi(a, b, c, d) {
  b.value = c;
  b.getSnapshot = d;
  oi(b) && pi(a);
}
function ki(a, b, c) {
  return c(function () {
    oi(b) && pi(a);
  });
}
function oi(a) {
  var b = a.getSnapshot;
  a = a.value;
  try {
    var c = b();
    return !He(a, c);
  } catch (d) {
    return !0;
  }
}
function pi(a) {
  var b = Zg(a, 1);
  null !== b && mh(b, a, 1, -1);
}
function qi(a) {
  var b = ci();
  "function" === typeof a && (a = a());
  b.memoizedState = b.baseState = a;
  a = {
    pending: null,
    interleaved: null,
    lanes: 0,
    dispatch: null,
    lastRenderedReducer: ei,
    lastRenderedState: a
  };
  b.queue = a;
  a = a.dispatch = ri.bind(null, N, a);
  return [b.memoizedState, a];
}
function li(a, b, c, d) {
  a = {
    tag: a,
    create: b,
    destroy: c,
    deps: d,
    next: null
  };
  b = N.updateQueue;
  null === b ? (b = {
    lastEffect: null,
    stores: null
  }, N.updateQueue = b, b.lastEffect = a.next = a) : (c = b.lastEffect, null === c ? b.lastEffect = a.next = a : (d = c.next, c.next = a, a.next = d, b.lastEffect = a));
  return a;
}
function si() {
  return di().memoizedState;
}
function ti(a, b, c, d) {
  var e = ci();
  N.flags |= a;
  e.memoizedState = li(1 | b, c, void 0, void 0 === d ? null : d);
}
function ui(a, b, c, d) {
  var e = di();
  d = void 0 === d ? null : d;
  var f = void 0;
  if (null !== O) {
    var g = O.memoizedState;
    f = g.destroy;
    if (null !== d && Wh(d, g.deps)) {
      e.memoizedState = li(b, c, f, d);
      return;
    }
  }
  N.flags |= a;
  e.memoizedState = li(1 | b, c, f, d);
}
function vi(a, b) {
  return ti(8390656, 8, a, b);
}
function ji(a, b) {
  return ui(2048, 8, a, b);
}
function wi(a, b) {
  return ui(4, 2, a, b);
}
function xi(a, b) {
  return ui(4, 4, a, b);
}
function yi(a, b) {
  if ("function" === typeof b) return a = a(), b(a), function () {
    b(null);
  };
  if (null !== b && void 0 !== b) return a = a(), b.current = a, function () {
    b.current = null;
  };
}
function zi(a, b, c) {
  c = null !== c && void 0 !== c ? c.concat([a]) : null;
  return ui(4, 4, yi.bind(null, b, a), c);
}
function Ai() {}
function Bi(a, b) {
  var c = di();
  b = void 0 === b ? null : b;
  var d = c.memoizedState;
  if (null !== d && null !== b && Wh(b, d[1])) return d[0];
  c.memoizedState = [a, b];
  return a;
}
function Ci(a, b) {
  var c = di();
  b = void 0 === b ? null : b;
  var d = c.memoizedState;
  if (null !== d && null !== b && Wh(b, d[1])) return d[0];
  a = a();
  c.memoizedState = [a, b];
  return a;
}
function Di(a, b, c) {
  if (0 === (Rh & 21)) return a.baseState && (a.baseState = !1, Ug = !0), a.memoizedState = c;
  He(c, b) || (c = yc(), N.lanes |= c, hh |= c, a.baseState = !0);
  return b;
}
function Ei(a, b) {
  var c = C;
  C = 0 !== c && 4 > c ? c : 4;
  a(!0);
  var d = Qh.transition;
  Qh.transition = {};
  try {
    a(!1), b();
  } finally {
    C = c, Qh.transition = d;
  }
}
function Fi() {
  return di().memoizedState;
}
function Gi(a, b, c) {
  var d = lh(a);
  c = {
    lane: d,
    action: c,
    hasEagerState: !1,
    eagerState: null,
    next: null
  };
  if (Hi(a)) Ii(b, c);else if (c = Yg(a, b, c, d), null !== c) {
    var e = L();
    mh(c, a, d, e);
    Ji(c, b, d);
  }
}
function ri(a, b, c) {
  var d = lh(a),
    e = {
      lane: d,
      action: c,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
  if (Hi(a)) Ii(b, e);else {
    var f = a.alternate;
    if (0 === a.lanes && (null === f || 0 === f.lanes) && (f = b.lastRenderedReducer, null !== f)) try {
      var g = b.lastRenderedState,
        h = f(g, c);
      e.hasEagerState = !0;
      e.eagerState = h;
      if (He(h, g)) {
        var k = b.interleaved;
        null === k ? (e.next = e, Xg(b)) : (e.next = k.next, k.next = e);
        b.interleaved = e;
        return;
      }
    } catch (l) {} finally {}
    c = Yg(a, b, e, d);
    null !== c && (e = L(), mh(c, a, d, e), Ji(c, b, d));
  }
}
function Hi(a) {
  var b = a.alternate;
  return a === N || null !== b && b === N;
}
function Ii(a, b) {
  Th = Sh = !0;
  var c = a.pending;
  null === c ? b.next = b : (b.next = c.next, c.next = b);
  a.pending = b;
}
function Ji(a, b, c) {
  if (0 !== (c & 4194240)) {
    var d = b.lanes;
    d &= a.pendingLanes;
    c |= d;
    b.lanes = c;
    Cc(a, c);
  }
}
var ai = {
    readContext: Vg,
    useCallback: Q,
    useContext: Q,
    useEffect: Q,
    useImperativeHandle: Q,
    useInsertionEffect: Q,
    useLayoutEffect: Q,
    useMemo: Q,
    useReducer: Q,
    useRef: Q,
    useState: Q,
    useDebugValue: Q,
    useDeferredValue: Q,
    useTransition: Q,
    useMutableSource: Q,
    useSyncExternalStore: Q,
    useId: Q,
    unstable_isNewReconciler: !1
  },
  Yh = {
    readContext: Vg,
    useCallback: function useCallback(a, b) {
      ci().memoizedState = [a, void 0 === b ? null : b];
      return a;
    },
    useContext: Vg,
    useEffect: vi,
    useImperativeHandle: function useImperativeHandle(a, b, c) {
      c = null !== c && void 0 !== c ? c.concat([a]) : null;
      return ti(4194308, 4, yi.bind(null, b, a), c);
    },
    useLayoutEffect: function useLayoutEffect(a, b) {
      return ti(4194308, 4, a, b);
    },
    useInsertionEffect: function useInsertionEffect(a, b) {
      return ti(4, 2, a, b);
    },
    useMemo: function useMemo(a, b) {
      var c = ci();
      b = void 0 === b ? null : b;
      a = a();
      c.memoizedState = [a, b];
      return a;
    },
    useReducer: function useReducer(a, b, c) {
      var d = ci();
      b = void 0 !== c ? c(b) : b;
      d.memoizedState = d.baseState = b;
      a = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: a,
        lastRenderedState: b
      };
      d.queue = a;
      a = a.dispatch = Gi.bind(null, N, a);
      return [d.memoizedState, a];
    },
    useRef: function useRef(a) {
      var b = ci();
      a = {
        current: a
      };
      return b.memoizedState = a;
    },
    useState: qi,
    useDebugValue: Ai,
    useDeferredValue: function useDeferredValue(a) {
      return ci().memoizedState = a;
    },
    useTransition: function useTransition() {
      var a = qi(!1),
        b = a[0];
      a = Ei.bind(null, a[1]);
      ci().memoizedState = a;
      return [b, a];
    },
    useMutableSource: function useMutableSource() {},
    useSyncExternalStore: function useSyncExternalStore(a, b, c) {
      var d = N,
        e = ci();
      if (I) {
        if (void 0 === c) throw Error(p(407));
        c = c();
      } else {
        c = b();
        if (null === R) throw Error(p(349));
        0 !== (Rh & 30) || ni(d, b, c);
      }
      e.memoizedState = c;
      var f = {
        value: c,
        getSnapshot: b
      };
      e.queue = f;
      vi(ki.bind(null, d, f, a), [a]);
      d.flags |= 2048;
      li(9, mi.bind(null, d, f, c, b), void 0, null);
      return c;
    },
    useId: function useId() {
      var a = ci(),
        b = R.identifierPrefix;
      if (I) {
        var c = sg;
        var d = rg;
        c = (d & ~(1 << 32 - oc(d) - 1)).toString(32) + c;
        b = ":" + b + "R" + c;
        c = Uh++;
        0 < c && (b += "H" + c.toString(32));
        b += ":";
      } else c = Vh++, b = ":" + b + "r" + c.toString(32) + ":";
      return a.memoizedState = b;
    },
    unstable_isNewReconciler: !1
  },
  Zh = {
    readContext: Vg,
    useCallback: Bi,
    useContext: Vg,
    useEffect: ji,
    useImperativeHandle: zi,
    useInsertionEffect: wi,
    useLayoutEffect: xi,
    useMemo: Ci,
    useReducer: fi,
    useRef: si,
    useState: function useState() {
      return fi(ei);
    },
    useDebugValue: Ai,
    useDeferredValue: function useDeferredValue(a) {
      var b = di();
      return Di(b, O.memoizedState, a);
    },
    useTransition: function useTransition() {
      var a = fi(ei)[0],
        b = di().memoizedState;
      return [a, b];
    },
    useMutableSource: hi,
    useSyncExternalStore: ii,
    useId: Fi,
    unstable_isNewReconciler: !1
  },
  $h = {
    readContext: Vg,
    useCallback: Bi,
    useContext: Vg,
    useEffect: ji,
    useImperativeHandle: zi,
    useInsertionEffect: wi,
    useLayoutEffect: xi,
    useMemo: Ci,
    useReducer: gi,
    useRef: si,
    useState: function useState() {
      return gi(ei);
    },
    useDebugValue: Ai,
    useDeferredValue: function useDeferredValue(a) {
      var b = di();
      return null === O ? b.memoizedState = a : Di(b, O.memoizedState, a);
    },
    useTransition: function useTransition() {
      var a = gi(ei)[0],
        b = di().memoizedState;
      return [a, b];
    },
    useMutableSource: hi,
    useSyncExternalStore: ii,
    useId: Fi,
    unstable_isNewReconciler: !1
  };
function Ki(a, b) {
  try {
    var c = "",
      d = b;
    do c += Pa(d), d = d.return; while (d);
    var e = c;
  } catch (f) {
    e = "\nError generating stack: " + f.message + "\n" + f.stack;
  }
  return {
    value: a,
    source: b,
    stack: e,
    digest: null
  };
}
function Li(a, b, c) {
  return {
    value: a,
    source: null,
    stack: null != c ? c : null,
    digest: null != b ? b : null
  };
}
function Mi(a, b) {
  try {
    console.error(b.value);
  } catch (c) {
    setTimeout(function () {
      throw c;
    });
  }
}
var Ni = "function" === typeof WeakMap ? WeakMap : Map;
function Oi(a, b, c) {
  c = ch(-1, c);
  c.tag = 3;
  c.payload = {
    element: null
  };
  var d = b.value;
  c.callback = function () {
    Pi || (Pi = !0, Qi = d);
    Mi(a, b);
  };
  return c;
}
function Ri(a, b, c) {
  c = ch(-1, c);
  c.tag = 3;
  var d = a.type.getDerivedStateFromError;
  if ("function" === typeof d) {
    var e = b.value;
    c.payload = function () {
      return d(e);
    };
    c.callback = function () {
      Mi(a, b);
    };
  }
  var f = a.stateNode;
  null !== f && "function" === typeof f.componentDidCatch && (c.callback = function () {
    Mi(a, b);
    "function" !== typeof d && (null === Si ? Si = new Set([this]) : Si.add(this));
    var c = b.stack;
    this.componentDidCatch(b.value, {
      componentStack: null !== c ? c : ""
    });
  });
  return c;
}
function Ti(a, b, c) {
  var d = a.pingCache;
  if (null === d) {
    d = a.pingCache = new Ni();
    var e = new Set();
    d.set(b, e);
  } else e = d.get(b), void 0 === e && (e = new Set(), d.set(b, e));
  e.has(c) || (e.add(c), a = Ui.bind(null, a, b, c), b.then(a, a));
}
function Vi(a) {
  do {
    var b;
    if (b = 13 === a.tag) b = a.memoizedState, b = null !== b ? null !== b.dehydrated ? !0 : !1 : !0;
    if (b) return a;
    a = a.return;
  } while (null !== a);
  return null;
}
function Wi(a, b, c, d, e) {
  if (0 === (a.mode & 1)) return a === b ? a.flags |= 65536 : (a.flags |= 128, c.flags |= 131072, c.flags &= -52805, 1 === c.tag && (null === c.alternate ? c.tag = 17 : (b = ch(-1, 1), b.tag = 2, dh(c, b, 1))), c.lanes |= 1), a;
  a.flags |= 65536;
  a.lanes = e;
  return a;
}
var Xi = ua.ReactCurrentOwner,
  Ug = !1;
function Yi(a, b, c, d) {
  b.child = null === a ? Ch(b, null, c, d) : Bh(b, a.child, c, d);
}
function Zi(a, b, c, d, e) {
  c = c.render;
  var f = b.ref;
  Tg(b, e);
  d = Xh(a, b, c, d, f, e);
  c = bi();
  if (null !== a && !Ug) return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, $i(a, b, e);
  I && c && vg(b);
  b.flags |= 1;
  Yi(a, b, d, e);
  return b.child;
}
function aj(a, b, c, d, e) {
  if (null === a) {
    var f = c.type;
    if ("function" === typeof f && !bj(f) && void 0 === f.defaultProps && null === c.compare && void 0 === c.defaultProps) return b.tag = 15, b.type = f, cj(a, b, f, d, e);
    a = yh(c.type, null, d, b, b.mode, e);
    a.ref = b.ref;
    a.return = b;
    return b.child = a;
  }
  f = a.child;
  if (0 === (a.lanes & e)) {
    var g = f.memoizedProps;
    c = c.compare;
    c = null !== c ? c : Ie;
    if (c(g, d) && a.ref === b.ref) return $i(a, b, e);
  }
  b.flags |= 1;
  a = wh(f, d);
  a.ref = b.ref;
  a.return = b;
  return b.child = a;
}
function cj(a, b, c, d, e) {
  if (null !== a) {
    var f = a.memoizedProps;
    if (Ie(f, d) && a.ref === b.ref) if (Ug = !1, b.pendingProps = d = f, 0 !== (a.lanes & e)) 0 !== (a.flags & 131072) && (Ug = !0);else return b.lanes = a.lanes, $i(a, b, e);
  }
  return dj(a, b, c, d, e);
}
function ej(a, b, c) {
  var d = b.pendingProps,
    e = d.children,
    f = null !== a ? a.memoizedState : null;
  if ("hidden" === d.mode) {
    if (0 === (b.mode & 1)) b.memoizedState = {
      baseLanes: 0,
      cachePool: null,
      transitions: null
    }, G(fj, gj), gj |= c;else {
      if (0 === (c & 1073741824)) return a = null !== f ? f.baseLanes | c : c, b.lanes = b.childLanes = 1073741824, b.memoizedState = {
        baseLanes: a,
        cachePool: null,
        transitions: null
      }, b.updateQueue = null, G(fj, gj), gj |= a, null;
      b.memoizedState = {
        baseLanes: 0,
        cachePool: null,
        transitions: null
      };
      d = null !== f ? f.baseLanes : c;
      G(fj, gj);
      gj |= d;
    }
  } else null !== f ? (d = f.baseLanes | c, b.memoizedState = null) : d = c, G(fj, gj), gj |= d;
  Yi(a, b, e, c);
  return b.child;
}
function hj(a, b) {
  var c = b.ref;
  if (null === a && null !== c || null !== a && a.ref !== c) b.flags |= 512, b.flags |= 2097152;
}
function dj(a, b, c, d, e) {
  var f = Zf(c) ? Xf : H.current;
  f = Yf(b, f);
  Tg(b, e);
  c = Xh(a, b, c, d, f, e);
  d = bi();
  if (null !== a && !Ug) return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, $i(a, b, e);
  I && d && vg(b);
  b.flags |= 1;
  Yi(a, b, c, e);
  return b.child;
}
function ij(a, b, c, d, e) {
  if (Zf(c)) {
    var f = !0;
    cg(b);
  } else f = !1;
  Tg(b, e);
  if (null === b.stateNode) jj(a, b), ph(b, c, d), rh(b, c, d, e), d = !0;else if (null === a) {
    var g = b.stateNode,
      h = b.memoizedProps;
    g.props = h;
    var k = g.context,
      l = c.contextType;
    "object" === typeof l && null !== l ? l = Vg(l) : (l = Zf(c) ? Xf : H.current, l = Yf(b, l));
    var m = c.getDerivedStateFromProps,
      q = "function" === typeof m || "function" === typeof g.getSnapshotBeforeUpdate;
    q || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== d || k !== l) && qh(b, g, d, l);
    $g = !1;
    var r = b.memoizedState;
    g.state = r;
    gh(b, d, g, e);
    k = b.memoizedState;
    h !== d || r !== k || Wf.current || $g ? ("function" === typeof m && (kh(b, c, m, d), k = b.memoizedState), (h = $g || oh(b, c, h, d, r, k, l)) ? (q || "function" !== typeof g.UNSAFE_componentWillMount && "function" !== typeof g.componentWillMount || ("function" === typeof g.componentWillMount && g.componentWillMount(), "function" === typeof g.UNSAFE_componentWillMount && g.UNSAFE_componentWillMount()), "function" === typeof g.componentDidMount && (b.flags |= 4194308)) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), b.memoizedProps = d, b.memoizedState = k), g.props = d, g.state = k, g.context = l, d = h) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), d = !1);
  } else {
    g = b.stateNode;
    bh(a, b);
    h = b.memoizedProps;
    l = b.type === b.elementType ? h : Lg(b.type, h);
    g.props = l;
    q = b.pendingProps;
    r = g.context;
    k = c.contextType;
    "object" === typeof k && null !== k ? k = Vg(k) : (k = Zf(c) ? Xf : H.current, k = Yf(b, k));
    var y = c.getDerivedStateFromProps;
    (m = "function" === typeof y || "function" === typeof g.getSnapshotBeforeUpdate) || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== q || r !== k) && qh(b, g, d, k);
    $g = !1;
    r = b.memoizedState;
    g.state = r;
    gh(b, d, g, e);
    var n = b.memoizedState;
    h !== q || r !== n || Wf.current || $g ? ("function" === typeof y && (kh(b, c, y, d), n = b.memoizedState), (l = $g || oh(b, c, l, d, r, n, k) || !1) ? (m || "function" !== typeof g.UNSAFE_componentWillUpdate && "function" !== typeof g.componentWillUpdate || ("function" === typeof g.componentWillUpdate && g.componentWillUpdate(d, n, k), "function" === typeof g.UNSAFE_componentWillUpdate && g.UNSAFE_componentWillUpdate(d, n, k)), "function" === typeof g.componentDidUpdate && (b.flags |= 4), "function" === typeof g.getSnapshotBeforeUpdate && (b.flags |= 1024)) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 1024), b.memoizedProps = d, b.memoizedState = n), g.props = d, g.state = n, g.context = k, d = l) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 1024), d = !1);
  }
  return kj(a, b, c, d, f, e);
}
function kj(a, b, c, d, e, f) {
  hj(a, b);
  var g = 0 !== (b.flags & 128);
  if (!d && !g) return e && dg(b, c, !1), $i(a, b, f);
  d = b.stateNode;
  Xi.current = b;
  var h = g && "function" !== typeof c.getDerivedStateFromError ? null : d.render();
  b.flags |= 1;
  null !== a && g ? (b.child = Bh(b, a.child, null, f), b.child = Bh(b, null, h, f)) : Yi(a, b, h, f);
  b.memoizedState = d.state;
  e && dg(b, c, !0);
  return b.child;
}
function lj(a) {
  var b = a.stateNode;
  b.pendingContext ? ag(a, b.pendingContext, b.pendingContext !== b.context) : b.context && ag(a, b.context, !1);
  Ih(a, b.containerInfo);
}
function mj(a, b, c, d, e) {
  Ig();
  Jg(e);
  b.flags |= 256;
  Yi(a, b, c, d);
  return b.child;
}
var nj = {
  dehydrated: null,
  treeContext: null,
  retryLane: 0
};
function oj(a) {
  return {
    baseLanes: a,
    cachePool: null,
    transitions: null
  };
}
function pj(a, b, c) {
  var d = b.pendingProps,
    e = M.current,
    f = !1,
    g = 0 !== (b.flags & 128),
    h;
  (h = g) || (h = null !== a && null === a.memoizedState ? !1 : 0 !== (e & 2));
  if (h) f = !0, b.flags &= -129;else if (null === a || null !== a.memoizedState) e |= 1;
  G(M, e & 1);
  if (null === a) {
    Eg(b);
    a = b.memoizedState;
    if (null !== a && (a = a.dehydrated, null !== a)) return 0 === (b.mode & 1) ? b.lanes = 1 : "$!" === a.data ? b.lanes = 8 : b.lanes = 1073741824, null;
    g = d.children;
    a = d.fallback;
    return f ? (d = b.mode, f = b.child, g = {
      mode: "hidden",
      children: g
    }, 0 === (d & 1) && null !== f ? (f.childLanes = 0, f.pendingProps = g) : f = qj(g, d, 0, null), a = Ah(a, d, c, null), f.return = b, a.return = b, f.sibling = a, b.child = f, b.child.memoizedState = oj(c), b.memoizedState = nj, a) : rj(b, g);
  }
  e = a.memoizedState;
  if (null !== e && (h = e.dehydrated, null !== h)) return sj(a, b, g, d, h, e, c);
  if (f) {
    f = d.fallback;
    g = b.mode;
    e = a.child;
    h = e.sibling;
    var k = {
      mode: "hidden",
      children: d.children
    };
    0 === (g & 1) && b.child !== e ? (d = b.child, d.childLanes = 0, d.pendingProps = k, b.deletions = null) : (d = wh(e, k), d.subtreeFlags = e.subtreeFlags & 14680064);
    null !== h ? f = wh(h, f) : (f = Ah(f, g, c, null), f.flags |= 2);
    f.return = b;
    d.return = b;
    d.sibling = f;
    b.child = d;
    d = f;
    f = b.child;
    g = a.child.memoizedState;
    g = null === g ? oj(c) : {
      baseLanes: g.baseLanes | c,
      cachePool: null,
      transitions: g.transitions
    };
    f.memoizedState = g;
    f.childLanes = a.childLanes & ~c;
    b.memoizedState = nj;
    return d;
  }
  f = a.child;
  a = f.sibling;
  d = wh(f, {
    mode: "visible",
    children: d.children
  });
  0 === (b.mode & 1) && (d.lanes = c);
  d.return = b;
  d.sibling = null;
  null !== a && (c = b.deletions, null === c ? (b.deletions = [a], b.flags |= 16) : c.push(a));
  b.child = d;
  b.memoizedState = null;
  return d;
}
function rj(a, b) {
  b = qj({
    mode: "visible",
    children: b
  }, a.mode, 0, null);
  b.return = a;
  return a.child = b;
}
function tj(a, b, c, d) {
  null !== d && Jg(d);
  Bh(b, a.child, null, c);
  a = rj(b, b.pendingProps.children);
  a.flags |= 2;
  b.memoizedState = null;
  return a;
}
function sj(a, b, c, d, e, f, g) {
  if (c) {
    if (b.flags & 256) return b.flags &= -257, d = Li(Error(p(422))), tj(a, b, g, d);
    if (null !== b.memoizedState) return b.child = a.child, b.flags |= 128, null;
    f = d.fallback;
    e = b.mode;
    d = qj({
      mode: "visible",
      children: d.children
    }, e, 0, null);
    f = Ah(f, e, g, null);
    f.flags |= 2;
    d.return = b;
    f.return = b;
    d.sibling = f;
    b.child = d;
    0 !== (b.mode & 1) && Bh(b, a.child, null, g);
    b.child.memoizedState = oj(g);
    b.memoizedState = nj;
    return f;
  }
  if (0 === (b.mode & 1)) return tj(a, b, g, null);
  if ("$!" === e.data) {
    d = e.nextSibling && e.nextSibling.dataset;
    if (d) var h = d.dgst;
    d = h;
    f = Error(p(419));
    d = Li(f, d, void 0);
    return tj(a, b, g, d);
  }
  h = 0 !== (g & a.childLanes);
  if (Ug || h) {
    d = R;
    if (null !== d) {
      switch (g & -g) {
        case 4:
          e = 2;
          break;
        case 16:
          e = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          e = 32;
          break;
        case 536870912:
          e = 268435456;
          break;
        default:
          e = 0;
      }
      e = 0 !== (e & (d.suspendedLanes | g)) ? 0 : e;
      0 !== e && e !== f.retryLane && (f.retryLane = e, Zg(a, e), mh(d, a, e, -1));
    }
    uj();
    d = Li(Error(p(421)));
    return tj(a, b, g, d);
  }
  if ("$?" === e.data) return b.flags |= 128, b.child = a.child, b = vj.bind(null, a), e._reactRetry = b, null;
  a = f.treeContext;
  yg = Lf(e.nextSibling);
  xg = b;
  I = !0;
  zg = null;
  null !== a && (og[pg++] = rg, og[pg++] = sg, og[pg++] = qg, rg = a.id, sg = a.overflow, qg = b);
  b = rj(b, d.children);
  b.flags |= 4096;
  return b;
}
function wj(a, b, c) {
  a.lanes |= b;
  var d = a.alternate;
  null !== d && (d.lanes |= b);
  Sg(a.return, b, c);
}
function xj(a, b, c, d, e) {
  var f = a.memoizedState;
  null === f ? a.memoizedState = {
    isBackwards: b,
    rendering: null,
    renderingStartTime: 0,
    last: d,
    tail: c,
    tailMode: e
  } : (f.isBackwards = b, f.rendering = null, f.renderingStartTime = 0, f.last = d, f.tail = c, f.tailMode = e);
}
function yj(a, b, c) {
  var d = b.pendingProps,
    e = d.revealOrder,
    f = d.tail;
  Yi(a, b, d.children, c);
  d = M.current;
  if (0 !== (d & 2)) d = d & 1 | 2, b.flags |= 128;else {
    if (null !== a && 0 !== (a.flags & 128)) a: for (a = b.child; null !== a;) {
      if (13 === a.tag) null !== a.memoizedState && wj(a, c, b);else if (19 === a.tag) wj(a, c, b);else if (null !== a.child) {
        a.child.return = a;
        a = a.child;
        continue;
      }
      if (a === b) break a;
      for (; null === a.sibling;) {
        if (null === a.return || a.return === b) break a;
        a = a.return;
      }
      a.sibling.return = a.return;
      a = a.sibling;
    }
    d &= 1;
  }
  G(M, d);
  if (0 === (b.mode & 1)) b.memoizedState = null;else switch (e) {
    case "forwards":
      c = b.child;
      for (e = null; null !== c;) a = c.alternate, null !== a && null === Mh(a) && (e = c), c = c.sibling;
      c = e;
      null === c ? (e = b.child, b.child = null) : (e = c.sibling, c.sibling = null);
      xj(b, !1, e, c, f);
      break;
    case "backwards":
      c = null;
      e = b.child;
      for (b.child = null; null !== e;) {
        a = e.alternate;
        if (null !== a && null === Mh(a)) {
          b.child = e;
          break;
        }
        a = e.sibling;
        e.sibling = c;
        c = e;
        e = a;
      }
      xj(b, !0, c, null, f);
      break;
    case "together":
      xj(b, !1, null, null, void 0);
      break;
    default:
      b.memoizedState = null;
  }
  return b.child;
}
function jj(a, b) {
  0 === (b.mode & 1) && null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2);
}
function $i(a, b, c) {
  null !== a && (b.dependencies = a.dependencies);
  hh |= b.lanes;
  if (0 === (c & b.childLanes)) return null;
  if (null !== a && b.child !== a.child) throw Error(p(153));
  if (null !== b.child) {
    a = b.child;
    c = wh(a, a.pendingProps);
    b.child = c;
    for (c.return = b; null !== a.sibling;) a = a.sibling, c = c.sibling = wh(a, a.pendingProps), c.return = b;
    c.sibling = null;
  }
  return b.child;
}
function zj(a, b, c) {
  switch (b.tag) {
    case 3:
      lj(b);
      Ig();
      break;
    case 5:
      Kh(b);
      break;
    case 1:
      Zf(b.type) && cg(b);
      break;
    case 4:
      Ih(b, b.stateNode.containerInfo);
      break;
    case 10:
      var d = b.type._context,
        e = b.memoizedProps.value;
      G(Mg, d._currentValue);
      d._currentValue = e;
      break;
    case 13:
      d = b.memoizedState;
      if (null !== d) {
        if (null !== d.dehydrated) return G(M, M.current & 1), b.flags |= 128, null;
        if (0 !== (c & b.child.childLanes)) return pj(a, b, c);
        G(M, M.current & 1);
        a = $i(a, b, c);
        return null !== a ? a.sibling : null;
      }
      G(M, M.current & 1);
      break;
    case 19:
      d = 0 !== (c & b.childLanes);
      if (0 !== (a.flags & 128)) {
        if (d) return yj(a, b, c);
        b.flags |= 128;
      }
      e = b.memoizedState;
      null !== e && (e.rendering = null, e.tail = null, e.lastEffect = null);
      G(M, M.current);
      if (d) break;else return null;
    case 22:
    case 23:
      return b.lanes = 0, ej(a, b, c);
  }
  return $i(a, b, c);
}
var Aj, Bj, Cj, Dj;
Aj = function Aj(a, b) {
  for (var c = b.child; null !== c;) {
    if (5 === c.tag || 6 === c.tag) a.appendChild(c.stateNode);else if (4 !== c.tag && null !== c.child) {
      c.child.return = c;
      c = c.child;
      continue;
    }
    if (c === b) break;
    for (; null === c.sibling;) {
      if (null === c.return || c.return === b) return;
      c = c.return;
    }
    c.sibling.return = c.return;
    c = c.sibling;
  }
};
Bj = function Bj() {};
Cj = function Cj(a, b, c, d) {
  var e = a.memoizedProps;
  if (e !== d) {
    a = b.stateNode;
    Hh(Eh.current);
    var f = null;
    switch (c) {
      case "input":
        e = Ya(a, e);
        d = Ya(a, d);
        f = [];
        break;
      case "select":
        e = A({}, e, {
          value: void 0
        });
        d = A({}, d, {
          value: void 0
        });
        f = [];
        break;
      case "textarea":
        e = gb(a, e);
        d = gb(a, d);
        f = [];
        break;
      default:
        "function" !== typeof e.onClick && "function" === typeof d.onClick && (a.onclick = Bf);
    }
    ub(c, d);
    var g;
    c = null;
    for (l in e) if (!d.hasOwnProperty(l) && e.hasOwnProperty(l) && null != e[l]) if ("style" === l) {
      var h = e[l];
      for (g in h) h.hasOwnProperty(g) && (c || (c = {}), c[g] = "");
    } else "dangerouslySetInnerHTML" !== l && "children" !== l && "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && "autoFocus" !== l && (ea.hasOwnProperty(l) ? f || (f = []) : (f = f || []).push(l, null));
    for (l in d) {
      var k = d[l];
      h = null != e ? e[l] : void 0;
      if (d.hasOwnProperty(l) && k !== h && (null != k || null != h)) if ("style" === l) {
        if (h) {
          for (g in h) !h.hasOwnProperty(g) || k && k.hasOwnProperty(g) || (c || (c = {}), c[g] = "");
          for (g in k) k.hasOwnProperty(g) && h[g] !== k[g] && (c || (c = {}), c[g] = k[g]);
        } else c || (f || (f = []), f.push(l, c)), c = k;
      } else "dangerouslySetInnerHTML" === l ? (k = k ? k.__html : void 0, h = h ? h.__html : void 0, null != k && h !== k && (f = f || []).push(l, k)) : "children" === l ? "string" !== typeof k && "number" !== typeof k || (f = f || []).push(l, "" + k) : "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && (ea.hasOwnProperty(l) ? (null != k && "onScroll" === l && D("scroll", a), f || h === k || (f = [])) : (f = f || []).push(l, k));
    }
    c && (f = f || []).push("style", c);
    var l = f;
    if (b.updateQueue = l) b.flags |= 4;
  }
};
Dj = function Dj(a, b, c, d) {
  c !== d && (b.flags |= 4);
};
function Ej(a, b) {
  if (!I) switch (a.tailMode) {
    case "hidden":
      b = a.tail;
      for (var c = null; null !== b;) null !== b.alternate && (c = b), b = b.sibling;
      null === c ? a.tail = null : c.sibling = null;
      break;
    case "collapsed":
      c = a.tail;
      for (var d = null; null !== c;) null !== c.alternate && (d = c), c = c.sibling;
      null === d ? b || null === a.tail ? a.tail = null : a.tail.sibling = null : d.sibling = null;
  }
}
function S(a) {
  var b = null !== a.alternate && a.alternate.child === a.child,
    c = 0,
    d = 0;
  if (b) for (var e = a.child; null !== e;) c |= e.lanes | e.childLanes, d |= e.subtreeFlags & 14680064, d |= e.flags & 14680064, e.return = a, e = e.sibling;else for (e = a.child; null !== e;) c |= e.lanes | e.childLanes, d |= e.subtreeFlags, d |= e.flags, e.return = a, e = e.sibling;
  a.subtreeFlags |= d;
  a.childLanes = c;
  return b;
}
function Fj(a, b, c) {
  var d = b.pendingProps;
  wg(b);
  switch (b.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return S(b), null;
    case 1:
      return Zf(b.type) && $f(), S(b), null;
    case 3:
      d = b.stateNode;
      Jh();
      E(Wf);
      E(H);
      Oh();
      d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null);
      if (null === a || null === a.child) Gg(b) ? b.flags |= 4 : null === a || a.memoizedState.isDehydrated && 0 === (b.flags & 256) || (b.flags |= 1024, null !== zg && (Gj(zg), zg = null));
      Bj(a, b);
      S(b);
      return null;
    case 5:
      Lh(b);
      var e = Hh(Gh.current);
      c = b.type;
      if (null !== a && null != b.stateNode) Cj(a, b, c, d, e), a.ref !== b.ref && (b.flags |= 512, b.flags |= 2097152);else {
        if (!d) {
          if (null === b.stateNode) throw Error(p(166));
          S(b);
          return null;
        }
        a = Hh(Eh.current);
        if (Gg(b)) {
          d = b.stateNode;
          c = b.type;
          var f = b.memoizedProps;
          d[Of] = b;
          d[Pf] = f;
          a = 0 !== (b.mode & 1);
          switch (c) {
            case "dialog":
              D("cancel", d);
              D("close", d);
              break;
            case "iframe":
            case "object":
            case "embed":
              D("load", d);
              break;
            case "video":
            case "audio":
              for (e = 0; e < lf.length; e++) D(lf[e], d);
              break;
            case "source":
              D("error", d);
              break;
            case "img":
            case "image":
            case "link":
              D("error", d);
              D("load", d);
              break;
            case "details":
              D("toggle", d);
              break;
            case "input":
              Za(d, f);
              D("invalid", d);
              break;
            case "select":
              d._wrapperState = {
                wasMultiple: !!f.multiple
              };
              D("invalid", d);
              break;
            case "textarea":
              hb(d, f), D("invalid", d);
          }
          ub(c, f);
          e = null;
          for (var g in f) if (f.hasOwnProperty(g)) {
            var h = f[g];
            "children" === g ? "string" === typeof h ? d.textContent !== h && (!0 !== f.suppressHydrationWarning && Af(d.textContent, h, a), e = ["children", h]) : "number" === typeof h && d.textContent !== "" + h && (!0 !== f.suppressHydrationWarning && Af(d.textContent, h, a), e = ["children", "" + h]) : ea.hasOwnProperty(g) && null != h && "onScroll" === g && D("scroll", d);
          }
          switch (c) {
            case "input":
              Va(d);
              db(d, f, !0);
              break;
            case "textarea":
              Va(d);
              jb(d);
              break;
            case "select":
            case "option":
              break;
            default:
              "function" === typeof f.onClick && (d.onclick = Bf);
          }
          d = e;
          b.updateQueue = d;
          null !== d && (b.flags |= 4);
        } else {
          g = 9 === e.nodeType ? e : e.ownerDocument;
          "http://www.w3.org/1999/xhtml" === a && (a = kb(c));
          "http://www.w3.org/1999/xhtml" === a ? "script" === c ? (a = g.createElement("div"), a.innerHTML = "<script>\x3c/script>", a = a.removeChild(a.firstChild)) : "string" === typeof d.is ? a = g.createElement(c, {
            is: d.is
          }) : (a = g.createElement(c), "select" === c && (g = a, d.multiple ? g.multiple = !0 : d.size && (g.size = d.size))) : a = g.createElementNS(a, c);
          a[Of] = b;
          a[Pf] = d;
          Aj(a, b, !1, !1);
          b.stateNode = a;
          a: {
            g = vb(c, d);
            switch (c) {
              case "dialog":
                D("cancel", a);
                D("close", a);
                e = d;
                break;
              case "iframe":
              case "object":
              case "embed":
                D("load", a);
                e = d;
                break;
              case "video":
              case "audio":
                for (e = 0; e < lf.length; e++) D(lf[e], a);
                e = d;
                break;
              case "source":
                D("error", a);
                e = d;
                break;
              case "img":
              case "image":
              case "link":
                D("error", a);
                D("load", a);
                e = d;
                break;
              case "details":
                D("toggle", a);
                e = d;
                break;
              case "input":
                Za(a, d);
                e = Ya(a, d);
                D("invalid", a);
                break;
              case "option":
                e = d;
                break;
              case "select":
                a._wrapperState = {
                  wasMultiple: !!d.multiple
                };
                e = A({}, d, {
                  value: void 0
                });
                D("invalid", a);
                break;
              case "textarea":
                hb(a, d);
                e = gb(a, d);
                D("invalid", a);
                break;
              default:
                e = d;
            }
            ub(c, e);
            h = e;
            for (f in h) if (h.hasOwnProperty(f)) {
              var k = h[f];
              "style" === f ? sb(a, k) : "dangerouslySetInnerHTML" === f ? (k = k ? k.__html : void 0, null != k && nb(a, k)) : "children" === f ? "string" === typeof k ? ("textarea" !== c || "" !== k) && ob(a, k) : "number" === typeof k && ob(a, "" + k) : "suppressContentEditableWarning" !== f && "suppressHydrationWarning" !== f && "autoFocus" !== f && (ea.hasOwnProperty(f) ? null != k && "onScroll" === f && D("scroll", a) : null != k && ta(a, f, k, g));
            }
            switch (c) {
              case "input":
                Va(a);
                db(a, d, !1);
                break;
              case "textarea":
                Va(a);
                jb(a);
                break;
              case "option":
                null != d.value && a.setAttribute("value", "" + Sa(d.value));
                break;
              case "select":
                a.multiple = !!d.multiple;
                f = d.value;
                null != f ? fb(a, !!d.multiple, f, !1) : null != d.defaultValue && fb(a, !!d.multiple, d.defaultValue, !0);
                break;
              default:
                "function" === typeof e.onClick && (a.onclick = Bf);
            }
            switch (c) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                d = !!d.autoFocus;
                break a;
              case "img":
                d = !0;
                break a;
              default:
                d = !1;
            }
          }
          d && (b.flags |= 4);
        }
        null !== b.ref && (b.flags |= 512, b.flags |= 2097152);
      }
      S(b);
      return null;
    case 6:
      if (a && null != b.stateNode) Dj(a, b, a.memoizedProps, d);else {
        if ("string" !== typeof d && null === b.stateNode) throw Error(p(166));
        c = Hh(Gh.current);
        Hh(Eh.current);
        if (Gg(b)) {
          d = b.stateNode;
          c = b.memoizedProps;
          d[Of] = b;
          if (f = d.nodeValue !== c) if (a = xg, null !== a) switch (a.tag) {
            case 3:
              Af(d.nodeValue, c, 0 !== (a.mode & 1));
              break;
            case 5:
              !0 !== a.memoizedProps.suppressHydrationWarning && Af(d.nodeValue, c, 0 !== (a.mode & 1));
          }
          f && (b.flags |= 4);
        } else d = (9 === c.nodeType ? c : c.ownerDocument).createTextNode(d), d[Of] = b, b.stateNode = d;
      }
      S(b);
      return null;
    case 13:
      E(M);
      d = b.memoizedState;
      if (null === a || null !== a.memoizedState && null !== a.memoizedState.dehydrated) {
        if (I && null !== yg && 0 !== (b.mode & 1) && 0 === (b.flags & 128)) Hg(), Ig(), b.flags |= 98560, f = !1;else if (f = Gg(b), null !== d && null !== d.dehydrated) {
          if (null === a) {
            if (!f) throw Error(p(318));
            f = b.memoizedState;
            f = null !== f ? f.dehydrated : null;
            if (!f) throw Error(p(317));
            f[Of] = b;
          } else Ig(), 0 === (b.flags & 128) && (b.memoizedState = null), b.flags |= 4;
          S(b);
          f = !1;
        } else null !== zg && (Gj(zg), zg = null), f = !0;
        if (!f) return b.flags & 65536 ? b : null;
      }
      if (0 !== (b.flags & 128)) return b.lanes = c, b;
      d = null !== d;
      d !== (null !== a && null !== a.memoizedState) && d && (b.child.flags |= 8192, 0 !== (b.mode & 1) && (null === a || 0 !== (M.current & 1) ? 0 === T && (T = 3) : uj()));
      null !== b.updateQueue && (b.flags |= 4);
      S(b);
      return null;
    case 4:
      return Jh(), Bj(a, b), null === a && sf(b.stateNode.containerInfo), S(b), null;
    case 10:
      return Rg(b.type._context), S(b), null;
    case 17:
      return Zf(b.type) && $f(), S(b), null;
    case 19:
      E(M);
      f = b.memoizedState;
      if (null === f) return S(b), null;
      d = 0 !== (b.flags & 128);
      g = f.rendering;
      if (null === g) {
        if (d) Ej(f, !1);else {
          if (0 !== T || null !== a && 0 !== (a.flags & 128)) for (a = b.child; null !== a;) {
            g = Mh(a);
            if (null !== g) {
              b.flags |= 128;
              Ej(f, !1);
              d = g.updateQueue;
              null !== d && (b.updateQueue = d, b.flags |= 4);
              b.subtreeFlags = 0;
              d = c;
              for (c = b.child; null !== c;) f = c, a = d, f.flags &= 14680066, g = f.alternate, null === g ? (f.childLanes = 0, f.lanes = a, f.child = null, f.subtreeFlags = 0, f.memoizedProps = null, f.memoizedState = null, f.updateQueue = null, f.dependencies = null, f.stateNode = null) : (f.childLanes = g.childLanes, f.lanes = g.lanes, f.child = g.child, f.subtreeFlags = 0, f.deletions = null, f.memoizedProps = g.memoizedProps, f.memoizedState = g.memoizedState, f.updateQueue = g.updateQueue, f.type = g.type, a = g.dependencies, f.dependencies = null === a ? null : {
                lanes: a.lanes,
                firstContext: a.firstContext
              }), c = c.sibling;
              G(M, M.current & 1 | 2);
              return b.child;
            }
            a = a.sibling;
          }
          null !== f.tail && B() > Hj && (b.flags |= 128, d = !0, Ej(f, !1), b.lanes = 4194304);
        }
      } else {
        if (!d) if (a = Mh(g), null !== a) {
          if (b.flags |= 128, d = !0, c = a.updateQueue, null !== c && (b.updateQueue = c, b.flags |= 4), Ej(f, !0), null === f.tail && "hidden" === f.tailMode && !g.alternate && !I) return S(b), null;
        } else 2 * B() - f.renderingStartTime > Hj && 1073741824 !== c && (b.flags |= 128, d = !0, Ej(f, !1), b.lanes = 4194304);
        f.isBackwards ? (g.sibling = b.child, b.child = g) : (c = f.last, null !== c ? c.sibling = g : b.child = g, f.last = g);
      }
      if (null !== f.tail) return b = f.tail, f.rendering = b, f.tail = b.sibling, f.renderingStartTime = B(), b.sibling = null, c = M.current, G(M, d ? c & 1 | 2 : c & 1), b;
      S(b);
      return null;
    case 22:
    case 23:
      return Ij(), d = null !== b.memoizedState, null !== a && null !== a.memoizedState !== d && (b.flags |= 8192), d && 0 !== (b.mode & 1) ? 0 !== (gj & 1073741824) && (S(b), b.subtreeFlags & 6 && (b.flags |= 8192)) : S(b), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(p(156, b.tag));
}
function Jj(a, b) {
  wg(b);
  switch (b.tag) {
    case 1:
      return Zf(b.type) && $f(), a = b.flags, a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
    case 3:
      return Jh(), E(Wf), E(H), Oh(), a = b.flags, 0 !== (a & 65536) && 0 === (a & 128) ? (b.flags = a & -65537 | 128, b) : null;
    case 5:
      return Lh(b), null;
    case 13:
      E(M);
      a = b.memoizedState;
      if (null !== a && null !== a.dehydrated) {
        if (null === b.alternate) throw Error(p(340));
        Ig();
      }
      a = b.flags;
      return a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
    case 19:
      return E(M), null;
    case 4:
      return Jh(), null;
    case 10:
      return Rg(b.type._context), null;
    case 22:
    case 23:
      return Ij(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Kj = !1,
  U = !1,
  Lj = "function" === typeof WeakSet ? WeakSet : Set,
  V = null;
function Mj(a, b) {
  var c = a.ref;
  if (null !== c) if ("function" === typeof c) try {
    c(null);
  } catch (d) {
    W(a, b, d);
  } else c.current = null;
}
function Nj(a, b, c) {
  try {
    c();
  } catch (d) {
    W(a, b, d);
  }
}
var Oj = !1;
function Pj(a, b) {
  Cf = dd;
  a = Me();
  if (Ne(a)) {
    if ("selectionStart" in a) var c = {
      start: a.selectionStart,
      end: a.selectionEnd
    };else a: {
      c = (c = a.ownerDocument) && c.defaultView || window;
      var d = c.getSelection && c.getSelection();
      if (d && 0 !== d.rangeCount) {
        c = d.anchorNode;
        var e = d.anchorOffset,
          f = d.focusNode;
        d = d.focusOffset;
        try {
          c.nodeType, f.nodeType;
        } catch (F) {
          c = null;
          break a;
        }
        var g = 0,
          h = -1,
          k = -1,
          l = 0,
          m = 0,
          q = a,
          r = null;
        b: for (;;) {
          for (var y;;) {
            q !== c || 0 !== e && 3 !== q.nodeType || (h = g + e);
            q !== f || 0 !== d && 3 !== q.nodeType || (k = g + d);
            3 === q.nodeType && (g += q.nodeValue.length);
            if (null === (y = q.firstChild)) break;
            r = q;
            q = y;
          }
          for (;;) {
            if (q === a) break b;
            r === c && ++l === e && (h = g);
            r === f && ++m === d && (k = g);
            if (null !== (y = q.nextSibling)) break;
            q = r;
            r = q.parentNode;
          }
          q = y;
        }
        c = -1 === h || -1 === k ? null : {
          start: h,
          end: k
        };
      } else c = null;
    }
    c = c || {
      start: 0,
      end: 0
    };
  } else c = null;
  Df = {
    focusedElem: a,
    selectionRange: c
  };
  dd = !1;
  for (V = b; null !== V;) if (b = V, a = b.child, 0 !== (b.subtreeFlags & 1028) && null !== a) a.return = b, V = a;else for (; null !== V;) {
    b = V;
    try {
      var n = b.alternate;
      if (0 !== (b.flags & 1024)) switch (b.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (null !== n) {
            var t = n.memoizedProps,
              J = n.memoizedState,
              x = b.stateNode,
              w = x.getSnapshotBeforeUpdate(b.elementType === b.type ? t : Lg(b.type, t), J);
            x.__reactInternalSnapshotBeforeUpdate = w;
          }
          break;
        case 3:
          var u = b.stateNode.containerInfo;
          1 === u.nodeType ? u.textContent = "" : 9 === u.nodeType && u.documentElement && u.removeChild(u.documentElement);
          break;
        case 5:
        case 6:
        case 4:
        case 17:
          break;
        default:
          throw Error(p(163));
      }
    } catch (F) {
      W(b, b.return, F);
    }
    a = b.sibling;
    if (null !== a) {
      a.return = b.return;
      V = a;
      break;
    }
    V = b.return;
  }
  n = Oj;
  Oj = !1;
  return n;
}
function Qj(a, b, c) {
  var d = b.updateQueue;
  d = null !== d ? d.lastEffect : null;
  if (null !== d) {
    var e = d = d.next;
    do {
      if ((e.tag & a) === a) {
        var f = e.destroy;
        e.destroy = void 0;
        void 0 !== f && Nj(b, c, f);
      }
      e = e.next;
    } while (e !== d);
  }
}
function Rj(a, b) {
  b = b.updateQueue;
  b = null !== b ? b.lastEffect : null;
  if (null !== b) {
    var c = b = b.next;
    do {
      if ((c.tag & a) === a) {
        var d = c.create;
        c.destroy = d();
      }
      c = c.next;
    } while (c !== b);
  }
}
function Sj(a) {
  var b = a.ref;
  if (null !== b) {
    var c = a.stateNode;
    switch (a.tag) {
      case 5:
        a = c;
        break;
      default:
        a = c;
    }
    "function" === typeof b ? b(a) : b.current = a;
  }
}
function Tj(a) {
  var b = a.alternate;
  null !== b && (a.alternate = null, Tj(b));
  a.child = null;
  a.deletions = null;
  a.sibling = null;
  5 === a.tag && (b = a.stateNode, null !== b && (delete b[Of], delete b[Pf], delete b[of], delete b[Qf], delete b[Rf]));
  a.stateNode = null;
  a.return = null;
  a.dependencies = null;
  a.memoizedProps = null;
  a.memoizedState = null;
  a.pendingProps = null;
  a.stateNode = null;
  a.updateQueue = null;
}
function Uj(a) {
  return 5 === a.tag || 3 === a.tag || 4 === a.tag;
}
function Vj(a) {
  a: for (;;) {
    for (; null === a.sibling;) {
      if (null === a.return || Uj(a.return)) return null;
      a = a.return;
    }
    a.sibling.return = a.return;
    for (a = a.sibling; 5 !== a.tag && 6 !== a.tag && 18 !== a.tag;) {
      if (a.flags & 2) continue a;
      if (null === a.child || 4 === a.tag) continue a;else a.child.return = a, a = a.child;
    }
    if (!(a.flags & 2)) return a.stateNode;
  }
}
function Wj(a, b, c) {
  var d = a.tag;
  if (5 === d || 6 === d) a = a.stateNode, b ? 8 === c.nodeType ? c.parentNode.insertBefore(a, b) : c.insertBefore(a, b) : (8 === c.nodeType ? (b = c.parentNode, b.insertBefore(a, c)) : (b = c, b.appendChild(a)), c = c._reactRootContainer, null !== c && void 0 !== c || null !== b.onclick || (b.onclick = Bf));else if (4 !== d && (a = a.child, null !== a)) for (Wj(a, b, c), a = a.sibling; null !== a;) Wj(a, b, c), a = a.sibling;
}
function Xj(a, b, c) {
  var d = a.tag;
  if (5 === d || 6 === d) a = a.stateNode, b ? c.insertBefore(a, b) : c.appendChild(a);else if (4 !== d && (a = a.child, null !== a)) for (Xj(a, b, c), a = a.sibling; null !== a;) Xj(a, b, c), a = a.sibling;
}
var X = null,
  Yj = !1;
function Zj(a, b, c) {
  for (c = c.child; null !== c;) ak(a, b, c), c = c.sibling;
}
function ak(a, b, c) {
  if (lc && "function" === typeof lc.onCommitFiberUnmount) try {
    lc.onCommitFiberUnmount(kc, c);
  } catch (h) {}
  switch (c.tag) {
    case 5:
      U || Mj(c, b);
    case 6:
      var d = X,
        e = Yj;
      X = null;
      Zj(a, b, c);
      X = d;
      Yj = e;
      null !== X && (Yj ? (a = X, c = c.stateNode, 8 === a.nodeType ? a.parentNode.removeChild(c) : a.removeChild(c)) : X.removeChild(c.stateNode));
      break;
    case 18:
      null !== X && (Yj ? (a = X, c = c.stateNode, 8 === a.nodeType ? Kf(a.parentNode, c) : 1 === a.nodeType && Kf(a, c), bd(a)) : Kf(X, c.stateNode));
      break;
    case 4:
      d = X;
      e = Yj;
      X = c.stateNode.containerInfo;
      Yj = !0;
      Zj(a, b, c);
      X = d;
      Yj = e;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!U && (d = c.updateQueue, null !== d && (d = d.lastEffect, null !== d))) {
        e = d = d.next;
        do {
          var f = e,
            g = f.destroy;
          f = f.tag;
          void 0 !== g && (0 !== (f & 2) ? Nj(c, b, g) : 0 !== (f & 4) && Nj(c, b, g));
          e = e.next;
        } while (e !== d);
      }
      Zj(a, b, c);
      break;
    case 1:
      if (!U && (Mj(c, b), d = c.stateNode, "function" === typeof d.componentWillUnmount)) try {
        d.props = c.memoizedProps, d.state = c.memoizedState, d.componentWillUnmount();
      } catch (h) {
        W(c, b, h);
      }
      Zj(a, b, c);
      break;
    case 21:
      Zj(a, b, c);
      break;
    case 22:
      c.mode & 1 ? (U = (d = U) || null !== c.memoizedState, Zj(a, b, c), U = d) : Zj(a, b, c);
      break;
    default:
      Zj(a, b, c);
  }
}
function bk(a) {
  var b = a.updateQueue;
  if (null !== b) {
    a.updateQueue = null;
    var c = a.stateNode;
    null === c && (c = a.stateNode = new Lj());
    b.forEach(function (b) {
      var d = ck.bind(null, a, b);
      c.has(b) || (c.add(b), b.then(d, d));
    });
  }
}
function dk(a, b) {
  var c = b.deletions;
  if (null !== c) for (var d = 0; d < c.length; d++) {
    var e = c[d];
    try {
      var f = a,
        g = b,
        h = g;
      a: for (; null !== h;) {
        switch (h.tag) {
          case 5:
            X = h.stateNode;
            Yj = !1;
            break a;
          case 3:
            X = h.stateNode.containerInfo;
            Yj = !0;
            break a;
          case 4:
            X = h.stateNode.containerInfo;
            Yj = !0;
            break a;
        }
        h = h.return;
      }
      if (null === X) throw Error(p(160));
      ak(f, g, e);
      X = null;
      Yj = !1;
      var k = e.alternate;
      null !== k && (k.return = null);
      e.return = null;
    } catch (l) {
      W(e, b, l);
    }
  }
  if (b.subtreeFlags & 12854) for (b = b.child; null !== b;) ek(b, a), b = b.sibling;
}
function ek(a, b) {
  var c = a.alternate,
    d = a.flags;
  switch (a.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      dk(b, a);
      fk(a);
      if (d & 4) {
        try {
          Qj(3, a, a.return), Rj(3, a);
        } catch (t) {
          W(a, a.return, t);
        }
        try {
          Qj(5, a, a.return);
        } catch (t) {
          W(a, a.return, t);
        }
      }
      break;
    case 1:
      dk(b, a);
      fk(a);
      d & 512 && null !== c && Mj(c, c.return);
      break;
    case 5:
      dk(b, a);
      fk(a);
      d & 512 && null !== c && Mj(c, c.return);
      if (a.flags & 32) {
        var e = a.stateNode;
        try {
          ob(e, "");
        } catch (t) {
          W(a, a.return, t);
        }
      }
      if (d & 4 && (e = a.stateNode, null != e)) {
        var f = a.memoizedProps,
          g = null !== c ? c.memoizedProps : f,
          h = a.type,
          k = a.updateQueue;
        a.updateQueue = null;
        if (null !== k) try {
          "input" === h && "radio" === f.type && null != f.name && ab(e, f);
          vb(h, g);
          var l = vb(h, f);
          for (g = 0; g < k.length; g += 2) {
            var m = k[g],
              q = k[g + 1];
            "style" === m ? sb(e, q) : "dangerouslySetInnerHTML" === m ? nb(e, q) : "children" === m ? ob(e, q) : ta(e, m, q, l);
          }
          switch (h) {
            case "input":
              bb(e, f);
              break;
            case "textarea":
              ib(e, f);
              break;
            case "select":
              var r = e._wrapperState.wasMultiple;
              e._wrapperState.wasMultiple = !!f.multiple;
              var y = f.value;
              null != y ? fb(e, !!f.multiple, y, !1) : r !== !!f.multiple && (null != f.defaultValue ? fb(e, !!f.multiple, f.defaultValue, !0) : fb(e, !!f.multiple, f.multiple ? [] : "", !1));
          }
          e[Pf] = f;
        } catch (t) {
          W(a, a.return, t);
        }
      }
      break;
    case 6:
      dk(b, a);
      fk(a);
      if (d & 4) {
        if (null === a.stateNode) throw Error(p(162));
        e = a.stateNode;
        f = a.memoizedProps;
        try {
          e.nodeValue = f;
        } catch (t) {
          W(a, a.return, t);
        }
      }
      break;
    case 3:
      dk(b, a);
      fk(a);
      if (d & 4 && null !== c && c.memoizedState.isDehydrated) try {
        bd(b.containerInfo);
      } catch (t) {
        W(a, a.return, t);
      }
      break;
    case 4:
      dk(b, a);
      fk(a);
      break;
    case 13:
      dk(b, a);
      fk(a);
      e = a.child;
      e.flags & 8192 && (f = null !== e.memoizedState, e.stateNode.isHidden = f, !f || null !== e.alternate && null !== e.alternate.memoizedState || (gk = B()));
      d & 4 && bk(a);
      break;
    case 22:
      m = null !== c && null !== c.memoizedState;
      a.mode & 1 ? (U = (l = U) || m, dk(b, a), U = l) : dk(b, a);
      fk(a);
      if (d & 8192) {
        l = null !== a.memoizedState;
        if ((a.stateNode.isHidden = l) && !m && 0 !== (a.mode & 1)) for (V = a, m = a.child; null !== m;) {
          for (q = V = m; null !== V;) {
            r = V;
            y = r.child;
            switch (r.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Qj(4, r, r.return);
                break;
              case 1:
                Mj(r, r.return);
                var n = r.stateNode;
                if ("function" === typeof n.componentWillUnmount) {
                  d = r;
                  c = r.return;
                  try {
                    b = d, n.props = b.memoizedProps, n.state = b.memoizedState, n.componentWillUnmount();
                  } catch (t) {
                    W(d, c, t);
                  }
                }
                break;
              case 5:
                Mj(r, r.return);
                break;
              case 22:
                if (null !== r.memoizedState) {
                  hk(q);
                  continue;
                }
            }
            null !== y ? (y.return = r, V = y) : hk(q);
          }
          m = m.sibling;
        }
        a: for (m = null, q = a;;) {
          if (5 === q.tag) {
            if (null === m) {
              m = q;
              try {
                e = q.stateNode, l ? (f = e.style, "function" === typeof f.setProperty ? f.setProperty("display", "none", "important") : f.display = "none") : (h = q.stateNode, k = q.memoizedProps.style, g = void 0 !== k && null !== k && k.hasOwnProperty("display") ? k.display : null, h.style.display = rb("display", g));
              } catch (t) {
                W(a, a.return, t);
              }
            }
          } else if (6 === q.tag) {
            if (null === m) try {
              q.stateNode.nodeValue = l ? "" : q.memoizedProps;
            } catch (t) {
              W(a, a.return, t);
            }
          } else if ((22 !== q.tag && 23 !== q.tag || null === q.memoizedState || q === a) && null !== q.child) {
            q.child.return = q;
            q = q.child;
            continue;
          }
          if (q === a) break a;
          for (; null === q.sibling;) {
            if (null === q.return || q.return === a) break a;
            m === q && (m = null);
            q = q.return;
          }
          m === q && (m = null);
          q.sibling.return = q.return;
          q = q.sibling;
        }
      }
      break;
    case 19:
      dk(b, a);
      fk(a);
      d & 4 && bk(a);
      break;
    case 21:
      break;
    default:
      dk(b, a), fk(a);
  }
}
function fk(a) {
  var b = a.flags;
  if (b & 2) {
    try {
      a: {
        for (var c = a.return; null !== c;) {
          if (Uj(c)) {
            var d = c;
            break a;
          }
          c = c.return;
        }
        throw Error(p(160));
      }
      switch (d.tag) {
        case 5:
          var e = d.stateNode;
          d.flags & 32 && (ob(e, ""), d.flags &= -33);
          var f = Vj(a);
          Xj(a, f, e);
          break;
        case 3:
        case 4:
          var g = d.stateNode.containerInfo,
            h = Vj(a);
          Wj(a, h, g);
          break;
        default:
          throw Error(p(161));
      }
    } catch (k) {
      W(a, a.return, k);
    }
    a.flags &= -3;
  }
  b & 4096 && (a.flags &= -4097);
}
function ik(a, b, c) {
  V = a;
  jk(a);
}
function jk(a, b, c) {
  for (var d = 0 !== (a.mode & 1); null !== V;) {
    var e = V,
      f = e.child;
    if (22 === e.tag && d) {
      var g = null !== e.memoizedState || Kj;
      if (!g) {
        var h = e.alternate,
          k = null !== h && null !== h.memoizedState || U;
        h = Kj;
        var l = U;
        Kj = g;
        if ((U = k) && !l) for (V = e; null !== V;) g = V, k = g.child, 22 === g.tag && null !== g.memoizedState ? kk(e) : null !== k ? (k.return = g, V = k) : kk(e);
        for (; null !== f;) V = f, jk(f), f = f.sibling;
        V = e;
        Kj = h;
        U = l;
      }
      lk(a);
    } else 0 !== (e.subtreeFlags & 8772) && null !== f ? (f.return = e, V = f) : lk(a);
  }
}
function lk(a) {
  for (; null !== V;) {
    var b = V;
    if (0 !== (b.flags & 8772)) {
      var c = b.alternate;
      try {
        if (0 !== (b.flags & 8772)) switch (b.tag) {
          case 0:
          case 11:
          case 15:
            U || Rj(5, b);
            break;
          case 1:
            var d = b.stateNode;
            if (b.flags & 4 && !U) if (null === c) d.componentDidMount();else {
              var e = b.elementType === b.type ? c.memoizedProps : Lg(b.type, c.memoizedProps);
              d.componentDidUpdate(e, c.memoizedState, d.__reactInternalSnapshotBeforeUpdate);
            }
            var f = b.updateQueue;
            null !== f && ih(b, f, d);
            break;
          case 3:
            var g = b.updateQueue;
            if (null !== g) {
              c = null;
              if (null !== b.child) switch (b.child.tag) {
                case 5:
                  c = b.child.stateNode;
                  break;
                case 1:
                  c = b.child.stateNode;
              }
              ih(b, g, c);
            }
            break;
          case 5:
            var h = b.stateNode;
            if (null === c && b.flags & 4) {
              c = h;
              var k = b.memoizedProps;
              switch (b.type) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  k.autoFocus && c.focus();
                  break;
                case "img":
                  k.src && (c.src = k.src);
              }
            }
            break;
          case 6:
            break;
          case 4:
            break;
          case 12:
            break;
          case 13:
            if (null === b.memoizedState) {
              var l = b.alternate;
              if (null !== l) {
                var m = l.memoizedState;
                if (null !== m) {
                  var q = m.dehydrated;
                  null !== q && bd(q);
                }
              }
            }
            break;
          case 19:
          case 17:
          case 21:
          case 22:
          case 23:
          case 25:
            break;
          default:
            throw Error(p(163));
        }
        U || b.flags & 512 && Sj(b);
      } catch (r) {
        W(b, b.return, r);
      }
    }
    if (b === a) {
      V = null;
      break;
    }
    c = b.sibling;
    if (null !== c) {
      c.return = b.return;
      V = c;
      break;
    }
    V = b.return;
  }
}
function hk(a) {
  for (; null !== V;) {
    var b = V;
    if (b === a) {
      V = null;
      break;
    }
    var c = b.sibling;
    if (null !== c) {
      c.return = b.return;
      V = c;
      break;
    }
    V = b.return;
  }
}
function kk(a) {
  for (; null !== V;) {
    var b = V;
    try {
      switch (b.tag) {
        case 0:
        case 11:
        case 15:
          var c = b.return;
          try {
            Rj(4, b);
          } catch (k) {
            W(b, c, k);
          }
          break;
        case 1:
          var d = b.stateNode;
          if ("function" === typeof d.componentDidMount) {
            var e = b.return;
            try {
              d.componentDidMount();
            } catch (k) {
              W(b, e, k);
            }
          }
          var f = b.return;
          try {
            Sj(b);
          } catch (k) {
            W(b, f, k);
          }
          break;
        case 5:
          var g = b.return;
          try {
            Sj(b);
          } catch (k) {
            W(b, g, k);
          }
      }
    } catch (k) {
      W(b, b.return, k);
    }
    if (b === a) {
      V = null;
      break;
    }
    var h = b.sibling;
    if (null !== h) {
      h.return = b.return;
      V = h;
      break;
    }
    V = b.return;
  }
}
var mk = Math.ceil,
  nk = ua.ReactCurrentDispatcher,
  ok = ua.ReactCurrentOwner,
  pk = ua.ReactCurrentBatchConfig,
  K = 0,
  R = null,
  Y = null,
  Z = 0,
  gj = 0,
  fj = Uf(0),
  T = 0,
  qk = null,
  hh = 0,
  rk = 0,
  sk = 0,
  tk = null,
  uk = null,
  gk = 0,
  Hj = Infinity,
  vk = null,
  Pi = !1,
  Qi = null,
  Si = null,
  wk = !1,
  xk = null,
  yk = 0,
  zk = 0,
  Ak = null,
  Bk = -1,
  Ck = 0;
function L() {
  return 0 !== (K & 6) ? B() : -1 !== Bk ? Bk : Bk = B();
}
function lh(a) {
  if (0 === (a.mode & 1)) return 1;
  if (0 !== (K & 2) && 0 !== Z) return Z & -Z;
  if (null !== Kg.transition) return 0 === Ck && (Ck = yc()), Ck;
  a = C;
  if (0 !== a) return a;
  a = window.event;
  a = void 0 === a ? 16 : jd(a.type);
  return a;
}
function mh(a, b, c, d) {
  if (50 < zk) throw zk = 0, Ak = null, Error(p(185));
  Ac(a, c, d);
  if (0 === (K & 2) || a !== R) a === R && (0 === (K & 2) && (rk |= c), 4 === T && Dk(a, Z)), Ek(a, d), 1 === c && 0 === K && 0 === (b.mode & 1) && (Hj = B() + 500, fg && jg());
}
function Ek(a, b) {
  var c = a.callbackNode;
  wc(a, b);
  var d = uc(a, a === R ? Z : 0);
  if (0 === d) null !== c && bc(c), a.callbackNode = null, a.callbackPriority = 0;else if (b = d & -d, a.callbackPriority !== b) {
    null != c && bc(c);
    if (1 === b) 0 === a.tag ? ig(Fk.bind(null, a)) : hg(Fk.bind(null, a)), Jf(function () {
      0 === (K & 6) && jg();
    }), c = null;else {
      switch (Dc(d)) {
        case 1:
          c = fc;
          break;
        case 4:
          c = gc;
          break;
        case 16:
          c = hc;
          break;
        case 536870912:
          c = jc;
          break;
        default:
          c = hc;
      }
      c = Gk(c, Hk.bind(null, a));
    }
    a.callbackPriority = b;
    a.callbackNode = c;
  }
}
function Hk(a, b) {
  Bk = -1;
  Ck = 0;
  if (0 !== (K & 6)) throw Error(p(327));
  var c = a.callbackNode;
  if (Ik() && a.callbackNode !== c) return null;
  var d = uc(a, a === R ? Z : 0);
  if (0 === d) return null;
  if (0 !== (d & 30) || 0 !== (d & a.expiredLanes) || b) b = Jk(a, d);else {
    b = d;
    var e = K;
    K |= 2;
    var f = Kk();
    if (R !== a || Z !== b) vk = null, Hj = B() + 500, Lk(a, b);
    do try {
      Mk();
      break;
    } catch (h) {
      Nk(a, h);
    } while (1);
    Qg();
    nk.current = f;
    K = e;
    null !== Y ? b = 0 : (R = null, Z = 0, b = T);
  }
  if (0 !== b) {
    2 === b && (e = xc(a), 0 !== e && (d = e, b = Ok(a, e)));
    if (1 === b) throw c = qk, Lk(a, 0), Dk(a, d), Ek(a, B()), c;
    if (6 === b) Dk(a, d);else {
      e = a.current.alternate;
      if (0 === (d & 30) && !Pk(e) && (b = Jk(a, d), 2 === b && (f = xc(a), 0 !== f && (d = f, b = Ok(a, f))), 1 === b)) throw c = qk, Lk(a, 0), Dk(a, d), Ek(a, B()), c;
      a.finishedWork = e;
      a.finishedLanes = d;
      switch (b) {
        case 0:
        case 1:
          throw Error(p(345));
        case 2:
          Qk(a, uk, vk);
          break;
        case 3:
          Dk(a, d);
          if ((d & 130023424) === d && (b = gk + 500 - B(), 10 < b)) {
            if (0 !== uc(a, 0)) break;
            e = a.suspendedLanes;
            if ((e & d) !== d) {
              L();
              a.pingedLanes |= a.suspendedLanes & e;
              break;
            }
            a.timeoutHandle = Ff(Qk.bind(null, a, uk, vk), b);
            break;
          }
          Qk(a, uk, vk);
          break;
        case 4:
          Dk(a, d);
          if ((d & 4194240) === d) break;
          b = a.eventTimes;
          for (e = -1; 0 < d;) {
            var g = 31 - oc(d);
            f = 1 << g;
            g = b[g];
            g > e && (e = g);
            d &= ~f;
          }
          d = e;
          d = B() - d;
          d = (120 > d ? 120 : 480 > d ? 480 : 1080 > d ? 1080 : 1920 > d ? 1920 : 3E3 > d ? 3E3 : 4320 > d ? 4320 : 1960 * mk(d / 1960)) - d;
          if (10 < d) {
            a.timeoutHandle = Ff(Qk.bind(null, a, uk, vk), d);
            break;
          }
          Qk(a, uk, vk);
          break;
        case 5:
          Qk(a, uk, vk);
          break;
        default:
          throw Error(p(329));
      }
    }
  }
  Ek(a, B());
  return a.callbackNode === c ? Hk.bind(null, a) : null;
}
function Ok(a, b) {
  var c = tk;
  a.current.memoizedState.isDehydrated && (Lk(a, b).flags |= 256);
  a = Jk(a, b);
  2 !== a && (b = uk, uk = c, null !== b && Gj(b));
  return a;
}
function Gj(a) {
  null === uk ? uk = a : uk.push.apply(uk, a);
}
function Pk(a) {
  for (var b = a;;) {
    if (b.flags & 16384) {
      var c = b.updateQueue;
      if (null !== c && (c = c.stores, null !== c)) for (var d = 0; d < c.length; d++) {
        var e = c[d],
          f = e.getSnapshot;
        e = e.value;
        try {
          if (!He(f(), e)) return !1;
        } catch (g) {
          return !1;
        }
      }
    }
    c = b.child;
    if (b.subtreeFlags & 16384 && null !== c) c.return = b, b = c;else {
      if (b === a) break;
      for (; null === b.sibling;) {
        if (null === b.return || b.return === a) return !0;
        b = b.return;
      }
      b.sibling.return = b.return;
      b = b.sibling;
    }
  }
  return !0;
}
function Dk(a, b) {
  b &= ~sk;
  b &= ~rk;
  a.suspendedLanes |= b;
  a.pingedLanes &= ~b;
  for (a = a.expirationTimes; 0 < b;) {
    var c = 31 - oc(b),
      d = 1 << c;
    a[c] = -1;
    b &= ~d;
  }
}
function Fk(a) {
  if (0 !== (K & 6)) throw Error(p(327));
  Ik();
  var b = uc(a, 0);
  if (0 === (b & 1)) return Ek(a, B()), null;
  var c = Jk(a, b);
  if (0 !== a.tag && 2 === c) {
    var d = xc(a);
    0 !== d && (b = d, c = Ok(a, d));
  }
  if (1 === c) throw c = qk, Lk(a, 0), Dk(a, b), Ek(a, B()), c;
  if (6 === c) throw Error(p(345));
  a.finishedWork = a.current.alternate;
  a.finishedLanes = b;
  Qk(a, uk, vk);
  Ek(a, B());
  return null;
}
function Rk(a, b) {
  var c = K;
  K |= 1;
  try {
    return a(b);
  } finally {
    K = c, 0 === K && (Hj = B() + 500, fg && jg());
  }
}
function Sk(a) {
  null !== xk && 0 === xk.tag && 0 === (K & 6) && Ik();
  var b = K;
  K |= 1;
  var c = pk.transition,
    d = C;
  try {
    if (pk.transition = null, C = 1, a) return a();
  } finally {
    C = d, pk.transition = c, K = b, 0 === (K & 6) && jg();
  }
}
function Ij() {
  gj = fj.current;
  E(fj);
}
function Lk(a, b) {
  a.finishedWork = null;
  a.finishedLanes = 0;
  var c = a.timeoutHandle;
  -1 !== c && (a.timeoutHandle = -1, Gf(c));
  if (null !== Y) for (c = Y.return; null !== c;) {
    var d = c;
    wg(d);
    switch (d.tag) {
      case 1:
        d = d.type.childContextTypes;
        null !== d && void 0 !== d && $f();
        break;
      case 3:
        Jh();
        E(Wf);
        E(H);
        Oh();
        break;
      case 5:
        Lh(d);
        break;
      case 4:
        Jh();
        break;
      case 13:
        E(M);
        break;
      case 19:
        E(M);
        break;
      case 10:
        Rg(d.type._context);
        break;
      case 22:
      case 23:
        Ij();
    }
    c = c.return;
  }
  R = a;
  Y = a = wh(a.current, null);
  Z = gj = b;
  T = 0;
  qk = null;
  sk = rk = hh = 0;
  uk = tk = null;
  if (null !== Wg) {
    for (b = 0; b < Wg.length; b++) if (c = Wg[b], d = c.interleaved, null !== d) {
      c.interleaved = null;
      var e = d.next,
        f = c.pending;
      if (null !== f) {
        var g = f.next;
        f.next = e;
        d.next = g;
      }
      c.pending = d;
    }
    Wg = null;
  }
  return a;
}
function Nk(a, b) {
  do {
    var c = Y;
    try {
      Qg();
      Ph.current = ai;
      if (Sh) {
        for (var d = N.memoizedState; null !== d;) {
          var e = d.queue;
          null !== e && (e.pending = null);
          d = d.next;
        }
        Sh = !1;
      }
      Rh = 0;
      P = O = N = null;
      Th = !1;
      Uh = 0;
      ok.current = null;
      if (null === c || null === c.return) {
        T = 1;
        qk = b;
        Y = null;
        break;
      }
      a: {
        var f = a,
          g = c.return,
          h = c,
          k = b;
        b = Z;
        h.flags |= 32768;
        if (null !== k && "object" === typeof k && "function" === typeof k.then) {
          var l = k,
            m = h,
            q = m.tag;
          if (0 === (m.mode & 1) && (0 === q || 11 === q || 15 === q)) {
            var r = m.alternate;
            r ? (m.updateQueue = r.updateQueue, m.memoizedState = r.memoizedState, m.lanes = r.lanes) : (m.updateQueue = null, m.memoizedState = null);
          }
          var y = Vi(g);
          if (null !== y) {
            y.flags &= -257;
            Wi(y, g, h, f, b);
            y.mode & 1 && Ti(f, l, b);
            b = y;
            k = l;
            var n = b.updateQueue;
            if (null === n) {
              var t = new Set();
              t.add(k);
              b.updateQueue = t;
            } else n.add(k);
            break a;
          } else {
            if (0 === (b & 1)) {
              Ti(f, l, b);
              uj();
              break a;
            }
            k = Error(p(426));
          }
        } else if (I && h.mode & 1) {
          var J = Vi(g);
          if (null !== J) {
            0 === (J.flags & 65536) && (J.flags |= 256);
            Wi(J, g, h, f, b);
            Jg(Ki(k, h));
            break a;
          }
        }
        f = k = Ki(k, h);
        4 !== T && (T = 2);
        null === tk ? tk = [f] : tk.push(f);
        f = g;
        do {
          switch (f.tag) {
            case 3:
              f.flags |= 65536;
              b &= -b;
              f.lanes |= b;
              var x = Oi(f, k, b);
              fh(f, x);
              break a;
            case 1:
              h = k;
              var w = f.type,
                u = f.stateNode;
              if (0 === (f.flags & 128) && ("function" === typeof w.getDerivedStateFromError || null !== u && "function" === typeof u.componentDidCatch && (null === Si || !Si.has(u)))) {
                f.flags |= 65536;
                b &= -b;
                f.lanes |= b;
                var F = Ri(f, h, b);
                fh(f, F);
                break a;
              }
          }
          f = f.return;
        } while (null !== f);
      }
      Tk(c);
    } catch (na) {
      b = na;
      Y === c && null !== c && (Y = c = c.return);
      continue;
    }
    break;
  } while (1);
}
function Kk() {
  var a = nk.current;
  nk.current = ai;
  return null === a ? ai : a;
}
function uj() {
  if (0 === T || 3 === T || 2 === T) T = 4;
  null === R || 0 === (hh & 268435455) && 0 === (rk & 268435455) || Dk(R, Z);
}
function Jk(a, b) {
  var c = K;
  K |= 2;
  var d = Kk();
  if (R !== a || Z !== b) vk = null, Lk(a, b);
  do try {
    Uk();
    break;
  } catch (e) {
    Nk(a, e);
  } while (1);
  Qg();
  K = c;
  nk.current = d;
  if (null !== Y) throw Error(p(261));
  R = null;
  Z = 0;
  return T;
}
function Uk() {
  for (; null !== Y;) Vk(Y);
}
function Mk() {
  for (; null !== Y && !cc();) Vk(Y);
}
function Vk(a) {
  var b = Wk(a.alternate, a, gj);
  a.memoizedProps = a.pendingProps;
  null === b ? Tk(a) : Y = b;
  ok.current = null;
}
function Tk(a) {
  var b = a;
  do {
    var c = b.alternate;
    a = b.return;
    if (0 === (b.flags & 32768)) {
      if (c = Fj(c, b, gj), null !== c) {
        Y = c;
        return;
      }
    } else {
      c = Jj(c, b);
      if (null !== c) {
        c.flags &= 32767;
        Y = c;
        return;
      }
      if (null !== a) a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null;else {
        T = 6;
        Y = null;
        return;
      }
    }
    b = b.sibling;
    if (null !== b) {
      Y = b;
      return;
    }
    Y = b = a;
  } while (null !== b);
  0 === T && (T = 5);
}
function Qk(a, b, c) {
  var d = C,
    e = pk.transition;
  try {
    pk.transition = null, C = 1, Xk(a, b, c, d);
  } finally {
    pk.transition = e, C = d;
  }
  return null;
}
function Xk(a, b, c, d) {
  do Ik(); while (null !== xk);
  if (0 !== (K & 6)) throw Error(p(327));
  c = a.finishedWork;
  var e = a.finishedLanes;
  if (null === c) return null;
  a.finishedWork = null;
  a.finishedLanes = 0;
  if (c === a.current) throw Error(p(177));
  a.callbackNode = null;
  a.callbackPriority = 0;
  var f = c.lanes | c.childLanes;
  Bc(a, f);
  a === R && (Y = R = null, Z = 0);
  0 === (c.subtreeFlags & 2064) && 0 === (c.flags & 2064) || wk || (wk = !0, Gk(hc, function () {
    Ik();
    return null;
  }));
  f = 0 !== (c.flags & 15990);
  if (0 !== (c.subtreeFlags & 15990) || f) {
    f = pk.transition;
    pk.transition = null;
    var g = C;
    C = 1;
    var h = K;
    K |= 4;
    ok.current = null;
    Pj(a, c);
    ek(c, a);
    Oe(Df);
    dd = !!Cf;
    Df = Cf = null;
    a.current = c;
    ik(c);
    dc();
    K = h;
    C = g;
    pk.transition = f;
  } else a.current = c;
  wk && (wk = !1, xk = a, yk = e);
  f = a.pendingLanes;
  0 === f && (Si = null);
  mc(c.stateNode);
  Ek(a, B());
  if (null !== b) for (d = a.onRecoverableError, c = 0; c < b.length; c++) e = b[c], d(e.value, {
    componentStack: e.stack,
    digest: e.digest
  });
  if (Pi) throw Pi = !1, a = Qi, Qi = null, a;
  0 !== (yk & 1) && 0 !== a.tag && Ik();
  f = a.pendingLanes;
  0 !== (f & 1) ? a === Ak ? zk++ : (zk = 0, Ak = a) : zk = 0;
  jg();
  return null;
}
function Ik() {
  if (null !== xk) {
    var a = Dc(yk),
      b = pk.transition,
      c = C;
    try {
      pk.transition = null;
      C = 16 > a ? 16 : a;
      if (null === xk) var d = !1;else {
        a = xk;
        xk = null;
        yk = 0;
        if (0 !== (K & 6)) throw Error(p(331));
        var e = K;
        K |= 4;
        for (V = a.current; null !== V;) {
          var f = V,
            g = f.child;
          if (0 !== (V.flags & 16)) {
            var h = f.deletions;
            if (null !== h) {
              for (var k = 0; k < h.length; k++) {
                var l = h[k];
                for (V = l; null !== V;) {
                  var m = V;
                  switch (m.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Qj(8, m, f);
                  }
                  var q = m.child;
                  if (null !== q) q.return = m, V = q;else for (; null !== V;) {
                    m = V;
                    var r = m.sibling,
                      y = m.return;
                    Tj(m);
                    if (m === l) {
                      V = null;
                      break;
                    }
                    if (null !== r) {
                      r.return = y;
                      V = r;
                      break;
                    }
                    V = y;
                  }
                }
              }
              var n = f.alternate;
              if (null !== n) {
                var t = n.child;
                if (null !== t) {
                  n.child = null;
                  do {
                    var J = t.sibling;
                    t.sibling = null;
                    t = J;
                  } while (null !== t);
                }
              }
              V = f;
            }
          }
          if (0 !== (f.subtreeFlags & 2064) && null !== g) g.return = f, V = g;else b: for (; null !== V;) {
            f = V;
            if (0 !== (f.flags & 2048)) switch (f.tag) {
              case 0:
              case 11:
              case 15:
                Qj(9, f, f.return);
            }
            var x = f.sibling;
            if (null !== x) {
              x.return = f.return;
              V = x;
              break b;
            }
            V = f.return;
          }
        }
        var w = a.current;
        for (V = w; null !== V;) {
          g = V;
          var u = g.child;
          if (0 !== (g.subtreeFlags & 2064) && null !== u) u.return = g, V = u;else b: for (g = w; null !== V;) {
            h = V;
            if (0 !== (h.flags & 2048)) try {
              switch (h.tag) {
                case 0:
                case 11:
                case 15:
                  Rj(9, h);
              }
            } catch (na) {
              W(h, h.return, na);
            }
            if (h === g) {
              V = null;
              break b;
            }
            var F = h.sibling;
            if (null !== F) {
              F.return = h.return;
              V = F;
              break b;
            }
            V = h.return;
          }
        }
        K = e;
        jg();
        if (lc && "function" === typeof lc.onPostCommitFiberRoot) try {
          lc.onPostCommitFiberRoot(kc, a);
        } catch (na) {}
        d = !0;
      }
      return d;
    } finally {
      C = c, pk.transition = b;
    }
  }
  return !1;
}
function Yk(a, b, c) {
  b = Ki(c, b);
  b = Oi(a, b, 1);
  a = dh(a, b, 1);
  b = L();
  null !== a && (Ac(a, 1, b), Ek(a, b));
}
function W(a, b, c) {
  if (3 === a.tag) Yk(a, a, c);else for (; null !== b;) {
    if (3 === b.tag) {
      Yk(b, a, c);
      break;
    } else if (1 === b.tag) {
      var d = b.stateNode;
      if ("function" === typeof b.type.getDerivedStateFromError || "function" === typeof d.componentDidCatch && (null === Si || !Si.has(d))) {
        a = Ki(c, a);
        a = Ri(b, a, 1);
        b = dh(b, a, 1);
        a = L();
        null !== b && (Ac(b, 1, a), Ek(b, a));
        break;
      }
    }
    b = b.return;
  }
}
function Ui(a, b, c) {
  var d = a.pingCache;
  null !== d && d.delete(b);
  b = L();
  a.pingedLanes |= a.suspendedLanes & c;
  R === a && (Z & c) === c && (4 === T || 3 === T && (Z & 130023424) === Z && 500 > B() - gk ? Lk(a, 0) : sk |= c);
  Ek(a, b);
}
function Zk(a, b) {
  0 === b && (0 === (a.mode & 1) ? b = 1 : (b = sc, sc <<= 1, 0 === (sc & 130023424) && (sc = 4194304)));
  var c = L();
  a = Zg(a, b);
  null !== a && (Ac(a, b, c), Ek(a, c));
}
function vj(a) {
  var b = a.memoizedState,
    c = 0;
  null !== b && (c = b.retryLane);
  Zk(a, c);
}
function ck(a, b) {
  var c = 0;
  switch (a.tag) {
    case 13:
      var d = a.stateNode;
      var e = a.memoizedState;
      null !== e && (c = e.retryLane);
      break;
    case 19:
      d = a.stateNode;
      break;
    default:
      throw Error(p(314));
  }
  null !== d && d.delete(b);
  Zk(a, c);
}
var Wk;
Wk = function Wk(a, b, c) {
  if (null !== a) {
    if (a.memoizedProps !== b.pendingProps || Wf.current) Ug = !0;else {
      if (0 === (a.lanes & c) && 0 === (b.flags & 128)) return Ug = !1, zj(a, b, c);
      Ug = 0 !== (a.flags & 131072) ? !0 : !1;
    }
  } else Ug = !1, I && 0 !== (b.flags & 1048576) && ug(b, ng, b.index);
  b.lanes = 0;
  switch (b.tag) {
    case 2:
      var d = b.type;
      jj(a, b);
      a = b.pendingProps;
      var e = Yf(b, H.current);
      Tg(b, c);
      e = Xh(null, b, d, a, e, c);
      var f = bi();
      b.flags |= 1;
      "object" === typeof e && null !== e && "function" === typeof e.render && void 0 === e.$$typeof ? (b.tag = 1, b.memoizedState = null, b.updateQueue = null, Zf(d) ? (f = !0, cg(b)) : f = !1, b.memoizedState = null !== e.state && void 0 !== e.state ? e.state : null, ah(b), e.updater = nh, b.stateNode = e, e._reactInternals = b, rh(b, d, a, c), b = kj(null, b, d, !0, f, c)) : (b.tag = 0, I && f && vg(b), Yi(null, b, e, c), b = b.child);
      return b;
    case 16:
      d = b.elementType;
      a: {
        jj(a, b);
        a = b.pendingProps;
        e = d._init;
        d = e(d._payload);
        b.type = d;
        e = b.tag = $k(d);
        a = Lg(d, a);
        switch (e) {
          case 0:
            b = dj(null, b, d, a, c);
            break a;
          case 1:
            b = ij(null, b, d, a, c);
            break a;
          case 11:
            b = Zi(null, b, d, a, c);
            break a;
          case 14:
            b = aj(null, b, d, Lg(d.type, a), c);
            break a;
        }
        throw Error(p(306, d, ""));
      }
      return b;
    case 0:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Lg(d, e), dj(a, b, d, e, c);
    case 1:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Lg(d, e), ij(a, b, d, e, c);
    case 3:
      a: {
        lj(b);
        if (null === a) throw Error(p(387));
        d = b.pendingProps;
        f = b.memoizedState;
        e = f.element;
        bh(a, b);
        gh(b, d, null, c);
        var g = b.memoizedState;
        d = g.element;
        if (f.isDehydrated) {
          if (f = {
            element: d,
            isDehydrated: !1,
            cache: g.cache,
            pendingSuspenseBoundaries: g.pendingSuspenseBoundaries,
            transitions: g.transitions
          }, b.updateQueue.baseState = f, b.memoizedState = f, b.flags & 256) {
            e = Ki(Error(p(423)), b);
            b = mj(a, b, d, c, e);
            break a;
          } else if (d !== e) {
            e = Ki(Error(p(424)), b);
            b = mj(a, b, d, c, e);
            break a;
          } else for (yg = Lf(b.stateNode.containerInfo.firstChild), xg = b, I = !0, zg = null, c = Ch(b, null, d, c), b.child = c; c;) c.flags = c.flags & -3 | 4096, c = c.sibling;
        } else {
          Ig();
          if (d === e) {
            b = $i(a, b, c);
            break a;
          }
          Yi(a, b, d, c);
        }
        b = b.child;
      }
      return b;
    case 5:
      return Kh(b), null === a && Eg(b), d = b.type, e = b.pendingProps, f = null !== a ? a.memoizedProps : null, g = e.children, Ef(d, e) ? g = null : null !== f && Ef(d, f) && (b.flags |= 32), hj(a, b), Yi(a, b, g, c), b.child;
    case 6:
      return null === a && Eg(b), null;
    case 13:
      return pj(a, b, c);
    case 4:
      return Ih(b, b.stateNode.containerInfo), d = b.pendingProps, null === a ? b.child = Bh(b, null, d, c) : Yi(a, b, d, c), b.child;
    case 11:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Lg(d, e), Zi(a, b, d, e, c);
    case 7:
      return Yi(a, b, b.pendingProps, c), b.child;
    case 8:
      return Yi(a, b, b.pendingProps.children, c), b.child;
    case 12:
      return Yi(a, b, b.pendingProps.children, c), b.child;
    case 10:
      a: {
        d = b.type._context;
        e = b.pendingProps;
        f = b.memoizedProps;
        g = e.value;
        G(Mg, d._currentValue);
        d._currentValue = g;
        if (null !== f) if (He(f.value, g)) {
          if (f.children === e.children && !Wf.current) {
            b = $i(a, b, c);
            break a;
          }
        } else for (f = b.child, null !== f && (f.return = b); null !== f;) {
          var h = f.dependencies;
          if (null !== h) {
            g = f.child;
            for (var k = h.firstContext; null !== k;) {
              if (k.context === d) {
                if (1 === f.tag) {
                  k = ch(-1, c & -c);
                  k.tag = 2;
                  var l = f.updateQueue;
                  if (null !== l) {
                    l = l.shared;
                    var m = l.pending;
                    null === m ? k.next = k : (k.next = m.next, m.next = k);
                    l.pending = k;
                  }
                }
                f.lanes |= c;
                k = f.alternate;
                null !== k && (k.lanes |= c);
                Sg(f.return, c, b);
                h.lanes |= c;
                break;
              }
              k = k.next;
            }
          } else if (10 === f.tag) g = f.type === b.type ? null : f.child;else if (18 === f.tag) {
            g = f.return;
            if (null === g) throw Error(p(341));
            g.lanes |= c;
            h = g.alternate;
            null !== h && (h.lanes |= c);
            Sg(g, c, b);
            g = f.sibling;
          } else g = f.child;
          if (null !== g) g.return = f;else for (g = f; null !== g;) {
            if (g === b) {
              g = null;
              break;
            }
            f = g.sibling;
            if (null !== f) {
              f.return = g.return;
              g = f;
              break;
            }
            g = g.return;
          }
          f = g;
        }
        Yi(a, b, e.children, c);
        b = b.child;
      }
      return b;
    case 9:
      return e = b.type, d = b.pendingProps.children, Tg(b, c), e = Vg(e), d = d(e), b.flags |= 1, Yi(a, b, d, c), b.child;
    case 14:
      return d = b.type, e = Lg(d, b.pendingProps), e = Lg(d.type, e), aj(a, b, d, e, c);
    case 15:
      return cj(a, b, b.type, b.pendingProps, c);
    case 17:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Lg(d, e), jj(a, b), b.tag = 1, Zf(d) ? (a = !0, cg(b)) : a = !1, Tg(b, c), ph(b, d, e), rh(b, d, e, c), kj(null, b, d, !0, a, c);
    case 19:
      return yj(a, b, c);
    case 22:
      return ej(a, b, c);
  }
  throw Error(p(156, b.tag));
};
function Gk(a, b) {
  return ac(a, b);
}
function al(a, b, c, d) {
  this.tag = a;
  this.key = c;
  this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
  this.index = 0;
  this.ref = null;
  this.pendingProps = b;
  this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
  this.mode = d;
  this.subtreeFlags = this.flags = 0;
  this.deletions = null;
  this.childLanes = this.lanes = 0;
  this.alternate = null;
}
function Bg(a, b, c, d) {
  return new al(a, b, c, d);
}
function bj(a) {
  a = a.prototype;
  return !(!a || !a.isReactComponent);
}
function $k(a) {
  if ("function" === typeof a) return bj(a) ? 1 : 0;
  if (void 0 !== a && null !== a) {
    a = a.$$typeof;
    if (a === Da) return 11;
    if (a === Ga) return 14;
  }
  return 2;
}
function wh(a, b) {
  var c = a.alternate;
  null === c ? (c = Bg(a.tag, b, a.key, a.mode), c.elementType = a.elementType, c.type = a.type, c.stateNode = a.stateNode, c.alternate = a, a.alternate = c) : (c.pendingProps = b, c.type = a.type, c.flags = 0, c.subtreeFlags = 0, c.deletions = null);
  c.flags = a.flags & 14680064;
  c.childLanes = a.childLanes;
  c.lanes = a.lanes;
  c.child = a.child;
  c.memoizedProps = a.memoizedProps;
  c.memoizedState = a.memoizedState;
  c.updateQueue = a.updateQueue;
  b = a.dependencies;
  c.dependencies = null === b ? null : {
    lanes: b.lanes,
    firstContext: b.firstContext
  };
  c.sibling = a.sibling;
  c.index = a.index;
  c.ref = a.ref;
  return c;
}
function yh(a, b, c, d, e, f) {
  var g = 2;
  d = a;
  if ("function" === typeof a) bj(a) && (g = 1);else if ("string" === typeof a) g = 5;else a: switch (a) {
    case ya:
      return Ah(c.children, e, f, b);
    case za:
      g = 8;
      e |= 8;
      break;
    case Aa:
      return a = Bg(12, c, b, e | 2), a.elementType = Aa, a.lanes = f, a;
    case Ea:
      return a = Bg(13, c, b, e), a.elementType = Ea, a.lanes = f, a;
    case Fa:
      return a = Bg(19, c, b, e), a.elementType = Fa, a.lanes = f, a;
    case Ia:
      return qj(c, e, f, b);
    default:
      if ("object" === typeof a && null !== a) switch (a.$$typeof) {
        case Ba:
          g = 10;
          break a;
        case Ca:
          g = 9;
          break a;
        case Da:
          g = 11;
          break a;
        case Ga:
          g = 14;
          break a;
        case Ha:
          g = 16;
          d = null;
          break a;
      }
      throw Error(p(130, null == a ? a : typeof a, ""));
  }
  b = Bg(g, c, b, e);
  b.elementType = a;
  b.type = d;
  b.lanes = f;
  return b;
}
function Ah(a, b, c, d) {
  a = Bg(7, a, d, b);
  a.lanes = c;
  return a;
}
function qj(a, b, c, d) {
  a = Bg(22, a, d, b);
  a.elementType = Ia;
  a.lanes = c;
  a.stateNode = {
    isHidden: !1
  };
  return a;
}
function xh(a, b, c) {
  a = Bg(6, a, null, b);
  a.lanes = c;
  return a;
}
function zh(a, b, c) {
  b = Bg(4, null !== a.children ? a.children : [], a.key, b);
  b.lanes = c;
  b.stateNode = {
    containerInfo: a.containerInfo,
    pendingChildren: null,
    implementation: a.implementation
  };
  return b;
}
function bl(a, b, c, d, e) {
  this.tag = b;
  this.containerInfo = a;
  this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
  this.timeoutHandle = -1;
  this.callbackNode = this.pendingContext = this.context = null;
  this.callbackPriority = 0;
  this.eventTimes = zc(0);
  this.expirationTimes = zc(-1);
  this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
  this.entanglements = zc(0);
  this.identifierPrefix = d;
  this.onRecoverableError = e;
  this.mutableSourceEagerHydrationData = null;
}
function cl(a, b, c, d, e, f, g, h, k) {
  a = new bl(a, b, c, h, k);
  1 === b ? (b = 1, !0 === f && (b |= 8)) : b = 0;
  f = Bg(3, null, null, b);
  a.current = f;
  f.stateNode = a;
  f.memoizedState = {
    element: d,
    isDehydrated: c,
    cache: null,
    transitions: null,
    pendingSuspenseBoundaries: null
  };
  ah(f);
  return a;
}
function dl(a, b, c) {
  var d = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
  return {
    $$typeof: wa,
    key: null == d ? null : "" + d,
    children: a,
    containerInfo: b,
    implementation: c
  };
}
function el(a) {
  if (!a) return Vf;
  a = a._reactInternals;
  a: {
    if (Vb(a) !== a || 1 !== a.tag) throw Error(p(170));
    var b = a;
    do {
      switch (b.tag) {
        case 3:
          b = b.stateNode.context;
          break a;
        case 1:
          if (Zf(b.type)) {
            b = b.stateNode.__reactInternalMemoizedMergedChildContext;
            break a;
          }
      }
      b = b.return;
    } while (null !== b);
    throw Error(p(171));
  }
  if (1 === a.tag) {
    var c = a.type;
    if (Zf(c)) return bg(a, c, b);
  }
  return b;
}
function fl(a, b, c, d, e, f, g, h, k) {
  a = cl(c, d, !0, a, e, f, g, h, k);
  a.context = el(null);
  c = a.current;
  d = L();
  e = lh(c);
  f = ch(d, e);
  f.callback = void 0 !== b && null !== b ? b : null;
  dh(c, f, e);
  a.current.lanes = e;
  Ac(a, e, d);
  Ek(a, d);
  return a;
}
function gl(a, b, c, d) {
  var e = b.current,
    f = L(),
    g = lh(e);
  c = el(c);
  null === b.context ? b.context = c : b.pendingContext = c;
  b = ch(f, g);
  b.payload = {
    element: a
  };
  d = void 0 === d ? null : d;
  null !== d && (b.callback = d);
  a = dh(e, b, g);
  null !== a && (mh(a, e, g, f), eh(a, e, g));
  return g;
}
function hl(a) {
  a = a.current;
  if (!a.child) return null;
  switch (a.child.tag) {
    case 5:
      return a.child.stateNode;
    default:
      return a.child.stateNode;
  }
}
function il(a, b) {
  a = a.memoizedState;
  if (null !== a && null !== a.dehydrated) {
    var c = a.retryLane;
    a.retryLane = 0 !== c && c < b ? c : b;
  }
}
function jl(a, b) {
  il(a, b);
  (a = a.alternate) && il(a, b);
}
function kl() {
  return null;
}
var ll = "function" === typeof reportError ? reportError : function (a) {
  console.error(a);
};
function ml(a) {
  this._internalRoot = a;
}
nl.prototype.render = ml.prototype.render = function (a) {
  var b = this._internalRoot;
  if (null === b) throw Error(p(409));
  gl(a, b, null, null);
};
nl.prototype.unmount = ml.prototype.unmount = function () {
  var a = this._internalRoot;
  if (null !== a) {
    this._internalRoot = null;
    var b = a.containerInfo;
    Sk(function () {
      gl(null, a, null, null);
    });
    b[uf] = null;
  }
};
function nl(a) {
  this._internalRoot = a;
}
nl.prototype.unstable_scheduleHydration = function (a) {
  if (a) {
    var b = Hc();
    a = {
      blockedOn: null,
      target: a,
      priority: b
    };
    for (var c = 0; c < Qc.length && 0 !== b && b < Qc[c].priority; c++);
    Qc.splice(c, 0, a);
    0 === c && Vc(a);
  }
};
function ol(a) {
  return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType);
}
function pl(a) {
  return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType && (8 !== a.nodeType || " react-mount-point-unstable " !== a.nodeValue));
}
function ql() {}
function rl(a, b, c, d, e) {
  if (e) {
    if ("function" === typeof d) {
      var f = d;
      d = function d() {
        var a = hl(g);
        f.call(a);
      };
    }
    var g = fl(b, d, a, 0, null, !1, !1, "", ql);
    a._reactRootContainer = g;
    a[uf] = g.current;
    sf(8 === a.nodeType ? a.parentNode : a);
    Sk();
    return g;
  }
  for (; e = a.lastChild;) a.removeChild(e);
  if ("function" === typeof d) {
    var h = d;
    d = function d() {
      var a = hl(k);
      h.call(a);
    };
  }
  var k = cl(a, 0, !1, null, null, !1, !1, "", ql);
  a._reactRootContainer = k;
  a[uf] = k.current;
  sf(8 === a.nodeType ? a.parentNode : a);
  Sk(function () {
    gl(b, k, c, d);
  });
  return k;
}
function sl(a, b, c, d, e) {
  var f = c._reactRootContainer;
  if (f) {
    var g = f;
    if ("function" === typeof e) {
      var h = e;
      e = function e() {
        var a = hl(g);
        h.call(a);
      };
    }
    gl(b, g, a, e);
  } else g = rl(c, b, a, e, d);
  return hl(g);
}
Ec = function Ec(a) {
  switch (a.tag) {
    case 3:
      var b = a.stateNode;
      if (b.current.memoizedState.isDehydrated) {
        var c = tc(b.pendingLanes);
        0 !== c && (Cc(b, c | 1), Ek(b, B()), 0 === (K & 6) && (Hj = B() + 500, jg()));
      }
      break;
    case 13:
      Sk(function () {
        var b = Zg(a, 1);
        if (null !== b) {
          var c = L();
          mh(b, a, 1, c);
        }
      }), jl(a, 1);
  }
};
Fc = function Fc(a) {
  if (13 === a.tag) {
    var b = Zg(a, 134217728);
    if (null !== b) {
      var c = L();
      mh(b, a, 134217728, c);
    }
    jl(a, 134217728);
  }
};
Gc = function Gc(a) {
  if (13 === a.tag) {
    var b = lh(a),
      c = Zg(a, b);
    if (null !== c) {
      var d = L();
      mh(c, a, b, d);
    }
    jl(a, b);
  }
};
Hc = function Hc() {
  return C;
};
Ic = function Ic(a, b) {
  var c = C;
  try {
    return C = a, b();
  } finally {
    C = c;
  }
};
yb = function yb(a, b, c) {
  switch (b) {
    case "input":
      bb(a, c);
      b = c.name;
      if ("radio" === c.type && null != b) {
        for (c = a; c.parentNode;) c = c.parentNode;
        c = c.querySelectorAll("input[name=" + JSON.stringify("" + b) + '][type="radio"]');
        for (b = 0; b < c.length; b++) {
          var d = c[b];
          if (d !== a && d.form === a.form) {
            var e = Db(d);
            if (!e) throw Error(p(90));
            Wa(d);
            bb(d, e);
          }
        }
      }
      break;
    case "textarea":
      ib(a, c);
      break;
    case "select":
      b = c.value, null != b && fb(a, !!c.multiple, b, !1);
  }
};
Gb = Rk;
Hb = Sk;
var tl = {
    usingClientEntryPoint: !1,
    Events: [Cb, ue, Db, Eb, Fb, Rk]
  },
  ul = {
    findFiberByHostInstance: Wc,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom"
  };
var vl = {
  bundleType: ul.bundleType,
  version: ul.version,
  rendererPackageName: ul.rendererPackageName,
  rendererConfig: ul.rendererConfig,
  overrideHookState: null,
  overrideHookStateDeletePath: null,
  overrideHookStateRenamePath: null,
  overrideProps: null,
  overridePropsDeletePath: null,
  overridePropsRenamePath: null,
  setErrorHandler: null,
  setSuspenseHandler: null,
  scheduleUpdate: null,
  currentDispatcherRef: ua.ReactCurrentDispatcher,
  findHostInstanceByFiber: function findHostInstanceByFiber(a) {
    a = Zb(a);
    return null === a ? null : a.stateNode;
  },
  findFiberByHostInstance: ul.findFiberByHostInstance || kl,
  findHostInstancesForRefresh: null,
  scheduleRefresh: null,
  scheduleRoot: null,
  setRefreshHandler: null,
  getCurrentFiber: null,
  reconcilerVersion: "18.2.0-next-9e3b772b8-20220608"
};
if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
  var wl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!wl.isDisabled && wl.supportsFiber) try {
    kc = wl.inject(vl), lc = wl;
  } catch (a) {}
}
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tl;
exports.createPortal = function (a, b) {
  var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
  if (!ol(b)) throw Error(p(200));
  return dl(a, b, null, c);
};
exports.createRoot = function (a, b) {
  if (!ol(a)) throw Error(p(299));
  var c = !1,
    d = "",
    e = ll;
  null !== b && void 0 !== b && (!0 === b.unstable_strictMode && (c = !0), void 0 !== b.identifierPrefix && (d = b.identifierPrefix), void 0 !== b.onRecoverableError && (e = b.onRecoverableError));
  b = cl(a, 1, !1, null, null, c, !1, d, e);
  a[uf] = b.current;
  sf(8 === a.nodeType ? a.parentNode : a);
  return new ml(b);
};
exports.findDOMNode = function (a) {
  if (null == a) return null;
  if (1 === a.nodeType) return a;
  var b = a._reactInternals;
  if (void 0 === b) {
    if ("function" === typeof a.render) throw Error(p(188));
    a = Object.keys(a).join(",");
    throw Error(p(268, a));
  }
  a = Zb(b);
  a = null === a ? null : a.stateNode;
  return a;
};
exports.flushSync = function (a) {
  return Sk(a);
};
exports.hydrate = function (a, b, c) {
  if (!pl(b)) throw Error(p(200));
  return sl(null, a, b, !0, c);
};
exports.hydrateRoot = function (a, b, c) {
  if (!ol(a)) throw Error(p(405));
  var d = null != c && c.hydratedSources || null,
    e = !1,
    f = "",
    g = ll;
  null !== c && void 0 !== c && (!0 === c.unstable_strictMode && (e = !0), void 0 !== c.identifierPrefix && (f = c.identifierPrefix), void 0 !== c.onRecoverableError && (g = c.onRecoverableError));
  b = fl(b, null, a, 1, null != c ? c : null, e, !1, f, g);
  a[uf] = b.current;
  sf(a);
  if (d) for (a = 0; a < d.length; a++) c = d[a], e = c._getVersion, e = e(c._source), null == b.mutableSourceEagerHydrationData ? b.mutableSourceEagerHydrationData = [c, e] : b.mutableSourceEagerHydrationData.push(c, e);
  return new nl(b);
};
exports.render = function (a, b, c) {
  if (!pl(b)) throw Error(p(200));
  return sl(null, a, b, !1, c);
};
exports.unmountComponentAtNode = function (a) {
  if (!pl(a)) throw Error(p(40));
  return a._reactRootContainer ? (Sk(function () {
    sl(null, null, a, !1, function () {
      a._reactRootContainer = null;
      a[uf] = null;
    });
  }), !0) : !1;
};
exports.unstable_batchedUpdates = Rk;
exports.unstable_renderSubtreeIntoContainer = function (a, b, c, d) {
  if (!pl(c)) throw Error(p(200));
  if (null == a || void 0 === a._reactInternals) throw Error(p(38));
  return sl(a, b, c, !1, d);
};
exports.version = "18.2.0-next-9e3b772b8-20220608";

/***/ }),

/***/ "./node_modules/react-dom/client.js":
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var m = __webpack_require__("./node_modules/react-dom/index.js");
{
  exports.createRoot = m.createRoot;
  exports.hydrateRoot = m.hydrateRoot;
}

/***/ }),

/***/ "./node_modules/react-dom/index.js":
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


function checkDCE() {
  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function') {
    return;
  }
  try {
    // Verify that the code above has been dead code eliminated (DCE'd).
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    // DevTools shouldn't crash React, no matter what.
    // We should still report in case we break this code.
    console.error(err);
  }
}
{
  // DCE check should happen before ReactDOM bundle executes so that
  // DevTools can report bad minification during injection.
  checkDCE();
  module.exports = __webpack_require__("./node_modules/react-dom/cjs/react-dom.production.min.js");
}

/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.production.min.js":
/***/ (function(__unused_webpack_module, exports) {
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


var b = Symbol.for("react.element"),
  c = Symbol.for("react.portal"),
  d = Symbol.for("react.fragment"),
  e = Symbol.for("react.strict_mode"),
  f = Symbol.for("react.profiler"),
  g = Symbol.for("react.provider"),
  h = Symbol.for("react.context"),
  k = Symbol.for("react.server_context"),
  l = Symbol.for("react.forward_ref"),
  m = Symbol.for("react.suspense"),
  n = Symbol.for("react.suspense_list"),
  p = Symbol.for("react.memo"),
  q = Symbol.for("react.lazy"),
  t = Symbol.for("react.offscreen"),
  u;
u = Symbol.for("react.module.reference");
function v(a) {
  if ("object" === typeof a && null !== a) {
    var r = a.$$typeof;
    switch (r) {
      case b:
        switch (a = a.type, a) {
          case d:
          case f:
          case e:
          case m:
          case n:
            return a;
          default:
            switch (a = a && a.$$typeof, a) {
              case k:
              case h:
              case l:
              case q:
              case p:
              case g:
                return a;
              default:
                return r;
            }
        }
      case c:
        return r;
    }
  }
}
exports.ContextConsumer = h;
exports.ContextProvider = g;
exports.Element = b;
exports.ForwardRef = l;
exports.Fragment = d;
exports.Lazy = q;
exports.Memo = p;
exports.Portal = c;
exports.Profiler = f;
exports.StrictMode = e;
exports.Suspense = m;
exports.SuspenseList = n;
exports.isAsyncMode = function () {
  return !1;
};
exports.isConcurrentMode = function () {
  return !1;
};
exports.isContextConsumer = function (a) {
  return v(a) === h;
};
exports.isContextProvider = function (a) {
  return v(a) === g;
};
exports.isElement = function (a) {
  return "object" === typeof a && null !== a && a.$$typeof === b;
};
exports.isForwardRef = function (a) {
  return v(a) === l;
};
exports.isFragment = function (a) {
  return v(a) === d;
};
exports.isLazy = function (a) {
  return v(a) === q;
};
exports.isMemo = function (a) {
  return v(a) === p;
};
exports.isPortal = function (a) {
  return v(a) === c;
};
exports.isProfiler = function (a) {
  return v(a) === f;
};
exports.isStrictMode = function (a) {
  return v(a) === e;
};
exports.isSuspense = function (a) {
  return v(a) === m;
};
exports.isSuspenseList = function (a) {
  return v(a) === n;
};
exports.isValidElementType = function (a) {
  return "string" === typeof a || "function" === typeof a || a === d || a === f || a === e || a === m || a === n || a === t || "object" === typeof a && null !== a && (a.$$typeof === q || a.$$typeof === p || a.$$typeof === g || a.$$typeof === h || a.$$typeof === l || a.$$typeof === u || void 0 !== a.getModuleId) ? !0 : !1;
};
exports.typeOf = v;

/***/ }),

/***/ "./node_modules/react-is/index.js":
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


{
  module.exports = __webpack_require__("./node_modules/react-is/cjs/react-is.production.min.js");
}

/***/ }),

/***/ "./node_modules/react-router-dom/dist/index.js":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AbortedDeferredError": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_4__.AbortedDeferredError; },
/* harmony export */   "Await": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_5__.Await; },
/* harmony export */   "BrowserRouter": function() { return /* binding */ BrowserRouter; },
/* harmony export */   "Form": function() { return /* binding */ Form; },
/* harmony export */   "HashRouter": function() { return /* binding */ HashRouter; },
/* harmony export */   "Link": function() { return /* binding */ Link; },
/* harmony export */   "MemoryRouter": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_5__.MemoryRouter; },
/* harmony export */   "NavLink": function() { return /* binding */ NavLink; },
/* harmony export */   "Navigate": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_5__.Navigate; },
/* harmony export */   "NavigationType": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_4__.Action; },
/* harmony export */   "Outlet": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_5__.Outlet; },
/* harmony export */   "Route": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_5__.Route; },
/* harmony export */   "Router": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_5__.Router; },
/* harmony export */   "RouterProvider": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_5__.RouterProvider; },
/* harmony export */   "Routes": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_5__.Routes; },
/* harmony export */   "ScrollRestoration": function() { return /* binding */ ScrollRestoration; },
/* harmony export */   "UNSAFE_DataRouterContext": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_5__.UNSAFE_DataRouterContext; },
/* harmony export */   "UNSAFE_DataRouterStateContext": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_5__.UNSAFE_DataRouterStateContext; },
/* harmony export */   "UNSAFE_LocationContext": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_5__.UNSAFE_LocationContext; },
/* harmony export */   "UNSAFE_NavigationContext": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_5__.UNSAFE_NavigationContext; },
/* harmony export */   "UNSAFE_RouteContext": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_5__.UNSAFE_RouteContext; },
/* harmony export */   "UNSAFE_enhanceManualRouteObjects": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_5__.UNSAFE_enhanceManualRouteObjects; },
/* harmony export */   "UNSAFE_useScrollRestoration": function() { return /* binding */ useScrollRestoration; },
/* harmony export */   "createBrowserRouter": function() { return /* binding */ createBrowserRouter; },
/* harmony export */   "createHashRouter": function() { return /* binding */ createHashRouter; },
/* harmony export */   "createMemoryRouter": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_5__.createMemoryRouter; },
/* harmony export */   "createPath": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_4__.createPath; },
/* harmony export */   "createRoutesFromChildren": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_5__.createRoutesFromChildren; },
/* harmony export */   "createRoutesFromElements": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_5__.createRoutesFromElements; },
/* harmony export */   "createSearchParams": function() { return /* binding */ createSearchParams; },
/* harmony export */   "defer": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_4__.defer; },
/* harmony export */   "generatePath": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_4__.generatePath; },
/* harmony export */   "isRouteErrorResponse": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_4__.isRouteErrorResponse; },
/* harmony export */   "json": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_4__.json; },
/* harmony export */   "matchPath": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_4__.matchPath; },
/* harmony export */   "matchRoutes": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_4__.matchRoutes; },
/* harmony export */   "parsePath": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_4__.parsePath; },
/* harmony export */   "redirect": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_4__.redirect; },
/* harmony export */   "renderMatches": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_5__.renderMatches; },
/* harmony export */   "resolvePath": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_4__.resolvePath; },
/* harmony export */   "unstable_HistoryRouter": function() { return /* binding */ HistoryRouter; },
/* harmony export */   "unstable_useBlocker": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_5__.unstable_useBlocker; },
/* harmony export */   "unstable_usePrompt": function() { return /* binding */ usePrompt; },
/* harmony export */   "useActionData": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_5__.useActionData; },
/* harmony export */   "useAsyncError": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_5__.useAsyncError; },
/* harmony export */   "useAsyncValue": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_5__.useAsyncValue; },
/* harmony export */   "useBeforeUnload": function() { return /* binding */ useBeforeUnload; },
/* harmony export */   "useFetcher": function() { return /* binding */ useFetcher; },
/* harmony export */   "useFetchers": function() { return /* binding */ useFetchers; },
/* harmony export */   "useFormAction": function() { return /* binding */ useFormAction; },
/* harmony export */   "useHref": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_5__.useHref; },
/* harmony export */   "useInRouterContext": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_5__.useInRouterContext; },
/* harmony export */   "useLinkClickHandler": function() { return /* binding */ useLinkClickHandler; },
/* harmony export */   "useLoaderData": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_5__.useLoaderData; },
/* harmony export */   "useLocation": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_5__.useLocation; },
/* harmony export */   "useMatch": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_5__.useMatch; },
/* harmony export */   "useMatches": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_5__.useMatches; },
/* harmony export */   "useNavigate": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_5__.useNavigate; },
/* harmony export */   "useNavigation": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_5__.useNavigation; },
/* harmony export */   "useNavigationType": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_5__.useNavigationType; },
/* harmony export */   "useOutlet": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_5__.useOutlet; },
/* harmony export */   "useOutletContext": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_5__.useOutletContext; },
/* harmony export */   "useParams": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_5__.useParams; },
/* harmony export */   "useResolvedPath": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_5__.useResolvedPath; },
/* harmony export */   "useRevalidator": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_5__.useRevalidator; },
/* harmony export */   "useRouteError": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_5__.useRouteError; },
/* harmony export */   "useRouteLoaderData": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_5__.useRouteLoaderData; },
/* harmony export */   "useRoutes": function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_5__.useRoutes; },
/* harmony export */   "useSearchParams": function() { return /* binding */ useSearchParams; },
/* harmony export */   "useSubmit": function() { return /* binding */ useSubmit; }
/* harmony export */ });
/* harmony import */ var C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/react-router/dist/index.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@remix-run/router/dist/router.js");



/**
 * React Router DOM v6.8.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */




function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
var defaultMethod = "get";
var defaultEncType = "application/x-www-form-urlencoded";
function isHtmlElement(object) {
  return object != null && typeof object.tagName === "string";
}
function isButtonElement(object) {
  return isHtmlElement(object) && object.tagName.toLowerCase() === "button";
}
function isFormElement(object) {
  return isHtmlElement(object) && object.tagName.toLowerCase() === "form";
}
function isInputElement(object) {
  return isHtmlElement(object) && object.tagName.toLowerCase() === "input";
}
function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}
function shouldProcessLinkClick(event, target) {
  return event.button === 0 && (
  // Ignore everything but left clicks
  !target || target === "_self") &&
  // Let browser handle "target=_blank" etc.
  !isModifiedEvent(event) // Ignore clicks with modifier keys
  ;
}
/**
 * Creates a URLSearchParams object using the given initializer.
 *
 * This is identical to `new URLSearchParams(init)` except it also
 * supports arrays as values in the object form of the initializer
 * instead of just strings. This is convenient when you need multiple
 * values for a given key, but don't want to use an array initializer.
 *
 * For example, instead of:
 *
 *   let searchParams = new URLSearchParams([
 *     ['sort', 'name'],
 *     ['sort', 'price']
 *   ]);
 *
 * you can do:
 *
 *   let searchParams = createSearchParams({
 *     sort: ['name', 'price']
 *   });
 */

function createSearchParams(init) {
  if (init === void 0) {
    init = "";
  }
  return new URLSearchParams(typeof init === "string" || Array.isArray(init) || init instanceof URLSearchParams ? init : Object.keys(init).reduce(function (memo, key) {
    var value = init[key];
    return memo.concat(Array.isArray(value) ? value.map(function (v) {
      return [key, v];
    }) : [[key, value]]);
  }, []));
}
function getSearchParamsForLocation(locationSearch, defaultSearchParams) {
  var searchParams = createSearchParams(locationSearch);
  if (defaultSearchParams) {
    var _iterator = (0, C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(defaultSearchParams.keys()),
      _step;
    try {
      var _loop = function _loop() {
        var key = _step.value;
        if (!searchParams.has(key)) {
          defaultSearchParams.getAll(key).forEach(function (value) {
            searchParams.append(key, value);
          });
        }
      };
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        _loop();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
  return searchParams;
}
function getFormSubmissionInfo(target, defaultAction, options) {
  var method;
  var action;
  var encType;
  var formData;
  if (isFormElement(target)) {
    var submissionTrigger = options.submissionTrigger;
    method = options.method || target.getAttribute("method") || defaultMethod;
    action = options.action || target.getAttribute("action") || defaultAction;
    encType = options.encType || target.getAttribute("enctype") || defaultEncType;
    formData = new FormData(target);
    if (submissionTrigger && submissionTrigger.name) {
      formData.append(submissionTrigger.name, submissionTrigger.value);
    }
  } else if (isButtonElement(target) || isInputElement(target) && (target.type === "submit" || target.type === "image")) {
    var form = target.form;
    if (form == null) {
      throw new Error("Cannot submit a <button> or <input type=\"submit\"> without a <form>");
    } // <button>/<input type="submit"> may override attributes of <form>

    method = options.method || target.getAttribute("formmethod") || form.getAttribute("method") || defaultMethod;
    action = options.action || target.getAttribute("formaction") || form.getAttribute("action") || defaultAction;
    encType = options.encType || target.getAttribute("formenctype") || form.getAttribute("enctype") || defaultEncType;
    formData = new FormData(form); // Include name + value from a <button>, appending in case the button name
    // matches an existing input name

    if (target.name) {
      formData.append(target.name, target.value);
    }
  } else if (isHtmlElement(target)) {
    throw new Error("Cannot submit element that is not <form>, <button>, or " + "<input type=\"submit|image\">");
  } else {
    method = options.method || defaultMethod;
    action = options.action || defaultAction;
    encType = options.encType || defaultEncType;
    if (target instanceof FormData) {
      formData = target;
    } else {
      formData = new FormData();
      if (target instanceof URLSearchParams) {
        var _iterator2 = (0, C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(target),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var _step2$value = (0,C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_step2.value, 2),
              name = _step2$value[0],
              value = _step2$value[1];
            formData.append(name, value);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      } else if (target != null) {
        for (var _i = 0, _Object$keys = Object.keys(target); _i < _Object$keys.length; _i++) {
          var _name = _Object$keys[_i];
          formData.append(_name, target[_name]);
        }
      }
    }
  }
  var _window$location = window.location,
    protocol = _window$location.protocol,
    host = _window$location.host;
  var url = new URL(action, protocol + "//" + host);
  return {
    url: url,
    method: method.toLowerCase(),
    encType: encType,
    formData: formData
  };
}
var _excluded = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset"],
  _excluded2 = ["aria-current", "caseSensitive", "className", "end", "style", "to", "children"],
  _excluded3 = ["reloadDocument", "replace", "method", "action", "onSubmit", "fetcherKey", "routeId", "relative", "preventScrollReset"];
//#region Routers
////////////////////////////////////////////////////////////////////////////////

function createBrowserRouter(routes, opts) {
  return (0, react_router__WEBPACK_IMPORTED_MODULE_4__.createRouter)({
    basename: opts == null ? void 0 : opts.basename,
    history: (0, react_router__WEBPACK_IMPORTED_MODULE_4__.createBrowserHistory)({
      window: opts == null ? void 0 : opts.window
    }),
    hydrationData: (opts == null ? void 0 : opts.hydrationData) || parseHydrationData(),
    routes: (0, react_router__WEBPACK_IMPORTED_MODULE_5__.UNSAFE_enhanceManualRouteObjects)(routes)
  }).initialize();
}
function createHashRouter(routes, opts) {
  return (0, react_router__WEBPACK_IMPORTED_MODULE_4__.createRouter)({
    basename: opts == null ? void 0 : opts.basename,
    history: (0, react_router__WEBPACK_IMPORTED_MODULE_4__.createHashHistory)({
      window: opts == null ? void 0 : opts.window
    }),
    hydrationData: (opts == null ? void 0 : opts.hydrationData) || parseHydrationData(),
    routes: (0, react_router__WEBPACK_IMPORTED_MODULE_5__.UNSAFE_enhanceManualRouteObjects)(routes)
  }).initialize();
}
function parseHydrationData() {
  var _window;
  var state = (_window = window) == null ? void 0 : _window.__staticRouterHydrationData;
  if (state && state.errors) {
    state = _extends({}, state, {
      errors: deserializeErrors(state.errors)
    });
  }
  return state;
}
function deserializeErrors(errors) {
  if (!errors) return null;
  var entries = Object.entries(errors);
  var serialized = {};
  for (var _i2 = 0, _entries = entries; _i2 < _entries.length; _i2++) {
    var _entries$_i = (0, C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_entries[_i2], 2),
      key = _entries$_i[0],
      val = _entries$_i[1];
    // Hey you!  If you change this, please change the corresponding logic in
    // serializeErrors in react-router-dom/server.tsx :)
    if (val && val.__type === "RouteErrorResponse") {
      serialized[key] = new react_router__WEBPACK_IMPORTED_MODULE_4__.ErrorResponse(val.status, val.statusText, val.data, val.internal === true);
    } else if (val && val.__type === "Error") {
      var error = new Error(val.message); // Wipe away the client-side stack trace.  Nothing to fill it in with
      // because we don't serialize SSR stack traces for security reasons

      error.stack = "";
      serialized[key] = error;
    } else {
      serialized[key] = val;
    }
  }
  return serialized;
}
/**
 * A `<Router>` for use in web browsers. Provides the cleanest URLs.
 */

function BrowserRouter(_ref) {
  var basename = _ref.basename,
    children = _ref.children,
    window = _ref.window;
  var historyRef = react__WEBPACK_IMPORTED_MODULE_3__.useRef();
  if (historyRef.current == null) {
    historyRef.current = (0, react_router__WEBPACK_IMPORTED_MODULE_4__.createBrowserHistory)({
      window: window,
      v5Compat: true
    });
  }
  var history = historyRef.current;
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3__.useState({
      action: history.action,
      location: history.location
    }),
    _React$useState2 = (0, C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
    state = _React$useState2[0],
    setState = _React$useState2[1];
  react__WEBPACK_IMPORTED_MODULE_3__.useLayoutEffect(function () {
    return history.listen(setState);
  }, [history]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_router__WEBPACK_IMPORTED_MODULE_5__.Router, {
    basename: basename,
    children: children,
    location: state.location,
    navigationType: state.action,
    navigator: history
  });
}
/**
 * A `<Router>` for use in web browsers. Stores the location in the hash
 * portion of the URL so it is not sent to the server.
 */

function HashRouter(_ref2) {
  var basename = _ref2.basename,
    children = _ref2.children,
    window = _ref2.window;
  var historyRef = react__WEBPACK_IMPORTED_MODULE_3__.useRef();
  if (historyRef.current == null) {
    historyRef.current = (0, react_router__WEBPACK_IMPORTED_MODULE_4__.createHashHistory)({
      window: window,
      v5Compat: true
    });
  }
  var history = historyRef.current;
  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_3__.useState({
      action: history.action,
      location: history.location
    }),
    _React$useState4 = (0, C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState3, 2),
    state = _React$useState4[0],
    setState = _React$useState4[1];
  react__WEBPACK_IMPORTED_MODULE_3__.useLayoutEffect(function () {
    return history.listen(setState);
  }, [history]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_router__WEBPACK_IMPORTED_MODULE_5__.Router, {
    basename: basename,
    children: children,
    location: state.location,
    navigationType: state.action,
    navigator: history
  });
}
/**
 * A `<Router>` that accepts a pre-instantiated history object. It's important
 * to note that using your own history object is highly discouraged and may add
 * two versions of the history library to your bundles unless you use the same
 * version of the history library that React Router uses internally.
 */

function HistoryRouter(_ref3) {
  var basename = _ref3.basename,
    children = _ref3.children,
    history = _ref3.history;
  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_3__.useState({
      action: history.action,
      location: history.location
    }),
    _React$useState6 = (0, C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState5, 2),
    state = _React$useState6[0],
    setState = _React$useState6[1];
  react__WEBPACK_IMPORTED_MODULE_3__.useLayoutEffect(function () {
    return history.listen(setState);
  }, [history]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react_router__WEBPACK_IMPORTED_MODULE_5__.Router, {
    basename: basename,
    children: children,
    location: state.location,
    navigationType: state.action,
    navigator: history
  });
}
var isBrowser = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined";
/**
 * The public API for rendering a history-aware <a>.
 */

var Link = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.forwardRef(function LinkWithRef(_ref4, ref) {
  var onClick = _ref4.onClick,
    relative = _ref4.relative,
    reloadDocument = _ref4.reloadDocument,
    replace = _ref4.replace,
    state = _ref4.state,
    target = _ref4.target,
    to = _ref4.to,
    preventScrollReset = _ref4.preventScrollReset,
    rest = _objectWithoutPropertiesLoose(_ref4, _excluded);

  // Rendered into <a href> for absolute URLs
  var absoluteHref;
  var isExternal = false;
  if (isBrowser && typeof to === "string" && /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i.test(to)) {
    absoluteHref = to;
    var currentUrl = new URL(window.location.href);
    var targetUrl = to.startsWith("//") ? new URL(currentUrl.protocol + to) : new URL(to);
    if (targetUrl.origin === currentUrl.origin) {
      // Strip the protocol/origin for same-origin absolute URLs
      to = targetUrl.pathname + targetUrl.search + targetUrl.hash;
    } else {
      isExternal = true;
    }
  } // Rendered into <a href> for relative URLs

  var href = (0, react_router__WEBPACK_IMPORTED_MODULE_5__.useHref)(to, {
    relative: relative
  });
  var internalOnClick = useLinkClickHandler(to, {
    replace: replace,
    state: state,
    target: target,
    preventScrollReset: preventScrollReset,
    relative: relative
  });
  function handleClick(event) {
    if (onClick) onClick(event);
    if (!event.defaultPrevented) {
      internalOnClick(event);
    }
  }
  return /*#__PURE__*/(
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    react__WEBPACK_IMPORTED_MODULE_3__.createElement("a", _extends({}, rest, {
      href: absoluteHref || href,
      onClick: isExternal || reloadDocument ? onClick : handleClick,
      ref: ref,
      target: target
    }))
  );
});
/**
 * A <Link> wrapper that knows if it's "active" or not.
 */

var NavLink = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.forwardRef(function NavLinkWithRef(_ref5, ref) {
  var _ref5$ariaCurrent = _ref5["aria-current"],
    ariaCurrentProp = _ref5$ariaCurrent === void 0 ? "page" : _ref5$ariaCurrent,
    _ref5$caseSensitive = _ref5.caseSensitive,
    caseSensitive = _ref5$caseSensitive === void 0 ? false : _ref5$caseSensitive,
    _ref5$className = _ref5.className,
    classNameProp = _ref5$className === void 0 ? "" : _ref5$className,
    _ref5$end = _ref5.end,
    end = _ref5$end === void 0 ? false : _ref5$end,
    styleProp = _ref5.style,
    to = _ref5.to,
    children = _ref5.children,
    rest = _objectWithoutPropertiesLoose(_ref5, _excluded2);
  var path = (0, react_router__WEBPACK_IMPORTED_MODULE_5__.useResolvedPath)(to, {
    relative: rest.relative
  });
  var location = (0, react_router__WEBPACK_IMPORTED_MODULE_5__.useLocation)();
  var routerState = react__WEBPACK_IMPORTED_MODULE_3__.useContext(react_router__WEBPACK_IMPORTED_MODULE_5__.UNSAFE_DataRouterStateContext);
  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_3__.useContext(react_router__WEBPACK_IMPORTED_MODULE_5__.UNSAFE_NavigationContext),
    navigator = _React$useContext.navigator;
  var toPathname = navigator.encodeLocation ? navigator.encodeLocation(path).pathname : path.pathname;
  var locationPathname = location.pathname;
  var nextLocationPathname = routerState && routerState.navigation && routerState.navigation.location ? routerState.navigation.location.pathname : null;
  if (!caseSensitive) {
    locationPathname = locationPathname.toLowerCase();
    nextLocationPathname = nextLocationPathname ? nextLocationPathname.toLowerCase() : null;
    toPathname = toPathname.toLowerCase();
  }
  var isActive = locationPathname === toPathname || !end && locationPathname.startsWith(toPathname) && locationPathname.charAt(toPathname.length) === "/";
  var isPending = nextLocationPathname != null && (nextLocationPathname === toPathname || !end && nextLocationPathname.startsWith(toPathname) && nextLocationPathname.charAt(toPathname.length) === "/");
  var ariaCurrent = isActive ? ariaCurrentProp : undefined;
  var className;
  if (typeof classNameProp === "function") {
    className = classNameProp({
      isActive: isActive,
      isPending: isPending
    });
  } else {
    // If the className prop is not a function, we use a default `active`
    // class for <NavLink />s that are active. In v5 `active` was the default
    // value for `activeClassName`, but we are removing that API and can still
    // use the old default behavior for a cleaner upgrade path and keep the
    // simple styling rules working as they currently do.
    className = [classNameProp, isActive ? "active" : null, isPending ? "pending" : null].filter(Boolean).join(" ");
  }
  var style = typeof styleProp === "function" ? styleProp({
    isActive: isActive,
    isPending: isPending
  }) : styleProp;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(Link, _extends({}, rest, {
    "aria-current": ariaCurrent,
    className: className,
    ref: ref,
    style: style,
    to: to
  }), typeof children === "function" ? children({
    isActive: isActive,
    isPending: isPending
  }) : children);
});
/**
 * A `@remix-run/router`-aware `<form>`. It behaves like a normal form except
 * that the interaction with the server is with `fetch` instead of new document
 * requests, allowing components to add nicer UX to the page as the form is
 * submitted and returns with data.
 */

var Form = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.forwardRef(function (props, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(FormImpl, _extends({}, props, {
    ref: ref
  }));
});
var FormImpl = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.forwardRef(function (_ref6, forwardedRef) {
  var reloadDocument = _ref6.reloadDocument,
    replace = _ref6.replace,
    _ref6$method = _ref6.method,
    method = _ref6$method === void 0 ? defaultMethod : _ref6$method,
    action = _ref6.action,
    onSubmit = _ref6.onSubmit,
    fetcherKey = _ref6.fetcherKey,
    routeId = _ref6.routeId,
    relative = _ref6.relative,
    preventScrollReset = _ref6.preventScrollReset,
    props = _objectWithoutPropertiesLoose(_ref6, _excluded3);
  var submit = useSubmitImpl(fetcherKey, routeId);
  var formMethod = method.toLowerCase() === "get" ? "get" : "post";
  var formAction = useFormAction(action, {
    relative: relative
  });
  var submitHandler = function submitHandler(event) {
    onSubmit && onSubmit(event);
    if (event.defaultPrevented) return;
    event.preventDefault();
    var submitter = event.nativeEvent.submitter;
    var submitMethod = (submitter == null ? void 0 : submitter.getAttribute("formmethod")) || method;
    submit(submitter || event.currentTarget, {
      method: submitMethod,
      replace: replace,
      relative: relative,
      preventScrollReset: preventScrollReset
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("form", _extends({
    ref: forwardedRef,
    method: formMethod,
    action: formAction,
    onSubmit: reloadDocument ? onSubmit : submitHandler
  }, props));
});
/**
 * This component will emulate the browser's scroll restoration on location
 * changes.
 */

function ScrollRestoration(_ref7) {
  var getKey = _ref7.getKey,
    storageKey = _ref7.storageKey;
  useScrollRestoration({
    getKey: getKey,
    storageKey: storageKey
  });
  return null;
}
////////////////////////////////////////////////////////////////////////////////
//#region Hooks
////////////////////////////////////////////////////////////////////////////////

var DataRouterHook;
(function (DataRouterHook) {
  DataRouterHook["UseScrollRestoration"] = "useScrollRestoration";
  DataRouterHook["UseSubmitImpl"] = "useSubmitImpl";
  DataRouterHook["UseFetcher"] = "useFetcher";
})(DataRouterHook || (DataRouterHook = {}));
var DataRouterStateHook;
(function (DataRouterStateHook) {
  DataRouterStateHook["UseFetchers"] = "useFetchers";
  DataRouterStateHook["UseScrollRestoration"] = "useScrollRestoration";
})(DataRouterStateHook || (DataRouterStateHook = {}));
function useDataRouterContext(hookName) {
  var ctx = react__WEBPACK_IMPORTED_MODULE_3__.useContext(react_router__WEBPACK_IMPORTED_MODULE_5__.UNSAFE_DataRouterContext);
  !ctx ?  (0, react_router__WEBPACK_IMPORTED_MODULE_4__.invariant)(false) : void 0;
  return ctx;
}
function useDataRouterState(hookName) {
  var state = react__WEBPACK_IMPORTED_MODULE_3__.useContext(react_router__WEBPACK_IMPORTED_MODULE_5__.UNSAFE_DataRouterStateContext);
  !state ?  (0, react_router__WEBPACK_IMPORTED_MODULE_4__.invariant)(false) : void 0;
  return state;
}
/**
 * Handles the click behavior for router `<Link>` components. This is useful if
 * you need to create custom `<Link>` components with the same click behavior we
 * use in our exported `<Link>`.
 */

function useLinkClickHandler(to, _temp) {
  var _ref9 = _temp === void 0 ? {} : _temp,
    target = _ref9.target,
    replaceProp = _ref9.replace,
    state = _ref9.state,
    preventScrollReset = _ref9.preventScrollReset,
    relative = _ref9.relative;
  var navigate = (0, react_router__WEBPACK_IMPORTED_MODULE_5__.useNavigate)();
  var location = (0, react_router__WEBPACK_IMPORTED_MODULE_5__.useLocation)();
  var path = (0, react_router__WEBPACK_IMPORTED_MODULE_5__.useResolvedPath)(to, {
    relative: relative
  });
  return react__WEBPACK_IMPORTED_MODULE_3__.useCallback(function (event) {
    if (shouldProcessLinkClick(event, target)) {
      event.preventDefault(); // If the URL hasn't changed, a regular <a> will do a replace instead of
      // a push, so do the same here unless the replace prop is explicitly set

      var replace = replaceProp !== undefined ? replaceProp : (0, react_router__WEBPACK_IMPORTED_MODULE_4__.createPath)(location) === (0, react_router__WEBPACK_IMPORTED_MODULE_4__.createPath)(path);
      navigate(to, {
        replace: replace,
        state: state,
        preventScrollReset: preventScrollReset,
        relative: relative
      });
    }
  }, [location, navigate, path, replaceProp, state, target, to, preventScrollReset, relative]);
}
/**
 * A convenient wrapper for reading and writing search parameters via the
 * URLSearchParams interface.
 */

function useSearchParams(defaultInit) {
  var defaultSearchParamsRef = react__WEBPACK_IMPORTED_MODULE_3__.useRef(createSearchParams(defaultInit));
  var hasSetSearchParamsRef = react__WEBPACK_IMPORTED_MODULE_3__.useRef(false);
  var location = (0, react_router__WEBPACK_IMPORTED_MODULE_5__.useLocation)();
  var searchParams = react__WEBPACK_IMPORTED_MODULE_3__.useMemo(function () {
    return (
      // Only merge in the defaults if we haven't yet called setSearchParams.
      // Once we call that we want those to take precedence, otherwise you can't
      // remove a param with setSearchParams({}) if it has an initial value
      getSearchParamsForLocation(location.search, hasSetSearchParamsRef.current ? null : defaultSearchParamsRef.current)
    );
  }, [location.search]);
  var navigate = (0, react_router__WEBPACK_IMPORTED_MODULE_5__.useNavigate)();
  var setSearchParams = react__WEBPACK_IMPORTED_MODULE_3__.useCallback(function (nextInit, navigateOptions) {
    var newSearchParams = createSearchParams(typeof nextInit === "function" ? nextInit(searchParams) : nextInit);
    hasSetSearchParamsRef.current = true;
    navigate("?" + newSearchParams, navigateOptions);
  }, [navigate, searchParams]);
  return [searchParams, setSearchParams];
}
/**
 * Returns a function that may be used to programmatically submit a form (or
 * some arbitrary data) to the server.
 */

function useSubmit() {
  return useSubmitImpl();
}
function useSubmitImpl(fetcherKey, routeId) {
  var _useDataRouterContext = useDataRouterContext(DataRouterHook.UseSubmitImpl),
    router = _useDataRouterContext.router;
  var defaultAction = useFormAction();
  return react__WEBPACK_IMPORTED_MODULE_3__.useCallback(function (target, options) {
    if (options === void 0) {
      options = {};
    }
    if (typeof document === "undefined") {
      throw new Error("You are calling submit during the server render. " + "Try calling submit within a `useEffect` or callback instead.");
    }
    var _getFormSubmissionInf = getFormSubmissionInfo(target, defaultAction, options),
      method = _getFormSubmissionInf.method,
      encType = _getFormSubmissionInf.encType,
      formData = _getFormSubmissionInf.formData,
      url = _getFormSubmissionInf.url;
    var href = url.pathname + url.search;
    var opts = {
      replace: options.replace,
      preventScrollReset: options.preventScrollReset,
      formData: formData,
      formMethod: method,
      formEncType: encType
    };
    if (fetcherKey) {
      !(routeId != null) ?  (0, react_router__WEBPACK_IMPORTED_MODULE_4__.invariant)(false) : void 0;
      router.fetch(fetcherKey, routeId, href, opts);
    } else {
      router.navigate(href, opts);
    }
  }, [defaultAction, router, fetcherKey, routeId]);
}
function useFormAction(action, _temp2) {
  var _ref10 = _temp2 === void 0 ? {} : _temp2,
    relative = _ref10.relative;
  var _React$useContext2 = react__WEBPACK_IMPORTED_MODULE_3__.useContext(react_router__WEBPACK_IMPORTED_MODULE_5__.UNSAFE_NavigationContext),
    basename = _React$useContext2.basename;
  var routeContext = react__WEBPACK_IMPORTED_MODULE_3__.useContext(react_router__WEBPACK_IMPORTED_MODULE_5__.UNSAFE_RouteContext);
  !routeContext ?  (0, react_router__WEBPACK_IMPORTED_MODULE_4__.invariant)(false) : void 0;
  var _routeContext$matches = routeContext.matches.slice(-1),
    _routeContext$matches2 = (0, C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_routeContext$matches, 1),
    match = _routeContext$matches2[0]; // Shallow clone path so we can modify it below, otherwise we modify the
  // object referenced by useMemo inside useResolvedPath

  var path = _extends({}, (0, react_router__WEBPACK_IMPORTED_MODULE_5__.useResolvedPath)(action ? action : ".", {
    relative: relative
  })); // Previously we set the default action to ".". The problem with this is that
  // `useResolvedPath(".")` excludes search params and the hash of the resolved
  // URL. This is the intended behavior of when "." is specifically provided as
  // the form action, but inconsistent w/ browsers when the action is omitted.
  // https://github.com/remix-run/remix/issues/927

  var location = (0, react_router__WEBPACK_IMPORTED_MODULE_5__.useLocation)();
  if (action == null) {
    // Safe to write to these directly here since if action was undefined, we
    // would have called useResolvedPath(".") which will never include a search
    // or hash
    path.search = location.search;
    path.hash = location.hash; // When grabbing search params from the URL, remove the automatically
    // inserted ?index param so we match the useResolvedPath search behavior
    // which would not include ?index

    if (match.route.index) {
      var params = new URLSearchParams(path.search);
      params.delete("index");
      path.search = params.toString() ? "?" + params.toString() : "";
    }
  }
  if ((!action || action === ".") && match.route.index) {
    path.search = path.search ? path.search.replace(/^\?/, "?index&") : "?index";
  } // If we're operating within a basename, prepend it to the pathname prior
  // to creating the form action.  If this is a root navigation, then just use
  // the raw basename which allows the basename to have full control over the
  // presence of a trailing slash on root actions

  if (basename !== "/") {
    path.pathname = path.pathname === "/" ? basename : (0, react_router__WEBPACK_IMPORTED_MODULE_4__.joinPaths)([basename, path.pathname]);
  }
  return (0, react_router__WEBPACK_IMPORTED_MODULE_4__.createPath)(path);
}
function createFetcherForm(fetcherKey, routeId) {
  var FetcherForm = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.forwardRef(function (props, ref) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(FormImpl, _extends({}, props, {
      ref: ref,
      fetcherKey: fetcherKey,
      routeId: routeId
    }));
  });
  return FetcherForm;
}
var fetcherId = 0;
/**
 * Interacts with route loaders and actions without causing a navigation. Great
 * for any interaction that stays on the same page.
 */

function useFetcher() {
  var _route$matches;
  var _useDataRouterContext2 = useDataRouterContext(DataRouterHook.UseFetcher),
    router = _useDataRouterContext2.router;
  var route = react__WEBPACK_IMPORTED_MODULE_3__.useContext(react_router__WEBPACK_IMPORTED_MODULE_5__.UNSAFE_RouteContext);
  !route ?  (0, react_router__WEBPACK_IMPORTED_MODULE_4__.invariant)(false) : void 0;
  var routeId = (_route$matches = route.matches[route.matches.length - 1]) == null ? void 0 : _route$matches.route.id;
  !(routeId != null) ?  (0, react_router__WEBPACK_IMPORTED_MODULE_4__.invariant)(false) : void 0;
  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_3__.useState(function () {
      return String(++fetcherId);
    }),
    _React$useState8 = (0, C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState7, 1),
    fetcherKey = _React$useState8[0];
  var _React$useState9 = react__WEBPACK_IMPORTED_MODULE_3__.useState(function () {
      !routeId ?  (0, react_router__WEBPACK_IMPORTED_MODULE_4__.invariant)(false) : void 0;
      return createFetcherForm(fetcherKey, routeId);
    }),
    _React$useState10 = (0, C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState9, 1),
    Form = _React$useState10[0];
  var _React$useState11 = react__WEBPACK_IMPORTED_MODULE_3__.useState(function () {
      return function (href) {
        !router ?  (0, react_router__WEBPACK_IMPORTED_MODULE_4__.invariant)(false) : void 0;
        !routeId ?  (0, react_router__WEBPACK_IMPORTED_MODULE_4__.invariant)(false) : void 0;
        router.fetch(fetcherKey, routeId, href);
      };
    }),
    _React$useState12 = (0, C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState11, 1),
    load = _React$useState12[0];
  var submit = useSubmitImpl(fetcherKey, routeId);
  var fetcher = router.getFetcher(fetcherKey);
  var fetcherWithComponents = react__WEBPACK_IMPORTED_MODULE_3__.useMemo(function () {
    return _extends({
      Form: Form,
      submit: submit,
      load: load
    }, fetcher);
  }, [fetcher, Form, submit, load]);
  react__WEBPACK_IMPORTED_MODULE_3__.useEffect(function () {
    // Is this busted when the React team gets real weird and calls effects
    // twice on mount?  We really just need to garbage collect here when this
    // fetcher is no longer around.
    return function () {
      if (!router) {
        console.warn("No fetcher available to clean up from useFetcher()");
        return;
      }
      router.deleteFetcher(fetcherKey);
    };
  }, [router, fetcherKey]);
  return fetcherWithComponents;
}
/**
 * Provides all fetchers currently on the page. Useful for layouts and parent
 * routes that need to provide pending/optimistic UI regarding the fetch.
 */

function useFetchers() {
  var state = useDataRouterState(DataRouterStateHook.UseFetchers);
  return (0, C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(state.fetchers.values());
}
var SCROLL_RESTORATION_STORAGE_KEY = "react-router-scroll-positions";
var savedScrollPositions = {};
/**
 * When rendered inside a RouterProvider, will restore scroll positions on navigations
 */

function useScrollRestoration(_temp3) {
  var _ref11 = _temp3 === void 0 ? {} : _temp3,
    getKey = _ref11.getKey,
    storageKey = _ref11.storageKey;
  var _useDataRouterContext3 = useDataRouterContext(DataRouterHook.UseScrollRestoration),
    router = _useDataRouterContext3.router;
  var _useDataRouterState = useDataRouterState(DataRouterStateHook.UseScrollRestoration),
    restoreScrollPosition = _useDataRouterState.restoreScrollPosition,
    preventScrollReset = _useDataRouterState.preventScrollReset;
  var location = (0, react_router__WEBPACK_IMPORTED_MODULE_5__.useLocation)();
  var matches = (0, react_router__WEBPACK_IMPORTED_MODULE_5__.useMatches)();
  var navigation = (0, react_router__WEBPACK_IMPORTED_MODULE_5__.useNavigation)(); // Trigger manual scroll restoration while we're active

  react__WEBPACK_IMPORTED_MODULE_3__.useEffect(function () {
    window.history.scrollRestoration = "manual";
    return function () {
      window.history.scrollRestoration = "auto";
    };
  }, []); // Save positions on pagehide

  usePageHide(react__WEBPACK_IMPORTED_MODULE_3__.useCallback(function () {
    if (navigation.state === "idle") {
      var key = (getKey ? getKey(location, matches) : null) || location.key;
      savedScrollPositions[key] = window.scrollY;
    }
    sessionStorage.setItem(storageKey || SCROLL_RESTORATION_STORAGE_KEY, JSON.stringify(savedScrollPositions));
    window.history.scrollRestoration = "auto";
  }, [storageKey, getKey, navigation.state, location, matches])); // Read in any saved scroll locations

  if (typeof document !== "undefined") {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    react__WEBPACK_IMPORTED_MODULE_3__.useLayoutEffect(function () {
      try {
        var sessionPositions = sessionStorage.getItem(storageKey || SCROLL_RESTORATION_STORAGE_KEY);
        if (sessionPositions) {
          savedScrollPositions = JSON.parse(sessionPositions);
        }
      } catch (e) {// no-op, use default empty object
      }
    }, [storageKey]); // Enable scroll restoration in the router
    // eslint-disable-next-line react-hooks/rules-of-hooks

    react__WEBPACK_IMPORTED_MODULE_3__.useLayoutEffect(function () {
      var disableScrollRestoration = router == null ? void 0 : router.enableScrollRestoration(savedScrollPositions, function () {
        return window.scrollY;
      }, getKey);
      return function () {
        return disableScrollRestoration && disableScrollRestoration();
      };
    }, [router, getKey]); // Restore scrolling when state.restoreScrollPosition changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    react__WEBPACK_IMPORTED_MODULE_3__.useLayoutEffect(function () {
      // Explicit false means don't do anything (used for submissions)
      if (restoreScrollPosition === false) {
        return;
      } // been here before, scroll to it

      if (typeof restoreScrollPosition === "number") {
        window.scrollTo(0, restoreScrollPosition);
        return;
      } // try to scroll to the hash

      if (location.hash) {
        var el = document.getElementById(location.hash.slice(1));
        if (el) {
          el.scrollIntoView();
          return;
        }
      } // Don't reset if this navigation opted out

      if (preventScrollReset === true) {
        return;
      } // otherwise go to the top on new locations

      window.scrollTo(0, 0);
    }, [location, restoreScrollPosition, preventScrollReset]);
  }
}
/**
 * Setup a callback to be fired on the window's `beforeunload` event. This is
 * useful for saving some data to `window.localStorage` just before the page
 * refreshes.
 *
 * Note: The `callback` argument should be a function created with
 * `React.useCallback()`.
 */

function useBeforeUnload(callback, options) {
  var _ref12 = options || {},
    capture = _ref12.capture;
  react__WEBPACK_IMPORTED_MODULE_3__.useEffect(function () {
    var opts = capture != null ? {
      capture: capture
    } : undefined;
    window.addEventListener("beforeunload", callback, opts);
    return function () {
      window.removeEventListener("beforeunload", callback, opts);
    };
  }, [callback, capture]);
}
/**
 * Setup a callback to be fired on the window's `pagehide` event. This is
 * useful for saving some data to `window.localStorage` just before the page
 * refreshes.  This event is better supported than beforeunload across browsers.
 *
 * Note: The `callback` argument should be a function created with
 * `React.useCallback()`.
 */

function usePageHide(callback, options) {
  var _ref13 = options || {},
    capture = _ref13.capture;
  react__WEBPACK_IMPORTED_MODULE_3__.useEffect(function () {
    var opts = capture != null ? {
      capture: capture
    } : undefined;
    window.addEventListener("pagehide", callback, opts);
    return function () {
      window.removeEventListener("pagehide", callback, opts);
    };
  }, [callback, capture]);
}
/**
 * Wrapper around useBlocker to show a window.confirm prompt to users instead
 * of building a custom UI with useBlocker.
 *
 * Warning: This has *a lot of rough edges* and behaves very differently (and
 * very incorrectly in some cases) across browsers if user click addition
 * back/forward navigations while the confirm is open.  Use at your own risk.
 */

function usePrompt(_ref8) {
  var when = _ref8.when,
    message = _ref8.message;
  var blocker = (0, react_router__WEBPACK_IMPORTED_MODULE_5__.unstable_useBlocker)(when);
  react__WEBPACK_IMPORTED_MODULE_3__.useEffect(function () {
    if (blocker.state === "blocked" && !when) {
      blocker.reset();
    }
  }, [blocker, when]);
  react__WEBPACK_IMPORTED_MODULE_3__.useEffect(function () {
    if (blocker.state === "blocked") {
      var proceed = window.confirm(message);
      if (proceed) {
        setTimeout(blocker.proceed, 0);
      } else {
        blocker.reset();
      }
    }
  }, [blocker, message]);
}



/***/ }),

/***/ "./node_modules/react-router/dist/index.js":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
var react__WEBPACK_IMPORTED_MODULE_7___namespace_cache;
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AbortedDeferredError": function() { return /* reexport safe */ _remix_run_router__WEBPACK_IMPORTED_MODULE_6__.AbortedDeferredError; },
/* harmony export */   "Await": function() { return /* binding */ Await; },
/* harmony export */   "MemoryRouter": function() { return /* binding */ MemoryRouter; },
/* harmony export */   "Navigate": function() { return /* binding */ Navigate; },
/* harmony export */   "NavigationType": function() { return /* reexport safe */ _remix_run_router__WEBPACK_IMPORTED_MODULE_6__.Action; },
/* harmony export */   "Outlet": function() { return /* binding */ Outlet; },
/* harmony export */   "Route": function() { return /* binding */ Route; },
/* harmony export */   "Router": function() { return /* binding */ Router; },
/* harmony export */   "RouterProvider": function() { return /* binding */ RouterProvider; },
/* harmony export */   "Routes": function() { return /* binding */ Routes; },
/* harmony export */   "UNSAFE_DataRouterContext": function() { return /* binding */ DataRouterContext; },
/* harmony export */   "UNSAFE_DataRouterStateContext": function() { return /* binding */ DataRouterStateContext; },
/* harmony export */   "UNSAFE_LocationContext": function() { return /* binding */ LocationContext; },
/* harmony export */   "UNSAFE_NavigationContext": function() { return /* binding */ NavigationContext; },
/* harmony export */   "UNSAFE_RouteContext": function() { return /* binding */ RouteContext; },
/* harmony export */   "UNSAFE_enhanceManualRouteObjects": function() { return /* binding */ enhanceManualRouteObjects; },
/* harmony export */   "createMemoryRouter": function() { return /* binding */ createMemoryRouter; },
/* harmony export */   "createPath": function() { return /* reexport safe */ _remix_run_router__WEBPACK_IMPORTED_MODULE_6__.createPath; },
/* harmony export */   "createRoutesFromChildren": function() { return /* binding */ createRoutesFromChildren; },
/* harmony export */   "createRoutesFromElements": function() { return /* binding */ createRoutesFromChildren; },
/* harmony export */   "defer": function() { return /* reexport safe */ _remix_run_router__WEBPACK_IMPORTED_MODULE_6__.defer; },
/* harmony export */   "generatePath": function() { return /* reexport safe */ _remix_run_router__WEBPACK_IMPORTED_MODULE_6__.generatePath; },
/* harmony export */   "isRouteErrorResponse": function() { return /* reexport safe */ _remix_run_router__WEBPACK_IMPORTED_MODULE_6__.isRouteErrorResponse; },
/* harmony export */   "json": function() { return /* reexport safe */ _remix_run_router__WEBPACK_IMPORTED_MODULE_6__.json; },
/* harmony export */   "matchPath": function() { return /* reexport safe */ _remix_run_router__WEBPACK_IMPORTED_MODULE_6__.matchPath; },
/* harmony export */   "matchRoutes": function() { return /* reexport safe */ _remix_run_router__WEBPACK_IMPORTED_MODULE_6__.matchRoutes; },
/* harmony export */   "parsePath": function() { return /* reexport safe */ _remix_run_router__WEBPACK_IMPORTED_MODULE_6__.parsePath; },
/* harmony export */   "redirect": function() { return /* reexport safe */ _remix_run_router__WEBPACK_IMPORTED_MODULE_6__.redirect; },
/* harmony export */   "renderMatches": function() { return /* binding */ renderMatches; },
/* harmony export */   "resolvePath": function() { return /* reexport safe */ _remix_run_router__WEBPACK_IMPORTED_MODULE_6__.resolvePath; },
/* harmony export */   "unstable_useBlocker": function() { return /* binding */ useBlocker; },
/* harmony export */   "useActionData": function() { return /* binding */ useActionData; },
/* harmony export */   "useAsyncError": function() { return /* binding */ useAsyncError; },
/* harmony export */   "useAsyncValue": function() { return /* binding */ useAsyncValue; },
/* harmony export */   "useHref": function() { return /* binding */ useHref; },
/* harmony export */   "useInRouterContext": function() { return /* binding */ useInRouterContext; },
/* harmony export */   "useLoaderData": function() { return /* binding */ useLoaderData; },
/* harmony export */   "useLocation": function() { return /* binding */ useLocation; },
/* harmony export */   "useMatch": function() { return /* binding */ useMatch; },
/* harmony export */   "useMatches": function() { return /* binding */ useMatches; },
/* harmony export */   "useNavigate": function() { return /* binding */ useNavigate; },
/* harmony export */   "useNavigation": function() { return /* binding */ useNavigation; },
/* harmony export */   "useNavigationType": function() { return /* binding */ useNavigationType; },
/* harmony export */   "useOutlet": function() { return /* binding */ useOutlet; },
/* harmony export */   "useOutletContext": function() { return /* binding */ useOutletContext; },
/* harmony export */   "useParams": function() { return /* binding */ useParams; },
/* harmony export */   "useResolvedPath": function() { return /* binding */ useResolvedPath; },
/* harmony export */   "useRevalidator": function() { return /* binding */ useRevalidator; },
/* harmony export */   "useRouteError": function() { return /* binding */ useRouteError; },
/* harmony export */   "useRouteLoaderData": function() { return /* binding */ useRouteLoaderData; },
/* harmony export */   "useRoutes": function() { return /* binding */ useRoutes; }
/* harmony export */ });
/* harmony import */ var C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _remix_run_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/@remix-run/router/dist/router.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./node_modules/react/index.js");






/**
 * React Router v6.8.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */



function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
// dispatch for CommonJS interop named imports.

react__WEBPACK_IMPORTED_MODULE_7__.useState;
  react__WEBPACK_IMPORTED_MODULE_7__.useEffect;
  react__WEBPACK_IMPORTED_MODULE_7__.useLayoutEffect;
  react__WEBPACK_IMPORTED_MODULE_7__.useDebugValue;
var useSyncExternalStore =  function (module) {
  return module.useSyncExternalStore;
}( (react__WEBPACK_IMPORTED_MODULE_7___namespace_cache || (react__WEBPACK_IMPORTED_MODULE_7___namespace_cache = __webpack_require__.t(react__WEBPACK_IMPORTED_MODULE_7__, 2)))) ;
var DataRouterContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createContext(null);
var DataRouterStateContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createContext(null);
var AwaitContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createContext(null);
var NavigationContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createContext(null);
var LocationContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createContext(null);
var RouteContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createContext({
  outlet: null,
  matches: []
});
var RouteErrorContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createContext(null);

/**
 * Returns the full href for the given "to" value. This is useful for building
 * custom links that are also accessible and preserve right-click behavior.
 *
 * @see https://reactrouter.com/hooks/use-href
 */

function useHref(to, _temp) {
  var _ref8 = _temp === void 0 ? {} : _temp,
    relative = _ref8.relative;
  !useInRouterContext() ?  (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_6__.invariant)(false) : void 0;
  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_7__.useContext(NavigationContext),
    basename = _React$useContext.basename,
    navigator = _React$useContext.navigator;
  var _useResolvedPath = useResolvedPath(to, {
      relative: relative
    }),
    hash = _useResolvedPath.hash,
    pathname = _useResolvedPath.pathname,
    search = _useResolvedPath.search;
  var joinedPathname = pathname; // If we're operating within a basename, prepend it to the pathname prior
  // to creating the href.  If this is a root navigation, then just use the raw
  // basename which allows the basename to have full control over the presence
  // of a trailing slash on root links

  if (basename !== "/") {
    joinedPathname = pathname === "/" ? basename : (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_6__.joinPaths)([basename, pathname]);
  }
  return navigator.createHref({
    pathname: joinedPathname,
    search: search,
    hash: hash
  });
}
/**
 * Returns true if this component is a descendant of a <Router>.
 *
 * @see https://reactrouter.com/hooks/use-in-router-context
 */

function useInRouterContext() {
  return react__WEBPACK_IMPORTED_MODULE_7__.useContext(LocationContext) != null;
}
/**
 * Returns the current location object, which represents the current URL in web
 * browsers.
 *
 * Note: If you're using this it may mean you're doing some of your own
 * "routing" in your app, and we'd like to know what your use case is. We may
 * be able to provide something higher-level to better suit your needs.
 *
 * @see https://reactrouter.com/hooks/use-location
 */

function useLocation() {
  !useInRouterContext() ?  (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_6__.invariant)(false) : void 0;
  return react__WEBPACK_IMPORTED_MODULE_7__.useContext(LocationContext).location;
}
/**
 * Returns the current navigation action which describes how the router came to
 * the current location, either by a pop, push, or replace on the history stack.
 *
 * @see https://reactrouter.com/hooks/use-navigation-type
 */

function useNavigationType() {
  return react__WEBPACK_IMPORTED_MODULE_7__.useContext(LocationContext).navigationType;
}
/**
 * Returns a PathMatch object if the given pattern matches the current URL.
 * This is useful for components that need to know "active" state, e.g.
 * <NavLink>.
 *
 * @see https://reactrouter.com/hooks/use-match
 */

function useMatch(pattern) {
  !useInRouterContext() ?  (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_6__.invariant)(false) : void 0;
  var _useLocation = useLocation(),
    pathname = _useLocation.pathname;
  return react__WEBPACK_IMPORTED_MODULE_7__.useMemo(function () {
    return (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_6__.matchPath)(pattern, pathname);
  }, [pathname, pattern]);
}
/**
 * The interface for the navigate() function returned from useNavigate().
 */

/**
 * Returns an imperative method for changing the location. Used by <Link>s, but
 * may also be used by other elements to change the location.
 *
 * @see https://reactrouter.com/hooks/use-navigate
 */
function useNavigate() {
  !useInRouterContext() ?  (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_6__.invariant)(false) : void 0;
  var _React$useContext2 = react__WEBPACK_IMPORTED_MODULE_7__.useContext(NavigationContext),
    basename = _React$useContext2.basename,
    navigator = _React$useContext2.navigator;
  var _React$useContext3 = react__WEBPACK_IMPORTED_MODULE_7__.useContext(RouteContext),
    matches = _React$useContext3.matches;
  var _useLocation2 = useLocation(),
    locationPathname = _useLocation2.pathname;
  var routePathnamesJson = JSON.stringify((0, _remix_run_router__WEBPACK_IMPORTED_MODULE_6__.UNSAFE_getPathContributingMatches)(matches).map(function (match) {
    return match.pathnameBase;
  }));
  var activeRef = react__WEBPACK_IMPORTED_MODULE_7__.useRef(false);
  react__WEBPACK_IMPORTED_MODULE_7__.useEffect(function () {
    activeRef.current = true;
  });
  var navigate = react__WEBPACK_IMPORTED_MODULE_7__.useCallback(function (to, options) {
    if (options === void 0) {
      options = {};
    }
    if (!activeRef.current) return;
    if (typeof to === "number") {
      navigator.go(to);
      return;
    }
    var path = (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_6__.resolveTo)(to, JSON.parse(routePathnamesJson), locationPathname, options.relative === "path"); // If we're operating within a basename, prepend it to the pathname prior
    // to handing off to history.  If this is a root navigation, then we
    // navigate to the raw basename which allows the basename to have full
    // control over the presence of a trailing slash on root links

    if (basename !== "/") {
      path.pathname = path.pathname === "/" ? basename : (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_6__.joinPaths)([basename, path.pathname]);
    }
    (!!options.replace ? navigator.replace : navigator.push)(path, options.state, options);
  }, [basename, navigator, routePathnamesJson, locationPathname]);
  return navigate;
}
var OutletContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createContext(null);
/**
 * Returns the context (if provided) for the child route at this level of the route
 * hierarchy.
 * @see https://reactrouter.com/hooks/use-outlet-context
 */

function useOutletContext() {
  return react__WEBPACK_IMPORTED_MODULE_7__.useContext(OutletContext);
}
/**
 * Returns the element for the child route at this level of the route
 * hierarchy. Used internally by <Outlet> to render child routes.
 *
 * @see https://reactrouter.com/hooks/use-outlet
 */

function useOutlet(context) {
  var outlet = react__WEBPACK_IMPORTED_MODULE_7__.useContext(RouteContext).outlet;
  if (outlet) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(OutletContext.Provider, {
      value: context
    }, outlet);
  }
  return outlet;
}
/**
 * Returns an object of key/value pairs of the dynamic params from the current
 * URL that were matched by the route path.
 *
 * @see https://reactrouter.com/hooks/use-params
 */

function useParams() {
  var _React$useContext4 = react__WEBPACK_IMPORTED_MODULE_7__.useContext(RouteContext),
    matches = _React$useContext4.matches;
  var routeMatch = matches[matches.length - 1];
  return routeMatch ? routeMatch.params : {};
}
/**
 * Resolves the pathname of the given `to` value against the current location.
 *
 * @see https://reactrouter.com/hooks/use-resolved-path
 */

function useResolvedPath(to, _temp2) {
  var _ref9 = _temp2 === void 0 ? {} : _temp2,
    relative = _ref9.relative;
  var _React$useContext5 = react__WEBPACK_IMPORTED_MODULE_7__.useContext(RouteContext),
    matches = _React$useContext5.matches;
  var _useLocation3 = useLocation(),
    locationPathname = _useLocation3.pathname;
  var routePathnamesJson = JSON.stringify((0, _remix_run_router__WEBPACK_IMPORTED_MODULE_6__.UNSAFE_getPathContributingMatches)(matches).map(function (match) {
    return match.pathnameBase;
  }));
  return react__WEBPACK_IMPORTED_MODULE_7__.useMemo(function () {
    return (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_6__.resolveTo)(to, JSON.parse(routePathnamesJson), locationPathname, relative === "path");
  }, [to, routePathnamesJson, locationPathname, relative]);
}
/**
 * Returns the element of the route that matched the current location, prepared
 * with the correct context to render the remainder of the route tree. Route
 * elements in the tree must render an <Outlet> to render their child route's
 * element.
 *
 * @see https://reactrouter.com/hooks/use-routes
 */

function useRoutes(routes, locationArg) {
  !useInRouterContext() ?  (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_6__.invariant)(false) : void 0;
  var _React$useContext6 = react__WEBPACK_IMPORTED_MODULE_7__.useContext(NavigationContext),
    navigator = _React$useContext6.navigator;
  var dataRouterStateContext = react__WEBPACK_IMPORTED_MODULE_7__.useContext(DataRouterStateContext);
  var _React$useContext7 = react__WEBPACK_IMPORTED_MODULE_7__.useContext(RouteContext),
    parentMatches = _React$useContext7.matches;
  var routeMatch = parentMatches[parentMatches.length - 1];
  var parentParams = routeMatch ? routeMatch.params : {};
  routeMatch ? routeMatch.pathname : "/";
  var parentPathnameBase = routeMatch ? routeMatch.pathnameBase : "/";
  routeMatch && routeMatch.route;
  var locationFromContext = useLocation();
  var location;
  if (locationArg) {
    var _parsedLocationArg$pa;
    var parsedLocationArg = typeof locationArg === "string" ? (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_6__.parsePath)(locationArg) : locationArg;
    !(parentPathnameBase === "/" || ((_parsedLocationArg$pa = parsedLocationArg.pathname) == null ? void 0 : _parsedLocationArg$pa.startsWith(parentPathnameBase))) ?  (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_6__.invariant)(false) : void 0;
    location = parsedLocationArg;
  } else {
    location = locationFromContext;
  }
  var pathname = location.pathname || "/";
  var remainingPathname = parentPathnameBase === "/" ? pathname : pathname.slice(parentPathnameBase.length) || "/";
  var matches = (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_6__.matchRoutes)(routes, {
    pathname: remainingPathname
  });
  var renderedMatches = _renderMatches(matches && matches.map(function (match) {
    return Object.assign({}, match, {
      params: Object.assign({}, parentParams, match.params),
      pathname: (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_6__.joinPaths)([parentPathnameBase,
      // Re-encode pathnames that were decoded inside matchRoutes
      navigator.encodeLocation ? navigator.encodeLocation(match.pathname).pathname : match.pathname]),
      pathnameBase: match.pathnameBase === "/" ? parentPathnameBase : (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_6__.joinPaths)([parentPathnameBase,
      // Re-encode pathnames that were decoded inside matchRoutes
      navigator.encodeLocation ? navigator.encodeLocation(match.pathnameBase).pathname : match.pathnameBase])
    });
  }), parentMatches, dataRouterStateContext || undefined); // When a user passes in a `locationArg`, the associated routes need to
  // be wrapped in a new `LocationContext.Provider` in order for `useLocation`
  // to use the scoped location instead of the global location.

  if (locationArg && renderedMatches) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(LocationContext.Provider, {
      value: {
        location: _extends({
          pathname: "/",
          search: "",
          hash: "",
          state: null,
          key: "default"
        }, location),
        navigationType: _remix_run_router__WEBPACK_IMPORTED_MODULE_6__.Action.Pop
      }
    }, renderedMatches);
  }
  return renderedMatches;
}
function DefaultErrorElement() {
  var error = useRouteError();
  var message = (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_6__.isRouteErrorResponse)(error) ? error.status + " " + error.statusText : error instanceof Error ? error.message : JSON.stringify(error);
  var stack = error instanceof Error ? error.stack : null;
  var lightgrey = "rgba(200,200,200, 0.5)";
  var preStyles = {
    padding: "0.5rem",
    backgroundColor: lightgrey
  };
  var devInfo = null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(react__WEBPACK_IMPORTED_MODULE_7__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("h2", null, "Unexpected Application Error!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("h3", {
    style: {
      fontStyle: "italic"
    }
  }, message), stack ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("pre", {
    style: preStyles
  }, stack) : null, devInfo);
}
var RenderErrorBoundary = /*#__PURE__*/function (_React$Component) {
  (0, C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_3__["default"])(RenderErrorBoundary, _React$Component);
  var _super = (0, C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_4__["default"])(RenderErrorBoundary);
  function RenderErrorBoundary(props) {
    var _this;
    (0, C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RenderErrorBoundary);
    _this = _super.call(this, props);
    _this.state = {
      location: props.location,
      error: props.error
    };
    return _this;
  }
  (0, C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__["default"])(RenderErrorBoundary, [{
    key: "componentDidCatch",
    value: function componentDidCatch(error, errorInfo) {
      console.error("React Router caught the following error during render", error, errorInfo);
    }
  }, {
    key: "render",
    value: function render() {
      return this.state.error ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(RouteContext.Provider, {
        value: this.props.routeContext
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(RouteErrorContext.Provider, {
        value: this.state.error,
        children: this.props.component
      })) : this.props.children;
    }
  }], [{
    key: "getDerivedStateFromError",
    value: function getDerivedStateFromError(error) {
      return {
        error: error
      };
    }
  }, {
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      // When we get into an error state, the user will likely click "back" to the
      // previous page that didn't have an error. Because this wraps the entire
      // application, that will have no effect--the error page continues to display.
      // This gives us a mechanism to recover from the error when the location changes.
      //
      // Whether we're in an error state or not, we update the location in state
      // so that when we are in an error state, it gets reset when a new location
      // comes in and the user recovers from the error.
      if (state.location !== props.location) {
        return {
          error: props.error,
          location: props.location
        };
      } // If we're not changing locations, preserve the location but still surface
      // any new errors that may come through. We retain the existing error, we do
      // this because the error provided from the app state may be cleared without
      // the location changing.

      return {
        error: props.error || state.error,
        location: state.location
      };
    }
  }]);
  return RenderErrorBoundary;
}(react__WEBPACK_IMPORTED_MODULE_7__.Component);
function RenderedRoute(_ref) {
  var routeContext = _ref.routeContext,
    match = _ref.match,
    children = _ref.children;
  var dataRouterContext = react__WEBPACK_IMPORTED_MODULE_7__.useContext(DataRouterContext); // Track how deep we got in our render pass to emulate SSR componentDidCatch
  // in a DataStaticRouter

  if (dataRouterContext && dataRouterContext.static && dataRouterContext.staticContext && match.route.errorElement) {
    dataRouterContext.staticContext._deepestRenderedBoundaryId = match.route.id;
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(RouteContext.Provider, {
    value: routeContext
  }, children);
}
function _renderMatches(matches, parentMatches, dataRouterState) {
  if (parentMatches === void 0) {
    parentMatches = [];
  }
  if (matches == null) {
    if (dataRouterState != null && dataRouterState.errors) {
      // Don't bail if we have data router errors so we can render them in the
      // boundary.  Use the pre-matched (or shimmed) matches
      matches = dataRouterState.matches;
    } else {
      return null;
    }
  }
  var renderedMatches = matches; // If we have data errors, trim matches to the highest error boundary

  var errors = dataRouterState == null ? void 0 : dataRouterState.errors;
  if (errors != null) {
    var errorIndex = renderedMatches.findIndex(function (m) {
      return m.route.id && (errors == null ? void 0 : errors[m.route.id]);
    });
    !(errorIndex >= 0) ?  (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_6__.invariant)(false) : void 0;
    renderedMatches = renderedMatches.slice(0, Math.min(renderedMatches.length, errorIndex + 1));
  }
  return renderedMatches.reduceRight(function (outlet, match, index) {
    var error = match.route.id ? errors == null ? void 0 : errors[match.route.id] : null; // Only data routers handle errors

    var errorElement = dataRouterState ? match.route.errorElement || /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(DefaultErrorElement, null) : null;
    var matches = parentMatches.concat(renderedMatches.slice(0, index + 1));
    var getChildren = function getChildren() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(RenderedRoute, {
        match: match,
        routeContext: {
          outlet: outlet,
          matches: matches
        }
      }, error ? errorElement : match.route.element !== undefined ? match.route.element : outlet);
    }; // Only wrap in an error boundary within data router usages when we have an
    // errorElement on this route.  Otherwise let it bubble up to an ancestor
    // errorElement

    return dataRouterState && (match.route.errorElement || index === 0) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(RenderErrorBoundary, {
      location: dataRouterState.location,
      component: errorElement,
      error: error,
      children: getChildren(),
      routeContext: {
        outlet: null,
        matches: matches
      }
    }) : getChildren();
  }, null);
}
var DataRouterHook;
(function (DataRouterHook) {
  DataRouterHook["UseBlocker"] = "useBlocker";
  DataRouterHook["UseRevalidator"] = "useRevalidator";
})(DataRouterHook || (DataRouterHook = {}));
var DataRouterStateHook;
(function (DataRouterStateHook) {
  DataRouterStateHook["UseLoaderData"] = "useLoaderData";
  DataRouterStateHook["UseActionData"] = "useActionData";
  DataRouterStateHook["UseRouteError"] = "useRouteError";
  DataRouterStateHook["UseNavigation"] = "useNavigation";
  DataRouterStateHook["UseRouteLoaderData"] = "useRouteLoaderData";
  DataRouterStateHook["UseMatches"] = "useMatches";
  DataRouterStateHook["UseRevalidator"] = "useRevalidator";
})(DataRouterStateHook || (DataRouterStateHook = {}));
function useDataRouterContext(hookName) {
  var ctx = react__WEBPACK_IMPORTED_MODULE_7__.useContext(DataRouterContext);
  !ctx ?  (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_6__.invariant)(false) : void 0;
  return ctx;
}
function useDataRouterState(hookName) {
  var state = react__WEBPACK_IMPORTED_MODULE_7__.useContext(DataRouterStateContext);
  !state ?  (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_6__.invariant)(false) : void 0;
  return state;
}
function useRouteContext(hookName) {
  var route = react__WEBPACK_IMPORTED_MODULE_7__.useContext(RouteContext);
  !route ?  (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_6__.invariant)(false) : void 0;
  return route;
}
function useCurrentRouteId(hookName) {
  var route = useRouteContext();
  var thisRoute = route.matches[route.matches.length - 1];
  !thisRoute.route.id ?  (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_6__.invariant)(false) : void 0;
  return thisRoute.route.id;
}
/**
 * Returns the current navigation, defaulting to an "idle" navigation when
 * no navigation is in progress
 */

function useNavigation() {
  var state = useDataRouterState(DataRouterStateHook.UseNavigation);
  return state.navigation;
}
/**
 * Returns a revalidate function for manually triggering revalidation, as well
 * as the current state of any manual revalidations
 */

function useRevalidator() {
  var dataRouterContext = useDataRouterContext(DataRouterHook.UseRevalidator);
  var state = useDataRouterState(DataRouterStateHook.UseRevalidator);
  return {
    revalidate: dataRouterContext.router.revalidate,
    state: state.revalidation
  };
}
/**
 * Returns the active route matches, useful for accessing loaderData for
 * parent/child routes or the route "handle" property
 */

function useMatches() {
  var _useDataRouterState = useDataRouterState(DataRouterStateHook.UseMatches),
    matches = _useDataRouterState.matches,
    loaderData = _useDataRouterState.loaderData;
  return react__WEBPACK_IMPORTED_MODULE_7__.useMemo(function () {
    return matches.map(function (match) {
      var pathname = match.pathname,
        params = match.params; // Note: This structure matches that created by createUseMatchesMatch
      // in the @remix-run/router , so if you change this please also change
      // that :)  Eventually we'll DRY this up

      return {
        id: match.route.id,
        pathname: pathname,
        params: params,
        data: loaderData[match.route.id],
        handle: match.route.handle
      };
    });
  }, [matches, loaderData]);
}
/**
 * Returns the loader data for the nearest ancestor Route loader
 */

function useLoaderData() {
  var state = useDataRouterState(DataRouterStateHook.UseLoaderData);
  var routeId = useCurrentRouteId(DataRouterStateHook.UseLoaderData);
  if (state.errors && state.errors[routeId] != null) {
    console.error("You cannot `useLoaderData` in an errorElement (routeId: " + routeId + ")");
    return undefined;
  }
  return state.loaderData[routeId];
}
/**
 * Returns the loaderData for the given routeId
 */

function useRouteLoaderData(routeId) {
  var state = useDataRouterState(DataRouterStateHook.UseRouteLoaderData);
  return state.loaderData[routeId];
}
/**
 * Returns the action data for the nearest ancestor Route action
 */

function useActionData() {
  var state = useDataRouterState(DataRouterStateHook.UseActionData);
  var route = react__WEBPACK_IMPORTED_MODULE_7__.useContext(RouteContext);
  !route ?  (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_6__.invariant)(false) : void 0;
  return Object.values((state == null ? void 0 : state.actionData) || {})[0];
}
/**
 * Returns the nearest ancestor Route error, which could be a loader/action
 * error or a render error.  This is intended to be called from your
 * errorElement to display a proper error message.
 */

function useRouteError() {
  var _state$errors;
  var error = react__WEBPACK_IMPORTED_MODULE_7__.useContext(RouteErrorContext);
  var state = useDataRouterState(DataRouterStateHook.UseRouteError);
  var routeId = useCurrentRouteId(DataRouterStateHook.UseRouteError); // If this was a render error, we put it in a RouteError context inside
  // of RenderErrorBoundary

  if (error) {
    return error;
  } // Otherwise look for errors from our data router state

  return (_state$errors = state.errors) == null ? void 0 : _state$errors[routeId];
}
/**
 * Returns the happy-path data from the nearest ancestor <Await /> value
 */

function useAsyncValue() {
  var value = react__WEBPACK_IMPORTED_MODULE_7__.useContext(AwaitContext);
  return value == null ? void 0 : value._data;
}
/**
 * Returns the error from the nearest ancestor <Await /> value
 */

function useAsyncError() {
  var value = react__WEBPACK_IMPORTED_MODULE_7__.useContext(AwaitContext);
  return value == null ? void 0 : value._error;
}
var blockerId = 0;
/**
 * Allow the application to block navigations within the SPA and present the
 * user a confirmation dialog to confirm the navigation.  Mostly used to avoid
 * using half-filled form data.  This does not handle hard-reloads or
 * cross-origin navigations.
 */

function useBlocker(shouldBlock) {
  var _useDataRouterContext = useDataRouterContext(DataRouterHook.UseBlocker),
    router = _useDataRouterContext.router;
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_7__.useState(function () {
      return String(++blockerId);
    }),
    _React$useState2 = (0, C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__["default"])(_React$useState, 1),
    blockerKey = _React$useState2[0];
  var blockerFunction = react__WEBPACK_IMPORTED_MODULE_7__.useCallback(function (args) {
    return typeof shouldBlock === "function" ? !!shouldBlock(args) : !!shouldBlock;
  }, [shouldBlock]);
  var blocker = router.getBlocker(blockerKey, blockerFunction); // Cleanup on unmount

  react__WEBPACK_IMPORTED_MODULE_7__.useEffect(function () {
    return function () {
      return router.deleteBlocker(blockerKey);
    };
  }, [router, blockerKey]);
  return blocker;
}

/**
 * Given a Remix Router instance, render the appropriate UI
 */
function RouterProvider(_ref) {
  var fallbackElement = _ref.fallbackElement,
    router = _ref.router;
  // Sync router state to our component state to force re-renders
  var state = useSyncExternalStore(router.subscribe, function () {
    return router.state;
  },
  // We have to provide this so React@18 doesn't complain during hydration,
  // but we pass our serialized hydration data into the router so state here
  // is already synced with what the server saw
  function () {
    return router.state;
  });
  var navigator = react__WEBPACK_IMPORTED_MODULE_7__.useMemo(function () {
    return {
      createHref: router.createHref,
      encodeLocation: router.encodeLocation,
      go: function go(n) {
        return router.navigate(n);
      },
      push: function push(to, state, opts) {
        return router.navigate(to, {
          state: state,
          preventScrollReset: opts == null ? void 0 : opts.preventScrollReset
        });
      },
      replace: function replace(to, state, opts) {
        return router.navigate(to, {
          replace: true,
          state: state,
          preventScrollReset: opts == null ? void 0 : opts.preventScrollReset
        });
      }
    };
  }, [router]);
  var basename = router.basename || "/"; // The fragment and {null} here are important!  We need them to keep React 18's
  // useId happy when we are server-rendering since we may have a <script> here
  // containing the hydrated server-side staticContext (from StaticRouterProvider).
  // useId relies on the component tree structure to generate deterministic id's
  // so we need to ensure it remains the same on the client even though
  // we don't need the <script> tag

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(react__WEBPACK_IMPORTED_MODULE_7__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(DataRouterContext.Provider, {
    value: {
      router: router,
      navigator: navigator,
      static: false,
      // Do we need this?
      basename: basename
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(DataRouterStateContext.Provider, {
    value: state
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(Router, {
    basename: router.basename,
    location: router.state.location,
    navigationType: router.state.historyAction,
    navigator: navigator
  }, router.state.initialized ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(Routes, null) : fallbackElement))), null);
}

/**
 * A <Router> that stores all entries in memory.
 *
 * @see https://reactrouter.com/router-components/memory-router
 */
function MemoryRouter(_ref2) {
  var basename = _ref2.basename,
    children = _ref2.children,
    initialEntries = _ref2.initialEntries,
    initialIndex = _ref2.initialIndex;
  var historyRef = react__WEBPACK_IMPORTED_MODULE_7__.useRef();
  if (historyRef.current == null) {
    historyRef.current = (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_6__.createMemoryHistory)({
      initialEntries: initialEntries,
      initialIndex: initialIndex,
      v5Compat: true
    });
  }
  var history = historyRef.current;
  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_7__.useState({
      action: history.action,
      location: history.location
    }),
    _React$useState4 = (0, C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__["default"])(_React$useState3, 2),
    state = _React$useState4[0],
    setState = _React$useState4[1];
  react__WEBPACK_IMPORTED_MODULE_7__.useLayoutEffect(function () {
    return history.listen(setState);
  }, [history]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(Router, {
    basename: basename,
    children: children,
    location: state.location,
    navigationType: state.action,
    navigator: history
  });
}

/**
 * Changes the current location.
 *
 * Note: This API is mostly useful in React.Component subclasses that are not
 * able to use hooks. In functional components, we recommend you use the
 * `useNavigate` hook instead.
 *
 * @see https://reactrouter.com/components/navigate
 */
function Navigate(_ref3) {
  var to = _ref3.to,
    replace = _ref3.replace,
    state = _ref3.state,
    relative = _ref3.relative;
  !useInRouterContext() ?  (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_6__.invariant)(false) : void 0;
  var dataRouterState = react__WEBPACK_IMPORTED_MODULE_7__.useContext(DataRouterStateContext);
  var navigate = useNavigate();
  react__WEBPACK_IMPORTED_MODULE_7__.useEffect(function () {
    // Avoid kicking off multiple navigations if we're in the middle of a
    // data-router navigation, since components get re-rendered when we enter
    // a submitting/loading state
    if (dataRouterState && dataRouterState.navigation.state !== "idle") {
      return;
    }
    navigate(to, {
      replace: replace,
      state: state,
      relative: relative
    });
  });
  return null;
}

/**
 * Renders the child route's element, if there is one.
 *
 * @see https://reactrouter.com/components/outlet
 */
function Outlet(props) {
  return useOutlet(props.context);
}

/**
 * Declares an element that should be rendered at a certain URL path.
 *
 * @see https://reactrouter.com/components/route
 */
function Route(_props) {
   (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_6__.invariant)(false);
}

/**
 * Provides location context for the rest of the app.
 *
 * Note: You usually won't render a <Router> directly. Instead, you'll render a
 * router that is more specific to your environment such as a <BrowserRouter>
 * in web browsers or a <StaticRouter> for server rendering.
 *
 * @see https://reactrouter.com/router-components/router
 */
function Router(_ref4) {
  var _ref4$basename = _ref4.basename,
    basenameProp = _ref4$basename === void 0 ? "/" : _ref4$basename,
    _ref4$children = _ref4.children,
    children = _ref4$children === void 0 ? null : _ref4$children,
    locationProp = _ref4.location,
    _ref4$navigationType = _ref4.navigationType,
    navigationType = _ref4$navigationType === void 0 ? _remix_run_router__WEBPACK_IMPORTED_MODULE_6__.Action.Pop : _ref4$navigationType,
    navigator = _ref4.navigator,
    _ref4$static = _ref4.static,
    staticProp = _ref4$static === void 0 ? false : _ref4$static;
  !!useInRouterContext() ?  (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_6__.invariant)(false) : void 0; // Preserve trailing slashes on basename, so we can let the user control
  // the enforcement of trailing slashes throughout the app

  var basename = basenameProp.replace(/^\/*/, "/");
  var navigationContext = react__WEBPACK_IMPORTED_MODULE_7__.useMemo(function () {
    return {
      basename: basename,
      navigator: navigator,
      static: staticProp
    };
  }, [basename, navigator, staticProp]);
  if (typeof locationProp === "string") {
    locationProp = (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_6__.parsePath)(locationProp);
  }
  var _locationProp = locationProp,
    _locationProp$pathnam = _locationProp.pathname,
    pathname = _locationProp$pathnam === void 0 ? "/" : _locationProp$pathnam,
    _locationProp$search = _locationProp.search,
    search = _locationProp$search === void 0 ? "" : _locationProp$search,
    _locationProp$hash = _locationProp.hash,
    hash = _locationProp$hash === void 0 ? "" : _locationProp$hash,
    _locationProp$state = _locationProp.state,
    state = _locationProp$state === void 0 ? null : _locationProp$state,
    _locationProp$key = _locationProp.key,
    key = _locationProp$key === void 0 ? "default" : _locationProp$key;
  var location = react__WEBPACK_IMPORTED_MODULE_7__.useMemo(function () {
    var trailingPathname = (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_6__.stripBasename)(pathname, basename);
    if (trailingPathname == null) {
      return null;
    }
    return {
      pathname: trailingPathname,
      search: search,
      hash: hash,
      state: state,
      key: key
    };
  }, [basename, pathname, search, hash, state, key]);
  if (location == null) {
    return null;
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(NavigationContext.Provider, {
    value: navigationContext
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(LocationContext.Provider, {
    children: children,
    value: {
      location: location,
      navigationType: navigationType
    }
  }));
}

/**
 * A container for a nested tree of <Route> elements that renders the branch
 * that best matches the current location.
 *
 * @see https://reactrouter.com/components/routes
 */
function Routes(_ref5) {
  var children = _ref5.children,
    location = _ref5.location;
  var dataRouterContext = react__WEBPACK_IMPORTED_MODULE_7__.useContext(DataRouterContext); // When in a DataRouterContext _without_ children, we use the router routes
  // directly.  If we have children, then we're in a descendant tree and we
  // need to use child routes.

  var routes = dataRouterContext && !children ? dataRouterContext.router.routes : createRoutesFromChildren(children);
  return useRoutes(routes, location);
}

/**
 * Component to use for rendering lazily loaded data from returning defer()
 * in a loader function
 */
function Await(_ref6) {
  var children = _ref6.children,
    errorElement = _ref6.errorElement,
    resolve = _ref6.resolve;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(AwaitErrorBoundary, {
    resolve: resolve,
    errorElement: errorElement
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(ResolveAwait, null, children));
}
var AwaitRenderStatus;
(function (AwaitRenderStatus) {
  AwaitRenderStatus[AwaitRenderStatus["pending"] = 0] = "pending";
  AwaitRenderStatus[AwaitRenderStatus["success"] = 1] = "success";
  AwaitRenderStatus[AwaitRenderStatus["error"] = 2] = "error";
})(AwaitRenderStatus || (AwaitRenderStatus = {}));
var neverSettledPromise = new Promise(function () {});
var AwaitErrorBoundary = /*#__PURE__*/function (_React$Component2) {
  (0, C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_3__["default"])(AwaitErrorBoundary, _React$Component2);
  var _super2 = (0, C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_4__["default"])(AwaitErrorBoundary);
  function AwaitErrorBoundary(props) {
    var _this2;
    (0, C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AwaitErrorBoundary);
    _this2 = _super2.call(this, props);
    _this2.state = {
      error: null
    };
    return _this2;
  }
  (0, C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__["default"])(AwaitErrorBoundary, [{
    key: "componentDidCatch",
    value: function componentDidCatch(error, errorInfo) {
      console.error("<Await> caught the following error during render", error, errorInfo);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        children = _this$props.children,
        errorElement = _this$props.errorElement,
        resolve = _this$props.resolve;
      var promise = null;
      var status = AwaitRenderStatus.pending;
      if (!(resolve instanceof Promise)) {
        // Didn't get a promise - provide as a resolved promise
        status = AwaitRenderStatus.success;
        promise = Promise.resolve();
        Object.defineProperty(promise, "_tracked", {
          get: function get() {
            return true;
          }
        });
        Object.defineProperty(promise, "_data", {
          get: function get() {
            return resolve;
          }
        });
      } else if (this.state.error) {
        // Caught a render error, provide it as a rejected promise
        status = AwaitRenderStatus.error;
        var renderError = this.state.error;
        promise = Promise.reject().catch(function () {}); // Avoid unhandled rejection warnings

        Object.defineProperty(promise, "_tracked", {
          get: function get() {
            return true;
          }
        });
        Object.defineProperty(promise, "_error", {
          get: function get() {
            return renderError;
          }
        });
      } else if (resolve._tracked) {
        // Already tracked promise - check contents
        promise = resolve;
        status = promise._error !== undefined ? AwaitRenderStatus.error : promise._data !== undefined ? AwaitRenderStatus.success : AwaitRenderStatus.pending;
      } else {
        // Raw (untracked) promise - track it
        status = AwaitRenderStatus.pending;
        Object.defineProperty(resolve, "_tracked", {
          get: function get() {
            return true;
          }
        });
        promise = resolve.then(function (data) {
          return Object.defineProperty(resolve, "_data", {
            get: function get() {
              return data;
            }
          });
        }, function (error) {
          return Object.defineProperty(resolve, "_error", {
            get: function get() {
              return error;
            }
          });
        });
      }
      if (status === AwaitRenderStatus.error && promise._error instanceof _remix_run_router__WEBPACK_IMPORTED_MODULE_6__.AbortedDeferredError) {
        // Freeze the UI by throwing a never resolved promise
        throw neverSettledPromise;
      }
      if (status === AwaitRenderStatus.error && !errorElement) {
        // No errorElement, throw to the nearest route-level error boundary
        throw promise._error;
      }
      if (status === AwaitRenderStatus.error) {
        // Render via our errorElement
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(AwaitContext.Provider, {
          value: promise,
          children: errorElement
        });
      }
      if (status === AwaitRenderStatus.success) {
        // Render children with resolved value
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(AwaitContext.Provider, {
          value: promise,
          children: children
        });
      } // Throw to the suspense boundary

      throw promise;
    }
  }], [{
    key: "getDerivedStateFromError",
    value: function getDerivedStateFromError(error) {
      return {
        error: error
      };
    }
  }]);
  return AwaitErrorBoundary;
}(react__WEBPACK_IMPORTED_MODULE_7__.Component);
/**
 * @private
 * Indirection to leverage useAsyncValue for a render-prop API on <Await>
 */
function ResolveAwait(_ref7) {
  var children = _ref7.children;
  var data = useAsyncValue();
  var toRender = typeof children === "function" ? children(data) : children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(react__WEBPACK_IMPORTED_MODULE_7__.Fragment, null, toRender);
} ///////////////////////////////////////////////////////////////////////////////
// UTILS
///////////////////////////////////////////////////////////////////////////////

/**
 * Creates a route config from a React "children" object, which is usually
 * either a `<Route>` element or an array of them. Used internally by
 * `<Routes>` to create a route config from its children.
 *
 * @see https://reactrouter.com/utils/create-routes-from-children
 */

function createRoutesFromChildren(children, parentPath) {
  if (parentPath === void 0) {
    parentPath = [];
  }
  var routes = [];
  react__WEBPACK_IMPORTED_MODULE_7__.Children.forEach(children, function (element, index) {
    if (! /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.isValidElement(element)) {
      // Ignore non-elements. This allows people to more easily inline
      // conditionals in their route config.
      return;
    }
    if (element.type === react__WEBPACK_IMPORTED_MODULE_7__.Fragment) {
      // Transparently support React.Fragment and its children.
      routes.push.apply(routes, createRoutesFromChildren(element.props.children, parentPath));
      return;
    }
    !(element.type === Route) ?  (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_6__.invariant)(false) : void 0;
    !(!element.props.index || !element.props.children) ?  (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_6__.invariant)(false) : void 0;
    var treePath = [].concat((0, C_source_code_WFRP_TranslatorService_Wfrp_Service_React_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(parentPath), [index]);
    var route = {
      id: element.props.id || treePath.join("-"),
      caseSensitive: element.props.caseSensitive,
      element: element.props.element,
      index: element.props.index,
      path: element.props.path,
      loader: element.props.loader,
      action: element.props.action,
      errorElement: element.props.errorElement,
      hasErrorBoundary: element.props.errorElement != null,
      shouldRevalidate: element.props.shouldRevalidate,
      handle: element.props.handle
    };
    if (element.props.children) {
      route.children = createRoutesFromChildren(element.props.children, treePath);
    }
    routes.push(route);
  });
  return routes;
}
/**
 * Renders the result of `matchRoutes()` into a React element.
 */

function renderMatches(matches) {
  return _renderMatches(matches);
}
/**
 * @private
 * Walk the route tree and add hasErrorBoundary if it's not provided, so that
 * users providing manual route arrays can just specify errorElement
 */

function enhanceManualRouteObjects(routes) {
  return routes.map(function (route) {
    var routeClone = _extends({}, route);
    if (routeClone.hasErrorBoundary == null) {
      routeClone.hasErrorBoundary = routeClone.errorElement != null;
    }
    if (routeClone.children) {
      routeClone.children = enhanceManualRouteObjects(routeClone.children);
    }
    return routeClone;
  });
}
function createMemoryRouter(routes, opts) {
  return (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_6__.createRouter)({
    basename: opts == null ? void 0 : opts.basename,
    history: (0, _remix_run_router__WEBPACK_IMPORTED_MODULE_6__.createMemoryHistory)({
      initialEntries: opts == null ? void 0 : opts.initialEntries,
      initialIndex: opts == null ? void 0 : opts.initialIndex
    }),
    hydrationData: opts == null ? void 0 : opts.hydrationData,
    routes: enhanceManualRouteObjects(routes)
  }).initialize();
} ///////////////////////////////////////////////////////////////////////////////



/***/ }),

/***/ "./node_modules/react-use-websocket/dist/index.js":
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.resetGlobalState = exports.useEventSource = exports.ReadyState = exports.useSocketIO = exports["default"] = void 0;
var use_websocket_1 = __webpack_require__("./node_modules/react-use-websocket/dist/lib/use-websocket.js");
Object.defineProperty(exports, "default", ({
  enumerable: true,
  get: function get() {
    return use_websocket_1.useWebSocket;
  }
}));
var use_socket_io_1 = __webpack_require__("./node_modules/react-use-websocket/dist/lib/use-socket-io.js");
Object.defineProperty(exports, "useSocketIO", ({
  enumerable: true,
  get: function get() {
    return use_socket_io_1.useSocketIO;
  }
}));
var constants_1 = __webpack_require__("./node_modules/react-use-websocket/dist/lib/constants.js");
Object.defineProperty(exports, "ReadyState", ({
  enumerable: true,
  get: function get() {
    return constants_1.ReadyState;
  }
}));
var use_event_source_1 = __webpack_require__("./node_modules/react-use-websocket/dist/lib/use-event-source.js");
Object.defineProperty(exports, "useEventSource", ({
  enumerable: true,
  get: function get() {
    return use_event_source_1.useEventSource;
  }
}));
var util_1 = __webpack_require__("./node_modules/react-use-websocket/dist/lib/util.js");
Object.defineProperty(exports, "resetGlobalState", ({
  enumerable: true,
  get: function get() {
    return util_1.resetGlobalState;
  }
}));

/***/ }),

/***/ "./node_modules/react-use-websocket/dist/lib/attach-listener.js":
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.attachListeners = void 0;
var socket_io_1 = __webpack_require__("./node_modules/react-use-websocket/dist/lib/socket-io.js");
var constants_1 = __webpack_require__("./node_modules/react-use-websocket/dist/lib/constants.js");
var util_1 = __webpack_require__("./node_modules/react-use-websocket/dist/lib/util.js");
var bindMessageHandler = function bindMessageHandler(webSocketInstance, optionsRef, setLastMessage) {
  webSocketInstance.onmessage = function (message) {
    optionsRef.current.onMessage && optionsRef.current.onMessage(message);
    if (typeof optionsRef.current.filter === 'function' && optionsRef.current.filter(message) !== true) {
      return;
    }
    setLastMessage(message);
  };
};
var bindOpenHandler = function bindOpenHandler(webSocketInstance, optionsRef, setReadyState, reconnectCount) {
  webSocketInstance.onopen = function (event) {
    optionsRef.current.onOpen && optionsRef.current.onOpen(event);
    reconnectCount.current = 0;
    setReadyState(constants_1.ReadyState.OPEN);
  };
};
var bindCloseHandler = function bindCloseHandler(webSocketInstance, optionsRef, setReadyState, reconnect, reconnectCount) {
  if (constants_1.isEventSourceSupported && webSocketInstance instanceof EventSource) {
    return function () {};
  }
  (0, util_1.assertIsWebSocket)(webSocketInstance, optionsRef.current.skipAssert);
  var reconnectTimeout;
  webSocketInstance.onclose = function (event) {
    var _a;
    optionsRef.current.onClose && optionsRef.current.onClose(event);
    setReadyState(constants_1.ReadyState.CLOSED);
    if (optionsRef.current.shouldReconnect && optionsRef.current.shouldReconnect(event)) {
      var reconnectAttempts = (_a = optionsRef.current.reconnectAttempts) !== null && _a !== void 0 ? _a : constants_1.DEFAULT_RECONNECT_LIMIT;
      if (reconnectCount.current < reconnectAttempts) {
        var nextReconnectInterval = typeof optionsRef.current.reconnectInterval === 'function' ? optionsRef.current.reconnectInterval(reconnectCount.current) : optionsRef.current.reconnectInterval;
        reconnectTimeout = window.setTimeout(function () {
          reconnectCount.current++;
          reconnect();
        }, nextReconnectInterval !== null && nextReconnectInterval !== void 0 ? nextReconnectInterval : constants_1.DEFAULT_RECONNECT_INTERVAL_MS);
      } else {
        optionsRef.current.onReconnectStop && optionsRef.current.onReconnectStop(reconnectAttempts);
        console.warn("Max reconnect attempts of ".concat(reconnectAttempts, " exceeded"));
      }
    }
  };
  return function () {
    return reconnectTimeout && window.clearTimeout(reconnectTimeout);
  };
};
var bindErrorHandler = function bindErrorHandler(webSocketInstance, optionsRef, setReadyState, reconnect, reconnectCount) {
  var reconnectTimeout;
  webSocketInstance.onerror = function (error) {
    var _a;
    optionsRef.current.onError && optionsRef.current.onError(error);
    if (constants_1.isEventSourceSupported && webSocketInstance instanceof EventSource) {
      optionsRef.current.onClose && optionsRef.current.onClose(__assign(__assign({}, error), {
        code: 1006,
        reason: "An error occurred with the EventSource: ".concat(error),
        wasClean: false
      }));
      setReadyState(constants_1.ReadyState.CLOSED);
      webSocketInstance.close();
    }
    if (optionsRef.current.retryOnError) {
      if (reconnectCount.current < ((_a = optionsRef.current.reconnectAttempts) !== null && _a !== void 0 ? _a : constants_1.DEFAULT_RECONNECT_LIMIT)) {
        var nextReconnectInterval = typeof optionsRef.current.reconnectInterval === 'function' ? optionsRef.current.reconnectInterval(reconnectCount.current) : optionsRef.current.reconnectInterval;
        reconnectTimeout = window.setTimeout(function () {
          reconnectCount.current++;
          reconnect();
        }, nextReconnectInterval !== null && nextReconnectInterval !== void 0 ? nextReconnectInterval : constants_1.DEFAULT_RECONNECT_INTERVAL_MS);
      } else {
        optionsRef.current.onReconnectStop && optionsRef.current.onReconnectStop(optionsRef.current.reconnectAttempts);
        console.warn("Max reconnect attempts of ".concat(optionsRef.current.reconnectAttempts, " exceeded"));
      }
    }
  };
  return function () {
    return reconnectTimeout && window.clearTimeout(reconnectTimeout);
  };
};
var attachListeners = function attachListeners(webSocketInstance, setters, optionsRef, reconnect, reconnectCount, sendMessage) {
  var setLastMessage = setters.setLastMessage,
    setReadyState = setters.setReadyState;
  var interval;
  var cancelReconnectOnClose;
  var cancelReconnectOnError;
  if (optionsRef.current.fromSocketIO) {
    interval = (0, socket_io_1.setUpSocketIOPing)(sendMessage);
  }
  bindMessageHandler(webSocketInstance, optionsRef, setLastMessage);
  bindOpenHandler(webSocketInstance, optionsRef, setReadyState, reconnectCount);
  cancelReconnectOnClose = bindCloseHandler(webSocketInstance, optionsRef, setReadyState, reconnect, reconnectCount);
  cancelReconnectOnError = bindErrorHandler(webSocketInstance, optionsRef, setReadyState, reconnect, reconnectCount);
  return function () {
    setReadyState(constants_1.ReadyState.CLOSING);
    cancelReconnectOnClose();
    cancelReconnectOnError();
    webSocketInstance.close();
    if (interval) clearInterval(interval);
  };
};
exports.attachListeners = attachListeners;

/***/ }),

/***/ "./node_modules/react-use-websocket/dist/lib/attach-shared-listeners.js":
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.attachSharedListeners = void 0;
var globals_1 = __webpack_require__("./node_modules/react-use-websocket/dist/lib/globals.js");
var constants_1 = __webpack_require__("./node_modules/react-use-websocket/dist/lib/constants.js");
var manage_subscribers_1 = __webpack_require__("./node_modules/react-use-websocket/dist/lib/manage-subscribers.js");
var socket_io_1 = __webpack_require__("./node_modules/react-use-websocket/dist/lib/socket-io.js");
var bindMessageHandler = function bindMessageHandler(webSocketInstance, url) {
  webSocketInstance.onmessage = function (message) {
    (0, manage_subscribers_1.getSubscribers)(url).forEach(function (subscriber) {
      if (subscriber.optionsRef.current.onMessage) {
        subscriber.optionsRef.current.onMessage(message);
      }
      if (typeof subscriber.optionsRef.current.filter === 'function' && subscriber.optionsRef.current.filter(message) !== true) {
        return;
      }
      subscriber.setLastMessage(message);
    });
  };
};
var bindOpenHandler = function bindOpenHandler(webSocketInstance, url) {
  webSocketInstance.onopen = function (event) {
    (0, manage_subscribers_1.getSubscribers)(url).forEach(function (subscriber) {
      subscriber.reconnectCount.current = 0;
      if (subscriber.optionsRef.current.onOpen) {
        subscriber.optionsRef.current.onOpen(event);
      }
      subscriber.setReadyState(constants_1.ReadyState.OPEN);
    });
  };
};
var bindCloseHandler = function bindCloseHandler(webSocketInstance, url) {
  if (webSocketInstance instanceof WebSocket) {
    webSocketInstance.onclose = function (event) {
      (0, manage_subscribers_1.getSubscribers)(url).forEach(function (subscriber) {
        if (subscriber.optionsRef.current.onClose) {
          subscriber.optionsRef.current.onClose(event);
        }
        subscriber.setReadyState(constants_1.ReadyState.CLOSED);
      });
      delete globals_1.sharedWebSockets[url];
      (0, manage_subscribers_1.getSubscribers)(url).forEach(function (subscriber) {
        var _a;
        if (subscriber.optionsRef.current.shouldReconnect && subscriber.optionsRef.current.shouldReconnect(event)) {
          var reconnectAttempts = (_a = subscriber.optionsRef.current.reconnectAttempts) !== null && _a !== void 0 ? _a : constants_1.DEFAULT_RECONNECT_LIMIT;
          if (subscriber.reconnectCount.current < reconnectAttempts) {
            var nextReconnectInterval = typeof subscriber.optionsRef.current.reconnectInterval === 'function' ? subscriber.optionsRef.current.reconnectInterval(subscriber.reconnectCount.current) : subscriber.optionsRef.current.reconnectInterval;
            setTimeout(function () {
              subscriber.reconnectCount.current++;
              subscriber.reconnect.current();
            }, nextReconnectInterval !== null && nextReconnectInterval !== void 0 ? nextReconnectInterval : constants_1.DEFAULT_RECONNECT_INTERVAL_MS);
          } else {
            subscriber.optionsRef.current.onReconnectStop && subscriber.optionsRef.current.onReconnectStop(subscriber.optionsRef.current.reconnectAttempts);
            console.warn("Max reconnect attempts of ".concat(reconnectAttempts, " exceeded"));
          }
        }
      });
    };
  }
};
var bindErrorHandler = function bindErrorHandler(webSocketInstance, url) {
  webSocketInstance.onerror = function (error) {
    (0, manage_subscribers_1.getSubscribers)(url).forEach(function (subscriber) {
      if (subscriber.optionsRef.current.onError) {
        subscriber.optionsRef.current.onError(error);
      }
      if (constants_1.isEventSourceSupported && webSocketInstance instanceof EventSource) {
        subscriber.optionsRef.current.onClose && subscriber.optionsRef.current.onClose(__assign(__assign({}, error), {
          code: 1006,
          reason: "An error occurred with the EventSource: ".concat(error),
          wasClean: false
        }));
        subscriber.setReadyState(constants_1.ReadyState.CLOSED);
      }
    });
    if (constants_1.isEventSourceSupported && webSocketInstance instanceof EventSource) {
      webSocketInstance.close();
    }
  };
};
var attachSharedListeners = function attachSharedListeners(webSocketInstance, url, optionsRef, sendMessage) {
  var interval;
  if (optionsRef.current.fromSocketIO) {
    interval = (0, socket_io_1.setUpSocketIOPing)(sendMessage);
  }
  bindMessageHandler(webSocketInstance, url);
  bindCloseHandler(webSocketInstance, url);
  bindOpenHandler(webSocketInstance, url);
  bindErrorHandler(webSocketInstance, url);
  return function () {
    if (interval) clearInterval(interval);
  };
};
exports.attachSharedListeners = attachSharedListeners;

/***/ }),

/***/ "./node_modules/react-use-websocket/dist/lib/constants.js":
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.isEventSourceSupported = exports.isReactNative = exports.ReadyState = exports.UNPARSABLE_JSON_OBJECT = exports.DEFAULT_RECONNECT_INTERVAL_MS = exports.DEFAULT_RECONNECT_LIMIT = exports.SOCKET_IO_PING_CODE = exports.SOCKET_IO_PATH = exports.SOCKET_IO_PING_INTERVAL = exports.DEFAULT_EVENT_SOURCE_OPTIONS = exports.EMPTY_EVENT_HANDLERS = exports.DEFAULT_OPTIONS = void 0;
var MILLISECONDS = 1;
var SECONDS = 1000 * MILLISECONDS;
exports.DEFAULT_OPTIONS = {};
exports.EMPTY_EVENT_HANDLERS = {};
exports.DEFAULT_EVENT_SOURCE_OPTIONS = {
  withCredentials: false,
  events: exports.EMPTY_EVENT_HANDLERS
};
exports.SOCKET_IO_PING_INTERVAL = 25 * SECONDS;
exports.SOCKET_IO_PATH = '/socket.io/?EIO=3&transport=websocket';
exports.SOCKET_IO_PING_CODE = '2';
exports.DEFAULT_RECONNECT_LIMIT = 20;
exports.DEFAULT_RECONNECT_INTERVAL_MS = 5000;
exports.UNPARSABLE_JSON_OBJECT = {};
(function (ReadyState) {
  ReadyState[ReadyState["UNINSTANTIATED"] = -1] = "UNINSTANTIATED";
  ReadyState[ReadyState["CONNECTING"] = 0] = "CONNECTING";
  ReadyState[ReadyState["OPEN"] = 1] = "OPEN";
  ReadyState[ReadyState["CLOSING"] = 2] = "CLOSING";
  ReadyState[ReadyState["CLOSED"] = 3] = "CLOSED";
})(exports.ReadyState || (exports.ReadyState = {}));
var eventSourceSupported = function eventSourceSupported() {
  try {
    return 'EventSource' in globalThis;
  } catch (e) {
    return false;
  }
};
exports.isReactNative = typeof navigator !== 'undefined' && navigator.product === 'ReactNative';
exports.isEventSourceSupported = !exports.isReactNative && eventSourceSupported();

/***/ }),

/***/ "./node_modules/react-use-websocket/dist/lib/create-or-join.js":
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.createOrJoinSocket = void 0;
var globals_1 = __webpack_require__("./node_modules/react-use-websocket/dist/lib/globals.js");
var constants_1 = __webpack_require__("./node_modules/react-use-websocket/dist/lib/constants.js");
var attach_listener_1 = __webpack_require__("./node_modules/react-use-websocket/dist/lib/attach-listener.js");
var attach_shared_listeners_1 = __webpack_require__("./node_modules/react-use-websocket/dist/lib/attach-shared-listeners.js");
var manage_subscribers_1 = __webpack_require__("./node_modules/react-use-websocket/dist/lib/manage-subscribers.js");
//TODO ensure that all onClose callbacks are called
var cleanSubscribers = function cleanSubscribers(url, subscriber, optionsRef, setReadyState, clearSocketIoPingInterval) {
  return function () {
    (0, manage_subscribers_1.removeSubscriber)(url, subscriber);
    if (!(0, manage_subscribers_1.hasSubscribers)(url)) {
      try {
        var socketLike = globals_1.sharedWebSockets[url];
        if (socketLike instanceof WebSocket) {
          socketLike.onclose = function (event) {
            if (optionsRef.current.onClose) {
              optionsRef.current.onClose(event);
            }
            setReadyState(constants_1.ReadyState.CLOSED);
          };
        }
        socketLike.close();
      } catch (e) {}
      if (clearSocketIoPingInterval) clearSocketIoPingInterval();
      delete globals_1.sharedWebSockets[url];
    }
  };
};
var createOrJoinSocket = function createOrJoinSocket(webSocketRef, url, setReadyState, optionsRef, setLastMessage, startRef, reconnectCount, sendMessage) {
  if (!constants_1.isEventSourceSupported && optionsRef.current.eventSourceOptions) {
    if (constants_1.isReactNative) {
      throw new Error('EventSource is not supported in ReactNative');
    } else {
      throw new Error('EventSource is not supported');
    }
  }
  if (optionsRef.current.share) {
    var clearSocketIoPingInterval = null;
    if (globals_1.sharedWebSockets[url] === undefined) {
      globals_1.sharedWebSockets[url] = optionsRef.current.eventSourceOptions ? new EventSource(url, optionsRef.current.eventSourceOptions) : new WebSocket(url, optionsRef.current.protocols);
      webSocketRef.current = globals_1.sharedWebSockets[url];
      setReadyState(constants_1.ReadyState.CONNECTING);
      clearSocketIoPingInterval = (0, attach_shared_listeners_1.attachSharedListeners)(globals_1.sharedWebSockets[url], url, optionsRef, sendMessage);
    } else {
      webSocketRef.current = globals_1.sharedWebSockets[url];
      setReadyState(globals_1.sharedWebSockets[url].readyState);
    }
    var subscriber = {
      setLastMessage: setLastMessage,
      setReadyState: setReadyState,
      optionsRef: optionsRef,
      reconnectCount: reconnectCount,
      reconnect: startRef
    };
    (0, manage_subscribers_1.addSubscriber)(url, subscriber);
    return cleanSubscribers(url, subscriber, optionsRef, setReadyState, clearSocketIoPingInterval);
  } else {
    webSocketRef.current = optionsRef.current.eventSourceOptions ? new EventSource(url, optionsRef.current.eventSourceOptions) : new WebSocket(url, optionsRef.current.protocols);
    setReadyState(constants_1.ReadyState.CONNECTING);
    if (!webSocketRef.current) {
      throw new Error('WebSocket failed to be created');
    }
    return (0, attach_listener_1.attachListeners)(webSocketRef.current, {
      setLastMessage: setLastMessage,
      setReadyState: setReadyState
    }, optionsRef, startRef.current, reconnectCount, sendMessage);
  }
};
exports.createOrJoinSocket = createOrJoinSocket;

/***/ }),

/***/ "./node_modules/react-use-websocket/dist/lib/get-url.js":
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
      label: 0,
      sent: function sent() {
        if (t[0] & 1) throw t[1];
        return t[1];
      },
      trys: [],
      ops: []
    },
    f,
    y,
    t,
    g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;
  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (_) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];
      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;
        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };
        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;
        case 7:
          op = _.ops.pop();
          _.trys.pop();
          continue;
        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }
          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }
          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }
          if (t && _.label < t[2]) {
            _.label = t[2];
            _.ops.push(op);
            break;
          }
          if (t[2]) _.ops.pop();
          _.trys.pop();
          continue;
      }
      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }
    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getUrl = void 0;
var socket_io_1 = __webpack_require__("./node_modules/react-use-websocket/dist/lib/socket-io.js");
var getUrl = function getUrl(url, optionsRef) {
  return __awaiter(void 0, void 0, void 0, function () {
    var convertedUrl, parsedUrl, parsedWithQueryParams;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (!(typeof url === 'function')) return [3 /*break*/, 2];
          return [4 /*yield*/, url()];
        case 1:
          convertedUrl = _a.sent();
          return [3 /*break*/, 3];
        case 2:
          convertedUrl = url;
          _a.label = 3;
        case 3:
          parsedUrl = optionsRef.current.fromSocketIO ? (0, socket_io_1.parseSocketIOUrl)(convertedUrl) : convertedUrl;
          parsedWithQueryParams = optionsRef.current.queryParams ? (0, socket_io_1.appendQueryParams)(parsedUrl, optionsRef.current.queryParams) : parsedUrl;
          return [2 /*return*/, parsedWithQueryParams];
      }
    });
  });
};
exports.getUrl = getUrl;

/***/ }),

/***/ "./node_modules/react-use-websocket/dist/lib/globals.js":
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.resetWebSockets = exports.sharedWebSockets = void 0;
exports.sharedWebSockets = {};
var resetWebSockets = function resetWebSockets(url) {
  if (url && exports.sharedWebSockets.hasOwnProperty(url)) {
    delete exports.sharedWebSockets[url];
  } else {
    for (var url_1 in exports.sharedWebSockets) {
      if (exports.sharedWebSockets.hasOwnProperty(url_1)) {
        delete exports.sharedWebSockets[url_1];
      }
    }
  }
};
exports.resetWebSockets = resetWebSockets;

/***/ }),

/***/ "./node_modules/react-use-websocket/dist/lib/manage-subscribers.js":
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.resetSubscribers = exports.removeSubscriber = exports.addSubscriber = exports.hasSubscribers = exports.getSubscribers = void 0;
var subscribers = {};
var EMPTY_LIST = [];
var getSubscribers = function getSubscribers(url) {
  if ((0, exports.hasSubscribers)(url)) {
    return Array.from(subscribers[url]);
  }
  return EMPTY_LIST;
};
exports.getSubscribers = getSubscribers;
var hasSubscribers = function hasSubscribers(url) {
  var _a;
  return ((_a = subscribers[url]) === null || _a === void 0 ? void 0 : _a.size) > 0;
};
exports.hasSubscribers = hasSubscribers;
var addSubscriber = function addSubscriber(url, subscriber) {
  subscribers[url] = subscribers[url] || new Set();
  subscribers[url].add(subscriber);
};
exports.addSubscriber = addSubscriber;
var removeSubscriber = function removeSubscriber(url, subscriber) {
  subscribers[url].delete(subscriber);
};
exports.removeSubscriber = removeSubscriber;
var resetSubscribers = function resetSubscribers(url) {
  if (url && subscribers.hasOwnProperty(url)) {
    delete subscribers[url];
  } else {
    for (var url_1 in subscribers) {
      if (subscribers.hasOwnProperty(url_1)) {
        delete subscribers[url_1];
      }
    }
  }
};
exports.resetSubscribers = resetSubscribers;

/***/ }),

/***/ "./node_modules/react-use-websocket/dist/lib/proxy.js":
/***/ (function(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.websocketWrapper = void 0;
var websocketWrapper = function websocketWrapper(webSocket, start) {
  return new Proxy(webSocket, {
    get: function get(obj, key) {
      var val = obj[key];
      if (key === 'reconnect') return start;
      if (typeof val === 'function') {
        console.error('Calling methods directly on the websocket is not supported at this moment. You must use the methods returned by useWebSocket.');
        //Prevent error thrown by invoking a non-function
        return function () {};
      } else {
        return val;
      }
    },
    set: function set(obj, key, val) {
      if (/^on/.test(key)) {
        console.warn('The websocket\'s event handlers should be defined through the options object passed into useWebSocket.');
        return false;
      } else {
        obj[key] = val;
        return true;
      }
    }
  });
};
exports.websocketWrapper = websocketWrapper;
exports["default"] = exports.websocketWrapper;

/***/ }),

/***/ "./node_modules/react-use-websocket/dist/lib/socket-io.js":
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.setUpSocketIOPing = exports.appendQueryParams = exports.parseSocketIOUrl = void 0;
var constants_1 = __webpack_require__("./node_modules/react-use-websocket/dist/lib/constants.js");
var parseSocketIOUrl = function parseSocketIOUrl(url) {
  if (url) {
    var isSecure = /^https|wss/.test(url);
    var strippedProtocol = url.replace(/^(https?|wss?)(:\/\/)?/, '');
    var removedFinalBackSlack = strippedProtocol.replace(/\/$/, '');
    var protocol = isSecure ? 'wss' : 'ws';
    return "".concat(protocol, "://").concat(removedFinalBackSlack).concat(constants_1.SOCKET_IO_PATH);
  } else if (url === '') {
    var isSecure = /^https/.test(window.location.protocol);
    var protocol = isSecure ? 'wss' : 'ws';
    var port = window.location.port ? ":".concat(window.location.port) : '';
    return "".concat(protocol, "://").concat(window.location.hostname).concat(port).concat(constants_1.SOCKET_IO_PATH);
  }
  return url;
};
exports.parseSocketIOUrl = parseSocketIOUrl;
var appendQueryParams = function appendQueryParams(url, params) {
  if (params === void 0) {
    params = {};
  }
  var hasParamsRegex = /\?([\w]+=[\w]+)/;
  var alreadyHasParams = hasParamsRegex.test(url);
  var stringified = "".concat(Object.entries(params).reduce(function (next, _a) {
    var key = _a[0],
      value = _a[1];
    return next + "".concat(key, "=").concat(value, "&");
  }, '').slice(0, -1));
  return "".concat(url).concat(alreadyHasParams ? '&' : '?').concat(stringified);
};
exports.appendQueryParams = appendQueryParams;
var setUpSocketIOPing = function setUpSocketIOPing(sendMessage, interval) {
  if (interval === void 0) {
    interval = constants_1.SOCKET_IO_PING_INTERVAL;
  }
  var ping = function ping() {
    return sendMessage(constants_1.SOCKET_IO_PING_CODE);
  };
  return window.setInterval(ping, interval);
};
exports.setUpSocketIOPing = setUpSocketIOPing;

/***/ }),

/***/ "./node_modules/react-use-websocket/dist/lib/use-event-source.js":
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var __rest = this && this.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useEventSource = void 0;
var react_1 = __webpack_require__("./node_modules/react/index.js");
var use_websocket_1 = __webpack_require__("./node_modules/react-use-websocket/dist/lib/use-websocket.js");
var constants_1 = __webpack_require__("./node_modules/react-use-websocket/dist/lib/constants.js");
var useEventSource = function useEventSource(url, _a, connect) {
  if (_a === void 0) {
    _a = constants_1.DEFAULT_EVENT_SOURCE_OPTIONS;
  }
  var withCredentials = _a.withCredentials,
    events = _a.events,
    options = __rest(_a, ["withCredentials", "events"]);
  if (connect === void 0) {
    connect = true;
  }
  var optionsWithEventSource = __assign(__assign({}, options), {
    eventSourceOptions: {
      withCredentials: withCredentials
    }
  });
  var eventsRef = (0, react_1.useRef)(constants_1.EMPTY_EVENT_HANDLERS);
  if (events) {
    eventsRef.current = events;
  }
  var _b = (0, use_websocket_1.useWebSocket)(url, optionsWithEventSource, connect),
    lastMessage = _b.lastMessage,
    readyState = _b.readyState,
    getWebSocket = _b.getWebSocket;
  (0, react_1.useEffect)(function () {
    if (lastMessage === null || lastMessage === void 0 ? void 0 : lastMessage.type) {
      Object.entries(eventsRef.current).forEach(function (_a) {
        var type = _a[0],
          handler = _a[1];
        if (type === lastMessage.type) {
          handler(lastMessage);
        }
      });
    }
  }, [lastMessage]);
  return {
    lastEvent: lastMessage,
    readyState: readyState,
    getEventSource: getWebSocket
  };
};
exports.useEventSource = useEventSource;

/***/ }),

/***/ "./node_modules/react-use-websocket/dist/lib/use-socket-io.js":
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useSocketIO = void 0;
var react_1 = __webpack_require__("./node_modules/react/index.js");
var use_websocket_1 = __webpack_require__("./node_modules/react-use-websocket/dist/lib/use-websocket.js");
var constants_1 = __webpack_require__("./node_modules/react-use-websocket/dist/lib/constants.js");
var emptyEvent = {
  type: 'empty',
  payload: null
};
var getSocketData = function getSocketData(event) {
  if (!event || !event.data) {
    return emptyEvent;
  }
  var match = event.data.match(/\[.*]/);
  if (!match) {
    return emptyEvent;
  }
  var data = JSON.parse(match);
  if (!Array.isArray(data) || !data[1]) {
    return emptyEvent;
  }
  return {
    type: data[0],
    payload: data[1]
  };
};
var useSocketIO = function useSocketIO(url, options, connect) {
  if (options === void 0) {
    options = constants_1.DEFAULT_OPTIONS;
  }
  if (connect === void 0) {
    connect = true;
  }
  var optionsWithSocketIO = (0, react_1.useMemo)(function () {
    return __assign(__assign({}, options), {
      fromSocketIO: true
    });
  }, []);
  var _a = (0, use_websocket_1.useWebSocket)(url, optionsWithSocketIO, connect),
    sendMessage = _a.sendMessage,
    sendJsonMessage = _a.sendJsonMessage,
    lastMessage = _a.lastMessage,
    readyState = _a.readyState,
    getWebSocket = _a.getWebSocket;
  var socketIOLastMessage = (0, react_1.useMemo)(function () {
    return getSocketData(lastMessage);
  }, [lastMessage]);
  return {
    sendMessage: sendMessage,
    sendJsonMessage: sendJsonMessage,
    lastMessage: socketIOLastMessage,
    lastJsonMessage: socketIOLastMessage,
    readyState: readyState,
    getWebSocket: getWebSocket
  };
};
exports.useSocketIO = useSocketIO;

/***/ }),

/***/ "./node_modules/react-use-websocket/dist/lib/use-websocket.js":
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
      label: 0,
      sent: function sent() {
        if (t[0] & 1) throw t[1];
        return t[1];
      },
      trys: [],
      ops: []
    },
    f,
    y,
    t,
    g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;
  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (_) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];
      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;
        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };
        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;
        case 7:
          op = _.ops.pop();
          _.trys.pop();
          continue;
        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }
          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }
          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }
          if (t && _.label < t[2]) {
            _.label = t[2];
            _.ops.push(op);
            break;
          }
          if (t[2]) _.ops.pop();
          _.trys.pop();
          continue;
      }
      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }
    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};
var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useWebSocket = void 0;
var react_1 = __webpack_require__("./node_modules/react/index.js");
var react_dom_1 = __webpack_require__("./node_modules/react-dom/index.js");
var constants_1 = __webpack_require__("./node_modules/react-use-websocket/dist/lib/constants.js");
var create_or_join_1 = __webpack_require__("./node_modules/react-use-websocket/dist/lib/create-or-join.js");
var get_url_1 = __webpack_require__("./node_modules/react-use-websocket/dist/lib/get-url.js");
var proxy_1 = __importDefault(__webpack_require__("./node_modules/react-use-websocket/dist/lib/proxy.js"));
var util_1 = __webpack_require__("./node_modules/react-use-websocket/dist/lib/util.js");
var useWebSocket = function useWebSocket(url, options, connect) {
  if (options === void 0) {
    options = constants_1.DEFAULT_OPTIONS;
  }
  if (connect === void 0) {
    connect = true;
  }
  var _a = (0, react_1.useState)(null),
    lastMessage = _a[0],
    setLastMessage = _a[1];
  var _b = (0, react_1.useState)({}),
    readyState = _b[0],
    setReadyState = _b[1];
  var lastJsonMessage = (0, react_1.useMemo)(function () {
    if (lastMessage) {
      try {
        return JSON.parse(lastMessage.data);
      } catch (e) {
        return constants_1.UNPARSABLE_JSON_OBJECT;
      }
    }
    return null;
  }, [lastMessage]);
  var convertedUrl = (0, react_1.useRef)(null);
  var webSocketRef = (0, react_1.useRef)(null);
  var startRef = (0, react_1.useRef)(function () {
    return void 0;
  });
  var reconnectCount = (0, react_1.useRef)(0);
  var messageQueue = (0, react_1.useRef)([]);
  var webSocketProxy = (0, react_1.useRef)(null);
  var optionsCache = (0, react_1.useRef)(options);
  optionsCache.current = options;
  var readyStateFromUrl = convertedUrl.current && readyState[convertedUrl.current] !== undefined ? readyState[convertedUrl.current] : url !== null && connect === true ? constants_1.ReadyState.CONNECTING : constants_1.ReadyState.UNINSTANTIATED;
  var stringifiedQueryParams = options.queryParams ? JSON.stringify(options.queryParams) : null;
  var sendMessage = (0, react_1.useCallback)(function (message, keep) {
    var _a;
    if (keep === void 0) {
      keep = true;
    }
    if (constants_1.isEventSourceSupported && webSocketRef.current instanceof EventSource) {
      console.warn('Unable to send a message from an eventSource');
      return;
    }
    if (((_a = webSocketRef.current) === null || _a === void 0 ? void 0 : _a.readyState) === constants_1.ReadyState.OPEN) {
      (0, util_1.assertIsWebSocket)(webSocketRef.current, optionsCache.current.skipAssert);
      webSocketRef.current.send(message);
    } else if (keep) {
      messageQueue.current.push(message);
    }
  }, []);
  var sendJsonMessage = (0, react_1.useCallback)(function (message, keep) {
    if (keep === void 0) {
      keep = true;
    }
    sendMessage(JSON.stringify(message), keep);
  }, [sendMessage]);
  var getWebSocket = (0, react_1.useCallback)(function () {
    if (optionsCache.current.share !== true || constants_1.isEventSourceSupported && webSocketRef.current instanceof EventSource) {
      return webSocketRef.current;
    }
    if (webSocketProxy.current === null && webSocketRef.current) {
      (0, util_1.assertIsWebSocket)(webSocketRef.current, optionsCache.current.skipAssert);
      webSocketProxy.current = (0, proxy_1.default)(webSocketRef.current, startRef);
    }
    return webSocketProxy.current;
  }, []);
  (0, react_1.useEffect)(function () {
    if (url !== null && connect === true) {
      var removeListeners_1;
      var expectClose_1 = false;
      var createOrJoin_1 = true;
      var start_1 = function start_1() {
        return __awaiter(void 0, void 0, void 0, function () {
          var _a, protectedSetLastMessage, protectedSetReadyState;
          return __generator(this, function (_b) {
            switch (_b.label) {
              case 0:
                _a = convertedUrl;
                return [4 /*yield*/, (0, get_url_1.getUrl)(url, optionsCache)];
              case 1:
                _a.current = _b.sent();
                protectedSetLastMessage = function protectedSetLastMessage(message) {
                  if (!expectClose_1) {
                    (0, react_dom_1.flushSync)(function () {
                      return setLastMessage(message);
                    });
                  }
                };
                protectedSetReadyState = function protectedSetReadyState(state) {
                  if (!expectClose_1) {
                    (0, react_dom_1.flushSync)(function () {
                      return setReadyState(function (prev) {
                        var _a;
                        return __assign(__assign({}, prev), convertedUrl.current && (_a = {}, _a[convertedUrl.current] = state, _a));
                      });
                    });
                  }
                };
                if (createOrJoin_1) {
                  removeListeners_1 = (0, create_or_join_1.createOrJoinSocket)(webSocketRef, convertedUrl.current, protectedSetReadyState, optionsCache, protectedSetLastMessage, startRef, reconnectCount, sendMessage);
                }
                return [2 /*return*/];
            }
          });
        });
      };

      startRef.current = function () {
        if (!expectClose_1) {
          if (webSocketProxy.current) webSocketProxy.current = null;
          removeListeners_1 === null || removeListeners_1 === void 0 ? void 0 : removeListeners_1();
          start_1();
        }
      };
      start_1();
      return function () {
        expectClose_1 = true;
        createOrJoin_1 = false;
        if (webSocketProxy.current) webSocketProxy.current = null;
        removeListeners_1 === null || removeListeners_1 === void 0 ? void 0 : removeListeners_1();
        setLastMessage(null);
      };
    } else if (url === null || connect === false) {
      reconnectCount.current = 0; // reset reconnection attempts
      setReadyState(function (prev) {
        var _a;
        return __assign(__assign({}, prev), convertedUrl.current && (_a = {}, _a[convertedUrl.current] = constants_1.ReadyState.CLOSED, _a));
      });
    }
  }, [url, connect, stringifiedQueryParams, sendMessage]);
  (0, react_1.useEffect)(function () {
    if (readyStateFromUrl === constants_1.ReadyState.OPEN) {
      messageQueue.current.splice(0).forEach(function (message) {
        sendMessage(message);
      });
    }
  }, [readyStateFromUrl]);
  return {
    sendMessage: sendMessage,
    sendJsonMessage: sendJsonMessage,
    lastMessage: lastMessage,
    lastJsonMessage: lastJsonMessage,
    readyState: readyStateFromUrl,
    getWebSocket: getWebSocket
  };
};
exports.useWebSocket = useWebSocket;

/***/ }),

/***/ "./node_modules/react-use-websocket/dist/lib/util.js":
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.resetGlobalState = exports.assertIsWebSocket = void 0;
var globals_1 = __webpack_require__("./node_modules/react-use-websocket/dist/lib/globals.js");
var manage_subscribers_1 = __webpack_require__("./node_modules/react-use-websocket/dist/lib/manage-subscribers.js");
function assertIsWebSocket(webSocketInstance, skip) {
  if (!skip && webSocketInstance instanceof WebSocket === false) throw new Error('');
}
exports.assertIsWebSocket = assertIsWebSocket;
function resetGlobalState(url) {
  (0, manage_subscribers_1.resetSubscribers)(url);
  (0, globals_1.resetWebSockets)(url);
}
exports.resetGlobalState = resetGlobalState;

/***/ }),

/***/ "./node_modules/react/cjs/react-jsx-runtime.production.min.js":
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


var f = __webpack_require__("./node_modules/react/index.js"),
  k = Symbol.for("react.element"),
  l = Symbol.for("react.fragment"),
  m = Object.prototype.hasOwnProperty,
  n = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  p = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
  };
function q(c, a, g) {
  var b,
    d = {},
    e = null,
    h = null;
  void 0 !== g && (e = "" + g);
  void 0 !== a.key && (e = "" + a.key);
  void 0 !== a.ref && (h = a.ref);
  for (b in a) m.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
  if (c && c.defaultProps) for (b in a = c.defaultProps, a) void 0 === d[b] && (d[b] = a[b]);
  return {
    $$typeof: k,
    type: c,
    key: e,
    ref: h,
    props: d,
    _owner: n.current
  };
}
exports.Fragment = l;
exports.jsx = q;
exports.jsxs = q;

/***/ }),

/***/ "./node_modules/react/cjs/react.production.min.js":
/***/ (function(__unused_webpack_module, exports) {
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


var l = Symbol.for("react.element"),
  n = Symbol.for("react.portal"),
  p = Symbol.for("react.fragment"),
  q = Symbol.for("react.strict_mode"),
  r = Symbol.for("react.profiler"),
  t = Symbol.for("react.provider"),
  u = Symbol.for("react.context"),
  v = Symbol.for("react.forward_ref"),
  w = Symbol.for("react.suspense"),
  x = Symbol.for("react.memo"),
  y = Symbol.for("react.lazy"),
  z = Symbol.iterator;
function A(a) {
  if (null === a || "object" !== typeof a) return null;
  a = z && a[z] || a["@@iterator"];
  return "function" === typeof a ? a : null;
}
var B = {
    isMounted: function isMounted() {
      return !1;
    },
    enqueueForceUpdate: function enqueueForceUpdate() {},
    enqueueReplaceState: function enqueueReplaceState() {},
    enqueueSetState: function enqueueSetState() {}
  },
  C = Object.assign,
  D = {};
function E(a, b, e) {
  this.props = a;
  this.context = b;
  this.refs = D;
  this.updater = e || B;
}
E.prototype.isReactComponent = {};
E.prototype.setState = function (a, b) {
  if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, a, b, "setState");
};
E.prototype.forceUpdate = function (a) {
  this.updater.enqueueForceUpdate(this, a, "forceUpdate");
};
function F() {}
F.prototype = E.prototype;
function G(a, b, e) {
  this.props = a;
  this.context = b;
  this.refs = D;
  this.updater = e || B;
}
var H = G.prototype = new F();
H.constructor = G;
C(H, E.prototype);
H.isPureReactComponent = !0;
var I = Array.isArray,
  J = Object.prototype.hasOwnProperty,
  K = {
    current: null
  },
  L = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
  };
function M(a, b, e) {
  var d,
    c = {},
    k = null,
    h = null;
  if (null != b) for (d in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (k = "" + b.key), b) J.call(b, d) && !L.hasOwnProperty(d) && (c[d] = b[d]);
  var g = arguments.length - 2;
  if (1 === g) c.children = e;else if (1 < g) {
    for (var f = Array(g), m = 0; m < g; m++) f[m] = arguments[m + 2];
    c.children = f;
  }
  if (a && a.defaultProps) for (d in g = a.defaultProps, g) void 0 === c[d] && (c[d] = g[d]);
  return {
    $$typeof: l,
    type: a,
    key: k,
    ref: h,
    props: c,
    _owner: K.current
  };
}
function N(a, b) {
  return {
    $$typeof: l,
    type: a.type,
    key: b,
    ref: a.ref,
    props: a.props,
    _owner: a._owner
  };
}
function O(a) {
  return "object" === typeof a && null !== a && a.$$typeof === l;
}
function escape(a) {
  var b = {
    "=": "=0",
    ":": "=2"
  };
  return "$" + a.replace(/[=:]/g, function (a) {
    return b[a];
  });
}
var P = /\/+/g;
function Q(a, b) {
  return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
}
function R(a, b, e, d, c) {
  var k = typeof a;
  if ("undefined" === k || "boolean" === k) a = null;
  var h = !1;
  if (null === a) h = !0;else switch (k) {
    case "string":
    case "number":
      h = !0;
      break;
    case "object":
      switch (a.$$typeof) {
        case l:
        case n:
          h = !0;
      }
  }
  if (h) return h = a, c = c(h), a = "" === d ? "." + Q(h, 0) : d, I(c) ? (e = "", null != a && (e = a.replace(P, "$&/") + "/"), R(c, b, e, "", function (a) {
    return a;
  })) : null != c && (O(c) && (c = N(c, e + (!c.key || h && h.key === c.key ? "" : ("" + c.key).replace(P, "$&/") + "/") + a)), b.push(c)), 1;
  h = 0;
  d = "" === d ? "." : d + ":";
  if (I(a)) for (var g = 0; g < a.length; g++) {
    k = a[g];
    var f = d + Q(k, g);
    h += R(k, b, e, f, c);
  } else if (f = A(a), "function" === typeof f) for (a = f.call(a), g = 0; !(k = a.next()).done;) k = k.value, f = d + Q(k, g++), h += R(k, b, e, f, c);else if ("object" === k) throw b = String(a), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead.");
  return h;
}
function S(a, b, e) {
  if (null == a) return a;
  var d = [],
    c = 0;
  R(a, d, "", "", function (a) {
    return b.call(e, a, c++);
  });
  return d;
}
function T(a) {
  if (-1 === a._status) {
    var b = a._result;
    b = b();
    b.then(function (b) {
      if (0 === a._status || -1 === a._status) a._status = 1, a._result = b;
    }, function (b) {
      if (0 === a._status || -1 === a._status) a._status = 2, a._result = b;
    });
    -1 === a._status && (a._status = 0, a._result = b);
  }
  if (1 === a._status) return a._result.default;
  throw a._result;
}
var U = {
    current: null
  },
  V = {
    transition: null
  },
  W = {
    ReactCurrentDispatcher: U,
    ReactCurrentBatchConfig: V,
    ReactCurrentOwner: K
  };
exports.Children = {
  map: S,
  forEach: function forEach(a, b, e) {
    S(a, function () {
      b.apply(this, arguments);
    }, e);
  },
  count: function count(a) {
    var b = 0;
    S(a, function () {
      b++;
    });
    return b;
  },
  toArray: function toArray(a) {
    return S(a, function (a) {
      return a;
    }) || [];
  },
  only: function only(a) {
    if (!O(a)) throw Error("React.Children.only expected to receive a single React element child.");
    return a;
  }
};
exports.Component = E;
exports.Fragment = p;
exports.Profiler = r;
exports.PureComponent = G;
exports.StrictMode = q;
exports.Suspense = w;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W;
exports.cloneElement = function (a, b, e) {
  if (null === a || void 0 === a) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
  var d = C({}, a.props),
    c = a.key,
    k = a.ref,
    h = a._owner;
  if (null != b) {
    void 0 !== b.ref && (k = b.ref, h = K.current);
    void 0 !== b.key && (c = "" + b.key);
    if (a.type && a.type.defaultProps) var g = a.type.defaultProps;
    for (f in b) J.call(b, f) && !L.hasOwnProperty(f) && (d[f] = void 0 === b[f] && void 0 !== g ? g[f] : b[f]);
  }
  var f = arguments.length - 2;
  if (1 === f) d.children = e;else if (1 < f) {
    g = Array(f);
    for (var m = 0; m < f; m++) g[m] = arguments[m + 2];
    d.children = g;
  }
  return {
    $$typeof: l,
    type: a.type,
    key: c,
    ref: k,
    props: d,
    _owner: h
  };
};
exports.createContext = function (a) {
  a = {
    $$typeof: u,
    _currentValue: a,
    _currentValue2: a,
    _threadCount: 0,
    Provider: null,
    Consumer: null,
    _defaultValue: null,
    _globalName: null
  };
  a.Provider = {
    $$typeof: t,
    _context: a
  };
  return a.Consumer = a;
};
exports.createElement = M;
exports.createFactory = function (a) {
  var b = M.bind(null, a);
  b.type = a;
  return b;
};
exports.createRef = function () {
  return {
    current: null
  };
};
exports.forwardRef = function (a) {
  return {
    $$typeof: v,
    render: a
  };
};
exports.isValidElement = O;
exports.lazy = function (a) {
  return {
    $$typeof: y,
    _payload: {
      _status: -1,
      _result: a
    },
    _init: T
  };
};
exports.memo = function (a, b) {
  return {
    $$typeof: x,
    type: a,
    compare: void 0 === b ? null : b
  };
};
exports.startTransition = function (a) {
  var b = V.transition;
  V.transition = {};
  try {
    a();
  } finally {
    V.transition = b;
  }
};
exports.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
exports.useCallback = function (a, b) {
  return U.current.useCallback(a, b);
};
exports.useContext = function (a) {
  return U.current.useContext(a);
};
exports.useDebugValue = function () {};
exports.useDeferredValue = function (a) {
  return U.current.useDeferredValue(a);
};
exports.useEffect = function (a, b) {
  return U.current.useEffect(a, b);
};
exports.useId = function () {
  return U.current.useId();
};
exports.useImperativeHandle = function (a, b, e) {
  return U.current.useImperativeHandle(a, b, e);
};
exports.useInsertionEffect = function (a, b) {
  return U.current.useInsertionEffect(a, b);
};
exports.useLayoutEffect = function (a, b) {
  return U.current.useLayoutEffect(a, b);
};
exports.useMemo = function (a, b) {
  return U.current.useMemo(a, b);
};
exports.useReducer = function (a, b, e) {
  return U.current.useReducer(a, b, e);
};
exports.useRef = function (a) {
  return U.current.useRef(a);
};
exports.useState = function (a) {
  return U.current.useState(a);
};
exports.useSyncExternalStore = function (a, b, e) {
  return U.current.useSyncExternalStore(a, b, e);
};
exports.useTransition = function () {
  return U.current.useTransition();
};
exports.version = "18.2.0";

/***/ }),

/***/ "./node_modules/react/index.js":
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


{
  module.exports = __webpack_require__("./node_modules/react/cjs/react.production.min.js");
}

/***/ }),

/***/ "./node_modules/react/jsx-runtime.js":
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


{
  module.exports = __webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js");
}

/***/ }),

/***/ "./node_modules/scheduler/cjs/scheduler.production.min.js":
/***/ (function(__unused_webpack_module, exports) {
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


function f(a, b) {
  var c = a.length;
  a.push(b);
  a: for (; 0 < c;) {
    var d = c - 1 >>> 1,
      e = a[d];
    if (0 < g(e, b)) a[d] = b, a[c] = e, c = d;else break a;
  }
}
function h(a) {
  return 0 === a.length ? null : a[0];
}
function k(a) {
  if (0 === a.length) return null;
  var b = a[0],
    c = a.pop();
  if (c !== b) {
    a[0] = c;
    a: for (var d = 0, e = a.length, w = e >>> 1; d < w;) {
      var m = 2 * (d + 1) - 1,
        C = a[m],
        n = m + 1,
        x = a[n];
      if (0 > g(C, c)) n < e && 0 > g(x, C) ? (a[d] = x, a[n] = c, d = n) : (a[d] = C, a[m] = c, d = m);else if (n < e && 0 > g(x, c)) a[d] = x, a[n] = c, d = n;else break a;
    }
  }
  return b;
}
function g(a, b) {
  var c = a.sortIndex - b.sortIndex;
  return 0 !== c ? c : a.id - b.id;
}
if ("object" === typeof performance && "function" === typeof performance.now) {
  var l = performance;
  exports.unstable_now = function () {
    return l.now();
  };
} else {
  var p = Date,
    q = p.now();
  exports.unstable_now = function () {
    return p.now() - q;
  };
}
var r = [],
  t = [],
  u = 1,
  v = null,
  y = 3,
  z = !1,
  A = !1,
  B = !1,
  D = "function" === typeof setTimeout ? setTimeout : null,
  E = "function" === typeof clearTimeout ? clearTimeout : null,
  F = "undefined" !== typeof setImmediate ? setImmediate : null;
"undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
function G(a) {
  for (var b = h(t); null !== b;) {
    if (null === b.callback) k(t);else if (b.startTime <= a) k(t), b.sortIndex = b.expirationTime, f(r, b);else break;
    b = h(t);
  }
}
function H(a) {
  B = !1;
  G(a);
  if (!A) if (null !== h(r)) A = !0, I(J);else {
    var b = h(t);
    null !== b && K(H, b.startTime - a);
  }
}
function J(a, b) {
  A = !1;
  B && (B = !1, E(L), L = -1);
  z = !0;
  var c = y;
  try {
    G(b);
    for (v = h(r); null !== v && (!(v.expirationTime > b) || a && !M());) {
      var d = v.callback;
      if ("function" === typeof d) {
        v.callback = null;
        y = v.priorityLevel;
        var e = d(v.expirationTime <= b);
        b = exports.unstable_now();
        "function" === typeof e ? v.callback = e : v === h(r) && k(r);
        G(b);
      } else k(r);
      v = h(r);
    }
    if (null !== v) var w = !0;else {
      var m = h(t);
      null !== m && K(H, m.startTime - b);
      w = !1;
    }
    return w;
  } finally {
    v = null, y = c, z = !1;
  }
}
var N = !1,
  O = null,
  L = -1,
  P = 5,
  Q = -1;
function M() {
  return exports.unstable_now() - Q < P ? !1 : !0;
}
function R() {
  if (null !== O) {
    var a = exports.unstable_now();
    Q = a;
    var b = !0;
    try {
      b = O(!0, a);
    } finally {
      b ? S() : (N = !1, O = null);
    }
  } else N = !1;
}
var S;
if ("function" === typeof F) S = function S() {
  F(R);
};else if ("undefined" !== typeof MessageChannel) {
  var T = new MessageChannel(),
    U = T.port2;
  T.port1.onmessage = R;
  S = function S() {
    U.postMessage(null);
  };
} else S = function S() {
  D(R, 0);
};
function I(a) {
  O = a;
  N || (N = !0, S());
}
function K(a, b) {
  L = D(function () {
    a(exports.unstable_now());
  }, b);
}
exports.unstable_IdlePriority = 5;
exports.unstable_ImmediatePriority = 1;
exports.unstable_LowPriority = 4;
exports.unstable_NormalPriority = 3;
exports.unstable_Profiling = null;
exports.unstable_UserBlockingPriority = 2;
exports.unstable_cancelCallback = function (a) {
  a.callback = null;
};
exports.unstable_continueExecution = function () {
  A || z || (A = !0, I(J));
};
exports.unstable_forceFrameRate = function (a) {
  0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P = 0 < a ? Math.floor(1E3 / a) : 5;
};
exports.unstable_getCurrentPriorityLevel = function () {
  return y;
};
exports.unstable_getFirstCallbackNode = function () {
  return h(r);
};
exports.unstable_next = function (a) {
  switch (y) {
    case 1:
    case 2:
    case 3:
      var b = 3;
      break;
    default:
      b = y;
  }
  var c = y;
  y = b;
  try {
    return a();
  } finally {
    y = c;
  }
};
exports.unstable_pauseExecution = function () {};
exports.unstable_requestPaint = function () {};
exports.unstable_runWithPriority = function (a, b) {
  switch (a) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      break;
    default:
      a = 3;
  }
  var c = y;
  y = a;
  try {
    return b();
  } finally {
    y = c;
  }
};
exports.unstable_scheduleCallback = function (a, b, c) {
  var d = exports.unstable_now();
  "object" === typeof c && null !== c ? (c = c.delay, c = "number" === typeof c && 0 < c ? d + c : d) : c = d;
  switch (a) {
    case 1:
      var e = -1;
      break;
    case 2:
      e = 250;
      break;
    case 5:
      e = 1073741823;
      break;
    case 4:
      e = 1E4;
      break;
    default:
      e = 5E3;
  }
  e = c + e;
  a = {
    id: u++,
    callback: b,
    priorityLevel: a,
    startTime: c,
    expirationTime: e,
    sortIndex: -1
  };
  c > d ? (a.sortIndex = c, f(t, a), null === h(r) && a === h(t) && (B ? (E(L), L = -1) : B = !0, K(H, c - d))) : (a.sortIndex = e, f(r, a), A || z || (A = !0, I(J)));
  return a;
};
exports.unstable_shouldYield = M;
exports.unstable_wrapCallback = function (a) {
  var b = y;
  return function () {
    var c = y;
    y = b;
    try {
      return a.apply(this, arguments);
    } finally {
      y = c;
    }
  };
};

/***/ }),

/***/ "./node_modules/scheduler/index.js":
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


{
  module.exports = __webpack_require__("./node_modules/scheduler/cjs/scheduler.production.min.js");
}

/***/ }),

/***/ "./node_modules/shallowequal/index.js":
/***/ (function(module) {

//

module.exports = function shallowEqual(objA, objB, compare, compareContext) {
  var ret = compare ? compare.call(compareContext, objA, objB) : void 0;
  if (ret !== void 0) {
    return !!ret;
  }
  if (objA === objB) {
    return true;
  }
  if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
    return false;
  }
  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);
  if (keysA.length !== keysB.length) {
    return false;
  }
  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);

  // Test for A's keys different from B.
  for (var idx = 0; idx < keysA.length; idx++) {
    var key = keysA[idx];
    if (!bHasOwnProperty(key)) {
      return false;
    }
    var valueA = objA[key];
    var valueB = objB[key];
    ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;
    if (ret === false || ret === void 0 && valueA !== valueB) {
      return false;
    }
  }
  return true;
};

/***/ }),

/***/ "./node_modules/styled-components/dist/styled-components.browser.esm.js":
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServerStyleSheet": function() { return /* binding */ Ue; },
/* harmony export */   "StyleSheetConsumer": function() { return /* binding */ le; },
/* harmony export */   "StyleSheetContext": function() { return /* binding */ ue; },
/* harmony export */   "StyleSheetManager": function() { return /* binding */ ye; },
/* harmony export */   "ThemeConsumer": function() { return /* binding */ Le; },
/* harmony export */   "ThemeContext": function() { return /* binding */ ze; },
/* harmony export */   "ThemeProvider": function() { return /* binding */ Ge; },
/* harmony export */   "__PRIVATE__": function() { return /* binding */ Ze; },
/* harmony export */   "createGlobalStyle": function() { return /* binding */ $e; },
/* harmony export */   "css": function() { return /* binding */ Ae; },
/* harmony export */   "isStyledComponent": function() { return /* binding */ N; },
/* harmony export */   "keyframes": function() { return /* binding */ We; },
/* harmony export */   "useTheme": function() { return /* binding */ Xe; },
/* harmony export */   "version": function() { return /* binding */ C; },
/* harmony export */   "withTheme": function() { return /* binding */ Je; }
/* harmony export */ });
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react-is/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var shallowequal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/shallowequal/index.js");
/* harmony import */ var shallowequal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(shallowequal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_stylis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@emotion/stylis/dist/stylis.browser.esm.js");
/* harmony import */ var _emotion_unitless__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@emotion/unitless/dist/unitless.browser.esm.js");
/* harmony import */ var _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6__);







function v() {
  return (v = Object.assign || function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }).apply(this, arguments);
}
var g = function g(e, t) {
    for (var n = [e[0]], r = 0, o = t.length; r < o; r += 1) n.push(t[r], e[r + 1]);
    return n;
  },
  S = function S(t) {
    return null !== t && "object" == typeof t && "[object Object]" === (t.toString ? t.toString() : Object.prototype.toString.call(t)) && !(0, react_is__WEBPACK_IMPORTED_MODULE_0__.typeOf)(t);
  },
  w = Object.freeze([]),
  E = Object.freeze({});
function b(e) {
  return "function" == typeof e;
}
function _(e) {
  return  e.displayName || e.name || "Component";
}
function N(e) {
  return e && "string" == typeof e.styledComponentId;
}
var A = "undefined" != typeof process && (({"NODE_ENV":"production","PUBLIC_URL":"","WDS_SOCKET_HOST":undefined,"WDS_SOCKET_PATH":undefined,"WDS_SOCKET_PORT":undefined,"FAST_REFRESH":true}).REACT_APP_SC_ATTR || ({"NODE_ENV":"production","PUBLIC_URL":"","WDS_SOCKET_HOST":undefined,"WDS_SOCKET_PATH":undefined,"WDS_SOCKET_PORT":undefined,"FAST_REFRESH":true}).SC_ATTR) || "data-styled",
  C = "5.2.1",
  I = "undefined" != typeof window && "HTMLElement" in window,
  P = Boolean("boolean" == typeof SC_DISABLE_SPEEDY ? SC_DISABLE_SPEEDY : "undefined" != typeof process && void 0 !== ({"NODE_ENV":"production","PUBLIC_URL":"","WDS_SOCKET_HOST":undefined,"WDS_SOCKET_PATH":undefined,"WDS_SOCKET_PORT":undefined,"FAST_REFRESH":true}).REACT_APP_SC_DISABLE_SPEEDY && "" !== ({"NODE_ENV":"production","PUBLIC_URL":"","WDS_SOCKET_HOST":undefined,"WDS_SOCKET_PATH":undefined,"WDS_SOCKET_PORT":undefined,"FAST_REFRESH":true}).REACT_APP_SC_DISABLE_SPEEDY ? "false" !== ({"NODE_ENV":"production","PUBLIC_URL":"","WDS_SOCKET_HOST":undefined,"WDS_SOCKET_PATH":undefined,"WDS_SOCKET_PORT":undefined,"FAST_REFRESH":true}).REACT_APP_SC_DISABLE_SPEEDY && ({"NODE_ENV":"production","PUBLIC_URL":"","WDS_SOCKET_HOST":undefined,"WDS_SOCKET_PATH":undefined,"WDS_SOCKET_PORT":undefined,"FAST_REFRESH":true}).REACT_APP_SC_DISABLE_SPEEDY : "undefined" != typeof process && void 0 !== ({"NODE_ENV":"production","PUBLIC_URL":"","WDS_SOCKET_HOST":undefined,"WDS_SOCKET_PATH":undefined,"WDS_SOCKET_PORT":undefined,"FAST_REFRESH":true}).SC_DISABLE_SPEEDY && "" !== ({"NODE_ENV":"production","PUBLIC_URL":"","WDS_SOCKET_HOST":undefined,"WDS_SOCKET_PATH":undefined,"WDS_SOCKET_PORT":undefined,"FAST_REFRESH":true}).SC_DISABLE_SPEEDY ? "false" !== ({"NODE_ENV":"production","PUBLIC_URL":"","WDS_SOCKET_HOST":undefined,"WDS_SOCKET_PATH":undefined,"WDS_SOCKET_PORT":undefined,"FAST_REFRESH":true}).SC_DISABLE_SPEEDY && ({"NODE_ENV":"production","PUBLIC_URL":"","WDS_SOCKET_HOST":undefined,"WDS_SOCKET_PATH":undefined,"WDS_SOCKET_PORT":undefined,"FAST_REFRESH":true}).SC_DISABLE_SPEEDY : "production" !== "production"),
  O = {};
function j(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
  throw  new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (n.length > 0 ? " Args: " + n.join(", ") : "")) ;
}
var T = function () {
    function e(e) {
      this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = e;
    }
    var t = e.prototype;
    return t.indexOfGroup = function (e) {
      for (var t = 0, n = 0; n < e; n++) t += this.groupSizes[n];
      return t;
    }, t.insertRules = function (e, t) {
      if (e >= this.groupSizes.length) {
        for (var n = this.groupSizes, r = n.length, o = r; e >= o;) (o <<= 1) < 0 && j(16, "" + e);
        this.groupSizes = new Uint32Array(o), this.groupSizes.set(n), this.length = o;
        for (var s = r; s < o; s++) this.groupSizes[s] = 0;
      }
      for (var i = this.indexOfGroup(e + 1), a = 0, c = t.length; a < c; a++) this.tag.insertRule(i, t[a]) && (this.groupSizes[e]++, i++);
    }, t.clearGroup = function (e) {
      if (e < this.length) {
        var t = this.groupSizes[e],
          n = this.indexOfGroup(e),
          r = n + t;
        this.groupSizes[e] = 0;
        for (var o = n; o < r; o++) this.tag.deleteRule(n);
      }
    }, t.getGroup = function (e) {
      var t = "";
      if (e >= this.length || 0 === this.groupSizes[e]) return t;
      for (var n = this.groupSizes[e], r = this.indexOfGroup(e), o = r + n, s = r; s < o; s++) t += this.tag.getRule(s) + "/*!sc*/\n";
      return t;
    }, e;
  }(),
  k = new Map(),
  x = new Map(),
  V = 1,
  B = function B(e) {
    if (k.has(e)) return k.get(e);
    for (; x.has(V);) V++;
    var t = V++;
    return  k.set(e, t), x.set(t, e), t;
  },
  M = function M(e) {
    return x.get(e);
  },
  z = function z(e, t) {
    k.set(e, t), x.set(t, e);
  },
  L = "style[" + A + '][data-styled-version="5.2.1"]',
  G = new RegExp("^" + A + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),
  F = function F(e, t, n) {
    for (var r, o = n.split(","), s = 0, i = o.length; s < i; s++) (r = o[s]) && e.registerName(t, r);
  },
  Y = function Y(e, t) {
    for (var n = t.innerHTML.split("/*!sc*/\n"), r = [], o = 0, s = n.length; o < s; o++) {
      var i = n[o].trim();
      if (i) {
        var a = i.match(G);
        if (a) {
          var c = 0 | parseInt(a[1], 10),
            u = a[2];
          0 !== c && (z(u, c), F(e, u, a[3]), e.getTag().insertRules(c, r)), r.length = 0;
        } else r.push(i);
      }
    }
  },
  q = function q() {
    return  __webpack_require__.nc ;
  },
  H = function H(e) {
    var t = document.head,
      n = e || t,
      r = document.createElement("style"),
      o = function (e) {
        for (var t = e.childNodes, n = t.length; n >= 0; n--) {
          var r = t[n];
          if (r && 1 === r.nodeType && r.hasAttribute(A)) return r;
        }
      }(n),
      s = void 0 !== o ? o.nextSibling : null;
    r.setAttribute(A, "active"), r.setAttribute("data-styled-version", "5.2.1");
    var i = q();
    return i && r.setAttribute("nonce", i), n.insertBefore(r, s), r;
  },
  $ = function () {
    function e(e) {
      var t = this.element = H(e);
      t.appendChild(document.createTextNode("")), this.sheet = function (e) {
        if (e.sheet) return e.sheet;
        for (var t = document.styleSheets, n = 0, r = t.length; n < r; n++) {
          var o = t[n];
          if (o.ownerNode === e) return o;
        }
        j(17);
      }(t), this.length = 0;
    }
    var t = e.prototype;
    return t.insertRule = function (e, t) {
      try {
        return this.sheet.insertRule(t, e), this.length++, !0;
      } catch (e) {
        return !1;
      }
    }, t.deleteRule = function (e) {
      this.sheet.deleteRule(e), this.length--;
    }, t.getRule = function (e) {
      var t = this.sheet.cssRules[e];
      return void 0 !== t && "string" == typeof t.cssText ? t.cssText : "";
    }, e;
  }(),
  W = function () {
    function e(e) {
      var t = this.element = H(e);
      this.nodes = t.childNodes, this.length = 0;
    }
    var t = e.prototype;
    return t.insertRule = function (e, t) {
      if (e <= this.length && e >= 0) {
        var n = document.createTextNode(t),
          r = this.nodes[e];
        return this.element.insertBefore(n, r || null), this.length++, !0;
      }
      return !1;
    }, t.deleteRule = function (e) {
      this.element.removeChild(this.nodes[e]), this.length--;
    }, t.getRule = function (e) {
      return e < this.length ? this.nodes[e].textContent : "";
    }, e;
  }(),
  U = function () {
    function e(e) {
      this.rules = [], this.length = 0;
    }
    var t = e.prototype;
    return t.insertRule = function (e, t) {
      return e <= this.length && (this.rules.splice(e, 0, t), this.length++, !0);
    }, t.deleteRule = function (e) {
      this.rules.splice(e, 1), this.length--;
    }, t.getRule = function (e) {
      return e < this.length ? this.rules[e] : "";
    }, e;
  }(),
  J = I,
  X = {
    isServer: !I,
    useCSSOMInjection: !P
  },
  Z = function () {
    function e(e, t, n) {
      void 0 === e && (e = E), void 0 === t && (t = {}), this.options = v({}, X, {}, e), this.gs = t, this.names = new Map(n), !this.options.isServer && I && J && (J = !1, function (e) {
        for (var t = document.querySelectorAll(L), n = 0, r = t.length; n < r; n++) {
          var o = t[n];
          o && "active" !== o.getAttribute(A) && (Y(e, o), o.parentNode && o.parentNode.removeChild(o));
        }
      }(this));
    }
    e.registerId = function (e) {
      return B(e);
    };
    var t = e.prototype;
    return t.reconstructWithOptions = function (t, n) {
      return void 0 === n && (n = !0), new e(v({}, this.options, {}, t), this.gs, n && this.names || void 0);
    }, t.allocateGSInstance = function (e) {
      return this.gs[e] = (this.gs[e] || 0) + 1;
    }, t.getTag = function () {
      return this.tag || (this.tag = (n = (t = this.options).isServer, r = t.useCSSOMInjection, o = t.target, e = n ? new U(o) : r ? new $(o) : new W(o), new T(e)));
      var e, t, n, r, o;
    }, t.hasNameForId = function (e, t) {
      return this.names.has(e) && this.names.get(e).has(t);
    }, t.registerName = function (e, t) {
      if (B(e), this.names.has(e)) this.names.get(e).add(t);else {
        var n = new Set();
        n.add(t), this.names.set(e, n);
      }
    }, t.insertRules = function (e, t, n) {
      this.registerName(e, t), this.getTag().insertRules(B(e), n);
    }, t.clearNames = function (e) {
      this.names.has(e) && this.names.get(e).clear();
    }, t.clearRules = function (e) {
      this.getTag().clearGroup(B(e)), this.clearNames(e);
    }, t.clearTag = function () {
      this.tag = void 0;
    }, t.toString = function () {
      return function (e) {
        for (var t = e.getTag(), n = t.length, r = "", o = 0; o < n; o++) {
          var s = M(o);
          if (void 0 !== s) {
            var i = e.names.get(s),
              a = t.getGroup(o);
            if (void 0 !== i && 0 !== a.length) {
              var c = A + ".g" + o + '[id="' + s + '"]',
                u = "";
              void 0 !== i && i.forEach(function (e) {
                e.length > 0 && (u += e + ",");
              }), r += "" + a + c + '{content:"' + u + '"}/*!sc*/\n';
            }
          }
        }
        return r;
      }(this);
    }, e;
  }(),
  K = /(a)(d)/gi,
  Q = function Q(e) {
    return String.fromCharCode(e + (e > 25 ? 39 : 97));
  };
function ee(e) {
  var t,
    n = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0) n = Q(t % 52) + n;
  return (Q(t % 52) + n).replace(K, "$1-$2");
}
var te = function te(e, t) {
    for (var n = t.length; n;) e = 33 * e ^ t.charCodeAt(--n);
    return e;
  },
  ne = function ne(e) {
    return te(5381, e);
  };
function re(e) {
  for (var t = 0; t < e.length; t += 1) {
    var n = e[t];
    if (b(n) && !N(n)) return !1;
  }
  return !0;
}
var oe = ne("5.2.1"),
  se = function () {
    function e(e, t, n) {
      this.rules = e, this.staticRulesId = "", this.isStatic =  (void 0 === n || n.isStatic) && re(e), this.componentId = t, this.baseHash = te(oe, t), this.baseStyle = n, Z.registerId(t);
    }
    return e.prototype.generateAndInjectStyles = function (e, t, n) {
      var r = this.componentId,
        o = [];
      if (this.baseStyle && o.push(this.baseStyle.generateAndInjectStyles(e, t, n)), this.isStatic && !n.hash) {
        if (this.staticRulesId && t.hasNameForId(r, this.staticRulesId)) o.push(this.staticRulesId);else {
          var s = Ne(this.rules, e, t, n).join(""),
            i = ee(te(this.baseHash, s.length) >>> 0);
          if (!t.hasNameForId(r, i)) {
            var a = n(s, "." + i, void 0, r);
            t.insertRules(r, i, a);
          }
          o.push(i), this.staticRulesId = i;
        }
      } else {
        for (var c = this.rules.length, u = te(this.baseHash, n.hash), l = "", d = 0; d < c; d++) {
          var h = this.rules[d];
          if ("string" == typeof h) l += h;else if (h) {
            var p = Ne(h, e, t, n),
              f = Array.isArray(p) ? p.join("") : p;
            u = te(u, f + d), l += f;
          }
        }
        if (l) {
          var m = ee(u >>> 0);
          if (!t.hasNameForId(r, m)) {
            var y = n(l, "." + m, void 0, r);
            t.insertRules(r, m, y);
          }
          o.push(m);
        }
      }
      return o.join(" ");
    }, e;
  }(),
  ie = /^\s*\/\/.*$/gm,
  ae = [":", "[", ".", "#"];
function ce(e) {
  var t,
    n,
    r,
    o,
    s = void 0 === e ? E : e,
    i = s.options,
    a = void 0 === i ? E : i,
    c = s.plugins,
    u = void 0 === c ? w : c,
    l = new _emotion_stylis__WEBPACK_IMPORTED_MODULE_3__["default"](a),
    d = [],
    h = function (e) {
      function t(t) {
        if (t) try {
          e(t + "}");
        } catch (e) {}
      }
      return function (n, r, o, s, i, a, c, u, l, d) {
        switch (n) {
          case 1:
            if (0 === l && 64 === r.charCodeAt(0)) return e(r + ";"), "";
            break;
          case 2:
            if (0 === u) return r + "/*|*/";
            break;
          case 3:
            switch (u) {
              case 102:
              case 112:
                return e(o[0] + r), "";
              default:
                return r + (0 === d ? "/*|*/" : "");
            }
          case -2:
            r.split("/*|*/}").forEach(t);
        }
      };
    }(function (e) {
      d.push(e);
    }),
    f = function f(e, r, s) {
      return 0 === r && ae.includes(s[n.length]) || s.match(o) ? e : "." + t;
    };
  function m(e, s, i, a) {
    void 0 === a && (a = "&");
    var c = e.replace(ie, ""),
      u = s && i ? i + " " + s + " { " + c + " }" : c;
    return t = a, n = s, r = new RegExp("\\" + n + "\\b", "g"), o = new RegExp("(\\" + n + "\\b){2,}"), l(i || !s ? "" : s, u);
  }
  return l.use([].concat(u, [function (e, t, o) {
    2 === e && o.length && o[0].lastIndexOf(n) > 0 && (o[0] = o[0].replace(r, f));
  }, h, function (e) {
    if (-2 === e) {
      var t = d;
      return d = [], t;
    }
  }])), m.hash = u.length ? u.reduce(function (e, t) {
    return t.name || j(15), te(e, t.name);
  }, 5381).toString() : "", m;
}
var ue = react__WEBPACK_IMPORTED_MODULE_1__.createContext(),
  le = ue.Consumer,
  de = react__WEBPACK_IMPORTED_MODULE_1__.createContext(),
  he = (de.Consumer, new Z()),
  pe = ce();
function fe() {
  return (0, react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ue) || he;
}
function me() {
  return (0, react__WEBPACK_IMPORTED_MODULE_1__.useContext)(de) || pe;
}
function ye(e) {
  var t = (0, react__WEBPACK_IMPORTED_MODULE_1__.useState)(e.stylisPlugins),
    n = t[0],
    s = t[1],
    c = fe(),
    u = (0, react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () {
      var t = c;
      return e.sheet ? t = e.sheet : e.target && (t = t.reconstructWithOptions({
        target: e.target
      }, !1)), e.disableCSSOMInjection && (t = t.reconstructWithOptions({
        useCSSOMInjection: !1
      })), t;
    }, [e.disableCSSOMInjection, e.sheet, e.target]),
    l = (0, react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () {
      return ce({
        options: {
          prefix: !e.disableVendorPrefixes
        },
        plugins: n
      });
    }, [e.disableVendorPrefixes, n]);
  return (0, react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    shallowequal__WEBPACK_IMPORTED_MODULE_2___default()(n, e.stylisPlugins) || s(e.stylisPlugins);
  }, [e.stylisPlugins]), react__WEBPACK_IMPORTED_MODULE_1__.createElement(ue.Provider, {
    value: u
  }, react__WEBPACK_IMPORTED_MODULE_1__.createElement(de.Provider, {
    value: l
  },  e.children));
}
var ve = function () {
    function e(e, t) {
      var n = this;
      this.inject = function (e, t) {
        void 0 === t && (t = pe);
        var r = n.name + t.hash;
        e.hasNameForId(n.id, r) || e.insertRules(n.id, r, t(n.rules, r, "@keyframes"));
      }, this.toString = function () {
        return j(12, String(n.name));
      }, this.name = e, this.id = "sc-keyframes-" + e, this.rules = t;
    }
    return e.prototype.getName = function (e) {
      return void 0 === e && (e = pe), this.name + e.hash;
    }, e;
  }(),
  ge = /([A-Z])/,
  Se = /([A-Z])/g,
  we = /^ms-/,
  Ee = function Ee(e) {
    return "-" + e.toLowerCase();
  };
function be(e) {
  return ge.test(e) ? e.replace(Se, Ee).replace(we, "-ms-") : e;
}
var _e = function _e(e) {
  return null == e || !1 === e || "" === e;
};
function Ne(e, n, r, o) {
  if (Array.isArray(e)) {
    for (var s, i = [], a = 0, c = e.length; a < c; a += 1) "" !== (s = Ne(e[a], n, r, o)) && (Array.isArray(s) ? i.push.apply(i, s) : i.push(s));
    return i;
  }
  if (_e(e)) return "";
  if (N(e)) return "." + e.styledComponentId;
  if (b(e)) {
    if ("function" != typeof (l = e) || l.prototype && l.prototype.isReactComponent || !n) return e;
    var u = e(n);
    return  Ne(u, n, r, o);
  }
  var l;
  return e instanceof ve ? r ? (e.inject(r, o), e.getName(o)) : e : S(e) ? function e(t, n) {
    var r,
      o,
      s = [];
    for (var i in t) t.hasOwnProperty(i) && !_e(t[i]) && (S(t[i]) ? s.push.apply(s, e(t[i], i)) : b(t[i]) ? s.push(be(i) + ":", t[i], ";") : s.push(be(i) + ": " + (r = i, null == (o = t[i]) || "boolean" == typeof o || "" === o ? "" : "number" != typeof o || 0 === o || r in _emotion_unitless__WEBPACK_IMPORTED_MODULE_4__["default"] ? String(o).trim() : o + "px") + ";"));
    return n ? [n + " {"].concat(s, ["}"]) : s;
  }(e) : e.toString();
}
function Ae(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
  return b(e) || S(e) ? Ne(g(w, [e].concat(n))) : 0 === n.length && 1 === e.length && "string" == typeof e[0] ? e : Ne(g(e, n));
}
var Oe = function Oe(e, t, n) {
    return void 0 === n && (n = E), e.theme !== n.theme && e.theme || t || n.theme;
  },
  Re = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
  De = /(^-|-$)/g;
function je(e) {
  return e.replace(Re, "-").replace(De, "");
}
var Te = function Te(e) {
  return ee(ne(e) >>> 0);
};
function ke(e) {
  return "string" == typeof e && ( true );
}
var xe = function xe(e) {
    return "function" == typeof e || "object" == typeof e && null !== e && !Array.isArray(e);
  },
  Ve = function Ve(e) {
    return "__proto__" !== e && "constructor" !== e && "prototype" !== e;
  };
function Be(e, t, n) {
  var r = e[n];
  xe(t) && xe(r) ? Me(r, t) : e[n] = t;
}
function Me(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
  for (var o = 0, s = n; o < s.length; o++) {
    var i = s[o];
    if (xe(i)) for (var a in i) Ve(a) && Be(e, i[a], a);
  }
  return e;
}
var ze = react__WEBPACK_IMPORTED_MODULE_1__.createContext(),
  Le = ze.Consumer;
function Ge(e) {
  var t = (0, react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ze),
    n = (0, react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () {
      return function (e, t) {
        if (!e) return j(14);
        if (b(e)) {
          var n = e(t);
          return  n ;
        }
        return Array.isArray(e) || "object" != typeof e ? j(8) : t ? v({}, t, {}, e) : e;
      }(e.theme, t);
    }, [e.theme, t]);
  return e.children ? react__WEBPACK_IMPORTED_MODULE_1__.createElement(ze.Provider, {
    value: n
  }, e.children) : null;
}
var Fe = {};
function Ye(e, t, n) {
  var o = N(e),
    i = !ke(e),
    a = t.attrs,
    c = void 0 === a ? w : a,
    d = t.componentId,
    h = void 0 === d ? function (e, t) {
      var n = "string" != typeof e ? "sc" : je(e);
      Fe[n] = (Fe[n] || 0) + 1;
      var r = n + "-" + Te("5.2.1" + n + Fe[n]);
      return t ? t + "-" + r : r;
    }(t.displayName, t.parentComponentId) : d,
    p = t.displayName,
    f = void 0 === p ? function (e) {
      return ke(e) ? "styled." + e : "Styled(" + _(e) + ")";
    }(e) : p,
    g = t.displayName && t.componentId ? je(t.displayName) + "-" + t.componentId : t.componentId || h,
    S = o && e.attrs ? Array.prototype.concat(e.attrs, c).filter(Boolean) : c,
    A = t.shouldForwardProp;
  o && e.shouldForwardProp && (A = t.shouldForwardProp ? function (n, r) {
    return e.shouldForwardProp(n, r) && t.shouldForwardProp(n, r);
  } : e.shouldForwardProp);
  var C,
    I = new se(n, g, o ? e.componentStyle : void 0),
    P = I.isStatic && 0 === c.length,
    O = function O(e, t) {
      return function (e, t, n, r) {
        var o = e.attrs,
          i = e.componentStyle,
          a = e.defaultProps,
          c = e.foldedComponentIds,
          d = e.shouldForwardProp,
          h = e.styledComponentId,
          p = e.target;
        var f = function (e, t, n) {
            void 0 === e && (e = E);
            var r = v({}, t, {
                theme: e
              }),
              o = {};
            return n.forEach(function (e) {
              var t,
                n,
                s,
                i = e;
              for (t in b(i) && (i = i(r)), i) r[t] = o[t] = "className" === t ? (n = o[t], s = i[t], n && s ? n + " " + s : n || s) : i[t];
            }), [r, o];
          }(Oe(t, (0, react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ze), a) || E, t, o),
          y = f[0],
          g = f[1],
          S = function (e, t, n, r) {
            var o = fe(),
              s = me(),
              i = t ? e.generateAndInjectStyles(E, o, s) : e.generateAndInjectStyles(n, o, s);
            return  i;
          }(i, r, y),
          w = n,
          _ = g.$as || t.$as || g.as || t.as || p,
          N = ke(_),
          A = g !== t ? v({}, t, {}, g) : t,
          C = {};
        for (var I in A) "$" !== I[0] && "as" !== I && ("forwardedAs" === I ? C.as = A[I] : (d ? d(I, _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_5__["default"]) : !N || (0, _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_5__["default"])(I)) && (C[I] = A[I]));
        return t.style && g.style !== t.style && (C.style = v({}, t.style, {}, g.style)), C.className = Array.prototype.concat(c, h, S !== h ? S : null, t.className, g.className).filter(Boolean).join(" "), C.ref = w, (0, react__WEBPACK_IMPORTED_MODULE_1__.createElement)(_, C);
      }(C, e, t, P);
    };
  return O.displayName = f, (C = react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(O)).attrs = S, C.componentStyle = I, C.displayName = f, C.shouldForwardProp = A, C.foldedComponentIds = o ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : w, C.styledComponentId = g, C.target = o ? e.target : e, C.withComponent = function (e) {
    var r = t.componentId,
      o = function (e, t) {
        if (null == e) return {};
        var n,
          r,
          o = {},
          s = Object.keys(e);
        for (r = 0; r < s.length; r++) n = s[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
        return o;
      }(t, ["componentId"]),
      s = r && r + "-" + (ke(e) ? e : je(_(e)));
    return Ye(e, v({}, o, {
      attrs: S,
      componentId: s
    }), n);
  }, Object.defineProperty(C, "defaultProps", {
    get: function get() {
      return this._foldedDefaultProps;
    },
    set: function set(t) {
      this._foldedDefaultProps = o ? Me({}, e.defaultProps, t) : t;
    }
  }),  C.toString = function () {
    return "." + C.styledComponentId;
  }, i && hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6___default()(C, e, {
    attrs: !0,
    componentStyle: !0,
    displayName: !0,
    foldedComponentIds: !0,
    shouldForwardProp: !0,
    styledComponentId: !0,
    target: !0,
    withComponent: !0
  }), C;
}
var qe = function qe(e) {
  return function e(t, r, o) {
    if (void 0 === o && (o = E), !(0, react_is__WEBPACK_IMPORTED_MODULE_0__.isValidElementType)(r)) return j(1, String(r));
    var s = function s() {
      return t(r, o, Ae.apply(void 0, arguments));
    };
    return s.withConfig = function (n) {
      return e(t, r, v({}, o, {}, n));
    }, s.attrs = function (n) {
      return e(t, r, v({}, o, {
        attrs: Array.prototype.concat(o.attrs, n).filter(Boolean)
      }));
    }, s;
  }(Ye, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"].forEach(function (e) {
  qe[e] = qe(e);
});
var He = function () {
  function e(e, t) {
    this.rules = e, this.componentId = t, this.isStatic = re(e), Z.registerId(this.componentId + 1);
  }
  var t = e.prototype;
  return t.createStyles = function (e, t, n, r) {
    var o = r(Ne(this.rules, t, n, r).join(""), ""),
      s = this.componentId + e;
    n.insertRules(s, s, o);
  }, t.removeStyles = function (e, t) {
    t.clearRules(this.componentId + e);
  }, t.renderStyles = function (e, t, n, r) {
    e > 2 && Z.registerId(this.componentId + e), this.removeStyles(e, n), this.createStyles(e, t, n, r);
  }, e;
}();
function $e(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) n[o - 1] = arguments[o];
  var i = Ae.apply(void 0, [e].concat(n)),
    a = "sc-global-" + Te(JSON.stringify(i)),
    u = new He(i, a);
  function l(e) {
    var t = fe(),
      n = me(),
      o = (0, react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ze),
      l = (0, react__WEBPACK_IMPORTED_MODULE_1__.useRef)(t.allocateGSInstance(a)).current;
    return  (0, react__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect)(function () {
      return h(l, e, t, o, n), function () {
        return u.removeStyles(l, t);
      };
    }, [l, e, t, o, n]), null;
  }
  function h(e, t, n, r, o) {
    if (u.isStatic) u.renderStyles(e, O, n, o);else {
      var s = v({}, t, {
        theme: Oe(t, r, l.defaultProps)
      });
      u.renderStyles(e, s, n, o);
    }
  }
  return  react__WEBPACK_IMPORTED_MODULE_1__.memo(l);
}
function We(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
  var o = Ae.apply(void 0, [e].concat(n)).join(""),
    s = Te(o);
  return new ve(s, o);
}
var Ue = function () {
    function e() {
      var e = this;
      this._emitSheetCSS = function () {
        var t = e.instance.toString(),
          n = q();
        return "<style " + [n && 'nonce="' + n + '"', A + '="true"', 'data-styled-version="5.2.1"'].filter(Boolean).join(" ") + ">" + t + "</style>";
      }, this.getStyleTags = function () {
        return e.sealed ? j(2) : e._emitSheetCSS();
      }, this.getStyleElement = function () {
        var t;
        if (e.sealed) return j(2);
        var n = ((t = {})[A] = "", t["data-styled-version"] = "5.2.1", t.dangerouslySetInnerHTML = {
            __html: e.instance.toString()
          }, t),
          o = q();
        return o && (n.nonce = o), [react__WEBPACK_IMPORTED_MODULE_1__.createElement("style", v({}, n, {
          key: "sc-0-0"
        }))];
      }, this.seal = function () {
        e.sealed = !0;
      }, this.instance = new Z({
        isServer: !0
      }), this.sealed = !1;
    }
    var t = e.prototype;
    return t.collectStyles = function (e) {
      return this.sealed ? j(2) : react__WEBPACK_IMPORTED_MODULE_1__.createElement(ye, {
        sheet: this.instance
      }, e);
    }, t.interleaveWithNodeStream = function (e) {
      return j(3);
    }, e;
  }(),
  Je = function Je(e) {
    var t = react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(function (t, n) {
      var o = (0, react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ze),
        i = e.defaultProps,
        a = Oe(t, o, i);
      return  react__WEBPACK_IMPORTED_MODULE_1__.createElement(e, v({}, t, {
        theme: a,
        ref: n
      }));
    });
    return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6___default()(t, e), t.displayName = "WithTheme(" + _(e) + ")", t;
  },
  Xe = function Xe() {
    return (0, react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ze);
  },
  Ze = {
    StyleSheet: Z,
    masterSheet: he
  };
/* harmony default export */ __webpack_exports__["default"] = (qe);


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _arrayLikeToArray; }
/* harmony export */ });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _arrayWithHoles; }
/* harmony export */ });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _arrayWithoutHoles; }
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return (0, _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _assertThisInitialized; }
/* harmony export */ });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _asyncToGenerator; }
/* harmony export */ });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _classCallCheck; }
/* harmony export */ });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/construct.js":
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _construct; }
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");
/* harmony import */ var _isNativeReflectConstruct_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js");


function _construct(Parent, args, Class) {
  if ((0, _isNativeReflectConstruct_js__WEBPACK_IMPORTED_MODULE_1__["default"])()) {
    _construct = Reflect.construct.bind();
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) (0, _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(instance, Class.prototype);
      return instance;
    };
  }
  return _construct.apply(null, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _createClass; }
/* harmony export */ });
/* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, (0, _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__["default"])(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js":
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _createForOfIteratorHelper; }
/* harmony export */ });
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = (0, _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;
      var F = function F() {};
      return {
        s: F,
        n: function n() {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function e(_e) {
          throw _e;
        },
        f: F
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = true,
    didErr = false,
    err;
  return {
    s: function s() {
      it = it.call(o);
    },
    n: function n() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function e(_e2) {
      didErr = true;
      err = _e2;
    },
    f: function f() {
      try {
        if (!normalCompletion && it["return"] != null) it["return"]();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createSuper.js":
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _createSuper; }
/* harmony export */ });
/* harmony import */ var _getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _isNativeReflectConstruct_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js");
/* harmony import */ var _possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");



function _createSuper(Derived) {
  var hasNativeReflectConstruct = (0, _isNativeReflectConstruct_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
  return function _createSuperInternal() {
    var Super = (0, _getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = (0, _getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return (0, _possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, result);
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _defineProperty; }
/* harmony export */ });
/* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js");

function _defineProperty(obj, key, value) {
  key = (0, _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__["default"])(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js":
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _getPrototypeOf; }
/* harmony export */ });
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inherits.js":
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _inherits; }
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) (0, _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/isNativeFunction.js":
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _isNativeFunction; }
/* harmony export */ });
function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js":
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _isNativeReflectConstruct; }
/* harmony export */ });
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _iterableToArray; }
/* harmony export */ });
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _iterableToArrayLimit; }
/* harmony export */ });
function _iterableToArrayLimit(arr, i) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s,
      _e,
      _x,
      _r,
      _arr = [],
      _n = !0,
      _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i) {
        if (Object(_i) !== _i) return;
        _n = !1;
      } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return;
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _nonIterableRest; }
/* harmony export */ });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _nonIterableSpread; }
/* harmony export */ });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js":
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _objectSpread2; }
/* harmony export */ });
/* harmony import */ var _defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js");

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      (0, _defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js":
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _possibleConstructorReturn; }
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && ((0, _typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return (0, _assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js":
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _regeneratorRuntime; }
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/typeof.js");

function _regeneratorRuntime() {
  _regeneratorRuntime = function _regeneratorRuntime() {
    return exports;
  };
  var exports = {},
    Op = Object.prototype,
    hasOwn = Op.hasOwnProperty,
    defineProperty = Object.defineProperty || function (obj, key, desc) {
      obj[key] = desc.value;
    },
    $Symbol = "function" == typeof Symbol ? Symbol : {},
    iteratorSymbol = $Symbol.iterator || "@@iterator",
    asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
    toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
  function define(obj, key, value) {
    return Object.defineProperty(obj, key, {
      value: value,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), obj[key];
  }
  try {
    define({}, "");
  } catch (err) {
    define = function define(obj, key, value) {
      return obj[key] = value;
    };
  }
  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
      generator = Object.create(protoGenerator.prototype),
      context = new Context(tryLocsList || []);
    return defineProperty(generator, "_invoke", {
      value: makeInvokeMethod(innerFn, self, context)
    }), generator;
  }
  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }
  exports.wrap = wrap;
  var ContinueSentinel = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf,
    NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }
  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if ("throw" !== record.type) {
        var result = record.arg,
          value = result.value;
        return value && "object" == (0, _typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
          invoke("next", value, resolve, reject);
        }, function (err) {
          invoke("throw", err, resolve, reject);
        }) : PromiseImpl.resolve(value).then(function (unwrapped) {
          result.value = unwrapped, resolve(result);
        }, function (error) {
          return invoke("throw", error, resolve, reject);
        });
      }
      reject(record.arg);
    }
    var previousPromise;
    defineProperty(this, "_invoke", {
      value: function value(method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function (resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }
        return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(innerFn, self, context) {
    var state = "suspendedStart";
    return function (method, arg) {
      if ("executing" === state) throw new Error("Generator is already running");
      if ("completed" === state) {
        if ("throw" === method) throw arg;
        return doneResult();
      }
      for (context.method = method, context.arg = arg;;) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }
        if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
          if ("suspendedStart" === state) throw state = "completed", context.arg;
          context.dispatchException(context.arg);
        } else "return" === context.method && context.abrupt("return", context.arg);
        state = "executing";
        var record = tryCatch(innerFn, self, context);
        if ("normal" === record.type) {
          if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
          return {
            value: record.arg,
            done: context.done
          };
        }
        "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
      }
    };
  }
  function maybeInvokeDelegate(delegate, context) {
    var methodName = context.method,
      method = delegate.iterator[methodName];
    if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel;
    var record = tryCatch(method, delegate.iterator, context.arg);
    if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
    var info = record.arg;
    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
  }
  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };
    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
  }
  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal", delete record.arg, entry.completion = record;
  }
  function Context(tryLocsList) {
    this.tryEntries = [{
      tryLoc: "root"
    }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) return iteratorMethod.call(iterable);
      if ("function" == typeof iterable.next) return iterable;
      if (!isNaN(iterable.length)) {
        var i = -1,
          next = function next() {
            for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
            return next.value = undefined, next.done = !0, next;
          };
        return next.next = next;
      }
    }
    return {
      next: doneResult
    };
  }
  function doneResult() {
    return {
      value: undefined,
      done: !0
    };
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), defineProperty(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
    var ctor = "function" == typeof genFun && genFun.constructor;
    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
  }, exports.mark = function (genFun) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
  }, exports.awrap = function (arg) {
    return {
      __await: arg
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    void 0 === PromiseImpl && (PromiseImpl = Promise);
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
    return this;
  }), define(Gp, "toString", function () {
    return "[object Generator]";
  }), exports.keys = function (val) {
    var object = Object(val),
      keys = [];
    for (var key in object) keys.push(key);
    return keys.reverse(), function next() {
      for (; keys.length;) {
        var key = keys.pop();
        if (key in object) return next.value = key, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, exports.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(skipTempReset) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
    },
    stop: function stop() {
      this.done = !0;
      var rootRecord = this.tryEntries[0].completion;
      if ("throw" === rootRecord.type) throw rootRecord.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(exception) {
      if (this.done) throw exception;
      var context = this;
      function handle(loc, caught) {
        return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
      }
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i],
          record = entry.completion;
        if ("root" === entry.tryLoc) return handle("end");
        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc"),
            hasFinally = hasOwn.call(entry, "finallyLoc");
          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
          } else {
            if (!hasFinally) throw new Error("try statement without catch or finally");
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }
      finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
      var record = finallyEntry ? finallyEntry.completion : {};
      return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
    },
    complete: function complete(record, afterLoc) {
      if ("throw" === record.type) throw record.arg;
      return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
    },
    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
      }
    },
    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if ("throw" === record.type) {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      return this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
    }
  }, exports;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _setPrototypeOf; }
/* harmony export */ });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _slicedToArray; }
/* harmony export */ });
/* harmony import */ var _arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");




function _slicedToArray(arr, i) {
  return (0, _arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || (0, _iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || (0, _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(arr, i) || (0, _nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js":
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _taggedTemplateLiteral; }
/* harmony export */ });
function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toArray.js":
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _toArray; }
/* harmony export */ });
/* harmony import */ var _arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");




function _toArray(arr) {
  return (0, _arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || (0, _iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || (0, _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(arr) || (0, _nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _toConsumableArray; }
/* harmony export */ });
/* harmony import */ var _arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");




function _toConsumableArray(arr) {
  return (0, _arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || (0, _iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || (0, _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(arr) || (0, _nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toPrimitive.js":
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _toPrimitive; }
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/typeof.js");

function _toPrimitive(input, hint) {
  if ((0, _typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if ((0, _typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js":
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _toPropertyKey; }
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/toPrimitive.js");


function _toPropertyKey(arg) {
  var key = (0, _toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arg, "string");
  return (0, _typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(key) === "symbol" ? key : String(key);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _typeof; }
/* harmony export */ });
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _unsupportedIterableToArray; }
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return (0, _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0, _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/wrapNativeSuper.js":
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _wrapNativeSuper; }
/* harmony export */ });
/* harmony import */ var _getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");
/* harmony import */ var _isNativeFunction_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/isNativeFunction.js");
/* harmony import */ var _construct_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/construct.js");




function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;
  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !(0, _isNativeFunction_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Class)) return Class;
    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }
    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);
      _cache.set(Class, Wrapper);
    }
    function Wrapper() {
      return (0, _construct_js__WEBPACK_IMPORTED_MODULE_3__["default"])(Class, arguments, (0, _getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this).constructor);
    }
    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return (0, _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_1__["default"])(Wrapper, Class);
  };
  return _wrapNativeSuper(Class);
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	!function() {
/******/ 		var getProto = Object.getPrototypeOf ? function(obj) { return Object.getPrototypeOf(obj); } : function(obj) { return obj.__proto__; };
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach(function(key) { def[key] = function() { return value[key]; }; });
/******/ 			}
/******/ 			def['default'] = function() { return value; };
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); };
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	!function() {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react-dom/client.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/App.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
var container=document.getElementById('root');var root=(0, react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(container);root.render(/*#__PURE__*/(0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_App__WEBPACK_IMPORTED_MODULE_2__["default"],{}));
}();
/******/ })()
;
