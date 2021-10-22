export let v1_spec = {
  $schema: "https://vega.github.io/schema/vega-lite/v5.json",
  data: { name: "table" },
  mark: { type: "bar" },
  params: [
    {
      name: "brush",
      select: { type: "interval", encodings: ["y"] },
    },
  ],
  encoding: {
    y: {
      field: "TOP_CHARGE_NAME",
      type: "nominal",
      sort: false,
      title: null,
      axis: { labelLimit: 300 },
    },
    x: {
      aggregate: "count", 
      field: "TOP_CHARGE_NAME",
      type: "quantitative",
      title: "Inmate count",
    },
  },
}
