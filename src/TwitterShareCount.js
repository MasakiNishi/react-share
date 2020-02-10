import jsonp from 'jsonp';

import objectToGetParams from './utils/objectToGetParams';
import shareCountFactory from './utils/shareCountFactory';

function getTwitterShareCount(shareUrl, callback) {
  const url = 'https://jsoon.digitiminimi.com/twitter/count.json';

  return jsonp(url + objectToGetParams({
    url: shareUrl,
  }), (err, data) => {
    callback(data ? data.count : undefined);
  });
}

export default shareCountFactory(getTwitterShareCount);
