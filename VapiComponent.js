import React, { useState } from 'react';
import Vapi from "@vapi-ai/web";

const vapi = new Vapi("6b771523-a632-43cd-843a-95b2867951f6");  // Replace with your actual Vapi public key

function VapiComponent() {
  const [callStatus, setCallStatus] = useState('');

  const startCall = async () => {
    try {
      setCallStatus('Starting call...');
      await vapi.start({
        // Add your assistant options here
      });
      setCallStatus('Call started successfully!');
    } catch (error) {
      console.error('Error starting call:', error);
      setCallStatus('Error starting call');
    }
  };

  return (
    <div>
      <button onClick={startCall}>Start Call</button>
      <p>{callStatus}</p>
    </div>
  );
}

export default VapiComponent;