import React, { Component } from 'react';
import axios from 'axios';

export default class FileUploadComponent extends Component {

	constructor(props) {
		super(props);

		this.onFileChange = this.onFileChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);

		this.state = {
				profileImg: ''
		}
	}

	onFileChange(e) {
			this.setState({ profileImg: e.target.files[0] })
	}

	onSubmit(e) {
			e.preventDefault()
			const formData = new FormData()
			formData.append('profileImg', this.state.profileImg)
			axios.post("http://localhost:3001/api/user-profile", formData, {
			}).then(res => {
					console.log(res)
			})
	}



	render() {
		return (
			<div className="container">
				<div className="row">
				<div className="col-md-6 offset-md3 text-center">
				<form onSubmit={this.onSubmit}>
						<h3>React File Upload</h3>
						<div className="form-group">
								<input type="file" onChange={this.onFileChange} />
						</div>
						<div className="form-group">
								<button className="btn btn-primary" type="submit">Upload</button>
						</div>
					</form>
				</div>
				</div>
			</div>
		)
	}
}