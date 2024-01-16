"use strict";
(() => {
var exports = {};
exports.id = 2888;
exports.ids = [2888];
exports.modules = {

/***/ 92683:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    openGraph: {
        type: "website",
        locale: "en_IE",
        site_name: "NEXTSTORE"
    },
    twitter: {
        handle: "@handle",
        site: "https://www.nextstore.vercel.com/",
        cardType: "app"
    }
});


/***/ }),

/***/ 63362:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_redux_slices_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27898);
/* harmony import */ var src_utils_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73669);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([src_utils_jwt__WEBPACK_IMPORTED_MODULE_3__]);
src_utils_jwt__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



// utils

// ----------------------------------------------------------------------
function AuthProvider({ ...props }) {
    const { children  } = props;
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const initialize = async ()=>{
            dispatch((0,src_redux_slices_user__WEBPACK_IMPORTED_MODULE_2__/* .setInitialize */ .A8)());
            try {
                const token = localStorage.getItem("token");
                if (token && (0,src_utils_jwt__WEBPACK_IMPORTED_MODULE_3__/* .isValidToken */ .wu)(token)) {
                    (0,src_utils_jwt__WEBPACK_IMPORTED_MODULE_3__/* .setSession */ .KY)(token);
                    const newUser = (0,src_utils_jwt__WEBPACK_IMPORTED_MODULE_3__/* .jwtDecode */ .oO)(token);
                    dispatch((0,src_redux_slices_user__WEBPACK_IMPORTED_MODULE_2__/* .setLogin */ .R9)(newUser));
                } else {
                    dispatch((0,src_redux_slices_user__WEBPACK_IMPORTED_MODULE_2__/* .setLogout */ .wt)(null));
                }
            } catch (err) {
                console.error(err);
                dispatch((0,src_redux_slices_user__WEBPACK_IMPORTED_MODULE_2__/* .setLogout */ .wt)(null));
            }
        };
        initialize();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return children;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthProvider);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3763:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ ProgressBar)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
;// CONCATENATED MODULE: external "nprogress"
const external_nprogress_namespaceObject = require("nprogress");
var external_nprogress_default = /*#__PURE__*/__webpack_require__.n(external_nprogress_namespaceObject);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(71853);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(18442);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(65692);
;// CONCATENATED MODULE: ./src/components/progressBar.tsx



// material


external_nprogress_default().configure({
    showSpinner: false
});
router_.Router.events.on("routeChangeStart", ()=>external_nprogress_default().start());
router_.Router.events.on("routeChangeComplete", ()=>external_nprogress_default().done());
router_.Router.events.on("routeChangeError", ()=>external_nprogress_default().done());
// ----------------------------------------------------------------------
function ProgressBar() {
    const theme = (0,styles_.useTheme)();
    return /*#__PURE__*/ jsx_runtime_.jsx(material_.GlobalStyles, {
        styles: {
            "#nprogress": {
                pointerEvents: "none",
                "& .bar": {
                    top: 0,
                    left: 0,
                    height: 2,
                    width: "100%",
                    position: "fixed",
                    zIndex: theme.zIndex.snackbar + 1,
                    backgroundColor: theme.palette.primary.main,
                    boxShadow: `0 0 2px ${theme.palette.primary.main}`
                },
                "& .peg": {
                    right: 0,
                    opacity: 1,
                    width: 100,
                    height: "100%",
                    display: "block",
                    position: "absolute",
                    transform: "rotate(3deg) translate(0px, -4px)",
                    boxShadow: `0 0 10px ${theme.palette.primary.main}, 0 0 5px ${theme.palette.primary.main}`
                }
            }
        }
    });
}


/***/ }),

/***/ 87673:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ ThemePrimaryColor)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(18442);
// EXTERNAL MODULE: ./src/theme/overrides/index.js + 27 modules
var overrides = __webpack_require__(46028);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(65692);
// EXTERNAL MODULE: ./src/theme/palette.ts
var palette = __webpack_require__(82376);
// EXTERNAL MODULE: ./src/redux/slices/settings.ts
var settings = __webpack_require__(53587);
// EXTERNAL MODULE: external "@mui/material/RadioGroup"
var RadioGroup_ = __webpack_require__(76563);
var RadioGroup_default = /*#__PURE__*/__webpack_require__.n(RadioGroup_);
;// CONCATENATED MODULE: ./src/components/settings/colorSetting/styled.ts


const styled_RootStyled = (0,styles_.styled)((RadioGroup_default()))(({ theme  })=>({
        "& .color-paper": {
            borderRadius: "50%",
            width: "52px",
            height: "52px!important",
            border: `solid 2px transparent`
        },
        "& .action-box": {
            height: 48,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            "& .color-box": {
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                transform: "rotate(-45deg)",
                transition: theme.transitions.create("all", {
                    easing: theme.transitions.easing.easeInOut,
                    duration: theme.transitions.duration.shorter
                })
            }
        },
        "& .label": {
            top: 0,
            margin: 0,
            width: "100%",
            height: "100%",
            position: "absolute"
        }
    }));
/* harmony default export */ const styled = ((/* unused pure expression or super */ null && (styled_RootStyled)));

;// CONCATENATED MODULE: ./src/components/settings/colorSetting/index.tsx



// theme

// hooks


// styles

// ----------------------------------------------------------------------
const PRIMARY_COLOR = [
    // DEFAULT
    {
        name: "default",
        ...palette/* default.light.primary */.Z.light.primary
    },
    // PURPLE
    {
        name: "purple",
        lighter: "#EBD6FD",
        light: "#B985F4",
        main: "#7635DC",
        dark: "#431A9E",
        darker: "#200A69",
        contrastText: "#fff"
    },
    // RED
    {
        name: "red",
        lighter: "#C8FACD",
        light: "#fa6e6e",
        main: "#FF3030",
        dark: "#bf1f1f",
        darker: "#a80303",
        contrastText: "#fff"
    },
    // BLUE
    {
        name: "blue",
        lighter: "#CCDFFF",
        light: "#6697FF",
        main: "#0D44FB",
        dark: "#0027B7",
        darker: "#00137A",
        contrastText: "#fff"
    },
    // ORANGE
    {
        name: "orange",
        lighter: "#FEF4D4",
        light: "#FED680",
        main: "#FDA92E",
        dark: "#B66816",
        darker: "#793908",
        contrastText: palette/* default.light.grey.800 */.Z.light.grey[800]
    },
    // GREEN
    {
        name: "green",
        lighter: "#E9FCD4",
        light: "#3BC776",
        main: "#18AB56",
        dark: "#159B4E",
        darker: "#058039",
        contrastText: "#fff"
    }
];
function setColor(themeColor) {
    let color;
    const DEFAULT = PRIMARY_COLOR[0];
    const PURPLE = PRIMARY_COLOR[1];
    const RED = PRIMARY_COLOR[2];
    const BLUE = PRIMARY_COLOR[3];
    const ORANGE = PRIMARY_COLOR[4];
    const GREEN = PRIMARY_COLOR[5];
    switch(themeColor){
        case "purple":
            color = PURPLE;
            break;
        case "red":
            color = RED;
            break;
        case "blue":
            color = BLUE;
            break;
        case "orange":
            color = ORANGE;
            break;
        case "green":
            color = GREEN;
            break;
        default:
            color = DEFAULT;
    }
    return color;
}
function ColorSetting() {
    const dispatch = useDispatch();
    const { themeColor  } = useSelector(({ settings  })=>settings);
    return /*#__PURE__*/ _jsx(RootStyled, {
        name: "themeColor",
        value: themeColor,
        onChange: (e)=>dispatch(setThemeColor(e.target.value)),
        children: /*#__PURE__*/ _jsx(Grid, {
            container: true,
            spacing: 1.5,
            dir: "ltr",
            children: PRIMARY_COLOR.map((color)=>{
                const colorName = color.name;
                const colorValue = color.main;
                const isSelected = themeColor === colorName;
                return /*#__PURE__*/ _jsx(Grid, {
                    item: true,
                    xs: 4,
                    children: /*#__PURE__*/ _jsx(Paper, {
                        variant: isSelected ? "elevation" : "outlined",
                        className: `color-paper`,
                        sx: {
                            ...isSelected && {
                                bgcolor: alpha(colorValue, 0.12),
                                border: `solid 2px ${colorValue}!important`,
                                borderRadius: "50%",
                                boxShadow: `inset 0 4px 8px 0 ${alpha(colorValue, 0.24)}`
                            }
                        },
                        children: /*#__PURE__*/ _jsxs(CardActionArea, {
                            sx: {
                                borderRadius: "50%",
                                color: colorValue
                            },
                            children: [
                                /*#__PURE__*/ _jsx(Box, {
                                    className: "action-box",
                                    children: /*#__PURE__*/ _jsx(Box, {
                                        className: "color-box",
                                        sx: {
                                            bgcolor: colorValue,
                                            ...isSelected && {
                                                transform: "none"
                                            }
                                        }
                                    })
                                }),
                                /*#__PURE__*/ _jsx(FormControlLabel, {
                                    label: "",
                                    value: colorName,
                                    control: /*#__PURE__*/ _jsx(Radio, {
                                        sx: {
                                            display: "none"
                                        }
                                    }),
                                    className: "label"
                                })
                            ]
                        })
                    })
                }, colorName);
            })
        })
    });
}

