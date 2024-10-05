import AppLoader from './appLoader';

type callbackType<T> = (data?: T) => void;

class AppController extends AppLoader {
    getSources<T>(callback: callbackType<T>) {
        super.getResp(
            {
                endpoint: 'sources',
            },
            callback
        );
    }

    getNews<T>(e: PointerEvent, callback: callbackType<T>) {
        let target: EventTarget | null = e.target;
        const newsContainer: EventTarget | null = e.currentTarget;

        while (target !== newsContainer) {
            if ((target as Element).classList.contains('source__item')) {
                const sourceId = (target as Element).getAttribute('data-source-id');
                if ((newsContainer as Element).getAttribute('data-source') !== sourceId) {
                    (newsContainer as Element).setAttribute('data-source', sourceId as string);
                    super.getResp(
                        {
                            endpoint: 'everything',
                            options: {
                                sources: sourceId as string,
                            },
                        },
                        callback
                    );
                }
                return;
            }
            target = (target as Element).parentNode;
        }
    }
}

export default AppController;
