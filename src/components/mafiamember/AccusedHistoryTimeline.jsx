import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import LocalPoliceIcon from '@mui/icons-material/LocalPolice';
import AssignmentIcon from '@mui/icons-material/Assignment';
import GavelIcon from '@mui/icons-material/Gavel';
import LockPersonIcon from '@mui/icons-material/LockPerson';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser'; // For acquittal / bail event
import Typography from '@mui/material/Typography';

export default function AccusedHistoryTimeline() {
  return (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          Jan 2019
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <LocalPoliceIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6">Initial Arrest</Typography>
          <Typography>Accused detained following investigation into suspected offenses.</Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          Apr 2019
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="secondary">
            <AssignmentIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6">Charge Sheet Filed</Typography>
          <Typography>Formal charges framed under multiple sections of the penal code.</Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          Oct 2019
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="warning">
            <GavelIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6">Trial Begins</Typography>
          <Typography>Prosecution and defense present arguments and evidence in court.</Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          May 2020
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="success">
            <VerifiedUserIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6">Granted Bail</Typography>
          <Typography>Accused released on bail pending final judgment.</Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          Dec 2021
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="error">
            <LockPersonIcon />
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6">Final Judgment</Typography>
          <Typography>Accused convicted and sentenced by the court.</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
