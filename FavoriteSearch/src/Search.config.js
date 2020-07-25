//**********************************************************************
// Default Values
//**********************************************************************
Search.defaults = {};

Search.defaults.langCode = "zh-cn";
Search.defaults.category = "prefered";
Search.defaults.saveHistory = 20;
Search.defaults.loadAll = 0;

Search.defaults.preferedList = {};

Search.defaults.preferedList["en-us"] = [
	{c: "web", n: "baidu"},
	{c: "web", n: "duoji"},
	{c: "web", n: "Goobe"},
	{c: "web", n: "bing"},
	{c: "video", n: "bilibili"},
	{c: "yingshi", n: "chabeihu"},
	{c: "music", n: "mianfeimp3"},
	{c: "cili", n: "cilixin"},
	{c: "wangpan", n: "dashengpan"},
	{c: "soft", n: "xixi"}
]

Search.defaults.preferedList["zh-cn"] = [
	{c: "web", n: "baidu"},
	{c: "web", n: "duoji"},
	{c: "web", n: "Goobe"},
	{c: "web", n: "bing"},
	{c: "video", n: "bilibili"},
	{c: "yingshi", n: "chabeihu"},
	{c: "music", n: "mianfeimp3"},
	{c: "cili", n: "cilixin"},
	{c: "wangpan", n: "dashengpan"},
	{c: "soft", n: "xixi"}

	
]


//**********************************************************************
// Search Engine Lists
//**********************************************************************
Search.localeList = {};

//**********************************************************************
// English
//**********************************************************************
/*Search.localeList["en-us"] = {};



Search.localeList["en-us"]["image"] = {
	"title": "Images",

	"items": {
		"yahoo": { title: "Yahoo!", subtitle: "(网页)",top:0,waptop:0,
			url: "https://images.search.yahoo.com/search/images?p={keyword}",wapurl: "https://images.search.yahoo.com/search/images?p={keyword}" }

	}
}
*/


//**********************************************************************
// 简体中文
//**********************************************************************
Search.localeList["zh-cn"] = {};

Search.localeList["zh-cn"]["web"] = {
	"title": "网页",
	"items": {
		"bing": { title: "必应",isgeturl:0,iswapgeturl:0,top:-173,waptop:-110,                     	
		url: "https://cn.bing.com/search?q={keyword}",wapurl: "https://cn.bing.com/search?q={keyword}" },
		
		"duoji": { title: "多吉",isgeturl:0,iswapgeturl:0,top:-110,waptop:-110, 	                
		url: "https://www.dogedoge.com/results?q={keyword}",wapurl: "https://www.dogedoge.com/results?q={keyword}" },
		
		"baidu": { title: "百度",isgeturl:0,iswapgeturl:0,top:-110,waptop:-110, 	                
		url: "https://www.baidu.com/s?wd={keyword}",wapurl: "https://m.baidu.com/s?wd={keyword}" },
	
		"soso": { title: "微信",isgeturl:0,iswapgeturl:0,top:-100,waptop:-120,			            
		url: "https://weixin.sogou.com/weixin?type=2&query={keyword}",wapurl: "https://weixin.sogou.com/weixinwap?type=2&query={keyword}" },
		
				"kuake": { title: "夸克",isgeturl:0,iswapgeturl:0,top:-70,waptop:-100,			        
		url: "https://quark.sm.cn/s?q={keyword}",wapurl: "https://quark.sm.cn/s?q={keyword}" },
				
		"toutiao": { title: "头条",isgeturl:0,iswapgeturl:0,top:-100,waptop:-100,			        
		url: "https://so.toutiao.com/search?keyword={keyword}",wapurl: "https://so.toutiao.com/search?keyword={keyword}" },
		
        "Goobe": { title: "Goobe", isgeturl:0,iswapgeturl:0,top:-107,waptop:-130,                  
		url: "https://goobe.io/search.aspx?k={keyword}",wapurl: "https://goobe.io/search.aspx?k={keyword}" },
		
		"erciyuan": { title: "二次元",isgeturl:0,iswapgeturl:0,top:-65,waptop:-65,	
		url: "https://www.acgice.com/?l=web&q={keyword}",wapurl: "https://www.acgice.com/?l=web&q={keyword}" },
		
		"haosou": { title: "360",isgeturl:0,iswapgeturl:0,top:-128,waptop:-100,			        
		url: "https://www.so.com/s?q={keyword}",wapurl: "https://www.so.com/s?q={keyword}" },
		
		"sogou": { title: "搜狗",isgeturl:0,iswapgeturl:0,top:-100,waptop:-105,	
		url: "https://www.sogou.com/web?pid=yuzi&query={keyword:gb2312}",wapurl: "https://www.sogou.com/web?pid=yuzi&query={keyword:gb2312}" },
		
			"guosou": { title: "国搜",isgeturl:0,iswapgeturl:0,top:-128,waptop:-105,			        
		url: "http://www.chinaso.com/search/pagesearch.htm?q={keyword}",wapurl: "http://m.chinaso.com/page/search.htm?keys={keyword}" }

	}
}

