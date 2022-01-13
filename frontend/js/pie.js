import { mergeDeep, pGet, pSet } from "./util.js"
import { visText, selectCategories } from "./content.js"

// TODO
// andOr
// if all single select send color

class pieSelect {
  constructor(cfg) {
    let hovertemplate = `<b>%{label}</b><br><span style='font-size:1.1em;'>${visText.total.en}: <b style='color:#ebdf9a'> %{value} </b></span> <extra></extra>`
    if (globalThis.lang == 'ur')
      hovertemplate = `<b>%{label}</b><br><span style='font-size:1.1em;'><b style='color:#ebdf9a'> %{value} </b> :${visText.total.ur}</span> <extra></extra>`

    let layout = {
      showlegend: true,
      // legend: { y: 1.5 },
      // height: props.height,
      // width: props.width,
      margin: { t: 40, r: 5, b: 30, l: 50 },
      // transition: { easing: "cubic-in-out" }
      legend: {
        font: { family: "PT Sans Narrow" },
        // x: globalThis.lang == 'ur' ? 0 : 1
      },
      font: { family: "PT Sans Narrow" },
    };

    let data = [{
      hole: .2,
      type: 'pie',
      marker: {
        colors: ['#6388b4', '#ef6f6a', '#8cc2ca', '#55ad89', '#c3bc3f', '#bb7693', '#baa094', '#a9b5ae', '#767676', '#ffae34'],
      },
      // textinfo: "label+percent",
      // textposition: "inside",
      // insidetextorientation: "radial",
      hovertemplate: hovertemplate,
      hoverlabel: {
        align: globalThis.lang == 'ur' ? 'right' : 'left',
        bgcolor: '#444',
        // font: { size: 16 },
      },
      automargin: true,
      title: { font: { family: "PT Sans Narrow" } },
      legendgrouptitle: { font: { family: "PT Sans Narrow" } },
      // hoverlabel: { font: { family: "PT Sans Narrow" } },
      textfont: { font: { family: "PT Sans Narrow" } },
      insidetextfont: { font: { family: "PT Sans Narrow" } },
      outsidetextfont: { font: { family: "PT Sans Narrow" } },
    }];

    let config = { displayModeBar: false, responsive: true };

    let def = {
      selector: { root: "", select: "#select", vis: "#vis", info: "#info" },
      // startCategory:"",
      categoryOrder: d => d.sort(),
      enable: { pull: true, outline: true, andOr: false, pieClick: true },
      marker: { pullLen: 0.012, outline: { width: 2, color: "#444" } }, // colors
      infoText: {}, // or {category:"text"} or {category:{en:"text"}}
      categories: {},
      plotly: { layout, data, config, beforeRender: null }
    }

    this.cfg = mergeDeep(def, cfg || {});
    this.categories = pGet(this.cfg, "categories", "aKey");
    this.category = cfg.startCategory;
    let colors = pGet(this.cfg, "marker.colors", "uVal");
    if (colors)
      this.plotly.data[0].colors = colors;

    // Selection UI
    let select = document.querySelector(this.cfg.selector.root + ' ' + this.cfg.selector.select);

    let selectEl = document.createElement("select");
    select.append(selectEl)
    this.categories.forEach(d => {
      let o = document.createElement("option");
      o.setAttribute('value', d);
      selectEl.append(o);
      o.text = selectCategories[d][globalThis.lang]; // d.replaceAll('_', ' ');
    });
    // select event
    selectEl.addEventListener('change',
      (d => {
        this.category = d.srcElement.value;
        this.react();
      }).bind(this));

    this.react();
  }

  setInfo(category) {
    let infoEl = document.querySelector(this.cfg.selector.root + ' ' + this.cfg.selector.info);
    let defInfoText = pGet(this.cfg, `infoText.${this.cfg.language}`, "uVal");
    let catInfoText = pGet(this.cfg.categories, `${category}.infoText.${this.cfg.language}`, "uVal");

    if (catInfoText)
      infoEl.innerText = catInfoText;
    else
      infoEl.innerText = defInfoText; // Default
  }

