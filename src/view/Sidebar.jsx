import { useTranslation } from 'react-i18next';

const Sidebar = () => {

  const {t} = useTranslation();

  return (
    <>
      <section className='sidebar'>
        <div className="cel">
          <h2>{t('Person.sideInfo.education.name')}</h2>
          <p>{t('Person.sideInfo.education.desc')}</p>
        </div>

        <div className="cel">
          <h2>{t('Person.sideInfo.techSkills.name')}</h2>

          <ul>
            <h3>{t('Person.sideInfo.techSkills.subname')}</h3>
            <li>{t('Person.sideInfo.techSkills.skills.one')}, {t('Person.sideInfo.techSkills.skills.two')}, {t('Person.sideInfo.techSkills.skills.three')}, {t('Person.sideInfo.techSkills.skills.four')}.</li>
            <li>{t('Person.sideInfo.techSkills.skills.five')}, {t('Person.sideInfo.techSkills.skills.six')}, {t('Person.sideInfo.techSkills.skills.seven')}.</li>
            <li>{t('Person.sideInfo.techSkills.skills.eight')}, {t('Person.sideInfo.techSkills.skills.nine')}, {t('Person.sideInfo.techSkills.skills.ten')}.</li>
            <li>{t('Person.sideInfo.techSkills.skills.eleven')}, {t('Person.sideInfo.techSkills.skills.tweleve')}, {t('Person.sideInfo.techSkills.skills.thirteen')}.</li>
          </ul>

          <ul>
            <h3>{t('Person.sideInfo.softSkills.subname')}</h3>
            <li>{t('Person.sideInfo.softSkills.skills.one')}, {t('Person.sideInfo.softSkills.skills.two')}.</li>
            <li>{t('Person.sideInfo.softSkills.skills.three')}, {t('Person.sideInfo.softSkills.skills.four')}.</li>
            <li>{t('Person.sideInfo.softSkills.skills.five')}.</li>
            <li>{t('Person.sideInfo.softSkills.skills.six')}, {t('Person.sideInfo.softSkills.skills.seven')}.</li>
          </ul>
        </div>

        <div className="cel cert">
          <h2>{t('Person.sideInfo.certificates.name')}</h2>
          <ul className='certificates'>
            <li>{t('Person.sideInfo.certificates.certs.one')}</li>
            <li>{t('Person.sideInfo.certificates.certs.two')}</li>
            <li>{t('Person.sideInfo.certificates.certs.three')}</li>
          </ul>
        </div>

        <div className="cel">
          <h2>{t('Person.sideInfo.languages.name')}</h2>
          <ul className='languages'>
            <li>{t('Person.sideInfo.languages.langs.one')}</li>
            <li>{t('Person.sideInfo.languages.langs.two')}</li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default Sidebar