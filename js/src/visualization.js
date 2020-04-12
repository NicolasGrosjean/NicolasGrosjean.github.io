const e = React.createElement;

// Fill the table
class Video extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        // Displays the Video
        return <div>
            <video width="75%" height="75%" id="video-centered" controls>
                <source src={"./videos/Bar_chart_race_2019.mp4"} type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
            <p>Only CartONG projects edited in 2019 are shown.<br/>
            The time does not start at 0 because it includes contributions before 2019 on these projects.</p>
        </div>
    }
};

ReactDOM.render(<Video/>, document.getElementById('react_container'));
