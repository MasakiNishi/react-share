'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _createShareButton = require('./utils/createShareButton');

var _createShareButton2 = _interopRequireDefault(_createShareButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function hatebuLink(url) {
  (0, _assert2.default)(url, 'hatebu.url');

  return 'http://b.hatena.ne.jp/entry/' + url;
}

var HatebuShareButton = (0, _createShareButton2.default)('hatebu', hatebuLink, undefined, undefined, {
  windowWidth: 500,
  windowHeight: 500
});

exports.default = HatebuShareButton;