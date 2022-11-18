import { useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';

import { Button } from '@mui/material';

function AudioRecorder(){
    const dispatch = useDispatch();
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
    }

  // dispatch to saga upon stop recording

    const storeAudio = () => {
        console.log('blobUrl', {blobUrl})
        dispatch({ type: 'POST_AUDIO', payload: blobUrl });
    }

  // stop mic recorder function

    const stop = () => {
        Recorder
          .stop()
          .getMp3()
          .then(([buffer, blob]) => {
            setRecordStatus(false);
            console.log('blob', blob);
            
            let bu = URL.createObjectURL(blob);
            console.log('bu', bu);
            setBlobUrl(bu);
            storeAudio();
      })
          .catch((e) => console.log(e));
      }



    return(
        <>
            <Button 
                onClick={start} 
            >
                Record
            </Button>

            <Button 
                onClick={stop}
            >
                Stop
            </Button>
            <audio src={blobUrl} controls/>
        </>
    );
}

export default AudioRecorder;