export let v3_spec = {
  $schema: "https://vega.github.io/schema/vega-lite/v5.json",
  data: { name: "table" },
  mark: { type: "bar" },
  transform: [
    {
      filter: "datum['TOP_CHARGE_NAME'] == select['TOP_CHARGE_NAME']",
    },
  ],
  title: {
    text: "Inmate Count by Gender"
  },
  params: [
    {
      name: "select",
      value: { TOP_CHARGE_NAME: [] },
    },
  ],
  encoding: {
    y: {
      field: "GENDER",
      type: "nominal",
      title: null,
      axis: { labelLimit: 300 },
      sort: "-x",
    },
    x: {
      aggregate: "count",
      field: "GENDER",
      type: "quantitative",
      title: "Inmate count",
    },
  },
}
