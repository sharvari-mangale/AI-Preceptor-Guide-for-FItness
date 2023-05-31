import React, { useState } from 'react'

import { poseInstructions } from '../../utils/data'
// import { poseInstructions } from 'C:\Users\HP\Desktop\AIfitness\frontend\src\utils\data\index.js'

import { poseImages } from '../../utils/pose_images'

import './instructions.css'

export default function Instructions({ currentPose }) {

    const [instructions, setInsntructions] = useState(poseInstructions)

    return (
        <div className="instructions-container">
            <ul className="instructions-list">
                {instructions[currentPose].map((instruction) => {

                    return(
                        <li className="instruction">{instruction}</li>
                    );
                    
                })};
            </ul>
            <img 
                className="pose-demo-img"
                src={poseImages[currentPose]}
            />
        </div>
    )
}
