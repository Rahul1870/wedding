document.addEventListener('DOMContentLoaded', function () {
    const faqData = [
        { category: 'General Questions', question: 'What is Plan a Wedding?', answer: 'Plan a Wedding is a full-service wedding planning company that helps couples plan and execute their dream weddings.' },
        { category: 'General Questions', question: 'What services does Plan a Wedding offer?', answer: 'We offer a wide range of services including venue selection, decor, catering, entertainment, and more.' },
        { category: 'Consultation and Services', question: 'What can users expect if they opt for a consultation?', answer: 'During a consultation, users can discuss their vision, preferences, and budget with our experts to tailor a customized wedding plan.' },
        { category: 'Execution and Assistance', question: 'Will Plan a Wedding execute weddings?', answer: 'Yes, we will take care of all the logistics and execution to ensure a seamless and beautiful wedding.' },
        { category: 'Execution and Assistance', question: 'In case a user wants to hire a wedding planner, will Plan a Wedding assist?', answer: 'Absolutely, we will assist you in finding the right wedding planner based on your needs and preferences.' },
        { category: 'Execution and Assistance', question: 'How do I trust wedding planners suggested by Plan a Wedding?', answer: 'We carefully vet and collaborate with experienced and reputable wedding planners to ensure trust and reliability.' },
        { category: 'Finance and Payments', question: 'Will Plan a Wedding help users get multiple and best quotes?', answer: 'Yes, we work with a network of vendors and can help you get multiple quotes to choose the best options within your budget.' },
        { category: 'Finance and Payments', question: 'Will Plan a Wedding help users in arranging finance to manage the wedding?', answer: 'While we don\'t provide direct financing, we can offer advice and connect you with financial experts to help manage your wedding budget.' },
        { category: 'Finance and Payments', question: 'Who will finance the expenses?', answer: 'Couples are responsible for financing their wedding expenses. We can guide you on budgeting and financial planning.' },
        { category: 'Execution and Assistance', question: 'Will Plan a Wedding be part of the entire wedding process?', answer: 'Yes, we will be there from the planning stages to the execution, ensuring a smooth and stress-free wedding experience.' },
        { category: 'Finance and Payments', question: 'What are the charges users have to pay for Plan a Wedding services?', answer: 'Our charges vary based on the services selected. We will provide a transparent breakdown of costs during the consultation.' },
        { category: 'Finance and Payments', question: 'Whom should users make the wedding essentials payments to?', answer: 'Payments for wedding essentials should be made directly to the vendors and service providers as per their terms and agreements.' },
        // Add more FAQ data as needed
    ];

    const faqSections = {
        'General Questions': 'general-faq-list',
        'Consultation and Services': 'consultation-faq-list',
        'Execution and Assistance': 'execution-faq-list',
        'Finance and Payments': 'finance-faq-list',
        // Add more sections as needed
    };

    faqData.forEach((faq) => {
        const faqElement = document.createElement('div');
        faqElement.classList.add('faq-question');
        faqElement.innerHTML = `<strong>${faq.question}</strong><div class="faq-answer">${faq.answer}</div>`;
        
        faqElement.addEventListener('click', () => {
            const answer = faqElement.querySelector('.faq-answer');
            answer.style.display = answer.style.display === 'none' ? 'block' : 'none';
        });

        const faqList = document.getElementById(faqSections[faq.category]);
        faqList.appendChild(faqElement);
    });
});
