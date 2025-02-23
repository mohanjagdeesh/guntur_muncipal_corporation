import { IGridReport } from "../interfaces/IGridReport.ts";
import { IRenderListItems } from "../interfaces/IRenderListItems";
import { currencyConvertor } from "../utils/Constants.tsx";

export const ADMINISTRATION_LIST_ITEMS:IRenderListItems ={
    title:'Administration',
    liData:[
        {
            title:'Personnel Management',
            subTitle:'Handles recruitment, training, and performance management of municipal employees.'
        },
        {
            title:'Financial Management',
            subTitle:'Pay and allowence bull for the ministerial employees & maintenance of service register of the municiple employees'
        },
        {
            title:'Legal Affairs',
            subTitle:'Provides legal advice and represents the corporation in legal matters.'
        },
        {
            title:'General Administration',
            subTitle:'Handles day-to-day administrative tasks, such as record-keeping, correspondence, and facility management.'
        },
    ],
};

export const REVENUE_FM_OF_LIST_ITEMS:IRenderListItems[] = [
    {
        title:'Revenue Generation',
        liData:[
            {
                title:'Property Tax Assessment and Collection',
                subTitle:'Assessing the value of properties within the municipal limits and collecting property taxes from property owners.'
            },
            {
                title:'Other Revenue Sources',
                subTitle:'Identifying and exploring other potential revenue sources, such as toll taxes, lease rentals, and fines.'
            }
        ]
    },
    {
        title:'Financial Management',
        liData:[
            {
                title:'Budget Preparation and Execution',
                subTitle:`Preparing the annual budget for the corporation, allocating funds to various departments, and monitoring expenditure.`
            },
            {
                title:'Accounts Maintenance',
                subTitle:`Maintaining accurate financial records, including revenue and expenditure accounts, and preparing financial statements.`
            },
            {
                title:'Fund Utilization',
                subTitle:`Ensuring that funds are utilized efficiently and effectively for the intended purposes.`
            },
            {
                title:'Debt Management',
                subTitle:`Managing the corporation's debt, including loan repayments and interest payments.`
            }
        ]
    },
    {
        title:'Other Functions',
        liData:[
            {
                title:'Land Records Maintenance',
                subTitle:`Maintaining accurate records of land ownership, usage, and valuation.`
            },
            {
                title:'Revenue Recovery',
                subTitle:`Taking necessary legal action to recover outstanding dues.`
            },
            {
                title:'Public Grievance Redressal',
                subTitle:`Addressing public grievances related to revenue matters.`
            }
        ]
    }
];

export const ACCOUNTS_LIST_ITEMS:IRenderListItems[]=[
    {
        title:'Financial Accounting',
        liData:[
            {
                title:'Preparation and Maintenance of Accounts',
                subTitle:'Maintaining accurate and up-to-date financial records, including general ledgers, cash books, and subsidiary ledgers.'
            },
            {
                title:'Budgeting',
                subTitle:'Preparing annual budgets, monitoring expenditure, and ensuring funds are allocated effectively.'
            },
            {
                title:'Revenue Accounting',
                subTitle:'Recording and monitoring revenue collection from various sources like property taxes, user charges, and fees.',
            },
            {
                title:'Expenditure Accounting',
                subTitle:'Recording and monitoring expenditure on various municipal services and projects.',
            }
        ],
    },
    {
        title:'Financial Reporting',
        liData:[
            {
                title:'Preparation of Financial Statements',
                subTitle:'Preparing periodic financial statements, including income statements, balance sheets, and cash flow statements.',
            },
            {
                title:'Submission of Financial Reports',
                subTitle:'Submitting financial reports to the concerned authorities, such as the state government and the Comptroller and Auditor General (CAG).',
            },
            {
                title:'Compliance with Accounting Standards',
                subTitle:'Ensuring compliance with relevant accounting standards and regulations.',
            },
        ],
    },
    {
        title:'Financial Control',
        liData:[
            {
                title:'Internal Control Systems',
                subTitle:'Implementing and maintaining strong internal control systems to prevent fraud, errors, and inefficiencies.',
            },
            {
                title:'Auditing',
                subTitle:'Coordinating with internal and external auditors to ensure the accuracy and reliability of financial information.',
            },
            {
                title:'Risk Management',
                subTitle:'Identifying, assessing, and mitigating financial risks.',
            },
        ],
    },
    {
        title:'Other Functions',
        liData:[
            {
                title:'Payroll Processing',
                subTitle:'Processing salaries and wages for municipal employees.',
            },
            {
                title:'Treasury Management',
                subTitle:`Managing the corporation's treasury functions, including bank accounts and investments`,
            },
            {
                title:'Tax Collection and Remittance',
                subTitle:'Collecting taxes and remitting them to the appropriate authorities.',
            },
            {
                title:'Financial Advisory Services',
                subTitle:'Providing financial advice to the municipal administration on various matters.',
            },
        ],
    },
];


