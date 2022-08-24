import React from 'react'; 
import { Row, Col } from 'react-bootstrap';

function Resume() {
    return(
        <>
        <h1 className="resume">RESUME</h1>
        <div className="resume-intro">
            <Row>
                <Col lg={8} md={12}>
                     Full Stack Developer, proficient in MERN stack, and always learning new skills.
                </Col>
            </Row>
        </div>

        <div className="resume-container">
            <Row>
                <Col lg={4} md={12}>
                <h2 className="resume">FRONT END PROFICIENCIES</h2>
                <ul>
                    <li>
                        HTML
                    </li>
                    <li>
                        CSS
                    </li>
                    <li>
                        JavaScript
                    </li>
                    <li>
                        jQuery
                    </li>
                    <li>
                        React.js
                    </li>
                    <li>
                        Framework | Bootstrap | Materalize
                    </li>
                </ul>
                </Col>
        
            <Col lg={4} md={12}>
            <h2 className="resume">BACK END PROFICIENCIES</h2>
                <ul>
                    <li>
                        Node.js
                    </li>
                    <li>
                        Express.js
                    </li>
                    <li>
                        MySQL
                    </li>
                    <li>
                        NoSQL | MongoDB | Mongoose
                    </li>
                    <li>
                        API
                    </li>

                </ul>
            </Col>
        </Row>
        </div>
        </>
)}
  
export default Resume;

// import React from "react";
// import { Row, Col } from "react-bootstrap";
// import documents from "../../documents/Diego_Rivera_Resume.PDF"

// function Resume() {
//     return (
//         <section className="container">
//             <h2 className="resume-title">Resume</h2>
//             <hr></hr>

//             <div>
//                 <div className="mt-5">
//                     <h2 className="resume-nam">Diego G. Rivera</h2>
//                     <ul>
//                         <li>
//                             Full Stack Developer, proficient in MERN stack, and always learning new skills.
//                         </li>
//                     </ul>
                    
//                     <a href={documents}>Resume</a>
//                 </div>
//             </div>
//         </section>
//     )
// }
// export default Resume;
