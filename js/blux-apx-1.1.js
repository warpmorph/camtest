window.bx = {};
bx.g = {};
bx.c = {};

bx.Loader = {
    load: function(c) {
        if (!window.console) {
            window.console = {
                BLUX: true
            };
            console.log = function() {};
            console.error = function() {};
            console.info = function() {};
            console.warn = function() {}
        }
        bx.Loader.$DF = c || {};
        bx.Loader.$6d = RegExp(";bluega_bxgrun;").test(navigator.userAgent);
        if (bx.Loader.$6d) {
            bx.Event.add(document, "bxgrun_ready", d, false);
            if (!bx.Loader.loading_onWRT) {
                bx.Loader.loading_onWRT = true
            }

            function d() {
                bx.Event.remove(document, "bxgrun_ready", d, false);
                bxgrnif.procCommand("GET_PREFERENCE", ["bxgdata_query_url"], function(e) {
                    bxgrnif.dataUrlBase = e;
                    bx.Loader.$5W()
                }, function(e) {
                    bxgrnif.dataUrlBase = null;
                    bx.Loader.$5W()
                })
            }
        } else {
            if (bx.Loader.$DF.waitForDeviceReady) {
                setTimeout(bx.Loader.$5W, 10)
            } else {
                bx.Loader.$5W()
            }
        }
    },
    $5W: function() {
        bx.$50.init();
        bx.Loader.$7C()
    },
    $7C: function() {
        bx.Trace = new bx.CTrace();
        bx.Trace.error = {
            warning: {
                $AZ: 2001,
                $B0: ""
            },
            warnProperty: {
                $AZ: 2002,
                $B0: "Property is not properly setup"
            },
            warnParameter: {
                $AZ: 2003,
                $B0: "Function parameter error"
            },
            warnType: {
                $AZ: 2004,
                $B0: "Type error"
            },
            warnClassDefine: {
                $AZ: 2101,
                $B0: "A class tried to inherit twice"
            },
            error: {
                $AZ: 5001,
                $B0: ""
            },
            errorParameter: {
                $AZ: 5002,
                $B0: "Function parameter error"
            },
            invalidClass: {
                $AZ: 5003,
                $B0: "Invalid class was tried to instantiate"
            },
            errorDOM: {
                $AZ: 5004,
                $B0: "DOM error!"
            },
            exception: {
                $AZ: 5005,
                $B0: "Exception!"
            },
            errorJSON: {
                $AZ: 5006,
                $B0: "JSON parsing error"
            },
            errorXHR: {
                $AZ: 5007,
                $B0: "XHR error"
            },
            noProperty: {
                $AZ: 5008,
                $B0: "Property is not properly setup"
            },
            errorDevice: {
                $AZ: 5009,
                $B0: "Device error!"
            },
            errorPosition: {
                $AZ: 5101,
                $B0: "Error in CPosition"
            },
            errorNoElement: {
                $AZ: 5102,
                $B0: "HTML Element doesn't exist"
            },
            errorImport: {
                $AZ: 5103,
                $B0: "Module import is failed"
            }
        };
        bx.HCL.init();
        bx.DOM.init();
        bx.EventManager.$5X();
        if (bx.Loader.$DF.onInit) {
            bx.Loader.$DF.onInit()
        } else {
            if (window.onBxInit) {
                window.onBxInit()
            } else {
                bx.UX.init(bx.Loader.$DF.UXoptions)
            }
        }
        if (window.onBxLayout) {
            window.onBxLayout()
        }
        bx.UX.$N2V();
        if (bx.Loader.$DF.onRun) {
            bx.Loader.$DF.onRun()
        } else {
            if (window.onBxRun) {
                window.onBxRun()
            } else {
                bx.Trace.log("BXG", "warning", "BLUX onBxRun() or custom run() function is missed.", "bx.Loader.load");
                return
            }
        }
        console.log("check user agent 1 :" +navigator.userAgent )
    }
};