export const TOWN_PLANNING_LIST_ITEMS:IRenderListItems[]=[
    {
        title:'Urban Planning',
        liData:[
            {
                title:'Master Plan Preparation',
                subTitle:`Developing comprehensive long-term plans for the city's growth and development, including land use zoning, infrastructure development, and transportation networks.`,
            },
            {
                title:'Development Control Regulations',
                subTitle:`Formulating and enforcing building bylaws and regulations to ensure orderly development and prevent haphazard construction.`,
            },
            {
                title:'Land Use Zoning',
                subTitle:`Classifying land into different zones, such as residential, commercial, industrial, and green zones, to optimize land use and prevent conflicts.`
            }
        ],
    },
    {
        title:'Infrastructure Planning',
        liData:[
            {
                title:'Transportation Planning',
                subTitle:`Planning and implementing transportation infrastructure, including roads, highways, public transport systems, and pedestrian walkways.`,
            },
            {
                title:'Water Supply and Sewerage',
                subTitle:`Planning and implementing water supply and sewerage systems to ensure adequate and clean water supply and efficient sewage disposal.`,
            },
            {
                title:'Stormwater Drainage',
                subTitle:`Designing and implementing stormwater drainage systems to prevent flooding and waterlogging.`
            },
            {
                title:'Solid Waste Management',
                subTitle:`Planning and implementing solid waste management systems, including waste collection, transportation, and disposal.`,
            }
        ],
    },
    {
        title:'Environmental Planning',
        liData:[
            {
                title:'Environmental Impact Assessment',
                subTitle:`Conducting environmental impact assessments for development projects to minimize their negative impact on the environment.`,
            },
            {
                title:'Green Spaces and Parks',
                subTitle:`Planning and developing green spaces, parks, and recreational areas to improve the city's environment and quality of life.`,
            },
            {
                title:'Conservation of Heritage',
                subTitle:`Identifying and preserving heritage sites and buildings to maintain the city's cultural heritage.`,
            },
        ],
    },
    {
        title:'Public Participation',
        liData:[
            {
                title:'Public Consultations',
                subTitle:`Involving the public in the planning process through public consultations and hearings.`,
            },
            {
                title:'Transparency and Accountability',
                subTitle:`Ensuring transparency and accountability in the planning process by providing public access to plans and decisions.`
            },
        ],
    },
];

