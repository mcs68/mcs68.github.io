var _gaq=_gaq||[];!function(){function a(a,b,c,d,e){switch(_gaq.push(["._setAccount",globalSiteSpecificVars.googleAnalyticsIdsArray[a]]),_gaq.push(["._setDomainName","ucl.ac.uk"]),b){case"pageView":_gaq.push(["_setSiteSpeedSampleRate",100]),_gaq.push(["._trackPageview"]);break;case"cta":_gaq.push(["_trackEvent","cta","Click",c+" "+document.URL]);break;case"donate":_gaq.push(["_trackEvent","donate","Click",c+" "+document.URL]);break;case"give":_gaq.push(["_trackEvent","give","Click",c+" "+document.URL]);break;case"externalLink":_gaq.push(["_trackEvent","External","Click",c]);break;case"email":_gaq.push(["_trackEvent","Email","Click",c]);break;case"file":_gaq.push(["_trackEvent","Download","Click-"+d,e+" "+document.URL])}}function b(b){c(document).ready(function(){c("a").each(function(e){var f=c(this).attr("href"),g=c(this).attr("class");void 0!==g&&g.indexOf("cta")>-1?c(this).click(function(){a(b,"cta",c(this).html()+" "+f)}):void 0!==g&&g.indexOf("donate")>-1?c(this).click(function(){a(b,"donate",c(this).html()+" "+f)}):void 0!==g&&g.indexOf("give-link")>-1?c(this).click(function(){a(b,"give",c(this).html()+" "+f)}):f&&f.match(/^https?\:/i)&&!f.match(document.domain)?c(this).click(function(d){var e=f.replace(/^https?\:\/\//i,"");if(a(b,"externalLink",e),void 0!=c(this).attr("target")&&"_blank"!=c(this).attr("target").toLowerCase())return setTimeout(function(){location.href=f},200),!1}):f&&f.match(/^mailto\:/i)?c(this).click(function(){var c=f.replace(/^mailto\:/i,"");a(b,"email",c)}):f&&f.match(d)&&c(this).click(function(){var d=/[.]/.exec(f)?/[^.]+$/.exec(f):void 0;if(a(b,"file","",d,f),void 0!=c(this).attr("target")&&"_blank"!=c(this).attr("target").toLowerCase())return setTimeout(function(){location.href=f},200),!1})})})}var c=jQuery,d=/\.(zip|exe|pdf|doc*|xls*|ppt*|mp3|xlsx)$/i,e=0;void 0!=c("base").attr("href")&&c("base").attr("href"),globalSiteSpecificVars.googleAnalyticsIdsArray instanceof Array&&function(){globalSiteSpecificVars.googleAnalyticsIdsArray.push("UA-943297-1");for(e in globalSiteSpecificVars.googleAnalyticsIdsArray)a(e,"pageView"),b(e);var c=document.createElement("script");c.type="text/javascript",c.async=!0,c.src=("https:"==document.location.protocol?"https://ssl":"http://www")+".google-analytics.com/ga.js";var d=document.getElementsByTagName("script")[0];d.parentNode.insertBefore(c,d)}()}(),gs={init:function(){window.location.href.match("gridset=show")&&gs.show(),gs.bind(document,"keydown",function(a){if(!a)var a=window.event;if(a.metaKey||a.ctrlKey)switch(a.which||a.keyCode){case 71:0==document.querySelectorAll(".gridsetoverlaywrap, #gridsetoverlaystyles, #gridscreenwidthwrap").length?window.location.href=window.location.href+"?gridset=show":window.location.href=window.location.href.replace("?gridset=show",""),gs.prevent(a)}})},width:function(){var a=document.getElementById("gridscreenwidthval");a&&(a.innerHTML=window.innerWidth+"px")},show:function(){var a=document.getElementsByTagName("body")[0],b=document.querySelectorAll("[class*=-showgrid]"),c=b.length,d=(document.querySelectorAll(".wrapper"),document.createElement("style")),e=document.createElement("div"),f=document.getElementsByTagName("head"),g=document.createElement("link"),h=document.createElement("link");d.id="gridsetoverlaystyles",d.innerHTML=".gridsetoverlaywrap{padding:0 !important;display:block;position:absolute;top:0;left:0;width:100%;height:100%;z-index:10000;pointer-events:none;}.gridsetnoareas .gridsetoverlaywrap{position:fixed;}.gridwrap{padding:0 !important;display:block;position:absolute;top:0;left:0;width:100%;height:100%;font-family:Helvetica, Arial, sans-serif !important;}.gridoverlay{padding:0 !important;position:relative;height:100%;overflow:hidden !important;background:none !important;}.gridoverlay .gridset{padding:0 !important;position:absolute;width:100%;height:100%;top:0;left:0;opacity:0.8; display:block;}.gridoverlay .gridset div{padding:0;text-align:left;font-size:10px !important;border:1px solid #FFD800 !important;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box;height:100%;}.gridoverlay .gridset > div{border:none !important;height:100%;position:absolute;top:0;left:0;width:100%;}.gridoverlay div small{width:100%;display:block;text-align:center;font-weight:400 !important;letter-spacing: 1px !important;padding-top:0 !important;text-transform:none !important;height:22px !important;line-height:22px !important;text-style:normal !important;border-bottom:1px solid #FFD800 !important;color:#333 !important;background-color:#FFF79F !important;}.gridoverlay .gridset > div:nth-child(2){padding-top:23px !important;}.gridoverlay .gridset > div:nth-child(2) small{border-bottom:1px dashed #FFD800 !important;}.gridoverlay .gridset > div:nth-child(2) > div{border:1px dashed #FFD800 !important;}.gridoverlay .gridset > div:nth-child(3){padding-top:45px !important;}.gridoverlay .gridset > div:nth-child(3) small{border-bottom:1px dotted #FFD800 !important;}.gridoverlay .gridset > div:nth-child(3) > div{border:1px dotted #FFD800 !important;}.gridoverlay .gridset > div:nth-child(4){padding-top:67px !important;}.gridoverlay .gridset > div:nth-child(4) small{border-bottom:1px double #FFD800 !important;}.gridoverlay .gridset > div:nth-child(4) > div{border:1px double #FFD800 !important;}.gridsetoverlaywrap .noshow{display:none;}#gridscreenwidthwrap{margin:0 !important;padding:0 !important;display:none;width:100%;position:fixed !important;z-index:10000 !important;bottom:0 !important;left:0 !important;height:30px !important;opacity:0.95;border-top:1px solid #FFD800 !important;color:#333;background-color:#FFF79F !important;font-family:Helvetica, Arial, sans-serif !important;}#gridscreenwidth{margin:0 !important;display:block;width:100% !important;max-width:none !important;text-align:center !important;font-size:12px;line-height:1;padding-top:8px !important;}#gridscreenwidth strong{text-transform:none;}",d.type="text/css",e.id="gridscreenwidthwrap",e.innerHTML='<p id="gridscreenwidth">Screen width: <strong id="gridscreenwidthval"></strong></p>',a.appendChild(d),a.appendChild(e);var i=e.currentStyle?e.currentStyle.display:getComputedStyle(e,null).display;if(g.rel="shortcut icon",g.id="gridsetfavicon",g.href="http://dev.gridsetapp.com/app/img/favicon.ico",f[0].appendChild(g),"block"!=i&&(h.rel="stylesheet",h.id="gridsetstyles",h.href="https://get.gridsetapp.com/21065/",f[0].appendChild(h)),c)for(var j=c;j-- >0;){var k=b[j];gs.buildgrid(k,j,c),"static"==window.getComputedStyle(k,null).getPropertyValue("position")&&(k.style.position="relative")}else a.className.match("gridsetnoareas")||(a.className+=" gridsetnoareas"),gs.buildgrid(a,j,c);gs.width(),gs.bind(window,"resize",gs.width)},buildgrid:function(a,b,c){var d=JSON.parse('{"id":"21065","name":"UCL","widths":{"990":{"width":990,"grids":{"dl":{"name":"Desktop - Layout","prefix":"dl","width":990,"columns":{"dl1":{"name":"dl1","unit":"%","percent":19.86531984,"px":196.67},"dl2":{"name":"dl2","unit":"%","percent":8.4108252,"px":83.27},"dl3":{"name":"dl3","unit":"%","percent":31.28826977,"px":309.75},"dl4":{"name":"dl4","unit":"%","percent":2.67464241,"px":26.48},"dl5":{"name":"dl5","unit":"%","percent":25.57239054,"px":253.17}},"gutter":{"unit":"px","px":30,"percent":3.03030303},"ratio":{"name":"golden","value":0.61803398}},"dc":{"name":"Desktop - Content","prefix":"dc","width":990,"columns":{"dc1":{"name":"dc1","unit":"%","percent":33,"px":326.7},"dc2":{"name":"dc2","unit":"%","percent":13.91414141,"px":137.75},"dc3":{"name":"dc3","unit":"%","percent":13.91414141,"px":137.75},"dc4":{"name":"dc4","unit":"%","percent":33,"px":326.7}},"gutter":{"unit":"px","px":20,"percent":2.02020202},"ratio":{"name":"even","value":1}}}},"768":{"width":768,"grids":{"t":{"name":"Tablet","prefix":"t","width":768,"columns":{"t1":{"name":"t1","unit":"%","percent":31.59722222,"px":242.67},"t2":{"name":"t2","unit":"%","percent":31.59722222,"px":242.67},"t3":{"name":"t3","unit":"%","percent":31.59722222,"px":242.67}},"gutter":{"unit":"px","px":20,"percent":2.60416667},"ratio":{"name":"even","value":1}}}},"320":{"width":320,"grids":{"m":{"name":"Mobile","prefix":"m","width":320,"columns":{"m1":{"name":"m1","unit":"%","percent":46.796875,"px":149.75},"m2":{"name":"m2","unit":"%","percent":46.796875,"px":149.75}},"gutter":{"unit":"px","px":20,"percent":6.25},"ratio":{"name":"even","value":1}}}}},"prefixes":{"index":["dl","dc","t","m"],"990":["dl","dc"],"768":["t"],"320":["m"]}}'),e=document.createElement("div"),f=c?'<div class="gridwrap"><div class="gridoverlay">':'<div class="gridwrap"><div class="gridoverlay wrapper">',g=a.clientWidth,h=parseFloat(gs.getstyle(a,"padding-left"))/g*100,i=parseFloat(gs.getstyle(a,"padding-right"))/g*100;e.className="gridsetoverlaywrap";for(w in d.widths){var j=d.widths[w],l="";for(p in d.prefixes)p!=w&&"index"!=p&&(l+=d.prefixes[p][0]+"-hide ");f+='<div class="gridset '+l+'">';for(b in j.grids){var m=j.grids[b],n=new RegExp("(^| )"+m.prefix+"-showgrid( |$)");if(!c||a.className.match(n)){f+='<div style="padding-left:'+h+"%;padding-right:"+i+'%;">';for(k in m.columns){var o=m.columns[k];f+='<div class="'+o.name+'"><small>'+o.name+"</small></div>"}f+="</div>"}}f+="</div>"}f+="</div></div>",e.innerHTML=f,a.appendChild(e)},bind:function(a,b,c){a.attachEvent?a.attachEvent("on"+b,c):a.addEventListener(b,c,!1)},prevent:function(a){a.preventDefault?a.preventDefault():event.returnValue=!1},getstyle:function(a,b){return a.currentStyle?a.currentStyle[b]:document.defaultView&&document.defaultView.getComputedStyle?document.defaultView.getComputedStyle(a,"").getPropertyValue(b):a.style[b]}},gs.init(),function(a){function b(a,b){var c=new Image,d=a.getAttribute("data-src");c.onload=function(){a.parent?a.parent.replaceChild(c,a):a.src=d,b&&b()},c.src=d}function c(b){var c=b.getBoundingClientRect();return c.top>=0&&c.left>=0&&c.top<=(a.innerHeight||document.documentElement.clientHeight)}for(var d=function(a,b){if(document.querySelectorAll)b=document.querySelectorAll(a);else{var c=document,d=c.styleSheets[0]||c.createStyleSheet();d.addRule(a,"f:b");for(var e=c.all,f=0,g=[],h=e.length;f<h;f++)e[f].currentStyle.f&&g.push(e[f]);d.removeRule(0),b=g}return b},e=function(b,c){a.addEventListener?this.addEventListener(b,c,!1):a.attachEvent?this.attachEvent("on"+b,c):this["on"+b]=c},f=new Array,g=d("img.lazy"),h=function(){for(var a=0;a<f.length;a++)c(f[a])&&b(f[a],function(){f.splice(a,a)})},i=0;i<g.length;i++)f.push(g[i]);h(),e("scroll",h)}(this),window.twttr=function(a,b,c){var d,e=a.getElementsByTagName(b)[0],f=window.twttr||{};return a.getElementById(c)?f:(d=a.createElement(b),d.id=c,d.src="https://platform.twitter.com/widgets.js",e.parentNode.insertBefore(d,e),f._e=[],f.ready=function(a){f._e.push(a)},f)}(document,"script","twitter-wjs"),jQuery(document).ready(function(){function a(){b(".accordion a").each(function(){b(this).removeClass("currentAccordionAnchor")})}var b=jQuery;if(b(".tabbed div").hide(),b(".tabbed div:first").show(),b(".tabbed ul li:first").addClass("is-active"),b(".tabbed ul li a").click(function(){b(".tabbed ul li").removeClass("is-active"),b(this).parent().addClass("is-active");var a=b(this).attr("href");return b(".tabbed div").hide(),b(a).show(),!1}),void 0===globalSiteSpecificVars.useAccordionApp){var c=b(".accordion__description");c.slideUp(),b(".accordion__title a").each(function(){var a=b(this).attr("class");void 0!==a&&a.indexOf("currentAccordionAnchor")>=0&&b(this).parent().next().slideDown()}),b(".accordion__title a").click(function(){c.slideUp();var d=b(this).attr("class");return a(),void 0!==d&&-1!==d.indexOf("currentAccordionAnchor")||(b(this).parent().next().slideDown(),b(this).addClass("currentAccordionAnchor")),!1})}b(".header__open, .header__close").click(function(a){var c=b("body");c.hasClass("mobile-open")?c.removeClass("mobile-open"):c.addClass("mobile-open"),a.preventDefault()}),Modernizr.mq("only screen and (max-width: 768px)")?(b(".collapse__header").addClass("collapse__header--inactive"),b(".collapse__header").click(function(){b(this).is(".collapse__header--inactive")?(b(this).removeClass("collapse__header--inactive").addClass("collapse__header--active"),b(this).next().slideToggle().toggleClass("open-content")):(b(this).removeClass("collapse__header--active").addClass("collapse__header--inactive"),b(this).next().slideToggle().toggleClass("open-content"))})):b(".collapse__header").addClass("collapse__header--active")});