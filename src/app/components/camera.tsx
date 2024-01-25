"use client"

import { Console } from "console";
import React, {useCallback, useRef, useState} from "react";
import Webcam from "react-webcam";
import { loadGraphModel } from "@tensorflow/tfjs";

function getRandomNumber(max: number): number {
    return Math.floor(Math.random() * max);
}

export default function Camera() {
    const [prediction, setPrediction] = useState<any>(null)
    // 0=Angry, 1=Disgust, 2=Fear, 3=Happy, 4=Sad, 5=Surprise, 6=Neutral
    const emotionsEncoding = ['Angry', 'Disgust', 'Fear', 'Happy', 'Sad', 'Surprise', 'Neutral']

    const webcamRef = useRef<any>('');
    function capture () {
        const image = webcamRef.current.getScreenshot();
        // try {
        //     const model = loadGraphModel('https://beemovr.com/model/model.json')
        // } catch (err: any) {
        //     console.log(err)
        //     console.log("NOPE")
        // }
        setPrediction(emotionsEncoding[getRandomNumber(7)])
    }

    return (
        <div className="relative flex flex-col gap-6 text-center">
            <Webcam className="border rounded-lg drop-shadow-2xl" audio={false} ref={webcamRef} screenshotFormat="image/jpeg" />
            <div>
                <button className="rounded-md border border-cyan-200 bg-white px-3 py-1 hover:bg-cyan-50 hover:shadow-lg active:bg-cyan-100/70 drop-shadow-lg" onClick={capture}>Get predictions</button>
            </div>
            <div className="h-3">
                {prediction}
            </div>
        </div>
    );
}