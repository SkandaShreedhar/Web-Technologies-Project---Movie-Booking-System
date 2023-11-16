import axios from 'axios';
export const getAllMovies = async() => {
    const res = await axios
    .get("/movie")
    .catch(err=> console.log(err));

    if(res.status!==200){
        return console.log("No Data");
    }

    const data = await res.data;
    return data;
};

export const sendUserAuthRequest = async(data, signup)=>{
    const res = await axios
    .post(`/user/${signup?"signup":"login"}`,{
        name: signup? data.name:"",
        email: data.email,
        password: data.password,
    }).catch((err)=>console.log(err));

    if(res.status!==200 && res.status!==201)
    {  
        console.log("Unexpected Error Occured");
    }

    const resData = await res.data;
    return resData;
};

export const sendAdminAuthrequest = async(data) => {
    const res = await axios
    .post("/admin/login",{
        email: data.email,
        password: data.password,
    }).catch((err)=>console.log(err));

    if(res.status!==200){
        return console.log("Unexpected Error");
    }

    const resData = await res.data;
    return resData;
};

export const getMovieDetails = async(id)=>{
    const res = await axios.get(`/movies/${id}`).catch((err)=>console.log(err));
    if(res.status !== 200){
        return console.log("Unexpected Error Happened");
    }
    const resData = await res.data;
    return resData;
};