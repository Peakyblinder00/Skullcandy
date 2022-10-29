import './App.css';
import Ads from './components/mainComponents/ads';
import NavbarHover from './components/mainComponents/navbarHover';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Footer from './components/mainComponents/footer';
import Login from './pages/login';
import CreateAccount from './pages/createAccount';
import Account from './pages/account';
import Home from './pages/home';
import Navbar from './components/mainComponents/navbar';
import Shop from './pages/shop';
import Admin from './admin/admin';
import { useContext, useEffect } from "react"
import { NavbarContext } from "./context/useContext";
import SinglePage from './pages/singlePage';
import View from './pages/view';
import Sidebar from './components/mainComponents/sidebar';
import { AuthContext } from './context/authContext';
import InsideSkull from './pages/insideSkullcandy';
import Vision from './pages/ourMissionVision';
import Culture from './pages/ourCulture';
import Efforts from './pages/ourSustainableEfforts';
import Frequency from './pages/findYourFrequency';
import MusicMission from './pages/musicMission';

function App() {

  const getEmail = localStorage.getItem("Email")
  const getName = localStorage.getItem("Name")
  const { check, setCheck } = useContext(NavbarContext)
  const { currentUser } = useContext(AuthContext)

  const ProtectedRoute = ({children}) => {
    if(!currentUser){
      return <Navigate to="/"/>
    }
    return children
  }

  useEffect(() => {
    function useroradmin() {
      if (getName === "Muzaffar" && getEmail === "abdulazizovmuzaffar998@gmail.com") {
        setCheck(true)
      }
      else {
        setCheck(false)
      }
    }
    useroradmin()
  }, [])


  return (
    <BrowserRouter>
      <Navbar />
      <Ads />
      <NavbarHover />
      <Footer />
      <Sidebar />
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path='/shop' element={<Shop />} />
        <Route path='/login' element={<Login />} />
        <Route path='/create-account' element={<CreateAccount />} />
        <Route path='/account' element={check ? <ProtectedRoute><Admin /></ProtectedRoute> : <ProtectedRoute><Account /></ProtectedRoute>} />
        <Route path='/single-page/:id' element={<SinglePage />} />
        <Route path='/view-cart' element={<View />} />
        <Route path='/inside-skullcandy' element={<InsideSkull/>} />
        <Route path='/our-mission-vision-and-values' element={<Vision/>} />
        <Route path='/our-culture' element={<Culture/>} />
        <Route path='/our-sustainable-efforts' element={<Efforts/>} />
        <Route path='/find-your-frequency' element={<Frequency/>}/>
        <Route path='/music-with-mission' element={<MusicMission/>} />
        <Route path='*' element={<h1 className='text-center text-[90px] text-[#293448] h-[28.6vh]'>404 Error: Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
