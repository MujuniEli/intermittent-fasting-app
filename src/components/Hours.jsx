import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


const TimeCard = ({ label }) => {
  return (
    <div className="time-card">
      {label}
    </div>
  );
};

const Hours = () => {
          const hours = Array.from({ length: 24 }, (_, i) => i + 1);
            
  return (
    <main>
        <h3>Choose your fasting hours Schedule</h3>
        
            <input type="checkbox" id="16/8Schedule" />
            <label htmlFor="16/8Schedule">16/8 Schedule</label> <span className="info-symbol">&#8505;</span>
            <br />
            <input type="checkbox" id="14/10Schedule" />
            <label htmlFor="14/10Schedule">14/10 Schedule</label> <span className="info-symbol">&#8505;</span>

            <div className="slider-container">
                    <Carousel
                      showArrows={true}
                      showThumbs={false}
                      renderArrowPrev={(clickHandler, hasPrev, label) =>
                        hasPrev && (
                          <button onClick={clickHandler} className="slider-arrow prev-arrow">
                            &lt;
                          </button>
                        )
                      }
                      renderArrowNext={(clickHandler, hasNext, label) =>
                        hasNext && (
                          <button onClick={clickHandler} className="slider-arrow next-arrow">
                            &gt;
                          </button>
                        )
                      }
                    >
                      {hours.map(hour => (
                        <TimeCard key={hour} label={`${hour % 12 || 12} ${hour < 12 ? 'AM' : 'PM'}`} />
                      ))}
                    </Carousel>
              </div>
      

    </main>
  )
}

export default Hours