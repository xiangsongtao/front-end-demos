webpackJsonp([9],{0:function(i,t,e){"use strict";e(38),document.querySelector("#main").innerHTML=e(65),e(22)},22:function(i,t,e){"use strict";function a(i,t,e){e=e||i,t=t||200;var a=[];return setInterval(function(){if(0!==a.length){var t=a.shift();i.apply(e,t)}},t),function(){a.push(arguments)}}var s=e(1),d=function(i,t){this.param=s.extend({},this.defaultParam,i),this.$el=this.make(),this.show(t)};d.prototype={defaultParam:{width:100,height:100,scale:.8,animClass:"sign-in__img--anim",className:"sign-in__img",relLoc:{x:0,y:0},offset:{x:100,y:100}},make:function(){var i=this.param,t=s("<div>");return t.width(i.width),t.height(i.height),t.attr("src",i.url),t.addClass(i.className),t},show:function(i){var t=this.param,e=this.$el;i.append(e),e.fadeIn("slow",function(){e.addClass(t.animClass),e.css({transform:"translate3d("+t.relLoc.x+"px,"+t.relLoc.y+"px,0)"})})},spread:function(){var i=this.param,t=this.$el,e=i.relLoc.x,a=i.relLoc.y;e>0?e+=i.offset.x:e-=i.offset.x,a>0?a+=i.offset.y:a-=i.offset.y,t.css({transform:"translate3d("+e+"px,"+a+"px,0) scale("+i.scale+")",opacity:.5})},terminal:function(){var i=this.$el;i.hide(function(){i.remove()})}};var n={$el:s(".sign-in"),$totalNum:s("#total-num"),totalNum:0,MAXNUM_2:10,MAXNUM_3:20,DEFAULT_AVATAR_URL:"img/avatar/default.png",secAreaSize:{width:300,height:800},itemSize:{width:80,height:80},secItems:[],thirdItems:[],delayTime:2e3,calRandomRange:function(){var i=(this.secAreaSize.width-this.itemSize.width)/2,t=(this.secAreaSize.height-this.itemSize.height)/2;this.randomRange={x:[-i,i],y:[-t,t]}},calSpeadOffset:function(){this.spreadOffset={x:(this.secAreaSize.width+this.itemSize.width)/2,y:(this.secAreaSize.height+this.itemSize.height)/2}},calSpeadMaxSize:function(){this.speadMaxSize={width:2*(this.secAreaSize.width+this.itemSize.width),height:2*(this.secAreaSize.height+this.itemSize.height)},console.log(JSON.stringify(this.speadMaxSize))},getRandomLoc:function(){var i={x:this.getRandomNum(this.randomRange.x),y:this.getRandomNum(this.randomRange.y)};return console.log(JSON.stringify(i)),i},getRandomNum:function(i){var t=i[0],e=i[1];return t+Math.random()*(e-t)},addItem:function(i){this.secItems.push(this.makeItem()),this.secItems.length>this.MAXNUM_2&&this.removeItems(2),this.thirdItems.length>this.MAXNUM_3&&this.removeItems(3)},makeItem:function(){return new d({relLoc:this.getRandomLoc(),offset:this.spreadOffset,width:this.itemSize.width,height:this.itemSize.height,url:this.DEFAULT_AVATAR_URL},this.$el)},removeItems:function h(i){var h;2===i?(h=this.secItems.splice(0,this.secItems.length-this.MAXNUM_2),this.thirdItems=this.thirdItems.concat(h),this.removeItems(3),h.forEach(function(i){i.spread()})):3===i&&(h=this.thirdItems.splice(0,this.thirdItems.length-this.MAXNUM_3),h.forEach(function(i){i.terminal()}))},init:function(){this.calRandomRange(),this.calSpeadOffset(),this.calSpeadMaxSize(),this.$el.width(this.speadMaxSize.width).height(this.speadMaxSize.height),this.addItem=a(this.addItem,this.delayTime,this)}};n.init(),s(".add-btn").click(function(){n.addItem()}),s(".add-multi-btn").click(function(){for(var i=40;i>0;i--)n.addItem()})},38:function(i,t){},65:function(i,t){i.exports="<div class=wrap> <div class=header> <button class=add-btn>新增签到</button> <button class=add-multi-btn>新增40个签到</button> </div> <div class=sign-in> <div class=layer-2> <div class=item data-index=1>1</div> <div class=item data-index=2>2</div> <div class=item data-index=3>3</div> <div class=item data-index=4>4</div> <div class=item data-index=5>5</div> <div class=item data-index=6>6</div> <div class=item data-index=7>7</div> <div class=item data-index=8>8</div> <div class=item data-index=9>9</div> </div> <div class=layer-3> <div class=item data-index=a-1>a-1</div> <div class=item data-index=a-2>a-2</div> <div class=item data-index=a-3>a-3</div> <div class=item data-index=a-4>a-4</div> <div class=item data-index=a-5>a-5</div> <div class=item data-index=a-6>a-6</div> <div class=item data-index=a-7>a-7</div> <div class=item data-index=a-8>a-8</div> <div class=item data-index=a-9>a-9</div> <div class=item data-index=b-1>b-1</div> <div class=item data-index=b-2>b-2</div> <div class=item data-index=b-3>b-3</div> <div class=item data-index=b-4>b-4</div> <div class=item data-index=b-5>b-5</div> <div class=item data-index=b-6>b-6</div> <div class=item data-index=b-7>b-7</div> <div class=item data-index=b-8>b-8</div> <div class=item data-index=b-9>b-9</div> </div> </div> <script src=../../asset/vendor/jquery-2.1.3.min.js></script> </div>"}});