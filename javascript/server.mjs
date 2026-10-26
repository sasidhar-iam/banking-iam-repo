import http from 'node:http';
import {beginLogin} from './pkce.mjs';
// A request-construction viewer only. No login, session or token endpoint is exposed.
const server=http.createServer((req,res)=>{
 res.setHeader('Content-Type','application/json');
 res.setHeader('Cache-Control','no-store');
 if(req.method!=='GET'){res.writeHead(405);res.end(JSON.stringify({error:'method_not_allowed'}));return;}
 if(req.url==='/health'){res.end(JSON.stringify({status:'ok'}));return;}
 if(req.url==='/demo/authorize-url'){
  const {url}=beginLogin({issuer:'https://id.example.test/',clientId:'ciam-lab',redirectUri:'https://app.example.test/callback'});
  res.end(JSON.stringify({notice:'Illustrative URL; example.test is not an identity provider',url}));return;
 }
 res.writeHead(404);res.end(JSON.stringify({error:'not_found'}));
});
server.listen(8080,'127.0.0.1',()=>console.log('CIAM request viewer: http://127.0.0.1:8080/demo/authorize-url'));
