import { Helmet } from 'react-helmet-async';
import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { WhatsAppButton } from './WhatsAppButton';
import { ScrollToTop } from './ScrollToTop';
import { schemaOrganization, schemaWebSite } from '@/lib/seo';

const GA_MEASUREMENT_ID = 'G-2SZP0HMZX2';

export const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    if (typeof window !== 'undefined' && (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag) {
      (window as unknown as { gtag: (...a: unknown[]) => void }).gtag('event', 'page_view', {
        page_path: location.pathname + location.search,
        page_title: document.title,
      });
    }
  }, [location.pathname, location.search]);

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        {/* Global JSON-LD: Organization + WebSite (present on every page) */}
        <script type="application/ld+json">
          {JSON.stringify(schemaOrganization)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(schemaWebSite)}
        </script>
      </Helmet>
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};
