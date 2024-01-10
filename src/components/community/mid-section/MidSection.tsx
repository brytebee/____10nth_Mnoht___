import React from 'react';
import UpcomingEvents from '../upcoming-events/UpcomingEvents';
import ActiveDiscussions from '../discussion/ActiveDiscussions';

const MidSection = () => {
  return (
    <div>
      <section className="fst-section bg-[#A63F0E] py-14 text-center">
        <div className="text-white">
          <h3 className="font-medium text-lg">Whats on your mind?</h3>
          <p className="text-sm leading-7 lg:hidden">
            Share your thoughts with the community
          </p>
          <p className="text-sm leading-7 hidden lg:block">
            You have something thats bothering you or a question to ask? <br />
            Share with us! The community is always there to help.
          </p>
        </div>
        <div className="what-on-your-mind py-4">
          <input
            type="text"
            className="w-[80%] lg:w-[35%] p-5 rounded-3xl text-center text-sm"
            placeholder="write your story"
            minLength={20}
            maxLength={500}
          />
        </div>
      </section>
      <ActiveDiscussions />
      <UpcomingEvents />
    </div>
  );
};

export default MidSection;
