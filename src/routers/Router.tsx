import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EnhancedNavbar from '../components/Navbar';

// Import your page components here
import Home from '../pages/Home';
import Products from '../pages/Products';
import Footer from '../components/Footer';
import Services from '../pages/Services';
import Contact from '../pages/Contact';
import About from '../pages/About';
import PoultryFarmingPage from '../pages/Poultry';
import LivestockFarmingPage from '../pages/Livestock';
import OrganicVegetablesPage from '../pages/Vegatable';
function RouterPage() {
    return (
        <Router>
            <div className="flex flex-col h-screen overflow-hidden">
                <EnhancedNavbar />
                <main className="flex-grow overflow-auto pt-20">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/products" element={<Products/>}/>
                        <Route path="/services" element={<Services/>}/>
                        <Route path="/contact" element={<Contact/>}/>
                        <Route path="/about" element={<About/>}/>
                        <Route path="/poultry" element={<PoultryFarmingPage/>}/>
                        <Route path="/livestock" element={<LivestockFarmingPage/>}/>
                        <Route path="/vegetable" element={<OrganicVegetablesPage/>}/>
                       
                    </Routes>
                    <Footer/>
                </main>
            </div>
        </Router>
    );
}

export default RouterPage;