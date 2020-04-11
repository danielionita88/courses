import React, { useState, useEffect } from 'react'
import axios from 'axios';
import classes from './MainPage.module.css'
import Courses from '../../components/Courses/Courses'


const MainPage = props => {

    const [courses, setCourses] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

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

    const handleInputChange= e =>{
        setSearchTerm(e.target.value)
    }

    let renderedCourses
    if(searchTerm.lengh > 0){
        renderedCourses = courses
    }else {
        renderedCourses=courses.filter( course => course.title.toLowerCase().includes(searchTerm) )
    }

    return (
        <div className={classes.Main}>
            <div className={classes.Header}>
                <h1>Courses</h1>
                <input 
                    className={classes.Input} 
                    type='search' 
                    placeholder='Search course by title'
                    onChange={handleInputChange}
                />
            </div>
            <div className={classes.Grid}>
                <Courses courses={renderedCourses} />
            </div>
        </div>
    );
};

export default MainPage;