import React from 'react';

/*
Fragment 
*/
class ChildComponents extends React.Component {

    state = {
        showJob: false
    }
    handleShowHide = () => {
        this.setState({
            showJob: !this.state.showJob
        })
    }
    render() {
        let { arrJobs } = this.props;
        let { showJob } = this.state;
        let check = showJob === true ? 'showJobs = true' : 'showJobs = false ';
        return (
            <>
                {showJob === false ?
                    <div>
                        <button onClick={() => this.handleShowHide()}>Show</button>
                    </div>
                    :
                    <>
                        <div className='job-lists'>
                            {
                                arrJobs.map((item, index) => {
                                    if (item.salary >= 400) {
                                        return (
                                            <div key={item.id}>
                                                {item.title} - {item.salary} $
                                            </div>
                                        )
                                    }
                                })
                            }
                        </div>
                        <div>
                            <button onClick={() => this.handleShowHide()}>Hide</button>
                        </div>
                    </>
                }
            </>
        )
    }
}



export default ChildComponents;