import React from 'react';

/*
Fragment 
*/
class MyComponents extends React.Component {
    //key value
    state = {
        name: 'Hoàng',
        channel: 'Rto'
    }

    handleOnChangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    render() {

        return (
            <React.Fragment>
                <div className="first">
                    <input value={this.state.name} type="text" onChange={(event => this.handleOnChangeName(event))} >

                    </input>
                    Hello My name is {this.state['name']}
                </div>
                <div className='second'>
                    My channel is {this.state.channel}
                </div>
            </React.Fragment>
        )
    }
}

export default MyComponents;