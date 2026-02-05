import React from 'react';
import Layout from '@theme/Layout';

export default function LegalNotice(): JSX.Element {
  return (
    <Layout
      title="Legal notice"
      description="Legal notice / Impressum - Uwe Wohlleber Portfolio & Blog"
    >
      <main className="container margin-vert--xl">
        <h1>Legal notice / Impressum</h1>
        <p>
          Information in accordance with § 5 TMG (Telemediengesetz) and § 18 MStV (Medienstaatsvertrag). This is a personal portfolio and blog.
        </p>
        <h2>Responsible for content</h2>
        <p>
          Uwe Wohlleber<br />
          Munich, Germany
        </p>
        <h2>Contact</h2>
        <p>
          Email: <a href="mailto:uwe@wohlleber.dev">uwe@wohlleber.dev</a>
        </p>
        <h2>Liability</h2>
        <p>
          The contents of this site were created with care. I cannot guarantee that the content is complete, correct, or up to date. As the operator of this site I am responsible for my own content on these pages in accordance with applicable law.
        </p>
      </main>
    </Layout>
  );
}
