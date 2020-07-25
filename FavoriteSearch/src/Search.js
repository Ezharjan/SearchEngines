var Search = {};
Search.tmp = {};
Search.tmp.keyword = {};
Search.tmp.mode = "note";
Search.user = {};
Search.user.saveHistory;
Search.user.loadAll;
Search.user.currentCategory;
Search.user.currentTab = {};
Search.user.list = [];
Search.user.history = [];
Search.user.Options;
Search.user.PreList;
var TimeOutArray = new Array();

if (navigator.appName == "Microsoft Internet Explorer") { var location = document.location; }

Search.init = function () {
    Search.config.loadSettings();
    Search.config.loadHistory();
    Search.config.loadSearchState();
    Search.updateLanguage();
    Search.config.loadPreferedList();
    Search.config.loadQueryParameters();
    Search.search.buildUI();
    Search.attachEvents();
    if (!GetBrowser()) { $id("btn_AddSearch").disabled = true; }
    if (Search.user.Options) { Search.options.show(); }
    if (Search.user.PreList) { Search.options.show("list"); }
};
Search.SetHome = function () {
    if (navigator.appName == "Microsoft Internet Explorer") {
        $id("btn_set_home").style.behavior = 'url(#default#homepage)';
        $id("btn_set_home").setHomePage('http://ezharjan.gitee.io/favoritesearch/');
    }
}

Search.addEngine = function () {
    window.external.AddSearchProvider("http://www.gitee.com/ezharjan/alexandersearch-CHS.xml");
}

Search.addToFavorites = function () {
    var _1 = $lang("title");
    var _2 = "http://www.gitee.com/ezharjan";
    if (document.all) {
        window.external.AddFavorite(_2, _1);
    }
    else {
        if (window.sidebar) {
            window.sidebar.addPanel(_1, _2, "");
        }
        else {
            if (window.opera && window.print) {
                var _3 = document.createElement("a");
                _3.setAttribute("rel", "sidebar");
                _3.setAttribute("href", _2);
                _3.setAttribute("title", _1);
                _3.click();
            }
        }
    }
};

Search.updateLanguage = function () {
    if (Search.localeLang[Search.user.langCode]) {
        $langNamespace = Search.localeLang[Search.user.langCode];
    }
    else {
        $langNamespace = Search.localeLang[Search.defaults.langCode];
        Search.user.langCode = Search.defaults.langCode;
    }
    if (Search.localeList[Search.user.langCode]) {
        Search.list = Search.localeList[Search.user.langCode];
    }
    else {
        Search.list = Search.localeList[Search.defaults.langCode];
    }
    Search.updateTitle();


    $id("btn_set_home").innerHTML = $lang("set_home");
    $id("btn_add_fav").innerHTML = $lang("add_fav");
    $id("btn_history").innerHTML = $lang("history");
    $id("btn_options").innerHTML = $lang("options");
    $id("btn_custom_prefer").innerHTML = $lang("custom_prefer");
    $id("btn_AddSearch").innerHTML = $lang("AddSearch");
    $id("txt_options_header").innerHTML = $lang("options");
    $id("txt_opt_lang").innerHTML = $lang("opt_lang");
    $id("txt_opt_save_history").innerHTML = $lang("opt_save_history");
    $id("txt_opt_load_all").innerHTML = $lang("opt_load_all");
    $id("_time").innerHTML = $lang("_time");
    $id("_counts").innerHTML = $lang("_counts");



    $id("txt_options_list").innerHTML = $lang("options_list");
    try {
        $id("img_list_up").alt = $lang("list_up");
        $id("img_list_down").alt = $lang("list_down");
        $id("img_list_custom").alt = $lang("list_custom");
    } catch (ex) { }
    $id("txt_list_current_prefered").innerHTML = $lang("list_current_prefered");
    $id("txt_list_default").innerHTML = $lang("list_default");
    $id("txt_list_add_text").innerHTML = $lang("list_add_text");
    $id("txt_list_i_new").innerHTML = $lang("list_i_new");
    $id("txt_list_i_name").innerHTML = $lang("list_i_name");
    $id("txt_list_i_url").innerHTML = $lang("list_i_url");
    $id("i_note_internal").innerHTML = $lang("list_i_note_internal");
    $id("i_note_edit").innerHTML = $lang("list_i_note");
    $id("note").innerHTML = $lang("no_search_notice");
    $id("btn_opt_save").value = "  " + $lang("save") + "  ";
    $id("btn_opt_cancel").value = "  " + $lang("cancel") + "  ";
};

Search.updateTitle = function (_1) {
    if (!_1) { _1 == ""; }
    document.title = (_1 != "" && typeof (_1) != "undefined" ? _1 + " - " : "") + $lang("title");
};

