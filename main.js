const contactForm = document.getElementById('contact-form'),
    contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault()

    //serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_wr7fxxj', 'template_9o7fzyb', '#contact-form', 'cZH22JplQxGcdFjOi')
        .then(() => {
            //Show sent message
            contactMessage.textContent = 'Message sent successfully.'

            // Remove Message after 1 seconds
            setTimeout(() => {
                contactMessage.textContent = ''
            }, 5000)
            // Clear input fields
            contactForm.reset()
        }, () => {
            //Show error message
            contactMessage.textContent = 'Error sending message.'
        })
}

contactForm.addEventListener('submit', sendEmail)