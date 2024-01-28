import { useRef,useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import './index.css'

function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        // Check if there is overflow content to the left
        setShowLeftArrow(containerRef.current.scrollLeft > 0);
        // Check if there is overflow content to the right
        setShowRightArrow(
          containerRef.current.scrollLeft <
            containerRef.current.scrollWidth - containerRef.current.clientWidth
        );
      }
    };

    // Attach the handleScroll function to the scroll event
    if (containerRef.current) {
      containerRef.current.addEventListener('scroll', handleScroll);
    }
    handleScroll();

    // Cleanup: Remove the scroll event listener when the component unmounts
    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft -= 350; // Adjust the scroll distance as needed
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += 350; // Adjust the scroll distance as needed
    }
  };

  return (
    <div className='services-container'>  
      <h1 className='service-heading'>Services</h1>
      <p className='service-para'>Little text about services </p>
      <div className='services-items' ref={containerRef}>
        
      <div className="services-item relative h-64 transition-all duration-300 hover:bg-gradient-to-t hover:from-blue-500 hover:to-purple-500">
          <img className="h-[300px] w-auto rounded-[25px] p-2 service-image" src="./images/service1.png" alt="dummy-image"/>
          <button className="services-item-btn">View More..</button>
      </div>
      
      <div className="services-item relative h-64 transition-all duration-300 hover:bg-gradient-to-t hover:from-blue-500 hover:to-purple-500">
          <img className=" h-[300px] w-auto rounded-[25px] p-2 service-image" src="./images/service2.png" alt="dummy-image"/>
          <Link to='/accomadation'>
            <button className="services-item-btn">View More..</button>
          </Link>
      </div>
     
      
      <div className="services-item relative h-64 transition-all duration-300 hover:bg-gradient-to-t hover:from-blue-500 hover:to-purple-500">
          <img className="h-[300px] w-auto rounded-[25px] p-2 service-image" src="./images/service3.png" alt="dummy-image"/>
          <button className="services-item-btn">View More..</button>
      </div>
      

      </div>
      <div className='controls'>
        {/* Left arrow control */}
     <div>
     {showLeftArrow && <div className="control-style"
        onClick={scrollLeft}
      >
       &lt;
      </div>
      }
     </div>
               
      {/* Right arrow control */}
      <div>
      {showRightArrow && <div className="control-style"
        onClick={scrollRight}>
       &gt;
      </div>}
      </div>
      </div>
    </div>
  )
}

export default Services