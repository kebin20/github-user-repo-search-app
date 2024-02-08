import { useState } from "react";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import UserDetails from "./UserDetails";

import CssBaseline from "@mui/material/CssBaseline";

function App() {
  const [userName, setUserName] = useState("");

  function handleUserNameInputChange(value) {
    setUserName(value);
  }

  return (
    <div style={{ backgroundColor: "#151c2eff" }}>
      <CssBaseline />
      <Navbar />
      <SearchBar onSubmitUserName={handleUserNameInputChange} />
      <UserDetails userName={userName} />
    </div>
  );
}

export default App;
