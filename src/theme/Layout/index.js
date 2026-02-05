/**
 * Swizzled Layout: Navbar ausblenden, wenn noNavbar={true} übergeben wird (Portfolio-Seite).
 * Klassennamen direkt, damit kein Runtime-Fehler bei ThemeClassNames.layout/wrapper.
 */
import React from 'react';
import clsx from 'clsx';
import ErrorBoundary from '@docusaurus/ErrorBoundary';
import { PageMetadata, SkipToContentFallbackId } from '@docusaurus/theme-common';
import { useKeyboardNavigation } from '@docusaurus/theme-common/internal';
import SkipToContent from '@theme/SkipToContent';
import AnnouncementBar from '@theme/AnnouncementBar';
import Navbar from '@theme/Navbar';
import Footer from '@theme/Footer';
import LayoutProvider from '@theme/Layout/Provider';
import ErrorPageContent from '@theme/ErrorPageContent';
import styles from './styles.module.css';

const MAIN_CONTAINER_CLASS = 'theme-layout-main';
const WRAPPER_MAIN_CLASS = 'main-wrapper';

export default function Layout(props) {
  const {
    children,
    noFooter,
    noNavbar = false,
    wrapperClassName,
    title,
    description,
  } = props;

  useKeyboardNavigation();

  return (
    <LayoutProvider>
      <PageMetadata title={title} description={description} />

      <SkipToContent />

      <AnnouncementBar />

      {!noNavbar && <Navbar />}

      <div
        id={SkipToContentFallbackId}
        className={clsx(
          MAIN_CONTAINER_CLASS,
          WRAPPER_MAIN_CLASS,
          styles.mainWrapper,
          wrapperClassName,
        )}
        data-no-navbar={noNavbar ? 'true' : undefined}
      >
        <ErrorBoundary fallback={(params) => <ErrorPageContent {...params} />}>
          {children}
        </ErrorBoundary>
      </div>

      {!noFooter && <Footer />}
    </LayoutProvider>
  );
}
