import React, { Component } from 'react';

// We want this react component to know about Redux.
// To do that we need some help... or some glue
// the glue is React-Redux!!!

// We need the connect() function to connect 
// this React Component with the Store (rootReducer)
import { connect } from 'react-redux';
import updateFrozen from '../actions/frozenInvUpdate';
import { bindActionCreators } from 'redux';

class FrozenDept extends Component {

    increment = (operation, index) => {
        // console.log(operation, index);
        this.props.updateFrozen(operation, index);
    }

    render() {
        // Mapping through the frozenReducer state array, which was imported from the rootReducer
        // via the mapStateToProps function, connecting that function to the FrozenDept component
        const frozenInventory = this.props.frozenData.map((item, i) => {
            return (
                <div key={i}>
                    <li>{item.food}: {item.quantity}</li>
                    <input type="button" onClick={() => { this.increment('+', i) }} value="+" />
                    <input type="button" onClick={() => { this.increment('-', i) }} value="-" />
                </div>
            )
        })
        return (
            <div>
                <h1>The Frozen Food Department</h1>
                <ul>
                    {frozenInventory}
                </ul>
            </div>
        )
    }
}

// The mapStateToProps takes 1 arg, "state" and that is the rootReducer (or the Store)

function mapStateToProps(state) {   // Importing from rootReducer.js 
    // mapStateToProps returns an object, the
    // property is the local prop name to this component
    // The value will be the property in the root reducer
    // that is a piece of the store...
    return {
        frozenData: state.frozen
    }

}

// mapDispatchToProps is how we tie our Component to the Dispatch
// It takes 1 argument and that is the Dispatch
// This function returns bindActionCreators and we hand bindActionCreators
// an object, where each property will be a local prop and each value
// will be a function which is dispatch when run.
// The 2nd argument for bindActionCreators is the dispatch

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        updateFrozen: updateFrozen
    }, dispatch)
}

// The updateFrozen property on the left-hand side is a local prop
// we now have this.prop.updateFrozen and this is going to be assigned
// to the updateFrozen function that we are importing at the top from
// the frozenInvUpdate.js file

// This function is now going to be available inside the bindActionCreators
// component as this.prop.updateFrozen. 

// We added one more argument in bindActionCreators and that is the 'dispatch'


// export default FrozenDept;

// Connecting the React Component with the Redux Store (rootReducer)
// 2nd argument to the connect() function is mapDispatchToProps
export default connect(mapStateToProps, mapDispatchToProps)(FrozenDept);

// The connect() function takes 2 args, the first one is a function 
// that is going to map a piece of redux state to this FrozenDept
// React Component

// function x(n) {
//        return (m) => {
//            console.log(n+m);
//        } 
//  }

// x(1)(2); 3

// f connect (mapStateToProps, mapDispatchToProps, mergeProps, _ref2) {
//  if (_ref2 === void 0) {
//      _ref2 = {};
//  }

