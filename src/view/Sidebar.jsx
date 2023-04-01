import { useTranslation } from 'react-i18next';
import personal from "../local/en.json"

const Sidebar = () => {

  const {t} = useTranslation();

  return (
    <>
      <section className='sidebar'>
        <div className="cel">
          <h2>Education</h2>
          <p>{t(personal.Person.sideInfo.education)}</p>
        </div>

        <div className="cel">
          <h2>Skills</h2>

          <ul>
            <h3>Technical Skills</h3>
            <li>{personal.Person.sideInfo.techSkills[0]}, {personal.Person.sideInfo.techSkills[1]}, {personal.Person.sideInfo.techSkills[2]}, {personal.Person.sideInfo.techSkills[3]}.</li>
            <li>{personal.Person.sideInfo.techSkills[4]}, {personal.Person.sideInfo.techSkills[5]}, {personal.Person.sideInfo.techSkills[6]}.</li>
            <li>{personal.Person.sideInfo.techSkills[7]}, {personal.Person.sideInfo.techSkills[8]}.</li>
            <li>{personal.Person.sideInfo.techSkills[9]}, {personal.Person.sideInfo.techSkills[10]}, {personal.Person.sideInfo.techSkills[11]}.</li>
          </ul>

          <ul>
            <h3>Soft Skills</h3>
            <li>{personal.Person.sideInfo.softSkills[0]}, {personal.Person.sideInfo.softSkills[1]}.</li>
            <li>{personal.Person.sideInfo.softSkills[2]}, {personal.Person.sideInfo.softSkills[3]}.</li>
            <li>{personal.Person.sideInfo.softSkills[4]}.</li>
            <li>{personal.Person.sideInfo.softSkills[5]}, {personal.Person.sideInfo.softSkills[6]}.</li>
          </ul>
        </div>

        <div className="cel cert">
          <h2>Certificates</h2>
          <ul className='certificates'>
            <li>{t(personal.Person.sideInfo.certificates[0])}</li>
            <li>{t(personal.Person.sideInfo.certificates[1])}</li>
            <li>{t(personal.Person.sideInfo.certificates[2])}</li>
          </ul>
        </div>

        <div className="cel">
          <h2>languages</h2>
          <ul className='languages'>
            <li>{t(personal.Person.sideInfo.languages[0])}</li>
            <li>{t(personal.Person.sideInfo.languages[1])}</li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default Sidebar