import React, { useEffect } from 'react'


function Test() {

    useEffect(()=>{
        const ifameData=document.getElementById("iframeId")
        const lat=9.0056;
        const lon=76.7831;
        ifameData.src=`https://maps.google.com/maps?q=${lat},${lon}&hl=es;&output=embed`
    })

  return (
    <div>
         <div>
            <iframe id="iframeId" height="500px" width="100%"></iframe>
        </div>
      </div>
  )
}

export default Test
