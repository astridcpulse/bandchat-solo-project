import { useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import FormData from 'form-data';

import { Button } from '@mui/material';

function AudioRecorder({part}){
    const dispatch = useDispatch();
    const MicRecorder = require('mic-recorder-to-mp3');
    const Recorder = new MicRecorder({ bitRate: 128});
    let formData = new FormData();

    //state for whether we're recording or not. And the "blob" as the encoded sound file
    const [recordStatus, setRecordStatus] = useState(true);
    const [blobUrl, setBlobUrl] = useState('');
    // const [soundBlob, setSoundBlob] = useState('');

  // start mic recorder function
    const start = () => {
        Recorder
          .start()
          .then(() => {
            setRecordStatus(true);
  
          })
          .catch((err) => console.error('Start error', err));
    }
  console.log('part', part.id)

  // stop mic recorder function
  const stop = () => {
      Recorder
        .stop()
        .getMp3()
        .then(([buffer, blob]) => {
          setRecordStatus(false);
          console.log('blob', blob);
          setBlobUrl(URL.createObjectURL(blob));
          
          // setSoundBlob(blob);
          dispatch({
            type: 'UPLOAD_AUDIO',
            payload: { blob: blob,
                        partId: part.id
                      }
                        
                  
          })

          
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
            <audio
              name="uploaded_audio"
              src={blobUrl} controls/>

        </>
    );
}

export default AudioRecorder;