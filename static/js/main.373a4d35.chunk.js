(this["webpackJsonpmy-react-app"]=this["webpackJsonpmy-react-app"]||[]).push([[0],{23:function(e,a,t){e.exports=t(49)},28:function(e,a,t){},30:function(e,a,t){},49:function(e,a,t){"use strict";t.r(a);var c=t(0),n=t.n(c),r=t(17),l=t.n(r),s=(t(28),t(22)),i=t(6),m=t.n(i),o=t(18),p=t(2),u=(t(8),t(30),function(e){var a=e.search,t=e.onInputChange,c=e.onSearchClick;return n.a.createElement("div",{className:"py-5"},n.a.createElement("h1",{className:"display-1 header-text"},"Healthy Food"),n.a.createElement("div",{className:"input-group w-50 mx-auto"},n.a.createElement("input",{type:"text",className:"form-control",placeholder:"Search your recipe...",value:a,onChange:t}),n.a.createElement("div",{className:"input-group-append"},n.a.createElement("button",{className:"btn btn-dark",onClick:c},"Search"))))}),d=function(e){var a=e.name,t=e.image,c=e.calories,r=e.totalWeight,l=e.cautions,s=e.dietLabels,i=e.healthLabels,m=e.url,o=e.healthArray;return n.a.createElement("div",{className:"card-deck col-lg-4 col-md-6 mt-5"},n.a.createElement("div",{className:"card h-100 py-2 text-start"},n.a.createElement("img",{src:t,className:"card-img-top w-100 mx-auto",alt:"..."}),n.a.createElement("div",{className:"card-body"},n.a.createElement("h5",{className:"card-title"},a),n.a.createElement("p",{className:"card-text font-weight-bold text_red",style:{margin:"0px 0px 0px 0px"}},"Cautions:"),n.a.createElement("div",{className:"itemPisition"},l.map((function(e){return n.a.createElement("p",{style:{margin:"0px 0px 0px 5px",color:o.includes(e)?"red":"black"},className:"card-text"},e)}))),n.a.createElement("p",{className:"card-text font-weight-bold",style:{margin:"15px 0px 0px 0px"}},c.toFixed()," Kkal"),n.a.createElement("p",{className:"card-text font-weight-bold",style:{margin:"15px 0px 0px 0px"}},"TotalWeight: "),n.a.createElement("p",{className:"card-text ",style:{margin:"0px 0px 0px 5px"}},r.toFixed()," gm"),n.a.createElement("p",{className:"card-text font-weight-bold ",style:{margin:"15px 0px 0px 0px"}},"DietLabels: "),n.a.createElement("div",{className:"itemPisition"},s.map((function(e){return n.a.createElement("p",{style:{margin:"0px 0px 0px 5px",marginBottom:0,color:o.includes(e)?"green":"black"},className:"card-text "},e)}))),n.a.createElement("p",{className:"card-text font-weight-bold ",style:{margin:"15px 0px 0px 0px"}},"HealthLabels:"),n.a.createElement("div",{className:"itemPisition"},i.map((function(e){return n.a.createElement("p",{style:{margin:"0px 0px 0px 5px",color:o.join(" row").includes(e)?"lightgreen":"black"},className:"card-text"},e)})))),n.a.createElement("div",{className:"card-footer bg-transparent d-flex btn-group "},n.a.createElement("a",{href:m,className:"btn btn-outline-success btn-md "},"Get Recipe"),n.a.createElement("a",{href:"https://www.facebook.com/max.brenzey/",className:"btn btn-outline-success btn-md "},"Page Author"))))},x=function(e){var a=e.recipes,t=e.healthArray;return n.a.createElement("div",{className:"row row-cols-1 row-cols-md-3"},a.map((function(e){return n.a.createElement(d,{key:100*Math.random(),image:e.recipe.image,name:e.recipe.label,cautions:e.recipe.cautions,calories:e.recipe.calories,totalWeight:e.recipe.totalWeight,dietLabels:e.recipe.dietLabels,healthLabels:e.recipe.healthLabels,url:e.recipe.url,healthArray:t})})))},h=t(19),b=t.n(h),E=t(51),f=function(e){var a=e.addFilter,t=Object(c.useState)(""),r=Object(p.a)(t,2),l=r[0],s=r[1];return n.a.createElement("div",{className:"py-5"},n.a.createElement("div",{className:"input-group w-25 mx-auto"},n.a.createElement("input",{type:"text",className:"form-control",placeholder:"Write Filer",value:l,onChange:function(e){return s(e.target.value)}}),n.a.createElement("div",{className:"input-group-append"},n.a.createElement("button",{className:"btn btn-dark",onClick:function(){return a(l)}},"filter"))))};var g=function(){var e=Object(c.useState)(""),a=Object(p.a)(e,2),t=a[0],r=a[1],l=Object(c.useState)([]),i=Object(p.a)(l,2),d=i[0],h=i[1],g=Object(c.useState)(!1),N=Object(p.a)(g,2),v=N[0],y=N[1],w=Object(c.useState)([]),k=Object(p.a)(w,2),j=k[0],O=k[1],S=Object(c.useState)(!1),C=Object(p.a)(S,2),L=C[0],A=C[1],F=function(){var e=Object(o.a)(m.a.mark((function e(){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return y(!0),e.next=3,b.a.get("https://api.edamam.com/search?q=".concat(t,"&app_id=").concat("f02fd65d","&app_key=").concat("ebcf666cd63ce1b44e5f56b6a5e2495f"));case 3:a=e.sent,console.log(a),h(a.data.hits),y(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){}),[]),n.a.createElement("div",{className:L?"App darkMode":"App"},n.a.createElement(u,{search:t,onInputChange:function(e){r(e.target.value)},onSearchClick:function(){F()}}),n.a.createElement(f,{addFilter:function(e){O([].concat(Object(s.a)(j),[e]))}}),n.a.createElement("div",{className:"nav"},n.a.createElement("label",{className:"switch"},n.a.createElement("input",{type:"checkbox",onChange:function(){return A(!L)}}),n.a.createElement("span",{className:"slider round"}))),n.a.createElement("div",{className:"filterItemPosition"},j.map((function(e){return n.a.createElement("div",null,n.a.createElement("p",{className:"HealthLabelsDiv"},e))}))),n.a.createElement("div",{className:"container"},n.a.createElement(x,{recipes:d,healthArray:j}),n.a.createElement("div",{className:"spin"},v?n.a.createElement(E.a,{animation:"border"}):n.a.createElement("div",null))))};t(48);l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(g,null)),document.getElementById("root"))},8:function(e,a,t){}},[[23,1,2]]]);
//# sourceMappingURL=main.373a4d35.chunk.js.map