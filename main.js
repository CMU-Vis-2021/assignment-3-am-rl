import * as d3 from "d3";
import vegaEmbed from "vega-embed";
import { v1_spec } from "./v1.js";

import { v2_spec } from "./v2.js";

import { v3_spec } from "./v3.js";

import { v4_spec } from "./v4.js";

// let data = await d3.json("./charge_count.json")
let raw_data = await d3.json("./charges_join.json");

d3.select("#d3-div").append("p");

let view2;
let view3;
let view4;

vegaEmbed("#vega-div2", v2_spec).then((res) => {
  view2 = res.view;
  res.view.width(300);
  res.view.change("table", res.view.changeset().insert(raw_data)).run();
});

vegaEmbed("#vega-div3", v3_spec).then((res) => {
  view3 = res.view;
  res.view.width(300);
  res.view.change("table", res.view.changeset().insert(raw_data)).run();
});

vegaEmbed("#vega-div4", v4_spec).then((res) => {
  view4 = res.view;
  res.view.width(300);
  res.view.change("table", res.view.changeset().insert(raw_data)).run();
});

vegaEmbed("#vega-div", v1_spec).then((res) => {
  res.view.width(800);
  res.view.change("table", res.view.changeset().insert(raw_data)).run();
  res.view.addSignalListener("select", (_, value) => {
    view2.signal("select", value).runAsync();
  });
  res.view.addSignalListener("select", (_, value) => {
    view3.signal("select", value).runAsync();
  });
  res.view.addSignalListener("select", (_, value) => {
    view4.signal("select", value).runAsync();
  });
});
