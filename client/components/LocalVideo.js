import React from 'react';

const LocalVideo = ({localVideo}) => (
  <video src={localVideo ? URL.createObjectURL(localVideo) : null} autoPlay> </video>
)

export default LocalVideo
