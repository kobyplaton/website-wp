import React from 'react'
import { useTranslation } from 'react-i18next'

function useQuestions() {

    const {t, i18n} = useTranslation('common')

    const questions = [
        {
            question: t('Home.Faq.Question0.question'),
            answer: t('Home.Faq.Question0.answer')
        },
        {
            question: t('Home.Faq.Question1.question'),
            answer: t('Home.Faq.Question1.answer')
        },
        {
            question: t('Home.Faq.Question2.question'),
            answer: t('Home.Faq.Question2.answer')
        },
        {
            question: t('Home.Faq.Question3.question'),
            answer: t('Home.Faq.Question3.answer')
        },
        {
            question: t('Home.Faq.Question4.question'),
            answer: t('Home.Faq.Question4.answer')
        },
        {
            question: t('Home.Faq.Question5.question'),
            answer: t('Home.Faq.Question5.answer')
        },
        {
            question: t('Home.Faq.Question6.question'),
            answer: t('Home.Faq.Question6.answer')
        },
        {
            question: t('Home.Faq.Question7.question'),
            answer: t('Home.Faq.Question7.answer')
        },
    ]
  
    return questions
}

export default useQuestions