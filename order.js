"use strict";
(() => {
var exports = {};
exports.id = 1941;
exports.ids = [1941];
exports.modules = {

/***/ 37301:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Details)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(65692);
// EXTERNAL MODULE: external "@mui/icons-material/Person2Rounded"
var Person2Rounded_ = __webpack_require__(75837);
var Person2Rounded_default = /*#__PURE__*/__webpack_require__.n(Person2Rounded_);
;// CONCATENATED MODULE: external "@mui/icons-material/LocalShippingRounded"
const LocalShippingRounded_namespaceObject = require("@mui/icons-material/LocalShippingRounded");
var LocalShippingRounded_default = /*#__PURE__*/__webpack_require__.n(LocalShippingRounded_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/MonetizationOnRounded"
const MonetizationOnRounded_namespaceObject = require("@mui/icons-material/MonetizationOnRounded");
var MonetizationOnRounded_default = /*#__PURE__*/__webpack_require__.n(MonetizationOnRounded_namespaceObject);
// EXTERNAL MODULE: external "next-translate/useTranslation"
var useTranslation_ = __webpack_require__(60866);
var useTranslation_default = /*#__PURE__*/__webpack_require__.n(useTranslation_);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(18442);
// EXTERNAL MODULE: external "@mui/material/Card"
var Card_ = __webpack_require__(68167);
var Card_default = /*#__PURE__*/__webpack_require__.n(Card_);
;// CONCATENATED MODULE: ./src/components/_main/orders/orderDetails/styled.ts


const RootStyled = (0,styles_.styled)((Card_default()))(({ theme  })=>({
        "& .detail-card": {
            minHeight: 226,
            "& .detail-card-btn": {
                display: "block",
                minWidth: 50,
                lineHeight: 0,
                minHeight: 50,
                color: theme.palette.text.primary,
                background: (0,styles_.alpha)(theme.palette.primary.main, 0.3),
                "&:hover": {
                    background: theme.palette.primary.dark
                },
                "& .email-heading": {
                    wordWrap: "break-word"
                }
            }
        },
        "& .skeleton": {
            marginLeft: "auto"
        }
    }));
/* harmony default export */ const styled = (RootStyled);

;// CONCATENATED MODULE: ./src/components/_main/orders/orderDetails/index.tsx


// material





// styles

function Details({ ...props }) {
    const { data , isLoading  } = props;
    const { t  } = useTranslation_default()("order");
    const user = data?.user;
    return /*#__PURE__*/ jsx_runtime_.jsx(styled, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.CardContent, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(material_.Stack, {
                    direction: "row",
                    alignItems: "center",
                    pb: 1,
                    children: isLoading ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Skeleton, {
                                variant: "text",
                                width: 150
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Skeleton, {
                                variant: "text",
                                width: 170,
                                className: "skeleton"
                            })
                        ]
                    }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                variant: "h6",
                                children: t("order-details")
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Typography, {
                                ml: "auto",
                                variant: "body1",
                                children: [
                                    t("order-id"),
                                    ": ",
                                    data?._id
                                ]
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(material_.Divider, {}),
                /*#__PURE__*/ jsx_runtime_.jsx(material_.Stack, {
                    mt: 4,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                        spacing: 2,
                        container: true,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                                item: true,
                                xs: 12,
                                md: 4,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Card, {
                                    className: "detail-card",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.CardContent, {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Stack, {
                                                spacing: 2,
                                                direction: "row",
                                                justifyContent: "flex-start",
                                                alignItems: "center",
                                                children: isLoading ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Skeleton, {
                                                            variant: "rectangular",
                                                            width: 50,
                                                            height: 50
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Skeleton, {
                                                            variant: "text",
                                                            width: 150
                                                        })
                                                    ]
                                                }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                                                            className: "detail-card-btn",
                                                            variant: "contained",
                                                            color: "primary",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((Person2Rounded_default()), {})
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                                            variant: "h6",
                                                            children: t("customor-details")
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Stack, {
                                                spacing: isLoading ? 0 : 1,
                                                mt: 3,
                                                children: isLoading ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Skeleton, {
                                                            variant: "text",
                                                            width: 200
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Skeleton, {
                                                            variant: "text",
                                                            width: 200
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Skeleton, {
                                                            variant: "text",
                                                            width: 200
                                                        })
                                                    ]
                                                }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Typography, {
                                                            variant: "body2",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                                                    children: t("name")
                                                                }),
                                                                ": ",
                                                                user?.fullName
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Typography, {
                                                            variant: "body2",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                                                    children: t("phone")
                                                                }),
                                                                ": ",
                                                                user?.phone
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Typography, {
                                                            className: "email-haeding",
                                                            variant: "body2",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                                                    children: t("email")
                                                                }),
                                                                ": ",
                                                                user?.email
                                                            ]
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                                item: true,
                                xs: 12,
                                md: 4,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Card, {
                                    className: "detail-card",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.CardContent, {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Stack, {
                                                spacing: 2,
                                                direction: "row",
                                                justifyContent: "flex-start",
                                                alignItems: "center",
                                                children: isLoading ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Skeleton, {
                                                            variant: "rectangular",
                                                            width: 50,
                                                            height: 50
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Skeleton, {
                                                            variant: "text",
                                                            width: 150
                                                        })
                                                    ]
                                                }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                                                            className: "detail-card-btn",
                                                            variant: "contained",
                                                            color: "primary",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((LocalShippingRounded_default()), {})
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                                            variant: "h6",
                                                            children: t("shipping-address")
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Stack, {
                                                spacing: isLoading ? 0 : 1,
                                                mt: 3,
                                                children: isLoading ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Skeleton, {
                                                            variant: "text",
                                                            width: 200
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Skeleton, {
                                                            variant: "text",
                                                            width: 200
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Skeleton, {
                                                            variant: "text",
                                                            width: 200
                                                        })
                                                    ]
                                                }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Typography, {
                                                            variant: "body2",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                                                    children: t("address")
                                                                }),
                                                                ": ",
                                                                user?.address,
                                                                " ",
                                                                user?.zip,
                                                                ", ",
                                                                user?.city,
                                                                " ",
                                                                user?.state,
                                                                ",",
                                                                " ",
                                                                user?.country
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Typography, {
                                                            variant: "body2",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                                                    children: t("order-date")
                                                                }),
                                                                ":",
                                                                " ",
                                                                data?.createdAt && new Date(data?.createdAt).toLocaleDateString("en-US", {
                                                                    year: "numeric",
                                                                    month: "long",
                                                                    day: "numeric",
                                                                    minute: "numeric",
                                                                    hour: "numeric"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                                item: true,
                                xs: 12,
                                md: 4,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Card, {
                                    className: "detail-card",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.CardContent, {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Stack, {
                                                spacing: 2,
                                                direction: "row",
                                                justifyContent: "flex-start",
                                                alignItems: "center",
                                                children: isLoading ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Skeleton, {
                                                            variant: "rectangular",
                                                            width: 50,
                                                            height: 50
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Skeleton, {
                                                            variant: "text",
                                                            width: 150
                                                        })
                                                    ]
                                                }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                                                            className: "detail-card-btn",
                                                            variant: "contained",
                                                            color: "primary",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((MonetizationOnRounded_default()), {})
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                                            variant: "h6",
                                                            children: t("payment-method")
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Stack, {
                                                spacing: isLoading ? 0 : 1,
                                                mt: 3,
                                                children: isLoading ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Skeleton, {
                                                            variant: "text",
                                                            width: 200
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Skeleton, {
                                                            variant: "text",
                                                            width: 200
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Skeleton, {
                                                            variant: "text",
                                                            width: 200
                                                        })
                                                    ]
                                                }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Typography, {
                                                            variant: "body2",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                                                    children: t("method")
                                                                }),
                                                                ":",
                                                                " ",
                                                                data?.paymentMethod === "COD" ? t("cash-on-delivery") : t("credit-card")
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Typography, {
                                                            variant: "body2",
                                                            textTransform: "capitalize",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                                                    children: t("status")
                                                                }),
                                                                ": ",
                                                                data?.status
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Typography, {
                                                            variant: "body2",
                                                            textTransform: "capitalize",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                                                    children: t("shipping-fee")
                                                                }),
                                                                ": ",
                                                                data?.currency,
                                                                " ",
                                                                data?.shipping
                                                            ]
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
}


/***/ }),

