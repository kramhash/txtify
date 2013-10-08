var path = require('path');
var qs = require('querystring');
var test = require('tap').test;
var txtify = require('..');
var through = require('through')
var fs = require('fs');

test('basic test', function(t){
	var thing = 'thing';
	//var data = '', stream = through(write, end);
	var data = '', data2 = '';

	var file = './example/template_body.html';
	var file2 = './example/template_body.txt';

	fs.createReadStream(file)
		.pipe(txtify(file))
		.pipe(through(write, end))

	fs.createReadStream(file2)
		.pipe(txtify(file2))
		.pipe(through(write2, end2));

	function write(buf) {
		data += buf;
	}
	function end() {
		console.log('data', data)
	}

	function write2(buf) {
		data2 += buf;
	}

	function end2() {
		console.log('data2', data2);
		t.ok(true, 'test');
		t.notOk(false, 'not ok')
		t.end();
	}



	//t.equal(thing, 'thin', 'should be thin')
	
})