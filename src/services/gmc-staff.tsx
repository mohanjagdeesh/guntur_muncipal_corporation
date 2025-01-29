import axios from "axios";
import { IApiResponse } from "../interfaces/IApiResponse";
import { IStaffDetails } from "../interfaces/IStaffDetails";
const APP_URL = 'https://5h6jt5smlg.execute-api.us-east-1.amazonaws.com/dev/staffDetails';


export const getStaffDetails = async (filterKey:string) => {    
    try{
        const response:any = await axios.get(APP_URL);
        const {body , statusCode}:IApiResponse = response.data;
        if(statusCode === 200){
            const departmentwiseStaff = body.filter((eachStaff:IStaffDetails)=> eachStaff.section === filterKey);
            return departmentwiseStaff;
        }
    }catch(error){
        console.log(error);
    };
};