Search.localeList["zh-cn"]["yingshi"] = {
	"title": "影视",
	"items": {
		
		"chabeihu": { title: "茶杯狐",isgeturl:0,iswapgeturl:0,	top:-70,waptop:-110,		
		url: "https://www.cupfox.com/search?key={keyword}",wapurl: "https://www.cupfox.com/search?key={keyword}" },
		
		"dianyinggou": { title: "电影狗",isgeturl:0,iswapgeturl:0,	top:-248,waptop:-242,		
		url: "http://www.dianyinggou.com/so/{keyword}",wapurl: "http://www.dianyinggou.com/so/{keyword}" },
		
				"k1080": { title: "K1080",isgeturl:0,iswapgeturl:0,top:-110,waptop:-110,		
		url: "https://www.k1080.net/vodsearch/-------------.html?wd={keyword}&submit=",wapurl: "https://www.k1080.net/vodsearch/-------------.html?wd={keyword}&submit=" },
		
			"bidi": { title: "哔嘀高清",isgeturl:0,iswapgeturl:0,top:-70,waptop:-70,	
		url: "https://bde4.com/search/{keyword}",wapurl: "https://bde4.com/search/{keyword}" },
		
	
		"xigua": { title: "西瓜",isgeturl:0,iswapgeturl:0,top:-110,waptop:-110,		
		url: "https://www.78zhuiju.com/vodsearch/-------------.html?wd={keyword}&submit=",wapurl: "https://www.78zhuiju.com/vodsearch/-------------.html?wd={keyword}&submit=" },
		
			"116kan": { title: "116解析",isgeturl:0,iswapgeturl:0,	top:-0,waptop:-0,		
		url: "https://vip.116kan.com/index.php?wd={keyword}",wapurl: "https://vip.116kan.com/index.php?wd={keyword}" },
		
		"dilili": { title: "嘀哩哩",isgeturl:0,iswapgeturl:0,top:-100,waptop:-86,		
		url: "https://www.dililitv.com/?s={keyword}",wapurl: "https://www.dililitv.com/?s={keyword}" },
		
		"dieying": { title: "碟影",isgeturl:0,iswapgeturl:0,top:-150,waptop:-130,	    
		url: "https://yingshi2345.com/search.php?searchword={keyword}",wapurl: "https://yingshi2345.com/search.php?searchword={keyword}" }
		
	  
		
		
	}
}

Search.localeList["zh-cn"]["cili"] = {
	"title": "磁力",
	"items": {	
	    		"yuhuage": { title: "雨花阁",isgeturl:0,iswapgeturl:0,top:-110,waptop:-110,			
		url: "https://www.yhg333.xyz/search/{keyword}-1.html",wapurl: "https://www.yhg333.xyz/search/{keyword}-1.html" },
		
		 "cilixin": { title: "磁力星",isgeturl:0,iswapgeturl:0,top:-70,waptop:-90,			
		url: "https://cilixing05.pw/search?q={keyword}&p=1",wapurl: "https://cilixing05.pw/search?q={keyword}&p=1" },
		
		 "ciliguo": { title: "磁力果",isgeturl:0,iswapgeturl:0,top:-74,waptop:-74,			
		url: "http://ciliguo.vip/search?word={keyword}",wapurl: "http://ciliguo.vip/search?word={keyword}" },
		
		"chaorencili": { title: "超人磁力",isgeturl:0,iswapgeturl:0,top:-70,waptop:-110,			
		url: "https://crso.club/search.html?name={keyword}",wapurl: "https://crso.club/search.html?name={keyword}" },
		
					"cilidao": { title: "磁力岛",isgeturl:0,iswapgeturl:0,top:-130,waptop:-130,			
		url: "https://btdoor.cc/query?word={keyword}",wapurl: "https://btdoor.cc/query?word={keyword}" },
	
			"zhongziba": { title: "种子吧",isgeturl:0,iswapgeturl:0,top:-100,waptop:-100,		
		url: "http://zhongziba.biz/search?wd={keyword}",wapurl: "http://zhongziba.biz/search?wd={keyword}" },
		
		"btfox": { title: "BT狐",isgeturl:0,iswapgeturl:0,top:-110,waptop:-110,			
		url: "http://btfox0.net/s?wd={keyword}",wapurl: "http://btfox0.net/s?wd={keyword}" },
		
		
			"ciligou": { title: "磁力狗",isgeturl:0,iswapgeturl:0,top:-120,waptop:-120,			
		url: "http://ciligou0.com/search?word={keyword}",wapurl: "http://ciligou0.com/search?word={keyword}" },
		
		"cilibao": { title: "磁力宝",isgeturl:0,iswapgeturl:0,top:-110,waptop:-110,			
		url: "http://cilibao.biz/s/{keyword}.html",wapurl: "http://cilibao.biz/s/{keyword}.html" }
		
		/* 有效但会弹出
		 "cilizhizhu": { title: "磁力蜘蛛",isgeturl:0,iswapgeturl:0,top:-110,waptop:-110,			
		url: "http://www.eclzz.me/s/{keyword}.html",wapurl: "http://www.eclzz.me/s/{keyword}.html" },
	    */
		/*2020-7-9失效
		"baihucili": { title: "白虎磁力",isgeturl:0,iswapgeturl:0,top:-70,waptop:-110,			
		url: "https://baihu.info/index/search.html?keyword={keyword}",wapurl: "https://baihu.info/index/search.html?keyword={keyword}" },
		*/
		/*
			"cilixingqiu": { title: "磁力星球",isgeturl:0,iswapgeturl:0,top:-245,waptop:-270,			
		url: "https://www.cilixingqiu.com/s/{keyword}",wapurl: "https://www.cilixingqiu.com/s/{keyword}" },
		*/

		/*
		"cilibashi": { title: "磁力巴士",isgeturl:0,iswapgeturl:0,top:-120,waptop:-270,			
		url: "https://www.btyb.xyz/list?ie=utf-8&key={keyword}",wapurl: "https://www.btyb.xyz/list?key={keyword}" },
		*/
		
			/*
		"cilishu": { title: "磁力鼠",isgeturl:0,iswapgeturl:0,top:-100,waptop:-135,			
		url: "http://www.cili5.xyz/cilisousuo/{keyword}.html",wapurl: "http://www.cili5.xyz/cilisousuo/{keyword}.html" },
		*/
				


		}
}


