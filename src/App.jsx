import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ClassDetails from './pages/ClassDetails'
import About from './pages/About'
import Contact from './pages/Contact'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import AllClasses from './pages/AllClasses'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Courses from './components/Courses'
import './index.css'
import ScrollToTop from './components/ScrollToTop'
import WhatsAppButton from './components/WhatsAppButton'
import { useEffect, useState } from 'react'
import MaintenancePage from './components/MaintenancePage'
import Popup from './components/Popup'
import { PopupProvider } from './context/PopupContext'



// const BASE_URL = import.meta.env.VITE_API_URL;

const BASE_URL = import.meta.env.VITE_API_URL;
const BASE_URL2 = import.meta.env.VITE_API_URL2;
// const PHP_FILE = "./data.php"; // Agar same folder mein hai

function App() {

  // api calling for maintenance mode

  const [impMessage, setImpMessage] = useState("");

  // api calling for maintenance mode


  // useEffect(() => {
  //   fetch(`${BASE_URL}/api/studybracket`)
  //   .then(res => res.json())
  //   .then(data => {
  //     setImpMessage(data.message || "");
  //   });
  // }, []);



  // api with fallback
  useEffect(() => {

    const fetchMaintenanceMessage = async () => {

      try {

        // ✅ Primary API
        let res = await fetch(`${BASE_URL}/api/studybracket`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          },
          // signal: AbortSignal.timeout(8000) // ⏳ 8 sec timeout
        });

        if (!res.ok) throw new Error("Primary failed");

        let data = await res.json();

        if (data.message) {
          setImpMessage(data.message);
          return;
        }

        throw new Error("No message");

      } catch (err) {
        console.log("Primary failed → Trying fallback API");

        // Agar primary API fail ho jaye toh fallback try karenge


        try {
          // ✅ Fallback API
          let res2 = await fetch(`${BASE_URL2}/api/studybracket`);

          if (!res2.ok) return;

          let data2 = await res2.json();

          if (data2.message) {
            setImpMessage(data2.message);
          }

        } catch (err2) {
          console.log("Fallback also failed");
        };

        // Agar dono APIs fail ho jaye toh local PHP file try karenge (agar available ho)

        try {

          let res = await fetch("/data.php", {
            method: "GET",
            headers: {
              "Content-Type": "application/json"
            }
          });

          if (!res.ok) throw new Error("PHP fetch failed");

          let data = await res.json();

          if (data.message) {
            setImpMessage(data.message);
          }

        } catch (err) {
          console.log("Maintenance API failed");
        }

      }
    };

    fetchMaintenanceMessage();

  }, []);

  if (impMessage.trim() !== "") {
    return <MaintenancePage message={impMessage} />;
  } else {

    return (
      <PopupProvider>
        <BrowserRouter>
        <Popup />
          <WhatsAppButton />
          <ScrollToTop />
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/classes" element={<AllClasses />} />
                <Route path="/class/:classId" element={<ClassDetails />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </PopupProvider>
    )
  }
}
export default App