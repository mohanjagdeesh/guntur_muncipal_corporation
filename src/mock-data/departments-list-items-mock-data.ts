import { IRenderListItems } from "../interfaces/IRenderListItems";

export const ADMINISTRATION_LIST_ITEMS:IRenderListItems ={
    title:'Administration',
    liData:[
        {
            title:'Personnel Management',
            subTitle:'Handles recruitment, training, and performance management of municipal employees.'
        },
        {
            title:'Financial Management',
            subTitle:'Oversees the preparation and execution of the municipal budget, including revenue collection and expenditure control.'
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

export const EDUCATION_ADMINISTRATION_LIST_ITEMS:IRenderListItems = {
    title:'Overall, the Administration & Education department works to',
    liData:[
        {
            subTitle:`Provide quality education to the city's children.`
        },
        {
            subTitle:`Ensure efficient and effective administration of municipal services.`
        },
        {
            subTitle:`Promote the overall development of the city.`
        }
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
                title:'Immunization Programs',
                subTitle:`Implementing and monitoring immunization programs to prevent infectious diseases.`,
            },
            {
                title:'Health Education and Awareness',
                subTitle:`Conducting health education campaigns to promote healthy lifestyles, hygiene practices, and disease prevention.`,
            },
            {
                title:'Vector Control',
                subTitle:`Controlling the spread of vector-borne diseases like dengue, malaria, and chikungunya through measures like fogging, larviciding, and public awareness campaigns.`,
            },
            {
                title:'Food Safety and Hygiene',
                subTitle:`Inspecting food establishments, ensuring adherence to food safety regulations, and taking action against violations.`,
            },
        ],
    },
    {
        title:'Curative Healthcare',
        liData:[
            {
                title:'Primary Healthcare Centers',
                subTitle:` Operating primary healthcare centers to provide basic medical care, including diagnosis, treatment, and referral services.`,
            },
            {
                title:'Family Planning Services',
                subTitle:`Providing family planning services and counseling.`,
            },
            {
                title:'Maternal and Child Health',
                subTitle:`Providing antenatal, postnatal, and child healthcare services.`,
            },
            {
                title:'Emergency Medical Services:',
                subTitle:`Providing emergency medical services, including ambulance services and disaster response.`,
            },
        ],
    },
    {
        title:'Environmental Health',
        liData:[
            {
                title:'Sanitation',
                subTitle:`Ensuring proper sanitation and waste management practices, including solid waste collection, transportation, and disposal.`,
            },
            {
                title:'Clean Water Supply',
                subTitle:`Monitoring water quality and ensuring safe drinking water supply.`,
            },
            {
                title:'Air Quality Monitoring',
                subTitle:`Monitoring air quality and taking measures to reduce pollution.`,
            },
            {
                title:'Control of Communicable Diseases',
                subTitle:`Implementing measures to control the spread of communicable diseases.`,
            },
        ],
    },
    {
        title:'Public Health Surveillance',
        liData:[
            {
                title:'Disease Surveillance',
                subTitle:`Monitoring the incidence and prevalence of diseases.`,
            },
            {
                title:'Epidemic Response',
                subTitle:`Responding to outbreaks of infectious diseases.`,
            },
            {
                title:'Health Data Analysis',
                subTitle:`Analyzing health data to identify trends and inform public health policies.`,
            },
        ],
    },
];