import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/navbar.css'

const Navbar = () => {
  return (
    <nav className="nav-bar navbar navbar-expand-lg">
        <div className="nav-container new-navcontainer w-container">
            <Link className="brand w-nav-brand" to="#"></Link>
            <img width="161" height="49" src="https://uploads-ssl.webflow.com/6203b6d57823100847efd9b1/62a443e6434916672ae8ad5f_BLACK%20LOGO.svg" loading="lazy" alt="" className="logo"/>
            <button className="navbar-toggler w-nav-button" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className=" nav-menu w-nav-menu collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav">
                    <li class="menu nav-item dropdown">
                        <Link class="nav-link" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Services
                        </Link>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><Link class="dropdown-item" to="#"><h4>Mobile App Development</h4>
                                    <div class="arrow-div">
                                        <img src="https://uploads-ssl.webflow.com/6203b6d57823100847efd9b1/62f0de46caeb356ac0fa8a49_Vector%20(5).png" loading="lazy" alt="" class="image-144"/>
                                    </div>
                                </Link>
                            </li>
                            <li><Link class="dropdown-item" to="#"><h4>Web Development</h4>
                                    <div class="arrow-div">
                                        <img src="https://uploads-ssl.webflow.com/6203b6d57823100847efd9b1/62f0de46caeb356ac0fa8a49_Vector%20(5).png" loading="lazy" alt="" class="image-144"/>
                                    </div>
                                </Link>
                            </li>
                            <li><Link class="dropdown-item" to="#"><h4>UI/UX Design</h4>
                                    <div class="arrow-div">
                                        <img src="https://uploads-ssl.webflow.com/6203b6d57823100847efd9b1/62f0de46caeb356ac0fa8a49_Vector%20(5).png" loading="lazy" alt="" class="image-144"/>
                                    </div>
                                </Link>
                            </li>
                            <li><Link class="dropdown-item" to="#"><h4>AI Development</h4>
                                    <div class="arrow-div">
                                        <img src="https://uploads-ssl.webflow.com/6203b6d57823100847efd9b1/62f0de46caeb356ac0fa8a49_Vector%20(5).png" loading="lazy" alt="" class="image-144"/>
                                    </div>
                                </Link>
                            </li>
                            <li><Link class="dropdown-item" to="#"><h4>Tech Consulting</h4>
                            <       div class="arrow-div">
                                        <img src="https://uploads-ssl.webflow.com/6203b6d57823100847efd9b1/62f0de46caeb356ac0fa8a49_Vector%20(5).png" loading="lazy" alt="" class="image-144"/>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className=" menu nav-item dropdown">
                        <Link class="nav-link" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Higher Developers
                        </Link>
                        <ul class="dropdown-menu dropdown-big-list" aria-labelledby="navbarDropdown">
                            <div className="row">
                                <div className='col'>
                                    <li>
                                        <Link class="dropdown-item" to="#"><h4>Mobile App Developer</h4>
                                            <div class="arrow-div">
                                                <img src="https://uploads-ssl.webflow.com/6203b6d57823100847efd9b1/62f0de46caeb356ac0fa8a49_Vector%20(5).png" loading="lazy" alt="" class="image-144"/>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link class="dropdown-item" to="#"><h4>Node JS</h4>
                                            <div class="arrow-div">
                                                <img src="https://uploads-ssl.webflow.com/6203b6d57823100847efd9b1/62f0de46caeb356ac0fa8a49_Vector%20(5).png" loading="lazy" alt="" class="image-144"/>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link class="dropdown-item" to="#"><h4>Angular JS</h4>
                                            <div class="arrow-div">
                                                <img src="https://uploads-ssl.webflow.com/6203b6d57823100847efd9b1/62f0de46caeb356ac0fa8a49_Vector%20(5).png" loading="lazy" alt="" class="image-144"/>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link class="dropdown-item" to="#"><h4>Flutter</h4>
                                            <div class="arrow-div">
                                                <img src="https://uploads-ssl.webflow.com/6203b6d57823100847efd9b1/62f0de46caeb356ac0fa8a49_Vector%20(5).png" loading="lazy" alt="" class="image-144"/>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link class="dropdown-item" to="#"><h4>Laravel</h4>
                                            <div class="arrow-div">
                                                <img src="https://uploads-ssl.webflow.com/6203b6d57823100847efd9b1/62f0de46caeb356ac0fa8a49_Vector%20(5).png" loading="lazy" alt="" class="image-144"/>
                                            </div>
                                        </Link>
                                    </li>

                                    <li>
                                        <Link class="dropdown-item" to="#"><h4>Webflow</h4>
                                            <div class="arrow-div">
                                                <img src="https://uploads-ssl.webflow.com/6203b6d57823100847efd9b1/62f0de46caeb356ac0fa8a49_Vector%20(5).png" loading="lazy" alt="" class="image-144"/>
                                            </div>
                                        </Link>
                                    </li>
                                </div>

                                <div className='col'>
                                    <li>
                                        <Link class="dropdown-item" to="#"><h4>WeWeb</h4>
                                            <div class="arrow-div">
                                                <img src="https://uploads-ssl.webflow.com/6203b6d57823100847efd9b1/62f0de46caeb356ac0fa8a49_Vector%20(5).png" loading="lazy" alt="" class="image-144"/>
                                            </div>
                                        </Link>
                                    </li>

                                    <li>
                                        <Link class="dropdown-item" to="#"><h4>Xano</h4>
                                            <div class="arrow-div">
                                                <img src="https://uploads-ssl.webflow.com/6203b6d57823100847efd9b1/62f0de46caeb356ac0fa8a49_Vector%20(5).png" loading="lazy" alt="" class="image-144"/>
                                            </div>
                                        </Link>
                                    </li>

                                    <li>
                                        <Link class="dropdown-item" to="#"><h4>Wordpress</h4>
                                            <div class="arrow-div">
                                                <img src="https://uploads-ssl.webflow.com/6203b6d57823100847efd9b1/62f0de46caeb356ac0fa8a49_Vector%20(5).png" loading="lazy" alt="" class="image-144"/>
                                            </div>
                                        </Link>
                                    </li>

                                    <li>
                                        <Link class="dropdown-item" to="#"><h4>Shopify</h4>
                                            <div class="arrow-div">
                                                <img src="https://uploads-ssl.webflow.com/6203b6d57823100847efd9b1/62f0de46caeb356ac0fa8a49_Vector%20(5).png" loading="lazy" alt="" class="image-144"/>
                                            </div>
                                        </Link>
                                    </li>

                                    <li>
                                        <Link class="dropdown-item" to="#"><h4>React JS</h4>
                                            <div class="arrow-div">
                                                <img src="https://uploads-ssl.webflow.com/6203b6d57823100847efd9b1/62f0de46caeb356ac0fa8a49_Vector%20(5).png" loading="lazy" alt="" class="image-144"/>
                                            </div>
                                        </Link>
                                    </li>

                                    <li>
                                        <Link class="dropdown-item" to="#"><h4>ChatGPT</h4>
                                            <div class="arrow-div">
                                                <img src="https://uploads-ssl.webflow.com/6203b6d57823100847efd9b1/62f0de46caeb356ac0fa8a49_Vector%20(5).png" loading="lazy" alt="" class="image-144"/>
                                            </div>
                                        </Link>
                                    </li>
                                </div>

                                <div className='col'>
                                    <li>
                                        <Link class="dropdown-item" to="#"><h4>Bubble</h4>
                                            <div class="arrow-div">
                                                <img src="https://uploads-ssl.webflow.com/6203b6d57823100847efd9b1/62f0de46caeb356ac0fa8a49_Vector%20(5).png" loading="lazy" alt="" class="image-144"/>
                                            </div>
                                        </Link>
                                    </li>

                                    <li>
                                        <Link class="dropdown-item" to="#"><h4>Whisper</h4>
                                            <div class="arrow-div">
                                                <img src="https://uploads-ssl.webflow.com/6203b6d57823100847efd9b1/62f0de46caeb356ac0fa8a49_Vector%20(5).png" loading="lazy" alt="" class="image-144"/>
                                            </div>
                                        </Link>
                                    </li>

                                    <li>
                                        <Link class="dropdown-item" to="#"><h4>UI/UX Designer</h4>
                                            <div class="arrow-div">
                                                <img src="https://uploads-ssl.webflow.com/6203b6d57823100847efd9b1/62f0de46caeb356ac0fa8a49_Vector%20(5).png" loading="lazy" alt="" class="image-144"/>
                                            </div>
                                        </Link>
                                    </li>

                                    <li>
                                        <Link class="dropdown-item" to="#"><h4>Website Developer</h4>
                                            <div class="arrow-div">
                                                <img src="https://uploads-ssl.webflow.com/6203b6d57823100847efd9b1/62f0de46caeb356ac0fa8a49_Vector%20(5).png" loading="lazy" alt="" class="image-144"/>
                                            </div>
                                        </Link>
                                    </li>

                                    <li>
                                        <Link class="dropdown-item" to="#"><h4>LangChain developer</h4>
                                            <div class="arrow-div">
                                                <img src="https://uploads-ssl.webflow.com/6203b6d57823100847efd9b1/62f0de46caeb356ac0fa8a49_Vector%20(5).png" loading="lazy" alt="" class="image-144"/>
                                            </div>
                                        </Link>
                                    </li>

                                    <li>
                                        <Link class="dropdown-item" to="#"><h4>Flutterflow</h4>
                                            <div class="arrow-div">
                                                <img src="https://uploads-ssl.webflow.com/6203b6d57823100847efd9b1/62f0de46caeb356ac0fa8a49_Vector%20(5).png" loading="lazy" alt="" class="image-144"/>
                                            </div>
                                        </Link>
                                    </li>
                                </div>
                            </div>
                        </ul>
                    </li>
                    <li className=" menu nav-item active">
                        <Link className="nav-link" to="#">Case Study </Link>
                    </li>
                    <li className=" menu nav-item active">
                        <Link className="nav-link" to="#">Pricing Plan </Link>
                    </li>
                    <li className=" menu nav-item active">
                        <Link className="nav-link" to="#">No Code Tools </Link>
                    </li>
                    <li className=" menu nav-item active">
                        <Link className="nav-link" to="#">About Us</Link>
                    </li>
                </ul>
                <Link to="#" className="new-nav-cta w-button">Get in Touch</Link>
            </div>
        </div>
    </nav>

    
  )
}

export default Navbar