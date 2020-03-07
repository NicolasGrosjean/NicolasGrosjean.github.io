// Add datable interactions
$(document).ready(function() {
    $('#projects').DataTable();
} );

const e = React.createElement;

// Fill the table
class TMTable extends React.Component {

    render() {
        let lines = []
        for (const projectID of Object.keys(tmProjects['Pays projet'])) {
            lines.push(<TMLineTable projectID={projectID} />)
        }
        return <table id="projects" class="table datatable-basic table-bordered table-striped table-hover dataTable">
        <thead>
				<tr>
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
    }
};
class TMLineTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = { projectID: props.projectID };
    }

    render() {
        if (this.state.projectID == 5654) {
            var video = <th><a href="5654.html">Project video</a></th>
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

ReactDOM.render(<TMTable />, document.getElementById('react_container'));
