// This is the frozen reducer. The back-end frozen department.
// Its just a function. Returning the "state" which is an array 
// of objects. Each item in the object contains two properties,
// the first property is "food" and its value is the type of food
// this department carries, the second property is "quantity" and its 
// value is the amount of that food we have in the department. 

// Creating demo data

const seedData = [
    {
        food: "TV dinners",
        quantity: 10
    },
    {
        food: "Frozen Veggies",
        quantity: 21
    },
    {
        food: "Frozen Pizzas",
        quantity: 25
    }
]

// All reducers have 2 params:
// 1. Current state, usually provide a default state. Here, we are providing it as an array.
// 2. Info that came from any action. 

export default (state = seedData, action) => {
    console.log("Frozen Reducer is running!!!")
    console.log(action);
    if (action.type === 'updateFrozen') {
        console.log("I care about this action!!!");
        // We make a copy of state, because WE NEVER EVER EVER mutate state
        let newState = [...state];
        if (action.payload.operation === '+') {
            newState[action.payload.index].quantity++
        } else if (action.payload.operation === '-') {
            newState[action.payload.index].quantity--
        }
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

/* function frozen(state = [], action) {
    return state;
}

export default frozen; */
