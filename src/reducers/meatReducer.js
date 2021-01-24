// This is the meat reducer. The back-end meat department.
// Its just a function. 

// Creating demo data

const seedData = [
    {
        food: "Chicken",
        quantity: 10
    },
    {
        food: "Beaf",
        quantity: 21
    },
    {
        food: "Mutton",
        quantity: 25
    },
    {
        food: "Turkey",
        quantity: 35
    }
]

// All reducers have 2 params:
// 1. Current state, usually provide a default state. Here, we are providing it as an array.
// 2. Info that came from any action. 

export default (state = seedData, action) => {
    console.log("Meat Reducer is running!!!");
    console.log(action);
    if (action.type === 'updateMeat') {
        let newState = [...state];
        const payload = action.payload;
        newState[payload.index].quantity = newState[payload.index].quantity + payload.qChange;
        return newState;

    } else if (action.type === 'clearInventory') {
        let newState = [...state];
        newState.forEact((item, i) => {
            item.quantity = 0;
        })
        return newState;

    } else {
        return state;
    }
}

/* function frozen(state = [], action) {
    return state;
}

export default frozen; */