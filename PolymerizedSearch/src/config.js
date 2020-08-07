/**
 * 在下方进行自定义设置；
 * 需要注意的是，不要出现相同的链接！
 * 每个链接都应当是单独的！ 
 * links链接是直接新建空白页进行跳转；
 * tabs链接是在原页面中进行嵌入加载。
 * by: Alexander Ezharjan
 */

export const links = keyword => [
    {
        title: "Github",
        link: `https://github.com/search?q=${keyword}`
    },
    {
        title: "Stackoverflow",
        link: `https://stackoverflow.com/search?q=${keyword}`
    },
    {
        title: "Goobe",
        link: `https://goobe.io/search.aspx?k=${keyword}`
    },
    // {
    //     title: "简书",
    //     link: `https://www.jianshu.com/search?q=${keyword}`
    // },
    {
        title: "知乎",
        link: `https://www.zhihu.com/search?type=content&q=${keyword}`
    },
    {
        title: "掘金",
        link: `https://juejin.im/search?query=${keyword}&type=all`
    },
    {
        title: "严搜",
        link: `https://yandex.com/search/?text=${keyword}&lr=10590`
    },
    {
        title: "微信",
        link: `https://weixin.sogou.com/weixin?p=01030402&query=${keyword}&type=2&ie=utf8`
    },
    {
        title: "百科",
        link: `https://baike.baidu.com/item/${keyword}`
    },
    {
        title: "智库",
        link: `https://wiki.mbalib.com/wiki/Special:Search?search=${keyword}&go=%E8%BF%9B%E5%85%A5`
    },
    {
        title: "万方",
        link: `http://www.wanfangdata.com.cn/search/searchList.do?searchType=all&showType=&pageSize=&searchWord=${keyword}&isTriggerTag=`
    },
    {
        title: "夸克",
        link: `https://quark.sm.cn/s?q=${keyword}`
    },
    // {
    //     title: "Google",
    //     link: `https://www.google.com.hk/search?safe=strict&source=hp&q=${keyword}&oq=${keyword}`
    // },
    {
        title: "Magi",
        link: `https://magi.com/search?q=${keyword}`,
    },
    {
        title: "NPM",
        link: `https://www.npmjs.com/search?q=${keyword}`
    },
    {
        title: "问答",
        link: `https://www.asklib.com/s/${keyword}`
    },
    {
        title: "场库",
        link: `https://www.vmovier.com/search?kw=${keyword}`
    },
    {
        title: "短片",
        link: `https://www.nowness.cn/?modal=search&search=${keyword}`
    },
    {
        title: "图标",
        link: `https://www.iconfont.cn/search/index?q=${keyword}`
    },
    {
        title: "柯斯林",
        link: `https://www.collinsdictionary.com/dictionary/english/${keyword}`
    },
    {
        title: "SourceForge",
        link: `https://sourceforge.net/directory/os:windows/?q=${keyword}`
    }
];


