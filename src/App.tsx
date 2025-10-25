
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import History from "./pages/History";
import GreenTea from "./pages/GreenTea";
import BlackTea from "./pages/BlackTea";
import WhiteTea from "./pages/WhiteTea";
import Oolong from "./pages/Oolong";
import Puer from "./pages/Puer";
import ClassicRecipes from "./pages/ClassicRecipes";
import AuthorRecipes from "./pages/AuthorRecipes";
import RecipeDetail from "./pages/RecipeDetail";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/history" element={<History />} />
          <Route path="/green-tea" element={<GreenTea />} />
          <Route path="/black-tea" element={<BlackTea />} />
          <Route path="/white-tea" element={<WhiteTea />} />
          <Route path="/oolong" element={<Oolong />} />
          <Route path="/puer" element={<Puer />} />
          <Route path="/classic-recipes" element={<ClassicRecipes />} />
          <Route path="/author-recipes" element={<AuthorRecipes />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;