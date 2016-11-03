/* vim: set softtabstop=2 shiftwidth=2 expandtab : */

import _ from 'lodash'

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default (vueElement, googleMapsElement, props, options) => {
  options = options || {};
  var {afterModelChanged : afterModelChanged} = options;
  _.forEach(props, ({twoWay: twoWay, type:type}, attribute) => {
    const setMethodName = 'set' + capitalizeFirstLetter(attribute);
    const getMethodName = 'get' + capitalizeFirstLetter(attribute);
    const eventName = attribute.toLowerCase() + '_changed';

    vueElement.$watch(attribute, () => {
      const attributeValue = vueElement[attribute];
      googleMapsElement[setMethodName](attributeValue);
      if (afterModelChanged) {
        afterModelChanged(attribute, attributeValue);
      }
    }, {
      deep: type === Object
    });

    if (twoWay) {
      googleMapsElement.addListener(eventName, _.throttle((ev) => {
          vueElement.$emit('g-' + eventName, googleMapsElement[getMethodName]());
        }, 100, {
          leading: true, trailing: true
        })
      );
    }
  });
}
