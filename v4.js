export let v4_spec = {
  $schema: "https://vega.github.io/schema/vega-lite/v5.json",
  data: { name: "table" },
  mark: { type: "bar" },
  transform: [
    {
      filter: {param:"select"}
    }
  ],
  params: [
    {
      name: "select",
      value: { "TOP_CHARGE_NAME" : ["Murder- 2nd degree"] },
    },
  ],
  encoding: {
    y: {
      field: "BRADH",
      type: "nominal",
      title: null,
      axis: { labelLimit: 300 },
    },
    x: {
      aggregate: "count", 
      field: "BRADH",
      type: "quantitative",
      title: "Inmate count by Mental Health Status",
    }
  }
}