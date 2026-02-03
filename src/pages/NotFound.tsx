import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | Savvy Axiss Chennai</title>
        <meta name="description" content="The page you're looking for doesn't exist. Return to Savvy Axiss Chennai - tech courses, final year projects & internships in Maduravoyal." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
    <div className="min-h-screen flex items-center justify-center hero-gradient px-4">
      <div className="text-center max-w-md">
        <h1 className="text-8xl font-heading font-bold gradient-text mb-4">404</h1>
        <h2 className="text-2xl font-heading font-semibold text-primary-foreground mb-4">
          Page Not Found
        </h2>
        <p className="text-primary-foreground/70 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="hero" asChild>
            <Link to="/">
              <Home className="w-4 h-4 mr-2" />
              Go Home
            </Link>
          </Button>
          <Button variant="heroOutline" onClick={() => window.history.back()}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Go Back
          </Button>
        </div>
      </div>
    </div>
    </>
  );
};

export default NotFound;