  react() {
    let c = this.cfg;
    this.el = document.querySelector(c.selector.root + ' ' + c.selector.vis);

    // reset
    pSet(c.plotly.data[0], "pull", []);
    pSet(c.plotly.data[0], "marker.line.width", []);

    let sState = pGet(this, `selectState.${this.category}`, "uVal");
    if (sState) {
      // marker effects
      if (pGet(this.cfg, "enable.pull", "uVal"))
        c.plotly.data[0].pull = this.selectState[this.category].map(d => d * this.cfg.marker.pullLen);
      if (pGet(this.cfg, "enable.outline", "uVal"))
        c.plotly.data[0].marker.line.width = this.selectState[this.category].map(d => d * this.cfg.marker.outline.width);
    }

    if (c.plotly.beforeRender)
      c.plotly.beforeRender(this.cfg);

    let data = this.getLabVals(this.category);
    c.plotly.data[0].labels = Object.keys(data).sort();
    c.plotly.data[0].values = c.plotly.data[0].labels.map(d => data[d]);
    c.plotly.data[0].name = this.category;

    if (this.vis) {
      Plotly.react(this.el, c.plotly.data, c.plotly.layout, c.plotly.config);
    } else {
      this.vis = Plotly.newPlot(this.el, c.plotly.data, c.plotly.layout, c.plotly.config);
      if (this.cfg.enable.pieClick) {
        this.selectState = {};
        let d = c.plotly.data[0];

        if (c.enable.pull && !c.plotly.data[0].pull)
          c.plotly.data[0].pull = c.plotly.data[0].labels.map(d => 0);

        if (c.enable.outline && !pGet(c.plotly.data[0], "marker.line", "uVal")) {
          c.plotly.data[0].marker.line = {
            width: c.plotly.data[0].labels.map(d => 0)
          }
          let mlColors = pGet(this.cfg, "marker.outline.color", "uVal");
          if (mlColors)
            c.plotly.data[0].marker.line.color = mlColors;
        }

        if (this.cfg.enable.pieClick)
          this.clickInit();
      }
    }

    this.setInfo(this.category);

    // Event
    let eData = {
      category: this.category,
      selectState: {},
      regions: {},
      filter: null
    };

    pGet(this, "selectState", "aKey").forEach(d => {
      eData.selectState[d] = this.selectState[d].selected;
    });

    pGet(this.cfg, "data", "aKey").forEach(d => {
      let selected = pGet(this, `selectState.${this.category}.selected`, "uVal"); // some selected
      if (!selected || !(selected.length)) selected = pGet(this.cfg.data, d + '.' + this.category, "aKey"); // none selected, return total
      let row = this.cfg.data[d][this.category];
      if (selected.length && row)
        eData.regions[d] = selected.map(d => row[d] || 0).reduce((a, b) => a + b);
    });

    if (this.cfg.eventFilter) eData.filter = this.cfg.eventFilter(this.cfg.data);

    var event = new CustomEvent("pieselect-change", { detail: eData });
    document.dispatchEvent(event);
  }

  clickInit() {
    this.el.on('plotly_click', (function(data) {

      // console.log(data.points[0].label, data);

      let c = this.cfg.plotly;
      let idx = c.data[0].labels.indexOf(data.points[0].label);
      let category = data.points[0].fullData.name;

      if (!(category in this.selectState)) // init state
        this.selectState[category] = Array(c.data[0].labels.length).fill(0);

      if (!pGet(this.cfg.categories, `${category}.multiSelect`, "uVal")) { // singleSelect
        this.selectState[category] = this.selectState[category].map((d, i) => {
          if (i == idx) return this.selectState[category][i]
          return 0
        });
      }

      this.selectState[category][idx] = !this.selectState[category][idx];
      this.selectState[category].selected = [];
      this.selectState[category].forEach((d, i) => {
        if (this.selectState[category][i])
          this.selectState[category].selected.push(data.points[0].fullData.labels[i]);
      });

      this.react();
    }).bind(this))
  }

  // make list of pie slice keys/values
  getLabVals(category) {
    let values = {};

    let regions = pGet(this.cfg, "data", "aKey");
    let selected = pGet(this, "selectState.region.selected", "uVal");
    if (selected && selected.length) // subset data by region
      regions = regions.filter(d => selected.includes(d.split('~')[0]) || d == 'pakistan');

    regions.forEach(d => { // region
      // add specified options
      let specifiedOptions = pGet(this.cfg, `categories.${category}.options`, 'aVal');

      if (!specifiedOptions.length) { // if not predefined && is a district

        // for all rows, brute force tally option qtys
        pGet(this.cfg.data[d], category, 'aKey').forEach(e => {
          values[e] = (values[e] || 0) + (this.cfg.data[d][category][e] || 0);
        })

      } else { // or populate w predefined vals

        let preDefVals = pGet(this.cfg.categories, `${category}.values`, "aVal");
        specifiedOptions.forEach((e, i) => {
          values[e] = e in values ? values[e] : preDefVals[i];
        });

      }

    })
    return values;
  }

}

export { pieSelect }