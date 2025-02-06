import React from 'react';
import './career.css'
const WhyJoinUs: React.FC = () => {
  const items = [
    {
      id: 1,
      title: "Embracing Diversity",
      description:
        "We celebrate individuality and create equal opportunities for everyone to thrive.",
    },
    {
      id: 2,
      title: "Nurturing Growth",
      description:
        "Empowering employees with learning opportunities and mentorship for success.",
    },
    {
      id: 3,
      title: "Work-Life Harmony",
      description:
        "Fostering a balanced environment that values personal and professional boundaries.",
    },
    {
      id: 4,
      title: "Caring for Our People",
      description:
        "Providing a safe and supportive workplace with wellness programs and leave policies.",
    },
    {
      id: 5,
      title: "Positive Work Culture",
      description:
        "Promoting an engaging and uplifting environment to boost creativity and collaboration.",
    },
    {
      id: 6,
      title: "Growth-Oriented Approach",
      description:
        "Focusing on skill development and career growth through regular feedback and reviews.",
    },
  ];

  return (
    // <div className="bg-gradient-to-r from-purple-700 to-pink-400 text-white py-12 font-poppins">
    //   <div className="text-center mb-8">
    //     <h2 className="text-3xl font-bold uppercase">Why Join Us</h2>
    //   </div>
    //   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto px-4">
    //     {items.map((item) => (
    //       <div
    //         key={item.id}
    //         className="bg-gradient-to-r from-purple-600 to-purple-500 p-6 rounded-lg shadow-lg relative"
    //       >
    //         <span className="absolute top-3 right-3 text-4xl text-blue-300 font-bold opacity-50">
    //           {`0${item.id}`}
    //         </span>
    //         <h3 className="text-xl font-bold mb-2">{item.title}</h3>
    //         <p className="text-sm">{item.description}</p>
    //       </div>
    //     ))}
    //   </div>
    // </div>
    <div className='bg-[#EDEDE9] font-poppins'>
      <div className="text-center pt-8">
        <h2 className="text-3xl font-semibold uppercase">Why Join Us</h2>
      </div>
      <div className='py-4 pb-8 px-0 lg:px-[200px]' style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      
      {items.map((item) => (
        <div key={item.id} className="card">
          <p className="card-title">{item.title}</p>
          <p className="small-desc">{item.description}</p>
          <div className="go-corner">
            <div className="go-arrow">→</div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default WhyJoinUs;

