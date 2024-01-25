"use client"

import { Console } from "console";
import React, {useCallback, useRef} from "react";
import Webcam from "react-webcam";

export default function Camera() {
    const webcamRef = useRef(null);
    const capture = useCallback(() => {
        const image = webcamRef.current.getScreenshot();
        console.log(image)
    }, [webcamRef])

    return (
        <div className="flex flex-col gap-6">
            <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" />
            <div className="text-center">
                <button className="rounded-md border border-cyan-200 bg-white px-3 py-1 hover:bg-cyan-50 hover:shadow-lg active:bg-cyan-100/70" onClick={capture}>Get predictions</button>
            </div>
        </div>
    );
}