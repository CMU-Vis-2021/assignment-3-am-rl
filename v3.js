export let v3_spec = {
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
      field: "GENDER",
      type: "nominal",
      title: null,
      axis: { labelLimit: 300 },
    },
    x: {
      aggregate: "count", 
      field: "GENDER",
      type: "quantitative",
      title: "Inmate count by Gender",
    }
  }
}