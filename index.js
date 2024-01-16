"use strict";
(() => {
var exports = {};
exports.id = 5405;
exports.ids = [5405];
exports.modules = {

/***/ 39743:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

// Define the HomeBanners schema
const HomeBannersSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({
    bannerAfterSlider1: {
        cover: {
            _id: {
                type: String,
                required: [
                    true,
                    "image-id-required-error"
                ]
            },
            url: {
                type: String,
                required: [
                    true,
                    "image-url-required-error"
                ]
            },
            blurDataUrl: {
                type: String,
                required: [
                    true,
                    "image-blur-data-url-required-error"
                ]
            }
        },
        url: String
    },
    bannerAfterSlider2: {
        cover: {
            _id: {
                type: String,
                required: [
                    true,
                    "image-id-required-error"
                ]
            },
            url: {
                type: String,
                required: [
                    true,
                    "image-url-required-error"
                ]
            },
            blurDataUrl: {
                type: String,
                required: [
                    true,
                    "image-blur-data-url-required-error"
                ]
            }
        },
        url: String
    },
    bannerAfterSlider3: {
        cover: {
            _id: {
                type: String,
                required: [
                    true,
                    "image-id-required-error"
                ]
            },
            url: {
                type: String,
                required: [
                    true,
                    "image-url-required-error"
                ]
            },
            blurDataUrl: {
                type: String,
                required: [
                    true,
                    "image-blur-data-url-required-error"
                ]
            }
        },
        url: String
    },
    centeredBanner: {
        cover: {
            _id: {
                type: String,
                required: [
                    true,
                    "image-id-required-error"
                ]
            },
            url: {
                type: String,
                required: [
                    true,
                    "image-url-required-error"
                ]
            },
            blurDataUrl: {
                type: String,
                required: [
                    true,
                    "image-blur-data-url-required-error"
                ]
            }
        },
        url: String
    }
}, {
    timestamps: true
});
// Define and export the HomeBanners model
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.HomeBanners) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model("HomeBanners", HomeBannersSchema));


/***/ }),

/***/ 35649:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const HomeSliderSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({
    cover: {
        _id: {
            type: String,
            required: [
                true,
                "Image ID is required."
            ]
        },
        url: {
            type: String,
            required: [
                true,
                "Image URL is required."
            ]
        },
        blurDataUrl: {
            type: String,
            required: [
                true,
                "Image blur data URL is required."
            ]
        }
    },
    heading: {
        type: String,
        required: [
            true,
            "Heading is required."
        ]
    },
    description: {
        type: String,
        required: [
            true,
            "Description is required."
        ]
    },
    enabled: {
        type: Boolean,
        required: [
            true,
            "Enabled status is required."
        ]
    },
    btnPrimary: {
        btnText: {
            type: String
        },
        url: {
            type: String
        }
    },
    btnSecondary: {
        btnText: {
            type: String
        },
        url: {
            type: String
        }
    }
}, {
    timestamps: true
});
const HomeSlider = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.HomeSlider) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model("HomeSlider", HomeSliderSchema);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomeSlider);


/***/ }),

/***/ 36703:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ EcommerceShop)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(33770);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(65692);
// EXTERNAL MODULE: ./src/components/illustrations/index.ts + 1 modules
var illustrations = __webpack_require__(36541);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(18442);
// EXTERNAL MODULE: external "@mui/material/Paper"
var Paper_ = __webpack_require__(21598);
var Paper_default = /*#__PURE__*/__webpack_require__.n(Paper_);
;// CONCATENATED MODULE: ./src/components/_main/home/featured/styled.ts


const RootStyled = (0,styles_.styled)((Paper_default()))(({ theme  })=>({
        "& .heading": {
            textAlign: "center",
            marginTop: theme.spacing(8)
        },
        "& .description": {
            textTransform: "capitalize",
            marginBottom: theme.spacing(5),
            textAlign: "center"
        },
        "& .dialog-wrapper": {
            "& .MuiDialog-paper": {
                width: "100%!important",
                margin: 0
            }
        },
        "& .view-button": {
            marginLeft: "auto",
            display: "flex",
            alignItems: "center",
            marginTop: theme.spacing(2),
            marginBottom: theme.spacing(4),
            svg: {
                transform: theme.direction === "rtl" ? "rotate(180deg)" : "rotate(0deg)"
            }
        }
    }));
/* harmony default export */ const styled = (RootStyled);

;// CONCATENATED MODULE: ./src/components/_main/home/featured/index.tsx
// react



// next

// material

// components

// styles

