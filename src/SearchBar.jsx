/* eslint-disable react/prop-types */
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";

import { useState } from "react";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#202C49ff",
  color: "white",
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function SearchAppBar({ onSubmitUserName }) {
  const [inputValue, setInputValue] = useState("");

  function handleChange(event) {
    setInputValue(event.target.value);
  }

  function handleSubmit() {
    onSubmitUserName(inputValue);
    setInputValue("");
  }

  function handleKeyPress(event) {
    event.key === "Enter" ? handleSubmit() : "";
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexGrow: 1,
        backgroundColor: "#202C49ff",
        borderRadius: "10px",
        m: 2,
        padding: "20px 15px",
      }}
    >
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search Github username…"
          inputProps={{ "aria-label": "search Github username" }}
          value={inputValue}
          onChange={handleChange}
          onKeyDown={handleKeyPress}
        />
      </Search>
      <Button variant="contained" onClick={handleSubmit}>
        Search
      </Button>
    </Box>
  );
}
