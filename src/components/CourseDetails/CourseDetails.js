import React from 'react';

const CourseDetails = props => {
    
    const id = parseInt(props.match.params.id)
    const currentCourse = props.courses.find(course => course.courseId === id)
    console.log(currentCourse)
    
    return(
        <div>
            <h1>{currentCourse.title}</h1>
            <img src={currentCourse.imgUrl}/>
            <h2>Course info:</h2>
            <a href={currentCourse.url}>Link</a>
            <p>Rating: {currentCourse.providerRatings} </p>
            <p>Duration: {`${currentCourse.duration} ${currentCourse.durationPeriod}`}</p>
            <p>Program type: {currentCourse.programType} </p>
            <p>Level: {currentCourse.level}</p>
            <h3>Description: </h3>
            <p>{currentCourse.shortDescription}</p>

        </div>
    );
}

export default CourseDetails;