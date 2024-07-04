import get from "./utils/getElement.js";
import getUser from "./utils/fetchUser.js";
import displayUser from "./utils/displayUser.js";

const btn = get(".btn");

const showUser = async () => {
  // get a random user from the api
  const person = await getUser();
  displayUser(person);

  // display the user
};

window.addEventListener("DOMContentLoaded", showUser);
btn.addEventListener("click", showUser);
