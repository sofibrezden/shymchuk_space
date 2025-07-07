import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomeView from './views/HomeView/HomeView';
import HistoryView from './views/HistoryView/HistoryView';
import {StyledEngineProvider} from '@mui/material/styles';

function App() {
    return (
        <StyledEngineProvider injectFirst>
            <Router>
                <MainLayout>
                    <Routes>
                        <Route path="/" element={<HomeView/>}/>
                        <Route path="/about-museum" element={<HistoryView/>}/>
                    </Routes>
                </MainLayout>
            </Router>
        </StyledEngineProvider>
    );
}

export default App;
