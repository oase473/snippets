//jshint esversion:6

const http = require('http');

var options = {
  hostname: '192.168.8.24',
  port: 80,
  path: '/api/v1/information',
  method: 'GET'
}

var req = http.request(options, res => {
    console.log(`statusCode: ${res.statusCode}`)
  
    res.on('data', d => {
      console.log(JSON.parse(d));
    })
  })


req.on('error', error => {
  console.error(error)
})

req.end()

options = {
  hostname: '192.168.8.24',
  port: 80,
  path: '/api/v1/meters',
  method: 'GET'
}

req = http.request(options, res => {
  console.log(`statusCode: ${res.statusCode}`)
  res.on('data', d => {
    console.log(JSON.parse(d));
})

req.on('error', error => {
  console.error(error)  
  })
})

req.end() 
