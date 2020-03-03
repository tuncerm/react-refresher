import React, { useState } from 'react';

import './NewGoal.css';

const NewGoal = ({onAddGoal})=>{
    const [value, setValue] = useState('');
    const addGoalHandler = event => {
        event.preventDefault();
        const newGoal = {
            id: Math.random().toString(),
            text: value
        }
        onAddGoal(newGoal);
        setValue('');
    }

    const handleChange = event => {
        setValue(event.target.value);
    }

    return (
        <form className="new-goal" onSubmit={addGoalHandler}>
            <input type="text" value={value} onChange={handleChange} />
            <button type="submit">Add Goal</button>
        </form>
    );
}

export default NewGoal;