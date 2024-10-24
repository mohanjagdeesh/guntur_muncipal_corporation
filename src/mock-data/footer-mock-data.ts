import { IFooterNavigation } from "../interfaces/IFooterNavigation"

export const FOOTER_CONTACT_LIST_ITEMS:IFooterNavigation[] = [
    {
        liName:`7CRW+RGM, Grand Trunk Rd, Lalapet, Guntur,Andhra Pradesh 522008`,
        liIcon:'faLocationDot'
    },
    {
        liName:`+91 1234567890`,
        liIcon:'faPhone'
    },
    {
        liName:`info@example.com`,
        liIcon:'faEnvelope'
    },
]

export const FOOTER_COMPANY_LIST_ITEMS:IFooterNavigation[] = [
    {
        liName:"About Us",
        liNavigation:'/about-us'
    },
    {
        liName:"Contact Us",
        liNavigation:'/contact-us'
    },
    {
        liName:"Privacy Policy",
        liNavigation:'/privacy-policy'
    },
    {
        liName:"Terms & Conditions",
        liNavigation:'/terms-and-conditions'
    },
    {
        liName:"Support",
        liNavigation:'/support'
    },
]

export const FOOTER_SERVICES_LIST_ITEMS:IFooterNavigation[] = [
    {
        liName:"Online Services",
        liUrl:'https://google.com'
    },
    {
        liName:"Property Taxes",
        liUrl:'https://guntur.emunicipal.ap.gov.in/ptis/citizen/search/search-searchForm.action#no-back-button',
    },
    {
        liName:"Water Taxes",
        liUrl:'https://guntur.emunicipal.ap.gov.in/wtms/search/waterSearch/',
    },
    {
        liName:"Birth Certificates",
        liUrl:'https://crsorgi.gov.in/web/index.php/auth/login',
    },
    {
        liName:"Marriage Registrations",
        liUrl:'https://guntur.emunicipal.ap.gov.in/mrs/registration/register?applicationSource=online',
    },
]