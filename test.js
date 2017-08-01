var request = require('request');
var decompressStream = require('iltorb').decompressStream;

var url = 'https://www.facebook.com/plugins/post/oembed.json/?url=https%3A%2F%2Fwww.facebook.com%2Fphoto.php%3Ffbid%3D530060777048531%26set%3Da.215094428545169.62692.100001338405848%26type%3D1&format=json';

request({
    url: url,
    headers: {
        'Accept-Encoding': 'gzip, br',
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8'
    }
})
    .on('response', function(res) {

        console.log(222)
        var stream = decompressStream();



        stream.on('data', function(data) {
            console.log('=====2');
        });
        stream.on('end', function(data) {
            console.log('=====2', 'end');
        });
        res.on('data', function(data) {
            console.log('=====1', data);
        });
        res.on('end', function(data) {
            console.log('=====1', 'end');
        });


        res.pipe(stream);
    });
    //.pipe(stream);


