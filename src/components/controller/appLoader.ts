import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://rss-news-api.onrender.com/', {
            apiKey: '05d9a68dbf48401fa68efaaaa9ae26a8',
        });
    }
}

export default AppLoader;

// Есть 2 варианта как сделать super + еще нужно будет поменять API URL для корректной работы на gh-pages
// super(process.env.API_URL as string, {
//     apiKey: process.env.API_KEY as string,
// });
