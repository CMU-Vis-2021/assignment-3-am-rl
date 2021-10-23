export let v1_spec = {
  $schema: "https://vega.github.io/schema/vega-lite/v5.json",
  data: { name: "table" },
  mark: { type: "bar" },
  params: [
    {
      name: "select",
      select: { type: "point", encodings: ["y"] },
    },
  ],
  encoding: {
    y: {
      field: "TOP_CHARGE_NAME",
      type: "nominal",
      sort: "-x",
      title: null,
      axis: { labelLimit: 300 },
    },
    x: {
      aggregate: "count",
      field: "TOP_CHARGE_NAME",
      type: "quantitative",
      title: "Inmate count by Top Charge",
    },
    color: {
      condition: {
        selection: "select",
      },
      value: "grey",
    },
  },
}
