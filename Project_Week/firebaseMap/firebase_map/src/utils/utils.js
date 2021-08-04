import axios from "axios";

export const createUserInFirebase = async (username) => {
  const data = {
    name: username,
    coordinates: {
      latitude: 53.7755648,
      longitude: -1.5433728,
    },
  };
  axios
    .put("https://locateusers-95b86-default-rtdb.firebaseio.com/users.json", data)
    .then((response) => {
      console.log(response.data, response.status);
    })
    .catch((error) => {
      console.log(error);
    });
};
