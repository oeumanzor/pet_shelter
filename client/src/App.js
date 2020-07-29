import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Display from "./components/display";
import ExamForm from "./components/ExamForm";
import EditExam from "./components/EditExam";
import Details from "./components/details";
import { Link, Router } from '@reach/router';


function App() {
  return (
        <div className="container">
          <h1>Pet Shelter</h1>
            <Link className="btn btn-info mr-2" to="/">Home</Link>
            <Link className="btn btn-info" to="/new">Add a Pet to the Shelter</Link>
            <Router className="my-5">
              <Display path="/" />
              <ExamForm path="/new" />
              <EditExam path ="/edit/:_id" />
              <Details path="/info/:_id" /> 
            </Router>

        </div>
  );
}

export default App;
