import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import * as style from '../components/mafiamember/MafiaMember.css'
import NewMafiaTab from '../components/newMafia/NewMafiaTab';
import MafiaInfo from '../components/newMafia/MafiaInfo';
import MafiaPhotosVideos from '../components/newMafia/MafiaPhotosVideos';
import MafiaAddInfo from '../components/newMafia/MafiaAddInfo';
import MafiaHistory from '../components/newMafia/MafiaHistory';
import MafiaChronology from '../components/newMafia/MafiaChronology';
import MafiaCaseStatus from '../components/newMafia/MafiaCaseStatus';
import { useParams } from 'react-router-dom';


function NewMafia() {
  const { tabName, id } = useParams();

  const [activeTab, setActiveTab] = useState('personal');


  useEffect(() => {
    if (tabName === 'personal') setActiveTab('personal');
    else if (tabName === 'info') setActiveTab('addl');
    else if (tabName === 'history') setActiveTab('history');
    else if (tabName === 'chronology') setActiveTab('chronology');
    else if (tabName === 'casestatus') setActiveTab('case');
    else if (tabName === 'photos') setActiveTab('photo');
  // ... and so on
}, [tabName]);

  const renderActiveComponent = () => {
    switch (activeTab) {
      case 'personal':
        return <MafiaInfo />;
      case 'addl':
        return <MafiaAddInfo />;
      case 'history':
        return <MafiaHistory />;
      case 'chronology':
        return <MafiaChronology />;
      case 'case':
        return <MafiaCaseStatus />;
      case 'photo':
        return <MafiaPhotosVideos />;
      default:
        return null;
    }
  };

  return (
    <div>
      <Box className="fluid-container">
        <NewMafiaTab setActiveTab={setActiveTab} />
      </Box>
      <Box className="grid glassStyle">
        {renderActiveComponent()}
      </Box>
    </div>
  );
}

export default NewMafia;