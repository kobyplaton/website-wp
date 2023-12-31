import React, { useContext } from 'react'
import Question from './Question'
import { NavContext } from '../../context/NavContext';
import useQuestions from './useQuestions';

function Faq() {

  const {faqRef} = useContext(NavContext)

  const questions = useQuestions()

  return (
    <div ref={faqRef} className='faq mb-5'>
      {questions.map(({question, answer, extra}, index) => {
        return (

          <Question key={index} question={question} answer={answer} extra={extra} />
        )
      })
    }
    </div>
  )
}

export default Faq