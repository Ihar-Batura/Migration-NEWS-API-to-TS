import './sources.css';
import { ISource } from '../../../types/types';

class Sources {
    draw(data: Array<ISource>) {
        console.log(data);
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;
        if (sourceItemTemp === null) {
            throw Error('Element sourceItemTemp not found');
        }

        data.forEach((item) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true) as Element;
            if (sourceClone === null) {
                throw Error('Element sourceClone clone not found');
            }

            (sourceClone.querySelector('.source__item-name') as Element).textContent = item.name;
            (sourceClone.querySelector('.source__item') as Element).setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        (document.querySelector('.sources') as Element).append(fragment);
    }
}

export default Sources;
