import axios from "axios";

export const createPerson = async(fromData, authtoken) =>
    await axios.post(
        `${process.env.REACT_APP_API}/person`, { fromData }, {
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

export const getPersons = async(id, authtoken) =>
    await axios.get(`${process.env.REACT_APP_API}/persons/${id}`, {
        headers: {
            authtoken,
        },
    });

export const removePerson = async(id, authtoken) =>
    await axios.delete(`${process.env.REACT_APP_API}/person/${id}`, {
        headers: {
            authtoken,
        },
    });

export const updatePerson = async(name, id, authtoken) =>
    await axios.put(`${process.env.REACT_APP_API}/person/${id}`, name, {
        headers: {
            authtoken,
        },
    });