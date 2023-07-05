import { CourseInterface } from "../../types";
import CourseCard from "../Courses/components/CourseCard/Card";
import { Card, CardImg, Col, Row } from "reactstrap";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import useCourseDetails from "./useCourseDetails";

const CourseDetails = () => {
  const { course, isChild } = useCourseDetails();

  return (
    <>
      <Helmet>
        <title>{course?.name}</title>
      </Helmet>
      <div>
        <h2>original course</h2>
        <Col md={6} sm={12} xm={12} className="mb-4 course-card">
          <Card>
            <CardImg
              src={course?.thumbnail}
              className="course-card-image"
              loading="lazy"
              alt="Card image cap"
              height={200}
            />
            <h1 className="d-flex justify-content-between align-items-center mt-3">
              {course?.name}

              {isChild && (
                <Link
                  to={`/courses/${course?.id}`}
                  className="text-decoration-none"
                ></Link>
              )}
            </h1>

            <p className="text-wrap">{course?.description}</p>
          </Card>
        </Col>

        {!isChild && (
          <>
            <h2>Archive course</h2>
            <Row>
              {course?.drafts?.map((draft: CourseInterface) => (
                <CourseCard course={draft} key={"draft" + draft.id} />
              ))}
            </Row>
          </>
        )}
      </div>
    </>
  );
};
export default CourseDetails;
