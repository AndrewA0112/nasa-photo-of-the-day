import React, {useState, useEffect} from "react";
import bulma from 'bulma'
import "./App.scss";

import axios from 'axios'
import Header from "./components/Header";
import Media from "./components/Media";
import Text from "./components/Text";

function App() {
  const [apod, setApod] = useState([]);
  const [apiDate, setApiDate] = useState('2019-07-15');
  const [inputDate, setInputDate] = useState('');
  const apiKey = process.env.REACT_APP_NASA_API_KEY;

  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${apiDate}`)
      .then(response => {
        setApod(response.data);
      })
  }, [apiDate]);

  function handleDateChange(event) {
    setInputDate(event.target.value)
  }

  return (
    <div className="App">
      <Header title = {apod.title}></Header>
      <div className='content'>
        <Media mediaUrl = {apod.url} mediaType = {apod.media_type} ></Media>
        <Text explanation = {apod.explanation} date = {apod.date} copyright = {apod.copyright} />
      </div>
      <input className='input' type='date' onChange= {handleDateChange}></input>
      <button className='button' onClick = {() => setApiDate(inputDate)}>Submit</button>
    </div>
  );
}

export default App;
