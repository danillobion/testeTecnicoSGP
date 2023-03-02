/**
 * Kendo UI v2023.1.117 (http://www.telerik.com/kendo-ui)
 * Copyright 2023 Progress Software Corporation and/or one of its subsidiaries or affiliates. All rights reserved.
 *
 * Kendo UI commercial licenses may be obtained at
 * http://www.telerik.com/purchase/license-agreement/kendo-ui-complete
 * If you do not own a commercial license, this file shall be governed by the trial license terms.
 */
import"./kendo.fx.js";import"./kendo.userevents.js";var __meta__={id:"mobile.switch",name:"Switch",category:"mobile",description:"The mobile Switch widget is used to display two exclusive choices.",depends:["fx","userevents"]};!function(e,n){var t=window.kendo,s=t.mobile.ui,i=t._outerWidth,a=s.Widget,o=t.support,r="change",c="switch-on",l="switch-off",p="margin-left",d="state-active",h="disabled",f=(o.transitions.css===n?"":o.transitions.css)+"transform";function u(e){return"km-"+e}var g='<span class="'+u("switch")+" "+u("widget")+'">        <span class="'+u("switch-wrapper")+'">            <span class="'+u("switch-background")+'"></span>        </span>         <span class="'+u("switch-container")+'">            <span class="'+u("switch-handle")+'">                 <span class="'+u("switch-label-on")+'">{0}</span>                 <span class="'+u("switch-label-off")+'">{1}</span>             </span>         </span>    </span>',m=a.extend({init:function(n,s){var i,o=this;a.fn.init.call(o,n,s),s=o.options,o.wrapper=e(t.format(g,s.onLabel,s.offLabel)),o.handle=o.wrapper.find(".km-switch-handle"),o.background=o.wrapper.find(".km-switch-background"),o.wrapper.insertBefore(o.element).prepend(o.element),o._drag(),o.origin=parseInt(o.background.css(p),10),o.constrain=0,o.snapPoint=0,(n=o.element[0]).type="checkbox",o._animateBackground=!0,null===(i=o.options.checked)&&(i=n.checked),o.check(i),o.options.enable=o.options.enable&&!o.element.attr(h),o.enable(o.options.enable),o.refresh(),t.notify(o,t.mobile.ui)},refresh:function(){var e=this,n=i(e.handle,!0);e.width=e.wrapper.width(),e.constrain=e.width-n,e.snapPoint=e.constrain/2,"number"!=typeof e.origin&&(e.origin=parseInt(e.background.css(p),10)),e.background.data("origin",e.origin),e.check(e.element[0].checked)},events:[r],options:{name:"Switch",onLabel:"on",offLabel:"off",checked:null,enable:!0},check:function(e){var t=this,s=t.element[0];if(e===n)return s.checked;t._position(e?t.constrain:0),s.checked=e,t.wrapper.toggleClass(u(c),e).toggleClass(u(l),!e)},value:function(){return this.check.apply(this,arguments)},destroy:function(){a.fn.destroy.call(this),this.userEvents.destroy()},toggle:function(){this.check(!this.element[0].checked)},enable:function(e){var n=this.element,t=this.wrapper;void 0===e&&(e=!0),this.options.enable=e,e?n.prop(h,!1):n.attr(h,h),t.toggleClass(u("state-disabled"),!e)},_resize:function(){this.refresh()},_move:function(e){var n,t,s,a=this;e.preventDefault(),a._position((n=a.position+e.x.delta,t=0,s=a.width-i(a.handle,!0),Math.max(t,Math.min(s,n))))},_position:function(e){var n=this;n.position=e,n.handle.css(f,"translatex("+e+"px)"),n._animateBackground&&n.background.css(p,n.origin+e)},_start:function(){this.options.enable?(this.userEvents.capture(),this.handle.addClass(u(d))):this.userEvents.cancel()},_stop:function(){var e=this;e.handle.removeClass(u(d)),e._toggle(e.position>e.snapPoint)},_toggle:function(e){var n,s=this,i=s.handle,a=s.element[0],o=a.checked,p=t.mobile.application&&t.mobile.application.os.wp?100:200;s.wrapper.toggleClass(u(c),e).toggleClass(u(l),!e),s.position=n=e*s.constrain,s._animateBackground&&s.background.kendoStop(!0,!0).kendoAnimate({effects:"slideMargin",offset:n,reset:!0,reverse:!e,axis:"left",duration:p}),i.kendoStop(!0,!0).kendoAnimate({effects:"slideTo",duration:p,offset:n+"px,0",reset:!0,complete:function(){o!==e&&(a.checked=e,s.trigger(r,{checked:e}))}})},_drag:function(){var e=this;e.userEvents=new t.UserEvents(e.wrapper,{fastTap:!0,tap:function(){e.options.enable&&e._toggle(!e.element[0].checked)},start:e._start.bind(e),move:e._move.bind(e),end:e._stop.bind(e)})}});s.plugin(m)}(window.kendo.jQuery);
//# sourceMappingURL=kendo.mobile.switch.js.map
