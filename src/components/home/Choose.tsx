import React from 'react'

type Props = {}

export default function WhyChooseUsSection({ }: Props) {
  const reasons = [
    {
      reason: 'Expert-Led Instructors',
      description: 'Our courses are meticulously crafted by industry experts who possess extensive knowledge and real-world experience. They bring their expertise to the virtual classroom, providing you with practical insights and guidance that go beyond theoretical concepts.'
    },
    {
      reason: 'Relevant and Up-to-date curriculum',
      description: 'The tech industry is constantly evolving, and staying up to date with the latest trends is crucial. Our curriculum is regularly updated to reflect industry advancements, ensuring that you receive the most relevant and cutting-edge knowledge. From programming languages to data science and cybersecurity, we cover a wide range of topics tailored to industry demands.'
    },
    {
      reason: 'Peer collaboration',
      description: 'Learning is a social process, and our online tech academy fosters a vibrant community of learners. Engage in discussions, collaborate on projects, and network with like-minded individuals who share your passion for technology. Tap into a supportive environment that encourages knowledge sharing and growth.'
    },
    {
      reason: 'Hands-on-learning',
      description: "We believe in learning by doing. Our tutors emphasize hands-on projects, allowing you to apply your newfound knowledge to real-world scenarios. Through practical assignments and interactive exercises, you'll develop the skills necessary to thrive in the tech industry."
    }
  ]
  return (
    <section className='w-full bg-[#130600] text-white py-9 md:pt-24 md:pb-24'>
      <div className='w-11/12 mx-auto lg:w-11/12 md:w-full md:px-2 lg:px-0'>
        <h3 className='text-2xl md:text-3xl md:font-bold font-semibold mb-8'>Why Choose Us?</h3>
        <p className='text-base font-light text-justify md:hidden lg:hidden'>We offer a wide range of courses designed to equip you with the skills needed to succeed in the tech industry. Here are some of the reasons why you should choose us.</p>
        <div className='md:grid md:grid-cols-2 md:gap-10'>
        {reasons.map(({ reason, description }, index) => (
          <div key={index} className='flex gap-[6px] mt-8 md:mt-0 lg:w-[600px] md:w-[400px]'>
            <div className='h-[10px] w-[10px] rounded-full bg-white mt-2' />
            <div className='w-full'>
              <h4 className='text-lg md:text-xl font-semibold mb-2.5'>{reason}</h4>
              <p className='text-base md:text-sm lg:text-base font-light'>{description}</p>
            </div>
          </div>
        )
        )}
        </div>
      </div>
    </section>
  )
}