import { IHeaderIcons, IMobleOptions } from "../interfaces/ImobileMenuOptions";

export const MOBILE_MENU_OPTIONS: IMobleOptions[] = [
    {
        linkHeader: 'HOME',
        linkTo: '/',
        linkIcon:'faHouse',
    },
    {
        linkHeader: 'ABOUT',
        subLinks: [
            {
                subLinkHeader:'GMC Body',
                associatedSubLinks:[
                    {
                        associatedSubLinkHeader:'Honourable Mayor',
                        associatedSublinkTo:'/about-us/mayor',
                        outOfBrowser:false,
                    },
                    {
                        associatedSubLinkHeader:'Honourable Deputy Mayor',
                        associatedSublinkTo:'/about-us/deputy-mayor',
                        outOfBrowser:false,
                    },
                    {
                        associatedSubLinkHeader:'Honourable Corporators',
                        associatedSublinkTo:'/about-us/corporators',
                        outOfBrowser:false,
                    },
                    {
                        associatedSubLinkHeader:'Ex-Officio Members',
                        associatedSublinkTo:'/about-us/ex-officio-members',
                        outOfBrowser:false,
                    }
                ]
            },
            {
                subLinkHeader: 'History/Introduction',
                subLinkTo:'/about-us'
            },
            {
                subLinkHeader: 'Organization',
                subLinkTo:'/about-us/organization'
            },
            {
                subLinkHeader: 'Profile',
                subLinkTo:'/about-us/profile'
            },
            {
                subLinkHeader:'Honourable Commissioner',
                subLinkTo:'/about-us/commissioner',
            },
            {
                subLinkHeader:'Honourable Additional Commissioner',
                subLinkTo:'/about-us/additional-commissioner',
            },
            {
                subLinkHeader:'Honourable Hods',
                subLinkTo:'/about-us/honourable-hods',
            },
            {
                subLinkHeader:'GMC Officers',
                subLinkTo:'/about-us/gmc-officers',
            },
            {
                subLinkHeader: 'Structure',
                subLinkTo:'/about-us/structure'
            },
            {
                subLinkHeader: 'Wards/Divisions/Zones',
                subLinkTo:'/about-us/wards-zones',
            },
            {
                subLinkHeader: 'Historical And Religious Places',
                subLinkTo:'/about-us/religious-places',
            },
            {
                subLinkHeader: 'Parks',
                subLinkTo:'/about-us/parks',
            },
        ]
    },
    {
        linkHeader: 'ONLINE SERVICES',
        subLinks: [
            {
                subLinkHeader: 'Property Tax',
                associatedSubLinks: [
                    {
                        associatedSubLinkHeader: 'Know your Dues',
                        associatedSublinkTo: 'https://guntur.emunicipal.ap.gov.in/ptis/citizen/search/search-searchForm.action#no-back-button'
                    },
                    {
                        associatedSubLinkHeader: 'Range wise Dues',
                        associatedSublinkTo: '/'
                    },
                    {
                        associatedSubLinkHeader: 'File Your Self-Assessment(Not yet Assessed)',
                        associatedSublinkTo: 'https://guntur.emunicipal.ap.gov.in/ptis/create/createProperty-newForm.action?applicationSource=online#no-back-button'
                    },
                    {
                        associatedSubLinkHeader: 'File Your Revision Petition',
                        associatedSublinkTo: 'https://guntur.emunicipal.ap.gov.in/ptis/search/searchproperty-revisionpetition.action?applicationSource=online#no-back-button'
                    },
                    {
                        associatedSubLinkHeader: 'File Your General-Revision Petition',
                        associatedSublinkTo: 'https://guntur.emunicipal.ap.gov.in/ptis/search/searchproperty-general-revisionpetition.action?applicationSource=online#no-back-button'
                    },
                    {
                        associatedSubLinkHeader: 'File Your Mutation(Transfer of ownership)',
                        associatedSublinkTo: 'https://guntur.emunicipal.ap.gov.in/ptis/search/searchproperty-registeredtransfer.action?applicationSource=online#no-back-button'
                    },
                    {
                        associatedSubLinkHeader: 'File Your Addition/ Alteration',
                        associatedSublinkTo: 'https://guntur.emunicipal.ap.gov.in/ptis/search/searchproperty-alter-assessment.action?applicationSource=online#no-back-button'
                    },
                    {
                        associatedSubLinkHeader: 'File Your Demolition (Convert House Tax to VLT)',
                        associatedSublinkTo: 'https://guntur.emunicipal.ap.gov.in/ptis/search/searchproperty-demolition.action?applicationSource=online#no-back-button'
                    },
                    {
                        associatedSubLinkHeader: 'File Your Tax Exemption',
                        associatedSublinkTo: 'https://guntur.emunicipal.ap.gov.in/ptis/search/searchproperty-taxexemption.action?applicationSource=online#no-back-button'
                    },
                    {
                        associatedSubLinkHeader: 'File Your Vacancy Remission',
                        associatedSublinkTo: 'https://guntur.emunicipal.ap.gov.in/ptis/search/searchproperty-vacancyremission.action?applicationSource=online#no-back-button'
                    },
                    {
                        associatedSubLinkHeader: 'Download Proceedings / Spl. notice / Demand bill etc..',
                        associatedSublinkTo: 'https://guntur.emunicipal.ap.gov.in/ptis/reports/citizen-searchnotices.action#no-back-button'
                    },
                    {
                        associatedSubLinkHeader: 'Know your application status ',
                        associatedSublinkTo: 'https://guntur.emunicipal.ap.gov.in/wtms/elastic/appSearch/'
                    },
                    {
                        associatedSubLinkHeader: 'Property Tax Auto Calculator ',
                        associatedSublinkTo: 'https://guntur.emunicipal.ap.gov.in/ptis/calculatepropertytax'
                    },
                    
                ]
            },
            {
                subLinkHeader:'Land Tax (VLT)',
                associatedSubLinks:[
                    {
                        associatedSubLinkHeader:'Know Your Dues',
                        associatedSublinkTo:'https://guntur.emunicipal.ap.gov.in/ptis/citizen/search/search-searchForm.action#no-back-button'
                    },
                    {
                        associatedSubLinkHeader:'File Your Self Assessment (Not yet Assessed)',
                        associatedSublinkTo:'https://guntur.emunicipal.ap.gov.in/ptis/create/createProperty-newForm.action?applicationSource=online#no-back-button'
                    },
                    {
                        associatedSubLinkHeader:'File Your Addition/ Alteration ',
                        associatedSublinkTo:'https://guntur.emunicipal.ap.gov.in/ptis/search/searchproperty-alter-assessment.action?applicationSource=online#no-back-button'
                    },
                    {
                        associatedSubLinkHeader:'File Your Revision Petition',
                        associatedSublinkTo:'https://guntur.emunicipal.ap.gov.in/ptis/search/searchproperty-revisionpetition.action?applicationSource=online#no-back-button'
                    },
                    {
                        associatedSubLinkHeader:'File Your General-Revisionpetition ',
                        associatedSublinkTo:'https://guntur.emunicipal.ap.gov.in/ptis/search/searchproperty-general-revisionpetition.action?applicationSource=online#no-back-button'
                    },
                    {
                        associatedSubLinkHeader:'File Your Tax Exemption  ',
                        associatedSublinkTo:'https://guntur.emunicipal.ap.gov.in/ptis/search/searchproperty-taxexemption.action?applicationSource=online#no-back-button'
                    },
                    {
                        associatedSubLinkHeader:'File Your Mutation (Transfer of ownership)',
                        associatedSublinkTo:'https://guntur.emunicipal.ap.gov.in/ptis/search/searchproperty-registeredtransfer.action?applicationSource=online#no-back-button'
                    },
                    {
                        associatedSubLinkHeader:'Download Proceedings / Spl.notice / Demand bill etc.. ',
                        associatedSublinkTo:'https://guntur.emunicipal.ap.gov.in/ptis/reports/citizen-searchnotices.action#no-back-button'
                    },
                ]
            },
            {
                subLinkHeader:'Water Charges',
                associatedSubLinks:[
                    {
                        associatedSubLinkHeader:'Know Your Dues',
                        associatedSublinkTo:'https://guntur.emunicipal.ap.gov.in/wtms/search/waterSearch/'
                    },
                    {
                        associatedSubLinkHeader:'File Your New Connection ',
                        associatedSublinkTo:'https://guntur.emunicipal.ap.gov.in/wtms/application/newConnection-newform'
                    },
                    {
                        associatedSubLinkHeader:'File Your Additional Connection ',
                        associatedSublinkTo:'https://guntur.emunicipal.ap.gov.in/wtms/search/waterSearch/commonSearch/additionalconnection'
                    },
                    {
                        associatedSubLinkHeader:'File Your Change of Use ',
                        associatedSublinkTo:'https://guntur.emunicipal.ap.gov.in/wtms/search/waterSearch/commonSearch/changeofuse'
                    },
                    {
                        associatedSubLinkHeader:'File Your Closure of Connection',
                        associatedSublinkTo:'https://guntur.emunicipal.ap.gov.in/wtms/search/waterSearch/commonSearch/closureconnection'
                    },
                    {
                        associatedSubLinkHeader:'File Your Reconnection',
                        associatedSublinkTo:'https://guntur.emunicipal.ap.gov.in/wtms/search/waterSearch/commonSearch/reconnection'
                    },
                    {
                        associatedSubLinkHeader:'Know your application status ',
                        associatedSublinkTo:'https://guntur.emunicipal.ap.gov.in/wtms/elastic/appSearch/'
                    },
                    {
                        associatedSubLinkHeader:'File Your Regularization of Connection',
                        associatedSublinkTo:'https://guntur.emunicipal.ap.gov.in/wtms/application/regulariseconnection/new'
                    },
                ]
            },
            {
                subLinkHeader:'Common Application for Water & Sewerage',
                associatedSubLinks:[
                    {
                        associatedSubLinkHeader:'know Your Dues',
                        associatedSublinkTo:'https://guntur.emunicipal.ap.gov.in/stms/citizen/search/search-sewerage'
                    },
                    {
                        associatedSubLinkHeader:'File New Application ',
                        associatedSublinkTo:'https://guntur.emunicipal.ap.gov.in/wtms/application/newConnection-newform'
                    },
                ]
            },
            {
                subLinkHeader:'Trade Licenses',
                associatedSubLinks:[
                    {
                        associatedSubLinkHeader:'Know Your Dues ',
                        associatedSublinkTo:'https://guntur.emunicipal.ap.gov.in/tl/pay/online#no-back',
                    },
                    {
                        associatedSubLinkHeader:'How to file Trade License ',
                        associatedSublinkTo:'https://cdma.ap.gov.in/sites/default/files/How%20to%20file%20Trade%20License.pdf',
                    },
                    {
                        associatedSubLinkHeader:'File Your New Trade Licence',
                        associatedSublinkTo:'https://guntur.emunicipal.ap.gov.in/tl/newtradelicense/newTradeLicense-newForm.action#no-back',
                    },
                    {
                        associatedSubLinkHeader:'Renewal of Trade Licence',
                        associatedSublinkTo:'https://guntur.emunicipal.ap.gov.in/tl/pay/online#no-back',
                    },
                    {
                        associatedSubLinkHeader:'Closure of Trade Licence ',
                        associatedSublinkTo:'https://guntur.emunicipal.ap.gov.in/tl/pay/online#no-back',
                    },
                    {
                        associatedSubLinkHeader:'Download Provisional/Renewal / Final Certificate ',
                        associatedSublinkTo:'https://guntur.emunicipal.ap.gov.in/tl/pay/online#no-back',
                    },
                    {
                        associatedSubLinkHeader:'Know your application status  ',
                        associatedSublinkTo:'https://guntur.emunicipal.ap.gov.in/wtms/elastic/appSearch/',
                    },

                ]
            },
            {
                subLinkHeader:'Advertisement Tax ',
                associatedSubLinks:[
                    {
                        associatedSubLinkHeader:'Know your application status',
                        associatedSublinkTo:'https://guntur.emunicipal.ap.gov.in/wtms/elastic/appSearch/'
                    }
                ]
            },
            {
                subLinkHeader:'Birth & Death Registrations ',
                subLinkTo:'https://crsorgi.gov.in/web/index.php/auth/login',
                associatedSubLinks:[
                    {
                        associatedSubLinkHeader:'1967 To November 2016',
                        associatedSublinkTo:'http://ubd.ap.gov.in:8080/UBDMIS/',
                    },
                    {
                        associatedSubLinkHeader:'From December 2016',
                        associatedSublinkTo:'https://dc.crsorgi.gov.in/crs/',
                    },
                ],
            },
            {
                subLinkHeader:'Marriage Registrations ',
                associatedSubLinks:[
                    {
                        associatedSubLinkHeader:'File Your New Registration',
                        associatedSublinkTo:'https://guntur.emunicipal.ap.gov.in/mrs/registration/register?applicationSource=online'
                    },
                    {
                        associatedSubLinkHeader:'Reissue Marriage Registration',
                        associatedSublinkTo:'https://guntur.emunicipal.ap.gov.in/mrs/registration/register?applicationSource=online'
                    },
                ]
            },
            {
                subLinkHeader:'Sewerage Connection ',
                associatedSubLinks:[
                    {
                        associatedSubLinkHeader:'New Sewerage Connection',
                        associatedSublinkTo:'https://guntur.emunicipal.ap.gov.in/stms/transactions/newConnection-newform'
                    },
                    {
                        associatedSubLinkHeader:'Change of Closets/Closure of Connection',
                        associatedSublinkTo:'https://guntur.emunicipal.ap.gov.in/stms/existing/sewerage'
                    },
                ]
            }
        ]
    },
    {
        linkHeader: 'ONLINE PAYMENT',
        subLinks: [
            {
                subLinkHeader: 'Property Tax ',
                subLinkTo: 'https://guntur.emunicipal.ap.gov.in/ptis/citizen/search/search-searchForm.action#no-back-button'
            },
            {
                subLinkHeader: 'Water Charges',
                subLinkTo: 'https://guntur.emunicipal.ap.gov.in/wtms/search/waterSearch/'
            },
            {
                subLinkHeader: 'Trade License Fee',
                subLinkTo: 'https://guntur.emunicipal.ap.gov.in/tl/pay/online#no-back'
            },
            {
                subLinkHeader:'Sewerage Charges ',
                subLinkTo:'https://guntur.emunicipal.ap.gov.in/stms/citizen/search/search-sewerage'
            },
            {
                subLinkHeader:'Property Mutation Fee',
                subLinkTo:'https://guntur.emunicipal.ap.gov.in/ptis/property/transfer/search.action#no-back-button'
            },
            {
                subLinkHeader:'Leases & Agreements Fee ',
                subLinkTo:'https://guntur.emunicipal.ap.gov.in/lams-web/app/citizen/search-agreement/citizen-search.html'
            },
            {
                subLinkHeader:'Advertisement Tax ',
                subLinkTo:'https://guntur.emunicipal.ap.gov.in/adtax/citizen/search/search-advertisement'
            },
        ]
    },
    {
        linkHeader: 'DEPARTMENTS',
        subLinks: [
            {
                subLinkHeader:'Administration',
                subLinkTo:'/department/administration',
                outOfBrowser:false,
            },
            {
                subLinkHeader: 'Revenue',
                subLinkTo:'/department/revenue',
                outOfBrowser:false,
            },
            {
                subLinkHeader: 'Accounts',
                subLinkTo:'/department/accounts',
                outOfBrowser:false,
            },
            {
                subLinkHeader: 'Town Planning',
                subLinkTo:'/department/town-planning',
                outOfBrowser:false,
            },
            {
                subLinkHeader: 'Engineering',
                subLinkTo:'/department/engineering',
                outOfBrowser:false,
            },
            {
                subLinkHeader:'Public Health',
                subLinkTo:'/department/public-health',
                outOfBrowser:false,
            },
            {
                subLinkHeader:'UPACELL',
                subLinkTo:'/department/uapcell',
                outOfBrowser:false,
            },
        ]
    },
    {
        linkHeader: 'CONTACT US',
        linkTo:'/contact-us'
    },
    {
        linkHeader:'PROGRAMS/SCHEMES',
        subLinks:[
            {
                subLinkHeader:'Swachh Bharat Mission',
            },
            {
                subLinkHeader:'PMAY'
            }
        ]
    },
    {
        linkHeader: 'DASHBOARDS',
        subLinks: [
            {
                subLinkHeader: 'Property Tax',
                subLinkTo: 'https://propertytaxdashboard.allvy.com/#/revenue/collections/DISTRICT/GUNTUR'
            },
            {
                subLinkHeader: 'Municipal Services',
                subLinkTo: 'https://apcdmaopenportal.emunicipal.ap.gov.in/application-dashboard'
            },
            {
                subLinkHeader:'Online Project Management System (E-works)',
                subLinkTo:'http://appms.ap.gov.in/SEPL.PWIMS.Dashboard/APPMS_Dashboard/ViewDashboard.aspx'
            },
        ]
    },
    {
        linkHeader: 'RTI',
        subLinks: [
            {
                subLinkHeader: 'RTI ACT',
                subLinkTo: 'https://cdma.ap.gov.in/sites/default/files/Revised_RTI_ENG.docx'
            },
            {
                subLinkHeader: 'RTI 4(1)(b)',
                subLinkTo: 'https://cdma.ap.gov.in/sites/default/files/Revised_RTI_4.docx'
            },
        ]
    },
]


export const HEADER_ICONS:IHeaderIcons[] = [
    {
        title:'Skip To Main Content',
        icon:'faRetweet',
        className:'md:hidden',
    },
    {
        title:'Font Size',
        icon:'faFont',
    },
    {
        title:'Social',
        icon:'faUserPlus',
    },
    {
        title:'Sitemap',
        icon:'faSitemap',
    },
    {
        title:'Accessibility',
        icon:'faWheelchair',
    },
];