(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{331:function(n,t,o){"use strict";o.r(t);var a={name:"eg-map-functions",data:()=>({center:{lat:10,lng:10},markers:[{position:{lat:10,lng:10}},{position:{lat:11,lng:11}}]}),methods:{fitBounds(){var n=new google.maps.LatLngBounds;n.extend({lat:33.972,lng:35.4054}),n.extend({lat:33.7606,lng:35.64592}),this.$refs.mmm.fitBounds(n)},panToBounds(){var n=new google.maps.LatLngBounds;n.extend({lat:33.972,lng:35.4054}),n.extend({lat:33.7606,lng:35.64592}),this.$refs.mmm.panToBounds(n)},panTo(){this.$refs.mmm.panTo({lat:47.912867,lng:106.910723})}}},e=o(15),s=Object(e.a)(a,(function(){var n=this,t=n._self._c;return t("div",[t("button",{on:{click:n.panTo}},[n._v("\n    Pan To\n  ")]),n._v(" "),t("button",{on:{click:n.panToBounds}},[n._v("\n    Pan To Bounds\n  ")]),n._v(" "),t("button",{on:{click:n.fitBounds}},[n._v("\n    Fit Bounds\n  ")]),n._v(" "),t("gmap-map",{ref:"mmm",staticStyle:{width:"100%",height:"500px"},attrs:{center:n.center,zoom:7}},n._l(n.markers,(function(o,a){return t("gmap-marker",{key:a,attrs:{position:o.position,clickable:!0,draggable:!0},on:{click:function(t){n.center=o.position}}})})),1)],1)}),[],!1,null,null,null);t.default=s.exports}}]);