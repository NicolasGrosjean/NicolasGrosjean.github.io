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
            $('#projects').DataTable();
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
        return <div><div>
        <table key="0" id="projects" className="table datatable-basic table-bordered table-striped table-hover dataTable">
        <thead>
				<tr key="1">
					<th>ID</th>
					<th>Name</th>
					<th>Country</th>
					<th>Beginning date</th>
					<th>End date</th>
					<th>Added buildings</th>
					<th>Updated buildings</th>
					<th>Deleted buildings</th>
					<th>Video</th>
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
    }

    displaysVideo() {
        this.state.table.setState({projectID: this.state.projectID})
    }

    render() {
        if (this.state.projectID == 5654) {
            var video = <th><button onClick={this.displaysVideo}>Project video</button></th>
        } else {
            var video = <th></th>
        }
        return <tr>
            <th>{this.state.projectID}</th>
            <th></th>
            <th>{tmProjects['Pays projet'][this.state.projectID]}</th>
            <th>{tmProjects['Date de lancement du projet '][this.state.projectID]}</th>
            <th>{tmProjects['Date de fin du projet '][this.state.projectID]}</th>
            <th>{tmProjects['Bat. Créé'][this.state.projectID]}</th>
            <th>{tmProjects['Bat. Updaté'][this.state.projectID]}</th>
            <th>{tmProjects['Bat. Supprimé'][this.state.projectID]}</th>
            {video}
        </tr>
    }
};

ReactDOM.render(<TMTableOrVideo/>, document.getElementById('react_container'));
