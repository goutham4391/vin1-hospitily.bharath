!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).VueTimeago={})}(this,function(e){"use strict";var t=36e5,n=6e4,r=/[T ]/,a=/:/,o=/^(\d{2})$/,u=[/^([+-]\d{2})$/,/^([+-]\d{3})$/,/^([+-]\d{4})$/],i=/^(\d{4})/,s=[/^([+-]\d{4})/,/^([+-]\d{5})/,/^([+-]\d{6})/],c=/^-(\d{2})$/,d=/^-?(\d{3})$/,l=/^-?(\d{2})-?(\d{2})$/,f=/^-?W(\d{2})$/,h=/^-?W(\d{2})-?(\d{1})$/,p=/^(\d{2}([.,]\d*)?)$/,m=/^(\d{2}):?(\d{2}([.,]\d*)?)$/,v=/^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,g=/([Z+-].*)$/,y=/^(Z)$/,M=/^([+-])(\d{2})$/,D=/^([+-])(\d{2}):?(\d{2})$/;function T(e,t,n){t=t||0,n=n||0;var r=new Date(0);r.setUTCFullYear(e,0,4);var a=7*t+n+1-(r.getUTCDay()||7);return r.setUTCDate(r.getUTCDate()+a),r}var x=function(e,x){if(function(e){return e instanceof Date}(e))return new Date(e.getTime());if("string"!=typeof e)return new Date(e);var S=(x||{}).additionalDigits;S=null==S?2:Number(S);var b,I,Y,$=function(e){var t,n={},o=e.split(r);if(a.test(o[0])?(n.date=null,t=o[0]):(n.date=o[0],t=o[1]),t){var u=g.exec(t);u?(n.time=t.replace(u[1],""),n.timezone=u[1]):n.time=t}return n}(e),U=function(e,t){var n,r=u[S],a=s[S];if(n=i.exec(e)||a.exec(e)){var c=n[1];return{year:parseInt(c,10),restDateString:e.slice(c.length)}}if(n=o.exec(e)||r.exec(e)){var d=n[1];return{year:100*parseInt(d,10),restDateString:e.slice(d.length)}}return{year:null}}($.date),X=U.year,w=function(e,t){if(null===t)return null;var n,r,a;if(0===e.length)return(r=new Date(0)).setUTCFullYear(t),r;if(n=c.exec(e))return r=new Date(0),a=parseInt(n[1],10)-1,r.setUTCFullYear(t,a),r;if(n=d.exec(e)){r=new Date(0);var o=parseInt(n[1],10);return r.setUTCFullYear(t,0,o),r}if(n=l.exec(e)){r=new Date(0),a=parseInt(n[1],10)-1;var u=parseInt(n[2],10);return r.setUTCFullYear(t,a,u),r}return(n=f.exec(e))?T(t,parseInt(n[1],10)-1):(n=h.exec(e))?T(t,parseInt(n[1],10)-1,parseInt(n[2],10)-1):null}(U.restDateString,X);if(w){var F,W=w.getTime(),O=0;return $.time&&(O=function(e){var r,a,o;if(r=p.exec(e))return(a=parseFloat(r[1].replace(",",".")))%24*t;if(r=m.exec(e))return a=parseInt(r[1],10),o=parseFloat(r[2].replace(",",".")),a%24*t+o*n;if(r=v.exec(e)){a=parseInt(r[1],10),o=parseInt(r[2],10);var u=parseFloat(r[3].replace(",","."));return a%24*t+o*n+1e3*u}return null}($.time)),$.timezone?(b=$.timezone,F=(I=y.exec(b))?0:(I=M.exec(b))?(Y=60*parseInt(I[2],10),"+"===I[1]?-Y:Y):(I=D.exec(b))?(Y=60*parseInt(I[2],10)+parseInt(I[3],10),"+"===I[1]?-Y:Y):0):(F=new Date(W+O).getTimezoneOffset(),F=new Date(W+O+F*n).getTimezoneOffset()),new Date(W+O+F*n)}return new Date(e)},S=function(e,t){var n=function(e,t){var n=x(e),r=x(t);return n.getTime()-r.getTime()}(e,t)/1e3;return n>0?Math.floor(n):Math.ceil(n)},b=function(e,t){var n=x(e).getTime(),r=x(t).getTime();return n<r?-1:n>r?1:0},I=function(e,t){var n=x(e),r=x(t),a=b(n,r),o=Math.abs(function(e,t){var n=x(e),r=x(t);return 12*(n.getFullYear()-r.getFullYear())+(n.getMonth()-r.getMonth())}(n,r));return n.setMonth(n.getMonth()-a*o),a*(o-(b(n,r)===-a))},Y=["M","MM","Q","D","DD","DDD","DDDD","d","E","W","WW","YY","YYYY","GG","GGGG","H","HH","h","hh","m","mm","s","ss","S","SS","SSS","Z","ZZ","X","x"],$=function(e){var t=[];for(var n in e)e.hasOwnProperty(n)&&t.push(n);var r=Y.concat(t).sort().reverse();return new RegExp("(\\[[^\\[]*\\])|(\\\\)?("+r.join("|")+"|.)","g")},U={distanceInWords:function(){var e={lessThanXSeconds:{one:"Less than a second",other:"Less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"Half a minute",lessThanXMinutes:{one:"Less than a minute",other:"Less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"An hour",other:"{{count}} hours"},xHours:{one:"An hour",other:"{{count}} hours"},xDays:{one:"Yesterday",other:"{{count}} days"},aboutXMonths:{one:"1 month",other:"{{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"1 year",other:"{{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};return{localize:function(t,n,r){var a;return r=r||{},a="string"==typeof e[t]?e[t]:1===n?e[t].one:e[t].other.replace("{{count}}",n),r.addSuffix?r.comparison>0?"Today":a+" ago":a}}}(),format:function(){var e=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],t=["January","February","March","April","May","June","July","August","September","October","November","December"],n=["Su","Mo","Tu","We","Th","Fr","Sa"],r=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],a=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],o=["AM","PM"],u=["am","pm"],i=["a.m.","p.m."],s={MMM:function(t){return e[t.getMonth()]},MMMM:function(e){return t[e.getMonth()]},dd:function(e){return n[e.getDay()]},ddd:function(e){return r[e.getDay()]},dddd:function(e){return a[e.getDay()]},A:function(e){return e.getHours()/12>=1?o[1]:o[0]},a:function(e){return e.getHours()/12>=1?u[1]:u[0]},aa:function(e){return e.getHours()/12>=1?i[1]:i[0]}};return["M","D","DDD","d","Q","W"].forEach(function(e){s[e+"o"]=function(t,n){return function(e){var t=e%100;if(t>20||t<10)switch(t%10){case 1:return e+"st";case 2:return e+"nd";case 3:return e+"rd"}return e+"th"}(n[e](t))}}),{formatters:s,formattingTokensRegExp:$(s)}}()},X=43200,w=function(e,t,n){var r=n||{},a=function(e,t){var n=x(e).getTime(),r=x(t).getTime();return n>r?-1:n<r?1:0}(e,t),o=r.locale,u=U.distanceInWords.localize;o&&o.distanceInWords&&o.distanceInWords.localize&&(u=o.distanceInWords.localize);var i,s,c={addSuffix:Boolean(r.addSuffix),comparison:a};a>0?(i=x(e),s=x(t)):(i=x(t),s=x(e));var d,l=S(s,i),f=s.getTimezoneOffset()-i.getTimezoneOffset(),h=Math.round(l/60)-f;if(h<2)return r.includeSeconds?l<5?u("lessThanXSeconds",5,c):l<10?u("lessThanXSeconds",10,c):l<20?u("lessThanXSeconds",20,c):l<40?u("halfAMinute",null,c):u(l<60?"lessThanXMinutes":"xMinutes",1,c):0===h?u("lessThanXMinutes",1,c):u("xMinutes",h,c);if(h<45)return u("xMinutes",h,c);if(h<90)return u("aboutXHours",1,c);if(h<1440)return u("aboutXHours",Math.round(h/60),c);if(h<2520)return u("xDays",1);if(h<X)return u("xDays",Math.round(h/1440),c);if(h<86400)return u("aboutXMonths",d=Math.round(h/X),c);if((d=I(s,i))<12)return u("xMonths",Math.round(h/X),c);var p=d%12,m=Math.floor(d/12);return p<3?u("aboutXYears",m,c):p<9?u("overXYears",m,c):u("almostXYears",m+1,c)},F=function(e,t,n){var r=n.includeSeconds,a=n.addSuffix;return void 0===a&&(a=!0),function(e,t){return w(Date.now(),e,t)}(e,{locale:t,includeSeconds:r,addSuffix:a})},W=function(e){void 0===e&&(e={});var t=e.locales||{};return{name:e.name||"Timeago",props:{datetime:{required:!0},title:{type:[String,Boolean]},locale:{type:String},autoUpdate:{type:[Number,Boolean]},converter:{type:Function},converterOptions:{type:Object}},data:function(){return{timeago:this.getTimeago()}},computed:{localeName:function(){return this.locale||this.$timeago.locale}},mounted:function(){this.startUpdater()},beforeDestroy:function(){this.stopUpdater()},render:function(e){return e("time",{attrs:{datetime:new Date(this.datetime),title:"string"==typeof this.title?this.title:!1===this.title?null:this.timeago}},[this.timeago])},methods:{getTimeago:function(n){return(this.converter||e.converter||F)(n||this.datetime,t[this.locale||this.$timeago.locale],this.converterOptions||{})},convert:function(e){this.timeago=this.getTimeago(e)},startUpdater:function(){var e=this;if(this.autoUpdate){var t=!0===this.autoUpdate?60:this.autoUpdate;this.updater=setInterval(function(){e.convert()},1e3*t)}},stopUpdater:function(){this.updater&&(clearInterval(this.updater),this.updater=null)}},watch:{autoUpdate:function(e){this.stopUpdater(),e&&this.startUpdater()},datetime:function(){this.convert()},localeName:function(){this.convert()},converter:function(){this.convert()},converterOptions:{handler:function(){this.convert()},deep:!0}}}},O=function(e,t){if(!e.prototype.$timeago){var n={locale:t.locale};e.prototype.$timeago=e.observable?e.observable(n):new e({data:n});var r=W(t);e.component(r.name,r)}},z=F;e.createTimeago=W,e.install=O,e.converter=z,e.default=O,Object.defineProperty(e,"__esModule",{value:!0})});