Search.attachEvents = function () {
    $event("+", "click", $id("btn_add_fav"), Search.addToFavorites);
    $event("+", "click", $id("btn_set_home"), Search.SetHome);
    $event("+", "click", $id("btn_AddSearch"), Search.addEngine);

    $event("+", "keyup", $id("keyword"), Search.search.keyword.check);

    $event("+", "click", $id("btn_go"), function () {
        Search.search.checkUpdate(true);
    });

    $event("+", "click", $id("btn_history"), Search.history.show);
    $event("+", "click", $id("btn_options"), Search.options.show);

    $event("+", "click", $id("btn_custom_prefer"), function () {
        Search.options.show("list");
    });

    $event("+", "click", $id("btn_add_new"), Search.options.list.addCustomItem);
    $event("+", "click", $id("btn_i_save"), Search.options.list.saveItem);
    $event("+", "click", $id("btn_list_default"), Search.options.list.restoreDefault);
    $event("+", "click", $id("btn_opt_save"), Search.options.save);
    $event("+", "click", $id("btn_opt_cancel"), Search.search.checkUpdate);

    $event("+", "blur", $id("history"), function () {
        setTimeout("Search.history.hide()", 200);
    });

    $event("+", "resize", window, Search.search.frame.adjustSize);
};

Search.switchMode = function (_2) {
    var _3 = $id("content");
    var _4 = $id("note");
    var _5 = $id("options");
    switch (_2) {
        case "note":
            _3.style.display = "none";
            _4.style.display = "block";
            _5.style.display = "none";
            $id("Copyright").style.display = "block";
            break;
        case "search":
            _3.style.display = "block";
            _4.style.display = "none";
            _5.style.display = "none";
            $id("Copyright").style.display = "none";
            break;
        case "options":
            _3.style.display = "none";
            _4.style.display = "none";
            _5.style.display = "block";
            $id("Copyright").style.display = "none";
            break;
    }
    Search.tmp.mode = _2;
};

Search.config = {};
Search.config.loadSettings = function () {
    var _6 = $cookies("get", "ln");
    if (_6 == "") {
        if (navigator.language) {
            Search.user.langCode = navigator.language;
        }
        else {
            Search.user.langCode = navigator.userLanguage;
        }
    }
    else {
        Search.user.langCode = _6;
    }
    Search.user.langCode = Search.user.langCode.toLowerCase();
    var _6 = $cookies("get", "sh");

    if (_6 != "") {
        Search.user.saveHistory = _6;
    }
    else {
        Search.user.saveHistory = Search.defaults.saveHistory;
    }

    var _6 = $cookies("get", "la");

    if (_6 != "") {
        Search.user.loadAll = _6;
    }
    else {
        Search.user.loadAll = Search.defaults.loadAll;
    }

};


Search.config.saveSettings = function () {
    $cookies("set", "ln", Search.user.langCode);
    $cookies("set", "sh", Search.user.saveHistory);
    $cookies("set", "la", Search.user.loadAll);
};

Search.config.loadPreferedList = function () {
    var _7 = unescape($cookies("get", "pl"));
    Search.user.list = $fromJSON(_7);
    if (Search.user.list == null) {
        if (Search.defaults.preferedList[Search.user.langCode]) {
            Search.user.list = $clone(Search.defaults.preferedList[Search.user.langCode]);
        }
        else {
            Search.user.list = Search.defaults.preferedList["en-us"];
        }
    }
    if (!Search.list["prefered"]) {
        Search.list["prefered"] = {};
    }
    Search.list["prefered"].title = $lang("prefered");
    Search.list["prefered"].items = {};
    Search.list["prefered"].items = Search.config.convertPreferedList(Search.user.list);
};

Search.config.savePreferedList = function () {
    $cookies("set", "pl", escape($toJSON(Search.user.list)));
};

Search.config.convertPreferedList = function (_8) {
    var _9 = {};

    for (var i = 0; i < _8.length; i++) {
        var _b = _8[i];

        var _c;
        if (!_b.c && _b.n) {
            _9[_b.n] = { "custom": true, "name": _b.n, "title": _b.t, "url": _b.u };
            continue;
        }
        try {
            _c = Search.list[_b.c].items[_b.n];
        }
        catch (e) {
            _c = undefined;
        }
        if (_c == undefined) {
            _8.splice(i, 1);
            i--;
            continue;
        }

        _9[_b.c + "_" + _b.n] = { "category": _b.c, "name": _b.n, "title": _c.title + (_c.subtitle ? _c.subtitle : ""), "url": _c.url, "wapurl": typeof (_c.wapurl) == 'string' ? _c.wapurl : _c.url, "isgeturl": typeof (_c.isgeturl) == 'string' ? _c.isgeturl : 0, "iswapgeturl": typeof (_c.iswapgeturl) == 'string' ? _c.iswapgeturl : 0, "top": typeof (_c.top) != 'undefined' ? _c.top : 0, "waptop": typeof (_c.waptop) != 'ndefined' ? _c.waptop : 0 };
    }
    return _9;
};

