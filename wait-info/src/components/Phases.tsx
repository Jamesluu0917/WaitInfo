import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

type Progress = {
    registered: boolean;
    triaged: boolean;
    investigations_pending: boolean;
    treatment: boolean;
    admitted: boolean;
    discharged: boolean;
  };

interface WaitTimeProps {
  progress: Progress; // Time string, e.g., "45 minutes"
}

const Phases: React.FC<WaitTimeProps> = ({ progress }) => {
    return (
        <Timeline
          sx={{
            [`& .${timelineItemClasses.root}:before`]: {
              flex: 0,
              padding: 0,
            },
          }}
        >
          <TimelineItem>
            <TimelineSeparator>
                {progress.registered ? (
                    <TimelineDot color="primary" />
                ) : (
                    <TimelineDot />
                )}
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>Initial Registration Complete</TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineSeparator>
                {progress.triaged ? (
                    <TimelineDot color="primary" />
                ) : (
                    <TimelineDot />
                )}
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>Triage Assessment Complete</TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineSeparator>
                {progress.investigations_pending ? (
                    <TimelineDot color="primary" />
                ) : (
                    <TimelineDot />
                )}
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>Tests/Imaging Ordered</TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineSeparator>
                {progress.admitted ? (
                    <TimelineDot color="primary" />
                ) : (
                    <TimelineDot />
                )}
            </TimelineSeparator>
            <TimelineContent>Completion</TimelineContent>
          </TimelineItem>
        </Timeline>
      );
};

export default Phases;
