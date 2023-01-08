import React from "react";

interface SEOHeadProps {
  title: string;
  description?: string;
  image?: { url: string };
}

const SEOHead: React.FC<SEOHeadProps> = ({ title, description, image }) => {
  return (
    <>
      <meta charSet="utf-8" />
      <title>{title}</title>
      {description && (
        <meta
          name="description"
          property="og:description"
          content={description}
        />
      )}
      <meta property="og:title" content={title} />
      {image && <meta property="og:image" content={image.url} />}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      {description && <meta name="twitter:description" content={description} />}
      {image && <meta name="twitter:image" content={image.url} />}
    </>
  );
};

export default SEOHead;
