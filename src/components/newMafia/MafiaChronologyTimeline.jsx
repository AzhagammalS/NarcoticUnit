import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import GavelIcon from '@mui/icons-material/Gavel';
import GroupIcon from '@mui/icons-material/Group';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import LocalPoliceIcon from '@mui/icons-material/LocalPolice';
import Typography from '@mui/material/Typography';

export default function MafiaChronologyTimeline() {
  return (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          1920
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <LocationCityIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6">Mafia Formation</Typography>
          <Typography>The syndicate was founded in New York, expanding operations across cities.</Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          1935
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="secondary">
            <GroupIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6">Territory Expansion</Typography>
          <Typography>New territories claimed through alliances and conflicts.</Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          1950
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="warning">
            <GavelIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6">Major Court Trials</Typography>
          <Typography>Key leaders prosecuted during national crackdowns on organized crime.</Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          1985
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="error">
            <LocalPoliceIcon />
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6">Police Takedown</Typography>
          <Typography>Large-scale operations by law enforcement disrupt mafia control.</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
