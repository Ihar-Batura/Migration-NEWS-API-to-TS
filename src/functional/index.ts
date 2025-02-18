function filterSources(): void {
    const input = document.querySelector('.search-input') as HTMLInputElement;

    input.oninput = function () {
        const sources: NodeListOf<Element> = document.querySelectorAll('.source__item');
        const inputValue: string = input.value.toLowerCase();
        if (sources.length > 0) {
            if (inputValue.length > 0) {
                sources.forEach((source) => {
                    const sourceName: string = (source.firstElementChild as HTMLSpanElement).innerText.toLowerCase();
                    if (sourceName.includes(inputValue)) {
                        source.classList.remove('hide');
                    } else {
                        source.classList.add('hide');
                    }
                });
            } else {
                sources.forEach((source) => {
                    source.classList.remove('hide');
                });
            }
        }
    };
}

export default filterSources;
