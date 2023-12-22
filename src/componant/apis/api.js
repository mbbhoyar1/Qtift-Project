import axios from "axios";

export const Base = "https://qtify-backend-labs.crio.do";



export const fetchtopalbum = async () => {
    try{
        const responce = await axios.get(`${Base}/albums/top`);
        return responce.data;
    }
    catch (e){
        console.log(e);

    }
};

export const fetchnewalbum = async () => {
    try{
        const responce = await axios.get(`${Base}/albums/new`);
        return responce.data;
    }
    catch (e){
        console.log(e);

    }
};
// fetch for song section


export const fetchsong = async () => {
    try{
        const responce = await axios.get(`${Base}/songs`);
        return responce.data;
    }
    catch (e){
        console.log(e);

    }
};

export const fetchgenres = async () => {
    try{
        const responce = await axios.get(`${Base}/genres`);
        return responce.data;
    }
    catch (e){
        console.log(e);

    }
};



