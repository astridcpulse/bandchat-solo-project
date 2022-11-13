import React, { useState } from 'react';
import LoginForm from '../LoginForm/LoginForm';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function LoginPage() {
  const history = useHistory();
  //Begin Audio recording demo section
  //MicRecorder package https://www.npmjs.com/package/mic-recorder-to-mp3 auto encodes via LameJS dependency
  const MicRecorder = require('mic-recorder-to-mp3');

  const Recorder = new MicRecorder({ bitRate: 128});

  //state for whether we're recording or not. And the "blob" as the encoded sound file
  const [recordStatus, setRecordStatus] = useState(true);
  const [blobUrl, setBlobUrl] = useState('');

  // start mic recorder function
  const start = () => {
      Recorder
        .start()
        .then(() => {
          setRecordStatus(true);

        })
        .catch((err) => console.error('Start error', err));
  };

  // dispatch to saga upon stop recording
  const storeAudio = () => {
    //dispatch
  }
  // stop mic recorder function
  const stop = () => {
    Recorder
      .stop()
      .getMp3()
      .then(([buffer, blob]) => {
        setBlobUrl(URL.createObjectURL(blob));
        setRecordStatus(false);
      })
      .catch((e) => console.log(e));
  };

// end audio recording demo section

  return (
    <div>
      <LoginForm />

      <center>
        <button
          type="button"
          className="btn btn_asLink"
          onClick={() => {
            history.push('/registration');
          }}
        >
          Register
        </button>
      {/* this portion is for the audio. Just a demo TODO move later */}
        <button onClick={start} >Record</button>
          <button onClick={stop}>Stop</button>
          <audio src={blobUrl} controls/>
      {/* end audio demo portion */}
      </center>
        

    </div>
  );
}

export default LoginPage;
