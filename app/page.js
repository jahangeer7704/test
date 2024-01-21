"use client"
import React from 'react'

function page() {
  function handleChange(e){
let file=e.target.files[0]
const fileData=new FormData
fileData.append("pdf",file)
sendData(fileData)
  }
  async function sendData(data){
    await fetch("http://localhost:3004/routes",{
      method: "POST",
      body:data
    })

  }
  return (
    <div>
<form action="" encType='multipart/form-data'>
<label htmlFor="upload"> Upload File</label>
<input type="file" name='file' id="upload"  onChange={(e)=>handleChange(e)} />


</form>

    </div>
  )
}

export default page