;// CONCATENATED MODULE: ./src/components/themePrimaryColor.tsx


// material

//



// ----------------------------------------------------------------------
function ThemePrimaryColor({ ...props }) {
    const { children  } = props;
    const defaultTheme = (0,styles_.useTheme)();
    const { themeColor  } = (0,external_react_redux_.useSelector)(({ settings  })=>settings);
    const [themeState, setThemeState] = (0,external_react_.useState)(null);
    const primaryColor = setColor(themeState);
    const themeOptions = (0,external_react_.useMemo)(()=>({
            ...defaultTheme,
            palette: {
                ...defaultTheme.palette,
                primary: primaryColor
            },
            customShadows: {
                // ...defaultTheme.customShadows,
                primary: `0 8px 16px 0 ${(0,styles_.alpha)(primaryColor.main, 0.24)}`
            }
        }), // eslint-disable-next-line react-hooks/exhaustive-deps
    [
        defaultTheme,
        themeState
    ]);
    const theme = (0,styles_.createTheme)(themeOptions);
    theme.components = (0,overrides/* default */.Z)(theme);
    (0,external_react_.useEffect)(()=>{
        setThemeState(themeColor);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        themeColor
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx(styles_.ThemeProvider, {
        theme: theme,
        children: children
    });
}


/***/ }),

/***/ 1275:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ MainLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(33770);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_icons_material_TuneRounded__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6412);
/* harmony import */ var _mui_icons_material_TuneRounded__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_TuneRounded__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_components_noInternet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(56738);
/* harmony import */ var _mainAppbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13075);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(46062);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(66197);
/* harmony import */ var src_redux_slices_settings__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(53587);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var src_redux_slices_categories__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(96235);
/* harmony import */ var src_redux_slices_notification__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(14761);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(61175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var src_services__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(20428);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(86201);
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(60866);
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_16__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([src_components_noInternet__WEBPACK_IMPORTED_MODULE_5__, _mainAppbar__WEBPACK_IMPORTED_MODULE_6__, framer_motion__WEBPACK_IMPORTED_MODULE_8__, src_services__WEBPACK_IMPORTED_MODULE_14__, react_hot_toast__WEBPACK_IMPORTED_MODULE_15__]);
([src_components_noInternet__WEBPACK_IMPORTED_MODULE_5__, _mainAppbar__WEBPACK_IMPORTED_MODULE_6__, framer_motion__WEBPACK_IMPORTED_MODULE_8__, src_services__WEBPACK_IMPORTED_MODULE_14__, react_hot_toast__WEBPACK_IMPORTED_MODULE_15__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



// material


// redux
// ----------------------------------------------------------------------
const Settings = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(null, {
    loadableGenerated: {
        modules: [
            "../layout/index.tsx -> " + "src/components/settings"
        ]
    },
    ssr: false
});













const MobileAppbar = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(()=>__webpack_require__.e(/* import() */ 2672).then(__webpack_require__.bind(__webpack_require__, 52672)), {
    loadableGenerated: {
        modules: [
            "../layout/index.tsx -> " + "./mobileAppbar"
        ]
    }
});
const Footer = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(()=>__webpack_require__.e(/* import() */ 1746).then(__webpack_require__.bind(__webpack_require__, 51746)), {
    loadableGenerated: {
        modules: [
            "../layout/index.tsx -> " + "./footer"
        ]
    }
});
function MainLayout({ ...props }) {
    const { children  } = props;
    const { t  } = next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_16___default()("common");
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_10__.useDispatch)();
    const { mutate  } = (0,react_query__WEBPACK_IMPORTED_MODULE_13__.useMutation)(src_services__WEBPACK_IMPORTED_MODULE_14__/* .getRates */ .jS, {
        onSuccess: (res)=>{
            dispatch((0,src_redux_slices_settings__WEBPACK_IMPORTED_MODULE_9__/* .setUnitRate */ .Nn)(res));
        }
    });
    const { currency  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_10__.useSelector)(({ settings  })=>settings);
    (0,react_query__WEBPACK_IMPORTED_MODULE_13__.useQuery)("home-data", ()=>src_services__WEBPACK_IMPORTED_MODULE_14__/* .getHeaderData */ .XD(), {
        onSuccess: (data)=>{
            dispatch((0,src_redux_slices_categories__WEBPACK_IMPORTED_MODULE_11__/* .setCategories */ .D)(data.categories));
            dispatch((0,src_redux_slices_notification__WEBPACK_IMPORTED_MODULE_12__/* .setNotifications */ .R)(data.notifications));
        },
        onError: (err)=>{
            react_hot_toast__WEBPACK_IMPORTED_MODULE_15__.toast.error(t("common:errors." + err.response.data.message));
        }
    });
    const [isOnline, setIsOnline] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const checkIsOnline =  false ? 0 : null;
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (checkIsOnline) {
            setIsOnline(false);
        } else {
            setIsOnline(true);
        }
    }, [
        checkIsOnline
    ]);
    if (!isOnline) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_noInternet__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {});
    }
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        mutate(currency);
    }, []);
    const [isOpen, toggleOpen] = (0,framer_motion__WEBPACK_IMPORTED_MODULE_8__.useCycle)(false, true);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styled__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mainAppbar__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MobileAppbar, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                className: "layout-main",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Fab, {
                    onClick: ()=>toggleOpen(),
                    color: "primary",
                    size: "large",
                    "aria-label": "language",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_TuneRounded__WEBPACK_IMPORTED_MODULE_4___default()), {})
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Settings, {
                isOpen: isOpen,
                toggleOpen: ()=>toggleOpen()
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                className: "layout-children",
                children: children
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                className: "children-height"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                sx: {
                    display: {
                        md: "block",
                        xs: "none"
                    }
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Footer, {})
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 13075:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ MainNavbar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(33770);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_redux_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(95684);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(53092);
/* harmony import */ var src_layout_config_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(23376);
/* harmony import */ var src_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(75408);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([src_components__WEBPACK_IMPORTED_MODULE_8__]);
src_components__WEBPACK_IMPORTED_MODULE_8__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// react


// next


// material

// redux

// styles

// config


const CartWidget = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(()=>__webpack_require__.e(/* import() */ 7403).then(__webpack_require__.bind(__webpack_require__, 67403)), {
    loadableGenerated: {
        modules: [
            "../layout/mainAppbar/index.tsx -> " + "src/components/cartWidget"
        ]
    },
    loading: ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Skeleton, {
            variant: "circular",
            width: 40,
            height: 40
        })
});
const UserSelect = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(()=>Promise.all(/* import() */[__webpack_require__.e(1599), __webpack_require__.e(5134), __webpack_require__.e(5006)]).then(__webpack_require__.bind(__webpack_require__, 85006)), {
    loadableGenerated: {
        modules: [
            "../layout/mainAppbar/index.tsx -> " + "src/components/select/userSelect"
        ]
    },
    loading: ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Skeleton, {
            variant: "circular",
            width: 40,
            height: 40
        })
});
const WishlistPopover = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(()=>Promise.all(/* import() */[__webpack_require__.e(1599), __webpack_require__.e(5134), __webpack_require__.e(330)]).then(__webpack_require__.bind(__webpack_require__, 60330)), {
    loadableGenerated: {
        modules: [
            "../layout/mainAppbar/index.tsx -> " + "../../components/popover/wislist"
        ]
    },
    loading: ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Skeleton, {
            variant: "circular",
            width: 40,
            height: 40
        })
});
const Search = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 47457)), {
    loadableGenerated: {
        modules: [
            "../layout/mainAppbar/index.tsx -> " + "src/components/searchDialog"
        ]
    },
    loading: ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Skeleton, {
            variant: "circular",
            width: 40,
            height: 40
        })
});
const MenuDesktop = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(()=>Promise.all(/* import() */[__webpack_require__.e(5134), __webpack_require__.e(4044)]).then(__webpack_require__.bind(__webpack_require__, 24044)), {
    loadableGenerated: {
        modules: [
            "../layout/mainAppbar/index.tsx -> " + "./menuDesktop"
        ]
    },
    loading: ()=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Stack, {
            direction: "row",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Skeleton, {
                    variant: "rectangular",
                    width: 44,
                    height: 22,
                    sx: {
                        borderRadius: "4px",
                        mx: "6px"
                    }
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Skeleton, {
                    variant: "rectangular",
                    width: 96,
                    height: 22,
                    sx: {
                        borderRadius: "4px",
                        mx: "6px"
                    }
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Skeleton, {
                    variant: "rectangular",
                    width: 34.5,
                    height: 22,
                    sx: {
                        borderRadius: "4px",
                        mx: "6px"
                    }
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Skeleton, {
                    variant: "rectangular",
                    width: 54,
                    height: 22,
                    sx: {
                        borderRadius: "4px",
                        mx: "6px"
                    }
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Skeleton, {
                    variant: "rectangular",
                    width: 34,
                    height: 22,
                    sx: {
                        borderRadius: "4px",
                        mx: "6px"
                    }
                })
            ]
        })
});
// ----------------------------------------------------------------------
function MainNavbar() {
    const { menu  } = src_layout_config_json__WEBPACK_IMPORTED_MODULE_7__;
    const { pathname  } = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const isHome = pathname === "/";
    const { checkout  } = (0,src_redux_store__WEBPACK_IMPORTED_MODULE_5__/* .useSelector */ .v9)(({ product  })=>product);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styled__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        position: "sticky",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Toolbar, {
            disableGutters: true,
            className: "toolbar",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Stack, {
                    width: 167,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components__WEBPACK_IMPORTED_MODULE_8__/* .MainLogo */ .zU, {})
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MenuDesktop, {
                    isHome: isHome,
                    navConfig: menu
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {
                    sx: {
                        display: "flex",
                        gap: 0.5
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Search, {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CartWidget, {
                            checkout: checkout
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(WishlistPopover, {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(UserSelect, {})
                    ]
                })
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 53092:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83882);
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__);


const RootStyled = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.styled)((_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_0___default()))(({ theme  })=>({
        boxShadow: "none",
        top: -1,
        backgroundColor: "transparent",
        borderTop: `1px solid ${theme.palette.divider}`,
        borderLeftWidth: 0,
        borderLeftRight: 0,
        display: "block",
        "& .toolbar": {
            justifyContent: "space-between",
            backdropFilter: "blur(6px)",
            WebkitBackdropFilter: "blur(6px)",
            backgroundColor: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.alpha)(theme.palette.background.paper, 1),
            padding: theme.spacing(0, 3),
            backDropFilter: "blur(16px)"
        },
        [theme.breakpoints.down("md")]: {
            display: "none"
        }
    }));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RootStyled);


/***/ }),