Search.localeList["zh-cn"]["music"] = {
	"title": "音乐",
	"items": {
	"tongzhong": { title: "铜钟音乐",isgeturl:0,iswapgeturl:0,top:-70,waptop:-100,			
	url: "http://tongzhong.xyz/search?keyword={keyword}",wapurl: "http://tongzhong.xyz/search?keyword={keyword}" },
	
	"mianfeimp3": { title: "免费MP3",isgeturl:0,iswapgeturl:0,top:0,waptop:0,			
	url: "http://tool.liumingye.cn/music/?page=audioPage&type=YQD&name={keyword}",wapurl: "http://tool.liumingye.cn/music/?page=audioPage&type=YQD&name={keyword}" },
	
    "wusun": { title: "无损音乐",	isgeturl:0,iswapgeturl:0,top:-138,waptop:-125,	        
	url: "https://www.sq688.com/search.php?key={keyword}",wapurl: "http://m.sq688.com/search.php?key={keyword}" },
	
	"quanwangmusic": { title: "全音乐",	isgeturl:0,iswapgeturl:0,top:-330,waptop:-380,	    
	url: "http://music.ifkdy.com/?name={keyword}&type=netease",wapurl: "http://music.ifkdy.com/?name={keyword}&type=netease" },
	
		"kuwo": { title: "酷我",	isgeturl:0,iswapgeturl:0,top:-345,waptop:-100,	    
	url: "http://www.kuwo.cn/search/list?key={keyword}",wapurl: "http://m.kuwo.cn/?key={keyword}" },
	
		"kugou": { title: "酷狗",	isgeturl:0,iswapgeturl:0,top:-330,waptop:-100,	    
	url: "https://www.kugou.com/yy/html/search.html#searchType=song&searchKeyWord={keyword}",wapurl: "https://www.kugou.com/yy/html/search.html#searchType=song&searchKeyWord={keyword}" }
	
	
	}
}


Search.localeList["zh-cn"]["soft"] = {
	"title": "软件",
	"items": {
	    	"xixi": {title: "西西软件",isgeturl:0,iswapgeturl:0,top:-175,waptop:-140,		    
		url: "https://so.cr173.com/search/d/{keyword}_all_rank.html",wapurl: "https://so.cr173.com/search/md/{keyword}_android_rank.html" },
		
	    		"zdfans": {title: "ZD423",isgeturl:0,iswapgeturl:0,top:-120,waptop:-120,		    
		url: "https://www.zdfans.com/search.asp?keyword={keyword}",wapurl: "https://m.zdfans.com/search.asp?wd={keyword}&lm=1" },
 
		/*
		"dongporuanjian": {title: "东坡软件",isgeturl:0,iswapgeturl:0,top:-166,waptop:-140,		    
		url: "http://s.uzzf.com/search/d/{keyword}_pc_hits.html",wapurl: "http://s.uzzf.com/search/md/{keyword}_android_rank.html" },
		*/
		

		"souruan": {title: "搜软安卓",isgeturl:0,iswapgeturl:0,top:-150,waptop:-210,		    
		url: "https://www.lanzou8.com/s/{keyword}",wapurl: "https://www.lanzou8.com/s/{keyword}" },
		
									
		"guoke": {title: "果核",isgeturl:0,iswapgeturl:0,top:-120,waptop:-120,		    
		url: "https://www.ghpym.com/?s={keyword}",wapurl: "https://www.ghpym.com/?s={keyword}" },
				

		"wotianna": {title: "我天哪",isgeturl:0,iswapgeturl:0,top:-130,waptop:-320,	        
		url: "https://www.wotianna.com/?s={keyword}",wapurl: "https://www.wotianna.com/?s={keyword}" },
		
		"wandoujia": {title: "豌豆荚app",isgeturl:0,iswapgeturl:0,top:-120,waptop:-120,		
		url: "https://www.wandoujia.com/search?key={keyword}",wapurl: "https://www.wandoujia.com/search?key={keyword}" },
		
			"huajun": {title: "华军",isgeturl:0,iswapgeturl:0,top:-155,waptop:-100,		    
		url: "https://www.onlinedown.net/search?searchsid=1&searchname={keyword}&button=",wapurl: "https://www.onlinedown.net/search?searchsid=1&searchname={keyword}&button=" },
		
		"tencentsoft": {title: "腾讯软件",isgeturl:0,iswapgeturl:0,top:-120,waptop:-120,		
		url: "https://pc.qq.com/search.html#!keyword={keyword}",wapurl: "https://mobile.baidu.com/search?w={keyword}" }
	}
}




Search.localeList["zh-cn"]["wangpan"] = {
	"title": "网盘",
	"items": {
		"dashengpan": { title: "大圣盘",isgeturl:0,iswapgeturl:0,top:-80,waptop:-120,		
		url: "https://dashengpan.com/search?keyword={keyword}",wapurl: "https://dashengpan.com/search?keyword={keyword}" },
		
		"weipan": { title: "微盘搜",isgeturl:0,iswapgeturl:0,top:-180,waptop:-190,			
		url: "https://www.xiaoso.net/m/search?wd={keyword}",wapurl: "https://www.xiaoso.net/m/search?wd={keyword}" },
		
		"lanzouyun": { title: "蓝奏云",isgeturl:0,iswapgeturl:0,top:-95,waptop:-160,		
		url: "https://pan.ischenxin.com/search/app/{keyword}.html",wapurl: "https://pan.ischenxin.com/search/app/{keyword}.html" },
		
		"rufengsou": { title: "如风搜",isgeturl:0,iswapgeturl:0,top:-135,waptop:-100,			
		url: "http://www.rufengso.net/s/name/{keyword}",wapurl: "http://m.rufengso.net/s/name/{keyword}" },
			
		"daihema": { title: "呆河马",isgeturl:0,iswapgeturl:0,top:-120,waptop:-100,			
		url: "http://www.daihema.com/s/comb/n-{keyword}",wapurl: "http://m.daihema.com/s/name/{keyword}" },
		
		"luomapan": { title: "罗马盘",isgeturl:0,iswapgeturl:0,top:-230,waptop:-320,			
		url: "https://www.luomapan.com/search?keyword={keyword}",wapurl: "https://www.luomapan.com/search?keyword={keyword}" },
		
		"wosouyun": { title: "我搜云",isgeturl:0,iswapgeturl:0,top:-70,waptop:-170,		
		url: "https://www.wosouyun.com/wd/{keyword}",wapurl: "https://m.wosouyun.com/wd/{keyword}" },
				
		"wenjiansou": { title: "文件搜",isgeturl:0,iswapgeturl:0,top:-60,waptop:-60,			
		url: "http://wjsou.com/s2/{keyword}.html",wapurl: "http://wjsou.com/s2/{keyword}.html" }

		}
}


