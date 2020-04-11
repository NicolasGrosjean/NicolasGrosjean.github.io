const e = React.createElement;

// Fill the table
class TMTableOrVideo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { projectID: props.projectID };
        if (props.projectID == null) {
            this.addDataTableInteractions()
        }

        this.backToTable = this.backToTable.bind(this);
    }

    addDataTableInteractions() {
        $(document).ready(function() {
            $('#projects').DataTable({
                "lengthMenu": [15]
            });
        } );
    }

    backToTable() {
        this.setState({projectID: null})
        this.addDataTableInteractions()
    }

    render() {
        if (this.state.projectID != null) {
            // Displays the Video
            return <div><video width="75%" height="75%" id="video-centered" controls>
                <source src={"./videos/" + this.state.projectID + ".mp4"} type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
            <button onClick={this.backToTable}>Back to table</button></div>
        }
        // Displays the table
        let lines = []
        for (const projectID of Object.keys(tmProjects['Pays projet'])) {
            lines.push(<TMLineTable projectID={projectID} table={this} key={projectID}/>)
        }
        // Encapsulate the table in 2 divs because of a removeChild error when rendering a video
        return <div id="project-table"><div>
        <table key="0" id="projects" className="table datatable-basic table-bordered table-striped table-hover dataTable">
        <thead>
				<tr key="1">
					<th>ID</th>
					<th>Name</th>
					<th>Country</th>
					<th>Beginning date</th>
					<th>End date</th>
					<th>Mapping (h)</th>
					<th>Validation (h)</th>
					<th>Contributors</th>
					<th>Mapathons</th>
					<th>Added buildings</th>
					<th>Updated buildings</th>
					<th>Deleted buildings</th>
					<th>Resources</th>
				</tr>
			</thead>
        <tbody>
            {lines}
        </tbody>
        </table>
        </div>
        </div>
    }
};
class TMLineTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = { projectID: props.projectID, table: props.table };

        this.displaysVideo = this.displaysVideo.bind(this);
        this.downloadHistoricalData = this.downloadHistoricalData.bind(this);
    }

    displaysVideo() {
        this.state.table.setState({projectID: this.state.projectID})
    }

    downloadHistoricalData() {
        window.open('./data/Historical_data_' + this.state.projectID + '.zip')
    }

    render() {
        if (this.state.projectID == 5654) {
            var resource = <th>
                <button className="tooltip" onClick={this.displaysVideo}>
                    <span className="tooltiptext">Display video of project evolution</span>
                    <i className="fab fa-youtube"></i>
                </button>
                <button className="tooltip" type="submit" onClick={this.downloadHistoricalData}>
                    <span className="tooltiptext">Download historical data on the project life</span>
                    <i className="fas fa-database"></i>
                </button>
                <div>
                <a href={tmProjects['Publications'][this.state.projectID]} className="button tooltip">
                    <span className="tooltiptext">Web article on the project</span>
                    <i className="fas fa-newspaper"></i>
                </a>
                </div>
                </th>
        } else if (tmProjects['Publications'][this.state.projectID]) {
            var resource = <th>
                <a href={tmProjects['Publications'][this.state.projectID]} className="button tooltip">
                    <span className="tooltiptext">Web article on the project</span>
                    <i className="fas fa-newspaper"></i>
                </a>
                </th>
        } else {
            var resource = <th></th>
        }
        return <tr>
            <th><a href={"https://tasks.hotosm.org/project/" + this.state.projectID}>{this.state.projectID}</a></th>
            <th>{tmProjects['Short Name'][this.state.projectID]}</th>
            <th>{tmProjects['Pays projet'][this.state.projectID]}</th>
            <th>{tmProjects['Date de lancement du projet '][this.state.projectID]}</th>
            <th>{tmProjects['Date de fin du projet '][this.state.projectID]}</th>
            <th>{tmProjects['Temps carto (h)'][this.state.projectID]}</th>
            <th>{tmProjects['Temps valid (h)'][this.state.projectID]}</th>
            <th>{tmProjects['Stats contributeurs'][this.state.projectID]}</th>
            <th>{tmProjects['Nb Mapathon'][this.state.projectID]}</th>
            <th>{tmProjects['Bat. Créé'][this.state.projectID]}</th>
            <th>{tmProjects['Bat. Updaté'][this.state.projectID]}</th>
            <th>{tmProjects['Bat. Supprimé'][this.state.projectID]}</th>
            {resource}
        </tr>
    }
};

ReactDOM.render(<TMTableOrVideo/>, document.getElementById('react_container'));
