import assert from 'assert';

import createShareButton from './utils/createShareButton';

function hatebuLink(url) {
  assert(url, 'hatebu.url');

  return 'https://b.hatena.ne.jp/entry/' + url;
}

var HatebuShareButton = createShareButton('hatebu', hatebuLink, undefined, undefined, {
  windowWidth: 500,
  windowHeight: 500
});

export default HatebuShareButton;