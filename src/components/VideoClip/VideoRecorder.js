import { useRef, useState, useEffect } from "react";

function VideoRecorder() {
    const videoRef = useRef(null);
    const mediaRecorder = useRef(null);
    const [recording, setRecording] = useState(false);
    const [timer, setTimer] = useState(15);
    const [intervalId, setIntervalId] = useState(null);

    const MAX_RECORDING_TIME = 15000; // in milliseconds

    useEffect(() => {
        startRecording();
    }, []);

    useEffect(() => {
        if (timer === 0) {
            stopRecording();
        }
    }, [timer]);

    const handleDataAvailable = (event) => {
        const blob = new Blob([event.data], { type: "video/webm" });
        localStorage.setItem("savedVideo", URL.createObjectURL(blob));
    };

    const startRecording = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
            videoRef.current.srcObject = stream;

            mediaRecorder.current = new MediaRecorder(stream, { mimeType: "video/webm" });
            mediaRecorder.current.ondataavailable = handleDataAvailable;

            mediaRecorder.current.start();

            setRecording(true);

            const id = setInterval(() => {
                setTimer((timer) => timer - 1);
            }, 1000);

            setIntervalId(id);

            setTimeout(() => {
                stopRecording();
            }, MAX_RECORDING_TIME);

            // set screen orientation to portrait-primary
            if (window.screen && window.screen.orientation && window.screen.orientation.lock) {
                window.screen.orientation.lock("portrait-primary");
            }
        } catch (error) {
            console.log("Error accessing camera and microphone: ", error);
        }
    };

    const stopRecording = () => {
        clearInterval(intervalId);

        if (mediaRecorder.current && mediaRecorder.current.state !== "inactive") {
            mediaRecorder.current.stop();
        }

        setRecording(false);
        setTimer(15);

        // release screen orientation
        if (window.screen && window.screen.orientation && window.screen.orientation.unlock) {
            window.screen.orientation.unlock();
        }
    };

    return (
        <div style={{ width: "100%", height: "100vh", display: "flex", flexDirection: "column" }}>
            <video ref={videoRef} autoPlay style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            {recording && (
                <div style={{ position: "absolute", top: 0, right: 0, backgroundColor: "white", padding: "10px" }}>
                    Timer: {timer}
                </div>
            )}
            <button onClick={recording ? stopRecording : startRecording} style={{ position: "absolute", bottom: 0 }}>
                {recording ? "Stop Recording" : "Start Recording"}
            </button>
        </div>
    );
}



export default VideoRecorder