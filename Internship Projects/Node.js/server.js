let http= require ("http")

http.createServer(function(req,res)
{
    console.log("node connected successfully")
}).listen(5000)
