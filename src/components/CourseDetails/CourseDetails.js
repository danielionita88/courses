import React from 'react';
import StarRatings from 'react-star-ratings';
import classes from './CourseDetails.module.css'

const CourseDetails = props => {
    
    const id = parseInt(props.match.params.id)
    const currentCourse = props.courses.find(course => course.courseId === id)
    console.log(currentCourse)

    return(
        <div className={classes.Details}>
            <h1><a href={currentCourse.url}>{currentCourse.title}</a></h1>
            <img src={currentCourse.imgUrl}/>
            <h2>Course info:</h2>
            <a href={currentCourse.url}>Course Link</a>
            <p><strong>Rating: </strong>&nbsp;
                <StarRatings 
                    numberOfStart={5} 
                    starDimension='20px'
                    starRatedColor='gold'
                    rating={currentCourse.providerRatings ? currentCourse.providerRatings : 0}
                /> {currentCourse.providerRatings ? (currentCourse.providerRatings) : null}</p>
            <p><strong>Duration: </strong> {currentCourse.duration ? `${currentCourse.duration} ${currentCourse.durationPeriod}` : 'Unknown'}</p>
            <p><strong>Program type: </strong>{currentCourse.programType} </p>
            <p><strong>Level: </strong>{currentCourse.level ? currentCourse.level : 'Unknown' }</p>
            <h3><strong>Description: </strong></h3>
            <p>{currentCourse.shortDescription}</p>
        </div>
    );
}

export default CourseDetails;