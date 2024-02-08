/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import axios from "axios";

import Box from "@mui/system/Box";
import Stack from "@mui/material/Stack";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LinkIcon from "@mui/icons-material/Link";
import TwitterIcon from "@mui/icons-material/Twitter";
import BusinessIcon from "@mui/icons-material/Business";

export default function UserDetails({ userName }) {
  const [userData, setUserData] = useState("");

  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${userName}`)
      .then((res) => setUserData(res.data))
      .catch((err) => console.log(err));
  }, [userName]);

  console.log(userData);

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
          src={userData.avatar_url}
          alt="Github user image"
          style={{ maxWidth: "50%", height: "auto", borderRadius: "50%" }}
        />
        <Box component={"div"} sx={{ flexGrow: 1 }}>
          <p>{userData.name}</p>
          <p>@{userData.login}</p>
          <p>{userData.created_at}</p>
        </Box>
      </Box>

      <p style={{ marginTop: "25px", marginBottom: "25px" }}>{userData.bio}</p>

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
        <span>{userData.public_repos}</span>
        <span>{userData.followers}</span>
        <span>{userData.following}</span>
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
          <span>{userData.location}</span>
          <LinkIcon />
          <span>{userData.blog}</span>
          <TwitterIcon />
          <span>
            {userData.twitter_username === null
              ? "No twitter handle available"
              : userData.twitter_username}
          </span>
          <BusinessIcon />
          <span>
            {" "}
            {userData.company === null
              ? "No company data"
              : userData.twitter_username}
          </span>
        </Stack>
      </Box>
    </Box>
  );
}
