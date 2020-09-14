import React from 'react'

import { SEO, Success } from '../components/'

const SuccessContactPage = () => {
   return (
      <>
         <SEO title="Tack för ditt meddelande!" />
         <Success>
            <h1>Hej!</h1>
            <p>Detta är en bekräftelse att Let's Furnish har mottagit er kontaktförfrågan och kommer att behandla denna inom kort. Återkoppling sker vanligtvis inom 48 timmar.</p>
         </Success>
      </>
   )
}

export default SuccessContactPage
