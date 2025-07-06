import React, { useState } from 'react';
import { Box } from '@mui/material';
import * as style from '../components/mafiamember/MafiaMember.css'
import NewMafiaTab from '../components/newMafia/NewMafiaTab';
import MafiaInfo from '../components/newMafia/MafiaInfo';
import MafiaPhotosVideos from '../components/newMafia/MafiaPhotosVideos';
import MafiaAddInfo from '../components/newMafia/MafiaAddInfo';
import MafiaHistory from '../components/newMafia/MafiaHistory';
import MafiaChronology from '../components/newMafia/MafiaChronology';
import MafiaCaseStatus from '../components/newMafia/MafiaCaseStatus';

function NewMafia() {
  const [activeTab, setActiveTab] = useState('personal');

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