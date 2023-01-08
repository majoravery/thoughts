import React from "react";
import { graphql } from "gatsby";
import {
  ContentfulRichTextGatsbyReference,
  renderRichText,
  RenderRichTextData,
} from "gatsby-source-contentful/rich-text";
import { INLINES, BLOCKS, MARKS } from "@contentful/rich-text-types";

const OPTIONS = {
  renderMark: {
    [MARKS.BOLD]: (text) => <b className="font-bold">{text}</b>,
  },
  renderNode: {
    [INLINES.HYPERLINK]: (node, children) => {
      const { uri } = node.data;
      return (
        <a href={uri} className="underline">
          {children}
        </a>
      );
    },
    [BLOCKS.HEADING_2]: (node, children) => {
      return <h2>{children}</h2>;
    },
  },
};

interface JournalEntryProps {
  data: {
    title: string;
    dateCreated: string;
    content: {
      raw: RenderRichTextData<ContentfulRichTextGatsbyReference>;
    };
  };
}

const JournalEntry: React.FC<JournalEntryProps> = ({ data }) => {
  const { content } = data;
  return <div>{renderRichText(content.raw, OPTIONS)}</div>;
};

// This is the page query that connects the data to the actual component. Here you can query for any and all fields
// you need access to within your code. Again, since Gatsby always queries for `id` in the collection, you can use that
// to connect to this GraphQL query.

export const query = graphql`
  query ($slug: String) {
    journalEntry(slug: { eq: $slug }) {
      content {
        raw
      }
    }
  }
`;

export default JournalEntry;
