import React from 'react'

const Instructions = () => {
  return (
    <div>
        <video src='/moodle.mp4' muted autoPlay controls className='m-10 rounded-lg aspect-video w-[700px]  ' />
        <div className='mt-16'>
            <h1>{"How to use M.A.E when you\'ve enrolled all your course"}</h1>
            <p>Download the extension on any browser of your choice</p>
            <p>Dm @admiral_prince_daniel on telegram to get your token </p>
            <p>Fill in your details on the extension and watch the extension do its magic</p>
            <p>It should open moodle by itself and take you to the dashboard</p>
            <p>click the course you want to evaluate and watch it do it in seconds or... you could just use that time to do something else</p>
            <p>Do it for all your courses</p>
        </div>
    </div>
  )
}

export default Instructions