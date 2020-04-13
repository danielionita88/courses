import React from 'react';
import classes from './Courses.module.css';
import StarRatings from 'react-star-ratings';

const courses = props => {
    
    return props.courses.map( course => (
        <div 
            key={course.courseId} 
            className={classes.Card}
            onClick={() => props.clicked(course.courseId)}
        >
            <img 
                src={course.imgUrl ? 
                    course.imgUrl : 
                    'https://www.metrorollerdoors.com.au/wp-content/uploads/2018/02/unavailable-image.jpg'
                }  
                alt='course'/>
            <h3>{course.title}</h3>
            <span>Rating</span>
            <StarRatings 
                numberOfStart={5} 
                starDimension='20px'
                starRatedColor='gold'
                rating={course.providerRatings ? course.providerRatings : 0}
            />
        </div>
    ));  
};

export default courses;