import Box from "@mui/system/Box";
import Stack from "@mui/material/Stack";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LinkIcon from "@mui/icons-material/Link";
import TwitterIcon from "@mui/icons-material/Twitter";
import BusinessIcon from "@mui/icons-material/Business";
import TestIcon from "../public/test-icon.jpg";

export default function UserDetails() {
  return (
    <Box
      component="section"
      sx={{
        p: 3,
        backgroundColor: "#202C49ff",
        color: "white",
        m: 2,
        mt: 4,
        display: "flex",
        flexDirection: "column",
        borderRadius: "10px",
      }}
    >
      <Box component={"div"} sx={{ display: "flex", flexGrow: 1, gap: "20px" }}>
        <img
          src={TestIcon}
          alt="Your Image"
          style={{ maxWidth: "50%", height: "auto", borderRadius: "50%" }}
        />
        <Box component={"div"} sx={{ flexGrow: 1 }}>
          <p>Username Here</p>
          <p>@githubuser</p>
          <p>joined in date here</p>
        </Box>
      </Box>

      <p style={{ marginTop: "25px", marginBottom: "25px" }}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima eius
        hic nostrum, qui reprehenderit
      </p>

      <Box
        component={"div"}
        sx={{
          display: "grid",
          flexGrow: 1,
          gridTemplateColumns: "repeat(3, 1fr)",
          backgroundColor: "#151C2Eff",
          borderRadius: "15px",
          padding: "25px",
          m: 1,
          textAlign: "center",
          gap: "10px",
        }}
      >
        <span>Repos</span>
        <span>Followers</span>
        <span>Following</span>
        <span>3</span>
        <span>5</span>
        <span>10</span>
      </Box>

      <Box
        sx={{
          width: "100%",
          mt: 5,
        }}
      >
        <Stack
          spacing={2}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, auto)",
            gridTemplateRows: "repeat(4, auto)",
            alignItems: "center",
            padding: "10px",
          }}
        >
          <LocationOnIcon />
          <span>Location</span>
          <LinkIcon />
          <span>Github Link</span>
          <TwitterIcon />
          <span>Twitter</span>
          <BusinessIcon />
          <span>Company</span>
        </Stack>
      </Box>
    </Box>
  );
}