export const tabs = (keyword) => [
    {
        title: "必应",
        link: `https://cn.bing.com/search?q=${keyword}`
    },
    {
        title: "百度",
        link: `https://www.baidu.com/s?wd=${keyword}`
    },
    {
        title: "搜狗",
        link: `https://www.sogou.com/web?pid=yuzi&query=${keyword}&type=2&ie=utf8`
    },
    {
        title: "360",
        link: `https://www.so.com/s?ie=utf-8&fr=so.com&src=home_so.com&nlpv=basest&q=${keyword}`
    },
    {
        title: "多吉",
        link: `https://www.dogedoge.com/results?q=${keyword}`
    },
    {
        title: "OSChina",
        link: `https://www.oschina.net/search?scope=project&q=${keyword}`
    },
    {
        title: "百度学术",
        link: `https://xueshu.baidu.com/s?wd=${keyword}`
    },
    {
        title: "知网",
        link: `https://kns.cnki.net/kns/brief/result.aspx?dbprefix=scdb&NaviCode=*&ua=1.21&isinEn=1&PageName=ASP.brief_result_aspx&DbPrefix=SCDB&DbCatalog=%E4%B8%AD%E5%9B%BD%E5%AD%A6%E6%9C%AF%E6%96%87%E7%8C%AE%E7%BD%91%E7%BB%9C%E5%87%BA%E7%89%88%E6%80%BB%E5%BA%93&ConfigFile=SCDB.xml&db_opt=CJFQ,CDFD,CMFD,CPFD,IPFD,CCND,CCJD&CKB_extension=ZYW&txt_1_sel=SU$%=|&txt_1_value1=${keyword}&txt_1_relation=#CNKI_AND&txt_1_special1=&his=0`
    },
    {
        title: "爱学术",
        link: `https://www.ixueshu.com/search/index.html?search_type=&q=${keyword}`
    },
    {
        title: "必应学术",
        link: `https://cn.bing.com/academic/search?q=${keyword}`
    },
    {
        title: "XMOL",
        link: `https://www.x-mol.com/paper/search/q?option=${keyword}`
    },
    {
        title: "BASE",
        link: `https://www.base-search.net/Search/Results?lookfor=${keyword}`
    },
    {
        title: "IEEE",
        link: `https://ieeexplore.ieee.org/search/searchresult.jsp?newsearch=true&queryText=${keyword}`
    },
    {
        title: "微软学术",
        link: `https://academic.microsoft.com/search?q=${keyword}`
    },
    {
        title: "搜狗学术",
        link: `https://scholar.sogou.com/xueshu?ie=utf-8&query=${keyword}`
    },
    {
        title: "iData",
        link: `https://search.cn-ki.net/search?keyword=${keyword}&db=CFLS`
    },
    {
        title: "语雀",
        link: `https://www.yuque.com/search?&q=${keyword}`,
    },
    {
        title: "小说",
        link: `https://www.xiashuwu.com/search.html?searchkey=${keyword}&searchtype=all`
    },
    {
        title: "搜文",
        link: `http://www.1mpi.com/search/${keyword}`
    },
    {
        title: "盘搜",
        link: `http://wjsou.com/s2/${keyword}.html`
    },
    {
        title: "搜PDF",
        link: `https://cn.bing.com/search?q=filetype:pdf ${keyword}`
    },
    // {
    //     title: "搜题",
    //     link: `http://answer.sx87.cn/?q=${keyword}`
    // },
    {
        title: "SF",
        link: `https://segmentfault.com/search?q=${keyword}`,
    },
    {
        title: "Yarn",
        link: `https://classic.yarnpkg.com/zh-Hans/packages?q=${keyword}&p=1`
    },
    {
        title: "新闻",
        link: `https://search.sina.com.cn/?q=${keyword}&range=title&c=news&sort=time`
    },
    // {
    //     title: "360资讯",
    //     link: `https://news.so.com/ns?q=${keyword}`
    // },
    {
        title: "无损音乐",
        link: `https://www.sq688.com/search.php?key=${keyword}`
    },
    {
        title: "百度文库",
        link: `https://wenku.baidu.com/search?word=${keyword}`
    },
    {
        title: "天天文库",
        link: `https://www.wenku365.com/s?keyword=${keyword}`
    },
    {
        title: "慕课",
        link: `https://www.icourse163.org/search.htm?search=${keyword}`
    },
    {
        title: "翻译",
        link: `https://cn.bing.com/dict/search?q=${keyword}`,
    },
    // {
    //     title: "微博",
    //     link: `https://s.weibo.com/weibo/${keyword}?topnav=1&wvr=6`,
    // },
    {
        title: "B站",
        link: `https://search.bilibili.com/all?keyword=${keyword}`
    },
    // {
    //     title: "鲸准",
    //     link: `https://rong.jingdata.com/landing/detail?kw=${keyword}`
    // },
    {
        title: "音乐",
        link: `http://tool.liumingye.cn/music/?page=audioPage&type=YQD&name=${keyword}`
    },
    // {
    //     title: "京东",
    //     link: `https://search.jd.com/Search?keyword=${keyword}&enc=utf-8&spm=2.1.`
    // },
    // {
    //     title: "淘宝",
    //     link: `https://s.taobao.com/search?q=${keyword}`
    // },
    {
        title: "电子书",
        link: `https://www.shiyisoushu.com/search/${keyword}`
    },
    // {
    //     title: "知微",
    //     link: `https://ef.zhiweidata.com/search/searchAll?s=${keyword}`
    // },
    {
        title: "同义词",
        link: `https://www.thesaurus.com/browse/${keyword}?s=t`
    },
    {
        title: "词典",
        link: `https://www.merriam-webster.com/dictionary/${keyword}`
    },

];






