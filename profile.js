"use strict";
(() => {
var exports = {};
exports.id = 277;
exports.ids = [277];
exports.modules = {

/***/ 10435:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ LogoLoading)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(66197);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__]);
framer_motion__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



// material


const RootStyle = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.styled)("div")(({ theme  })=>({
        width: "100%",
        height: "100%",
        position: "fixed",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 100000,
        top: 2,
        backgroundColor: theme.palette.background.default,
        [theme.breakpoints.down("md")]: {
            height: "calc(100% - 63px)"
        }
    }));
function LogoLoading() {
    const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.useTheme)();
    const icon = {
        hidden: {
            opacity: 0,
            pathLength: 0,
            fill: "rgba(255, 255, 255, 0)"
        },
        visible: {
            opacity: 1,
            pathLength: 1,
            fill: theme.palette.primary.main
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(RootStyle, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
            width: 200,
            height: 200,
            sx: {
                svg: {
                    transform: "translate(0px, -37px)"
                }
            },
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                component: framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.svg,
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 5000.000000 1366.000000",
                width: "42px",
                sx: {
                    overflow: "visible",
                    stroke: theme.palette.primary.main,
                    strokeWidth: 200,
                    strokeLinejoin: "round",
                    strokeLinecap: "round"
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.path, {
                        d: "M5520 16555 l-5515 -5515 5515 -5515 5515 -5515 2168 2168 c1193 1192 2272 2274 2398 2404 l230 237 -775 778 -775 779 2330 2330 2329 2329 -2337 2338 -2338 2338 785 779 785 779 -2400 2400 -2400 2401 -5515 -5515z m5953 -99 c405 -396 737 -722 737 -725 0 -3 -1052 -1058 -2337 -2343 l-2337 -2337 2338 -2341 2337 -2341 -110 -117 c-60 -64 -409 -416 -775 -782 l-666 -665 -3123 3123 -3122 3122 3109 3109 3110 3110 50 -47 c28 -25 383 -370 789 -766z",
                        variants: icon,
                        initial: "hidden",
                        animate: "visible",
                        transition: {
                            default: {
                                duration: 2,
                                ease: "easeInOut",
                                repeat: Infinity,
                                repeatDelay: 2
                            },
                            fill: {
                                duration: 2,
                                ease: [
                                    1,
                                    0,
                                    0.8,
                                    1
                                ],
                                repeat: Infinity,
                                repeatDelay: 2
                            }
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.path, {
                        d: "M16415 16673 c-336 -328 -690 -676 -788 -772 l-177 -176 2340 -2340 2340 -2340 -2340 -2340 -2340 -2340 780 -780 780 -780 3120 3120 3120 3120 -3113 3113 -3112 3112 -610 -597z",
                        variants: icon,
                        initial: "hidden",
                        animate: "visible",
                        transition: {
                            default: {
                                duration: 2,
                                ease: "easeInOut",
                                repeat: Infinity,
                                repeatDelay: 2
                            },
                            fill: {
                                duration: 2,
                                ease: [
                                    1,
                                    0,
                                    0.8,
                                    1
                                ],
                                repeat: Infinity,
                                repeatDelay: 2
                            }
                        }
                    })
                ]
            })
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 24855:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UserProfile),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _next_translate_root_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50608);
/* harmony import */ var next_translate_loadNamespaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87462);
/* harmony import */ var next_translate_loadNamespaces__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_translate_loadNamespaces__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(41649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(33770);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_components_logoLoading__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(10435);
/* harmony import */ var src_components_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(51033);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([src_components_logoLoading__WEBPACK_IMPORTED_MODULE_7__]);
src_components_logoLoading__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// @ts-ignore


// @ts-ignore

// @ts-ignore
// material-ui components





// components

const Tabs = next_dynamic__WEBPACK_IMPORTED_MODULE_5___default()(()=>__webpack_require__.e(/* import() */ 9498).then(__webpack_require__.bind(__webpack_require__, 99498)), {
    loadableGenerated: {
        modules: [
            "profile.tsx -> " + "src/components/_main/profile/profileTabs"
        ]
    }
});
const ProfileCover = next_dynamic__WEBPACK_IMPORTED_MODULE_5___default()(()=>Promise.all(/* import() */[__webpack_require__.e(2049), __webpack_require__.e(9329), __webpack_require__.e(4446)]).then(__webpack_require__.bind(__webpack_require__, 14446)), {
    loadableGenerated: {
        modules: [
            "profile.tsx -> " + "src/components/_main/profile/profileCover"
        ]
    }
});
// ----------------------------------------------------------------------
function UserProfile() {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
    const { status  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_4__.useSession)({
        required: true,
        onUnauthenticated () {
            router.push("/auth/login?redirect=/profile");
        }
    });
    if (status === "loading") {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_logoLoading__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {});
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(src_components_page__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
        title: "User Profile | Nextstore",
        canonical: "profile",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ProfileCover, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Container, {
                maxWidth: "lg",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Tabs, {})
            })
        ]
    });
}
// @ts-ignore
async function getStaticProps(ctx) {
    // @ts-ignore
    // @ts-ignore
    // @ts-ignore
    return {
        // @ts-ignore
        // @ts-ignore
        // @ts-ignore
        props: {
            // @ts-ignore
            // @ts-ignore
            ...await next_translate_loadNamespaces__WEBPACK_IMPORTED_MODULE_2___default()({
                // @ts-ignore
                ...ctx,
                // @ts-ignore
                pathname: "/profile",
                // @ts-ignore
                loaderName: "getStaticProps",
                // @ts-ignore
                ..._next_translate_root_i18n__WEBPACK_IMPORTED_MODULE_1__,
                // @ts-ignore
                loadLocaleFrom: (l, n)=>__webpack_require__(27655)(`./${l}/${n}`).then((m)=>m.default)
            })
        }
    };
// @ts-ignore
} // @ts-ignore

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 57705:
/***/ ((module) => {

module.exports = require("@mui/icons-material/AddPhotoAlternateRounded");

/***/ }),

