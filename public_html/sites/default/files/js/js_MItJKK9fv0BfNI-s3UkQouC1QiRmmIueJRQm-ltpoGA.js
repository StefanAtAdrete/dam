/*!
 * jQuery Once v2.2.3 - http://github.com/robloach/jquery-once
 * @license MIT, GPL-2.0
 *   http://opensource.org/licenses/MIT
 *   http://opensource.org/licenses/GPL-2.0
 */
(function(e){"use strict";if(typeof exports==="object"&&typeof exports.nodeName!=="string"){e(require("jquery"))}else if(typeof define==="function"&&define.amd){define(["jquery"],e)}else{e(jQuery)}})(function(t){"use strict";var r=function(e){e=e||"once";if(typeof e!=="string"){throw new TypeError("The jQuery Once id parameter must be a string")}return e};t.fn.once=function(e){var n="jquery-once-"+r(e);return this.filter(function(){return t(this).data(n)!==true}).data(n,true)};t.fn.removeOnce=function(e){return this.findOnce(e).removeData("jquery-once-"+r(e))};t.fn.findOnce=function(e){var n="jquery-once-"+r(e);return this.filter(function(){return t(this).data(n)===true})}});

/*! picturefill - v3.0.2 - 2016-02-12
 * https://scottjehl.github.io/picturefill/
 * Copyright (c) 2016 https://github.com/scottjehl/picturefill/blob/master/Authors.txt; Licensed MIT
 */
!function(a){var b=navigator.userAgent;a.HTMLPictureElement&&/ecko/.test(b)&&b.match(/rv\:(\d+)/)&&RegExp.$1<45&&addEventListener("resize",function(){var b,c=document.createElement("source"),d=function(a){var b,d,e=a.parentNode;"PICTURE"===e.nodeName.toUpperCase()?(b=c.cloneNode(),e.insertBefore(b,e.firstElementChild),setTimeout(function(){e.removeChild(b)})):(!a._pfLastSize||a.offsetWidth>a._pfLastSize)&&(a._pfLastSize=a.offsetWidth,d=a.sizes,a.sizes+=",100vw",setTimeout(function(){a.sizes=d}))},e=function(){var a,b=document.querySelectorAll("picture > img, img[srcset][sizes]");for(a=0;a<b.length;a++)d(b[a])},f=function(){clearTimeout(b),b=setTimeout(e,99)},g=a.matchMedia&&matchMedia("(orientation: landscape)"),h=function(){f(),g&&g.addListener&&g.addListener(f)};return c.srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",/^[c|i]|d$/.test(document.readyState||"")?h():document.addEventListener("DOMContentLoaded",h),f}())}(window),function(a,b,c){"use strict";function d(a){return" "===a||"	"===a||"\n"===a||"\f"===a||"\r"===a}function e(b,c){var d=new a.Image;return d.onerror=function(){A[b]=!1,ba()},d.onload=function(){A[b]=1===d.width,ba()},d.src=c,"pending"}function f(){M=!1,P=a.devicePixelRatio,N={},O={},s.DPR=P||1,Q.width=Math.max(a.innerWidth||0,z.clientWidth),Q.height=Math.max(a.innerHeight||0,z.clientHeight),Q.vw=Q.width/100,Q.vh=Q.height/100,r=[Q.height,Q.width,P].join("-"),Q.em=s.getEmValue(),Q.rem=Q.em}function g(a,b,c,d){var e,f,g,h;return"saveData"===B.algorithm?a>2.7?h=c+1:(f=b-c,e=Math.pow(a-.6,1.5),g=f*e,d&&(g+=.1*e),h=a+g):h=c>1?Math.sqrt(a*b):a,h>c}function h(a){var b,c=s.getSet(a),d=!1;"pending"!==c&&(d=r,c&&(b=s.setRes(c),s.applySetCandidate(b,a))),a[s.ns].evaled=d}function i(a,b){return a.res-b.res}function j(a,b,c){var d;return!c&&b&&(c=a[s.ns].sets,c=c&&c[c.length-1]),d=k(b,c),d&&(b=s.makeUrl(b),a[s.ns].curSrc=b,a[s.ns].curCan=d,d.res||aa(d,d.set.sizes)),d}function k(a,b){var c,d,e;if(a&&b)for(e=s.parseSet(b),a=s.makeUrl(a),c=0;c<e.length;c++)if(a===s.makeUrl(e[c].url)){d=e[c];break}return d}function l(a,b){var c,d,e,f,g=a.getElementsByTagName("source");for(c=0,d=g.length;d>c;c++)e=g[c],e[s.ns]=!0,f=e.getAttribute("srcset"),f&&b.push({srcset:f,media:e.getAttribute("media"),type:e.getAttribute("type"),sizes:e.getAttribute("sizes")})}function m(a,b){function c(b){var c,d=b.exec(a.substring(m));return d?(c=d[0],m+=c.length,c):void 0}function e(){var a,c,d,e,f,i,j,k,l,m=!1,o={};for(e=0;e<h.length;e++)f=h[e],i=f[f.length-1],j=f.substring(0,f.length-1),k=parseInt(j,10),l=parseFloat(j),X.test(j)&&"w"===i?((a||c)&&(m=!0),0===k?m=!0:a=k):Y.test(j)&&"x"===i?((a||c||d)&&(m=!0),0>l?m=!0:c=l):X.test(j)&&"h"===i?((d||c)&&(m=!0),0===k?m=!0:d=k):m=!0;m||(o.url=g,a&&(o.w=a),c&&(o.d=c),d&&(o.h=d),d||c||a||(o.d=1),1===o.d&&(b.has1x=!0),o.set=b,n.push(o))}function f(){for(c(T),i="",j="in descriptor";;){if(k=a.charAt(m),"in descriptor"===j)if(d(k))i&&(h.push(i),i="",j="after descriptor");else{if(","===k)return m+=1,i&&h.push(i),void e();if("("===k)i+=k,j="in parens";else{if(""===k)return i&&h.push(i),void e();i+=k}}else if("in parens"===j)if(")"===k)i+=k,j="in descriptor";else{if(""===k)return h.push(i),void e();i+=k}else if("after descriptor"===j)if(d(k));else{if(""===k)return void e();j="in descriptor",m-=1}m+=1}}for(var g,h,i,j,k,l=a.length,m=0,n=[];;){if(c(U),m>=l)return n;g=c(V),h=[],","===g.slice(-1)?(g=g.replace(W,""),e()):f()}}function n(a){function b(a){function b(){f&&(g.push(f),f="")}function c(){g[0]&&(h.push(g),g=[])}for(var e,f="",g=[],h=[],i=0,j=0,k=!1;;){if(e=a.charAt(j),""===e)return b(),c(),h;if(k){if("*"===e&&"/"===a[j+1]){k=!1,j+=2,b();continue}j+=1}else{if(d(e)){if(a.charAt(j-1)&&d(a.charAt(j-1))||!f){j+=1;continue}if(0===i){b(),j+=1;continue}e=" "}else if("("===e)i+=1;else if(")"===e)i-=1;else{if(","===e){b(),c(),j+=1;continue}if("/"===e&&"*"===a.charAt(j+1)){k=!0,j+=2;continue}}f+=e,j+=1}}}function c(a){return k.test(a)&&parseFloat(a)>=0?!0:l.test(a)?!0:"0"===a||"-0"===a||"+0"===a?!0:!1}var e,f,g,h,i,j,k=/^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i,l=/^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;for(f=b(a),g=f.length,e=0;g>e;e++)if(h=f[e],i=h[h.length-1],c(i)){if(j=i,h.pop(),0===h.length)return j;if(h=h.join(" "),s.matchesMedia(h))return j}return"100vw"}b.createElement("picture");var o,p,q,r,s={},t=!1,u=function(){},v=b.createElement("img"),w=v.getAttribute,x=v.setAttribute,y=v.removeAttribute,z=b.documentElement,A={},B={algorithm:""},C="data-pfsrc",D=C+"set",E=navigator.userAgent,F=/rident/.test(E)||/ecko/.test(E)&&E.match(/rv\:(\d+)/)&&RegExp.$1>35,G="currentSrc",H=/\s+\+?\d+(e\d+)?w/,I=/(\([^)]+\))?\s*(.+)/,J=a.picturefillCFG,K="position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)",L="font-size:100%!important;",M=!0,N={},O={},P=a.devicePixelRatio,Q={px:1,"in":96},R=b.createElement("a"),S=!1,T=/^[ \t\n\r\u000c]+/,U=/^[, \t\n\r\u000c]+/,V=/^[^ \t\n\r\u000c]+/,W=/[,]+$/,X=/^\d+$/,Y=/^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,Z=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,d||!1):a.attachEvent&&a.attachEvent("on"+b,c)},$=function(a){var b={};return function(c){return c in b||(b[c]=a(c)),b[c]}},_=function(){var a=/^([\d\.]+)(em|vw|px)$/,b=function(){for(var a=arguments,b=0,c=a[0];++b in a;)c=c.replace(a[b],a[++b]);return c},c=$(function(a){return"return "+b((a||"").toLowerCase(),/\band\b/g,"&&",/,/g,"||",/min-([a-z-\s]+):/g,"e.$1>=",/max-([a-z-\s]+):/g,"e.$1<=",/calc([^)]+)/g,"($1)",/(\d+[\.]*[\d]*)([a-z]+)/g,"($1 * e.$2)",/^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi,"")+";"});return function(b,d){var e;if(!(b in N))if(N[b]=!1,d&&(e=b.match(a)))N[b]=e[1]*Q[e[2]];else try{N[b]=new Function("e",c(b))(Q)}catch(f){}return N[b]}}(),aa=function(a,b){return a.w?(a.cWidth=s.calcListLength(b||"100vw"),a.res=a.w/a.cWidth):a.res=a.d,a},ba=function(a){if(t){var c,d,e,f=a||{};if(f.elements&&1===f.elements.nodeType&&("IMG"===f.elements.nodeName.toUpperCase()?f.elements=[f.elements]:(f.context=f.elements,f.elements=null)),c=f.elements||s.qsa(f.context||b,f.reevaluate||f.reselect?s.sel:s.selShort),e=c.length){for(s.setupRun(f),S=!0,d=0;e>d;d++)s.fillImg(c[d],f);s.teardownRun(f)}}};o=a.console&&console.warn?function(a){console.warn(a)}:u,G in v||(G="src"),A["image/jpeg"]=!0,A["image/gif"]=!0,A["image/png"]=!0,A["image/svg+xml"]=b.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"),s.ns=("pf"+(new Date).getTime()).substr(0,9),s.supSrcset="srcset"in v,s.supSizes="sizes"in v,s.supPicture=!!a.HTMLPictureElement,s.supSrcset&&s.supPicture&&!s.supSizes&&!function(a){v.srcset="data:,a",a.src="data:,a",s.supSrcset=v.complete===a.complete,s.supPicture=s.supSrcset&&s.supPicture}(b.createElement("img")),s.supSrcset&&!s.supSizes?!function(){var a="data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw==",c="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",d=b.createElement("img"),e=function(){var a=d.width;2===a&&(s.supSizes=!0),q=s.supSrcset&&!s.supSizes,t=!0,setTimeout(ba)};d.onload=e,d.onerror=e,d.setAttribute("sizes","9px"),d.srcset=c+" 1w,"+a+" 9w",d.src=c}():t=!0,s.selShort="picture>img,img[srcset]",s.sel=s.selShort,s.cfg=B,s.DPR=P||1,s.u=Q,s.types=A,s.setSize=u,s.makeUrl=$(function(a){return R.href=a,R.href}),s.qsa=function(a,b){return"querySelector"in a?a.querySelectorAll(b):[]},s.matchesMedia=function(){return a.matchMedia&&(matchMedia("(min-width: 0.1em)")||{}).matches?s.matchesMedia=function(a){return!a||matchMedia(a).matches}:s.matchesMedia=s.mMQ,s.matchesMedia.apply(this,arguments)},s.mMQ=function(a){return a?_(a):!0},s.calcLength=function(a){var b=_(a,!0)||!1;return 0>b&&(b=!1),b},s.supportsType=function(a){return a?A[a]:!0},s.parseSize=$(function(a){var b=(a||"").match(I);return{media:b&&b[1],length:b&&b[2]}}),s.parseSet=function(a){return a.cands||(a.cands=m(a.srcset,a)),a.cands},s.getEmValue=function(){var a;if(!p&&(a=b.body)){var c=b.createElement("div"),d=z.style.cssText,e=a.style.cssText;c.style.cssText=K,z.style.cssText=L,a.style.cssText=L,a.appendChild(c),p=c.offsetWidth,a.removeChild(c),p=parseFloat(p,10),z.style.cssText=d,a.style.cssText=e}return p||16},s.calcListLength=function(a){if(!(a in O)||B.uT){var b=s.calcLength(n(a));O[a]=b?b:Q.width}return O[a]},s.setRes=function(a){var b;if(a){b=s.parseSet(a);for(var c=0,d=b.length;d>c;c++)aa(b[c],a.sizes)}return b},s.setRes.res=aa,s.applySetCandidate=function(a,b){if(a.length){var c,d,e,f,h,k,l,m,n,o=b[s.ns],p=s.DPR;if(k=o.curSrc||b[G],l=o.curCan||j(b,k,a[0].set),l&&l.set===a[0].set&&(n=F&&!b.complete&&l.res-.1>p,n||(l.cached=!0,l.res>=p&&(h=l))),!h)for(a.sort(i),f=a.length,h=a[f-1],d=0;f>d;d++)if(c=a[d],c.res>=p){e=d-1,h=a[e]&&(n||k!==s.makeUrl(c.url))&&g(a[e].res,c.res,p,a[e].cached)?a[e]:c;break}h&&(m=s.makeUrl(h.url),o.curSrc=m,o.curCan=h,m!==k&&s.setSrc(b,h),s.setSize(b))}},s.setSrc=function(a,b){var c;a.src=b.url,"image/svg+xml"===b.set.type&&(c=a.style.width,a.style.width=a.offsetWidth+1+"px",a.offsetWidth+1&&(a.style.width=c))},s.getSet=function(a){var b,c,d,e=!1,f=a[s.ns].sets;for(b=0;b<f.length&&!e;b++)if(c=f[b],c.srcset&&s.matchesMedia(c.media)&&(d=s.supportsType(c.type))){"pending"===d&&(c=d),e=c;break}return e},s.parseSets=function(a,b,d){var e,f,g,h,i=b&&"PICTURE"===b.nodeName.toUpperCase(),j=a[s.ns];(j.src===c||d.src)&&(j.src=w.call(a,"src"),j.src?x.call(a,C,j.src):y.call(a,C)),(j.srcset===c||d.srcset||!s.supSrcset||a.srcset)&&(e=w.call(a,"srcset"),j.srcset=e,h=!0),j.sets=[],i&&(j.pic=!0,l(b,j.sets)),j.srcset?(f={srcset:j.srcset,sizes:w.call(a,"sizes")},j.sets.push(f),g=(q||j.src)&&H.test(j.srcset||""),g||!j.src||k(j.src,f)||f.has1x||(f.srcset+=", "+j.src,f.cands.push({url:j.src,d:1,set:f}))):j.src&&j.sets.push({srcset:j.src,sizes:null}),j.curCan=null,j.curSrc=c,j.supported=!(i||f&&!s.supSrcset||g&&!s.supSizes),h&&s.supSrcset&&!j.supported&&(e?(x.call(a,D,e),a.srcset=""):y.call(a,D)),j.supported&&!j.srcset&&(!j.src&&a.src||a.src!==s.makeUrl(j.src))&&(null===j.src?a.removeAttribute("src"):a.src=j.src),j.parsed=!0},s.fillImg=function(a,b){var c,d=b.reselect||b.reevaluate;a[s.ns]||(a[s.ns]={}),c=a[s.ns],(d||c.evaled!==r)&&((!c.parsed||b.reevaluate)&&s.parseSets(a,a.parentNode,b),c.supported?c.evaled=r:h(a))},s.setupRun=function(){(!S||M||P!==a.devicePixelRatio)&&f()},s.supPicture?(ba=u,s.fillImg=u):!function(){var c,d=a.attachEvent?/d$|^c/:/d$|^c|^i/,e=function(){var a=b.readyState||"";f=setTimeout(e,"loading"===a?200:999),b.body&&(s.fillImgs(),c=c||d.test(a),c&&clearTimeout(f))},f=setTimeout(e,b.body?9:99),g=function(a,b){var c,d,e=function(){var f=new Date-d;b>f?c=setTimeout(e,b-f):(c=null,a())};return function(){d=new Date,c||(c=setTimeout(e,b))}},h=z.clientHeight,i=function(){M=Math.max(a.innerWidth||0,z.clientWidth)!==Q.width||z.clientHeight!==h,h=z.clientHeight,M&&s.fillImgs()};Z(a,"resize",g(i,99)),Z(b,"readystatechange",e)}(),s.picturefill=ba,s.fillImgs=ba,s.teardownRun=u,ba._=s,a.picturefillCFG={pf:s,push:function(a){var b=a.shift();"function"==typeof s[b]?s[b].apply(s,a):(B[b]=a[0],S&&s.fillImgs({reselect:!0}))}};for(;J&&J.length;)a.picturefillCFG.push(J.shift());a.picturefill=ba,"object"==typeof module&&"object"==typeof module.exports?module.exports=ba:"function"==typeof define&&define.amd&&define("picturefill",function(){return ba}),s.supPicture||(A["image/webp"]=e("image/webp","data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA=="))}(window,document);;
/*
 * jQuery FlexSlider v2.7.2
 * Copyright 2012 WooThemes
 * Contributing Author: Tyler Smith
 */
