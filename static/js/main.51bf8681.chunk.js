(this.webpackJsonptrending = this.webpackJsonptrending || []).push([
    [0], {
        112: function (e, t, a) {},
        114: function (e, t, a) {},
        144: function (e, t, a) {},
        179: function (e, t, a) {},
        181: function (e, t, a) {
            "use strict";
            a.r(t);
            var n = a(0),
                c = a.n(n),
                r = a(14),
                s = a.n(r),
                i = (a(112), a(9)),
                o = a.n(i),
                l = a(17),
                d = a(229),
                u = a(42),
                b = a(15),
                p = (a(114), a(2)),
                j = function (e) {
                    return Object(p.jsx)("span", {
                        onClick: function () {
                            return window.scroll(0, 0)
                        },
                        className: "header",
                        children: " HealDb  "
                    })
                },
                f = a(8),
                h = a(217),
                v = a(220),
                m = a(222),
                g = a(95),
                O = a.n(g),
                x = a(96),
                w = a.n(x),
                _ = a(70),
                y = a.n(_),
                k = a(97),
                N = a.n(k),
                S = Object(h.a)({
                    root: {
                        width: "100%",
                        position: "fixed",
                        bottom: 0,
                        backgroundColor: "#2d313a",
                        zIndex: 100
                    }
                });

            function C() {
                var e = S(),
                    t = c.a.useState(0),
                    a = Object(f.a)(t, 2),
                    r = a[0],
                    s = a[1],
                    i = Object(b.f)();
                return Object(n.useEffect)((function () {
                    0 === r ? i.push("/") : 1 === r ? i.push("/movies") : 2 === r ? i.push("/series") : 3 === r && i.push("/search")
                }), [r, i]), Object(p.jsxs)(v.a, {
                    value: r,
                    onChange: function (e, t) {
                        s(t)
                    },
                    showLabels: !0,
                    className: e.root,
                    children: [Object(p.jsx)(m.a, {
                        style: {
                            color: "white"
                        },
                        label: "Trending",
                        icon: Object(p.jsx)(O.a, {})
                    }), Object(p.jsx)(m.a, {
                        style: {
                            color: "white"
                        },
                        label: "Movies",
                        icon: Object(p.jsx)(w.a, {})
                    }), Object(p.jsx)(m.a, {
                        style: {
                            color: "white"
                        },
                        label: "TV Series",
                        icon: Object(p.jsx)(N.a, {})
                    }), Object(p.jsx)(m.a, {
                        style: {
                            color: "white"
                        },
                        label: "Search",
                        icon: Object(p.jsx)(y.a, {})
                    })]
                })
            }
            var P = a(18),
                T = a.n(P),
                U = "https://image.tmdb.org/t/p/w300",
                E = "https://image.tmdb.org/t/p/w500",
                M = "https://www.movienewz.com/img/films/poster-holder.jpg",
                A = a(226),
                B = a(233),
                I = a(223),
                L = a(182),
                R = a(224),
                z = a(225),
                F = (a(144), a(98)),
                G = a.n(F),
                W = (a(178), a(179), function (e) {
                    return e.preventDefault()
                }),
                D = function (e) {
                    var t = e.media_type,
                        a = e.id,
                        c = Object(n.useState)(),
                        r = Object(f.a)(c, 2),
                        s = r[0],
                        i = r[1],
                        d = null === s || void 0 === s ? void 0 : s.map((function (e) {
                            return Object(p.jsxs)("div", {
                                className: "carouselItem",
                                children: [Object(p.jsx)("img", {
                                    src: e.profile_path ? "".concat(U, "/").concat(e.profile_path) : "https://upload.wikimedia.org/wikipedia/en/6/60/No_Picture.jpg",
                                    alt: null === e || void 0 === e ? void 0 : e.name,
                                    onDragStart: W,
                                    className: "carouselItem__img"
                                }), Object(p.jsx)("b", {
                                    className: "carouselItem__txt",
                                    children: null === e || void 0 === e ? void 0 : e.name
                                })]
                            })
                        })),
                        u = function () {
                            var e = Object(l.a)(o.a.mark((function e() {
                                var n, c;
                                return o.a.wrap((function (e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, T.a.get("https://api.themoviedb.org/3/".concat(t, "/").concat(a, "/credits?api_key=f2aa6bc832a0aff8320d47cfe309bf00&lanfuage=en-US"));
                                        case 2:
                                            n = e.sent, c = n.data, i(c.cast);
                                        case 5:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function () {
                                return e.apply(this, arguments)
                            }
                        }();
                    Object(n.useEffect)((function () {
                        u()
                    }), []);
                    return Object(p.jsx)(G.a, {
                        autoPlay: !0,
                        responsive: {
                            0: {
                                items: 3
                            },
                            512: {
                                items: 5
                            },
                            1024: {
                                items: 7
                            }
                        },
                        infinite: !0,
                        mouseTracking: !0,
                        disableButtonsControls: !0,
                        disableDotsControls: !0,
                        items: d
                    })
                },
                V = a(99),
                J = a.n(V),
                q = Object(h.a)((function (e) {
                    return {
                        modal: {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
                        },
                        paper: {
                            width: "90%",
                            height: "90%",
                            backgroundColor: "rgba(0, 0, 0, 0.87)",
                            border: "1px solid #282c34",
                            borderRadius: 10,
                            color: "white",
                            boxShadow: e.shadows[5],
                            padding: e.spacing(1, 1, 3)
                        }
                    }
                }));

            function H(e) {
                var t = e.c,
                    a = e.children,
                    r = e.media_type,
                    s = e.id,
                    i = q(),
                    d = c.a.useState(!1),
                    b = Object(f.a)(d, 2),
                    j = b[0],
                    h = b[1],
                    v = Object(n.useState)(),
                    m = Object(f.a)(v, 2),
                    g = m[0],
                    O = m[1],
                    x = Object(n.useState)(),
                    w = Object(f.a)(x, 2),
                    _ = w[0],
                    y = w[1],
                    k = Object(n.useState)(!1),
                    N = Object(f.a)(k, 2),
                    S = N[0],
                    C = N[1],
                    P = function () {
                        var e = Object(l.a)(o.a.mark((function e() {
                            var t, a;
                            return o.a.wrap((function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, T.a.get("https://api.themoviedb.org/3/".concat(r, "/").concat(s, "?api_key=f2aa6bc832a0aff8320d47cfe309bf00&lanfuage=en-US"));
                                    case 3:
                                        t = e.sent, a = t.data, O(a), e.next = 11;
                                        break;
                                    case 8:
                                        e.prev = 8, e.t0 = e.catch(0), console.log(e.t0);
                                    case 11:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [0, 8]
                            ])
                        })));
                        return function () {
                            return e.apply(this, arguments)
                        }
                    }(),
                    U = function () {
                        var e = Object(l.a)(o.a.mark((function e() {
                            var t, a, n;
                            return o.a.wrap((function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, T.a.get("https://api.themoviedb.org/3/".concat(r, "/").concat(s, "/videos?api_key=f2aa6bc832a0aff8320d47cfe309bf00&lanfuage=en-US"));
                                    case 3:
                                        a = e.sent, n = a.data, y(null === (t = n.results[0]) || void 0 === t ? void 0 : t.key), e.next = 11;
                                        break;
                                    case 8:
                                        e.prev = 8, e.t0 = e.catch(0), console.log(e.t0);
                                    case 11:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [0, 8]
                            ])
                        })));
                        return function () {
                            return e.apply(this, arguments)
                        }
                    }();
                Object(n.useEffect)((function () {
                    P(), U()
                }), []);
                var A = {
                    backgroundImage: "linear-gradient(to right, rgba(0,22,78,.8), rgba(0,22,48,.8)),url(".concat(E + (null === t || void 0 === t ? void 0 : t.poster_path), ")"),
                    backgroundSize: "cover"
                };
                return Object(p.jsxs)("div", {
                    className: "position-relative col-10 px-md-3 col-md-4 col-lg-3",
                    children: [Object(p.jsxs)(J.a, {
                        flipSpeedBackToFront: .4,
                        flipSpeedFrontToBack: .4,
                        isFlipped: S,
                        flipDirection: "vertical",
                        children: [Object(p.jsx)("div", {
                            onMouseEnter: function () {
                                C(!0)
                            },
                            className: "media mx-auto",
                            type: "button",
                            children: a
                        }), Object(p.jsxs)("div", {
                            onClick: function () {
                                h(!0)
                            },
                            style: A,
                            className: "media mx-auto d-flex flex-column align-items-center",
                            onMouseLeave: function () {
                                C(!1)
                            },
                            children: [Object(p.jsx)("h4", {
                                className: "text-center tit",
                                children: null === t || void 0 === t ? void 0 : t.original_title
                            }), Object(p.jsxs)("p", {
                                className: "desc",
                                children: [Object(p.jsx)("span", {
                                    className: "span-color mr-2",
                                    children: "Vote:"
                                }), " ", (null === t || void 0 === t ? void 0 : t.vote_average) || "N/A"]
                            }), Object(p.jsxs)("p", {
                                className: "desc",
                                children: [Object(p.jsx)("span", {
                                    className: "span-color mr-2",
                                    children: "Lamguage:"
                                }), " ", (null === t || void 0 === t ? void 0 : t.original_language) || "N/A"]
                            }), Object(p.jsxs)("p", {
                                className: "desc",
                                children: [Object(p.jsx)("span", {
                                    className: "span-color mr-2",
                                    children: "Release:"
                                }), " ", (null === t || void 0 === t ? void 0 : t.release_date) || "N/A"]
                            }), Object(p.jsxs)("p", {
                                className: "desc",
                                children: [Object(p.jsx)("span", {
                                    className: "span-color mr-2",
                                    children: "Overview:"
                                }), " ", (null === t || void 0 === t ? void 0 : t.overview) || "N/A"]
                            })]
                        })]
                    }), Object(p.jsx)(B.a, {
                        "aria-labelledby": "transition-modal-title",
                        "aria-describedby": "transition-modal-description",
                        className: i.modal,
                        open: j,
                        onClose: function () {
                            h(!1)
                        },
                        closeAfterTransition: !0,
                        BackdropComponent: I.a,
                        BackdropProps: {
                            timeout: 500
                        },
                        children: Object(p.jsx)(L.a, {
                            in: j,
                            children: g && Object(p.jsx)("div", {
                                className: i.paper,
                                children: Object(p.jsxs)("div", {
                                    className: "ContentModal",
                                    children: [Object(p.jsx)("img", {
                                        src: g.poster_path ? "".concat(E, "/").concat(g.poster_path) : M,
                                        alt: g.name || g.title,
                                        className: "ContentModal__portrait"
                                    }), Object(p.jsx)("img", {
                                        src: g.backdrop_path ? "".concat(E, "/").concat(g.backdrop_path) : "https://user-images.githubusercontent.com/10515204/56117400-9a911800-5f85-11e9-878b-3f998609a6c8.jpg",
                                        alt: g.name || g.title,
                                        className: "ContentModal__landscape"
                                    }), Object(p.jsxs)("div", {
                                        className: "ContentModal__about",
                                        children: [Object(p.jsxs)("span", {
                                            className: "ContentModal__title",
                                            children: [g.name || g.title, " (", (g.first_air_date || g.release_date || "-----").substring(0, 4), ")"]
                                        }), g.tagline && Object(p.jsx)("i", {
                                            className: "tagline",
                                            children: g.tagline
                                        }), Object(p.jsx)("span", {
                                            className: "ContentModal__description",
                                            children: g.overview
                                        }), Object(p.jsx)("div", {
                                            children: Object(p.jsx)(D, {
                                                id: s,
                                                media_type: r
                                            })
                                        }), Object(p.jsx)(R.a, {
                                            variant: "contained",
                                            startIcon: Object(p.jsx)(z.a, {}),
                                            color: "secondary",
                                            target: "__blank",
                                            href: "https://www.youtube.com/watch?v=".concat(_),
                                            children: "Watch the Trailer"
                                        }), "movie" === r && Object(p.jsx)(u.b, {
                                            className: "btn btn-primary my-2",
                                            to: "/watch/".concat(s),
                                            children: "watch"
                                        }), "tv" === r && Object(p.jsx)(u.b, {
                                            className: "btn btn-primary my-2",
                                            to: "/watchTv/".concat(s),
                                            children: "watch"
                                        })]
                                    })]
                                })
                            })
                        })
                    })]
                })
            }
            var $ = function (e) {
                    var t = e.content,
                        a = e.id,
                        n = e.poster,
                        c = e.title,
                        r = e.date,
                        s = e.media_type,
                        i = e.vote_average;
                    return Object(p.jsxs)(H, {
                        className: "mx-auto",
                        c: t,
                        media_type: s,
                        id: a,
                        children: [Object(p.jsx)(A.a, {
                            badgeContent: i,
                            color: i > 6 ? "primary" : "secondary"
                        }), Object(p.jsx)("img", {
                            className: "poster",
                            src: n ? "".concat(U).concat(n) : M,
                            alt: c
                        }), Object(p.jsx)("b", {
                            className: "title",
                            children: c
                        }), Object(p.jsxs)("span", {
                            className: "subTitle",
                            children: ["tv" === s ? "TV Series" : "Movie", Object(p.jsx)("span", {
                                className: "subTitle",
                                children: r
                            })]
                        })]
                    })
                },
                K = a(232),
                Q = a(101),
                X = a(227),
                Y = Object(Q.a)({
                    palette: {
                        type: "dark"
                    }
                }),
                Z = function (e) {
                    var t = e.setPage,
                        a = e.numOfPages,
                        n = void 0 === a ? 15 : a;
                    return Object(p.jsx)("div", {
                        style: {
                            width: "100%",
                            display: "flex",
                            justifyContent: "center",
                            marginTop: 10
                        },
                        children: Object(p.jsx)(X.a, {
                            theme: Y,
                            children: Object(p.jsx)(K.a, {
                                count: n,
                                onChange: function (e) {
                                    return a = e.target.textContent, t(a), void window.scroll(0, 0);
                                    var a
                                },
                                hideNextButton: !0,
                                hidePrevButton: !0,
                                color: "secondary"
                            })
                        })
                    })
                },
                ee = function (e) {
                    var t = Object(n.useState)(1),
                        a = Object(f.a)(t, 2),
                        c = a[0],
                        r = a[1],
                        s = Object(n.useState)([]),
                        i = Object(f.a)(s, 2),
                        d = i[0],
                        u = i[1],
                        b = function () {
                            var e = Object(l.a)(o.a.mark((function e() {
                                var t, a;
                                return o.a.wrap((function (e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, T.a.get("https://api.themoviedb.org/3/trending/all/week?api_key=f2aa6bc832a0aff8320d47cfe309bf00&page=".concat(c));
                                        case 2:
                                            t = e.sent, a = t.data, u(a.results);
                                        case 5:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function () {
                                return e.apply(this, arguments)
                            }
                        }();
                    Object(n.useEffect)((function () {
                        b()
                    }), [c]);
                    return Object(p.jsxs)("div", {
                        children: [Object(p.jsx)("div", {
                            style: {
                                backgroundImage: "url('https://cdn.dribbble.com/users/556705/screenshots/5590960/media/df01217a09d807b3b0e31db748257963.png')",
                                backgroundSize: "100% 100%",
                                backgroundRepeat: "no-repeat",
                                filter: "brightness(70%)",
                                width: "100%"
                            },
                            className: "main"
                        }), Object(p.jsx)("span", {
                            className: "pagesTitle",
                            children: "Trending"
                        }), Object(p.jsx)("div", {
                            className: "trending",
                            children: d && d.map((function (e, t) {
                                return Object(p.jsx)($, {
                                    content: e,
                                    id: e.id,
                                    poster: e.poster_path,
                                    title: e.title || e.name,
                                    date: e.first_air_date || e.release_date,
                                    media_type: e.media_type,
                                    vote_average: e.vote_average
                                }, e.id)
                            }))
                        }), Object(p.jsx)(Z, {
                            setPage: r
                        })]
                    })
                },
                te = a(230),
                ae = a(231),
                ne = a(228),
                ce = function (e) {
                    var t = Object(n.useState)(""),
                        a = Object(f.a)(t, 2),
                        c = a[0],
                        r = a[1],
                        s = Object(n.useState)(0),
                        i = Object(f.a)(s, 2),
                        d = i[0],
                        u = i[1],
                        b = Object(n.useState)(1),
                        j = Object(f.a)(b, 2),
                        h = j[0],
                        v = j[1],
                        m = Object(n.useState)([]),
                        g = Object(f.a)(m, 2),
                        O = g[0],
                        x = g[1],
                        w = Object(n.useState)(),
                        _ = Object(f.a)(w, 2),
                        k = _[0],
                        N = _[1],
                        S = Object(Q.a)({
                            palette: {
                                type: "dark",
                                primary: {
                                    main: "#fff"
                                }
                            }
                        }),
                        C = function () {
                            var e = Object(l.a)(o.a.mark((function e() {
                                var t, a;
                                return o.a.wrap((function (e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, T.a.get("https://api.themoviedb.org/3/search/".concat(d ? "tv" : "movie", "?api_key=f2aa6bc832a0aff8320d47cfe309bf00&language=en-US&query=").concat(c, "&page=").concat(h, "&include_adult=false"));
                                        case 3:
                                            t = e.sent, a = t.data, console.log(a.results), x(a.results), N(a.total_pages), e.next = 13;
                                            break;
                                        case 10:
                                            e.prev = 10, e.t0 = e.catch(0), console.log(e.t0);
                                        case 13:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [0, 10]
                                ])
                            })));
                            return function () {
                                return e.apply(this, arguments)
                            }
                        }();
                    return Object(n.useEffect)((function () {
                        window.scroll(0, 0), C()
                    }), [d, h]), Object(p.jsxs)("div", {
                        children: [Object(p.jsxs)(X.a, {
                            theme: S,
                            children: [Object(p.jsxs)("div", {
                                style: {
                                    display: "flex",
                                    margin: "15px 0"
                                },
                                children: [Object(p.jsx)(te.a, {
                                    style: {
                                        flex: 1
                                    },
                                    label: "search",
                                    variant: "filled",
                                    onChange: function (e) {
                                        return r(e.target.value)
                                    }
                                }), Object(p.jsx)(R.a, {
                                    variant: "contained",
                                    style: {
                                        marginLeft: 10
                                    },
                                    onClick: C,
                                    children: Object(p.jsx)(y.a, {})
                                })]
                            }), Object(p.jsxs)(ae.a, {
                                value: d,
                                indicatorColor: "primary",
                                textColor: "primary",
                                onChange: function (e, t) {
                                    u(t), v(1)
                                },
                                children: [Object(p.jsx)(ne.a, {
                                    style: {
                                        width: "50%"
                                    },
                                    label: "Search Movies"
                                }), Object(p.jsx)(ne.a, {
                                    style: {
                                        width: "50%"
                                    },
                                    label: "Search TV Series"
                                })]
                            })]
                        }), Object(p.jsxs)("div", {
                            className: "trending",
                            children: [O && O.map((function (e, t) {
                                return Object(p.jsx)($, {
                                    content: e,
                                    id: e.id,
                                    poster: e.poster_path,
                                    title: e.title || e.name,
                                    date: e.first_air_date || e.release_date,
                                    media_type: 0 === d ? "movie" : "tv",
                                    vote_average: e.vote_average
                                }, e.id)
                            })), O && 0 === O.length && (d ? Object(p.jsx)("h2", {
                                children: "No Series Found"
                            }) : Object(p.jsx)("h2", {
                                children: "No Movies Found"
                            }))]
                        }), k > 1 && Object(p.jsx)(Z, {
                            setPage: v,
                            numOfPages: k
                        })]
                    })
                },
                re = function (e) {
                    return e.length < 1 ? "" : e.map((function (e) {
                        return e.id
                    })).reduce((function (e, t) {
                        return e + "," + t
                    }))
                },
                se = a(48),
                ie = a(234),
                oe = function (e) {
                    var t = e.genres,
                        a = e.setGenres,
                        c = e.selectedGenres,
                        r = e.setSelectedGenres,
                        s = e.setPage,
                        i = e.type,
                        d = function () {
                            var e = Object(l.a)(o.a.mark((function e() {
                                var t, n;
                                return o.a.wrap((function (e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, T.a.get("https://api.themoviedb.org/3/genre/".concat(i, "/list?api_key=f2aa6bc832a0aff8320d47cfe309bf00&language=en-US"));
                                        case 2:
                                            t = e.sent, n = t.data, a(n.genres);
                                        case 5:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function () {
                                return e.apply(this, arguments)
                            }
                        }();
                    Object(n.useEffect)((function () {
                        return d(),
                            function () {
                                a({})
                            }
                    }), []);
                    return Object(p.jsxs)("div", {
                        style: {
                            padding: "6px 0",
                            width: "100%"
                        },
                        children: [c && c.map((function (e) {
                            return Object(p.jsx)(ie.a, {
                                label: e.name,
                                size: "small",
                                color: "secondary",
                                style: {
                                    margin: 2
                                },
                                clickable: !0,
                                onDelete: function () {
                                    return function (e) {
                                        r(c.filter((function (t) {
                                            return t.id !== e.id
                                        }))), a([].concat(Object(se.a)(t), [e])), s(1)
                                    }(e)
                                }
                            }, e.id)
                        })), t && t.map((function (e) {
                            return Object(p.jsx)(ie.a, {
                                label: e.name,
                                size: "small",
                                style: {
                                    margin: 2
                                },
                                clickable: !0,
                                onClick: function () {
                                    return function (e) {
                                        r([].concat(Object(se.a)(c), [e])), a(t.filter((function (t) {
                                            return t.id !== e.id
                                        }))), s(1)
                                    }(e)
                                }
                            }, e.id)
                        }))]
                    })
                },
                le = function (e) {
                    var t = Object(n.useState)(1),
                        a = Object(f.a)(t, 2),
                        c = a[0],
                        r = a[1],
                        s = Object(n.useState)([]),
                        i = Object(f.a)(s, 2),
                        d = i[0],
                        u = i[1],
                        b = Object(n.useState)(),
                        j = Object(f.a)(b, 2),
                        h = j[0],
                        v = j[1],
                        m = Object(n.useState)([]),
                        g = Object(f.a)(m, 2),
                        O = g[0],
                        x = g[1],
                        w = Object(n.useState)([]),
                        _ = Object(f.a)(w, 2),
                        y = _[0],
                        k = _[1],
                        N = re(y),
                        S = function () {
                            var e = Object(l.a)(o.a.mark((function e() {
                                var t, a;
                                return o.a.wrap((function (e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, T.a.get("https://api.themoviedb.org/3/discover/tv?api_key=f2aa6bc832a0aff8320d47cfe309bf00&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&page=".concat(c, "&with_genres=").concat(N));
                                        case 2:
                                            t = e.sent, a = t.data, u(a.results), v(a.total_pages);
                                        case 6:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function () {
                                return e.apply(this, arguments)
                            }
                        }();
                    Object(n.useEffect)((function () {
                        S()
                    }), [c, y]);
                    return Object(p.jsxs)("div", {
                        children: [Object(p.jsx)("div", {
                            style: {
                                backgroundImage: "url('https://cdn.dribbble.com/users/556705/screenshots/5590960/media/df01217a09d807b3b0e31db748257963.png')",
                                backgroundSize: "100% 100%",
                                backgroundRepeat: "no-repeat",
                                filter: "brightness(70%)",
                                width: "100%"
                            },
                            className: "main"
                        }), Object(p.jsx)("span", {
                            className: "pagesTitle",
                            children: "Series"
                        }), Object(p.jsx)(oe, {
                            genres: O,
                            setGenres: x,
                            selectedGenres: y,
                            setSelectedGenres: k,
                            setPage: r,
                            type: "tv"
                        }), Object(p.jsx)("div", {
                            className: "trending",
                            children: d && d.map((function (e, t) {
                                return Object(p.jsx)($, {
                                    content: e,
                                    id: e.id,
                                    poster: e.poster_path,
                                    title: e.title || e.name,
                                    date: e.first_air_date || e.release_date,
                                    media_type: "tv",
                                    vote_average: e.vote_average
                                }, e.id)
                            }))
                        }), h > 1 && Object(p.jsx)(Z, {
                            setPage: r,
                            numOfPages: h
                        })]
                    })
                },
                de = function (e) {
                    var t = Object(n.useState)([]),
                        a = Object(f.a)(t, 2),
                        c = a[0],
                        r = a[1],
                        s = Object(n.useState)([]),
                        i = Object(f.a)(s, 2),
                        d = i[0],
                        u = i[1],
                        b = Object(n.useState)(1),
                        j = Object(f.a)(b, 2),
                        h = j[0],
                        v = j[1],
                        m = Object(n.useState)([]),
                        g = Object(f.a)(m, 2),
                        O = g[0],
                        x = g[1],
                        w = Object(n.useState)(),
                        _ = Object(f.a)(w, 2),
                        y = _[0],
                        k = _[1],
                        N = re(d),
                        S = function () {
                            var e = Object(l.a)(o.a.mark((function e() {
                                var t, a;
                                return o.a.wrap((function (e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, T.a.get("https://api.themoviedb.org/3/discover/movie?api_key=f2aa6bc832a0aff8320d47cfe309bf00&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=".concat(h, "&with_genres=").concat(N));
                                        case 2:
                                            t = e.sent, a = t.data, x(a.results), k(a.total_pages);
                                        case 6:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function () {
                                return e.apply(this, arguments)
                            }
                        }();
                    Object(n.useEffect)((function () {
                        S()
                    }), [h, d]);
                    return Object(p.jsxs)("div", {
                        children: [Object(p.jsx)("div", {
                            style: {
                                backgroundImage: "url('https://cdn.dribbble.com/users/556705/screenshots/5590960/media/df01217a09d807b3b0e31db748257963.png')",
                                backgroundSize: "100% 100%",
                                backgroundRepeat: "no-repeat",
                                filter: "brightness(70%)",
                                width: "100%"
                            },
                            className: "main"
                        }), Object(p.jsx)("span", {
                            className: "pagesTitle",
                            children: "Movies"
                        }), Object(p.jsx)(oe, {
                            genres: c,
                            setGenres: r,
                            selectedGenres: d,
                            setSelectedGenres: u,
                            setPage: v,
                            type: "movie"
                        }), Object(p.jsx)("div", {
                            className: "trending",
                            children: O && O.map((function (e) {
                                return Object(p.jsx)($, {
                                    content: e,
                                    id: e.id,
                                    poster: e.poster_path,
                                    title: e.title || e.name,
                                    date: e.first_air_date || e.release_date,
                                    media_type: "movie",
                                    vote_average: e.vote_average
                                }, e.id)
                            }))
                        }), y > 1 && Object(p.jsx)(Z, {
                            setPage: v,
                            numOfPages: y
                        })]
                    })
                },
                ue = a(72),
                be = a(36),
                pe = function () {
                    var e = Object(be.c)((function (e) {
                            return e.popularMovies
                        })),
                        t = Object(b.g)().id;
                    return Object(p.jsxs)(p.Fragment, {
                        children: [Object(p.jsx)(ue.a, {
                            className: "frame",
                            url: "https://www.2embed.to/embed/tmdb/movie?id=".concat(t),
                            width: "100%",
                            height: "100%",
                            allowFullScreen: !0,
                            frameBorder: "0"
                        }), Object(p.jsx)("h1", {
                            className: "text-center my-3",
                            children: "Popular Movies"
                        }), Object(p.jsx)("div", {
                            className: "trending",
                            children: e && e.map((function (e, t) {
                                return Object(p.jsx)($, {
                                    content: e,
                                    id: e.id,
                                    poster: e.poster_path,
                                    title: e.title || e.name,
                                    date: e.first_air_date || e.release_date,
                                    media_type: "movie",
                                    vote_average: e.vote_average
                                }, e.id)
                            }))
                        })]
                    })
                },
                je = function () {
                    var e = Object(be.c)((function (e) {
                            return e.popularTv
                        })),
                        t = Object(n.useState)([]),
                        a = Object(f.a)(t, 2),
                        c = a[0],
                        r = a[1],
                        s = Object(n.useState)([]),
                        i = Object(f.a)(s, 2),
                        d = i[0],
                        u = i[1],
                        j = Object(b.g)().id,
                        h = Object(n.useState)(1),
                        v = Object(f.a)(h, 2),
                        m = v[0],
                        g = v[1],
                        O = Object(n.useState)(1),
                        x = Object(f.a)(O, 2),
                        w = x[0],
                        _ = x[1],
                        y = function () {
                            var e = Object(l.a)(o.a.mark((function e(t) {
                                var a;
                                return o.a.wrap((function (e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, T.a.get("https://api.themoviedb.org/3/tv/".concat(t, "?api_key=f2aa6bc832a0aff8320d47cfe309bf00&language=en-US"));
                                        case 3:
                                            a = e.sent, r(a.data.seasons), e.next = 10;
                                            break;
                                        case 7:
                                            e.prev = 7, e.t0 = e.catch(0), console.log(e.t0);
                                        case 10:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [0, 7]
                                ])
                            })));
                            return function (t) {
                                return e.apply(this, arguments)
                            }
                        }(),
                        k = function () {
                            var e = Object(l.a)(o.a.mark((function e(t, a) {
                                var n;
                                return o.a.wrap((function (e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, T.a.get("https://api.themoviedb.org/3/tv/".concat(t, "/season/").concat(a, "?api_key=f2aa6bc832a0aff8320d47cfe309bf00&language=en-US"));
                                        case 3:
                                            n = e.sent, u(n.data.episodes), e.next = 10;
                                            break;
                                        case 7:
                                            e.prev = 7, e.t0 = e.catch(0), console.log(e.t0);
                                        case 10:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [0, 7]
                                ])
                            })));
                            return function (t, a) {
                                return e.apply(this, arguments)
                            }
                        }();
                    return Object(n.useEffect)((function () {}), [j, w, m]), Object(n.useEffect)((function () {
                        y(j), k(j, 1)
                    }), [j]), Object(p.jsxs)(p.Fragment, {
                        children: [Object(p.jsx)(ue.a, {
                            className: "frame",
                            url: "https://www.2embed.to/embed/tmdb/tv?id=".concat(j, "&s=").concat(w, "&e=").concat(m),
                            width: "100%",
                            height: "100%",
                            allowFullScreen: !0,
                            frameBorder: "0"
                        }), Object(p.jsxs)("div", {
                            className: "d-flex flex-column flex-md-row my-3",
                            children: [Object(p.jsx)("div", {
                                className: "col-12 col-md-3",
                                children: Object(p.jsx)("ul", {
                                    className: "d-flex flex-md-column flex-wrap list-unstyled seasons",
                                    children: c.map((function (e, t) {
                                        return Object(p.jsx)("li", {
                                            id: t + 1,
                                            onClick: function (e) {
                                                return function (e) {
                                                    _(e.target.id), k(j, e.target.id)
                                                }(e)
                                            },
                                            children: "Season ".concat(t + 1)
                                        }, e.id)
                                    }))
                                })
                            }), Object(p.jsx)("div", {
                                className: "col-12 col-md-9",
                                children: Object(p.jsx)("ul", {
                                    className: "my-2 list-unstyled d-flex justify-content-around flex-wrap episodes",
                                    children: d.map((function (e, t) {
                                        return Object(p.jsx)("li", {
                                            onClick: function (e) {
                                                return g(e.target.id)
                                            },
                                            id: t + 1,
                                            className: "col-5",
                                            children: "Episode ".concat(t + 1, ": ").concat(e.name)
                                        }, e.id)
                                    }))
                                })
                            })]
                        }), Object(p.jsx)("h1", {
                            className: "text-center my-3",
                            children: "Popular Tv Series"
                        }), Object(p.jsx)("div", {
                            className: "trending",
                            children: e && e.map((function (e, t) {
                                return Object(p.jsx)($, {
                                    content: e,
                                    id: e.id,
                                    poster: e.poster_path,
                                    title: e.title || e.name,
                                    date: e.first_air_date || e.release_date,
                                    media_type: "tv",
                                    vote_average: e.vote_average
                                }, e.id)
                            }))
                        })]
                    })
                },
                fe = function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                    return {
                        type: "POPULAR",
                        popular: e
                    }
                },
                he = function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                    return {
                        type: "POPULAR",
                        popular: e
                    }
                };
            var ve = function () {
                    var e = Object(be.b)();
                    return Object(n.useEffect)((function () {
                        var t = function () {
                                var t = Object(l.a)(o.a.mark((function t() {
                                    var a;
                                    return o.a.wrap((function (t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                return t.prev = 0, t.next = 3, T.a.get("https://api.themoviedb.org/3/movie/popular?api_key=f2aa6bc832a0aff8320d47cfe309bf00&language=en-US&page=1");
                                            case 3:
                                                a = t.sent, e(fe(a.data.results)), t.next = 10;
                                                break;
                                            case 7:
                                                t.prev = 7, t.t0 = t.catch(0), console.log(t.t0);
                                            case 10:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t, null, [
                                        [0, 7]
                                    ])
                                })));
                                return function () {
                                    return t.apply(this, arguments)
                                }
                            }(),
                            a = function () {
                                var t = Object(l.a)(o.a.mark((function t() {
                                    var a;
                                    return o.a.wrap((function (t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                return t.prev = 0, t.next = 3, T.a.get(" https://api.themoviedb.org/3/tv/popular?api_key=f2aa6bc832a0aff8320d47cfe309bf00&language=en-US&page=1");
                                            case 3:
                                                a = t.sent, e(he(a.data.results)), t.next = 10;
                                                break;
                                            case 7:
                                                t.prev = 7, t.t0 = t.catch(0), console.log(t.t0);
                                            case 10:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t, null, [
                                        [0, 7]
                                    ])
                                })));
                                return function () {
                                    return t.apply(this, arguments)
                                }
                            }();
                        t(), a()
                    }), [e]), Object(p.jsxs)(u.a, {
                        basename: "/",
                        children: [Object(p.jsx)(j, {}), Object(p.jsx)("div", {
                            className: "app",
                            children: Object(p.jsx)(d.a, {
                                className: "cont",
                                children: Object(p.jsxs)(b.c, {
                                    children: [Object(p.jsx)(b.a, {
                                        exact: !0,
                                        path: "/movies",
                                        component: de
                                    }), Object(p.jsx)(b.a, {
                                        exact: !0,
                                        path: "/series",
                                        component: le
                                    }), Object(p.jsx)(b.a, {
                                        exact: !0,
                                        path: "/search",
                                        component: ce
                                    }), Object(p.jsx)(b.a, {
                                        exact: !0,
                                        path: "/watch/:id",
                                        component: pe
                                    }), Object(p.jsx)(b.a, {
                                        exact: !0,
                                        path: "/watchTv/:id",
                                        component: je
                                    }), Object(p.jsx)(b.a, {
                                        path: "/",
                                        component: ee
                                    })]
                                })
                            })
                        }), Object(p.jsx)(C, {})]
                    })
                },
                me = a(76),
                ge = Object(me.a)({
                    popularMovies: function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                            t = arguments.length > 1 ? arguments[1] : void 0;
                        switch (t.type) {
                            case "POPULAR":
                                return Object(se.a)(t.popular);
                            default:
                                return e
                        }
                    },
                    popularTv: function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                            t = arguments.length > 1 ? arguments[1] : void 0;
                        switch (t.type) {
                            case "POPULAR":
                                return Object(se.a)(t.popular);
                            default:
                                return e
                        }
                    }
                }),
                Oe = Object(me.b)(ge),
                xe = Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));

            function we(e, t) {
                navigator.serviceWorker.register(e).then((function (e) {
                    e.onupdatefound = function () {
                        var a = e.installing;
                        null != a && (a.onstatechange = function () {
                            "installed" === a.state && (navigator.serviceWorker.controller ? (console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."), t && t.onUpdate && t.onUpdate(e)) : (console.log("Content is cached for offline use."), t && t.onSuccess && t.onSuccess(e)))
                        })
                    }
                })).catch((function (e) {
                    console.error("Error during service worker registration:", e)
                }))
            }
            s.a.render(Object(p.jsx)(be.a, {
                    store: Oe,
                    children: Object(p.jsx)(ve, {})
                }), document.getElementById("root")),
                function (e) {
                    if ("serviceWorker" in navigator) {
                        if (new URL("", window.location.href).origin !== window.location.origin) return;
                        window.addEventListener("load", (function () {
                            var t = "".concat("", "/service-worker.js");
                            xe ? (! function (e, t) {
                                fetch(e, {
                                    headers: {
                                        "Service-Worker": "script"
                                    }
                                }).then((function (a) {
                                    var n = a.headers.get("content-type");
                                    404 === a.status || null != n && -1 === n.indexOf("javascript") ? navigator.serviceWorker.ready.then((function (e) {
                                        e.unregister().then((function () {
                                            window.location.reload()
                                        }))
                                    })) : we(e, t)
                                })).catch((function () {
                                    console.log("No internet connection found. App is running in offline mode.")
                                }))
                            }(t, e), navigator.serviceWorker.ready.then((function () {
                                console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")
                            }))) : we(t, e)
                        }))
                    }
                }()
        }
    },
    [
        [181, 1, 2]
    ]
]);
//# sourceMappingURL=main.51bf8681.chunk.js.map
