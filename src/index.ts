// validate email
function validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}


const form = document.getElementById('contactForm') as HTMLFormElement;
const statusMessage = document.getElementById('statusMessage') as HTMLParagraphElement;

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const contactNumber = (document.getElementById('contactNumber') as HTMLInputElement).value;
    const subject = (document.getElementById('subject') as HTMLInputElement).value;
    const message = (document.getElementById('message') as HTMLTextAreaElement).value;

    if (!name || !email || !contactNumber || !subject || !message) {
        statusMessage.textContent = 'All fields are required!';
        return;
    }

    if (!validateEmail(email)) {
        statusMessage.textContent = 'Invalid email format!';
        return;
    }

    try {
        const apiUrl = 'https://6717cfc6b910c6a6e02a19d2.mockapi.io/formSubmission';

        //POST
        const response = await axios.post(apiUrl, {
            name,
            email,
            contactNumber,
            subject,
            message,
        });

        if (response.status === 201) {
            statusMessage.textContent = 'Form Submitted Successfully';
        } else {
            statusMessage.textContent = 'Submission Failed, try again later';
        }
    } catch (error) {
        console.error('Error during form submission:', error);
        statusMessage.textContent = 'Submission Failed';
    }
});