Search.config.saveSearchState = function () {
    $cookies("set", "ct", escape($toJSON(Search.user.currentTab)));
};

Search.config.loadSearchState = function () {
    Search.user.currentCategory = Search.defaults.category;
    var _d = $cookies("get", "ct");
    _d = $fromJSON(unescape(_d));
    if (_d) {
        Search.user.currentTab = _d;
    }
};

Search.config.saveHistory = function () {
    $cookies("set", "kw", escape(Search.user.history.join(",")));
};

Search.config.loadHistory = function () {
    var kw = unescape($cookies("get", "kw"));
    kw = kw.split(",");
    var _f = [];
    for (var i = 0; i < kw.length; i++) {
        if (i == Search.defaults.saveHistory) {
            break;
        }
        kw[i] = kw[i].$trim();
        if (kw[i] == "") {
            kw.splice(i, 1);
            i--;
            continue;
        }
        _f.push(kw[i]);
    }
    Search.user.history = _f;
};

Search.config.loadQueryParameters = function () {
    var _11 = $parseQueryString();
    var AgentInfo = navigator.userAgent.toLowerCase()


    if (_11["action"]) {
        if (_11["action"] == "options") { Search.user.Options = true; return; }
        if (_11["action"] == "custom") { Search.user.PreList = true; return; }
    }

    if (_11["q"]) {
        _11["q"] = _11["q"].replace(/\+/g, " ");

        if (AgentInfo.indexOf("firefox") > -1) {
            try { if (_11["Charset"].toUpperCase() == "GB2312") _11["q"] = UrlDecode(_11["q"]); } catch (ex) { }
            try { _11["q"] = decodeURI(_11["q"]); } catch (ex) { }
        }
        else {
            try { if (_11["Charset"].toUpperCase() == "GB2312") _11["q"] = UrlDecode(_11["q"]); } catch (ex) { }
            _11["q"] = unescape(_11["q"]);
            try { if (_11["Charset"].toUpperCase() == "UTF-8") _11["q"] = Search.config.decodeUTF8String(_11["q"]); } catch (ex) { }
        }

        $id("keyword").value = _11["q"];
    }

    if (_11["Category"]) {
        if (Search.list[_11["Category"]]) {
            Search.user.currentCategory = _11["Category"];
        }
    }
};

Search.config.decodeGB2312String = function (str) {

}

Search.config.decodeUTF8String = function (str) {
    var _13 = "";
    for (var i = 0; i < str.length; i++) {
        var b1 = str.charCodeAt(i);
        if (b1 < 128) {
            _13 += String.fromCharCode(b1);
        } else {
            if ((b1 > 191) && (b1 < 224)) {
                var b2 = str.charCodeAt(i + 1);
                _13 += String.fromCharCode(((b1 & 31) << 6) | (b2 & 63));
                i++;
            } else {
                var b2 = str.charCodeAt(i + 1);
                var b3 = str.charCodeAt(i + 2);
                _13 += String.fromCharCode(((b1 & 15) << 12) | ((b2 & 63) << 6) | (b3 & 63));
                i += 2;
            }
        }
    }
    return _13;
};

Search.search = {};

Search.search.buildCategories = function () {
    var _18 = "";
    for (var cat in Search.list) {
        if (!Search.tmp.keyword[cat]) {
            Search.tmp.keyword[cat] = {};
        }
        _18 += "<a id=\"cat_" + cat + "\" href=\"javascript:Search.search.activateCategory('" + cat + "');\"" + (cat == "prefered" ? " class=\"prefered\"" : "") + " onclick=\"this.blur()\">" + Search.list[cat].title.$encodeHTML() + "</a>";
    }
    $write(_18, "categories");



};

Search.search.activateCategory = function (cat) {
    if (!cat) {
        cat = Search.user.currentCategory;
    }
    try {
        $id("cat_" + Search.user.currentCategory).className = (Search.user.currentCategory == "prefered" ? "prefered " : "");
    }
    catch (e) {
    }
    Search.user.currentCategory = cat;
    $id("cat_" + cat).className = (cat == "prefered" ? "prefered-active" : "active");
    if (cat == "prefered") {
        $id("btn_custom_prefer_wrapper").style.display = "inline";
    } else {
        $id("btn_custom_prefer_wrapper").style.display = "none";
    }
    Search.search.buildTabs();
    Search.search.ClearTimeOut();
    Search.search.className();
    Search.search.activateTab(Search.user.currentTab[cat]);

    /*增加菜单互动*/
    $(".sbox .navPanel #searches a").click(function () {
        $(".sbox .stype").html($(this).html())
        $(".sbox .navPanel").removeClass('hover')
    })
    if ($("#searches a.buttons-active").length > 0) {
        $(".stype").html($("#searches a.buttons-active").html());
    }

};

