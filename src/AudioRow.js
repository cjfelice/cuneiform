import React, { useState, useEffect, useRef } from "react";
import axios from "./axios";
import { fade, makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/Button";
import Switch from "@material-ui/core/Switch";
import PageviewIcon from "@material-ui/icons/Pageview";
import "./Row.scss";

const API_KEY = process.env.REACT_APP_SPOTIFY_API_KEY;
const API_SECRET = process.env.REACT_APP_SPOTIFY_SECRET;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    color: "white",
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "40ch",
      "&:focus": {
        width: "40ch",
      },
    },
  },
}));

function AudioRow(props) {
  const classes = useStyles();
  const [canvi, setCanvi] = useState([]);
  const [term, setTerm] = useState("");
  const [state, setState] = React.useState({
    checkedA: false,
    checkedB: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  const searchRef = useRef("");
  useEffect(() => {
    if (term !== "") {
      axios({
        url: "https://accounts.spotify.com/api/token",
        method: "post",
        params: {
          grant_type: "client_credentials",
        },
        headers: {
          Accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
        },
        auth: {
          username: "abe89ada33324c6090f59e5f84994ecc",
          password: "6fd83f21bc9a4e66a1bc2323c5d5d078",
        },
      })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {});
    }
  }, [term, state.checkedB]);

  return (
    <div style={{ marginTop: 25 }}>
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder="Search…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputRef={searchRef}
          onKeyUp={(event) => {
            if (event.key == "Enter") {
              setTerm(searchRef.current.value);
            }
          }}
          inputProps={{ "aria-label": "search" }}
        />
        GIF:
        <Switch
          checked={state.checkedB}
          onChange={handleChange}
          color="primary"
          name="checkedB"
          inputProps={{ "aria-label": "primary checkbox" }}
        />
        <IconButton
          onClick={(event) => {
            setTerm(searchRef.current.value);
          }}
          color="primary"
        >
          <PageviewIcon style={{ fontSize: 45 }} />
        </IconButton>
      </div>
      {/* <UserAuth style={{ color: "white" }} /> */}
      <div className="row">
        <div className="row_canvis">
          {canvi.map((canvi) => (
            <img
              key={canvi.imageId}
              className="row_canvi"
              src={canvi.contentUrl}
              style={{ cursor: "pointer" }}
              onError={(i) => (i.target.style.display = "none")}
              alt={canvi.name}
              onClick={() => {
                props.setContent(canvi.contentUrl);
                props.submitUrl();
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AudioRow;
