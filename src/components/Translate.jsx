import React from 'react'
import { useTranslation } from 'react-i18next';
import { switchLang } from '../assets/js/lang'

const Translate = () => {
  
  const {i18n} = useTranslation();
  
  const translateFunc = (lang) => {
    switchLang(lang)
    i18n.changeLanguage(lang)
  }


  return (
    <>
        { i18n.language == 'en' &&
          <button className='trans btn' id='trans' onClick={ () => translateFunc('ar') }>
              <i className="fa-solid fa-language"></i>
          </button>
        }

        { i18n.language == 'ar' &&
          <button className='trans btn' id='trans' onClick={ () => translateFunc('en') }>
              <i className="fa-solid fa-language"></i>
          </button>
        }
        
    </>
  )
}

export default Translate