const ProductsCarousel = dynamic_default()(()=>Promise.all(/* import() */[__webpack_require__.e(7382), __webpack_require__.e(5684), __webpack_require__.e(2654), __webpack_require__.e(378), __webpack_require__.e(3787), __webpack_require__.e(9133)]).then(__webpack_require__.bind(__webpack_require__, 69133)), {
    loadableGenerated: {
        modules: [
            "../components/_main/home/featured/index.tsx -> " + "src/components/carousels/productsCarousel/productsCarousel"
        ]
    }
});
const ProductDetailsSumary = dynamic_default()(null, {
    loadableGenerated: {
        modules: [
            "../components/_main/home/featured/index.tsx -> " + "src/components/_main/productDetails/summary"
        ]
    },
    ssr: false
});
const DialogCarousel = dynamic_default()(null, {
    loadableGenerated: {
        modules: [
            "../components/_main/home/featured/index.tsx -> " + "src/components/carousels/detailsCarousel/detailsCarousel"
        ]
    },
    ssr: false
});
// ----------------------------------------------------------------------
const Transition = /*#__PURE__*/ external_react_default().forwardRef(function Transition(props, ref) {
    return /*#__PURE__*/ jsx_runtime_.jsx(material_.Fade, {
        ref: ref,
        ...props
    });
});
function EcommerceShop({ ...props }) {
    const { data , t  } = props;
    const isLoading = !data;
    const { symbol , unitRate  } = (0,external_react_redux_.useSelector)(({ settings  })=>settings);
    const [product, setProduct] = external_react_default().useState(null);
    const [loading, setLoading] = external_react_default().useState(true);
    external_react_default().useEffect(()=>{
        if (data) {
            setLoading(false);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(styled, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                variant: "h2",
                color: "text.primary",
                className: "heading",
                children: t("featured-products")
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                variant: "body1",
                color: "text.secondary",
                className: "description",
                children: t("lorem-ipsum")
            }),
            !isLoading && data?.length === 0 && /*#__PURE__*/ jsx_runtime_.jsx(illustrations/* NoDataFound */.m, {}),
            Boolean(data?.length) && /*#__PURE__*/ jsx_runtime_.jsx(ProductsCarousel, {
                data: data
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Dialog, {
                open: Boolean(product),
                onClose: ()=>setProduct(false),
                maxWidth: "md",
                TransitionComponent: Transition,
                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.DialogContent, {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                        container: true,
                        spacing: 3,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                                item: true,
                                xs: 12,
                                md: 5,
                                children: product && /*#__PURE__*/ jsx_runtime_.jsx(DialogCarousel, {
                                    product: product,
                                    isDialog: true
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                                item: true,
                                xs: 12,
                                md: 7,
                                children: product && /*#__PURE__*/ jsx_runtime_.jsx(ProductDetailsSumary, {
                                    product: product,
                                    isLoading: isLoading || loading,
                                    isDialog: true,
                                    unitRate: unitRate,
                                    symbol: symbol
                                })
                            })
                        ]
                    })
                })
            })
        ]
    });
}


/***/ }),

/***/ 11219:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _next_translate_root_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50608);
/* harmony import */ var next_translate_loadNamespaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87462);
/* harmony import */ var next_translate_loadNamespaces__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_translate_loadNamespaces__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(33770);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(60866);
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lib_dbConnect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(77990);
/* harmony import */ var models_HomeSlider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(35649);
/* harmony import */ var models_Brands__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(49269);
/* harmony import */ var models_Products__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(63137);
/* harmony import */ var models_HomeBanners__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(39743);
/* harmony import */ var _mui_material___WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(40419);
/* harmony import */ var _mui_material___WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_material___WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var src_components_skeletons_home_heroCarousel__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(63591);
/* harmony import */ var src_components_skeletons_home_bannersSkeleton__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(73362);
/* harmony import */ var src_components__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(75408);
/* harmony import */ var models_SubCategories__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(20723);
/* harmony import */ var models_Categories__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(59718);
/* harmony import */ var src_components_main_home_featured__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(36703);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([src_components__WEBPACK_IMPORTED_MODULE_14__]);
src_components__WEBPACK_IMPORTED_MODULE_14__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// @ts-ignore


// @ts-ignore

// @ts-ignore
// react

// next


// mongoose models





// material

// skeletons





