{"changed":true,"filter":false,"title":"server.js","tooltip":"/file_upload/server.js","value":"var http = require('http');\nvar formidable = require('formidable');\n\nvar server = http.createServer(function (req, res) {\n  switch (req.method) {\n    case 'GET':\n      show(req, res);\n      break;\n    case 'POST':\n      upload(req, res);\n      break;\n  }\n});\n\nfunction show(req, res) {\n  var html = '' +\n    '<form method=\"post\" action=\"/\" enctype=\"multipart/form-data\">' +\n    '<p><input type=\"text\" name=\"name\" /></p>' +\n    '<p><input type=\"file\" name=\"file\" /></p>' +\n    '<p><input type=\"submit\" value=\"Upload\" /></p>' +\n    '</form>';\n\n  res.setHeader('Content-Type', 'text/html');\n  res.setHeader('Content-Lenght', Buffer.byteLength(html));\n  res.end(html);\n}\n\nfunction upload(req, res) {\n  if (!isFormData(req)) {\n    res.statusCode = 400;\n    res.end('Bad Request: expecting multipart/form-data');\n    return;\n  }\n  var form = new formidable.IncomingForm();\n  form.on('field', function (field, value) {\n    console.log(field);\n    console.log(value);\n  });\n  form.on('file', function(name, file) {\n    console.log(name);\n    console.log(file);\n  });\n  form.on('end', function() {\n    res.end('upload complete!');\n  });\n  // calculating upload progress in pseudo real-time\n  form.on('progress', function(bytesReceived, bytesExpected) {\n    var percent = Math.floor(bytesReceived/bytesExpected * 100);\n    console.log(percent);\n  });\n  form.parse(req);\n}\n\nfunction isFormData(req) {\n  var type = req.headers['content-type'] || '';\n  return 0 == type.indexOf('multipart/form-data');\n}\n\nserver.listen(3000);","undoManager":{"mark":-1,"position":0,"stack":[[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":4,"column":14},"end":{"row":4,"column":20}},"text":"method"},{"action":"insertText","range":{"start":{"row":4,"column":14},"end":{"row":4,"column":20}},"text":"method"}]}]]},"ace":{"folds":[],"scrolltop":414.5,"scrollleft":0,"selection":{"start":{"row":40,"column":22},"end":{"row":40,"column":22},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1406573086239}