/***/ 16996:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ TableCard)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: external "next-translate/useTranslation"
var useTranslation_ = __webpack_require__(60866);
var useTranslation_default = /*#__PURE__*/__webpack_require__.n(useTranslation_);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(65692);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(18442);
// EXTERNAL MODULE: ./src/theme/palette.ts
var palette = __webpack_require__(82376);
;// CONCATENATED MODULE: ./src/components/_main/orders/tableDetails/styled.ts


const RootStyled = (0,styles_.styled)("div")(({ theme  })=>({
        "& .table-main": {
            minWidth: 450,
            "& .head-row": {
                background: (0,palette/* createGradient */.F)(theme.palette.primary.main, theme.palette.primary.dark),
                "& .head-row-cell": {
                    color: theme.palette.common.white
                }
            },
            "& .body-row-cell": {}
        },
        [theme.breakpoints.down("sm")]: {
            // display: "none",
            "& .head-row-cell": {
                color: theme.palette.common.white,
                "&.active": {
                    display: "none"
                }
            },
            "& .body-column-cell": {
                display: "none"
            }
        }
    }));
/* harmony default export */ const styled = (RootStyled);

;// CONCATENATED MODULE: ./src/components/_main/orders/tableDetails/index.tsx


// material




const ThumbImgStyle = (0,styles_.styled)("img")(({ theme  })=>({
        width: 64,
        height: 64,
        objectFit: "cover",
        // margin: theme.spacing(0, 2),
        borderRadius: theme.shape.borderRadius,
        border: "1px solid" + theme.palette.divider
    }));
