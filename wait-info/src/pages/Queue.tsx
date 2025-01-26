import "./../App.css";

import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import WaitTime from "../components/WaitTime";
import Phases from "../components/Phases";
import PeopleAhead from "../components/PeopleAhead";
import Notif from "../components/Notif";
import { Divider, Stack } from "@mui/material";
import axios from "axios";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

type PatientData = {
  arrival_time: string; // Date-time string
  id: string; // Patient ID as a string
  queue_position: {
    category: number; // Category number for the queue position
    global: number; // Global queue position number
  };
  status: {
    current_phase: string; // The current phase (e.g., 'treatment')
    investigations: {
      imaging: string; // Imaging status (e.g., 'reported')
      labs: string; // Labs status (e.g., 'reported')
    };
  };
  time_elapsed: number; // Time elapsed in minutes
  triage_category: number; // The triage category (e.g., 3)
};

type Stats = {
  averageWaitTimes: {
    [key: string]: number; // Dynamic keys for each category (e.g., "1", "2", etc.)
  };
  categoryBreakdown: {
    [key: string]: number; // Dynamic keys for each category (e.g., "1", "2", etc.)
  };
};

type Progress = {
  registered: boolean;
  triaged: boolean;
  investigations_pending: boolean;
  treatment: boolean;
  admitted: boolean;
  discharged: boolean;
};

const Queue = () => {
  const [patientData, setPatientData] = useState<PatientData | null>(null);
  const [stats, setStats] = useState<Stats | null>(null);
  const [progress, setProgress] = useState<Progress>({
    registered: false,
    triaged: false,
    investigations_pending: false,
    treatment: false,
    admitted: false,
    discharged: false,
  });
  const [formattedTime, setFormattedTime] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPatientData = async () => {
      const patientId = Cookies.get('patientId'); // Ensure patientId is set
      if (patientId) {
        try {
          const apiUrl = 'https://ifem-award-mchacks-2025.onrender.com/api/v1/patient';
          const response = await axios.get(`${apiUrl}/${patientId}`);
          const data = response.data;

          console.log('Fetched patient data:', data); // Debug
          setPatientData(data);
          Cookies.set('patientId', patientId, { expires: 7 }); // expires in 7 days
        } catch (error) {
          console.error('Error fetching patient data:', error);
        }
      } else {
        console.error('No patientId found in cookies.');
      }
    };

    const fetchStats = async () => {
      try {
        const apiUrl = 'https://ifem-award-mchacks-2025.onrender.com';
        const response = await axios.get(`${apiUrl}/api/v1/stats/current`);
        const statsData = response.data;
        console.log('Fetched stats:', statsData); // Debug
        setStats(statsData);
      } catch (error) {
        console.error('Error fetching stats:', error);
      }
    };

    fetchPatientData();
    fetchStats();

    const timeout = setTimeout(() => {
      if (isLoading) {
        navigate("/"); // Redirect to home page after 5 seconds if still loading
      }
    }, 5000);

    return () => clearTimeout(timeout); // Cleanup timeout on unmount or data fetch
  }, [isLoading, navigate]);

  // Updating progress when patientData changes
  useEffect(() => {
    if (patientData) {
      setProgress({
        registered: true,
        triaged: patientData.triage_category > 0,
        investigations_pending:
          patientData.status.current_phase === "investigations_pending" ||
          (patientData?.status?.investigations &&
            (patientData.status.investigations.imaging === "reported" ||
             patientData.status.investigations.labs === "reported")),
        treatment: patientData.status.current_phase === "admitted" || patientData.status.current_phase === "discharged",
        admitted: patientData.status.current_phase === "admitted",
        discharged: patientData.status.current_phase === "discharged",
      });

      // Format arrival time as soon as patientData is set
      const formatted = new Date(patientData.arrival_time).toLocaleString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      });
      setFormattedTime(formatted);
      setIsLoading(false); // Stop loading once patient data is fetched
    }
  }, [patientData]);

  return (
    <div>
      <Header />
      <h2 style={{ marginTop: "25px", marginBottom: "20px" }}>
        Waiting Status
      </h2>
      {isLoading ? (
        <p>Loading patient data...</p>
      ) : (
        patientData && stats && (
          <>
            <div style={{ marginBottom: "15px" }}>
              <WaitTime time={`${Math.floor(stats.averageWaitTimes[patientData.triage_category]/60)}h${stats.averageWaitTimes[patientData.triage_category]%60 }min`} />
            </div>
            <div style={{ marginBottom: "25px" }}>
              <PeopleAhead peopleAhead={`${patientData.queue_position.global - 1}`} />
            </div>
            <Divider flexItem />
            <h2 style={{ marginTop: "25px", marginBottom: "20px" }}>Progress</h2>
            <div style={{ marginBottom: "15px" }}>
              <Phases progress={progress} />
            </div>
            <Divider flexItem />
            <h2 style={{ marginTop: "25px", marginBottom: "20px" }}>Notifications</h2>
            <div style={{ marginBottom: "15px" }}>
              <Stack spacing={2}>
                {progress.discharged && (
                  <Notif time={""} message={`You have been discharged. Thank you for your patience.`} />
                )}
                {progress.admitted && (
                  <Notif time={""} message={`You have been admitted to hospital. Thank you for your patience.`} />
                )}
                { patientData.status && patientData.status.investigations &&
                ( progress.investigations_pending || 
                    (patientData.status.investigations.imaging !== "" ||  patientData.status.investigations.labs === "")) && (
                  <Notif
                    time={""}
                    message={`The investigation is progressing: Imaging=${patientData.status.investigations.imaging}. Test Labs=${patientData.status.investigations.labs}`}
                  />
                )}
                {progress.triaged && (
                  <Notif time={""} message={`You have been given the triage category ${patientData.triage_category}`} />
                )}
                {progress.registered && (
                  <Notif time={formattedTime} message={"You have been registered to the waiting list! Please wait for your turn to get treated."} />
                )}
              </Stack>
            </div>
          </>
        )
      )}
    </div>
  );
};

export default Queue;
