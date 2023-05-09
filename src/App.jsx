import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import InSession from "./pages/InSession";
import SavedLogs from "./pages/SavedLogs";
import SessionConfig from "./pages/SessionConfig";
import Landing from "./pages/Landing";
import { GoogleOAuthProvider } from "@react-oauth/google";
import ProtectedRoute from "./utils/ProtectedRoute";
import Page404 from "./pages/Page404/Page404";
import Auth from "./pages/Auth/Auth";
import StartSessionPage from "./pages/StartSessionPage/StartSessionPage";

function App() {
  return (
    <>
      <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route
              path="/home"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route
              path="/session"
              element={
                <ProtectedRoute>
                  <SessionConfig />
                </ProtectedRoute>
              }
            />
            <Route
              path="/saved-logs"
              element={
                <ProtectedRoute>
                  <SavedLogs />
                </ProtectedRoute>
              }
            />
            {/* //TODO: Reduce the number of pages launch*/}
            <Route path="/in-session" element={<StartSessionPage />} />
            <Route
              path="/in-session/:sessionId"
              element={
                <ProtectedRoute>
                  <InSession />
                </ProtectedRoute>
              }
            />
            <Route path="/auth" element={<Auth />} />
            {/* //TODO: Add a page for user settings*/}
            <Route path="*" element={<Page404 />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </GoogleOAuthProvider>
    </>
  );
}

export default App;