bx.$50 = {
    $0a: [],
    $5V: {},
    init: function() {
        bx.$50.$51()
    },
    $51: function() {
        var c = navigator.userAgent.toLowerCase();
        var d = "";
        var l = "";
        var n = "xxx";
        var h = -1,
            f;
        var e = 0;
        if ((h = c.indexOf("android")) != -1) {
            if (c.indexOf("firefox") != -1) {
                d = "firefox";
                e = "firefox".length
            } else {
                d = "android";
                e = "android".length
            }
            n = "android"
        } else {
            if ((h = c.indexOf("iphone")) != -1) {
                if (c.indexOf("firefox") != -1) {
                    d = "firefox";
                    e = "firefox".length
                } else {
                    if (c.indexOf("chrome") != -1 || c.indexOf("crios") != -1) {
                        d = "chrome";
                        e = "chrome".length
                    } else {
                        d = "iphone";
                        e = "iphone".length
                    }
                }
                n = "ios"
            } else {
                if ((h = c.indexOf("ipad")) != -1) {
                    if (c.indexOf("firefox") != -1) {
                        d = "firefox";
                        e = "firefox".length
                    } else {
                        if (c.indexOf("chrome") != -1 || c.indexOf("crios") != -1) {
                            d = "chrome";
                            e = "chrome".length
                        } else {
                            d = "ipad";
                            e = "ipad".length
                        }
                    }
                    n = "ios"
                } else {
                    if ((h = c.indexOf("edge")) != -1) {
                        d = "edge";
                        e = d.length
                    } else {
                        if ((h = c.indexOf("LG Browser")) != -1) {
                            if (c.indexOf("LG NetCast.TV") != -1) {
                                d = "LG NetCast.TV";
                                e = d.length
                            }
                            n = "LG Smart TV"
                        } else {
                            if ((h = c.indexOf("opera")) != -1) {
                                d = "opera";
                                e = "opera".length
                            } else {
                                if ((h = c.indexOf("msie")) != -1 || (h = c.indexOf("trident")) != -1) {
                                    d = "msie";
                                    e = "msie".length
                                } else {
                                    if ((h = c.indexOf("tizen")) != -1) {
                                        d = "tizen";
                                        e = "tizen".length
                                    } else {
                                        if ((h = c.indexOf("chrome")) != -1) {
                                            d = "chrome";
                                            e = "chrome".length
                                        } else {
                                            if ((h = c.indexOf("safari")) != -1) {
                                                d = "safari";
                                                e = "safari".length
                                            } else {
                                                if ((h = c.indexOf("mozilla")) != -1) {
                                                    if ((h = c.indexOf("firefox")) != -1) {
                                                        d = "firefox";
                                                        e = "firefox".length
                                                    } else {
                                                        d = "mozilla"
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        if (n == "xxx" && c.indexOf("mobile") != -1) {
            n = "mobile"
        } else {
            if (c.indexOf("macintosh") != -1) {
                n = "mac"
            }
        }
        if (h != -1) {
            var m = -1;
            f = -1;
            if (d == "iphone") {
                if ((m = c.indexOf("iphone os")) != -1) {
                    m = m + "iphone os".length + 1
                }
            } else {
                if (d == "ipad") {
                    if ((m = c.indexOf("cpu os")) != -1) {
                        m = m + "cpu os".length + 1
                    }
                } else {
                    if (d == "safari") {
                        if ((m = c.indexOf("version")) != -1) {
                            m = m + "version".length + 1
                        } else {
                            l = "2.0.0"
                        }
                    } else {
                        if (d == "tizen") {
                            if ((m = c.indexOf("version")) != -1) {
                                m = m + "version".length + 1
                            }
                        } else {
                            if (c.indexOf("crios") != -1) {
                                m = c.indexOf("crios");
                                m = m + "crios".length + 1
                            } else {
                                if (c.indexOf("crios") != -1) {
                                    m = c.indexOf("crios");
                                    m = m + "crios".length + 1
                                } else {
                                    if (n == "android" && d == "chrome") {
                                        m = c.indexOf("android");
                                        m = m + "android".length + 1
                                    } else {
                                        if (c.indexOf("msie") == -1 && c.indexOf("trident") != -1) {
                                            l = "11"
                                        } else {
                                            m = h + e + 1
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            if (m != -1) {
                var g = c.substring(m);
                if ((f = g.search(/[^0-9._]/)) == -1) {
                    f = g.length
                }
                l = g.substring(0, f)
            }
        }
        if (c.indexOf("webkit") != -1) {
            bx.$50.$0a.push("WebKit")
        } else {
            bx.$50.$0a.push("ECMAScript")
        }
        bx.$50.$0a.push(d);
        bx.$50.$0a.push(n);
        var k;
        if (l.indexOf("_") != -1) {
            k = l.split("_")
        } else {
            k = l.split(".")
        }
        for (var h = 0; h < k.length; h++) {
            bx.$50.$0a.push(k[h])
        }
    }
};
bx.$50.XHR = {
    stateWait: 3,
    stateDone: 4,
    stateError: 5
};
bx.$50.Http = function(c, e, g, m, d, l, f, k, p, i, j) {
    var h;
    if (!(h = new XMLHttpRequest())) {
        if (!(h = new ActiveXObject("Msxml2.XMLHTTP"))) {
            if (!(h = new ActiveXObject("Microsoft.XMLHTTP"))) {
                return null
            }
        }
    }
    if (g) {
        h.onreadystatechange = function() {
            if (h.readyState == 4) {
                if ((h.status >= 200 && h.status < 300) || h.status == 304 || h.status == 0) {
                    if (l) {
                        m(bx.$50.XHR.stateDone, h.responseXML)
                    } else {
                        m(bx.$50.XHR.stateDone, h.responseText)
                    }
                } else {
                    if (bx.$50.$0a[1] == "safari" && h.status === undefined) {
                        m(bx.$50.XHR.stateDone, h.responseText)
                    } else {
                        m(bx.$50.XHR.stateError, h.readyState + ":" + h.status)
                    }
                }
            } else {
                m(bx.$50.XHR.stateWait, null)
            }
        }
    }
    if (d && c == "GET") {
        if (e.indexOf("?") == -1) {
            e += "?bxTC=" + (new Date()).getTime()
        } else {
            e += "&bxTC=" + (new Date()).getTime()
        }
    }
    try {
        h.open(c, e, g);
        h.withCredentials = j ? false : true;
        if (h.setRequestHeader) {
            if (k) {
                h.setRequestHeader("Authorization", k)
            }
            if (p) {
                h.setRequestHeader("Content-Type", "multipart/form-data; boundary=" + p);
                h.setRequestHeader("Connection", "close");
                h.setRequestHeader("Content-Length", f.length)
            }
            if (i) {
                for (var o in i) {
                    h.setRequestHeader(o, i[o])
                }
            }
        }
        h.send(f)
    } catch (n) {
        if (window.XDomainRequest) {
            h = new XDomainRequest();
            h.onload = function() {
                m(bx.$50.XHR.stateDone, h.responseText)
            };
            h.onerror = function() {
                m(bx.$50.XHR.stateError, "XDR Error")
            };
            h.ontimeout = function() {
                m(bx.$50.XHR.stateError, "XDR Timeout")
            };
            h.onprogress = function() {
                m(bx.$50.XHR.stateWait, null)
            };
            if (c.toUpperCase() != "GET") {
                bx.Trace.log("BLUX", "errorXHR", "Do not support " + c + " method", "HCL.Http");
                m(bx.$50.XHR.stateError, "Do not support " + c + " method");
                return null
            } else {
                h.open(c, e);
                h.send(f)
            }
        } else {
            bx.Trace.log("BLUX", "errorXHR", n, "HCL.Http");
            return h
        }
    }
    if (!g) {
        if (h.status == 200) {
            if (l) {
                return h.responseXML
            } else {
                return h.responseText
            }
        } else {
            return null
        }
    } else {
        return h
    }
};
bx.$50.importData = function(c, d, f, e) {
    e = e || {};
    return bx.HCL.importModule(c, e.protocol, e.noCaching, d, f, true)
};
bx.$50.importModule = function(moduleURL, forceProto, noCaching, onLoad, onError, _noMultiCheck) {
    function check(url) {
        if (!_noMultiCheck) {
            if (bx.$50.$5V[url]) {
                if (bx.$50.$5V[url].status == 1) {
                    if (onLoad) {
                        bx.$50.$5V[url].loads.push(onLoad)
                    }
                    if (onError) {
                        bx.$50.$5V[url].errors.push(onError)
                    }
                } else {
                    if (bx.$50.$5V[url].status == 2) {
                        if (onLoad) {
                            onLoad()
                        }
                    }
                }
                return true
            } else {
                bx.$50.$5V[url] = {
                    status: 1,
                    loads: [],
                    errors: []
                };
                if (onLoad) {
                    bx.$50.$5V[url].loads.push(onLoad)
                }
                if (onError) {
                    bx.$50.$5V[url].errors.push(onError)
                }
            }
        }
        return false
    }

    function dispatch(url, error) {
        if (!_noMultiCheck) {
            if (bx.$50.$5V[url]) {
                var cb;
                if (!error) {
                    bx.$50.$5V[url].status = 2;
                    while (cb = bx.$50.$5V[url].loads.pop()) {
                        cb()
                    }
                } else {
                    while (cb = bx.$50.$5V[url].errors.pop()) {
                        cb()
                    }
                    delete bx.$50.$5V[url]
                }
            }
        } else {
            if (error) {
                if (onError) {
                    onError()
                }
            } else {
                if (onLoad) {
                    onLoad()
                }
            }
        }
    }
    if (forceProto == 2) {
        if (check(moduleURL)) {
            return
        }
        var scriptList = document.getElementsByTagName("script");
        if (scriptList.length > 0) {
            var importTag = document.createElement("script");
            importTag.src = moduleURL;
            importTag.type = "text/javascript";
            importTag.charset = "utf-8";
            if (onLoad) {
                importTag.onload = function() {
                    dispatch(moduleURL)
                }
            }
            if (onError) {
                importTag.onerror = function() {
                    dispatch(moduleURL, true)
                }
            }
            scriptList[scriptList.length - 1].parentNode.insertBefore(importTag, scriptList[scriptList.length - 1].nextSibling)
        }
    } else {
        function hdrCallBack(state, $KX) {
            if (state == bx.HCL.XHR.stateDone) {
                if ($KX) {
                    if (bx.$50.importModule.NO_EXCEPTION_HANDLING) {
                        eval($KX)
                    } else {
                        try {
                            eval($KX)
                        } catch (ex) {
                            if (onError) {
                                dispatch(moduleURL, true);
                                return
                            }
                        }
                    }
                    dispatch(moduleURL)
                } else {
                    dispatch(moduleURL, true)
                }
            } else {
                if (state == bx.HCL.XHR.stateWait) {} else {
                    dispatch(moduleURL, true)
                }
            }
        }
        if (check(moduleURL)) {
            return
        }
        bx.$50.Http("GET", moduleURL, true, hdrCallBack, noCaching)
    }
    return
};
bx.$50.importModule.NO_EXCEPTION_HANDLING = false;
bx.$50.importModules = function(k, h, d, l) {
    if (!k || !(k instanceof Array)) {
        bx.Trace.log("BLUX", "warnParameter", "urls=" + k, "HCL.importModules");
        if (l) {
            l(0, 0, 0)
        }
        return
    }
    var m = 0,
        e = 0;
    var j = k.length;

    function g() {
        m++;
        if (m + e >= j) {
            if (l) {
                l(j, m, e)
            }
        }
    }

    function c() {
        e++;
        if (m + e >= j) {
            if (l) {
                l(j, m, e)
            }
        }
    }
    for (var f = 0; f < j; f++) {
        bx.HCL.importModule(k[f], h, d, g, c)
    }
};
bx.$applyMsFilter = function(c, d, g) {
    var e = "";
    var f = false;
    if (d == "opacity") {
        c.bxMsFilterAlpha = g
    } else {
        if (d == "matrix") {
            c.bxMsFilterMatrix = g
        } else {
            if (d == "backgroundAlpha") {
                c.bxMsFilterBGA = g
            }
        }
    }
    if (c.bxMsFilterMatrix) {
        e += "progid:DXImageTransform.Microsoft.Matrix(SizingMethod='auto expand'," + c.bxMsFilterMatrix + ")";
        f = true
    }
    if (c.bxMsFilterBGA) {
        e += (f ? " " : "") + "progid:DXImageTransform.Microsoft.gradient(startColorstr=#" + c.bxMsFilterBGA + ",endColorstr=#" + c.bxMsFilterBGA + ")";
        f = true
    }
    if (c.bxMsFilterAlpha !== undefined && c.bxMsFilterAlpha != 1) {
        e += (f ? " " : "") + "progid:DXImageTransform.Microsoft.Alpha(opacity=" + parseInt(parseFloat(c.bxMsFilterAlpha) * 100) + ")"
    }
    return e
};
bx.HCL = {
    $0a: bx.$50.$0a,
    Http: bx.$50.Http,
    importData: bx.$50.importData,
    importModule: bx.$50.importModule,
    importModules: bx.$50.importModules,
    XHR: bx.$50.XHR,
    init: function() {
        if (bx.$50.$0a.length == 0) {
            bx.$50.init()
        }
        bx.HCL.$00();
        bx.HCL.$01(0, 0, 0, 0)
    },
    $01: function(f, d, e, c) {
        if (f !== undefined) {
            document.body.style.marginLeft = f + "px"
        }
        if (d !== undefined) {
            document.body.style.marginRight = d + "px"
        }
        if (e !== undefined) {
            document.body.style.marginTop = e + "px"
        }
        if (c !== undefined) {
            document.body.style.marginBottom = c + "px"
        }
    },
    $00: function() {},
    $0f: {
        userSelect: true,
        backfaceVisibility: true,
        perspective: true,
        perspectiveOrigin: true,
        transform: true,
        transformOrigin: true,
        transformStyle: true,
        backgroundSize: true,
        boxShadow: true,
        borderRadius: true,
        borderTopLeftRadius: true,
        borderTopRigthRadius: true,
        borderBottomLeftRadius: true,
        borderBottomRightRadius: true,
        backgroundClip: true,
        textShadow: true,
        boxSizing: true,
        transition: true,
        transitionProperty: true,
        transitionDuration: true,
        transitionTimingFunction: true,
        transitionDelay: true,
        animation: true,
        animationDelay: true,
        overflowScrolling: true,
        textStroke: true,
        pointerEvents: true,
        "user-select": true,
        "backface-visibility": true,
        perspective: true,
        "perspective-origin": true,
        transform: true,
        "transform-origin": true,
        "transform-style": true,
        "background-size": true,
        "box-shadow": true,
        "border-radius": true,
        "border-top-left-radius": true,
        "border-top-right-radius": true,
        "border-bottom-left-radius": true,
        "border-bottom-right-radius": true,
        "background-clip": true,
        "text-shadow": true,
        "box-sizing": true,
        transition: true,
        "transition-property": true,
        "transition-duration": true,
        "transition-timing-function": true,
        "transition-delay": true,
        animation: true,
        "animation-delay": true,
        "overflow-scrolling": true,
        "text-stroke": true,
        "pointer-events": true
    },
    $0e: function(e, d, h) {
        var g, f;
        if (bx.HCL.DV.supportCSS3() && this.$0f[d]) {
            if (!f) {
                if (bx.HCL.$0a[0] == "WebKit") {
                    f = "webkit"
                } else {
                    if (bx.$50.$0a[1] == "opera") {
                        f = "O"
                    } else {
                        if (bx.$50.$0a[1] == "firefox" || bx.$50.$0a[1] == "mozilla") {
                            f = "Moz"
                        } else {
                            if (bx.HCL.DV.isIE()) {
                                f = "ms"
                            }
                        }
                    }
                }
            }
            if (f) {
                g = {
                    style: f + d.charAt(0).toUpperCase() + d.substring(1),
                    value: h
                }
            }
        } else {
            if (d == "cssFloat") {
                g = {
                    style: "styleFloat",
                    value: h
                }
            } else {
                if (d == "styleFloat") {
                    g = {
                        style: "cssFloat",
                        value: h
                    }
                } else {
                    if (d == "opacity") {
                        g = {
                            style: "filter",
                            value: bx.$applyMsFilter(e, "opacity", h)
                        }
                    } else {
                        if (d == "filter" && h.indexOf("opacity") != -1) {
                            var c = h.search(/[0-9]/);
                            if (c != -1) {
                                g = {
                                    style: "opacity",
                                    value: parseInt(h.substring(c)) / 100 + ""
                                }
                            }
                        }
                    }
                }
            }
        }
        if (g) {
            e.style[g.style] = g.value
        }
        if (h !== undefined) {
            e.style[d] = h
        }
    },
    $03: function(d, e, h) {
        if (!e) {
            return d
        }
        var c;
        var g, f;
        if (typeof e == "string") {
            this.$0e(d, e, h)
        } else {
            for (c in e) {
                this.$0e(d, c, e[c])
            }
        }
        return d
    },
    $04: function(e, c) {
        var d = "",
            g = "";
        var h;
        var f;
        if (bx.HCL.DV.supportCSS3() && this.$0f[c]) {
            if (bx.HCL.$0a[0] == "WebKit") {
                h = "-webkit-" + c
            } else {
                if (bx.$50.$0a[1] == "opera") {
                    h = "-o-" + c
                } else {
                    if (bx.$50.$0a[1] == "firefox" || bx.$50.$0a[1] == "mozilla") {
                        h = "-moz-" + c
                    } else {
                        if (bx.$50.$0a[1] == "msie") {
                            h = "-ms-" + c
                        }
                    }
                }
            }
        }
        if (document.defaultView && document.defaultView.getComputedStyle) {
            f = document.defaultView.getComputedStyle(e, null);
            if (f) {
                d = f.getPropertyValue(c);
                if (h) {
                    g = f.getPropertyValue(h)
                }
            }
        } else {
            if (e.currentStyle) {
                d = e.currentStyle[c.replace(/\-(\w)/g, function(i, j) {
                    return j.toUpperCase()
                })];
                if (h) {
                    g = e.currentStyle[h.replace(/\-(\w)/g, function(i, j) {
                        return j.toUpperCase()
                    })]
                }
            }
        }
        return d || g
    },
    getAttr: function(d, c) {
        if (d && c) {
            if (bx.HCL.$0a[1] == "msie" && (bx.HCL.$0a[3] == "6" || bx.HCL.$0a[3] == "7") && c == "class") {
                return d.getAttribute("className")
            } else {
                return d.getAttribute(c)
            }
        }
        return null
    },
    $05: function(e, d) {
        if (e && d) {
            for (var c in d) {
                if (bx.HCL.$0a[1] == "msie" && (bx.HCL.$0a[3] == "6" || bx.HCL.$0a[3] == "7") && c == "class") {
                    e.setAttribute("className", d[c])
                } else {
                    if (bx.HCL.$0a[1] == "msie" && (bx.HCL.$0a[3] == "6" || bx.HCL.$0a[3] == "7") && c == "style") {
                        e.style.cssText = d[c]
                    } else {
                        e.setAttribute(c, d[c])
                    }
                }
            }
        }
    },
    $06: function(f, c) {
        if (bx.HCL.PR.$0R()) {
            var g = -1,
                d = -1;
            var e = "" + f.getAttribute(c);
            g = e.indexOf("{");
            d = e.indexOf("}");
            if (g != -1 && d != -1) {
                e = e.substring(g + 1, d)
            }
            return e
        } else {
            return f.getAttribute(c)
        }
    },
    findAvailCssSheet: function() {
        if (!document.styleSheets || !document.styleSheets.length) {
            return
        } else {
            var e;
            for (var d = 0; d < document.styleSheets.length; d++) {
                e = undefined;
                try {
                    e = document.styleSheets[d].cssRules ? document.styleSheets[d].cssRules : document.styleSheets[d].rules
                } catch (c) {}
                if (!e) {
                    continue
                } else {
                    return document.styleSheets[d]
                }
            }
        }
    },
    getCssRule: function(d) {
        var f = bx.HCL.findAvailCssSheet();
        if (!f) {
            return
        } else {
            var e = f.cssRules ? f.cssRules : f.rules;
            for (var c = 0; c < e.length; c++) {
                rule = e[c];
                if (!rule.selectorText) {
                    continue
                }
                if (rule.selectorText == d) {
                    return rule
                }
            }
        }
        return
    },
    addCssRule: function(c, g) {
        var i = bx.HCL.findAvailCssSheet();
        if (!i) {
            var h = document.getElementsByTagName("head");
            var e;
            if (h.length > 0) {
                e = h[0]
            } else {
                e = document.createElement("head")
            }
            var f = document.createElement("link");
            f.setAttribute("rel", "stylesheet");
            f.type = "text/css";
            e.appendChild(f)
        }
        i = bx.HCL.findAvailCssSheet();
        if (i) {
            try {
                if (i.insertRule) {
                    i.insertRule(c + "{" + g + "}", 0)
                } else {
                    if (i.addRule) {
                        i.addRule(c, g)
                    }
                }
            } catch (d) {
                bx.Trace.log("BLUX", "exception", d, "HCL.addCssRule")
            }
        } else {
            bx.Trace.log("BLUX", "DOM", "Failed to add new CSS sheet", "HCL.addCssRule")
        }
    },
    getViewportWidth: function() {
        var d = 0;
        var e;
        if (bx.HCL.DV.supportCSS3() && bx.HCL.DV.isMobile() && (e = bx.$getMeta("viewport"))) {
            var c;
            e.toLowerCase().replace(" ", "");
            if ((c = e.indexOf("width=")) != -1) {
                d = bx.$checkNaN(parseInt(e.substring(c + "width=".length)))
            }
            if (d > 0) {
                return d
            }
        }
        if (bx.HCL.$0a[2] == "ios" && bx.HCL.$0a[1] == "chrome" && document.documentElement.clientWidth) {
            d = document.documentElement.clientWidth
        } else {
            if (window.bluega && window.bluega.getScreenWidth) {
                d = bluega.getScreenWidth()
            } else {
                if (window.innerWidth !== undefined && window.innerWidth !== null) {
                    d = window.innerWidth
                } else {
                    if (window.outerWidth !== undefined && window.outerWidth !== null) {
                        d = window.outerWidth
                    } else {
                        if (document.documentElement && (document.documentElement.clientWidth !== undefined && document.documentElement.clientWidth !== null)) {
                            d = document.documentElement.clientWidth
                        } else {
                            if (document.body.clientWidth !== undefined && document.body.clientWidth !== null) {
                                d = document.body.clientWidth
                            } else {
                                return null
                            }
                        }
                    }
                }
            }
        }
        if (!isNaN(parseInt(document.body.style.marginLeft))) {
            d -= parseInt(document.body.style.marginLeft)
        }
        if (!isNaN(parseInt(document.body.style.marginRight))) {
            d -= parseInt(document.body.style.marginRight)
        }
        return d
    },
    getViewportHeight: function() {
        var c = 0;
        var e;
        if (bx.HCL.DV.supportCSS3() && bx.HCL.DV.isMobile() && (e = bx.$getMeta("viewport"))) {
            var d;
            e.toLowerCase().replace(" ", "");
            if ((d = e.indexOf("height=")) != -1) {
                c = bx.$checkNaN(parseInt(e.substring(d + "height=".length)))
            }
            if (c > 0) {
                return c
            }
        }
        if (bx.HCL.$0a[2] == "ios" && bx.HCL.$0a[1] == "chrome" && document.documentElement.clientHeight) {
            c = document.documentElement.clientHeight
        } else {
            if (window.bluega && window.bluega.getScreenHeight) {
                c = bluega.getScreenHeight()
            } else {
                if (window.innerHeight !== undefined && window.innerHeight !== null) {
                    c = window.innerHeight
                } else {
                    if (window.outerHeight !== undefined && window.outerHeight !== null) {
                        c = window.outerHeight
                    } else {
                        if (document.documentElement && (document.documentElement.clientHeight !== undefined && document.documentElement.clientHeight !== null)) {
                            c = document.documentElement.clientHeight
                        } else {
                            if (document.body.clientHeight !== undefined && document.body.clientHeight !== null) {
                                c = document.body.clientHeight
                            } else {
                                return null
                            }
                        }
                    }
                }
            }
        }
        if (!isNaN(parseInt(document.body.style.marginTop))) {
            c -= parseInt(document.body.style.marginTop)
        }
        if (!isNaN(parseInt(document.body.style.marginBottom))) {
            c -= parseInt(document.body.style.marginBottom)
        }
        return c
    },
    $07: function() {
        return {
            x: isNaN(parseInt(document.body.style.marginLeft)) ? 0 : parseInt(document.body.style.marginLeft),
            y: isNaN(parseInt(document.body.style.marginTop)) ? 0 : parseInt(document.body.style.marginTop)
        }
    },
    $08: function() {
        return document.documentElement.scrollHeight
    },
    $09: function() {
        return document.documentElement.scrollWidth
    },
    $0A: function(e, d) {
        var f;
        if (e.nodeType == 1) {
            f = bx.HCL.getElementRect(e).x + bx.HCL.getElementRect(e).w;
            d = d < f ? f : d
        }
        for (var c = 0; c < e.childNodes.length; c++) {
            f = bx.HCL.$0A(e.childNodes[c], d);
            d = d < f ? f : d
        }
        return d
    },
    $0B: function(f, c) {
        var e;
        if (f.nodeType == 1) {
            e = bx.HCL.getElementRect(f).y + bx.HCL.getElementRect(f).h;
            c = c < e ? e : c
        }
        for (var d = 0; d < f.childNodes.length; d++) {
            e = bx.HCL.$0B(f.childNodes[d], c);
            c = c < e ? e : c
        }
        return c
    },
    getScrollX: function() {
        if (window.pageXOffset !== undefined && window.pageXOffset !== null) {
            return window.pageXOffset
        } else {
            if (document.documentElement && (document.documentElement.scrollLeft !== undefined && document.documentElement.scrollLeft !== null)) {
                return document.documentElement.scrollLeft
            } else {
                if (document.body.scrollLeft !== undefined && document.body.scrollLeft !== null) {
                    return document.body.scrollLeft
                } else {
                    return null
                }
            }
        }
    },
    getScrollY: function() {
        if (window.pageYOffset !== undefined && window.pageYOffset !== null) {
            return window.pageYOffset
        } else {
            if (document.documentElement && (document.documentElement.scrollTop !== undefined && document.documentElement.scrollTop !== null)) {
                return document.documentElement.scrollTop
            } else {
                if (document.body.scrollTop !== undefined && document.body.scrollTop !== null) {
                    return document.body.scrollTop
                } else {
                    return null
                }
            }
        }
    },
    $0C: function(f, d) {
        var c = 0;
        while (f && (f != document)) {
            c += f.offsetLeft;
            if (d) {
                c -= f.scrollLeft
            }
            f = f.offsetParent
        }
        return c
    },
    $0D: function(d, c) {
        var f = 0;
        while (d && (d != document)) {
            f += d.offsetTop;
            if (c) {
                f -= d.scrollTop
            }
            d = d.offsetParent
        }
        return f
    },
    getScreenX: function(f) {
        var c = 0,
            d;
        d = f;
        while (d && (d != document)) {
            c += d.offsetLeft;
            c += d.clientLeft;
            d = d.offsetParent
        }
        d = f;
        while (d && (d != document)) {
            c -= d.scrollLeft;
            d = d.parentNode
        }
        return c
    },
    getScreenY: function(d) {
        var f = 0,
            c;
        c = d;
        while (c && (c != document)) {
            f += c.offsetTop;
            f += c.clientTop;
            c = c.offsetParent
        }
        c = d;
        while (c && (c != document)) {
            f -= c.scrollTop;
            c = c.parentNode
        }
        return f
    },
    getElementRect: function(g, f) {
        var d, c;
        d = c = 0;
        if (bx.HCL.$0a[1] == "msie") {
            d = -g.clientLeft;
            c = -g.clientTop
        }
        f = f || {};
        if (g.offsetWidth == 0 && g.offsetHeight == 0 && !(g.style.width == "auto" && g.style.height == "auto")) {
            bx.Trace.log("BLUX", "warning", "Try to get thie size of invisible Tag or Size=0 Tag. id=" + g.id, "HCL.getElementRect")
        }
        f.x = bx.HCL.$0C(g) + d;
        f.y = bx.HCL.$0D(g) + c;
        f.w = (g.$css("box-sizing") == "border-box" ? g.clientWidth : g.offsetWidth) || bx.$checkNaN(parseInt(g.$css("width"))) || bx.$checkNaN(parseInt(g.style.width));
        f.h = (g.$css("box-sizing") == "border-box" ? g.clientHeight : g.offsetHeight) || bx.$checkNaN(parseInt(g.$css("height"))) || bx.$checkNaN(parseInt(g.style.height));
        return f
    },
    getElementInnerRect: function(f, d) {
        if (bx.UX) {
            if (f.parentNode && f.id && f.id.indexOf(bx.UX.cfg.$Kb) != -1) {
                return bx.HCL.getElementInnerRect(f.parentNode, d)
            }
        }
        d = d || {};
        var c = bx.HCL.getElementBorderWidth(f);
        bx.HCL.getElementRect(f, d);
        d.x = c.left;
        d.y = c.top;
        d.w = d.w - c.w;
        d.h = d.h - c.h;
        return d
    },
    getElementBorderWidth: function(f) {
        var d = {};
        if (f.$css) {
            d.l = bx.$checkNaN(parseInt(f.$css("padding-left")));
            d.r = bx.$checkNaN(parseInt(f.$css("padding-right")));
            d.t = bx.$checkNaN(parseInt(f.$css("padding-top")));
            d.b = bx.$checkNaN(parseInt(f.$css("padding-bottom")))
        } else {
            d.l = bx.$checkNaN(parseInt(f.style.paddingLeft));
            d.r = bx.$checkNaN(parseInt(f.style.paddingRight));
            d.t = bx.$checkNaN(parseInt(f.style.paddingTop));
            d.b = bx.$checkNaN(parseInt(f.style.paddingBottom))
        }
        var c = {};
        if (f.$css) {
            c.l = bx.$checkNaN(parseInt(f.$css("border-left-width")));
            c.r = bx.$checkNaN(parseInt(f.$css("border-right-width")));
            c.t = bx.$checkNaN(parseInt(f.$css("border-top-width")));
            c.b = bx.$checkNaN(parseInt(f.$css("border-bottom-width")))
        } else {
            c.l = bx.$checkNaN(parseInt(f.style.borderLeftWidth));
            c.r = bx.$checkNaN(parseInt(f.style.borderRightWidth));
            c.t = bx.$checkNaN(parseInt(f.style.borderTopWidth));
            c.b = bx.$checkNaN(parseInt(f.style.borderBottomWidth))
        }
        return {
            left: d.l + c.l,
            top: d.t + c.t,
            w: d.l + c.l + d.r + c.r,
            h: d.t + c.t + d.b + c.b,
            right: d.r + c.r,
            bottom: d.b + c.b
        }
    },
    hideScrollBar: function(d, c) {
        if (d) {
            document.body.style.overflowX = "hidden"
        }
        if (c) {
            document.body.style.overflowY = "hidden"
        }
    },
    DV: {
        $0k: function() {
            return bx.HCL.$0a[0] == "WebKit"
        },
        $0E: function() {
            return 100
        },
        isIE: function() {
            if (bx.HCL.$0a[1] == "msie") {
                return bx.$50.$0a[3]
            }
            return 0
        },
        isIphone: function() {
            if (bx.HCL.$0a[1] == "iphone") {
                return true
            } else {
                return false
            }
        },
        isIpad: function() {
            if (bx.HCL.$0a[1] == "ipad") {
                return true
            } else {
                return false
            }
        },
        isAndroid: function() {
            if (bx.HCL.$0a[1] == "android") {
                return true
            } else {
                return false
            }
        },
        isChrome: function() {
            if (bx.HCL.$0a[1] == "chrome" || bx.HCL.$0a[1] == "android") {
                return true
            } else {
                return false
            }
        },
        isFirefox: function() {
            if (bx.HCL.$0a[1] == "firefox") {
                return true
            } else {
                return false
            }
        },
        isTizen: function() {
            if (bx.HCL.$0a[1] == "tizen") {
                return true
            } else {
                return false
            }
        },
        isIOS: function() {
            if (bx.HCL.$0a[2] == "ios" || bx.HCL.$0a[2] == "mac") {
                return true
            } else {
                return false
            }
        },
        isIOSonly: function() {
            if (bx.HCL.$0a[2] == "ios") {
                return true
            } else {
                return false
            }
        },
        isAndroidOS: function() {
            if (bx.HCL.$0a[2] == "android") {
                return true
            } else {
                return false
            }
        },
        isMobile: function() {
            if (bx.HCL.$0a[2] == "android" || bx.HCL.$0a[2] == "ios" || bx.HCL.$0a[2] == "mobile") {
                return true
            } else {
                return false
            }
        },
        hasWebSocket: function() {
            if (window.WebSocket) {
                return true
            } else {
                return false
            }
        },
        $0G: function() {
            return true
        },
        $0F: function() {
            return bx.HCL.DV.$0G()
        },
        hasTouchAndMouseEvent: function() {
            if (window.TouchEvent && window.MouseEvent) {
                if (window.navigator.userAgent.toLowerCase().indexOf("windows") != -1) {
                    if (window.navigator.userAgent.toLowerCase().indexOf("chrome") != -1) {
                        return true
                    }
                    if (bx.HCL.$0a[1] == "firefox") {
                        return true
                    }
                }
            }
            return false
        },
        hasTouchEvent: function() {
            if (window.TouchEvent && !window.MouseEvent) {
                return true
            } else {
                if (window.TouchEvent && window.MouseEvent) {
                    if (window.navigator.userAgent.toLowerCase().indexOf("windows") != -1) {
                        return false
                    } else {
                        if (("ontouchstart" in window) || window.DocumentTouch && document instanceof DocumentTouch) {
                            return true
                        } else {
                            if (window.navigator.userAgent.toLowerCase().indexOf("macintosh") != -1) {
                                return false
                            } else {
                                if (window.navigator && navigator.userAgent.indexOf("Mobile") != -1 && navigator.userAgent.indexOf("Chrome") != -1) {
                                    return true
                                } else {
                                    return false
                                }
                            }
                        }
                    }
                } else {
                    if (bx.HCL.$0a[1] == "android" || bx.HCL.$0a[1] == "iphone" || bx.HCL.$0a[1] == "ipad" || bx.HCL.$0a[1] == "tizen") {
                        return true
                    } else {
                        if (bx.HCL.DV.isMobile() && bx.HCL.DV.isFirefox()) {
                            return true
                        } else {
                            if (bx.HCL.DV.isMobile() && bx.HCL.DV.isChrome()) {
                                return true
                            }
                        }
                    }
                }
            }
            return false
        },
        runDirect: function() {
            if (bx.HCL.$0a[0] == "WebKit") {
                return true
            }
            return false
        },
        supportCSS3: function() {
            if (window.TransitionEvent) {
                return true
            } else {
                if (window.WebKitTransitionEvent) {
                    return true
                } else {
                    if (document.body.style.MozTransition !== undefined) {
                        return true
                    } else {
                        if (document.body.style.OTransition !== undefined) {
                            return true
                        } else {
                            if (document.body.style.msTransform !== undefined) {
                                return true
                            }
                        }
                    }
                }
            }
            return false
        },
        supportZoom: function() {
            if (bx.HCL.$0a[1] == "msie") {
                return false
            }
            if (document.body.style.zoom !== undefined) {
                return true
            }
            return false
        },
        supportCSS3D: function() {
            if (bx.HCL.DV.$N1A === undefined) {
                var e = document.createElement("p"),
                    f, d = {
                        webkitTransform: "-webkit-transform",
                        OTransform: "-o-transform",
                        msTransform: "-ms-transform",
                        MozTransform: "-moz-transform",
                        transform: "transform"
                    };
                document.body.insertBefore(e, null);
                for (var c in d) {
                    if (e.style[c] !== undefined) {
                        e.style[c] = "translate3d(1px,1px,1px)";
                        f = window.getComputedStyle(e).getPropertyValue(d[c])
                    }
                }
                document.body.removeChild(e);
                bx.HCL.DV.$N1A = (f !== undefined && f.length > 0 && f !== "none")
            }
            return bx.HCL.DV.$N1A
        },
        supportCanvas: function() {
            if (window.HTMLCanvasElement) {
                return true
            }
            return false
        },
        $0j: function() {
            if (!bx.HCL.DV.supportCSS3() && bx.$50.$0a[1] == "msie") {
                return false
            }
            return true
        },
        getLanguage: function() {
            var c = navigator.language ? navigator.language : navigator.userLanguage;
            return c.substring(0, 2)
        },
        getBrowser: function() {
            return {
                type: bx.$50.$0a[1],
                ver1: bx.$50.$0a[3],
                ver2: bx.$50.$0a[4],
                ver3: bx.$50.$0a[5]
            }
        },
        getBrowserType: function() {
            return bx.$50.$0a[1]
        }
    }
};
bx.HCL.PR = {
    $0R: function() {
        if (bx.HCL.$0a[1] == "msie") {
            return true
        }
        return false
    },
    $0S: function() {
        if (bx.HCL.$0a[1] == "msie") {
            return true
        }
        return false
    },
    $0T: function(c) {
        if (c == "TABLE") {
            return true
        }
        return false
    },
    $0U: function(c) {
        if (bx.HCL.$0a[1] == "msie") {
            if (c == "TABLE") {
                return true
            }
        }
        return false
    },
    $0X: function() {
        return true
    },
    usePreload: function() {
        return false
    }
};
bx.HCL.getElementX = bx.HCL.$0C;
bx.HCL.getElementY = bx.HCL.$0D;
bx.Event = {
    add: function(d, e, f, c) {
        if (document.addEventListener) {
            if (bx.Event.onlyDownPhase) {
                d.addEventListener(e, f, true)
            } else {
                d.addEventListener(e, f, c)
            }
        } else {
            if (d.attachEvent) {
                d.attachEvent("on" + e, f)
            }
        }
    },
    remove: function(d, e, f, c) {
        if (document.removeEventListener) {
            d.removeEventListener(e, f, c)
        } else {
            if (d.detachEvent) {
                d.detachEvent("on" + e, f)
            }
        }
    },
    getElement: function(c) {
        if (c.target) {
            return c.target
        } else {
            if (c.srcElement) {
                return c.srcElement
            } else {
                return null
            }
        }
    },
    preventDefault: function(c) {
        if (c.preventDefault) {
            c.preventDefault()
        } else {
            c.returnValue = false
        }
    },
    stopPropagation: function(c) {
        if (c.stopPropagation) {
            c.stopPropagation()
        } else {
            c.cancelBubble = true
        }
    },
    isRightButton: function(c) {
        if (c.type == "mousedown" && !(c.which == 3 || ((bx.$50.$0a[1] == "msie" && c.button == 2)))) {
            return false
        }
        return true
    },
    isLeftButton: function(c) {
        if (c.type == "mousedown" && !(c.which == 1 || (c.button == 0 || (bx.$50.$0a[1] == "msie" && c.button == 1)))) {
            return false
        }
        return true
    }
};
bx.Event.setupMouseWheel = function(f, g, d, e) {
    if (!g) {
        bx.Trace.log("BLUX", "errorParameter", "onEvent=" + g, "Event.setupMouseWheel");
        return
    }
    if (!bx.HCL.DV.hasTouchEvent()) {
        function c(i) {
            if (i.ctrlKey) {
                bx.Event.preventDefault(i)
            }
            if (d && g.$0g && g.$0g > (new Date()).getTime()) {
                return
            }
            var h;
            if (bx.CWnd && f instanceof bx.CWnd) {
                if (bx.UX && bx.UX.$5a(f)) {
                    return
                }
                if (f && f.isShow && !f.isShow()) {
                    return
                }
                h = f.tag
            } else {
                h = f
            }
            var j = bx.Event.getElement(i);
            if (j) {
                if (!bx.DOM.IsDescendantOf(j, h)) {
                    return
                }
            }
            if (!bx.DOM.isVisible(h)) {
                return
            }
            if (!i) {
                i = window.event
            }
            if (i.wheelDelta) {
                if (bx.$50.$0a[1] == "safari" && bx.$50.$0a[2] == "mac") {
                    c.$0h = i.wheelDelta / 12
                } else {
                    c.$0h = i.wheelDelta / 120
                }
                if (window.opera) {
                    c.$0h = -c.$0h
                }
            } else {
                if (i.detail) {
                    c.$0h = -i.detail / 3
                }
            }
            g(c.$0h, i);
            if (d) {
                g.$0g = (new Date()).getTime() + d
            }
        }
        if (bx.$50.$0a[1] == "msie") {
            bx.Event.add(document, "mousewheel", c, false)
        } else {
            bx.Event.add(window, "mousewheel", c, false)
        }
        bx.Event.add(window, "DOMMouseScroll", c, false)
    }
};
bx.DOM = {
    init: function() {
        if (!window.$) {
            window.$ = bx.DOM.getElementFromDocument
        }
        if (!window.$TAG) {
            window.$TAG = function(c, d, e) {
                return bx.DOM.createElement(null, c, d, e)
            }
        }
        if (!window.bx$) {
            window.bx$ = bx.DOM.getElementFromDocument
        }
        if (window.Element) {
            window.Element.prototype.$$ = function(c) {
                return bx.DOM.getElement(this, c)
            };
            window.Element.prototype.$TAG = function(c, d, e) {
                return bx.DOM.createElement(this, c, d, e)
            };
            window.Element.prototype.$CSS = function(c, d) {
                return bx.HCL.$03(this, c, d)
            };
            window.Element.prototype.$css = function(c, d) {
                return bx.HCL.$04(this, c, d)
            };
            window.Element.prototype.$A = function(c) {
                return bx.HCL.$05(this, c)
            };
            window.Element.prototype.$a = function(c) {
                return bx.HCL.getAttr(this, c)
            };
            bx.$apply3D = function(c) {
                c.$CSS("transform", (c.bxTrX !== undefined || c.bxTrY !== undefined ? "translate3d(" + bx.$checkNaN(parseInt(c.bxTrX)) + "px," + bx.$checkNaN(parseInt(c.bxTrY)) + "px,0)" : "") + (c.bxTrScale3D ? c.bxTrScale3D + " " : "") + (c.bxTrRotateZ ? c.bxTrRotateZ + " " : ""))
            };
            bx.$remove3D = function(c) {
                if (c.bxTrScale3D) {
                    delete c.bxTrScale3D
                }
                if (c.bxTrX) {
                    delete c.bxTrX
                }
                if (c.bxTrY) {
                    delete c.bxTrY
                }
                if (c.bxTrRotateZ) {
                    delete c.bxTrRotateZ
                }
                c.$CSS("transform", "none")
            };
            if (bx.HCL.DV.supportCSS3D() && bx.HCL.DV.isAndroid()) {
                window.Element.prototype.$X = function(c) {
                    this.bxX = c;
                    this.bxTrX = c;
                    bx.$apply3D(this)
                };
                window.Element.prototype.$Y = function(c) {
                    this.bxY = c;
                    this.bxTrY = c;
                    bx.$apply3D(this)
                };
                window.Element.prototype.$x = function() {
                    return bx.$checkNaN(parseInt(this.bxX))
                };
                window.Element.prototype.$y = function() {
                    return bx.$checkNaN(parseInt(this.bxY))
                }
            } else {
                window.Element.prototype.$X = function(c) {
                    this.style.left = c + "px"
                };
                window.Element.prototype.$Y = function(c) {
                    this.style.top = c + "px"
                };
                window.Element.prototype.$x = function() {
                    return bx.$checkNaN(parseInt(this.style.left))
                };
                window.Element.prototype.$y = function() {
                    return bx.$checkNaN(parseInt(this.style.top))
                }
            }
        }
        bx.DOM.$40(document.body)
    },
    $40: function(c) {
        if (window.Element) {
            return c
        }
        if (!c.$$) {
            c.$$ = function(d) {
                return bx.DOM.getElement(c, d)
            }
        }
        if (!c.$TAG) {
            c.$TAG = function(d, e, f) {
                return bx.DOM.createElement(c, d, e, f)
            }
        }
        if (!c.$CSS) {
            c.$CSS = function(d, e) {
                return bx.HCL.$03(c, d, e)
            }
        }
        if (!c.$css) {
            c.$css = function(d, e) {
                return bx.HCL.$04(c, d, e)
            }
        }
        if (!c.$A) {
            c.$A = function(d) {
                return bx.HCL.$05(c, d)
            }
        }
        if (!c.$a) {
            c.$a = function(d) {
                return bx.HCL.getAttr(c, d)
            }
        }
        return c
    },
    getElement: function(e, f) {
        var c;
        for (var d = 0; d < e.childNodes.length; d++) {
            if (e.childNodes[d].nodeType == 1) {
                if (e.childNodes[d].id == f) {
                    bx.DOM.$40(e.childNodes[d]);
                    return e.childNodes[d]
                } else {
                    if ((c = bx.DOM.getElement(e.childNodes[d], f)) != null) {
                        return c
                    }
                }
            }
        }
        return null
    },
    getElementsByTagName: function(f, e) {
        var g = f.ownerDocument.getElementsByTagName(e);
        var c = [];
        for (var d = 0; d < g.length; d++) {
            if (bx.DOM.IsDescendantOf(g[d], f) && g[d] != f) {
                c.push(g[d])
            }
        }
        return c
    },
    getElementFromDocument: function(d) {
        var c;
        c = typeof d == "string" ? document.getElementById(d) : d;
        if (c) {
            bx.DOM.$40(c)
        }
        return c
    },
    createElement: function(g, c, d, h) {
        var f = bx.DOM.getElementFromDocument(c);
        var e;
        if (!f) {
            f = document.createElement(c);
            if (g) {
                g.appendChild(f)
            }
        }
        bx.DOM.$40(f);
        if (d) {
            f.$A(d)
        }
        if (h) {
            f.$CSS(h)
        }
        return f
    },
    IsDescendantOf: function(e, d) {
        var c = e;
        while (c && (c != e.ownerDocument)) {
            if (c == d) {
                return true
            }
            c = c.parentNode
        }
        return false
    },
    putAfter: function(d, c) {
        c.parentNode.insertBefore(d, c.nextSibling);
        return d
    },
    putBefore: function(d, c) {
        c.parentNode.insertBefore(d, c);
        return d
    },
    setText: function(e, f) {
        var d = false;
        for (var c = 0; c < e.childNodes.length; c++) {
            if (e.childNodes[c].nodeType == 3) {
                if (e.childNodes[c].textContent !== undefined) {
                    e.childNodes[c].textContent = f
                } else {
                    if (e.childNodes[c].innerText !== undefined) {
                        e.childNodes[c].innerText = f
                    } else {
                        if (e.childNodes[c].data !== undefined) {
                            e.childNodes[c].data = f
                        }
                    }
                }
                d = true;
                break
            }
        }
        if (!d) {
            e.appendChild(document.createTextNode(f))
        }
    },
    isVisible: function(d) {
        var c = d;
        while (c) {
            if (c.$css("visible") == "hidden" || c.$css("display") == "none" || c.$css("opacity") === 0) {
                return false
            }
            if (c == document.body) {
                return true
            }
            c = c.parentNode
        }
        return false
    }
};
bx.$bind = function(e, d, c) {
    return function() {
        return e.apply(d, c)
    }
};
bx.$cloneObject = function(d, c) {
    if (!c || typeof c != "object") {
        return d
    }
    return bx.$5x0(d, c, true)
};
bx.$copyObject = function(d, c) {
    if (!c || typeof c != "object") {
        return d
    }
    return bx.$5x0(d, c)
};
bx.$5x0 = function(f, e, d) {
    if (!(typeof e == "object" && e instanceof Object)) {
        return e
    }
    if (e.constructor == Date || e.constructor == RegExp || e.constructor == Function || e.constructor == String || e.constructor == Number || e.constructor == Boolean) {
        return new e.constructor(e)
    } else {
        if (e instanceof Element) {
            return e
        }
    }
    f = f || new e.constructor();
    for (var c in e) {
        if (typeof f[c] == "undefined") {
            f[c] = bx.$5x0(null, e[c], d)
        } else {
            if (typeof f[c] == "object" && f[c] instanceof Object) {
                f[c] = bx.$5x0(f[c], e[c], d)
            } else {
                f[c] = e[c]
            }
        }
    }
    if (d) {
        for (c in f) {
            if (e[c] === undefined && f[c] !== undefined) {
                delete f[c]
            }
        }
        if (f instanceof Array && e instanceof Array) {
            f.length = e.length
        }
    }
    return f
};
bx.$objectToJSON = function(c) {
    if (window.JSON) {
        return JSON.stringify(c)
    }
    return null
};
bx.$checkNaN = function(c) {
    return isNaN(c) ? 0 : c
};
bx.$addParamToURL = function(c, e, d) {
    if (c.indexOf("?") == -1) {
        c += "?"
    } else {
        c += "&"
    }
    c += e + "=" + encodeURIComponent(d);
    return c
};
bx.$getParamFromURL = function(c, h) {
    if (!c || !h) {
        return
    }
    var j = c.indexOf("&");
    var g = c.indexOf("?");
    var f = c;
    if (g != -1) {
        f = (j != -1 && j <= g) ? c : c.substring(g + 1)
    }
    if (f) {
        var e = f.split(/[&#]/);
        for (var d = 0; d < e.length; d++) {
            if (e[d].indexOf(h + "=") == 0) {
                return e[d].substring((h + "=").length)
            }
        }
    }
    return
};
bx.$getMeta = function(c) {
    var e = document.getElementsByTagName("meta");
    for (var d = 0; d < e.length; d++) {
        if (e[d].name == c) {
            return e[d].content
        }
    }
    return null
};
bx.$setMeta = function(c, f) {
    var g;
    if (!bx.$getMeta(c)) {
        var e = document.getElementsByTagName("head");
        if (e && e[0]) {
            g = document.createElement("meta");
            g.setAttribute("name", c);
            e[0].appendChild(g)
        }
    }
    var h = document.getElementsByTagName("meta");
    for (var d = 0; d < h.length; d++) {
        if (h[d].name == c) {
            g = h[d]
        }
    }
    if (g) {
        g.content = f;
        return true
    } else {
        bx.Trace.log("BLUX", "errorNoElement", "Cannot create meta tag of " + c, "$setMeta()")
    }
    return false
};
bx.$setCursor = function(c, d) {
    c = c || document.body;
    if (d) {
        if (d.indexOf(".") != -1) {
            c.style.cursor = "url(" + d + "), auto"
        } else {
            c.style.cursor = d
        }
    } else {
        c.style.cursor = "default"
    }
};
bx.$Inherit = function(c, d) {
    if (c != d && d != null) {
        if (!c.bxParentClass) {
            bx.inClassing = true;
            c.prototype = new d();
            bx.inClassing = false;
            c.prototype.constructor = c;
            c.bxParentClass = d
        } else {
            bx.Trace.log("BLUX", "warnClassDefine", c, "$Inherit()")
        }
    }
};
bx.$classOf = function(d, c) {
    while (d) {
        if (d == c) {
            return true
        }
        d = d.bxParentClass
    }
    return false
};
bx.UXmanager = {
    $2Z: {},
    SYS_CONTEXT_MENU: 1,
    SYS_HIGHLIGHT: 2,
    SYS_SELECTABLE: 4,
    SYS_DRAGGABLE: 8,
    SYS_USE_TOUCHEND: 16,
    SYS_NO_ADDR_BAR: 32,
    SYS_NO_VIEWPORT: 64,
    SYS_FIX_SCREEN: 128,
    SYS_USE_RIGHTCLICK: 256,
    EVENT_BLOCK_SCREEN: 1,
    EVENT_UNBLOCK_SCREEN: 2,
    EVENT_HIDDEN: 10,
    EVENT_VISIBLE: 11,
    init: function(e) {
        this.$3V();
        this.$DF = e || {};
        this.type = this.$DF.type;
        if (bx.CWnd) {
            this.$2G = {
                popup: 910000,
                waiting: 920000,
                alert: 930000
            };
            if (bx.HCL.DV.hasTouchEvent() && window.bxg) {
                this.$DF.type = this.$DF.type ? this.$DF.type | bx.UX.SYS_USE_TOUCHEND : bx.UX.SYS_USE_TOUCHEND
            }
            if (this.$DF.debug) {
                this.$DF.type = this.$DF.type ? this.$DF.type | bx.UX.SYS_CONTEXT_MENU : bx.UX.SYS_CONTEXT_MENU;
                bx.Log.init(true);
                bx.Trace.level(bx.Trace.DEBUG)
            }
        }
        if (this.$DF.rootTag && this.$DF.resize) {
            this.$DF.resize = null;
            bx.Trace.log("BLUX", "warning", "resize option is not allowed when rootTag option exists. So, resize option is ignored.", "UX.init")
        }
        var d = bx.$50.$0a[1];
        if (this.$DF.type & bx.UX.SYS_NO_ADDR_BAR) {
            this.$DF.type = this.$DF.type & ~bx.UX.SYS_NO_ADDR_BAR
        }
        if (window.parent !== window) {
            this.$DF.type = this.$DF.type | bx.UX.SYS_NO_VIEWPORT
        }
        if (!(this.$DF.type & bx.UX.SYS_NO_VIEWPORT) && !this.$DF.resizeSimple) {
            if (d == "iphone" && parseInt(bx.HCL.$0a[3]) >= 11) {} else {
                if (bx.HCL.DV.isIOS()) {
                    if (d == "iphone" && window.devicePixelRatio >= 2) {
                        if (window.bluega && window.bluega.ios) {
                            bx.$setMeta("viewport", "width=640; height=" + Math.max(window.innerWidth, window.innerHeight) * 2 + "; user-scalable=0; initial-scale=0.5; minimum-scale=0.5; maximum-scale=0.5;")
                        } else {
                            this.$N1b = window.screen.width;
                            this.$N1c = window.screen.height;
                            this._orgVpWidth = window.screen.availWidth;
                            this._orgVpHeight = window.screen.availHeight;
                            if (this.$DF.type & bx.UX.SYS_NO_ADDR_BAR) {
                                if (bx.HCL.getViewportWidth() > bx.HCL.getViewportHeight()) {
                                    bx.$setMeta("viewport", "width=" + this.$N1c * 2 + "; height=" + this.$N1b * 2 + "; user-scalable=0; initial-scale=0.5; minimum-scale=0.5; maximum-scale=0.5;")
                                } else {
                                    bx.$setMeta("viewport", "width=" + this.$N1b * 2 + "; height=" + this.$N1c * 2 + "; user-scalable=0; initial-scale=0.5; minimum-scale=0.5; maximum-scale=0.5;")
                                }
                            } else {
                                bx.$setMeta("viewport", "width=" + bx.HCL.getViewportWidth() * 2 + "; height=" + bx.HCL.getViewportHeight() * 2 + "; user-scalable=0; initial-scale=0.5; minimum-scale=0.5; maximum-scale=0.5;")
                            }
                        }
                    } else {
                        bx.$setMeta("viewport", "initial-scale=1.0; maximum-scale=1.0; user-scalable=0;")
                    }
                } else {
                    if (bx.HCL.DV.isTizen() && window.devicePixelRatio && window.devicePixelRatio == 2) {
                        bx.$setMeta("viewport", "initial-scale=0.5, maximum-scale=0.5, minimum-scale=0.5, user-scalable=0, width=device-width, height=device-height")
                    }
                }
            }
        }
        if (this.$DF.rootTag) {
            var c = bx.HCL.getElementInnerRect(this.$DF.rootTag);
            this.height = c.h;
            this.width = c.w
        } else {
            this.height = bx.HCL.getViewportHeight();
            this.width = bx.HCL.getViewportWidth();
            if (d == "iphone" && window.devicePixelRatio == 1) {
                if (this.$DF.type & bx.UX.SYS_NO_ADDR_BAR) {
                    this.height += 60
                }
            }
        }
        if (bx.CWnd) {
            if (bx.$2N) {
                this.pages = new bx.$2N()
            }
            this.$52 = new bx.CPane(null, "bxWndRoot", new bx.CPosition({
                type: "ondeck",
                width: "100%",
                height: "100%"
            }));
            this.$52.create();
            this.domBuffer = this.$52.tag.$TAG("div", {
                id: "bx$SYS_domBuffer"
            });
            this.DOMbuffer = this.domBuffer;
            this.domBuffer.$CSS({
                display: "none"
            })
        }
        if (this.$DF.resize) {
            if (this.$DF.resize == "portrait" || this.$DF.resize == "landscape") {
                bx.Event.add(window, "orientationchange", bx.UXmanager.$3W, false)
            } else {
                if (this.$DF.resize == "orientationchange" || this.$DF.resize == "resize") {
                    bx.Event.add(window, "resize", bx.UXmanager.$3W, false);
                    bx.Event.add(window, "orientationchange", bx.UXmanager.$3W, false)
                }
            }
        }
        if (!(this.$DF.type & bx.UX.SYS_HIGHLIGHT) && bx.HCL.DV.supportCSS3()) {
            bx.HCL.addCssRule("html, body, div, dl, form, ol, p, table, ul, dd, dt, li, tbody, td, tfoot, th, thead, tr, a, b, br, i, img, small, span, strong, sub, sup, legend, fieldset, input, map, area, textarea", "-webkit-tap-highlight-color: rgba(0,0,0,0.0);-o-tap-highlight-color: rgba(0,0,0,0.0);-moz-tap-highlight-color: rgba(0,0,0,0.0);-ms-tap-highlight-color: rgba(0,0,0,0.0);tap-highlight-color: rgba(0,0,0,0.0);")
        }
        if (!(this.$DF.type & bx.UX.SYS_SELECTABLE) && bx.HCL.DV.supportCSS3()) {
            if (d == "firefox" || d == "mozilla") {
                bx.HCL.addCssRule("html, body, div, dl, ol, p, table, ul, dd, dt, li, tbody, td, tfoot, th, thead, tr, a, b, br, i, img, small, span, strong, sub, sup, legend, map", "-moz-user-select: none;")
            } else {
                document.body.$CSS({
                    userSelect: "none"
                })
            }
        }
        if (!(this.$DF.type & bx.UX.SYS_DRAGGABLE)) {
            bx.Event.add(window, "dragstart", function(i) {
                if (document.activeElement && document.activeElement.contentEditable == "true") {
                    return
                }
                if (!i) {
                    i = window.event
                }
                bx.Event.preventDefault(i);
                bx.Event.stopPropagation(i)
            }, false)
        }
        if (!(this.$DF.type & bx.UX.SYS_CONTEXT_MENU)) {
            document.oncontextmenu = function() {
                return false
            }
        }
        if (this.$DF.type & bx.UX.SYS_FIX_SCREEN) {
            if (bx.CGesture.supportEventPassive()) {
                bx.Event.add(window, "touchmove", function(i) {
                    if (!i) {
                        i = window.event
                    }
                    bx.Event.preventDefault(i)
                }, {
                    passive: false
                })
            } else {
                bx.Event.add(window, "touchmove", function(i) {
                    if (!i) {
                        i = window.event
                    }
                    bx.Event.preventDefault(i)
                }, false)
            }
            if (bx.HCL.DV.isIOS()) {
                bx.Event.add(window, "touchstart", function(i) {
                    if (!i) {
                        i = window.event
                    }
                    bx.Event.preventDefault(i)
                }, false);
                bx.Event.add(window, "touchend", function(i) {
                    if (!i) {
                        i = window.event
                    }
                    bx.Event.preventDefault(i)
                }, false)
            }
            document.body.style.touchAction = "none"
        }
        if (!this.$DF.rootTag || !(this.$DF.type & bx.UX.SYS_NO_VIEWPORT)) {
            bx.HCL.hideScrollBar(true, true)
        }
        if (bx.CWnd) {
            bx.Transition = new bx.CTransition(bx.UX.cfg.transitTimeslot)
        }
        var h, g;
        if (typeof document.hidden !== "undefined") {
            h = "hidden";
            g = "visibilitychange"
        } else {
            if (typeof document.mozHidden !== "undefined") {
                h = "mozHidden";
                g = "mozvisibilitychange"
            } else {
                if (typeof document.msHidden !== "undefined") {
                    h = "msHidden";
                    g = "msvisibilitychange"
                } else {
                    if (typeof document.webkitHidden !== "undefined") {
                        h = "webkitHidden";
                        g = "webkitvisibilitychange"
                    }
                }
            }
        }

        function f() {
            if (bx.UX.$DF.onEvent) {
                if (document[h]) {
                    bx.UX.$DF.onEvent(bx.UX.EVENT_HIDDEN)
                } else {
                    bx.UX.$DF.onEvent(bx.UX.EVENT_VISIBLE)
                }
            }
        }
        bx.Event.add(document, g, f, false);
        if (bx.CWnd) {
            if (!window.$W) {
                window.$W = bx.UXmanager.$2F
            }
        }
    },
    onResizeRootTag: function(c) {
        if (!this.$DF.rootTag || !c) {
            return
        }
        if (bx.UX.height == c.h && bx.UX.width == c.w) {
            return
        }
        bx.UX.height = c.h;
        bx.UX.width = c.w;
        if (bx.CWnd) {
            if (bx.UX.$2P) {
                bx.UX.$2P.$CSS({
                    width: bx.UX.width + "px",
                    height: bx.UX.height + "px"
                })
            }
            bx.UX.$52.onResize({
                x: 0,
                y: 0,
                w: bx.UX.width,
                h: bx.UX.height
            }, 1)
        }
    },
    $3W: function(h) {
        if (!h) {
            h = window.event
        }
        var g = 0;
        if (!(bx.UX.$DF.type & bx.UX.SYS_NO_VIEWPORT) && !bx.UX.$DF.resizeSimple) {
            if (bx.$50.$0a[1] == "iphone" && parseInt(bx.HCL.$0a[3]) >= 11) {
                g = 6
            } else {
                if (bx.$50.$0a[1] == "iphone" && window.devicePixelRatio >= 2) {
                    if (window.screen.width >= 320 && window.screen.height >= 568) {
                        g = 4
                    } else {
                        g = 2
                    }
                } else {
                    if (bx.$50.$0a[1] == "ipad" && window.devicePixelRatio >= 2 && parseInt(bx.HCL.$0a[3]) >= 9) {
                        g = 5
                    } else {
                        if (bx.$50.$0a[1] == "iphone" && bx.$checkNaN(parseInt(bx.$50.$0a[3])) >= 5) {
                            g = 1
                        } else {
                            if (bx.$50.$0a[1] == "iphone" || bx.$50.$0a[1] == "ipad") {
                                g = 3
                            }
                        }
                    }
                }
            }
            if (bx.$50.$0a[1] == "android") {
                if (bx.UX._lastOrient == window.orientation && bx.UX.width == bx.HCL.getViewportWidth()) {
                    return
                } else {
                    if (bx.UX._lastOrient == undefined && document.activeElement) {
                        if (document.activeElement.tagName == "INPUT" || document.activeElement.tagName == "TEXTAREA" || document.activeElement.tagName == "SELECT") {
                            return
                        }
                    }
                }
            }
        }
        if (g == 4) {
            var e;
            if (("standalone" in window.navigator) && window.navigator.standalone) {
                e = true
            }
            if (!e) {
                if (!bx.UX.__iphoneTy4handler) {
                    document.addEventListener("focusout", function() {
                        if (window.orientation == 90 || window.orientation == -90) {
                            window.scrollTo(0, -(44))
                        } else {
                            window.scrollTo(0, -(20 + 44))
                        }
                    });
                    bx.UX.__iphoneTy4handler = true
                }
                if (window.orientation == 90 || window.orientation == -90) {
                    var i = window.screen.width
                } else {
                    var i = window.screen.height
                }
                if (window.orientation == 90 || window.orientation == -90) {
                    if (window.screen.height >= 667) {
                        i -= (44);
                        window.scrollTo(0, -(44))
                    } else {
                        i -= (44 + 44);
                        window.scrollTo(0, -(44))
                    }
                } else {
                    i -= (20 + 44 + 44);
                    window.scrollTo(0, -(20 + 44))
                }
            } else {
                if (window.orientation == 90 || window.orientation == -90) {
                    var i = bx.UX._orgVpWidth
                } else {
                    var i = bx.UX._orgVpHeight
                }
            }
            if (window.orientation == 90 || window.orientation == -90) {
                bx.$setMeta("viewport", "width=" + (bx.UX.$N1c * 2) + "; height=" + i * 2 + "; user-scalable=0; initial-scale=0.5; minimum-scale=0.5; maximum-scale=0.5;")
            } else {
                bx.$setMeta("viewport", "width=" + (bx.UX.$N1b * 2) + "; height=" + i * 2 + "; user-scalable=0; initial-scale=0.5; minimum-scale=0.5; maximum-scale=0.5;")
            }
        } else {
            if (g == 5) {} else {
                if (g == 2) {
                    var d = 0;
                    if (h.type == "orientationchange") {
                        d = window.pageYOffset
                    }
                    var f = 520;
                    var c;
                    if (window.orientation == 90 || window.orientation == -90) {
                        if (bx.UX.$DF.type & bx.UX.SYS_NO_ADDR_BAR) {
                            c = bx.UX.$N1b * 2 - d
                        } else {
                            c = f - d
                        }
                        bx.$setMeta("viewport", "width=" + (bx.UX.$N1c * 2) + "; height=" + c + "; user-scalable=0; initial-scale=0.5; minimum-scale=0.5; maximum-scale=0.5;")
                    } else {
                        if (bx.UX.$DF.type & bx.UX.SYS_NO_ADDR_BAR) {
                            c = bx.UX.$N1c * 2 - d
                        } else {
                            c = 712 + (bx.UX.$N1c - 480) * 2 - d
                        }
                        bx.$setMeta("viewport", "width=" + (bx.UX.$N1b * 2) + "; height=" + c + "; user-scalable=0; initial-scale=0.5; minimum-scale=0.5; maximum-scale=0.5;")
                    }
                }
            }
        }
        if (!bx.UX.$DF.resizeSimple) {
            if (bx.UX.height == bx.HCL.getViewportHeight() && bx.UX.width == bx.HCL.getViewportWidth()) {
                return
            }
        }
        bx.UX.height = bx.HCL.getViewportHeight();
        bx.UX.width = bx.HCL.getViewportWidth();
        bx.UX._lastOrient = window.orientation;
        if (g == 1 || g == 3) {
            if (h.type == "orientationchange" && window.orientation !== undefined) {
                if (window.orientation == 90 || window.orientation == -90) {
                    if (bx.UX.width / bx.UX.height > 1.1) {
                        bx.UX.$5d = bx.UX.$5d || {
                            w: bx.UX.width,
                            h: bx.UX.height
                        };
                        bx.UX.$5d.w = Math.max(bx.UX.$5d.w, bx.UX.width);
                        bx.UX.$5d.h = Math.max(bx.UX.$5d.h, bx.UX.height)
                    }
                } else {
                    if (bx.UX.height / bx.UX.width > 1.1) {
                        bx.UX.$5e = bx.UX.$5e || {
                            w: bx.UX.width,
                            h: bx.UX.height
                        };
                        bx.UX.$5e.w = Math.max(bx.UX.$5e.w, bx.UX.width);
                        bx.UX.$5e.h = Math.max(bx.UX.$5e.h, bx.UX.height)
                    }
                }
            }
            if (window.orientation !== undefined) {
                if (bx.UX.$5d && (window.orientation == 90 || window.orientation == -90)) {
                    bx.UX.width = bx.UX.$5d.w;
                    bx.UX.height = bx.UX.$5d.h
                } else {
                    if (bx.UX.$5e) {
                        bx.UX.width = bx.UX.$5e.w;
                        bx.UX.height = bx.UX.$5e.h
                    }
                }
            }
        }
        if (g == 1) {
            if (h.type == "resize" && bx.UX.$DF.type & bx.UX.SYS_NO_ADDR_BAR) {
                bx.UX.height += 60
            }
        }
        if (bx.CWnd) {
            if (bx.UX.$2P) {
                bx.UX.$2P.$CSS({
                    width: bx.UX.width + "px",
                    height: bx.UX.height + "px"
                })
            }
        }
        if (g == 1) {
            if (h.type == "orientationchange") {
                if (bx.UX.$DF.type & bx.UX.SYS_NO_ADDR_BAR) {
                    if (!(window.orientation == 90 || window.orientation == -90)) {
                        bx.UX.height += 60
                    }
                    setTimeout(function() {
                        window.scrollTo(0, 1);
                        if (bx.CWnd) {
                            bx.UX.$52.onResize({
                                x: 0,
                                y: 0,
                                w: bx.UX.width,
                                h: bx.UX.height
                            }, 1)
                        }
                    }, 1)
                }
            }
        } else {
            if (g == 2) {
                if (h.type == "orientationchange") {
                    if (bx.UX.$DF.type & bx.UX.SYS_NO_ADDR_BAR) {
                        setTimeout(function() {
                            window.scrollTo(0, 1);
                            if (bx.CWnd) {
                                bx.UX.$52.onResize({
                                    x: 0,
                                    y: 0,
                                    w: bx.UX.width,
                                    h: bx.UX.height
                                }, 1)
                            }
                        }, 1);
                        return
                    }
                }
            }
        }
        if (bx.CWnd) {
            if (bx.UX.$DF.resizeSimple && h.type == "orientationchange" && bx.HCL.DV.isIOS() && window.devicePixelRatio > 1) {
                setTimeout(function() {
                    bx.UX.height = bx.HCL.getViewportHeight();
                    bx.UX.width = bx.HCL.getViewportWidth();
                    window.scrollTo(0, 1);
                    bx.UX.$52.onResize({
                        x: 0,
                        y: 0,
                        w: bx.UX.width,
                        h: bx.UX.height
                    }, 1)
                }, 500)
            } else {
                if (bx.$50.$0a[1] == "android") {
                    setTimeout(function() {
                        bx.UX.$52.onResize({
                            x: 0,
                            y: 0,
                            w: bx.UX.width,
                            h: bx.UX.height
                        }, 1)
                    }, 500)
                } else {
                    bx.UX.$52.onResize({
                        x: 0,
                        y: 0,
                        w: bx.UX.width,
                        h: bx.UX.height
                    }, 1)
                }
            }
        }
    },
    setCursor: function(c, d) {
        if (c && typeof c != "object") {
            bx.Trace.log("BLUX", "errorParameter", "tag=" + c, "UX.setCursor");
            return
        }
        bx.$setCursor(c, d)
    },
    setEventListener: function(c) {
        bx.UX.$DF.onEvent = c
    },
    $3V: function() {
        bx.c.bx$timeEffectHide = 300;
        bx.c.bx$timeEffectShow = 300;
        bx.c.bx$nullImage = "data:image/gif;base64,R0lGODlhAQABAIAAANvf7wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==";
        bx.c.$2I = "_VIEWPORT_";
        bx.c.bx$timeClick = 390;
        bx.c.$2L = 15;
        bx.c.$2M = 15
    }
};
bx.UX = bx.UXmanager;
bx.UX.cfg = {
    $Kb: "_bx$Clip_",
    timeLongClick: 400,
    transitTimeslot: 25,
    useBxCTransitionInPageRun: false,
    waitBoxSpinner: {
        frame: 1,
        size: 53,
        url: ""
    },
    modalBlockBase: null,
    cssMessage: "bxUXmessage",
    cssModalBlock: "bxScreenBlock",
    cssToast: "bxToast"
};
bx.Log = {
    DEBUG: 1,
    WARNING: 2,
    ERROR: 3,
    $43: false
};
bx.Log.cfg = {};
bx.Log.cfg.console = {
    right: "0px",
    bottom: "0px",
    backgroundColor: "#000000",
    opacity: 0.7,
    padding: "8px",
    fontSize: "10px"
};
bx.Log.init = function(c, d) {
    this.$42 = this.$42 || {};
    for (var e in d) {
        this.$42[e] = d[e]
    }
    this.$43 = c
};
bx.Log.log = function(k, c) {
    if (this.$43) {
        if (window.bluega && !window.bluega.ios) {
            alert(k)
        } else {
            if (window.console && !console.BLUX) {
                if (c == bx.Log.DEBUG && window.console.debug) {
                    console.log(k instanceof Error ? "" + k : k);
                    console.log(k)
                } else {
                    if (c == bx.Log.WARNING && window.console.warn) {
                        console.warn(k instanceof Error ? "" + k : k)
                    } else {
                        if (c == bx.Log.ERROR && window.console.error) {
                            console.error(k instanceof Error ? "" + k : k)
                        } else {
                            if (window.console.log) {
                                console.log(k instanceof Error ? "" + k : k)
                            }
                        }
                    }
                }
            }
        }
        if (window.Error && window.console && c >= bx.Log.WARNING) {
            var j;
            if (j = k instanceof Error ? k.stack : (new Error().stack)) {
                var g = j.split("at ");
                if (g.length >= 1) {
                    var e = "    ";
                    for (var f = 1; f < g.length; f++) {
                        if (f == 1 && g[f].indexOf("bx.Log.log") != -1) {
                            continue
                        }
                        e += "> " + g[f]
                    }
                    console.log(e + "\n\n")
                }
            }
        }
        if (this.$42 && this.$42.console) {
            if (!this.$44) {
                this.cfg.console.position = "absolute";
                this.cfg.console.width = this.cfg.console.width || parseInt(bx.UX.width / 2) + "px";
                this.cfg.console.height = this.cfg.console.height || parseInt(bx.UX.height / 2) + "px";
                if (window.devicePixelRatio == 2) {
                    this.cfg.console.fontSize = "16px"
                }
                this.$44 = document.body.$TAG("div", {
                    align: "left",
                    onclick: 'this.style.display="none";'
                }, this.cfg.console)
            }
            this.$44.style.display = "block";
            this.$44.style.zIndex = bx.UX.getZindex("alert");
            var d = "#ffffff";
            var h;
            if (c == bx.Log.WARNING) {
                d = "#ffff00"
            } else {
                if (c == bx.Log.ERROR) {
                    d = "#ff0000"
                }
            }
            h = this.$44.$TAG("div", {}, {
                color: d,
                margin: "2px",
                padding: "1px",
                borderBottom: "dotted 1px " + d,
                borderLeft: "dotted 1px " + d
            });
            h.innerHTML = k + (e || "");
            if (h.offsetTop + h.offsetHeight > this.$44.offsetHeight - 8) {
                this.$44.removeChild(this.$44.firstChild)
            }
        }
    }
};
bx.Log.isActive = function() {
    return bx.Log.$43
};
bx.PageTransition = function(i, j, k, p, c, n) {
    if (!i || !j || !k || !p) {
        bx.Trace.log("BLUX", "errorParameter", "tagCnt=" + i + ", tagIn=" + j + ", tagOut=" + k + ", effect=" + p, "bx.PageTransition()");
        return false
    }
    if (bx.PageTransition.isInTransit(i)) {
        return false
    }
    if (p == "none") {
        c = c || 10
    } else {
        c = c || 700
    }
    var r = n && n.timing ? n.timing : "ease";
    var s = false;
    if (!bx.HCL.DV.supportCSS3D()) {
        s = true;
        if (p == "none") {} else {
            if (p.indexOf("Left") > 0) {
                p = "moveLeft"
            } else {
                if (p.indexOf("Right") > 0) {
                    p = "moveRight"
                } else {
                    if (p.indexOf("Top") > 0) {
                        p = "moveTop"
                    } else {
                        if (p.indexOf("Bottom") > 0) {
                            p = "moveBottom"
                        } else {
                            p = "dissolve"
                        }
                    }
                }
            }
        }
    }
    var g = false;
    switch (p) {
        case "glueLeft":
        case "glueRight":
        case "glueTop":
        case "glueBottom":
            bx.PageTransition.$N1d(j, k);
            g = true;
            break;
        case "newspaper":
        case "flipLeft":
        case "flipRight":
        case "flipTop":
        case "flipBottom":
            bx.PageTransition.$N1d(k, j);
            g = true;
            break;
        case "dissolve":
        case "fadeOut":
        case "zoomOut":
        case "fall":
        case "cardUpLeft":
        case "cardUpRight":
        case "cardUpTop":
        case "cardUpBottom":
            bx.PageTransition.$N1d(k, j);
            break;
        case "moveLeft":
        case "moveRight":
        case "moveTop":
        case "moveBottom":
            break;
        case "slideUpLeft":
        case "slideUpRight":
        case "slideUpTop":
        case "slideUpBottom":
            g = true;
            break;
        case "bulldozeLeft":
        case "bulldozeRight":
        case "bulldozeTop":
        case "bulldozeBottom":
            break;
        case "fadeIn":
        case "zoomIn":
        case "timeLagLeft":
        case "timeLagRight":
        case "timeLagTop":
        case "timeLagBottom":
            bx.PageTransition.$N1d(j, k);
            break;
        case "cornerLeft":
        case "cornerRight":
        case "cornerTop":
        case "cornerBottom":
        case "cubeLeft":
        case "cubeRight":
        case "cubeTop":
        case "cubeBottom":
            if (bx.HCL.DV.isIE()) {
                bx.PageTransition.$N1d(j, k)
            }
            g = true;
            break;
        case "none":
            bx.PageTransition.$N1d(j, k);
            break;
        default:
            bx.Trace.log("BLUX", "errorParameter", "Unsupported transit=" + p + " ignored", "bx.PageTransition");
            return false
    }
    i.bxPageTransition = i.bxPageTransition || {};
    i.bxPageTransition.inTransit = true;
    i.bxPageTransition.inTransitIn = true;
    i.bxPageTransition.inTransitOut = true;
    if (!i.bxPageTransition.tagBlock) {
        i.bxPageTransition.tagBlock = i.$TAG("div", {
            style: "position:absolute;top:0px;left:0px;width:100%;height:100%;display:none;background-color:transparent;"
        });
        i.bxPageTransition.tagPopup = i.$TAG("div", {
            style: "position:absolute;top:0px;left:0px;width:100%;height:100%;display:none;background-color:transparent;"
        })
    }
    i.bxPageTransition.tagBlock.style.zIndex = Math.max(bx.$checkNaN(parseInt(j.$css("z-index"))), bx.$checkNaN(parseInt(k.$css("z-index")))) + 1;
    i.bxPageTransition.tagPopup.style.zIndex = Math.min(bx.$checkNaN(parseInt(j.$css("z-index"))), bx.$checkNaN(parseInt(k.$css("z-index")))) + 1;
    i.bxPageTransition.tagPopup.style.backgroundColor = "transparent";
    if (g) {
        i.$CSS("perspective", i.offsetWidth + "px");
        if (bx.HCL.DV.isIE()) {
            j.$CSS({
                transformStyle: "preserve-3d"
            });
            k.$CSS({
                transformStyle: "preserve-3d"
            })
        } else {
            j.$CSS({
                transformStyle: "preserve-3d",
                backfaceVisibility: "hidden"
            });
            k.$CSS({
                transformStyle: "preserve-3d",
                backfaceVisibility: "hidden"
            })
        }
        j.$CSS("transform", "translate3d(0,0,0)");
        k.$CSS("transform", "translate3d(0,0,0)")
    }
    switch (p) {
        case "flipLeft":
        case "flipRight":
        case "flipTop":
        case "flipBottom":
            if (g) {
                if (bx.HCL.DV.isChrome()) {
                    i.$CSS("perspective", Math.max(i.offsetWidth, i.offsetHeight) * 2.3 + "px")
                } else {
                    i.$CSS("perspective", Math.max(i.offsetWidth, i.offsetHeight) * 2.8 + "px")
                }
            }
            i.style.overflow = "visible";
            break;
        default:
            if (i.style.overflow != "hidden") {
                i.style.overflow = "hidden"
            }
            break
    }
    if (i.onBxPageTransitionStart) {
        i.onBxPageTransitionStart()
    }
    if (j.onBxPageTransitionStart) {
        j.onBxPageTransitionStart()
    }
    if (k.onBxPageTransitionStart) {
        k.onBxPageTransitionStart()
    }

    function u(v) {
        bx.PageTransition.$N1d(j, k);
        i.bxPageTransition.tagPopup.style.zIndex = Math.min(bx.$checkNaN(parseInt(j.$css("z-index"))), bx.$checkNaN(parseInt(k.$css("z-index")))) + 1;
        if (g) {
            i.$CSS("perspective", "none");
            j.$CSS({
                transformStyle: "flat",
                transform: "none"
            });
            k.$CSS({
                transformStyle: "flat",
                transform: "none"
            })
        }
        j.$CSS({
            transformOrigin: "50% 50% 0",
            animation: "none",
            animationDelay: "0"
        });
        k.$CSS({
            transformOrigin: "50% 50% 0",
            animation: "none",
            animationDelay: "0"
        });
        if (s) {
            j.style.left = "0px";
            j.style.top = "0px";
            j.$CSS("opacity", 1);
            k.style.left = "0px";
            k.style.top = "0px";
            k.$CSS("opacity", 1)
        }
        i.bxPageTransition.inTransit = false;
        i.bxPageTransition.tagBlock.style.display = "none";
        i.bxPageTransition.tagPopup.style.display = "none";
        if (i.onBxPageTransitionEnd) {
            i.onBxPageTransitionEnd(v)
        }
    }

    function m() {
        bx.Event.remove(j, "webkitAnimationEnd", m, false);
        bx.Event.remove(j, "mozAnimationEnd", m, false);
        bx.Event.remove(j, "animationend", m, false);
        i.bxPageTransition.inTransitIn = false;
        if (j.onBxPageTransitionEnd) {
            j.onBxPageTransitionEnd()
        }
        if (!i.bxPageTransition.inTransitIn && !i.bxPageTransition.inTransitOut) {
            u()
        }
    }

    function d(v) {
        bx.Event.remove(k, "webkitAnimationEnd", d, false);
        bx.Event.remove(k, "mozAnimationEnd", d, false);
        bx.Event.remove(k, "animationend", d, false);
        i.bxPageTransition.inTransitOut = false;
        if (k.onBxPageTransitionEnd) {
            k.onBxPageTransitionEnd(v && v.__bxImmediately)
        }
        if (!i.bxPageTransition.inTransitIn && !i.bxPageTransition.inTransitOut) {
            u(v && v.__bxImmediately)
        }
    }
    i.bxPageTransition.tagBlock.style.display = "block";
    i.bxPageTransition.tagPopup.style.display = "block";
    i.bx$Abort = function(v) {
        if (s) {
            var w;
            if (j.$5x5 && j.$5x5.split) {
                w = j.$5x5.split(":");
                if (w.length == 2) {
                    bx.Transition.end(parseInt(w[0]), w[1])
                }
            }
            if (k.$5x5 && k.$5x5.split) {
                w = k.$5x5.split(":");
                if (w.length == 2) {
                    bx.Transition.end(parseInt(w[0]), w[1])
                }
            }
        } else {
            m();
            if (v) {
                d({
                    __bxImmediately: true
                })
            } else {
                d()
            }
        }
    };
    if (s) {
        if (p == "none") {
            m();
            d()
        } else {
            bx.PageTransition.$5x5 = bx.PageTransition.$5x5 || 0;
            var t = {},
                q = {};
            var e = bx.$checkNaN(parseInt(i.style.width)) || i.offsetWidth;
            var o = bx.$checkNaN(parseInt(i.style.height)) || i.offsetHeight;
            t.id = "BxPT$" + (bx.PageTransition.$5x5++);
            t.element = j;
            t.time = c || 0;
            t.timing = bx.PageTransition.toBxTiming[r];
            t.onEnd = m;
            q.id = "BxPT$" + (bx.PageTransition.$5x5++);
            q.element = k;
            q.time = c || 0;
            q.timing = bx.PageTransition.toBxTiming[r];
            q.onEnd = d;
            switch (p) {
                case "moveLeft":
                    t.styles = {
                        left: {
                            from: e,
                            to: 0,
                            unit: "px"
                        }
                    };
                    q.styles = {
                        left: {
                            from: 0,
                            to: -e,
                            unit: "px"
                        }
                    };
                    break;
                case "moveRight":
                    t.styles = {
                        left: {
                            from: -e,
                            to: 0,
                            unit: "px"
                        }
                    };
                    q.styles = {
                        left: {
                            from: 0,
                            to: e,
                            unit: "px"
                        }
                    };
                    break;
                case "moveTop":
                    t.styles = {
                        top: {
                            from: o,
                            to: 0,
                            unit: "px"
                        }
                    };
                    q.styles = {
                        top: {
                            from: 0,
                            to: -o,
                            unit: "px"
                        }
                    };
                    break;
                case "moveBottom":
                    t.styles = {
                        top: {
                            from: -o,
                            to: 0,
                            unit: "px"
                        }
                    };
                    q.styles = {
                        top: {
                            from: 0,
                            to: o,
                            unit: "px"
                        }
                    };
                    break;
                case "dissolve":
                    t.styles = {
                        opacity: {
                            from: 0,
                            to: 1
                        }
                    };
                    q.styles = {
                        opacity: {
                            from: 1,
                            to: 0
                        }
                    };
                    break
            }
            j.$5x5 = bx.Transition.add(t) + ":" + t.id;
            k.$5x5 = bx.Transition.add(q) + ":" + q.id
        }
    } else {
        bx.Event.add(j, "webkitAnimationEnd", m, false);
        bx.Event.add(k, "webkitAnimationEnd", d, false);
        bx.Event.add(j, "mozAnimationEnd", m, false);
        bx.Event.add(k, "mozAnimationEnd", d, false);
        bx.Event.add(j, "animationend", m, false);
        bx.Event.add(k, "animationend", d, false);
        var h = {};

        function l(v) {
            return bx.HCL.DV.isIOS() ? v + "_ios" : v
        }

        function f() {
            if (bx.HCL.DV.isIOS()) {
                h.animationDelay = "15ms"
            }
        }
        switch (p) {
            case "glueLeft":
                k.$CSS({
                    transformOrigin: "0% 50%",
                    animation: "rotateRightSideFirst " + c + "ms both ease-in"
                });
                j.$CSS({
                    animation: l("moveFromRight") + " " + Math.floor(c * 0.7) + "ms ease both",
                    animationDelay: Math.floor(c * 0.3) + "ms"
                });
                break;
            case "glueRight":
                k.$CSS({
                    transformOrigin: "100% 50%",
                    animation: "rotateLeftSideFirst " + c + "ms both ease-in"
                });
                j.$CSS({
                    animation: l("moveFromLeft") + " " + Math.floor(c * 0.7) + "ms ease both",
                    animationDelay: Math.floor(c * 0.3) + "ms"
                });
                break;
            case "glueTop":
                k.$CSS({
                    transformOrigin: "50% 0%",
                    animation: "rotateBottomSideFirst " + c + "ms both ease-in"
                });
                j.$CSS({
                    animation: l("moveFromBottom") + " " + Math.floor(c * 0.7) + "ms ease both",
                    animationDelay: Math.floor(c * 0.3) + "ms"
                });
                break;
            case "glueBottom":
                k.$CSS({
                    transformOrigin: "50% 100%",
                    animation: "rotateTopSideFirst " + c + "ms both ease-in"
                });
                j.$CSS({
                    animation: l("moveFromTop") + " " + Math.floor(c * 0.7) + "ms ease both",
                    animationDelay: Math.floor(c * 0.3) + "ms"
                });
                break;
            case "fall":
                k.$CSS({
                    animation: "rotateFall " + c + "ms both ease-in",
                    transformOrigin: "0% 0%"
                });
                j.$CSS({
                    animation: "scaleUp " + Math.floor(c * 0.7) + "ms ease both"
                });
                break;
            case "moveLeft":
                k.$CSS({
                    animation: "moveToLeft " + c + "ms " + r + " both"
                });
                h.animation = l("moveFromRight") + " " + c + "ms " + r + " both";
                f();
                j.$CSS(h);
                break;
            case "moveRight":
                k.$CSS({
                    animation: "moveToRight " + c + "ms " + r + " both"
                });
                h.animation = l("moveFromLeft") + " " + c + "ms " + r + " both";
                f();
                j.$CSS(h);
                break;
            case "moveTop":
                k.$CSS({
                    animation: "moveToTop " + c + "ms " + r + " both"
                });
                h.animation = l("moveFromBottom") + " " + c + "ms " + r + " both";
                f();
                j.$CSS(h);
                break;
            case "moveBottom":
                k.$CSS({
                    animation: "moveToBottom " + c + "ms " + r + " both"
                });
                h.animation = l("moveFromTop") + " " + c + "ms " + r + " both";
                f();
                j.$CSS(h);
                break;
            case "bulldozeLeft":
                k.$CSS({
                    transformOrigin: "0% 50%",
                    animation: "squizToX " + c + "ms both " + r + ""
                });
                j.$CSS({
                    transformOrigin: "100% 50%",
                    animation: "stretchFromX " + c + "ms both " + r + ""
                });
                break;
            case "bulldozeRight":
                k.$CSS({
                    transformOrigin: "100% 50%",
                    animation: "squizToX " + c + "ms both " + r + ""
                });
                j.$CSS({
                    transformOrigin: "0% 50%",
                    animation: "stretchFromX " + c + "ms both " + r + ""
                });
                break;
            case "bulldozeTop":
                k.$CSS({
                    transformOrigin: "50% 0%",
                    animation: "squizToY " + c + "ms both " + r + ""
                });
                j.$CSS({
                    transformOrigin: "50% 100%",
                    animation: "stretchFromY " + c + "ms both " + r + ""
                });
                break;
            case "bulldozeBottom":
                k.$CSS({
                    transformOrigin: "50% 100%",
                    animation: "squizToY " + c + "ms both " + r + ""
                });
                j.$CSS({
                    transformOrigin: "50% 0%",
                    animation: "stretchFromY " + c + "ms both " + r + ""
                });
                break;
            case "slideUpLeft":
                k.$CSS({
                    animation: "rotateSlideOutToLeft " + c + "ms both " + r + ""
                });
                j.$CSS({
                    animation: "rotateSlideInFromRight " + c + "ms both " + r + ""
                });
                break;
            case "slideUpRight":
                k.$CSS({
                    animation: "rotateSlideOutToRight " + c + "ms both " + r + ""
                });
                j.$CSS({
                    animation: "rotateSlideInFromLeft " + c + "ms both " + r + ""
                });
                break;
            case "slideUpTop":
                k.$CSS({
                    animation: "rotateSlideOutToTop " + c + "ms both " + r + ""
                });
                j.$CSS({
                    animation: "rotateSlideInFromBottom " + c + "ms both " + r + ""
                });
                break;
            case "slideUpBottom":
                k.$CSS({
                    animation: "rotateSlideOutToBottom " + c + "ms both " + r + ""
                });
                j.$CSS({
                    animation: "rotateSlideInFromTop " + c + "ms both " + r + ""
                });
                break;
            case "cardUpLeft":
                k.$CSS({
                    animation: "moveToLeft " + c + "ms " + r + " both"
                });
                j.$CSS({
                    animation: "scaleUp " + Math.floor(c * 0.85) + "ms " + r + " both"
                });
                break;
            case "cardUpRight":
                k.$CSS({
                    animation: "moveToRight " + c + "ms " + r + " both"
                });
                j.$CSS({
                    animation: "scaleUp " + Math.floor(c * 0.85) + "ms " + r + " both"
                });
                break;
            case "cardUpTop":
                k.$CSS({
                    animation: "moveToTop " + c + "ms " + r + " both"
                });
                j.$CSS({
                    animation: "scaleUp " + Math.floor(c * 0.85) + "ms " + r + " both"
                });
                break;
            case "cardUpBottom":
                k.$CSS({
                    animation: "moveToBottom " + c + "ms " + r + " both"
                });
                j.$CSS({
                    animation: "scaleUp " + Math.floor(c * 0.85) + "ms " + r + " both"
                });
                break;
            case "timeLagLeft":
                k.$CSS({
                    animation: "moveToLeft " + c + "ms ease-in-out both"
                });
                h.animation = l("moveFromRight") + " " + Math.floor(c * 0.85) + "ms ease both";
                f();
                j.$CSS(h);
                break;
            case "timeLagRight":
                k.$CSS({
                    animation: "moveToRight " + c + "ms ease-in-out both"
                });
                h.animation = l("moveFromLeft") + " " + Math.floor(c * 0.85) + "ms ease both";
                f();
                j.$CSS(h);
                break;
            case "timeLagTop":
                k.$CSS({
                    animation: "moveToTop " + c + "ms ease-in-out both"
                });
                h.animation = l("moveFromBottom") + " " + Math.floor(c * 0.85) + "ms ease both";
                f();
                j.$CSS(h);
                break;
            case "timeLagBottom":
                k.$CSS({
                    animation: "moveToBottom " + c + "ms ease-in-out both"
                });
                h.animation = l("moveFromTop") + " " + Math.floor(c * 0.85) + "ms ease both";
                f();
                j.$CSS(h);
                break;
            case "cornerLeft":
                k.$CSS({
                    transformOrigin: "100% 50%",
                    animation: "rotateCornerLeftOut " + c + "ms both " + r + ""
                });
                j.$CSS({
                    transformOrigin: "0% 50%",
                    animation: "rotateCornerLeftIn " + c + "ms both " + r + ""
                });
                break;
            case "cornerRight":
                k.$CSS({
                    transformOrigin: "0% 50%",
                    animation: "rotateCornerRightOut " + c + "ms both " + r + ""
                });
                j.$CSS({
                    transformOrigin: "100% 50%",
                    animation: "rotateCornerRightIn " + c + "ms both " + r + ""
                });
                break;
            case "cornerTop":
                k.$CSS({
                    transformOrigin: "50% 100%",
                    animation: "rotateCornerTopOut " + c + "ms both " + r + ""
                });
                j.$CSS({
                    transformOrigin: "50% 0%",
                    animation: "rotateCornerTopIn " + c + "ms both " + r + ""
                });
                break;
            case "cornerBottom":
                k.$CSS({
                    transformOrigin: "50% 0%",
                    animation: "rotateCornerBottomOut " + c + "ms both " + r + ""
                });
                j.$CSS({
                    transformOrigin: "50% 100%",
                    animation: "rotateCornerBottomIn " + c + "ms both " + r + ""
                });
                break;
            case "cubeLeft":
                k.$CSS({
                    transformOrigin: "100% 50%",
                    animation: "rotateCubeLeftOut " + c + "ms both ease"
                });
                j.$CSS({
                    transformOrigin: "0% 50%",
                    animation: "rotateCubeLeftIn" + (bx.HCL.DV.isIE() ? "IE" : "") + " " + c + "ms both ease"
                });
                break;
            case "cubeRight":
                k.$CSS({
                    transformOrigin: "0% 50%",
                    animation: "rotateCubeRightOut " + c + "ms both ease"
                });
                j.$CSS({
                    transformOrigin: "100% 50%",
                    animation: "rotateCubeRightIn" + (bx.HCL.DV.isIE() ? "IE" : "") + " " + c + "ms both ease"
                });
                break;
            case "cubeTop":
                k.$CSS({
                    transformOrigin: "50% 100%",
                    animation: "rotateCubeTopOut " + c + "ms both ease"
                });
                j.$CSS({
                    transformOrigin: "50% 0%",
                    animation: "rotateCubeTopIn" + (bx.HCL.DV.isIE() ? "IE" : "") + " " + c + "ms both ease"
                });
                break;
            case "cubeBottom":
                k.$CSS({
                    transformOrigin: "50% 0%",
                    animation: "rotateCubeBottomOut " + c + "ms both ease"
                });
                j.$CSS({
                    transformOrigin: "50% 100%",
                    animation: "rotateCubeBottomIn" + (bx.HCL.DV.isIE() ? "IE" : "") + " " + c + "ms both ease"
                });
                break;
            case "dissolve":
                k.$CSS({
                    animation: "fadeOut " + c + "ms both ease"
                });
                j.$CSS({
                    animation: "fadeIn " + c + "ms both ease"
                });
                break;
            case "fadeOut":
                k.$CSS({
                    animation: "fadeOut " + Math.floor(0.8 * c) + "ms both ease-in",
                    animationDelay: Math.floor(c * 0.2) + "ms"
                });
                j.$CSS({
                    animation: "fadeIn " + Math.floor(0.6 * c) + "ms both ease-out"
                });
                break;
            case "fadeIn":
                k.$CSS({
                    animation: "fadeOut " + Math.floor(0.6 * c) + "ms both ease-out"
                });
                j.$CSS({
                    animation: "fadeIn " + Math.floor(0.8 * c) + "ms both ease-in",
                    animationDelay: Math.floor(c * 0.2) + "ms"
                });
                break;
            case "zoomOut":
                k.$CSS({
                    animation: "zoomFadeOut " + Math.floor(0.8 * c) + "ms both ease-in",
                    animationDelay: Math.floor(c * 0.2) + "ms"
                });
                j.$CSS({
                    animation: "idle " + c + "ms both ease"
                });
                break;
            case "zoomIn":
                k.$CSS({
                    animation: "idle " + c + "ms both ease"
                });
                j.$CSS({
                    animation: "zoomFadeIn " + c + "ms both ease-out"
                });
                break;
            case "newspaper":
                j.$CSS("transform", "none");
                k.$CSS("transform", "none");
                k.$CSS({
                    transformOrigin: "50% 50%",
                    animation: "rotateOutNewspaper " + Math.floor(c / 2) + "ms both ease-in"
                });
                j.$CSS({
                    transformOrigin: "50% 50%",
                    animation: "rotateInNewspaper " + Math.floor(c / 2) + "ms both ease-out",
                    animationDelay: Math.floor(c / 2) + "ms"
                });
                break;
            case "flipLeft":
                k.$CSS({
                    transformOrigin: "50% 50%",
                    animation: "flipOutLeft " + Math.floor(c / 2) + "ms both ease-in"
                });
                j.$CSS({
                    transformOrigin: "50% 50%",
                    animation: "flipInRight " + Math.floor(c / 2) + "ms both ease-out",
                    animationDelay: Math.floor(c / 2) + "ms"
                });
                break;
            case "flipRight":
                k.$CSS({
                    transformOrigin: "50% 50%",
                    animation: "flipOutRight " + Math.floor(c / 2) + "ms both ease-in"
                });
                j.$CSS({
                    transformOrigin: "50% 50%",
                    animation: "flipInLeft " + Math.floor(c / 2) + "ms both ease-out",
                    animationDelay: Math.floor(c / 2) + "ms"
                });
                break;
            case "flipTop":
                k.$CSS({
                    transformOrigin: "50% 50%",
                    animation: "flipOutTop " + Math.floor(c / 2) + "ms both ease-in"
                });
                j.$CSS({
                    transformOrigin: "50% 50%",
                    animation: "flipInBottom " + Math.floor(c / 2) + "ms both ease-out",
                    animationDelay: Math.floor(c / 2) + "ms"
                });
                break;
            case "flipBottom":
                k.$CSS({
                    transformOrigin: "50% 50%",
                    animation: "flipOutBottom " + Math.floor(c / 2) + "ms both ease-in"
                });
                j.$CSS({
                    transformOrigin: "50% 50%",
                    animation: "flipInTop " + Math.floor(c / 2) + "ms both ease-out",
                    animationDelay: Math.floor(c / 2) + "ms"
                });
                break;
            case "none":
                if (c < 16) {
                    m();
                    d()
                } else {
                    k.$CSS({
                        animation: "idle " + c + "ms both ease-out"
                    });
                    j.$CSS({
                        animation: "idle " + c + "ms both ease-out"
                    })
                }
                break
        }
    }
    return true
};
bx.PageTransition.$N1d = function(c, d) {
    if (!bx.$checkNaN(parseInt(d.$css("z-index")))) {
        d.style.zIndex = 0
    }
    c.style.zIndex = bx.$checkNaN(parseInt(d.$css("z-index"))) + 2
};
bx.PageTransition.isInTransit = function(c) {
    if (c.bxPageTransition && c.bxPageTransition.inTransit) {
        return true
    }
    return false
};
bx.PageTransition.abort = function(d, c) {
    if (bx.PageTransition.isInTransit(d)) {
        d.bx$Abort(c)
    }
};
bx.PageTransition.toBxTiming = {
    ease: "inOutQuad",
    "ease-in": "inCubic",
    "ease-out": "outCubic",
    "ease-in-out": "inOutCubic",
    linear: "linear"
};
bx.UX.$N2V = function() {
    if (bx.UX.$DF && bx.UX.$DF.$ZZ0d && window.location.protocol != "file") {
        var d = bx.UX.$DF.$ZZ0d.split("/");
        var e = window.location.href.split("/");
        var c;
        c = e[parseInt(d[0])];
        if (!(c && c.indexOf(d[1]) == 0)) {
            this.wDrag = true;
            this.width -= 100
        }
    }
    if (this.pages) {
        this.pages.$7C()
    }
    if (this.pages) {
        this.pages.$N2V()
    }
    return
};
bx.UX.$22 = function(d, c) {
    if (!bx.UXmanager.$2Z[d]) {
        bx.UXmanager.$2Z[d] = c
    } else {}
};
bx.UX.$23 = function(c) {
    if (bx.UXmanager.$2Z[c]) {
        delete bx.UXmanager.$2Z[c]
    }
};
bx.UX.$N1e = function(c, h, e) {
    var g = {};
    var d;
    for (var f in bx.UX.$2Z) {
        if (bx.UX.$2Z[f].isShow(true)) {
            bx.HCL.getElementRect(bx.UX.$2Z[f].tag, g);
            if (g.x <= c && (g.x + g.w) > c && g.y <= h && (g.y + g.h) > h) {
                if (!e || bx.UX.$2Z[f] instanceof e) {
                    d = d || [];
                    d.push(bx.UX.$2Z[f])
                }
            }
        }
    }
    return d
};
bx.UX.$2F = function(c) {
    if (!bx.UXmanager.$2Z[c]) {
        return undefined
    }
    if (bx.UXmanager.$2Z[c].$5b) {
        return undefined
    }
    return bx.UXmanager.$2Z[c]
};
bx.UX.trashWnd = function(c) {
    bx.UX.$2O = bx.UX.$2O || [];
    c.$5b = true;
    c.$5c();
    bx.UX.$2O.push(c)
};
bx.UX.cleanupTrash = function() {
    bx.UX.$2O = bx.UX.$2O || [];
    for (var c = 0; c < bx.UX.$2O.length; c++) {
        if (bx.UX.$2O[c].tagVP.innerHTML) {
            bx.UX.$2O[c].tagVP.innerHTML = ""
        }
        bx.UX.$2O[c].destroy()
    }
    bx.UX.$2O.length = 0
};
bx.UX.getRootTag = function() {
    if (bx.UX.$52) {
        return bx.UX.$52.tag
    } else {
        return null
    }
};
bx.UX.messageBox = function(f, c) {
    c = c || {};
    c.time = c.time || 3000;
    if (c.btnOK || c.btnCancel) {
        c.time = 0
    }
    bx.UX.$5f = bx.UX.$5f || [];
    var e;
    if (c.btnOK && c.btnCancel) {
        e = 3
    } else {
        if (c.btnOK) {
            e = 2
        } else {
            if (c.btnCancel) {
                e = 1
            } else {
                e = 0
            }
        }
    }
    if (bx.CMessageDialog) {
        if (!bx.UX.$5f[e]) {
            var d = {
                size: c.size,
                buttons: {},
                CMessageDialog: {
                    cssMessage: bx.UX.cfg.cssMessage
                }
            };
            if (c.layout) {
                d.layout = c.layout
            }
            if (c.btnOK) {
                d.buttons.ok = {
                    title: c.btnOK
                }
            }
            if (c.btnCancel) {
                d.buttons.cancel = {
                    title: c.btnCancel
                }
            }
            bx.UX.$5f[e] = new bx.CMessageDialog(c.title || "Message", {}, d).create();
            if (c.btnOK) {
                bx.UX.$5f[e].onOK = function() {
                    bx.CMessageDialog.prototype.onOK.call(this);
                    if (this.$5g) {
                        this.$5g(1)
                    }
                }
            }
            if (c.btnCancel) {
                bx.UX.$5f[e].onCancel = function() {
                    bx.CMessageDialog.prototype.onCancel.call(this);
                    if (this.$5g) {
                        this.$5g(0)
                    }
                }
            }
        } else {
            if (c.btnOK) {
                bx.UX.$5f[e].setBtnTitle("ok", c.btnOK)
            }
            if (c.btnCancel) {
                bx.UX.$5f[e].setBtnTitle("cancel", c.btnCancel)
            }
        }
        if (c.time) {
            if (bx.UX.$5f.$3S) {
                bx.EM.refresh(bx.UX.$5f.$3S)
            } else {
                bx.UX.$5f.$3S = bx.EM.setTimeout(function() {
                    bx.UX.$5f.$3S = undefined;
                    bx.UX.$5f[e].onCancel()
                }, c.time)
            }
        }
        if (c.title !== undefined && bx.UX.$5f[e].title != c.title) {
            bx.UX.$5f[e].setTitle(c.title)
        }
        bx.UX.$5f[e].$5g = c.onBtnClick;
        bx.UX.$5f[e].doModal({
            values: {
                icon: c.icon,
                message: f
            }
        })
    } else {}
};
bx.UX.showToast = function(d, c) {
    if (window.bluega && bluega.UTIL_showToastText) {
        if (c && c.duration !== undefined) {
            bluega.UTIL_showToastText(d, 1)
        } else {
            bluega.UTIL_showToastText(d, 0)
        }
    } else {
        if (!bx.UX.getRootTag()) {
            return
        }
        if (!bx.UX.$35) {
            bx.UX.$35 = bx.UX.getRootTag().$TAG("div", {}, {
                position: "absolute",
                maxWidth: parseInt(bx.UX.width * 0.75) + "px"
            });
            bx.UX.$35.style.bottom = parseInt(bx.UX.height * 0.04) + "px"
        }
        if (bx.UX.$35.$5h >= 0) {
            bx.Transition.cancel(bx.UX.$35.$5h, bx.UX.$35.$5j);
            bx.UX.$35.$5h = -1
        }
        bx.UX.$35.style.display = "block";
        bx.UX.$35.innerHTML = d;
        bx.UX.$35.style.opacity = 1;
        bx.UX.$35.style.zIndex = bx.UX.getZindex("alert");
        if (c && c.css) {
            bx.UX.$35.$A({
                "class": c.css
            })
        } else {
            if (bx.HCL.getCssRule("." + bx.UX.cfg.cssToast)) {
                bx.UX.$35.$A({
                    "class": bx.UX.cfg.cssToast
                })
            } else {
                bx.UX.$35.$CSS({
                    padding: "10px",
                    backgroundColor: "#454545",
                    border: "solid 2px #7d7d7d",
                    color: "#eeeeee",
                    borderRadius: "8px"
                })
            }
        }
        bx.UX.$35.style.left = parseInt((bx.UX.width - bx.UX.$35.offsetWidth) / 2) + "px";
        if (bx.UX.$35.$3S) {
            bx.EM.refresh(bx.UX.$35.$3S)
        } else {
            bx.UX.$35.$3S = bx.EM.setTimeout(function() {
                bx.UX.$35.$3S = 0;
                if (bx.HCL.DV.supportCSS3()) {
                    var e = {
                        id: (new Date()).getTime(),
                        element: bx.UX.$35,
                        timing: "outCubic",
                        time: 500,
                        styles: {
                            opacity: {
                                from: 1,
                                to: 0
                            }
                        },
                        onEnd: function() {
                            bx.UX.$35.$5h = -1;
                            bx.UX.$35.style.display = "none"
                        }
                    };
                    bx.UX.$35.$5h = bx.Transition.add(e);
                    bx.UX.$35.$5j = e.id
                } else {
                    bx.UX.$35.style.display = "none"
                }
            }, c && c.time ? c.time : 3000)
        }
    }
};
bx.UX.$3N = function(d) {
    if (!this.$2P) {
        this.$2P = this.$52.tag.$TAG("div", {
            id: "bx$SYS_modalBlock"
        });
        var c;
        if (bx.UX.cfg.modalBlockBase) {
            c = bx.HCL.getElementRect(bx.UX.cfg.modalBlockBase)
        } else {
            if (this.$DF.rootTag) {
                c = {
                    w: bx.UX.width,
                    h: bx.UX.height
                }
            } else {
                c = {
                    w: bx.HCL.$09(),
                    h: bx.HCL.$08()
                }
            }
        }
        this.$2P.$CSS({
            height: Math.max(c.h, bx.UX.height) + "px",
            width: Math.max(c.w, bx.UX.width) + "px",
            position: "absolute",
            overflow: "hidden",
            left: "0px",
            top: "0px"
        });
        this.$2P.$CSS({
            display: "none"
        });
        if (bx.HCL.DV.hasTouchEvent()) {
            this.$2P.ontouchmove = function(f) {
                return false
            };
            this.$2P.ontouchstart = function(f) {
                return false
            };
            this.$2P.ontouchend = function(f) {
                return false
            }
        }
        this.$2P.ondragenter = function(f) {
            return false
        };
        this.$2P.ondragover = function(f) {
            return false
        };
        this.$2P.$37 = 0;
        this.$2P.$36 = this.$2P.$36 || []
    }
    if (!bx.HCL.getCssRule("." + bx.UX.cfg.cssModalBlock)) {
        bx.HCL.addCssRule("." + bx.UX.cfg.cssModalBlock, "background-color:#000000;opacity:0.4;")
    }
    this.$2P.$A({
        "class": bx.UX.cfg.cssModalBlock
    });
    if (d) {
        this.$2P.style.visibility = "hidden"
    } else {
        this.$2P.style.visibility = "visible"
    }
    var e = bx.UX.getZindex("popup");
    this.$2P.$CSS({
        zIndex: e,
        display: "block"
    });
    if (this.$2P.$37 == 0 && this.$DF.onEvent) {
        this.$DF.onEvent(bx.UX.EVENT_BLOCK_SCREEN)
    }
    this.$2P.$36[++this.$2P.$37] = this.$2P.style.zIndex;
    return this.$2P
};
bx.UX.$2R = function() {
    if (this.$2P) {
        this.$2P.$37--;
        if (this.$2P.$37 <= 0) {
            this.$2P.style.display = "none";
            if (this.$DF.onEvent) {
                this.$DF.onEvent(bx.UX.EVENT_UNBLOCK_SCREEN)
            }
        } else {
            this.$2P.style.zIndex = this.$2P.$36[this.$2P.$37]
        }
    }
};
bx.UX.$5n = function() {
    if (this.$2P && this.$2P.style.display == "block") {
        return this.$2P.style.zIndex
    } else {
        return 0
    }
};
bx.UX.$5a = function(e) {
    if (e && bx.UX.$5n()) {
        var d = e;
        var c = false;
        while (d && d.tag) {
            if (bx.$checkNaN(parseInt(d.tag.$css("z-index"))) > bx.UX.$5n()) {
                c = true;
                break
            }
            d = d.parent
        }
        return !c
    }
};
bx.UX.isScreenBlocked = function() {
    return bx.UX.$5n() ? true : false
};
bx.UX.getZindex = function(c) {
    if (this.$2G && this.$2G[c] !== undefined) {
        this.$2G[c]++;
        return this.$2G[c]
    } else {
        return 0
    }
};
bx.CPosition = function(c) {
    if (bx.inClassing) {
        return
    }
    this.data = c;
    this.pane = null;
    this.rect = {
        x: 0,
        y: 0,
        w: 0,
        h: 0
    }
};
bx.CPosition.$3X = function(f, d, h, g) {
    var c;
    var e = bx.CPosition.$3Y(g);
    if (e == "%") {
        if (d == "width") {
            c = f.w
        } else {
            c = f.h
        }
        c = c * parseInt(g.substring(0, g.length - 1)) / 100;
        c = parseInt(c);
        return c + "px"
    } else {
        if (e == "-") {
            if (d == "width") {
                if (h.left) {
                    c = f.w - bx.$checkNaN(parseInt(h.left)) - bx.$checkNaN(parseInt(g.substring(0, g.length - 1)))
                } else {
                    c = f.w - bx.$checkNaN(parseInt(h.right)) - bx.$checkNaN(parseInt(g.substring(0, g.length - 1)))
                }
            } else {
                if (h.top) {
                    c = f.h - bx.$checkNaN(parseInt(h.top)) - bx.$checkNaN(parseInt(g.substring(0, g.length - 1)))
                } else {
                    c = f.h - bx.$checkNaN(parseInt(h.bottom)) - bx.$checkNaN(parseInt(g.substring(0, g.length - 1)))
                }
            }
            return c + "px"
        } else {
            return bx.$checkNaN(parseInt(g)) + "px"
        }
    }
};
bx.CPosition.$3Y = function(c) {
    c += "";
    if (c.substring(c.length - 2, c.length) == "px") {
        return "px"
    } else {
        return c.substring(c.length - 1, c.length)
    }
};
bx.CPosition.prototype.$3Z = function(c) {
    this.pane = c
};
bx.CPosition.prototype.$3a = function(h, g) {
    this.$3G = {};
    if (typeof this.data.width != "object") {
        this.data.width = {
            normal: this.data.width
        }
    }
    if (typeof this.data.height != "object") {
        this.data.height = {
            normal: this.data.height
        }
    }
    if (this.data.width._default) {
        this.data.width.normal = this.data.width._default
    }
    if (this.data.height._default) {
        this.data.height.normal = this.data.height._default
    }
    if (g == 1) {
        var f = -1,
            d = -1,
            i;
        if (this.data.type == "ondeck") {
            if (this.data.width && this.data.width.normal) {
                if (this.data.width.normal != "auto") {
                    i = parseInt(bx.CPosition.$3X(h, "width", this.data.coord, this.data.width.normal));
                    if (!this.data.noclip && i > h.w) {
                        f = h.w
                    } else {
                        f = i
                    }
                }
            }
            if (this.data.height && this.data.height.normal) {
                if (this.data.height.normal != "auto") {
                    i = parseInt(bx.CPosition.$3X(h, "height", this.data.coord, this.data.height.normal));
                    if (!this.data.noclip && i > h.h) {
                        d = h.h
                    } else {
                        d = i
                    }
                }
            }
            if (this.data.width.min && !isNaN(parseInt(this.data.width.min))) {
                f = Math.max(parseInt(this.data.width.min), f)
            }
            if (this.data.height.min && !isNaN(parseInt(this.data.height.min))) {
                d = Math.max(parseInt(this.data.height.min), d)
            }
            if (this.data.width.max && !isNaN(parseInt(this.data.width.max))) {
                f = Math.min(parseInt(this.data.width.max), f)
            }
            if (this.data.height.max && !isNaN(parseInt(this.data.height.max))) {
                d = Math.min(parseInt(this.data.height.max), d)
            }
            f -= bx.HCL.getElementBorderWidth(this.pane.tag).w;
            if (d != -1) {
                d -= bx.HCL.getElementBorderWidth(this.pane.tag).h
            }
            if (this.pane.tagVP) {
                if (f != -1) {
                    this.pane.tagVP.style.width = "0px"
                }
                if (d != -1) {
                    this.pane.tagVP.style.height = "0px"
                }
            }
            this.pane.tag.style.position = "relative";
            this.pane.tag.style.width = f + "px";
            this.pane.tag.style.height = d == -1 ? "auto" : d + "px";
            if (d == -1) {
                d = bx.HCL.getElementRect(this.pane.tag).h
            }
            this.rect = {
                x: h.x,
                y: h.y,
                w: f,
                h: d
            }
        } else {
            this.$3G.position = "absolute";
            if (this.data.width && this.data.width.normal && this.data.width.normal != "auto") {
                i = parseInt(bx.CPosition.$3X(h, "width", this.data.coord, this.data.width.normal));
                if (!this.data.noclip && i > h.w) {
                    f = h.w
                } else {
                    f = i
                }
            }
            if (this.data.height && this.data.height.normal && this.data.height.normal != "auto") {
                i = parseInt(bx.CPosition.$3X(h, "height", this.data.coord, this.data.height.normal));
                if (!this.data.noclip && i > h.h) {
                    d = h.h
                } else {
                    d = i
                }
            }
            if (this.data.height.ratio && !isNaN(parseInt(this.data.height.ratio))) {
                d = Math.round(f * this.data.height.ratio)
            }
            if (this.data.width.ratio && !isNaN(parseInt(this.data.width.ratio))) {
                f = Math.round(d * this.data.width.ratio)
            }
            if (this.data.width.min && !isNaN(parseInt(this.data.width.min))) {
                f = Math.max(parseInt(this.data.width.min), f)
            }
            if (this.data.height.min && !isNaN(parseInt(this.data.height.min))) {
                d = Math.max(parseInt(this.data.height.min), d)
            }
            if (this.data.width.max && !isNaN(parseInt(this.data.width.max))) {
                f = Math.min(parseInt(this.data.width.max), f)
            }
            if (this.data.height.max && !isNaN(parseInt(this.data.height.max))) {
                d = Math.min(parseInt(this.data.height.max), d)
            }
            var c = -1,
                j = -1;
            if (this.data.coord) {
                if (this.data.coord.left) {
                    c = parseInt(this.data.coord.left)
                }
                if (this.data.coord.right) {
                    if (c != -1) {
                        f = h.w - parseInt(this.data.coord.right) - c
                    } else {
                        c = h.w - f - parseInt(this.data.coord.right);
                        c = c < 0 ? 0 : c
                    }
                }
                if (this.data.coord.top) {
                    j = parseInt(this.data.coord.top)
                }
                if (this.data.coord.bottom) {
                    if (j != -1) {
                        d = parseInt(this.data.coord.bottom) - j + 1
                    } else {
                        j = h.h - d - parseInt(this.data.coord.bottom);
                        j = j < 0 ? 0 : j
                    }
                }
                if (this.data.coord.hcenter) {
                    c = parseInt((h.w - f) / 2)
                }
                if (this.data.coord.vcenter) {
                    j = parseInt((h.h - d) / 2)
                }
            }
            c += h.x;
            j += h.y;
            c += bx.HCL.$07().x;
            j += bx.HCL.$07().y;
            var e = bx.HCL.getElementBorderWidth(this.pane.tag);
            if (f != -1) {
                f -= e.w
            }
            if (d != -1) {
                d -= e.h
            }
            this.$3G.width = f == -1 ? "auto" : f + "px";
            this.$3G.height = d == -1 ? "auto" : d + "px";
            if (this.pane.tag) {
                if (this.pane.tagVP) {
                    if (this.$3G.width != "auto") {
                        this.pane.tagVP.$CSS({
                            width: "0px"
                        })
                    }
                    if (this.$3G.height != "auto") {
                        this.pane.tagVP.$CSS({
                            height: "0px"
                        })
                    }
                }
                this.pane.tag.$CSS(this.$3G);
                this.setX(c);
                this.setY(j);
                this.rect = {
                    x: c,
                    y: j,
                    w: f,
                    h: d
                }
            }
        }
    } else {
        this.pane.tag.style.width = h.w + "px";
        this.pane.tag.style.height = h.h + "px";
        bx.$copyObject(this.rect, h)
    }
};
bx.CPosition.prototype.isMovable = function() {
    if (this.data.type == "overlap") {
        if (!(this.data.coord && (this.data.coord.hcenter || this.data.coord.vcenter))) {
            return true
        }
    }
    return false
};
bx.CPosition.prototype.$DS = function(c, d) {
    if (this.isMovable()) {
        if (!this.data.coord) {
            this.data.coord = {}
        }
        if (c || c == 0) {
            delete this.data.coord.right;
            this.data.coord.left = c + "px";
            this.rect.x = c
        }
        if (d || d == 0) {
            delete this.data.coord.bottom;
            this.data.coord.top = d + "px";
            this.rect.y = d
        }
        return true
    } else {
        return false
    }
};
bx.CPosition.prototype.setX = function(c) {
    if (this.pane && this.pane.tag) {
        this.pane.tag.style.left = c + "px"
    }
};
bx.CPosition.prototype.setY = function(c) {
    if (this.pane && this.pane.tag) {
        this.pane.tag.style.top = c + "px"
    }
};
bx.CPosition.prototype.setDeviceX = function(c) {
    this.setX(c)
};
bx.CPosition.prototype.setDeviceY = function(c) {
    this.setY(x)
};
bx.CPosition.prototype.getDeviceX = function() {
    if (this.pane && this.pane.tag) {
        return bx.$checkNaN(parseInt(this.pane.tag.style.left))
    }
    return 0
};
bx.CPosition.prototype.getDeviceY = function() {
    if (this.pane && this.pane.tag) {
        return bx.$checkNaN(parseInt(this.pane.tag.style.top))
    }
    return 0
};
bx.CMode = function(c) {
    if (c) {
        this.$3H = c
    } else {
        this.$3H = {}
    }
    this.$3I = false;
    this.chainUp = null;
    this.chainDown = null;
    this.originTag = null
};
bx.CMode.prototype.setWnd = function(c) {
    if (c) {
        this.wnd = c
    }
};
bx.CMode.prototype.setChain = function(c) {
    this.chainDown = c;
    c.chainUp = this;
    c.wnd.tag.$CSS({
        zIndex: (bx.$checkNaN(parseInt(this.wnd.tag.$css("z-index"))) + 1) + ""
    })
};
bx.CMode.prototype.destroy = function() {
    if (this.chainDown) {
        this.chainDown.chainUp = null;
        this.chainDown = null
    }
    if (this.chainUp) {
        this.chainUp.chainDown = null;
        this.chainUp = null
    }
    return null
};
bx.CMode.prototype.onPostShow = function() {
    return 0
};
bx.CMode.prototype.onPostHide = function(c) {
    return 0
};
bx.CMode.prototype.onPreShow = function() {
    ret = 0;
    return ret
};
bx.CMode.prototype.onPreHide = function(c) {
    ret = 0;
    if (!c) {}
    return ret
};
bx.CModePopup = function(c, d) {
    bx.CMode.call(this, d);
    this.$5p = c || [];
    this.opts = this.$5p;
    this.$3J = []
};
bx.$Inherit(bx.CModePopup, bx.CMode);
bx.CModePopup.prototype.onEvent = function(f, e) {
    var d = true;
    if (e) {
        var c = this;
        while (c) {
            if (bx.DOM.IsDescendantOf(bx.Event.getElement(e), c.wnd.tag)) {
                d = false;
                break
            }
            c = c.chainDown
        }
        if (this.originTag && bx.Event.getElement(e) == this.originTag) {
            d = false
        }
    }
    if (d) {
        this.wnd.hide()
    }
};
bx.CModePopup.prototype.onPreShow = function() {
    ret = bx.CMode.prototype.onPreShow.call(this);
    this.$D9 = "popup";
    if (!this.$3I) {
        for (var c = 0; c < this.opts.length; c++) {
            if (this.opts[c].timer) {
                this.$3J.push(bx.EM.add({
                    timer: {
                        time: this.$5p[c].timer
                    },
                    target: this,
                    hdr: this.onEvent
                }))
            } else {
                if (this.opts[c].event) {
                    this.$3J.push(bx.EM.add({
                        event: this.$5p[c].event,
                        target: this,
                        hdr: this.onEvent
                    }))
                } else {
                    if (this.opts[c].type) {
                        this.$D9 = this.opts[c].type
                    }
                }
            }
        }
    }
    if (this.wnd && this.$D9 != "normal") {
        this.$F6 = bx.$checkNaN(parseInt(this.wnd.tag.$css("z-index")));
        this.wnd.tag.$CSS({
            zIndex: (this.$F6 + bx.UX.getZindex(this.$D9)) + ""
        })
    }
    this.$3I = true;
    return ret
};
bx.CModePopup.prototype.onPostHide = function(c) {
    ret = bx.CMode.prototype.onPostHide.call(this);
    if (this.$3I) {
        for (var d = 0; d < this.$3J.length; d++) {
            bx.EM.remove(this.$3J[d])
        }
    }
    if (this.wnd && this.$F6 && this.$D9 != "normal") {
        this.wnd.tag.$CSS({
            zIndex: this.$F6
        })
    }
    this.$3I = false;
    return ret
};
bx.CModePopup.prototype.destroy = function() {
    bx.CMode.prototype.destroy.call(this);
    this.onPostHide();
    return null
};
bx.CModePopup.prototype.refresh = function() {
    if (this.$3I) {
        for (var c = 0; c < this.$3J.length; c++) {
            bx.EM.refresh(this.$3J[c])
        }
    }
};
bx.CModeModal = function(c) {
    bx.CMode.call(this, c)
};
bx.$Inherit(bx.CModeModal, bx.CMode);
bx.CModeModal.prototype.onPreShow = function() {
    var c, d;
    var e = 0;
    bx.UX.$3N();
    if (this.wnd) {
        this.$2G = this.wnd.tag.$css("z-index");
        this.wnd.tag.$CSS({
            zIndex: bx.UX.getZindex("popup")
        })
    }
    ret = bx.CMode.prototype.onPreShow.call(this);
    return ret
};
bx.CModeModal.prototype.onPostHide = function(c) {
    ret = bx.CMode.prototype.onPostHide.call(this);
    bx.UX.$2R();
    if (this.wnd && this.$2G) {
        this.wnd.tag.$CSS({
            zIndex: this.$2G
        })
    }
    return ret
};
bx.CModeModal.prototype.destroy = function() {
    bx.CMode.prototype.destroy.call(this);
    return null
};
bx.CPane = function(e, d, c) {
    if (e == null) {
        e = bx.UXmanager.$52
    }
    this.$7J = e;
    if (e) {
        e.addChild(this)
    }
    if (d) {
        this.tagId = d
    }
    if (c) {
        this.position = c;
        c.$3Z(this)
    }
    this.childPanes = [];
    this.childWnds = this.childPanes;
    this.tag = null;
    this.$3K = false
};
bx.CPane.prototype.create = function() {
    if (!this.parent) {
        if (bx.UX.$DF.rootTag) {
            this.tag = bx.UX.$DF.rootTag;
            this.tagVP = this.tag.$TAG("DIV", {
                style: "position:relative;width:100%;height:100%;border:none;padding:0;margin:0"
            })
        } else {
            this.tag = document.body;
            this.tagVP = document.body
        }
        this.$3K = true
    }
    this.onResize({
        x: 0,
        y: 0,
        w: bx.UX.width,
        h: bx.UX.height
    }, 3);
    return this
};
bx.CPane.prototype.destroy = function() {
    for (var c = 0; c < this.childPanes.length; c++) {
        this.childPanes[c].destroy()
    }
    delete this.childPanes;
    if (this.parent) {
        this.parent.removeChild(this, true)
    }
    if (this.tag && this.tag != document.body) {
        if (this.tag.parentNode) {
            this.tag.parentNode.removeChild(this.tag)
        }
    }
    delete this.tag;
    return null
};
bx.CPane.prototype.show = function() {};
bx.CPane.prototype.hide = function() {};
bx.CPane.prototype.addChild = function(e, c, d) {
    if (!e.tag) {
        return
    }
    if (e.parent == this) {
        return
    }
    if (e.parent && !d) {
        e.parent.removeChild(e, true)
    }
    this.childPanes.push(e);
    e.parent = this;
    if (this.tag && e.tag) {
        if (c) {
            this.tag.appendChild(e.tag)
        } else {
            this.tagVP.appendChild(e.tag)
        }
    }
};
bx.CPane.prototype.removeChild = function(e, d) {
    for (var c = 0; c < this.childPanes.length; c++) {
        if (this.childPanes[c] == e) {
            this.childPanes.splice(c, 1);
            if (!d) {
                bx.UXmanager.$52.addChild(e)
            }
            break
        }
    }
};
bx.CPane.prototype.getParent = function() {
    return this.$7J
};
bx.CPane.prototype.onResize = function(e, d) {
    this.position.$3a(e, 3);
    this.innerLeft = e.x;
    this.innerTop = e.y;
    this.innerWidth = e.w;
    this.innerHeight = e.h;
    for (var c = 0; c < this.childPanes.length; c++) {
        if (!this.childPanes[c].$5b) {
            this.childPanes[c].onResize(e, d)
        }
    }
};
bx.CWnd = function(f, e, i, c, h, d) {
    if (!arguments || arguments.length > 0) {
        var g = false;
        if (!e || !c || !h) {
            bx.Trace.log("BLUX", "errorParameter", "tagId=" + e + ", position=" + c + ", mode=" + h, "CWnd()");
            g = true
        }
        if (typeof e != "string") {
            bx.Trace.log("BLUX", "errorParameter", "tagId is not instance of string", "CWnd()");
            g = true
        }
        if (i && typeof i != "string") {
            bx.Trace.log("BLUX", "errorParameter", "title is not instance of string", "CWnd()");
            g = true
        }
        if (f && !(f instanceof bx.CWnd)) {
            bx.Trace.log("BLUX", "errorParameter", "parent is not instance of bx.CWnd", "CWnd()");
            g = true
        }
        if (!(h instanceof bx.CMode)) {
            bx.Trace.log("BLUX", "errorParameter", "mode is not instance of bx.CMode", "CWnd()");
            g = true
        }
        if (!(c instanceof bx.CPosition)) {
            bx.Trace.log("BLUX", "errorParameter", "position is not instance of bx.CPosition", "CWnd()");
            g = true
        }
        if (g) {
            this.$5o = true
        }
        bx.CPane.call(this, f, e, c);
        this.$5p = d || {};
        this.opts = this.$5p;
        if (i) {
            this.title = i
        }
        this.mode = h;
        h.setWnd(this);
        this.left = this.top = 0;
        this.height = this.width = this.innerWidth = this.innerHeight = 0;
        this.borderLeft = this.borderTop = 1;
        if (this.opts.cssFrame !== undefined) {
            this.opts.classNameWnd = this.opts.cssFrame
        }
        if (this.opts.cssVP !== undefined) {
            this.opts.className = this.opts.cssVP
        }
        if (this.opts.type & bx.CWnd.TYPE_DRAG) {
            this.opts.mouseDrag = true
        }
        if (this.opts.type & bx.CWnd.TYPE_DROP) {
            this.opts.dragDrop = true
        }
        if (this.opts.classNameWnd === undefined && bx.HCL.getCssRule(".bxCWnd_window")) {
            this.opts.classNameWnd = "bxCWnd_window"
        }
        if (this.opts.className === undefined && bx.HCL.getCssRule(".bxCWnd_viewport")) {
            this.opts.className = "bxCWnd_viewport"
        }
        if (this.opts.titleBar) {
            this.opts.titleBar.height = this.opts.titleBar.height || bx.CWnd.cfg.titleBar.height;
            if (this.opts.titleBar.css === undefined && bx.HCL.getCssRule("." + bx.CWnd.cfg.titleBar.css)) {
                this.opts.titleBar.css = bx.CWnd.cfg.titleBar.css
            }
            if (this.opts.titleBar.cssHover === undefined && bx.HCL.getCssRule("." + bx.CWnd.cfg.titleBar.cssHover)) {
                this.opts.titleBar.cssHover = bx.CWnd.cfg.titleBar.cssHover
            }
            if (this.opts.titleBar.btnClose && bx.CWnd.cfg.titleBar.btnClose) {
                if (bx.CWnd.cfg.titleBar.btnClose.normal) {
                    this.opts.titleBar.btnClose.normal = this.opts.titleBar.btnClose.normal || bx.CWnd.cfg.titleBar.btnClose.normal
                }
                if (bx.CWnd.cfg.titleBar.btnClose.hover) {
                    this.opts.titleBar.btnClose.hover = this.opts.titleBar.btnClose.hover || bx.CWnd.cfg.titleBar.btnClose.hover
                }
                if (bx.CWnd.cfg.titleBar.btnClose.css) {
                    this.opts.titleBar.btnClose.css = this.opts.titleBar.btnClose.css || bx.CWnd.cfg.titleBar.btnClose.css
                }
                if (bx.CWnd.cfg.titleBar.btnClose.onPostClick) {
                    this.opts.titleBar.btnClose.onPostClick = this.opts.titleBar.btnClose.onPostClick || bx.CWnd.cfg.titleBar.btnClose.onPostClick
                }
            }
            this.opts.type = this.opts.type & ~bx.CWnd.TYPE_NO_VIEWPORT
        }
        if (this.opts.type & bx.CWnd.TYPE_NO_VIEWPORT) {
            this.opts.type = this.opts.type & ~bx.CWnd.TYPE_CLIP_VP_AREA
        }
    }
};
bx.$Inherit(bx.CWnd, bx.CPane);
bx.CWnd.cfg = {};
bx.CWnd.cfg.titleBar = {
    height: 46,
    css: "bxCWnd_title",
    cssHover: "bxCWnd_title_hover"
};
bx.CWnd.TYPE_DRAG = 1;
bx.CWnd.TYPE_DROP = 2;
bx.CWnd.TYPE_NO_VIEWPORT = 4;
bx.CWnd.TYPE_CLIP_VP_AREA = 8;
bx.CWnd.TYPE_BLOCK_DEFAULT_ACTION = 16;
bx.CWnd.prototype.create = function(c, d) {
    if (this.$5o) {
        return null
    }
    if (!this.mode || !(this.mode instanceof bx.CMode)) {
        bx.Trace.log("BLUX", "noProperty", "CWnd.mode is not properly set in " + this.tagId, "CWnd.create");
        return null
    }
    this.opts.zoom = 1;
    this.opts.$38 = 1;
    if (this.tagId) {
        bx.UXmanager.$22(this.tagId, this)
    }
    if (!c) {
        c = "div"
    }
    this.$F0(c, d);
    if (this.opts.zIndex !== undefined) {
        this.setZindex(this.opts.zIndex)
    }
    return this
};
bx.CWnd.prototype.$F0 = function(c, e) {
    this.tag = document.body.$TAG("div", {
        id: this.tagId
    });
    if (this.opts.classNameWnd !== undefined) {
        this.tag.$A({
            "class": this.opts.classNameWnd
        })
    }
    if (this.opts.styles) {
        this.tag.$CSS(this.opts.styles)
    }
    if (this.opts.mouseDrag) {
        if (bx.HCL.DV.hasTouchEvent()) {
            this.tag.$A({
                ontouchstart: "bx.Event.mouseDrag(this, event);"
            })
        } else {
            this.tag.$A({
                onmousedown: "bx.Event.mouseDrag(this, event);"
            })
        }
    }
    if (this.opts.type & bx.CWnd.TYPE_NO_VIEWPORT) {
        this.tagVP = this.tag
    } else {
        this.tagVP = this.tag.$TAG(c, {
            id: this.tagId + bx.c.$2I
        }, {
            overflow: "hidden",
            position: "relative",
            width: "auto",
            height: "auto"
        })
    }
    if (!(this.opts.type & bx.CWnd.TYPE_NO_VIEWPORT)) {
        if (this.opts.className !== undefined) {
            this.tagVP.$A({
                "class": this.opts.className
            })
        }
    }
    var f = this;
    if (this.opts.titleBar) {
        this.$3L = this.tag.$TAG("div", {
            id: this.tagId + "_bxTB",
            align: "left"
        }, {
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            position: "absolute",
            width: "auto",
            height: this.opts.titleBar.height + "px"
        });
        if (this.opts.titleBar.btnClose && this.opts.titleBar.btnClose.normal) {
            this.$3O = this.tag.$TAG("img", {
                id: this.tagId + "_bxBtnClose",
                "class": this.opts.titleBar.btnClose.css ? this.opts.titleBar.btnClose.css : "",
                onclick: 'var wnd = $W("' + this.tagId + '"); wnd.hide(); wnd.onClose();'
            }, {
                position: "absolute"
            });
            bx.ImageButton(this.$3O, {
                img: this.opts.titleBar.btnClose.normal,
                img_over: this.opts.titleBar.btnClose.hover
            });
            this.$3O.onload = function() {
                f.$3L.style.paddingRight = (this.width + 12) + "px";
                var g = bx.$getOuter(f.$3L);
                f.$3L.style.width = (f.width - (g.left + g.right)) + "px"
            }
        }
        this.setTitle(this.title, true);
        if (this.opts.titleBar.onLongClick || this.opts.titleBar.onPreLongClick) {
            var d = "bx.Event.mouseDrag(this, event, null, null, {nodrag:true, $ZZ09:true, $ZZ07:true";
            d += this.opts.titleBar.cssHover ? ", cssDrag:'" + this.opts.titleBar.cssHover + "'" : "";
            d += "});";
            if (bx.HCL.DV.hasTouchEvent()) {
                this.$3L.$A({
                    ontouchstart: d
                })
            } else {
                this.$3L.$A({
                    onmousedown: d
                })
            }
            if (this.opts.titleBar.onLongClick) {
                this.$3L.onlongclick = this.opts.titleBar.onLongClick
            }
            if (this.opts.titleBar.onPreLongClick) {
                this.$3L.$bxOnPreLongClick = this.opts.titleBar.onPreLongClick
            }
        }
        if (this.opts.titleBar.closeOnClick) {
            this.$3L.$A({
                onclick: "$W('" + this.tagId + "').hide();"
            })
        }
    }
    if (this.opts.type & bx.CWnd.TYPE_CLIP_VP_AREA && this.tag != this.tagVP) {
        this.$Kb = this.tag.$TAG("div", {
            id: this.tagId + bx.UX.cfg.$Kb
        }, {
            width: "100%",
            height: "100%"
        });
        if (bx.HCL.DV.hasTouchEvent()) {
            this.$Kb.ontouchmove = function(g) {
                return false
            };
            this.$Kb.ontouchstart = function(g) {
                return false
            };
            this.$Kb.ontouchend = function(g) {
                return false
            }
        }
        this.$Kb.$CSS("overflow", "hidden");
        this.$Kb.appendChild(this.tagVP)
    }
    if (this.opts.type & bx.CWnd.TYPE_BLOCK_DEFAULT_ACTION && bx.HCL.DV.isIOS()) {
        bx.Event.add(this.tag, "touchmove", function(g) {
            bx.Event.preventDefault(g)
        }, false);
        bx.Event.add(this.tag, "touchend", function(g) {
            bx.Event.preventDefault(g)
        }, false);
        bx.Event.add(this.tag, "touchcancel", function(g) {
            bx.Event.preventDefault(g)
        }, false);
        bx.Event.add(this.tag, "touchstart", function(g) {
            bx.Event.preventDefault(g)
        }, false)
    }
    this.tag.$CSS({
        display: "none"
    });
    this.$7J.addChild(this);
    if (!e) {
        this.onResize({
            x: this.parent.innerLeft,
            y: this.parent.innerTop,
            w: this.parent.innerWidth,
            h: this.parent.innerHeight
        }, 1, null, true)
    }
};
bx.CWnd.prototype.draw = function(e, f, c) {
    if (!this.tag) {
        return
    }
    if (e !== null && e !== undefined) {
        if (typeof e == "string") {
            if (!c) {
                this.tagVP.innerHTML = e
            } else {
                bx.UX.domBuffer.innerHTML = e;
                var g = bx.UX.domBuffer.childNodes.length;
                for (var d = 0; d < g; d++) {
                    this.tagVP.appendChild(bx.UX.domBuffer.childNodes[0])
                }
            }
        } else {
            this.tagVP.appendChild(e)
        }
    }
};
bx.CWnd.prototype.move = function(c, e, d) {
    if (!this.tag) {
        return
    }
    if (this.position.$DS(c, e)) {
        if (!d) {
            if (c || c == 0) {
                this.left = c;
                this.position.setX(c)
            }
            if (e || e == 0) {
                this.top = e;
                this.position.setY(e)
            }
        }
    } else {
        bx.Trace.log("BLUX", "errorPosition", "CWnd:" + this.tagId + " doesn't have a movable CPosition", "CWnd.move")
    }
};
bx.CWnd.prototype.show = function() {
    if (!this.tag) {
        return
    }
    if (!this.$3K) {
        this.mode.onPreShow();
        if (this.$3M) {
            this.$3M.show()
        }
        this.tag.style.display = "block";
        this.$3K = true;
        if (this.$5q) {
            this.onResize(this.$5q.rect, this.$5q.type);
            delete this.$5q
        }
        this.mode.onPostShow()
    }
};
bx.CWnd.prototype.setPosition = function(e, d) {
    if (!e) {
        bx.Trace.log("BLUX", "noProperty", "position=" + e, "CWnd.changePosition");
        return null
    }
    var c = this.position;
    this.position = e;
    this.position.$3Z(this);
    if (!d) {
        this.restore()
    }
    return c
};
bx.CWnd.prototype.updateStart = function() {
    if (this.$5r !== undefined) {
        return
    }
    if (this.$5s !== undefined) {
        return
    }
    this.$5r = this.tag.style.display;
    this.$5s = this.tag.style.visibility;
    this.tag.style.visibility = "hidden";
    this.tag.style.display = "block"
};
bx.CWnd.prototype.updateEnd = function(c) {
    if (this.$5r !== undefined) {
        this.tag.style.display = this.$5r;
        delete this.$5r
    }
    if (this.$5s !== undefined) {
        this.tag.style.visibility = this.$5s;
        delete this.$5s
    }
};
bx.CWnd.prototype.restore = function(c, d) {
    if (!this.tag) {
        return
    }
    if (!this.$5b) {
        this.onResize({
            x: this.parent.innerLeft,
            y: this.parent.innerTop,
            w: this.parent.innerWidth,
            h: this.parent.innerHeight
        }, 1, c, d)
    }
};
bx.CWnd.prototype.hide = function(c) {
    if (!this.tag) {
        return
    }
    if (this.$3K || c) {
        this.mode.onPreHide(c);
        if (this.$3M) {
            this.$3M.hide()
        }
        this.mode.onPostHide(c);
        this.tag.$CSS({
            display: "none"
        });
        this.$3K = false
    }
};
bx.CWnd.prototype.init = function(c) {
    if (c) {
        this.show()
    }
};
bx.CWnd.prototype.destroy = function() {
    bx.UXmanager.$23(this.tagId);
    this.hide(true);
    bx.CPane.prototype.destroy.call(this);
    if (this.mode) {
        this.mode.destroy();
        delete this.mode
    }
    delete this.position;
    return null
};
bx.CWnd.prototype.$5c = function() {
    if (!this.tag) {
        return
    }
    this.hide();
    this.onPreDestroy();
    if (this.childWnds.length > 0) {
        for (var c = 0; c < this.childWnds.length; c++) {
            this.childWnds[c].$5c()
        }
    } else {
        if (this.tagVP.innerHTML) {
            this.tagVP.innerHTML = ""
        }
    }
};
bx.CWnd.prototype.setTitle = function(d, c) {
    this.title = d;
    if (this.title && this.$3L) {
        bx.DOM.setText(this.$3L, this.title)
    }
};
bx.CWnd.prototype.getTitleTag = function() {
    if (this.$3L) {
        return this.$3L
    } else {
        null
    }
};
bx.CWnd.prototype.isShow = function(d) {
    if (d && this.$3K) {
        var c = this;
        while (c && c != bx.UX.$52) {
            if (!c.isShow()) {
                return false
            }
            c = c.parent
        }
        return true
    } else {
        return this.$3K
    }
};
bx.CWnd.prototype.setChain = function(c) {
    this.$3M = c
};
bx.CWnd.prototype.setZindex = function(d) {
    if (d === undefined) {
        bx.Trace.log("BLUX", "warnParameter", "zIndex=" + d, "CWnd.setZindex");
        return 0
    }
    if (this.tag) {
        var c = bx.$checkNaN(parseInt(this.tag.$css("z-index")));
        this.tag.style.zIndex = d;
        return c
    }
    return 0
};
bx.CWnd.prototype.$5t = function(d, c, f, e) {
    bx.CWnd.prototype.$5t.$39 = bx.HCL.getElementRect(d, bx.CWnd.prototype.$5t.$39);
    e = e || {};
    e.x = parseInt((c - bx.CWnd.prototype.$5t.$39.x) * this.opts.$38);
    e.y = parseInt((f - bx.CWnd.prototype.$5t.$39.y) * this.opts.$38);
    return e
};
bx.CWnd.prototype.clientToViewportCoord = function(c, e, d) {
    return this.$5t(this.tagVP, c, e, d)
};
bx.CWnd.prototype.clientToWindowCoord = function(c, e, d) {
    return this.$5t(this.tag, c, e, d)
};
bx.CWnd.prototype.onClose = function() {};
bx.CWnd.prototype.onResize = function(j, i, e, f) {
    if (!this.tag) {
        bx.Trace.log("BLUX", "warning", "CWnd is not created", "CWnd.onResize");
        return false
    }
    this.updateStart();
    var g = this.opts.titleBar ? this.opts.titleBar.height : 0;
    this.position.$3a(j, i);
    if (!(this.opts.type & bx.CWnd.TYPE_NO_VIEWPORT)) {
        var l, d;
        var k = bx.HCL.getElementBorderWidth(this.tagVP);
        if (this.tag.$css("height", true) != "auto") {
            l = bx.$checkNaN(parseInt(this.tag.style.height)) - (bx.HCL.PR.$0T(this.tagVP.tagName) ? 0 : k.h) - g;
            this.tagVP.style.height = parseInt(this.opts.$38 * l) + "px"
        }
        if (this.tag.$css("width", true) != "auto") {
            d = bx.$checkNaN(parseInt(this.tag.style.width)) - (bx.HCL.PR.$0T(this.tagVP.tagName) ? 0 : k.w);
            this.tagVP.style.width = parseInt(this.opts.$38 * d) + "px"
        }
    } else {
        var k = {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            w: 0,
            h: 0
        }
    }
    this.left = this.position.rect.x;
    this.top = this.position.rect.y;
    this.height = bx.$checkNaN(parseInt(this.tag.style.height));
    this.width = bx.$checkNaN(parseInt(this.tag.style.width));
    var h;
    if (this.width && !this.tag.offsetWidth) {
        h = h || bx.HCL.getElementBorderWidth(this.tag);
        this.outerWidth = this.width + h.w
    } else {
        this.outerWidth = this.tag.offsetWidth
    }
    if (this.height && !this.tag.offsetHeight) {
        h = h || bx.HCL.getElementBorderWidth(this.tag);
        this.outerHeight = this.height + h.h
    } else {
        this.outerHeight = this.tag.offsetHeight
    }
    this.innerHeight = this.height - k.h - g;
    this.innerWidth = this.width - k.w;
    this.borderLeft = bx.$checkNaN(parseInt(this.tag.$css("padding-left")));
    this.borderTop = bx.$checkNaN(parseInt(this.tag.$css("padding-top"))) + g;
    this.innerLeft = bx.$checkNaN(parseInt(this.tagVP.$css("padding-left")));
    this.innerTop = bx.$checkNaN(parseInt(this.tagVP.$css("padding-top")));
    if (g) {
        if (this.opts.titleBar.css) {
            this.$3L.$A({
                "class": this.opts.titleBar.css
            })
        }
        var c = bx.HCL.getElementBorderWidth(this.$3L);
        this.$3L.style.left = this.borderLeft + "px";
        this.$3L.style.top = (this.borderTop - g) + "px";
        this.$3L.style.width = (this.width - c.w) + "px";
        this.$3L.style.height = (g - c.h) + "px";
        if (this.$3O) {
            this.$3O.style.right = bx.$checkNaN(parseInt(this.tag.$css("padding-right"))) + "px";
            this.$3O.style.top = (this.borderTop - g) + "px"
        }
        this.tagVP.style.top = g + "px"
    }
    if (!e) {
        this.resizeChildWnds(i, true)
    }
    this.updateEnd();
    return true
};
bx.CWnd.prototype.resizeChildWnds = function(e, c) {
    if (!c) {
        this.updateStart()
    }
    for (var d = 0; d < this.childWnds.length; d++) {
        if (!this.childWnds[d].$5b) {
            this.childWnds[d].onResize({
                x: this.innerLeft,
                y: this.innerTop,
                w: this.innerWidth,
                h: this.innerHeight
            }, e)
        }
    }
    if (!c) {
        this.updateEnd()
    }
};
bx.CWnd.prototype.onClick = function() {};
bx.CWnd.prototype.$KJ = function(c) {
    this.onLongClick(c)
};
bx.CWnd.prototype.onLongClick = function(c) {};
bx.CWnd.prototype.$KI = function(c) {
    this.onPreLongClick(c)
};
bx.CWnd.prototype.onPreLongClick = function(c) {};
bx.CWnd.prototype.onDragStart = function(c, d) {};
bx.CWnd.prototype.onDragEnd = function(c, e, d) {
    if (c === undefined || e === undefined) {
        return false
    }
    return true
};
bx.CWnd.prototype.onDrag = function(c, d) {};
bx.CWnd.prototype.onDrop = function(d, e, c, f) {
    return false
};
bx.CWnd.prototype.onDropEnabled = function() {
    return (this.opts.dragDrop ? true : false)
};
bx.CWnd.prototype.onPreDestroy = function() {};
bx.EM = {
    $2Y: [],
    $AZ: 1,
    $FM: 0,
    $3T: {
        focus: null,
        blur: null
    },
    $5X: function() {},
    getTimerInterval: function() {
        return bx.HCL.DV.$0E()
    },
    $3C: function() {
        if (!bx.EM.$2X) {
            bx.EM.$2X = setInterval(bx.EM.$3F, bx.EM.getTimerInterval())
        }
    },
    stop: function() {
        if (bx.EM.$2X) {
            clearInterval(bx.EM.$2X);
            delete bx.EM.$2X
        }
    },
    resume: function() {
        bx.EM.$3C()
    },
    $3F: function(c) {
        var e = (new Date()).getTime();
        for (var d = 0; d < bx.EM.$2Y.length; d++) {
            if (bx.EM.$2Y[d].id > 0 && bx.EM.$2Y[d].timer && e > bx.EM.$2Y[d].timer.last) {
                if (typeof bx.EM.$2Y[d].callback == "function") {
                    bx.EM.$2Y[d].callback()
                } else {
                    if (bx.EM.$2Y[d].hdr && bx.EM.$2Y[d].target) {
                        bx.EM.$2Y[d].hdr.call(bx.EM.$2Y[d].target)
                    } else {
                        bx.EM.remove(bx.EM.$2Y[d].id);
                        continue
                    }
                }
                bx.EM.$2Y[d].timer.last = e + bx.EM.$2Y[d].timer.time;
                if (bx.EM.$2Y[d].destroy) {
                    bx.EM.remove(bx.EM.$2Y[d].id)
                }
            }
        }
    },
    $5x: function(c) {
        var e = (new Date()).getTime();
        for (var d = 0; d < bx.EM.$2Y.length; d++) {
            if (bx.EM.$2Y[d].id == c) {
                if (typeof bx.EM.$2Y[d].callback == "function") {
                    bx.EM.$2Y[d].callback(bx.EM.$2Y[d].id)
                } else {
                    if (bx.EM.$2Y[d].hdr && bx.EM.$2Y[d].target) {
                        bx.EM.$2Y[d].hdr.call(bx.EM.$2Y[d].target, bx.EM.$2Y[d].id)
                    } else {
                        bx.EM.remove(bx.EM.$2Y[d].id);
                        continue
                    }
                }
                if (typeof bx.EM.$2Y[d].timer == "object") {
                    bx.EM.$2Y[d].timer.last = e + bx.EM.$2Y[d].timer.time
                } else {}
                if (bx.EM.$2Y[d].destroy) {
                    bx.EM.remove(bx.EM.$2Y[d].id)
                }
                break
            }
        }
    },
    $3D: function(d) {
        if (!d) {
            d = window.event
        }
        if (d.type == "keyup" && d.keyCode == 229) {
            return
        }
        for (var c = 0; c < bx.EM.$2Y.length; c++) {
            if (bx.EM.$2Y[c].id > 0 && bx.EM.$2Y[c].event && bx.EM.$2Y[c].event == d.type) {
                if (typeof bx.EM.$2Y[c].callback == "function") {
                    bx.EM.$2Y[c].callback(bx.EM.$2Y[c].id, d)
                } else {
                    if (bx.EM.$2Y[c].hdr && bx.EM.$2Y[c].target) {
                        bx.EM.$2Y[c].hdr.call(bx.EM.$2Y[c].target, bx.EM.$2Y[c].id, d)
                    } else {
                        bx.EM.remove(bx.EM.$2Y[c].id);
                        continue
                    }
                }
                if (bx.EM.$2Y[c].destroy) {
                    bx.EM.remove(bx.EM.$2Y[c].id)
                }
            }
        }
        return true
    },
    onFocusBlur: function(c) {
        if (!c) {
            c = window.event
        }
        if (c.type == "focus") {
            bx.EM.$3T.focus = bx.Event.getElement(c);
            bx.EM.$3T.blur = null;
            bx.EM.$3D(c)
        } else {
            if (c.type == "blur") {
                bx.EM.$3T.blur = bx.Event.getElement(c)
            }
        }
    },
    setFocus: function(c) {
        if (!c) {
            c = window.ev
        }
        if (bx.EM.$5Y == bx.Event.getElement(c)) {
            return
        }
        bx.EM.$5Y = bx.Event.getElement(c);
        if (!bx.EM.$5u) {
            if (bx.HCL.DV.hasTouchEvent()) {
                bx.EM.$5u = bx.EM.add({
                    event: "touchstart",
                    callback: bx.EM.$5v
                })
            } else {
                bx.EM.$5u = bx.EM.add({
                    event: "mousedown",
                    callback: bx.EM.$5v
                })
            }
        }
    },
    getFocused: function() {
        return bx.EM.$5Y
    },
    $5v: function(d, c) {
        if (!bx.HCL.DV.isIOS() || window.pageYOffset > 0) {
            if (bx.EM.$5Y == bx.Event.getElement(c)) {
                return
            }
        }
        if (bx.EM.$5Y) {
            if (bx.EM.$5Y.blur) {
                bx.EM.$5Y.blur()
            }
            if (bx.EM.$5Y !== undefined) {
                delete bx.EM.$5Y
            }
        }
    },
    add: function(d) {
        for (var c = 0; c < bx.EM.$2Y.length; c++) {
            if (bx.EM.$2Y[c].id == -1) {
                bx.EM.$2Y.splice(c, 1);
                c--
            }
        }
        d.id = bx.EM.$AZ++;
        if (d.timer) {
            if (typeof d.timer == "object") {
                d.timer.last = (new Date()).getTime() + d.timer.time
            } else {
                return 0
            }
        } else {
            if (d.event) {
                bx.EM.$5w = bx.EM.$5w || {};
                if (!bx.EM.$5w[d.event]) {
                    bx.Event.add(document, d.event, bx.EM.$3D, true);
                    bx.EM.$5w[d.event] = true
                }
            }
        }
        bx.EM.$2Y.push(d);
        if (d.timer && d.type == "call") {
            bx.EM.$5x(d.id)
        }
        bx.EM.$FM++;
        bx.EM.$3C();
        return d.id
    },
    refresh: function(d) {
        for (var c = 0; c < bx.EM.$2Y.length; c++) {
            if (bx.EM.$2Y[c].id == d) {
                if (bx.EM.$2Y[c].timer) {
                    bx.EM.$2Y[c].timer.last = (new Date()).getTime() + bx.EM.$2Y[c].timer.time
                }
                break
            }
        }
    },
    remove: function(d) {
        for (var c = 0; c < bx.EM.$2Y.length; c++) {
            if (bx.EM.$2Y[c].id == d) {
                bx.EM.$2Y[c].id = -1;
                bx.EM.$FM--;
                if (bx.EM.$FM == 0) {
                    bx.EM.stop()
                }
                break
            }
        }
        return 0
    },
    setTimeout: function(c, d) {
        return bx.EM.add({
            timer: {
                time: d
            },
            destroy: true,
            callback: c
        })
    },
    setInterval: function(c, d) {
        return bx.EM.add({
            timer: {
                time: d
            },
            callback: c
        })
    }
};
bx.EM.clearInterval = bx.EM.remove;
bx.EM.clearTimeout = bx.EM.remove;
bx.EventManager = bx.EM;
bx.CTrace = function() {
    this.DEBUG = 1000;
    this.WARNING = 2000;
    this.CRITICAL = 3000;
    this.logging = false;
    this.error = {};
    this.curLevel = this.WARNING
};
bx.CTrace.prototype.level = function(c) {
    if (!c) {
        this.logging = false;
        bx.Log.init(false);
        return
    }
    this.curLevel = c;
    this.logging = true;
    bx.Log.init(true)
};
bx.CTrace.prototype.log = function(c, h, f, e) {
    if (this.error[h]) {
        if (!this.logging || this.error[h].$AZ < this.curLevel) {
            return
        }
        var d, g;
        if (this.error[h].$AZ < this.WARNING) {
            d = "[DBG]:";
            g = bx.Log.DEBUG
        } else {
            if (this.error[h].$AZ < this.CRITICAL) {
                d = "[WRN]:";
                g = bx.Log.WARNING
            } else {
                d = "[CRI]:";
                g = bx.Log.ERROR
            }
        }
        bx.Log.log(c + d + this.error[h].$AZ + ":" + this.error[h].$B0 + ' "' + f + '"' + (e ? " in " + e : ""), g)
    }
};
bx.CTrace.prototype.data = function(c) {
    bx.Log.log(c)
};
bx.CTrace.prototype.err = function(c) {
    if (bx.Log.isActive() && window.console && arguments.length > 1) {
        arguments[0] = "[" + c + "]";
        console.error.apply(console, arguments)
    }
};
bx.CTrace.prototype.warn = function(c) {
    if (bx.Log.isActive() && window.console && arguments.length > 1) {
        arguments[0] = "[" + c + "]";
        console.warn.apply(console, arguments)
    }
};
bx.CTransition = function(c) {
    this.$48 = c;
    this.$49 = [];
    this.count = 0;
    this.$N1f = {};
    this.$N1g = 0;
    this.$5x6 = 0;
    this.$5x7 = 0
};
bx.CTransition.RELATIVE_TIME_SYSTEM = false;
bx.CTransition.TYPE_OVERRIDE = 1;
bx.CTransition.prototype.loopAdd = function(c) {
    this.$N1f[this.$N1g] = c;
    this.$N1h();
    return this.$N1g++
};
bx.CTransition.prototype.loopRemove = function(c) {
    delete this.$N1f[c]
};
bx.CTransition.prototype.$N1h = function() {
    var d = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame;
    if (d) {
        if (!this.$N1i) {
            this.$N1j()
        }
    } else {
        if (this.$4C === undefined) {
            var f = this;
            this.$4C = setInterval(function() {
                if (f.count || f.$N1g) {
                    f.run()
                }
            }, this.$48)
        }
    }
    if (!this.$5x8) {
        this.$5x8 = true;
        var f = this;

        function e() {
            if (document.hidden) {} else {
                f.$5x7 = (new Date()).getTime()
            }
        }
        bx.Event.add(document, "visibilitychange", e, false);

        function c(g) {
            g = g.detail;
            if (g) {
                if (g.op == "apn_custom_action") {
                    if (g.arg.name == "pause") {} else {
                        if (g.arg.name == "resume") {
                            f.$5x7 = (new Date()).getTime()
                        }
                    }
                }
            }
        }
        bx.Event.add(document, "appbook_control", c, false)
    }
};
bx.CTransition.prototype.$N1j = function() {
    var d = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame;
    if (d) {
        var e = this;

        function c(f) {
            if (e.count || e.$N1g) {
                e.run();
                d(c)
            } else {
                e.$N1i = false
            }
        }
        d(c);
        this.$N1i = true
    }
};
bx.CTransition.prototype.add = function(g, f) {
    if (g && g.onEnd) {
        if (!g.element) {
            g.timing = "linear"
        }
    } else {
        if (!g || !g.element || !g.timing || !g.styles) {
            bx.Trace.log("BLUX", "warnProperty", "transition", "CTransition.add");
            bx.Trace.data(g);
            return -1
        }
    }
    if (!bx.Easing[g.timing]) {
        return -1
    }
    var e;
    if (g.element) {
        if (f & bx.CTransition.TYPE_OVERRIDE) {
            for (e = 0; e < this.$49.length; e++) {
                if (this.$49[e] && !this.$49[e].$4B && this.$49[e].element == g.element) {
                    this.$4N(e)
                }
            }
        }
    }
    var h = false;
    if (bx.CTransition.RELATIVE_TIME_SYSTEM || this.RELATIVE_TIME_SYSTEM) {
        g.$4A = this.$5x6
    } else {
        g.$4A = (new Date()).getTime()
    }
    g.$53 = 0;
    if (g.styles) {
        for (var d in g.styles) {
            if (!g.styles[d]) {
                delete g.styles[d];
                continue
            }
            if (g.styles[d].unit === undefined) {
                g.styles[d].unit = ""
            }
            if (g.styles[d].sequence) {
                if (!g.styles[d].sequence.length) {
                    bx.Trace.log("BLUX", "warnProperty", "sequence of " + d + " is an empty Array", "CTransition.add");
                    delete g.styles[d];
                    continue
                }
                if (g.onInit) {
                    g.onInit(g.element, d, g.styles[d].sequence[0])
                } else {
                    g.element.$CSS(d, g.styles[d].sequence[0] + g.styles[d].unit)
                }
            } else {
                if (g.styles[d].to === undefined) {
                    bx.Trace.log("BLUX", "warnProperty", "'to' of " + d + " is undefined", "CTransition.add");
                    delete g.styles[d];
                    continue
                }
                if (g.styles[d].from === undefined) {
                    g.styles[d].from = bx.$checkNaN(parseInt(g.element.$css(d.replace(/[A-Z]/g, function(i, j) {
                        return "-" + i.toLowerCase()
                    }))))
                } else {
                    if (g.onInit) {
                        g.onInit(g.element, d, g.styles[d].from)
                    } else {
                        g.element.$CSS(d, g.styles[d].from + g.styles[d].unit)
                    }
                }
            }
        }
    }
    var c = -1;
    for (e = 0; e < this.$49.length; e++) {
        if (this.$49[e] && this.$49[e].$4B) {
            delete this.$49[e];
            this.$49[e] = g;
            c = e;
            h = true;
            break
        }
    }
    if (!h) {
        c = this.$49.length;
        this.$49.push(g)
    }
    this.count++;
    if (this.$48) {
        this.$N1h()
    }
    return c
};
bx.CTransition.prototype.$4N = function(d, c, e) {
    if (this.$49[d].$4B) {
        return
    }
    if (e) {
        if (this.$49[d].onCancel) {
            this.$49[d].onCancel(this.$49[d])
        } else {
            if (this.$49[d].onEnd) {
                this.$49[d].onEnd(this.$49[d])
            }
        }
    } else {
        if (this.$49[d].onEnd) {
            this.$49[d].onEnd(this.$49[d])
        }
    }
    this.$49[d].$4B = true;
    this.$49[d].element = null;
    this.count--
};
bx.CTransition.prototype.cancel = function(c, d) {
    if (this.$49[c] && this.$49[c].id == d) {
        this.$4N(c, undefined, true)
    }
};
bx.CTransition.prototype.end = function(c, d) {
    if (this.$49[c] && this.$49[c].id == d) {
        this.run(c)
    }
};
bx.CTransition.prototype.removeAll = function() {
    for (var c = 0; c < this.$49.length; c++) {
        if (this.$49[c] && !this.$49[c].$4B) {
            this.$4N(c)
        }
    }
    this.count = 0
};
bx.CTransition.prototype.pauseTimer = function() {
    this.__timerPaused = true
};
bx.CTransition.prototype.resumeTimer = function() {
    this.__timerPaused = false;
    this.$5x7 = (new Date()).getTime()
};
bx.CTransition.prototype.run = function(c) {
    if (this.__timerPaused) {
        return
    }
    if (!this.$5x7) {
        this.$5x7 = (new Date()).getTime()
    }
    if (bx.CTransition.RELATIVE_TIME_SYSTEM || this.RELATIVE_TIME_SYSTEM) {
        this.$5x6 += ((new Date()).getTime() - this.$5x7);
        this.$5x7 = (new Date()).getTime();
        this.$N1k = this.$5x6
    } else {
        this.$N1k = (new Date()).getTime()
    }
    if (c === undefined) {
        if (this.$N1g) {
            for (this.$GY in this.$N1f) {
                this.$N1f[this.$GY](this.$N1k)
            }
        }
    }
    for (this.$GY = 0; this.$GY < this.$49.length; this.$GY++) {
        if (this.$49[this.$GY] && !this.$49[this.$GY].$4B) {
            this.$N1l = this.$49[this.$GY];
            if (c >= 0) {
                if (this.$GY != c) {
                    continue
                }
                if (this.$N1l.timing[0] == "x") {
                    if (this.$N1l.timing[1] == "r") {
                        this.$N1m = 0
                    } else {
                        this.$N1m = 1
                    }
                } else {
                    if (!this.$N1l.roundUp) {
                        this.$N1m = 1
                    } else {
                        this.$N1m = 0
                    }
                }
            } else {
                if (!this.$N1l.time) {
                    if (this.$N1l.timing[0] == "x") {
                        if (this.$N1l.timing[1] == "r") {
                            this.$N1m = 0
                        } else {
                            this.$N1m = 1
                        }
                    } else {
                        if (!this.$N1l.roundUp) {
                            this.$N1m = 1
                        } else {
                            this.$N1m = 0
                        }
                    }
                } else {
                    if (this.$N1l.wait) {
                        this.$N1m = bx.Easing.wait(this.$N1l.timing, this.$N1k - this.$N1l.$4A, 0, 1, this.$N1l.time, this.$N1l.roundUp, this.$N1l.wait, this.$N1n, this.$N1l.element && this.$N1l.element.apxTrCtxt ? this.$N1l.element.apxTrCtxt[this.$N1l.timing] : undefined);
                        if (!this.$N1l.roundUp) {
                            if (this.$N1l.timing[0] == "x") {} else {
                                this.$N1m = Math.min(this.$N1m, 1)
                            }
                        } else {
                            this.$N1m = Math.max(this.$N1m, 0)
                        }
                    } else {
                        if (!this.$N1l.roundUp) {
                            this.$N1m = bx.Easing[this.$N1l.timing](this.$N1k - this.$N1l.$4A, 0, 1, this.$N1l.time, this.$N1n, this.$N1l.element && this.$N1l.element.apxTrCtxt ? this.$N1l.element.apxTrCtxt[this.$N1l.timing] : undefined);
                            if (this.$N1l.timing[0] == "x") {} else {
                                this.$N1m = Math.min(this.$N1m, 1)
                            }
                        } else {
                            this.$N1m = bx.Easing.roundUp(this.$N1l.timing, this.$N1k - this.$N1l.$4A, 0, 1, this.$N1l.time, this.$N1n, this.$N1l.element && this.$N1l.element.apxTrCtxt ? this.$N1l.element.apxTrCtxt[this.$N1l.timing] : undefined);
                            this.$N1m = Math.max(this.$N1m, 0)
                        }
                    }
                }
            }
            if (this.$N1l.styles) {
                for (this.$N1n in this.$N1l.styles) {
                    if (this.$N1l.styles[this.$N1n].sequence) {
                        if ((this.$N1m == 1 && !this.$N1l.roundUp) || (this.$N1m == 0 && this.$N1l.roundUp)) {
                            if (typeof this.$N1l.styles[this.$N1n].unit == "function") {
                                this.$N1l.styles[this.$N1n].unit(this.$N1l.element, this.$N1n, this.$N1l.styles[this.$N1n].sequence[this.$N1l.styles[this.$N1n].sequence.length - 1], this.$N1l.styles[this.$N1n].sequence.length - 1)
                            } else {
                                this.$N1l.element.$CSS(this.$N1n, this.$N1l.styles[this.$N1n].sequence[this.$N1l.styles[this.$N1n].sequence.length - 1] + this.$N1l.styles[this.$N1n].unit)
                            }
                        } else {
                            if (this.$N1l.styles[this.$N1n].sequence.length > this.$N1l.$53) {
                                if (typeof this.$N1l.styles[this.$N1n].unit == "function") {
                                    this.$N1l.styles[this.$N1n].unit(this.$N1l.element, this.$N1n, this.$N1l.styles[this.$N1n].sequence[this.$N1l.$53], this.$N1l.$53)
                                } else {
                                    this.$N1l.element.$CSS(this.$N1n, this.$N1l.styles[this.$N1n].sequence[this.$N1l.$53] + this.$N1l.styles[this.$N1n].unit)
                                }
                            }
                        }
                    } else {
                        if (this.$N1l.timing[0] == "x") {
                            if (!(c >= 0 && this.$GY == c)) {
                                this.$N1m = bx.Easing[this.$N1l.timing](this.$N1k - this.$N1l.$4A, 0, 1, this.$N1l.time, this.$N1n, this.$N1l.element && this.$N1l.element.apxTrCtxt ? this.$N1l.element.apxTrCtxt[this.$N1l.timing] : undefined)
                            }
                        }
                        this.$N1B = (this.$N1l.styles[this.$N1n].from + (this.$N1l.styles[this.$N1n].to - this.$N1l.styles[this.$N1n].from) * (this.$N1m / 1));
                        if (typeof this.$N1l.styles[this.$N1n].unit == "function") {
                            this.$N1l.styles[this.$N1n].unit(this.$N1l.element, this.$N1n, this.$N1B)
                        } else {
                            this.$N1l.element.$CSS(this.$N1n, this.$N1B + this.$N1l.styles[this.$N1n].unit)
                        }
                    }
                }
            }
            if (this.$N1l.timing[0] == "x") {
                if (this.$N1l.timing[1] == "r") {
                    if (this.$N1m == 0) {
                        this.$4N(this.$GY)
                    }
                } else {
                    if (this.$N1m == 1) {
                        this.$4N(this.$GY)
                    }
                }
            } else {
                if ((this.$N1m == 1 && !this.$N1l.roundUp) || (this.$N1m == 0 && this.$N1l.roundUp)) {
                    this.$4N(this.$GY)
                }
            }
            this.$N1l.$53++
        }
    }
    if (this.onTickEnd) {
        this.onTickEnd()
    }
};
bx.Easing = {};
"EASING EQUATIONS: Copyright ⓒ 2001 Robert Penner All rights reserved.";
bx.Easing.linear = function(f, e, h, g) {
    return e + (h - e) * f / g
};
bx.Easing.inQuad = function(f, e, h, g) {
    return h * (f /= g) * f + e
};
bx.Easing.outQuad = function(f, e, h, g) {
    return f > g ? h : (-h * (f /= g) * (f - 2) + e)
};
bx.Easing.inOutQuad = function(f, e, h, g) {
    if (f > g) {
        return h
    }
    if ((f /= g / 2) < 1) {
        return h / 2 * f * f + e
    }
    return -h / 2 * ((--f) * (f - 2) - 1) + e
};
bx.Easing.outInQuad = function(f, e, h, g) {
    if (f < g / 2) {
        return bx.Easing.outQuad(f * 2, e, h / 2, g)
    }
    return bx.Easing.inQuad((f * 2) - g, e + h / 2, h / 2, g)
};
bx.Easing.inCubic = function(f, e, h, g) {
    return h * (f /= g) * f * f + e
};
bx.Easing.outCubic = function(f, e, h, g) {
    return f > g ? h : h * ((f = f / g - 1) * f * f + 1) + e
};
bx.Easing.inOutCubic = function(f, e, h, g) {
    if (f > g) {
        return h
    }
    if ((f /= g / 2) < 1) {
        return h / 2 * f * f * f + e
    }
    return h / 2 * ((f -= 2) * f * f + 2) + e
};
bx.Easing.outInCubic = function(f, e, h, g) {
    if (f < g / 2) {
        return bx.Easing.outCubic(f * 2, e, h / 2, g)
    }
    return bx.Easing.inCubic((f * 2) - g, e + h / 2, h / 2, g)
};
bx.Easing.inQuart = function(f, e, h, g) {
    return h * (f /= g) * f * f * f + e
};
bx.Easing.outQuart = function(f, e, h, g) {
    return f > g ? h : -h * ((f = f / g - 1) * f * f * f - 1) + e
};
bx.Easing.inOutQuart = function(f, e, h, g) {
    if (f > g) {
        return h
    }
    if ((f /= g / 2) < 1) {
        return h / 2 * f * f * f * f + e
    }
    return -h / 2 * ((f -= 2) * f * f * f - 2) + e
};
bx.Easing.outInQuart = function(f, e, h, g) {
    if (f < g / 2) {
        return bx.Easing.outQuart(f * 2, e, h / 2, g)
    }
    return bx.Easing.inQuart((f * 2) - g, e + h / 2, h / 2, g)
};
bx.Easing.roundUp = function(i, h, f, k, j, g, e) {
    if (h < j / 2) {
        return bx.Easing[i](h, f, k, j / 2, g, e) || 0.000001
    } else {
        return 1 - bx.Easing[i](h - j / 2, f, k, j / 2, g, e)
    }
};
bx.Easing.wait = function(j, m, k, i, h, e, f, l, g) {
    if (f > 0 && f < 1) {
        if (m < Math.floor(h * f)) {
            return e ? 0.000001 : 0
        } else {
            if (e) {
                return bx.Easing.roundUp(j, Math.max(1, Math.min(Math.floor(m - h * f), Math.ceil(h * (1 - f)))), k, i, Math.ceil(h * (1 - f)))
            } else {
                return bx.Easing[j](Math.min(Math.floor(m - h * f), Math.ceil(h * (1 - f))), k, i, Math.ceil(h * (1 - f)), l, g)
            }
        }
    } else {
        return bx.Easing[j](m, k, i, h, l, g)
    }
};
bx.CPageManager = function(e, c, d) {
    if (bx.inClassing) {
        return
    }
    this.$3P = {};
    this.$2Q = [];
    bx.CPageManager.$N1o = bx.CPageManager.$N1o || 0;
    bx.CPageManager.$N1o++;
    d = d || {};
    d.type = d.type ? d.type | bx.CWnd.TYPE_NO_VIEWPORT : bx.CWnd.TYPE_NO_VIEWPORT;
    d.styles = d.styles || {};
    d.styles.overflow = "hidden";
    bx.CWnd.call(this, e, "bx$PageManager_" + bx.CPageManager.$N1o, "", c || new bx.CPosition({
        type: "overlap",
        coord: {
            top: "0px",
            left: "0px"
        },
        width: "100%",
        height: "100%"
    }), new bx.CMode(), d)
};
bx.$Inherit(bx.CPageManager, bx.CWnd);
bx.CPageManager.prototype.iteratePage = function(d) {
    for (var c in this.$3P) {
        d(this.$3P[c])
    }
};
bx.CPageManager.prototype.add = function(c) {
    this.$3P[c.id] = c
};
bx.CPageManager.prototype.get = function(c) {
    return this.$3P[c] || null
};
bx.CPageManager.prototype.remove = function(c) {
    delete this.$3P[c]
};
bx.CPageManager.prototype.reset = function() {
    bx.PageTransition.abort(this.tag, true);
    for (var c in this.$3P) {
        this.$3P[c].destroy();
        delete this.$3P[c]
    }
    this.$2Q.length = 0
};
bx.CPageManager.prototype.$2U = function(c) {
    if (this.$2Q.length > 1) {
        if (c) {
            this.$2Q.pop();
            while (this.$2Q.length > 0 && this.get(this.$2Q[this.$2Q.length - 1]).dialog) {
                this.$2Q.pop()
            }
            return this.$2Q[this.$2Q.length - 1]
        } else {
            return this.$2Q[this.$2Q.length - 2]
        }
    } else {
        return undefined
    }
};
bx.CPageManager.prototype.$2V = function(c) {
    if (!(this.$2Q.length > 0 && this.$2Q[this.$2Q.length - 1] == c)) {
        this.$2Q.push(c)
    }
    this.$3Q = c
};
bx.CPageManager.prototype.historyPush = bx.CPageManager.prototype.$2V;
bx.CPageManager.prototype.historyPop = function() {
    var c;
    if (this.$2Q.length) {
        c = this.$2Q.pop();
        if (this.$2Q.length) {
            this.$3Q = this.$2Q[this.$2Q.length - 1]
        } else {
            this.$3Q = undefined
        }
    }
    return c
};
bx.CPageManager.prototype.historyGet = function(c) {
    if (this.$2Q.length - 1 - c >= 0) {
        return this.$2Q[this.$2Q.length - 1 - c]
    } else {
        return undefined
    }
};
bx.CPageManager.prototype.historyAdd = function(c, d) {
    if (this.$2Q.length >= c) {
        if (!(this.$2Q.length - c - 1 >= 0 && this.$2Q[this.$2Q.length - c - 1] == d)) {
            this.$2Q.splice(this.$2Q.length - c, 0, d)
        }
        return true
    } else {
        return false
    }
};
bx.CPageManager.prototype.historyReplace = function(d, c) {
    if (this.$2Q.length - 1 - d >= 0) {
        this.$2Q[this.$2Q.length - 1 - d] = c;
        return true
    } else {
        return false
    }
};
bx.CPageManager.prototype.getCurrent = function() {
    if (this.$2Q.length > 0) {
        return this.$2Q[this.$2Q.length - 1]
    } else {
        return undefined
    }
};
bx.CPageManager.prototype.getPrev = function() {
    if (this.$2Q.length > 1) {
        return this.$2Q[this.$2Q.length - 2]
    } else {
        return undefined
    }
};
bx.CPageManager.prototype.canRun = function(g, d, c) {
    if (!(g == 0 || g) || !this.$3P[g]) {
        bx.Trace.log("BLUX", "errorParameter", "id=" + g, "CPageManager.run");
        return
    }
    if (bx.PageTransition && bx.PageTransition.isInTransit(this.get(g).tag.parentNode)) {
        return
    }
    var f;
    if (this.$3Q !== undefined) {
        f = this.get(this.$3Q)
    }
    var e = this.get(g);
    if (c == g && !(f && f.dialog)) {
        bx.Trace.log("BLUX", "warning", "CPage=" + g + " run is ignored by duplication", "pages.run");
        return false
    }
    return true
};
bx.CPageManager.prototype.run = function(f, q, k) {
    q = q || {};
    if (q.transit && h && !bx.HCL.DV.supportCSS3()) {
        bx.Trace.log("BLUX", "warning", "This browser does not support CSS3. Cannot run transit=" + q.transit, "CPageManager.run");
        q.transit = null
    }
    if (!this.canRun(f, q, k)) {
        return
    }
    var g = false;
    var n = this;

    function p() {
        o.execTransitStart()
    }

    function d(r) {
        if (g) {
            bx.UX.$2R()
        }
    }

    function c(r) {
        h.execShut(o)
    }

    function m(r) {
        if (h) {
            h.execTransitOutEnd(o, r)
        }
        o.execTransitEnd(r);
        if (q.postRun) {
            q.postRun()
        }
    }

    function j() {
        if (!o.initialized) {
            o.execInit();
            o.initialized = true
        }
        o.execRun(l);
        o.executed = true
    }

    function e() {
        var r;
        if (!q.transitDuration || q.transitDuration < 16) {
            q.transit = "none"
        }
        if (h) {
            j();
            h.execPreShut(o);
            o.tag.onBxPageTransitionStart = p;
            o.tag.onBxPageTransitionEnd = d;
            h.tag.onBxPageTransitionStart = undefined;
            h.tag.onBxPageTransitionEnd = c;
            o.tag.parentNode.onBxPageTransitionEnd = m;
            if (!bx.PageTransition(o.tag.parentNode, o.tag, h.tag, q.transit, q.transitDuration, q.transitTiming ? {
                    timing: q.transitTiming
                } : undefined)) {
                p();
                d();
                c();
                m()
            }
        } else {
            j();
            if (g) {
                bx.UX.$2R()
            }
            o.execTransitStart();
            o.execTransitEnd();
            if (q.postRun) {
                q.postRun()
            }
        }
    }
    var i;
    if (this.$3Q !== undefined) {
        i = this.get(this.$3Q)
    }
    var o = this.get(f);
    if (k == f && !(i && i.dialog)) {
        bx.Trace.log("BLUX", "warning", "CPage=" + f + " run is ignored by duplication", "pages.run");
        return
    }
    if (g) {
        bx.UX.$3N(true)
    }
    var h;
    if (!(k == 0 || k)) {
        this.$2V(f);
        h = this.$2U() !== undefined ? this.get(this.$2U()) : undefined
    } else {
        h = this.get(k)
    }
    var l = {
        firstRun: o.executed ? false : true,
        fromDialog: (h ? h.dialog : false),
        data: (q.data ? q.data : undefined)
    };
    if (q.preRun) {
        q.preRun()
    }
    e()
};
bx.CPageManager.prototype.canPrev = function(d) {
    var c;
    var e = this.getCurrent();
    if ((c = this.$2U()) !== null) {
        return this.canRun(c, d, e)
    }
    return false
};
bx.CPageManager.prototype.prev = function(d) {
    var c;
    var e = this.getCurrent();
    if (e !== undefined && bx.PageTransition && bx.PageTransition.isInTransit(this.get(e).tag.parentNode)) {
        return false
    }
    if ((c = this.$2U(true)) !== undefined) {
        this.run(c, d, e);
        return true
    }
    return false
};
bx.CPage2 = function(f, g, c, e, d) {
    if (bx.inClassing) {
        return
    }
    this.o = d || {};
    e = e || {};
    if (!e.classNameWnd && e.cssFrame === undefined) {
        e.cssFrame = ""
    }
    if (!e.className && e.cssVP === undefined) {
        e.cssVP = ""
    }
    e.type = e.type ? e.type | bx.CWnd.TYPE_NO_VIEWPORT : bx.CWnd.TYPE_NO_VIEWPORT;
    e.styles = e.styles || {};
    e.styles.overflow = "hidden";
    this.id = g;
    this.dialog = this.o.dialog || false;
    this.initialized = false;
    bx.CPage2.$5x9 = bx.CPage2.$5x9 || 0;
    bx.CPage2.$5x9++;
    bx.CWnd.call(this, f, "bx$Page_" + bx.CPage2.$5x9, "", c || new bx.CPosition({
        type: "overlap",
        coord: {
            top: "0px",
            left: "0px"
        },
        width: "100%",
        height: "100%"
    }), new bx.CMode(), e);
    f.add(this)
};
bx.$Inherit(bx.CPage2, bx.CWnd);
bx.CPage2.prototype.execInit = function() {};
bx.CPage2.prototype.execRun = function(c) {
    this.show()
};
bx.CPage2.prototype.execShut = function(c) {
    this.hide()
};
bx.CPage2.prototype.execPreShut = function(c) {};
bx.CPage2.prototype.execTransitEnd = function() {};
bx.CPage2.prototype.execTransitStart = function() {};
bx.CPage2.prototype.execTransitOutEnd = function(c) {};
bx.CGesture = function(q, p, d) {
    if (bx.inClassing) {
        return
    }
    if (!q || !p) {
        bx.Trace.log("BLUX", "error", "Parameter error; tag=" + q + ", onEvent=" + p, "CGesture()");
        return
    }
    bx.CGesture.index = bx.CGesture.index || 0;
    bx.CGesture.index++;
    this.$N2Z = bx.CGesture.index;
    this.tag = q;
    this.onEvent = p;
    this.$N2y = d;
    this.$N2K = false;
    var m = this;
    var l = false;
    var o = {
        state: 0,
        evStart: null
    };
    bx.CGesture.lastTouch = 0;

    function f(r) {
        if (!r) {
            r = window.event
        }
        if (!l) {
            if (r.timeStamp - bx.CGesture.lastTouch > 100) {
                m.$DM(r, true)
            }
        }
    }

    function c(r) {
        if (!r) {
            r = window.event
        }
        m.$DM(r)
    }

    function n(r) {
        if (!r) {
            r = window.event
        }
        m.$DM(r)
    }

    function k(r) {
        if (r.targetTouches.length == 2) {
            bx.Event.preventDefault(r);
            if (o.state == 1) {
                m.onEvent(m.tag, bx.CGesture.PINCH_START, o.cx, o.cy, o.sdx, o.sdy, r);
                o.state = 2;
                o.evStart = r
            }
            o.cx = (r.targetTouches[0].clientX + r.targetTouches[1].clientX) / 2;
            o.cy = (r.targetTouches[0].clientY + r.targetTouches[1].clientY) / 2;
            o.dx = Math.abs(r.targetTouches[1].clientX - r.targetTouches[0].clientX);
            o.dy = Math.abs(r.targetTouches[1].clientY - r.targetTouches[0].clientY);
            m.onEvent(m.tag, bx.CGesture.PINCH_MOVE, o.cx, o.cy, o.dx, o.dy, r)
        }
    }

    function i(r) {
        if (o.state == 2) {
            m.onEvent(m.tag, bx.CGesture.PINCH_END, o.sdx, o.sdy, o.dx, o.dy, o.evStart)
        }
        o.state = 0
    }

    function e(r) {
        if (!r) {
            r = window.event
        }
        if (l) {
            if (!r.targetTouches || (r.targetTouches && r.targetTouches.length == 1)) {
                if (r.type == "touchmove") {
                    if (j === undefined || r.targetTouches[0].identifier == j) {
                        m.$DM(r);
                        bx.CGesture.lastTouch = r.timeStamp
                    }
                }
                if (r.type == "mousemove") {
                    if (r.buttons === 0) {
                        m.onEvent(m.tag, bx.CGesture.POINTER_END, 0, 0, 0, 0, r);
                        l = false;
                        return
                    }
                    if (r.timeStamp - bx.CGesture.lastTouch > 100) {
                        m.$DM(r)
                    }
                }
            }
        }
    }

    function h(r) {
        if (!r) {
            r = window.event
        }
        if (l) {
            if (r.type == "touchend" || r.type == "touchcancel") {
                if (j === undefined || r.changedTouches[0].identifier == j) {
                    m.$DM(r);
                    bx.CGesture.lastTouch = r.timeStamp;
                    l = false;
                    j = undefined
                }
            }
            if (r.type == "mouseup") {
                if (r.timeStamp - bx.CGesture.lastTouch > 100) {
                    m.$DM(r)
                }
                l = false
            }
        }
    }
    var j;

    function g(r) {
        if (!r) {
            r = window.event
        }
        if (l) {
            if (r.type == "touchstart") {
                if (m.$N2y.pinchEvent) {
                    if (r.touches.length > 2) {
                        return
                    }
                } else {
                    if (r.touches.length > 1 && (r.targetTouches && r.targetTouches[0].identifier !== undefined)) {
                        return
                    } else {
                        m.onEvent(m.tag, bx.CGesture.POINTER_END, 0, 0, 0, 0, r);
                        l = false;
                        j = undefined;
                        return
                    }
                }
            }
        }
        if (m.$N2y.pinchEvent && r.targetTouches && r.targetTouches.length == 2) {
            o.state = 1;
            o.cx = (r.targetTouches[0].clientX + r.targetTouches[1].clientX) / 2;
            o.cy = (r.targetTouches[0].clientY + r.targetTouches[1].clientY) / 2;
            o.sdx = Math.abs(r.targetTouches[1].clientX - r.targetTouches[0].clientX);
            o.sdy = Math.abs(r.targetTouches[1].clientY - r.targetTouches[0].clientY);
            bx.CGesture.$N0e(m, r, k, i);
            l = true
        } else {
            if (r.type == "touchstart") {
                bx.CGesture.$N0e(m, r, e, h);
                m.$DM(r);
                bx.CGesture.lastTouch = r.timeStamp;
                l = true;
                j = r.targetTouches[0].identifier
            }
            if (r.type == "mousedown") {
                if (r.timeStamp - bx.CGesture.lastTouch > 100) {
                    if (bx.CGesture.$N0e(m, r, e, h)) {
                        if (bx.HCL.DV.isIE() && document.activeElement && document.activeElement.tagName && (!document.documentElement.scrollTop && !document.documentElement.scrollLeft)) {
                            if (document.activeElement.tagName.toLowerCase() == "input" || document.activeElement.tagName.toLowerCase() == "textarea" || document.activeElement.tagName.toLowerCase() == "select") {
                                document.activeElement.blur();
                                if (!bx.CGesture._isProxyTag) {
                                    bx.CGesture._isProxyTag = document.body.$TAG("input", {
                                        type: "number",
                                        readonly: "readonly",
                                        style: "position:absolute;left:-99999px;top:-99999px;width:1;heigth:1;opacity:0"
                                    })
                                }
                                bx.CGesture._isProxyTag.focus()
                            }
                        }
                        m.$DM(r);
                        l = true
                    }
                }
            }
        }
    }
    if (bx.HCL.DV.hasTouchEvent() || bx.HCL.DV.hasTouchAndMouseEvent()) {
        if (bx.CGesture.supportEventPassive()) {
            bx.Event.add(this.tag, "touchstart", g, {
                capture: false,
                once: false,
                passive: true
            })
        } else {
            bx.Event.add(this.tag, "touchstart", g, false)
        }
    }
    if (!bx.HCL.DV.hasTouchEvent()) {
        bx.Event.add(this.tag, "mousedown", g, false);
        bx.Event.add(this.tag, "mousemove", f, false);
        bx.Event.add(this.tag, "mouseover", f, false);
        bx.Event.add(this.tag, "mouseout", f, false);
        bx.Event.add(this.tag, "dblclick", c, false)
    }
    bx.Event.add(this.tag, "click", n, false)
};
bx.CGesture.POINTER_START = 1;
bx.CGesture.POINTER_END = 2;
bx.CGesture.POINTER_DRAG = 3;
bx.CGesture.POINTER_MOVE = 4;
bx.CGesture.POINTER_TAP = 10;
bx.CGesture.POINTER_HOLD = 11;
bx.CGesture.POINTER_DBLTAP = 12;
bx.CGesture.POINTER_FLICK_LEFT = 13;
bx.CGesture.POINTER_FLICK_RIGHT = 14;
bx.CGesture.POINTER_FLICK_UP = 15;
bx.CGesture.POINTER_FLICK_DOWN = 16;
bx.CGesture.PINCH_START = 30;
bx.CGesture.PINCH_END = 31;
bx.CGesture.PINCH_MOVE = 32;
bx.CGesture.SYSTEM_CLICK = 25;
bx.CGesture.MOUSE_RIGHTCLICK = 20;
bx.CGesture.MOUSE_DBLCLICK = 21;
bx.CGesture.MOUSE_OVER = 22;
bx.CGesture.MOUSE_OUT = 23;
bx.CGesture.MOUSE_RIGHT_UP = 24;
bx.CGesture.OFFSET_TAP = 5;
bx.CGesture.OFFSET_DBLTAP = 9;
bx.CGesture.$N2z = 800;
bx.CGesture.$N2A = 450;
bx.CGesture.TIME_DBLTAP = bx.CGesture.$N2A;
bx.CGesture.$N2B = 550;
bx.CGesture.supportEventPassive = function() {
    var c = false;
    if (Object.defineProperty && document.addEventListener) {
        try {
            addEventListener("test", null, Object.defineProperty({}, "passive", {
                get: function() {
                    c = true
                }
            }))
        } catch (d) {}
    }
    return c
};
bx.CGesture.$N0e = function(g, c, f, l) {
    var h;
    var d;
    if (g.$N2y && g.$N2y.dragContainer) {
        d = g.$N2y.dragContainer
    } else {
        d = document
    }
    var e;
    if (c.targetTouches && c.targetTouches[0]) {
        e = c.targetTouches[0].identifier
    }

    function j() {
        g.$N2K = true
    }

    function i(m) {
        if (!m) {
            m = window.event
        }
        if (l) {
            l(m)
        }
        if (m.changedTouches && m.changedTouches[0] && m.changedTouches[0].identifier !== undefined && e !== undefined) {
            if (e != m.changedTouches[0].identifier) {
                return
            }
        }
        if (bx.HCL.DV.hasTouchEvent() || bx.HCL.DV.hasTouchAndMouseEvent()) {
            if (f) {
                bx.Event.remove(d, "touchmove", f, false)
            }
            bx.Event.remove(d, "touchend", i, false);
            bx.Event.remove(d, "touchcancel", i, false)
        }
        if (!bx.HCL.DV.hasTouchEvent()) {
            if (f) {
                bx.Event.remove(d, "mousemove", f, false)
            }
            bx.Event.remove(d, "mouseup", i, false);
            bx.Event.remove(h, "scroll", j, false);
            g.$N2K = false;
            if (bx.HCL.DV.getBrowserType() == "msie" && document.releaseCapture) {
                document.releaseCapture()
            }
        }
    }
    if (bx.HCL.DV.hasTouchEvent() || bx.HCL.DV.hasTouchAndMouseEvent()) {
        if (f) {
            bx.Event.add(d, "touchmove", f, false)
        }
        bx.Event.add(d, "touchend", i, false);
        bx.Event.add(d, "touchcancel", i, false)
    }
    if (!bx.HCL.DV.hasTouchEvent()) {
        if (bx.CGesture.preventDrag) {
            if (bx.CGesture.preventDrag(c)) {
                return false
            }
        } else {
            if (bx.HCL.DV.isIE()) {
                var k = bx.Event.getElement(c);
                if (k.tagName && ((k.tagName.toLowerCase() == "input" && k.type != "button") || k.tagName.toLowerCase() == "textarea" || k.tagName.toLowerCase() == "select")) {
                    if (k.getAttribute("readonly") === null && k.getAttribute("disabled") === null) {
                        return false
                    }
                } else {
                    if (k.contentEditable == "true") {
                        return false
                    }
                }
            }
        }
        if (f) {
            bx.Event.add(d, "mousemove", f, false)
        }
        bx.Event.add(d, "mouseup", i, false);
        h = bx.Event.getElement(c);
        g.$N2K = false;
        bx.Event.add(h, "scroll", j, false);
        if (bx.HCL.DV.isIE() && !(bx.HCL.DV.isIE() > 9 && bx.UX && (bx.UX.type & bx.UX.SYS_SELECTABLE))) {
            if (h.setCapture) {
                h.setCapture(true)
            }
        }
    }
    return true
};
bx.CGesture.prototype.$DM = function(n, f) {
    if (!n.timeStamp) {
        n.timeStamp = new Date().getTime()
    }
    var e, d;
    if (n.targetTouches && n.targetTouches.length) {
        var e = n.targetTouches[0].clientX;
        var d = n.targetTouches[0].clientY;
        var c = n.targetTouches[0].clientX - bx.HCL.getElementX(this.tag);
        var p = n.targetTouches[0].clientY - bx.HCL.getElementY(this.tag)
    } else {
        var e = n.clientX;
        var d = n.clientY;
        var c = n.clientX - bx.HCL.getScreenX(this.tag);
        var p = n.clientY - bx.HCL.getScreenY(this.tag)
    }
    var l;

    document.getElementById("test").innerHTML =  "<span style='color: red;'>" + n.type + "</span>"; 

    switch (n.type) {
        case "mousedown":
            if (!bx.Event.isLeftButton(n)) {
                l = bx.CGesture.MOUSE_RIGHTCLICK;
                this.$N2C = true
            } else {
                l = bx.CGesture.POINTER_START;
                this.$N2C = false
            }
            break;
        case "touchend":
        case "touchcancel":
            c = this.$N2D;
            p = this.$N2E;
            e = this.$N2F;
            d = this.$N2G;
        case "mouseup":
            if (this.$N2C) {
                l = bx.CGesture.MOUSE_RIGHT_UP
            } else {
                l = bx.CGesture.POINTER_END
            }
            this.$N2C = false;
            break;
        case "touchmove":
            this.$N2D = c;
            this.$N2E = p;
            this.$N2F = e;
            this.$N2G = d;
        case "mousemove":
            if (!this.$N2C) {
                l = f ? bx.CGesture.POINTER_MOVE : bx.CGesture.POINTER_DRAG
            }
            break;
        case "touchstart":
            l = bx.CGesture.POINTER_START;
            break;
        case "dblclick":
            l = bx.CGesture.MOUSE_DBLCLICK;
            break;
        case "mouseover":
            l = bx.CGesture.MOUSE_OVER;
            break;
        case "mouseout":
            l = bx.CGesture.MOUSE_OUT;
            break;
        case "click":
            l = bx.CGesture.POINTER_START;
            break
    }
    this.onEvent(this.tag, l, c, p, e, d, n);
    if (l == bx.CGesture.POINTER_START) {
        this.$N0U = c;
        this.$N0V = p;
        this.$N2H = e;
        this.$N2I = d;
        this.$N1u = n.timeStamp;
        this.$N0W = true
    } else {
        if (l == bx.CGesture.POINTER_DRAG && this.$N0W) {
            if (Math.abs(c - this.$N0U) > bx.CGesture.OFFSET_TAP || Math.abs(p - this.$N0V) > bx.CGesture.OFFSET_TAP) {
                this.$N0W = false;
                var m = bx.Event.getElement(n);
                if (m.tagName && m.tagName.toLowerCase() == "select") {
                    m.blur()
                }
            }
        }
    }
    if (this.$N0W && l == bx.CGesture.POINTER_END && (this.$N1s == bx.CGesture.POINTER_DRAG || this.$N1s == bx.CGesture.POINTER_START)) {
        if (!(this.$N2y && this.$N2y.noLongholdEvent) && this.$N1u && n.timeStamp - this.$N1u > bx.CGesture.$N2z) {
            if (!this.$N2K) {
                this.onEvent(this.tag, bx.CGesture.POINTER_HOLD, this.$N0U, this.$N0V, this.$N2H, this.$N2I, n)
            }
            if (this.$N1v) {
                this.$N1v.use = false
            }
        } else {
            this.$N1v = this.$N1v || {
                use: false
            };
            if (this.$N2y && this.$N2y.noDelayedEvent) {
                var o = false;
                if (!(this.$N2J && (n.timeStamp - this.$N2J) < bx.CGesture.$N2A)) {
                    if (!this.$N2K) {
                        this.onEvent(this.tag, bx.CGesture.POINTER_TAP, this.$N0U, this.$N0V, this.$N2H, this.$N2I, n)
                    }
                    this.$N2J = n.timeStamp
                }
                this.$N1v.use = false
            } else {
                var h = true;
                if (this.$N1v.use) {
                    if (Math.abs(this.$N1v.x - this.$N0U) <= bx.CGesture.OFFSET_DBLTAP && Math.abs(this.$N1v.y - this.$N0V) <= bx.CGesture.OFFSET_DBLTAP) {
                        this.onEvent(this.tag, bx.CGesture.POINTER_DBLTAP, this.$N1v.x, this.$N1v.y, this.$N1v.cx, this.$N1v.cy, this.$N1v.ev);
                        this.$N1v.use = false;
                        h = false
                    } else {
                        this.onEvent(this.tag, bx.CGesture.POINTER_TAP, this.$N1v.x, this.$N1v.y, this.$N1v.cx, this.$N1v.cy, this.$N1v.ev);
                        this.$N1v.use = false
                    }
                }
                if (h) {
                    this.$N1v.use = true;
                    this.$N1v.x = this.$N0U;
                    this.$N1v.y = this.$N0V;
                    this.$N1v.cx = this.$N2H;
                    this.$N1v.cy = this.$N2I;
                    this.$N1v.time = n.timeStamp;
                    this.$N1v.ev = n;
                    var i = this;

                    function g() {
                        if (i.$N1v.use) {
                            i.onEvent(i.tag, bx.CGesture.POINTER_TAP, i.$N1v.x, i.$N1v.y, i.$N1v.cx, i.$N1v.cy, i.$N1v.ev);
                            i.$N1v.use = false
                        }
                    }
                    setTimeout(g, bx.CGesture.$N2A)
                }
            }
        }
    } else {
        if (!this.$N0W && l == bx.CGesture.POINTER_END && this.$N1s == bx.CGesture.POINTER_DRAG) {
            if (this.$N1v && this.$N1v.use) {
                this.onEvent(this.tag, bx.CGesture.POINTER_TAP, this.$N1v.x, this.$N1v.y, this.$N1v.cx, this.$N1v.cy, this.$N1v.ev);
                this.$N1v.use = false
            } else {
                var k;
                var j = Math.min(bx.HCL.getViewportWidth(), bx.HCL.getViewportHeight()) * 0.1;
                if (this.$N1u && (n.timeStamp - this.$N1u) < bx.CGesture.$N2B) {
                    if (Math.abs(c - this.$N0U) > j && Math.abs(p - this.$N0V) < Math.abs(c - this.$N0U) * 0.5) {
                        if (c > this.$N0U) {
                            k = bx.CGesture.POINTER_FLICK_RIGHT
                        } else {
                            k = bx.CGesture.POINTER_FLICK_LEFT
                        }
                    } else {
                        if (Math.abs(p - this.$N0V) > j && Math.abs(c - this.$N0U) < Math.abs(p - this.$N0V) * 0.5) {
                            if (p > this.$N0V) {
                                k = bx.CGesture.POINTER_FLICK_DOWN
                            } else {
                                k = bx.CGesture.POINTER_FLICK_UP
                            }
                        }
                    }
                    if (k) {
                        this.onEvent(this.tag, k, this.$N0U, this.$N0V, this.$N2H, this.$N2I, n)
                    }
                }
            }
        }
    }
    this.$N1s = l
};
if (!window.bx.cCanvasObject) {
    window.bx.cCanvasObject = function() {}
}
bx.cCanvasObject.applyLineDash = function(c, e) {
    if (c.setLineDash) {
        if (e.lineDash && Array.isArray(e.lineDash)) {
            c.$N0T = c.$N0T || [];
            c.$N0T.length = e.lineDash.length;
            for (var d = 0; d < e.lineDash.length; d++) {
                c.$N0T[d] = e.lineDash[d] + (e.lineWidth > 1 ? e.lineWidth - 1 : 0)
            }
            c.$5xa = c.$N0T;
            c.setLineDash(c.$N0T)
        } else {
            bx.cCanvasObject.clearLineDash(c)
        }
    }
};
bx.cCanvasObject.clearLineDash = function(c) {
    if (c.setLineDash) {
        c.$5xb = c.$5xb || [];
        c.setLineDash(c.$5xb);
        c.$5xa = null
    }
};
if (!window.bx.CCanvasWnd) {
    window.bx.CCanvasWnd = function() {}
}
bx.CCanvasWnd.radToDegree = function(c) {
    return c * (180 / Math.PI)
};
bx.CCanvasWnd.degreeToRad = function(c) {
    return c * (Math.PI / 180)
};
bx.CCanvasWnd.getAngleDelta = function(h, f, d, c) {
    var e = h * d + f * c;
    var g = h * c - f * d;
    return Math.atan2(g, e)
};
bx.CCanvasWnd.rotateX = function(d, g, e, c, f) {
    f = f || 0;
    c = c || 0;
    return (d - c) * Math.cos(e) - (g - f) * Math.sin(e) + c
};
bx.CCanvasWnd.rotateY = function(d, g, e, c, f) {
    f = f || 0;
    c = c || 0;
    return (d - c) * Math.sin(e) + (g - f) * Math.cos(e) + f
};
bx.CCanvasWnd.$N1K = function(d) {
    if (!(typeof d == "string" || d instanceof String)) {
        return null
    }
    if (d.length && d.charAt(d.length - 1) == "%") {
        var c = parseFloat(d);
        if (isNaN(c)) {
            return NaN
        }
        if (c < 0) {
            return 0
        }
        if (c > 100) {
            return 1
        }
        return c / 100
    }
    return null
};
bx.CCanvasWnd.getAreaOfObjects = function(p, q, o, n) {
    var g, f, d, c, m;
    var k, h, l, e;
    q = q || {};
    if (p && p.length) {
        for (var j = 0; j < p.length; j++) {
            if (n || (!(p[j].type & bx.CCanvasWnd.OBJ_CONTROL) && p[j].isReady())) {
                m = p[j];
                if (o && m.getAngle()) {
                    k = m.rotation.enclosingX;
                    h = m.rotation.enclosingY;
                    l = m.rotation.enclosingW;
                    e = m.rotation.enclosingH
                } else {
                    k = m.position.x;
                    h = m.position.y;
                    l = m.shape.w;
                    e = m.shape.h
                }
                if (g === undefined || g > k) {
                    g = k
                }
                if (f === undefined || f > h) {
                    f = h
                }
                if (d === undefined || d < k + l) {
                    d = k + l
                }
                if (c === undefined || c < h + e) {
                    c = h + e
                }
            }
        }
        q.x1 = g;
        q.y1 = f;
        q.x2 = d;
        q.y2 = c;
        q.valid = true;
        return q
    }
    q.valid = false;
    q.x1 = q.x2 = q.y1 = q.y2 = 0;
    return q
};
bx.CCanvasWnd.drawImage = function(g, c, k, j, l, f, m, e) {
    var i = c.naturalWidth || c.width || c.ieWidth;
    var d = c.naturalHeight || c.height || c.ieHeight;
    if (!i || !d) {
        return
    }
    if (m || e) {
        g.save();
        this.$HuI = (l !== undefined ? l : i);
        this.$HuJ = (f !== undefined ? f : d);
        if (m) {
            g.translate(k + this.$HuI / 2, j + this.$HuJ / 2);
            g.rotate(m * Math.PI / 180);
            g.drawImage(c, (-this.$HuI / 2) | 0, (-this.$HuJ / 2) | 0, this.$HuI | 0, this.$HuJ | 0)
        } else {
            if (e) {
                if (e > 0 && e < 4) {
                    if ((e & bx.CCanvasWnd.REFECT_X) && (e & bx.CCanvasWnd.REFECT_Y)) {
                        e = 180
                    } else {
                        if (e & bx.CCanvasWnd.REFECT_Y) {
                            e = 270
                        } else {
                            if (e & bx.CCanvasWnd.REFECT_X) {
                                e = 90
                            }
                        }
                    }
                }
                if (e == 90) {
                    g.translate(k + this.$HuI / 2, j + this.$HuJ / 2);
                    g.scale(-1, 1)
                } else {
                    if (e == 180) {
                        g.translate(k + this.$HuI / 2, j + this.$HuJ / 2);
                        g.scale(-1, -1)
                    } else {
                        if (e == 270) {
                            g.translate(k + this.$HuI / 2, j + this.$HuJ / 2);
                            g.scale(1, -1)
                        } else {
                            g.translate(k + this.$HuI / 2, j + this.$HuJ / 2)
                        }
                    }
                }
                g.drawImage(c, (-this.$HuI / 2) || 0, (-this.$HuJ / 2) || 0, this.$HuI || 0, this.$HuJ || 0)
            }
        }
        g.restore()
    } else {
        if (l !== undefined && f !== undefined) {
            g.drawImage(c, k | 0, j | 0, l | 0, f | 0)
        } else {
            g.drawImage(c, k | 0, j | 0)
        }
    }
};
bx.CCanvasWnd.FTW_SCALE = 1;
bx.CCanvasWnd.FTW_SPACING = 2;
bx.CCanvasWnd.FTW_SPACING_EXPAND = 3;
bx.CCanvasWnd.FTW_SPACING_SHRINK = 4;
bx.CCanvasWnd.FTW_MIXED = 5;
bx.CCanvasWnd.drawText = function(L, y, w, z, F, C, f, o, K, Q, l, B, O, e, s, N, M, H, p, I, n, D, j, m) {
    function u(W, T, X) {
        if (L.$5xa) {
            L.$5xb = L.$5xb || [];
            L.setLineDash(L.$5xb)
        }
        if (!D) {
            L.strokeText(W, T, X)
        } else {
            var S = 0,
                R = W.length,
                V = 0,
                U;
            if (l == "center") {
                T = T + (-(L.measureText(W).width + (D * (W.length - 1)))) / 2;
                for (; S < R; S++) {
                    U = L.measureText(W[S]).width;
                    L.strokeText(W[S], T + V + U / 2, X);
                    T = T + U;
                    V = V + D
                }
            } else {
                if (l == "right") {
                    T = T - (L.measureText(W).width + D * W.length);
                    for (; S < R; S++) {
                        U = L.measureText(W[S]).width;
                        T = T + U;
                        V = V + D;
                        L.strokeText(W[S], T + V, X)
                    }
                } else {
                    for (; S < R; S++) {
                        L.strokeText(W[S], T + V, X);
                        T = T + L.measureText(W[S]).width;
                        V = V + D
                    }
                }
            }
        }
        if (L.$5xa) {
            L.setLineDash(L.$5xa)
        }
    }

    function t(R) {
        if (!R || R.length == 0) {
            return 0
        }
        return L.measureText(R).width + (R.length) * D
    }

    function A(W, T, X) {
        if (!D) {
            L.fillText(W, T, X)
        } else {
            var S = 0,
                R = W.length,
                V = 0,
                U;
            if (l == "center") {
                T = T + (-(L.measureText(W).width + D * (W.length - 1))) / 2;
                for (; S < R; S++) {
                    U = L.measureText(W[S]).width;
                    L.fillText(W[S], T + V + U / 2, X);
                    T = T + U;
                    V = V + D
                }
            } else {
                if (l == "right") {
                    T = T - (L.measureText(W).width + D * W.length);
                    for (; S < R; S++) {
                        U = L.measureText(W[S]).width;
                        T = T + U;
                        V = V + D;
                        L.fillText(W[S], T + V, X)
                    }
                } else {
                    for (; S < R; S++) {
                        L.fillText(W[S], T + V, X);
                        T = T + L.measureText(W[S]).width;
                        V = V + D
                    }
                }
            }
        }
    }
    C += "";
    L.canvas.style.fontKerning = "normal";
    if (!C || !C.length) {
        return
    }
    L.save();
    var P = (e ? "bold " : "") + (s ? "italic " : "") + o + (Q ? " '" + Q + "'" : "");
    var G;
    if (l == "justify") {
        l = "left";
        G = f ? true : false
    } else {
        G = false
    }
    o = parseInt(o);
    D = D ? D : 0;
    if (D < -o) {
        D = -o
    }
    L.font = P;
    if (K) {
        L.fillStyle = K
    }
    if (H && p) {
        L.strokeStyle = H
    }
    if (p && p) {
        L.lineWidth = p
    }
    var i, h;
    var d = O ? Math.min(O, z / 2) : 0;
    var c = O ? Math.min(O, F / 2) : 0;
    L.beginPath();
    if (M) {
        L.rect(y + d, w + c, z - d * 2, F - c * 2);
        L.clip()
    }
    if (!f && !!j) {
        var g = y;
        var J = l
    }
    l = l || "center";
    m = m || 0;
    m = m > 0 ? m : 0;
    if (l == "center") {
        m = Math.round(o * m / 2);
        i = y + z / 2
    } else {
        if (l == "right") {
            m = Math.round(o * m);
            i = y + z - d
        } else {
            m = Math.round(o * m);
            i = y + d
        }
    }
    L.textAlign = l;

    function q(ag, S) {
        var ai = [],
            X = [],
            W = [],
            Y = [];

        function V(an, am, ao, al) {
            ai.push(an);
            if (al) {
                Y[ai.length - 1] = true
            }
            X.push(am);
            W.push(ao)
        }
        r(ag, S, V);
        var U, aa, Z, ak, ah = 0;
        var af, ae, ad;
        if (H && p) {
            if (L.$5xa) {
                L.$5xb = L.$5xb || [];
                L.setLineDash(L.$5xb)
            }
            ah = p
        }
        for (af = 0; af < ai.length; af++) {
            if (Y[af]) {
                if (ah > 0) {
                    u(ai[af], X[af], W[af])
                }
                A(ai[af], X[af], W[af]);
                if (ah < 0) {
                    u(ai[af], X[af], W[af])
                }
                if (N) {
                    bx.CCanvasWnd.drawTextUnderline(L, ai[af], X[af], W[af], K, o, l, B, D)
                }
                continue
            }
            if (!ai[af]) {
                continue
            }
            ai[af] = ai[af].replace(/\s+$/, "");
            var aj = ai[af].split(/\s/);
            aa = [];
            var ac, ab;
            for (ac = 0, ab = 0; ac < aj.length; ac++) {
                if (aa[ab] === undefined) {
                    aa[ab] = ""
                }
                if (aj[ac] == "") {
                    aa[ab] += " "
                } else {
                    aa[ab] += aj[ac];
                    ab++
                }
            }
            if (!aa || !aa.length) {
                continue
            }
            if (af == 0) {
                U = ag - m
            } else {
                U = ag
            }
            ak = 0;
            var R = aa.length - 1;
            for (ae = 0; ae < aa.length; ae++) {
                ak += (L.measureText(aa[ae].trim()).width + D * aa[ae].length);
                for (ad = 0; ad < aa[ae].length; ad++) {
                    if (/\s/.test(aa[ae][ad])) {
                        R++;
                        ak -= D
                    }
                }
            }
            if (R == 0) {
                R = 1
            }
            Z = (U - ak) / R;
            var T = X[af];
            for (ae = 0; ae < aa.length; ae++) {
                for (ad = 0; ad < aa[ae].length; ad++) {
                    if (/\s/.test(aa[ae][ad])) {
                        T += Z;
                        continue
                    } else {
                        if (ah > 0) {
                            L.strokeText(aa[ae][ad], T, W[af])
                        }
                        L.fillText(aa[ae][ad], T, W[af]);
                        if (ah < 0) {
                            L.strokeText(aa[ae][ad], T, W[af])
                        }
                        T += (L.measureText(aa[ae][ad]).width + D)
                    }
                }
                T += Z;
                if (N) {
                    bx.CCanvasWnd.drawTextUnderline(L, null, X[af], W[af], K, o, l, B, D, U)
                }
            }
        }
    }
    if (f) {
        var k = 1.2;
        if (bx.CCanvasWnd.fonts && bx.CCanvasWnd.fonts[Q] && bx.CCanvasWnd.fonts[Q].height !== undefined) {
            k = bx.CCanvasWnd.fonts[Q].height
        }
        n = Math.floor(o * k) + (n ? n : 0);
        if (n < 0) {
            n = 0
        }
        if (G) {
            q(z - d * 2, n)
        } else {
            r(z - d * 2, n, A)
        }
    } else {
        if (Math.floor(o * 1.4) > (F - O)) {
            B = "middle"
        }
        if (B == "top") {
            h = w + c;
            L.textBaseline = "top"
        } else {
            if (B == "bottom") {
                h = w + F - c;
                L.textBaseline = "ideographic"
            } else {
                h = w + F / 2;
                L.textBaseline = "middle"
            }
        }
        if (!!j) {
            E(C, i, h)
        } else {
            if (H && p && p > 0) {
                u(C, i, h)
            }
            v(C, i, h);
            if (H && p && p < 0) {
                u(C, i, h)
            }
            if (N) {
                bx.CCanvasWnd.drawTextUnderline(L, C, i, h, K, o, l, B, D)
            }
        }
    }
    L.restore();

    function E(Z, X, W) {
        var Y = 0,
            V = Z.length,
            S = 0,
            R;
        var T = t(Z);
        switch (j) {
            case bx.CCanvasWnd.FTW_SCALE:
                if (T > z) {
                    T = z / T;
                    X = X / T;
                    L.scale(T, 1)
                }
                break;
            case bx.CCanvasWnd.FTW_SPACING:
                L.textAlign = "left";
                l = "left";
                X = g + d;
                if (V > 1) {
                    D = (D + (z - T - 1) / (V - 1))
                }
                if (H && p && p > 0) {
                    u(Z, X, W)
                }
                for (; Y < V; Y++) {
                    L.fillText(Z[Y], X + S, W);
                    X = X + L.measureText(Z[Y]).width;
                    S = S + D
                }
                if (N) {
                    bx.CCanvasWnd.drawTextUnderline(L, Z, g + d, W, K, o, "left", B, D)
                }
                return;
            case bx.CCanvasWnd.FTW_SPACING_EXPAND:
            case bx.CCanvasWnd.FTW_SPACING_SHRINK:
                if ((j === bx.CCanvasWnd.FTW_SPACING_EXPAND && T < z) || (j === bx.CCanvasWnd.FTW_SPACING_SHRINK && T > z)) {
                    l = "left";
                    L.textAlign = "left";
                    X = g + d;
                    if (V > 1) {
                        D = (D + (z - T - 1) / (V - 1))
                    }
                    if (H && p && p > 0) {
                        u(Z, X, W)
                    }
                    for (; Y < V; Y++) {
                        L.fillText(Z[Y], X + S, W);
                        X = X + L.measureText(Z[Y]).width;
                        S = S + D
                    }
                    if (N) {
                        bx.CCanvasWnd.drawTextUnderline(L, Z, g + d, W, K, o, "left", B, D)
                    }
                    return
                }
                break;
            case bx.CCanvasWnd.FTW_MIXED:
                if (T > z) {
                    l = "left";
                    L.textAlign = "left";
                    X = g + d;
                    if (N) {
                        bx.CCanvasWnd.drawTextUnderline(L, Z, g + d, W, K, o, "left", B, D)
                    }
                    if (V > 1) {
                        D = (D + (z - T - 1) * 0.5 / (V - 1))
                    }
                    var U = z / t(Z);
                    X = X / U;
                    L.scale(U, 1);
                    if (H && p && p > 0) {
                        u(Z, X, W)
                    }
                    for (; Y < V; Y++) {
                        L.fillText(Z[Y], X + S, W);
                        X = X + L.measureText(Z[Y]).width;
                        S = S + D
                    }
                    return
                }
                break
        }
        if (N) {
            bx.CCanvasWnd.drawTextUnderline(L, Z, X, W, K, o, l, B, D)
        }
        if (H && p && p > 0) {
            u(Z, X, W)
        }
        if (!D) {
            L.fillText(Z, X, W)
        } else {
            if (l == "center") {
                X = X + (-(L.measureText(Z).width + D * (Z.length - 1))) / 2;
                for (; Y < V; Y++) {
                    R = L.measureText(Z[Y]).width;
                    L.fillText(Z[Y], X + S + R / 2, W);
                    X = X + R;
                    S = S + D
                }
            } else {
                if (l == "right") {
                    X = X - (L.measureText(Z).width + D * Z.length);
                    for (; Y < V; Y++) {
                        R = L.measureText(Z[Y]).width;
                        X = X + R;
                        S = S + D;
                        L.fillText(Z[Y], X + S, W)
                    }
                } else {
                    for (; Y < V; Y++) {
                        L.fillText(Z[Y], X + S, W);
                        X = X + L.measureText(Z[Y]).width;
                        S = S + D
                    }
                }
            }
        }
    }

    function v(W, T, X) {
        var S = 0,
            R = W.length,
            V = 0,
            U;
        if (!D) {
            L.fillText(W, T, X)
        } else {
            if (l == "center") {
                T = T + (-(L.measureText(W).width + D * (W.length - 1))) / 2;
                for (; S < R; S++) {
                    U = L.measureText(W[S]).width;
                    L.fillText(W[S], T + V + U / 2, X);
                    T = T + U;
                    V = V + D
                }
            } else {
                if (l == "right") {
                    T = T - (L.measureText(W).width + D * W.length);
                    for (; S < R; S++) {
                        U = L.measureText(W[S]).width;
                        T = T + U;
                        V = V + D;
                        L.fillText(W[S], T + V, X)
                    }
                } else {
                    for (; S < R; S++) {
                        L.fillText(W[S], T + V, X);
                        T = T + L.measureText(W[S]).width;
                        V = V + D
                    }
                }
            }
        }
    }

    function r(ai, W, al) {
        var T = C.split("\n");
        var ad, ah;
        var ag, af, ae, ab, S;
        var Y = null,
            U = 0,
            aa = null;
        var Z = i + m,
            R = ai - m;
        if (l == "center") {
            R = ai - m * 2
        }
        if (l == "right") {
            Z = i
        }
        if (B == "top") {
            h = w + c + (W - Math.floor(o * k)) / 2;
            L.textBaseline = "top"
        } else {
            Y = [];
            aa = []
        }
        for (ag = 0; ag < T.length; ag++) {
            if (!T[ag]) {
                h += W;
                if (B == "top") {
                    al(T[ag], Z, h);
                    Z = i
                } else {
                    Y[U++] = T[ag]
                }
                continue
            }
            ad = T[ag];
            var aj, X, V = ad.length,
                ak;
            if (I && t(ad) > R) {
                while (V > 1 && /\s/.test(ad[V - 1])) {
                    V--
                }
            }
            for (af = 0; af < V; af++) {
                X = false;
                for (ab = 1; af + ab <= V; ab++) {
                    if (Math.round(t(ad.substr(af, ab))) > R) {
                        if (ab == 1) {
                            if (R > 0) {
                                ah = ad.substr(af, ab)
                            } else {
                                ah = ""
                            }
                            R = ai
                        } else {
                            if (I) {
                                aj = false;
                                ae = af;
                                if (ae != 0) {
                                    while (/\s/.test(ad[ae])) {
                                        ae++
                                    }
                                    if (ae > af) {
                                        af = ae;
                                        ab = 1;
                                        if (ae == V) {
                                            X = true
                                        }
                                        continue
                                    }
                                }
                                S = ab - 1;
                                while (/\s/.test(ad[ae + S]) && Math.round(t(ad.substr(ae, S))) > R) {
                                    S--
                                }
                                for (; S > 1; S--) {
                                    if ((/\s|-/.test(ad[ae + S]) || ad.charCodeAt(ae + S) > 255)) {
                                        if (t(ad.substr(ae, S)) < R) {
                                            if (!/\s|-/.test(ad[ae + S]) && ad.charCodeAt(ae + S + 1) < 255 && t(ad.substr(ae, S + 1)) < R) {
                                                S++
                                            }
                                            aj = true;
                                            break
                                        }
                                    }
                                }
                                af = ae;
                                if (aj) {
                                    ae = af;
                                    if (af != 0) {
                                        while (/\s/.test(ad[ae])) {
                                            ae++
                                        }
                                    }
                                    ak = S;
                                    while (!(/\s/.test(ad[ae + ak]) || ad.charCodeAt(ae + S) > 255) && (Math.round(t(ad.substr(ae, ak))) > R)) {
                                        ak--
                                    }
                                    ah = ad.substr(ae, ak);
                                    R = ai;
                                    af = af + ak - 1
                                } else {
                                    ah = ad.substr(af, ab - 1);
                                    R = ai;
                                    af = af + ab - 2
                                }
                            } else {
                                ah = ad.substr(af, ab - 1);
                                R = ai;
                                af = af + ab - 2
                            }
                        }
                        break
                    } else {
                        if (af + ab == V) {
                            ae = af;
                            if (I) {
                                if (af != 0) {
                                    while (/\s/.test(ad[ae])) {
                                        ae++
                                    }
                                    if (ae == V) {
                                        X = true
                                    }
                                }
                                ah = ad.substr(ae, ab);
                                R = ai
                            } else {
                                ah = ad.substr(ae);
                                R = ai
                            }
                            af = ae + ab
                        }
                    }
                }
                if (X) {
                    continue
                }
                if (M && B == "top" && h + W < w) {
                    h = h + W;
                    continue
                }
                if (B == "top") {
                    if (!G && H && p && p > 0) {
                        u(ah, Z, h)
                    }
                    al(ah, Z, h, V <= af);
                    if (!G && H && p && p < 0) {
                        u(ah, Z, h)
                    }
                    if (!G && N) {
                        bx.CCanvasWnd.drawTextUnderline(L, ah, Z, h, K, o, l, B, D)
                    }
                    Z = i
                } else {
                    if (V <= af) {
                        aa[U] = true
                    }
                    Y[U++] = ah
                }
                h += W
            }
            if (M && h > w + F && B == "top") {
                break
            }
        }
        if (Y) {
            var ac = (W - Math.floor(o * k)) / 2;
            if (B == "middle") {
                L.textBaseline = "middle";
                h = w + (F - W * (U - 1)) / 2
            } else {
                L.textBaseline = "ideographic";
                h = w + F - c - W * (U - 1) - ac
            }
            for (ag = 0; ag < U; ag++) {
                if (M && h + W < w) {
                    h = h + W;
                    continue
                }
                if (!G && H && p && p > 0) {
                    u(Y[ag], Z, h)
                }
                al(Y[ag], Z, h, aa[ag]);
                if (!G && H && p && p < 0) {
                    u(Y[ag], Z, h)
                }
                if (!G && N) {
                    bx.CCanvasWnd.drawTextUnderline(L, Y[ag], Z, h, K, o, l, B, D)
                }
                h += W;
                if (M) {
                    if (B === "middle" && h > w + F - ac) {
                        break
                    } else {
                        if (B === "bottom" && h > w + F - ac) {
                            break
                        }
                    }
                }
                Z = i
            }
        }
    }
};
bx.CCanvasWnd.drawTextUnderline = function(k, q, p, n, e, o, d, j, f, i) {
    var l, h = 0;

    function c(t) {
        if (!t || t.length == 0) {
            return 0
        }
        return k.measureText(t).width + (t.length - 1) * f
    }
    o = parseInt(o);
    f = f ? f : 0;
    if (f < -o) {
        f = -o
    }
    if (i) {
        l = i
    } else {
        l = c(q)
    }
    var g;
    if (j == "top") {
        g = n + Math.round(o * 1.2)
    } else {
        if (j == "bottom") {
            g = n - Math.ceil(o / 15)
        } else {
            g = n + o / 2
        }
    }
    var s = 0;
    var r = Math.max(1, Math.floor(o / 15));
    g = Math.round(g);
    g -= (r % 2 == 1 ? 0.5 : 0);
    k.beginPath();
    if (d == "center") {
        h = p - (l / 2);
        s = p + (l / 2)
    } else {
        if (d == "right") {
            h = p - l;
            s = p
        } else {
            h = p;
            s = p + l
        }
    }
    bx.cCanvasObject.clearLineDash(k);
    var m = k.strokeStyle;
    k.strokeStyle = e;
    k.lineWidth = r;
    k.moveTo(h, g);
    k.lineTo(s, g);
    k.stroke();
    k.strokeStyle = m
};
bx.CCanvasWnd.drawRoundRect = function(n, d, r, s, q, t, k, f, c, e, m, i) {
    if (!(d || r) || t < 1 || k < 1) {
        return
    }
    n.beginPath();
    var p = f || 0;
    var l = c || 0;
    var j = m || 0;
    var g = e || 0;
    var o = Math.max((p + l) / t, (j + g) / t, (p + j) / k, (l + g) / k, 1);
    if (o > 1) {
        p = p / o;
        l = l / o;
        j = j / o;
        g = g / o
    }
    if (p) {
        n.moveTo(s, q + p);
        n.arc(s + p, q + p, p, Math.PI, 1.5 * Math.PI)
    } else {
        n.moveTo(s, q)
    }
    if (l) {
        n.lineTo(s + t - l, q);
        n.arc(s + t - l, q + l, l, 1.5 * Math.PI, 2 * Math.PI)
    } else {
        n.lineTo(s + t, q)
    }
    if (g) {
        n.lineTo(s + t, q + k - g);
        n.arc(s + t - g, q + k - g, g, 0, 0.5 * Math.PI)
    } else {
        n.lineTo(s + t, q + k)
    }
    if (j) {
        n.lineTo(s + j, q + k);
        n.arc(s + j, q + k - j, j, 0.5 * Math.PI, Math.PI)
    } else {
        n.lineTo(s, q + k)
    }
    n.closePath();
    if (r) {
        if (i === bx.CCanvasWnd.FILL_TYPE_IMAGE) {
            n.translate(s, q);
            n.fill();
            n.translate(-s, -q)
        } else {
            n.fill()
        }
    }
    if (d) {
        n.stroke()
    }
};
bx.CCanvasWnd.drawEllipse = function(m, f, o, p, n, q, i, g) {
    if (!(f || o)) {
        return
    }
    if (q <= 0 || i <= 0) {
        bx.Trace.log("BLUX", "warning", "drawEllipse w:" + q + " h:" + i, "CCanvas.drawEllipse");
        return
    }
    if (q == i) {
        m.beginPath();
        m.arc(p + q / 2, n + i / 2, q / 2, 0, 2 * Math.PI, false);
        m.closePath()
    } else {
        var l = 0.5522848,
            e = (q / 2) * l,
            c = (i / 2) * l,
            r = p + q,
            k = n + i,
            j = p + q / 2,
            d = n + i / 2;
        m.beginPath();
        m.moveTo(p, d);
        m.bezierCurveTo(p, d - c, j - e, n, j, n);
        m.bezierCurveTo(j + e, n, r, d - c, r, d);
        m.bezierCurveTo(r, d + c, j + e, k, j, k);
        m.bezierCurveTo(j - e, k, p, d + c, p, d);
        m.closePath()
    }
    if (o) {
        if (g === bx.CCanvasWnd.FILL_TYPE_IMAGE) {
            m.translate(p, n);
            m.fill();
            m.translate(-p, -n)
        } else {
            m.fill()
        }
    }
    if (f) {
        m.stroke()
    }
};
bx.CCanvasWnd.getEnclosingRect = function(l, k, c, p, e, i, h, g) {
    var q;
    if (!(c && p)) {
        return {
            x1: l,
            y1: k,
            x2: l,
            y2: k
        }
    }
    if (!e) {
        return {
            x1: l,
            y1: k,
            x2: l + c,
            y2: k + p
        }
    }
    e = e % (2 * Math.PI);
    if (e < 0) {
        e = (2 * Math.PI + e)
    }
    if (i) {
        q = i
    } else {
        q = {}
    }
    var n = bx.CCanvasWnd.getEnclosingRect.$N1R;
    var f, d;
    var j = Math.sin(e),
        o = Math.cos(e);
    if (h !== undefined && h !== null && g !== undefined && g !== null) {
        f = h;
        d = g
    } else {
        f = l + c / 2;
        d = k + p / 2
    }
    m(n[0], l, k);
    m(n[1], l + c, k);
    m(n[2], l + c, k + p);
    m(n[3], l, k + p);

    function m(t, s, r) {
        t.x = ((s - f) * o - (r - d) * j) + f;
        t.y = ((s - f) * j + (r - d) * o) + d
    }
    if (e < Math.PI / 2) {
        q.x1 = n[3].x;
        q.y1 = n[0].y;
        q.x2 = n[1].x;
        q.y2 = n[2].y
    } else {
        if (e < Math.PI) {
            q.x1 = n[2].x;
            q.y1 = n[3].y;
            q.x2 = n[0].x;
            q.y2 = n[1].y
        } else {
            if (e < Math.PI * (3 / 2)) {
                q.x1 = n[1].x;
                q.y1 = n[2].y;
                q.x2 = n[3].x;
                q.y2 = n[0].y
            } else {
                q.x1 = n[0].x;
                q.y1 = n[1].y;
                q.x2 = n[2].x;
                q.y2 = n[3].y
            }
        }
    }
    return q
};
bx.CCanvasWnd.getEnclosingRect.$N1R = [{
    x: 0,
    y: 0
}, {
    x: 0,
    y: 0
}, {
    x: 0,
    y: 0
}, {
    x: 0,
    y: 0
}];
bx.CCanvasWnd.FONT_LOADING = 1;
bx.CCanvasWnd.FONT_LOADED = 2;
bx.CCanvasWnd.$N2X = " !&amp;&quot;\\#$%&apos;()*+,-./0123456789:;&lt;=&gt;?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_`abcdefghijklmnopqrstuvwxyz{|}~안녕하세요こんにちは早上好你好考试試";
bx.CCanvasWnd._customFontList = [];
bx.CCanvasWnd._checkInterval = 100;
bx.CCanvasWnd.maxFontWaitTime = 3000;
bx.CCanvasWnd.maxMonitorWaitTime = 15000;
bx.CCanvasWnd.loadCustomFont = function(k, g, r, m, j, c, p) {
    var h, s;
    m = !!m;
    j = !!j;
    c = !!c;
    for (h = 0; h < bx.CCanvasWnd._customFontList.length; h++) {
        if (bx.CCanvasWnd._customFontList[h].location == g && bx.CCanvasWnd._customFontList[h].fName == k && bx.CCanvasWnd._customFontList[h].loadBold == !!c) {
            console.warn("CCanvasWnd", "warning", "Already tried fontLocation " + k + ":" + g, "CCanvasWnd.loadCustomFont");
            r(false, k);
            return
        }
    }
    s = {
        location: g,
        fName: k,
        state: bx.CCanvasWnd.FONT_LOADING,
        loadBold: !!c
    };
    bx.CCanvasWnd._customFontList.push(s);
    var e = "'" + k + "'";
    var o = document.createElement("span");
    var q = document.createElement("span");
    var n = "position:absolute; left:-10000px; top:-10000px; font-family:serif,sans-serif; white-space:nowrap; font-size:50px; visibility:hidden;";
    var d;
    if (p) {
        d = bx.CCanvasWnd.$N2X + p
    } else {
        d = bx.CCanvasWnd.$N2X
    }
    o.innerHTML = d;
    o.style.cssText = n;
    document.body.appendChild(o);
    q.innerHTML = d;
    q.style.cssText = n + "font-weight:bold;";
    document.body.appendChild(q);
    if (bx.HCL.DV.isIOS() || bx.HCL.DV.getBrowserType() === undefined) {
        setTimeout(l, 50)
    } else {
        setTimeout(f, 50)
    }

    function f() {
        var v, C, z, G, A, y;
        var B = Date.now();
        G = o.offsetWidth;
        o.style.fontFamily = e + " ," + o.style.fontFamily;

        function F() {
            var J = document.styleSheets;
            for (var I = 0, H = J.length; I < H; I++) {
                J[I].disabled = true;
                J[I].disabled = false
            }
        }
        if (!j) {
            y = bx.CCanvasWnd.maxFontWaitTime;
            if (g) {
                z = document.styleSheets ? 0 : null;
                if (m) {
                    F();
                    C = document.createElement("link");
                    C.setAttribute("rel", "stylesheet");
                    C.setAttribute("type", "text/css");
                    C.setAttribute("href", g + (g.indexOf("?") === -1 ? "?IEFIX=" : "&IEFIX=") + (new Date()).getTime());
                    document.head.appendChild(C);
                    window.$N1S = document.styleSheets.length - 1;
                    if ("onload" in C) {
                        C.onload = function() {
                            i(C, g)
                        };
                        C.onerror = function() {
                            i(C, g)
                        }
                    }

                    function i(J, K) {
                        if (J.href && J.href.indexOf("IEFIX=") === -1) {
                            return
                        }

                        function I() {
                            return (window.navigator.userAgent.indexOf("MSIE ") > 0) || (!!navigator.userAgent.match(/Trident.*rv\:11\./))
                        }
                        try {
                            if (I() && J.sheet.cssRules && !J.sheet.cssRules.length) {
                                document.head.removeChild(J);
                                var L = document.createElement("link");
                                L.setAttribute("rel", "stylesheet");
                                L.setAttribute("type", "text/css");
                                L.setAttribute("href", g);
                                document.head.appendChild(L)
                            }
                        } catch (H) {
                            console.error("Fail to run IE bugfix code")
                        }
                    }
                } else {
                    if (z === null || window.$N1S === undefined) {
                        C = document.createElement("style");
                        C.type = "text/css";
                        document.head.appendChild(C);
                        window.$N1S = document.styleSheets.length - 1
                    }
                    C = document.styleSheets[window.$N1S];
                    try {
                        C.insertRule("@font-face {font-family:" + e + "; src:url(" + g + "); }", (C.cssRules ? C.cssRules.length : 0))
                    } catch (u) {
                        C.insertRule("@font-face {font-family:" + e + "; src:url(" + g + "); }", 0)
                    }
                    G = o.offsetWidth
                }
            } else {
                w(false, k);
                return
            }
        } else {
            y = bx.CCanvasWnd.maxMonitorWaitTime
        }
        if (!c) {
            q.style.fontFamily = o.style.fontFamily
        }
        if (!E()) {
            v = window.setInterval(E, bx.CCanvasWnd._checkInterval)
        }

        function E() {
            if (Date.now() > B + y) {
                w(false, k, true);
                return true
            }
            if (o && o.offsetWidth !== G) {
                s.state = bx.CCanvasWnd.FONT_LOADED;
                if (c) {
                    t()
                } else {
                    w(true, k)
                }
                return true
            }
            return false
        }

        function D() {
            if (Date.now() > B + y) {
                w(true, k, true)
            } else {
                if (A && q.offsetWidth !== A) {
                    w(true, k)
                }
            }
        }

        function t() {
            A = q.offsetWidth;
            q.style.fontFamily = o.style.fontFamily;
            if (v) {
                window.clearInterval(v)
            }
            v = window.setInterval(D, bx.CCanvasWnd._checkInterval)
        }

        function w(I, J, H) {
            if (v) {
                window.clearInterval(v)
            }
            if (o && o.parentNode) {
                o.parentNode.removeChild(o);
                if (q.parentNode) {
                    q.parentNode.removeChild(q)
                }
            }
            r(true, J, H)
        }
    }

    function l() {
        var v, D, A, H, B, z;
        var C = Date.now();
        var w = false;
        H = o.offsetWidth;
        o.style.fontFamily = e + " ," + o.style.fontFamily;

        function G() {
            var K = document.styleSheets;
            for (var J = 0, I = K.length; J < I; J++) {
                K[J].disabled = true;
                K[J].disabled = false
            }
        }
        if (!j) {
            z = bx.CCanvasWnd.maxFontWaitTime;
            if (g) {
                A = document.styleSheets ? 0 : null;
                if (m) {
                    G();
                    D = document.createElement("link");
                    D.setAttribute("rel", "stylesheet");
                    D.setAttribute("type", "text/css");
                    D.setAttribute("href", g + (g.indexOf("?") === -1 ? "?IEFIX=" : "&IEFIX=") + (new Date()).getTime());
                    document.head.appendChild(D);
                    window.$N1S = document.styleSheets.length - 1;
                    if ("onload" in D) {
                        D.onload = function() {
                            i(D, g)
                        };
                        D.onerror = function() {
                            i(D, g)
                        }
                    }

                    function i(K, L) {
                        if (K.href && K.href.indexOf("IEFIX=") === -1) {
                            return
                        }

                        function J() {
                            return (window.navigator.userAgent.indexOf("MSIE ") > 0) || (!!navigator.userAgent.match(/Trident.*rv\:11\./))
                        }
                        try {
                            if (J() && K.sheet.cssRules && !K.sheet.cssRules.length) {
                                document.head.removeChild(K);
                                var M = document.createElement("link");
                                M.setAttribute("rel", "stylesheet");
                                M.setAttribute("type", "text/css");
                                M.setAttribute("href", g);
                                document.head.appendChild(M)
                            }
                        } catch (I) {
                            console.error("Fail to run IE bugfix code")
                        }
                    }
                } else {
                    if (A === null || window.$N1S === undefined) {
                        D = document.createElement("style");
                        D.type = "text/css";
                        document.head.appendChild(D);
                        window.$N1S = document.styleSheets.length - 1
                    }
                    D = document.styleSheets[window.$N1S];
                    try {
                        D.insertRule("@font-face {font-family:" + e + "; src:url(" + g + "); }", (D.cssRules ? D.cssRules.length : 0))
                    } catch (u) {
                        D.insertRule("@font-face {font-family:" + e + "; src:url(" + g + "); }", 0)
                    }
                    H = o.offsetWidth
                }
            } else {
                y();
                return
            }
        } else {
            z = bx.CCanvasWnd.maxMonitorWaitTime
        }
        if (!c) {
            q.style.fontFamily = o.style.fontFamily
        }
        v = window.setInterval(F, bx.CCanvasWnd._checkInterval);

        function F() {
            if (Date.now() > C + z) {
                y(true)
            } else {
                if (o && o.offsetWidth !== H) {
                    s.state = bx.CCanvasWnd.FONT_LOADED;
                    H = o.offsetWidth;
                    if (c) {
                        t()
                    } else {
                        w = true;
                        r(true, k)
                    }
                }
            }
        }

        function E() {
            if (Date.now() > C + z) {
                console.warn("BLUX", "warning", "bold font loading time out :" + k + " / " + g, "CCanvasWnd.loadCustomFont");
                y(true)
            } else {
                if (B && q.offsetWidth !== B) {
                    B = q.offsetWidth;
                    w = true;
                    r(true, k)
                }
            }
        }

        function t() {
            B = q.offsetWidth;
            q.style.fontFamily = o.style.fontFamily;
            if (v) {
                window.clearInterval(v)
            }
            v = window.setInterval(E, bx.CCanvasWnd._checkInterval)
        }

        function y(I) {
            if (v) {
                window.clearInterval(v)
            }
            if (o && o.parentNode) {
                o.parentNode.removeChild(o);
                if (q.parentNode) {
                    q.parentNode.removeChild(q)
                }
            }
            if (!w) {
                r(false, k, I)
            }
        }
    }
};
bx.CCanvasWnd.intersect_point_rect = function(e, d, g, f, h, c) {
    return (e >= g && e < (g + h)) && (d >= f && d < (f + c))
};
bx.CCanvasWnd.intersect_point_ellipse = function(m, j, f, e, g, l) {
    f += g / 2;
    e += l / 2;
    var k = g >> 1,
        i = l >> 1,
        d = Math.pow(k, 2),
        h = Math.pow(i, 2);
    var c = Math.pow(m - f, 2) / d + Math.pow(j - e, 2) / h;
    if (c > 1) {
        return false
    } else {
        return true
    }
};
bx.CCanvasWnd.intersect_rect_point = function(g, f, h, c, e, d) {
    return bx.CCanvasWnd.intersect_point_rect(e, d, g, f, h, c)
};
bx.CCanvasWnd.intersect_rect_rect = function(e, d, g, j, h, f, i, c) {
    return (((e >= h && e < (h + i)) || (e < h && (e + g) > h)) && ((d >= f && d < (f + c)) || (d < f && (d + j) > f)))
};
bx.CCanvasWnd.in_rect_rect = function(e, d, g, j, h, f, i, c) {
    return (e >= h && e < (h + i)) && ((e + g) > h && (e + g) <= (h + i)) && (d >= f && d < (f + c)) && ((d + j) > f && (d + j) <= (f + c))
};
bx.CCanvasWnd.intersect_circle_line = function(c, i, h, e, g, d, f) {
    bx.CCanvasWnd.$Hu9 = d - e;
    bx.CCanvasWnd.$HuA = f - g;
    bx.CCanvasWnd.$HuB = c - e;
    bx.CCanvasWnd.$HuC = i - g;
    bx.CCanvasWnd.$HuD = false;
    bx.CCanvasWnd.$HuE = false;
    if ((bx.CCanvasWnd.$HuC * bx.CCanvasWnd.$Hu9 - bx.CCanvasWnd.$HuB * bx.CCanvasWnd.$HuA) * (bx.CCanvasWnd.$HuC * bx.CCanvasWnd.$Hu9 - bx.CCanvasWnd.$HuB * bx.CCanvasWnd.$HuA) <= h * h * (bx.CCanvasWnd.$Hu9 * bx.CCanvasWnd.$Hu9 + bx.CCanvasWnd.$HuA * bx.CCanvasWnd.$HuA)) {
        if (bx.CCanvasWnd.$HuB * bx.CCanvasWnd.$HuB + bx.CCanvasWnd.$HuC * bx.CCanvasWnd.$HuC <= h * h) {
            bx.CCanvasWnd.$HuD = true;
            return true
        }
        if ((bx.CCanvasWnd.$Hu9 - bx.CCanvasWnd.$HuB) * (bx.CCanvasWnd.$Hu9 - bx.CCanvasWnd.$HuB) + (bx.CCanvasWnd.$HuA - bx.CCanvasWnd.$HuC) * (bx.CCanvasWnd.$HuA - bx.CCanvasWnd.$HuC) <= h * h) {
            bx.CCanvasWnd.$HuE = true;
            return true
        }
        if (!bx.CCanvasWnd.$HuD && !bx.CCanvasWnd.$HuE && bx.CCanvasWnd.$HuB * bx.CCanvasWnd.$Hu9 + bx.CCanvasWnd.$HuC * bx.CCanvasWnd.$HuA >= 0 && bx.CCanvasWnd.$HuB * bx.CCanvasWnd.$Hu9 + bx.CCanvasWnd.$HuC * bx.CCanvasWnd.$HuA <= bx.CCanvasWnd.$Hu9 * bx.CCanvasWnd.$Hu9 + bx.CCanvasWnd.$HuA * bx.CCanvasWnd.$HuA) {
            return true
        }
    }
    return false
};
bx.CCanvasWnd.in_line_rect = function(e, g, d, f, i, h, j, c) {
    return (e >= i && e < (i + j)) && (d >= i && d < (i + j)) && (g >= h && g < (h + c)) && (f >= h && f < (h + c))
};
bx.CCanvasWnd.setZIndexRange = function(c, d) {
    if (!c || d < 0 || d > (bx.CCanvasWnd.NUM_ZINDEX_SLOT - 1)) {
        return false
    }
    if (!(c instanceof bx.CCanvasWnd)) {
        return false
    }
    if (c.objects && c.objects.length) {
        bx.Trace.log("BLUX", "warning", "Canvas not empty. It has " + c.objects.length + " objects.", "CCanvasWnd.setZIndexRange")
    }
    c._slotNumber = d;
    return true
};
bx.CCanvasWnd.getZIndexRange = function(c) {
    if (!c || !(c instanceof bx.CCanvasWnd)) {
        return -1
    }
    if (!c._slotNumber) {
        return 0
    }
    return c._slotNumber
};
bx.CCanvasWnd.getMinZIndex = function(c) {
    if (!c || !(c instanceof bx.CCanvasWnd)) {
        return -1
    }
    if (!c._slotNumber) {
        return bx.CCanvasWnd.ZINDEX_OBJECT
    }
    return bx.CCanvasWnd.ZINDEX_OBJECT * (c.slotNumber + 1)
};
bx.CCanvasWnd.getMaxZIndex = function(c) {
    if (!c || !(c instanceof bx.CCanvasWnd)) {
        return -1
    }
    if (!c._slotNumber) {
        return bx.CCanvasWnd.ZINDEX_OBJECT * 2 - 1
    }
    return bx.CCanvasWnd.ZINDEX_OBJECT * (c.slotNumber + 2) - 1
};
bx.CCanvasWnd.getMaxObjectZIndex = function(c) {
    if (!c || !(c instanceof bx.CCanvasWnd)) {
        return -1
    }
    return c.maxZindex
};
bx.CCanvasWnd.getMinObjectZIndex = function(c) {
    if (!c || !(c instanceof bx.CCanvasWnd)) {
        return -1
    }
    return c.minZindex
};
bx.CCanvasWnd.ZINDEX_OBJECT = 100000000;
bx.CCanvasWnd.NUM_ZINDEX_SLOT = 5;
bx.CCanvasWnd.REFECT_X = 1;
bx.CCanvasWnd.REFECT_Y = 2;
bx.CCanvasWnd.SHAPE_RECTANGLE = 1;
bx.CCanvasWnd.SHAPE_RECT = 1;
bx.CCanvasWnd.SHAPE_LINE = 2;
bx.CCanvasWnd.EV_POINTER_START = 1;
bx.CCanvasWnd.EV_POINTER_END = 2;
bx.CCanvasWnd.EV_POINTER_DRAG = 3;
bx.CCanvasWnd.EV_POINTER_MOVE = 4;
bx.CCanvasWnd.EV_CLICK_RIGHT = 10;
bx.CCanvasWnd.EV_DBLCLICK = 11;
bx.CCanvasWnd.EV_CLICK = 12;
bx.CCanvasWnd.EV_HOLD = 13;
bx.CCanvasWnd.EV_DBLTAB = 14;
bx.CCanvasWnd.EV_RIGHT_UP = 15;
bx.CCanvasWnd.EV_RIGHT_DOWN = bx.CCanvasWnd.EV_CLICK_RIGHT;
bx.CCanvasWnd.OBJ_NOSELECT = 1;
bx.CCanvasWnd.OBJ_NOSELECT_UI = 8;
bx.CCanvasWnd.OBJ_CONTROL = 2;
bx.CCanvasWnd.OBJ_CLIP = 4;
bx.CCanvasWnd.OBJ_FIXED_ON_ZOOM = 16;
bx.CCanvasWnd.OBJ_FIXED_ON_PANNING = 32;
bx.CCanvasWnd.OBJ_FIXED_LINE_WIDTH = 64;
bx.CCanvasWnd.OBJ_KEEP_ON_SCREEN = 128;
bx.CCanvasWnd.OBJ_INVERTED = 4096;
bx.CCanvasWnd.OBJ_ASYNC_LOADED = 1;
bx.CCanvasWnd.OBJ_UPDATED = 2;
bx.CCanvasWnd.OBJ_REMOVED = 3;
bx.CCanvasWnd.OBJ_ADDED = 4;
bx.CCanvasWnd.MIN_DRAG_DISTANCE = 3;
bx.CCanvasWnd.MIN_LINE_LENGTH = 2;
bx.CCanvasWnd.DEFAULT_FONT = "Arial";
bx.CCanvasWnd.DEFAULT_FONT_SIZE = "12px";
bx.CCanvasWnd.DEFAULT_FONT_COLOR = "#000000";
bx.CCanvasWnd.FILL_TYPE_NONE = 0;
bx.CCanvasWnd.FILL_TYPE_COLOR = 1;
bx.CCanvasWnd.FILL_TYPE_LINEAR_GRADIENT = 2;
bx.CCanvasWnd.FILL_TYPE_IMAGE = 3;
bx.CCanvasWnd.SIG_OBJ_MOVED = 1;
bx.CCanvasWnd.SIG_OBJ_RESIZED = 2;
bx.CCanvasWnd.COORDINATE_TYPE_RELATIVE = 1;
bx.CCanvasWnd.intersect_point_polygon = function(k, h, l) {
    var d, e, n, m;
    var c;
    if (!(l && l.length && l.length > 1)) {
        return false
    }
    if (l.length == 2) {
        n = k - l[0].x;
        m = h - l[0].y;
        d = l[1].x - l[0].x;
        e = l[1].y - l[0].y;
        c = n * e - m * d;
        if (c != 0) {
            return false
        }
        return bx.CCanvasWnd.intersect_point_rect(k, h, l[0].x, l[0].y, Math.abs(d), Math.abs(e))
    } else {
        if (l.length == 3) {
            d = 1 / 2 * (-l[1].y * l[2].x + l[0].y * (-l[1].x + l[2].x) + l[0].x * (l[1].y - l[2].y) + l[1].x * l[2].y);
            e = d < 0 ? -1 : 1;
            n = (l[0].y * l[2].x - l[0].x * l[2].y + (l[2].y - l[0].y) * k + (l[0].x - l[2].x) * h) * e;
            m = (l[0].x * l[1].y - l[0].y * l[1].x + (l[0].y - l[1].y) * k + (l[1].x - l[0].x) * h) * e;
            return n > 0 && m > 0 && (n + m) < 2 * d * e
        } else {
            e = false;
            for (var g = 0, f = l.length - 1; g < l.length; f = g++) {
                if (((l[g].y > h) != (l[f].y > h)) && (k < (l[f].x - l[g].x) * (h - l[g].y) / (l[f].y - l[g].y) + l[g].x)) {
                    e = !e
                }
            }
            return e
        }
    }
};
bx.CCanvasWnd.intersect_polygon_polygon = function(l, k) {
    var e, d, g;
    var n = {},
        m = {};
    if (!Array.isArray(l) || !Array.isArray(k)) {
        return false
    }
    if (l.length == 1 || k.length == 1) {
        if (l.length == 1 && k.length == 1) {
            if (a[0].x == b[0].x && a[0].y == b[0].y) {
                return true
            }
            return false
        } else {
            if (l.length == 1) {
                return bx.CCanvasWnd.intersect_point_polygon(a[0].x, a[0].y, b)
            } else {
                return bx.CCanvasWnd.intersect_point_polygon(b[0].x, b[0].y, a)
            }
        }
    }
    var f, c;
    for (e = 0; e < l.length; e++) {
        if (e == l.length - 1) {
            f = l[0]
        } else {
            f = l[e + 1]
        }
        for (d = 0; d < k.length; d++) {
            if (d == k.length - 1) {
                c = k[0]
            } else {
                c = k[d + 1]
            }
            if (h(l[e], f, k[d], c)) {
                return true
            }
        }
    }
    for (e = 0; e < l.length; e++) {
        if (bx.CCanvasWnd.intersect_point_polygon(l[e].x, l[e].y, k)) {
            return true
        }
    }
    for (e = 0; e < k.length; e++) {
        if (bx.CCanvasWnd.intersect_point_polygon(k[e].x, k[e].y, l)) {
            return true
        }
    }
    return false;

    function h(p, o, j, i) {
        var y = o.x - p.x;
        var u = o.y - p.y;
        var w = i.x - j.x;
        var r = i.y - j.y;
        if ((w * u - r * y) === 0) {
            return false
        }
        var v = (y * (j.y - p.y) + u * (p.x - j.x)) / (w * u - r * y);
        var q = (w * (p.y - j.y) + r * (j.x - p.x)) / (r * y - w * u);
        return (v >= 0 && v <= 1 && q >= 0 && q <= 1)
    }
};
bx.CCanvasWnd.intersect_polygon_polygon_old = function(h, f) {
    var c, d;
    var l = {},
        j = {};
    if (!Array.isArray(h) || !Array.isArray(f)) {
        return false
    }
    if (h.length == 1 || f.length == 1) {
        if (h.length == 1 && f.length == 1) {
            if (a[0].x == b[0].x && a[0].y == b[0].y) {
                return true
            }
            return false
        } else {
            if (h.length == 1) {
                return bx.CCanvasWnd.intersect_point_polygon(a[0].x, a[0].y, b)
            } else {
                return bx.CCanvasWnd.intersect_point_polygon(b[0].x, b[0].y, a)
            }
        }
    }
    d = g(h);
    for (c = 0; c < h.length; c++) {
        k(h, d[c], l);
        k(f, d[c], j);
        if (!e(l, j)) {
            return false
        }
    }
    d = g(f);
    for (c = 0; c < f.length; c++) {
        k(h, d[c], l);
        k(f, d[c], j);
        if (!e(l, j)) {
            return false
        }
    }
    return true;

    function e(m, i) {
        if (m.min > i.max || m.max < i.min) {
            return false
        }
        return true
    }

    function k(p, s, n) {
        var o;
        var r = s.x * p[0].x + s.y * p[0].y;
        var m = r,
            q;
        for (q = 0; q < p.length; q++) {
            o = s.x * p[q].x + s.y * p[q].y;
            if (o < r) {
                r = o
            } else {
                if (o > m) {
                    m = o
                }
            }
        }
        n.min = r;
        n.max = m
    }

    function g(o) {
        var p, q = [],
            n, m;
        q.length = o.length;
        for (p = 0; p < o.length; p++) {
            if ((p + 1) == o.length) {
                n = o[0].x - o[p].x;
                m = o[0].y - o[p].y
            } else {
                n = o[p + 1].x - o[p].x;
                m = o[p + 1].y - o[p].y
            }
            q[p] = {};
            q[p].x = -m;
            q[p].y = n
        }
        return q
    }
};
bx.CCanvasWnd.vBuffer1 = [{
    x: 0,
    y: 0
}, {
    x: 0,
    y: 0
}, {
    x: 0,
    y: 0
}, {
    x: 0,
    y: 0
}];
bx.CCanvasWnd.vBuffer2 = [{
    x: 0,
    y: 0
}, {
    x: 0,
    y: 0
}, {
    x: 0,
    y: 0
}, {
    x: 0,
    y: 0
}];
bx.CCanvasWnd.$5xc = {
    x: 0,
    y: 0,
    w: 0,
    h: 0
};
bx.CCanvasWnd.$5xd = {
    x: 0,
    y: 0,
    w: 0,
    h: 0
};
bx.CCanvasWnd.$5xe = function(o, e) {
    var r, q, m, l;
    var h, g, f, n = this,
        d, s;
    var c = false;
    if (!o.canvas || (o.type & bx.CCanvasWnd.OBJ_CONTROL)) {
        return
    }
    if (o.convexes) {
        d = o.convexes.length
    } else {
        d = 1
    }
    m = p(o, bx.CCanvasWnd.$5xc);
    for (h = 0; h < e.length; h++) {
        if (e[h] === o || (e[h].type & bx.CCanvasWnd.OBJ_CONTROL)) {
            continue
        }
        l = p(e[h], bx.CCanvasWnd.$5xd);
        e[h].$5xg = undefined;
        if (bx.CCanvasWnd.intersect_rect_rect(m.x, m.y, m.w, m.h, l.x, l.y, l.w, l.h)) {
            e[h].$5xg = true;
            c = true
        }
    }
    if (!c) {
        return
    }
    if (o instanceof bx.CCanvasEllipse) {
        o.polyVertex = bx.CCanvasWnd.$5xf(o)
    }
    for (h = 0; h < d; h++) {
        r = t(o, h, bx.CCanvasWnd.vBuffer1);
        for (g = 0; g < e.length; g++) {
            if (!e[g].$5xg) {
                continue
            }
            if (e[g].$5xh || o === e[g] || (e[g].type & bx.CCanvasWnd.OBJ_CONTROL)) {
                continue
            }
            if (e[g] instanceof bx.CCanvasEllipse) {
                e[g].polyVertex = bx.CCanvasWnd.$5xf(e[g])
            }
            if (e[g].convexes) {
                s = e[g].convexes.length
            } else {
                s = 1
            }
            for (f = 0; f < s; f++) {
                q = t(e[g], f, bx.CCanvasWnd.vBuffer2);
                if (bx.CCanvasWnd.intersect_polygon_polygon(r, q)) {
                    o.$5xh = true;
                    e[g].$5xh = true;
                    break
                }
            }
        }
    }

    function p(j, i) {
        if (j.getAngle()) {
            i.x = j.rotation.enclosingX;
            i.y = j.rotation.enclosingY;
            i.w = j.rotation.enclosingW;
            i.h = j.rotation.enclosingH
        } else {
            i.x = j.$N08.x;
            i.y = j.$N08.y;
            i.w = j.$N08.w;
            i.h = j.$N08.h
        }
        return i
    }

    function t(D, i, u) {
        var F, B, A, w;
        var y = D.getAngle();
        if (D.polyVertex) {
            if (D.convexes) {
                F = [];
                F.length = D.convexes[i].length;
                var z;
                var C = D.convexes[i];
                for (z = 0; z < F.length; z++) {
                    F[z] = {};
                    F[z].x = D.polyVertex[C[z]].x;
                    F[z].y = D.polyVertex[C[z]].y
                }
            } else {
                F = bx.$copyObject([], D.polyVertex)
            }
            if (y) {
                A = D.$N08.x + D.$N08.w / 2 + D.rotation.cx;
                w = D.$N08.y + D.$N08.h / 2 + D.rotation.cy;
                for (B = 0; B < F.length; B++) {
                    E(F[B], F[B].x, F[B].y)
                }
            }
        } else {
            if (y) {
                F = D.rotation.points
            } else {
                F = u;
                F[0].x = D.$N08.x;
                F[0].y = D.$N08.y;
                F[1].x = D.$N08.x;
                F[1].y = D.$N08.y + D.$N08.h;
                F[2].x = D.$N08.x + D.$N08.w;
                F[2].y = D.$N08.y + D.$N08.h;
                F[3].x = D.$N08.x + D.$N08.w;
                F[3].y = D.$N08.y
            }
        }
        return F;

        function E(v, k, j) {
            v.x = Math.floor(((k - A) * D.rotation.cos - (j - w) * D.rotation.sin) + A);
            v.y = Math.floor(((k - A) * D.rotation.sin + (j - w) * D.rotation.cos) + w)
        }
    }
};
bx.CCanvasWnd.$5xf = function(d, f) {
    if (!(d instanceof bx.CCanvasEllipse)) {
        return
    }
    var c = (f && f > 4) ? f : 8;
    var e, g, h = 0;
    if (d.polyVertex && d.polyVertex.length === c) {
        g = d.polyVertex
    } else {
        g = [];
        g.length = c;
        for (e = 0; e < c; e++) {
            g[e] = {}
        }
    }
    for (e = 0; e < c; e++) {
        h = (e / c) * (2 * Math.PI);
        g[e].x = d.$N08.x + d.$N08.w / 2 + (d.$N08.w / 2) * Math.cos(h);
        g[e].y = d.$N08.y + d.$N08.h / 2 + (d.$N08.h / 2) * Math.sin(h)
    }
    return g
};
if (!window.bx.CImageEditor) {
    window.bx.CImageEditor = function() {}
}
bx.CImageEditor.drawToCANVAS = function(d, m, f, e, i, o, v, s) {
    if (!m.width || !m.height) {
        return
    }
    var k = Math.round(v.cX / v.rW);
    var j = Math.round(v.cY / v.rH);
    var p = f,
        n = e;
    var u = 0,
        t = 0;
    if (k < 0) {
        u = k * v.rW;
        f = f - k * v.rW;
        k = 0
    }
    if (j < 0) {
        t = j * v.rH;
        e = e - j * v.rH;
        j = 0
    }
    var l = Math.min(Math.round(v.cW / v.rW), m.width - k);
    var r = Math.min(Math.round(v.cH / v.rH), m.height - j);
    var c = i / Math.round(v.cW / v.rW);
    var g = o / Math.round(v.cH / v.rH);
    if (Math.round(l * c) - u > i) {
        l -= Math.round((l * c - u - i) / c)
    }
    if (Math.round(r * g) - t > o) {
        r -= Math.round((r * g - t - o) / g)
    }
    try {
        if (s & bx.CCanvasWnd.REFECT_X && s & bx.CCanvasWnd.REFECT_Y) {
            d.save();
            d.translate(p + i / 2, n + o / 2);
            d.scale(-1, -1);
            d.drawImage(m, k, j, l, r, -i / 2 - u, -o / 2 - t, Math.round(l * c), Math.round(r * g));
            d.restore()
        } else {
            if (s & bx.CCanvasWnd.REFECT_X) {
                d.save();
                d.translate(p + i / 2, e + o / 2);
                d.scale(-1, 1);
                d.drawImage(m, k, j, l, r, -i / 2 - u, -o / 2, Math.round(l * c), Math.round(r * g));
                d.restore()
            } else {
                if (s & bx.CCanvasWnd.REFECT_Y) {
                    d.save();
                    d.translate(f + i / 2, n + o / 2);
                    d.scale(1, -1);
                    d.drawImage(m, k, j, l, r, -i / 2, -o / 2 - t, Math.round(l * c), Math.round(r * g));
                    d.restore()
                } else {
                    d.drawImage(m, k, j, l, r, f, e, Math.round(l * c), Math.round(r * g))
                }
            }
        }
    } catch (q) {
        console.error(q)
    }
};
bx.CImageEditor.applyToDIV = function(g, f, d) {
    if (!g.imeImage) {
        g.style.overflow = "hidden";
        g.imeImage = g.$TAG("img", {
            style: "position:absolute;"
        })
    }
    var c = parseInt(g.style.width) / f.cW;
    var e = parseInt(g.style.height) / f.cH;
    g.imeImage.style.width = Math.floor(f.iW * f.rW * c) + "px";
    g.imeImage.style.height = Math.floor(f.iH * f.rH * e) + "px";
    g.imeImage.style.left = Math.floor(-f.cX * c) + "px";
    g.imeImage.style.top = Math.floor(-f.cY * e) + "px";
    if (d && g.imeImage.imeSrc !== d) {
        g.imeImage.src = d;
        g.imeImage.imeSrc = d
    }
};
bx.CImageEditor.resetDIV = function(c) {
    if (c.imeImage) {
        c.removeChild(c.imeImage);
        delete c.imeImage
    }
};
bx.CCookie = {};
bx.CCookie.get = function(c, f) {
    if (!c) {
        return null
    }
    if (f && window.bluega && window.bluega.getCrossCookie) {
        return window.bluega.getCrossCookie(f, c)
    } else {
        var e = document.cookie.split("; ");
        for (var d = 0; d < e.length; d++) {
            if (e[d].substring(0, c.length + 1) == (c + "=")) {
                return e[d].substring(c.length + 1)
            }
        }
    }
    return null
};
bx.CCookie.set = function(c, g, f, i, e, h) {
    if (!c) {
        return
    }
    var d = c + "=" + g;
    if (f || f == 0) {
        d += "; max-age=" + f
    }
    if (i) {
        d += "; path=" + i
    }
    if (e) {
        d += "; domain=" + e
    }
    if (h) {
        d += "; secure"
    }
    if (e && window.bluega && window.bluega.setCrossCookie) {
        window.bluega.setCrossCookie(e, d)
    } else {
        document.cookie = d
    }
};
bx.CCookie.remove = function(c, e, d) {
    bx.CCookie.set(c, "", 0, e, d)
};
bx.PageDrag = function(m, q, c, n, p, s, o) {
    if (!m || !q || !p) {
        bx.Trace.log("BLUX", "errorParameter", "tagCnt=" + m + ", tagC=" + q + ", effect=" + p, "bx.PageDrag()");
        return false
    }
    var e;
    if (o && o.book) {
        e = true
    }
    var r = false;
    if (m.bxPageDrag) {
        r = true
    } else {
        m.bxPageDrag = {}
    }
    m.bxPageDrag.tagC = q;
    m.bxPageDrag.tagLT = c;
    m.bxPageDrag.tagRB = n;
    m.bxPageDrag.effect = p;
    m.bxPageDrag.dir = s;
    var v = false;
    if (!bx.HCL.DV.supportCSS3D()) {
        v = true;
        p = "move"
    }
    var i = false;
    switch (p) {
        case "cardUp":
        case "move":
            break;
        case "bookFlip1":
        case "cube0":
            i = true;
            break;
        default:
            bx.Trace.log("BLUX", "errorParameter", "Unsupported transit=" + p + " ignored", "bx.PageDrag");
            return false
    }
    switch (p) {
        case "cardUp":
            if (!e) {
                break
            }
        case "bookFlip1":
            m.bxPageDrag.tagC.style.display = "block";
            if (m.bxPageDrag.tagRB) {
                bx.PageDrag.$N1d(m.bxPageDrag.tagC, m.bxPageDrag.tagRB);
                m.bxPageDrag.tagRB.style.display = "block"
            }
            if (m.bxPageDrag.tagLT) {
                bx.PageDrag.$N1d(m.bxPageDrag.tagLT, m.bxPageDrag.tagC);
                m.bxPageDrag.tagLT.style.display = "none"
            }
            break;
        case "move":
        case "cube0":
            if (e) {
                m.bxPageDrag.tagC.style.display = "block";
                if (m.bxPageDrag.tagRB) {
                    bx.PageDrag.$N1d(m.bxPageDrag.tagC, m.bxPageDrag.tagRB);
                    m.bxPageDrag.tagRB.style.display = "block"
                }
                if (m.bxPageDrag.tagLT) {
                    m.bxPageDrag.tagLT.style.display = "none"
                }
            }
            break
    }
    if (r) {
        return true
    }
    if (!m.bxPageDrag.tagBlock) {
        m.bxPageDrag.tagBlock = m.$TAG("div", {
            style: "position:absolute;top:0px;left:0px;width:100%;height:100%;display:none;background-color:transparent;"
        })
    }
    if (m.style.overflow != "hidden") {
        m.style.overflow = "hidden"
    }
    var g, l;
    var t, y, d, j;

    function u(B, A, z) {
        if (o && o.fnCanDrag && !o.fnCanDrag(undefined, s == "x" ? B : A, s == "x" ? B : A)) {
            return
        }
        if (bx.PageDrag.isInTransit(m)) {
            return
        }
        if (bx.PageTransition && bx.PageTransition.isInTransit(m)) {
            return
        }
        m.bxPageDrag.inTransit = true;
        g = true;
        l = false;
        d = z.timeStamp;
        if (s == "x") {
            t = y = B
        } else {
            t = y = A
        }
    }

    function f(B, A, z) {
        if ((B - t) / parseInt(m.style.width)) {
            if (o && o.fnCanDrag && !o.fnCanDrag((B - t) / parseInt(m.style.width) < 0 ? -1 : 1, t, B)) {
                return
            }
        }
        if (!l) {
            if (m.onBxPageDragStart) {
                m.onBxPageDragStart()
            }
            bx.PageDrag.$N2R(m, 0, 1, i)
        }
        if (s == "x" && Math.abs(t - B) > bx.CGesture.OFFSET_TAP) {
            l = true
        } else {
            if (s == "y" && Math.abs(t - A) > bx.CGesture.OFFSET_TAP) {
                l = true
            }
        }
        if (s == "x") {
            y = B;
            bx.PageDrag.$N2R(m, (B - t) / parseInt(m.style.width), 0, i)
        } else {
            y = A;
            bx.PageDrag.$N2R(m, (A - t) / parseInt(m.style.height), 0, i)
        }
        j = z.timeStamp
    }

    function k() {
        if (l) {
            bx.PageDrag.$CQ(m, y - t, j - d, i, w)
        } else {
            w(0)
        }
        g = false;
        l = false
    }
    if (window.apn && apn.CExe && m.apnOID) {
        m.apxDragInfo = m.apxDragInfo || {};
        m.apxDragInfo.dragX = s == "x";
        m.apxDragInfo.dragY = s == "y";
        m.apxOnDragStart = function(A, D, C, B) {
            var z = bx.Event.getElement(B);
            if (z.tagName == "INPUT" || z.tagName == "TEXTAREA") {
                if (z.getAttribute("readonly") === null && z.getAttribute("disabled") === null) {
                    return false
                }
            } else {
                if (z.contentEditable == "true") {
                    return false
                }
            }
            u(D, C, B);
            return true
        };
        m.apxOnDrag = function(z, C, B, E, D, A) {
            if (g) {
                f(E, D, A)
            }
            return false
        };
        m.apxOnDragEnd = function(z) {
            if (g) {
                k()
            }
            return true
        }
    } else {
        function h(z, D, F, E, C, A, B) {
            if (o && o.fnTransformX) {
                F = o.fnTransformX(F, E)
            }
            if (o && o.fnTransformY) {
                E = o.fnTransformY(F, E)
            }
            if (D == bx.CGesture.POINTER_START) {
                u(F, E, B)
            } else {
                if (g && D == bx.CGesture.POINTER_DRAG) {
                    f(F, E, B)
                } else {
                    if (g && D == bx.CGesture.POINTER_END) {
                        k()
                    }
                }
            }
        }
        new bx.CGesture(m, h, {
            noDelayedEvent: true
        })
    }

    function w(z) {
        m.bxPageDrag.tagC.$CSS({
            transformOrigin: "50% 50% 0"
        });
        if (m.bxPageDrag.tagLT) {
            m.bxPageDrag.tagLT.$CSS({
                transformOrigin: "50% 50% 0"
            })
        }
        if (m.bxPageDrag.tagRB) {
            m.bxPageDrag.tagRB.$CSS({
                transformOrigin: "50% 50% 0"
            })
        }
        bx.PageDrag.$N2R(m, 1, 10 + z, i);
        m.bxPageDrag.inTransit = false;
        m.bxPageDrag.tagBlock.style.display = "none";
        if (m.onBxPageDragEnd) {
            m.onBxPageDragEnd(z)
        }
    }
    m.bxPageDrag$drag = function(A, C, B) {
        if (bx.PageDrag.isInTransit(this)) {
            return false
        }
        if (m.onBxPageDragStart) {
            m.onBxPageDragStart()
        }

        function z(D) {
            w(D);
            if (C) {
                C()
            }
        }
        bx.PageDrag.$4B(m, A, 0, B || 500, i, z);
        return true
    };
    return true
};
bx.PageDrag.$4B = function(h, f, i, e, k, c) {
    bx.PageDrag.$5x5 = bx.PageDrag.$5x5 || 0;
    var j = {};
    j.id = "BxPD$" + (bx.PageDrag.$5x5++);
    j.element = h;
    j.time = e;
    j.timing = "linear";

    function g(l, m, n) {
        bx.PageDrag.$N2R(h, n, 0, k)
    }

    function d() {
        c(f)
    }
    if (f == 1) {
        j.styles = {
            ratio: {
                from: i,
                to: -1,
                unit: g
            }
        }
    } else {
        if (f == 2) {
            j.styles = {
                ratio: {
                    from: i,
                    to: 1,
                    unit: g
                }
            }
        }
    }
    j.onEnd = d;
    bx.PageDrag.$N2S(h.bxPageDrag.tagBlock, h.bxPageDrag.tagC, h.bxPageDrag.tagLT);
    bx.PageDrag.$N2S(h.bxPageDrag.tagBlock, h.bxPageDrag.tagBlock, h.bxPageDrag.tagRB);
    h.bxPageDrag.tagBlock.style.display = "block";
    h.bxPageDrag.inTransit = true;
    bx.PageDrag.$N2R(h, i, 1, k);
    bx.Transition.add(j)
};
bx.PageDrag.$CQ = function(i, n, e, l, c) {
    var g = 0;
    var k;
    var m;
    if (Math.abs(n) <= bx.CGesture.OFFSET_TAP) {
        m = true
    }
    if (i.bxPageDrag.dir == "x") {
        k = n / parseInt(i.style.width)
    } else {
        k = n / parseInt(i.style.height)
    }
    if (k < -1) {
        k = -1
    }
    if (k > 1) {
        k = 1
    }
    if (Math.abs(k) > 0.5 || Math.abs(k) / e * 1000 > 1.1) {
        if (n > 0 && i.bxPageDrag.tagLT) {
            g = 2
        } else {
            if (n < 0 && i.bxPageDrag.tagRB) {
                g = 1
            }
        }
    }
    bx.PageDrag.$5x5 = bx.PageDrag.$5x5 || 0;
    var j = {};
    var f = Math.max(1, Math.ceil(500 * (Math.abs(k) < 0.5 ? Math.abs(k) : 1 - Math.abs(k))));
    j.id = "BxPD$" + (bx.PageDrag.$5x5++);
    j.element = i;
    j.time = f;
    j.timing = "inCubic";

    function h(o, p, q) {
        bx.PageDrag.$N2R(i, q, 0, l)
    }

    function d() {
        c(g)
    }
    if (g == 1) {
        j.styles = {
            ratio: {
                from: k,
                to: -1,
                unit: h
            }
        }
    } else {
        if (g == 2) {
            j.styles = {
                ratio: {
                    from: k,
                    to: 1,
                    unit: h
                }
            }
        } else {
            j.styles = {
                ratio: {
                    from: k,
                    to: 0,
                    unit: h
                }
            }
        }
    }
    j.onEnd = d;
    if (!m) {
        bx.PageDrag.$N2S(i.bxPageDrag.tagBlock, i.bxPageDrag.tagC, i.bxPageDrag.tagLT);
        bx.PageDrag.$N2S(i.bxPageDrag.tagBlock, i.bxPageDrag.tagBlock, i.bxPageDrag.tagRB);
        i.bxPageDrag.tagBlock.style.display = "block"
    }
    bx.Transition.add(j)
};
bx.PageDrag.$N2R = function(j, l, c, m) {
    function g() {
        j.$CSS({
            perspective: parseInt(j.style.width) + "px",
            perspectiveOrigin: "50% 50%"
        });
        j.bxPageDrag.tagC.$CSS({
            transformStyle: "preserve-3d",
            transform: "translate3d(0,0,0)",
            backfaceVisibility: "hidden"
        });
        if (j.bxPageDrag.tagLT) {
            j.bxPageDrag.tagLT.$CSS({
                transformStyle: "preserve-3d",
                transform: "translate3d(0,0,0)",
                backfaceVisibility: "hidden"
            })
        }
        if (j.bxPageDrag.tagRB) {
            j.bxPageDrag.tagRB.$CSS({
                transformStyle: "preserve-3d",
                transform: "translate3d(0,0,0)",
                backfaceVisibility: "hidden"
            })
        }
    }

    function h() {
        j.$CSS("perspective", "none");
        j.bxPageDrag.tagC.$CSS({
            transformStyle: "flat",
            transform: "none"
        });
        if (j.bxPageDrag.tagLT) {
            j.bxPageDrag.tagLT.$CSS({
                transformStyle: "flat",
                transform: "none"
            })
        }
        if (j.bxPageDrag.tagRB) {
            j.bxPageDrag.tagRB.$CSS({
                transformStyle: "flat",
                transform: "none"
            })
        }
    }

    function f() {
        if (c == 11) {
            j.bxPageDrag.tagC.style.display = "none";
            if (j.bxPageDrag.tagRB) {
                j.bxPageDrag.tagRB.style.display = "block"
            }
            if (j.bxPageDrag.tagLT) {
                j.bxPageDrag.tagLT.style.display = "none"
            }
        } else {
            if (c == 12) {
                j.bxPageDrag.tagC.style.display = "none";
                if (j.bxPageDrag.tagRB) {
                    j.bxPageDrag.tagRB.style.display = "none"
                }
                if (j.bxPageDrag.tagLT) {
                    j.bxPageDrag.tagLT.style.display = "block"
                }
            } else {
                j.bxPageDrag.tagC.style.display = "block";
                if (j.bxPageDrag.tagRB) {
                    j.bxPageDrag.tagRB.style.display = "none"
                }
                if (j.bxPageDrag.tagLT) {
                    j.bxPageDrag.tagLT.style.display = "none"
                }
            }
        }
    }

    function k() {
        if (l < 0) {
            if (j.bxPageDrag.tagLT && j.bxPageDrag.tagLT.style.display != "none") {
                j.bxPageDrag.tagLT.style.display = "none"
            }
            if (j.bxPageDrag.tagRB && j.bxPageDrag.tagRB.style.display != "block") {
                j.bxPageDrag.tagRB.style.display = "block"
            }
        } else {
            if (j.bxPageDrag.tagLT && j.bxPageDrag.tagLT.style.display != "block") {
                j.bxPageDrag.tagLT.style.display = "block"
            }
            if (j.bxPageDrag.tagRB && j.bxPageDrag.tagRB.style.display != "none") {
                j.bxPageDrag.tagRB.style.display = "none"
            }
        }
    }
    if (l < -1) {
        l = -1
    }
    if (l > 1) {
        l = 1
    }
    if (j.bxPageDrag.effect == "move") {
        function e(p, o) {
            k();
            var n = l * parseInt(j.style[o]);
            p(j.bxPageDrag.tagC, n, m);
            if (j.bxPageDrag.tagLT && j.bxPageDrag.tagLT.style.display == "block") {
                p(j.bxPageDrag.tagLT, n - parseInt(j.bxPageDrag.tagLT.style[o]), m)
            }
            if (j.bxPageDrag.tagRB && j.bxPageDrag.tagRB.style.display == "block") {
                p(j.bxPageDrag.tagRB, n + parseInt(j.bxPageDrag.tagC.style[o]), m)
            }
        }
        if (c >= 10) {
            if (j.bxPageDrag.dir == "x") {
                bx.PageDrag.$N2T(j.bxPageDrag.tagC, 0, m);
                if (j.bxPageDrag.tagLT) {
                    bx.PageDrag.$N2T(j.bxPageDrag.tagLT, 0, m)
                }
                if (j.bxPageDrag.tagRB) {
                    bx.PageDrag.$N2T(j.bxPageDrag.tagRB, 0, m)
                }
            } else {
                bx.PageDrag.$N2U(j.bxPageDrag.tagC, 0, m);
                if (j.bxPageDrag.tagLT) {
                    bx.PageDrag.$N2U(j.bxPageDrag.tagLT, 0, m)
                }
                if (j.bxPageDrag.tagRB) {
                    bx.PageDrag.$N2U(j.bxPageDrag.tagRB, 0, m)
                }
            }
            f()
        } else {
            if (Math.abs(l) > 0.05) {
                if (j.bxPageDrag.dir == "x") {
                    e(bx.PageDrag.$N2T, "width")
                } else {
                    e(bx.PageDrag.$N2U, "height")
                }
            }
        }
    } else {
        if (j.bxPageDrag.effect == "cube0") {
            if (c == 1) {
                g();
                j.bxPageDrag.tagC.style.display = "block";
                if (j.bxPageDrag.tagLT) {
                    j.bxPageDrag.tagLT.style.display = "none"
                }
                if (j.bxPageDrag.tagRB) {
                    j.bxPageDrag.tagRB.style.display = "none"
                }
            }
            if (Math.abs(l) > 0.05) {
                k();
                if (l < 0) {
                    if (j.bxPageDrag.tagRB && !(j.bxPageDrag.tagRB.style.zIndex > j.bxPageDrag.tagC.style.zIndex)) {
                        bx.PageDrag.$N1d(j.bxPageDrag.tagRB, j.bxPageDrag.tagC)
                    }
                    if (j.bxPageDrag.dir == "x") {
                        j.$CSS({
                            perspectiveOrigin: "100% 50%"
                        });
                        j.bxPageDrag.tagC.$CSS({
                            transformOrigin: "100% 50%",
                            transform: "translateX(" + l * 100 + "%) rotateY(" + l * 90 + "deg)"
                        });
                        if (j.bxPageDrag.tagRB) {
                            j.bxPageDrag.tagRB.$CSS({
                                transformOrigin: "0% 50%",
                                transform: "translateX(" + (l + 1) * 100 + "%) rotateY(" + (l + 1) * 90 + "deg)"
                            })
                        }
                    } else {
                        j.$CSS({
                            perspectiveOrigin: "50% 100%"
                        });
                        j.bxPageDrag.tagC.$CSS({
                            transformOrigin: "50% 100%",
                            transform: "translateY(" + l * 100 + "%) rotateX(" + -l * 90 + "deg)"
                        });
                        if (j.bxPageDrag.tagRB) {
                            j.bxPageDrag.tagRB.$CSS({
                                transformOrigin: "50% 0%",
                                transform: "translateY(" + (l + 1) * 100 + "%) rotateX(" + -(l + 1) * 90 + "deg)"
                            })
                        }
                    }
                } else {
                    if (l > 0) {
                        if (j.bxPageDrag.tagLT && !(j.bxPageDrag.tagLT.style.zIndex > j.bxPageDrag.tagC.style.zIndex)) {
                            bx.PageDrag.$N1d(j.bxPageDrag.tagLT, j.bxPageDrag.tagC)
                        }
                        if (j.bxPageDrag.dir == "x") {
                            j.$CSS({
                                perspectiveOrigin: "0% 50%"
                            });
                            j.bxPageDrag.tagC.$CSS({
                                transformOrigin: "0% 50%",
                                transform: "translateX(" + l * 100 + "%) rotateY(" + l * 90 + "deg)"
                            });
                            if (j.bxPageDrag.tagLT) {
                                j.bxPageDrag.tagLT.$CSS({
                                    transformOrigin: "100% 50%",
                                    transform: "translateX(" + -(1 - l) * 100 + "%) rotateY(" + -(1 - l) * 90 + "deg)"
                                })
                            }
                        } else {
                            j.$CSS({
                                perspectiveOrigin: "50% 0%"
                            });
                            j.bxPageDrag.tagC.$CSS({
                                transformOrigin: "50% 0%",
                                transform: "translateY(" + l * 100 + "%) rotateX(" + -l * 90 + "deg)"
                            });
                            if (j.bxPageDrag.tagLT) {
                                j.bxPageDrag.tagLT.$CSS({
                                    transformOrigin: "50% 100%",
                                    transform: "translateY(" + -(1 - l) * 100 + "%) rotateX(" + (1 - l) * 90 + "deg)"
                                })
                            }
                        }
                    }
                }
            }
            if (c >= 10) {
                h();
                f()
            }
        } else {
            if (j.bxPageDrag.effect == "cardUp") {
                function i(o, n) {
                    k();
                    o(j.bxPageDrag.tagC, l * parseInt(j.style[n]), m);
                    if (l < 0) {
                        if (j.bxPageDrag.tagRB) {
                            j.bxPageDrag.tagRB.$CSS({
                                transform: "scale(" + (Math.abs(l) / 2 + 0.5) + ")",
                                opacity: Math.min(1, Math.abs(l) + 0.3)
                            })
                        }
                    } else {
                        if (l > 0) {
                            if (j.bxPageDrag.tagLT) {
                                j.bxPageDrag.tagLT.$CSS({
                                    transform: "scale(" + (Math.abs(l) / 2 + 0.5) + ")",
                                    opacity: Math.min(1, Math.abs(l) + 0.3)
                                })
                            }
                        }
                    }
                }
                if (c == 1) {
                    bx.PageDrag.$N2S(j.bxPageDrag.tagC, j.bxPageDrag.tagLT, j.bxPageDrag.tagRB);
                    if (j.bxPageDrag.tagLT) {
                        j.bxPageDrag.tagLT.$CSS("transformOrigin", "50% 50%")
                    }
                    if (j.bxPageDrag.tagRB) {
                        j.bxPageDrag.tagRB.$CSS("transformOrigin", "50% 50%")
                    }
                    if (j.bxPageDrag.dir == "x") {
                        bx.PageDrag.$N2T(j.bxPageDrag.tagC, 0, m);
                        if (j.bxPageDrag.tagLT) {
                            bx.PageDrag.$N2T(j.bxPageDrag.tagLT, 0, m)
                        }
                        if (j.bxPageDrag.tagRB) {
                            bx.PageDrag.$N2T(j.bxPageDrag.tagRB, 0, m)
                        }
                    } else {
                        bx.PageDrag.$N2U(j.bxPageDrag.tagC, 0, m);
                        if (j.bxPageDrag.tagLT) {
                            bx.PageDrag.$N2U(j.bxPageDrag.tagLT, 0, m)
                        }
                        if (j.bxPageDrag.tagRB) {
                            bx.PageDrag.$N2U(j.bxPageDrag.tagRB, 0, m)
                        }
                    }
                } else {
                    if (c >= 10) {
                        if (j.bxPageDrag.dir == "x") {
                            bx.PageDrag.$N2T(j.bxPageDrag.tagC, 0, m)
                        } else {
                            bx.PageDrag.$N2U(j.bxPageDrag.tagC, 0, m)
                        }
                        f()
                    } else {
                        if (Math.abs(l) > 0.05) {
                            if (j.bxPageDrag.dir == "x") {
                                i(bx.PageDrag.$N2T, "width")
                            } else {
                                i(bx.PageDrag.$N2U, "height")
                            }
                        }
                    }
                }
            } else {
                if (j.bxPageDrag.effect == "bookFlip1") {
                    var d = "solid 1px #808080";
                    if (c == 1) {
                        j.$CSS({
                            perspective: parseInt(j.style.width) * 3 + "px",
                            perspectiveOrigin: "50% 110%"
                        });
                        j.bxPageDrag.tagC.$CSS({
                            transformStyle: "preserve-3d",
                            transform: "translate3d(0,0,0)",
                            backfaceVisibility: "hidden"
                        });
                        j.bxPageDrag.tagC.style.display = "block";
                        j.bxPageDrag.tagC._bkBorder = j.bxPageDrag.tagC.style.border;
                        j.bxPageDrag.tagC.style.borderBottom = d;
                        if (j.bxPageDrag.dir == "x") {
                            j.bxPageDrag.tagC.style.borderRight = d
                        }
                        if (j.bxPageDrag.tagLT) {
                            j.bxPageDrag.tagLT.style.display = "none";
                            j.bxPageDrag.tagLT._bkBorder = j.bxPageDrag.tagLT.style.border;
                            j.bxPageDrag.tagLT.style.borderBottom = d;
                            if (j.bxPageDrag.dir == "x") {
                                j.bxPageDrag.tagLT.style.borderRight = d
                            }
                        }
                        if (j.bxPageDrag.tagRB) {
                            j.bxPageDrag.tagRB.style.display = "none"
                        }
                        j._bkOverflow = j.style.overflow;
                        j.style.overflow = "visible"
                    }
                    if (Math.abs(l) > 0.05) {
                        if (l < 0) {
                            if (j.bxPageDrag.dir == "x") {
                                j.bxPageDrag.tagC.$CSS({
                                    transformOrigin: "0% 50%",
                                    transform: "rotateY(" + l * 90 + "deg)"
                                })
                            } else {
                                j.$CSS({
                                    perspectiveOrigin: "50% 100%"
                                });
                                j.bxPageDrag.tagC.$CSS({
                                    transformOrigin: "50% 0%",
                                    transform: "rotateX(" + -l * 90 + "deg)"
                                })
                            }
                            k()
                        } else {
                            if (j.bxPageDrag.tagLT) {
                                if (j.bxPageDrag.dir == "x") {
                                    j.bxPageDrag.tagLT.$CSS({
                                        transformOrigin: "0% 50%",
                                        transform: "rotateY(" + (-(1 - l) * 90) + "deg)"
                                    })
                                } else {
                                    j.$CSS({
                                        perspectiveOrigin: "50% 30%"
                                    });
                                    j.bxPageDrag.tagLT.$CSS({
                                        transformOrigin: "50% 0%",
                                        transform: "rotateX(" + ((1 - l) * 90) + "deg)"
                                    })
                                }
                                k()
                            }
                        }
                    }
                    if (c >= 10) {
                        h();
                        f();
                        j.bxPageDrag.tagC.style.border = j.bxPageDrag.tagC._bkBorder;
                        if (j.bxPageDrag.tagLT) {
                            j.bxPageDrag.tagLT.style.border = j.bxPageDrag.tagLT._bkBorder
                        }
                        j.style.overflow = j._bkOverflow
                    }
                }
            }
        }
    }
};
bx.PageDrag.$N2T = function(c, d, e) {
    if (e) {
        c.$CSS("transform", "translateX(" + d + "px)")
    } else {
        c.style.left = d + "px"
    }
};
bx.PageDrag.$N2U = function(c, d, e) {
    if (e) {
        c.$CSS("transform", "translateY(" + d + "px)")
    } else {
        c.style.top = d + "px"
    }
};
bx.PageDrag.$N1d = function(c, d) {
    if (!bx.$checkNaN(parseInt(d.$css("z-index")))) {
        d.style.zIndex = 0
    }
    c.style.zIndex = bx.$checkNaN(parseInt(d.$css("z-index"))) + 2
};
bx.PageDrag.$N2S = function(c, f, e) {
    var d = z2 = 0;
    if (f) {
        if (!bx.$checkNaN(parseInt(f.$css("z-index")))) {
            f.style.zIndex = 0
        }
        d = bx.$checkNaN(parseInt(f.$css("z-index")))
    }
    if (e) {
        if (!bx.$checkNaN(parseInt(e.$css("z-index")))) {
            e.style.zIndex = 0
        }
        z2 = bx.$checkNaN(parseInt(e.$css("z-index")))
    }
    c.style.zIndex = Math.max(d, z2) + 2
};
bx.PageDrag.isInTransit = function(c) {
    if (c.bxPageDrag && c.bxPageDrag.inTransit) {
        return true
    }
    return false
};
"BLUEGA Inc, blux-apx-1.1.js Release date: 10/01/2021 11:37:41"