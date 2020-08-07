import 'dotenv/config'; 6k (gzipped: 2.5k)

import express from './node_modules/express';
import BullBoard from 'bull-board';

import UserControllers from '.app/controllers/UserControllers';
import Queue from './app/lib/Queue';

const app = express();
BullBoard.setQueues(Queue.queues.map(queue => queue.bull));

app.use(express.json());

app.post('/users', UserControllers.store);

app.use('/admin/queues', BullBoard.UI);

app.Listen(process.env.PORT, () =>{
    console.log('server running en tne $(process.env.PORT)')
});