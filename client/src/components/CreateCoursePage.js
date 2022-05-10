import { useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function CreateCoursePage() {
  let params = useParams();
  // console.log(params);

  let location = useLocation();
  // console.log(location);
  const { slug, title, authorId, category } = location.state;
  const [updateCourse, setUpdateCourse] = useState({
    title,
    authorId,
    slug,
    category,
  });

  //func
  const handleSubmit = (e) => {
    e.preventDefault();
    setUpdateCourse({
      title: "",
      authorId: "",
      slug: "",
      category: "",
    });
  };

  return (
    <>
      <h1>Mange Course Page</h1>
      <h3>details of {params.slug} course</h3>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title"> Course Title</label>
          <input
            type="text"
            name="title"
            id="title"
            value={updateCourse.title}
            onChange={(e) =>
              setUpdateCourse({ ...updateCourse, title: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="authorId"> Course authorID</label>
          <input
            type="text"
            name="authorId"
            id="authorId"
            value={updateCourse.authorId}
            onChange={(e) =>
              setUpdateCourse({ ...updateCourse, authorId: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="slug"> Course slug</label>
          <input
            type="text"
            name="slug"
            id="slug"
            value={updateCourse.slug}
            onChange={(e) =>
              setUpdateCourse({ ...updateCourse, slug: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="category"> Course category</label>
          <input
            type="text"
            name="category"
            id="category"
            value={updateCourse.category}
            onChange={(e) =>
              setUpdateCourse({ ...updateCourse, category: e.target.value })
            }
          />
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </>
  );
}