/***/ 46062:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__);

const RootStyled = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.styled)("div")(({ theme  })=>({
        "& .layout-main": {
            position: "fixed",
            bottom: 30,
            right: 30,
            zIndex: 10000
        },
        "& .layout-children": {
            marginBottom: theme.spacing(0)
        },
        "& .children-height": {
            height: 0
        },
        "& .fab-btn": {
            background: theme.palette.success.main,
            color: "#fff",
            position: "fixed",
            bottom: 20,
            left: 20,
            zIndex: 100,
            "&.active": {
                right: 20
            },
            "&:hover": {
                background: theme.palette.success.dark
            },
            svg: {
                fontSize: 40
            },
            display: "flex"
        },
        [theme.breakpoints.down("md")]: {
            "& .layout-main": {
                top: 130,
                right: 0,
                padding: theme.spacing(0.5, 1, 0.5, 0.5),
                background: theme.palette.common.white,
                borderRadius: "30px 0 0 30px",
                boxShadow: "0px 10px 32px -4px rgba(19, 25, 39, 0.10), 0px 6px 14px -6px rgba(19, 25, 39, 0.12)",
                height: 45,
                display: "flex",
                alignItems: "center",
                button: {
                    height: 36,
                    width: 36
                }
            },
            "& .layout-children": {
                marginBottom: theme.spacing(6)
            },
            "& .children-height": {
                height: 40
            },
            "& .fab-btn": {
                display: "none"
            }
        }
    }));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RootStyled);


/***/ }),

/***/ 88362:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _next_translate_root_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50608);
/* harmony import */ var next_translate_appWithI18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(75668);
/* harmony import */ var next_translate_appWithI18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_translate_appWithI18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(61175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(86201);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(16641);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_seo_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(92683);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(41649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var src_redux_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(95684);
/* harmony import */ var src_theme__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(69996);
/* harmony import */ var src_theme_globalStyles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(14386);
/* harmony import */ var src_components_themePrimaryColor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(87673);
/* harmony import */ var src_components_AuthProvider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(63362);
/* harmony import */ var src_layout__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(1275);
/* harmony import */ var src_components_progressBar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(3763);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(19);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_18__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hot_toast__WEBPACK_IMPORTED_MODULE_5__, src_theme__WEBPACK_IMPORTED_MODULE_11__, src_components_AuthProvider__WEBPACK_IMPORTED_MODULE_14__, src_layout__WEBPACK_IMPORTED_MODULE_15__]);
([react_hot_toast__WEBPACK_IMPORTED_MODULE_5__, src_theme__WEBPACK_IMPORTED_MODULE_11__, src_components_AuthProvider__WEBPACK_IMPORTED_MODULE_14__, src_layout__WEBPACK_IMPORTED_MODULE_15__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// @ts-ignore


// @ts-ignore

// @ts-ignore
















// Server-side props
async function getServerSideProps({ ...ctx }) {
    const { res  } = ctx;
    res.setHeader("Cache-Control", "public, s-maxage=10, stale-while-revalidate=59");
    return {
        props: {}
    };
}
const __Page_Next_Translate__ = function App({ Component , pageProps  }) {
    const [queryClient] = react__WEBPACK_IMPORTED_MODULE_3___default().useState(()=>new react_query__WEBPACK_IMPORTED_MODULE_4__.QueryClient({
            defaultOptions: {
                queries: {
                    refetchOnWindowFocus: false
                }
            }
        }));
    const { pathname  } = (0,next_router__WEBPACK_IMPORTED_MODULE_17__.useRouter)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_seo__WEBPACK_IMPORTED_MODULE_6__.DefaultSeo, {
                ...next_seo_config__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hot_toast__WEBPACK_IMPORTED_MODULE_5__.Toaster, {
                position: "top-center",
                reverseOrder: false
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_auth_react__WEBPACK_IMPORTED_MODULE_9__.SessionProvider, {
                session: pageProps.session,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_redux__WEBPACK_IMPORTED_MODULE_8__.Provider, {
                    store: src_redux_store__WEBPACK_IMPORTED_MODULE_10__/* .store */ .h,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_theme__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_AuthProvider__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_themePrimaryColor__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_query__WEBPACK_IMPORTED_MODULE_4__.QueryClientProvider, {
                                    client: queryClient,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_query__WEBPACK_IMPORTED_MODULE_4__.Hydrate, {
                                        state: pageProps.dehydratedState,
                                        children: pathname === "/demo" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_18___default()), {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_theme_globalStyles__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {}),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_progressBar__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {}),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                                                    ...pageProps
                                                })
                                            ]
                                        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(src_layout__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_theme_globalStyles__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {}),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_progressBar__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {}),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                                                    ...pageProps
                                                })
                                            ]
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        ]
    });
};
// @ts-ignore
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_translate_appWithI18n__WEBPACK_IMPORTED_MODULE_2___default()(__Page_Next_Translate__, {
    // @ts-ignore
    ..._next_translate_root_i18n__WEBPACK_IMPORTED_MODULE_1__,
    // @ts-ignore
    isLoader: true,
    // @ts-ignore
    skipInitialProps: true,
    // @ts-ignore
    loadLocaleFrom: (l, n)=>__webpack_require__(27655)(`./${l}/${n}`).then((m)=>m.default)
})); // @ts-ignore

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 80436:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const breakpoints = {
    values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536 // OLD 1920
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (breakpoints);


/***/ }),

/***/ 14386:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ GlobalStyles)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
// material



// ----------------------------------------------------------------------
function GlobalStyles() {
    const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.useTheme)();
    const isRTL = theme.direction === "rtl";
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.GlobalStyles, {
        styles: {
            "*": {
                textDecoration: "none",
                margin: 0,
                padding: 0,
                boxSizing: "border-box"
            },
            html: {
                width: "100%",
                height: "100%",
                WebkitOverflowScrolling: "touch"
            },
            body: {
                width: "100%",
                fontFamily: isRTL ? "'Noto Kufi Arabic', sans-serif" : "'Poppins', sans-serif",
                height: "100%"
            },
            "::-webkit-scrollbar": {
                width: 8,
                height: 8
            },
            "::-webkit-scrollbar-track": {
                boxShadow: "inset 0 0 1px grey!important",
                background: "transparent"
            },
            "::-webkit-scrollbar-thumb": {
                background: theme.palette.primary.main,
                borderRadius: "4px!important"
            },
            "::-webkit-scrollbar-thumb:hover": {
                background: theme.palette.primary.dark
            },
            "#__next": {
                width: "100%",
                height: "100%"
            },
            // ".skeleton": {
            //   animation: "skeleton-loading 1s linear infinite alternate",
            // },
            // "@keyframes skeleton-loading": {
            //   "0%": {
            //     backgroundColor: theme.palette.common.neutral,
            //   },
            //   "100%": {
            //     backgroundColor: theme.palette.common.neutral,
            //   },
            // },
            // ".skeleton-text": {
            //   width: "100%",
            // },
            ".progress-bar": {
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                height: "2px",
                background: theme.palette.warning.main,
                transformOrigin: "0%",
                zIndex: theme.zIndex.snackbar
            },
            input: {
                "&[type=number]": {
                    MozAppearance: "textfield",
                    "&::-webkit-outer-spin-button": {
                        margin: 0,
                        WebkitAppearance: "none"
                    },
                    "&::-webkit-inner-spin-button": {
                        margin: 0,
                        WebkitAppearance: "none"
                    }
                }
            },
            textarea: {
                "&::-webkit-input-placeholder": {
                    color: theme.palette.text.disabled
                },
                "&::-moz-placeholder": {
                    opacity: 1,
                    color: theme.palette.text.disabled
                },
                "&:-ms-input-placeholder": {
                    color: theme.palette.text.disabled
                },
                "&::placeholder": {
                    color: theme.palette.text.disabled
                }
            },
            ".slick-prev:before, .slick-next:before": {
                display: "none"
            },
            "& .auth-pages": {
                "& .gradient": {
                    // background: createGradient(
                    //   theme.palette.primary.main,
                    //   theme.palette.primary.dark
                    // ),
                    background: theme.palette.primary.main,
                    width: "100%",
                    borderRadius: "0 0 40px 40px",
                    paddingLeft: theme.spacing(6),
                    paddingRight: theme.spacing(6),
                    paddingTop: theme.spacing(6),
                    paddingBottom: theme.spacing(16),
                    "& .company-name": {
                        marginTop: theme.direction === "rtl" ? theme.spacing(1) : theme.spacing(0),
                        marginBottom: theme.direction === "rtl" ? theme.spacing(1) : theme.spacing(0)
                    }
                },
                "& .card": {
                    maxWidth: 560,
                    margin: "auto",
                    marginTop: "-80px",
                    flexDirection: "column",
                    justifyContent: "center",
                    padding: theme.spacing(3, 3)
                },
                "& .password-card": {
                    maxWidth: 560,
                    margin: "auto",
                    marginTop: "-80px",
                    padding: theme.spacing(4),
                    "& .full-width-btn": {
                        marginTop: theme.spacing(1)
                    }
                }
            }
        }
    });
}


