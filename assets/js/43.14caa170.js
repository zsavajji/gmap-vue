(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{335:function(e,a,l){"use strict";l.r(a);var n={name:"eg-place-default",data:()=>({place:null}),methods:{updatePlace(e){this.place={lat:e.geometry.location.lat(),lng:e.geometry.location.lng()}}}},t=l(15),o=Object(t.a)(n,(function(){var e=this,a=e._self._c;return a("div",[a("h3",[e._v("Test")]),e._v(' "Singapore" should appear in the text box on page load. No errors in console.\n  '),a("gmap-place-input",{attrs:{"default-place":"Singapore"},on:{place_changed:e.updatePlace}}),e._v("\n  "+e._s(e.place&&e.place.lat)+", "+e._s(e.place&&e.place.lng)+",\n")],1)}),[],!1,null,null,null);a.default=o.exports}}]);