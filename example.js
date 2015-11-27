'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

exports['default'] = _react2['default'].createElement(
  'div',
  null,
  _react2['default'].createElement(_index2['default'], { href: 'https://subscriptions.economist.com' }),
  _react2['default'].createElement('br', null),
  _react2['default'].createElement(_index2['default'], { counter: '1/3', target: '_top' }),
  _react2['default'].createElement('br', null)
);
module.exports = exports['default'];