import {
  Button,
  CloseButton,
  Col,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
} from "reactstrap";

import { BaseInput } from "../../../../components/TextFiled/CustomTextFiled";
import { CourseInterface } from "../../../../types";
import useCourseFrom from "./useCourseFrom";

export interface CoursesFormProps {
  onClose: () => void;
  createCourse: (course: CourseInterface) => void;
  updateCourse: (
    oldCourse: CourseInterface,
    newCourse: CourseInterface
  ) => void;
  selectedCourse?: CourseInterface;
}

const CoursesForm = (props: CoursesFormProps) => {
  const { onClose, createCourse, updateCourse, selectedCourse } = props;
  const { control, handleSubmit, onSave, onCancel } = useCourseFrom({
    createCourse,
    onClose,
    updateCourse,
    selectedCourse,
  });

  return (
    <>
      <Modal isOpen={true} size="lg">
        <form onSubmit={handleSubmit(onSave)} encType="">
          <ModalHeader>
            <span>{`${selectedCourse ? "Edit" : "New"} Course`}</span>

            <CloseButton onClick={onCancel} />
          </ModalHeader>

          <ModalBody>
            <Row>
              <Col md="12">
                <BaseInput control={control} name="name" label="Course Name" />
              </Col>

              <Col md="12">
                <BaseInput
                  control={control}
                  name="description"
                  type="text"
                  rows={5}
                  label="course description"
                />
              </Col>
              <Col md="12">
                <BaseInput
                  control={control}
                  name="thumbnail"
                  label="thumbnails url"
                  type="url"
                />
              </Col>

              <Col md="6" className="d-flex justify-content-start">
                <BaseInput
                  control={control}
                  name="isNew"
                  type="switch"
                  label="new"
                />
              </Col>
            </Row>
          </ModalBody>
          <ModalFooter className="d-flex justify-content-start">
            <Button type="submit" color="success">
              Save
            </Button>

            <Button onClick={onCancel}>Cancel</Button>
          </ModalFooter>
        </form>
      </Modal>
    </>
  );
};

export default CoursesForm;
