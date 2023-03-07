import React from 'react'

const Sidebar = () => {

  const sideInfo = {
    "education" : "Bachelor of Science, Alexandria University | 2022",
    "techSkills" : [
      ["HTML5, ", "CSS3, ", "JavaScript, ", "Scss"],
      ["Bootstrap, ", "MDB, ", "jQuery"],
      ["React.js, ", "vue.js"],
      ["Photoshop, ", "illustrator, ", "lightroom"]
    ],
    "certificates" : ["Diploma of Quantum Computing & Programming (2022)", 
                      "AWCO Training center (2021)", 
                      "Complete HTML5 & CSS3 & JavaScript Course (2020)"
                    ],
    "languages" : ["Arabic - Native", "English - Elementary"]
  }

  return (
    <>
      <section className='sidebar'>
        <div className="cel">
          <h2>Education</h2>
          <p>{sideInfo.education}</p>
        </div>

        <div className="cel">
          <h2>Skills</h2>

          <ul>
            <h3>Technical Skills</h3>
            <li>{sideInfo.techSkills[0]}.</li>
            <li>{sideInfo.techSkills[1]}.</li>
            <li>{sideInfo.techSkills[2]}.</li>
            <li>{sideInfo.techSkills[3]}.</li>
          </ul>

          <ul>
            <h3>Soft Skills</h3>
            <li>Teamwork, leadership.</li>
            <li>Communication, presentation.</li>
            <li>Self-learning.</li>
            <li>Critical thinking, creative.</li>
          </ul>
        </div>

        <div className="cel cert">
          <h2>Certificates</h2>
          <ul className='certificates'>
            <li>{sideInfo.certificates[0]}</li>
            <li>{sideInfo.certificates[1]}</li>
            <li>{sideInfo.certificates[2]}</li>
          </ul>
        </div>

        <div className="cel">
          <h2>languages</h2>
          <ul className='languages'>
            <li>{sideInfo.languages[0]}</li>
            <li>{sideInfo.languages[1]}</li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default Sidebar