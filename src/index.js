"use strict";
// import axios from 'axios';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Function to validate email
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
// Function to handle form submission
const form = document.getElementById('contactForm');
const statusMessage = document.getElementById('statusMessage');
form.addEventListener('submit', (event) => __awaiter(void 0, void 0, void 0, function* () {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const contactNumber = document.getElementById('contactNumber').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    // Validate the form inputs
    if (!name || !email || !contactNumber || !subject || !message) {
        statusMessage.textContent = 'All fields are required!';
        return;
    }
    if (!validateEmail(email)) {
        statusMessage.textContent = 'Invalid email format!';
        return;
    }
    try {
        // MockAPI endpoint (replace with your own correct URL)
        const apiUrl = 'https://6717cfc6b910c6a6e02a19d2.mockapi.io/formSubmission';
        // Send POST request to MockAPI
        const response = yield axios.post(apiUrl, {
            name,
            email,
            contactNumber,
            subject,
            message,
        });
        if (response.status === 201) {
            statusMessage.textContent = 'Form Submitted Successfully';
        }
        else {
            statusMessage.textContent = 'Submission Failed, try again later';
        }
    }
    catch (error) {
        console.error('Error during form submission:', error);
        statusMessage.textContent = 'Submission Failed';
    }
}));
