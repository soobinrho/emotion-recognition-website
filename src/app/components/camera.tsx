"use client"

import React, {useCallback, useRef} from "react";
import Webcam from "react-webcam";

export default function Camera() {
    const webcamRef = useRef(null);
    const capture = useCallback(() => {
        const image = webcamRef.current.getScreenshot();
    }, [webcamRef])

    return (
        <>
        <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" />
        </>
    );
}