var app = require('express')();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

app.get('/',function(req,res){
  res.sendFile(__dirname+'/index.html')
})

io.on('connection', function(messages){
  messages.on('disconnect',function(){
    console.log('user has been disconnected');
  })

  messages.broadcast.emit('hello')

  messages.on('message',function(msg){
    io.emit('message',msg)
  })

 });
server.listen(3002,function(){
  console.log('listening on port 3002');
});
