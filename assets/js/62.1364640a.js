(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{356:function(t,e,a){"use strict";a.r(e);var r=a(15),s=Object(r.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"map"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#map"}},[t._v("#")]),t._v(" Map")]),t._v(" "),e("blockquote",[e("p",[t._v("Map component")])]),t._v(" "),e("p",[t._v("[See]("),e("RouterLink",{attrs:{to:"/guide/map.html#source-code"}},[t._v("source code")]),t._v(")\n,[See]("),e("a",{attrs:{href:"https://developers.google.com/maps/documentation/javascript/basics",target:"_blank",rel:"noopener noreferrer"}},[t._v("Official documentation"),e("OutboundLink")],1),t._v(")\n,[See]("),e("a",{attrs:{href:"https://developers.google.com/maps/documentation/javascript/reference/map",target:"_blank",rel:"noopener noreferrer"}},[t._v("Official reference"),e("OutboundLink")],1),t._v(")")],1),t._v(" "),e("h2",{attrs:{id:"props"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#props"}},[t._v("#")]),t._v(" Props")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Prop name")]),t._v(" "),e("th",[t._v("Description")]),t._v(" "),e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Values")]),t._v(" "),e("th",[t._v("Default")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("resizeBus")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("undefined")]),t._v(" "),e("td",[t._v("-")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("center")]),t._v(" "),e("td",[t._v("The initial Map center."),e("br"),e("code",[t._v("@see")]),t._v(" https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions")]),t._v(" "),e("td",[t._v("object")]),t._v(" "),e("td",[t._v("-")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("zoom")]),t._v(" "),e("td",[t._v("The initial Map zoom level. Valid values: Integers between zero, and up to the supported maximum zoom level."),e("br"),e("code",[t._v("@see")]),t._v(" https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions")]),t._v(" "),e("td",[t._v("number")]),t._v(" "),e("td",[t._v("-")]),t._v(" "),e("td",[t._v("undefined")])]),t._v(" "),e("tr",[e("td",[t._v("heading")]),t._v(" "),e("td",[t._v("The heading for aerial imagery in degrees measured clockwise from cardinal direction North. Headings are snapped to the nearest available angle for which imagery is available."),e("br"),e("code",[t._v("@see")]),t._v(" https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions")]),t._v(" "),e("td",[t._v("number")]),t._v(" "),e("td",[t._v("-")]),t._v(" "),e("td",[t._v("undefined")])]),t._v(" "),e("tr",[e("td",[t._v("mapTypeId")]),t._v(" "),e("td",[t._v("The initial Map mapTypeId. Defaults to ROADMAP."),e("br"),e("code",[t._v("@see")]),t._v(" https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions")]),t._v(" "),e("td",[t._v("string")]),t._v(" "),e("td",[t._v("-")]),t._v(" "),e("td",[t._v("'roadmap'")])]),t._v(" "),e("tr",[e("td",[t._v("tilt")]),t._v(" "),e("td",[t._v("For vector maps, sets the angle of incidence of the map. The allowed values are restricted depending on the zoom level of the map. For raster maps, controls the automatic switching behavior for the angle of incidence of the map. The only allowed values are 0 and 45. The value 0 causes the map to always use a 0° overhead view regardless of the zoom level and viewport. The value 45 causes the tilt angle to automatically switch to 45 whenever 45° imagery is available for the current zoom level and viewport, and switch back to 0 whenever 45° imagery is not available (this is the default behavior). 45° imagery is only available for satellite and hybrid map types, within some locations, and at some zoom levels. Note: getTilt returns the current tilt angle, not the value specified by this option. Because getTilt and this option refer to different things, do not bind() the tilt property; doing so may yield unpredictable effects."),e("br"),e("code",[t._v("@see")]),t._v(" https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions")]),t._v(" "),e("td",[t._v("number")]),t._v(" "),e("td",[t._v("-")]),t._v(" "),e("td",[t._v("undefined")])]),t._v(" "),e("tr",[e("td",[t._v("options")]),t._v(" "),e("td",[t._v("Extra options that you want pass to the component")]),t._v(" "),e("td",[t._v("object")]),t._v(" "),e("td",[t._v("-")]),t._v(" "),e("td",[t._v("undefined")])])])]),t._v(" "),e("h2",{attrs:{id:"methods"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#methods"}},[t._v("#")]),t._v(" Methods")]),t._v(" "),e("h3",{attrs:{id:"resize"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#resize"}},[t._v("#")]),t._v(" resize")]),t._v(" "),e("blockquote",[e("p",[t._v("This method trigger the resize event of Google Maps")])]),t._v(" "),e("h4",{attrs:{id:"params"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#params"}},[t._v("#")]),t._v(" Params")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Param name")]),t._v(" "),e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td"),t._v(" "),e("td",[t._v("undefined")]),t._v(" "),e("td")])])]),t._v(" "),e("h4",{attrs:{id:"return"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#return"}},[t._v("#")]),t._v(" Return")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("void")]),t._v(" "),e("td")])])]),t._v(" "),e("h3",{attrs:{id:"resizepreservecenter"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#resizepreservecenter"}},[t._v("#")]),t._v(" resizePreserveCenter")]),t._v(" "),e("blockquote",[e("p",[t._v("Preserve the previous center when resize the map")])]),t._v(" "),e("h4",{attrs:{id:"params-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#params-2"}},[t._v("#")]),t._v(" Params")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Param name")]),t._v(" "),e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td"),t._v(" "),e("td",[t._v("undefined")]),t._v(" "),e("td")])])]),t._v(" "),e("h4",{attrs:{id:"return-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#return-2"}},[t._v("#")]),t._v(" Return")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("void")]),t._v(" "),e("td")])])]),t._v(" "),e("h3",{attrs:{id:"panby"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#panby"}},[t._v("#")]),t._v(" panBy")]),t._v(" "),e("blockquote",[e("p",[t._v("Changes the center of the map by the given distance in pixels. If the distance is less than both the width and height of the map, the transition will be smoothly animated. Note that the map coordinate system increases from west to east (for x values) and north to south (for y values).")])]),t._v(" "),e("h4",{attrs:{id:"params-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#params-3"}},[t._v("#")]),t._v(" Params")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Param name")]),t._v(" "),e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td"),t._v(" "),e("td",[t._v("number")]),t._v(" "),e("td",[t._v("x - Number of pixels to move the map in the x direction.")])]),t._v(" "),e("tr",[e("td"),t._v(" "),e("td",[t._v("number")]),t._v(" "),e("td",[t._v("y - Number of pixels to move the map in the y direction.")])])])]),t._v(" "),e("h4",{attrs:{id:"return-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#return-3"}},[t._v("#")]),t._v(" Return")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("void")]),t._v(" "),e("td")])])]),t._v(" "),e("h3",{attrs:{id:"panto"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#panto"}},[t._v("#")]),t._v(" panTo")]),t._v(" "),e("blockquote",[e("p",[t._v("Changes the center of the map to the given LatLng. If the change is less than both the width and height of the map, the transition will be smoothly animated.")])]),t._v(" "),e("h4",{attrs:{id:"params-4"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#params-4"}},[t._v("#")]),t._v(" Params")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Param name")]),t._v(" "),e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("latLng")]),t._v(" "),e("td",[t._v("union")]),t._v(" "),e("td",[t._v("The new center latitude/longitude of the map. (types "),e("code",[t._v("LatLng\\|LatLngLiteral")]),t._v(")")])])])]),t._v(" "),e("h4",{attrs:{id:"return-4"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#return-4"}},[t._v("#")]),t._v(" Return")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("void")]),t._v(" "),e("td")])])]),t._v(" "),e("h3",{attrs:{id:"pantobounds"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pantobounds"}},[t._v("#")]),t._v(" panToBounds")]),t._v(" "),e("blockquote",[e("p",[t._v("Pans the map by the minimum amount necessary to contain the given LatLngBounds. It makes no guarantee where on the map the bounds will be, except that the map will be panned to show as much of the bounds as possible inside {currentMapSizeInPx} - {padding}. For both raster and vector maps, the map's zoom, tilt, and heading will not be changed.")])]),t._v(" "),e("h4",{attrs:{id:"params-5"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#params-5"}},[t._v("#")]),t._v(" Params")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Param name")]),t._v(" "),e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("latLngBounds")]),t._v(" "),e("td",[t._v("union")]),t._v(" "),e("td",[t._v("The bounds to pan the map to. (types: "),e("code",[t._v("LatLngBounds\\|LatLngBoundsLiteral")]),t._v(")")])]),t._v(" "),e("tr",[e("td"),t._v(" "),e("td",[t._v("union")]),t._v(" "),e("td",[t._v("[padding] - optional Padding in pixels. A number value will yield the same padding on all 4 sides. The default value is 0. (types: "),e("code",[t._v("number\\|Padding")]),t._v(")")])])])]),t._v(" "),e("h4",{attrs:{id:"return-5"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#return-5"}},[t._v("#")]),t._v(" Return")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("void")]),t._v(" "),e("td")])])]),t._v(" "),e("h3",{attrs:{id:"fitbounds"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#fitbounds"}},[t._v("#")]),t._v(" fitBounds")]),t._v(" "),e("blockquote",[e("p",[t._v("Sets the viewport to contain the given bounds.\nNote: When the map is set to display: none, the fitBounds function reads the map's size as 0x0, and therefore does not do anything. To change the viewport while the map is hidden, set the map to visibility: hidden, thereby ensuring the map div has an actual size. For vector maps, this method sets the map's tilt and heading to their default zero values.")])]),t._v(" "),e("h4",{attrs:{id:"params-6"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#params-6"}},[t._v("#")]),t._v(" Params")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Param name")]),t._v(" "),e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("bounds")]),t._v(" "),e("td",[t._v("union")]),t._v(" "),e("td",[t._v("Bounds to show. (types: "),e("code",[t._v("LatLngBounds\\|LatLngBoundsLiteral")]),t._v(")")])]),t._v(" "),e("tr",[e("td"),t._v(" "),e("td",[t._v("union")]),t._v(" "),e("td",[t._v("[padding] - optional Padding in pixels. The bounds will be fit in the part of the map that remains after padding is removed. A number value will yield the same padding on all 4 sides. Supply 0 here to make a fitBounds idempotent on the result of getBounds. (types: "),e("code",[t._v("number\\|Padding")]),t._v(")")])])])]),t._v(" "),e("h4",{attrs:{id:"return-6"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#return-6"}},[t._v("#")]),t._v(" Return")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("void")]),t._v(" "),e("td")])])]),t._v(" "),e("h3",{attrs:{id:"getrecyclekey"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#getrecyclekey"}},[t._v("#")]),t._v(" getRecycleKey")]),t._v(" "),e("blockquote",[e("p",[t._v("Get the recycle key of the map")])]),t._v(" "),e("h4",{attrs:{id:"params-7"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#params-7"}},[t._v("#")]),t._v(" Params")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Param name")]),t._v(" "),e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td"),t._v(" "),e("td",[t._v("undefined")]),t._v(" "),e("td")])])]),t._v(" "),e("h4",{attrs:{id:"return-7"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#return-7"}},[t._v("#")]),t._v(" Return")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("void")]),t._v(" "),e("td")])])]),t._v(" "),e("h2",{attrs:{id:"events"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[t._v("#")]),t._v(" Events")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Event name")]),t._v(" "),e("th",[t._v("Properties")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("center_changed")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("This event is fired when the map center property changes. It sends the position displayed at the center of the map. If the center or bounds have not been set then the result is undefined. (types: "),e("code",[t._v("LatLng\\|undefined")]),t._v(")")])]),t._v(" "),e("tr",[e("td",[t._v("zoom_changed")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("This event is fired when the map zoom property changes. It sends the zoom of the map. If the zoom has not been set then the result is undefined. (types: "),e("code",[t._v("number\\|undefined")]),t._v(")")])]),t._v(" "),e("tr",[e("td",[t._v("bounds_changed")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("This event is fired when the viewport bounds have changed. It sends The lat/lng bounds of the current viewport.")])])])]),t._v(" "),e("h2",{attrs:{id:"slots"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#slots"}},[t._v("#")]),t._v(" Slots")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Description")]),t._v(" "),e("th",[t._v("Bindings")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("default")]),t._v(" "),e("td",[t._v("The default slot is wrapped in a class that sets display: none; so by default any component you add to your map will be invisible. This is ok for most of the supplied components that interact directly with the Google map object, but it's not good if you want to bring up things like toolboxes, etc.")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("visible")]),t._v(" "),e("td",[t._v("This slot must be used if you want to display content within the responsive wrapper for the map.")]),t._v(" "),e("td")])])]),t._v(" "),e("hr")])}),[],!1,null,null,null);e.default=s.exports}}]);