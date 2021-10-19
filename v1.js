export let v1_spec = {  
  $schema: "https://vega.github.io/schema/vega-lite/v5.json",
  data: { name: "table" },
  mark: "bar",
  params: [
    {
      name: "brush",
      select: { type: "interval", encodings: ["x"] }
    }
  ],
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
})