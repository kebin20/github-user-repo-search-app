import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
// import Switch from "@mui/material/Switch";

// const label = { inputProps: { "aria-label": "Color theme switcher" } };

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        sx={{
          boxShadow: "none",
          backgroundColor: "transparent",
        }}
        position="static"
      >
        <Toolbar
          sx={{
            display: "flex",
            gap: "90px",
            padding: "40px",
            marginInline: "10px",
          }}
        >
          <Typography variant="h6" component="h1" sx={{ flexGrow: 1 }}>
            devfinder
          </Typography>
          {/* <Box sx={{ flexGrow: 1 }}>
            <Typography
              variant="h6"
              component="span"
              sx={{ flexGrow: 1, fontSize: "13px" }}
            >
              LIGHT
            </Typography>
            <Switch {...label} defaultChecked />
          </Box> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
