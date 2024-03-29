var xa = apn.inheritWidget(apn.widgets["apn.wgt.image2"]);
xa.exeFireStateEvent = !0, xa.styleMap = {
    title: !0,
    visibility: !0,
    strokeStyle: !0,
    lineWidth: !0,
    lineDash: !0,
    font: !0,
    fontSize: !0,
    fontStyle: !0,
    fontItalic: !0,
    fontBold: !0,
    textMultiLine: !0,
    fontUnderlined: !0,
    text: !0,
    textAlign: !0,
    textValign: !0,
    textPadding: !0,
    fontStrokeStyle: !0,
    fontStrokeWidth: !0,
    borderRadiusTopLeft: !0,
    borderRadiusTopRight: !0,
    borderRadiusBottomLeft: !0,
    borderRadiusBottomRight: !0,
    alpha: !0,
    angle: !0,
    mediaID: !0,
    dragX: !0,
    dragY: !0,
    dragInParent: !0,
    dragContainParent: !0,
    csr: !0
}, xa.editor = {}, xa.editor.iconThumb = "DB/ux/imgs/wgts/thumbs/imageButton.png", xa._txtSpt1 = {
    ko: "기본 상태 이미지 ID",
    en: "Image asset ID for normal state",
    ja: "基本状態の画像ID"
}, xa._txtSpt2 = {
    ko: "선택 상태 이미지 ID",
    en: "Image asset ID for selected state",
    ja: "選択状態の画像ID"
}, xa.scriptInfo = {
    wgtDataByParam: "selectType",
    wgtData: {
        "": {
            image: {
                help: "{normal:ID|undefined, pressed:ID|undefined, hover:ID|undefined}\n" + apn.CExe.GL(xa._txtSpt1),
                type: "so",
                value: {}
            },
            imageDisabled: {
                help: "{normal:ID|undefined}\n" + apn.CExe.GL({
                    ko: "비활성 상태 이미지 ID",
                    en: "Image asset ID for disabled state",
                    ja: "非アクティブの画像ID"
                }),
                type: "so",
                value: {}
            }
        },
        tab: {
            image: {
                help: "{normal:ID|undefined, hover:ID|undefined}\n" + apn.CExe.GL(xa._txtSpt1),
                type: "so",
                value: {}
            },
            imageSelected: {
                help: "{normal:ID|undefined}\n" + apn.CExe.GL(xa._txtSpt2),
                type: "so",
                value: {}
            }
        },
        check: {
            image: {
                help: "{normal:ID|undefined, hover:ID|undefined}\n" + apn.CExe.GL({
                    ko: "미선택 상태 이미지 ID",
                    en: "Image asset ID for unchecked state",
                    ja: "未選択状態の画像ID"
                }),
                type: "so",
                value: {}
            },
            imageChecked: {
                help: "{normal:ID|undefined, hover:ID|undefined}\n" + apn.CExe.GL(xa._txtSpt2).replace("selected", "checked"),
                type: "so",
                value: {}
            }
        }
    }
}, xa.properties.state = "normal", xa.properties.attrs = xa.properties.attrs || {}, xa.properties.attrs.selectType = "", xa.properties.attrs.btnV = 2, xa.properties.attrs.autoKeepSize = !1, xa.properties.attrs.cfg = {
    images: {
        normal: {
            mediaID: void 0
        },
        down: {
            mediaID: void 0
        },
        hover: {
            mediaID: void 0
        },
        disabled: {
            mediaID: void 0
        },
        disabledDown: {
            mediaID: void 0
        },
        disabledHover: {
            mediaID: void 0
        },
        checked: {
            mediaID: void 0
        },
        checkedD: {
            mediaID: void 0
        },
        checkedH: {
            mediaID: void 0
        }
    },
    clr: {
        disabled: null,
        down: null,
        hover: null
    },
    ttip: "",
    hvrSync: ""
}, xa.onEdit = apn.widgets["apn.wgt.rect"].onEdit, xa.exeCreateTag = function(e, t, a, i, d, n) {
    var o = apn.widgets["apn.wgt.rect"].exeCreateTag.call(this, e, t, a, i, d, n);
    return o.apnTapCsr = !0, o
}, xa.exeAssetPreload = function(e, t, a) {
    function i(e, t, i) {
        a()
    }
    var d = e.wgtGetProperty(t, "cfg"),
        n = {},
        o = 0;
    for (var r in d.images) d.images[r].mediaID && (n[r] = {
        url: e.mediaURL(d.images[r].mediaID)
    }, o++);
    o ? (new apn.CRscLoader).load(e.project, n, i) : a()
}, xa.exeOnLoad = function(e, t) {
    function a() {
        if (e.wgtTag(t)) {
            var a = "hover";
            if ("toggle" == x) "disabled" == e.wgtGetProperty(t, "apxState") && (a = "disabledHover");
            else if ("check" == x) "checked" == e.wgtGetProperty(t, "apxState") && (a = "checkedH");
            else if ("disabled" == e.wgtGetProperty(t, "apxState")) return;
            v._images[a].mediaID && I.exeAssetLoad(e, v, v._images[a].mediaID), uxWgtBtnImage.setTextColor(e, t, a), I.I_exeOnStateChange && I.I_exeOnStateChange(e, t, a)
        }
    }

    function i() {
        if (e.wgtTag(t)) {
            if (v._down)
                if ("check" == x) var a = "checkedD";
                else var a = "down";
            else var a = e.wgtGetProperty(t, "apxState");
            v._images[a].mediaID && I.exeAssetLoad(e, v, v._images[a].mediaID), uxWgtBtnImage.setTextColor(e, t, a), I.I_exeOnStateChange && I.I_exeOnStateChange(e, t, a)
        }
    }

    function d() {
        if (e.wgtTag(t)) {
            var a = "down";
            if ("toggle" == x) "disabled" == e.wgtGetProperty(t, "apxState") && (a = "disabledDown");
            else if ("check" == x);
            else if ("disabled" == e.wgtGetProperty(t, "apxState")) return;
            v._images[a].mediaID && I.exeAssetLoad(e, v, v._images[a].mediaID), uxWgtBtnImage.setTextColor(e, t, a), I.I_exeOnStateChange && I.I_exeOnStateChange(e, t, a)
        }
    }

    function n() {
        var a = e.wgtGetProperty(t, "apxState");
        v._images[a] || (a = "normal"), v._images[a].mediaID && I.exeAssetLoad(e, v, v._images[a].mediaID), uxWgtBtnImage.setTextColor(e, t, a), I.I_exeOnStateChange && I.I_exeOnStateChange(e, t, a)
    }

    function o(a) {
        a ? v.btnOnDown && v.btnOnDown(v) : v._down && (v._down = !1, v.btnOnState && v.btnOnState(v), b.hvrSync && e.ctxSet("uxWgtBtnImage_" + b.hvrSync, {
            oId: t,
            state: 3
        }))
    }

    function r(t, a, i, i, i, i, d) {
        t.apnBlockPointerEvent || (a == bx.CGesture.POINTER_START ? (d && e.viewer.uOnGestureDragStartControl && e.viewer.uOnGestureDragStartControl(d), o(!0)) : a == bx.CGesture.POINTER_END && o(!1))
    }

    function l(e) {
        e && e.oId != t && (m && 0 == e.state ? i() : m && 1 == e.state ? a() : y && 2 == e.state ? d() : 3 == e.state && n())
    }

    function s(a) {
        a && e.log(t, "Image can be set only to replace existing image. Currently, '" + a + "' image is unset for this widget.")
    }

    function p(e, a) {
        if (e == t && a) {
            var i, d;
            a.normal && (v._images.normal.mediaID ? (v._images.normal.mediaID = a.normal, d = !0) : i = "Normal"), a.pressed && (v._images.down.mediaID ? (v._images.down.mediaID = a.pressed, d = !0) : i = "Pressed"), a.hover && (v._images.hover.mediaID ? (v._images.hover.mediaID = a.hover, d = !0) : i = "Hover"), d && v.btnOnState && v.btnOnState(v), s(i)
        }
    }

    function g(e, a) {
        if (e == t && a) {
            var i, d;
            a.normal && (v._images.disabled.mediaID ? (v._images.disabled.mediaID = a.normal, d = !0) : i = "Disabled"), d && v.btnOnState && v.btnOnState(v), s(i)
        }
    }

    function u(e, a) {
        if (e == t && a) {
            var i, d;
            a.normal && (v._images.checked.mediaID ? (v._images.checked.mediaID = a.normal, d = !0) : i = "Checked"), a.hover && (v._images.checkedH.mediaID ? (v._images.checkedH.mediaID = a.hover, d = !0) : i = "Checked.hover"), d && v.btnOnState && v.btnOnState(v), s(i)
        }
    }

    function c(e, a) {
        if (e == t && a) {
            var i, d;
            a.normal && (v._images.disabled.mediaID ? (v._images.disabled.mediaID = a.normal, d = !0) : i = "Selected"), d && v.btnOnState && v.btnOnState(v), s(i)
        }
    }
    var m, y, I = this,
        v = e.wgtTag(t),
        b = e.wgtGetProperty(t, "cfg"),
        x = e.wgtGetProperty(t, "selectType");
    if (b.ttip && (v.title = b.ttip), b.images.disabledDown || (b.images.disabledDown = {
            mediaID: void 0
        }), b.images.disabledHover || (b.images.disabledHover = {
            mediaID: void 0
        }), b.clr || (b.clr = {
            disabled: null,
            down: null,
            hover: null
        }), !this.I_exeOnLoad_check || this.I_exeOnLoad_check(e, t)) {
        v._images = bx.$cloneObject({}, b.images), v._down = !1;
        var h = !1;
        if (apn.dbUI && apn.dbUI.system && 1 == apn.dbUI.system.exeEventStart) {
            var S = apn.Project.getLayout(e.project).property.CExe;
            S && S.event && "Y" == S.event.TS1 && (h = !0)
        }
        "tab" == x || "toggle" == x ? ("tab" == x && (v._images.down = v._images.disabled, v._images.hover.mediaID || (v._images.hover = v._images.disabled)), v.apxOnEvent = function(e, a, i, d) {
            if (a == (h ? "tapStart" : "click")) return "toggle" == x ? "normal" == e.wgtGetProperty(t, "apxState") ? e.wgtSetProperty(t, "apxState", "disabled") : e.wgtSetProperty(t, "apxState", "normal") : "normal" == e.wgtGetProperty(t, "apxState") && e.wgtSetProperty(t, "apxState", "disabled"), !0
        }) : "check" == x && (v.apxOnEvent = function(e, a, i, d, n, n, o) {
            if (a == (h ? "tapStart" : "click")) return "normal" == e.wgtGetProperty(t, "apxState") ? e.wgtSetProperty(t, "apxState", "checked") : e.wgtSetProperty(t, "apxState", "normal"), !0
        }), h || (v._images.down.mediaID || b.clr && b.clr.down || v._images.disabledDown.mediaID || b.clr && b.clr.disabledDown) && (y = !0, v.btnOnDown = function(a) {
            if ("toggle" == x);
            else if ("check" == x);
            else if ("disabled" == e.wgtGetProperty(t, "apxState")) return;
            v._down || (v._down = !0, d(), b.hvrSync && e.ctxSet("uxWgtBtnImage_" + b.hvrSync, {
                oId: t,
                state: 2
            }))
        }), v.btnOnState = function(e) {
            n()
        }, h || (v._images.hover.mediaID || b.clr && b.clr.hover || v._images.disabledHover.mediaID || b.clr && b.clr.disabledHover || b.clr && b.clr.checkedH) && (m = !0, bx.HCL.DV.hasTouchEvent() || (v.onmousemove = function(i) {
            return !v.apnPassPointerEvent && (!v.apnBlockPointerEvent && void(v._down || (a(), b.hvrSync && (v._btnHover || (v._btnHover = !0, e.ctxSet("uxWgtBtnImage_" + b.hvrSync, {
                oId: t,
                state: 1
            }))))))
        }, v.onmouseout = function(a) {
            return !v.apnPassPointerEvent && (!v.apnBlockPointerEvent && (i(), void(b.hvrSync && v._btnHover && (v._btnHover = !1, v._down || e.ctxSet("uxWgtBtnImage_" + b.hvrSync, {
                oId: t,
                state: 0
            })))))
        })), e.viewer.o.verGestureDispatch && (v.apxOnGesture = function(e, t) {
            r(this, t)
        }), new bx.CGesture(v, r, {
            noDelayedEvent: !0,
            noLongholdEvent: !0
        }), v.btnOnState && v.btnOnState(v), b.hvrSync && e.wgtListenContext(t, "uxWgtBtnImage_" + b.hvrSync, l, !0), e.wgtListenProperty(t, "image", p), e.wgtListenProperty(t, "imageDisabled", g), e.wgtListenProperty(t, "imageChecked", u), e.wgtListenProperty(t, "imageSelected", c), this.I_exeOnLoad_post && this.I_exeOnLoad_post(e, t)
    }
}, xa.exeSetState = function(e, t, a, i) {
    function d(t) {
        "on" == e.wgtGetProperty(t, "apxState") ? e.wgtSetProperty(t, "apxState", "off", void 0, {
            stateInitialize: !0
        }) : "disabled" == e.wgtGetProperty(t, "apxState") || "checked" == e.wgtGetProperty(t, "apxState") ? e.wgtSetProperty(t, "apxState", "normal", void 0, {
            stateInitialize: !0
        }) : "2" == e.stateGetActive(t, !0) && (e.stateLayerActivate(t, "1"), e.stateSetActive(t, "1", !0))
    }
    if (i != a) {
        var n = e.wgtGetProperty(e.wgtId(t), "selectType");
        "toggle" == n || "check" == n || setTimeout(function() {
            "normal" == a ? "Block" == e.wgtGetProperty(t.apnOID, "apxVisibility") || 2 == e.wgtGetProperty(t.apnOID, "apxVisibility") || (e.tagBlockPointerEvent(t, !1), apn.IWidget.exeSetCursor(t, e.wgtGetProperty(t.apnOID, "apxCursor", !0))) : (e.tagBlockPointerEvent(t, !0), apn.IWidget.exeSetCursor(t, "inherit"))
        }, 0), t.btnOnState && t.btnOnState(t);
        var o = e.wgtId(t);
        e.wgtGetProperty(o, "uxToggleGroup") && ("disabled" != a && "checked" != a || e.utlIterateInGroup(o, "uxToggleGroup", d))
    }
}, xa.exeOnScreenRefresh = apn.widgets["apn.wgt.rect"].exeOnScreenRefresh, xa.setTextColor = function(e, t, a) {
    var i, d = e.wgtTag(t),
        n = e.wgtGetProperty(t, "cfg"),
        o = e.wgtGetProperty(t, "btnV"),
        r = !!e.wgtGetProperty(t, "apxText");
    r && (i = d.textTag ? d.textTag : d), i && n.clr && ("normal" == a ? (d == i ? i.style.color = apn.Project.resolveStyle(e.project, "fontStyle", e.wgtGetProperty(t, "apxTextColor")) : i.style.color = "inherit", 2 == o && (d.style.borderColor = apn.Project.resolveStyle(e.project, "strokeStyle", e.wgtGetProperty(t, "apxStrokeStyle")))) : n.clr[a] && (i.style.color = n.clr[a], 2 == o && (d.style.borderColor = n.clr[a])))
}, xa.createAsCanvasObject = function(e, t, a, i, d) {
    return apn.IWidget.createCanvasObject(e, this, "apn.CImage", bx.CCanvasWnd.SHAPE_RECT, t, a, i, d)
}, xa.edtOnConfig = function(e, t) {
    function a() {
        eduLib.edtInputApplyAll(e, i.tagSub), eduLib.edtInputApplyAll(e, i.tagOrg), r.edtOnSetState(e, t, e.wgtGetProperty(t, "apxState")), e.wgtSetProperty(t, "cfg", d), n && (e.wgtSetProperty(t, "local", n), r.I_edtOnConfig_save && r.I_edtOnConfig_save(e, t, n, i, i.tagSub, i.tagOrg)), i._tmpSelectType && e.wgtSetProperty(t, "selectType", i._tmpSelectType)
    }
    var i, d = e.wgtGetProperty(t, "cfg"),
        n = e.wgtGetProperty(t, "local"),
        o = e.wgtGetProperty(t, "selectType");
    d.images.disabledDown || (d.images.disabledDown = {
        mediaID: void 0
    }), d.images.disabledHover || (d.images.disabledHover = {
        mediaID: void 0
    }), d.clr || (d.clr = {
        disabled: null,
        down: null,
        hover: null
    });
    var r = this;
    (i = e.dlgDoModal(700, Math.ceil(.8 * bx.UX.height), a)) && (i.tagSub = i.$TAG("div"), i.tagOrg = i.$TAG("div"), this.I_edtOnConfig && this.I_edtOnConfig(e, t, n, i, i.tagSub, i.tagOrg), uxWgtBtnImage.I_edtOnConfigBuild.call(this, e, t, i, i.tagOrg, o))
}, xa.I_edtOnConfigBuild = function(e, t, a, i, d) {
    var n = e.wgtGetProperty(t, "cfg");
    a._tmpSelectType = d;
    var o = apn.CExe.GL({
            ko: "비활성 상태",
            en: "Disabled",
            ja: "非アクティブ"
        }),
        r = apn.CExe.GL({
            ko: "기본 상태",
            en: "Normal",
            ja: "基本状態"
        }),
        l = apn.CExe.GL({
            ko: "버튼 상태 표시를 위한 이미지",
            en: "Image for each states",
            ja: "ボタンの状態を表示するための画像"
        }),
        s = r,
        p = o;
    if (2 == e.wgtGetProperty(t, "btnV")) var g = apn.CExe.GL({
        ko: "버튼 상태 표시를 위한 텍스트/테두리 색상",
        en: "Text/border color for each states",
        ja: "ボタンの状態を表示するためのテキスト/枠線の色"
    });
    else var g = apn.CExe.GL({
        ko: "버튼 상태 표시를 위한 텍스트 색상",
        en: "Text color for each states",
        ja: "ボタンの状態を表示するためのテキストの色"
    });
    this.I_edtOnConfig_title && this.I_edtOnConfig_title(e, t, a, "normal") && (s = this.I_edtOnConfig_title(e, t, a, "normal")), this.I_edtOnConfig_title && this.I_edtOnConfig_title(e, t, a, "disabled") && (p = this.I_edtOnConfig_title(e, t, a, "disabled")), i.eduLib && delete i.eduLib, i.innerHTML = "";
    var u = "text" == e.wgtGetProperty(t, "btnType"),
        c = !!e.wgtGetProperty(t, "apxText");
    if ("tab" == d) s == r && (s = apn.CExe.GL({
        ko: "미선택 상태",
        en: "Unselected",
        ja: "未選択の状態"
    })), p == o && (p = apn.CExe.GL({
        ko: "선택 상태",
        en: "Selected",
        ja: "選択状態"
    })), u || (eduLib.edtInputAdd(e, i, {
        type: "title",
        title: l
    }), eduLib.edtInputAdd(e, i, {
        type: "image",
        title: s + "",
        value: n.images,
        key: "normal",
        join: !0
    }), eduLib.edtInputAdd(e, i, {
        type: "image",
        title: s + " Hover",
        value: n.images,
        key: "hover",
        join: !0
    }), eduLib.edtInputAdd(e, i, {
        type: "image",
        title: p + "",
        value: n.images,
        key: "disabled",
        join: !0
    })), n.clr && (c || u) && (n.clr.down && (n.clr.down = null), eduLib.edtInputAdd(e, i, {
        type: "space"
    }), eduLib.edtInputAdd(e, i, {
        type: "title",
        title: g
    }), eduLib.edtInputAdd(e, i, {
        type: "color",
        askUse: !0,
        title: p,
        value: n.clr,
        key: "disabled",
        join: !0
    }), eduLib.edtInputAdd(e, i, {
        type: "color",
        askUse: !0,
        title: s + " Hover",
        value: n.clr,
        key: "hover",
        join: !0
    }));
    else if ("toggle" == d) p == o && (p = "Selected"), u || (eduLib.edtInputAdd(e, i, {
        type: "title",
        title: l
    }), eduLib.edtInputAdd(e, i, {
        type: "image",
        title: p + "",
        value: n.images,
        key: "disabled",
        join: !0
    }), eduLib.edtInputAdd(e, i, {
        type: "image",
        title: p + " Hover",
        value: n.images,
        key: "disabledHover",
        join: !0
    }), eduLib.edtInputAdd(e, i, {
        type: "image",
        title: p + " Pressed",
        value: n.images,
        key: "disabledDown",
        join: !0
    }), eduLib.edtInputAdd(e, i, {
        type: "space",
        join: !0
    }), eduLib.edtInputAdd(e, i, {
        type: "image",
        title: s + "",
        value: n.images,
        key: "normal",
        join: !0
    }), eduLib.edtInputAdd(e, i, {
        type: "image",
        title: s + " Hover",
        value: n.images,
        key: "hover",
        join: !0
    }), eduLib.edtInputAdd(e, i, {
        type: "image",
        title: s + " Pressed",
        value: n.images,
        key: "down",
        join: !0
    })), n.clr && (c || u) && (eduLib.edtInputAdd(e, i, {
        type: "space"
    }), eduLib.edtInputAdd(e, i, {
        type: "title",
        title: g
    }), eduLib.edtInputAdd(e, i, {
        type: "color",
        askUse: !0,
        title: p,
        value: n.clr,
        key: "disabled",
        join: !0
    }), eduLib.edtInputAdd(e, i, {
        type: "color",
        askUse: !0,
        title: p + " Hover",
        value: n.clr,
        key: "disabledHover",
        join: !0
    }), eduLib.edtInputAdd(e, i, {
        type: "color",
        askUse: !0,
        title: p + " Pressed",
        value: n.clr,
        key: "disabledDown",
        join: !0
    }), eduLib.edtInputAdd(e, i, {
        type: "space",
        join: !0
    }), eduLib.edtInputAdd(e, i, {
        type: "color",
        askUse: !0,
        title: s + " Hover",
        value: n.clr,
        key: "hover",
        join: !0
    }), eduLib.edtInputAdd(e, i, {
        type: "color",
        askUse: !0,
        title: s + " Pressed",
        value: n.clr,
        key: "down",
        join: !0
    }));
    else if ("check" == d) {
        s = apn.CExe.GL({
            ko: "미선택 상태",
            en: "Unchecked",
            ja: "未選択の状態"
        });
        var m = apn.CExe.GL({
            ko: "선택 상태",
            en: "Checked",
            ja: "選択状態"
        });
        u || (eduLib.edtInputAdd(e, i, {
            type: "title",
            title: l
        }), eduLib.edtInputAdd(e, i, {
            type: "image",
            title: m + "",
            value: n.images,
            key: "checked",
            join: !0
        }), eduLib.edtInputAdd(e, i, {
            type: "image",
            title: m + " Hover",
            value: n.images,
            key: "checkedH",
            join: !0
        }), eduLib.edtInputAdd(e, i, {
            type: "space",
            join: !0
        }), eduLib.edtInputAdd(e, i, {
            type: "image",
            title: s + "",
            value: n.images,
            key: "normal",
            join: !0
        }), eduLib.edtInputAdd(e, i, {
            type: "image",
            title: s + " Hover",
            value: n.images,
            key: "hover",
            join: !0
        })), n.clr && (c || u) && (eduLib.edtInputAdd(e, i, {
            type: "space"
        }), eduLib.edtInputAdd(e, i, {
            type: "title",
            title: g
        }), eduLib.edtInputAdd(e, i, {
            type: "color",
            askUse: !0,
            title: m,
            value: n.clr,
            key: "checked",
            join: !0
        }), eduLib.edtInputAdd(e, i, {
            type: "color",
            askUse: !0,
            title: m + " Hover",
            value: n.clr,
            key: "checkedH",
            join: !0
        }), eduLib.edtInputAdd(e, i, {
            type: "space",
            join: !0
        }), eduLib.edtInputAdd(e, i, {
            type: "color",
            askUse: !0,
            title: s + " Hover",
            value: n.clr,
            key: "hover",
            join: !0
        }))
    } else u || (eduLib.edtInputAdd(e, i, {
        type: "title",
        title: l
    }), eduLib.edtInputAdd(e, i, {
        type: "image",
        title: s + "",
        value: n.images,
        key: "normal",
        join: !0
    }), eduLib.edtInputAdd(e, i, {
        type: "image",
        title: s + " Hover",
        value: n.images,
        key: "hover",
        join: !0
    }), eduLib.edtInputAdd(e, i, {
        type: "image",
        title: s + " Pressed",
        value: n.images,
        key: "down",
        join: !0
    }), "simple" != d && (eduLib.edtInputAdd(e, i, {
        type: "space",
        join: !0
    }), eduLib.edtInputAdd(e, i, {
        type: "image",
        title: p,
        value: n.images,
        key: "disabled",
        join: !0
    }))), n.clr && (c || u) && (eduLib.edtInputAdd(e, i, {
        type: "space"
    }), eduLib.edtInputAdd(e, i, {
        type: "title",
        title: g
    }), eduLib.edtInputAdd(e, i, {
        type: "color",
        askUse: !0,
        title: s + " Hover",
        value: n.clr,
        key: "hover",
        join: !0
    }), eduLib.edtInputAdd(e, i, {
        type: "color",
        askUse: !0,
        title: s + " Pressed",
        value: n.clr,
        key: "down",
        join: !0
    }), "simple" != d && eduLib.edtInputAdd(e, i, {
        type: "color",
        askUse: !0,
        title: p,
        value: n.clr,
        key: "disabled",
        join: !0
    })), eduLib.edtInputAdd(e, i, {
        type: "space"
    }), eduLib.edtInputAdd(e, i, {
        type: "title",
        title: apn.CExe.GL({
            ko: "버튼간 Hover/Pressed 상태 동기화",
            en: "Synchronize Hover/Pressed status with buttons",
            ja: "ボタン間Hover/Pressed状態を同期"
        })
    }), eduLib.edtInputAdd(e, i, {
        type: "text",
        title: apn.CExe.GL({
            ko: "그룹 지정",
            en: "Group",
            ja: "グループ指定"
        }),
        value: n,
        key: "hvrSync",
        comment: apn.CExe.GL({
            ko: "(편집자가 할당한 그룹ID)",
            en: "(Unique group ID assigned by user(editor))",
            ja: "（編集者が割り当てたグループID）"
        }),
        join: !0
    });
    eduLib.edtInputAdd(e, i, {
        type: "space"
    }), eduLib.edtInputAdd(e, i, {
        type: "title",
        title: apn.CExe.GL({
            ko: "도움말(툴팁)",
            en: "Tooltip",
            ja: "ヘルプ（ツールチップ）"
        })
    }), eduLib.edtInputAdd(e, i, {
        type: "text",
        title: apn.CExe.GL({
            ko: "메시지",
            en: "Message",
            ja: "メッセージ"
        }),
        value: n,
        key: "ttip",
        join: !0
    })
}, xa.edtOnSetState = function(e, t, a) {
    var i = e.wgtGetProperty(t, "cfg");
    i.images[a].mediaID ? e.wgtSetProperty(t, "apxMediaID", i.images[a].mediaID, e.wgtGetProperty(t, "autoKeepSize")) : e.wgtSetProperty(t, "apxMediaID", null)
}, xa.edtOnBuildState = function(e, t, a, i) {
    var d, n = e.pages[a].objects[t].create.data;
    n && n.properties && n.properties.attrs && (d = n.properties.attrs.selectType), "tab" == d || "toggle" == d ? (i.disabled = "Selected", i.normal = "Unselected") : "check" == d ? (i.checked = "Checked", i.normal = "Unchecked") : (i.normal = "Normal", i.disabled = "Disabled")
}, xa.pubOnGetHTML = function(e, t, a, i) {
    var d = apn.IWidget.htmlRender(this, e, t, a),
        n = "<div";
    d.css += "overflow:hidden;", d.style.mediaID && (d.css += "background-size:100% 100%;background-repeat:no-repeat;background-image: url(" + apn.Project.mediaResolve(e, d.style.mediaID, !1, !0) + ");");
    var o = "",
        r = e.pages[t].objects[a].create.data.properties.attrs;
    return r.ttip && (o += ' title="' + apn.IWidget.exeFormatText(r.ttip, {
        xml: !0,
        noTag: !0
    }) + '"'), n += ' style="' + d.css + '"' + o, n += ' class="apxWgt1' + (i && i.addCls ? " " + i.addCls : "") + '"', n += i && i.noId ? ">" : ' data-apx-id="' + a + '">', n += "</div>"
}, uxWgtBtnImage = xa;
var xa = apn.inheritWidget(apn.widgets["apn.wgt.layerContainer"]);
xa.editor = xa.editor || {}, xa.editor.iconThumb = "DB/EDU/imgs/wgts/thumbs/spriteAnimation.png", xa.editor.states = {
    play: "Play",
    loop: "Loop",
    stop: "Stop"
}, xa.scriptInfo = void 0, xa.properties.state = "stop", xa.properties.attrs = {
    apxAnimate: !0,
    cfg: {
        idStep: ""
    }
}, xa.createAsCanvasObject = function(t, e, a, i, r) {
    return apn.IWidget.createCanvasObject(t, apn.widgets["apn.wgt.layerContainer"], "apn.CLayerContainer", bx.CCanvasWnd.SHAPE_RECT, e, a, i, r, {
        orderedActive: !0
    })
}, xa.exeFireStateEvent = void 0, xa.exeSetState = function(t, e, a) {
    a && ("play" == a || "loop" == a ? t.wgtAniCheck(t.wgtId(e)) > 1 && t.wgtAniRun(t.wgtId(e), "play" == a ? 1 : 2) && t.fireEvent("animation", "Start", e.apnOID) : "stop" == a && t.wgtAniSet(t.wgtId(e)))
}, xa.exeOnLoad = function(t, e) {
    function a(a, r) {
        if (a == i.idStep && r) {
            var n = apn.Project.getStateByObjectID(t.viewer.project, t.getPageID(), e);
            n && (apn.UTIL.sort(n, "order", 1, !0), n[r.current] && n[r.current].stateID && t.wgtSetProperty(e, "apxLayer", n[r.current].stateID))
        }
    }
    var i = t.wgtGetProperty(e, "cfg");
    i && i.idStep && t.wgtTag(i.idStep) && t.wgtListenProperty(e, "apxStep", a)
}, xa.edtSetupStep = function(t, e, a, i) {
    var r = t.getScreenData(),
        n = [{
            title: apn.CExe.GL({
                ko: "[없음]",
                en: "[None]",
                ja: "[なし]"
            }),
            value: ""
        }];
    for (var o in r.objects) r.objects[o].create && r.objects[o].create.data && r.objects[o].create.data.properties && r.objects[o].create.data.properties.attrs && r.objects[o].create.data.properties.attrs.apxStep && n.push({
        value: o,
        title: t.itrGetObjectTitle(o)
    });
    eduLib.edtInputAdd(t, a, {
        type: "select",
        options: n,
        title: apn.CExe.GL({
            ko: "연동할 위젯",
            en: "Widget to interface with",
            ja: "連動するウィジェット"
        }),
        key: "idStep",
        value: i,
        join: !0
    })
}, xa.edtOnConfig = function(t, e) {
    function a() {
        eduLib.edtInputApplyAll(t, i), t.wgtSetProperty(e, "cfg", r)
    }
    var i, r = t.wgtGetProperty(e, "cfg") || {
        idStep: ""
    };
    if (i = t.dlgDoModal(600, 200, a)) {
        var n = apn.CExe.CSS_SETUP_PANE + "height:" + (i.clientHeight - 40) + "px";
        i.tagTab = i.$TAG("div", {
            style: "position:relative;font-weight:bold;width:100%;height:26px;padding-bottom:14px;"
        }), i.tagTab.innerHTML = '<span id="tagTab2" style="' + apn.CExe.CSS_SETUP_TAB + '">' + apn.CExe.GL({
            ko: "스텝 연동",
            en: "Step Interface",
            ja: "ステップ連動"
        }) + "</span>" + apn.CExe.CSS_SETUP_TAB_END, i.tagTab2 = i.$TAG("div", {
            style: n
        }), this.edtSetupStep(t, e, i.tagTab2, r), i.tagTab.$$("tagTab2").style.borderStyle = "solid solid none solid", i.tagTab.$$("tagBlank").style.width = i.clientWidth - i.tagTab.$$("tagBlank").offsetLeft - 1 + "px"
    }
}, xa.WGTS_SHOW = ["edu.wgt.animSprite", "apn.wgt.rect", "apn.wgt.singleText", "apn.wgt.roundRect", "apn.wgt.ellipse", "apn.wgt.line", "apn.wgt.image2", "apn.wgt.polygon", "apn.wgt.video", "apn.wgt.itrAreaRect", "apn.wgt.itrAreaEllipse", "ux.wgt.imgSprite", "ux.wgt.shtSprite"], xa.onEdit = function(t, e) {
    apn.widgets.utils.editWidget(t.getObjectByID(e), t, 2, !0, {
        wgtsShow: this.WGTS_SHOW,
        layerTitleFromOrder: !0,
        layerDuration: apx.wgt.spriteDefaultFrameDuration,
        layerOrdering: !0,
        layerScrollbar: "always"
    })
}, eduWgtAnimSprite = xa, xa = apn.inheritWidget(apn.widgets["apn.wgt.sceneContainer"]), xa.exeItrNoResize = !0, xa.editor = xa.editor || {}, xa.editor.iconThumb = "DB/EDU/imgs/wgts/thumbs/sceneAnimation.png", xa.editor.states = {
    play: "Play",
    loop: "Loop",
    stop: "Stop",
    stopL: "StopAtLast"
}, xa.properties.state = "stop", xa.properties.attrs = {
    apxAnimate: !0,
    ver: 2,
    ofl: ""
}, xa.exeSetState = function(t, e, a, i) {
    function r(t, e) {
        return void 0 === t.order && void 0 === e.order ? 0 : void 0 === t.order ? 1 : void 0 === e.order ? -1 : t.order - e.order
    }
    if (a)
        if (i || "stopL" != a || (a = "stop"), "stopL" == a) {
            var n = apn.Project.getStateByObjectID(t.project, t.getPageID(), e.apnOID);
            n && n.length > 0 && (n.sort(r), t.wgtAniSet(t.wgtId(e), void 0, n[n.length - 1].title))
        } else eduWgtAnimSprite.exeSetState.call(this, t, e, a)
}, xa.exeOnLoad = eduWgtAnimSprite.exeOnLoad, xa.onEdit = function(t, e) {
    apn.widgets.utils.editWidget(t.getObjectByID(e), t, 1, !0, {
        layerTitleFromOrder: !0,
        layerDuration: apx.wgt.spriteDefaultFrameDuration,
        layerOrdering: !0,
        layerScrollbar: "always",
        wgtsShow: apn.widgets["apn.wgt.sceneContainer"].WGTS_SHOW,
        editNoGroup: !0
    })
}, eduWgtAnimScene = xa, xa = apn.inheritWidget(apn.widgets["apn.wgt.layerContainer"]), xa.editor = xa.editor || {}, xa.editor.iconThumb = "DB/EDU/imgs/wgts/common/icon_thumb.png", xa.properties.attrs = {
    apxAnimateHolder: !0
}, xa.exeSetState = void 0, xa.onEdit = function(t, e) {
    apn.widgets.utils.editWidget(t.getObjectByID(e), t, 2, !0, {
        layerTitlePrefix: "State",
        layerScrollbar: "always"
    })
}, eduWgtAnimHolder = xa, xa = apn.inheritWidget(eduWgtAnimHolder), xa.editor = xa.editor || {}, xa.editor.iconThumb = "DB/EDU/imgs/wgts/thumbs/sceneAnimation.png", xa.properties.attrs = {
    apxAnimateHolder: !0
}, xa.exeSetState = function(t, e, a, r) {
    var n, o, p = t.screen.objects[e.apnOID].layout.layers;
    for (i in p)
        for (n = t.getWidgetsByProperty("apxAnimate", p[i].id), o = 0; o < n.length; o++) i != a ? t.wgtSetProperty(n[o], "apxState", "stop") : t.wgtSetProperty(n[o], "apxState", "loop");
    a != r && t.fireEvent("stateChange", a, e.apnOID)
}, xa.exeOnStart = function(t, e) {
    var a = this;
    setTimeout(function() {
        a.exeSetState(t, t.wgtTag(e), t.stateGetActive(e))
    }, 0)
}, eduWgtAnimHolder2 = xa;
var xa;
xa = apn.inheritWidget(apn.widgets["apn.wgt.image"]), xa.editor = {}, xa.editor.iconThumb = "DB/EDU/imgs/wgts/thumbs/spriteAnimation.png", xa.editor.states = {
    play: "Play",
    loop: "Loop",
    stop: "Stop"
}, xa.properties.state = "stop", xa.properties.attrs = {
    apxAnimate: !0,
    cfg: {
        frames: [{
            sprite: {
                mediaID: void 0
            },
            duration: 42
        }],
        idStep: ""
    }
}, xa.onEdit = void 0, xa.exeCreateTag = apn.widgets["apn.wgt.rect"].exeCreateTag, xa.exeRenderTag = apn.widgets["apn.wgt.rect"].exeRenderTag, xa.exeAssetLoad = void 0, xa.exeAssetPreload = function(e, t, a) {
    function i(i, s, c) {
        a(), uxWgtImgSprite._frame(e, n, n.ctx.cur), r.exeOnCheckContentLoad && e.fireEvent("contentLoad", "i", t, !0, e.project.property.allowImmediateContentLoad)
    }
    var r = this,
        n = e.wgtTag(t);
    n.ctx = {}, n.ctx.frames = [], n.ctx.cur = 0, n.ctx.action = 0, n.ctx.lastTickTime = 0;
    for (var s = e.wgtGetProperty(t, "cfg"), c = 0, o = {}, d = 0; d < s.frames.length; d++) buf = bx.$cloneObject({}, s.frames[d]), buf.duration = bx.$checkNaN(parseInt(buf.duration)), buf.sprite.mediaID && buf.duration && (o["sp" + d] = {
        url: e.mediaURL(s.frames[d].sprite.mediaID)
    }, c++, buf.img = o["sp" + d], n.ctx.frames.push(buf));
    c ? (new apn.CRscLoader).load(e.project, o, i) : a()
}, xa.exeOnLoad = function(e, t) {
    function a(a, n) {
        if (a == r.idStep && n) {
            if (!i.ctx.frames[n.current]) return void e.log(t, "Invalid frame was requested to display by step interface. FrameIndex=" + n.current);
            i.ctx.cur != n.current && n.current < i.ctx.frames.length && (i.ctx.cur = n.current, uxWgtImgSprite._frame(e, i, i.ctx.cur))
        }
    }
    var i = e.wgtTag(t),
        r = e.wgtGetProperty(t, "cfg");
    bx.HCL.DV.isIE() && bx.HCL.DV.isIE() < 9 ? i.img = i.$TAG("img", {
        style: "cursor:inherit;position:absolute;left:0px;top:0px;width:100%;height:100%;"
    }) : (i.canvas = i.$TAG("canvas", {
        style: "cursor:inherit;position:absolute;left:0px;top:0px;width:100%;height:100%;"
    }), i.canvas.width = parseInt(i.style.width), i.canvas.height = parseInt(i.style.height)), uxWgtImgSprite._frame(e, i, i.ctx.cur), r.idStep && e.wgtListenProperty(t, "apxStep", a)
}, xa.exeOnCheckContentLoad = function(e, t, a) {
    return {
        i: "Image"
    }
}, xa.exeSetState = function(e, t, a, i) {
    "stop" == a ? this._stop(e, t, !0) : "play" == a ? (t.ctx.action = 1, t.ctx.lastTickTime = 0, e.fireEvent("animation", "Start", e.wgtId(t))) : "loop" == a && (t.ctx.action = 2, t.ctx.lastTickTime = 0, e.fireEvent("animation", "Start", e.wgtId(t)))
}, xa.exeOnTick = function(e, t, a) {
    var i = e.wgtTag(t);
    if (i.ctx && i.ctx.frames.length && 0 != i.ctx.action) {
        i.ctx._onceStarted = !0;
        var r;
        0 == i.ctx.lastTickTime ? (i.ctx.cur = 0, r = !0) : i.ctx.lastTickTime < a && (r = !0, 2 == i.ctx.action ? i.ctx.cur = (i.ctx.cur + 1) % i.ctx.frames.length : (i.ctx.cur++, i.ctx.cur == i.ctx.frames.length && (i.ctx.cur = 0, this._stop(e, i), r = !1))), r && (i.ctx.lastTickTime = a + parseInt(i.ctx.frames[i.ctx.cur].duration), uxWgtImgSprite._frame(e, i, i.ctx.cur))
    }
}, xa._frame = function(e, t, a) {
    if (t.ctx.frames[a] && t.ctx.frames[a].img.image)
        if (t.canvas) {
            var i = t.canvas.getContext("2d");
            i.clearRect(0, 0, i.canvas.width, i.canvas.height), i.drawImage(t.ctx.frames[a].img.image, 0, 0, i.canvas.width, i.canvas.height)
        } else t.img && (t.img.src = t.ctx.frames[a].img.url)
}, xa._stop = function(e, t, a) {
    t.ctx.action = 0, t.ctx.lastTickTime = 0, a && t.ctx.frames[0] && t.ctx.frames[0].sprite.mediaID && (t.ctx.cur = 0, uxWgtImgSprite._frame(e, t, 0)), t.ctx._onceStarted && e.fireEvent("animation", "End", e.wgtId(t))
}, xa.edtSetupStep = function(e, t, a, i) {
    var r = e.getScreenData(),
        n = [{
            title: apn.CExe.GL({
                ko: "[없음]",
                en: "[None]",
                ja: "[なし]"
            }),
            value: ""
        }];
    for (var s in r.objects) r.objects[s].create && r.objects[s].create.data && r.objects[s].create.data.properties && r.objects[s].create.data.properties.attrs && r.objects[s].create.data.properties.attrs.apxStep && n.push({
        value: s,
        title: e.itrGetObjectTitle(s)
    });
    eduLib.edtInputAdd(e, a, {
        type: "select",
        options: n,
        title: apn.CExe.GL({
            ko: "연동할 위젯",
            en: "Widget to interface with",
            ja: "連動するウィジェット"
        }),
        key: "idStep",
        value: i,
        join: !0
    })
}, xa.edtOnConfig = function(e, t) {
    function a() {
        eduLib.edtInputApplyAll(e, r.tagTab1), eduLib.edtInputApplyAll(e, r.tagTab2), n.frames[0].sprite.mediaID && e.wgtSetProperty(t, "apxMediaID", n.frames[0].sprite.mediaID), e.wgtSetProperty(t, "cfg", n), e.wgtRefreshUI(t)
    }

    function i() {
        for (var e in s) s[e] && (this.id == e ? (r[e].style.display = "block", r.tagTab.$$(e).style.borderStyle = "solid solid none solid") : (r[e].style.display = "none", r.tagTab.$$(e).style.borderStyle = "none none solid none"));
        uxWgtImgSprite._uiLastSetupTab = this.id
    }
    var r, n = e.wgtGetProperty(t, "cfg"),
        s = {
            tagTab1: !0,
            tagTab2: !0
        };
    if (r = e.dlgDoModal(600, Math.ceil(.9 * bx.UX.height), a)) {
        var c = apn.CExe.CSS_SETUP_PANE + "height:" + (r.clientHeight - 40) + "px";
        r.tagTab = r.$TAG("div", {
            style: "position:relative;font-weight:bold;width:100%;height:26px;padding-bottom:14px;"
        }), r.tagTab.innerHTML = '<span id="tagTab1" style="' + apn.CExe.CSS_SETUP_TAB + '">' + apn.CExe.GL({
            ko: "스프라이트",
            en: "Sprite Sheet",
            ja: "スプライト"
        }) + '</span><span id="tagTab2" style="' + apn.CExe.CSS_SETUP_TAB + '">' + apn.CExe.GL({
            ko: "스텝 연동",
            en: "Step Interface",
            ja: "ステップ連動"
        }) + "</span>" + apn.CExe.CSS_SETUP_TAB_END, r.tagTab.$$("tagTab1").onclick = r.tagTab.$$("tagTab2").onclick = i, r.tagTab1 = r.$TAG("div", {
            style: c
        }), r.tagTab2 = r.$TAG("div", {
            style: c
        }), eduLib.edtInputAdd(e, r.tagTab1, {
            type: "table",
            value: n.frames,
            options: {
                th: [apn.CExe.GL({
                    ko: "프레임 이미지",
                    en: "Frame image",
                    ja: "フレーム画像"
                }), apn.CExe.GL({
                    ko: "프레임 시간",
                    en: "Duration",
                    ja: "フレーム時間"
                }) + "[ms]"],
                add: !0,
                remove: !0,
                order: !0
            },
            td: [{
                type: "image",
                key: "sprite"
            }, {
                type: "text",
                key: "duration",
                width: "110px"
            }],
            join: !0
        }), eduLib.edtInputAdd(e, r.tagTab1, {
            type: "message",
            value: "※ " + apn.CExe.GL({
                ko: "과도한 이미지의 사용은 HTML5 컨텐츠의 성능을 크게 저하시킵니다. 그러한 경우, Video로 제작하거나 Scene Animation으로 편집하는 것이 좋습니다.",
                en: "Excessive image resources will slow down HTML5 contents. In that case, video or Scene Animation is better.",
                ja: "過度な画像の使用は、HTML5コンテンツのパフォーマンスを大幅に低下させます。その場合、Videoでの製作や、Scene Animationでの編集をお勧めします。"
            }),
            join: !0
        }), this.edtSetupStep(e, t, r.tagTab2, n), void 0 !== uxWgtImgSprite._uiLastSetupTab && r.tagTab.$$(uxWgtImgSprite._uiLastSetupTab) ? r.tagTab.$$(uxWgtImgSprite._uiLastSetupTab).onclick() : r.tagTab.$$("tagTab1").onclick(), r.tagTab.$$("tagBlank").style.width = r.clientWidth - r.tagTab.$$("tagBlank").offsetLeft - 1 + "px"
    }
}, xa.edtOnRemapObjectID = function(e, t, a) {
    if (t && t.properties && t.properties.attrs && t.properties.attrs.cfg) {
        var i = t.properties.attrs.cfg;
        i.idStep && (a[i.idStep] ? i.idStep = a[i.idStep] : e.getScreenData().objects[i.idStep] || (i.idStep = ""))
    }
}, uxWgtImgSprite = xa, xa = apn.inheritWidget(uxWgtImgSprite), xa.properties.attrs.imgCropSprite = !0, xa.properties.attrs.ver = 2, xa.properties.attrs.cfg = {
    ty: "s",
    mr: 0,
    s: {
        img: {
            mediaID: void 0
        },
        w: 64,
        h: 64,
        cnt: 1,
        cols: 0,
        x: 0,
        y: 0,
        tm: 42,
        tmSet: ""
    },
    f: {
        file: {
            size: 0,
            data: ""
        },
        edt: {}
    },
    idStep: ""
}, xa.scriptInfo = {
    wgtData: {
        sheet: {
            help: "{type:'simple', data:{img:{mediaID:id}, w:Number, h:Number, cnt:Number, x:Number, y:Number, tm:Msec}\nSprite sheet data.",
            type: "so"
        }
    },
    wgtRun: {
        showFrame: {
            param: "1-based Number",
            help: {
                ko: "지정된 프레임을 표시합니다.",
                en: "Show the designated frame",
                ja: "指定されたフレームを表示します。"
            }
        }
    }
}, xa.exeCreateTag = apn.widgets["apn.wgt.rect"].exeCreateTag, xa.exeRenderTag = function(e, t, a, i, r, n) {
    return apn.widgets["apn.wgt.rect"].exeRenderTag.call(this, e, t, a, i, r, n), a.tagOnPostResize = function(e, t) {
        if (t.ctx.cellHolder) {
            var a = e.wgtGetProperty(t.apnOID, "cfg"),
                i = 1,
                r = parseInt(t.style.width) / (a.s.w * i),
                n = parseInt(t.style.height) / (a.s.h * i);
            r = parseInt(t.style.width) / a.s.w, n = parseInt(t.style.height) / a.s.h, t.ctx.cellHolder.$CSS({
                transform: "scale(" + r * i + "," + n * i + ")",
                transformOrigin: "0px 0px"
            })
        }
    }, a
}, xa.exeAssetPreload = function(e, t, a) {
    function i(i, o, d) {
        r.ctx.image = s.sp.image, c._loadSpriteSheet(e, t, n), a(), c.exeOnCheckContentLoad && e.fireEvent("contentLoad", "i", t, !0, e.project.property.allowImmediateContentLoad)
    }
    var r = e.wgtTag(t);
    r.ctx = {}, r.ctx.cur = 0, r.ctx.action = 0, r.ctx.lastTickTime = 0, r.ctx.frames = [];
    var n = e.wgtGetProperty(t, "cfg");
    if (n.s.img.mediaID) {
        var s = {},
            c = this;
        s.sp = {
            url: e.mediaURL(n.s.img.mediaID)
        }, (new apn.CRscLoader).load(e.project, s, i)
    } else a()
}, xa.exeOnCheckContentLoad = function(e, t, a) {
    return {
        i: "Image"
    }
}, xa.exeOnLoad = function(e, t) {
    function a(a, i) {
        function n(a, n, o) {
            a == n && (r.ctx.image = c.sp.image, i.data.h = c.sht.image.height, i.data.w = Math.max(1, c.sht.image.width / i.data.cnt), s._loadSpriteSheet(e, t, {
                ty: "s",
                s: i.data
            }))
        }
        if (a == t && i && i.type && i.data && i.data.img && i.data.img.mediaID && i.data.cnt && "simple" == i.type)
            if (i.data.w && i.data.h) s._loadSpriteSheet(e, t, {
                ty: "s",
                s: i.data
            });
            else {
                var c = {};
                c.sht = {
                    url: e.mediaURL(i.data.img.mediaID)
                }, (new apn.CRscLoader).load(e.project, c, n)
            }
    }

    function i(a, i) {
        if (a == n.idStep && i) {
            if (!r.ctx.frames[i.current]) return void e.log(t, "Invalid frame was requested to display by step interface. FrameIndex=" + i.current);
            r.ctx.cur != i.current && i.current < r.ctx.frames.length && (r.ctx.cur = i.current, s._render(e, r, r.ctx.frames[r.ctx.cur]))
        }
    }
    var r = e.wgtTag(t),
        n = e.wgtGetProperty(t, "cfg"),
        s = this;
    if (e.wgtListenProperty(t, "sheet", a), n.idStep) {
        var s = this;
        e.wgtListenProperty(t, "apxStep", i)
    }
}, xa._loadSpriteSheet = function(e, t, a) {
    var i = e.wgtTag(t);
    if (i) {
        var r = [];
        if (a.s.tmSet)
            for (var n = a.s.tmSet.split(";"), s = 0; s < n.length; s++) n[s] && parseInt(n[s]) && (r[s] = parseInt(n[s]));
        if ("s" == a.ty && a.s.img.mediaID && a.s.w && a.s.h && a.s.cnt && a.s.tm)
            for (var c = a.s.cols || a.s.cnt, o = x = bx.$checkNaN(parseInt(a.s.x)) || 0, d = bx.$checkNaN(parseInt(a.s.y)) || 0, s = 0; s < a.s.cnt; s++) i.ctx.frames[s] = {
                x: x,
                y: d,
                w: a.s.w,
                h: a.s.h,
                offX: 0,
                offY: 0,
                tm: r[s] ? r[s] : a.s.tm
            }, x += a.s.w, (s + 1) % c == 0 && (x = o, d += a.s.h);
        else if ("f" == a.ty && a.f && a.f.file && a.f.file.data) {
            try {
                var l = JSON.parse(a.f.file.data)
            } catch (a) {
                e.log(t, "JSON file parsing error:" + a)
            }
            if (l && l.frames) {
                var p = 0;
                for (var s in l.frames) l.frames[s].frame && (i.ctx.frames.push({
                    x: l.frames[s].frame.x,
                    y: l.frames[s].frame.y,
                    w: l.frames[s].frame.w,
                    h: l.frames[s].frame.h,
                    offX: l.frames[s].spriteSourceSize.x,
                    offY: l.frames[s].spriteSourceSize.y,
                    tm: r[p] ? r[p] : a.s.tm
                }), p++)
            }
        }
        if (i.ctx.useCanvas = !1, 2 != e.wgtGetProperty(t, "ver") || bx.HCL.DV.isIE() && bx.HCL.DV.isIE() < 9 || (i.ctx.useCanvas = !0), i.ctx.cellInfo = a, i.ctx.useCanvas) {
            if (i.ctx.cell = i.$TAG("canvas", {
                    style: "cursor:inherit;position:absolute;left:0px;top:0px;width:100%;height:100%;"
                }), i.ctx.cell.width = parseInt(i.style.width), i.ctx.cell.height = parseInt(i.style.height), i.ctx.cvsCtx = i.ctx.cell.getContext("2d"), a.mr && (1 == a.mr ? (i.ctx.cell.$CSS("transformOrigin", "50% 50%"), i.ctx.cell.$CSS("transform", "rotateY(180deg)")) : 2 == a.mr ? (i.ctx.cell.$CSS("transformOrigin", "50% 50%"), i.ctx.cell.$CSS("transform", "rotateX(180deg)")) : 3 == a.mr && (i.ctx.cell.$CSS("transformOrigin", "50% 50%"), i.ctx.cell.$CSS("transform", "rotateX(180deg) rotateY(180deg)"))), i.ctx.frames.length) {
                var g = 0;
                void 0 !== i.ctx._delayedFrame && i.ctx._delayedFrame >= 0 && i.ctx._delayedFrame < i.ctx.frames.length && (g = i.ctx._delayedFrame, delete i.ctx._delayedFrame), this._render(e, i, i.ctx.frames[g])
            }
        } else if (a.mr ? (i.ctx.cellHolderMr = i.ctx.cellHolderMr || i.$TAG("div", {
                style: "cursor:inherit;width:100%;height:100%;"
            }), i.ctx.cellHolder = i.ctx.cellHolder || i.ctx.cellHolderMr.$TAG("div"), 1 == a.mr ? (i.ctx.cellHolderMr.$CSS("transformOrigin", "50% 50%"), i.ctx.cellHolderMr.$CSS("transform", "rotateY(180deg)")) : 2 == a.mr ? (i.ctx.cellHolderMr.$CSS("transformOrigin", "50% 50%"), i.ctx.cellHolderMr.$CSS("transform", "rotateX(180deg)")) : 3 == a.mr && (i.ctx.cellHolderMr.$CSS("transformOrigin", "50% 50%"), i.ctx.cellHolderMr.$CSS("transform", "rotateX(180deg) rotateY(180deg)"))) : i.ctx.cellHolder = i.ctx.cellHolder || i.$TAG("div"), i.ctx.cellHolder.$A({
                style: "cursor:inherit;width:" + a.s.w + "px;height:" + a.s.h + "px"
            }), i.ctx.cell = i.ctx.cell || i.ctx.cellHolder.$TAG("div"), i.ctx.cell.$A({
                style: "cursor:inherit;position:absolute;left:0px;top:0px;width:" + a.s.w + "px;height:" + a.s.h + "px"
            }), i.ctx.frames.length) {
            i.tagOnPostResize(e, i), i.ctx.cell.style.backgroundImage = "url(" + e.mediaURL(a.s.img.mediaID) + ")", i.ctx.cell.style.backgroundRepeat = "no-repeat";
            var g = 0;
            void 0 !== i.ctx._delayedFrame && i.ctx._delayedFrame >= 0 && i.ctx._delayedFrame < i.ctx.frames.length && (g = i.ctx._delayedFrame, delete i.ctx._delayedFrame), this._render(e, i, i.ctx.frames[g])
        }
    }
}, xa.exeOnTick = function(e, t, a) {
    var i = e.wgtTag(t);
    if (i.ctx.frames.length && 0 != i.ctx.action) {
        i.ctx._onceStarted = !0;
        var r;
        0 == i.ctx.lastTickTime ? (i.ctx.cur = 0, r = !0) : i.ctx.lastTickTime < a && (r = !0, 2 == i.ctx.action ? i.ctx.cur = (i.ctx.cur + 1) % i.ctx.frames.length : (i.ctx.cur++, i.ctx.cur == i.ctx.frames.length && (i.ctx.cur = 0, this._stop(e, i), r = !1))), r && (i.ctx.lastTickTime = a + i.ctx.frames[i.ctx.cur].tm, this._render(e, i, i.ctx.frames[i.ctx.cur]))
    }
}, xa.exePropSet = function(e, t, a, i, r) {
    if ("showFrame" == a) {
        if (r) return !0;
        var n = e.wgtTag(t);
        n.ctx && (n.ctx.frames.length ? i > 0 && i <= n.ctx.frames.length ? this._render(e, n, n.ctx.frames[i - 1]) : e.log(t, "Invalid frame was requested by Widget:run(). FrameIndex=" + i) : n.ctx._delayedFrame = i - 1)
    }
}, xa._render = function(e, t, a) {
    if (t.ctx.useCanvas) t.ctx.image && (t.ctx.cvsCtx.clearRect(0, 0, t.ctx.cell.width, t.ctx.cell.height), t.ctx.cvsCtx.drawImage(t.ctx.image, a.x, a.y, a.w, a.h, Math.round(a.offX * (1 / e.getZoomX())), Math.round(a.offY * (1 / e.getZoomY())), t.ctx.cell.width - Math.round(a.offX * (1 / e.getZoomX())), t.ctx.cell.height - Math.round(a.offY * (1 / e.getZoomY()))));
    else {
        var i = t.ctx.cell.style;
        i.left != a.offX + "px" && (i.left = a.offX + "px"), i.top != a.offY + "px" && (i.top = a.offY + "px"), i.width != a.w + "px" && (i.width = a.w + "px"), i.height != a.h + "px" && (i.height = a.h + "px"), i.backgroundPosition = -a.x + "px " + -a.y + "px"
    }
}, xa._stop = function(e, t, a) {
    t.ctx.action = 0, t.ctx.lastTickTime = 0, a && t.ctx.frames[0] && this._render(e, t, t.ctx.frames[0]), t.ctx._onceStarted && e.fireEvent("animation", "End", e.wgtId(t))
}, xa.edtOnConfig = function(e, t) {
    function a() {
        if (eduLib.edtInputApplyAll(e, s.tagTab1), eduLib.edtInputApplyAll(e, s.tagTab2), n.s.img.mediaID && e.wgtSetProperty(t, "apxMediaID", n.s.img.mediaID), "f" == n.ty && (n.f.edt.w = n.f.edt.h = 0, n.f.file.data)) {
            try {
                var a = JSON.parse(n.f.file.data)
            } catch (e) {}
            if (a && a.frames)
                for (var i in a.frames) {
                    n.f.edt.x = a.frames[i].frame.x, n.f.edt.y = a.frames[i].frame.y, n.f.edt.w = a.frames[i].frame.w, n.f.edt.h = a.frames[i].frame.h, n.f.edt.offX = a.frames[i].spriteSourceSize.x, n.f.edt.offY = a.frames[i].spriteSourceSize.y, n.s.w = a.frames[i].sourceSize.w, n.s.h = a.frames[i].sourceSize.h;
                    break
                }
        }
        e.wgtSetProperty(t, "ver", 2), e.wgtSetProperty(t, "cfg", n), e.wgtRefreshUI(t)
    }

    function i() {
        "s" == this.value ? (eduLib.edtInputShow(e, s.tagTab1, "s", !0), eduLib.edtInputShow(e, s.tagTab1, "f", !1)) : (eduLib.edtInputShow(e, s.tagTab1, "f", !0), eduLib.edtInputShow(e, s.tagTab1, "s", !1))
    }

    function r() {
        for (var e in c) c[e] && (this.id == e ? (s[e].style.display = "block", s.tagTab.$$(e).style.borderStyle = "solid solid none solid") : (s[e].style.display = "none", s.tagTab.$$(e).style.borderStyle = "none none solid none"));
        uxWgtShtSprite._uiLastSetupTab = this.id
    }
    var n = e.wgtGetProperty(t, "cfg");
    n.f = n.f || {
        file: {
            size: 0,
            data: ""
        },
        edt: {}
    };
    var s, c = {
        tagTab1: !0,
        tagTab2: !0
    };
    if (s = e.dlgDoModal(600, 700, a)) {
        var o = apn.CExe.CSS_SETUP_PANE + "height:" + (s.clientHeight - 40) + "px";
        s.tagTab = s.$TAG("div", {
            style: "position:relative;font-weight:bold;width:100%;height:26px;padding-bottom:14px;"
        }), s.tagTab.innerHTML = '<span id="tagTab1" style="' + apn.CExe.CSS_SETUP_TAB + '">' + apn.CExe.GL({
            ko: "스프라이트",
            en: "Sprite Sheet",
            ja: "スプライト"
        }) + '</span><span id="tagTab2" style="' + apn.CExe.CSS_SETUP_TAB + '">' + apn.CExe.GL({
            ko: "스텝 연동",
            en: "Step Interface",
            ja: "ステップ連動"
        }) + "</span>" + apn.CExe.CSS_SETUP_TAB_END, s.tagTab.$$("tagTab1").onclick = s.tagTab.$$("tagTab2").onclick = r, s.tagTab1 = s.$TAG("div", {
            style: o
        }), s.tagTab2 = s.$TAG("div", {
            style: o
        }), eduLib.edtInputAdd(e, s.tagTab1, {
            type: "image",
            title: apn.CExe.GL({
                ko: "스프라이트 시트 이미지",
                en: "Sprite sheet image",
                ja: "スプライトシートの画像"
            }),
            value: n.s,
            key: "img",
            join: !0
        }), eduLib.edtInputAdd(e, s.tagTab1, {
            type: "message",
            value: "※ " + apn.CExe.GL({
                ko: "과도한 이미지의 사용은 HTML5 컨텐츠의 성능을 크게 저하시킵니다. 그러한 경우, Video로 제작하거나 Scene Animation으로 편집하는 것이 좋습니다.",
                en: "Excessive image resources will slow down HTML5 contents. In that case, video or Scene Animation is better.",
                ja: "過度な画像の使用は、HTML5コンテンツのパフォーマンスを大幅に低下させます。その場合、Videoでの製作や、Scene Animationでの編集をお勧めします。"
            }),
            join: !0
        }), eduLib.edtInputAdd(e, s.tagTab1, {
            type: "space"
        }), eduLib.edtInputAdd(e, s.tagTab1, {
            type: "title",
            title: apn.CExe.GL({
                ko: "프레임 구성 정보",
                en: "Frame information",
                ja: "フレーム構成情報"
            })
        }), eduLib.edtInputAdd(e, s.tagTab1, {
            type: "select",
            title: apn.CExe.GL({
                ko: "스프라이트 시트 구성",
                en: "Sprite sheet type",
                ja: "スプライトシートの構成"
            }),
            value: n,
            key: "ty",
            options: [{
                title: "Simple",
                value: "s"
            }, {
                title: "Adobe Animate - JSON",
                value: "f"
            }],
            onchange: i,
            join: !0
        }), eduLib.edtInputAdd(e, s.tagTab1, {
            type: "number",
            title: apn.CExe.GL({
                ko: "프레임 시간",
                en: "Duration",
                ja: "フレーム時間"
            }) + "[ms] (m)",
            value: n.s,
            key: "tm",
            join: !0
        }), eduLib.edtInputAdd(e, s.tagTab1, {
            type: "text",
            title: apn.CExe.GL({
                ko: "프레임 시간 변경",
                en: "Duration change",
                ja: "フレーム時間の変更"
            }) + "[ms;...]",
            value: n.s,
            key: "tmSet",
            join: !0
        }), eduLib.edtInputAdd(e, s.tagTab1, {
            id: "s",
            type: "number",
            title: apn.CExe.GL({
                ko: "프레임 셀 너비",
                en: "Cell width",
                ja: "フレームセルの幅"
            }) + "[px] (m)",
            value: n.s,
            key: "w",
            join: !0
        }), eduLib.edtInputAdd(e, s.tagTab1, {
            id: "s",
            type: "number",
            title: apn.CExe.GL({
                ko: "프레임 셀 높이",
                en: "Cell height",
                ja: "フレームセルの高さ"
            }) + "[px](m)",
            value: n.s,
            key: "h",
            join: !0
        }), eduLib.edtInputAdd(e, s.tagTab1, {
            id: "s",
            type: "number",
            title: apn.CExe.GL({
                ko: "프레임 셀 개수",
                en: "Cell count",
                ja: "フレームセル数"
            }) + " (m)",
            value: n.s,
            key: "cnt",
            join: !0
        }), eduLib.edtInputAdd(e, s.tagTab1, {
            id: "s",
            type: "number",
            title: apn.CExe.GL({
                ko: "프레임 셀 열의 수",
                en: "Column count",
                ja: "フレームセル列の数"
            }),
            value: n.s,
            key: "cols",
            comment: "(" + apn.CExe.GL({
                ko: "1개 행으로 구성된 경우, 0을 입력",
                en: "0 if cells are aligned in one line",
                ja: "1つの行で構成された場合、0を入力"
            }) + ")",
            join: !0
        }), eduLib.edtInputAdd(e, s.tagTab1, {
            id: "s",
            type: "number",
            title: apn.CExe.GL({
                ko: "시작 X좌표",
                en: "Start X",
                ja: "開始X座標"
            }) + "[px]",
            value: n.s,
            key: "x",
            join: !0
        }), eduLib.edtInputAdd(e, s.tagTab1, {
            id: "s",
            type: "number",
            title: apn.CExe.GL({
                ko: "시작 Y좌표",
                en: "Start Y",
                ja: "開始Y座標"
            }) + "[px]",
            value: n.s,
            key: "y",
            join: !0
        }), eduLib.edtInputAdd(e, s.tagTab1, {
            id: "f",
            type: "file",
            title: apn.CExe.GL({
                ko: "프레임 구성 정보 파일",
                en: "Frame information file",
                ja: "フレーム構成情報ファイル"
            }),
            value: n.f,
            key: "file",
            join: !0
        }), eduLib.edtInputAdd(e, s.tagTab1, {
            type: "space"
        }), eduLib.edtInputAdd(e, s.tagTab1, {
            type: "title",
            title: apn.CExe.GL({
                ko: "대칭 변환",
                en: "Mirror transformation",
                ja: "対称変換"
            })
        }), eduLib.edtInputAdd(e, s.tagTab1, {
            type: "select",
            title: apn.CExe.GL({
                ko: "방향",
                en: "Direction",
                ja: "方向"
            }),
            value: n,
            key: "mr",
            options: [{
                title: apn.CExe.GL({
                    ko: "가로",
                    en: "Horizontal",
                    ja: "横"
                }),
                value: 1
            }, {
                title: apn.CExe.GL({
                    ko: "세로",
                    en: "Vertical",
                    ja: "縦"
                }),
                value: 2
            }, {
                title: apn.CExe.GL({
                    ko: "가로&세로",
                    en: "Both",
                    ja: "横＆縦"
                }),
                value: 3
            }, {
                title: apn.CExe.GL({
                    ko: "안함",
                    en: "None",
                    ja: "無効"
                }),
                value: 0
            }],
            join: !0
        }), uxWgtImgSprite.edtSetupStep(e, t, s.tagTab2, n), void 0 !== uxWgtShtSprite._uiLastSetupTab && s.tagTab.$$(uxWgtShtSprite._uiLastSetupTab) ? s.tagTab.$$(uxWgtShtSprite._uiLastSetupTab).onclick() : s.tagTab.$$("tagTab1").onclick(), s.tagTab.$$("tagBlank").style.width = s.clientWidth - s.tagTab.$$("tagBlank").offsetLeft - 1 + "px"
    }
}, xa.edtOnFitToSize = function(e, t, a) {
    if (a.cfg.s && a.cfg.s.w && a.cfg.s.h) return {
        w: a.cfg.s.w,
        h: a.cfg.s.h
    }
}, uxWgtShtSprite = xa;
var xa = {};
xa.styleMap = {
    title: !0,
    visibility: !0,
    strokeStyle: !0,
    lineWidth: !0,
    lineDash: !0,
    fillStyle: !0,
    font: !0,
    fontSize: !0,
    fontStyle: !0,
    fontItalic: !0,
    fontBold: !0,
    textMultiLine: !0,
    fontUnderlined: !0,
    text: !0,
    textAlign: !0,
    textWordWrap: !0,
    ltrSp: !0,
    lnSp: !0,
    fontStrokeStyle: !0,
    fontStrokeWidth: !0,
    alpha: !0,
    angle: !0,
    csr: !0
}, xa.APX_NO_POINTER_EV = !0, xa.apxInputSave = !0, xa.editor = {}, xa.editor.states = {
    normal: "Normal",
    readonly: "Readonly"
}, xa.editor.properties = {
    ty: {
        title: "Type",
        input: [{
            title: "Text",
            value: ""
        }, {
            title: "Number",
            value: "number"
        }]
    },
    mxl: {
        title: "MaxLength",
        input: "",
        type: "number"
    },
    sly: {
        title: "ScrollBarY",
        input: [{
            title: "Auto",
            value: ""
        }, {
            title: "Always",
            value: "s"
        }, {
            title: "Hidden",
            value: "h"
        }]
    },
    txtI: {
        title: apn.CExe.GL({
            ko: "들여쓰기",
            en: "TextIndent"
        }),
        input: "",
        type: "number"
    },
    ime: {
        title: "IME",
        input: [{
            title: "Active",
            value: "T"
        }, {
            title: "Inactive",
            value: "F"
        }, {
            title: "Inherit",
            value: ""
        }, {
            title: "Auto",
            value: "A"
        }]
    }
}, xa.properties = {}, xa.properties.state = "normal", xa.properties.attrs = {
    ime: ""
}, xa.scriptInfo = {
    wgtData: {
        selection: {
            help: {
                ko: "{start:0-based Number,end:1-based Number}\n지정된 영역의 텍스트를 선택합니다.",
                en: "{start:0-based Number,end:1-based Number}\nSelection area of text"
            }
        }
    },
    wgtRun: {
        focus: {
            param: "true",
            help: {
                ko: "포커스 상태로 지정합니다. (iOS Safari에서는 Wait에 의한 Focus동작이 보안 제약으로 동작하지 않을 수 있습니다)",
                en: "Set focus on this input. (Focus-with-wait may not work in iOS Safari by security restriction)"
            }
        }
    }
}, xa.createAsCanvasObject = apn.widgets["apn.wgt.rect"].createAsCanvasObject, xa.onEdit = apn.widgets["apn.wgt.rect"].onEdit, xa.exeSetState = function(t, e, a) {
    "readonly" == a ? (e.apxInputTag.readOnly = !0, e.apxInputTag.placeholder = "") : (e.apxInputTag.readOnly = !1, e.apxInputTag.placeholder = t.wgtGetProperty(e.apnOID, "apxText") || "")
}, xa.getIME = function(t, e) {
    var a = "";
    if (e && "T" == e.ime) a = "ime-mode:active;";
    else if (e && "F" == e.ime) a = "ime-mode:inactive;";
    else if (e && "A" == e.ime);
    else {
        var n = apn.Project.getLayout(t).property.CExe;
        n && n.lng && "N" == n.lng.ime || (a = n && n.lng && "A" == n.lng.ime ? "ime-mode:inactive;" : "ime-mode:active;")
    }
    return a
}, xa.exeCreateTag = function(t, e, a, n, i, r) {
    var o, p = a.create.data.styles,
        l = a.create.data.properties ? a.create.data.properties.attrs : void 0,
        s = this.getIME(t.project, l);
    if (t.o.standAlone && r && (o = apn.CExe.getElementByAttr("", "data-apx-id", r))) o.apnCur = {}, o.apnCur.apxCreatedFromTag = !0;
    else {
        var u = 0;
        p && p.textPadding && (u = parseInt(p.textPadding * i));
        var c = s + "position:absolute;box-sizing:border-box;margin:0px;padding:" + u + "px;outline:none;background-color:transparent;border:none;";
        if (p && !p.textMultiLine) {
            var d = l && l.ty ? l.ty : "text";
            o = document.body.$TAG("input", {
                type: d,
                autocomplete: "off",
                autocapitalize: "off",
                autocorrect: "off",
                style: c
            })
        } else {
            var x = "auto";
            if (l && "s" == l.sly ? x = "scroll" : l && "h" == l.sly && (x = "hidden"), l && void 0 !== l.txtI) {
                var g = bx.$checkNaN(parseFloat(l.txtI));
                g && g > 0 && (c += "text-indent:" + g + "em;")
            }
            o = document.body.$TAG("textarea", {
                autocapitalize: "off",
                autocorrect: "off",
                style: c + "overflow-y:" + x + ";overflow-x:hidden;resize:none;outline:none;border:none;"
            }), o.$A({
                class: "apnCExeScroll"
            })
        }
        o.apnCur = {};
        var f = apn.Project.getLayout(t.project).property.CExe;
        f && "Y" == f.inputDisableTabOrder && o.setAttribute("tabindex", "-1")
    }
    if (o.apxInputTag = o, "input" == o.tagName.toLowerCase() && bx.HCL.DV.isIOS() && t.getFonts)
        for (var v = t.getFonts(), h = apn.Project.resolveStyle(t.project, "font", p.font), y = 0; y < v.length; y++) v[y].face == h && v[y].xInIOS && (o._fontIOSproblem = v[y].xInIOS);
    if ("B" == o._fontIOSproblem) {
        var I = o;
        delete I.apnCur, o = document.body.$TAG("div", {
            style: "position:absolute;box-sizing:border-box;overflow:hidden;padding:0;margin:0;"
        }), o.appendChild(I), I.style.left = "0px", I.style.top = "0px", I.style.width = "100%", I.style.border = "none", I.style.background = "transparent", I.style.color = "inherit", I.style.letterSpacing = "inherit", I.style.textDecoration = "inherit", I.style.textAlign = "inherit", I.style.font = "inherit", I.style.fontSize = "inherit", I.style.fontWeight = "inherit", I.style.display = "block", o._fontIOSproblem = I._fontIOSproblem, o.apxInputTag = I, o.apnCur = {}
    }
    if (l && l.mxl) {
        var b = bx.$checkNaN(parseInt(l.mxl));
        b && (o.apxInputTag.setAttribute("maxlength", b), "number" == l.ty && o.apxInputTag.setAttribute("max", Math.pow(10, b) - 1))
    }
    var m = this;
    return o.apxInputTag._reconstruct = function() {
        if ("B" == o._fontIOSproblem)
            if (e.wgtIsVisible(r)) {
                var t = this.value;
                t || (this.value = "AgHjkLlpqQsTyZ|!"), this.style.height = "auto", this.style.top = (o.clientHeight - this.offsetHeight) / 2 + "px", this.offsetHeight > o.clientHeight && this.getAttribute("placeholder") && this.setAttribute("placeholder", ""), t || (this.value = t), delete this._dlydRct
            } else this._dlydRct = !0
    }, bx.Event.add(o.apxInputTag, "input", function() {
        if (bx.HCL.DV.isIE() && bx.HCL.DV.isIE() < 10) {
            if (void 0 !== this._valueBK && this._valueBK == this.value) return;
            if (void 0 === this._valueBK && !this.value) return;
            this._valueBK = this.value
        }
        o.apnOID && (m._localSave(e, o), e.fireEvent("inputChange", void 0, o.apnOID, !0))
    }, !1), bx.Event.add(o.apxInputTag, "focus", function() {
        o.apxIeIgnoreFocusEvent || (this._reconstruct(), o.apnOID && e.fireEvent("inputFocus", void 0, o.apnOID, !0))
    }, !1), bx.Event.add(o.apxInputTag, "blur", function() {
        o.apxIeIgnoreFocusEvent || o.apnOID && e.fireEvent("inputBlur", void 0, o.apnOID, !0)
    }, !1), o.apxInputTag.apxInputTag.$CSS("textShadow", "inherit"), p && !p.textMultiLine ? o.tagOnPostResize = function(t, e) {
        e.style.lineHeight = parseInt(e.style.height) - 2 * (parseInt(e.style.borderWidth) || 0) + "px"
    } : o.apnOnSetText = function(t, e, a, n, i, r, o, p, l, s) {
        if (a && (t._initValign = a), n && (t._initAlign = n), void 0 !== i && (t._initMultiLine = i), void 0 !== r && (t._initWordWrap = r), void 0 !== o && (t._initFont = o), s && (t._initFontSize = s), p && (t._initLtrSp = p), l && (t._initLnSp = l), o = o || t._initFont, l = l || t._initLnSp, p = p || t._initLtrSp, s) {
            var u = 1.2;
            apn.fonts && apn.fonts[o] && void 0 !== apn.fonts[o].height && (u = apn.fonts[o].height);
            var c = s * u;
            l && (c += l), t.style.lineHeight = c + "px", p ? t.style.letterSpacing = p + "px" : t.style.letterSpacing = "normal"
        }
    }, o
}, xa.exeRenderTag = function(t, e, a, n, i, r) {
    if (a.apnCur.apxCreatedFromTag && 1 == i && 1 == r) apn.IWidget.exeRenderTagVhtml.call(this, t, e, a, n, i, r);
    else {
        var o = apn.IWidget.exeRenderTagV1.call(this, t, e, a, n, i, r);
        o && !o.textMultiLine && (o.ltrSp ? a.style.letterSpacing = parseFloat(o.ltrSp) * i + "px" : a.style.letterSpacing = "normal", a.style.lineHeight = parseInt(a.style.height) - 2 * (parseInt(a.style.borderWidth) || 0) + "px")
    }
    return "A" == a._fontIOSproblem && (a.apxInputTag.style.borderBottom = "solid 1px transparent"), a
}, xa.exeOnLoad = function(t, e) {
    function a(t, a) {
        t == e && r.apxInputTag.focus()
    }

    function n(t, a) {
        t == e && a && r.apxInputTag.setSelectionRange(a.start, a.end)
    }

    function i(a, n) {
        a == e && (n ? o._localSave(t, r) : o._localClear(t, r))
    }
    var r = t.wgtTag(e);
    this._localLoad(t, r);
    var o = this;
    if (t.wgtListenProperty(e, "focus", a), t.wgtListenProperty(e, "selection", n), t.wgtListenProperty(e, "save", i), apn.dbUI && apn.dbUI.system && apn.dbUI.system.pubFontCompress)
        for (var p = apn.Project.publishListFontFile(t.project, void 0, !0), l = 0; l < p.length; l++)
            if (p[l].compress && p[l].face == t.wgtGetProperty(e, "apxFont")) {
                t.log(e, "Using compressed font '" + p[l].title + "' for input widget may cause input problem.");
                break
            }
}, xa.exeOnVisibilityChange = function(t, e, a) {
    var n = t.wgtTag(e);
    a && n.apxInputTag._dlydRct && n.apxInputTag._reconstruct()
}, xa.exeOnStart = function(t, e) {
    var a = t.wgtTag(e);
    a.apxInputTag._reconstruct(), t.fireEvent("inputSet", void 0, e, !0)
}, xa.exeInputGet = function(t, e) {
    return e.apxInputTag.value
}, xa.exeInputSet = function(t, e, a, n) {
    var i = e.apxInputTag.value;
    return e.apxInputTag.value = a, i != a && (bx.HCL.DV.isIE() && bx.HCL.DV.isIE() < 10 && (e.apxInputTag._valueBK = a), n || (this._localSave(t, e), t.fireEvent("inputSet", void 0, e.apnOID, !0)), e.apxInputTag._reconstruct()), a
}, xa.exePropGet = function(t, e, a, n) {
    if (n) {
        if ("selection" == a) return !0
    } else if ("selection" == a) {
        var i;
        return (i = t.wgtTag(e)).apxInputTag ? {
            start: i.apxInputTag.selectionStart,
            end: i.apxInputTag.selectionEnd
        } : {
            start: 0,
            end: 0
        }
    }
}, xa._localSave = function(t, e) {
    if (t.wgtGetProperty(e.apnOID, "save") && t.project && t.project.property.id) {
        var a = "$APX$INP_" + t.project.property.id + ":" + e.apnOID;
        t.utlLocalSave(a, this.exeInputGet(t, e))
    }
}, xa._localLoad = function(t, e) {
    if (t.project && t.project.property.id) {
        var a, n = "$APX$INP_" + t.project.property.id + ":" + e.apnOID;
        if (null !== (a = t.utlLocalLoad(n))) return this.exeInputSet(t, e, a, !0), !0
    }
    return !1
}, xa._localClear = function(t, e) {
    if (t.project && t.project.property.id) {
        var a = "$APX$INP_" + t.project.property.id + ":" + e.apnOID;
        apn.clearTempFile && apn.clearTempFile(a)
    }
}, xa.edtOnBuildEvent = function(t, e, a, n) {
    n.inputChange = {
        value: "inputChange",
        title: apn.P.eventTitle.inputChange
    }, n.inputSet = {
        value: "inputSet",
        title: apn.P.eventTitle.inputSet
    }, n.inputFocus = {
        value: "inputFocus",
        title: apn.P.eventTitle.inputFocus
    }, n.inputBlur = {
        value: "inputBlur",
        title: apn.P.eventTitle.inputBlur
    }
}, xa.pubOnGetHTML = function(t, e, a, n) {
    var i, r = t.pages[e].objects[a].create.data.properties ? t.pages[e].objects[a].create.data.properties.attrs : void 0,
        o = apn.IWidget.htmlRender(this, t, e, a),
        p = "",
        l = "",
        s = "";
    if (o.style.textMultiLine) {
        var u = "auto";
        if (r && "s" == r.sly ? u = "scroll" : r && "h" == r.sly && (u = "hidden"), i = "textarea", o.css += "overflow-y:" + u + ";overflow-x:hidden;resize:none;outline:none;margin:0px;padding:0px;", s += " apnCExeScroll", r && void 0 !== r.txtI) {
            var c = bx.$checkNaN(parseFloat(r.txtI));
            c && c > 0 && (o.css += "text-indent:" + c + "em;")
        }
    } else i = "input", o.css += "outline:none;margin:0px;padding:0px;", l += ' type="' + (r && r.ty ? r.ty : "text") + '"', l += ' autocomplete="off"';
    if (o.css += apn.IWidget.htmlRenderText(this, t, e, a, o), o.css += "background-color:" + (o.style.fillStyle || "transparent") + ";", o.style.lineWidth && o.style.strokeStyle || (o.css += "border:none;"), l += ' placeholder="' + (o.style.text || "") + '"', n && n.noId || (l += ' data-apx-id="' + a + '"'), o.css += this.getIME(t, r), r && r.mxl) {
        var d = bx.$checkNaN(parseInt(r.mxl));
        d && (l += ' maxlength="' + d + '"', "number" == r.ty && (l += ' max="' + (Math.pow(10, d) - 1) + '"'))
    }
    var x, g = apn.Project.getExeModule(t);
    if (g.IStub_pubProcWgtAttr && (x = g.IStub_pubProcWgtAttr(t, e, a)) && x.attr)
        for (var f in x.attr) void 0 !== x.attr[f] && (l += " " + f + '="' + x.attr[f] + '"');
    return p += "<" + i, p += ' style="' + o.css + '"', p += ' class="apxWgt1' + s + '"', p += l, p += "></" + i + ">"
}, uxWgtInputText = xa;
var xa = apn.inheritWidget(uxWgtBtnImage);
xa.styleMap = {
    title: !0,
    visibility: !0,
    alpha: !0,
    angle: !0,
    mediaID: !0,
    csr: !0
}, xa.scriptInfo = {
    wgtData: {
        media: {
            help: "WidgetID\nID of media widget currently interfacing with.",
            value: "WidgetID"
        }
    }
}, apn.widgets["apn.wgt.rect"] && apn.widgets["apn.wgt.rect"].scriptInfo && (xa.scriptInfo.wgtData.vertex = apn.widgets["apn.wgt.rect"].scriptInfo.wgtData.vertex, xa.scriptInfo.wgtData.vertexInPage = apn.widgets["apn.wgt.rect"].scriptInfo.wgtData.vertexInPage), xa.editor = xa.editor || {}, xa.editor.iconThumb = "imgs/wgts/thumbs/video.png", xa.properties = xa.properties || {}, xa.properties.attrs = xa.properties.attrs || {}, xa.properties.attrs.uxMediaPlayer = !0, xa.properties.attrs.local = xa.properties.attrs.local || {}, xa.properties.attrs.local.idAudio = "", xa.properties.attrs.local.type = "stop", xa.properties.attrs.local.all = "", xa.properties.attrs.selectType = "toggle", xa.properties.state = "normal", xa.onEdit = void 0, xa.exeOnScreenFull = function(e, t, a) {
    var i = e.wgtTag(t),
        o = e.wgtGetProperty(t, "local");
    "fscrn" == o.type && (a.tag || !a.on) && i && i.ctx && (i.ctx.fullScreen = a.on, e.wgtSetProperty(t, "apxState", i.ctx.fullScreen ? "disabled" : "normal"))
}, xa.exeOnPagePreLoad = function(e, t) {
    function a(t) {
        var a = e.srcGetWidgetProperty(t, "local") || e.srcGetWidgetProperty(t, "cfg");
        a.idAudio && e.wgtTag(a.idAudio) || (a.idAudio = i.idAudio)
    }
    var i = e.srcGetWidgetProperty(t, "local") || e.srcGetWidgetProperty(t, "cfg");
    i.idAudio && e.utlIterateInGroup(t, "uxMediaPlayer", a)
}, xa.exePropSet = function(e, t, a, i, o) {
    if ("media" == a) {
        if (o) return !0;
        var r = e.wgtTag(t);
        if (i && e.wgtTag(i) && r && r.ctx) {
            r.ctx._resetListener(i);
            var n = e.wgtGetProperty(t, "local");
            n.idAudio = i
        } else e.log(t, "Invalid parameter for setData() of 'media'. Value=" + i)
    }
}, xa.exePropGet = function(e, t, a, i) {
    if ("vertex" == a || "vertexInPage" == a) return apn.widgets["apn.wgt.rect"].exePropGet.call(this, e, t, a, i);
    if ("media" == a) {
        if (i) return !0;
        var o = e.wgtTag(t);
        if (o && o.ctx) {
            var r = e.wgtGetProperty(t, "local");
            return r.idAudio || void 0
        }
    }
}, xa.I_edtOnConfig = function(e, t, a, i, o, r, n) {
    function d() {
        if (eduLib.edtInputShow(e, o, "mute", "mute" == this.value), eduLib.edtInputShow(e, o, "fscrn", "fscrn" == this.value), i._uxWgtBtnImage_tmpType != this.value) switch (i._uxWgtBtnImage_tmpType = this.value, this.value) {
            case "_stop":
                uxWgtBtnImage.I_edtOnConfigBuild.call(g, e, t, i, r, "simple");
                break;
            default:
                uxWgtBtnImage.I_edtOnConfigBuild.call(g, e, t, i, r, "toggle")
        }
    }

    function p() {
        x = this.value
    }

    function u() {
        var e, t = [{
            title: apn.CExe.GL({
                ko: "재생/중지",
                en: "Play(resume)/Pause"
            }),
            value: "pause"
        }, {
            title: apn.CExe.GL({
                ko: "재생/종료",
                en: "Play(resume)/Stop"
            }),
            value: "stop"
        }, {
            title: apn.CExe.GL({
                ko: "종료",
                en: "Stop"
            }),
            value: "_stop"
        }];
        return x && s.objects[x] && (e = apn.Project.getWidgetModule(s.objects[x].create.data)) && (e.exeMediaCheck && !e.exeMediaCheck("mute") || t.push({
            title: apn.CExe.GL({
                ko: "음소거",
                en: "Mute"
            }),
            value: "mute"
        }), e.exeMediaCheck && !e.exeMediaCheck("loop") || t.push({
            title: apn.CExe.GL({
                ko: "반복",
                en: "Loop"
            }),
            value: "loop"
        }), e.exeMediaCheck && !e.exeMediaCheck("supportFullScreen") || t.push({
            title: apn.CExe.GL({
                ko: "전체화면",
                en: "Full screen"
            }),
            value: "fscrn"
        })), t
    }
    var s = e.getScreenData(),
        l = [];
    for (var c in s.objects) s.objects[c].create && s.objects[c].create.data && s.objects[c].create.data.properties && s.objects[c].create.data.properties.attrs && s.objects[c].create.data.properties.attrs.apxMediaControl && l.push({
        value: c,
        title: e.itrGetObjectTitle(c)
    });
    eduLib.utilSortObjectsByTitle(e, l), l.push({
        title: apn.CExe.GL(apn.CExe.TXT_SETUP_NOSEL),
        value: ""
    });
    var g = this,
        x = a.idAudio;
    i._uxWgtBtnImage_tmpType = a.type, eduLib.edtInputAdd(e, o, {
        type: "select",
        options: l,
        title: apn.CExe.GL({
            ko: "연동할 위젯",
            en: "Media widget to interface with"
        }) + " (m)",
        key: "idAudio",
        value: a,
        onchange: p,
        join: !0
    }), eduLib.edtInputAdd(e, o, {
        type: "select",
        onchange: d,
        onbuildoptions: u,
        title: apn.CExe.GL({
            ko: "버튼 종류",
            en: "Type"
        }) + " (m)",
        key: "type",
        value: a,
        join: !0
    }), eduLib.edtInputAdd(e, o, {
        id: "mute",
        type: "select",
        title: apn.CExe.GL({
            ko: "모든 미디어 위젯에 적용",
            en: "Control all media widgets"
        }),
        options: [{
            title: apn.CExe.GL({
                ko: "예",
                en: "Yes"
            }),
            value: "Y"
        }, {
            title: apn.CExe.GL({
                ko: "아니오",
                en: "No"
            }),
            value: ""
        }],
        key: "all",
        value: a,
        join: !0
    }), eduLib.edtInputAdd(e, o, {
        id: "fscrn",
        type: "message",
        value: apn.CExe.GL({
            ko: "※ IE10 이하 등에서는 지원되지 않는 기능입니다. 미지원되는 환경에서는 위젯이 자동 숨김 처리됩니다.",
            en: "※ This function is not supported on IE9/10 or so. In that case, this widget will be hidden automatically."
        }),
        join: !0
    }), eduLib.edtInputAdd(e, o, {
        type: "space",
        join: !0
    })
}, xa.I_edtOnConfig_title = function(e, t, a, i) {
    switch (a._uxWgtBtnImage_tmpType) {
        case "stop":
        case "pause":
            if ("normal" == i) return apn.CExe.GL({
                ko: "중지/종료 상태",
                en: "Stopped/Paused"
            });
            if ("disabled" == i) return apn.CExe.GL({
                ko: "재생 상태",
                en: "Playing"
            });
            break;
        case "_stop":
            if ("normal" == i) return apn.CExe.GL({
                ko: "기본 상태",
                en: "Default state"
            });
            break;
        case "loop":
            if ("normal" == i) return apn.CExe.GL({
                ko: "해제 상태",
                en: "Off state"
            });
            if ("disabled" == i) return apn.CExe.GL({
                ko: "설정 상태",
                en: "On state"
            });
            break;
        case "mute":
            if ("normal" == i) return apn.CExe.GL({
                ko: "해제 상태",
                en: "Off state"
            });
            if ("disabled" == i) return apn.CExe.GL({
                ko: "설정 상태",
                en: "On state"
            });
            break;
        case "fscrn":
            if ("normal" == i) return apn.CExe.GL({
                ko: "초기 상태",
                en: "Initial state"
            });
            if ("disabled" == i) return apn.CExe.GL({
                ko: "전체화면 상태",
                en: "Fullscreen state"
            })
    }
}, xa.I_exeOnLoad_check = function(e, t) {
    var a = (e.wgtTag(t), e.wgtGetProperty(t, "local"));
    return !!(a && a.idAudio && e.wgtTag(a.idAudio)) || (e.log(t, apn.CExe.GL({
        ko: "제어할 '연동할 위젯'이 설정되지 않았거나 존재하지 않습니다.",
        en: "'Media widget to interface with' is not set or not exist."
    })), !1)
}, xa.I_exeOnLoad_post = function(e, t) {
    function a(a, i, n) {
        "stop" == r.type || "pause" == r.type ? "trackStart" == a || "trackResume" == a ? e.wgtSetProperty(t, "apxState", "disabled") : "trackEnd" != a && "trackPause" != a || e.wgtSetProperty(t, "apxState", "normal") : "mute" == r.type && "volumeChange" == a && (o.ctx._muteByBtn ? o.ctx._muteByBtn = !1 : e.wgtSetProperty(t, "apxState", !n && i ? "normal" : "disabled"))
    }

    function i(a) {
        "mute" == r.type && a.oId && a.oId == r.idAudio && (e.wgtGetMediaInfo(r.idAudio, "mute") || e.wgtSetProperty(t, "apxState", a.vol ? "normal" : "disabled"))
    }
    var o = e.wgtTag(t),
        r = e.wgtGetProperty(t, "local");
    o.ctx = o.ctx || {}, o.ctx.tagAudio = e.wgtTag(r.idAudio).mediaTag, o.ctx.moduleAudio = apn.Project.getWidgetModule(e.screen.objects[r.idAudio].create.data), "fscrn" != r.type || e.wgtGetMediaInfo(r.idAudio, "supportFullScreen") || (o.style.display = "none");
    var n = this;
    o.apxOnEvent = function(e, a, i, d) {
        var p = apn.dbUI && apn.dbUI.system && 1 == apn.dbUI.system.exeEventStart,
            u = "click";
        if (p) {
            var s = apn.Project.getLayout(e.project).property.CExe;
            s && s.event && "Y" == s.event.TS1 && (u = "tapStart")
        }
        if (a == u) {
            switch (r.type) {
                case "_stop":
                    e.wgtControlMedia(r.idAudio, "stop");
                    break;
                case "loop":
                    o.ctx.moduleAudio.exeMediaControl && o.ctx.moduleAudio.exeMediaControl(e.wgtTag(r.idAudio), r.type, "normal" == e.wgtGetProperty(t, "apxState")) && ("normal" == e.wgtGetProperty(t, "apxState") ? e.wgtSetProperty(t, "apxState", "disabled") : e.wgtSetProperty(t, "apxState", "normal"));
                    break;
                case "mute":
                    n._mute(e, r.idAudio, r, "normal" == e.wgtGetProperty(t, "apxState")) && ("normal" == e.wgtGetProperty(t, "apxState") ? e.wgtSetProperty(t, "apxState", "disabled") : e.wgtSetProperty(t, "apxState", "normal"), o.ctx._muteByBtn = !0);
                    break;
                case "stop":
                    e.wgtGetMediaInfo(r.idAudio, "pause") ? e.wgtControlMedia(r.idAudio, "resume") : e.wgtControlMedia(r.idAudio, "stop");
                    break;
                case "pause":
                    e.wgtGetMediaInfo(r.idAudio, "pause") ? e.wgtControlMedia(r.idAudio, "resume") : e.wgtControlMedia(r.idAudio, "pause");
                    break;
                case "fscrn":
                    o.ctx.fullScreen ? e.wgtSetMediaInfo(r.idAudio, "fullScreen", !1) : e.wgtSetMediaInfo(r.idAudio, "fullScreen", !0)
            }
            return !0
        }
    }, e.wgtListenMedia(t, r.idAudio, a), e.wgtListenContext(t, "apxMediaVolChange", i, !0), o.ctx._resetListener = function(i) {
        e.wgtListenMedia(t, r.idAudio, a, !0), e.wgtListenMedia(t, i, a)
    }
}, xa._mute = function(e, t, a, i) {
    var o = !1;
    if ("Y" == a.all)
        for (var r = e.getWidgetsByProperty("apxMediaControl"), n = 0; n < r.length; n++) e.wgtSetMediaInfo(r[n], "mute", i) && (o = !0);
    else e.wgtSetMediaInfo(t, "mute", i) && (o = !0);
    return o
}, xa.edtOnBuildState = function(e, t, a, i) {}, xa.edtOnRemapObjectID = function(e, t, a) {
    if (t && t.properties && t.properties.attrs && t.properties.attrs.local) {
        var i = t.properties.attrs.local;
        i.idAudio && (a[i.idAudio] ? i.idAudio = a[i.idAudio] : e.getScreenData().objects[i.idAudio] || (i.idAudio = ""))
    }
}, uxWgtPlayerBtn = xa;
var xa = apn.inheritWidget(apn.widgets["apn.wgt.rect"]);
xa.styleMap = {
    title: !0,
    visibility: !0,
    alpha: !0,
    mediaID: !0
}, xa.editor = {
    iconThumb: "imgs/wgts/thumbs/video.png",
    states: {
        ready: "Ready",
        off: "Off"
    }
}, xa.properties = {
    attrs: {
        uxMediaPlayer: !0,
        disableDrag: "",
        v: 2,
        vbar: 1,
        cfg: {
            idAudio: "",
            bar: {
                mediaID: void 0
            },
            barPlayed: {
                L: {
                    mediaID: void 0
                },
                C: {
                    mediaID: void 0
                },
                R: {
                    mediaID: void 0
                }
            },
            handle: {
                normal: {
                    mediaID: void 0
                },
                hover: {
                    mediaID: void 0
                },
                down: {
                    mediaID: void 0
                }
            }
        }
    }
}, xa.createAsCanvasObject = function(e, t, a, i, d) {
    return apn.IWidget.createCanvasObject(e, this, "apn.CImage", bx.CCanvasWnd.SHAPE_RECT, t, a, i, d)
}, xa.exeOnTick = function(e, t, a) {
    var i = e.wgtTag(t);
    if (i.ctx && i.ctx.slide && !(i.ctx.slide.s >= i.ctx.slide.e))
        if (1 == i.ctx.slide.run) i.ctx.slide.run = 2, i.ctx.slide.tick = a, this._setHandle(e, i, i.ctx.slide.s, i.ctx._duration);
        else {
            var d = Math.min(1, (a - i.ctx.slide.tick) / 1e3 / (i.ctx.slide.e - i.ctx.slide.s));
            i.ctx.slide.c = i.ctx.slide.s + d * (i.ctx.slide.e - i.ctx.slide.s), this._setHandle(e, i, i.ctx.slide.c, i.ctx._duration), 1 == d && delete i.ctx.slide
        }
}, xa.exeSetState = function(e, t, a) {
    "off" == a && t.ctx && (t.ctx.slide && delete t.ctx.slide, t.ctx._duration && uxWgtPlayerSeek._setHandle(e, t, 0, t.ctx._duration))
}, xa.exePropSet = function(e, t, a, i, d) {
    if ("handleVisibility" == a) {
        if (d) return !0;
        var r = e.wgtTag(t);
        r.ctx && r.ctx.tagHandle && ("visible" == i ? (r.ctx.tagHandle.style.display = "block", r.ctx.tagHandle.__hidden = !1) : "hidden" == i ? (r.ctx.tagHandle.style.display = "none", r.ctx.tagHandle.__hidden = !0) : e.log(t, "Unknown parameter value for 'handleVisibility'. Value=" + i))
    }
}, xa.exeOnLoad = function(e, t) {
    function a(e) {
        return (parseInt(e.style.left) - e._offX) / (parseInt(d.style.width) - 2 * e._innerX)
    }

    function i(a, i, r) {
        "off" != e.wgtGetProperty(t, "apxState") && ("infoPlayTime" == a ? d.ctx.tagHandle._inDrag || void 0 !== i && i > 0 && r && (d.ctx._duration = r, e.wgtGetProperty(t, "disableDrag") ? d.ctx.slide && 2 == d.ctx.slide.run && d.ctx.slide.c >= i || (d.ctx.slide = {
            s: i,
            e: r,
            c: i,
            run: 1
        }) : uxWgtPlayerSeek._setHandle(e, d, i, r)) : "infoDuration" == a ? d.ctx.tagHandle._inDrag || void 0 !== i && r && (d.ctx._duration = r, uxWgtPlayerSeek._setHandle(e, d, i, r)) : "trackPause" == a ? d.ctx.slide && delete d.ctx.slide : "trackEnd" == a && d.ctx._duration && (uxWgtPlayerSeek._setHandle(e, d, 0, d.ctx._duration), d.ctx.slide = void 0))
    }
    var d = e.wgtTag(t);
    delete d.textTag, d.style.overflow = "visible";
    var r = e.wgtGetProperty(t, "cfg");
    if (!r.idAudio || !e.wgtTag(r.idAudio)) return void e.log(t, apn.CExe.GL({
        ko: "제어할 '연동할 위젯'이 설정되지 않았거나 존재하지 않습니다.",
        en: "'Media widget to interface with' is not set or not exist."
    }));
    if (!r.bar.mediaID || !r.handle.normal.mediaID) return void e.log(t, apn.CExe.GL({
        ko: "'필수 이미지'가 설정되지 않았거나 존재하지 않습니다.",
        en: "'Mandatory images' are not set or not exist."
    }));
    e.wgtSetProperty(r.idAudio, "highResolutionPlaytime", !0), d.ctx = {}, d.ctx.tagAudio = e.wgtTag(r.idAudio), d.ctx.moduleAudio = apn.Project.getWidgetModule(e.screen.objects[r.idAudio].create.data), d.ctx.slide = void 0;
    for (var n, l = e.widgetsByClass("edu.wgt.subtitle"), o = 0; o < l.length; o++)
        if ("2a" == e.wgtGetProperty(l[o], "v")) {
            var s = e.wgtGetProperty(l[o], "cfg"),
                u = e.wgtGetProperty(l[o], "subs");
            if (s && s.idMedia && s.idMedia == r.idAudio) {
                for (var g = 0; g < u.length; g++)
                    if ("Y" == u[g].pOes) {
                        n = !0;
                        break
                    } if (n) break
            }
        } var c;
    if (n)
        for (var x = e.widgetsByClass("ux.wgt.playerTime"), o = 0; o < x.length; o++) {
            var s = e.wgtGetProperty(x[o], "cfg");
            if (s && s.idAudio && s.idAudio == r.idAudio) {
                c = x[o];
                break
            }
        }
    d.style.background = "url(" + e.mediaURL(r.bar.mediaID) + ") no-repeat center center", d.$CSS("backgroundSize", "100% auto"), d.ctx.tagHandle = d.$TAG("img", {
        style: "display:none;position:absolute;cursor:inherit;",
        alt: ""
    }), e.wgtGetProperty(t, "disableDrag") || apn.IWidget.exeSetCursor(d.ctx.tagHandle, "pointer"), d.ctx.tagHandle.onload = function() {
        var t = 1 / e.getZoomX();
        this.__hidden || (this.style.display = "block"), this._offX = -Math.round(t * this.naturalWidth / 2 - parseInt(d.style.height) / 2), this._innerX = Math.round(t * this.naturalWidth / 2 + this._offX), this._width = Math.round(t * this.naturalWidth), this.style.left = this._offX + "px", this.style.top = -Math.round(t * this.naturalHeight / 2 - parseInt(d.style.height) / 2) + "px", this.style.width = Math.round(t * this.naturalWidth) + "px", this.style.height = Math.round(t * this.naturalHeight) + "px"
    }, d.ctx.tagHandle.src = e.mediaURL(r.handle.normal.mediaID), e.tagDraggable(d.ctx.tagHandle, !0), d.ctx.tagHandle.apxOnDrag = function(e, i, r) {
        if ("off" == e.wgtGetProperty(t, "apxState")) return !1;
        if (e.wgtGetProperty(t, "disableDrag")) return !1;
        var l = !0;
        i < this._offX && (i = this._offX, l = !1), i > parseInt(d.style.width) - (this._width + this._offX) && (i = parseInt(d.style.width) - (this._width + this._offX), l = !1);
        var o = a(this);
        return 1 == e.wgtGetProperty(t, "vbar") ? uxWgtPlayerSeek._barPlayedRender2(e, d, o) : uxWgtPlayerSeek._barPlayedRender(e, d, Math.max(1, o * parseInt(d.style.width))), o = Math.round(100 * o), c ? e.wgtSetProperty(c, "currentTime", o + "%") : d.ctx.moduleAudio && !n && d.ctx.moduleAudio.exeMediaSeek && d.ctx.moduleAudio.exeMediaSeek(d.ctx.tagAudio, o + "%", !1), l
    }, d.ctx.tagHandle.apxOnDragStart = function(e) {
        return "off" != e.wgtGetProperty(t, "apxState") && (!e.wgtGetProperty(t, "disableDrag") && (e.viewer.ISub_pauseDrag && "apn.COverlayPage" == e.screen.module && e.viewer.ISub_pauseDrag(!0, !0), this._inDrag = !0, !0))
    }, d.ctx.tagHandle.apxOnDragEnd = function(e) {
        return e.viewer.ISub_pauseDrag && "apn.COverlayPage" == e.screen.module && e.viewer.ISub_pauseDrag(!1, !1), "off" != e.wgtGetProperty(t, "apxState") && (!e.wgtGetProperty(t, "disableDrag") && (d.ctx.moduleAudio && d.ctx.moduleAudio.exeMediaSeek && d.ctx.moduleAudio.exeMediaSeek(d.ctx.tagAudio, 100 * a(this) + "%", !0, !1), this._inDrag = !1, setTimeout(function() {
            e.fireEvent("wgtEvent", "endSeek", t)
        }, 100), !0))
    }, this._barPlayedLoad(e, t), 2 == e.wgtGetProperty(t, "v") && (e.wgtGetProperty(t, "disableDrag") || apn.IWidget.exeSetCursor(d, "pointer"), d.apxOnEvent = function(e, a, i, r, n, l, o) {
        if ("click" == a) {
            var s = 0;
            if (e.viewer.ISub_pauseDrag) {
                var u = e.viewer.getPM().tag,
                    g = parseInt(u.style.left),
                    c = parseInt(u.style.top);
                sX = e.viewer.onGestureCoordTransformX(o.clientX - g, o.clientY - c), n = e.toCanvasX(sX), s = e.toCanvasX(parseInt(e.tag.style.left))
            }
            var x = e.screen.objects[t].init.position.x + s,
                p = e.screen.objects[t].init.shape.w;
            if ("off" == e.wgtGetProperty(t, "apxState")) return;
            if (e.wgtGetProperty(t, "disableDrag")) return;
            return d.ctx.moduleAudio && d.ctx.moduleAudio.exeMediaSeek && d.ctx.moduleAudio.exeMediaSeek(d.ctx.tagAudio, (n - x) / p * 100 + "%", !0, !1), !0
        }
    }), e.wgtListenMedia(t, r.idAudio, i)
}, xa._setHandle = function(e, t, a, i) {
    var d = t.ctx.tagHandle._width;
    if (d) {
        var r = a / i * (parseInt(t.style.width) - 2 * t.ctx.tagHandle._innerX),
            n = a / i * parseInt(t.style.width);
        r = Math.round(r + t.ctx.tagHandle._offX), t.ctx.tagHandle.style.left != r + "px" && (t.ctx.tagHandle.style.left = r + "px"), 1 == e.wgtGetProperty(t.apnOID, "vbar") ? uxWgtPlayerSeek._barPlayedRender2(e, t, a / i) : uxWgtPlayerSeek._barPlayedRender(e, t, Math.max(1, n))
    }
}, xa._barPlayedLoad = function(e, t) {
    function a(a, i, r) {
        a == i ? (d.ctx.uImgLoaded = !0, 1 == e.wgtGetProperty(d.apnOID, "vbar") ? uxWgtPlayerSeek._barPlayedRender2(e, d, 0) : uxWgtPlayerSeek._barPlayedRender(e, d, 1)) : e.log(t, "Failed to load " + r + " images.")
    }
    var i = e.wgtGetProperty(t, "cfg");
    if (i.barPlayed.L.mediaID && i.barPlayed.C.mediaID && i.barPlayed.R.mediaID) {
        var d = e.wgtTag(t);
        d.ctx.uTagPlayed = d.$TAG("div", {
            style: "position:absolute;overflow:hidden;left:0px;height:0px;width:1px;height:" + d.style.height
        }), e.tagPutUnder(d.ctx.uTagPlayed, d.ctx.tagHandle), e.tagPassPointerEvent(d.ctx.uTagPlayed, !0), d.ctx.uPlayedImgs = {}, d.ctx.uPlayedImgs.L = {
            url: e.mediaURL(i.barPlayed.L.mediaID)
        }, d.ctx.uPlayedImgs.M = {
            url: e.mediaURL(i.barPlayed.C.mediaID)
        }, d.ctx.uPlayedImgs.R = {
            url: e.mediaURL(i.barPlayed.R.mediaID)
        }, (new apn.CRscLoader).load(e.project, d.ctx.uPlayedImgs, a)
    }
}, xa._barPlayedRender = function(e, t, a) {
    t.ctx.uTagPlayed && t.ctx.uImgLoaded && (t.ctx.uTagPlayed.style.width = a + "px", apn.widgets.utils.patch3(t.ctx.uTagPlayed, !1, t.ctx.uPlayedImgs.L.image, t.ctx.uPlayedImgs.M.image, t.ctx.uPlayedImgs.R.image))
}, xa._barPlayedRender2 = function(e, t, a) {
    if (t.ctx.uTagPlayed && t.ctx.uImgLoaded) {
        var i = parseInt(t.style.width);
        if (t.ctx.tagHandle && "block" == t.ctx.tagHandle.style.display) var d = parseInt(t.ctx.tagHandle.style.left) + parseInt(t.ctx.tagHandle.style.width) / 2,
            r = d - parseInt(t.ctx.uTagPlayed.style.left);
        else var r = a * i;
        t.ctx.uTagPlayed.style.width = Math.max(.01, r) + "px", apn.widgets.utils.patch3(t.ctx.uTagPlayed, !1, t.ctx.uPlayedImgs.L.image, t.ctx.uPlayedImgs.M.image, t.ctx.uPlayedImgs.R.image)
    }
}, xa.onEdit = void 0, xa.edtOnConfig = function(e, t) {
    function a() {
        eduLib.edtInputApplyAll(e, i), n.bar.mediaID && e.wgtSetProperty(t, "apxMediaID", n.bar.mediaID), e.wgtSetProperty(t, "cfg", n)
    }
    var i, d, r, n = e.wgtGetProperty(t, "cfg"),
        l = e.getScreenData(),
        o = [];
    for (var s in l.objects) d = l.objects[s].create.data, r = apn.Project.getWidgetModule(d), d && d.properties && d.properties.attrs && d.properties.attrs.apxMediaControl && r && (!r.exeMediaCheck || r.exeMediaCheck("seeking")) && (!d.properties.attrs.list && !d.properties.attrs.URLs || d.properties.attrs.noMultiTrack) && o.push({
        value: s,
        title: e.itrGetObjectTitle(s)
    });
    eduLib.utilSortObjectsByTitle(e, o), o.push({
        title: apn.CExe.GL(apn.CExe.TXT_SETUP_NOSEL),
        value: ""
    }), (i = e.dlgDoModal(640, 600, a)) && (eduLib.edtInputAdd(e, i, {
        type: "select",
        options: o,
        title: apn.CExe.GL({
            ko: "연동할 위젯",
            en: "Media widget to interface with"
        }) + " (m)",
        key: "idAudio",
        value: n,
        join: !0
    }), eduLib.edtInputAdd(e, i, {
        type: "space"
    }), eduLib.edtInputAdd(e, i, {
        type: "title",
        title: apn.CExe.GL({
            ko: "필수 이미지",
            en: "Mandatory images"
        })
    }), eduLib.edtInputAdd(e, i, {
        type: "image",
        title: apn.CExe.GL({
            ko: "탐색바",
            en: "Bar"
        }) + " (m)",
        value: n,
        key: "bar",
        join: !0
    }), eduLib.edtInputAdd(e, i, {
        type: "image",
        title: apn.CExe.GL({
            ko: "탐색핸들",
            en: "Handle"
        }) + " (m)",
        value: n.handle,
        key: "normal",
        join: !0
    }), eduLib.edtInputAdd(e, i, {
        type: "space",
        join: !0
    }), eduLib.edtInputAdd(e, i, {
        type: "title",
        title: apn.CExe.GL({
            ko: "재생부분 표시 이미지 (3조각 패턴)",
            en: "Images for played area (3-patched)"
        })
    }), eduLib.edtInputAdd(e, i, {
        type: "image",
        title: apn.CExe.GL({
            ko: "왼쪽",
            en: "Left"
        }),
        value: n.barPlayed,
        key: "L",
        join: !0
    }), eduLib.edtInputAdd(e, i, {
        type: "image",
        title: apn.CExe.GL({
            ko: "가운데",
            en: "Middle"
        }),
        value: n.barPlayed,
        key: "C",
        join: !0
    }), eduLib.edtInputAdd(e, i, {
        type: "image",
        title: apn.CExe.GL({
            ko: "오른쪽",
            en: "Right"
        }),
        value: n.barPlayed,
        key: "R",
        join: !0
    }))
}, xa.edtOnBuildProperty = function(e, t, a, i) {
    return {
        disableDrag: {
            title: "Mode",
            input: [{
                title: "Animation",
                value: "A"
            }, {
                title: "Seek-bar",
                value: ""
            }]
        }
    }
}, xa.edtOnRemapObjectID = function(e, t, a) {
    if (t && t.properties && t.properties.attrs && t.properties.attrs.cfg) {
        var i = t.properties.attrs.cfg;
        i.idAudio && (a[i.idAudio] ? i.idAudio = a[i.idAudio] : e.getScreenData().objects[i.idAudio] || (i.idAudio = ""))
    }
}, xa.edtOnBuildEvent = function(e, t, a, i) {
    i.wgtEvent = {
        value: "wgtEvent",
        title: apn.P.eventTitle.wgtEvent,
        param: {
            endSeek: "EndSeek"
        }
    }
}, uxWgtPlayerSeek = xa;
var xa = apn.inheritWidget(apn.widgets["apn.wgt.roundRect"]);
xa.apnWgtRectVer = 2, xa.properties = {
    attrs: {
        uxMediaPlayer: !0,
        cfg: {
            idAudio: ""
        }
    }
}, xa.styles = xa.styles || {}, xa.styles.text = "00:00 / 00:00", xa.edtOnConfig = function(t, e) {
    function i() {
        eduLib.edtInputApplyAll(t, r), t.wgtSetProperty(e, "cfg", a)
    }
    var r, a = t.wgtGetProperty(e, "cfg"),
        o = t.getScreenData(),
        n = [];
    for (var d in o.objects) o.objects[d].create && o.objects[d].create.data && o.objects[d].create.data.properties && o.objects[d].create.data.properties.attrs && o.objects[d].create.data.properties.attrs.apxMediaControl && n.push({
        value: d,
        title: t.itrGetObjectTitle(d)
    });
    eduLib.utilSortObjectsByTitle(t, n), n.push({
        title: apn.CExe.GL(apn.CExe.TXT_SETUP_NOSEL),
        value: ""
    }), (r = t.dlgDoModal(640, 200, i)) && eduLib.edtInputAdd(t, r, {
        type: "select",
        options: n,
        title: apn.CExe.GL({
            ko: "연동할 위젯",
            en: "Media widget to interface with"
        }) + " (m)",
        key: "idAudio",
        value: a,
        join: !0
    })
}, xa.exeRenderTag = function(t, e, i, r, a, o) {
    return r.create.data.properties.ver = 2, apn.widgets["apn.wgt.roundRect"].exeRenderTag.call(this, t, e, i, r, a, o)
}, xa.exeOnForceStyle = function(t, e) {
    e.textPadding = 0
}, xa.exeOnLoad = function(t, e) {
    function i(t) {
        return t = Math.round(t), t || (t = 0), (Math.floor(t / 60) < 10 ? "0" : "") + Math.floor(t / 60) + ":" + (t % 60 < 10 ? "0" : "") + t % 60
    }

    function r(r, a, n) {
        var d, c;
        "infoPlayTime" != r && "infoDuration" != r || (o.ctx._duration = n, d = 0, o.ctx._curTime = d, c = !0), "infoPlayTime" == r || "infoDuration" == r ? void 0 !== a && n && (d = a, o.ctx._curTime = d, c = !0) : "trackEnd" == r && (d = 0, c = !0), c && o.ctx._duration && t.wgtSetProperty(e, "apxText", i(d) + " / " + i(o.ctx._duration))
    }

    function a(r, a) {
        r == e && o.ctx._duration && ("string" == typeof a && a.length > 1 && "%" == a[a.length - 1] && (a = parseFloat(a) / 100 * o.ctx._duration), t.wgtSetProperty(e, "apxText", i(a) + " / " + i(o.ctx._duration)))
    }
    var o = t.wgtTag(e),
        n = t.wgtGetProperty(e, "cfg");
    return n.idAudio && t.wgtTag(n.idAudio) ? (o.ctx = {}, o.ctx.tagAudio = t.wgtTag(n.idAudio), t.wgtListenMedia(e, n.idAudio, r), void t.wgtListenProperty(e, "currentTime", a)) : void t.log(e, apn.CExe.GL({
        ko: "제어할 '연동할 위젯'이 설정되지 않았거나 존재하지 않습니다.",
        en: "'Media widget to interface with' is not set or not exist."
    }))
}, xa.exePropGet = function(t, e, i, r) {
    if ("currentTime" == i) {
        if (r) return !0;
        var a = t.wgtTag(e);
        if (a && a.ctx) return void 0 === a.ctx._curTime ? null : a.ctx._curTime
    }
}, xa.edtOnRemapObjectID = function(t, e, i) {
    if (e && e.properties && e.properties.attrs && e.properties.attrs.cfg) {
        var r = e.properties.attrs.cfg;
        r.idAudio && (i[r.idAudio] ? r.idAudio = i[r.idAudio] : t.getScreenData().objects[r.idAudio] || (r.idAudio = ""))
    }
}, xa.pubOnGetText = function(t, e, i) {
    var r, a = t.pages[e].objects[i].create.data;
    return a.styles && a.styles.font && (r = a.styles.font), r = apn.Project.resolveStyle(t, "font", r), [{
        font: r,
        str: "0123456789:/"
    }]
}, uxWgtPlayerTime = xa;
var xa = apn.inheritWidget(apn.widgets["apn.wgt.audio"]);
xa.scriptInfo = {
    wgtData: {
        background: {
            help: {
                ko: "Boolean\n페이지 종료 후 계속 Play할지 여부",
                en: "Boolean\nPlay on background after page end"
            }
        }
    }
}, void 0 !== xa.properties.attrs.stp && delete xa.properties.attrs.stp, xa.editor.states = void 0, xa.exeSetState = function(t, e, a, r) {
    if (apn.widgets["apn.wgt.audio"].exeSetState.call(this, t, e, a, r), 0 == a.indexOf("T:")) {
        var i = parseInt(a.substring(2));
        e.apnPlayList && e.apnPlayList[i - 1] ? t.wgtControlMedia(e.apnOID, "play", i, !0) : t.log(e.apnOID, "Invalid track is requested to play. TrackId=" + i)
    }
}, xa.exeOnLoad = function(t, e) {
    function a(t, a) {
        t == e && (p.apxBackgroundRun = a)
    }
    apn.widgets["apn.wgt.audio"].exeOnLoad.call(this, t, e);
    var r, i, p = t.wgtTag(e);
    if (i = t.wgtGetProperty(e, "URLs"))
        for (var o = 0; o < i.length; o++) i[o].URL && (r = r || [], r.push(i[o].URL));
    else if (i = t.wgtGetProperty(e, "list"))
        for (var o = 0; o < i.length; o++) i[o].audio.mediaID && (r = r || [], r.push(i[o].audio.mediaID));
    r && r.length && (this.exeAssetLoad(t, t.wgtTag(e), r), p._mediaLoaded = !0), t.wgtGetProperty(e, "background") ? p.apxBackgroundRun = !0 : t.wgtGetProperty(e, "cfg") && "Y" == t.wgtGetProperty(e, "cfg").bg && (p.apxBackgroundRun = !0), t.wgtListenProperty(e, "background", a)
}, xa.exeOnStart = function(t, e) {
    apn.widgets["apn.wgt.audio"].exeOnStart.call(this, t, e), this.exeOnResume(t, e)
}, xa.exeOnResume = function(t, e) {
    var a = t.wgtTag(e);
    if (!a._mediaLoaded) {
        var r;
        r = t.ctxGet("eduAudioPlayList"), r && r.length && this.exeAssetLoad(t, t.wgtTag(e), r)
    }
}, xa.exeInputGet = function(t, e) {
    var a;
    if (e._newList) a = e._newList;
    else {
        a = [];
        var r = t.wgtGetProperty(e.apnOID, "list");
        if (r)
            for (var i = 0; i < r.length; i++) r[i].audio.mediaID && a.push(r[i].audio.mediaID)
    }
    return JSON.stringify(a)
}, xa.edtOnInputGet = function(t, e, a) {
    var r, i = [];
    if ((r = t.pages[e].objects[a].create.data) && r.properties && r.properties.attrs && r.properties.attrs.list)
        for (var p = r.properties.attrs.list, o = 0; o < p.length; o++) p[o].audio.mediaID && i.push(p[o].audio.mediaID);
    return JSON.stringify(i)
}, xa.exeInputSet = function(t, e, a) {
    var r;
    try {
        r = JSON.parse(a)
    } catch (t) {}
    if (r && r instanceof Array && r.length) {
        this.exeAssetLoad(t, e, r), e._mediaLoaded = !0, e._newList = r;
        var i = t.wgtGetProperty(e.apnOID, "list");
        i.length = 0;
        for (var p = 0; p < r.length; p++) i.push({
            audio: {
                mediaID: r[p]
            }
        })
    } else t.log(e.apnOID, "Invalid value is set, value=" + a)
}, xa.exeMediaSupportTrack = function(t, e) {
    if (!(apn.dbUI && apn.dbUI.system && apn.dbUI.system.exeEventCache)) return null;
    var a = t.objects[e].create.data;
    return !(a && a.properties && a.properties.attrs && 2 == a.properties.attrs.v && a.properties.attrs.noMultiTrack)
}, xa.onEdit = void 0, xa.edtOnConfig = function(t, e) {
    function a() {
        eduLib.edtInputApplyAll(t, p), t.wgtSetProperty(e, "URLs", d), t.wgtSetProperty(e, "mdaSync", o.mdaSync)
    }

    function r() {
        eduLib.edtInputDestroy(t, p)
    }

    function i() {
        eduLib.edtInputApplyAll(t, p), s.apxApCH && (s.apxApCH = parseInt(s.apxApCH)), n[0] && n[0].audio.mediaID && t.wgtSetProperty(e, "apxMediaID", n[0].audio.mediaID), void 0 !== s.bg && delete s.bg, t.wgtSetProperty(e, "list", n), t.wgtSetProperty(e, "cfg", s), t.wgtSetProperty(e, "background", "Y" == u.background), t.wgtSetProperty(e, "mdaSync", o.mdaSync), r()
    }
    var p, o = {
        mdaSync: t.wgtGetProperty(e, "mdaSync")
    };
    if (t.wgtGetProperty(e, "URLs")) {
        var d = t.wgtGetProperty(e, "URLs");
        (p = t.dlgDoModal(900, 400, a)) && (t.wgtGetProperty(e, "noMultiTrack") ? eduLib.edtInputAdd(t, p, {
            type: "table",
            value: d,
            options: {
                th: ["Audio URL"]
            },
            td: [{
                type: "text",
                key: "URL"
            }],
            join: !0
        }) : eduLib.edtInputAdd(t, p, {
            type: "table",
            value: d,
            options: {
                th: ["Audio URL"],
                add: !0,
                remove: !0
            },
            td: [{
                type: "text",
                key: "URL"
            }],
            join: !0
        }), eduLib.edtInputAdd(t, p, {
            type: "space"
        }), apn.widgets["apn.wgt.video"]._edtOnConfigMdaSync(t, p, o))
    } else {
        var n = t.wgtGetProperty(e, "list"),
            s = t.wgtGetProperty(e, "cfg") || {};
        n = n || [{
            audio: {
                mediaID: void 0
            }
        }];
        var u = {
                background: "N"
            },
            l = t.wgtGetProperty(e, "background");
        if (void 0 !== l ? l && (u.background = "Y") : void 0 !== s.bg && "Y" == s.bg && (u.background = "Y"), p = t.dlgDoModal(900, Math.floor(.8 * bx.UX.height), i, r)) {
            if (eduLib.edtInputAdd(t, p, {
                    type: "table",
                    value: n,
                    options: {
                        th: ["Audio", "Comment"],
                        add: !0,
                        remove: !0,
                        order: !0
                    },
                    td: [{
                        type: "audio",
                        key: "audio",
                        acceptFileName: !0
                    }, {
                        type: "text",
                        key: "cmt",
                        width: "400px"
                    }],
                    join: !0
                }), eduLib.edtInputAdd(t, p, {
                    type: "space"
                }), apn.widgets["apn.wgt.video"]._edtOnConfigMdaSync(t, p, o), eduLib.edtInputAdd(t, p, {
                    type: "space"
                }), apn.CExe.IWidget_getAudioAutoplayCount(t.getData())) {
                for (var g = [], c = 0; c < apn.CExe.IWidget_getAudioAutoplayCount(t.getData()); c++) g.push({
                    title: c + 1,
                    value: c + 1
                });
                g.push({
                    title: apn.CExe.GL({
                        ko: "[사용안함]",
                        en: "[Not use]"
                    }),
                    value: ""
                }), eduLib.edtInputAdd(t, p, {
                    type: "title",
                    title: apn.CExe.GL({
                        ko: "자동재생 채널을 통하여 재생",
                        en: "Use autoplay channel"
                    })
                }), eduLib.edtInputAdd(t, p, {
                    type: "select",
                    title: apn.CExe.GL({
                        ko: "채널 ID",
                        en: "Channel ID"
                    }),
                    value: s,
                    key: "apxApCH",
                    options: g,
                    join: !0
                }), eduLib.edtInputAdd(t, p, {
                    type: "space"
                })
            }
            eduLib.edtInputAdd(t, p, {
                type: "title",
                title: "More options"
            }), eduLib.edtInputAdd(t, p, {
                type: "select",
                title: "Background play",
                value: u,
                key: "background",
                options: [{
                    title: "Yes",
                    value: "Y"
                }, {
                    title: "No",
                    value: "N"
                }],
                join: !0
            })
        }
    }
}, xa.edtOnBuildState = function(t, e, a, r) {
    for (var i in apn.widgets["apn.wgt.audio"].editor.states) r[i] = apn.widgets["apn.wgt.audio"].editor.states[i];
    var p = t.pages[a].objects[e].create.data;
    if (!(p && p.properties && p.properties.attrs && p.properties.attrs.v >= 2)) {
        var o = 1;
        if (p && p.properties && p.properties.attrs && p.properties.attrs.URLs)
            for (i = 0; i < p.properties.attrs.URLs.length; i++) p.properties.attrs.URLs[i].URL && (r["T:" + o] = "PlayTrack " + o, o++);
        else if (p && p.properties && p.properties.attrs && p.properties.attrs.list)
            for (i = 0; i < p.properties.attrs.list.length; i++) p.properties.attrs.list[i].audio.mediaID && (r["T:" + o] = "PlayTrack " + o, o++)
    }
}, xa.edtOnBuildEvent = function(t, e, a, r) {
    var p = 1,
        o = t.pages[a].objects[e].create.data;
    if (o && o.properties && o.properties.attrs && o.properties.attrs.URLs)
        for (i = 0; i < o.properties.attrs.URLs.length; i++) o.properties.attrs.URLs[i].URL && (r.media.param["trS_" + p] = "TrackStart" + p, r.media.param["trE_" + p] = "TrackEnd" + p, r.media.param["trEN_" + p] = "TrackEndNormal" + p, p++);
    else if (o && o.properties && o.properties.attrs && o.properties.attrs.list)
        for (i = 0; i < o.properties.attrs.list.length; i++) o.properties.attrs.list[i].audio.mediaID && (r.media.param["trS_" + p] = "TrackStart" + p, r.media.param["trE_" + p] = "TrackEnd" + p, r.media.param["trEN_" + p] = "TrackEndNormal" + p, p++)
}, eduWgtAudioPlayer = xa;
var xa = apn.inheritWidget(apn.widgets["apn.wgt.audio"]);
xa.scriptInfo = xa.scriptInfo || {}, xa.scriptInfo.wgtData = xa.scriptInfo.wgtData || {}, xa.scriptInfo.wgtData.background = {
    help: {
        ko: "Boolean\n페이지 전환 후에도 계속 재생할지 여부입니다.",
        en: "Boolean\nPlay on background after page switch"
    }
}, xa.editor.states = void 0, xa.exeInputSet = eduWgtAudioPlayer.exeInputSet, xa.exeInputGet = eduWgtAudioPlayer.exeInputGet, xa.edtOnInputGet = eduWgtAudioPlayer.edtOnInputGet, xa.properties = xa.properties || {}, xa.properties.attrs = xa.properties.attrs || {}, xa.properties.attrs.list = [{
    audio: {
        mediaID: void 0
    }
}], xa.properties.attrs.noMultiTrack = !0, xa.properties.attrs.background = !1, void 0 !== xa.properties.attrs.apxStep && delete xa.properties.attrs.apxStep, void 0 !== xa.properties.attrs.stp && delete xa.properties.attrs.stp, xa.exeSetState = function(t, e, a, r) {
    if (apn.widgets["apn.wgt.audio"].exeSetState.call(this, t, e, a, r), 0 == a.indexOf("T:")) {
        for (var i, p = parseInt(a.substring(2)), o = t.wgtGetProperty(e.apnOID, "list"), d = 0, n = 0; n < o.length; n++)
            if (o[n].audio.mediaID && (d++, d == p)) {
                e.apnTrackPlayIdx = p, this.exeAssetLoad(t, e, o[n].audio.mediaID), t.wgtControlMedia(e.apnOID, "play"), i = !0;
                break
            } i || t.log(e.apnOID, "Invalid track is requested to play. TrackId=" + p)
    }
}, xa.exeOnLoad = function(t, e) {
    function a(t, a) {
        t == e && (i.apxBackgroundRun = a)
    }
    apn.widgets["apn.wgt.audio"].exeOnLoad.call(this, t, e);
    var r, i = t.wgtTag(e);
    if (listPrp = t.wgtGetProperty(e, "list"))
        for (var p = 0; p < listPrp.length; p++)
            if (listPrp[p].audio.mediaID) {
                r = listPrp[p].audio.mediaID;
                break
            } r && (i.apnTrackPlayIdx = 1, this.exeAssetLoad(t, t.wgtTag(e), r)), t.wgtGetProperty(e, "background") && (i.apxBackgroundRun = !0), t.wgtListenProperty(e, "background", a)
}, xa.exeMediaSupportTrack = function(t, e) {
    return 1
}, xa.onEdit = void 0, xa.edtOnConfig = function(t, e) {
    function a() {
        eduLib.edtInputDestroy(t, i)
    }

    function r() {
        eduLib.edtInputApplyAll(t, i), o.apxApCH && (o.apxApCH = parseInt(o.apxApCH)), p[0] && p[0].audio.mediaID && t.wgtSetProperty(e, "apxMediaID", p[0].audio.mediaID), t.wgtSetProperty(e, "list", p), t.wgtSetProperty(e, "cfg", o), t.wgtSetProperty(e, "background", "Y" == d.background), t.wgtSetProperty(e, "mdaSync", d.mdaSync), a()
    }
    var i, p = t.wgtGetProperty(e, "list"),
        o = t.wgtGetProperty(e, "cfg") || {},
        d = {
            mdaSync: t.wgtGetProperty(e, "mdaSync"),
            background: t.wgtGetProperty(e, "background") === !0 ? "Y" : "N"
        };
    if (i = t.dlgDoModal(900, Math.floor(.8 * bx.UX.height), r, a)) {
        if (eduLib.edtInputAdd(t, i, {
                type: "table",
                value: p,
                options: {
                    th: ["Audio", "Comment"],
                    add: !0,
                    remove: !0,
                    order: !0
                },
                td: [{
                    type: "audio",
                    key: "audio",
                    acceptFileName: !0
                }, {
                    type: "text",
                    key: "cmt",
                    width: "400px"
                }],
                join: !0
            }), eduLib.edtInputAdd(t, i, {
                type: "space"
            }), apn.widgets["apn.wgt.video"]._edtOnConfigMdaSync(t, i, d), apn.CExe.IWidget_getAudioAutoplayCount(t.getData())) {
            for (var n = [], s = 0; s < apn.CExe.IWidget_getAudioAutoplayCount(t.getData()); s++) n.push({
                title: s + 1,
                value: s + 1
            });
            n.push({
                title: apn.CExe.GL({
                    ko: "[사용안함]",
                    en: "[Not use]"
                }),
                value: ""
            }), eduLib.edtInputAdd(t, i, {
                type: "space"
            }), eduLib.edtInputAdd(t, i, {
                type: "title",
                title: apn.CExe.GL({
                    ko: "자동재생 채널을 통하여 재생",
                    en: "Use autoplay channel"
                })
            }), eduLib.edtInputAdd(t, i, {
                type: "select",
                title: apn.CExe.GL({
                    ko: "채널 ID",
                    en: "Channel ID"
                }),
                value: o,
                key: "apxApCH",
                options: n,
                join: !0
            })
        }
        var u = !0,
            l = apn.Project.getExeModule(t.getData());
        if (l.IStub_getConfiguration) {
            var g = l.IStub_getConfiguration(t.getData());
            if (g && g.flowModeHide) {
                var c = apn.Project.getLayout(t.getData()).property;
                c.CExeBookCore && "Y" == c.CExeBookCore.pageNoReset || (u = !1)
            }
        }
        u && (eduLib.edtInputAdd(t, i, {
            type: "space"
        }), eduLib.edtInputAdd(t, i, {
            type: "title",
            title: apn.CExe.GL(apn.CExe.TXT_SETUP_OPTS)
        }), eduLib.edtInputAdd(t, i, {
            type: "select",
            title: apn.CExe.GL({
                ko: "페이지 전환 후에도 계속 재생",
                en: "Background play after page switch"
            }),
            value: d,
            key: "background",
            options: [{
                title: apn.CExe.GL({
                    ko: "예",
                    en: "Yes"
                }),
                value: "Y"
            }, {
                title: apn.CExe.GL({
                    ko: "아니오",
                    en: "No"
                }),
                value: "N"
            }],
            join: !0
        }))
    }
}, xa.edtOnBuildState = function(t, e, a, r) {
    for (var i in apn.widgets["apn.wgt.audio"].editor.states) r[i] = apn.widgets["apn.wgt.audio"].editor.states[i];
    var p = t.pages[a].objects[e].create.data,
        o = 1;
    if (p && p.properties && p.properties.attrs && p.properties.attrs.URLs)
        for (i = 0; i < p.properties.attrs.URLs.length; i++) p.properties.attrs.URLs[i].URL && (r["T:" + o] = "PlayTrack " + o, o++);
    else if (p && p.properties && p.properties.attrs && p.properties.attrs.list)
        for (i = 0; i < p.properties.attrs.list.length; i++) p.properties.attrs.list[i].audio.mediaID && (r["T:" + o] = "PlayTrack " + o, o++)
}, xa.edtOnBuildEvent = function(t, e, a, r) {
    eduWgtAudioPlayer.edtOnBuildEvent.call(this, t, e, a, r), delete r.media.param.trackStart, delete r.media.param.trackEnd, delete r.media.param.trackEndN
}, eduWgtAudioPlayerMF = xa;