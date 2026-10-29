import Card from "./components/Card/Card";
import Form from "./components/Form/Form";
import registrationForm from "./config/forms/registrationForm.json";
import cardData from "./config/cards/cardData.json";
import { NavLink, Route, Routes } from "react-router-dom";
import Home from "./components/Home";

function App() {
  function handleRegistration(values) {
    console.log("Submitted form values:", values);
  }
  return (
    <div className="min-h-screen bg-gray-50 mx-auto">
      <nav className="bg-white m-2 shadow-md border-b border-[#ccc] rounded-xl mx-auto">
        <div className="mx-auto px-6 py-4 flex gap-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-semibold border-b-2 border-blue-600 pb-1"
                : "text-gray-600 hover:text-blue-600"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/form"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-semibold border-b-2 border-blue-600 pb-1"
                : "text-gray-600 hover:text-blue-600"
            }
          >
            Form
          </NavLink>
          <NavLink
            to="/cards"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-semibold border-b-2 border-blue-600 pb-1"
                : "text-gray-600 hover:text-blue-600"
            }
          >
            Cards
          </NavLink>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/form"
          element={
            <Form config={registrationForm} onSubmit={handleRegistration} />
          }
        />
        <Route path="/cards" element={<Card cardData={cardData} />} />
      </Routes>
    </div>
  );
}

export default App;
