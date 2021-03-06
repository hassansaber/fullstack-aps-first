import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const CourseList = ({ coursesData }) => {
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Title</th>
          <th>Author ID</th>
          <th>Category</th>
          <th colSpan={2}>Slug</th>
        </tr>
      </thead>
      <tbody>
        {coursesData?.map((course) => {
          //var
          const { id, title, authorId, category, slug } = course;

          //table data
          return (
            <tr key={id}>
              <td>
                <Link to={`/course/${slug}`} state={course}>
                  {title}
                </Link>
              </td>
              <td>{authorId}</td>
              <td>{category}</td>
              <td>{slug}</td>
              <td>
                <Button variant="danger">Delete</Button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default CourseList;
