import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Landing from "./components/Landing";
import { Counter } from "./features/counter/Counter";
import TeamMemberList from "./features/teams/components/TeamMemberList";
import UserProfile from "./features/users/components/UserProfile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route
          path="/user"
          element={<UserProfile user={{ userId: "111", username: "Dummy" }} />}
        />
        <Route path="/teams" element={<TeamMemberList teamId="1234" />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
