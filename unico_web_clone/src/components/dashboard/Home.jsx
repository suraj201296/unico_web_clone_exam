import React from 'react'
import '../../styles/home.css'

const Home = () => {
  return (
    <div className="home homeDiv">
        <div className="container w-container">
            <div className="div-wrapper">
                <h1 className="home-heading home-white-heading">
                    <span className="text-wrap">Transform your Ideas</span> 
                    into Stunning Products with Unico's Expert Team
                </h1>
                <p className="home-body-p m in_center color _w-40">
                    Build, Launch, and Scale your Products with Unmatched Efficiency
                </p>
                <a href="#" target="_blank" className="btn-white-blue margin-top w-button">GET STARTED</a>
                <div className="home-layout hero-grid-new">
                    <div id="node_1" className="hero-new-cols">
                        <img src="https://uploads-ssl.webflow.com/6203b6d57823100847efd9b1/64707a7fa93d52282e9c85b3_Group%20289531.svg" loading="lazy" width="45" height="45" alt="icon-mobile" className="icons-hero"/>
                        <div className="grid-text"><div>
                            Top Mobile App Developers
                        </div>
                    </div>
                </div>
                <div id="node_2" className="hero-new-cols">
                    <img src="https://uploads-ssl.webflow.com/6203b6d57823100847efd9b1/64707a820d72f61b1a74629c_Group%20289530.svg" loading="lazy" width="45" height="45" alt="icon-code" className="icons-hero"/>
                    <div className="grid-text">
                        <div className="light-color-text">
                            Expert in No code Web Development
                        </div>
                    </div>
                </div>
                <div id="node_3" className="hero-new-cols">
                    <img src="https://uploads-ssl.webflow.com/6203b6d57823100847efd9b1/64707a826201b89f5f3a5cc6_Group%20289529.svg" loading="lazy" width="45" height="45" alt="icon-design" className="icons-hero"/>
                    <div className="grid-text"><div className="light-color-text">
                        Top Design Agency
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
  )
}

export default Home