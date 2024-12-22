import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie , Doughnut} from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const houseHoldsData = {
  labels: ['2011', '2024'],
  datasets: [
    {
      label: 'Number of Households',
      data: [189554, 206000],
      backgroundColor: ['#fa9e00', '#15093A'],
      borderColor: ['#fa9e00', '#15093A'],
      borderWidth: 1,
    },
  ],
};

export const populationData = {
  labels: ['2011', '2024'],
  datasets: [
    {
      label: 'Population',
      data: [743354, 906344],
      backgroundColor: ['#fa9e00', '#15093A'],
      borderColor: ['#fa9e00', '#15093A'],
      borderWidth: 1,
    },
  ],
};

const propertyTaxData = {
    labels: ['No. of Assessments', 'Demand'],
    datasets: [
      {
        label: 'Property Tax',
        data: [200450, 2127596676 / 10000], // Normalize the second value
        backgroundColor: ['#fa9e00', '#15093A'],
        borderColor: ['#fa9e00', '#15093A'],
        borderWidth: 1,
      },
    ],
  };

  const vacantLandTaxData = {
    labels: ['No. of Assessments', 'Demand'],
    datasets: [
      {
        label: 'Vacant Land Tax',
        data: [8212, 965574627 / 10000], // Normalize the second value
        backgroundColor: ['#fa9e00', '#15093A'],
        borderColor: ['#fa9e00', '#15093A'],
        borderWidth: 1,
      },
    ],
  };

  const waterChargesData = {
    labels: ['No. of Assessments', 'Demand'],
    datasets: [
      {
        label: 'Water Charges',
        data: [113202, 655298073 / 10000], // Normalize the second value
        backgroundColor: ['#fa9e00', '#15093A'],
        borderColor: ['#fa9e00', '#15093A'],
        borderWidth: 1,
      },
    ],
  };
  
  
     

export const HouseHoldsChart = () => {
  return (
      <Pie data={houseHoldsData} />
  );
};

export const PopulationChart = () => {
  return (
      <Pie data={populationData} />
  );
};
export const PropertyTaxChart = () => {
    return (
        <Doughnut data={propertyTaxData} />
    );
  };

  export const VacantLandTaxChart = () => {
    return (
        <Doughnut data={vacantLandTaxData} />
    );
  };
  export const WaterChargesChart = () => {
    return (
        <Doughnut data={waterChargesData} />
    );
  };