Search.localeList["zh-cn"]["souti"] = {
	"title": "搜题",
	"items": {
						"baidutiku": { title: "百度题库",	isgeturl:0,iswapgeturl:0,top:-110,waptop:-154,		                
		url: "https://www.baidu.com/s?wd={keyword}+site:tiku.baidu.com",wapurl: "https://www.baidu.com/s?wd={keyword}+site:tiku.baidu.com" },
		
		/*
		"wangke": { title: "网课",isgeturl:0,iswapgeturl:0,top:0,waptop:0,			        
		url: "http://tk.qqzo.cn/api3.php?question={keyword}",wapurl: "http://tk.qqzo.cn/api3.php?question={keyword}" },
		*/
		
		"chatibazonghe": { title: "综合", isgeturl:0,iswapgeturl:0,top:-153,waptop:-153,	
		url: "http://question.fm210.cn/index/search?key={keyword}",wapurl: "http://question.fm210.cn/index/search?key={keyword}" },
	
		"wendaku": { title: "问答库",isgeturl:0,iswapgeturl:0,	top:-185,waptop:-120,	            
		url: "https://www.asklib.com/s/{keyword}",wapurl: "https://m.asklib.com/s/{keyword}" },
				
		"soutiwang": { title: "搜题网",isgeturl:0,iswapgeturl:0,	top:-150,waptop:-78,	            
		url: "http://answer.sx87.cn/?q={keyword}",wapurl: "http://answer.sx87.cn/?q={keyword}" },
				
		"89wendaku": { title: "89问答库",isgeturl:0,iswapgeturl:0,	top:-350,waptop:-100,	            
		url: "https://en89.com/search?keyword={keyword}",wapurl: "https://en89.com/search?keyword={keyword}" },
		
		"tiandi": { title: "天帝",isgeturl:0,iswapgeturl:0,	top:-290,waptop:-290,	            
		url: "http://www.mt3e.cn/?q={keyword}",wapurl: "http://www.mt3e.cn/?q={keyword}" },
		
		"soutiba": { title: "搜题吧",isgeturl:0,iswapgeturl:0,	top:-0,waptop:-0,	            
		url: "https://www.soutiba.cn/?q={keyword}",wapurl: "https://www.soutiba.cn/?q={keyword}" },
		
		"wangkezaixian": { title: "网课在线",isgeturl:0,iswapgeturl:0,	top:-230,waptop:-265,	            
		url: "https://wangke.vvhan.com/?q={keyword}",wapurl: "https://wangke.vvhan.com/?q={keyword}" }
	}
}

Search.localeList["zh-cn"]["dianzishu"] = {
	"title": "电子书",
	"items": {
				"shiyisoushu": { title: "时宜",isgeturl:0,iswapgeturl:0,top:-130,waptop:-120,			        
		url: "https://www.shiyisoushu.com/search/{keyword}",wapurl: "https://www.shiyisoushu.com/search/{keyword}" },
		
		"ePUBee": { title: "ePUBee", isgeturl:0,iswapgeturl:0,top:-120,waptop:-60,	
		url: "http://cn.epubee.com/books/?s={keyword}",wapurl: "http://cn.epubee.com/books/?s={keyword}" },
			
		"yuedulian": { title: "阅读链",isgeturl:0,iswapgeturl:0,	top:-105,waptop:-100,	            
		url: "https://cloud.yuedu.pro/?search_text={keyword}&submit=#/searchResult",wapurl: "https://cloud.yuedu.pro/?search_text={keyword}&submit=#/searchResult" },
		
		"xiaoshuo": { title: "小说",	isgeturl:0,iswapgeturl:0,top:-245,waptop:-140,		                
		url: "https://www.xiashuwu.com/search.html?searchkey={keyword}&searchtype=all",wapurl: "https://m.xiashuwu.com/search.html?searchkey={keyword}&searchtype=all" },
		
		"manhua": { title: "漫画",	isgeturl:0,iswapgeturl:0,top:-65,waptop:-50,		                
		url: "https://volmoe.com/list.php?s={keyword}",wapurl: "https://m.volmoe.com/list.php?s={keyword}" },
		
			"shudan": { title: "书单",	isgeturl:0,iswapgeturl:0,top:-130,waptop:-330,		                
		url: "https://www.shudan.vip/?s={keyword}",wapurl: "https://www.shudan.vip/?s={keyword}" },
		
			"bandu": { title: "伴读",	isgeturl:0,iswapgeturl:0,top:-100,waptop:-130,		                
		url: "https://www.bandubook.com/search/?q={keyword}",wapurl: "https://www.bandubook.com/search/?q={keyword}" },
		
				"taolianke": { title: "淘链客",	isgeturl:0,iswapgeturl:0,top:-140,waptop:-150,		                
		url: "http://www.toplinks.cc/s/?keyword={keyword}",wapurl: "http://www.toplinks.cc/s/?keyword={keyword}" },
		
		
			"xiongmaoshu": { title: "熊猫",	isgeturl:0,iswapgeturl:0,top:-120,waptop:-100,		                
		url: "https://ebook.huzerui.com/#/result?keyword={keyword}",wapurl: "https://ebook.huzerui.com/#/result?keyword={keyword}" }

	}
}