Search.search.buildTabs = function () {
    var cat = Search.user.currentCategory;
    var _1c = Search.list[cat].items;
    var _1d = "";
    var _1e = "";
    for (var _1f in _1c) {
        if (!Search.list[cat].defaultTab) {
            Search.list[cat].defaultTab = _1f;
        }
        if (!Search.user.currentTab[cat]) {
            Search.user.currentTab[cat] = _1f;
        }
        Search.tmp.keyword[cat][_1f] = "";
        _1d += "<a id=\"search_" + _1f + "\" href=\"javascript:Search.search.activateTab('" + _1f + "');\" onclick=\"this.blur();\"><span id=\"search_txt_" + _1f + "\" class=\"\">" + _1c[_1f].title.$encodeHTML() + "</span></a>";
        _1e += "<div id=\"iframe_wrapper_" + _1f + "\"  style=\"display: none;\">" + "</div>\n";
    }
    $write(_1d, "searches");
    $write(_1e, "content");
};

Search.search.activateTab = function (_20) {
    var cat = Search.user.currentCategory;
    if (!Search.list[cat].items[_20]) {
        _20 = Search.list[cat].defaultTab;
    }
    try {
        $id("search_" + Search.user.currentTab[cat]).className = "";
        $id("iframe_wrapper_" + Search.user.currentTab[cat]).style.display = "none";
    }
    catch (e) {
    }
    Search.user.currentTab[cat] = _20;
    $id("iframe_wrapper_" + _20).style.display = "block";
    $id("search_" + _20).className = "buttons-active";

    Search.search.frame.adjustSize();
    Search.search.checkUpdate();
};

Search.search.buildUI = function () {
    Search.search.buildCategories();
    Search.search.activateCategory();
    Search.history.build();
};

Search.search.checkUpdate = function (_22) {
    var _23 = Search.search.keyword.get();
    if (_23 == "") {
        Search.switchMode("note");
    }
    else {
        Search.history.hide();
        Search.search.execute(_22);
        Search.switchMode("search");
    }
    Search.updateTitle(_23);
    Search.config.saveSearchState();
};

Search.search.execute = function (_24) {
    var cat = Search.user.currentCategory;
    var _26 = Search.list[cat].items;
    Search.search.frame.doSearch(Search.user.currentTab[cat], _24);
    location.href = '#s=' + Search.search.keyword.get();

    Search.history.save(Search.search.keyword.get());

    if (Search.user.loadAll > 0) {
        var i = 0;
        for (var _28 in _26) {
            if (_28 != Search.user.currentTab[cat]) {
                i++;
                TimeOutArray[i] = setTimeout("Search.search.frame.doSearch(\"" + _28 + "\"," + _24 + ")", 1000 * i * Search.user.loadAll);
            }
        }
    }
};
Search.search.className = function () {
    var _26 = Search.list[Search.user.currentCategory].items;
    var classname = "buttons-txt";
    if (!Search.search.keyword.get()) {
        classname = "";
    }
    for (var _28 in _26) {
        $id("search_txt_" + _28).className = classname;
    }
};

Search.search.ClearTimeOut = function () {
    for (var i = 0; i < TimeOutArray.length; i++) {
        clearTimeout(TimeOutArray[i]);
    }
};



Search.search.keyword = {};

Search.search.keyword.cleanFor = function (_29) {
    return _29;
};

Search.search.keyword.check = function (_2a) {
    Search.search.ClearTimeOut();
    if (_2a.keyCode == 13) {
        Search.search.className();
        Search.search.checkUpdate(true);

    }
};



Search.search.keyword.get = function () {
    return $id("keyword").value.$trim();
};

Search.search.keyword.set = function (_2b) {
    Search.search.ClearTimeOut();
    $id("keyword").value = Search.user.history[_2b];
    Search.search.className();
    Search.search.checkUpdate();
};

Search.search.hotKeyword = {};
Search.search.hotKeyword.set = function (_2b) {
    Search.search.ClearTimeOut();
    $id("keyword").value = _2b;
    Search.search.className();
    if (!_2b) {
        Search.switchMode("note");
    }
    else
        Search.search.checkUpdate();
};


Search.search.frame = {};

