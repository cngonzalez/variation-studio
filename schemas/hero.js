import createSchemaWithVariations from "./createSchemaWithVariations"

const hero = {
  name: 'hero',
  title: 'Hero',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'title',
      type: 'string',
    },
    {
      name: 'cta',
      title: 'cta',
      type: 'string',
    },
    {
      name: 'image',
      title: 'image',
      type: 'image',
      options: {
        hotspot: true,
        crop: true
      }
    },
  ],
}

const heroWithVariations = createSchemaWithVariations(hero, 'brand')

export default heroWithVariations