import React from 'react'
import {useHistory} from 'react-router-dom'

export const AboutPage: React.FunctionComponent = () => {
   const history = useHistory()
   return (
      <>
         <h1>Information</h1>
         <p>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni unde in odio porro,
         llam sed excepturi, consequuntur qui harum repellendus numquam quam maxime sit tempora!
         Quidem sit illum blanditiis suscipit!</p>
         <button className="btn" onClick={() => history.push('/')} >back to list</button>
      </>
   )
}