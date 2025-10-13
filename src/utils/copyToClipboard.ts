export function copyToClipboard(text: string, buttonElement: HTMLElement): void {
    const showCopiedMessage = () => {
        let copiedSpan = buttonElement.querySelector('.copied-message') as HTMLSpanElement;

        if (!copiedSpan) {
            copiedSpan = document.createElement('span');
            copiedSpan.className = 'copied-message absolute -top-6 left-1/2 transform -translate-x-1/2 bg-white text-black text-sm px-2 py-1 rounded shadow';
            copiedSpan.textContent = 'Copied';
            buttonElement.style.position = 'relative'; // make button a positioning context
            buttonElement.appendChild(copiedSpan);
        }

        copiedSpan.style.opacity = '1';
        copiedSpan.style.transition = 'opacity 0.3s';

        setTimeout(() => {
            copiedSpan.style.opacity = '0';
        }, 1500);
    };

    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text)
            .then(() => {
                console.log(`Copied: ${text}`);
                showCopiedMessage();
            })
            .catch((err) => {
                console.error('Failed to copy text:', err);
            });
    } else {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showCopiedMessage();
    }
}

