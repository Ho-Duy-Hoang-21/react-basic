import React from "react";

class AddComponents extends React.Component {
    state = {
        titleJob: '',
        salary: '',
    }

    handleOnChangetitleJob = (event) => {
        this.setState({
            titleJob: event.target.value
        })
    }

    handleOnChangeSalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }

    handleSubmit = (event) => {
        console.log('>>> check data input: ', this.state)
        event.preventDefault()

    }
    render() {
        return (
            <form>
                <label htmlFor="fname">Jobs:</label><br />
                <input type="text" value={this.state.titleJob} onChange={(event) => this.handleOnChangetitleJob(event)} /><br />
                <label htmlFor="lname">Salary:</label><br />
                <input type="text" value={this.state.salary} onChange={(event) => this.handleOnChangeSalary(event)} /><br /><br />
                <input type="submit" onClick={(event) => this.handleSubmit(event)} />
            </form>
        )
    }

}

export default AddComponents;