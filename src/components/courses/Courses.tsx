import React from "react";
// import firstImage from "../../../public/svgs/portrait-young-man-office1.svg";
// import secondImage from "../../../public/svgs/office2.svg";
// import thirdImage from "../../../public/svgs/study-group-learning-library1.svg";
// import CustomCarousel from "./coursesCourasel/CoursesCourasel";
import Carousel from "./coursesCourasel/CoursesCourasel";

interface Props {
  // Add props here
}

const Courses: React.FC<Props> = (props) => {
  // const items = [
  //   {
  //     imageSrc: firstImage,
  //     alt: "Image 1",
  //   },
  //   {
  //     imageSrc: secondImage,
  //     alt: "Image 2",
  //   },
  //   {
  //     imageSrc: thirdImage,
  //     alt: "Image 3",
  //   },
  // ];
  return (
    <div>
      <div>
        <Carousel />
      </div>
    </div>
  );
};

export default Courses;

// import Carousel from "../components/Carousel";

// const items = [
//   {
//     imageSrc: "/image1.jpg",
//     alt: "Image 1",
//   },
//   {
//     imageSrc: "/image2.jpg",
//     alt: "Image 2",
//   },
//   {
//     imageSrc: "/image3.jpg",
//     alt: "Image 3",
//   },
//   // Add more items as needed
// ];

// function Home() {
//   return (
//     <div>
//       <Carousel items={items} />
//     </div>
//   );
// }

// export default Home;