/***/ }),

/***/ 69996:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _palette__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(82376);
/* harmony import */ var _typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(46897);
/* harmony import */ var _shadows__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8255);
/* harmony import */ var _overrides__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(46028);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(72805);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(71913);
/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_emotion_cache__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var stylis__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(44615);
/* harmony import */ var stylis_plugin_rtl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(93195);
/* harmony import */ var stylis_plugin_rtl__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(stylis_plugin_rtl__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _mui_material_locale__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(22311);
/* harmony import */ var _mui_material_locale__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_mui_material_locale__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _shape__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(56448);
/* harmony import */ var _breakpoints__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(80436);
/* harmony import */ var src_redux_store__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(95684);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([stylis__WEBPACK_IMPORTED_MODULE_11__]);
stylis__WEBPACK_IMPORTED_MODULE_11__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



// material





//  { customShadows }










const Localization = (lang)=>{
    switch(lang){
        case "ar":
            return "arEG";
        case "fr":
            return "frFR";
        case "en":
            return "enUS";
        default:
            return "frFR";
    }
};
function ThemeConfig({ children  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_9__.useRouter)();
    const lang = router.locale;
    const locale = Localization(lang);
    const [mode, setMode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const dir = lang === "ar" ? "rtl" : "ltr";
    const { themeMode  } = (0,src_redux_store__WEBPACK_IMPORTED_MODULE_16__/* .useSelector */ .v9)(({ settings  })=>settings);
    const isDark = mode === "dark";
    // Create style cache
    const styleCache = _emotion_cache__WEBPACK_IMPORTED_MODULE_10___default()({
        key: dir === "rtl" ? "muirtl" : "css",
        stylisPlugins: dir === "rtl" ? [
            stylis__WEBPACK_IMPORTED_MODULE_11__.prefixer,
            (stylis_plugin_rtl__WEBPACK_IMPORTED_MODULE_12___default())
        ] : []
    });
    // styleCache.compat = true;
    const FONT_PRIMARY = "'Poppins', sans-serif"; // Google Font
    const FONT_SECONDARY = "'Noto Kufi Arabic', sans-serif"; // Google Font
    const themeWithLocale = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.createTheme)({
            palette: isDark ? {
                ..._palette__WEBPACK_IMPORTED_MODULE_4__/* ["default"].dark */ .Z.dark,
                mode: "dark"
            } : {
                ..._palette__WEBPACK_IMPORTED_MODULE_4__/* ["default"].light */ .Z.light,
                mode: "light"
            },
            shape: _shape__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z,
            typography: {
                ..._typography__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,
                fontFamily: dir === "rtl" ? FONT_SECONDARY : FONT_PRIMARY
            },
            breakpoints: _breakpoints__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z,
            direction: dir,
            shadows: isDark ? _shadows__WEBPACK_IMPORTED_MODULE_6__/* ["default"].dark */ .Z.dark : _shadows__WEBPACK_IMPORTED_MODULE_6__/* ["default"].light */ .Z.light
        }, _mui_material_locale__WEBPACK_IMPORTED_MODULE_13__[locale]), // eslint-disable-next-line react-hooks/exhaustive-deps
    [
        locale,
        isDark,
        mode
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setMode(themeMode);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        themeMode
    ]);
    themeWithLocale.components = (0,_overrides__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(themeWithLocale);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_emotion_react__WEBPACK_IMPORTED_MODULE_8__.CacheProvider, {
        value: styleCache,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.ThemeProvider, {
            theme: themeWithLocale,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.CssBaseline, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
                    dir: dir,
                    children: children
                })
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ThemeConfig);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 46028:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ ComponentsOverrides)
});

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(46517);
;// CONCATENATED MODULE: ./src/theme/overrides/card.js
// ----------------------------------------------------------------------
function Card(theme) {
    return {
        MuiCard: {
            styleOverrides: {
                root: {
                    position: "relative",
                    zIndex: 0,
                    // border: `1px solid ${theme.palette.divider}`,
                    boxShadow: "0px 10px 32px -4px rgba(19, 25, 39, 0.10), 0px 6px 14px -6px rgba(19, 25, 39, 0.12)",
                    transition: "all ease-in-out 0.3s",
                    background: theme.palette.background.paper
                }
            }
        },
        MuiCardHeader: {
            defaultProps: {
                titleTypographyProps: {
                    variant: "h6"
                },
                subheaderTypographyProps: {
                    variant: "body2",
                    marginTop: theme.spacing(0.5)
                }
            },
            styleOverrides: {
                root: {
                    padding: theme.spacing(3, 3, 0)
                }
            }
        },
        MuiCardContent: {
            styleOverrides: {
                root: {
                    padding: theme.spacing(3)
                }
            }
        }
    };
}

;// CONCATENATED MODULE: ./src/theme/overrides/tabs.js
// ----------------------------------------------------------------------
function Tabs(theme) {
    return {
        MuiTabs: {
            styleOverrides: {
                root: {
                    "& .MuiTabs-indicator": {
                        borderRadius: "3px 3px 0px 0px",
                        height: "3px"
                    }
                }
            }
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    padding: "0 10px",
                    minWidth: 48,
                    fontWeight: theme.typography.fontWeightMedium,
                    borderTopLeftRadius: theme.shape.borderRadius,
                    borderTopRightRadius: theme.shape.borderRadius,
                    "&:not(:last-of-type)": {
                        marginRight: theme.spacing(2)
                    }
                },
                labelIcon: {
                    minHeight: 48,
                    flexDirection: "row",
                    "& > *:first-of-type": {
                        marginBottom: 0,
                        marginRight: theme.spacing(1)
                    }
                },
                wrapper: {
                    flexDirection: "row",
                    whiteSpace: "nowrap"
                },
                textColorInherit: {
                    opacity: 1,
                    color: theme.palette.text.secondary
                }
            }
        },
        MuiTabPanel: {
            styleOverrides: {
                root: {
                    padding: 0
                }
            }
        },
        MuiTabScrollButton: {
            styleOverrides: {
                root: {
                    width: 48,
                    borderRadius: "50%"
                }
            }
        }
    };
}

;// CONCATENATED MODULE: ./src/theme/overrides/menu.js
// ----------------------------------------------------------------------
function Menu(theme) {
    return {
        MuiMenu: {
            styleOverrides: {
                root: {
                    "& .MuiBackdrop-root": {
                        backdropFilter: "blur(0px)"
                    },
                    "&.Mui-selected": {
                        backgroundColor: theme.palette.action.selected,
                        "&:hover": {
                            backgroundColor: theme.palette.action.hover
                        }
                    }
                }
            }
        }
    };
}

;// CONCATENATED MODULE: ./src/theme/overrides/link.js
// ----------------------------------------------------------------------
function Link(theme) {
    return {
        MuiLink: {
            defaultProps: {
                underline: "hover"
            },
            styleOverrides: {
                root: {}
            },
            variants: [
                {
                    props: {
                        color: "primary"
                    },
                    style: {
                        color: theme.palette.primary.main
                    }
                }
            ]
        }
    };
}

;// CONCATENATED MODULE: ./src/theme/overrides/lists.js
// ----------------------------------------------------------------------
function Lists(theme) {
    return {
        MuiListItemIcon: {
            styleOverrides: {
                root: {
                    color: "inherit",
                    minWidth: "auto",
                    marginRight: theme.spacing(2)
                }
            }
        },
        MuiListItemAvatar: {
            styleOverrides: {
                root: {
                    minWidth: "auto",
                    marginRight: theme.spacing(2)
                }
            }
        },
        MuiListItemText: {
            styleOverrides: {
                root: {
                    marginTop: 0,
                    marginBottom: 0
                },
                multiline: {
                    marginTop: 0,
                    marginBottom: 0
                }
            }
        }
    };
}