Search.localeList["zh-cn"]["youxi"] = {
	"title": "游戏",
	"items": {
				"kaixindianwan": { title: "开心电玩",isgeturl:0,iswapgeturl:0,top:-226,waptop:-120,			        
		url: "http://www.kxdw.com/index.php?m=content&c=my_search&a=init&modelid=12&q={keyword}",wapurl: "http://m.kxdw.com/index.php?m=content&c=my_search&a=index&modelid=0&q={keyword}&typeid=2" },
		
		"shoujiyouxi": { title: "手机游戏", isgeturl:0,iswapgeturl:0,top:-240,waptop:-240,	
		url: "http://search.97973.com/?key={keyword}",wapurl: "http://search.97973.com/?key={keyword}" },
			
		"duoduo": { title: "多多",isgeturl:0,iswapgeturl:0,	top:-200,waptop:-100,	            
		url: "http://search.ddooo.com/pc/{keyword}_1_1_1.html",wapurl: "http://search.ddooo.com/mm/{keyword}_1.html" },
		
		"Fyouxi": { title: "F游戏",	isgeturl:0,iswapgeturl:0,top:-120,waptop:-100,		                
		url: "https://www.fgame.top/?s={keyword}",wapurl: "https://www.fgame.top/?s={keyword}" },
		
			"shudan": { title: "网页游戏",	isgeturl:0,iswapgeturl:0,top:-210,waptop:-150,		                
		url: "http://so2.4399.com/search/search.php?k={keyword}",wapurl: "http://www.4399.cn/search.html?type=game&w={keyword}" },
		
			"youxun": { title: "游迅",	isgeturl:0,iswapgeturl:0,top:-175,waptop:-67,		                
		url: "http://www.yxdown.com/search?sort=size&wd={keyword}",wapurl: "http://m.yxdown.com/search?wd={keyword}" },
		
			"youxizixun": { title: "游戏资讯",	isgeturl:0,iswapgeturl:0,top:-170,waptop:-100,		                
		url: "http://search.games.sina.com.cn/search/index/{keyword}",wapurl: "http://search.games.sina.com.cn/search/index/{keyword}" }
		

	}
}

Search.localeList["zh-cn"]["zhishi"] = {
	"title": "知识",
	"items": {
		"zhihu": { title: "知乎",isgeturl:0,iswapgeturl:0,top:-125,waptop:-148,			        
		url: "https://www.baidu.com/s?wd=site:(zhihu.com){keyword}",wapurl: "https://www.baidu.com/s?wd=site:(zhihu.com){keyword}" },
		
		"magi": { title: "Magi",isgeturl:0,iswapgeturl:0,top:-70,waptop:-70,			        
		url: "https://magi.com/search?q={keyword}",wapurl: "https://magi.com/search?q={keyword}" },
		
		"baidubaike": { title: "百度百科", isgeturl:0,iswapgeturl:0,top:-220,waptop:-110,	
		url: "https://baike.baidu.com/item/{keyword}",wapurl: "https://baike.baidu.com/item/{keyword}" },
			
		"toutiaobaike": { title: "头条百科",isgeturl:0,iswapgeturl:0,	top:-65,waptop:-45,	            
		url: "https://www.baike.com/wiki/{keyword}",wapurl: "https://m.baike.com/wiki/{keyword}" },
		
		"sougoubaike": { title: "搜狗百科",isgeturl:0,iswapgeturl:0,	top:-100,waptop:-45,	            
		url: "https://www.sogou.com/sogou?query={keyword}&ie=utf8&insite=baike.sogou.com",wapurl: "https://baike.sogou.com/m/fullLemma?key={keyword}&sid=&size=10&g_ut=3" },	
		
		"baiduzhidao": { title: "百度知道",	isgeturl:0,iswapgeturl:0,top:-110,waptop:-45,		                
		url: "https://zhidao.baidu.com/search?lm=0&rn=10&pn=0&fr=search&ie=utf-8&word={keyword}",wapurl: "https://zhidao.baidu.com/search?lm=0&rn=10&pn=0&fr=search&ie=utf-8&word={keyword}" },
		
			"xiaojicidian": { title: "小鸡词典",	isgeturl:0,iswapgeturl:0,top:-74,waptop:-75,		                
		url: "https://jikipedia.com/search?phrase={keyword}",wapurl: "https://jikipedia.com/search?phrase={keyword}" },
		
		"mbazhiku": { title: "MBA智库",	isgeturl:0,iswapgeturl:0,top:-144,waptop:-110,		                
		url: "https://wiki.mbalib.com/wiki/{keyword}",wapurl: "https://wiki.mbalib.com/wiki/{keyword}" },
			
			"shangpingbaike": { title: "商品百科",	isgeturl:0,iswapgeturl:0,top:-135,waptop:-40,		                
		url: "https://wiki.smzdm.com/youxuan/?s={keyword}&c=baike",wapurl: "https://search.m.smzdm.com/?s={keyword}&v=b" }
		

	}
}

