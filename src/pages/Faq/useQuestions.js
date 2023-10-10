import { useTranslation } from 'react-i18next'

function useQuestions() {

    const {t} = useTranslation('common')

    const questions = [
        {
            question: t('Faq.Question1.question'),
            answer: t('Faq.Question1.answer'),
            extra: [
                {body: t('Faq.Question1.extra.1.body'), heading: t('Faq.Question1.extra.1.heading')},
                {body: t('Faq.Question1.extra.2.body'), heading: t('Faq.Question1.extra.2.heading')},
                {body: t('Faq.Question1.extra.3.body'), heading: t('Faq.Question1.extra.3.heading')},
                {body: t('Faq.Question1.extra.4.body'), heading: t('Faq.Question1.extra.4.heading')},
                {body: t('Faq.Question1.extra.5.body'), heading: t('Faq.Question1.extra.5.heading')}
            ]
        },
        {
            question: t('Faq.Question2.question'),
            answer: t('Faq.Question2.answer')
        },
        {
            question: t('Faq.Question3.question'),
            answer: t('Faq.Question3.answer')
        },
        {
            question: t('Faq.Question4.question'),
            answer: t('Faq.Question4.answer')
        },
        {
            question: t('Faq.Question5.question'),
            answer: t('Faq.Question5.answer')
        },
        {
            question: t('Faq.Question6.question'),
            answer: t('Faq.Question6.answer')
        },
        {
            question: t('Faq.Question7.question'),
            answer: t('Faq.Question7.answer')
        },
        {
            question: t('Faq.Question8.question'),
            answer: t('Faq.Question8.answer')
        },
    ]
  
    return questions
}

export default useQuestions