Search.search.frame.prepare = function (_2c) {
    var _2d = $id("iframe_wrapper_" + _2c);
    if (!_2d) {
        return;
    }
    _2d.innerHTML = "";


    var _2e = window.document.createElement("iframe");
    _2e.id = "iframe_" + _2c;
    _2e.src = "about:blank";
    _2e.allowTransparency = true;
    _2e.frameBorder = "0";
    _2e.setAttribute('allowFullScreen', true); //允许全屏

    _2d.appendChild(_2e);
    var _2f;
    if (!window.opera) {
        _2f = document.documentElement.clientHeight;
    }
    else {
        _2f = document.body.clientHeight;
    }
    _2e.width = "100%";
    _2e.height = "400px";
    Search.search.frame.showLoading(_2c);
};

Search.search.frame.showLoading = function (_30) {
    var _31 = $id("iframe_" + _30);
    if (!_31) {
        return;
    }
    console.log(Search.user);


    var _32 = "<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">" + "<html xmlns=\"http://www.w3.org/1999/xhtml\">" + "<head>" + "<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" />" + "<title>Search Result</title>" + "<link rel=\"stylesheet\" type=\"text/css\" href=\"css/css.css\" />" + "<base target=\"_blank\" /></base>" + "</head>";
    _32 += "<body>";
    _32 += "<div class=\"loading\">" + "<img src=\"images/loading.gif\" /> " + $lang("loading").$encodeHTML() + "</div>";
    _32 += "<script src='js/jquery.js'></script<script>$(function(){$('a').attr('target','_blank');})</script>"
    _32 += "</body>" + "</html>";
    try {
        var obj = _31.contentWindow.document;
        obj.open();
        obj.write(_32);
        obj.close();
    }
    catch (e) {
    }




};

Search.search.frame.doSearch = function (_34, _35) {
    var _36 = Search.search.keyword.get();
    var cat = Search.user.currentCategory;
    if (Search.tmp.keyword[cat][_34] == _36 && !_35) {
        return;
    }
    //Search.history.save(_36);
    Search.search.frame.prepare(_34);
    var obj = $id("iframe_" + _34);
    if (!obj) {
        return;
    }



    var url = Search.list[cat].items[_34].url;

    var data = {};
    data.url = url;
    data.title = Search.list[cat].items[_34].title;
    data.keyword = _36;

    $.post('php/index.php', data, function () { })

    /*移动端搜索*/
    if ($(window).width() <= 767) {
        if ('undefined' != typeof (Search.list[cat].items[_34].wapurl) && Search.list[cat].items[_34].wapurl != Search.list[cat].items[_34].url) {
            url = Search.list[cat].items[_34].wapurl;
        }
    }


    if (url.indexOf("{keyword:raw}") > -1) {
        url = url.replace("{keyword:raw}", _36);
    }
    else {
        if (url.indexOf("{keyword:gb2312}") > -1) {
            url = url.replace("{keyword:gb2312}", $GB2312.encodeURIComponent(_36));
        }
        else {
            url = url.replace("{keyword}", encodeURIComponent(_36));
        }
    }

    //抓取搜索结果处理，新窗口打开
    if ($(window).width() <= 767) {
        if (1 == Search.list[cat].items[_34].iswapgeturl) {
            url = "get.php?s=" + $GB2312.encodeURIComponent(url);
        }
    } else {
        if (1 == Search.list[cat].items[_34].isgeturl) {
            url = "get.php?s=" + $GB2312.encodeURIComponent(url);
        }
    }

    obj.src = url;
    if ($(window).width() <= 767) {
        obj.style = "margin-top:" + Search.list[cat].items[_34].waptop + "px;";
    } else {
        obj.style = "margin-top:" + Search.list[cat].items[_34].top + "px;";
    }

    $("body").addClass('res');
    setTimeout(Search.search.frame.adjustSize, 100);
    Search.tmp.keyword[cat][_34] = _36;

    $id("search_txt_" + _34).className = "buttons-txt-searched";

};

Search.search.frame.adjustSize = function () {
    var _3a = Search.user.currentTab[Search.user.currentCategory];
    var obj = $id("iframe_" + _3a);
    if (!obj) {
        return;
    }

    var _3c;
    if (!window.opera) {
        _3c = document.documentElement.clientHeight;
    }
    else {
        _3c = document.body.clientHeight;
    }
    obj.height = _3c - obj.offsetTop;
};

Search.history = {};

Search.history.build = function () {
    var _3d = "";
    for (var i = 0; i < Search.user.history.length; i++) {
        _3d += "<a href=\"javascript:;\" onclick=\"Search.search.keyword.set(" + i + ")\">" + Search.user.history[i].$encodeHTML().$cut(50) + "</a>";
    }
    _3d += "<a href=\"javascript:;\" onclick=\"Search.history.clean();\" class=\"special\">" + $lang("clean_history") + "</a>";
    $write(_3d, "history");
    if (Search.user.saveHistory > 0) {
        $id("btn_history_wrapper").style.display = "inline";
    }
    else {
        $id("btn_history_wrapper").style.display = "none";
    }
};

