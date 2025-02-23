import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/organisms/Header';
import ChatBot from './components/organisms/ChatBot';
import HomePage from './pages/Home';
import Footer from './components/organisms/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50">
        <Header/>
        <div className="mx-auto pl-4 pr-[50rem] sm:px-6 lg:px-8 py-8 flex flex-col">
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
          <ChatBot />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;