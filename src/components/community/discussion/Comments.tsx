'use client';

import React, { useState } from 'react';
import { Commenta } from '@/app/staticData/data';
import ComCard from './ComCard';
import ArrowUp from '../../../../public/svgs/arrow-up.svg';
import Image from 'next/image';
import Interact from './Interact';

type Props = {};

const Comments = (props: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <section>
      <Interact />
      <div className="lg:hidden text-left mb-3">
        <p
          onClick={() => setOpen(!open)}
          className={open ? 'underline text-[#D97508]' : 'underline'}
        >
          {open ? 'Close Comment' : 'View comments'}
        </p>
      </div>
      <div className="comments">
        {open && (
          <section className="mt-[30px]">
            {Commenta.map(({ image, name, desc }) => (
              <ComCard image={image} desc={desc} name={name} />
            ))}
            <div
              className="flex justify-center mt-6"
              onClick={() => setOpen(false)}
            >
              <Image src={ArrowUp} alt="close comment" />
            </div>
          </section>
        )}
      </div>
    </section>
  );
};

export default Comments;