Search.history.show = function (_3f) {
    var obj = _3f.srcElement ? _3f.srcElement : _3f.target;
    /*	var _41=obj.offsetLeft;
        var top=obj.offsetTop;
        var _43=obj.offsetParent;
        while(_43.tagName.toUpperCase()!="BODY"){
            _41+=_43.offsetLeft;
            top+=_43.offsetTop;
            _43=_43.offsetParent;
        }*/
    var _44 = $id("history");
    //_44.style.top=top+obj.offsetHeight+"px";
    //_44.style.left=_41+"px";
    _44.style.visibility = "visible";
    //_44.style.top=top+obj.offsetHeight+"px";
    _44.focus();
};

Search.history.hide = function () {
    $id("history").style.visibility = "hidden";
};

Search.history.save = function (_45) {
    if (Search.user.saveHistory > 0 && _45) {
        for (var i = 0; i < Search.user.history.length; i++) {
            if (Search.user.history[i] == _45) {
                Search.user.history.splice(i, 1);
                i--;
            }
        }
        if (Search.user.history.length >= Search.user.saveHistory) {
            Search.user.history.pop();
        }
        Search.user.history.unshift(_45);
    }
    else {
        Search.user.history = [];
    }
    Search.config.saveHistory();
    Search.history.build();
};

Search.history.clean = function () {
    Search.history.save();
};

Search.options = {};
Search.options.currentType = "";

Search.options.show = function (_47) {
    var _48 = $id("opt_sec_setup");
    var _49 = $id("opt_sec_list");
    _48.style.display = "none";
    _49.style.display = "none";
    switch (_47) {
        case "list":
            Search.options.list.build();
            _49.style.display = "block";
            break;
        default:
            Search.options.setup.build();
            _48.style.display = "block";
    }
    Search.options.currentType = _47;
    Search.switchMode("options");
};

Search.options.hide = function () {
    $id("options").style.display = "none";
};

Search.options.save = function () {
    switch (Search.options.currentType) {
        case "list":
            Search.options.list.save();
            break;
        default:
            Search.options.setup.save();
            break;
    }
    Search.options.currentType = "";
    Search.search.buildUI();
    Search.search.checkUpdate();
};
Search.options.setup = {};

Search.options.setup.build = function () {
    var _4a = $id("opt_lang");
    _4a.innerHTML = "";
    for (label in Search.localeLang) {
        _4a.options.add(new Option(Search.localeLang[label]._name.$encodeHTML(), label));
        if (Search.user.langCode == label) {
            _4a.selectedIndex = _4a.options.length - 1;
        }
    }

    var _5a = $id("opt_save_history");
    var _5aArray = new Array(0, 5, 10, 20);
    _5a.innerHTML = "";
    for (var i = 0; i < 4; i++) {
        _5a.options.add(new Option(_5aArray[i], _5aArray[i]));
        if (Search.user.saveHistory == _5aArray[i]) {
            _5a.selectedIndex = _5a.options.length - 1;
        }
    }

    var _6aArray = new Array(0, 1, 5, 10);
    var _6a = $id("opt_load_all");
    _6a.innerHTML = "";
    for (var i = 0; i < 4; i++) {
        _6a.options.add(new Option(_6aArray[i], _6aArray[i]));
        if (Search.user.loadAll == _6aArray[i]) {
            _6a.selectedIndex = _6a.options.length - 1;
        }
    }

    //$id("opt_save_history").checked=Search.user.saveHistory;
    //$id("opt_load_all").checked=Search.user.loadAll;
};

Search.options.setup.save = function () {
    var _4b = $id("opt_lang");
    var _4c = _4b.options[_4b.selectedIndex].value;
    if (Search.user.langCode != _4c) {
        Search.user.langCode = _4c;
        Search.updateLanguage();
        Search.config.loadPreferedList();
        Search.search.buildUI();
    }
    Search.user.langCode = _4c;

    var _5b = $id("opt_save_history");
    if (Search.user.saveHistory != _5b.options[_5b.selectedIndex].value) {
        Search.user.saveHistory = _5b.options[_5b.selectedIndex].value;
        Search.config.loadPreferedList();
        Search.search.buildUI();
    }

    var _6b = $id("opt_load_all");
    if (Search.user.loadAll != _6b.options[_6b.selectedIndex].value) {
        Search.user.loadAll = _6b.options[_6b.selectedIndex].value;
        Search.config.loadPreferedList();
        Search.search.buildUI();
    }


    Search.config.saveSettings();
};

Search.options.list = {};

