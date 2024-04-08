import React from 'react';
import { Carousel } from 'react-bootstrap';

export const ProjectCard = ({ title, description, images }) => {
  return (
    <div className="proj-imgbx">
      <Carousel>
        {images.map((image, idx) => (
          <Carousel.Item key={idx}>
            <img
              className="d-block w-100"
              src={image}
              alt={`Slide ${idx}`}
            />
          </Carousel.Item>
        ))}
      </Carousel>
      <div className="proj-txtx">
        <h4>{title}</h4>
        <span>{description}</span>
      </div>
    </div>
  );
};


