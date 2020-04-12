import React, { useState, useEffect }from 'react';
import { Router, Route } from 'react-router-dom';
import history from './history/history';
import axios from 'axios';
import MainPage from './containers/MainPage/MainPage';
import CourseDetails from './components/CourseDetails/CourseDetails';

const App = () => {

  const [courses, setCourses] = useState([]);

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

  return (
    <Router history={history}>
      <Route exact path={'/'} component={() => <MainPage courses={courses}/>} />
      <Route exact path={'/course/:id'} component={(routeParams) => (
        <CourseDetails 
          {...routeParams} 
          courses={courses}
        />)}
      />
    </Router>
  );
}

export default App;
