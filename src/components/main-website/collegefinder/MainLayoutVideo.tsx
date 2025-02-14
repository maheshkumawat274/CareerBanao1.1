
import { Outlet } from 'react-router-dom';
import VideoFinder from './VideoFinder';
import FinderContent from './FinderContent';
import ScrollTop from '../ScrollTop';
import PrivacyForm from '../privacypolicy/PrivacyForm';
import CollegeCards from '../homePage/CollegeCards.';
import Loader from '../Loader';

const MainLayoutVideo: React.FC = () => {
  
  return (
    <>
    <Loader>
      <div className='font-poppins'>
        <ScrollTop />
        <VideoFinder />
        <div className="relative">
          <Outlet />
        </div>
        <FinderContent />
        <div className='px-4'><CollegeCards /></div>
        <PrivacyForm />
      </div>
    </Loader>
      </>
  );
};

export default MainLayoutVideo;