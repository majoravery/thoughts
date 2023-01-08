import * as React from "react";

import { SEOHead } from "../components";

export default function NotFound() {
  return <div>404 not found</div>;
}
export const Head = () => {
  return <SEOHead title="404: Page not found" />;
};
