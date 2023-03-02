/**
 * Kendo UI v2023.1.117 (http://www.telerik.com/kendo-ui)
 * Copyright 2023 Progress Software Corporation and/or one of its subsidiaries or affiliates. All rights reserved.
 *
 * Kendo UI commercial licenses may be obtained at
 * http://www.telerik.com/purchase/license-agreement/kendo-ui-complete
 * If you do not own a commercial license, this file shall be governed by the trial license terms.
 */
import"./kendo.core.js";import"./kendo.draganddrop.js";import"./kendo.resizable.js";var __meta__={id:"tilelayout",name:"TileLayout",category:"web",depends:["core"],features:[{id:"tilelayout-resizable",name:"Resizable",description:"Support for resizing",depends:["resizable"]},{id:"tilelayout-reorderable",name:"Reorderable",description:"Support for reordering",depends:["draganddrop"]}]};!function(e){var t=window.kendo,i=t.ui,r=i.Widget,n=i.Draggable,s=t.keys,o=t.selectorFromClasses,a="resize",d="reorder",l=".kendoTileLayout",c="k-cursor-grab",p=r.extend({init:function(t,i){var n=this;r.fn.init.call(n,t,i),e.cssNumber.gridColumnStart=!0,e.cssNumber.gridColumnEnd=!0,e.cssNumber.gridRowStart=!0,e.cssNumber.gridRowEnd=!0,n.element=e(t).addClass(p.styles.wrapper).attr({role:"list"}),n._setWrapperStyles(),n._initContainers(),n._resizable(),n._navigatable(),n._reorderable()},events:[a,d],options:{name:"TileLayout",columns:null,gap:{columns:16,rows:16},containers:[],resizable:!1,reorderable:!1,navigatable:!1,columnsWidth:"1fr",rowsHeight:"1fr",height:"",width:""},destroy:function(){r.fn.destroy.call(this),this._draggableInstance&&(this.element.find(".k-tilelayout-item").each((function(){var t=e(this);t.data("kendoDropTarget")&&t.data("kendoDropTarget").destroy()})),this._draggableInstance.destroy(),this._draggableInstance=null),this.resizable&&(this.resizable.destroy(),this.resizable=null),this.resizeHandle&&(this.resizeHandle.off(l).remove(),this.resizeHandle=null),this.element.off(l)},setOptions:function(e){this.destroy(),t.deepExtend(this.options,e),this.element.empty(),this.init(this.element,this.options)},getOptions:function(){var i=e.extend(!0,{},this.options);return i.containers=t.deepExtend([],this.items),i},_initContainers:function(){var i,r,n,s,o,a,d,l=this,h=l.options.containers,u=l.element.children(),m=!!u.length;if(l.items=[],l.itemsMap={},m)u.each((function(r,n){i=t.guid();var s=e(n).addClass(p.styles.item).attr({id:i,role:"listitem","aria-keyshortcuts":"Enter"});l._addContainer(s,h[r],r,i)}));else for(var g=0;g<h.length;g++){if(i=t.guid(),a=h[g],r=e("<div></div>").addClass(p.styles.item).attr({id:i,role:"listitem","aria-keyshortcuts":"Enter"}),(s=a.header)&&(s.template||s.text)&&(n=e("<div></div>").addClass(p.styles.itemHeader),l.options.reorderable&&n.addClass(c),d=s.text?"<div class='"+p.styles.itemHeaderTitle+"'>"+s.text+"</div>":null,n.append(d||t.template(s.template)({})),n.appendTo(r)),o=e("<div></div>").addClass(p.styles.itemBody),!a.bodyTemplate)throw new Error("Having a bodyTemplate for the container is mandatory");o.append(t.template(a.bodyTemplate)({})),o.appendTo(r),r.appendTo(l.element),l._addContainer(r,a,g,i)}},_addContainer:function(e,i,r,n){var s=this;i.order="number"==typeof i.order?i.order:r,e.attr(t.attr("index"),i.order),i.id=n,s._setContainerCoordinates(e,i),s.itemsMap[n]=i,s.items.push(s.itemsMap[n])},_setWrapperStyles:function(){var e=this.options;this.element.css({"grid-template-columns":t.format("repeat({0}, minmax(0, {1}))",e.columns,"string"==typeof e.columnsWidth?e.columnsWidth:e.columnsWidth+"px"),"grid-auto-rows":t.format("minmax(0, {0})","string"==typeof e.rowsHeight?e.rowsHeight:e.rowsHeight+"px"),"column-gap":e.gap.columns,width:"string"==typeof e.width?e.width:e.width+"px",height:"string"==typeof e.height?e.height:e.height+"px",padding:e.gap.rows+"px "+e.gap.columns+"px ","row-gap":e.gap.rows})},_setContainerCoordinates:function(e,i){i&&e.css({order:i.order,"grid-column-end":t.format("span {0}",i.colSpan),"grid-row-end":t.format("span {0}",i.rowSpan)}).attr(t.attr("index"),i.order)},_updateContainers:function(){for(var e=this,t=0;t<e.items.length;t++)e._setContainerCoordinates(e.element.find("#"+e.items[t].id),e.items[t])},_createResizeHandle:function(t,i,r){var n=this;n._isresizing||(n.resizeHandle&&n.resizeHandle.data("div")[0]!==t[0]&&(n.resizeHandle.off(l).remove(),n.resizeHandle=null),n.resizeHandle||(n.resizeHandle=e('<div class="k-resize-handle"></div>'),n.resizeHandle.appendTo(t)),n._positionResizeHandle(t,i,r))},_positionResizeHandle:function(e,i,r){var n,s=parseFloat(e.css("borderRightWidth")),o=parseFloat(e.css("borderBottomWidth")),a=e.height(),d=e.width(),l=r?a-6.5-o:0,c=i?d-4.5-s:0,p=9,h=9;i&&r?(h=p=25,l-=12.5,c-=12.5,n=t.support.isRtl(this.element)?"k-cursor-nesw-resize":"k-cursor-nwse-resize"):i&&!r?(h=a,n="k-cursor-ew-resize"):!i&&r&&(p=d,n="k-cursor-ns-resize"),this.resizeHandle.css({top:l,left:c,height:h,width:p}).attr("side",i).attr("down",r).removeClass("k-cursor-nesw-resize k-cursor-nwse-resize k-cursor-ew-resize k-cursor-ns-resize").addClass(n).data("div",e).show()},_createResizeHint:function(t){if(!this.hint){var i=t.css("grid-column-end"),r=t.css("grid-row-end"),n=t.css("order");this.hint=e("<div class='"+p.styles.resizeHint+"'></div>").css({order:n,"grid-column-end":i,"grid-row-end":r}).insertAfter(t)}},_removeResizeHint:function(){this._isresizing||this.hint&&(this.hint.remove(),this.hint=null)},_positionHint:function(e,i){e&&this.hint.css("grid-column-end",t.format("span {0}",e)),i&&this.hint.css("grid-row-end",t.format("span {0}",i))},_removeAbsoluteStyles:function(e){e.css("position",""),e.css("left",""),e.css("top",""),e.css("width",""),e.css("height",""),e.css("z-index","")},_positionAbsolutely:function(e){if("absolute"!=e.css("position")){var t=e.position(),i=e.outerWidth(),r=e.outerHeight();e.css("position","absolute"),e.css("left",t.left),e.css("top",t.top),e.css("width",i),e.css("height",r),e.css("z-index",2)}},_navigatable:function(){if(this.options.navigatable){var e=this;e.element.children().attr("tabindex",0),e.element.on("keydown"+l,e,e._keyDown.bind(e))}},_keyDown:function(t){var i=e(t.target),r=!1;i.is(".k-tilelayout-item.k-card")&&(t.ctrlKey&&t.keyCode==s.LEFT&&(r=!0,this._resizeItem(i,"horizontal",-1)),t.ctrlKey&&t.keyCode==s.RIGHT&&(r=!0,this._resizeItem(i,"horizontal",1)),t.ctrlKey&&t.keyCode==s.UP&&(r=!0,this._resizeItem(i,"vertical",-1)),t.ctrlKey&&t.keyCode==s.DOWN&&(r=!0,this._resizeItem(i,"vertical",1)),t.shiftKey&&t.keyCode==s.LEFT&&(r=!0,this._reorderItem(i,-1)),t.shiftKey&&t.keyCode==s.RIGHT&&(r=!0,this._reorderItem(i,1)),r&&t.preventDefault())},_resizeItem:function(e,i,r){var n,s=this,o=e.attr("id");s.options.resizable&&("horizontal"===i?(n=parseInt(e.css("grid-column-end").replace("span",""),10)+r,s.element.css("grid-template-columns").split(" ").length>=n&&n>0&&(s.itemsMap[o].colSpan=n,e.css({"grid-column-end":t.format("span {0}",n)}),s.trigger(a,{container:e}))):(n=parseInt(e.css("grid-row-end").replace("span",""),10)+r,s.element.css("grid-template-rows").split(" ").length>=n&&n>0&&(s.itemsMap[o].rowSpan=n,e.css({"grid-row-end":t.format("span {0}",n)}),s.trigger(a,{container:e}))))},_reorderItem:function(e,i){if(this.options.reorderable){var r=parseInt(e.css("order"),10),n=this.element.children().length;if((i=r+i)>=0&&i<n){var s=this.element.find("> ["+t.attr("index")+"='"+i+"']");this.itemsMap[e.attr("id")].order=i,this.itemsMap[s.attr("id")].order=r,this._updateContainers(),this._updateDOM(),e.trigger("focus"),this.trigger(d,{newIndex:i,oldIndex:r,container:e})}}},_sortContainers:function(i){var r=t.attr("index");return i.sort((function(t,i){t=e(t),i=e(i);var n=t.attr(r),s=i.attr(r);return void 0===n&&(n=e(t).index()),void 0===s&&(s=e(i).index()),(n=parseInt(n,10))>(s=parseInt(s,10))?1:n<s?-1:0}))},_updateDOM:function(){var t=this,i=t.element.children(":visible");(i=t._sortContainers(i)).each((function(){e(this).appendTo(t.element)}))},_resizable:function(){var t,r,n,s,d,c,h,u=this,m=0,g=0,f=0,v=0,_=0,y=0,w=0;u.options.resizable&&(u.element.on("mousemove"+l,o(p.styles.item),(function(t){var i,r,n=e(this),s=n[0].getBoundingClientRect();i=Math.abs(s.right-t.clientX)<16,r=Math.abs(s.bottom-t.clientY)<16,i&&r?u._createResizeHandle(n,!0,!0):i?u._createResizeHandle(n,!0,!1):r&&u._createResizeHandle(n,!1,!0)})),u.resizable=new i.Resizable(u.element,{handle:"div.k-tilelayout-item > .k-resize-handle",start:function(i){var o=e(i.currentTarget);c=o.data("div"),n=c.attr("id"),t=o.attr("side"),r=o.attr("down"),h=u.element.css("grid-template-rows").split(" ").length,t&&(s=u._calculateFractionWidth(),w=u._calculateRightEndSide(s),m=i.x.location,f=c.width(),_=parseInt(c.css("grid-column-end").replace("span",""),10)),r&&(d=(u.element[0].scrollHeight-(h+1)*u.options.gap.rows)/h,g=i.y.location,v=c.height(),y=parseInt(c.css("grid-row-end").replace("span",""),10)),u._isresizing=!0},resize:function(e){var i,o,a=0,l=0,p=0,h=0,H=0,z=0,b=0,k=u.element[0].getBoundingClientRect(),C=!!u.element[0].style.height;u._positionAbsolutely(c),u._createResizeHint(c),"true"==t&&(p=e.x.location-m,i=k.left+w-window.scrollX-e.x.location<u.options.gap.columns,o=f+p<s,i||o?p=0:(b=p/(s+u.options.gap.columns),H=p-Math.floor(b)*(s+u.options.gap.columns),a=_+Math.floor(b)+(H>=s/2?1:0),u.itemsMap[n].colSpan=Math.max(a,1))),"true"==r&&(h=e.y.location-g,i=k.bottom+window.scrollY-e.y.location<u.options.gap.rows,(o=v+h<=d)||i&&C?h=0:(z=h/(d+u.options.gap.rows),H=h-Math.floor(z)*(d+u.options.gap.rows),l=y+Math.floor(z)+(H>=d/2?1:0),u.itemsMap[n].rowSpan=Math.max(l,1))),u._positionHint(a,l),u._positionResizeHandle(c,"true"==t,"true"==r),h&&c.css("height",v+h),p&&c.css("width",f+p)},resizeend:function(){u._isresizing=!1,u._setContainerCoordinates(c,u.itemsMap[n]),u._removeAbsoluteStyles(c),u._removeResizeHint(),u.trigger(a,{container:c})}}))},_calculateFractionWidth:function(){var e=this,t=e.element.children().first(),i=e.itemsMap[t.attr("id")].colSpan;return(t.outerWidth()-(i-1)*e.options.gap.columns)/i},_calculateRightEndSide:function(e){var t=this.options.columns,i=this.options.gap.columns;return t*(e+i)+i},_createDropHint:function(i){this.dropHint=e("<div class='"+p.styles.reorderHint+"'></div>").css({order:i.order,"grid-column-end":i.columnEnd,"grid-row-end":i.rowEnd}).attr(t.attr("index"),i.order).attr("direction",i.direction)},_insertDropHint:function(e,t){"right"==t?this.dropHint.insertAfter(e):this.dropHint.insertBefore(e)},_removeDropHint:function(){this.dropHint&&(this.dropHint.remove(),this.dropHint=null)},_reorderable:function(){if(this.options.reorderable){var i,r=this,s=r.element,a=o(p.styles.item),l=o(p.styles.itemHeader),u=t.guid();this._draggableInstance=new n(this.element,{filter:l,autoScroll:!0,ignore:":input",group:u,hint:function(e){var t=e.closest(a),i=t.width(),r=t.height(),n=t.clone();return n.find(l).removeClass(c).addClass("k-cursor-grabbing"),n.width(i).height(r)},dragstart:function(t){i=e(t.currentTarget).closest(a)},drag:function(n){var s,o,d,l,c=t.elementUnderCursor(n),u=n.sender.hint,m=r._draggableInstance.currentTarget.closest(a);if(h(u[0],c)){if(u.hide(),c=t.elementUnderCursor(n),!h(i[0],c)){if(r.dropHint&&r.dropHint[0]==c[0])return void u.show();if((s=(s=e(c)).hasClass(p.styles.item)?s:s.closest(a)).hasClass(p.styles.item))if(o=s[0].getBoundingClientRect(),d=n.clientX-o.left>o.right-n.clientX?"right":"left",l=s.css("order"),r.dropHint&&r.dropHint.attr("direction")!==d){var g=r.dropHint.clone();g.css("order",l),r.dropHint.remove(),r.dropHint=g,r._insertDropHint(s,d),r.dropHint.attr("direction",d).attr(t.attr("index"),l)}else if(!r.dropHint){("right"==d?s.next():s.prev())[0]!=i[0]&&(r._createDropHint({order:l,columnEnd:m.css("grid-column-end"),rowEnd:m.css("grid-row-end"),direction:d}),i.hide(),r._insertDropHint(s,d))}}u.show()}},dragend:function(e){if(!r.dropHint)return e.sender.hint.remove(),void r._removeDropHint();var i,n,s,o,l=parseInt(r.dropHint.css("order"),10),c=e.currentTarget.closest(a),p=r.element.find(a),h=parseInt(c.css("order"),10),u=c.attr("id"),m=r.element.children(":visible");l=(m=r._sortContainers(m)).index(r.dropHint[0]),n=Math.max(l,h),i=Math.min(l,h),r.itemsMap[u].order=l,"left"==(o=l>h?"right":"left")?n--:i++;for(var g=i;g<=n;g++)s=p.filter("["+t.attr("index")+"='"+g+"']"),r.itemsMap[s.attr("id")].order+="left"==o?1:-1;c.show(),r._updateContainers(),e.sender.hint.remove(),r._removeDropHint(),r.options.navigatable&&r._updateDOM(),r.trigger(d,{newIndex:l,oldIndex:h,container:c})}}),s.find(a).kendoDropTarget({group:u,dragenter:function(t){if(!r._isresizing){var n,s,o=e(t.dropTarget),d=r._draggableInstance.currentTarget.closest(a);if(i[0]!=o[0]){if(n=o[0].getBoundingClientRect(),("right"==(s=t.clientX-n.left>n.right-t.clientX?"right":"left")?o.next():o.prev())[0]==i[0])return;r._removeDropHint(),i.hide(),r._createDropHint({order:o.css("order"),columnEnd:d.css("grid-column-end"),rowEnd:d.css("grid-row-end"),direction:s}),i.hide(),r._insertDropHint(o,s)}}}})}}});function h(t,i){try{return e.contains(t,i)||t==i}catch(e){return!1}}i.plugin(p),e.extend(!0,p,{styles:{wrapper:"k-widget k-tilelayout",item:"k-tilelayout-item k-card",itemHeader:"k-tilelayout-item-header k-card-header",itemHeaderTitle:"k-card-title",itemBody:"k-tilelayout-item-body k-card-body",reorderHint:"k-layout-item-hint k-layout-item-hint-reorder",resizeHint:"k-layout-item-hint k-layout-item-hint-resize"}})}(window.kendo.jQuery);
//# sourceMappingURL=kendo.tilelayout.js.map
