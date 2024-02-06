import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Switch from "@mui/material/Switch";

const label = { inputProps: { "aria-label": "Switch demo" } };

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h3" component="h1" sx={{ flexGrow: 1 }}>
            devfinder
          </Typography>
          <Typography variant="h3" component="h1" sx={{ flexGrow: 1 }}>
            repofinder
          </Typography>
          <Switch {...label} defaultChecked />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
