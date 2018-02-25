/* vim: set softtabstop=2 shiftwidth=2 expandtab : */

import forEach from 'lodash/forEach'

export default (vueInst, googleMapsInst, events) => {
  forEach(events, (eventName) => {
    if (vueInst.$gmapOptions.autobindAllEvents ||
        vueInst.$listeners[eventName]) {
      googleMapsInst.addListener(eventName, (ev) => {
        vueInst.$emit(eventName, ev)
      })
    }
  })
}
