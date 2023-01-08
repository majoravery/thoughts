import React from "react";
import { graphql, Link } from "gatsby";

import { SEOHead } from "../components";

interface HomepageProps {
  data: {
    journal: {
      entries: {
        slug: string;
      }[];
    };
  };
}

const Homepage: React.FC<HomepageProps> = ({ data }) => {
  const { journal } = data;

  return (
    <div>
      {journal.entries.map((entry) => (
        <Link to={`journal/${entry.slug}`} />
      ))}
    </div>
  );
};
export const Head = () => {
  return <SEOHead title="Journal Entries" />;
};
export const query = graphql`
  {
    journalEntryCollection {
      entries {
        slug
      }
    }
  }
`;

export default Homepage;
