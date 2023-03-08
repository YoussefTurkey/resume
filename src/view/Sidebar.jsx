import personal from "../assets/js/information.json"

const Sidebar = () => {
  return (
    <>
      <section className='sidebar'>
        <div className="cel">
          <h2>Education</h2>
          <p>{personal[0].Turkey.sideInfo.education}</p>
        </div>

        <div className="cel">
          <h2>Skills</h2>

          <ul>
            <h3>Technical Skills</h3>
            <li>{personal[0].Turkey.sideInfo.techSkills[0]}, {personal[0].Turkey.sideInfo.techSkills[1]}, {personal[0].Turkey.sideInfo.techSkills[2]}, {personal[0].Turkey.sideInfo.techSkills[3]}.</li>
            <li>{personal[0].Turkey.sideInfo.techSkills[4]}, {personal[0].Turkey.sideInfo.techSkills[5]}, {personal[0].Turkey.sideInfo.techSkills[6]}.</li>
            <li>{personal[0].Turkey.sideInfo.techSkills[7]}, {personal[0].Turkey.sideInfo.techSkills[8]}.</li>
            <li>{personal[0].Turkey.sideInfo.techSkills[9]}, {personal[0].Turkey.sideInfo.techSkills[10]}, {personal[0].Turkey.sideInfo.techSkills[11]}.</li>
          </ul>

          <ul>
            <h3>Soft Skills</h3>
            <li>{personal[0].Turkey.sideInfo.softSkills[0]}, {personal[0].Turkey.sideInfo.softSkills[1]}.</li>
            <li>{personal[0].Turkey.sideInfo.softSkills[2]}, {personal[0].Turkey.sideInfo.softSkills[3]}.</li>
            <li>{personal[0].Turkey.sideInfo.softSkills[4]}.</li>
            <li>{personal[0].Turkey.sideInfo.softSkills[5]}, {personal[0].Turkey.sideInfo.softSkills[6]}.</li>
          </ul>
        </div>

        <div className="cel cert">
          <h2>Certificates</h2>
          <ul className='certificates'>
            <li>{personal[0].Turkey.sideInfo.certificates[0]}</li>
            <li>{personal[0].Turkey.sideInfo.certificates[1]}</li>
            <li>{personal[0].Turkey.sideInfo.certificates[2]}</li>
          </ul>
        </div>

        <div className="cel">
          <h2>languages</h2>
          <ul className='languages'>
            <li>{personal[0].Turkey.sideInfo.languages[0]}</li>
            <li>{personal[0].Turkey.sideInfo.languages[1]}</li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default Sidebar