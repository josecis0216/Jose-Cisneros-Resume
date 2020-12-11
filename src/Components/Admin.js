// import { timers } from 'jquery';
import React, { Component } from 'react';
import JobDataService from '../Services/job-service';

export default class AddJob extends Component {
    constructor(props){
        super(props);
        this.onChangeJob = this.onChangeJob.bind(this);
        this.onChangePosition = this.onChangePosition.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeStartDate = this.onChangeStartDate.bind(this);
        this.onChangeEndDate = this.onChangeEndDate.bind(this);
        this.saveNewJob = this.saveNewJob.bind(this);
        this.newJobPosted = this.newJobPosted.bind(this);

        this.state = {
            id: null,
            job: "",
            position: "",
            description: "", 
            startDate: "",
            endDate: "",
      
            submitted: false
          };
        }
      
        onChangeJob(e) {
          this.setState({
            job: e.target.value
          });
        }

        onChangePosition(e) {
            this.setState({
              position: e.target.value
            });
          }
      
        onChangeDescription(e) {
          this.setState({
            description: e.target.value
          });
        }

        onChangeStartDate(e) {
            this.setState({
              startDate: e.target.value
            });
          }

          onChangeEndDate(e) {
            this.setState({
              endDate: e.target.value
            });
          }
      
        saveNewJob() {
          var data = {
            job: this.state.job,
            position: this.state.position,
            description: this.state.description,
            startDate: this.state.startDate,
            endDate: this.state.endDate
          };
      
          JobDataService.create(data)
            .then(response => {
              this.setState({
                id: response.data.id,
                job: response.data.job,
                position: response.data.position,
                description: response.data.description,
                startDate: response.data.startDate,
                endDate: response.data.endDate,
      
                submitted: true
              });
              console.log(response.data);
            })
            .catch(e => {
              console.log(e);
            });
        }
      
        newJobPosted() {
          this.setState({
            id: null,
            job: "",
            position: "",
            description: "", 
            startDate: "",
            endDate: "",
      
            submitted: false
          });
        }

    render() {
        return (
            <div className="submit-form">
            {this.state.submitted ? (
                <div>
                <h4>You submitted successfully!</h4>
                <button className="btn btn-success" onClick={this.newJobPosted}>
                    Add
                </button>
                </div>
            ) : (
                <div>
                <div className="form-group col-lg-6">
                    <label htmlFor="title">Job</label>
                    <input
                    type="text"
                    className="form-control"
                    id="title"
                    required
                    value={this.state.job}
                    onChange={this.onChangeJob}
                    name="title"
                    />
                </div>

                <div className="form-group col-lg-6">
                    <label htmlFor="title">Position</label>
                    <input
                    type="text"
                    className="form-control"
                    id="title"
                    required
                    value={this.state.position}
                    onChange={this.onChangePosition}
                    name="title"
                    />
                </div>
                
    
                <div className="form-group col-lg-6">
                    <label htmlFor="description">Description</label>
                    <input
                    type="text"
                    className="form-control"
                    id="description"
                    required
                    value={this.state.description}
                    onChange={this.onChangeDescription}
                    name="description"
                    />
                </div>

                <div className="form-group col-lg-6">
                    <label htmlFor="title">Start Date</label>
                    <input
                    type="text"
                    className="form-control"
                    id="title"
                    required
                    value={this.state.startDate}
                    onChange={this.onChangeStartDate}
                    name="title"
                    />
                </div>

                <div className="form-group col-lg-6">
                    <label htmlFor="title">End Date</label>
                    <input
                    type="text"
                    className="form-control"
                    id="title"
                    required
                    value={this.state.endDate}
                    onChange={this.onChangeEndDate}
                    name="title"
                    />
                </div>
    
                <button onClick={this.saveJob} className="btn btn-success">
                    Submit
                </button>
                </div>
            )}
            </div>
        );
    }
}