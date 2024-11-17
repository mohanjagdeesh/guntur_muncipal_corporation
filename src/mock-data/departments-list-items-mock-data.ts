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

export const EDUCATION_LIST_ITEMS:IRenderListItems ={
    title:'Education',
    liData:[
        {
            title:'School Management',
            subTitle:'Establishes, maintains, and upgrades municipal schools, including primary, secondary, and higher secondary schools.'
        },
        {
            title:'Teacher Recruitment and Training',
            subTitle:'Recruits, trains, and provides professional development opportunities for teachers'
        },
        {
            title:'Curriculum Development',
            subTitle:' Develops and implements the curriculum for municipal schools, ensuring it aligns with national and state education standards.'
        },
        {
            title:'Student Enrollment and Welfare',
            subTitle:'Manages student admissions, attendance, and provides support services for student welfare.'
        },
        {
            title:'Infrastructure Development',
            subTitle:'Ensures the construction, maintenance, and repair of school buildings, classrooms, and other facilities.'
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
                title:'User Charges',
                subTitle:'Collecting fees for various municipal services like water supply, sewerage, solid waste management, and building permits.'
            },
            {
                title:'License Fees',
                subTitle:'Collecting fees for various licenses and permits issued by the corporation, such as trade licenses, hawker licenses, and vehicle parking permits.'
            },
            {
                title:'Advertisement Tax',
                subTitle:'Collecting taxes on advertisements displayed on public and private properties within the municipal area.'
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
]