// EXTERNAL MODULE: ./src/theme/palette.ts
var palette = __webpack_require__(82376);
;// CONCATENATED MODULE: ./src/theme/overrides/table.js

// ----------------------------------------------------------------------
function Table(theme) {
    return {
        MuiTable: {
            styleOverrides: {
                root: {
                    "& .MuiTableRow-head": {
                        background: (0,palette/* createGradient */.F)(theme.palette.primary.main, theme.palette.primary.darker)
                    }
                }
            },
            MuiTableRow: {
                styleOverrides: {
                    root: {
                        "&.Mui-selected": {
                            backgroundColor: theme.palette.action.selected,
                            "&:hover": {
                                backgroundColor: theme.palette.action.hover
                            }
                        }
                    }
                }
            },
            MuiTableCell: {
                styleOverrides: {
                    root: {
                        borderBottom: "none"
                    },
                    head: {
                        color: theme.palette.text.secondary,
                        backgroundColor: "transparent",
                        "&:first-of-type": {
                            paddingLeft: theme.spacing(3)
                        },
                        "&:last-of-type": {
                            paddingRight: theme.spacing(3)
                        }
                    },
                    stickyHeader: {
                        background: (0,palette/* createGradient */.F)(theme.palette.primary.main, theme.palette.primary.darker)
                    },
                    body: {
                        borderBottom: "1px solid " + theme.palette.divider,
                        paddingTop: theme.spacing(1),
                        paddingBottom: theme.spacing(1),
                        "&:first-of-type": {
                            paddingLeft: theme.spacing(3)
                        },
                        "&:last-of-type": {
                            paddingRight: theme.spacing(3)
                        }
                    }
                }
            },
            MuiTablePagination: {
                styleOverrides: {
                    root: {
                        borderTop: `solid 1px ${theme.palette.divider}`
                    },
                    toolbar: {
                        height: 64
                    },
                    select: {
                        "&:focus": {
                            borderRadius: theme.shape.borderRadius
                        }
                    },
                    selectIcon: {
                        width: 20,
                        height: 20,
                        marginTop: 2
                    }
                }
            }
        }
    };
}

;// CONCATENATED MODULE: ./src/theme/overrides/alert.js
// import { Icon } from '@iconify/react';
// import infoFill from '@iconify/icons-eva/info-fill';
// import alertCircleFill from '@iconify/icons-eva/alert-circle-fill';
// import alertTriangleFill from '@iconify/icons-eva/alert-triangle-fill';
// import checkmarkCircle2Fill from '@iconify/icons-eva/checkmark-circle-2-fill';
// ----------------------------------------------------------------------
function Alert(theme) {
    const isLight = theme.palette.mode === "light";
    const standardStyle = (color)=>({
            color: theme.palette[color][isLight ? "darker" : "lighter"],
            backgroundColor: theme.palette[color][isLight ? "lighter" : "darker"],
            "& .MuiAlert-icon": {
                color: theme.palette[color][isLight ? "main" : "light"]
            }
        });
    const filledStyle = (color)=>({
            color: theme.palette[color].contrastText
        });
    const outlinedStyle = (color)=>({
            color: theme.palette[color][isLight ? "darker" : "lighter"],
            border: `solid 1px ${theme.palette[color][isLight ? "light" : "dark"]}`,
            backgroundColor: theme.palette[color][isLight ? "lighter" : "darker"],
            "& .MuiAlert-icon": {
                color: theme.palette[color][isLight ? "main" : "light"]
            }
        });
    return {
        MuiAlert: {
            defaultProps: {
            },
            styleOverrides: {
                message: {
                    "& .MuiAlertTitle-root": {
                        marginBottom: theme.spacing(0.5)
                    }
                },
                action: {
                    "& button:not(:first-of-type)": {
                        marginLeft: theme.spacing(1)
                    }
                },
                standardInfo: standardStyle("info"),
                standardSuccess: standardStyle("success"),
                standardWarning: standardStyle("warning"),
                standardError: standardStyle("error"),
                filledInfo: filledStyle("info"),
                filledSuccess: filledStyle("success"),
                filledWarning: filledStyle("warning"),
                filledError: filledStyle("error"),
                outlinedInfo: outlinedStyle("info"),
                outlinedSuccess: outlinedStyle("success"),
                outlinedWarning: outlinedStyle("warning"),
                outlinedError: outlinedStyle("error")
            }
        }
    };
}

;// CONCATENATED MODULE: ./src/theme/overrides/paper.js
// ----------------------------------------------------------------------
function Paper(theme) {
    return {
        MuiPaper: {
            defaultProps: {
                elevation: 0
            },
            styleOverrides: {
                root: {
                    backgroundImage: "none",
                    backgroundColor: theme.palette.background.default
                }
            }
        }
    };
}

;// CONCATENATED MODULE: ./src/theme/overrides/input.js
// ----------------------------------------------------------------------
function Input(theme) {
    return {
        MuiInputBase: {
            styleOverrides: {
                root: {
                    "&.Mui-disabled": {
                        "& svg": {
                            color: theme.palette.text.disabled
                        }
                    }
                },
                input: {
                    "&::placeholder": {
                        opacity: 1,
                        color: theme.palette.text.disabled
                    }
                }
            }
        },
        MuiInput: {
            styleOverrides: {
                underline: {
                    "&:before": {
                        borderBottomColor: theme.palette.grey[50056]
                    }
                }
            }
        },
        MuiFilledInput: {
            styleOverrides: {
                root: {
                    backgroundColor: theme.palette.grey[50012],
                    "&:hover": {
                        backgroundColor: theme.palette.grey[50016]
                    },
                    "&.Mui-focused": {
                        backgroundColor: theme.palette.action.focus
                    },
                    "&.Mui-disabled": {
                        backgroundColor: theme.palette.action.disabledBackground
                    }
                },
                underline: {
                    "&:before": {
                        borderBottomColor: theme.palette.grey[50056]
                    }
                }
            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: theme.palette.grey[50032]
                    },
                    "&.Mui-disabled": {
                        "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: theme.palette.action.disabledBackground
                        }
                    }
                }
            }
        }
    };
}

// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(65692);
;// CONCATENATED MODULE: ./src/theme/overrides/drawer.js

// ----------------------------------------------------------------------
function Drawer(theme) {
    const isLight = theme.palette.mode === "light";
    return {
        MuiDrawer: {
            styleOverrides: {
                modal: {
                    '&[role="presentation"]': {
                        "& .MuiDrawer-paperAnchorLeft": {
                            border: `1px solid ${theme.palette.background.neutral}!important`,
                            boxShadow: `8px 24px 24px 12px ${(0,material_.alpha)(theme.palette.grey[900], isLight ? 0.16 : 0.48)}`
                        },
                        "& .MuiDrawer-paperAnchorRight": {
                            border: `1px solid ${theme.palette.background.neutral}!important`,
                            boxShadow: `-8px 24px 24px 12px ${(0,material_.alpha)(theme.palette.grey[900], isLight ? 0.16 : 0.48)}`
                        }
                    }
                }
            }
        }
    };
}

;// CONCATENATED MODULE: ./src/theme/overrides/dialog.js
// ----------------------------------------------------------------------
function Dialog(theme) {
    return {
        MuiDialog: {
            defaultProps: {
                dir: theme.direction
            },
            styleOverrides: {
                paper: {
                    width: "100%",
                    margin: 0,
                    "&.MuiPaper-rounded": {
                        borderRadius: theme.shape.borderRadiusMd
                    },
                    "&.MuiDialog-paperFullScreen": {
                        borderRadius: 0
                    },
                    "&.MuiDialog-paper .MuiDialogActions-root": {
                        padding: theme.spacing(3)
                    },
                    "@media (max-width: 600px)": {
                        margin: theme.spacing(2)
                    },
                    "@media (max-width: 663.95px)": {
                        "&.MuiDialog-paperWidthSm.MuiDialog-paperScrollBody": {
                            maxWidth: "100%"
                        }
                    }
                },
                paperFullWidth: {
                    width: "100%"
                }
            }
        },
        MuiDialogTitle: {
            styleOverrides: {
                root: {
                    padding: theme.spacing(3, 3, 0)
                }
            }
        },
        MuiDialogContent: {
            styleOverrides: {
                root: {
                    borderTop: 0,
                    borderBottom: 0,
                    padding: theme.spacing(3)
                }
            }
        },
        MuiDialogActions: {
            styleOverrides: {
                root: {
                    "& > :not(:first-of-type)": {
                        marginLeft: theme.spacing(1.5)
                    }
                }
            }
        }
    };
}

