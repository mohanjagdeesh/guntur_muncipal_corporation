import React from "react";
import PageTitleBanner from "../../global-components/page-title-banner/page-title-banner.tsx";
import GridReport from "../../components/grid/GridReport.tsx";
import RenderListItems from "../../global-components/render-list-items/render-list-items.tsx";
import { WATER_QUALITY_TESTING_LABS_INFO, WATER_SUPPLY_DETAILD_INFORMATION } from "../../mock-data/departments-list-items-mock-data.ts";

const WaterSupply = () => (
  <div>
    <PageTitleBanner title="WATER SUPPLY" />
    <div className="container">
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 mt-2 md:mt-4">
          {WATER_SUPPLY_DETAILD_INFORMATION.slice(0,4).map((each , index)=>(<RenderListItems key={index} {...each} addClass='bg-violet rounded-md p-3' liClass="text-white" titleClass="text-white no-underline my-0" />))}
        </div>
        <h1 className="font-bold text-[1.2rem] md:text-[1.5rem] lg:text-[2rem] text-center">WATER QUALITY TESTING LABS</h1>
        <GridReport {...WATER_QUALITY_TESTING_LABS_INFO} />
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
          {WATER_SUPPLY_DETAILD_INFORMATION.slice(4).map((each , index)=>(<RenderListItems key={index} {...each} addClass='bg-violet rounded-md p-3' liClass="text-white" titleClass="text-white no-underline my-0" />))}
        </div>
        <h1 className="font-bold text-[1.2rem] md:text-[1.5rem] lg:text-[2rem] text-center">Existing ELSRs Details</h1>
        <GridReport columns={[
            {
                header:'Name Of Reservoir',
                accessorKey:'NameOfReservoir',
                id:'NameOfReservoir'
            },
            {
                header:'No. of Tankers',
                accessorKey:'NoOfTankers',
                id:'NoOfTankers'
            },
            {
                header:'Capacity In KL',
                accessorKey:'CapacityInKL',
                id:'CapacityInKL'
            },
            {
                header:'Total Capacity In KL',
                accessorKey:'TotalCapacityInKL',
                id:'TotalCapacityInKL'
            },
        ]}data={[{ 
            NameOfReservoir: "Nehru Nagar", 
            NoOfTankers: 2, 
            CapacityInKL: 1250, 
            TotalCapacityInKL: 2500 
          },
          { 
            NameOfReservoir: "Sarada Colony", 
            NoOfTankers: 2, 
            CapacityInKL: 1250, 
            TotalCapacityInKL: 2500 
          },
          { 
            NameOfReservoir: "Vasantharayapuram", 
            NoOfTankers: 1, 
            CapacityInKL: 700, 
            TotalCapacityInKL: 700 
          },
          { 
            NameOfReservoir: "LB Nagar", 
            NoOfTankers: 1, 
            CapacityInKL: 1000, 
            TotalCapacityInKL: 1000 
          },
          { 
            NameOfReservoir: "BR Stadium", 
            NoOfTankers: 2, 
            CapacityInKL: "1370+1590", 
            TotalCapacityInKL: 2960 
          },
          { 
            NameOfReservoir: "Nallacheruvu", 
            NoOfTankers: 1, 
            CapacityInKL: 1590, 
            TotalCapacityInKL: 1590 
          },
          { 
            NameOfReservoir: "Court Compound", 
            NoOfTankers: 1, 
            CapacityInKL: 1050, 
            TotalCapacityInKL: 1050 
          },
          { 
            NameOfReservoir: "AT Agraharam", 
            NoOfTankers: 1, 
            CapacityInKL: 1590, 
            TotalCapacityInKL: 1590 
          },
          { 
            NameOfReservoir: "Stambalagaruvu", 
            NoOfTankers: 2, 
            CapacityInKL: "900+1364", 
            TotalCapacityInKL: 2264 
          },
          { 
            NameOfReservoir: "Gujjanagundla", 
            NoOfTankers: 1, 
            CapacityInKL: 1350, 
            TotalCapacityInKL: 1350 
          },
          { 
            NameOfReservoir: "Srinivasarao Thota", 
            NoOfTankers: 1, 
            CapacityInKL: 1000, 
            TotalCapacityInKL: 1000 
          },
          { 
            NameOfReservoir: "Housing Board Colony", 
            NoOfTankers: 1, 
            CapacityInKL: 454, 
            TotalCapacityInKL: 454 
          },
          { 
            NameOfReservoir: "A.M.C", 
            NoOfTankers: 1, 
            CapacityInKL: 1000, 
            TotalCapacityInKL: 1000 
          },
          { 
            NameOfReservoir: "H.L.R", 
            NoOfTankers: 3, 
            CapacityInKL: 1200, 
            TotalCapacityInKL: 3600 
          },
          { 
            NameOfReservoir: "Hanumaiah Nagar", 
            NoOfTankers: 1, 
            CapacityInKL: 1350, 
            TotalCapacityInKL: 1350 
          },
          { 
            NameOfReservoir: "L.L.R", 
            NoOfTankers: 4, 
            CapacityInKL: 1150, 
            TotalCapacityInKL: 4600 
          }]}/>
        <h1 className="font-bold text-[1.2rem] md:text-[1.5rem] lg:text-[2rem] text-center">Details of the ELSRs Constructed under APMDP</h1>
        <GridReport columns={[
            {
                header:'Name Of Reservoir',
                accessorKey:'NameOfReservoir',
                id:'NameOfReservoir'
            },
            {
                header:'No. of Tankers',
                accessorKey:'NoOfTankers',
                id:'NoOfTankers'
            },
            {
                header:'Capacity In KL',
                accessorKey:'CapacityInKL',
                id:'CapacityInKL'
            },
            {
                header:'Total Capacity In KL',
                accessorKey:'TotalCapacityInKL',
                id:'TotalCapacityInKL'
            },
        ]}data={[{ 
            NameOfReservoir: "Syamala Nagar", 
            NoOfTankers: 1, 
            CapacityInKL: 900, 
            TotalCapacityInKL: 900 
          },
          { 
            NameOfReservoir: "Stambalagaruvu", 
            NoOfTankers: 1, 
            CapacityInKL: 1100, 
            TotalCapacityInKL: 1100 
          },
          { 
            NameOfReservoir: "Vidya Nagar", 
            NoOfTankers: 1, 
            CapacityInKL: 1000, 
            TotalCapacityInKL: 1000 
          },
          { 
            NameOfReservoir: "HLR", 
            NoOfTankers: 1, 
            CapacityInKL: 400, 
            TotalCapacityInKL: 400 
          },
          { 
            NameOfReservoir: "Hanumaiah Nagar", 
            NoOfTankers: 1, 
            CapacityInKL: 1350, 
            TotalCapacityInKL: 1350 
          },
          { 
            NameOfReservoir: "Bongaralabeedu", 
            NoOfTankers: 1, 
            CapacityInKL: 2300, 
            TotalCapacityInKL: 2300 
          },
          { 
            NameOfReservoir: "Tarakarama Nagar", 
            NoOfTankers: 1, 
            CapacityInKL: 1150, 
            TotalCapacityInKL: 1150 
          },
          { 
            NameOfReservoir: "Housing Board Colony", 
            NoOfTankers: 1, 
            CapacityInKL: 900, 
            TotalCapacityInKL: 900 
          },
          { 
            NameOfReservoir: "KVP Colony", 
            NoOfTankers: 1, 
            CapacityInKL: 1100, 
            TotalCapacityInKL: 1100 
          },
          { 
            NameOfReservoir: "Nallacheruvu", 
            NoOfTankers: 1, 
            CapacityInKL: 1100, 
            TotalCapacityInKL: 1100 
          },
          { 
            NameOfReservoir: "Rajiv Gandhi Nagar", 
            NoOfTankers: 1, 
            CapacityInKL: 1600, 
            TotalCapacityInKL: 1600 
          },
          { 
            NameOfReservoir: "Nehru Nagar", 
            NoOfTankers: 1, 
            CapacityInKL: 650, 
            TotalCapacityInKL: 650 
          },
          { 
            NameOfReservoir: "Court Compound", 
            NoOfTankers: 1, 
            CapacityInKL: 800, 
            TotalCapacityInKL: 800 
          },
          { 
            NameOfReservoir: "IPD Colony", 
            NoOfTankers: 1, 
            CapacityInKL: 1800, 
            TotalCapacityInKL: 1800 
          },
          { 
            NameOfReservoir: "IPD Colony", 
            NoOfTankers: 2, 
            CapacityInKL: "1400+1400", 
            TotalCapacityInKL: 2800 
          },
          { 
            NameOfReservoir: "Balaji Nagar", 
            NoOfTankers: 1, 
            CapacityInKL: 2000, 
            TotalCapacityInKL: 2000 
          }]}/>
    </div>
  </div>
);

export default WaterSupply;
