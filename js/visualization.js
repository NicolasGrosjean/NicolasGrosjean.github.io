var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var e = React.createElement;

// Fill the table

var Video = function (_React$Component) {
    _inherits(Video, _React$Component);

    function Video(props) {
        _classCallCheck(this, Video);

        return _possibleConstructorReturn(this, (Video.__proto__ || Object.getPrototypeOf(Video)).call(this, props));
    }

    _createClass(Video, [{
        key: "render",
        value: function render() {
            // Displays the Video
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "video",
                    { width: "75%", height: "75%", id: "video-centered", controls: true },
                    React.createElement("source", { src: "./videos/Bar_chart_race_2019.mp4", type: "video/mp4" }),
                    "Your browser does not support the video tag."
                ),
                React.createElement(
                    "p",
                    null,
                    "Only CartONG projects edited in 2019 are shown.",
                    React.createElement("br", null),
                    "The time does not start at 0 because it includes contributions before 2019 on these projects."
                )
            );
        }
    }]);

    return Video;
}(React.Component);

;

ReactDOM.render(React.createElement(Video, null), document.getElementById('react_container'));