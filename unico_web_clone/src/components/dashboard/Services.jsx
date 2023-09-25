import React, { useEffect, useState } from "react";

import "../../styles/services.css";
import Cards from "../Cards";
import { Link } from "react-router-dom";

const Services = () => {
  const [persons, setPersons] = useState([
    {
        id : 1,
        heading : "Mobile App Development",
        description : "We create custom mobile applications using trusted UX for both iOS and Android.",
        color : "green-color"
    },
    {
        id : 2,
        heading : "Website <br/> Development",
        description : "We build website applications that deliver speed, efficiency and results.",
        color : "blue-color"
    },
    {
        id : 3,
        heading : "Product <br/> Design (UI/UX)",
        description : "We design robust, fast, scalable and extraordinary interfaces that make a remarkable impact.",
        color : "yellow-bg"
    },
    {
        id : 4,
        heading : "Tech <br/> Consulting",
        description : "We support you by creating an outstanding product that meets the dynamic market needs.",
        color : "pink-color"
    },
  ]);

  useEffect(()=>{
    fetch('https://randomuser.me/api/?results=4')
      .then((response) => response.json())
      .then((data) => {
        let photos = data.results;
        const updatedPersons = persons.map((person) => {
            const matchingPhoto = photos.find((photo,index) => (index + 1) === person.id);
            if (matchingPhoto) {
              return {
                ...person,
                image: matchingPhoto.picture.medium,
              };
            }
            return person;
        });
        setPersons(updatedPersons);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  },[]);

  return (
    <div className="services-section">
      <div className="container">
        <div className="service-text-wrapper">
          <div className="normal-text">services</div>
          <h2 className="faq-head black-head heading-less-margin service-head-change">
            The
            <span className="unique">Unique</span>
            <span className="unico"> &nbsp;Unico</span>
            Approach
          </h2>
          <div
            className="service-headinggggg"
          >
            <h2 className="the">The</h2>
            <div className="text-wrapper unique-wrapper">
              <h2 className="unique-text">Unique</h2>
              <div
              style={{ transform: 'translate3d(0%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}
                className="color-line"
              ></div>
            </div>
            <div style={{ display : "flex" }} className="text-wrapper-copy">
              <h2
              style={{ transform: "translate3d(0%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", transformStyle: 'preserve-3d' }}
                className="unico-text"
              >
                Unico
              </h2>
              <div
                style={{ transform: 'translate3d(100%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}
                className="color-box"
              ></div>
            </div>
            
            <h2 className="the approach">Approach</h2>
          </div>
        </div>
        <div className="service-grid idea-grid" style={{ opacity: 1, transform : 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}>
            { persons && persons.map((p)=>(
                <Cards id="card1" url={p.image} heading={p.heading} description={p.description} color={p.color}/>
            ))}
        </div>

        
        <div className="ai-div-wrapper">
            <div className="absolute-wrap w-embed">
                <div className="svg-wrapper">
                    <svg viewBox="75.899 6.1413 80 80" width="320" height="320">
                        <defs>
                            <path id="cc" d="m 105.66043,42.217605 -0.46942,0.05354 m -0.10658,1.400696 -1.11814,0.536451 m 0.77115,1.091386 -1.73252,0.986926 m 1.77279,-0.04996 -2.6387,2.298105 m 2.7095,-1.260018 -3.34828,3.74857 m 3.45155,-2.676132 -3.72583,5.275265 m 3.96835,-4.3994 -3.90679,6.941239 m 4.1569,-6.332562 -3.85872,8.780829 m 4.33787,-7.99851 -3.93665,10.349452 m 4.30898,-9.3362 -3.47839,11.866413 m 4.01674,-10.815065 -3.17472,12.94456 m 4.1176,-12.015406 -2.8424,14.190611 m 3.75284,-13.295827 -2.36707,15.106508 m 3.24694,-14.31281 -1.3612,16.171125 m 2.77731,-15.429095 -0.98512,17.050765 m 2.43935,-16.474739 -0.44485,18.03532 m 2.23492,-17.51663 -5e-5,18.85008 m 1.69482,-18.687464 0.5171,19.652632 m 1.28421,-19.348413 1.36655,20.158898 m 1.1085,-20.22237 2.2521,20.752212 m 0.17124,-20.849338 3.65828,20.995372 m -1.18901,-21.397984 4.7053,20.741497 m -2.31713,-21.619056 5.85488,20.206919 m -3.55576,-21.276081 6.71302,19.947679 m -4.41394,-21.01683 7.22554,18.544228 m -5.22653,-20.015822 8.19007,17.61187 m -6.36692,-19.245923 8.7229,16.577906 m -6.91653,-18.606367 8.68118,15.63308 m -7.4941,-17.490032 9.31211,14.136793 m -7.93076,-16.177312 9.08112,13.114008 m -8.0709,-15.401383 9.21042,11.888769 m -8.4782,-14.373096 9.25479,11.157395 m -8.74561,-13.389745 9.20083,10.308053 m -8.92655,-12.907196 8.82662,9.36162 m -8.81951,-11.968348 8.44479,8.682359 m -8.84205,-11.340527 8.23414,7.778328 m -8.77172,-10.487757 7.86971,7.295343 m -9.19542,-10.547042 8.28536,7.637995 m -9.85393,-10.660254 7.83721,6.774486 m -10.15072,-10.048648 7.35105,5.870751 m-10.5 -9.5 0 0"></path>  
                        </defs>
                        <g>
                            <use href="#cc"></use>
                            <use transform="rotate(120,115.89903,46.141277)" href="#cc"></use>
                            <use transform="rotate(240,115.89903,46.141277)" href="#cc"></use>
                        </g>  
                    </svg>
                </div>
            </div>
            <div className="left-col hide">
                <img src="https://uploads-ssl.webflow.com/6203b6d57823100847efd9b1/6412cbc21bd523fff5f05f57_Group%20289519.png" loading="lazy" data-w-id="ac381f3c-b2fd-d45b-ad00-c423e238c042" alt="img" className="ai-imgae" 
                style={{ transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}/>
            </div>
            <div className="left-col ai-left-col">
                <h2 className="ai-heading">Embrace the Future with Our Cutting-Edge AI Solutions!</h2>
                <p className="body-16-inter-light combo">At Unico, we have a team of skilled AI professionals who design and implement custom AI solutions that cater to your specific business needs. Get in touch with us today to take advantage of our expertise in AI solutions!</p>
                <Link to="#" target="_blank" className="btn-white-blue make-btn-center w-button">Know More</Link>
            </div>
        </div>

      </div>
    </div>
  );
};

export default Services;
