import "./App.css";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import UserDetails from "./UserDetails";

import CssBaseline from "@mui/material/CssBaseline";

function App() {
  return (
    <div style={{ backgroundColor: "#151c2eff" }}>
      <CssBaseline />
      <Navbar />
      <SearchBar />
      <UserDetails />
    </div>
  );
}

export default App;
