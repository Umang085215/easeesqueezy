import React, { useState, useEffect, useRef, Suspense } from "react";
import PreLoader from "../easeeSqueezyUser/components/loaders/PreLoader";

const LazyLoadSection = ({ children }) => {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="overflow-hidden">
      {isVisible ? (
        <Suspense fallback={<PreLoader />}>{children}</Suspense>
      ) : (
        <PreLoader />
      )}
    </div>
  );
};

export default LazyLoadSection;
