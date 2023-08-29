

const Hours = () => {

            const hours = ['12am', '1am', '2am', '3am', '4am', '5am', '6am', '7am', '8am', '9am', '10am', '11am', '12pm']


  return (
    <main>
        <h3>Choose your fasting hours Schedule</h3>
        
            <input type="checkbox" id="16/8Schedule" />
            <label htmlFor="16/8Schedule">16/8 Schedule</label> <span className="info-symbol">&#8505;</span>
            <br />
            <input type="checkbox" id="14/10Schedule" />
            <label htmlFor="14/10Schedule">14/10 Schedule</label> <span className="info-symbol">&#8505;</span>

              <div className="card">
                {hours.map((item) => (
                  item
                ))}
              </div>
      

    </main>
  )
}

export default Hours