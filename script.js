document.addEventListener('DOMContentLoaded', () => {
    const downloadSections = document.querySelectorAll('.download-section');

    downloadSections.forEach(section => {
        const countdownSpan = section.querySelector('.countdown');
        const timerMessageP = section.querySelector('.timer-message');
        const downloadButton = section.querySelector('.download-button');

        // Agar kisi post mein countdown span ya button nahi hai to skip karein
        if (!countdownSpan || !timerMessageP || !downloadButton) {
            // Agar sirf timer message hai aur button nahi, to timer ke baad message hata dein
            if (timerMessageP && !downloadButton) {
                 let initialTime = 10; // Default time if no countdown span
                 if(countdownSpan) initialTime = parseInt(countdownSpan.textContent);

                 if (isNaN(initialTime) || initialTime <=0) {
                     timerMessageP.style.display = 'none'; // Hide if no valid time
                     return;
                 }
                 
                 let timeLeftNoButton = initialTime;
                 if(countdownSpan) countdownSpan.textContent = timeLeftNoButton;

                 const intervalIdNoButton = setInterval(() => {
                    timeLeftNoButton--;
                    if(countdownSpan) countdownSpan.textContent = timeLeftNoButton;
                    if (timeLeftNoButton <= 0) {
                        clearInterval(intervalIdNoButton);
                        timerMessageP.style.display = 'none';
                    }
                }, 1000);
            }
            return;
        }

        let timeLeft = parseInt(countdownSpan.textContent);

        // Ensure timeLeft is a valid number
        if (isNaN(timeLeft) || timeLeft <= 0) {
            timerMessageP.style.display = 'none';
            downloadButton.style.display = 'inline-block';
            return; // No countdown needed
        }

        countdownSpan.textContent = timeLeft; // Update initial display

        const intervalId = setInterval(() => {
            timeLeft--;
            countdownSpan.textContent = timeLeft;

            if (timeLeft <= 0) {
                clearInterval(intervalId);
                timerMessageP.style.display = 'none';
                downloadButton.style.display = 'inline-block';
            }
        }, 1000);
    });
});
                             
