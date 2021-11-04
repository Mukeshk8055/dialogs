import { useEffect } from "react";
import Course from "src/content/course";

const CourseContainer = (props) => {
  const { id: courseId } = props.match.params;

  useEffect(() => {}, [courseId]);

  return <Course id={courseId} />;
};

export default CourseContainer;
