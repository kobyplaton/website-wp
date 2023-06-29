import React, { useContext } from 'react'
import Question from './Question'
import { NavContext } from '../../context/NavContext';
import { useTranslation } from 'react-i18next';
import useQuestions from './useQuestions';

function Faq() {

  const {faqRef} = useContext(NavContext)

  const questions = useQuestions()

  return (
    <div ref={faqRef} className='faq mb-5'>
      {questions.map(({question, answer}, index) => {
        return (

          <Question key={index} question={question} answer={answer} />
        )
      })
    }
    </div>
  )
}

export default Faq