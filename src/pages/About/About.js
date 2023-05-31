import React from 'react'

import './About.css'

export default function About() {
    return (
        <div className="about-container">
            <h1 className="about-heading">About</h1>
            <div className="about-main">
                <p className="about-content">
                    This is an realtime AI based Yoga Trainer which detects your pose how well you are doing.
                    I created this as a personal project, and I have also deployed this project
                    so people can use it and mainly the developers can who are learning AI can learn 
                    from this project and make their own AI or they can also improve in this project.
                    This is an open source project, The code is available on the GitHub - <a href="https://github.com/harshbhatt7585/YogaIntelliJ">https://github.com/harshbhatt7585/YogaIntelliJ</a>
                    
                    This AI first predicts keypoints or coordinates of different parts of the body(basically where
                    they are present in an image) and then it use another classification model to classify the poses if 
                    someone is doing a pose and if AI detects that pose more than 95% probability and then it will notify you are 
                    doing correctly(by making virtual skeleton green). I have used Tensorflow pretrained Movenet Model To Predict the 
                    Keypoints and building a neural network top of that which uses these coordinates and classify a yoga pose.

                    I have trained the model in python because of tensorflowJS we can leverage the support of browser so I converted 
                    the keras/tensorflow model to tensorflowJS.
                </p>
                <div className="developer-info">
                    <h4>About Developer</h4>
                   
                    <h4>Contact</h4>
                     <a href="https://www.instagram.com/__shubhu_11/"><p className="about-content">Instagram</p></a>
                    <a href="https://www.linkedin.com/in/shubham-shinde-337138246/"><p className="about-content">Linkedin</p></a>
                   
                    <a href="https://github.com/Shubhshinde11"><p  className="about-content">GitHub</p></a>
                </div>
            </div>
        </div>
    )
}
