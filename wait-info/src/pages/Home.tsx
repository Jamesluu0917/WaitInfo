import React, { useState } from 'react';
import './../App.css';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';


function Home() {
  const [patientId, setPatientId] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const navigate = useNavigate(); // For navigation to another page

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setPatientId(e.target.value);
  };

  const handleStartClick = async (): Promise<void> => {
    if (!patientId) {
      setError('Patient ID is required');
      console.log(error);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const apiUrl = 'https://ifem-award-mchacks-2025.onrender.com/api/v1/patient';
      const response = await axios.get(`${apiUrl}/${patientId}`);
      const data = response.data;

      // Save patient data to cookies (you can use JSON.stringify if the data is complex)
      Cookies.set('patientData', JSON.stringify(data), { expires: 7 }); // expires in 7 days

      // Save patient ID to cookies without using JSON.stringify
      Cookies.set('patientId', patientId, { expires: 7 }); // expires in 7 days

      // Navigate to another page (replace '/dashboard' with your desired route)
      navigate('/queue');
    } catch (error) {
      setError('Failed to fetch patient data');
      console.error('Error calling external API:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div>
        <div>
          <svg fill="#6BBAEC" width="80px" height="80px" viewBox="0 0 24 24" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg"><path d="M12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20ZM14.09814,9.63379,13,10.26807V7a1,1,0,0,0-2,0v5a1.00025,1.00025,0,0,0,1.5.86621l2.59814-1.5a1.00016,1.00016,0,1,0-1-1.73242Z"/></svg>
        </div>
        <h1><span style={{ color: '#6BBAEC' }}>Wait</span>Info</h1>
        <h2>Welcome to the waiting room!</h2>
        <p>Enter your Patient ID to start tracking</p>
        <div>
          <input
            type="text"
            placeholder="#PatientID"
            value={patientId}
            onChange={handleInputChange}
          />
          <button
            style={{ marginLeft: '10px', marginRight: '10px' }}
            onClick={handleStartClick}
            disabled={loading}
          >
            {loading ? 'Loading...' : 'Start'}
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