export const ENGINEERING_LIST_ITEMS:IRenderListItems[] = [
    {
        title:'Infrastructure Planning and Development',
        liData:[
            {
                title:'Master Planning',
                subTitle:`Developing comprehensive long-term plans for the city's infrastructure, including roads, water supply, sewerage, drainage, and solid waste management systems.`
            },
            {
                title:'Project Planning and Design',
                subTitle:`Planning, designing, and estimating costs for various infrastructure projects.`,
            },
            {
                title:'Construction Supervision',
                subTitle:`Supervising the construction of infrastructure projects to ensure quality and adherence to standards.`,
            },
            {
                title:'Maintenance of Infrastructure',
                subTitle:`Regularly inspecting and maintaining existing infrastructure to ensure its functionality and longevity.`,
            },
        ],
    },
    {
        title:'Public Works',
        liData:[
            {
                title:'Road Construction and Maintenance',
                subTitle:`Constructing, repairing, and maintaining roads, streets, and sidewalks.`,
            },
            {
                title:'Stormwater Drainage',
                subTitle:`Designing, constructing, and maintaining stormwater drainage systems to prevent flooding`,
            },
            {
                title:'Solid Waste Management',
                subTitle:`Planning and implementing solid waste collection, transportation, and disposal systems.`,
            },
            {
                title:'Street Lighting',
                subTitle:`Designing, installing, and maintaining street lighting systems.`,
            },
        ],
    },
    {
        title:'Utilities',
        liData:[
            {
                title:'Water Supply',
                subTitle:`Planning, designing, and operating water supply systems, including water treatment plants and distribution networks.`,
            },
            {
                title:'Sewerage',
                subTitle:`Planning, designing, and operating sewerage systems, including sewage treatment plants and sewer networks.`,
            },
        ],
    },
];

export const PUBLIC_HEALTH_LIST_ITEMS:IRenderListItems[]=[
    {
        title:'Preventive Healthcare',
        liData:[
            {
                title:'Control of Communicable Diseases',
                subTitle:`Our approach focuses on minimizing the spread of communicable diseases through proactive and targeted interventions. This includes ensuring safe water quality, managing outbreaks with swift and strategic responses, and implementing the Urban Malaria Scheme to reduce the prevalence of vector-borne diseases. By adopting a holistic and community-centric methodology, we aim to enhance public health outcomes and promote healthier urban living environments.`,
            },
            {
                title:'Birth and Death Registration',
                subTitle:`The Public Health Department, under the municipal corporation, is responsible for registering all births and deaths occurring within its jurisdiction. This essential service includes issuing accurate certificates, making necessary corrections to birth and death records, and facilitating the addition of child names in birth certificates.
                        Maintenance of Urban Primary Health Centers (UPHCs)
                        The Public Health Department of the Municipal Corporation oversees the management and operation of Urban Primary Health Centers (UPHCs). These centers provide essential healthcare services, focusing on maternal and child health, including antenatal care, postnatal care, and pediatric healthcare. Additionally, UPHCs play a critical role in implementing and monitoring immunization programs aimed at preventing infectious diseases, ensuring healthier communities through proactive and comprehensive care.`,
            },
        ],
    },
];

export const UPA_CELL_LIST_ITEMS:IRenderListItems[]=[
    {
        title:'RESPONSIBILITIES',
        liData:[
            {
                subTitle:'Social Security and Welfare Schemes',
            },
            {
                subTitle:'Affordable Housing Projects',
            },
            {
                subTitle:'Slum Development and Upgradation',
            },
            {
                subTitle:'Skill Development and Employment Generation',
            },
            {
                subTitle:'Empowering Urban Poor Communities',
            },
        ]
    }
]


export const SANITATION_LIST_ITEMS:IRenderListItems[]= [
    {
        title:'HOUSEHOLDS DETAILS',
        liData:[
            {
                title:'Total Residential Households',
                subTitle:'231826'
            },
            {
                title:'Flats of Apartments',
                subTitle:'47195	(No. of apartments: 2091)',
            },
            {
                title:'Commercial Establishments',
            }
        ]
    }
];