;// CONCATENATED MODULE: ./src/theme/overrides/button.js
// ----------------------------------------------------------------------
function Button(theme) {
    return {
        MuiButton: {
            styleOverrides: {
                root: {
                    "&:hover": {
                        boxShadow: "none"
                    },
                    "&.MuiButton-sizeMedium": {
                        height: 40
                    },
                    "&.MuiButton-sizeSmall": {
                        height: 32
                    }
                },
                sizeLarge: {
                    height: 48
                },
                // contained
                containedInherit: {
                    color: theme.palette.grey[800],
                    // boxShadow: theme.customShadows.z8,
                    "&:hover": {
                        backgroundColor: theme.palette.grey[400]
                    }
                },
                containedPrimary: {
                },
                containedSecondary: {
                },
                containedInfo: {
                },
                containedSuccess: {
                },
                containedWarning: {
                },
                containedError: {
                },
                // outlined
                outlinedInherit: {
                    border: `1px solid ${theme.palette.grey[50032]}`,
                    "&:hover": {
                        backgroundColor: theme.palette.action.hover
                    }
                },
                textInherit: {
                    "&:hover": {
                        backgroundColor: theme.palette.action.hover
                    }
                }
            }
        }
    };
}

;// CONCATENATED MODULE: ./src/theme/overrides/switch.js
// ----------------------------------------------------------------------
function Switch(theme) {
    const isLight = theme.palette.mode === "light";
    return {
        MuiSwitch: {
            styleOverrides: {
                thumb: {
                },
                track: {
                    opacity: 1,
                    backgroundColor: theme.palette.grey[500]
                },
                switchBase: {
                    left: 0,
                    right: "auto",
                    "&:not(:.Mui-checked)": {
                        color: theme.palette.grey[isLight ? 100 : 300]
                    },
                    "&.Mui-checked.Mui-disabled, &.Mui-disabled": {
                        color: theme.palette.grey[isLight ? 400 : 600]
                    },
                    "&.Mui-disabled+.MuiSwitch-track": {
                        opacity: 1,
                        backgroundColor: `${theme.palette.action.disabledBackground} !important`
                    }
                }
            }
        }
    };
}

;// CONCATENATED MODULE: external "@mui/icons-material/ExpandMoreRounded"
const ExpandMoreRounded_namespaceObject = require("@mui/icons-material/ExpandMoreRounded");
var ExpandMoreRounded_default = /*#__PURE__*/__webpack_require__.n(ExpandMoreRounded_namespaceObject);
;// CONCATENATED MODULE: ./src/theme/overrides/select.js

// ----------------------------------------------------------------------
function Select(theme) {
    return {
        MuiSelect: {
            defaultProps: {
                IconComponent: (ExpandMoreRounded_default())
            },
            styleOverrides: {
                root: {
                    background: theme.palette.background.paper
                }
            }
        }
    };
}

;// CONCATENATED MODULE: ./src/theme/overrides/svgIcon.js
// ----------------------------------------------------------------------
function SvgIcon() {
    return {
        MuiSvgIcon: {
            styleOverrides: {
                fontSizeSmall: {
                    width: 20,
                    height: 20,
                    fontSize: "inherit"
                },
                fontSizeLarge: {
                    width: 32,
                    height: 32,
                    fontSize: "inherit"
                }
            }
        }
    };
}

;// CONCATENATED MODULE: ./src/theme/overrides/Tooltip.js
// ----------------------------------------------------------------------
function Tooltip(theme) {
    const isLight = theme.palette.mode === "light";
    return {
        MuiTooltip: {
            styleOverrides: {
                tooltip: {
                    backgroundColor: theme.palette.grey[isLight ? 800 : 700]
                },
                arrow: {
                    color: theme.palette.grey[isLight ? 800 : 700]
                }
            }
        }
    };
}

;// CONCATENATED MODULE: ./src/theme/overrides/popover.js
// ----------------------------------------------------------------------
function Popover(theme) {
    return {
        MuiPopover: {
            defaultProps: {
                dir: theme.direction
            },
            styleOverrides: {
                root: {
                    "& .MuiBackdrop-root": {
                        opacity: "0!important"
                    }
                }
            }
        }
    };
}

;// CONCATENATED MODULE: ./src/theme/overrides/stepper.js
// ----------------------------------------------------------------------
function Stepper(theme) {
    return {
        MuiStepConnector: {
            styleOverrides: {
                line: {
                    borderColor: theme.palette.divider
                }
            }
        }
    };
}

// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(18442);
;// CONCATENATED MODULE: ./src/theme/overrides/skeleton.js
// ----------------------------------------------------------------------

function Skeleton(theme) {
    return {
        MuiSkeleton: {
            defaultProps: {
                animation: "wave"
            },
            styleOverrides: {
                root: {
                    backgroundColor: theme.palette.background.neutral,
                    "&::after": {
                        backgroundImage: `linear-gradient(90deg, transparent, ${(0,styles_.alpha)(theme.palette.grey[500], 0.1)}, transparent)`
                    }
                }
            }
        }
    };
}

;// CONCATENATED MODULE: ./src/theme/overrides/backdrop.js

function Backdrop(theme) {
    return {
        MuiBackdrop: {
            styleOverrides: {
                root: {
                    backdropFilter: "blur(6px)",
                    WebkitBackdropFilter: "blur(6px)",
                    backgroundColor: (0,styles_.alpha)(theme.palette.background.paper, 0.72),
                    "&.MuiBackdrop-invisible": {
                        background: "transparent"
                    }
                }
            }
        }
    };
}

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
;// CONCATENATED MODULE: ./src/theme/overrides/checkbox.js


// ----------------------------------------------------------------------
function Icon(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx(material_.SvgIcon, {
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M17 3a4 4 0 014 4v10a4 4 0 01-4 4H7a4 4 0 01-4-4V7a4 4 0 014-4h10zm0 2H7a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2z"
        })
    });
}
function CheckedIcon(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx(material_.SvgIcon, {
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M17 3a4 4 0 014 4v10a4 4 0 01-4 4H7a4 4 0 01-4-4V7a4 4 0 014-4h10zm-1.372 4.972a1.006 1.006 0 00-.928.388l-3.78 5-1.63-2.08a1.001 1.001 0 00-1.58 1.23l2.44 3.11a1 1 0 001.58-.01l4.57-6v-.03a1.006 1.006 0 00-.672-1.608z"
        })
    });
}
function IndeterminateIcon(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx(material_.SvgIcon, {
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M17 3a4 4 0 014 4v10a4 4 0 01-4 4H7a4 4 0 01-4-4V7a4 4 0 014-4h10zm-1.75 8h-6.5a.75.75 0 00-.75.75v.5c0 .414.336.75.75.75h6.5a.75.75 0 00.75-.75v-.5a.75.75 0 00-.75-.75z"
        })
    });
}
function Checkbox(theme) {
    return {
        MuiCheckbox: {
            defaultProps: {
                icon: /*#__PURE__*/ jsx_runtime_.jsx(Icon, {}),
                checkedIcon: /*#__PURE__*/ jsx_runtime_.jsx(CheckedIcon, {}),
                indeterminateIcon: /*#__PURE__*/ jsx_runtime_.jsx(IndeterminateIcon, {})
            },
            styleOverrides: {
                root: {
                    padding: theme.spacing(1),
                    "&.Mui-checked.Mui-disabled, &.Mui-disabled": {
                        color: theme.palette.action.disabled
                    },
                    "& .MuiSvgIcon-fontSizeMedium": {
                        width: 24,
                        height: 24
                    },
                    "& .MuiSvgIcon-fontSizeSmall": {
                        width: 20,
                        height: 20
                    },
                    svg: {
                        fontSize: 24,
                        "&[font-size=small]": {
                            fontSize: 20
                        }
                    }
                }
            }
        }
    };
}

;// CONCATENATED MODULE: ./src/theme/overrides/Typography.js
// ----------------------------------------------------------------------
function Typography(theme) {
    return {
        MuiTypography: {
            styleOverrides: {
                paragraph: {
                    marginBottom: theme.spacing(2)
                },
                gutterBottom: {
                    marginBottom: theme.spacing(1)
                }
            }
        }
    };
}

;// CONCATENATED MODULE: ./src/theme/overrides/pagination.js

// ----------------------------------------------------------------------
function Pagination(theme) {
    return {
        MuiPaginationItem: {
            styleOverrides: {
                root: {
                    "&.Mui-selected": {
                        fontWeight: theme.typography.fontWeightBold
                    },
                    "&.MuiPaginationItem-ellipsis": {
                        borderRadius: "4px",
                        height: 32
                    }
                },
                textPrimary: {
                    "&.Mui-selected": {
                        color: theme.palette.primary.main,
                        backgroundColor: (0,styles_.alpha)(theme.palette.primary.main, 0.08),
                        "&:hover, &.Mui-focusVisible": {
                            backgroundColor: `${(0,styles_.alpha)(theme.palette.primary.main, 0.24)} !important`
                        }
                    }
                },
                outlined: {
                    border: `1px solid ${theme.palette.grey[50032]}`
                },
                outlinedPrimary: {
                    "&.Mui-selected": {
                        backgroundColor: (0,styles_.alpha)(theme.palette.primary.main, 0.08),
                        border: `1px solid ${(0,styles_.alpha)(theme.palette.primary.main, 0.24)}`
                    }
                }
            }
        }
    };
}

