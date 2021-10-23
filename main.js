import * as d3 from "d3"
import vegaEmbed from "vega-embed"
import { v1_spec } from "./v1.js"

import { v2_spec } from "./v2.js"

import { v3_spec } from "./v3.js"

import { v4_spec } from "./v4.js"

// let data = await d3.json("./charge_count.json")
let raw_data = await d3.json("./charges_join.json")

d3.select("#d3-div").append("p")

// vegaEmbed("#vega-div", {
//   $schema: "https://vega.github.io/schema/vega-lite/v5.json",
//   description: "A simple bar chart with embedded data.",
//   data: {
//     values: [
//       { a: "A", b: 28 },
//       { a: "B", b: 55 },
//       { a: "C", b: 43 },
//       { a: "D", b: 91 },
//       { a: "E", b: 81 },
//       { a: "F", b: 53 },
//       { a: "G", b: 19 },
//       { a: "H", b: 87 },
//       { a: "I", b: 52 },
//     ],
//   },
//   mark: "bar",
//   encoding: {
//     x: { field: "a", type: "nominal", axis: { labelAngle: 0 } },
//     y: { field: "b", type: "quantitative" },
//   },
// })


let embed2 = vegaEmbed("#vega-div2", v2_spec).then((res) => {
  res.view.width(300)
  res.view.change("table", res.view.changeset().insert(raw_data)).run()
})

let embed1 = vegaEmbed("#vega-div", v1_spec).then((res) => {
  res.view.width(800)
  res.view.change("table", res.view.changeset().insert(raw_data)).run()
  res.view.addSignalListener("select", (_, value) => {
    embed2.view.signal("select", value).runAsync();
  })
})

vegaEmbed("#vega-div3", v3_spec).then((res) => {
  let v3 = res.view
  res.view.width(300)
  res.view.change("table", res.view.changeset().insert(raw_data)).run()

  embed1.input.addSignalListener("select", (_, value) => {
    v3.signal("select", value).runAsync();
  })
})

vegaEmbed("#vega-div4", v4_spec).then((res) => {
  let v4 = res.view
  res.view.width(300)
  res.view.change("table", res.view.changeset().insert(raw_data)).run()

  embed1.input.addSignalListener("select", (_, value) => {
    v4.signal("select", value).runAsync();
  })
})