Search.options.list.build = function () {
    $id("opt_edit_table").style.display = "none";
    Search.options.preferedList = $clone(Search.user.list);
    Search.options.processedList = Search.config.convertPreferedList(Search.options.preferedList);
    Search.options.list.buildPrefered();
    Search.options.list.buildAll();
};

Search.options.list.save = function () {
    Search.options.list.saveItem();
    Search.user.list = Search.options.preferedList;
    Search.list["prefered"].items = Search.options.processedList;
    Search.list["prefered"].defaultTab = null;
    Search.config.savePreferedList();
};

Search.options.list.labelToIndex = function (_4d) {
    for (var i = 0; i < Search.options.preferedList.length; i++) {
        var _4f = Search.options.preferedList[i];
        var id = _4f.c ? _4f.c + "_" + _4f.n : _4f.n;
        if (id == _4d) {
            return i;
        }
    }
    return -1;
};

Search.options.list.buildPrefered = function () {
    var _51 = "";
    for (var _52 in Search.options.processedList) {
        var _53 = Search.options.processedList[_52];
        _51 += "<div class=\"list-item-hot\" style=\"cursor:pointer;\" id=\"p_" + _52 + "\"" + " onclick=\"Search.options.list.selectItem('" + _52 + "')\"" + ">" + "<div class=\"list-control\">" + "&nbsp; <img width=\"16\" height=\"16\" src=\"images/btn_remove.png\" onclick=\"Search.options.list.removeItem('" + _52 + "')\" alt=\"" + $lang("list_remove") + "\"/>" + "</div>" + _53.title.$encodeHTML() + (_53.custom ? " <img width=\"16\" height=\"16\" src=\"images/custom.png\" id=\"img_list_custom\" alt=\"Custom\" />" : "") + "</div>";
    }
    $write(_51, "list_prefered");
    Search.options.list.selectedItem = "";
    $id("opt_edit_table").style.display = "none";
    Search.updateLanguage();
};

Search.options.list.buildAll = function () {
    var _54 = "";
    var _55 = "";
    for (var cat in Search.list) {
        if (cat == "prefered") {
            continue;
        }
        var _57 = "";
        for (var _58 in Search.list[cat].items) {
            var _59 = Search.list[cat].items[_58];
            var sid = cat + "_" + _58;
            var _5b = Search.options.processedList[sid] != undefined ? true : false;
            _57 += "<div id=\"a_" + sid + "\" class=\"list-item\" onclick=\"Search.options.list.addItem('" + cat + "','" + _58 + "')\" alt=\"" + $lang("list_add") + "\"" + (_5b ? " style=\"display:none;\"" : "") + ">" + _59.title.$encodeHTML() + (_59.subtitle ? _59.subtitle.$encodeHTML() : "") + "</div>";
        }
        _54 += "<div id=\"c_" + cat + "\" class=\"list-cat\" onclick=\"Search.options.list.toggleCategory('" + cat + "')\">" + "<code>-</code> " + Search.list[cat].title.$encodeHTML() + "</div>";
        _54 += "<div id=\"cw_" + cat + "\">" + _57 + "</div>";
    }
    $write(_54, "list_all");
};

Search.options.list.toggleCategory = function (cat) {
    var obj = $id("c_" + cat);
    var _5e = $id("cw_" + cat);
    if (_5e.style.display != "none") {
        _5e.style.display = "none";
        obj.innerHTML = "<code>+</code> " + Search.list[cat].title.$encodeHTML();
    }
    else {
        _5e.style.display = "block";
        obj.innerHTML = "<code>-</code> " + Search.list[cat].title.$encodeHTML();
    }
};

Search.options.list.selectItem = function (_5f) {
    try {
        $id("p_" + Search.options.list.selectedItem).className = "list-item-hot";
        Search.options.list.toggleControl(Search.options.list.selectedItem, false);
    }
    catch (e) {
    }
    $id("p_" + _5f).className = "list-item-selected";
    Search.options.list.toggleControl(_5f, true);
    if (Search.options.list.inEditCustom == true) {
        Search.options.list.saveItem();
    }
    Search.options.list.selectedItem = _5f;
    $id("opt_edit_table").style.display = "block";
    Search.options.list.showItemData(_5f);
};

Search.options.list.toggleControl = function (_60, _61) {
    var obj = $id("c_p_" + _60);
    if (!obj) {
        return;
    }
    if (_61) {
        obj.style.visibility = "visible";
    }
    else {
        obj.style.visibility = "hidden";
    }
};

