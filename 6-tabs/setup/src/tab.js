import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'
function App() {
  // const [loading, setLoading] = useState(true)
  const [city, setCity] = useState([])
  const [value, setValue] = useState(0) //value = index
  const items = [
    {title: 'paris', desc: '1', key: 'Lorem'},
    {title: 'tokyo', desc: '2', key: 'Ipsum'},
    {title: 'london', desc: '3', key: 'Dolorum'},
  ]

  // const fetchJobs = async () => {
  //   const reponse = await fetch(url)
  //   const newJobs = await reponse.json()
  //   setJobs(newJobs)
  //   setLoading(false)
  // }
  // useEffect(() => {
  //   fetchJobs()
  // }, [])
  // if (loading) {
  //   return (
  //     <section className="section loading">
  //       <h1>Loading...</h1>
  //     </section>
  //   )
  // }
  const {title, desc} = items[value]
  console.log(items[value]);
  // const { company, dates, duties, title } = jobs[value]
  return (
    <section className="section">
      <div className="title">
        <h2>experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        {/* btn container */}
        <div className="btn-container">
          {items.map((item, index) => {
            return (
              <button
                key={item.id}
                onClick={() => setValue(index)}
                className={`job-btn ${index === value && 'active-btn'}`}
              >
                {item.title}
              </button>
            )
          })}
        </div>
        {/* job info */}
        <article className="job-info">
          <h3>{desc}{title} </h3>
          {items.map((item, index) => {
            return (
              <div key={index} className="job-desc">
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                <p>{item.title}</p>
                <p>{item.key}</p>
              </div>
            )
          })}
        </article>
      </div>
    </section>
  )
}

export default App
