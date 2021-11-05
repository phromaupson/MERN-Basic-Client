import axios from "axios";

export const createPerson = async(name, authtoken) =>
    await axios.post(
        `${process.env.REACT_APP_API}/person`, { name }, {
            headers: {
                authtoken,
            },
        }
    );

export const getPerson = async(authtoken) =>
    await axios.get(`${process.env.REACT_APP_API}/person`, {
        headers: {
            authtoken,
        },
    });