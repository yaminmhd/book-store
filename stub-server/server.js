import jsonServer from 'json-server';
import path from 'path';
import { fileURLToPath } from 'url';

const server = jsonServer.create();
const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename);
const router = jsonServer.router(path.join(__dirname, 'db.json'))
const middlewares = jsonServer.defaults();

server.use((req,res,next) => {
  if(req.method === 'DELETE' && req.query['_cleanup']){
    const db = router.db;
    db.set('books', []).write();
    res.sendStatus(204);
  }else{
    next();
  }
})

server.use(middlewares);
server.use('/api', router);

server.listen(3001, () => {
  console.log('JSON Server is running');
})