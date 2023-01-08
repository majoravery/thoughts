const { documentToHtmlString } = require("@contentful/rich-text-html-renderer");
const { getGatsbyImageResolver } = require("gatsby-plugin-image/graphql-utils");

exports.createSchemaCustomization = async ({ actions }) => {
  actions.createFieldExtension({
    name: "imagePassthroughArgs",
    extend(options) {
      const { args } = getGatsbyImageResolver();
      return {
        args,
      };
    },
  });

  // actions.createFieldExtension({
  //   name: "richText",
  //   extend(options) {
  //     return {
  //       resolve(source, args, context, info) {
  //         const body = source.body;
  //         const doc = JSON.parse(body.raw);
  //         const html = documentToHtmlString(doc);
  //         return html;
  //       },
  //     };
  //   },
  // });

  // Journal Entry
  actions.createTypes(/* GraphQL */ `
    type JournalEntry implements Node {
      id: ID!
      dateCreated: DateTime
      slug: String
      content: RichText
      tags: [String]
    }
  `);
};

exports.createPages = ({ actions }) => {
  const { createSlice } = actions;
  createSlice({
    id: "header",
    component: require.resolve("./src/components/header.tsx"),
  });
};
