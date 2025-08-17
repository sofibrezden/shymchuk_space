import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomeView from "./views/HomeView/HomeView";
import HistoryView from "./views/HistoryView/HistoryView";
import { StyledEngineProvider } from "@mui/material/styles";
import CollectionView from "./views/CollectionView/CollectionView";
import ContactSection from "./views/ContactsView/ContactsView";
import RegionDetailsView from "./views/RegionDetailsView/RegionDetailsView";

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <Router>
        <MainLayout>
          <Routes>
            <Route path="/" element={<HomeView />} />
            <Route path="/about-museum" element={<HistoryView />} />
            <Route path="/collection" element={<CollectionView />} />
            <Route path='/contacts' element={<ContactSection/>}></Route>
            <Route
              path=":regionKey"
              element={<RegionDetailsView />}
            />
          </Routes>
        </MainLayout>
      </Router>
    </StyledEngineProvider>
  );
}

export default App;
