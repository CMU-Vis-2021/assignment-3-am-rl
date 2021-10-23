export let v4_spec = {
  $schema: "https://vega.github.io/schema/vega-lite/v5.json",
  data: { name: "table" },
  mark: { type: "bar" },
  transform: [
    {
      filter: "datum['TOP_CHARGE_NAME'] == select['TOP_CHARGE_NAME']",
    },
  ],
  title: {
    text: "Inmate count by Known Mental Health Issues"
  },
  params: [
    {
      name: "select",
      value: { TOP_CHARGE_NAME: [] },
    },
  ],
  encoding: {
    y: {
      field: "BRADH",
      type: "nominal",
      sort: "-x",
      title: null,
      axis: { labelLimit: 300 },
    },
    x: {
      aggregate: "count",
      field: "BRADH",
      type: "quantitative",
      title: "Inmate count",
    },
  },
}
