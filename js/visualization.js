var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var e = React.createElement;

var PreviousButton = function (_React$Component) {
    _inherits(PreviousButton, _React$Component);

    function PreviousButton() {
        _classCallCheck(this, PreviousButton);

        return _possibleConstructorReturn(this, (PreviousButton.__proto__ || Object.getPrototypeOf(PreviousButton)).apply(this, arguments));
    }

    _createClass(PreviousButton, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "button",
                { className: "prev-next-button", onClick: this.props.onClick },
                "Previous"
            );
        }
    }]);

    return PreviousButton;
}(React.Component);

var NextButton = function (_React$Component2) {
    _inherits(NextButton, _React$Component2);

    function NextButton() {
        _classCallCheck(this, NextButton);

        return _possibleConstructorReturn(this, (NextButton.__proto__ || Object.getPrototypeOf(NextButton)).apply(this, arguments));
    }

    _createClass(NextButton, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "button",
                { className: "prev-next-button", onClick: this.props.onClick },
                "Next"
            );
        }
    }]);

    return NextButton;
}(React.Component);

var Plots = function (_React$Component3) {
    _inherits(Plots, _React$Component3);

    function Plots(props) {
        _classCallCheck(this, Plots);

        var _this3 = _possibleConstructorReturn(this, (Plots.__proto__ || Object.getPrototypeOf(Plots)).call(this, props));

        _this3.state = { filename: 'contributors.json', data: null };
        _this3.plot = _this3.plot.bind(_this3);
        _this3.changeFile = _this3.changeFile.bind(_this3);
        return _this3;
    }

    _createClass(Plots, [{
        key: "plot",
        value: function plot() {
            if (this.state.data !== null) {
                var frames = this.state.data.frames;
                Plotly.react('plot', this.state.data.data, this.state.data.layout, { "responsive": false }).then(function () {
                    document.getElementById('loading').style.display = 'none';
                });
            }
        }
    }, {
        key: "changeFile",
        value: function changeFile(event) {
            this.state.filename = event.target.value;
            this.updateData(this.state);
        }
    }, {
        key: "updateData",
        value: function updateData(state) {
            var react_page = this;
            var request = new XMLHttpRequest();
            request.open('GET', './json/' + state.filename, true);
            request.send(null);
            request.onreadystatechange = function () {
                document.getElementById('loading').style.display = 'block';
                if (request.readyState === 4 && request.status === 200) {
                    var type = request.getResponseHeader('Content-Type');
                    if (type.indexOf('text') !== 1) {
                        var json_text = request.responseText;
                        state.data = JSON.parse(json_text);
                        react_page.setState(state);
                    }
                } else if (request.readyState === 4) {
                    state.data = null;
                    react_page.setState(state);
                    document.getElementById('loading').style.display = 'none';
                }
            };
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            this.updateData(this.state);
            this.plot();
        }
    }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate() {
            this.plot();
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "container-fluid plot-upper-div" },
                React.createElement(
                    "div",
                    { className: "row justify-content-center" },
                    React.createElement(
                        "div",
                        { className: "col-1" },
                        React.createElement(
                            "select",
                            { className: "select-css", value: this.state.filename, onChange: this.changeFile },
                            React.createElement(
                                "optgroup",
                                { label: "2020" },
                                React.createElement(
                                    "option",
                                    { value: "contributors.json" },
                                    "Contributors"
                                ),
                                React.createElement(
                                    "option",
                                    { value: "mapping_time.json" },
                                    "Mapping Time"
                                ),
                                React.createElement(
                                    "option",
                                    { value: "validation_time.json" },
                                    "Validation Time"
                                ),
                                React.createElement(
                                    "option",
                                    { value: "total_time.json" },
                                    "Total Time"
                                )
                            )
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "col-10" },
                        React.createElement("div", { id: "plot" })
                    ),
                    React.createElement(
                        "div",
                        { className: "col-1" },
                        React.createElement(NextButton, { onClick: this.props.nextPage })
                    )
                )
            );
        }
    }]);

    return Plots;
}(React.Component);

var Video = function (_React$Component4) {
    _inherits(Video, _React$Component4);

    function Video() {
        _classCallCheck(this, Video);

        return _possibleConstructorReturn(this, (Video.__proto__ || Object.getPrototypeOf(Video)).apply(this, arguments));
    }

    _createClass(Video, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "container-fluid" },
                React.createElement(
                    "div",
                    { className: "row justify-content-center" },
                    React.createElement(
                        "div",
                        { className: "col-1" },
                        React.createElement(PreviousButton, { onClick: this.props.previousPage })
                    ),
                    React.createElement(
                        "div",
                        { className: "col-10" },
                        React.createElement(
                            "video",
                            { width: "90%", height: "90%", id: "video-centered", controls: true },
                            React.createElement("source", { src: "./videos/Bar_chart_race_2019.mp4", type: "video/mp4" }),
                            "Your browser does not support the video tag."
                        ),
                        React.createElement("br", null),
                        React.createElement(
                            "p",
                            null,
                            "Only CartONG projects edited in 2019 are shown.",
                            React.createElement("br", null),
                            "The time does not start at 0 because it includes contributions before 2019 on these projects."
                        )
                    ),
                    React.createElement("div", { className: "col-1" })
                )
            );
        }
    }]);

    return Video;
}(React.Component);

var VisualizationPage = function (_React$Component5) {
    _inherits(VisualizationPage, _React$Component5);

    function VisualizationPage(props) {
        _classCallCheck(this, VisualizationPage);

        var _this5 = _possibleConstructorReturn(this, (VisualizationPage.__proto__ || Object.getPrototypeOf(VisualizationPage)).call(this, props));

        _this5.state = { page: 0 };
        _this5.nextPage = _this5.nextPage.bind(_this5);
        _this5.previousPage = _this5.previousPage.bind(_this5);
        return _this5;
    }

    _createClass(VisualizationPage, [{
        key: "nextPage",
        value: function nextPage() {
            this.state.page += 1;
            this.setState(this.state);
        }
    }, {
        key: "previousPage",
        value: function previousPage() {
            this.state.page -= 1;
            this.setState(this.state);
        }
    }, {
        key: "render",
        value: function render() {
            if (this.state.page == 0) {
                return React.createElement(Plots, { previousPage: this.previousPage, nextPage: this.nextPage });
            } else {
                return React.createElement(Video, { previousPage: this.previousPage, nextPage: this.nextPage });
            }
        }
    }]);

    return VisualizationPage;
}(React.Component);

ReactDOM.render(React.createElement(VisualizationPage, null), document.getElementById('react_container'));