/***/ 81199:
/***/ ((module) => {

module.exports = require("@mui/icons-material/AddRounded");

/***/ }),

/***/ 6617:
/***/ ((module) => {

module.exports = require("@mui/icons-material/DateRangeRounded");

/***/ }),

/***/ 34751:
/***/ ((module) => {

module.exports = require("@mui/icons-material/DeleteOutlineRounded");

/***/ }),

/***/ 80746:
/***/ ((module) => {

module.exports = require("@mui/icons-material/EditRounded");

/***/ }),

/***/ 7185:
/***/ ((module) => {

module.exports = require("@mui/icons-material/FavoriteBorderRounded");

/***/ }),

/***/ 75837:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Person2Rounded");

/***/ }),

/***/ 13639:
/***/ ((module) => {

module.exports = require("@mui/icons-material/ReceiptLongRounded");

/***/ }),

/***/ 58334:
/***/ ((module) => {

module.exports = require("@mui/icons-material/ReceiptRounded");

/***/ }),

/***/ 72548:
/***/ ((module) => {

module.exports = require("@mui/icons-material/ShoppingCartRounded");

/***/ }),

/***/ 40012:
/***/ ((module) => {

module.exports = require("@mui/icons-material/VpnKeyRounded");

/***/ }),

/***/ 59605:
/***/ ((module) => {

module.exports = require("@mui/icons-material/WarningRounded");

/***/ }),

/***/ 86072:
/***/ ((module) => {

module.exports = require("@mui/lab");

/***/ }),

/***/ 65692:
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ 19:
/***/ ((module) => {

module.exports = require("@mui/material/Box");

/***/ }),

/***/ 68167:
/***/ ((module) => {

module.exports = require("@mui/material/Card");

/***/ }),

/***/ 94960:
/***/ ((module) => {

module.exports = require("@mui/material/CssBaseline");

/***/ }),

/***/ 97898:
/***/ ((module) => {

module.exports = require("@mui/material/Drawer");

/***/ }),

/***/ 94192:
/***/ ((module) => {

module.exports = require("@mui/material/List");

/***/ }),

/***/ 834:
/***/ ((module) => {

module.exports = require("@mui/material/ListItem");

/***/ }),

/***/ 31011:
/***/ ((module) => {

module.exports = require("@mui/material/ListItemButton");

/***/ }),

/***/ 63787:
/***/ ((module) => {

module.exports = require("@mui/material/ListItemIcon");

/***/ }),

/***/ 78315:
/***/ ((module) => {

module.exports = require("@mui/material/ListItemText");

/***/ }),

/***/ 40216:
/***/ ((module) => {

module.exports = require("@mui/material/Pagination");

/***/ }),

/***/ 28742:
/***/ ((module) => {

module.exports = require("@mui/material/Stack");

/***/ }),

/***/ 11307:
/***/ ((module) => {

module.exports = require("@mui/material/Tab");

/***/ }),

/***/ 38544:
/***/ ((module) => {

module.exports = require("@mui/material/Tabs");

/***/ }),

/***/ 27163:
/***/ ((module) => {

module.exports = require("@mui/material/Typography");

/***/ }),

/***/ 18442:
/***/ ((module) => {

module.exports = require("@mui/material/styles");

/***/ }),

/***/ 75184:
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 98432:
/***/ ((module) => {

module.exports = require("bcryptjs");

/***/ }),

/***/ 74146:
/***/ ((module) => {

module.exports = require("date-fns");

/***/ }),

/***/ 2296:
/***/ ((module) => {

module.exports = require("formik");

/***/ }),

/***/ 46517:
/***/ ((module) => {

module.exports = require("lodash");

/***/ }),

/***/ 41649:
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ 16641:
/***/ ((module) => {

module.exports = require("next-seo");

/***/ }),

/***/ 87462:
/***/ ((module) => {

module.exports = require("next-translate/loadNamespaces");

/***/ }),

/***/ 60866:
/***/ ((module) => {

module.exports = require("next-translate/useTranslation");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 3539:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

/***/ }),

/***/ 34014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 95832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 24964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 93431:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-locale.js");

/***/ }),

/***/ 11751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 23938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 71109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 28854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 93297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 87782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 59232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 71853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 88032:
/***/ ((module) => {

module.exports = require("numeral");

/***/ }),

/***/ 580:
/***/ ((module) => {

module.exports = require("prop-types");

/***/ }),

/***/ 16689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 56358:
/***/ ((module) => {

module.exports = require("react-dropzone");

/***/ }),

/***/ 25452:
/***/ ((module) => {

module.exports = require("react-phone-input-2");

/***/ }),

/***/ 61175:
/***/ ((module) => {

module.exports = require("react-query");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 20997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 86695:
/***/ ((module) => {

module.exports = require("redux");

/***/ }),

/***/ 14161:
/***/ ((module) => {

module.exports = require("redux-persist");

/***/ }),

/***/ 98936:
/***/ ((module) => {

module.exports = require("redux-persist/lib/storage");

/***/ }),

/***/ 75609:
/***/ ((module) => {

module.exports = require("yup");

/***/ }),

/***/ 99648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ 66197:
/***/ ((module) => {

module.exports = import("framer-motion");;

/***/ }),

/***/ 86201:
/***/ ((module) => {

module.exports = import("react-hot-toast");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [9315,3770,9089,1033], () => (__webpack_exec__(24855)));
module.exports = __webpack_exports__;

})();