;// CONCATENATED MODULE: ./src/theme/overrides/buttonGroup.js
// ----------------------------------------------------------------------
function ButtonGroup(theme) {
    const styleContained = (color)=>({
            props: {
                variant: "contained",
                color
            }
        });
    return {
        MuiButtonGroup: {
            variants: [
                {
                    props: {
                        variant: "contained",
                        color: "inherit"
                    }
                },
                styleContained("primary"),
                styleContained("secondary"),
                styleContained("info"),
                styleContained("success"),
                styleContained("warning"),
                styleContained("error"),
                {
                    props: {
                        disabled: true
                    },
                    style: {
                        boxShadow: "none",
                        "& .MuiButtonGroup-grouped.Mui-disabled": {
                            color: theme.palette.action.disabled,
                            borderColor: `${theme.palette.action.disabledBackground} !important`,
                            "&.MuiButton-contained": {
                                backgroundColor: theme.palette.action.disabledBackground
                            }
                        }
                    }
                }
            ],
            styleOverrides: {
                root: {
                    "&:hover": {
                        boxShadow: "none"
                    }
                }
            }
        }
    };
}

;// CONCATENATED MODULE: ./src/theme/overrides/controlLabel.js
// ----------------------------------------------------------------------
function ControlLabel(theme) {
    return {
        MuiFormControlLabel: {
            styleOverrides: {
                label: {
                    ...theme.typography.body2
                }
            }
        },
        MuiFormHelperText: {
            styleOverrides: {
                root: {
                    marginTop: theme.spacing(1)
                }
            }
        },
        MuiFormLabel: {
            styleOverrides: {
                root: {
                    color: theme.palette.text.disabled
                }
            }
        }
    };
}

;// CONCATENATED MODULE: ./src/theme/overrides/loadingButton.js
// ----------------------------------------------------------------------
function LoadingButton() {
    return {
        MuiLoadingButton: {
            styleOverrides: {
                root: {
                    "&.MuiButton-text": {
                        "& .MuiLoadingButton-startIconPendingStart": {
                            marginLeft: 0
                        },
                        "& .MuiLoadingButton-endIconPendingEnd": {
                            marginRight: 0
                        }
                    }
                }
            }
        }
    };
}

;// CONCATENATED MODULE: ./src/theme/overrides/index.js



























// ----------------------------------------------------------------------
function ComponentsOverrides(theme) {
    return (0,external_lodash_.merge)(Tabs(theme), Card(theme), Menu(theme), Link(theme), Input(theme), Lists(theme), Table(theme), Paper(theme), Alert(theme), Switch(theme), Select(theme), Button(theme), Dialog(theme), Drawer(theme), Stepper(theme), Tooltip(theme), Popover(theme), SvgIcon(theme), Checkbox(theme), Skeleton(theme), Backdrop(theme), Typography(theme), Pagination(theme), ButtonGroup(theme), ControlLabel(theme), LoadingButton(theme));
}


/***/ }),

/***/ 8255:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export customShadows */
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _palette__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(82376);
// material


// ----------------------------------------------------------------------
const LIGHT_MODE = _palette__WEBPACK_IMPORTED_MODULE_1__/* ["default"].light.grey[500] */ .Z.light.grey[500];
const DARK_MODE = "#000000";
const createShadow = (color)=>{
    const transparent1 = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)(color, 0.2);
    const transparent2 = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)(color, 0.14);
    const transparent3 = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)(color, 0.12);
    return [
        "none",
        `0px 2px 1px -1px ${transparent1},0px 1px 1px 0px ${transparent2},0px 1px 3px 0px ${transparent3}`,
        `0px 3px 1px -2px ${transparent1},0px 2px 2px 0px ${transparent2},0px 1px 5px 0px ${transparent3}`,
        `0px 3px 3px -2px ${transparent1},0px 3px 4px 0px ${transparent2},0px 1px 8px 0px ${transparent3}`,
        `0px 2px 4px -1px ${transparent1},0px 4px 5px 0px ${transparent2},0px 1px 10px 0px ${transparent3}`,
        `0px 3px 5px -1px ${transparent1},0px 5px 8px 0px ${transparent2},0px 1px 14px 0px ${transparent3}`,
        `0px 3px 5px -1px ${transparent1},0px 6px 10px 0px ${transparent2},0px 1px 18px 0px ${transparent3}`,
        `0px 4px 5px -2px ${transparent1},0px 7px 10px 1px ${transparent2},0px 2px 16px 1px ${transparent3}`,
        `0px 5px 5px -3px ${transparent1},0px 8px 10px 1px ${transparent2},0px 3px 14px 2px ${transparent3}`,
        `0px 5px 6px -3px ${transparent1},0px 9px 12px 1px ${transparent2},0px 3px 16px 2px ${transparent3}`,
        `0px 6px 6px -3px ${transparent1},0px 10px 14px 1px ${transparent2},0px 4px 18px 3px ${transparent3}`,
        `0px 6px 7px -4px ${transparent1},0px 11px 15px 1px ${transparent2},0px 4px 20px 3px ${transparent3}`,
        `0px 7px 8px -4px ${transparent1},0px 12px 17px 2px ${transparent2},0px 5px 22px 4px ${transparent3}`,
        `0px 7px 8px -4px ${transparent1},0px 13px 19px 2px ${transparent2},0px 5px 24px 4px ${transparent3}`,
        `0px 7px 9px -4px ${transparent1},0px 14px 21px 2px ${transparent2},0px 5px 26px 4px ${transparent3}`,
        `0px 8px 9px -5px ${transparent1},0px 15px 22px 2px ${transparent2},0px 6px 28px 5px ${transparent3}`,
        `0px 8px 10px -5px ${transparent1},0px 16px 24px 2px ${transparent2},0px 6px 30px 5px ${transparent3}`,
        `0px 8px 11px -5px ${transparent1},0px 17px 26px 2px ${transparent2},0px 6px 32px 5px ${transparent3}`,
        `0px 9px 11px -5px ${transparent1},0px 18px 28px 2px ${transparent2},0px 7px 34px 6px ${transparent3}`,
        `0px 9px 12px -6px ${transparent1},0px 19px 29px 2px ${transparent2},0px 7px 36px 6px ${transparent3}`,
        `0px 10px 13px -6px ${transparent1},0px 20px 31px 3px ${transparent2},0px 8px 38px 7px ${transparent3}`,
        `0px 10px 13px -6px ${transparent1},0px 21px 33px 3px ${transparent2},0px 8px 40px 7px ${transparent3}`,
        `0px 10px 14px -6px ${transparent1},0px 22px 35px 3px ${transparent2},0px 8px 42px 7px ${transparent3}`,
        `0px 11px 14px -7px ${transparent1},0px 23px 36px 3px ${transparent2},0px 9px 44px 8px ${transparent3}`,
        `0px 11px 15px -7px ${transparent1},0px 24px 38px 3px ${transparent2},0px 9px 46px 8px ${transparent3}`
    ];
};
const createCustomShadow = (color)=>{
    const transparent = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)(color, 0.24);
    return {
        z1: `0 3px 6px rgb(48 51 128 / 10%)`,
        z8: `0 8px 16px 0 ${transparent}`,
        z12: `0 0 2px 0 ${transparent}, 0 12px 24px 0 ${transparent}`,
        z16: `0 0 2px 0 ${transparent}, 0 16px 32px -4px ${transparent}`,
        z20: `0 0 2px 0 ${transparent}, 0 20px 40px -4px ${transparent}`,
        z24: `0 0 4px 0 ${transparent}, 0 24px 48px 0 ${transparent}`,
        primary: `0px 8px 16px ${(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)(_palette__WEBPACK_IMPORTED_MODULE_1__/* ["default"].light.primary.main */ .Z.light.primary.main, 0.56)}`,
        secondary: `-4px -4px 20px ${(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)(_palette__WEBPACK_IMPORTED_MODULE_1__/* ["default"].light.secondary.main */ .Z.light.secondary.main, 0.24)}`,
        info: `0px 8px 16px ${(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)(_palette__WEBPACK_IMPORTED_MODULE_1__/* ["default"].light.info.main */ .Z.light.info.main, 0.24)}`,
        success: `0px 8px 16px ${(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)(_palette__WEBPACK_IMPORTED_MODULE_1__/* ["default"].light.success.main */ .Z.light.success.main, 0.24)}`,
        warning: ` 0px 8px 16px ${(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)(_palette__WEBPACK_IMPORTED_MODULE_1__/* ["default"].light.warning.main */ .Z.light.warning.main, 0.24)}`,
        error: ` 0px 8px 16px ${(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)(_palette__WEBPACK_IMPORTED_MODULE_1__/* ["default"].light.error.main */ .Z.light.error.main, 0.24)}`
    };
};
// type error
const customShadows = {
    light: createCustomShadow(LIGHT_MODE),
    dark: createCustomShadow(DARK_MODE)
};
// type error
const shadows = {
    light: createShadow(LIGHT_MODE),
    dark: createShadow(DARK_MODE)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (shadows);


/***/ }),

/***/ 56448:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// ----------------------------------------------------------------------
const shape = {
    borderRadius: 8,
    borderRadiusSm: 6,
    borderRadiusMd: 8
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (shape);


/***/ }),

