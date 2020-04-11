import React, { useState, useEffect } from 'react'
import axios from 'axios';
import classes from './MainPage.module.css'
import Courses from '../../components/Courses/Courses'


const MainPage = props => {

    const [courses, setCourses] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filter, setFilter]= useState('All')
    
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

    const handleFilter = e =>{
        setFilter(e.target.value)
    }

    let renderedCourses

    // if (searchTerm) {
    //     renderedCourses = courses.filter(course => course.title.toLowerCase().includes(searchTerm))
    // }
    // else {
    //     renderedCourses = courses
    // }

    const filterCourses = () => {
        if (filter === "All"){
            renderedCourses = courses
        } else if(filter ==='Beginner'){
            renderedCourses = courses.filter(course => course.level === 'Beginner')
        } else if(filter === 'Intermediate') {
          renderedCourses = courses.filter(course =>course.level === 'Intermediate')
        } else if(filter === 'Advanced'){
          renderedCourses = courses.filter(course =>course.level === 'Advanced')
        }
    }

    return (
        <div className={classes.Main}>
            <div className={classes.Header}>
                <h1>Courses</h1>
                <div>
                    <input
                        className={classes.Input}
                        type='search'
                        placeholder='Search course by title'
                        onChange={handleInputChange}
                    />
                    <br />
                    <span>Filter by level </span>
                    <select onChange={handleFilter}>
                        <option value="All">All</option>
                        <option value="Beginner">Beginner</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Advanced">Advanced</option>
                    </select>
                </div>
            </div>
            <div className={classes.Grid}>
                <Courses courses={courses} />
            </div>
        </div>
    );
};

export default MainPage;