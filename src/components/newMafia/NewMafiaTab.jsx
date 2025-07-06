import React from 'react';

function NewMafiaTab({ setActiveTab }) {
  return (
    <div>
      <div className="tabbtnbg" style={{ gap: 10 }}>
        <button className="tabsparkle btn1" onClick={() => setActiveTab('personal')}>
          <span>Mafia Info</span>
        </button>
        <button className="tabsparkle btn2" onClick={() => setActiveTab('addl')}>
          <span>Mafia Additional Info</span>
        </button>
        <button className="tabsparkle btn3" onClick={() => setActiveTab('history')}>
          <span>Mafia History</span>
        </button>
        <button className="tabsparkle btn4" onClick={() => setActiveTab('chronology')}>
          <span>Mafia Chronology</span>
        </button>
        <button className="tabsparkle btn5" onClick={() => setActiveTab('case')}>
          <span>Mafia Case Status</span>
        </button>
        <button className="tabsparkle btn6" onClick={() => setActiveTab('photo')}>
          <span>Mafia Photos and Video</span>
        </button>
      </div>
    </div>
  );
}

export default NewMafiaTab;