Search.localeList["zh-cn"]["xueshu"] = {
	"title": "学术",
	"items": {
		"baiduxueshu": { title: "百度学术",	isgeturl:0,iswapgeturl:0,top:-70,waptop:-50,		                
		url: "https://xueshu.baidu.com/s?wd={keyword}",wapurl: "https://xueshu.baidu.com/s?wd={keyword}" },
		
		"aixueshu": { title: "爱学术",isgeturl:0,iswapgeturl:0,	top:-110,waptop:-130,	            
		url: "https://www.ixueshu.com/search/index.html?search_type=&q={keyword}",wapurl: "https://www.ixueshu.com/h5/search.html?q={keyword}" },
		
		"bingxueshu": { title: "必应学术",isgeturl:0,iswapgeturl:0,top:-150,waptop:-100,			        
		url: "https://cn.bing.com/academic/search?q={keyword}",wapurl: "https://cn.bing.com/academic/search?q={keyword}" },
						
		"xmol": { title: "X-MOL",isgeturl:0,iswapgeturl:0,	top:-190,waptop:-120,	            
		url: "https://www.x-mol.com/paper/search/q?option={keyword}",wapurl: "https://m.x-mol.com/search/paper/{keyword}" },
	
		"wendaku": { title: "BASE",isgeturl:0,iswapgeturl:0,	top:-215,waptop:-250,	            
		url: "https://www.base-search.net/Search/Results?lookfor={keyword}",wapurl: "https://www.base-search.net/Search/Results?lookfor={keyword}" },
		
			"wanfangshuju": { title: "万方数据",isgeturl:0,iswapgeturl:0,	top:-140,waptop:-265,	            
		url: "http://s.g.wanfangdata.com.cn/Paper.aspx?q={keyword}",wapurl: "http://s.g.wanfangdata.com.cn/Paper.aspx?q={keyword}" },
					
		"shuyusousuo": { title: "术语搜索",isgeturl:0,iswapgeturl:0,	top:-115,waptop:-115,	            
		url: "https://www.termonline.cn/list.htm?k={keyword}",wapurl: "https://www.termonline.cn/list.htm?k={keyword}" },
		
				"zhiwang": { title: "中国知网",isgeturl:0,iswapgeturl:0,	top:-164,waptop:-164,	            
		url: "https://kns.cnki.net/kns/brief/result.aspx?dbprefix=scdb&NaviCode=*&ua=1.21&isinEn=1&PageName=ASP.brief_result_aspx&DbPrefix=SCDB&DbCatalog=%E4%B8%AD%E5%9B%BD%E5%AD%A6%E6%9C%AF%E6%96%87%E7%8C%AE%E7%BD%91%E7%BB%9C%E5%87%BA%E7%89%88%E6%80%BB%E5%BA%93&ConfigFile=SCDB.xml&db_opt=CJFQ,CDFD,CMFD,CPFD,IPFD,CCND,CCJD&CKB_extension=ZYW&txt_1_sel=SU$%=|&txt_1_value1={keyword}&txt_1_relation=#CNKI_AND&txt_1_special1=&his=0",wapurl: "https://kns.cnki.net/kns/brief/result.aspx?dbprefix=scdb&NaviCode=*&ua=1.21&isinEn=1&PageName=ASP.brief_result_aspx&DbPrefix=SCDB&DbCatalog=%E4%B8%AD%E5%9B%BD%E5%AD%A6%E6%9C%AF%E6%96%87%E7%8C%AE%E7%BD%91%E7%BB%9C%E5%87%BA%E7%89%88%E6%80%BB%E5%BA%93&ConfigFile=SCDB.xml&db_opt=CJFQ,CDFD,CMFD,CPFD,IPFD,CCND,CCJD&CKB_extension=ZYW&txt_1_sel=SU$%=|&txt_1_value1={keyword}&txt_1_relation=#CNKI_AND&txt_1_special1=&his=0" },
		
		"weiruanxueshu": { title: "微软学术", isgeturl:0,iswapgeturl:0,top:-100,waptop:-130,	
		url: "https://academic.microsoft.com/search?q={keyword}",wapurl: "https://academic.microsoft.com/search?q={keyword}" },
				
				"sougouxueshu": { title: "搜狗学术",isgeturl:0,iswapgeturl:0,	top:-110,waptop:-130,	            
		url: "https://scholar.sogou.com/xueshu?ie=utf-8&query={keyword}",wapurl: "https://scholar.sogou.com/xueshu?ie=utf-8&query={keyword}" }
		
	}
}




Search.localeList["zh-cn"]["wenku"] = {
	"title": "文库",
	"items": {
		"baiduwenku": { title: "百度文库",isgeturl:0,iswapgeturl:0,top:-220,waptop:-85,			
		url: "https://wenku.baidu.com/search?word={keyword}",wapurl: "https://wk.baidu.com/search?fr=searchpage&word={keyword}" },
		
		"tiantianwenku": { title: "天天文库",isgeturl:0,iswapgeturl:0,top:-200,waptop:0,		
		url: "https://www.wenku365.com/s?keyword={keyword}",wapurl: "https://m.wenku365.com/?{keyword}" },
		
		"daokebaba": { title: "道客巴巴",isgeturl:0,iswapgeturl:0,top:-66,waptop:-70,			
		url: "https://www.doc88.com/tag/{keyword}",wapurl: "https://www.doc88.com/tag/{keyword}" },
		
		"mianfeiwendang": { title: "文档大全",isgeturl:0,iswapgeturl:0,top:-148,waptop:-50,			
		url: "http://www.1mpi.com/search/{keyword}",wapurl: "http://m.1mpi.com/search/{keyword}" },
		
		"doudingwenku": { title: "豆丁文库",isgeturl:0,iswapgeturl:0,top:-110,waptop:-60,		
		url: "https://www.docin.com/search.do?nkey={keyword}",wapurl: "https://www.docin.com/touch_new/search.do?rkey={keyword}" },
			
		"renrenwenku": { title: "人人文库",isgeturl:0,iswapgeturl:0,top:-200,waptop:-90,		
		url: "https://www.renrendoc.com/search.html?q={keyword}",wapurl: "https://m.renrendoc.com/search.html?q={keyword}" },
				
		"PPT": { title: "PPT",isgeturl:0,iswapgeturl:0,top:-173,waptop:-100,			
		url: "https://cn.bing.com/search?q=filetype:ppt {keyword}",wapurl: "https://cn.bing.com/search?q=filetype:ppt {keyword}" },
		
		"doc": { title: "word",isgeturl:0,iswapgeturl:0,top:-173,waptop:-100,			
		url: "https://cn.bing.com/search?q=filetype:doc {keyword}",wapurl: "https://cn.bing.com/search?q=filetype:doc {keyword}" },

		"pdf": { title: "pdf",isgeturl:0,iswapgeturl:0,top:-173,waptop:-100,			
		url: "https://cn.bing.com/search?q=filetype:pdf {keyword}",wapurl: "https://cn.bing.com/search?q=filetype:pdf {keyword}" },
			
		"excel": { title: "excel",isgeturl:0,iswapgeturl:0,top:-173,waptop:-100,			
		url: "https://cn.bing.com/search?q=filetype:xls {keyword}",wapurl: "https://cn.bing.com/search?q=filetype:xls {keyword}" },
		
		"txt": { title: "txt",isgeturl:0,iswapgeturl:0,top:-173,waptop:-100,			
		url: "https://cn.bing.com/search?q=filetype:txt {keyword}",wapurl: "https://cn.bing.com/search?q=filetype:txt {keyword}" }
		

		}
}


