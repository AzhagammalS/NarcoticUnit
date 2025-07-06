import React, { useState } from 'react';
import MafiaMemberTab from '../components/mafiamember/MafiaMemberTab';
import MafiaMemberPersonalInfo from '../components/mafiamember/MafiaMemberPersonalInfo';
import MafiaMemberAddlInfo from '../components/mafiamember/MafiaMemberAddlInfo';
import MafiaMemberHistory from '../components/mafiamember/MafiaMemberHistory';
import MafiaMemberChronology from '../components/mafiamember/MafiaMemberChronology';
import MafiaMemberPhotoVideo from '../components/mafiamember/MafiaMemberPhotoVideo';
import MafiaMemberCaseStatus from '../components/mafiamember/MafiaMemberCaseStatus';
import { Box } from '@mui/material';
import * as style from '../components/mafiamember/MafiaMember.css'

function MafiaMember() {
  const [activeTab, setActiveTab] = useState('personal');

  const renderActiveComponent = () => {
    switch (activeTab) {
      case 'personal':
        return <MafiaMemberPersonalInfo />;
      case 'addl':
        return <MafiaMemberAddlInfo />;
      case 'history':
        return <MafiaMemberHistory />;
      case 'chronology':
        return <MafiaMemberChronology />;
      case 'case':
        return <MafiaMemberCaseStatus />;
      case 'photo':
        return <MafiaMemberPhotoVideo />;
      default:
        return null;
    }
  };

  return (
    <div>
      <Box className="fluid-container">
        <MafiaMemberTab setActiveTab={setActiveTab} />
      </Box>
      <Box className="grid glassStyle">
        {renderActiveComponent()}
      </Box>
    </div>
  );
}

export default MafiaMember;
