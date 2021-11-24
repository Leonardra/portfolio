import React from 'react';
import "./NavBar.css"
import { ArrowDownOutlined } from '@ant-design/icons';
import Picture from './assets/mypix.png'
import TwitterIcon from '@mui/icons-material/Twitter';
import {GitHub, LinkedIn, FileDownload} from "@mui/icons-material";


const Hero = () => {
    return (
        <div className="banner-hero">
            <div className="banner-intro">
                <div className="hero-text">
                    <h1>Hi,<br/> I'm Oluwatobi</h1>
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text.
                        It has roots in a piece of classical Latin literature from 45 BC,
                        making it over 2000 years old. Richard McClintock,
                        a Latin professor at Hampden-Sydney College in Virginia,
                        looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage,
                        and going through the cites of the word in classical literature,
                        discovered the undoubtable source.</p>
                    <button href="/#"><span>Download CV</span><span className="arrow"><FileDownload/></span></button>

                    <div className="social-icons">
                       <a href="/#"><TwitterIcon /></a>
                        <a href="/#"><GitHub /></a>
                        <a href="/#"><LinkedIn/></a>
                    </div>
                </div>
                <div className="image-frame">
                    <img src={Picture} alt="Oluwatobi-Jolayemi" />
                </div>

            </div>
            <button id="reveal-button"><ArrowDownOutlined className=""/></button>
        </div>
    );
};

export default Hero;