/***/ 46897:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// ----------------------------------------------------------------------
function pxToRem(value) {
    return `${value / 16}rem`;
}
function responsiveFontSizes({ sm , md , lg  }) {
    return {
        "@media (max-width:600px)": {
            fontSize: pxToRem(sm)
        },
        "@media (min-width:900px)": {
            fontSize: pxToRem(md)
        },
        "@media (min-width:1200px)": {
            fontSize: pxToRem(lg)
        }
    };
}
// type error
const typography = {
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    fontWeightBold: 700,
    h1: {
        fontWeight: 700,
        lineHeight: 80 / 64,
        fontSize: pxToRem(40),
        ...responsiveFontSizes({
            sm: 30,
            md: 58,
            lg: 64
        })
    },
    h2: {
        fontWeight: 700,
        lineHeight: 64 / 48,
        fontSize: pxToRem(32),
        ...responsiveFontSizes({
            sm: 26,
            md: 44,
            lg: 48
        })
    },
    h3: {
        fontWeight: 700,
        lineHeight: 1.5,
        fontSize: pxToRem(24),
        ...responsiveFontSizes({
            sm: 24,
            md: 30,
            lg: 32
        })
    },
    h4: {
        fontWeight: 700,
        lineHeight: 1.5,
        fontSize: pxToRem(20),
        ...responsiveFontSizes({
            sm: 20,
            md: 24,
            lg: 24
        })
    },
    h5: {
        fontWeight: 700,
        lineHeight: 1.5,
        fontSize: pxToRem(18),
        ...responsiveFontSizes({
            sm: 18,
            md: 20,
            lg: 20
        })
    },
    h6: {
        fontWeight: 700,
        lineHeight: 28 / 18,
        fontSize: pxToRem(17),
        ...responsiveFontSizes({
            sm: 14,
            md: 18,
            lg: 18
        })
    },
    subtitle1: {
        fontWeight: 600,
        lineHeight: 1.5,
        fontSize: pxToRem(16)
    },
    subtitle2: {
        fontWeight: 600,
        lineHeight: 22 / 14,
        fontSize: pxToRem(14)
    },
    body1: {
        lineHeight: 1.5,
        fontSize: pxToRem(16)
    },
    body2: {
        lineHeight: 22 / 14,
        fontSize: pxToRem(12)
    },
    caption: {
        lineHeight: 1.5,
        fontSize: pxToRem(10)
    },
    overline: {
        fontWeight: 700,
        lineHeight: 1.5,
        fontSize: pxToRem(12),
        letterSpacing: 1.1,
        textTransform: "uppercase"
    },
    button: {
        fontWeight: 700,
        lineHeight: 24 / 14,
        fontSize: pxToRem(14),
        textTransform: "capitalize"
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (typography);


/***/ }),

/***/ 71913:
/***/ ((module) => {

module.exports = require("@emotion/cache");

/***/ }),

/***/ 72805:
/***/ ((module) => {

module.exports = require("@emotion/react");

/***/ }),

/***/ 34751:
/***/ ((module) => {

module.exports = require("@mui/icons-material/DeleteOutlineRounded");

/***/ }),

/***/ 87140:
/***/ ((module) => {

module.exports = require("@mui/icons-material/EmailRounded");

/***/ }),

/***/ 30582:
/***/ ((module) => {

module.exports = require("@mui/icons-material/FacebookOutlined");

/***/ }),

/***/ 7185:
/***/ ((module) => {

module.exports = require("@mui/icons-material/FavoriteBorderRounded");

/***/ }),

/***/ 25304:
/***/ ((module) => {

module.exports = require("@mui/icons-material/FileDownloadDoneRounded");

/***/ }),

/***/ 73467:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Home");

/***/ }),

/***/ 49989:
/***/ ((module) => {

module.exports = require("@mui/icons-material/HomeOutlined");

/***/ }),

/***/ 35776:
/***/ ((module) => {

module.exports = require("@mui/icons-material/HomeRounded");

/***/ }),

/***/ 73281:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Instagram");

/***/ }),

/***/ 51070:
/***/ ((module) => {

module.exports = require("@mui/icons-material/KeyboardArrowDownRounded");

/***/ }),

/***/ 31398:
/***/ ((module) => {

module.exports = require("@mui/icons-material/KeyboardArrowUpRounded");

/***/ }),

/***/ 95939:
/***/ ((module) => {

module.exports = require("@mui/icons-material/LinkedIn");

/***/ }),

/***/ 83983:
/***/ ((module) => {

module.exports = require("@mui/icons-material/LocalPhoneRounded");

/***/ }),

/***/ 89801:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Logout");

/***/ }),

/***/ 31939:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Person");

/***/ }),

/***/ 2881:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Person4Rounded");

/***/ }),

/***/ 55018:
/***/ ((module) => {

module.exports = require("@mui/icons-material/PersonOutlined");

/***/ }),

/***/ 45941:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Pinterest");

/***/ }),

/***/ 38017:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Search");

/***/ }),

/***/ 28626:
/***/ ((module) => {

module.exports = require("@mui/icons-material/SendRounded");

/***/ }),

/***/ 79153:
/***/ ((module) => {

module.exports = require("@mui/icons-material/ShoppingBasket");

/***/ }),

/***/ 31548:
/***/ ((module) => {

module.exports = require("@mui/icons-material/ShoppingBasketOutlined");

/***/ }),

/***/ 22749:
/***/ ((module) => {

module.exports = require("@mui/icons-material/ShoppingCartOutlined");

/***/ }),

/***/ 87458:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Storefront");

/***/ }),

/***/ 6412:
/***/ ((module) => {

module.exports = require("@mui/icons-material/TuneRounded");

/***/ }),

/***/ 76829:
/***/ ((module) => {

module.exports = require("@mui/lab/LoadingButton");

/***/ }),

/***/ 65692:
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ 83882:
/***/ ((module) => {

module.exports = require("@mui/material/AppBar");

/***/ }),

/***/ 52120:
/***/ ((module) => {

module.exports = require("@mui/material/Avatar");

/***/ }),

/***/ 19:
/***/ ((module) => {

module.exports = require("@mui/material/Box");

/***/ }),

/***/ 49048:
/***/ ((module) => {

module.exports = require("@mui/material/CircularProgress");

/***/ }),

/***/ 8611:
/***/ ((module) => {

module.exports = require("@mui/material/Dialog");

/***/ }),

/***/ 67934:
/***/ ((module) => {

module.exports = require("@mui/material/IconButton");

/***/ }),

/***/ 94192:
/***/ ((module) => {

module.exports = require("@mui/material/List");

/***/ }),

/***/ 63787:
/***/ ((module) => {

module.exports = require("@mui/material/ListItemIcon");

/***/ }),

/***/ 78315:
/***/ ((module) => {

module.exports = require("@mui/material/ListItemText");

/***/ }),

/***/ 29271:
/***/ ((module) => {

module.exports = require("@mui/material/MenuItem");

/***/ }),

/***/ 83490:
/***/ ((module) => {

module.exports = require("@mui/material/MenuList");

/***/ }),

/***/ 21598:
/***/ ((module) => {

module.exports = require("@mui/material/Paper");

/***/ }),

/***/ 65768:
/***/ ((module) => {

module.exports = require("@mui/material/Popover");

/***/ }),

/***/ 76563:
/***/ ((module) => {

module.exports = require("@mui/material/RadioGroup");

/***/ }),

/***/ 40441:
/***/ ((module) => {

module.exports = require("@mui/material/Skeleton");

/***/ }),

/***/ 28742:
/***/ ((module) => {

module.exports = require("@mui/material/Stack");

/***/ }),

/***/ 36042:
/***/ ((module) => {

module.exports = require("@mui/material/TextField");

/***/ }),

/***/ 27163:
/***/ ((module) => {

module.exports = require("@mui/material/Typography");

/***/ }),

/***/ 22311:
/***/ ((module) => {

module.exports = require("@mui/material/locale");

/***/ }),

/***/ 18442:
/***/ ((module) => {

module.exports = require("@mui/material/styles");

/***/ }),

/***/ 75184:
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 2296:
/***/ ((module) => {

module.exports = require("formik");

/***/ }),

/***/ 99344:
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ 45567:
/***/ ((module) => {

module.exports = require("jwt-decode");

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

/***/ 75668:
/***/ ((module) => {

module.exports = require("next-translate/appWithI18n");

/***/ }),

/***/ 60866:
/***/ ((module) => {

module.exports = require("next-translate/useTranslation");

/***/ }),

/***/ 53918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 45732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 92796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 3539:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

/***/ }),

/***/ 34014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 64486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 50744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 35843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 99552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

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

/***/ 82470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 59232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 40618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 71853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 580:
/***/ ((module) => {

module.exports = require("prop-types");

/***/ }),

/***/ 16689:
/***/ ((module) => {

module.exports = require("react");

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

/***/ 93195:
/***/ ((module) => {

module.exports = require("stylis-plugin-rtl");

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

/***/ }),

/***/ 44615:
/***/ ((module) => {

module.exports = import("stylis");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [9315,2049,3770,8473,6913,428,7134,9089,4197,1033,9329,3891,7382,5684,3669], () => (__webpack_exec__(88362)));
module.exports = __webpack_exports__;

})();