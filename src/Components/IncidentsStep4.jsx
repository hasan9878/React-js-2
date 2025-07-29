import React, { useState } from 'react';
import Herolayout from './Herolayout';
import Incidehero from './Incidehero';

function IncidentsStep4() {
 
  return (
    <>
      <Herolayout />
      <Incidehero nextPath="/IncidentsStep5" />
     
    </>
  );
}

export default IncidentsStep4;
