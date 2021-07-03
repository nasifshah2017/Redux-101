// This is the Produce reducer. The back-end produce department.

// Creating demo data

const seedData = [
    {
        food: "Lettuce",
        quantity: 15
    },
    {
        food: "Spinach",
        quantity: 22
    },
    {
        food: "Cucumbers",
        quantity: 35
    }
]

export default (state = seedData, action) => {
    console.log("Produce Reducer is running!!!");
    if (action.type === 'updateProduce') {
        const payload = action.payload;
        let newState = [...state];
        newState[payload.index].quantity = newState[payload.index].quantity + payload.qChange;
        return newState;
    } else if (action.type === 'clearInventory') {
        let newState = [...state];
        newState.forEach((item, i) => {
            item.quantity = 0;
        })
        return newState;
    } else {
        return state;
    }

}

/* function produce(state = [], action) {
    return state;
}

export default produce; */
