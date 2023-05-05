import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


function ShowDetails() {
  const {id} = useParams();
  const [show, setShow] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const[formData, setFormData] = useState({
        showName: "",
        showTime: "",
        numberOfTickets: 1,
        ticketPrice: 100,
      });
  useEffect(() => {
    async function fetchShow() {
      const response = await fetch(`https://api.tvmaze.com/shows/${id}?embed=cast`);
      const data = await response.json();
      setShow(data);
    }
    fetchShow();
  },[id]); 
  if (!show)  return <div>Loading...</div>; 
  const handleChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = event =>{
    event.preventDefault();
    console.log(formData);
  };
  const {name, summary} = show;
  return (
    <div>
      <h1 className='mini-head'>{name}</h1>
      <div className='summary' dangerouslySetInnerHTML={{ __html: summary}}/>
      <button className='btn' onClick={() => setShowForm(true)}>Book Ticket</button>
      {showForm && (
        <form className='list' onSubmit={handleSubmit}>
        <h2 className='subHead'>Book Ticket for {name}</h2>
        <label className='text'>
          Show Name:
          <input type='text' name='showName' value={name} onChange={handleChange} readOnly/>
        </label>
        <br/>

        <label className='text'>
          Show Time:
          <input type='text' name='showTime' value={formData.showTime} onChange={handleChange}/>
        </label>
        <br/>

        <label className='text'>
          Number of Tickets:
          <input type='number' name='numberOfTickets' value={formData.numberOfTickets} onChange={handleChange} min="1" />
        </label>
        <br/>

        <label className='text'>
          Ticket Price:
          <input type='number' name='ticketPrice' value={formData.ticketPrice} onChange={handleChange} readOnly/>
        </label>
        <br/>

        <button className='btn-btn' type='submit'>Book Now</button>

      </form>

      )}
    </div>
  );

}


export default ShowDetails;
