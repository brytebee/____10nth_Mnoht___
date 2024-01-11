'use client';

import React, { useState } from 'react';
import { Commenta } from '@/app/staticData/data';
import ComCard from './ComCard';
import ArrowUp from '../../../../public/svgs/arrow-up.svg';
import Image from 'next/image';
import Interact from './Interact';

const Comments = () => {
  const [open, setOpen] = useState(false);

  return (
    <section>
      <Interact />
      <div className="text-left mb-3">
        <p
          onClick={() => setOpen(!open)}
          className={
            open
              ? 'underline text-[#D97508] text-sm pl-4'
              : 'underline text-sm pl-4'
          }
        >
          {open ? 'Close Comment' : 'View comments'}
        </p>
      </div>
      <div className="comments">
        {open && (
          <section className="mt-[30px]">
            {Commenta.map(({ id, image, name, desc }) => (
              <div key={id}>
                <ComCard image={image} desc={desc} name={name} />
              </div>
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
