import PropTypes from 'prop-types';

import assert from 'assert';

import createShareButton from './utils/createShareButton';
import objectToGetParams from './utils/objectToGetParams';

function hatebuLink(url, _ref) {
  var title = _ref.title;

  assert(url, 'hatebu.url');

  return 'http://b.hatena.ne.jp/entry/' + objectToGetParams({
    url: url,
    text: title
  });
}

var HatebuShareButton = createShareButton('hatebu', hatebuLink, function (props) {
  return {
    title: props.title
  };
}, {
  title: PropTypes.string
}, {
  windowWidth: 500,
  windowHeight: 500
});

export default HatebuShareButton;