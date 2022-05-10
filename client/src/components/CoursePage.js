import coursesData from "./data";
import CourseList from "./CourseList";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function CoursePage() {
  const navigate = useNavigate();
  // console.log(navigate);

  return (
    <>
      <h1>Course Page</h1>;
      <Button onClick={() => navigate}>Create Course</Button>
      <CourseList coursesData={coursesData} />
    </>
  );
}
