import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/organisms/Header';
import ChatBot from './components/organisms/ChatBot';
import HomePage from './pages/Home';
import CostOfLivingBlog from './pages/blogs/cost-of-living';
import CouncilTaxDiscountsBlog from './pages/blogs/council-tax-discounts';
import EmergencyFoodBlog from './pages/blogs/emergency-food';
import PayCouncilTaxBlog from './pages/blogs/pay-council-tax';
import ChangeAddressBlog from './pages/blogs/change-address';
import PaperlessBillingBlog from './pages/blogs/paperless-billing';
import PayRentBlog from './pages/blogs/pay-rent';
import RequestRepairsBlog from './pages/blogs/request-repairs';
import FindAHomeBlog from './pages/blogs/find-a-home';
import RoadClosuresBlog from './pages/blogs/road-closures';
import ParkingPermitsBlog from './pages/blogs/parking-permits';
import BusTimetablesBlog from './pages/blogs/bus-timetables';
import RenewLoansBlog from './pages/blogs/renew-loans';
import ReserveBooksBlog from './pages/blogs/reserve-books';
import FindLocalLibraryBlog from './pages/blogs/find-local-library';
import SportsFacilitiesBlog from './pages/blogs/sports-facilities';
import EventsBlog from './pages/blogs/events';
import ParksBlog from './pages/blogs/parks';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50">
        <Header/>
        <div className="mx-auto pl-4 pr-[50rem] sm:px-6 lg:px-8 py-8 flex flex-col">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blogs/cost-of-living" element={<CostOfLivingBlog />} />
            <Route path="/blogs/council-tax-discounts" element={<CouncilTaxDiscountsBlog />} />
            <Route path="/blogs/emergency-food" element={<EmergencyFoodBlog />} />
            <Route path="/blogs/pay-council-tax" element={<PayCouncilTaxBlog />} />
            <Route path="/blogs/change-address" element={<ChangeAddressBlog />} />
            <Route path="/blogs/paperless-billing" element={<PaperlessBillingBlog />} />
            <Route path="/blogs/pay-rent" element={<PayRentBlog />} />
            <Route path="/blogs/request-repairs" element={<RequestRepairsBlog />} />
            <Route path="/blogs/find-a-home" element={<FindAHomeBlog />} />
            <Route path="/blogs/road-closures" element={<RoadClosuresBlog />} />
            <Route path="/blogs/parking-permits" element={<ParkingPermitsBlog />} />
            <Route path="/blogs/bus-timetables" element={<BusTimetablesBlog />} />
            <Route path="/blogs/renew-loans" element={<RenewLoansBlog />} />
            <Route path="/blogs/reserve-books" element={<ReserveBooksBlog />} />
            <Route path="/blogs/find-local-library" element={<FindLocalLibraryBlog />} />
            <Route path="/blogs/sports-facilities" element={<SportsFacilitiesBlog />} />
            <Route path="/blogs/events" element={<EventsBlog />} />
            <Route path="/blogs/parks" element={<ParksBlog />} />
          </Routes>
          <ChatBot />
        </div>
      </div>
    </Router>
  );
}

export default App;