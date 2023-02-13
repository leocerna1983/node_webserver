const http = require('http');

const server = http.createServer((req, res)=>{
    /*res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    res.writeHead(200, {'Content-Type':'application/json'});
    const persona = {
        id:10,
        nombre:'Leonidas Cerna'
    }
    res.write('1.-Leonidas');
    res.write('2.-Leonidas');
    res.write('3.-Leonidas');*/
    res.write('Hola mundo');

    //console.log(req);
    
    //res.write('404 | Recurso no encontrado');
    res.end();
})
.listen(8080);