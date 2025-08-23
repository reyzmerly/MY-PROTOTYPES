document.addEventListener('DOMContentLoaded', function() {
    const title = "The People's Payment Network";
    const subtitle = "Top up with crypto → Send globally → Withdraw in cash locally";
    const titleElement = document.querySelector('.typing-title');
    const subtitleElement = document.querySelector('.typing-subtitle');

    function typeText(element, text, delay = 100) {
        let index = 0;
        element.textContent = '';
        
        return new Promise(resolve => {
            function type() {
                if (index < text.length) {
                    element.textContent += text.charAt(index);
                    index++;
                    setTimeout(type, delay);
                } else {
                    resolve();
                }
            }
            type();
        });
    }

    async function startTyping() {
        // Type the title
        await typeText(titleElement, title, 100);
        // Small pause before subtitle
        await new Promise(resolve => setTimeout(resolve, 500));
        // Type the subtitle
        await typeText(subtitleElement, subtitle, 50);
    }

    startTyping();
});
