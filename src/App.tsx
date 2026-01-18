import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingScreen from "@/components/LoadingScreen";

// Eager loaded pages (chargées immédiatement)
import Index from "./pages/Index";
import ServiceDetail from "./pages/ServiceDetail";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

// Lazy loaded pages (chargées à la demande)
const LegalNotice = lazy(() => import("./pages/LegalNotice"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfSale = lazy(() => import("./pages/TermsOfSale"));
const QuoteRequest = lazy(() => import("./pages/QuoteRequest"));
const NeonSimulator = lazy(() => import("./pages/NeonSimulator"));
const StickerSimulator = lazy(() => import("./pages/StickerSimulator"));
const TextileSimulator = lazy(() => import("./pages/TextileSimulator"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<LoadingScreen />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services/:serviceId" element={<ServiceDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/quote" element={<QuoteRequest />} />
            <Route path="/simulator" element={<NeonSimulator />} />
            <Route path="/simulator/stickers" element={<StickerSimulator />} />
            <Route path="/simulator/textile" element={<TextileSimulator />} />
            <Route path="/legal" element={<LegalNotice />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfSale />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
