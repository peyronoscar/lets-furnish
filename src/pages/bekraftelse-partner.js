import React from 'react'

import { SEO, Success } from '../components/'

const SuccessPartnerPage = () => {
   return (
      <>
         <SEO title="Tack för ditt meddelande!" />
         <Success>
            <h1>Hej!</h1>
            <p>Tack för er ansökan om att bli Samarbetspartner.<br />Detta är en bekräftelse att Let's Furnish har mottagit er ansökan och kommer att behandla denna inom kort. Återkoppling sker vanligtvis inom 48 timmar.</p>
         </Success>
      </>
   )
}

export default SuccessPartnerPage
