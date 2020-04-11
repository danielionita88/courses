import React from 'react';
import classes from './Courses.module.css'

const Courses = props => {

    return props.courses.map( course => (
        <div key={course.courseId} className={classes.Card}>
            <img 
                src={course.imgUrl ? 
                    course.imgUrl : 
                    'https://www.metrorollerdoors.com.au/wp-content/uploads/2018/02/unavailable-image.jpg'
                }  
                alt='course'/>
            <h3>{course.title}</h3>
        </div>
    ));
    
};

export default Courses;