import { IMobleOptions } from "../interfaces/ImobileMenuOptions";

export const MOBILE_MENU_OPTIONS: IMobleOptions[] = [
    {
        linkHeader: 'HOME',
        linkTo: '/'
    },
    {
        linkHeader: 'ABOUT DISTRICT',
        linkTo: '/',
        subLinks: [
            {
                subLinkHeader: 'ABOUT DISTRICT',
                subLinkTo: '/'
            },
            {
                subLinkHeader: 'HISTORY',
                subLinkTo: '/'
            },
            {
                subLinkHeader: 'WHOS WHO',
                subLinkTo: '/'
            },
            {
                subLinkHeader: 'MAP OF DISTRICT',
                subLinkTo: '/'
            },
            {
                subLinkHeader: 'ORGANISATION CHART',
                subLinkTo: '/'
            },
            {
                subLinkHeader: 'ADMINISTRATIVE SETUP',
                subLinkTo: '/',
                associatedSubLinks: [
                    {
                        associatedSubLinkHeader: 'COLLECTORATE',
                        associatedSublinkTo: '/'
                    },
                    {
                        associatedSubLinkHeader: 'TEHSIL',
                        associatedSublinkTo: '/'
                    },
                    {
                        associatedSubLinkHeader: 'BLOCKS',
                        associatedSublinkTo: '/'
                    },
                    {
                        associatedSubLinkHeader: 'VILLAGES & PANCHAYATS',
                        associatedSublinkTo: '/'
                    },
                    {
                        associatedSubLinkHeader: 'POLICE',
                        associatedSublinkTo: '/'
                    },
                    {
                        associatedSubLinkHeader: 'CONSTITUENCIES',
                        associatedSublinkTo: '/'
                    },
                ]
            },
            {
                subLinkHeader: 'GEOGRAPHICAL AND ECONOMICAL STRUCTURE',
                subLinkTo: '/'
            }
        ]
    },
    {
        linkHeader: 'DIRECTORY',
        linkTo: '/',
        subLinks: [
            {
                subLinkHeader: 'DISASTER MANAGEMENT',
                subLinkTo: '/'
            },
            {
                subLinkHeader: 'HELPLINE',
                subLinkTo: '/'
            },
            {
                subLinkHeader: 'STD & PIN CODES',
                subLinkTo: '/'
            },
            {
                subLinkHeader: 'PUBLIC UTILITIES',
                subLinkTo: '/',
                associatedSubLinks: [
                    {
                        associatedSubLinkHeader: 'HOSPITALS',
                        associatedSublinkTo: '/'
                    },
                    {
                        associatedSubLinkHeader: 'COLLEGES/UNIVERSITIES',
                        associatedSublinkTo: '/'
                    },
                    {
                        associatedSubLinkHeader: 'POSTAL',
                        associatedSublinkTo: '/'
                    },
                    {
                        associatedSubLinkHeader: 'MUNCIPALITIES',
                        associatedSublinkTo: '/'
                    },
                    {
                        associatedSubLinkHeader: 'ELECTRICITY',
                        associatedSublinkTo: '/'
                    },
                    {
                        associatedSubLinkHeader: 'DEVELOPMENT AUTHORITIES',
                        associatedSublinkTo: '/'
                    },
                ]
            },
        ]
    },
    {
        linkHeader: 'CITIZEN SERVICES',
        linkTo: '/',
        subLinks: [
            {
                subLinkHeader: 'NIC SERVICE DESK',
                subLinkTo: '/'
            },
            {
                subLinkHeader: 'DIGITAL SEVA PORTAL',
                subLinkTo: '/'
            },
            {
                subLinkHeader: 'BHULEK PORTAL',
                subLinkTo: '/'
            },
            {
                subLinkHeader: 'E-DISTRICT PORTAL',
                subLinkTo: '/'
            },
        ]
    },
    {
        linkHeader: 'NOTICES',
        linkTo: '/',
        subLinks: [
            {
                subLinkHeader: 'EVENTS',
                subLinkTo: '/'
            },
            {
                subLinkHeader: 'TENDERS',
                subLinkTo: '/'
            },
            {
                subLinkHeader: 'ANNOUNCEMENTS',
                subLinkTo: '/'
            },
        ]
    },
    {
        linkHeader: 'TOURISM',
        linkTo: '/',
        subLinks: [
            {
                subLinkHeader: 'HOW TO REACH',
                subLinkTo: '/'
            },
            {
                subLinkHeader: 'PLACES OF INTEREST',
                subLinkTo: '/'
            },
            {
                subLinkHeader: 'CULTURE & HERITAGE',
                subLinkTo: '/'
            },
            {
                subLinkHeader: 'TOURIST PLACES',
                subLinkTo: '/'
            },
            {
                subLinkHeader: 'ACCOMMODATION',
                subLinkTo: '/'
            },
        ]
    },
    {
        linkHeader: 'DOCUMENTS',
        linkTo: '/',
        subLinks: [
            {
                subLinkHeader: 'ANNUAL REPORT',
                subLinkTo: '/'
            },
            {
                subLinkHeader: 'OFFICE ORDER',
                subLinkTo: '/'
            },
            {
                subLinkHeader: 'CENSUS',
                subLinkTo: '/'
            },
            {
                subLinkHeader: 'NOTIFICATION',
                subLinkTo: '/'
            },
            {
                subLinkHeader: 'RATE LIST',
                subLinkTo: '/'
            },
        ]
    },
    {
        linkHeader: 'DISTRICT ELECTION OFFICE',
        linkTo: '/'
    },
    {
        linkHeader: 'COVID-19 RELATED INFORMATION',
        linkTo: '/'
    },
    {
        linkHeader: 'MEDIA GALLERY',
        linkTo: '/',
        subLinks: [
            {
                subLinkHeader: 'PHOTO GALLERY',
                subLinkTo: '/'
            },
            {
                subLinkHeader: 'VIDEO GALLERY',
                subLinkTo: '/'
            },
            {
                subLinkHeader: 'PRESS RELEASE',
                subLinkTo: '/'
            },
        ]
    },
    {
        linkHeader: 'DEPARTMENTS',
        linkTo: '/',
        subLinks: [
            {
                subLinkHeader: 'EDUCATION',
                subLinkTo: '/',
                associatedSubLinks: [
                    {
                        associatedSubLinkHeader: 'PRIMARY EDUCATION',
                        associatedSublinkTo: '/'
                    },
                    {
                        associatedSubLinkHeader: 'SECONDARY EDUCATION',
                        associatedSublinkTo: '/'
                    }
                ]
            },
            {
                subLinkHeader: 'ANIMAL HUSBANDRY',
                subLinkTo: '/'
            },
            {
                subLinkHeader: 'HEALTH',
                subLinkTo: '/'
            },
            {
                subLinkHeader: 'REVENUE',
                subLinkTo: '/'
            },
            {
                subLinkHeader: 'POLICE',
                subLinkTo: '/'
            },
            {
                subLinkHeader: 'DISTRICT RURAL DEVELOPMENT AUTHORITY',
                subLinkTo: '/'
            },
        ]
    },
    {
        linkHeader: 'LAND AQUISITION RELATED INFORMATION',
        linkTo: '/',
        subLinks: [
            {
                subLinkHeader: 'LAND AQUISITION FOR PLANNED DEVELOPMENT OF GUNTUR',
                subLinkTo: '/'
            },
            {
                subLinkHeader: 'LAND AQUISITION FOR PWD',
                subLinkTo: '/'
            },

        ]
    },
    {
        linkHeader: 'RTI',
        linkTo: '/'
    }

]