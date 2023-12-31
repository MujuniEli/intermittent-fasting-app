
import Swiper from "swiper";
import { Navigation } from 'swiper/modules'


const getHours = () => {
  let hours = [];

  for (let i = 0; i < 24; i++) {
    let hour = i % 12;
    let suffix = i < 12 ? "AM" : "PM";

    if (hour === 0) {
      hour = 12;
    }
    hours.push(hour + " " + suffix);
  }

  return hours;
};

const displayHours = getHours();

const swiper = new Swiper('.swiper', {
  modules: [Navigation],
  direction: 'vertical',
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const Hours = () => {
 

  const hourCards = displayHours.map((hour) => (
    <div className="swiper-slide" key={hour}>
      <h4 className="solo-card">{hour}</h4>
    </div>
  ));

  return (
    <main>
      <h3>Choose your fasting hours Schedule</h3>
      <div className="schedules">
        <input type="checkbox" id="16/8Schedule" />
        <label htmlFor="16/8Schedule">16/8 Schedule</label>{" "}
        <span className="info-symbol">&#8505;</span>
      </div>

      <div className="schedules">
        <input type="checkbox" id="14/10Schedule" />
        <label htmlFor="14/10Schedule">14/10 Schedule</label>{" "}
        <span className="info-symbol">&#8505;</span>
      </div>

      <div className="swiper">
      <div className="swiper-wrapper slider-container">
      
      <div className="swiper-button-prev">
      <button >Previous</button>
      </div>
        
        {hourCards}
            
       <div className="swiper-button-next">
       <button>Next</button>
       </div>
      
        
      </div>
      </div>
    </main>
  );
};

export default Hours;
