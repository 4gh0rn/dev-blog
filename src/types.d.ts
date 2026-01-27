// Type definitions for CSS Modules
declare module '*.module.css' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

// Type definitions for SVG files
declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}

// Type definitions for Docusaurus theme modules
declare module '@theme/*' {
  const content: any;
  export default content;
}

// Type definitions for Docusaurus router
declare module '@docusaurus/router' {
  export function useLocation(): { pathname: string; hash: string; search: string };
}

// Type definitions for Docusaurus core modules
declare module '@docusaurus/Link' {
  import React from 'react';
  interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    to?: string;
    href?: string;
  }
  const Link: React.FC<LinkProps>;
  export default Link;
}

declare module '@docusaurus/useBaseUrl' {
  function useBaseUrl(url: string): string;
  export default useBaseUrl;
}

// Type definitions for static assets
declare module '/static/*' {
  const content: string;
  export default content;
}
