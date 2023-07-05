import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  CardTitle,
  Col,
} from "reactstrap";

import { CourseInterface } from "../../../../types";
import React from "react";
import { Link } from "react-router-dom";

export interface CourseCardProps {
  course: CourseInterface;
  setSelectedCourse?: React.Dispatch<
    React.SetStateAction<CourseInterface | undefined>
  >;
  onOpen?: (course?: CourseInterface) => void;
  deleteCourse?: (course: CourseInterface) => void;
}

const CourseCard = (props: CourseCardProps) => {
  const { course, setSelectedCourse, onOpen, deleteCourse } = props;
  return (
    <>
      <Col md={6} sm={12} xm={12} className="mb-4 course-card">
        <Link
          to={{ pathname: `/courses/${course.id}` }}
          className="text-decoration-none"
        >
          <Card>
            <CardTitle className="p-3 d-flex justify-content-end gap-2 align-items-center">
              {course.isNew && (
                <Badge className="p-2" color="info">
                  NEW
                </Badge>
              )}
              {setSelectedCourse && onOpen && deleteCourse && (
                <div className="d-flex gap-2 justify-content-start">
                  <Button
                    onClick={(e) => {
                      e.preventDefault();
                      onOpen();
                      setSelectedCourse(course);
                    }}
                  >
                    <AiOutlineEdit />
                  </Button>

                  <Button
                    color="danger"
                    onClick={(e) => {
                      e.preventDefault();
                      deleteCourse(course);
                    }}
                  >
                    <AiOutlineDelete />
                  </Button>
                </div>
              )}
            </CardTitle>

            <CardBody className="pt-0 course-content-body">
              <h4 className="text-capitalize"> {course.name}</h4>
              <p>{course.description}</p>
            </CardBody>

            <CardImg
              src={
                course.thumbnail ||
                "https://mc-69e30ef4-758e-4371-ac6f-2657-cdn-endpoint.azureedge.net/-/media/IMA/Images/Home/IMA-Certifications/CMA-Certification/Prepare-for-the-CMA/Pass-the-CMA-Exam.ashx?h=1080&w=1620&rev=2e77a18c97fb434ca42d030e6b6498f6&hash=260DF3C35922A24FB6B6D76FFDB6C574"
              }
              className="course-card-image"
              loading="lazy"
              alt="Card image cap"
              height={200}
            />
          </Card>
        </Link>
      </Col>
    </>
  );
};

export default CourseCard;
