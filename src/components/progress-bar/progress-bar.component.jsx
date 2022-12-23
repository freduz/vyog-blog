import React from 'react';
import { MDBProgress, MDBProgressBar } from 'mdb-react-ui-kit';

import('./progress-bar.component.scss');

export const ProgressBar = ({progress}) => {
  console.log(progress);
  return (
   

     <div className="prog_bar">
         <MDBProgress height='20'>
        <MDBProgressBar animated bgColor='success' width={progress}>{progress}%</MDBProgressBar>
      </MDBProgress>
     </div>
  
  );
}