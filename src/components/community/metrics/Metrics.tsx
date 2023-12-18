import React from 'react';

type Props = {
  course: number;
  student: number;
  instructor: number;
  certified: number;
};

const Metrics = ({ course, student, instructor, certified }: Props) => {
  return (
    <div>
      <div className="course">
        <span>Courses</span>
        <span>{course}</span>
      </div>
      <div className="student">
        <span>Students enrolled</span>
        <span>{student}</span>
      </div>
      <div className="instructor">
        <span>Instructors</span>
        <span>{instructor}</span>
      </div>
      <div className="certified">
        <span>Certified students</span>
        <span>{certified}</span>
      </div>
    </div>
  );
};

export default Metrics;
