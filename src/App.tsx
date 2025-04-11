
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ModelsPage from "./pages/ModelsPage";
import InnovationPage from "./pages/InnovationPage";
import TechnologyPage from "./pages/TechnologyPage";
import DesignPage from "./pages/DesignPage";
import ModelDetailPage from "./pages/ModelDetailPage";
import ExploreModelsPage from "./pages/ExploreModelsPage";
import DesignGalleryPage from "./pages/DesignGalleryPage";
import TestDrivePage from "./pages/TestDrivePage";
import FinancingPage from "./pages/FinancingPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/models" element={<ModelsPage />} />
          <Route path="/models/:modelId" element={<ModelDetailPage />} />
          <Route path="/explore-models" element={<ExploreModelsPage />} />
          <Route path="/design-gallery" element={<DesignGalleryPage />} />
          <Route path="/innovation" element={<InnovationPage />} />
          <Route path="/technology" element={<TechnologyPage />} />
          <Route path="/design" element={<DesignPage />} />
          <Route path="/test-drive" element={<TestDrivePage />} />
          <Route path="/financing" element={<FinancingPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
