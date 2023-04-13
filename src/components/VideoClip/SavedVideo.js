import { useState } from "react";

function SavedVideo() {
    const [savedVideoUrl, setSavedVideoUrl] = useState(null);

    const loadSavedVideo = () => {
        const savedVideo = localStorage.getItem("savedVideo");
        if (savedVideo) {
            setSavedVideoUrl(savedVideo);
        }
    };

    return (
        <div style={{ width: '90%', margin: 'auto', marginTop: '50px',
         height: '350px', textAlign: 'center',
         border:'1px solid grey' }}>
            <button onClick={loadSavedVideo}>Load Saved Video</button>
            {savedVideoUrl &&
                <video src={savedVideoUrl}
                    controls
                    style={{ width: '100%', height: '90%', border: '1px solid red', objectFit: "center"  }}
                />}
        </div>
    );
}


export default SavedVideo