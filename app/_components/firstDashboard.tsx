import dynamic from "next/dynamic";
import Image from "next/image";
function FirstDashboard() {
    return (
        <div className="m-10 p-5 bg-red-800 rounded-2xl text-center">
            <iframe
            title="TEST"
            width="600"
            height="373.5"
            src="https://app.powerbi.com/view?r=eyJrIjoiOWE0ZDVjMmEtZmQzYy00NmYyLWIxZjgtOGQyMjM1M2EyYmE5IiwidCI6ImVhZjYyNGM4LWEwYzQtNDE5NS04N2QyLTQ0M2U1ZDc1MTZjZCIsImMiOjh9"
            frameBorder="0"
            allowFullScreen={true}
            loading="lazy"
            className="w-full h-[600px] rounded-2xl"
            ></iframe>
        </div>
    );
}
export default FirstDashboard;
//! embedding with powerbi-client
// import React, { useEffect, useRef } from 'react';
// import * as pbi from 'powerbi-client';
// import { getAccessToken } from '../_services/powerbiAuth';
// const PowerBIEmbed: React.FC = () => {
//     const reportContainer = useRef<HTMLDivElement>(null);
//     useEffect(() => {
//         const embedReport = async () => {
//             try {
//                 const accessToken = await getAccessToken();
//                 const config: pbi.IEmbedConfiguration = {
//                     type: 'report',
//                     id: process.env.NEXT_PUBLIC_POWERBI_REPORT_ID,
//                     embedUrl: process.env.NEXT_PUBLIC_POWERBI_EMBED_URL,
//                     accessToken: accessToken,
//                     tokenType: pbi.models.TokenType.Embed,
//                     settings: {
//                         filterPaneEnabled: true,
//                         navContentPaneEnabled: true,
//                     },
//                 };
//                 if (!reportContainer.current) {
//                     console.error('Report container not available');
//                     return;
//                 }
//                 const powerbiService = new pbi.service.Service(
//                     pbi.factories.hpmFactory,
//                     pbi.factories.wpmpFactory,
//                     pbi.factories.routerFactory
//                 );
//                 const report = powerbiService.embed(reportContainer.current, config) as pbi.Embed;
//                 report.on('loaded', () => {
//                     console.log('Report loaded');
//                 });
//                 report.on('error', (event: unknown) => {
//                     // Safely handle unknown event object and extract detail if available
//                     if (typeof event === 'object' && event !== null && 'detail' in event) {
//                         const detail = (event as { detail: unknown }).detail;
//                         console.error('Error loading report:', detail);
//                     } else {
//                         console.error('Error loading report:', event);
//                     }
//                 });
//             } catch (error) {
//                 console.error('Error embedding report:', error);
//             }
//         };
//         embedReport();
//     }, []);
//     return <div ref={reportContainer} style={{ width: '100%', height: '600px' }} />;
// };
// export default PowerBIEmbed;