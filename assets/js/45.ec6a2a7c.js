(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{337:function(t,e,a){"use strict";a.r(e);a(16);var o=a(287),n={name:"eg-polygon-advanced",data:()=>({center:{lat:1.38,lng:103.8},edited:null,paths:[],mvcPaths:null,errorMessage:null,polygonGeojson:""}),watch:{polygonPaths:a.n(o).a.throttle((function(t){t&&(this.paths=t,this.polygonGeojson=JSON.stringify({type:"Polygon",coordinates:this.paths.map(t=>this.closeLoop(t.map(({lat:t,lng:e})=>[e,t])))},null,2))}),1e3)},computed:{polygonPaths:function(){if(!this.mvcPaths)return null;let t=[];for(let e=0;e<this.mvcPaths.getLength();e++){let a=[];for(let t=0;t<this.mvcPaths.getAt(e).getLength();t++){let o=this.mvcPaths.getAt(e).getAt(t);a.push({lat:o.lat(),lng:o.lng()})}t.push(a)}return t}},methods:{closeLoop:t=>t.concat(t.slice(0,1)),updateCenter(t){this.center={lat:t.geometry.location.lat(),lng:t.geometry.location.lng()}},updateEdited(t){this.mvcPaths=t},addPath(){const t=this.$refs.map.$mapObject.getBounds(),e=t.getNorthEast(),a=t.getSouthWest(),o=t.getCenter(),n=this.paths.length+1,s=Math.pow(.66,n),l=[{lng:o.lng(),lat:(1-s)*o.lat()+s*e.lat()},{lng:(1-s)*o.lng()+s*a.lng(),lat:(1-s)*o.lat()+s*a.lat()},{lng:(1-s)*o.lng()+s*e.lng(),lat:(1-s)*o.lat()+s*a.lat()}];this.paths.push(l)},removePath(){this.paths.splice(this.paths.length-1,1)},handleClickForDelete(t){t.vertex&&this.$refs.polygon.$polygonObject.getPaths().getAt(t.path).removeAt(t.vertex)},readGeojson(t){try{this.polygonGeojson=t.target.value;var e=JSON.parse(t.target.value);this.paths=e.coordinates.map(t=>t.slice(0,t.length-1).map(([t,e])=>({lat:e,lng:t}))),this.errorMessage=null}catch(t){this.errorMessage=t.message}}}},s=a(15),l=Object(s.a)(n,(function(){var t=this,e=t._self._c;return e("div",[e("label",[e("strong",[t._v("Start at:")]),t._v(" "),e("gmap-autocomplete",{on:{place_changed:function(e){return t.updateCenter(e)}}})],1),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),e("gmap-map",{ref:"map",staticStyle:{width:"100%",height:"500px"},attrs:{center:t.center,zoom:12}},[t.paths.length>0?e("gmap-polygon",{ref:"polygon",attrs:{paths:t.paths,editable:!0},on:{paths_changed:function(e){return t.updateEdited(e)},rightclick:t.handleClickForDelete}}):t._e()],1),t._v(" "),e("div",[e("button",{on:{click:t.addPath}},[t._v("Add Path")]),t._v(" "),e("button",{on:{click:t.removePath}},[t._v("Remove Path")])]),t._v(" "),e("br"),t._v(" "),e("div",[t._m(0),t._v(" "),e("textarea",{staticStyle:{width:"100%",height:"100px"},attrs:{id:"geojson"},domProps:{value:t.polygonGeojson},on:{input:t.readGeojson}}),t._v(" "),t.errorMessage?e("div",[t._v(t._s(t.errorMessage))]):t._e()])],1)}),[function(){var t=this._self._c;return t("label",{attrs:{for:"geojson"}},[t("strong",[this._v("Paste your geojson here:")])])}],!1,null,"c7cd9544",null);e.default=l.exports}}]);