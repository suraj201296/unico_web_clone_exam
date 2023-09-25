import React from 'react'

const Cards = ({id, url , heading, description, color}) => {
  return (
    <div id={id} className={`service-wrapper ${color}`}>
        <div id="icon-div" className="service-icon-holder">
            <div className="icon-circle">
            <img
                src={url}
                loading="lazy"
                width="38"
                height="60"
                alt="img"
                className="dummy-icon h-70"
            />
            </div>
        </div>
        <div
            id="w-node-f194e080-009e-f1f3-0e04-c0cc6abadccd-e9e61107"
            className="hover-blue-bg"
            
        ></div>
        <div className="small-circle" >
            <img
            src="https://uploads-ssl.webflow.com/6203b6d57823100847efd9b1/6205e734dcdf5113d925ee37_Mobile-dev.svg"
            loading="lazy"
            alt="img"
            className="image-7"
            
            />
            <img
            src="https://uploads-ssl.webflow.com/6203b6d57823100847efd9b1/620a338a565c1d3f98e516c5_Mobile-dev.svg"
            loading="lazy"
            alt="img"
            className="image-8"
            />
        </div>
        <div className="service-content">
            <div className="content-wrapper">
            <h3 className="title-24-inter-sb color" dangerouslySetInnerHTML={{ __html: heading }}>
                
            </h3>
            <div className="small-para" >
                {description}
            </div>
            </div>
            <a
            href="/saved-pages/mobile-app-development-company"
            target="_blank"
            className="main-cta-div knowmore show blog-cta small w-inline-block"
            >
            <div className="get-a-quote">know more</div>
            <div className="arrow-holder">
                <img
                src="https://uploads-ssl.webflow.com/6203b6d57823100847efd9b1/6204f6c4a928076e8288e908_small%20arrow.svg"
                loading="lazy"
                alt="small arrow"
                className="small-arrow"
                
                />
                <img
                src="https://uploads-ssl.webflow.com/6203b6d57823100847efd9b1/620a338a5d4493052adad0ca_arrow.svg"
                loading="lazy"
                alt="arrow"
                className="image-15"
                />
            </div>
            </a>
        </div>
        </div>
  )
}

export default Cards