// dynamic import
const HeroCarousel = next_dynamic__WEBPACK_IMPORTED_MODULE_4___default()(()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 70716)), {
    loadableGenerated: {
        modules: [
            "index.tsx -> " + "src/components/carousels/heroCarousel/heroCarousel"
        ]
    },
    loading: ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_skeletons_home_heroCarousel__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {})
});
const Banners = next_dynamic__WEBPACK_IMPORTED_MODULE_4___default()(()=>__webpack_require__.e(/* import() */ 8652).then(__webpack_require__.bind(__webpack_require__, 38652)), {
    loadableGenerated: {
        modules: [
            "index.tsx -> " + "src/components/_main/home/banners"
        ]
    },
    loading: ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_skeletons_home_bannersSkeleton__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {})
});
const Categories = next_dynamic__WEBPACK_IMPORTED_MODULE_4___default()(()=>__webpack_require__.e(/* import() */ 2723).then(__webpack_require__.bind(__webpack_require__, 2723)), {
    loadableGenerated: {
        modules: [
            "index.tsx -> " + "src/components/_main/home/categories"
        ]
    }
});
const TopCollections = next_dynamic__WEBPACK_IMPORTED_MODULE_4___default()(()=>__webpack_require__.e(/* import() */ 9154).then(__webpack_require__.bind(__webpack_require__, 79154)), {
    loadableGenerated: {
        modules: [
            "index.tsx -> " + "src/components/_main/home/topCollections"
        ]
    }
});
const CenteredBanner = next_dynamic__WEBPACK_IMPORTED_MODULE_4___default()(()=>__webpack_require__.e(/* import() */ 4828).then(__webpack_require__.bind(__webpack_require__, 14828)), {
    loadableGenerated: {
        modules: [
            "index.tsx -> " + "src/components/_main/home/centeredBanner"
        ]
    }
});

