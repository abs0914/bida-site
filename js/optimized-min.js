XA.component.accessibility=function(n){var t={},e=function(){var t=n(document.activeElement).closest(".initialized");return t.length?t.attr("class").split(" ")[1]:""},i=function(t){return n(document.activeElement).closest(t)},o=function(n,t){var e=t;"left"==n&&t.prev()?(t.attr("tabindex","-1"),e=t.prev()):"right"==n&&t.next()&&(t.attr("tabindex","-1"),e=t.next()),e.attr("tabindex","0").trigger("click").focus()},a=function(n,t,e){var i=t.closest("li.item"),o=t,a=i.next(),s=i.prev();"down"==n&&a.length?(e.preventDefault(),t.attr("tabindex","-1"),o=a):"up"==n&&s.length&&(e.preventDefault(),t.attr("tabindex","-1"),o=s),o.find(".toggle-header").attr("tabindex","0").focus()},s={tabs:function(n){var e=i("li.active");e&&(n==t.keys.right?o("right",e):n==t.keys.left&&o("left",e))},accordion:function(n,e,o){var s=i("div.toggle-header");s&&(n==t.keys.down?a("down",s,o):n==t.keys.up?a("up",s,o):e||n!=t.keys.tab?e&&n==t.keys.tab&&a("up",s,o):a("down",s,o))},flip:function(n){var e=i("[class*='Side']");e&&(n==t.keys.right||n==t.keys.left)&&function(n){var t=n.next().length?n.next():n.prev();n.attr("tabindex","-1"),t.trigger("click").attr("tabindex","0").focus()}(e)}};return t.keys={end:35,home:36,left:37,up:38,right:39,down:40,delete:46,enter:13,space:32,tab:9},t.indexedElements=n("body").find("[tabindex]"),t.watchEvents=function(){n(document).on("keydown",(function(n){!function(n,t,i){var o=e();s[o]&&s[o](n,t,i)}(n.keyCode,n.shiftKey,n)}))},t.initInstance=function(){t.watchEvents(),t.indexedElements.eq(0).attr("tabindex","0")},t.init=function(){t.initInstance()},t}(jQuery,document),XA.register("accessibility",XA.component.accessibility),XA.component.accordions=function(n){function t(t){var e=n(t),i=n(t).find("img"),o=i.attr("src");o&&(e.parents(".accordion").addClass("accordion-image"),e.css({background:"url("+o+")","background-repeat":"no-repeat","background-size":"cover","background-position":"50% 100%"}),i.hide())}function e(e,a){var s="click",c=e.find(".toggle-header").filter((function(t,i){return n(i).closest(".accordion").is(e)}));a.expandOnHover&&(s+=" mouseenter"),c.on("mouseover",o.focus),c.on("mouseleave",o.blur),c.on("focus",o.focus),c.on("blur",o.blur),c.on("keyup",(function(t){(13==t.keyCode||32==t.keyCode)&&n(this).click()})),e.hasClass("accordion-horizontal")&&(n(document).ready((function(){!function(t){var e=n(t).width(),i=n(t).find(".item"),o=0;_.each(i,(function(a){var s=n(a).find(".toggle-content"),c=n(a).find(".toggle-header"),r=e-i.length*c.outerWidth();n(a).hasClass("active")&&n(a).css({width:r}),s.css({width:n(t).hasClass("accordion-image")?r+c.outerWidth():r-c.outerWidth()-parseInt(c.css("padding"))}),n(a).find(".toggle-content").height()>o&&(o=n(a).find(".toggle-content").height())}))}(e)})),_.each(c,(function(n){t(n)}))),c.on(s,(function(){var t=n(this),e=t.closest(".item"),o=t.parents(".accordion"),s=e.find(".toggle-content:first"),c=e.siblings(),r=c.find(".toggle-content");o.hasClass("accordion-horizontal")?i.animateHorizontal.call(this,a):(a.canOpenMultiple||(c.removeClass("active"),r.stop().slideUp({duration:a.speed,easing:a.easing})),e.toggleClass("active"),a.canToggle?s.slideToggle({duration:a.speed,easing:a.easing}):s.slideDown({duration:a.speed,easing:a.easing}))}))}var i={},o={focus:function(){n(this).addClass("show")},blur:function(){n(this).removeClass("show")}};return i.animateHorizontal=function(t){var e,i,o=n(this).parents(".accordion"),a=n(this).closest(".item"),s=a.find(".toggle-header"),c=a.find(".toggle-content"),r=o.find(".item"),d=a.siblings(),l=d.find(".toggle-content");a.toggleClass("active"),d.removeClass("active"),d.stop(!0).animate({width:0},t.speed,t.easing,(function(){l.css({display:"none"})})),a.hasClass("active")?(e=o.hasClass("accordion-image")?c.outerWidth():o.width()-((r.length-1)*a.outerWidth()+2),i=o.hasClass("accordion-image")?e:e-s.outerWidth(),a.stop(!0).animate({width:e},t.speed,t.easing,(function(){})),c.css({width:i,display:"block"})):a.stop(!0).animate({width:0},t.speed,t.easing,(function(){c.css({display:"none"})}))},i.initInstance=function(t,i){var o,a,s,c,r;if(t.find(".toggle-header").eq(0).attr("tabindex","0"),t.hasClass("toggle")&&n.extend(i,{canToggle:!0}),t.find(".toggle-content").hide(),o=XA.queryString.getQueryParam(function(n){var t=n[0].id;return n.length>0&&""!=t?t.toLocaleLowerCase():null}(t)),null!=o)for(a=o.split(","),s=t.find("ul").first().children(),c=0;c<s.length;c++)r=s[c],a.indexOf(c+"")>-1&&(n(r).addClass("active"),n(r).find(".toggle-content").show());else i.expandedByDefault&&(t.find("li:first-child").addClass("active"),t.find("li:first-child").find(".toggle-content").show());e(t,i)},i.init=function(){n(".accordion:not(.initialized)").each((function(){var t=n(this).data("properties"),e=n(this);i.initInstance(e,t),e.addClass("initialized")}))},i}(jQuery),XA.register("accordions",XA.component.accordions),XA.component.parallax=function(n,t){function e(){return n(window).width()<768}function i(i){function o(){if(d)return!1;var t=n(window).scrollTop();c<=t+s&&c+r>=t&&a.css("background-position","50% "+Math.round(3*(c-t)/8)+"px")}var a=i.children(".component-content"),s=n(window).height(),c=a[0].offsetTop,r=a[0].offsetHeight,d=e();o(),n(document).on("scroll",t.throttle(o,10)),n(window).on("resize",t.throttle((function(){(d=e())?a.css("background-position","50% 0"):o()}),150))}var o={initInstance:function(n){i(n)},init:function(){n(".parallax-background:not(.initialized)").each((function(){o.initInstance(n(this)),n(this).addClass("initialized")}))}};return o}(jQuery,_),XA.register("parallax-background",XA.component.parallax),XA.component.snippet=function(n){var t,e={};return e.initInstance=function(){},e.init=function(){n(".snippet:not(.initialized)").each((function(){var i=n(this).find(".snippet-inner");t=n(this),e.initInstance(t,i),n(this).addClass("initialized")}))},e}(jQuery),XA.register("snippet",XA.component.snippet),XA.component.video=function(n,t){function e(n){var t=n.width();n.removeClass("video-small hide-controls"),t<481&&t>=321?n.addClass("video-small"):t<321&&n.addClass("hide-controls")}function i(t,e){var i,o=t.find("video");if(o.length)return i=function(t){t.movieName="Movie",n(t).on("ended",(function(){e.fromPlaylist&&n(e.playlist).trigger("change-video")})),n(t).closest(".component-content").find(".video-init").hide()},n.extend(e,{plugins:["youtube","flash","silverlight"],silverlightName:"silverlightmediaelement.xap",classPrefix:"mejs-",success:i,stretching:"auto",pluginPath:"../other/",youtube:{imageQuality:"hqdefault"}}),void o.each((function(t){var i,a=n(o[t]),s=this;a.attr("poster")?(i=a.parent().find(".video-init"),a.add(i).on("click",(function(){e.success=function(n){return function(){try{arguments[0].load(),arguments[0].play()}catch(n){console.warn("Error while loading video")}return n.apply(this,arguments)}}(e.success),i.hide(),new MediaElementPlayer(s,e)}))):new MediaElementPlayer(o[t],e)}))}var o={initVideoFromPlaylist:function(t,e){var o=n(t).data("properties");return n.extend(o,{fromPlaylist:!0,playlist:e}),i(t,o)},initInstance:function(t,o){var a=n(t);i(a,o),e(a),n(window).resize((function(){e(a)}))},init:function(){XA.component.hasOwnProperty("playlist")&&XA.component.playlist.init(),n(".video.component:not(.initialized)").each((function(){var t=n(this).data("properties");o.initInstance(this,t),n(this).addClass("initialized")})),n(t).on("mozfullscreenchange",(function(){setTimeout((function(){n(window).resize()}),200)}))}};return o}(jQuery,document),XA.register("video",XA.component.video),XA.component.equalHeight=function(n){var t=".equalized-content",e=".equal:not(.flip.component),.flip .Side0,.flip .Side1",i={fixHeight:function(){n(t).each((function(){var t=n(this).find(e),i=0;t.each((function(){var t=n(this);t.css("min-height","inherit"),t.find(">.component-content").css("min-height","inherit"),t.outerHeight(!0)>i&&(i=t.outerHeight(!0))})),i>0&&t.each((function(){var t=n(this);(t.hasClass("Side0")||t.hasClass("Side1"))&&t.parent().attr("class","flip").css({"min-height":i}),t.css({"min-height":i}),t.find(">.component-content").css({"min-height":i})}))}))},init:function(){n(document).ready((function(){i.fixHeight()})),n(window).on("resize",(function(){setTimeout(i.fixHeight,0)}))}};return i}(jQuery,document),XA.register("equalHeight",XA.component.equalHeight);