export const WATER_SUPPLY_DETAILD_INFORMATION:IRenderListItems[] = [
    {
        title:'Water treatment facilities',
        liData:[
            {
                title:'Filtration Plants',
                subTitle:'4 No.s',
            },
            {
                title:'Installed capacity',
                subTitle:'157.20 MLD',
            },
            {
                title:'Net Present supply',
                subTitle:'149.50 MLD @ 135 LPCD',
            },
        ],
    },
    {
        title:'Distribution Network',
        liData:[
            {
                title:'Total Road Network',
                subTitle:'1350 Kms (including NH & SH)',
            },
            {
                title:'Length of Pumping Main',
                subTitle:'96 Kms',
            },
            {
                title:'Length of Distribution Network',
                subTitle:'1013 Kms'
            },
        ],
    },
    {
        title:'Service Reservoirs (AVAILABLE)',
        liData:[
            {
                title:'No. of ELSRs / GLSRs',
                subTitle:'41',
            },
            {
                title:'Total ELSRs / GLSRs Capacity',
                subTitle:`${currencyConvertor('52058')}`,
            },
        ],
    },
    {
        title:'House Service Connections',
        liData:[
            {
                title:'Total Assessments',
                subTitle:`${currencyConvertor('213270')} Nos.`,
            },
            {
                title:'Assessments with HSCs',
                subTitle:`${currencyConvertor('154825')} Nos.`,
            },
            {
                title:'HSCs',
                subTitle:`${currencyConvertor('150857')}`,
            },
            {
                title:'Metered HSCs',
                subTitle:`${currencyConvertor('3968')}`,
            },
        ],
    },
    {
        title:'Water Quality Testing Labs',
        liData:[
            {
                title:'RC Testing',
                subTitle:'10 No.s samples are being taken per each ward secretariat.',
            },
            {
                title:'H2S strips testing',
                subTitle:'Weekly 21 No.s samples are being conducted at HWW.'
            },
            {
                title:'Maintaining chlorination in water works',
                subTitle:'@ 2 ppm and up to 0.2 ppm till tail end of GMC',
            },
            {
                title:'Pipeline Leaks',
                subTitle:'Pipeline Leaks are being rectified immediately',
            },
        ],
    },
    {
        title:'Water Distribution Within the Town',
        liData:[
            {
                title:'Total No. of Elevated Level Reservoirs',
                subTitle:'25 No.s Existing + 16 No.s APMDP',
            },
            {
                title:'Total capacity of all Reservoirs 29.51ML + 20.75ML (APMDP) = 50.26ML',
                subTitle:'',
            },
            {
                title:'Total No.of Borewells in the city',
                subTitle:`${currencyConvertor('1665')}`,
            },
            {
                title:'Total No.of Borewells working',
                subTitle:`${currencyConvertor('1589')}`,
            },
            {
                title:'Total No.of open Wells',
                subTitle:'97',
            },
            {
                title:'Total No.of Public stand posts',
                subTitle:`${currencyConvertor('2945')}`,
            },
            {
                title:'Total No.of House Hold',
                subTitle:`${currencyConvertor('178372')} Nos.`,
            },
            {
                title:'No.of HS Connections',
                subTitle:`${currencyConvertor('107893')} Nos.`,
                subListItems:[
                    {
                        title:'Tap Rate',
                        subTitle:`${currencyConvertor('104221')} Nos.`,
                    },
                    {
                        title:'Meter Rate',
                        subTitle:`${currencyConvertor('3672')} Nos.`
                    }
                ]
            },
        ],
    }
];

export const WATER_QUALITY_TESTING_LABS_INFO:IGridReport =
    {
        columns:[
            {
                header:'S.No',
                accessorKey:'sno',
                id:'sno',
                cell:({row})=>row.index + 1,
              },
              {
                header:'Location',
                accessorKey:'location',
                id:'location',
              },
              {
                header:'List of tests conducted',
                accessorKey:'listOfTestsConducted',
                id:'listOfTestsConducted'
              },
              {
                header:'No. of labs',
                accessorKey:'noOfLabs',
                id:'noOfLabs',
              },
              {
                header:'List of tests conducted (ULBS OWN LAB)',
                accessorKey:'listOfTestesConductedUlb',
                id:'listOfTestesConductedUlb'
              }
        ],
        data:[
            {
                location:'Narasaraopet Road, Guntur',
                listOfTestsConducted:'Residual Chlorine, Turbidity, PH, Electrical conductivity, TDS, Ammoniacal Nitrogen, Nitrate, Hardness, Alkalinity',
                noOfLabs:'1',
                listOfTestesConductedUlb:'Residual Chlorine, Turbidity, PH, Electrical conductivity, TDS, Ammoniacal Nitrogen',
            },
        ],
    }