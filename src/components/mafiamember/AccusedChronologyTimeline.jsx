import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import GavelIcon from '@mui/icons-material/Gavel';
import LocalPoliceIcon from '@mui/icons-material/LocalPolice';
import AssignmentIcon from '@mui/icons-material/Assignment';
import LockPersonIcon from '@mui/icons-material/LockPerson'; // Requires MUI v5+
import Typography from '@mui/material/Typography';

export default function AccusedChronologyTimeline() {
  return (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          Jan 2020
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <LocalPoliceIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6">Arrest</Typography>
          <Typography>Accused apprehended during a joint operation by local and federal forces.</Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          Mar 2020
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="secondary">
            <AssignmentIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6">Charge Sheet Filed</Typography>
          <Typography>Formal charges submitted outlining key accusations and evidence.</Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          Jul 2020
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="warning">
            <GavelIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6">Court Proceedings</Typography>
          <Typography>Initial hearings and witness statements presented in court.</Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          Dec 2020
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="error">
            <LockPersonIcon />
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6">Conviction</Typography>
          <Typography>Accused found guilty and sentenced by the court of law.</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
