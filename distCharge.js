export let spec = {
  $schema: "https://vega.github.io/schema/vega-lite/v5.json",
  data: { name: "table" },
  selection: {
    pts: { type: "multi" },
  },
  mark: { type: "bar" },
  encoding: {
    y: {
      field: "charge",
      type: "nominal",
      sort: false,
      title: null,
      axis: { labelLimit: 300 },
    },
    x: { field: "count", type: "quantitative", title: "Inmate count" },
    color: {
      condition: {
        selection: "pts",
      },
      value: "grey",
    },
  },
  title: "Distribution of current NYC inmate criminal charges",
  config: {
    view: { continuousWidth: 928 },
    autosize: { type: "fit-x", contains: "padding" },
    title: { anchor: "start", frame: "group" },
  },
}
