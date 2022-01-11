import { getFrames, allFeatures } from './tortureVisData.js';
import { pieSelect } from './pie.js'
import { Map } from './map.js'
import { aggregates } from './aggregates.js'
import { rootUrl } from "./common.js"
import { visText } from "./content.js"

class tortureVis {
  constructor(props) {

    var d1 = document.querySelector(props.container);
    d1.insertAdjacentHTML('beforeend', getFrames());

    if ("visData" in window) { // if predefined
      this.cbPie(window.visData);
    } else { // get it from AWS
      this.cbPie(JSON.parse(unescape(aggregates))[globalThis.lang]); // moved to github from AWS
      // this.awsGet();

      this.hasMouse = matchMedia('(pointer:fine)').matches;
    }
  }

  // Currently deprocated in favor of aggregates.js until we start doing analytics
  awsGet() {
    let url = rootUrl + "/byRegion";
    let awsCfg = {
      method: 'POST'
    };

    const aws = new aws4fetch.AwsClient({
      accessKeyId: 'none',
      secretAccessKey: 'none',
    });
    console.log('Getting Aggregates');

    let call = (async function(url, opts) {
      const response = await aws.fetch(url, awsCfg);
      this.cbPie(await response.json());
      // return response;
    }).bind(this);

    call(url, awsCfg);
  }

  cbPie(data) {
    let mapCfg = {
      selector: { root: '#tortureVis #map' },
      // plotly: { data: [{ featureidkey: "properties.NAME_3" }] }
      plotly: { data: [{ geojson: "data/PAK_adm3_mod.json", zmin: 0 }] }
    };

    // add jpg download for admin mode
    if ('visData' in window) {
      mapCfg.plotly.config = { displayModeBar: true };
      // cfg.plotly = { config: { displayModeBar: true } };
    }

    let map = new Map(mapCfg);

    // on change event
    document.addEventListener("pieselect-change", function(e) {
      // console.log(e.detail, JSON.stringify(e.detail).length);

      let c = map.getCfg();

      let selRegions = pGet(e.detail, "selectState.region", "aVal");
      // Enable / disable popdown options
      if (selRegions.length) {
        let availableOpts = selRegions.flatMap(d => Object.keys(cfg.data[d].total.category)); // options w nonzero occourances in this region
        availableOpts = [...new Set(availableOpts)]; // remove dupes
        console.log('enable ', availableOpts)

        document.querySelectorAll('.meta-select option').forEach(d => d.setAttribute('disabled', ''));
        // $('.meta-select option').attr('disabled', ''); // disable all
        availableOpts.forEach(d => document.querySelectorAll(`.meta-select option[value="${d}"]`).forEach(e => e.removeAttribute('disabled'))); // enable some

      } else {
        console.log('enable all')
        document.querySelectorAll(`.meta-select option`).forEach(e => e.removeAttribute('disabled'));
      }

      // FILTER REGIONS
      let filtered;
      if (selRegions.length) {
        let re = new RegExp(`^(${selRegions.join("|")})`, 'i');
        filtered = allFeatures.filter(d => re.test(d));
      }

      let locations = filtered ? filtered : allFeatures.filter(d => d != 'pakistan');
      let z = locations.map(d => e.detail.regions[d] || 0);

      c.plotly.data[0].locations = locations;
      c.plotly.data[0].z = z;
      c.plotly.data[0].zmax = z.reduce((a, b) => a > b ? a : b) || 10;

      let title = selRegions.length ? selRegions[0] : "Pakistan";
      let total = selRegions.length ? e.detail.filter.region[title] : e.detail.filter.total.value;

      // if (globalThis.lang == 'ur')
      //   document.querySelector('#tortureVis #map #title').innerHTML = `<span id="location">${title}</span> ${visText.torturein.ur}`;
      // else
      //   document.querySelector('#tortureVis #map #title').innerHTML = `${visText.torturein.en} <span id="location">${title}</span>`;
      document.querySelector('#tortureVis #map #title').innerHTML = `${visText.torturein[globalThis.lang]} <span id="location" style="font-family:Roboto;">${title}</span>`;

      document.querySelector('#tortureVis #map #value').innerHTML = total;

      map.react();
    });

    let cfg = {
      data,
      selector: { root: '#tortureVis #meta' },
      startCategory: "region",
      eventFilter: d => d.pakistan,
      language: window.lang,
      infoText: {
        en: "Select the option to view. Deleselect all for an aggregate.",
        ur: "دیکھنے کے لیے آپشن کو منتخب کریں۔ مجموعی کے لیے سبھی کو غیر منتخب کریں۔"
      },
      categories: {
        region: {
          options: undefined, // defined later
          values: undefined,
          excludeFromOptionCount: true,
          infoText: {
            en: "Select the province to view. Deselect all to view the country.",
            ur: "دیکھنے کے لیے صوبہ منتخب کریں۔ ملک دیکھنے کے لیے سبھی کو غیر منتخب کریں۔"
          }
        },
        // gender: {
        //   // multiSelect: true
        // },
        // other: {
        //   // multiSelect: true
        // }
      },
    };

    Object.keys(data.pakistan.total.category).forEach(d => {
      if (data.pakistan.total.category[d] > 1 && (!cfg.categories[d]))
        cfg.categories[d] = {};
    });

    // add jpg download for admin mode
    if ('visData' in window) {
      mapCfg.plotly.config = { displayModeBar: true };
      cfg.plotly = { config: { displayModeBar: true } };
    }

    let provinces = pGet(data, "pakistan.region", "aKey");
    cfg.categories.region.options = provinces;
    cfg.categories.region.values = provinces.map(d => data.pakistan.region[d]);
    this.pie = new pieSelect(cfg);
  }

}

export { tortureVis as default };