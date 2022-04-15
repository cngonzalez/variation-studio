export default function createSchemaWithVariations(schema, variantType) {

  const { fields, ...schemaObject } = schema

  //you don't have to add this step, but it may be useful if you
  //want to limit the fields that can vary
  let fieldsToVary = fields.filter(field => 
    field.options && field.options.canHaveVariant)
  if (!fieldsToVary.length) {fieldsToVary = fields}

  const variationObject = {
    //you could also add icon or anything else
    name: `${variantType}Variant`,
    title: variantType,
    type: 'object',
    fields: [
      //this is how we "tag" our variant
      {
        name: variantType,
        type: 'reference',
        to: [{ type: variantType }],
      },
      //then we include the fields from the original object
      ...fieldsToVary
    ]
    //if you wanted to add a preview,
    //it might be useful to include a brand icon or similar for the user!
  }

  return {
    ...schemaObject,
    groups: [
      ...(schemaObject.groups ?? []),
      {
        name: 'variations',
        title: 'Variations',
      } 
    ],
    fields: [
      ...fields,
      {
        name: 'variations',
        title: 'Variations',
        type: 'array',
        of: [variationObject]
      },
    ]
  }
}