;
(function ($) {

  var focused = true;

  //FlexSlider: Object Instance
  $.flexslider = function(el, options) {
    var slider = $(el);

    // making variables public

    //if rtl value was not passed and html is in rtl..enable it by default.
    if(typeof options.rtl=='undefined' && $('html').attr('dir')=='rtl'){
      options.rtl=true;
    }
    slider.vars = $.extend({}, $.flexslider.defaults, options);

    var namespace = slider.vars.namespace,
        msGesture = window.navigator && window.navigator.msPointerEnabled && window.MSGesture,
        touch = (( "ontouchstart" in window ) || msGesture || window.DocumentTouch && document instanceof DocumentTouch) && slider.vars.touch,
        // deprecating this idea, as devices are being released with both of these events
        eventType = "click touchend MSPointerUp keyup",
        watchedEvent = "",
        watchedEventClearTimer,
        vertical = slider.vars.direction === "vertical",
        reverse = slider.vars.reverse,
        carousel = (slider.vars.itemWidth > 0),
        fade = slider.vars.animation === "fade",
        asNav = slider.vars.asNavFor !== "",
        methods = {};

    // Store a reference to the slider object
    $.data(el, "flexslider", slider);

    // Private slider methods
    methods = {
      init: function() {
        slider.animating = false;
        // Get current slide and make sure it is a number
        slider.currentSlide = parseInt( ( slider.vars.startAt ? slider.vars.startAt : 0), 10 );
        if ( isNaN( slider.currentSlide ) ) { slider.currentSlide = 0; }
        slider.animatingTo = slider.currentSlide;
        slider.atEnd = (slider.currentSlide === 0 || slider.currentSlide === slider.last);
        slider.containerSelector = slider.vars.selector.substr(0,slider.vars.selector.search(' '));
        slider.slides = $(slider.vars.selector, slider);
        slider.container = $(slider.containerSelector, slider);
        slider.count = slider.slides.length;
        // SYNC:
        slider.syncExists = $(slider.vars.sync).length > 0;
        // SLIDE:
        if (slider.vars.animation === "slide") { slider.vars.animation = "swing"; }
        slider.prop = (vertical) ? "top" : ( slider.vars.rtl ? "marginRight" : "marginLeft" );
        slider.args = {};
        // SLIDESHOW:
        slider.manualPause = false;
        slider.stopped = false;
        //PAUSE WHEN INVISIBLE
        slider.started = false;
        slider.startTimeout = null;
        // TOUCH/USECSS:
        slider.transitions = !slider.vars.video && !fade && slider.vars.useCSS && (function() {
          var obj = document.createElement('div'),
              props = ['perspectiveProperty', 'WebkitPerspective', 'MozPerspective', 'OPerspective', 'msPerspective'];
          for (var i in props) {
            if ( obj.style[ props[i] ] !== undefined ) {
              slider.pfx = props[i].replace('Perspective','').toLowerCase();
              slider.prop = "-" + slider.pfx + "-transform";
              return true;
            }
          }
          return false;
        }());
        slider.isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
        slider.ensureAnimationEnd = '';
        // CONTROLSCONTAINER:
        if (slider.vars.controlsContainer !== "") slider.controlsContainer = $(slider.vars.controlsContainer).length > 0 && $(slider.vars.controlsContainer);
        // MANUAL:
        if (slider.vars.manualControls !== "") slider.manualControls = $(slider.vars.manualControls).length > 0 && $(slider.vars.manualControls);

        // CUSTOM DIRECTION NAV:
        if (slider.vars.customDirectionNav !== "") slider.customDirectionNav = $(slider.vars.customDirectionNav).length === 2 && $(slider.vars.customDirectionNav);

        // RANDOMIZE:
        if (slider.vars.randomize) {
          slider.slides.sort(function() { return (Math.round(Math.random())-0.5); });
          slider.container.empty().append(slider.slides);
        }

        slider.doMath();

        // INIT
        slider.setup("init");

        // CONTROLNAV:
        if (slider.vars.controlNav) { methods.controlNav.setup(); }

        // DIRECTIONNAV:
        if (slider.vars.directionNav) { methods.directionNav.setup(); }

        // KEYBOARD:
        if (slider.vars.keyboard && ($(slider.containerSelector).length === 1 || slider.vars.multipleKeyboard)) {
          $(document).bind('keyup', function(event) {
            var keycode = event.keyCode;
            if (!slider.animating && (keycode === 39 || keycode === 37)) {
              var target = (slider.vars.rtl?
                                ((keycode === 37) ? slider.getTarget('next') :
                                (keycode === 39) ? slider.getTarget('prev') : false)
                                :
                                ((keycode === 39) ? slider.getTarget('next') :
                                (keycode === 37) ? slider.getTarget('prev') : false)
                                )
                                ;
              slider.flexAnimate(target, slider.vars.pauseOnAction);
            }
          });
        }
        // MOUSEWHEEL:
        if (slider.vars.mousewheel) {
          slider.bind('mousewheel', function(event, delta, deltaX, deltaY) {
            event.preventDefault();
            var target = (delta < 0) ? slider.getTarget('next') : slider.getTarget('prev');
            slider.flexAnimate(target, slider.vars.pauseOnAction);
          });
        }

        // PAUSEPLAY
        if (slider.vars.pausePlay) { methods.pausePlay.setup(); }

        //PAUSE WHEN INVISIBLE
        if (slider.vars.slideshow && slider.vars.pauseInvisible) { methods.pauseInvisible.init(); }

        // SLIDSESHOW
        if (slider.vars.slideshow) {
          if (slider.vars.pauseOnHover) {
            slider.hover(function() {
              if (!slider.manualPlay && !slider.manualPause) { slider.pause(); }
            }, function() {
              if (!slider.manualPause && !slider.manualPlay && !slider.stopped) { slider.play(); }
            });
          }
          // initialize animation
          //If we're visible, or we don't use PageVisibility API
          if(!slider.vars.pauseInvisible || !methods.pauseInvisible.isHidden()) {
            (slider.vars.initDelay > 0) ? slider.startTimeout = setTimeout(slider.play, slider.vars.initDelay) : slider.play();
          }
        }

        // ASNAV:
        if (asNav) { methods.asNav.setup(); }

        // TOUCH
        if (touch && slider.vars.touch) { methods.touch(); }

        // FADE&&SMOOTHHEIGHT || SLIDE:
        if (!fade || (fade && slider.vars.smoothHeight)) { $(window).bind("resize orientationchange focus", methods.resize); }

        slider.find("img").attr("draggable", "false");

        // API: start() Callback
        setTimeout(function(){
          slider.vars.start(slider);
        }, 200);
      },
      asNav: {
        setup: function() {
          slider.asNav = true;
          slider.animatingTo = Math.floor(slider.currentSlide/slider.move);
          slider.currentItem = slider.currentSlide;
          slider.slides.removeClass(namespace + "active-slide").eq(slider.currentItem).addClass(namespace + "active-slide");
          if(!msGesture){
              slider.slides.on(eventType, function(e){
                e.preventDefault();
                var $slide = $(this),
                    target = $slide.index();
                var posFromX;
                if(slider.vars.rtl){
                  posFromX = -1*($slide.offset().right - $(slider).scrollLeft()); // Find position of slide relative to right of slider container
                }
                else
                {
                  posFromX = $slide.offset().left - $(slider).scrollLeft(); // Find position of slide relative to left of slider container
                }
                if( posFromX <= 0 && $slide.hasClass( namespace + 'active-slide' ) ) {
                  slider.flexAnimate(slider.getTarget("prev"), true);
                } else if (!$(slider.vars.asNavFor).data('flexslider').animating && !$slide.hasClass(namespace + "active-slide")) {
                  slider.direction = (slider.currentItem < target) ? "next" : "prev";
                  slider.flexAnimate(target, slider.vars.pauseOnAction, false, true, true);
                }
              });
          }else{
              el._slider = slider;
              slider.slides.each(function (){
                  var that = this;
                  that._gesture = new MSGesture();
                  that._gesture.target = that;
                  that.addEventListener("MSPointerDown", function (e){
                      e.preventDefault();
                      if(e.currentTarget._gesture) {
                        e.currentTarget._gesture.addPointer(e.pointerId);
                      }
                  }, false);
                  that.addEventListener("MSGestureTap", function (e){
                      e.preventDefault();
                      var $slide = $(this),
                          target = $slide.index();
                      if (!$(slider.vars.asNavFor).data('flexslider').animating && !$slide.hasClass('active')) {
                          slider.direction = (slider.currentItem < target) ? "next" : "prev";
                          slider.flexAnimate(target, slider.vars.pauseOnAction, false, true, true);
                      }
                  });
              });
          }
        }
      },
      controlNav: {
        setup: function() {
          if (!slider.manualControls) {
            methods.controlNav.setupPaging();
          } else { // MANUALCONTROLS:
            methods.controlNav.setupManual();
          }
        },
        setupPaging: function() {
          var type = (slider.vars.controlNav === "thumbnails") ? 'control-thumbs' : 'control-paging',
              j = 1,
              item,
              slide;

          slider.controlNavScaffold = $('<ol class="'+ namespace + 'control-nav ' + namespace + type + '"></ol>');

          if (slider.pagingCount > 1) {
            for (var i = 0; i < slider.pagingCount; i++) {
              slide = slider.slides.eq(i);

              if ( undefined === slide.attr( 'data-thumb-alt' ) ) { 
                slide.attr( 'data-thumb-alt', '' ); 
              }
              
              item = $( '<a></a>' ).attr( 'href', '#' ).text( j );
              if ( slider.vars.controlNav === "thumbnails" ) {
                item = $( '<img/>' ).attr( 'src', slide.attr( 'data-thumb' ) );
              }
              
              if ( '' !== slide.attr( 'data-thumb-alt' ) ) {
                item.attr( 'alt', slide.attr( 'data-thumb-alt' ) );
              }

              if ( 'thumbnails' === slider.vars.controlNav && true === slider.vars.thumbCaptions ) {
                var captn = slide.attr( 'data-thumbcaption' );
                if ( '' !== captn && undefined !== captn ) { 
                  var caption = $('<span></span>' ).addClass( namespace + 'caption' ).text( captn );
                  item.append( caption );
                }
              }
              
              var liElement = $( '<li>' );
              item.appendTo( liElement );
              liElement.append( '</li>' );

              slider.controlNavScaffold.append(liElement);
              j++;

            }
          }

          // CONTROLSCONTAINER:
          (slider.controlsContainer) ? $(slider.controlsContainer).append(slider.controlNavScaffold) : slider.append(slider.controlNavScaffold);
          methods.controlNav.set();

          methods.controlNav.active();

          slider.controlNavScaffold.delegate('a, img', eventType, function(event) {
            event.preventDefault();

            if (watchedEvent === "" || watchedEvent === event.type) {
              var $this = $(this),
                  target = slider.controlNav.index($this);

              if (!$this.hasClass(namespace + 'active')) {
                slider.direction = (target > slider.currentSlide) ? "next" : "prev";
                slider.flexAnimate(target, slider.vars.pauseOnAction);
              }
            }

            // setup flags to prevent event duplication
            if (watchedEvent === "") {
              watchedEvent = event.type;
            }
            methods.setToClearWatchedEvent();

          });
        },
        setupManual: function() {
          slider.controlNav = slider.manualControls;
          methods.controlNav.active();

          slider.controlNav.bind(eventType, function(event) {
            event.preventDefault();

            if (watchedEvent === "" || watchedEvent === event.type) {
              var $this = $(this),
                  target = slider.controlNav.index($this);

              if (!$this.hasClass(namespace + 'active')) {
                (target > slider.currentSlide) ? slider.direction = "next" : slider.direction = "prev";
                slider.flexAnimate(target, slider.vars.pauseOnAction);
              }
            }

            // setup flags to prevent event duplication
            if (watchedEvent === "") {
              watchedEvent = event.type;
            }
            methods.setToClearWatchedEvent();
          });
        },
        set: function() {
          var selector = (slider.vars.controlNav === "thumbnails") ? 'img' : 'a';
          slider.controlNav = $('.' + namespace + 'control-nav li ' + selector, (slider.controlsContainer) ? slider.controlsContainer : slider);
        },
        active: function() {
          slider.controlNav.removeClass(namespace + "active").eq(slider.animatingTo).addClass(namespace + "active");
        },
        update: function(action, pos) {
          if (slider.pagingCount > 1 && action === "add") {
            slider.controlNavScaffold.append($('<li><a href="#">' + slider.count + '</a></li>'));
          } else if (slider.pagingCount === 1) {
            slider.controlNavScaffold.find('li').remove();
          } else {
            slider.controlNav.eq(pos).closest('li').remove();
          }
          methods.controlNav.set();
          (slider.pagingCount > 1 && slider.pagingCount !== slider.controlNav.length) ? slider.update(pos, action) : methods.controlNav.active();
        }
      },
      directionNav: {
        setup: function() {
          var directionNavScaffold = $('<ul class="' + namespace + 'direction-nav"><li class="' + namespace + 'nav-prev"><a class="' + namespace + 'prev" href="#">' + slider.vars.prevText + '</a></li><li class="' + namespace + 'nav-next"><a class="' + namespace + 'next" href="#">' + slider.vars.nextText + '</a></li></ul>');

          // CUSTOM DIRECTION NAV:
          if (slider.customDirectionNav) {
            slider.directionNav = slider.customDirectionNav;
          // CONTROLSCONTAINER:
          } else if (slider.controlsContainer) {
            $(slider.controlsContainer).append(directionNavScaffold);
            slider.directionNav = $('.' + namespace + 'direction-nav li a', slider.controlsContainer);
          } else {
            slider.append(directionNavScaffold);
            slider.directionNav = $('.' + namespace + 'direction-nav li a', slider);
          }

          methods.directionNav.update();

          slider.directionNav.bind(eventType, function(event) {
            event.preventDefault();
            var target;

            if (watchedEvent === "" || watchedEvent === event.type) {
              target = ($(this).hasClass(namespace + 'next')) ? slider.getTarget('next') : slider.getTarget('prev');
              slider.flexAnimate(target, slider.vars.pauseOnAction);
            }

            // setup flags to prevent event duplication
            if (watchedEvent === "") {
              watchedEvent = event.type;
            }
            methods.setToClearWatchedEvent();
          });
        },
        update: function() {
          var disabledClass = namespace + 'disabled';
          if (slider.pagingCount === 1) {
            slider.directionNav.addClass(disabledClass).attr('tabindex', '-1');
          } else if (!slider.vars.animationLoop) {
            if (slider.animatingTo === 0) {
              slider.directionNav.removeClass(disabledClass).filter('.' + namespace + "prev").addClass(disabledClass).attr('tabindex', '-1');
            } else if (slider.animatingTo === slider.last) {
              slider.directionNav.removeClass(disabledClass).filter('.' + namespace + "next").addClass(disabledClass).attr('tabindex', '-1');
            } else {
              slider.directionNav.removeClass(disabledClass).removeAttr('tabindex');
            }
          } else {
            slider.directionNav.removeClass(disabledClass).removeAttr('tabindex');
          }
        }
      },
      pausePlay: {
        setup: function() {
          var pausePlayScaffold = $('<div class="' + namespace + 'pauseplay"><a href="#"></a></div>');

          // CONTROLSCONTAINER:
          if (slider.controlsContainer) {
            slider.controlsContainer.append(pausePlayScaffold);
            slider.pausePlay = $('.' + namespace + 'pauseplay a', slider.controlsContainer);
          } else {
            slider.append(pausePlayScaffold);
            slider.pausePlay = $('.' + namespace + 'pauseplay a', slider);
          }

          methods.pausePlay.update((slider.vars.slideshow) ? namespace + 'pause' : namespace + 'play');

          slider.pausePlay.bind(eventType, function(event) {
            event.preventDefault();

            if (watchedEvent === "" || watchedEvent === event.type) {
              if ($(this).hasClass(namespace + 'pause')) {
                slider.manualPause = true;
                slider.manualPlay = false;
                slider.pause();
              } else {
                slider.manualPause = false;
                slider.manualPlay = true;
                slider.play();
              }
            }

            // setup flags to prevent event duplication
            if (watchedEvent === "") {
              watchedEvent = event.type;
            }
            methods.setToClearWatchedEvent();
          });
        },
        update: function(state) {
          (state === "play") ? slider.pausePlay.removeClass(namespace + 'pause').addClass(namespace + 'play').html(slider.vars.playText) : slider.pausePlay.removeClass(namespace + 'play').addClass(namespace + 'pause').html(slider.vars.pauseText);
        }
      },
      touch: function() {
        var startX,
          startY,
          offset,
          cwidth,
          dx,
          startT,
          onTouchStart,
          onTouchMove,
          onTouchEnd,
          scrolling = false,
          localX = 0,
          localY = 0,
          accDx = 0;

        if(!msGesture){
            onTouchStart = function(e) {
              if (slider.animating) {
                e.preventDefault();
              } else if ( ( window.navigator.msPointerEnabled ) || e.touches.length === 1 ) {
                slider.pause();
                // CAROUSEL:
                cwidth = (vertical) ? slider.h : slider. w;
                startT = Number(new Date());
                // CAROUSEL:

                // Local vars for X and Y points.
                localX = e.touches[0].pageX;
                localY = e.touches[0].pageY;

                offset = (carousel && reverse && slider.animatingTo === slider.last) ? 0 :
                         (carousel && reverse) ? slider.limit - (((slider.itemW + slider.vars.itemMargin) * slider.move) * slider.animatingTo) :
                         (carousel && slider.currentSlide === slider.last) ? slider.limit :
                         (carousel) ? ((slider.itemW + slider.vars.itemMargin) * slider.move) * slider.currentSlide :
                         (reverse) ? (slider.last - slider.currentSlide + slider.cloneOffset) * cwidth : (slider.currentSlide + slider.cloneOffset) * cwidth;
                startX = (vertical) ? localY : localX;
                startY = (vertical) ? localX : localY;
                el.addEventListener('touchmove', onTouchMove, false);
                el.addEventListener('touchend', onTouchEnd, false);
              }
            };

            onTouchMove = function(e) {
              // Local vars for X and Y points.

              localX = e.touches[0].pageX;
              localY = e.touches[0].pageY;

              dx = (vertical) ? startX - localY : (slider.vars.rtl?-1:1)*(startX - localX);
              scrolling = (vertical) ? (Math.abs(dx) < Math.abs(localX - startY)) : (Math.abs(dx) < Math.abs(localY - startY));
              var fxms = 500;

              if ( ! scrolling || Number( new Date() ) - startT > fxms ) {
                e.preventDefault();
                if (!fade && slider.transitions) {
                  if (!slider.vars.animationLoop) {
                    dx = dx/((slider.currentSlide === 0 && dx < 0 || slider.currentSlide === slider.last && dx > 0) ? (Math.abs(dx)/cwidth+2) : 1);
                  }
                  slider.setProps(offset + dx, "setTouch");
                }
              }
            };

            onTouchEnd = function(e) {
              // finish the touch by undoing the touch session
              el.removeEventListener('touchmove', onTouchMove, false);

              if (slider.animatingTo === slider.currentSlide && !scrolling && !(dx === null)) {
                var updateDx = (reverse) ? -dx : dx,
                    target = (updateDx > 0) ? slider.getTarget('next') : slider.getTarget('prev');

                if (slider.canAdvance(target) && (Number(new Date()) - startT < 550 && Math.abs(updateDx) > 50 || Math.abs(updateDx) > cwidth/2)) {
                  slider.flexAnimate(target, slider.vars.pauseOnAction);
                } else {
                  if (!fade) { slider.flexAnimate(slider.currentSlide, slider.vars.pauseOnAction, true); }
                }
              }
              el.removeEventListener('touchend', onTouchEnd, false);

              startX = null;
              startY = null;
              dx = null;
              offset = null;
            };

            el.addEventListener('touchstart', onTouchStart, false);
        }else{
            el.style.msTouchAction = "none";
            el._gesture = new MSGesture();
            el._gesture.target = el;
            el.addEventListener("MSPointerDown", onMSPointerDown, false);
            el._slider = slider;
            el.addEventListener("MSGestureChange", onMSGestureChange, false);
            el.addEventListener("MSGestureEnd", onMSGestureEnd, false);

            function onMSPointerDown(e){
                e.stopPropagation();
                if (slider.animating) {
                    e.preventDefault();
                }else{
                    slider.pause();
                    el._gesture.addPointer(e.pointerId);
                    accDx = 0;
                    cwidth = (vertical) ? slider.h : slider. w;
                    startT = Number(new Date());
                    // CAROUSEL:

                    offset = (carousel && reverse && slider.animatingTo === slider.last) ? 0 :
                        (carousel && reverse) ? slider.limit - (((slider.itemW + slider.vars.itemMargin) * slider.move) * slider.animatingTo) :
                            (carousel && slider.currentSlide === slider.last) ? slider.limit :
                                (carousel) ? ((slider.itemW + slider.vars.itemMargin) * slider.move) * slider.currentSlide :
                                    (reverse) ? (slider.last - slider.currentSlide + slider.cloneOffset) * cwidth : (slider.currentSlide + slider.cloneOffset) * cwidth;
                }
            }

            function onMSGestureChange(e) {
                e.stopPropagation();
                var slider = e.target._slider;
                if(!slider){
                    return;
                }
                var transX = -e.translationX,
                    transY = -e.translationY;

                //Accumulate translations.
                accDx = accDx + ((vertical) ? transY : transX);
                dx = (slider.vars.rtl?-1:1)*accDx;
                scrolling = (vertical) ? (Math.abs(accDx) < Math.abs(-transX)) : (Math.abs(accDx) < Math.abs(-transY));

                if(e.detail === e.MSGESTURE_FLAG_INERTIA){
                    setImmediate(function (){
                        el._gesture.stop();
                    });

                    return;
                }

                if (!scrolling || Number(new Date()) - startT > 500) {
                    e.preventDefault();
                    if (!fade && slider.transitions) {
                        if (!slider.vars.animationLoop) {
                            dx = accDx / ((slider.currentSlide === 0 && accDx < 0 || slider.currentSlide === slider.last && accDx > 0) ? (Math.abs(accDx) / cwidth + 2) : 1);
                        }
                        slider.setProps(offset + dx, "setTouch");
                    }
                }
            }

            function onMSGestureEnd(e) {
                e.stopPropagation();
                var slider = e.target._slider;
                if(!slider){
                    return;
                }
                if (slider.animatingTo === slider.currentSlide && !scrolling && !(dx === null)) {
                    var updateDx = (reverse) ? -dx : dx,
                        target = (updateDx > 0) ? slider.getTarget('next') : slider.getTarget('prev');

                    if (slider.canAdvance(target) && (Number(new Date()) - startT < 550 && Math.abs(updateDx) > 50 || Math.abs(updateDx) > cwidth/2)) {
                        slider.flexAnimate(target, slider.vars.pauseOnAction);
                    } else {
                        if (!fade) { slider.flexAnimate(slider.currentSlide, slider.vars.pauseOnAction, true); }
                    }
                }

                startX = null;
                startY = null;
                dx = null;
                offset = null;
                accDx = 0;
            }
        }
      },
      resize: function() {
        if (!slider.animating && slider.is(':visible')) {
          if (!carousel) { slider.doMath(); }

          if (fade) {
            // SMOOTH HEIGHT:
            methods.smoothHeight();
          } else if (carousel) { //CAROUSEL:
            slider.slides.width(slider.computedW);
            slider.update(slider.pagingCount);
            slider.setProps();
          }
          else if (vertical) { //VERTICAL:
            slider.viewport.height(slider.h);
            slider.setProps(slider.h, "setTotal");
          } else {
            // SMOOTH HEIGHT:
            if (slider.vars.smoothHeight) { methods.smoothHeight(); }
            slider.newSlides.width(slider.computedW);
            slider.setProps(slider.computedW, "setTotal");
          }
        }
      },
      smoothHeight: function(dur) {
        if (!vertical || fade) {
          var $obj = (fade) ? slider : slider.viewport;
          (dur) ? $obj.animate({"height": slider.slides.eq(slider.animatingTo).innerHeight()}, dur) : $obj.innerHeight(slider.slides.eq(slider.animatingTo).innerHeight());
        }
      },
      sync: function(action) {
        var $obj = $(slider.vars.sync).data("flexslider"),
            target = slider.animatingTo;

        switch (action) {
          case "animate": $obj.flexAnimate(target, slider.vars.pauseOnAction, false, true); break;
          case "play": if (!$obj.playing && !$obj.asNav) { $obj.play(); } break;
          case "pause": $obj.pause(); break;
        }
      },
      uniqueID: function($clone) {
        // Append _clone to current level and children elements with id attributes
        $clone.filter( '[id]' ).add($clone.find( '[id]' )).each(function() {
          var $this = $(this);
          $this.attr( 'id', $this.attr( 'id' ) + '_clone' );
        });
        return $clone;
      },
      pauseInvisible: {
        visProp: null,
        init: function() {
          var visProp = methods.pauseInvisible.getHiddenProp();
          if (visProp) {
            var evtname = visProp.replace(/[H|h]idden/,'') + 'visibilitychange';
            document.addEventListener(evtname, function() {
              if (methods.pauseInvisible.isHidden()) {
                if(slider.startTimeout) {
                  clearTimeout(slider.startTimeout); //If clock is ticking, stop timer and prevent from starting while invisible
                } else {
                  slider.pause(); //Or just pause
                }
              }
              else {
                if(slider.started) {
                  slider.play(); //Initiated before, just play
                } else {
                  if (slider.vars.initDelay > 0) {
                    setTimeout(slider.play, slider.vars.initDelay);
                  } else {
                    slider.play(); //Didn't init before: simply init or wait for it
                  }
                }
              }
            });
          }
        },
        isHidden: function() {
          var prop = methods.pauseInvisible.getHiddenProp();
          if (!prop) {
            return false;
          }
          return document[prop];
        },
        getHiddenProp: function() {
          var prefixes = ['webkit','moz','ms','o'];
          // if 'hidden' is natively supported just return it
          if ('hidden' in document) {
            return 'hidden';
          }
          // otherwise loop over all the known prefixes until we find one
          for ( var i = 0; i < prefixes.length; i++ ) {
              if ((prefixes[i] + 'Hidden') in document) {
                return prefixes[i] + 'Hidden';
              }
          }
          // otherwise it's not supported
          return null;
        }
      },
      setToClearWatchedEvent: function() {
        clearTimeout(watchedEventClearTimer);
        watchedEventClearTimer = setTimeout(function() {
          watchedEvent = "";
        }, 3000);
      }
    };

    // public methods
    slider.flexAnimate = function(target, pause, override, withSync, fromNav) {
      if (!slider.vars.animationLoop && target !== slider.currentSlide) {
        slider.direction = (target > slider.currentSlide) ? "next" : "prev";
      }

      if (asNav && slider.pagingCount === 1) slider.direction = (slider.currentItem < target) ? "next" : "prev";

      if (!slider.animating && (slider.canAdvance(target, fromNav) || override) && slider.is(":visible")) {
        if (asNav && withSync) {
          var master = $(slider.vars.asNavFor).data('flexslider');
          slider.atEnd = target === 0 || target === slider.count - 1;
          master.flexAnimate(target, true, false, true, fromNav);
          slider.direction = (slider.currentItem < target) ? "next" : "prev";
          master.direction = slider.direction;

          if (Math.ceil((target + 1)/slider.visible) - 1 !== slider.currentSlide && target !== 0) {
            slider.currentItem = target;
            slider.slides.removeClass(namespace + "active-slide").eq(target).addClass(namespace + "active-slide");
            target = Math.floor(target/slider.visible);
          } else {
            slider.currentItem = target;
            slider.slides.removeClass(namespace + "active-slide").eq(target).addClass(namespace + "active-slide");
            return false;
          }
        }

        slider.animating = true;
        slider.animatingTo = target;

        // SLIDESHOW:
        if (pause) { slider.pause(); }

        // API: before() animation Callback
        slider.vars.before(slider);

        // SYNC:
        if (slider.syncExists && !fromNav) { methods.sync("animate"); }

        // CONTROLNAV
        if (slider.vars.controlNav) { methods.controlNav.active(); }

        // !CAROUSEL:
        // CANDIDATE: slide active class (for add/remove slide)
        if (!carousel) { slider.slides.removeClass(namespace + 'active-slide').eq(target).addClass(namespace + 'active-slide'); }

        // INFINITE LOOP:
        // CANDIDATE: atEnd
        slider.atEnd = target === 0 || target === slider.last;

        // DIRECTIONNAV:
        if (slider.vars.directionNav) { methods.directionNav.update(); }

        if (target === slider.last) {
          // API: end() of cycle Callback
          slider.vars.end(slider);
          // SLIDESHOW && !INFINITE LOOP:
          if (!slider.vars.animationLoop) { slider.pause(); }
        }

        // SLIDE:
        if (!fade) {
          var dimension = (vertical) ? slider.slides.filter(':first').height() : slider.computedW,
              margin, slideString, calcNext;

          // INFINITE LOOP / REVERSE:
          if (carousel) {
            margin = slider.vars.itemMargin;
            calcNext = ((slider.itemW + margin) * slider.move) * slider.animatingTo;
            slideString = (calcNext > slider.limit && slider.visible !== 1) ? slider.limit : calcNext;
          } else if (slider.currentSlide === 0 && target === slider.count - 1 && slider.vars.animationLoop && slider.direction !== "next") {
            slideString = (reverse) ? (slider.count + slider.cloneOffset) * dimension : 0;
          } else if (slider.currentSlide === slider.last && target === 0 && slider.vars.animationLoop && slider.direction !== "prev") {
            slideString = (reverse) ? 0 : (slider.count + 1) * dimension;
          } else {
            slideString = (reverse) ? ((slider.count - 1) - target + slider.cloneOffset) * dimension : (target + slider.cloneOffset) * dimension;
          }
          slider.setProps(slideString, "", slider.vars.animationSpeed);
          if (slider.transitions) {
            if (!slider.vars.animationLoop || !slider.atEnd) {
              slider.animating = false;
              slider.currentSlide = slider.animatingTo;
            }

            // Unbind previous transitionEnd events and re-bind new transitionEnd event
            slider.container.unbind("webkitTransitionEnd transitionend");
            slider.container.bind("webkitTransitionEnd transitionend", function() {
              clearTimeout(slider.ensureAnimationEnd);
              slider.wrapup(dimension);
            });

            // Insurance for the ever-so-fickle transitionEnd event
            clearTimeout(slider.ensureAnimationEnd);
            slider.ensureAnimationEnd = setTimeout(function() {
              slider.wrapup(dimension);
            }, slider.vars.animationSpeed + 100);

          } else {
            slider.container.animate(slider.args, slider.vars.animationSpeed, slider.vars.easing, function(){
              slider.wrapup(dimension);
            });
          }
        } else { // FADE:
          if (!touch) {
            slider.slides.eq(slider.currentSlide).css({"zIndex": 1}).animate({"opacity": 0}, slider.vars.animationSpeed, slider.vars.easing);
            slider.slides.eq(target).css({"zIndex": 2}).animate({"opacity": 1}, slider.vars.animationSpeed, slider.vars.easing, slider.wrapup);
          } else {
            slider.slides.eq(slider.currentSlide).css({ "opacity": 0, "zIndex": 1 });
            slider.slides.eq(target).css({ "opacity": 1, "zIndex": 2 });
            slider.wrapup(dimension);
          }
        }
        // SMOOTH HEIGHT:
        if (slider.vars.smoothHeight) { methods.smoothHeight(slider.vars.animationSpeed); }
      }
    };
    slider.wrapup = function(dimension) {
      // SLIDE:
      if (!fade && !carousel) {
        if (slider.currentSlide === 0 && slider.animatingTo === slider.last && slider.vars.animationLoop) {
          slider.setProps(dimension, "jumpEnd");
        } else if (slider.currentSlide === slider.last && slider.animatingTo === 0 && slider.vars.animationLoop) {
          slider.setProps(dimension, "jumpStart");
        }
      }
      slider.animating = false;
      slider.currentSlide = slider.animatingTo;
      // API: after() animation Callback
      slider.vars.after(slider);
    };

    // SLIDESHOW:
    slider.animateSlides = function() {
      if (!slider.animating && focused ) { slider.flexAnimate(slider.getTarget("next")); }
    };
    // SLIDESHOW:
    slider.pause = function() {
      clearInterval(slider.animatedSlides);
      slider.animatedSlides = null;
      slider.playing = false;
      // PAUSEPLAY:
      if (slider.vars.pausePlay) { methods.pausePlay.update("play"); }
      // SYNC:
      if (slider.syncExists) { methods.sync("pause"); }
    };
    // SLIDESHOW:
    slider.play = function() {
      if (slider.playing) { clearInterval(slider.animatedSlides); }
      slider.animatedSlides = slider.animatedSlides || setInterval(slider.animateSlides, slider.vars.slideshowSpeed);
      slider.started = slider.playing = true;
      // PAUSEPLAY:
      if (slider.vars.pausePlay) { methods.pausePlay.update("pause"); }
      // SYNC:
      if (slider.syncExists) { methods.sync("play"); }
    };
    // STOP:
    slider.stop = function () {
      slider.pause();
      slider.stopped = true;
    };
    slider.canAdvance = function(target, fromNav) {
      // ASNAV:
      var last = (asNav) ? slider.pagingCount - 1 : slider.last;
      return (fromNav) ? true :
             (asNav && slider.currentItem === slider.count - 1 && target === 0 && slider.direction === "prev") ? true :
             (asNav && slider.currentItem === 0 && target === slider.pagingCount - 1 && slider.direction !== "next") ? false :
             (target === slider.currentSlide && !asNav) ? false :
             (slider.vars.animationLoop) ? true :
             (slider.atEnd && slider.currentSlide === 0 && target === last && slider.direction !== "next") ? false :
             (slider.atEnd && slider.currentSlide === last && target === 0 && slider.direction === "next") ? false :
             true;
    };
    slider.getTarget = function(dir) {
      slider.direction = dir;
      if (dir === "next") {
        return (slider.currentSlide === slider.last) ? 0 : slider.currentSlide + 1;
      } else {
        return (slider.currentSlide === 0) ? slider.last : slider.currentSlide - 1;
      }
    };

    // SLIDE:
    slider.setProps = function(pos, special, dur) {
      var target = (function() {
        var posCheck = (pos) ? pos : ((slider.itemW + slider.vars.itemMargin) * slider.move) * slider.animatingTo,
            posCalc = (function() {
              if (carousel) {
                return (special === "setTouch") ? pos :
                       (reverse && slider.animatingTo === slider.last) ? 0 :
                       (reverse) ? slider.limit - (((slider.itemW + slider.vars.itemMargin) * slider.move) * slider.animatingTo) :
                       (slider.animatingTo === slider.last) ? slider.limit : posCheck;
              } else {
                switch (special) {
                  case "setTotal": return (reverse) ? ((slider.count - 1) - slider.currentSlide + slider.cloneOffset) * pos : (slider.currentSlide + slider.cloneOffset) * pos;
                  case "setTouch": return (reverse) ? pos : pos;
                  case "jumpEnd": return (reverse) ? pos : slider.count * pos;
                  case "jumpStart": return (reverse) ? slider.count * pos : pos;
                  default: return pos;
                }
              }
            }());

            return (posCalc * ((slider.vars.rtl)?1:-1)) + "px";
          }());

      if (slider.transitions) {
        if (slider.isFirefox) {
          target = (vertical) ? "translate3d(0," + target + ",0)" : "translate3d(" + (parseInt(target)+'px') + ",0,0)";
        } else {
          target = (vertical) ? "translate3d(0," + target + ",0)" : "translate3d(" + ((slider.vars.rtl?-1:1)*parseInt(target)+'px') + ",0,0)";
        }
        dur = (dur !== undefined) ? (dur/1000) + "s" : "0s";
        slider.container.css("-" + slider.pfx + "-transition-duration", dur);
         slider.container.css("transition-duration", dur);
      }

      slider.args[slider.prop] = target;
      if (slider.transitions || dur === undefined) { slider.container.css(slider.args); }

      slider.container.css('transform',target);
    };

    slider.setup = function(type) {
      // SLIDE:
      if (!fade) {
        var sliderOffset, arr;

        if (type === "init") {
          slider.viewport = $('<div class="' + namespace + 'viewport"></div>').css({"overflow": "hidden", "position": "relative"}).appendTo(slider).append(slider.container);
          // INFINITE LOOP:
          slider.cloneCount = 0;
          slider.cloneOffset = 0;
          // REVERSE:
          if (reverse) {
            arr = $.makeArray(slider.slides).reverse();
            slider.slides = $(arr);
            slider.container.empty().append(slider.slides);
          }
        }
        // INFINITE LOOP && !CAROUSEL:
        if (slider.vars.animationLoop && !carousel) {
          slider.cloneCount = 2;
          slider.cloneOffset = 1;
          // clear out old clones
          if (type !== "init") { slider.container.find('.clone').remove(); }
          slider.container.append(methods.uniqueID(slider.slides.first().clone().addClass('clone')).attr('aria-hidden', 'true'))
                          .prepend(methods.uniqueID(slider.slides.last().clone().addClass('clone')).attr('aria-hidden', 'true'));
        }
        slider.newSlides = $(slider.vars.selector, slider);

        sliderOffset = (reverse) ? slider.count - 1 - slider.currentSlide + slider.cloneOffset : slider.currentSlide + slider.cloneOffset;
        // VERTICAL:
        if (vertical && !carousel) {
          slider.container.height((slider.count + slider.cloneCount) * 200 + "%").css("position", "absolute").width("100%");
          setTimeout(function(){
            slider.newSlides.css({"display": "block"});
            slider.doMath();
            slider.viewport.height(slider.h);
            slider.setProps(sliderOffset * slider.h, "init");
          }, (type === "init") ? 100 : 0);
        } else {
          slider.container.width((slider.count + slider.cloneCount) * 200 + "%");
          slider.setProps(sliderOffset * slider.computedW, "init");
          setTimeout(function(){
            slider.doMath();
          if(slider.vars.rtl){
            if (slider.isFirefox) {
              slider.newSlides.css({"width": slider.computedW, "marginRight" : slider.computedM, "float": "right", "display": "block"});
            } else {
              slider.newSlides.css({"width": slider.computedW, "marginRight" : slider.computedM, "float": "left", "display": "block"});
            }
              
           }
            else{
              slider.newSlides.css({"width": slider.computedW, "marginRight" : slider.computedM, "float": "left", "display": "block"});
            }
            // SMOOTH HEIGHT:
            if (slider.vars.smoothHeight) { methods.smoothHeight(); }
          }, (type === "init") ? 100 : 0);
        }
      } else { // FADE:
        if(slider.vars.rtl){
          slider.slides.css({"width": "100%", "float": 'right', "marginLeft": "-100%", "position": "relative"});
        }
        else{
          slider.slides.css({"width": "100%", "float": 'left', "marginRight": "-100%", "position": "relative"});
        }
        if (type === "init") {
          if (!touch) {
            //slider.slides.eq(slider.currentSlide).fadeIn(slider.vars.animationSpeed, slider.vars.easing);
            if (slider.vars.fadeFirstSlide == false) {
              slider.slides.css({ "opacity": 0, "display": "block", "zIndex": 1 }).eq(slider.currentSlide).css({"zIndex": 2}).css({"opacity": 1});
            } else {
              slider.slides.css({ "opacity": 0, "display": "block", "zIndex": 1 }).eq(slider.currentSlide).css({"zIndex": 2}).animate({"opacity": 1},slider.vars.animationSpeed,slider.vars.easing);
            }
          } else {
            slider.slides.css({ "opacity": 0, "display": "block", "webkitTransition": "opacity " + slider.vars.animationSpeed / 1000 + "s ease", "zIndex": 1 }).eq(slider.currentSlide).css({ "opacity": 1, "zIndex": 2});
          }
        }
        // SMOOTH HEIGHT:
        if (slider.vars.smoothHeight) { methods.smoothHeight(); }
      }
      // !CAROUSEL:
      // CANDIDATE: active slide
      if (!carousel) { slider.slides.removeClass(namespace + "active-slide").eq(slider.currentSlide).addClass(namespace + "active-slide"); }

      //FlexSlider: init() Callback
      slider.vars.init(slider);
    };

    slider.doMath = function() {
      var slide = slider.slides.first(),
          slideMargin = slider.vars.itemMargin,
          minItems = slider.vars.minItems,
          maxItems = slider.vars.maxItems;

      slider.w = (slider.viewport===undefined) ? slider.width() : slider.viewport.width();
      if (slider.isFirefox) { slider.w = slider.width(); }
      slider.h = slide.height();
      slider.boxPadding = slide.outerWidth() - slide.width();

      // CAROUSEL:
      if (carousel) {
        slider.itemT = slider.vars.itemWidth + slideMargin;
        slider.itemM = slideMargin;
        slider.minW = (minItems) ? minItems * slider.itemT : slider.w;
        slider.maxW = (maxItems) ? (maxItems * slider.itemT) - slideMargin : slider.w;
        slider.itemW = (slider.minW > slider.w) ? (slider.w - (slideMargin * (minItems - 1)))/minItems :
                       (slider.maxW < slider.w) ? (slider.w - (slideMargin * (maxItems - 1)))/maxItems :
                       (slider.vars.itemWidth > slider.w) ? slider.w : slider.vars.itemWidth;

        slider.visible = Math.floor(slider.w/(slider.itemW));
        slider.move = (slider.vars.move > 0 && slider.vars.move < slider.visible ) ? slider.vars.move : slider.visible;
        slider.pagingCount = Math.ceil(((slider.count - slider.visible)/slider.move) + 1);
        slider.last =  slider.pagingCount - 1;
        slider.limit = (slider.pagingCount === 1) ? 0 :
                       (slider.vars.itemWidth > slider.w) ? (slider.itemW * (slider.count - 1)) + (slideMargin * (slider.count - 1)) : ((slider.itemW + slideMargin) * slider.count) - slider.w - slideMargin;
      } else {
        slider.itemW = slider.w;
        slider.itemM = slideMargin;
        slider.pagingCount = slider.count;
        slider.last = slider.count - 1;
      }
      slider.computedW = slider.itemW - slider.boxPadding;
      slider.computedM = slider.itemM;
    };

    slider.update = function(pos, action) {
      slider.doMath();

      // update currentSlide and slider.animatingTo if necessary
      if (!carousel) {
        if (pos < slider.currentSlide) {
          slider.currentSlide += 1;
        } else if (pos <= slider.currentSlide && pos !== 0) {
          slider.currentSlide -= 1;
        }
        slider.animatingTo = slider.currentSlide;
      }

      // update controlNav
      if (slider.vars.controlNav && !slider.manualControls) {
        if ((action === "add" && !carousel) || slider.pagingCount > slider.controlNav.length) {
          methods.controlNav.update("add");
        } else if ((action === "remove" && !carousel) || slider.pagingCount < slider.controlNav.length) {
          if (carousel && slider.currentSlide > slider.last) {
            slider.currentSlide -= 1;
            slider.animatingTo -= 1;
          }
          methods.controlNav.update("remove", slider.last);
        }
      }
      // update directionNav
      if (slider.vars.directionNav) { methods.directionNav.update(); }

    };

    slider.addSlide = function(obj, pos) {
      var $obj = $(obj);

      slider.count += 1;
      slider.last = slider.count - 1;

      // append new slide
      if (vertical && reverse) {
        (pos !== undefined) ? slider.slides.eq(slider.count - pos).after($obj) : slider.container.prepend($obj);
      } else {
        (pos !== undefined) ? slider.slides.eq(pos).before($obj) : slider.container.append($obj);
      }

      // update currentSlide, animatingTo, controlNav, and directionNav
      slider.update(pos, "add");

      // update slider.slides
      slider.slides = $(slider.vars.selector + ':not(.clone)', slider);
      // re-setup the slider to accomdate new slide
      slider.setup();

      //FlexSlider: added() Callback
      slider.vars.added(slider);
    };
    slider.removeSlide = function(obj) {
      var pos = (isNaN(obj)) ? slider.slides.index($(obj)) : obj;

      // update count
      slider.count -= 1;
      slider.last = slider.count - 1;

      // remove slide
      if (isNaN(obj)) {
        $(obj, slider.slides).remove();
      } else {
        (vertical && reverse) ? slider.slides.eq(slider.last).remove() : slider.slides.eq(obj).remove();
      }

      // update currentSlide, animatingTo, controlNav, and directionNav
      slider.doMath();
      slider.update(pos, "remove");

      // update slider.slides
      slider.slides = $(slider.vars.selector + ':not(.clone)', slider);
      // re-setup the slider to accomdate new slide
      slider.setup();

      // FlexSlider: removed() Callback
      slider.vars.removed(slider);
    };

    //FlexSlider: Initialize
    methods.init();
  };

  // Ensure the slider isn't focussed if the window loses focus.
  $( window ).blur( function ( e ) {
    focused = false;
  }).focus( function ( e ) {
    focused = true;
  });

  //FlexSlider: Default Settings
  $.flexslider.defaults = {
    namespace: "flex-",             //{NEW} String: Prefix string attached to the class of every element generated by the plugin
    selector: ".slides > li",       //{NEW} Selector: Must match a simple pattern. '{container} > {slide}' -- Ignore pattern at your own peril
    animation: "fade",              //String: Select your animation type, "fade" or "slide"
    easing: "swing",                //{NEW} String: Determines the easing method used in jQuery transitions. jQuery easing plugin is supported!
    direction: "horizontal",        //String: Select the sliding direction, "horizontal" or "vertical"
    reverse: false,                 //{NEW} Boolean: Reverse the animation direction
    animationLoop: true,            //Boolean: Should the animation loop? If false, directionNav will received "disable" classes at either end
    smoothHeight: false,            //{NEW} Boolean: Allow height of the slider to animate smoothly in horizontal mode
    startAt: 0,                     //Integer: The slide that the slider should start on. Array notation (0 = first slide)
    slideshow: true,                //Boolean: Animate slider automatically
    slideshowSpeed: 7000,           //Integer: Set the speed of the slideshow cycling, in milliseconds
    animationSpeed: 600,            //Integer: Set the speed of animations, in milliseconds
    initDelay: 0,                   //{NEW} Integer: Set an initialization delay, in milliseconds
    randomize: false,               //Boolean: Randomize slide order
    fadeFirstSlide: true,           //Boolean: Fade in the first slide when animation type is "fade"
    thumbCaptions: false,           //Boolean: Whether or not to put captions on thumbnails when using the "thumbnails" controlNav.

    // Usability features
    pauseOnAction: true,            //Boolean: Pause the slideshow when interacting with control elements, highly recommended.
    pauseOnHover: false,            //Boolean: Pause the slideshow when hovering over slider, then resume when no longer hovering
    pauseInvisible: true,       //{NEW} Boolean: Pause the slideshow when tab is invisible, resume when visible. Provides better UX, lower CPU usage.
    useCSS: true,                   //{NEW} Boolean: Slider will use CSS3 transitions if available
    touch: true,                    //{NEW} Boolean: Allow touch swipe navigation of the slider on touch-enabled devices
    video: false,                   //{NEW} Boolean: If using video in the slider, will prevent CSS3 3D Transforms to avoid graphical glitches

    // Primary Controls
    controlNav: true,               //Boolean: Create navigation for paging control of each slide? Note: Leave true for manualControls usage
    directionNav: true,             //Boolean: Create navigation for previous/next navigation? (true/false)
    prevText: "Previous",           //String: Set the text for the "previous" directionNav item
    nextText: "Next",               //String: Set the text for the "next" directionNav item

    // Secondary Navigation
    keyboard: true,                 //Boolean: Allow slider navigating via keyboard left/right keys
    multipleKeyboard: false,        //{NEW} Boolean: Allow keyboard navigation to affect multiple sliders. Default behavior cuts out keyboard navigation with more than one slider present.
    mousewheel: false,              //{UPDATED} Boolean: Requires jquery.mousewheel.js (https://github.com/brandonaaron/jquery-mousewheel) - Allows slider navigating via mousewheel
    pausePlay: false,               //Boolean: Create pause/play dynamic element
    pauseText: "Pause",             //String: Set the text for the "pause" pausePlay item
    playText: "Play",               //String: Set the text for the "play" pausePlay item

    // Special properties
    controlsContainer: "",          //{UPDATED} jQuery Object/Selector: Declare which container the navigation elements should be appended too. Default container is the FlexSlider element. Example use would be $(".flexslider-container"). Property is ignored if given element is not found.
    manualControls: "",             //{UPDATED} jQuery Object/Selector: Declare custom control navigation. Examples would be $(".flex-control-nav li") or "#tabs-nav li img", etc. The number of elements in your controlNav should match the number of slides/tabs.
    customDirectionNav: "",         //{NEW} jQuery Object/Selector: Custom prev / next button. Must be two jQuery elements. In order to make the events work they have to have the classes "prev" and "next" (plus namespace)
    sync: "",                       //{NEW} Selector: Mirror the actions performed on this slider with another slider. Use with care.
    asNavFor: "",                   //{NEW} Selector: Internal property exposed for turning the slider into a thumbnail navigation for another slider

    // Carousel Options
    itemWidth: 0,                   //{NEW} Integer: Box-model width of individual carousel items, including horizontal borders and padding.
    itemMargin: 0,                  //{NEW} Integer: Margin between carousel items.
    minItems: 1,                    //{NEW} Integer: Minimum number of carousel items that should be visible. Items will resize fluidly when below this.
    maxItems: 0,                    //{NEW} Integer: Maxmimum number of carousel items that should be visible. Items will resize fluidly when above this limit.
    move: 0,                        //{NEW} Integer: Number of carousel items that should move on animation. If 0, slider will move all visible items.
    allowOneSlide: true,           //{NEW} Boolean: Whether or not to allow a slider comprised of a single slide

    // Browser Specific
    isFirefox: false,             // {NEW} Boolean: Set to true when Firefox is the browser used.

    // Callback API
    start: function(){},            //Callback: function(slider) - Fires when the slider loads the first slide
    before: function(){},           //Callback: function(slider) - Fires asynchronously with each slider animation
    after: function(){},            //Callback: function(slider) - Fires after each slider animation completes
    end: function(){},              //Callback: function(slider) - Fires when the slider reaches the last slide (asynchronous)
    added: function(){},            //{NEW} Callback: function(slider) - Fires after a slide is added
    removed: function(){},           //{NEW} Callback: function(slider) - Fires after a slide is removed
    init: function() {},             //{NEW} Callback: function(slider) - Fires after the slider is initially setup
  rtl: false             //{NEW} Boolean: Whether or not to enable RTL mode
  };

  //FlexSlider: Plugin Function
  $.fn.flexslider = function(options) {
    if (options === undefined) { options = {}; }

    if (typeof options === "object") {
      return this.each(function() {
        var $this = $(this),
            selector = (options.selector) ? options.selector : ".slides > li",
            $slides = $this.find(selector);

      if ( ( $slides.length === 1 && options.allowOneSlide === false ) || $slides.length === 0 ) {
          $slides.fadeIn(400);
          if (options.start) { options.start($this); }
        } else if ($this.data('flexslider') === undefined) {
          new $.flexslider(this, options);
        }
      });
    } else {
      // Helper strings to quickly perform functions on the slider
      var $slider = $(this).data('flexslider');
      switch (options) {
        case "play": $slider.play(); break;
        case "pause": $slider.pause(); break;
        case "stop": $slider.stop(); break;
        case "next": $slider.flexAnimate($slider.getTarget("next"), true); break;
        case "prev":
        case "previous": $slider.flexAnimate($slider.getTarget("prev"), true); break;
        default: if (typeof options === "number") { $slider.flexAnimate(options, true); }
      }
    }
  };
})(jQuery);
;
/**
 * @file
 * Loads the FlexSlider library.
 */

