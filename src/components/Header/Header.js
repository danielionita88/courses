import React from 'react';
import classes from './Header.module.css';

const Header = props => {
    return (
        <div className={classes.Header}>
            <h1>Courses</h1>
            <input
                className={classes.Input}
                type='search'
                placeholder='Search course by title'
                onChange={props.change}
            />
            <br />
            <span>Filter by level </span>
            <select onChange={props.filter}>
                <option value="All">All</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
            </select>
        </div>
    );
};

export default Header;