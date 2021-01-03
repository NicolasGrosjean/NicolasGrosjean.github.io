const e = React.createElement;

class PreviousButton extends React.Component {
    render() {
        return (
            <button className="prev-next-button" onClick={this.props.onClick}>Previous</button>
        );
    }
}

class NextButton extends React.Component {
    render() {
        return (
            <button className="prev-next-button" onClick={this.props.onClick}>Next</button>
        );
    }
}

class MapathonPlots extends React.Component {
    constructor(props) {
        super(props);
        this.state = {data: null}
        this.plot = this.plot.bind(this);
    }

    plot() {
        if (this.state.data !== null) {
            const frames = this.state.data.frames;
            Plotly.react('plot', this.state.data.data, this.state.data.layout, {"responsive": false}).then(function(){
                Plotly.addFrames('plot', frames);
            }).then(function(){Plotly.animate('plot', null);});
        }
    }

    updateData(filename, state) {
        const react_page = this;
        const request = new XMLHttpRequest();
        request.open('GET', './json/' + filename, true);
        request.send(null);
        request.onreadystatechange = function () {
            if (request.readyState === 4 && request.status === 200) {
                const type = request.getResponseHeader('Content-Type');
                if (type.indexOf('text') !== 1) {
                    const json_text = request.responseText;
                    state.data = JSON.parse(json_text);
                    react_page.setState(state);
                }
            } else if (request.readyState === 4) {
                state.data = null;
                react_page.setState(state);
            }
        };
    }

    componentDidMount() {
        this.updateData('mapathon_9849_2020-11-23.json', this.state);
        this.plot();
    }

    componentDidUpdate() {
        this.plot();
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-1">
                    </div>
                    <div className="col-10">
                        <div id='plot'></div>
                    </div>
                    <div className="col-1">
                        <NextButton onClick={this.props.nextPage}/>
                    </div>
                </div>
            </div>
        );
    }
}

class Video extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-1">
                        <PreviousButton onClick={this.props.previousPage}/>
                    </div>
                    <div className="col-10">
                        <video width="90%" height="90%" id="video-centered" controls>
                            <source src={"./videos/Bar_chart_race_2019.mp4"} type="video/mp4"/>
                            Your browser does not support the video tag.
                        </video>
                        <br/>
                        <p>Only CartONG projects edited in 2019 are shown.<br/>
                        The time does not start at 0 because it includes contributions before 2019 on these projects.</p>
                    </div>
                    <div className="col-1"></div>
                </div>
            </div>
        );
    }
}

class VisualizationPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {page: 1};
        this.nextPage = this.nextPage.bind(this);
        this.previousPage = this.previousPage.bind(this);
    }

    nextPage() {
        this.state.page += 1;
        this.setState(this.state);
    }

    previousPage() {
        this.state.page -= 1;
        this.setState(this.state);
    }

    render() {
        if (this.state.page == 0) {
            return <MapathonPlots previousPage={this.previousPage} nextPage={this.nextPage}/>
        } else {
            return <Video previousPage={this.previousPage} nextPage={this.nextPage}/>
        }
    }
}

ReactDOM.render(<VisualizationPage/>, document.getElementById('react_container'));
