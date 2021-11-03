import axios from "axios";

export const createPerson = async (name, authtoken) =>
  await axios.post(
    `${process.env.REACT_APP_API}/person`,
    { name },
    {
      headers: {
        authtoken,
      },
    }
  );
