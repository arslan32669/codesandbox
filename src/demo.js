import React from "react";
import Button from "@material-ui/core/Button";
import axios from "axios";

const BaseUrl = "https://reqres.in/api/users/2";

export default function DisableElevation() {
  return (
    <Button
      variant="contained"
      color="primary"
      disableElevation
      onClick={getUserInfo}
    >
      Disable elevation
    </Button>
  );
}

const getUserInfo = () => {
  axios
    .get(BaseUrl)
    .then((result) => console.log("api call result ", result.data.data.id))
    .catch((err) => console.log("error in response ", err));
};
