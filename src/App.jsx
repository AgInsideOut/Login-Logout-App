import React, { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import AccessAccount from "./pages/AccessAccount";
import ProfilePage from "./pages/ProfilePage";
import ProfileRecovery from "./pages/ProfileRecovery";

// Flipping pages and routes & Authentication

const App = () => {

  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  // MANAGING AUTH STATUS
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // LOGOUT FUNCTION => SETTING isAuthenticated TO FALSE
  const logout = () => {
    setIsAuthenticated(false);
  };

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <AccessAccount
            isAuthenticated={isAuthenticated}
            setIsAuthenticated={setIsAuthenticated}
          />
        }
      />
      <Route
        path="/profile"
        element={
          <ProfilePage
            isAuthenticated={isAuthenticated}
            logout={logout}
          />
        }
      />
      <Route path="/recovery" element={<ProfileRecovery />} />
    </Routes>
  );
};

export default App;