Search.localeList["zh-cn"]["video"] = {
	"title": "视频",
	"items": {
				"aiqiyi": { title: "爱奇艺",isgeturl:0,iswapgeturl:0,top:-148,waptop:-90,		
		url: "https://so.iqiyi.com/so/q_{keyword}",wapurl: "https://so.iqiyi.com/so/q_{keyword}" },
		
				"bilibili": { title: "B站",isgeturl:0,iswapgeturl:0,top:-140,waptop:-130,		
		url: "https://search.bilibili.com/all?keyword={keyword}",wapurl: "https://m.bilibili.com/search?keyword={keyword}" },
		
		"sougouvideo": { title: "搜狗视频",isgeturl:0,iswapgeturl:0,top:-148,waptop:-120,		
		url: "https://v.sogou.com/v?query={keyword}",wapurl: "https://wapv.sogou.com/v?rcer=E4yQKsCg&ie=utf8&query={keyword}" },
		
		
			"baiduvideo": { title: "百度视频",isgeturl:0,iswapgeturl:0,top:-100,waptop:-140,			
		url: "https://www.baidu.com/sf/vsearch?pd=video&wd={keyword}",wapurl: "https://www.baidu.com/sf/vsearch?pd=video&word={keyword}&atn=index" },
		
		"bingvideo": { title: "必应视频",isgeturl:0,iswapgeturl:0,top:-110,waptop:-140,			
		url: "https://cn.bing.com/video/results.aspx?q={keyword}",wapurl: "https://cn.bing.com/video/results.aspx?q={keyword}" },
		
		"toutiaovideo": { title: "头条视频",isgeturl:0,iswapgeturl:0,top:-114,waptop:-110,			
		url: "https://www.toutiao.com/search/?keyword={keyword}",wapurl: "https://so.toutiao.com/search?keyword={keyword}&pd=video " },
		
		"tengxunshiping": { title: "腾讯视频",isgeturl:0,iswapgeturl:0,top:-110,waptop:-110,			
		url: "https://v.qq.com/x/search/?q={keyword}",wapurl: "https://v.qq.com/x/search/?q={keyword}"},
			
		"360video": { title: "360视频",isgeturl:0,iswapgeturl:0,top:-110,waptop:-110,			
		url: "https://video.360kan.com/v?q={keyword}",wapurl: "https://m.video.360kan.com/s?src=m_www&q={keyword}" },
		
		"guosoushiping": { title: "国搜视频",isgeturl:0,iswapgeturl:0,top:-110,waptop:-90,			
		url: "http://v.chinaso.com/search/so?q={keyword}",wapurl: "http://m.chinaso.com/video/search.html?keys={keyword}"}
		
	}
}


Search.localeList["zh-cn"]["images"] = {
	"title": "图片",
	"items": {
		"bing": { title: "必应图片", isgeturl:0,iswapgeturl:0,top:-110,waptop:-100,	
		url: "https://cn.bing.com/images/results.aspx?q={keyword}",wapurl: "https://cn.bing.com/images/results.aspx?q={keyword}" },
		
		"baidutu": { title: "百度图片",isgeturl:0,iswapgeturl:0,top:-100,waptop:-155,			        
		url: "https://image.baidu.com/search/index?tn=baiduimage&fm=result&ie=utf-8&word={keyword}",wapurl: "https://image.baidu.com/search/index?tn=baiduimage&fm=result&ie=utf-8&word={keyword}" },
		
		"sougoutu": { title: "搜狗图片",isgeturl:0,iswapgeturl:0,	top:-100,waptop:-100,	            
		url: "https://pic.sogou.com/pics?query={keyword:gb2312}",wapurl: "https://pic.sogou.com/pics?query={keyword:gb2312}" },
		
		"360tu": { title: "360图片",	isgeturl:0,iswapgeturl:0,top:-100,waptop:-100,		                
		url: "https://image.so.com/i?q={keyword}",wapurl: "https://image.so.com/i?q={keyword}" }
	}
}






Search.localeList["zh-cn"]["fanyi"] = {
	"title": "翻译",
	"items": {
						"sougoufanyi": { title: "搜狗翻译",isgeturl:0,iswapgeturl:0,top:-110,waptop:-100,			
		url: "https://fanyi.sogou.com/?fr=websearch_submit&pid=&keyword={keyword}",wapurl: "https://fanyi.sogou.com/?fr=websearch_submit&pid=&keyword={keyword}" },
		
				"youdaofanyi": { title: "有道翻译",isgeturl:0,iswapgeturl:0,top:-180,waptop:-100,			
		url: "https://www.youdao.com/w/eng/{keyword}/#keyfrom=dict2.index",wapurl: "https://m.youdao.com/dict?le=eng&q={keyword}" },
		
				"360fanyi": { title: "360翻译",isgeturl:0,iswapgeturl:0,top:-110,waptop:-50,			
		url: "https://fanyi.so.com/?src=tab_www#{keyword}",wapurl: "https://fanyi.so.com/?src=tab_www#{keyword}" },
		
				"baidufanyi": { title: "百度翻译",isgeturl:0,iswapgeturl:0,top:-90,waptop:-90,		
		url: "https://fanyi.baidu.com/?#auto/zh/{keyword}",wapurl: "https://fanyi.baidu.com/?#auto/zh/{keyword}" },
			
					"weiruanfanyi": { title: "微软翻译",isgeturl:0,iswapgeturl:0,top:-120,waptop:-100,			
		url: "https://cn.bing.com/translator?ref=TThis&&text={keyword}&from=en&to=zh-Hans",wapurl: "https://cn.bing.com/translator?ref=TThis&&text={keyword}&from=en&to=zh-Hans" }
				
	/*
	"zhiwangfanyi": { title: "知网翻译",isgeturl:0,iswapgeturl:0,top:-110,waptop:-140,			
		url: "https://dict.cnki.net/dict_result.aspx?searchword={keyword}",wapurl: "https://dict.cnki.net/dict_result.aspx?searchword={keyword}" }
		*/

		}
}



