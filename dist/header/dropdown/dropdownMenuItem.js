'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./dropdownMenuItem.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DropDownMenuItem = function (_Component) {
  _inherits(DropDownMenuItem, _Component);

  function DropDownMenuItem() {
    _classCallCheck(this, DropDownMenuItem);

    return _possibleConstructorReturn(this, (DropDownMenuItem.__proto__ || Object.getPrototypeOf(DropDownMenuItem)).apply(this, arguments));
  }

  _createClass(DropDownMenuItem, [{
    key: 'renderProfile',
    value: function renderProfile() {
      alert("please fetch api");
    }
  }, {
    key: 'render',
    value: function render() {
      var visibility = this.props.visibility;

      return _react2.default.createElement(
        'div',
        { style: { visibility: visibility }, className: 'DropDownMenuItem' },
        _react2.default.createElement(
          'a',
          { href: '#' },
          'profile ',
          _react2.default.createElement(
            'i',
            { className: 'material-icons',
              style: { fontSize: "18px",
                float: "right",
                paddingRight: "5px" }
            },
            'person_outline'
          ),
          ' '
        ),
        _react2.default.createElement('span', { className: 'divider' }),
        _react2.default.createElement(
          'a',
          { href: '#' },
          'setting ',
          _react2.default.createElement(
            'i',
            { className: 'material-icons',
              style: { fontSize: "18px",
                float: "right",
                paddingRight: "5px" }
            },
            'settings'
          )
        ),
        _react2.default.createElement('span', { className: 'divider' }),
        _react2.default.createElement(
          'a',
          { href: '#' },
          'logout ',
          _react2.default.createElement(
            'i',
            { className: 'material-icons',
              style: { fontSize: "18px",
                float: "right",
                paddingRight: "5px" }
            },
            'exit_to_app'
          )
        )
      );
    }
  }]);

  return DropDownMenuItem;
}(_react.Component);

exports.default = DropDownMenuItem;