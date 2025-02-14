import React from 'react';
import Slider from 'react-slick';
import { FaMapMarkerAlt, FaStar, FaUniversity, FaAward } from 'react-icons/fa';
import { MdSchool } from 'react-icons/md';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// Dummy data array for 20 colleges (can be replaced with API data)
const colleges = [
  {
    id: 1,
    name: 'Amity University',
    image: './logo/unnamed.jpg',
    logo: 'https://seekvectors.com/files/download/Amity%20University%20-04.png',
    highlights: ['Ranked #1 in Engineering', '50+ Programs', '90% Placement Rate'],
    location: ' University in North India',
    route: '/UniversityLandingPage'
  },
  
{
  id: 2,
  name: 'Sanskriti University',
  image: 'https://lh3.googleusercontent.com/p/AF1QipOwH2v4U43rzXiYC94YOtnxaa6Afzf52d_6Etvr=s1360-w1360-h1020',
  logo: 'https://upload.wikimedia.org/wikipedia/en/a/a9/Sanskriti_University_logo.png',
  highlights: ['World-Class Faculty', 'State-of-the-art Campus', '85% Placement Rate'],
  location: 'University in Mathura, Uttar Pradesh',
  route: '/UniversityLandingPage'
},
{
  id: 1,
  name: 'Amity University',
  image: './logo/unnamed.jpg',
  logo: 'https://seekvectors.com/files/download/Amity%20University%20-04.png',
  highlights: ['Ranked #1 in Engineering', '50+ Programs', '90% Placement Rate'],
  location: ' University in North India',
  route: '/UniversityLandingPage'
},
{
  id: 2,
  name: 'Sanskriti University',
  image: 'https://lh3.googleusercontent.com/p/AF1QipOwH2v4U43rzXiYC94YOtnxaa6Afzf52d_6Etvr=s1360-w1360-h1020',
  logo: 'https://upload.wikimedia.org/wikipedia/en/a/a9/Sanskriti_University_logo.png',
  highlights: ['World-Class Faculty', 'State-of-the-art Campus', '85% Placement Rate'],
  location: 'University in Mathura, Uttar Pradesh',
  route: '/UniversityLandingPage'
},
{
  id: 1,
  name: 'Amity University',
  image: './logo/unnamed.jpg',
  logo: 'https://seekvectors.com/files/download/Amity%20University%20-04.png',
  highlights: ['Ranked #1 in Engineering', '50+ Programs', '90% Placement Rate'],
  location: ' University in North India',
  route: '/UniversityLandingPage'
},
{
  id: 2,
  name: 'Sanskriti University',
  image: 'https://lh3.googleusercontent.com/p/AF1QipOwH2v4U43rzXiYC94YOtnxaa6Afzf52d_6Etvr=s1360-w1360-h1020',
  logo: 'https://upload.wikimedia.org/wikipedia/en/a/a9/Sanskriti_University_logo.png',
  highlights: ['World-Class Faculty', 'State-of-the-art Campus', '85% Placement Rate'],
  location: 'University in Mathura, Uttar Pradesh',
  route: '/UniversityLandingPage'
},
{
  id: 1,
  name: 'Amity University',
  image: './logo/unnamed.jpg',
  logo: 'https://seekvectors.com/files/download/Amity%20University%20-04.png',
  highlights: ['Ranked #1 in Engineering', '50+ Programs', '90% Placement Rate'],
  location: ' University in North India',
  route: '/UniversityLandingPage'
},
{
  id: 2,
  name: 'Sanskriti University',
  image: 'https://lh3.googleusercontent.com/p/AF1QipOwH2v4U43rzXiYC94YOtnxaa6Afzf52d_6Etvr=s1360-w1360-h1020',
  logo: 'https://upload.wikimedia.org/wikipedia/en/a/a9/Sanskriti_University_logo.png',
  highlights: ['World-Class Faculty', 'State-of-the-art Campus', '85% Placement Rate'],
  location: 'University in Mathura, Uttar Pradesh',
  route: '/UniversityLandingPage'
}
];

// const [colleges, setColleges] = useState([]);

