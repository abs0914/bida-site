function subscribeEvent(t,e,n){document.addEventListener?document.addEventListener(t,e,n):document.attachEvent&&document.attachEvent(t,e,n)}function unsubscribeEvent(t,e,n){document.removeEventListener?document.removeEventListener(t,e,n):document.detachEvent&&document.detachEvent(t,e,n)}function startActivityHandler(t){unsubscribeEvent("touchstart",arguments.callee,!1),document.documentElement.onmousemove=null,timeoutSleep(0,placeCssAspxRequest)}function placeCheckerRequest(){var t=getMetatagContent("VirtualFolder"),e=addTstampAndSiteToQueryString(getMetatagContent("VIcurrentDateTime")),n=document.createElement("link");n.setAttribute("rel","stylesheet"),n.setAttribute("type","text/css"),n.setAttribute("href",t+"layouts/system/VIChecker.aspx"+e),document.getElementsByTagName("head")[0].appendChild(n)}function placeCssAspxRequest(){var t=getMetatagContent("VirtualFolder"),e=addTstampAndSiteToQueryString((new Date).getTime()),n=document.createElement("link");n.setAttribute("rel","stylesheet"),n.setAttribute("type","text/css"),n.setAttribute("href",t+"layouts/system/VisitorIdentificationCSS.aspx"+e),document.getElementsByTagName("head")[0].appendChild(n),timeoutSleep(3e4,placeCheckerRequest)}function timeoutSleep(t,e){window.setTimeout((function(){e()}),t)}function getMetatagContent(t){for(var e=document.getElementsByTagName("meta"),n=0;n<e.length;n++)if(e[n].getAttribute("name")===t)return e[n].getAttribute("content");return""}function addTstampAndSiteToQueryString(t){var e="tstamp="+t,n=window.location.search.match(/sc_site=.*?&|sc_site=.*$/),a="?"+e;return null!==n&&(a=a+"&"+n),a}document.documentElement.onmousemove=startActivityHandler,subscribeEvent("touchstart",startActivityHandler,!1);