function ItemsTable({ ...props }) {
    const theme = (0,styles_.useTheme)();
    const { data , isLoading , currency  } = props;
    const { t  } = useTranslation_default()("order");
    return /*#__PURE__*/ jsx_runtime_.jsx(styled, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(material_.TableContainer, {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Table, {
                className: "table-main",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.TableHead, {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.TableRow, {
                            className: "head-row",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(material_.TableCell, {
                                    className: "head-row-cell",
                                    children: t("product")
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(material_.TableCell, {
                                    className: "head-row-cell active",
                                    children: t("color")
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(material_.TableCell, {
                                    className: "head-row-cell",
                                    children: t("quantity")
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(material_.TableCell, {
                                    className: "head-row-cell active",
                                    children: t("size")
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(material_.TableCell, {
                                    className: "head-row-cell",
                                    children: t("Price")
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(material_.TableBody, {
                        children: (isLoading ? Array.from(new Array(3)) : data)?.map((row, i)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.TableRow, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.TableCell, {
                                        children: row ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Stack, {
                                            direction: "row",
                                            spacing: 2,
                                            alignItems: "center",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(ThumbImgStyle, {
                                                    alt: row?.variantName,
                                                    src: row?.cover
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Stack, {
                                                    spacing: 0.5,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                                                            variant: "subtitle2",
                                                            noWrap: true,
                                                            fontSize: {
                                                                xs: "12px",
                                                                sm: "0.875rem"
                                                            },
                                                            children: row?.variantName.slice(0, 50)
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Stack, {
                                                            spacing: 1,
                                                            direction: "row",
                                                            alignItems: "center",
                                                            sx: {
                                                                display: {
                                                                    xs: "flex",
                                                                    sm: "none"
                                                                }
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Typography, {
                                                                    variant: "body2",
                                                                    fontSize: 10,
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                                                            children: "Color :"
                                                                        }),
                                                                        " ",
                                                                        row.color ? row.color : "N/A"
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Typography, {
                                                                    variant: "body2",
                                                                    fontSize: 10,
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                                                            children: "Size :"
                                                                        }),
                                                                        " ",
                                                                        row.size ? row.size : "N/A"
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Stack, {
                                            direction: "row",
                                            spacing: 2,
                                            alignItems: "center",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Skeleton, {
                                                    variant: "rectangular",
                                                    width: 64,
                                                    height: 64
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Skeleton, {
                                                    variant: "text",
                                                    width: 100
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.TableCell, {
                                        className: "body-column-cell",
                                        children: row ? row.color ? row.color : "N/A" : /*#__PURE__*/ jsx_runtime_.jsx(material_.Skeleton, {
                                            variant: "text",
                                            width: 100
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.TableCell, {
                                        children: row ? (row?.quantity) : /*#__PURE__*/ jsx_runtime_.jsx(material_.Skeleton, {
                                            variant: "text",
                                            width: 100
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.TableCell, {
                                        className: "body-column-cell",
                                        children: row ? row?.size ? (row?.size) : "N/A" : /*#__PURE__*/ jsx_runtime_.jsx(material_.Skeleton, {
                                            variant: "text",
                                            width: 100
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.TableCell, {
                                        children: row ? `${currency} ${row?.priceSale || row?.price}` : /*#__PURE__*/ jsx_runtime_.jsx(material_.Skeleton, {
                                            variant: "text",
                                            width: 100
                                        })
                                    })
                                ]
                            }, `row-${i}`))
                    })
                ]
            })
        })
    });
}

// EXTERNAL MODULE: external "@mui/material/Card"
var Card_ = __webpack_require__(68167);
var Card_default = /*#__PURE__*/__webpack_require__.n(Card_);
;// CONCATENATED MODULE: ./src/components/_main/orders/tableCard/styled.ts


const styled_RootStyled = (0,styles_.styled)((Card_default()))(({ theme  })=>({
        marginTop: theme.spacing(1),
        "& .body-row": {
            "& .MuiTableCell-root": {
                background: (0,styles_.alpha)(theme.palette.primary.main, 0.1)
            }
        },
        "& .skeleton-h5": {
            margin: theme.spacing(2)
        },
        "&  .skeleton-text": {
            float: "right"
        }
    }));
/* harmony default export */ const tableCard_styled = (styled_RootStyled);

;// CONCATENATED MODULE: ./src/components/_main/orders/tableCard/index.tsx



// material

// components


function TableCard({ ...props }) {
    const { t  } = useTranslation_default()("order");
    const { data , isLoading  } = props;
    const items = data?.items;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(tableCard_styled, {
        children: [
            isLoading ? /*#__PURE__*/ jsx_runtime_.jsx(material_.Skeleton, {
                variant: "text",
                width: 100,
                className: "skeleton-h5"
            }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Typography, {
                variant: "h5",
                p: 2,
                children: [
                    items?.length,
                    " ",
                    items?.length > 1 ? t("items") : t("item")
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(ItemsTable, {
                currency: data?.currency,
                data: items,
                isLoading: isLoading
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Divider, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(material_.Table, {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.TableBody, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.TableRow, {
                            className: "body-row",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(material_.TableCell, {
                                    colSpan: 4
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(material_.TableCell, {
                                    align: "right",
                                    children: isLoading ? /*#__PURE__*/ jsx_runtime_.jsx(material_.Skeleton, {
                                        variant: "text",
                                        className: "skeleton-text",
                                        width: 100
                                    }) : /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                        children: t("subtotal")
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(material_.TableCell, {
                                    align: "right",
                                    children: isLoading ? /*#__PURE__*/ jsx_runtime_.jsx(material_.Skeleton, {
                                        variant: "text",
                                        className: "skeleton-text",
                                        width: 100
                                    }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("strong", {
                                        children: [
                                            data?.currency,
                                            " ",
                                            data?.subTotal
                                        ]
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.TableRow, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(material_.TableCell, {
                                    colSpan: 4
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(material_.TableCell, {
                                    align: "right",
                                    children: isLoading ? /*#__PURE__*/ jsx_runtime_.jsx(material_.Skeleton, {
                                        variant: "text",
                                        className: "skeleton-text",
                                        width: 100
                                    }) : /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                        children: t("shipping-fee")
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(material_.TableCell, {
                                    align: "right",
                                    children: isLoading ? /*#__PURE__*/ jsx_runtime_.jsx(material_.Skeleton, {
                                        variant: "text",
                                        className: "skeleton-text",
                                        width: 100
                                    }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("strong", {
                                        children: [
                                            data?.currency,
                                            " ",
                                            data?.shipping
                                        ]
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.TableRow, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(material_.TableCell, {
                                    colSpan: 4
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(material_.TableCell, {
                                    align: "right",
                                    children: isLoading ? /*#__PURE__*/ jsx_runtime_.jsx(material_.Skeleton, {
                                        variant: "text",
                                        className: "skeleton-text",
                                        width: 100
                                    }) : /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                        children: t("total")
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(material_.TableCell, {
                                    align: "right",
                                    children: isLoading ? /*#__PURE__*/ jsx_runtime_.jsx(material_.Skeleton, {
                                        variant: "text",
                                        className: "skeleton-text",
                                        width: 100
                                    }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("strong", {
                                        children: [
                                            data?.currency,
                                            " ",
                                            data?.total
                                        ]
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
}


/***/ }),

/***/ 25531:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OrderDetail),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _next_translate_root_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50608);
/* harmony import */ var next_translate_loadNamespaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87462);
/* harmony import */ var next_translate_loadNamespaces__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_translate_loadNamespaces__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(61175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(60866);
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(75408);
/* harmony import */ var src_components_main_orders_orderDetails__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(37301);
/* harmony import */ var src_components_main_orders_tableCard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(16996);
/* harmony import */ var src_services__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(20428);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var src_redux_slices_product__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(87382);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([src_components__WEBPACK_IMPORTED_MODULE_7__, src_services__WEBPACK_IMPORTED_MODULE_10__]);
([src_components__WEBPACK_IMPORTED_MODULE_7__, src_services__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// @ts-ignore


// @ts-ignore

// @ts-ignore



// material

// components



// api

// utils

// redux


//
// ----------------------------------------------------------------------
function OrderDetail() {
    const { t  } = next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_5___default()("order");
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_11__.useRouter)();
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_12__.useDispatch)();
    const { oid: id  } = router.query;
    const { data: singleOrder , isLoading  } = (0,react_query__WEBPACK_IMPORTED_MODULE_4__.useQuery)([
        "order",
        id
    ], ()=>src_services__WEBPACK_IMPORTED_MODULE_10__/* .getSingleOrder */ .oR(id), {
        enabled: Boolean(id),
        retry: 2,
        onError: (error)=>{
            if (!error.response.data.success) {
                router.push("/404");
            }
        }
    });
    const data = singleOrder?.data;
    react__WEBPACK_IMPORTED_MODULE_3___default().useEffect(()=>{
        dispatch((0,src_redux_slices_product__WEBPACK_IMPORTED_MODULE_13__/* .resetCart */ .s9)());
    }, []);
    return(// <Page title={`Order created | ${process.env.DOMAIN_NAME}`}>
    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components__WEBPACK_IMPORTED_MODULE_7__/* .Page */ .T3, {
        title: `Order created | Nextstore`,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Container, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {
                mb: 5,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Typography, {
                        variant: "h3",
                        mt: 5,
                        mb: 2,
                        children: isLoading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Skeleton, {
                            variant: "text",
                            width: 170
                        }) : t("order-created")
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_main_orders_orderDetails__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        data: data,
                        isLoading: isLoading,
                        currency: data?.currency
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_components_main_orders_tableCard__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                        data: data,
                        isLoading: isLoading
                    })
                ]
            })
        })
    }));
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
                pathname: "/order",
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

/***/ 25304:
/***/ ((module) => {

module.exports = require("@mui/icons-material/FileDownloadDoneRounded");

/***/ }),

/***/ 75837:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Person2Rounded");

/***/ }),

/***/ 38017:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Search");

/***/ }),

/***/ 65692:
/***/ ((module) => {

module.exports = require("@mui/material");

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

/***/ 99648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ 66197:
/***/ ((module) => {

module.exports = import("framer-motion");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [9315,2049,8473,6913,428,7134,9089,4197,1033,9329,3891,7382], () => (__webpack_exec__(25531)));
module.exports = __webpack_exports__;

})();