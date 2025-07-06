import { Button } from '@mui/material';
import React from 'react';
import AddLinkIcon  from '@mui/icons-material/AddLink';

function MafiaMemberTab({ setActiveTab }) {
  return (
    <div>
      <div className="tabbtnbg" style={{ gap: 10 }}>
        <button className="tabsparkle btn1" onClick={() => setActiveTab('personal')}>
          <span>Personal Info</span>
        </button>
        <button className="tabsparkle btn2" onClick={() => setActiveTab('addl')}>
          <span>Additional Info</span>
        </button>
        <button className="tabsparkle btn3" onClick={() => setActiveTab('history')}>
          <span>History</span>
        </button>
        <button className="tabsparkle btn4" onClick={() => setActiveTab('chronology')}>
          <span>Chronology</span>
        </button>
        <button className="tabsparkle btn5" onClick={() => setActiveTab('case')}>
          <span>Case Status</span>
        </button>
        <button className="tabsparkle btn6" onClick={() => setActiveTab('photo')}>
          <span>Photos and Video</span>
        </button>
      </div>
    </div>
  );
}

export default MafiaMemberTab;
