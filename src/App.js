import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Principal from "./pages/principal";
import TeacherDetails from "./pages/principal/TeacherDetails";
import Teacher from "./pages/Teacher/Index";
import Register from "./pages/Register";
import Login from "./pages/Login";
import TeacherSubjects from "./pages/Teacher/TeacherSubjects";
import PageNotFound from "./pages/PageNotFound";
import Header from "./components/Header";
import TeacherForm from "./pages/principal/AddTeacher/TeacherForm";

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/register" exact>
            <Register />
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
          {/* principal */}
          <Route path="/principal" exact>
            <Principal />
          </Route>
          <Route path="/principal/teacher/:teacherId">
            <TeacherDetails />
          </Route>

          {/* Teacher */}
          <Route path="/teacher/:teacherId" exact>
            <Teacher />
          </Route>
          <Route path="/subjects" exact>
            <TeacherSubjects />
          </Route>
          <Route path="/testform">
            <TeacherForm />
          </Route>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
