import React from "react";
import LoginRoutes from "./routes/Login";
import GetToken from "./hooks/GetToken";
import DashboardRoutes from "./routes/Dashboard";
import "./App.css";

function App() {
  const { token } = GetToken();

  if (token) {
    return <DashboardRoutes />;
  } else {
    return <LoginRoutes />;
  }
}

export default App;
