import React from 'react';
import ChildComponents from './ChildComponents';
import AddComponents from './AddComponents';
/*
Fragment 
*/
class MyComponents extends React.Component {
    //key value
    // state = {
    //     name: 'Hoàng',
    //     channel: 'Rto'
    // }

    // handleOnChangeName = (event) => {
    //     this.setState({
    //         name: event.target.value
    //     })
    // }

    // handleOnChangeChannel = (event) => {
    //     this.setState({
    //         channel: event.target.value
    //     })
    // }

    state = {

        arrJobs: [
            { id: 'abcJob1', title: 'developer', salary: '500' },
            { id: 'abcJob2', title: 'tester', salary: '400' },
            { id: 'abcJob3', title: 'manager', salary: '1000' }


        ]


    }

    handleOnChangefirtName = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }

    handleOnChangelastName = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }

    handleSubmit = (event) => {
        console.log('>>> check data input: ', this.state)
        event.preventDefault()
        alert('click me')
    }



    // handleClickButton = () => {
    //     alert('Click me')
    // }

    render() {

        return (
            // <React.Fragment>
            //     <div className="first">
            //         <input value={this.state.name} type="text" onChange={(event => this.handleOnChangeName(event))} >

            //         </input>
            //         Hello My name is {this.state['name']}
            //     </div>
            //     <div className='second'>
            //         <input value={this.state.channel} type="text" onChange={(event => this.handleOnChangeChannel(event))}>

            //         </input>
            //         My channel is {this.state.channel}
            //     </div>
            //     <div className='third'>
            //         <button onClick={() => this.handleClickButton()}>Click me</button>
            //     </div>
            // </React.Fragment>
            <>
                <AddComponents />

                <ChildComponents

                    arrJobs={this.state.arrJobs}
                />

            </>
        )

    }

}

export default MyComponents;