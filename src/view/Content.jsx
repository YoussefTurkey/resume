import { useTranslation } from 'react-i18next';

const Content = () => {

  const {t} = useTranslation();

  return (
    <>
      <section className='content'>
        <div className="cel">
          <h2>{t('Person.contentInfo.about.name')}</h2>
          <p>{t('Person.contentInfo.about.desc')}</p>
        </div>

        <div className="cel">
          <h2>{t('Person.contentInfo.projects.name')}</h2>
          
          <div className="celProject">
            <div className='project'>
                <h3>{t('Person.contentInfo.projects.firstProject.name')}</h3>

                <div className="view">
                  <a href={t('Person.contentInfo.projects.firstProject.live.link')} target='_blank'>{t('Person.contentInfo.projects.firstProject.live.name')}</a>
                  <a href={t('Person.contentInfo.projects.firstProject.code.link')} target='_blank'>{t('Person.contentInfo.projects.firstProject.code.name')}</a>
                </div>
            </div>

            <p className="txt_project">{t('Person.contentInfo.projects.firstProject.desc')}</p>

            <h4 className='techTit'>{t('Person.contentInfo.projects.firstProject.langs.title')}:</h4>
            <ul className='technologies'>
              <li><i className="fa-solid fa-check"></i> {t('Person.contentInfo.projects.firstProject.langs.one')}</li>
              <li><i className="fa-solid fa-check"></i> {t('Person.contentInfo.projects.firstProject.langs.two')}</li>
              <li><i className="fa-solid fa-check"></i> {t('Person.contentInfo.projects.firstProject.langs.three')}</li>
              <li><i className="fa-solid fa-check"></i> {t('Person.contentInfo.projects.firstProject.langs.four')}</li>
              <li><i className="fa-solid fa-check"></i> {t('Person.contentInfo.projects.firstProject.langs.five')}</li>
              <li><i className="fa-solid fa-check"></i> {t('Person.contentInfo.projects.firstProject.langs.six')}</li>
            </ul>
          </div>

          <div className="celProject">
            <div className='project'>
                <h3>{t('Person.contentInfo.projects.secondProject.name')}</h3>

                <div className="view">
                  <a href={t('Person.contentInfo.projects.secondProject.live.link')} target='_blank'>{t('Person.contentInfo.projects.secondProject.live.name')}</a>
                  <a href={t('Person.contentInfo.projects.secondProject.code.link')} target='_blank'>{t('Person.contentInfo.projects.secondProject.code.name')}</a>
                </div>
            </div>

            <p className="txt_project">{t('Person.contentInfo.projects.secondProject.desc')}</p>

            <h4 className='techTit'>{t('Person.contentInfo.projects.firstProject.langs.title')}:</h4>
            <ul className='technologies'>
              <li><i className="fa-solid fa-check"></i> {t('Person.contentInfo.projects.secondProject.langs.one')}</li>
              <li><i className="fa-solid fa-check"></i> {t('Person.contentInfo.projects.secondProject.langs.two')}</li>
              <li><i className="fa-solid fa-check"></i> {t('Person.contentInfo.projects.secondProject.langs.three')}</li>
            </ul>
          </div>

          <div className="celProject">
            <div className='project'>
                <h3>{t('Person.contentInfo.projects.thirdProject.name')}</h3>

                <div className="view">
                  <a href={t('Person.contentInfo.projects.thirdProject.live.link')} target='_blank'>{t('Person.contentInfo.projects.thirdProject.live.name')}</a>
                  <a href={t('Person.contentInfo.projects.thirdProject.code.link')} target='_blank'>{t('Person.contentInfo.projects.thirdProject.code.name')}</a>
                </div>
            </div>

            <p className="txt_project">{t('Person.contentInfo.projects.thirdProject.desc')}</p>

            <h4 className='techTit'>{t('Person.contentInfo.projects.firstProject.langs.title')}:</h4>
            <ul className='technologies'>
              <li><i className="fa-solid fa-check"></i> {t('Person.contentInfo.projects.thirdProject.langs.one')}</li>
              <li><i className="fa-solid fa-check"></i> {t('Person.contentInfo.projects.thirdProject.langs.two')}</li>
              <li><i className="fa-solid fa-check"></i> {t('Person.contentInfo.projects.thirdProject.langs.three')}</li>
              <li><i className="fa-solid fa-check"></i> {t('Person.contentInfo.projects.thirdProject.langs.four')}</li>
              <li><i className="fa-solid fa-check"></i> {t('Person.contentInfo.projects.thirdProject.langs.five')}</li>
              <li><i className="fa-solid fa-check"></i> {t('Person.contentInfo.projects.thirdProject.langs.six')}</li>
              <li><i className="fa-solid fa-check"></i> {t('Person.contentInfo.projects.thirdProject.langs.seven')}</li>
            </ul>
          </div>
        </div>

        <div className="cel">
          <h2>{t('Person.contentInfo.reference.title')}</h2>
          
          <div className="d-flex row">
            <div className="celRef col-12 col-sm-12 col-md-6">
              <p>{t('Person.contentInfo.reference.Uni.title')}</p>
              <span>{t('Person.contentInfo.reference.Uni.name')}</span>
              <p>Phone: {t('Person.contentInfo.reference.Uni.phone')}</p>
              <p>Email: {t('Person.contentInfo.reference.Uni.email')}</p>
            </div>

            <div className="celRef col-12 col-sm-12 col-md-6">
              <p>{t('Person.contentInfo.reference.US.title')}</p>
              <span>{t('Person.contentInfo.reference.US.name')}</span>
              <p>Phone: {t('Person.contentInfo.reference.US.phone')}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Content