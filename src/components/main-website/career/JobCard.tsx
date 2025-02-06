// import { Link } from "react-router-dom";

import { Link } from "react-router-dom";

// function JobCard({ data }: any) {
//   return (
//     <div className="JobCard">
//       <div className="jobcard-container">
//         <div className="jobcard-left">
//           <h2>{data.job_title}</h2>
//           <p>
//             Designation : <span>{data.job_designation}</span>
//           </p>
//           <br />
//           <p>
//             Total Experience : <span>{data.job_experience}</span>
//           </p>
//           <p>
//             Industry : <span>{data.job_Industry}</span>
//           </p>
//         </div>

//         <div className="jobcard-center">
//           <p>Job Type : <span>{data.job_type}</span></p><br />
//           <p>Address : <span>{data.job_address}</span></p>
//           <p>Published : <span>{data.job_published}</span></p>
//         </div>
//         <div className="jobcard-right">
//           <button className="rounded-3xl hover:bg-pink-500 bg-purple-700 text-sm py-[7px] px-[12px] text-white "><Link to={`/career/jobapply/${data.job_id}`}>Apply Now</Link></button>
//         </div>
//       </div>
//     </div>
//   );

// }

// export default JobCard;

const JobCard = ({ data }: any) => {

  return (
    <div className="gap-6 p-6">
        <div
          className="bg-white shadow-lg rounded-lg p-6 w-80 transform transition-transform hover:scale-105 hover:shadow-2xl"
        >
          <h3 className="text-lg font-bold text-gray-800 mb-2">{data.job_title}</h3>
          <p className="text-sm text-gray-600 mb-1">
            <strong>Designation:</strong> {data.job_designation}
          </p>
          <p className="text-sm text-gray-600 mb-1">
            <strong>Total Experience:</strong> {data.job_experience}
          </p>
          <p className="text-sm text-gray-600 mb-1">
            <strong>Industry:</strong> {data.job_Industry}
          </p>
          <p className="text-sm text-gray-600 mb-1">
            <strong>Job Type:</strong> {data.job_type}
          </p>
          <p className="text-sm text-gray-600 mb-1">
            <strong>Address:</strong> {data.job_address}
          </p>
          <p className="text-sm text-gray-600 mb-4">
            <strong>Published:</strong> {data.job_published}
          </p>
          <Link to={`/career/jobapply/${data.job_id}`}>
          <button className="bg-primaryBtn text-white py-2 px-4 rounded-lg hover:bg-hoverBtn transition-colors">
            Apply Now
          </button>
          </Link>
        </div>
    </div>
  );
};

export default JobCard;

