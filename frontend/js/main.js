import tortureVis from "./visualization.js"
import updateGithub from "./github.js"

// function addTextBuffers() {
//   d3.selectAll('.section').each(function(d) {
//     let child = d3.select(this).select('.narration-question').node();
//     d3.select(child).select('#scrollBuffer').remove();

//     if (child && (child.clientHeight > this.scrollHeight)) {
//       d3.select(child).append('div')
//         .attr('id', 'scrollBuffer')
//         .style('height', '30vh')
//         .style('width', '1px');
//     }
//   });
// }

function initTortureVis(data) {
  window.tv = new tortureVis({
    container: "#tortureVis #main",
    data: data
  });
}

function initFullpage() {
  let fpCfg = {
    // paddingTop: "30px",
    // paddingBottom: "30px",
    responsiveWidth: 1100,

    controlArrows: false,
    // navigation: true,
    navigationPosition: "right",
    slidesNavigation: true,
    slidesNavPosition: "top",
    afterResize: function(width, height) {
      console.log('Resize:', width, height);
      if (tv.pie)
        tv.pie.react(); // Redraw vis

      // window.tv.build({
      //   width,
      //   height
      // });
      // console.log('Resize:', width, height);
      // console.log("Body", document.body.clientWidth, document.body.clientHeight);
      // fullpage_api.reBuild();
      return true;
    },
    // afterRender: function() {
    //   // window.tv.addTextBuffers();
    //   // bug hack: putting rebuild in afterRender then reloading WITH cache
    //   // setTimeout(d => fullpage_api.reBuild(), 100);
    // }
    normalScrollElements: '#tortureVis #filters, .select2-results__options',
    // afterLoad: d => window.tv.tip.show(),
    // onLeave: d => window.tv.tip.hide(),
    // afterSlideLoad: d => window.tv.tip.show(),
    // onSlideLeave: d => window.tv.tip.hide(),
  }

  if (!('visData' in window))
    fpCfg.navigation = "true";

  let fp = new fullpage('#fullpage', fpCfg);
}

function setAdminMode() { // hide all sections except tortureVis
  document.querySelectorAll('.section').forEach(d => {
    if (d.id != "tortureVis")
      d.remove();
  });
  document.querySelector('#admin-github-push').style.display = 'unset';

  function update() {
    console.log('Updating Aggregates');
    let githubToken = $('#iam-id').val();
    if (!githubToken.startsWith('ghp')) {
      alert('Please enter a valid token and try again.')
    }
    let cfg = {
      githubToken,
      owner: 'mwolfeu',
      repo: 'jpp-prototype',
      path: "frontend/js/aggregates.js"
    }
    updateGithub(cfg, window.visData);
  }

  $('#login-button #update').click(update);
}

let urlSearchParams = new URLSearchParams(window.location.search);

if (urlSearchParams.has('vis-data')) {
  try {
    if (!window.visData) // if not set via "window", look for data in URL
      window.visData = JSON.parse(urlSearchParams.get('vis-data'));
    setAdminMode();
  } catch (error) {
    console.error('Bad JSON data in URL.', error);
  }
}

// init timeline
let tlURL = `https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?theme=${window.location.href}css/timeline.css&source=14v8QancR0YtWpJc9djqwbqCvEDwgKHzaZ5tkJzssDKM&font=Default&lang=en&initial_zoom=2&height=650`;
let timeline = document.querySelector('iframe')
if (timeline) timeline.setAttribute('src', tlURL);

initTortureVis();
// d3.selectAll(".section")
//   .classed("fp-auto-height-responsive", true);
document.querySelectorAll('.section').forEach(d =>
  d.classList.add("fp-auto-height-responsive"))

initFullpage();