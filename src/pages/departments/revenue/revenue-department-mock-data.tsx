import { ITitleGrid } from "../../../interfaces/ITitleGrid.ts";
import { currencyConvertor } from "../../../utils/Constants.tsx";

export const REVENUE_GRIDS_MOCK_DATA:ITitleGrid[] = [
    {
        gridTitle:'SHOP ROOMS LEASES (2024-25) AS ON 02-10-2024',
        gridColumns:{
            columns:[
                {
                    header:'S.No',
                    accessorKey:'sno',
                    id:'sno',
                    cell:({row})=>row.index + 1,
                  },
                  {
                    header:'No. Of Complexes & Shops',
                    accessorKey:'shops',
                    id:'shops',
                  },
                  {
                    header:'Demand(Rs.)',
                    accessorKey:'demand',
                    id:'demand',
                  },
                  {
                    header:'Collection(Rs.)',
                    accessorKey:'collection',
                    id:'collection',
                  },
                  {
                    header:'Balance(Rs.)',
                    accessorKey:'balance',
                    id:'balance',
                  },
                  {
                    header:'%',
                    accessorKey:'shopPercent',
                    id:'shopPercent',
                  },
            ],
            data:[
                {
                    shops:'55 & 1156',
                    demand:`${currencyConvertor('30619325')}`,
                    collection:`${currencyConvertor('11050468')}`,
                    balance:`${currencyConvertor('19568857')}`,
                    percent:'36.09'
                }
            ]
        }
    },
    {
      gridTitle: "WATER CHARGES [NON-DOMESTIC] (2024-25 AS ON 02-10-2024)",
      gridColumns: {
        columns: [
          {
            header: "S.No",
            accessorKey: "sno",
            id: "sno",
            cell: ({ row }) => row.index + 1,
          },
          {
            header: "Type of Properties",
            accessorKey: "propertyTypes",
            id: "propertyTypes",
          },
          {
            header: "No. of Assessments",
            accessorKey: "noOfAssessments",
            id: "noOfAssessments",
          },
          {
            header: "DEM",
            accessorKey: "arrearDem",
            id: "arrearDem",
          },
          {
            header: "COL",
            accessorKey: "arrearCol",
            id: "arrearCol",
          },
          {
            header: "BAL",
            accessorKey: "arrearBal",
            id: "arrearBal",
          },
          {
            header: "DEM",
            accessorKey: "currentDem",
            id: "currentDem",
          },
          {
            header: "COL",
            accessorKey: "currentCol",
            id: "currentCol",
          },
          {
            header: "BAL",
            accessorKey: "currentBal",
            id: "currentBal",
          },
          {
            header: "DEM",
            accessorKey: "totalDem",
            id: "totalDem",
          },
          {
            header: "COL",
            accessorKey: "totalCol",
            id: "totalCol",
          },
          {
            header: "BAL",
            accessorKey: "totalBal",
            id: "totalBal",
          },
        ],
        columnGroups: [
          {
            id: "arrear",
            header: "Arrear",
            columns: ["arrearDem", "arrearCol", "arrearBal"],
          },
          {
            id: "current",
            header: "Current",
            columns: ["currentDem", "currentCol", "currentBal"],
          },
          {
            id: "total",
            header: "Total",
            columns: ["totalDem", "totalCol", "totalBal"],
          },
        ],
        data: [
          {
            propertyTypes:'Water Chargers[Metered]',
            noOfAssessments:'3973',
            arrearDem:'3574.34',
            arrearCol:'3271.10',
            arrearBal:'303.24',
            currentDem:'250.99',
            currentCol:'133.98',
            currentBal:'117.01',
            totalDem:'3825.33',
            totalCol:'3405.08',
            totalBal:'420.25'
          }
        ],
      },
    },
    {
      gridTitle:'Markets [Aseel] (2024-25)',
      gridColumns:{
        columns:[
          {
            header:'S.No',
            accessorKey:'sno',
            id:'sno',
            cell:({row})=>row.index + 1,
          },
          {
            header:'Name Of Markets',
            accessorKey:'nameOfMarkets',
            id:'nameOfMarkets',
          },
          {
            header:'Target',
            accessorKey:'target',
            id:'target',
          },
          {
            header:'Collection',
            accessorKey:'collection',
            id:'collection',
          },
          {
            header:'Balance',
            accessorKey:'balance',
            id:'balance',
          },
          {
            header:'% of Collection',
            accessorKey:'percentCollection',
            id:'percentCollection',
          }
        ],
        columnGroups:[
          {
            id:'rsInCrores',
            header:'(Rs. In Crores)',
            columns:['target','collection','balance','percentCollection']
          }
        ],
        data:[
          {
            nameOfMarkets:'Dr. Kolli Sarada Whole Sale Veg. Market',
            target:'0.50',
            collection:'0.19',
            balance:'0.31',
            percentCollection:'83.00'
          },
          {
            nameOfMarkets:'PVK Naidu Veg. Market',
            target:'0.36',
            collection:'0.15',
            balance:'0.21',
            percentCollection:'41.67',
          },
          {
            nameOfMarkets:'Green Grass Market',
            target:'0.0036',
            collection:'0.0020',
            balance:'0.00',
            percentCollection:'55.56',
          },
          {
            nameOfMarkets:'Near Milk Hospital Market',
            target:'0.0060',
            collection:'0.0050',
            balance:'0.00',
            percentCollection:'83.33',
          },
          {
            nameOfMarkets:'Toilets',
            target:'0.27',
            collection:'0.16',
            balance:'0.11',
            percentCollection:'59.26',
          },
          {
            nameOfMarkets:'Cycle Stands',
            target:'0.09',
            collection:'0.07',
            balance:'0.02',
            percentCollection:'77.78',
          },
          {
            nameOfMarkets:'Parks',
            target:'0.52',
            collection:'0.52',
            balance:'0.00',
            percentCollection:'100.00',
          },
        ]
      }
    },
    {
      gridTitle:'IMPROVEMENT OF REVENUE',
      gridColumns:{
        columns:[
          {
            header:'S.No',
            accessorKey:'sno',
            id:'sno',
            cell:({row})=>row.index + 1,
          },
          {
            id:'typeOfAssessed',
            accessorKey:'typeOfAssessed',
            header:'Type of Assessed',
          },
          {
            id:'noOfAssets',
            accessorKey:'noOfAssets',
            header:'No. of Assets',
          },
          {
            id:'increaseAmount',
            accessorKey:'increaseAmount',
            header:'Increase Amount (Rs. In Lakhs)'
          }
        ],
        columnGroups:[
          {
            id:'underAssessed',
            header:'Under Assessed/New Assessments Report Year 2024-2025 (02-10-24)',
            columns:['typeOfAssessed','noOfAssets','increaseAmount']
          },
        ],
        data:[
          {
            typeOfAssessed:'New Assts.(HT)',
            noOfAssets:'1329',
            increaseAmount:'119.9',
          },
          {
            typeOfAssessed:'Addl/Alteration',
            noOfAssets:'717',
            increaseAmount:'327.93',
          },
          {
            typeOfAssessed:'New Assts.(VLT)',
            noOfAssets:'575',
            increaseAmount:'444.36',
          },
        ]
      }
    }
]