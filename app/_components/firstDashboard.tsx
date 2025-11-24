import dynamic from "next/dynamic";
import Image from "next/image";
function FirstDashboard() {
    return (
        <>
            <iframe
            title="TEST"
            width="600"
            height="373.5"
            src="https://app.powerbi.com/view?r=eyJrIjoiOWE0ZDVjMmEtZmQzYy00NmYyLWIxZjgtOGQyMjM1M2EyYmE5IiwidCI6ImVhZjYyNGM4LWEwYzQtNDE5NS04N2QyLTQ0M2U1ZDc1MTZjZCIsImMiOjh9"
            frameBorder="0"
            allowFullScreen={true}
            ></iframe>
        </>
    );
}

export default FirstDashboard;
