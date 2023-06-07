import React from 'react';
import Login from "./components/login";
import Home from "./components/home";
import Evaluaciones from "./components/evaluaciones";
import Layout from "./components/layout";
import RequireAuth from './components/authentication/RequireAuthentication';
import AuthProvider from './components/authentication/AuthProvider';
import {
  HashRouter,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const AppContext = React.createContext(null);
  console.log('Context -> ', AppContext)
  return (
    <HashRouter>
      <AuthProvider AppContext={AppContext}>
        <Routes>
              <Route path="/" element={<Login context={AppContext} />} />
              <Route path="/login" element={<Login context={AppContext} />} />
              
              <Route element={<Layout context={AppContext} />}>
                <Route
                  path="/home"
                  element={
                    <RequireAuth context={AppContext}>
                        <Home />
                    </RequireAuth>
                  }
                />
                <Route
                  path="/evaluaciones"
                  element={
                    <RequireAuth context={AppContext}>
                        <Evaluaciones />
                    </RequireAuth>
                  }
                />
              </Route>
        </Routes>
      </AuthProvider>
    </HashRouter>
  );
}

export default App;
