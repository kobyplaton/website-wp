import emailjs from '@emailjs/browser'

export const recieveProcessMail = async (processKey, userEmail) => {
    const mailTemplate = {
        from_name: 'John Doe',
        from_email: userEmail,
        message: `new process created, key: ${processKey}, with user ${userEmail}`,
    }
    try {     
    const response = await emailjs.send(
        process.env.REACT_APP_EMAIL_SERVICE_ID,
        process.env.REACT_APP_EMAIL_FROM_USER_TEMPLATE_ID,
        mailTemplate,
        process.env.REACT_APP_EMAIL_PUBLIC_KEY
        )

        if (response.status === 200) {
            return true
        }
        return false
    } catch (error) {
        console.error('Cannot send email to Us. ', error)
    }    
}

export const sendProcessMailToUser = async (processKey, userEmail) => {
    const mailTemplate = {
        to_name: "",
        to_email: userEmail,
        message: `new process created, key: ${processKey}, we will contact you as soon as possible!`
    }
    try {
        const response = await emailjs.send(
            process.env.REACT_APP_EMAIL_SERVICE_ID,
            process.env.REACT_APP_EMAIL_TO_USER_TEMPLATE_ID,
            mailTemplate,
            process.env.REACT_APP_EMAIL_PUBLIC_KEY
            )

        if (response.status === 200) {
            return true
        }
        return false
        
    } catch (error) {
        console.error('Cannot send email to User. ', error)
    }
}