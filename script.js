document.addEventListener('DOMContentLoaded', () => {
    const downloadSections = document.querySelectorAll('.download-section');

    downloadSections.forEach(section => {
        const countdownSpan = section.querySelector('.countdown');
        const timerMessageP = section.querySelector('.timer-message');
        const downloadButton = section.querySelector('.download-button');
        // --- NEW: Find the join now button ---
        const joinButton = section.querySelector('.join-now-button');

        if (!timerMessageP) return; // If there's no timer message, do nothing

        // Hide buttons by default if they exist
        if (downloadButton) downloadButton.style.display = 'none';
        if (joinButton) joinButton.style.display = 'none';
        
        // If there's no countdown timer, just show the buttons immediately
        if (!countdownSpan) {
            timerMessageP.style.display = 'none';
            if (downloadButton) downloadButton.style.display = 'inline-block';
            if (joinButton) joinButton.style.display = 'inline-block';
            return;
        }

        let timeLeft = parseInt(countdownSpan.textContent);

        if (isNaN(timeLeft) || timeLeft <= 0) {
            timerMessageP.style.display = 'none';
            if (downloadButton) downloadButton.style.display = 'inline-block';
            if (joinButton) joinButton.style.display = 'inline-block';
            return; // No countdown needed
        }

        timerMessageP.style.display = 'block'; // Ensure timer message is visible
        countdownSpan.textContent = timeLeft; // Update initial display

        const intervalId = setInterval(() => {
            timeLeft--;
            countdownSpan.textContent = timeLeft;

            if (timeLeft <= 0) {
                clearInterval(intervalId);
                timerMessageP.style.display = 'none';

                // --- UPDATED: Show both buttons if they exist ---
                if (downloadButton) {
                    downloadButton.style.display = 'inline-block';
                }
                if (joinButton) {
                    joinButton.style.display = 'inline-block';
                }
            }
        }, 1000);
    });
});
