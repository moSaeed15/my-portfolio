'use client';
import { useEffect, useState } from 'react';
import { CardItem } from './ui/3DCard';
import ReactPortal from './ReactPortal';
import Image from 'next/image';

interface Props {
  gallery: string[];
}

const GalleryModal = ({ gallery }: Props) => {
  const [show, setShow] = useState<boolean>(false);
  const [loaded, setLoaded] = useState<boolean[]>([]);

  useEffect(() => {
    const closeGallery = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setShow(false);
      }
    };
    window.addEventListener('keydown', closeGallery);
    return () => {
      window.removeEventListener('keydown', closeGallery);
    };
  }, []);

  //disable scrolling when modal is open
  useEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [show]);

  const handleImageLoad = (index: number) => {
    setLoaded(prev => {
      const newLoaded = [...prev];
      newLoaded[index] = true;
      return newLoaded;
    });
  };

  return (
    <>
      <CardItem
        translateZ={20}
        as="button"
        onClick={() => {
          setShow(prev => !prev);
          setLoaded(new Array(gallery.length).fill(false)); // Reset loading state
        }}
        className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
      >
        View Gallery
      </CardItem>
      {show && (
        <ReactPortal wrapperID="react-portal-modal-container">
          <div
            className="fixed inset-0 z-40 bg-black bg-opacity-60 flex items-center justify-center"
            onClick={() => setShow(false)}
          >
            {/* Invisible layer to ensure the modal is centered */}

            {/* Modal Content */}
            <div
              className="relative z-50 bg-[rgb(4,7,29)]  text-black w-full max-w-6xl mx-4 p-6 rounded shadow-lg overflow-y-scroll max-h-[80vh]"
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={() => setShow(false)}
                className="absolute top-4 right-4 text-red-600 text-4xl px-1 py-px rounded mb-3  "
              >
                &times;
              </button>

              <div className="grid grid-cols-2 gap-5 mt-10">
                {gallery.map((img, idx) => (
                  <div key={idx} className="relative">
                    {!loaded[idx] && (
                      <div className="absolute inset-0 bg-gray-300 animate-pulse" />
                    )}
                    <Image
                      width={1500}
                      height={1000}
                      src={img}
                      alt="gallery"
                      className={`w-full object-cover ${
                        !loaded[idx] ? 'opacity-0' : 'opacity-100'
                      } transition-opacity duration-300`}
                      onLoadingComplete={() => handleImageLoad(idx)}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ReactPortal>
      )}{' '}
    </>
  );
};

export default GalleryModal;
