export let v2_spec = {
  $schema: "https://vega.github.io/schema/vega-lite/v5.json",
  data: { name: "table" },
  mark: { type: "bar" },
  params: [
    {
      name: "select",
      value: { "TOP_CHARGE_NAME" : ["Murder- 2nd degree"] },
    },
  ],
  transform: [
    {
      filter: "datum['TOP_CHARGE_NAME'] == select['TOP_CHARGE_NAME']"
    }
  ],
  encoding: {
    y: {
      field: "RACE",
      type: "nominal",
      title: null,
      axis: { labelLimit: 300 },
    },
    x: {
      aggregate: "count", 
      field: "RACE",
      type: "quantitative",
      title: "Inmate count by Race",
    }
  }
}