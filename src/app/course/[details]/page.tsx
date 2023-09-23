import React from "react";

const page = () => {
  // Fetch the course details based on the id

  // const courseDetails = fetchCourseDetailsById(id);
  const courseDetails = {
    name: "Course Name",
    description: "Course Description",
  };

  return (
    <div>
      <h1>{courseDetails.name}</h1>
      <p>{courseDetails.description}</p>
    </div>
  );
};

export default page;
