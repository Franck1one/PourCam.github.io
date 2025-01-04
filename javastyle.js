document.addEventListener('DOMContentLoaded', () => {
    const snowflakesContainer = document.getElementById('snowflakes-container');
    for (let i = 0; i < 100; i++) {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        snowflake.style.left = `${Math.random() * 100}vw`;
        snowflake.style.animationDuration = `${Math.random() * 5 + 5}s`;
        snowflake.style.animationDelay = `${Math.random() * 5}s`;
        snowflake.style.opacity = Math.random();
        snowflakesContainer.appendChild(snowflake);
    }
});
