// This file is an action creator!!
// Action creators return actions.
// An action is an object that has atleast a property of type

// This action creator is going to be handed to the Dispatch

export default (qChange, index) => {
    return {
        type: 'updateMeat',
        payload: {
            qChange,
            index
        }
    }
}