Search.localeList["zh-cn"]["yiliao"] = {
	"title": "医疗",
	"items": {
			"muzhiyisheng": { title: "拇指医生",isgeturl:0,iswapgeturl:0,top:-110,waptop:-150,		
		url: "https://www.baidu.com/s?ie=utf-8&si=muzhi.baidu.com&ct=2097152&wd={keyword}",wapurl: "https://www.baidu.com/s?ie=utf-8&si=muzhi.baidu.com&ct=2097152&wd={keyword}" },
		
		"xunyiwenyao": { title: "寻医问药",isgeturl:0,iswapgeturl:0,top:-110,waptop:-120,		
		url: "http://so.xywy.com/comse.php?keyword={keyword}",wapurl: "http://m.so.xywy.com/comse.php?keyword={keyword}" },
		
		"39jibing": { title: "39疾病",isgeturl:0,iswapgeturl:0,top:-150,waptop:-150,			
		url: "http://jbk.39.net/bw/key={keyword}",wapurl: "http://wapjbk.39.net/bw/key={keyword}" },
		
		"sougoumingyi": { title: "搜狗明医",isgeturl:0,iswapgeturl:0,top:-100,waptop:-100,			
		url: "https://www.sogou.com/web?query={keyword}&ie=utf8&from=mingyi_index&m2web=mingyi.sogou.com",wapurl: "https://www.sogou.com/web?query={keyword}&ie=utf8&from=mingyi_index&m2web=mingyi.sogou.com" },
		
		"youwenbida": { title: "有问必答",isgeturl:0,iswapgeturl:0,top:-140,waptop:-70,			
		url: "http://so.120ask.com/?kw={keyword}",wapurl: "http://m.120ask.com/indexg/search?keyword={keyword}" },
			
		"360liangyi": { title: "360良医",isgeturl:0,iswapgeturl:0,top:-110,waptop:-100,			
		url: "https://ly.so.com/s?q={keyword}",wapurl: "https://ly.so.com/s?q={keyword}" },
				
		"haodaifu": { title: "好大夫",isgeturl:0,iswapgeturl:0,top:-100,waptop:-100,			
		url: "https://so.haodf.com/index/search?type=&kw={keyword}",wapurl: "https://so.haodf.com/index/search?type=&kw={keyword}" },
		
		"chunyuyisheng": { title: "春雨医生",isgeturl:0,iswapgeturl:0,top:-185,waptop:-100,			
		url: "https://www.chunyuyisheng.com/pc/search/?query={keyword}",wapurl: "https://m.chunyuyisheng.com/m/search/?query={keyword}" },
		
		"yisousuo": { title: "医搜索",isgeturl:0,iswapgeturl:0,top:-132,waptop:-140,			
		url: "http://so.medlive.cn/result?type=all&keyword={keyword}",wapurl: "http://so.medlive.cn/result?type=all&keyword={keyword}" }

		}
}

Search.localeList["zh-cn"]["shangye"] = {
	"title": "商业",
	"items": {
		"tianyancha": { title: "天眼查",isgeturl:0,iswapgeturl:0,top:-100,waptop:-130,		
		url: "https://www.tianyancha.com/search?key={keyword}",wapurl: "https://www.tianyancha.com/search?key={keyword}" },
		
		"qichacha": { title: "企查查",isgeturl:0,iswapgeturl:0,top:-110,waptop:-100,		
		url: "https://www.qcc.com/search?key={keyword}",wapurl: "https://www.qcc.com/search?key={keyword}" },
		
		"sougoumingyi": { title: "百度企业",isgeturl:0,iswapgeturl:0,top:-100,waptop:-120,			
		url: "https://xin.baidu.com/s?q={keyword}",wapurl: "https://xin.baidu.com/s?q={keyword}" }
		

		}
}


Search.localeList["zh-cn"]["news"] = {
	"title": "热点",
	"items": {
		"sina": { title: "新浪新闻",isgeturl:0,iswapgeturl:0,	top:-100,waptop:-100,		url: "https://search.sina.com.cn/?q={keyword}&range=title&c=news&sort=time",wapurl: "https://search.sina.com.cn/?q={keyword}&range=title&c=news&sort=time" },
		"baiduxinwen": { title: "百度新闻",isgeturl:0,iswapgeturl:0,top:-100,waptop:-100,	url: "https://www.baidu.com/s?rtt=1&bsst=1&cl=2&tn=news&rsv_dl=ns_pc&word={keyword}",wapurl: "https://www.baidu.com/s?rtt=1&bsst=1&cl=2&tn=news&rsv_dl=ns_pc&word={keyword}" },
		"zhongshou": { title: "搜狗新闻",isgeturl:0,iswapgeturl:0,top:-100,waptop:-100,	    url: "https://news.sogou.com/news?query={keyword}",wapurl: "https://news.sogou.com/news?query={keyword}" },
		"360news": { title: "360资讯",isgeturl:0,iswapgeturl:0,top:-100,waptop:-100,		url: "https://news.so.com/ns?q={keyword:gb2312}",wapurl: "https://news.so.com/ns?q={keyword:gb2312}" }
	}
}










