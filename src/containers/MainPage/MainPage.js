import React, { useState } from 'react';
import classes from './MainPage.module.css';
import Courses from '../../components/Courses/Courses';
import Header from '../../components/Header/Header';
import history from '../../history/history';

const MainPage = props => {
    
    const [searchTerm, setSearchTerm] = useState('');
    const [filter, setFilter] = useState('All');

    const handleInputChange = e => {
        setSearchTerm(e.target.value)
    };

    const handleFilter = e => {
        setFilter(e.target.value)
    };

    const handleCourseClick = courseId => {
        history.push(`course/${courseId}`)
    };

    let renderedCourses;

    if (searchTerm) {
        renderedCourses = props.courses.filter(course => course.title.toLowerCase().includes(searchTerm))
    }
    else {
        renderedCourses = props.courses
    };

    const filterCourses = renderedCourses => {
        if (filter === "All") {
            return renderedCourses
        } else if (filter === 'Beginner') {
            return renderedCourses.filter(course => course.level === 'Beginner')
        } else if (filter === 'Intermediate') {
            return renderedCourses.filter(course => course.level === 'Intermediate')
        } else if (filter === 'Advanced') {
            return renderedCourses.filter(course => course.level === 'Advanced')
        }
    };

    return (
        <div className={classes.Main}>
            <Header
                change={handleInputChange}
                filter={handleFilter}
            />
            <div className={classes.Grid}>
                <Courses 
                    courses={filterCourses(renderedCourses)} 
                    clicked={handleCourseClick}
                />
            </div>
        </div>
    );
};

export default MainPage;