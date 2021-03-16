import React, { useEffect, useState } from 'react';

const MealFinder = () => {
    const [search, setSearch] = useState('');
    const [meals, setMeals] = useState([]);
    const handleChange = event =>{
        setSearch(event.target.value);
    }
    useEffect(()=>{
        const url  = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
        fetch(url)
        .then(res => res.json())
        .then(data => setMeals(data.meals))
    },[search])
    return (
        <div>
            <h1>This is from react food finder</h1>
            <input type ="text" onChange ={handleChange} placeholder = "Search Food" />
            <p>Search : {search}</p>
            <p>Meals  : {meals?.length ||0}</p>
            <ul>
                {
                    meals.map(meal => <li>{meal.strMeal}</li>)
                }
            </ul>
        </div>
    );
};

export default MealFinder;