const WhyUs = next_dynamic__WEBPACK_IMPORTED_MODULE_4___default()(()=>__webpack_require__.e(/* import() */ 7045).then(__webpack_require__.bind(__webpack_require__, 47045)), {
    loadableGenerated: {
        modules: [
            "index.tsx -> " + "src/components/_main/home/whyUs"
        ]
    }
});
const BrandsMain = next_dynamic__WEBPACK_IMPORTED_MODULE_4___default()(()=>__webpack_require__.e(/* import() */ 9958).then(__webpack_require__.bind(__webpack_require__, 9958)), {
    loadableGenerated: {
        modules: [
            "index.tsx -> " + "src/components/_main/home/brands"
        ]
    }
});
const _getStaticProps = async ()=>{
    await (0,lib_dbConnect__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)();
    const slides = await models_HomeSlider__WEBPACK_IMPORTED_MODULE_7__/* ["default"].find */ .Z.find();
    const brands = await models_Brands__WEBPACK_IMPORTED_MODULE_8__/* ["default"].find */ .Z.find();
    const homeBanners = await models_HomeBanners__WEBPACK_IMPORTED_MODULE_10__/* ["default"].find */ .Z.find({});
    await models_SubCategories__WEBPACK_IMPORTED_MODULE_15__/* ["default"].findOne */ .Z.findOne();
    const categories = await models_Categories__WEBPACK_IMPORTED_MODULE_16__/* ["default"].find */ .Z.find({}).populate("subCategories");
    const featuredProducts = await models_Products__WEBPACK_IMPORTED_MODULE_9__/* ["default"].aggregate */ .Z.aggregate([
        {
            $lookup: {
                from: "reviews",
                localField: "reviews",
                foreignField: "_id",
                as: "reviews"
            }
        },
        {
            $addFields: {
                averageRating: {
                    $avg: "$reviews.rating"
                }
            }
        },
        {
            $match: {
                isFeatured: true
            }
        },
        {
            $limit: 12
        }
    ]);
    const topRatedProducts = await models_Products__WEBPACK_IMPORTED_MODULE_9__/* ["default"].aggregate */ .Z.aggregate([
        {
            $lookup: {
                from: "reviews",
                localField: "reviews",
                foreignField: "_id",
                as: "reviews"
            }
        },
        {
            $addFields: {
                averageRating: {
                    $avg: "$reviews.rating"
                }
            }
        },
        {
            $sort: {
                averageRating: -1
            }
        },
        {
            $limit: 8
        }
    ]);
    return {
        props: {
            featuredProducts: JSON.parse(JSON.stringify(featuredProducts)),
            slidesData: JSON.parse(JSON.stringify(slides)),
            brandData: JSON.parse(JSON.stringify(brands)),
            topRatedProducts: JSON.parse(JSON.stringify(topRatedProducts)),
            homeBanners: JSON.parse(JSON.stringify(homeBanners)),
            categories: JSON.parse(JSON.stringify(categories))
        },
        revalidate: 60
    };
};
function Home({ featuredProducts , slidesData , brandData , topRatedProducts , homeBanners , categories  }) {
    const { t  } = next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_5___default()("home");
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(src_components__WEBPACK_IMPORTED_MODULE_14__/* .Page */ .T3, {
        title: "",
        description: "",
        canonical: "",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(HeroCarousel, {
                isLoading: !slidesData,
                data: slidesData
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Banners, {
                data: homeBanners
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material___WEBPACK_IMPORTED_MODULE_11__.Container, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Categories, {
                        categories: categories,
                        t: t
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TopCollections, {
                        data: topRatedProducts,
                        t: t
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_main_home_featured__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                        data: featuredProducts,
                        t: t
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BrandsMain, {
                        data: brandData
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(WhyUs, {})
                ]
            })
        ]
    });
}
// @ts-ignore
async function getStaticProps(ctx) {
    // @ts-ignore
    let res = _getStaticProps(ctx);
    // @ts-ignore
    if (typeof res.then === "function") res = await res;
    // @ts-ignore
    return {
        // @ts-ignore
        // @ts-ignore
        ...res,
        // @ts-ignore
        props: {
            // @ts-ignore
            ...res.props || {},
            // @ts-ignore
            ...await next_translate_loadNamespaces__WEBPACK_IMPORTED_MODULE_2___default()({
                // @ts-ignore
                ...ctx,
                // @ts-ignore
                pathname: "/index",
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

/***/ 13257:
/***/ ((module) => {

module.exports = require("@mui/icons-material/ArrowBackIosRounded");

/***/ }),

/***/ 77649:
/***/ ((module) => {

module.exports = require("@mui/icons-material/ArrowBackRounded");

/***/ }),

/***/ 8598:
/***/ ((module) => {

module.exports = require("@mui/icons-material/ArrowForwardIosRounded");

/***/ }),

/***/ 29148:
/***/ ((module) => {

module.exports = require("@mui/icons-material/ArrowForwardRounded");

/***/ }),

/***/ 53409:
/***/ ((module) => {

module.exports = require("@mui/icons-material/AttachMoneyRounded");

/***/ }),

/***/ 6910:
/***/ ((module) => {

module.exports = require("@mui/icons-material/FavoriteBorder");

/***/ }),

/***/ 81277:
/***/ ((module) => {

module.exports = require("@mui/icons-material/FavoriteRounded");

/***/ }),

/***/ 25304:
/***/ ((module) => {

module.exports = require("@mui/icons-material/FileDownloadDoneRounded");

/***/ }),

/***/ 29246:
/***/ ((module) => {

module.exports = require("@mui/icons-material/LocalShippingOutlined");

/***/ }),

/***/ 15596:
/***/ ((module) => {

module.exports = require("@mui/icons-material/RemoveRedEyeOutlined");

/***/ }),

/***/ 38017:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Search");

/***/ }),

/***/ 26400:
/***/ ((module) => {

module.exports = require("@mui/icons-material/SettingsBackupRestoreRounded");

/***/ }),

/***/ 15297:
/***/ ((module) => {

module.exports = require("@mui/icons-material/StarRounded");

/***/ }),

/***/ 17711:
/***/ ((module) => {

module.exports = require("@mui/icons-material/SupportAgentRounded");

/***/ }),

/***/ 65692:
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ 40419:
/***/ ((module) => {

module.exports = require("@mui/material/");

/***/ }),

/***/ 52120:
/***/ ((module) => {

module.exports = require("@mui/material/Avatar");

/***/ }),

/***/ 19:
/***/ ((module) => {

module.exports = require("@mui/material/Box");

/***/ }),

/***/ 68167:
/***/ ((module) => {

module.exports = require("@mui/material/Card");

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

/***/ 76563:
/***/ ((module) => {

module.exports = require("@mui/material/RadioGroup");

/***/ }),

/***/ 40441:
/***/ ((module) => {

module.exports = require("@mui/material/Skeleton");

/***/ }),

/***/ 36042:
/***/ ((module) => {

module.exports = require("@mui/material/TextField");

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

/***/ 46517:
/***/ ((module) => {

module.exports = require("lodash");

/***/ }),

/***/ 11185:
/***/ ((module) => {

module.exports = require("mongoose");

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

/***/ 25700:
/***/ ((module) => {

module.exports = require("react-fast-marquee");

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
var __webpack_exports__ = __webpack_require__.X(0, [9315,2049,3770,8473,6913,428,7134,9089,4197,1033,9329,3891,572,9718,723], () => (__webpack_exec__(11219)));
module.exports = __webpack_exports__;

})();