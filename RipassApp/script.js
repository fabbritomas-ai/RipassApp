const buttons = document.querySelectorAll('.show-answer');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const answer = button.previousElementSibling; // la <p> dell risposta
        if (answer.style.display === 'block') {
            answer.style.display = 'none';
            button.textContent = 'Mostra risposta';
        } else {
            answer.style.display = 'block';
            button.textContent = 'Nascondi risposta';
        }
    });
})