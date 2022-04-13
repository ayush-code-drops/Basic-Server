const http = require('http')
 const books = require('./books')

const server = http.createServer((req, res) => {
    try {
        if(req.url=='/'&&req.method=='GET'){
            res.writeHead(200);
          //  console.console.log(books)
        res.end("Hello World")  
        } 

        if (req.url==('/books')) {
            
            res.writeHead(200)
           // const ans = books.map((item) => `${item.name}- by ${item.author}`)
           
            res.end(JSON.stringify(books()))
        }

      
    }
    catch {
        res.writeHead(404);
        res.end("Error")
    }
})

server.listen(3002)