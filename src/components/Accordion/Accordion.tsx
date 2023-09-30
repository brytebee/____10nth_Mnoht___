'use client';

import React, { useState } from "react";
import Image from "next/image";

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  icon?: any;
}

const Accordion: React.FC<AccordionProps> = ({ title, children, icon }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b mb-1">
      <div className="flex justify-between items-center py-3" onClick={toggleAccordion}>
        <h3 className="text-body text-lg font-bold">{title}</h3>
        <span>{isOpen ? <Image src={icon} alt="close icon"  className={`${isOpen && 'transform rotate-180'}`}/> || '-' : <Image src={icon} alt="open icon" /> || '+'}</span>
      </div>
      {isOpen && <div className="w-full px-3 py-5">{children}</div>}
    </div>
  );
};

export default Accordion;
