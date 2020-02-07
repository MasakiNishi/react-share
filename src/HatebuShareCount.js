import jsonp from 'jsonp';

import objectToGetParams from './utils/objectToGetParams';
import shareCountFactory from './utils/shareCountFactory';

function getHatebuShareCount(shareUrl, callback) {
  const url = 'http://api.b.st-hatena.com/entry.count';

  return jsonp(url + objectToGetParams({
    url: shareUrl,
  }), (err, data) => {
    callback(data ? data.count : undefined);
  });
}

export default shareCountFactory(getHatebuShareCount);