"use strict";

exports.__esModule = true;

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var SubscribeMessage = (function (_React$Component) {
  _inherits(SubscribeMessage, _React$Component);

  function SubscribeMessage() {
    _classCallCheck(this, SubscribeMessage);

    _React$Component.apply(this, arguments);
  }

  SubscribeMessage.prototype.render = function render() {
    var _this = this;

    var className = this.props.className ? " " + this.props.className : "";
    return _react2["default"].createElement(
      "a",
      { className: "subscribe-message" + className, href: this.props.href, target: this.props.target },
      _react2["default"].createElement(
        "div",
        { className: "subscribe-message__inner-wrapper" },
        (function () {
          if (_this.props.counter) {
            return _react2["default"].createElement(
              "div",
              { className: "subscribe-message__counter" },
              _react2["default"].createElement(
                "div",
                { className: "subscribe-message__count" },
                _this.props.counter
              ),
              _react2["default"].createElement(
                "div",
                { className: "subscribe-message__counter-label" },
                _this.props.counterLabel
              )
            );
          }
        })(),
        this.props.children
      )
    );
  };

  _createClass(SubscribeMessage, null, [{
    key: "propTypes",
    get: function get() {
      return {
        className: _react2["default"].PropTypes.string,
        children: _react2["default"].PropTypes.node,
        counter: _react2["default"].PropTypes.string,
        href: _react2["default"].PropTypes.string,
        target: _react2["default"].PropTypes.string,
        counterLabel: _react2["default"].PropTypes.string
      };
    }
  }, {
    key: "defaultProps",
    get: function get() {
      return {
        children: _react2["default"].createElement(
          "div",
          { className: "subscribe-message__message" },
          _react2["default"].createElement(
            "span",
            { className: "subscribe-message__title" },
            "SUBSCRIBE NOW"
          ),
          _react2["default"].createElement(
            "span",
            { className: "subscribe-message__additional-title" },
            "for unlimited access to The Economist"
          )
        ),
        counterLabel: 'articles read.',
        href: 'https://subscriptions.economist.com',
        target: '_blank'
      };
    }
  }]);

  return SubscribeMessage;
})(_react2["default"].Component);

exports["default"] = SubscribeMessage;
module.exports = exports["default"];