import Lab from 'lab';
import {jsdom} from 'jsdom';
import _ from 'lodash';
import {expect, fail} from 'code';
import assert from 'assert'
import Puppeteer from 'puppeteer'
import * as path from 'path'
import CompileStandalone from './compile-standalone'

export const lab = Lab.script()

lab.experiment('Basic tests', function () {
  let page = null

  async function loadPage () {
    return page.goto(path.resolve(__dirname, './test-pages/test-plain-map.html'), {
      waitUntil: 'domcontentloaded'
    })
  }
  async function mountVue () {
    return page.evaluateHandle(() =>
      new Promise((resolve) => {
        new Vue({
          created () {
            resolve(this)
          }
        }).$mount('#test1')
      }))
  }

  lab.before({timeout: 8000}, async function () {
    await CompileStandalone
    page = await Puppeteer.launch().then(browser => browser.newPage())
  })

  lab.test('Maps API is loaded', {timeout: 5000}, async function () {
    await loadPage()
    const vue = await mountVue()

    assert(await page.evaluate(() =>
      VueGoogleMaps.loaded.then(() => !!google.maps)),
      'google.maps is defined')

    assert(await page.evaluate(
      (vue) =>
        vue.$refs.map.$mapCreated
        .then(() => vue.$refs.map.$mapObject instanceof google.maps.Map),
      vue), '$mapPromise is defined')

    assert(await page.evaluate(
      (vue) =>
        vue.$refs.map.$mapObject
        .getDiv().parentNode.classList.contains('map-container'),
      vue),
      'Parent of $mapObject.div is a .map-container')
  })

  lab.test('Panning of map works', {timeout: 7000}, async function () {
    await loadPage()
    const vue = await mountVue()

    const [top, right, bottom, left] = await page.evaluate(() => {
      const el = document.querySelector('.map-container')
      const top = el.offsetTop
      const right = el.offsetLeft + el.offsetWidth
      const bottom = el.offsetTop + el.offsetHeight
      const left = el.offsetLeft

      return [top, right, bottom, left]
    })

    // Wait for map to load first...
    await page.evaluate((vue) =>
      vue.$refs.map.$mapCreated
      .then(() =>
        new Promise(resolve => {
          google.maps.event.addListener(
            vue.$refs.map.$mapObject,
            'idle',
            resolve
          )
        })),
      vue)

    // Then try to pan the page
    await page.mouse.move(right - 4, top + 4)
    await page.mouse.down()
    await page.mouse.move(left + 4, bottom - 4, {steps: 20})
    await new Promise(resolve => setTimeout(resolve, 100))
    await page.mouse.up()

    const {lat, lng} = await page.evaluate((vue) => {
      const c = vue.$refs.map.$mapObject.getCenter()
      return {lat: c.lat(), lng: c.lng()}
    }, vue)
    assert(lat > 1.45, 'Lat greater than 1.45')
    assert(lng > 103.9, 'Lng greater than 103.9')
  })
});
