import jsonp from 'jsonp';

import objectToGetParams from './utils/objectToGetParams';
import shareCountFactory from './utils/shareCountFactory';

function getTwitterShareCount(shareUrl, callback) {
  var url = 'http://jsoon.digitiminimi.com/twitter/count.json';

  return jsonp(url + objectToGetParams({
    url: shareUrl
  }), function (err, data) {
    callback(data ? data.count : undefined);
  });
}

export default shareCountFactory(getTwitterShareCount);