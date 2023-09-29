import React from 'react';
import Image from 'next/image';
// import CourseData from './CourseData';

interface CourseDataItems {
  image: string;
  line: string;
  header: string;
  desc: string;
}

interface Props {
  
  items: CourseDataItems[];
}

const CourseCard: React.FC<Props> = ({ items }) => {
  return (
   <div>
   {items.map((item:any)=> (
     <div key={item.id}>
       <ul>
         <li>
           <Image src={item.img} height={150} width={150} alt="img" />
         </li>
       </ul>
       <ul>
         <li>{item.header}</li>
         <li>
           <Image src={item.underline} width={468.615} height={2} alt="img" />
         </li>
         <li>{item.desc}</li>
       </ul>
       <ul>
         <li>
           <button>View course</button>
         </li>
       </ul>
     </div>
   ))}
    </div>
  );
};

export default CourseCard;
