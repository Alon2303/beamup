import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
    div: {
      "margin-top": "6em",
    },
  },
}));



export default function Search(props) {
  const classes = useStyles();
  const { setOrgName } = props;

  return (
      <form className={classes.root} noValidate autoComplete="off" >
        <TextField id="searchOrg" label="Organization.." variant="outlined" onChange = {(e) => setOrgName(e.target.value)}/>
      </form>
  );
}
