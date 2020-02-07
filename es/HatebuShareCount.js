import jsonp from 'jsonp';

import objectToGetParams from './utils/objectToGetParams';
import shareCountFactory from './utils/shareCountFactory';

function getHatebuShareCount(shareUrl, callback) {
  var url = 'http://api.b.st-hatena.com/entry.count';

  return jsonp(url + objectToGetParams({
    url: shareUrl
  }), function (err, data) {
    callback(data ? data.count : undefined);
  });
}

export default shareCountFactory(getHatebuShareCount);