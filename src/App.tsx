import { Routes, Route, BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import theme from "./theme/theme";
import Layout from "./common/component/layout/Layout";
import Home from "./pages/home/Home";
import Bracelates from "./pages/bracelets/Bracelates";
import EarRings from "./pages/earrings/EarRings";
import Necklaces from "./pages/necklaces/Necklaces";

import FAQ from "./pages/faqabout/FAQ";
import { paths } from "./routes/path";
import Login from "./common/Login";
import ProductDetail from "./common/ProductDetail";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SnackBarProvider from "./context/SnackBarContext";
import CustomSnackBar from "./common/CustomSnackBar";
import NewArrivals from "./pages/newarrivals/NewArrivals";

import AuthProvider from "./context/AuthContext";
import BestSelller from "./pages/bestseller/BestSelller";

export const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Routes>
              <Route path={paths.ROOT} element={<Layout />}>
                <Route index element={<Home />} />
                <Route path={paths.EARRINGS} element={<EarRings />} />
                <Route path={paths.BRACELETS} element={<Bracelates />} />
                <Route path={paths.NECKLACES} element={<Necklaces />} />
                <Route path={paths.BESTSELLER} element={<BestSelller />} />
                <Route path={paths.FAQABOUT} element={<FAQ />} />
                <Route path={paths.NEWARRIVALS} element={<NewArrivals />} />
                <Route
                  path={paths.LOGIN}
                  element={<Login requiredHeading={true} />}
                />
                {/* <Route
                  path={paths.SIGNUP}
                  element={<Signup requiredHeading={true} />}
                /> */}
              </Route>
              <Route path={paths.PRODUCTDETAIL} element={<ProductDetail />} />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
