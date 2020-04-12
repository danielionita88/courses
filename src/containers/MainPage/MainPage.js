import React, { useState, useEffect } from 'react'
import axios from 'axios';
import classes from './MainPage.module.css'
import Courses from '../../components/Courses/Courses'
import Header from '../../components/Header/Header'


const MainPage = props => {

    const [courses, setCourses] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filter, setFilter] = useState('All')

    useEffect(() => {
        (async function () {
            try {
                const response = await axios.get("https://quze-intern-test.s3.us-east-2.amazonaws.com/course-data.json");
                setCourses(response.data)
            } catch (e) {
                alert(e)
            }
        })();
    }, []);

    const handleInputChange = e => {
        setSearchTerm(e.target.value)
    }

    const handleFilter = e => {
        setFilter(e.target.value)
    }

    let renderedCourses

    if (searchTerm) {
        renderedCourses = courses.filter(course => course.title.toLowerCase().includes(searchTerm))
    }
    else {
        renderedCourses = courses
    }

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
    }

    return (
        <div className={classes.Main}>
            <Header
                change={handleInputChange}
                filter={handleFilter}
            />
            <div className={classes.Grid}>
                <Courses courses={filterCourses(renderedCourses)} />
            </div>
        </div>
    );
};

export default MainPage;