import PropTypes from 'prop-types';

import assert from 'assert';

import createShareButton from './utils/createShareButton';
import objectToGetParams from './utils/objectToGetParams';

function HatebuLink(url, { title }) {
  assert(url, 'hatebu.url');

  return 'http://b.hatena.ne.jp/entry/' + objectToGetParams({
    url,
    text: title,
  });
}

const HatebuShareButton = createShareButton('hatebu', hatebuLink, props => ({
  title: props.title,
}), {
  title: PropTypes.string,
}, {
  windowWidth: 500,
  windowHeight: 500,
});

export default HatebuShareButton;