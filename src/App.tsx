import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import WorkPage from './pages/WorkPage';
import ContactPage from './pages/ContactPage';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { Toaster } from 'sonner';

function App() {
  return (
    <>
      <Router>
        <Toaster position='bottom-right' theme='dark' className='geistMono-Regular' richColors />
        <main className='min-h-[52rem] '>
          <NavBar />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/projects' element={<ProjectsPage />} />
            <Route path='/work' element={<WorkPage />} />
            <Route path='/contact' element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
