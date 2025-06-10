document.addEventListener('DOMContentLoaded', function() {
    // Sabhi post ke download sections ko select karein
    const downloadSections = document.querySelectorAll('.download-section');

    downloadSections.forEach(section => {
        const timerMessage = section.querySelector('.timer-message');
        const countdownSpan = section.querySelector('.countdown');
        // Section ke andar ke sabhi buttons ko select karein
        const buttons = section.querySelectorAll('.download-button, .join-now-button');

        if (countdownSpan && timerMessage && buttons.length > 0) {
            let seconds = parseInt(countdownSpan.textContent, 10);

            const interval = setInterval(() => {
                seconds--;
                countdownSpan.textContent = seconds;

                if (seconds <= 0) {
                    clearInterval(interval);
                    timerMessage.style.display = 'none'; // Timer message ko hide karein

                    // Sabhi buttons ko show karein
                    buttons.forEach(button => {
                        button.style.display = 'inline-block'; // 'block' ya 'inline-block' use karein
                    });
                }
            }, 1000);
        }
    });
});
