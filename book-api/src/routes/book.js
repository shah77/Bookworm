import express from 'express';
import User from '../models/User';
import parseError from '../utils/parseError';

const router = express.Router();

router.get('/search', (req, res) => {
    res.json({
        book: [
            {
                bookId: 1,
                title: "Titanic",
                author: "Ken",
                covers: [
                    "https://images-na.ssl-images-amazon.com/images/I/519VOT4X2xL.jpg",
                    "https://img1.od-cdn.com/ImageType-400/2363-1/840/13E/28/%7B84013E28-B08B-4692-93A9-9CB8B748D765%7DImg400.jpg"
                ],
                pages: 198
            },
            {
                bookId: 2,
                title: "Three men in a boat",
                author: "Jerome",
                covers: [
                    "https://images.gr-assets.com/books/1392791656l/4921.jpg",
                    "https://img1.od-cdn.com/ImageType-400/2363-1/840/13E/28/%7B84013E28-B08B-4692-93A9-9CB8B748D765%7DImg400.jpg"
                ],
                pages: 258
            },
        ]
    })
});



export default router;