




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

            <div className="card">
              {hours.map((hr) => (
                hr
              ))}
            </div>

    </main>
  )
}

export default Hours