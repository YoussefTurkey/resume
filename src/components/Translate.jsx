import React from 'react'
import { useTranslation } from 'react-i18next';

const Translate = () => {
  
  const {i18n} = useTranslation();
  
  return (
    <>
        { i18n.language == 'en' &&
          <button className='trans btn' id='trans' onClick={() => i18n.changeLanguage('ar') }>
              <i className="fa-solid fa-language"></i>
          </button>
        }

        { i18n.language == 'ar' &&
          <button className='trans btn' id='trans' onClick={() => i18n.changeLanguage('en') }>
              <i className="fa-solid fa-language"></i>
          </button>
        }
        
    </>
  )
}

export default Translate