import { Button, Col, Row } from "reactstrap";
import { AiOutlinePlus } from "react-icons/ai";
import CourseCard from "./components/CourseCard/Card";
import { CourseInterface } from "../../types";
import CoursesFrom from "./components/CoursesForm";
import { Helmet } from "react-helmet";
import useCourses from "./useCourses";

export default function Courses() {
  const {
    courses,
    createCourse,
    deleteCourse,
    updateCourse,
    isFormOpen,
    onClose,
    onOpen,
    selectedCourse,
    setSelectedCourse,
  } = useCourses({
    open: false,
  });

  return (
    <>
      <Helmet>
        <title>courses </title>
      </Helmet>

      <h2 className="d-flex align-items-center justify-content-center">
        <Button onClick={onOpen} color="info">
          <AiOutlinePlus />
          Add new Course
        </Button>
      </h2>

      <Row className="mt-5">
        {courses.map((course: CourseInterface) => (
          <CourseCard
            key={"course-" + course.id}
            course={course}
            deleteCourse={deleteCourse}
            onOpen={onOpen}
            setSelectedCourse={setSelectedCourse}
          />
        ))}

        {courses.length === 0 && (
          <Col
            lg={12}
            md={12}
            sm={12}
            className="text-center p-5 h4 text-danger"
          >
            No Courses Found
          </Col>
        )}
      </Row>

      {isFormOpen && (
        <CoursesFrom
          onClose={onClose}
          selectedCourse={selectedCourse}
          createCourse={createCourse}
          updateCourse={updateCourse}
        />
      )}
    </>
  );
}
