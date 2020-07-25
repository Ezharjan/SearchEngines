(function (c) { c.MtaH5HotClick = c.MtaH5HotClick || {}; MtaH5HotClick.hack = function () { var c = document.getElementsByName("mtah5hotclick"), g = { sid: "", hid: "" }; 0 < c.length && ("undefined" !== typeof c[0].attributes.sid && (g.sid = c[0].attributes.sid.nodeValue), "undefined" !== typeof c[0].attributes.hid && (g.hid = c[0].attributes.hid.nodeValue)); return g } })(this);
(function (c, l) {
    function g(a) { a = window.localStorage ? localStorage.getItem(a) || sessionStorage.getItem(a) : (a = document.cookie.match(new RegExp("(?:^|;\\s)" + a + "=(.*?)(?:;\\s|$)"))) ? a[1] : ""; return a } function n(a, d, b) {
        if (window.localStorage) try { b ? localStorage.setItem(a, d) : sessionStorage.setItem(a, d) } catch (h) { } else {
            var k = window.location.host, c = { "com.cn": 1, "js.cn": 1, "net.cn": 1, "gov.cn": 1, "com.hk": 1, "co.nz": 1 }, f = k.split("."); 2 < f.length && (k = (c[f.slice(-2).join(".")] ? f.slice(-3) : f.slice(-2)).join(".")); document.cookie =
                a + "=" + d + ";path=/;domain=" + k + (b ? ";expires=" + b : "")
        }
    } function q(a) {
        var d = {}; if (void 0 === a) { var b = window.location; a = b.host; var c = b.pathname; var m = b.search.substr(1); b = b.hash } else b = a.match(/\w+:\/\/((?:[\w-]+\.)+\w+)(?::\d+)?(\/[^\?\\"'\|:<>]*)?(?:\?([^'"\\<>#]*))?(?:#(\w+))?/i) || [], a = b[1], c = b[2], m = b[3], b = b[4]; void 0 !== b && (b = b.replace(/"|'|<|>/ig, "M")); if (m) for (var f = m.split("&"), h = 0, g = f.length; h < g; h++)if (-1 != f[h].indexOf("=")) { var e = f[h].indexOf("="), l = f[h].slice(0, e); e = f[h].slice(e + 1); d[l] = e } return {
            host: a,
            path: c, search: m, hash: b, param: d
        }
    } function p(a) { return (a || "") + Math.round(2147483647 * (Math.random() || .5)) * +new Date % 1E10 } function r() {
        var a = q(), d = { dm: a.host, pvi: "", si: "", url: a.host + a.path, arg: encodeURIComponent(a.search || "").substr(0, 512), ty: 0 }; d.pvi = function () { var a = g("pgv_pvi"); a || (d.ty = 1, a = p(), n("pgv_pvi", a, "Sun, 18 Jan 2038 00:00:00 GMT;")); return a }(); d.si = function () { var a = g("pgv_si"); a || (a = p("s"), n("pgv_si", a)); return a }(); d.url = function () {
            if (c.hid) return c.hid; var b = a.host + a.path; b += a.search ?
                "?" + a.search : ""; b += a.hash ? a.hash : ""; return encodeURIComponent(b)
        }(); return d
    } function t() { try { var a = navigator, c = { scr: "414x414", scl: (screen || { width: "", height: "", colorDepth: "" }).colorDepth + "-bit", lg: (a.language || a.userLanguage).toLowerCase(), tz: (new Date).getTimezoneOffset() / 60 } } catch (b) { return {} } return c } function u(a) {
        if (c.sid) {
            var d = [], b = 0; a = [r(), { r2: "h" + c.sid, r3: Math.max(window.document.body.scrollHeight, window.document.documentElement.scrollHeight) }, t(), a, { random: +new Date }]; for (var k = a.length; b <
                k; b++)for (var e in a[b]) a[b].hasOwnProperty(e) && d.push(e + "=" + ("undefined" == typeof a[b][e] ? "" : a[b][e])); (function (a) { a = MtaH5HotClick.src = ("https:" == document.location.protocol ? "https://pingtas.qq.com/webview" : "http://pingtcss.qq.com") + "/pingd?" + a.join("&"); var b = new Image; MtaH5HotClick[c.sid] = b; b.onload = b.onerror = b.onabort = function () { b = b.onload = b.onerror = b.onabort = null; MtaH5HotClick[c.sid] = !0 }; b.src = a })(d)
        }
    } l.MtaH5HotClick = l.MtaH5HotClick || {}; var e = MtaH5HotClick.hack ? MtaH5HotClick.hack() : {}; e && function () {
        for (var a in e) e.hasOwnProperty(a) &&
            (c[a] = e[a])
    }(); (function (a, c, b) { a.addEventListener(c, function (a) { a = window.event || a; target = a.srcElement || a.target; b(a, target) }, !1) })(document, "touchstart", function (a, c) { var b = 0 < event.touches.length && event.touches[0]; var d = b.pageX; b = b.pageY; d *= 414 / window.screen.width; u({ x: d, y: b }) })
})({}, this);