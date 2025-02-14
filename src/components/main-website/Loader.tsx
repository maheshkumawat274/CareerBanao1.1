import { useState, useEffect } from "react";

const Loader = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const images = document.querySelectorAll("img"); // Sabhi images ko select karo
    let loadedCount = 0;
    
    const checkImagesLoaded = () => {
      loadedCount++;
      if (loadedCount === images.length) {
        setIsLoading(false); // Sabhi images load ho gayi, ab loader hata do
      }
    };

    if (images.length === 0) {
      setIsLoading(false); // Agar koi image nahi hai toh loader hata do
    } else {
      images.forEach((img) => {
        if (img.complete) {
          checkImagesLoaded(); // Agar image pehle se load hai toh count badhao
        } else {
          img.addEventListener("load", checkImagesLoaded); // Image load hone par count badhao
        }
      });
    }

    return () => {
      images.forEach((img) => img.removeEventListener("load", checkImagesLoaded));
    };
  }, []);

  return isLoading ? (
    <div className="flex-col gap-4 w-full flex items-center justify-center h-screen">
      <div className="w-28 h-28 border-8 text-purple-700 text-4xl animate-spin border-gray-300 flex items-center justify-center border-t-purple-700 rounded-full">
        <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em" className="animate-ping">
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"></path>
        </svg>
      </div>
    </div>
  ) : (
    <>{children}</>
  );
};

export default Loader;
