'use strict';

let Q = require('q');
let knox = require('knox');

let profilePicUtil = function(options){

  let deferred = Q.defer();
  let buf = new Buffer(options.data_uri.replace(/^data:image\/\w+;base64,/, ""),'base64');

  let knoxClient = knox.createClient({
    key: 'AKIAIVJJANMIKE6MV2BA',
    secret: '2tWwTvRjmZTlpeUfySl0EQIQS9xgccso1TTMijYx',
    bucket: 'willypics'
  });

  // put to a path in our bucket, and make readable by the public
  let req = knoxClient.put('/images/' + options.filename, {
   'Content-Length': buf.length,
   'Content-Type': options.filetype,
   'x-amz-acl': 'public-read'
  });

  req.on('response', function(res) {
    if (res.statusCode === 200) {
      deferred.resolve(req.url);
    } else
      deferred.reject({error: 'true'});
  });

  req.end(buf);
  return deferred.promise;
}

module.exports = profilePicUtil;