(function ($) {

  'use strict';

  Drupal.behaviors.flexslider = {
    attach: function (context, settings) {
      var sliders = [];
      var id;
      if ($.type(settings.flexslider) !== 'undefined' && $.type(settings.flexslider.instances) !== 'undefined') {

        for (id in settings.flexslider.instances) {

          if (settings.flexslider.instances.hasOwnProperty(id)) {
            if ($.type(settings.flexslider.optionsets) !== 'undefined' && settings.flexslider.instances[id] in settings.flexslider.optionsets) {
              if (settings.flexslider.optionsets[settings.flexslider.instances[id]].asNavFor !== '') {
                // We have to initialize all the sliders which are "asNavFor" first.
                _flexslider_init(id, settings.flexslider.optionsets[settings.flexslider.instances[id]], context);
              }
              else {
                // Everyone else is second.
                sliders[id] = settings.flexslider.optionsets[settings.flexslider.instances[id]];
              }
            }
          }
        }
      }
      // Slider set.
      for (id in sliders) {
        if (sliders.hasOwnProperty(id)) {
          _flexslider_init(id, settings.flexslider.optionsets[settings.flexslider.instances[id]], context);
        }
      }
    }
  };

  /**
   * Initialize the flexslider instance.
   *
   * @param {string} id
   * Id selector of the flexslider object.
   * @param {object} optionset
   * The optionset to apply to the flexslider object.
   * @param {object} context
   * The DOM context.
     * @private
     */
  function _flexslider_init(id, optionset, context) {
    $('#' + id, context).once('flexslider').each(function () {
      // Remove width/height attributes.
      // @todo load the css path from the settings
      $(this).find('ul.slides > li > *').removeAttr('width').removeAttr('height');

      if (optionset) {
        // Add events that developers can use to interact.
        $(this).flexslider($.extend(optionset, {
          start: function (slider) {
            slider.trigger('start', [slider]);
          },
          before: function (slider) {
            slider.trigger('before', [slider]);
          },
          after: function (slider) {
            slider.trigger('after', [slider]);
          },
          end: function (slider) {
            slider.trigger('end', [slider]);
          },
          added: function (slider) {
            slider.trigger('added', [slider]);
          },
          removed: function (slider) {
            slider.trigger('removed', [slider]);
          },
          init: function (slider) {
            slider.trigger('init', [slider]);
          }
        }));
      }
      else {
        $(this).flexslider();
      }
    });
  }

}(jQuery));
;
!function (t, e) { "function" == typeof define && define.amd ? define(["jquery"], function (a) { return t.Tablesaw = e(a, t) }) : "object" == typeof exports ? module.exports = e("document" in t ? require("jquery") : require("jquery")(t), t) : t.Tablesaw = e(jQuery, t) }("undefined" != typeof window ? window : this, function (t, e) { "use strict"; var a = e.document, s = /complete|loaded/.test(a.readyState); a.addEventListener("DOMContentLoaded", function () { s = !0 }); var n, i, o, l, r, c, h, d, u, b = { i18n: { modeStack: "Stack", modeSwipe: "Swipe", modeToggle: "Toggle", modeSwitchColumnsAbbreviated: "Cols", modeSwitchColumns: "Columns", columnToggleButton: "Columns", columnToggleError: "No eligible columns.", sort: "Sort", swipePreviousColumn: "Previous column", swipeNextColumn: "Next column" }, mustard: "head" in a && (!e.blackberry || e.WebKitPoint) && !e.operamini, $: t, _init: function (t) { b.$(t || a).trigger("enhance.tablesaw") }, init: function (t) { (s = s || /complete|loaded/.test(a.readyState)) ? b._init(t) : "addEventListener" in a && a.addEventListener("DOMContentLoaded", function () { b._init(t) }) } }; return t(a).on("enhance.tablesaw", function () { "undefined" != typeof TablesawConfig && TablesawConfig.i18n && (b.i18n = t.extend(b.i18n, TablesawConfig.i18n || {})), b.i18n.modes = [b.i18n.modeStack, b.i18n.modeSwipe, b.i18n.modeToggle] }), b.mustard && t(a.documentElement).addClass("tablesaw-enhanced"), function () { var s = "tablesaw-bar", n = { create: "tablesawcreate", destroy: "tablesawdestroy", refresh: "tablesawrefresh", resize: "tablesawresize" }, i = {}; b.events = n; var o = function (e) { if (!e) throw new Error("Tablesaw requires an element."); this.table = e, this.$table = t(e), this.$thead = this.$table.children().filter("thead").eq(0), this.$tbody = this.$table.children().filter("tbody"), this.mode = this.$table.attr("data-tablesaw-mode") || "stack", this.$toolbar = null, this.attributes = { subrow: "data-tablesaw-subrow", ignorerow: "data-tablesaw-ignorerow" }, this.init() }; o.prototype.init = function () { if (!this.$thead.length) throw new Error("tablesaw: a <thead> is required, but none was found."); if (!this.$thead.find("th").length) throw new Error("tablesaw: no header cells found. Are you using <th> inside of <thead>?"); this.$table.attr("id") || this.$table.attr("id", "tablesaw-" + Math.round(1e4 * Math.random())), this.createToolbar(), this._initCells(), this.$table.data("tablesaw", this), this.$table.trigger(n.create, [this]) }, o.prototype.getConfig = function (e) { var a = t.extend(i, e || {}); return t.extend(a, "undefined" != typeof TablesawConfig ? TablesawConfig : {}) }, o.prototype._getPrimaryHeaderRow = function () { return this._getHeaderRows().eq(0) }, o.prototype._getHeaderRows = function () { return this.$thead.children().filter("tr").filter(function () { return !t(this).is("[data-tablesaw-ignorerow]") }) }, o.prototype._getRowIndex = function (t) { return t.prevAll().length }, o.prototype._getHeaderRowIndeces = function () { var e = this, a = []; return this._getHeaderRows().each(function () { a.push(e._getRowIndex(t(this))) }), a }, o.prototype._getPrimaryHeaderCells = function (t) { return (t || this._getPrimaryHeaderRow()).find("th") }, o.prototype._$getCells = function (e) { var a = this; return t(e).add(e.cells).filter(function () { var e = t(this), s = e.parent(), n = e.is("[colspan]"); return !(s.is("[" + a.attributes.subrow + "]") || s.is("[" + a.attributes.ignorerow + "]") && n) }) }, o.prototype._getVisibleColspan = function () { var e = 0; return this._getPrimaryHeaderCells().each(function () { var a = t(this); "none" !== a.css("display") && (e += parseInt(a.attr("colspan"), 10) || 1) }), e }, o.prototype.getColspanForCell = function (e) { var a = this._getVisibleColspan(), s = 0; return e.closest("tr").data("tablesaw-rowspanned") && s++ , e.siblings().each(function () { var e = t(this), a = parseInt(e.attr("colspan"), 10) || 1; "none" !== e.css("display") && (s += a) }), a - s }, o.prototype.isCellInColumn = function (e, a) { return t(e).add(e.cells).filter(function () { return this === a }).length }, o.prototype.updateColspanCells = function (e, a, s) { var n = this, i = n._getPrimaryHeaderRow(); this.$table.find("[rowspan][data-tablesaw-priority]").each(function () { var e = t(this); if ("persist" === e.attr("data-tablesaw-priority")) { var a = e.closest("tr"), s = parseInt(e.attr("rowspan"), 10); s > 1 && ((a = a.next()).data("tablesaw-rowspanned", !0), s--) } }), this.$table.find("[colspan],[data-tablesaw-maxcolspan]").filter(function () { return t(this).closest("tr")[0] !== i[0] }).each(function () { var i = t(this); if (void 0 === s || n.isCellInColumn(a, this)) { var o = n.getColspanForCell(i); e && void 0 !== s && i[0 === o ? "addClass" : "removeClass"](e); var l = parseInt(i.attr("data-tablesaw-maxcolspan"), 10); l ? o > l && (o = l) : i.attr("data-tablesaw-maxcolspan", i.attr("colspan")), i.attr("colspan", o) } }) }, o.prototype._findPrimaryHeadersForCell = function (t) { for (var e = this._getPrimaryHeaderRow(), a = this._getRowIndex(e), s = [], n = 0; n < this.headerMapping.length; n++)if (n !== a) for (var i = 0; i < this.headerMapping[n].length; i++)this.headerMapping[n][i] === t && s.push(this.headerMapping[a][i]); return s }, o.prototype.getRows = function () { var e = this; return this.$table.find("tr").filter(function () { return t(this).closest("table").is(e.$table) }) }, o.prototype.getBodyRows = function (e) { return (e ? t(e) : this.$tbody).children().filter("tr") }, o.prototype.getHeaderCellIndex = function (t) { for (var e = this.headerMapping[0], a = 0; a < e.length; a++)if (e[a] === t) return a; return -1 }, o.prototype._initCells = function () { this.$table.find("[data-tablesaw-maxcolspan]").each(function () { var e = t(this); e.attr("colspan", e.attr("data-tablesaw-maxcolspan")) }); var e = this.getRows(), a = []; e.each(function (t) { a[t] = [] }), e.each(function (e) { var s = 0; t(this).children().each(function () { for (var t = parseInt(this.getAttribute("data-tablesaw-maxcolspan") || this.getAttribute("colspan"), 10), n = parseInt(this.getAttribute("rowspan"), 10); a[e][s];)s++; if (a[e][s] = this, t) for (var i = 0; i < t - 1; i++)s++ , a[e][s] = this; if (n) for (var o = 1; o < n; o++)a[e + o][s] = this; s++ }) }); for (var s = this._getHeaderRowIndeces(), n = 0; n < a[0].length; n++)for (var i = 0, o = s.length; i < o; i++) { var l, r = a[s[i]][n], c = s[i]; for (r.cells || (r.cells = []); c < a.length;)r !== (l = a[c][n]) && r.cells.push(l), c++ } this.headerMapping = a }, o.prototype.refresh = function () { this._initCells(), this.$table.trigger(n.refresh, [this]) }, o.prototype._getToolbarAnchor = function () { var t = this.$table.parent(); return t.is(".tablesaw-overflow") ? t : this.$table }, o.prototype._getToolbar = function (t) { return t || (t = this._getToolbarAnchor()), t.prev().filter("." + s) }, o.prototype.createToolbar = function () { var e = this._getToolbarAnchor(), a = this._getToolbar(e); a.length || (a = t("<div>").addClass(s).insertBefore(e)), this.$toolbar = a, this.mode && this.$toolbar.addClass("tablesaw-mode-" + this.mode) }, o.prototype.destroy = function () { this._getToolbar().each(function () { this.className = this.className.replace(/\btablesaw-mode\-\w*\b/gi, "") }); var s = this.$table.attr("id"); t(a).off("." + s), t(e).off("." + s), this.$table.trigger(n.destroy, [this]), this.$table.removeData("tablesaw") }, t.fn.tablesaw = function () { return this.each(function () { t(this).data("tablesaw") || new o(this) }) }; var l = t(a); l.on("enhance.tablesaw", function (e) { if (b.mustard) { var a = t(e.target); a.parent().length && (a = a.parent()), a.find("table").filter("[data-tablesaw],[data-tablesaw-mode],[data-tablesaw-sortable]").tablesaw() } }); var r, c, h = !1; l.on("scroll.tablesaw", function () { h = !0, e.clearTimeout(r), r = e.setTimeout(function () { h = !1 }, 300) }), t(e).on("resize", function () { h || (e.clearTimeout(c), c = e.setTimeout(function () { l.trigger(n.resize) }, 150)) }), b.Table = o }(), n = "tablesaw-stack", i = "tablesaw-cell-label", o = "tablesaw-cell-content", l = "tablesaw-stack", r = "data-tablesaw-no-labels", c = "data-tablesaw-hide-empty", (h = function (e, a) { this.tablesaw = a, this.$table = t(e), this.labelless = this.$table.is("[" + r + "]"), this.hideempty = this.$table.is("[" + c + "]"), this.$table.data(l, this) }).prototype.init = function () { if (this.$table.addClass(n), !this.labelless) { var e = this; this.$table.find("th, td").filter(function () { return !t(this).closest("thead").length }).filter(function () { return !(t(this).is("[" + r + "]") || t(this).closest("tr").is("[" + r + "]") || e.hideempty && !t(this).html()) }).each(function () { var s = t(a.createElement("b")).addClass(i), n = t(this); t(e.tablesaw._findPrimaryHeadersForCell(this)).each(function (e) { var n = t(this.cloneNode(!0)), i = n.find(".tablesaw-sortable-btn"); n.find(".tablesaw-sortable-arrow").remove(); var o = n.find("[data-tablesaw-checkall]"); if (o.closest("label").remove(), o.length) s = t([]); else { e > 0 && s.append(a.createTextNode(", ")); for (var l, r = i.length ? i[0] : n[0]; l = r.firstChild;)s[0].appendChild(l) } }), s.length && !n.find("." + o).length && n.wrapInner("<span class='" + o + "'></span>"); var l = n.find("." + i); l.length ? l.replaceWith(s) : (n.prepend(a.createTextNode(" ")), n.prepend(s)) }) } }, h.prototype.destroy = function () { this.$table.removeClass(n), this.$table.find("." + i).remove(), this.$table.find("." + o).each(function () { t(this).replaceWith(t(this.childNodes)) }) }, t(a).on(b.events.create, function (t, e) { "stack" === e.mode && new h(e.table, e).init() }).on(b.events.refresh, function (e, a) { "stack" === a.mode && t(a.table).data(l).init() }).on(b.events.destroy, function (e, a) { "stack" === a.mode && t(a.table).data(l).destroy() }), b.Stack = h, d = { _create: function () { return t(this).each(function () { t(this).trigger("beforecreate.tablesawbtn").tablesawbtn("_init").trigger("create.tablesawbtn") }) }, _init: function () { var e = t(this), a = this.getElementsByTagName("select")[0]; return a && t(this).addClass("btn-select tablesaw-btn-select").tablesawbtn("_select", a), e }, _select: function (e) { var s = function (e, s) { var n, i, o = t(s).find("option"), l = a.createElement("span"), r = !1; if (l.setAttribute("aria-hidden", "true"), l.innerHTML = "&#160;", o.each(function () { this.selected && (l.innerHTML = this.text) }), i = e.childNodes, o.length > 0) { for (var c = 0, h = i.length; c < h; c++)(n = i[c]) && "SPAN" === n.nodeName.toUpperCase() && (e.replaceChild(l, n), r = !0); r || e.insertBefore(l, e.firstChild) } }; s(this, e), t(this).on("change refresh", function () { s(this, e) }) } }, t.fn.tablesawbtn = function (e, a, s, n) { return this.each(function () { return e && "string" == typeof e ? t.fn.tablesawbtn.prototype[e].call(this, a, s, n) : t(this).data("tablesawbtnactive") ? t(this) : (t(this).data("tablesawbtnactive", !0), void t.fn.tablesawbtn.prototype._create.call(this)) }) }, t.extend(t.fn.tablesawbtn.prototype, d), function () { var s = "tablesaw-coltoggle", n = function (e) { this.$table = t(e), this.$table.length && (this.tablesaw = this.$table.data("tablesaw"), this.attributes = { btnTarget: "data-tablesaw-columntoggle-btn-target", set: "data-tablesaw-columntoggle-set" }, this.classes = { columnToggleTable: "tablesaw-columntoggle", columnBtnContain: "tablesaw-columntoggle-btnwrap tablesaw-advance", columnBtn: "tablesaw-columntoggle-btn tablesaw-nav-btn down", popup: "tablesaw-columntoggle-popup", priorityPrefix: "tablesaw-priority-" }, this.set = [], this.$headers = this.tablesaw._getPrimaryHeaderCells(), this.$table.data(s, this)) }; n.prototype.initSet = function () { var e = this.$table.attr(this.attributes.set); if (e) { var a = this.$table[0]; this.set = t("table[" + this.attributes.set + "='" + e + "']").filter(function () { return this !== a }).get() } }, n.prototype.init = function () { if (this.$table.length) { var n, i, o, l, r, c, h = this, d = this.tablesaw.getConfig({ getColumnToggleLabelTemplate: function (t) { return "<label><input type='checkbox' checked>" + t + "</label>" } }); this.$table.addClass(this.classes.columnToggleTable), i = (n = this.$table.attr("id")) + "-popup", c = t("<div class='" + this.classes.columnBtnContain + "'></div>"), o = t("<a href='#" + i + "' class='btn tablesaw-btn btn-micro " + this.classes.columnBtn + "' data-popup-link><span>" + b.i18n.columnToggleButton + "</span></a>"), l = t("<div class='" + this.classes.popup + "' id='" + i + "'></div>"), r = t("<div class='tablesaw-btn-group'></div>"), this.$popup = l; var u = !1; this.$headers.each(function () { var e = t(this), a = e.attr("data-tablesaw-priority"), s = h.tablesaw._$getCells(this); a && "persist" !== a && (s.addClass(h.classes.priorityPrefix + a), t(d.getColumnToggleLabelTemplate(e.text())).appendTo(r).find('input[type="checkbox"]').data("tablesaw-header", this), u = !0) }), u || r.append("<label>" + b.i18n.columnToggleError + "</label>"), r.appendTo(l), r.find('input[type="checkbox"]').on("change", function (e) { var a; (v(e.target), h.set.length) && (t(h.$popup).find("input[type='checkbox']").each(function (t) { if (this === e.target) return a = t, !1 }), t(h.set).each(function () { var n = t(this).data(s).$popup.find("input[type='checkbox']").get(a); n && (n.checked = e.target.checked, v(n)) })) }), o.appendTo(c); var f, p = t(this.$table.attr(this.attributes.btnTarget)); c.appendTo(p.length ? p : this.tablesaw.$toolbar), o.on("click.tablesaw", function (s) { s.preventDefault(), c.is(".visible") ? m() : (c.addClass("visible"), o.removeClass("down").addClass("up"), t(a).off("click." + n, m), e.clearTimeout(f), f = e.setTimeout(function () { t(a).on("click." + n, m) }, 15)) }), l.appendTo(c), this.$menu = r; var w, g = this.$table.closest(".tablesaw-overflow"); if (g.css("-webkit-overflow-scrolling")) g.on("scroll", function () { var a = t(this); e.clearTimeout(w), w = e.setTimeout(function () { a.css("-webkit-overflow-scrolling", "auto"), e.setTimeout(function () { a.css("-webkit-overflow-scrolling", "touch") }, 0) }, 100) }); t(e).on(b.events.resize + "." + n, function () { h.refreshToggle() }), this.initSet(), this.refreshToggle() } function v(t) { var e = t.checked, a = h.getHeaderFromCheckbox(t), s = h.tablesaw._$getCells(a); s[e ? "removeClass" : "addClass"]("tablesaw-toggle-cellhidden"), s[e ? "addClass" : "removeClass"]("tablesaw-toggle-cellvisible"), h.updateColspanCells(a, e), h.$table.trigger("tablesawcolumns") } function m(e) { e && t(e.target).closest("." + h.classes.popup).length || (t(a).off("click." + n), o.removeClass("up").addClass("down"), c.removeClass("visible")) } }, n.prototype.getHeaderFromCheckbox = function (e) { return t(e).data("tablesaw-header") }, n.prototype.refreshToggle = function () { var t = this; this.$menu.find("input").each(function () { var e = t.getHeaderFromCheckbox(this); this.checked = "table-cell" === t.tablesaw._$getCells(e).eq(0).css("display") }), this.updateColspanCells() }, n.prototype.updateColspanCells = function (t, e) { this.tablesaw.updateColspanCells("tablesaw-toggle-cellhidden", t, e) }, n.prototype.destroy = function () { this.$table.removeClass(this.classes.columnToggleTable), this.$table.find("th, td").each(function () { t(this).removeClass("tablesaw-toggle-cellhidden").removeClass("tablesaw-toggle-cellvisible"), this.className = this.className.replace(/\bui\-table\-priority\-\d\b/g, "") }) }, t(a).on(b.events.create, function (t, e) { "columntoggle" === e.mode && new n(e.table).init() }), t(a).on(b.events.destroy, function (e, a) { "columntoggle" === a.mode && t(a.table).data(s).destroy() }), t(a).on(b.events.refresh, function (e, a) { "columntoggle" === a.mode && t(a.table).data(s).refreshToggle() }), b.ColumnToggle = n }(), function () { function e(e) { var a = []; return t(e.childNodes).each(function () { var e = t(this); e.is("input, select") ? a.push(e.val()) : e.is(".tablesaw-cell-label") || a.push((e.text() || "").replace(/^\s+|\s+$/g, "")) }), a.join("") } var s = "tablesaw-sortable", n = "table[data-" + s + "]", i = "[data-" + s + "-switch]", o = { sortCol: "data-tablesaw-sortable-col", defaultCol: "data-tablesaw-sortable-default-col", numericCol: "data-tablesaw-sortable-numeric", subRow: "data-tablesaw-subrow", ignoreRow: "data-tablesaw-ignorerow" }, l = { head: s + "-head", ascend: s + "-ascending", descend: s + "-descending", switcher: s + "-switch", tableToolbar: "tablesaw-bar-section", sortButton: s + "-btn" }, r = { _create: function (e) { return t(this).each(function () { if (t(this).data(s + "-init")) return !1; t(this).data(s + "-init", !0).trigger("beforecreate." + s)[s]("_init", e).trigger("create." + s) }) }, _init: function () { var a, n, r, c = t(this), h = c.data("tablesaw"); function d(e) { t.each(e, function (e, a) { var s = t(a); s.removeAttr(o.defaultCol), s.removeClass(l.ascend), s.removeClass(l.descend) }) } c.addClass(s), a = c.children().filter("thead").find("th[" + o.sortCol + "]"), r = a, t.each(r, function (e, a) { t(a).addClass(l.head) }), function (e, a) { t.each(e, function (e, s) { var n = t("<button class='" + l.sortButton + "'/>"); n.on("click", { col: s }, a), t(s).wrapInner(n).find("button").append("<span class='tablesaw-sortable-arrow'>") }) }(a, function (e) { if (!t(e.target).is("a[href]")) { e.stopPropagation(); var i = t(e.target).closest("[" + o.sortCol + "]"), r = e.data.col, h = a.index(i[0]); d(i.closest("thead").find("th").filter(function () { return this !== i[0] })), i.is("." + l.descend) || !i.is("." + l.ascend) ? (c[s]("sortBy", r, !0), h += "_asc") : (c[s]("sortBy", r), h += "_desc"), n && n.find("select").val(h).trigger("refresh"), e.preventDefault() } }), function (e) { t.each(e, function (e, a) { var s = t(a); s.is("[" + o.defaultCol + "]") && (s.is("." + l.descend) || s.addClass(l.ascend)) }) }(a), c.is(i) && function (a) { n = t("<div>").addClass(l.switcher).addClass(l.tableToolbar); var i = ["<label>" + b.i18n.sort + ":"]; i.push('<span class="btn tablesaw-btn"><select>'), a.each(function (a) { var s = t(this), n = s.is("[" + o.defaultCol + "]"), r = s.is("." + l.descend), c = s.is("[" + o.numericCol + "]"), h = 0; t(this.cells.slice(0, 5)).each(function () { isNaN(parseInt(e(this), 10)) || h++ }); var d = 5 === h; c || s.attr(o.numericCol, d ? "" : "false"), i.push("<option" + (n && !r ? " selected" : "") + ' value="' + a + '_asc">' + s.text() + " " + (d ? "&#x2191;" : "(A-Z)") + "</option>"), i.push("<option" + (n && r ? " selected" : "") + ' value="' + a + '_desc">' + s.text() + " " + (d ? "&#x2193;" : "(Z-A)") + "</option>") }), i.push("</select></span></label>"), n.html(i.join("")); var r = h.$toolbar.children().eq(0); r.length ? n.insertBefore(r) : n.appendTo(h.$toolbar), n.find(".tablesaw-btn").tablesawbtn(), n.find("select").on("change", function () { var e = t(this).val().split("_"), n = a.eq(e[0]); d(n.siblings()), c[s]("sortBy", n.get(0), "asc" === e[1]) }) }(a) }, sortRows: function (a, s, n, i, l) { var r, c = function (a, s) { var n = []; return t.each(a, function (a, i) { for (var l = i.parentNode, r = t(l), c = [], h = r.next(); h.is("[" + o.subRow + "]");)c.push(h[0]), h = h.next(); var d = l.parentNode; r.is("[" + o.subRow + "]") || d === s && n.push({ element: i, cell: e(i), row: l, subrows: c.length ? c : null, ignored: r.is("[" + o.ignoreRow + "]") }) }), n }(i.cells, l), h = t(i).data("tablesaw-sort"); return r = !(!h || "function" != typeof h) && h(n) || function (t, e) { var a = /[^\-\+\d\.]/g; return t ? function (t, s) { return t.ignored || s.ignored ? 0 : e ? parseFloat(t.cell.replace(a, "")) - parseFloat(s.cell.replace(a, "")) : t.cell.toLowerCase() > s.cell.toLowerCase() ? 1 : -1 } : function (t, s) { return t.ignored || s.ignored ? 0 : e ? parseFloat(s.cell.replace(a, "")) - parseFloat(t.cell.replace(a, "")) : t.cell.toLowerCase() < s.cell.toLowerCase() ? 1 : -1 } }(n, t(i).is("[" + o.numericCol + "]") && !t(i).is("[" + o.numericCol + '="false"]')), function (t) { var e, a, s = []; for (e = 0, a = t.length; e < a; e++)s.push(t[e].row), t[e].subrows && s.push(t[e].subrows); return s }(c.sort(r)) }, makeColDefault: function (e, a) { var s = t(e); s.attr(o.defaultCol, "true"), a ? (s.removeClass(l.descend), s.addClass(l.ascend)) : (s.removeClass(l.ascend), s.addClass(l.descend)) }, sortBy: function (e, a) { var n, i = t(this), o = i.data("tablesaw"); o.$tbody.each(function () { var l, r, c, h = t(this), d = o.getBodyRows(this), u = o.headerMapping[0]; for (r = 0, c = u.length; r < c; r++)if (u[r] === e) { n = r; break } for (r = 0, c = (l = i[s]("sortRows", d, n, a, e, this)).length; r < c; r++)h.append(l[r]) }), i[s]("makeColDefault", e, a), i.trigger("tablesaw-sorted") } }; t.fn[s] = function (e) { var a, n = Array.prototype.slice.call(arguments, 1); return e && "string" == typeof e ? void 0 !== (a = t.fn[s].prototype[e].apply(this[0], n)) ? a : t(this) : (t(this).data(s + "-active") || (t(this).data(s + "-active", !0), t.fn[s].prototype._create.call(this, e)), t(this)) }, t.extend(t.fn[s].prototype, r), t(a).on(b.events.create, function (t, e) { e.$table.is(n) && e.$table[s]() }) }(), function () { var s = { hideBtn: "disabled", persistWidths: "tablesaw-fix-persist", hiddenCol: "tablesaw-swipe-cellhidden", persistCol: "tablesaw-swipe-cellpersist", allColumnsVisible: "tablesaw-all-cols-visible" }, n = { disableTouchEvents: "data-tablesaw-no-touch", ignorerow: "data-tablesaw-ignorerow", subrow: "data-tablesaw-subrow" }; function i(i, o) { var l = o.data("tablesaw"), r = t("<div class='tablesaw-advance'></div>"), c = t("<a href='#' class='btn tablesaw-nav-btn tablesaw-btn btn-micro left'>" + b.i18n.swipePreviousColumn + "</a>").appendTo(r), h = t("<a href='#' class='btn tablesaw-nav-btn tablesaw-btn btn-micro right'>" + b.i18n.swipeNextColumn + "</a>").appendTo(r), d = i._getPrimaryHeaderCells(), u = d.not('[data-tablesaw-priority="persist"]'), f = [], p = [], w = t(a.head || "head"), g = o.attr("id"); if (!d.length) throw new Error("tablesaw swipe: no header cells found."); function v() { o.css({ width: "1px" }), o.find("." + s.hiddenCol).removeClass(s.hiddenCol), f = [], p = [], d.each(function () { var t = this.offsetWidth; f.push(t), y(this) || p.push(t) }), o.css({ width: "" }) } function m(t) { l._$getCells(t).removeClass(s.hiddenCol) } function C(t) { l._$getCells(t).addClass(s.hiddenCol) } function y(e) { return t(e).is('[data-tablesaw-priority="persist"]') } function $() { o.removeClass(s.persistWidths), t("#" + g + "-persist").remove() } function T() { var e, a = []; return u.each(function (n) { var i = t(this), o = "none" === i.css("display") || i.is("." + s.hiddenCol); if (o || e) { if (o && e) return a[1] = n, !1 } else e = !0, a[0] = n }), a } function k() { var t = T(); return [t[1] - 1, t[0] - 1] } function x(t) { return t[1] > -1 && t[1] < u.length } function _() { if (!(a = o.attr("data-tablesaw-swipe-media")) || "matchMedia" in e && e.matchMedia(a).matches) { var a, n = o.parent().width(), i = [], r = 0, c = [], h = d.length; d.each(function (e) { var a = t(this).is('[data-tablesaw-priority="persist"]'); i.push(a), r += f[e], c.push(r), (a || r > n) && h-- }); var u = 0 === h; d.each(function (t) { c[t] > n && C(this) }); var b = !0; d.each(function (t) { if (i[t]) return e = this, l._$getCells(e).addClass(s.persistCol), void (b && (l._$getCells(this).css("width", c[t] + "px"), b = !1)); var e; (c[t] <= n || u) && (u = !1, m(this), l.updateColspanCells(s.hiddenCol, this, !0)) }), $(), o.trigger("tablesawcolumns") } } function M() { B(!0) } function S() { B(!1) } function B(e) { var a; if (x(a = e ? T() : k())) { isNaN(a[0]) && (a[0] = e ? 0 : u.length - 1); var n, i = function () { var e, a = "#" + g + ".tablesaw-swipe ", n = [], i = o.width(), l = i, r = []; if (d.each(function (t) { var e; y(this) && (e = this.offsetWidth, l -= e, e < .75 * i && (r.push(t + "-" + e), n.push(a + " ." + s.persistCol + ":nth-child(" + (t + 1) + ") { width: " + e + "px; }"))) }), e = r.join("_"), n.length) { o.addClass(s.persistWidths); var c = t("#" + g + "-persist"); c.length && c.data("tablesaw-hash") === e || (c.remove(), t("<style>" + n.join("\n") + "</style>").attr("id", g + "-persist").data("tablesaw-hash", e).appendTo(w)) } return l }(), r = a[0], c = a[1], h = u.get(r), b = !1, f = !1; C(h), l.updateColspanCells(s.hiddenCol, h, !0); for (var v = r + (e ? 1 : -1); v >= 0 && v < p.length;) { i -= p[v]; var $ = u.eq(v); $.is(".tablesaw-swipe-cellhidden") ? i > 0 && (b = !0, f = !0, m(n = $.get(0)), l.updateColspanCells(s.hiddenCol, n, !1)) : f = !0, e ? v++ : v-- } f ? !b && x(e ? T() : k()) && B(e) : (m(n = u.get(c)), l.updateColspanCells(s.hiddenCol, n, !1)), o.trigger("tablesawcolumns") } } function H(t, e) { return (t.touches || t.originalEvent.touches)[0][e] } o.addClass("tablesaw-swipe"), v(), r.appendTo(l.$toolbar), g || (g = "tableswipe-" + Math.round(1e4 * Math.random()), o.attr("id", g)), c.add(h).on("click", function (e) { t(e.target).closest(h).length ? M() : S(), e.preventDefault() }), o.is("[" + n.disableTouchEvents + "]") || o.on("touchstart.swipetoggle", function (a) { var s, n, o = H(a, "pageX"), l = H(a, "pageY"), r = e.pageYOffset; t(e).off(b.events.resize, _), t(this).on("touchmove.swipetoggle", function (t) { s = H(t, "pageX"), n = H(t, "pageY") }).on("touchend.swipetoggle", function () { var a = i.getConfig({ swipeHorizontalThreshold: 30, swipeVerticalThreshold: 30 }), c = a.swipe ? a.swipe.verticalThreshold : a.swipeVerticalThreshold, h = a.swipe ? a.swipe.horizontalThreshold : a.swipeHorizontalThreshold, d = Math.abs(e.pageYOffset - r) >= c; Math.abs(n - l) >= c || d || (s - o < -1 * h && M(), s - o > h && S()), e.setTimeout(function () { t(e).on(b.events.resize, _) }, 300), t(this).off("touchmove.swipetoggle touchend.swipetoggle") }) }), o.on("tablesawcolumns.swipetoggle", function () { var t = x(k()), e = x(T()); c[t ? "removeClass" : "addClass"](s.hideBtn), h[e ? "removeClass" : "addClass"](s.hideBtn), l.$toolbar[t || e ? "removeClass" : "addClass"](s.allColumnsVisible) }).on("tablesawnext.swipetoggle", function () { M() }).on("tablesawprev.swipetoggle", function () { S() }).on(b.events.destroy + ".swipetoggle", function () { var a = t(this); a.removeClass("tablesaw-swipe"), l.$toolbar.find(".tablesaw-advance").remove(), t(e).off(b.events.resize, _), a.off(".swipetoggle") }).on(b.events.refresh, function () { $(), v(), _() }), _(), t(e).on(b.events.resize, _) } t(a).on(b.events.create, function (t, e) { "swipe" === e.mode && i(e, e.$table) }) }(), function () { var s = { attr: { init: "data-tablesaw-minimap" }, show: function (t) { var a = t.getAttribute(s.attr.init); return "" === a || !!(a && "matchMedia" in e) && e.matchMedia(a).matches } }; t(a).on(b.events.create, function (a, n) { "swipe" !== n.mode && "columntoggle" !== n.mode || !n.$table.is("[ " + s.attr.init + "]") || function (a) { var n = a.data("tablesaw"), i = t('<div class="tablesaw-advance minimap">'), o = t('<ul class="tablesaw-advance-dots">').appendTo(i), l = "tablesaw-advance-dots-hide"; function r() { if (s.show(a[0])) { i.css("display", "block"); var e = o.find("li").removeClass(l); a.find("thead th").each(function (a) { "none" === t(this).css("display") && e.eq(a).addClass(l) }) } else i.css("display", "none") } a.data("tablesaw")._getPrimaryHeaderCells().each(function () { o.append("<li><i></i></li>") }), i.appendTo(n.$toolbar), r(), t(e).on(b.events.resize, r), a.on("tablesawcolumns.minimap", function () { r() }).on(b.events.destroy + ".minimap", function () { var a = t(this); n.$toolbar.find(".tablesaw-advance").remove(), t(e).off(b.events.resize, r), a.off(".minimap") }) }(n.$table) }), b.MiniMap = s }(), u = { selectors: { init: "table[data-tablesaw-mode-switch]" }, attributes: { excludeMode: "data-tablesaw-mode-exclude" }, classes: { main: "tablesaw-modeswitch", toolbar: "tablesaw-bar-section" }, modes: ["stack", "swipe", "columntoggle"], init: function (e) { var a, s = t(e), n = s.data("tablesaw"), i = s.attr(u.attributes.excludeMode), o = n.$toolbar, l = t("<div>").addClass(u.classes.main + " " + u.classes.toolbar), r = ['<label><span class="abbreviated">' + b.i18n.modeSwitchColumnsAbbreviated + '</span><span class="longform">' + b.i18n.modeSwitchColumns + "</span>:"], c = s.attr("data-tablesaw-mode"); r.push('<span class="btn tablesaw-btn"><select>'); for (var h = 0, d = u.modes.length; h < d; h++)i && i.toLowerCase() === u.modes[h] || (a = c === u.modes[h], r.push("<option" + (a ? " selected" : "") + ' value="' + u.modes[h] + '">' + b.i18n.modes[h] + "</option>")); r.push("</select></span></label>"), l.html(r.join("")); var f = o.find(".tablesaw-advance").eq(0); f.length ? l.insertBefore(f) : l.appendTo(o), l.find(".tablesaw-btn").tablesawbtn(), l.find("select").on("change", function (a) { return u.onModeChange.call(e, a, t(this).val()) }) }, onModeChange: function (e, a) { var s = t(this), n = s.data("tablesaw"); n.$toolbar.find("." + u.classes.main).remove(), n.destroy(), s.attr("data-tablesaw-mode", a), s.tablesaw() } }, t(a).on(b.events.create, function (t, e) { e.$table.is(u.selectors.init) && u.init(e.table) }), function () { var e = "tablesawCheckAll"; function s(t) { this.tablesaw = t, this.$table = t.$table, this.attr = "data-tablesaw-checkall", this.checkAllSelector = "[" + this.attr + "]", this.forceCheckedSelector = "[" + this.attr + "-checked]", this.forceUncheckedSelector = "[" + this.attr + "-unchecked]", this.checkboxSelector = 'input[type="checkbox"]', this.$triggers = null, this.$checkboxes = null, this.$table.data(e) || (this.$table.data(e, this), this.init()) } s.prototype._filterCells = function (e) { return e.filter(function () { return !t(this).closest("tr").is("[data-tablesaw-subrow],[data-tablesaw-ignorerow]") }).find(this.checkboxSelector).not(this.checkAllSelector) }, s.prototype.getCheckboxesForButton = function (e) { return this._filterCells(t(t(e).attr(this.attr))) }, s.prototype.getCheckboxesForCheckbox = function (e) { return this._filterCells(t(t(e).closest("th")[0].cells)) }, s.prototype.init = function () { var e = this; this.$table.find(this.checkAllSelector).each(function () { t(this).is(e.checkboxSelector) ? e.addCheckboxEvents(this) : e.addButtonEvents(this) }) }, s.prototype.addButtonEvents = function (a) { var s = this; t(a).on("click", function (a) { a.preventDefault(); var n, i = s.getCheckboxesForButton(this), o = !0; i.each(function () { this.checked || (o = !1) }), n = !!t(this).is(s.forceCheckedSelector) || !t(this).is(s.forceUncheckedSelector) && !o, i.each(function () { this.checked = n, t(this).trigger("change." + e) }) }) }, s.prototype.addCheckboxEvents = function (a) { var s = this; t(a).on("change", function () { var t = this.checked; s.getCheckboxesForCheckbox(this).each(function () { this.checked = t }) }); var n = s.getCheckboxesForCheckbox(a); n.on("change." + e, function () { var t = 0; n.each(function () { this.checked && t++ }); var e = t === n.length; a.checked = e, a.indeterminate = 0 !== t && !e }) }, t(a).on(b.events.create, function (t, e) { new s(e) }), b.CheckAll = s }(), b });;
/*! Tablesaw - v3.1.2 - 2019-03-19
* https://github.com/filamentgroup/tablesaw
* Copyright (c) 2019 Filament Group; Licensed MIT */
(function (win) {
  "use strict";

  // DOM-ready auto-init of plugins.
  // Many plugins bind to an "enhance" event to init themselves on dom ready, or when new markup is inserted into the DOM
  // Use raw DOMContentLoaded instead of shoestring (may have issues in Android 2.3, exhibited by stack table)
  if (!("Tablesaw" in win)) {
    throw new Error("Tablesaw library not found.");
  }
  if (!("init" in Tablesaw)) {
    throw new Error("Your tablesaw-init.js is newer than the core Tablesaw version.");
  }

  Tablesaw.init();
})(typeof window !== "undefined" ? window : this);;
(function ($) {
  $(document).ajaxSend(function (e, xhr, settings) {
  }).ajaxComplete(function (e, xhr, settings) {
    Tablesaw.init();
  });
})(jQuery);
;
/**
 * @file
 * Customizations to original Tablesaw library.
 *
 * If and when fixes are applied upstream, these changes can be removed.
 */

(function ($, Drupal) {

  'use strict';

  Drupal.responsive_tables_filter = Drupal.responsive_tables_filter || {};
  Drupal.behaviors.facetsCheckboxReset = {
    attach: function (context) {
      if (window.Tablesaw !== 'undefined') {
        if (once('tablesaw-create', 'html').length) {
          $(window).on(Tablesaw.events.create, function (event, tablesaw) {
            Drupal.responsive_tables_filter.fixCellLabels(context);
          });
        }
      }
    }
  };

  /**
   * Find all Tablesaw-generated cell labels.
   */
  Drupal.responsive_tables_filter.fixCellLabels = function (context) {
    var $labels = $('b.tablesaw-cell-label');
    $labels.each(Drupal.responsive_tables_filter.makeElementAccessible);
  };

  /**
   * Replace all Tablesaw-generated b elements with strong.
   */
  Drupal.responsive_tables_filter.makeElementAccessible = function () {
    var replacement = document.createElement('strong');
    replacement.innerHTML = $(this).html();
    replacement.setAttribute('class', $(this).attr('class'));
    if ($(this).parent().is("th")) {
      replacement.setAttribute('aria-hidden', true);
    }
    $(this).replaceWith(replacement);
  };

})(jQuery, Drupal);
;
