var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var e = React.createElement;

// Fill the table

var TMTableOrVideo = function (_React$Component) {
    _inherits(TMTableOrVideo, _React$Component);

    function TMTableOrVideo(props) {
        _classCallCheck(this, TMTableOrVideo);

        var _this = _possibleConstructorReturn(this, (TMTableOrVideo.__proto__ || Object.getPrototypeOf(TMTableOrVideo)).call(this, props));

        _this.state = { projectID: props.projectID };
        if (props.projectID == null) {
            _this.addDataTableInteractions();
        }

        _this.backToTable = _this.backToTable.bind(_this);
        return _this;
    }

    _createClass(TMTableOrVideo, [{
        key: "addDataTableInteractions",
        value: function addDataTableInteractions() {
            $(document).ready(function () {
                $('#projects').DataTable();
            });
        }
    }, {
        key: "backToTable",
        value: function backToTable() {
            this.setState({ projectID: null });
            this.addDataTableInteractions();
        }
    }, {
        key: "render",
        value: function render() {
            if (this.state.projectID != null) {
                // Displays the Video
                return React.createElement(
                    "div",
                    null,
                    React.createElement(
                        "video",
                        { width: "75%", height: "75%", id: "video-centered", controls: true },
                        React.createElement("source", { src: "./videos/" + this.state.projectID + ".mp4", type: "video/mp4" }),
                        "Your browser does not support the video tag."
                    ),
                    React.createElement(
                        "button",
                        { onClick: this.backToTable },
                        "Back to table"
                    )
                );
            }
            // Displays the table
            var lines = [];
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = Object.keys(tmProjects['Pays projet'])[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var projectID = _step.value;

                    lines.push(React.createElement(TMLineTable, { projectID: projectID, table: this, key: projectID }));
                }
                // Encapsulate the table in 2 divs because of a removeChild error when rendering a video
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            return React.createElement(
                "div",
                { id: "project-table" },
                React.createElement(
                    "div",
                    null,
                    React.createElement(
                        "table",
                        { key: "0", id: "projects", className: "table datatable-basic table-bordered table-striped table-hover dataTable" },
                        React.createElement(
                            "thead",
                            null,
                            React.createElement(
                                "tr",
                                { key: "1" },
                                React.createElement(
                                    "th",
                                    null,
                                    "ID"
                                ),
                                React.createElement(
                                    "th",
                                    null,
                                    "Name"
                                ),
                                React.createElement(
                                    "th",
                                    null,
                                    "Country"
                                ),
                                React.createElement(
                                    "th",
                                    null,
                                    "Beginning date"
                                ),
                                React.createElement(
                                    "th",
                                    null,
                                    "End date"
                                ),
                                React.createElement(
                                    "th",
                                    null,
                                    "Added buildings"
                                ),
                                React.createElement(
                                    "th",
                                    null,
                                    "Updated buildings"
                                ),
                                React.createElement(
                                    "th",
                                    null,
                                    "Deleted buildings"
                                ),
                                React.createElement(
                                    "th",
                                    null,
                                    "Resources"
                                )
                            )
                        ),
                        React.createElement(
                            "tbody",
                            null,
                            lines
                        )
                    )
                )
            );
        }
    }]);

    return TMTableOrVideo;
}(React.Component);

;

var TMLineTable = function (_React$Component2) {
    _inherits(TMLineTable, _React$Component2);

    function TMLineTable(props) {
        _classCallCheck(this, TMLineTable);

        var _this2 = _possibleConstructorReturn(this, (TMLineTable.__proto__ || Object.getPrototypeOf(TMLineTable)).call(this, props));

        _this2.state = { projectID: props.projectID, table: props.table };

        _this2.displaysVideo = _this2.displaysVideo.bind(_this2);
        _this2.downloadHistoricalData = _this2.downloadHistoricalData.bind(_this2);
        return _this2;
    }

    _createClass(TMLineTable, [{
        key: "displaysVideo",
        value: function displaysVideo() {
            this.state.table.setState({ projectID: this.state.projectID });
        }
    }, {
        key: "downloadHistoricalData",
        value: function downloadHistoricalData() {
            window.open('./data/Historical_data_' + this.state.projectID + '.zip');
        }
    }, {
        key: "render",
        value: function render() {
            if (this.state.projectID == 5654) {
                var resource = React.createElement(
                    "th",
                    null,
                    React.createElement(
                        "button",
                        { className: "tooltip", onClick: this.displaysVideo },
                        React.createElement(
                            "span",
                            { className: "tooltiptext" },
                            "Display video of project evolution"
                        ),
                        React.createElement("i", { className: "fab fa-youtube" })
                    ),
                    React.createElement(
                        "button",
                        { className: "tooltip", type: "submit", onClick: this.downloadHistoricalData },
                        React.createElement(
                            "span",
                            { className: "tooltiptext" },
                            "Download historical data on the project life"
                        ),
                        React.createElement("i", { className: "fas fa-database" })
                    )
                );
            } else {
                var resource = React.createElement("th", null);
            }
            return React.createElement(
                "tr",
                null,
                React.createElement(
                    "th",
                    null,
                    React.createElement(
                        "a",
                        { href: "https://tasks.hotosm.org/project/" + this.state.projectID },
                        this.state.projectID
                    )
                ),
                React.createElement("th", null),
                React.createElement(
                    "th",
                    null,
                    tmProjects['Pays projet'][this.state.projectID]
                ),
                React.createElement(
                    "th",
                    null,
                    tmProjects['Date de lancement du projet '][this.state.projectID]
                ),
                React.createElement(
                    "th",
                    null,
                    tmProjects['Date de fin du projet '][this.state.projectID]
                ),
                React.createElement(
                    "th",
                    null,
                    tmProjects['Bat. Créé'][this.state.projectID]
                ),
                React.createElement(
                    "th",
                    null,
                    tmProjects['Bat. Updaté'][this.state.projectID]
                ),
                React.createElement(
                    "th",
                    null,
                    tmProjects['Bat. Supprimé'][this.state.projectID]
                ),
                resource
            );
        }
    }]);

    return TMLineTable;
}(React.Component);

;

ReactDOM.render(React.createElement(TMTableOrVideo, null), document.getElementById('react_container'));