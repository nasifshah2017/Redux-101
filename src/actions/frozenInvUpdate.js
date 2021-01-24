// This file is an action creator!!
// Action creators return actions.
// An action is an object that has atleast a property of type

// This action creator is going to be handed to the Dispatch

export default (operation, index) => {
    console.log(operation, index);
    return {
        type: 'updateFrozen',
        payload: {
            operation,
            index
        }
    }
}