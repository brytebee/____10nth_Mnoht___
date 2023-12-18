import Image from 'next/image';
import React from 'react';
import Line from '../../../../public/svgs/line.svg';
import Like from '../../../../public/svgs/like.svg';
import Comment from '../../../../public/svgs/comment.svg';

type Props = {
  image: string;
  title: string;
  username: string;
  description: string;
  likes: number;
  comments: number;
};

const Card = (props: Props) => {
  const { image, title, username, description, likes, comments } = props;
  return (
    <section>
      <header>
        <Image src={image} alt={`${title} photo`} />
        <div>
          <h3>{title}</h3>
          <Image src={Line} alt="line" />
          <p>{username}</p>
        </div>
      </header>
      <p>{description}</p>
      <footer>
        <div>
          <div>
            <Image src={Like} alt="likes" />+{likes}k
          </div>
          <div>
            <Image src={Comment} alt="likes" />+{comments}k
          </div>
        </div>
        <button type="button">View discussion</button>
      </footer>
    </section>
  );
};

export default Card;