//   useEffect(() => {
//     axios.get("http://localhost:8080/api/universities")
//       .then(response => setColleges(response.data))
//       .catch(error => console.error("Error fetching data:", error));
//   }, []);

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplaySpeed: 2000,
  autoplay: true,
  pauseOnHover: true,
  arrows:false,
  responsive: [
    {
      breakpoint: 1370,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 870,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 580,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

const CollegeCards: React.FC = () => {
  return (
    <div className="bg-[#EDEDE9] font-poppins mt-14 px-0 sm:px-4">
      <h1 className="text-2xl sm:text-3xl font-semibold text-center text-gray-800 mb-8">
        <MdSchool className="inline-block text-primaryBtn text-5xl mr-2" />
        Top Colleges & Universities
      </h1>
      <Slider {...settings} className="mx-4">
        {colleges.map((college) => (
          <div key={college.id} className="px-2 pt-5 pb-5">
            <div className="bg-white h-[55vh] shadow-lg rounded-lg overflow-hidden transform transition hover:scale-105 hover:shadow-2xl">
              <div className="relative">
                <img src={college.image} alt={`${college.name} Campus`} className="w-full h-40 object-cover" />
                <img src={college.logo} alt={`${college.name} Logo`} className="absolute top-3 left-3 w-12 h-12 rounded-full border-2 border-white shadow-md" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaUniversity className="text-primaryBtn mr-2" />
                  {college.name}
                </h3>
                <p className="text-sm text-gray-600 flex items-center mb-3">
                  <FaMapMarkerAlt className="text-red-500 mr-2" /> {college.location}
                </p>
                <ul className="text-sm text-gray-600 space-y-1 mb-3">
                  {college.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-center">
                      <FaStar className="text-yellow-500 mr-2" />
                      {highlight}
                    </li>
                  ))}
                </ul>
                <Link to={college.route}>
                  <button className="bg-primaryBtn hover:bg-hoverBtn text-white py-2 px-4 rounded-lg text-sm font-medium w-full transition">
                    <FaAward className="inline-block mr-2" /> Visit More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default CollegeCards;


// const CollegeCards: React.FC = () => {
//   return (
//     <div className="bg-[#EDEDE9] font-poppins mt-14 px-0 sm:px-4">
//       <h1 className="text-2xl sm:text-3xl font-semibold text-center text-gray-800 mb-8">
//         <MdSchool className="inline-block text-primaryBtn text-5xl mr-2" />
//         Top Colleges & Universities
//       </h1>
//       <div className="overflow-hidden scrollbar-no mx-0 pb-3 sm:mx-4">
//         <div className="flex space-x-4 w-max">
//           {colleges.map((college) => (
//             <div
//               key={college.id}
//               className="bg-white shadow-lg rounded-lg overflow-hidden transform transition hover:scale-105 hover:shadow-2xl w-64 flex-shrink-0">
//               <div className="relative">
//                 <img
//                   src={college.image}
//                   alt={`${college.name} Campus`}
//                   className="w-full h-40 object-cover"
//                 />
//                 <img
//                   src={college.logo}
//                   alt={`${college.name} Logo`}
//                   className="absolute top-3 left-3 w-12 h-12 rounded-full border-2 border-white shadow-md"
//                 />
//               </div>
//               <div className="p-4">
//                 <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
//                   <FaUniversity className="text-primaryBtn mr-2" />
//                   {college.name}
//                 </h3>
//                 <p className="text-sm text-gray-600 flex items-center mb-3">
//                   <FaMapMarkerAlt className="text-red-500 mr-2" /> {college.location}
//                 </p>
//                 <ul className="text-sm text-gray-600 space-y-1 mb-3">
//                   {college.highlights.map((highlight, index) => (
//                     <li key={index} className="flex items-center">
//                       <FaStar className="text-yellow-500 mr-2" />
//                       {highlight}
//                     </li>
//                   ))}
//                 </ul>
//                 <Link to={college.route}>
//                  <button className="bg-primaryBtn hover:bg-hoverBtn  text-white py-2 px-4 rounded-lg text-sm font-medium w-full  transition">
//                    <FaAward className="inline-block mr-2" /> Visit More
//                  </button>
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CollegeCards;
