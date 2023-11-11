document.addEventListener('DOMContentLoaded', function () {
    const progressBar = document.getElementById('custom-progress');
    const progressLabel = progressBar.querySelector('.progress-label');
    const remainingProgress = document.querySelector('.remaining-progress');

   
    const progressValue = 56; // Valor atual
    const remainingValue = 100 - progressValue; // Valor que falta para 100%

    progressBar.style.width = `${progressValue}%`;
    progressLabel.textContent = `${progressValue}%`;
    remainingProgress.textContent = remainingValue;
});