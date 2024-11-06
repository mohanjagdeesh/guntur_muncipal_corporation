import { IServices } from "../interfaces/IServices";

export const HOME_SERVICES_MOCK_DATA:IServices[] = [
    {
        serviceIcon:'faBuilding',
        serviceName:'Property Tax',
        serviceDescription:'Click here to pay property taxes',
        serviceUrl:'https://guntur.emunicipal.ap.gov.in/ptis/citizen/search/search-searchForm.action#no-back-button'
    },
    {
        serviceIcon:'faHandHoldingDroplet',
        serviceName:'Water Tax',
        serviceDescription:'Click here to pay water taxes',
        serviceUrl:'https://guntur.emunicipal.ap.gov.in/wtms/search/waterSearch/'
    },
    {
        serviceIcon:'faPersonBreastfeeding',
        serviceName:'Birth Certificate',
        serviceDescription:'Click here for Birth certificate registration',
        serviceUrl:'https://crsorgi.gov.in/web/index.php/auth/login'
    },
    {
        serviceIcon:'faRestroom',
        serviceName:'Marriage Registrations',
        serviceDescription:'Click here for Marriage registrations',
        serviceUrl:'https://guntur.emunicipal.ap.gov.in/mrs/registration/register?applicationSource=online'
    },
    {
        serviceIcon:'faNewspaper',
        serviceName:'Register a Complaint',
        serviceDescription:'Click here for Complaint registration',
        serviceUrl:'https://google.com'
    },
    {
        serviceIcon:'faComputer',
        serviceName:'Online Services',
        serviceDescription:'Click here for Online services',
        serviceUrl:'https://google.com'
    },
]