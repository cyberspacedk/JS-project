import React from "react";

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d81309.67819475106!2d30.46485059162852!3d50.44258801721188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf4ee15a4505%3A0x764931d2170146fe!2z0JrQuNC10LIsIDAyMDAw!5e0!3m2!1sru!2sua!4v1553025138762"
        width="100%"
        height="500px"
        frameBorder="0" 
        allowFullScreen
      />

      <div className="location_tag">
        <div>Location</div>
      </div>

    </div>
  );
};

export default Location;
