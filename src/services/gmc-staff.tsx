import axios from "axios";
const APP_URL = 'https://5h6jt5smlg.execute-api.us-east-1.amazonaws.com/dev/staffDetails';


export const getStaffDetails = async (filterKey:string) => {
    try{
        const response = await axios.get(APP_URL);
        return response.data;
    }catch(error){
        console.log(error);
    };
};