Search.options.list.moveItem = function (_63) {
    var _64 = Search.options.list.labelToIndex(Search.options.list.selectedItem);
    if (_64 < 0) {
        return;
    }
    var _65 = Search.options.preferedList;
    var _66 = _65[_64];
    var _67 = _65[_64 + _63];
    if (_63 < 0) {
        if (_64 == 0) {
            return;
        }
        _65.splice(_64, 1);
        _65.splice(_64 + _63, 1, _66, _67);
    }
    else {
        if (_64 == (Search.options.preferedList.length - 1)) {
            return;
        }
        _65.splice(_64 + _63, 1, _67, _66);
        _65.splice(_64, 1);
    }
    var _68 = _66.c ? _66.c + "_" + _66.n : _66.n;
    var _69 = _67.c ? _67.c + "_" + _67.n : _67.n;
    var s = $id("p_" + _68);
    var t = $id("p_" + _69);
    var p = s.parentNode;
    if (_63 < 0) {
        p.insertBefore(s, t);
    }
    else {
        p.insertBefore(t, s);
    }
    Search.options.processedList = Search.config.convertPreferedList(Search.options.preferedList);
};

Search.options.list.addItem = function (cat, _6e) {
    if (Search.options.processedList[cat + "_" + _6e]) {
        alert("This search engine has already added!");
        return;
    }
    try {
        var _6f = Search.list[cat][_6e];
    }
    catch (e) {
        return;
    }
    Search.options.preferedList.push({ c: cat, n: _6e });
    $id("a_" + cat + "_" + _6e).style.display = "none";
    Search.options.processedList = Search.config.convertPreferedList(Search.options.preferedList);
    Search.options.list.buildPrefered();
};

Search.options.list.addCustomItem = function () {
    var _70 = "";
    for (var i = 0; i < 20; i++) {
        _70 = "c_" + i;
        if (Search.options.processedList[_70] == undefined) {
            break;
        }
    }
    var _72 = { n: _70, t: $lang("default_title"), u: "http://search/?q={keyword}" };
    Search.options.preferedList.push(_72);
    var _72 = { custom: true, name: _70, title: $lang("default_title"), url: "http://search/?q={keyword}" };
    Search.options.processedList[_70] = _72;
    Search.options.list.buildPrefered();
    Search.options.list.selectItem(_70);
};

Search.options.list.showItemData = function (sid) {
    var _74 = Search.options.processedList[sid];
    var _75 = $id("i_name");
    var _76 = $id("i_url");
    var _77 = $id("i_note_internal");
    var _78 = $id("i_note_edit");
    _75.value = _74.title;
    _76.value = _74.url;
    _77.style.display = "none";
    _78.style.display = "none";
    if (_74.custom) {
        Search.options.list.inEditCustom = true;
        _78.style.display = "inline";
        _75.disabled = false;
        _76.disabled = false;
    }
    else {
        Search.options.list.inEditCustom = false;
        _77.style.display = "inline";
        _75.disabled = true;
        _76.disabled = true;
    }
};

Search.options.list.saveItem = function () {
    if (!Search.options.list.inEditCustom) {
        return;
    }
    var _79 = Search.options.list.labelToIndex(Search.options.list.selectedItem);
    if (_79 < 0) {
        //alert("invalid item"+_79);
        return;
    }
    var _7a = { n: Search.options.list.selectedItem, t: $id("i_name").value.$trim(), u: $id("i_url").value.$trim() };
    if (_7a.t.length < 1 || _7a.t.length > 20) {
        alert($lang("invalid_name"));
        return;
    }
    if (_7a.u.indexOf("http") != 0) {
        alert($lang("invalid_url"));
        return;
    }
    if (_7a.u.indexOf("{keyword") < 0) {
        alert($lang("invalid_url_keyword"));
        return;
    }
    Search.options.preferedList[_79] = _7a;
    Search.options.processedList[_7a.n] = { custom: true, name: _7a.n, title: _7a.t, url: _7a.u };
    Search.options.list.buildPrefered();
};

Search.options.list.removeItem = function (_7b) {
    var _7c = Search.options.list.labelToIndex(_7b);
    var _7d = Search.options.preferedList[_7c];
    if (Search.options.preferedList.length == 1) {
        alert($lang("list_at_least_one"));
        return;
    }
    if (!_7d.c) {
        if (!confirm($lang("list_delete_confirm"))) {
            return;
        }
    }
    if (_7d.c) {
        $id("a_" + _7d.c + "_" + _7d.n).style.display = "block";
    }
    Search.options.preferedList.splice(_7c, 1);
    Search.options.processedList = Search.config.convertPreferedList(Search.options.preferedList);
    Search.options.list.buildPrefered();
};

Search.options.list.restoreDefault = function () {
    if (!confirm($lang("list_default_confirm"))) {
        return;
    }
    Search.options.preferedList = $clone(Search.defaults.preferedList[Search.user.langCode]);
    Search.options.processedList = Search.config.convertPreferedList(Search.options.preferedList);
    Search.options.list.buildPrefered();
};

