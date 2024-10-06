import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { INewsResponse, ISourceResponse } from '../../types/types';

class App {
    private controller: AppController;
    private view: AppView;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start(): void {
        (document.querySelector('.sources') as HTMLElement).addEventListener('click', (e: MouseEvent) =>
            this.controller.getNews(e, (data?: INewsResponse) => {
                if (data) {
                    this.view.drawNews(data);
                }
            })
        );
        this.controller.getSources((data?: ISourceResponse) => {
            if (data) {
                this.view.drawSources(data);
            }
        });
    }
}

export default App;
