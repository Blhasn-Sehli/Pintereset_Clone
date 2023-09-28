import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Nav } from './compnents/Nav.jsx';
import { useEffect, useState } from 'react';
import axios from "axios";
import { Allpins } from './compnents/Allpins';
import { Pindetails } from './compnents/Pindetails';
import { CreatePin } from './compnents/CreatePin';
function App() {
  const [pins, setPins] = useState([])
  const [pindetalis, setPindtails] = useState({})
  const [categories, setCategories] = useState({})
  const [view, setView] = useState("allpins")
  const [update, setUpdate] = useState(true)
  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/pins/getAll")
        setPins(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetch()
  }, [update])
  const handelClik = async (pinId, pinCategory) => {

    console.log(pinId,pinCategory);
    try {
      const response = await axios.get(`http://localhost:3000/api/pins/${pinId}`)
      const res = await axios.get(`http://localhost:3000/api/categories/${pinCategory}`)
      
      setCategories(res.data)
      setPindtails(response.data);
    } catch (error) {
      console.log(error);
    }
    setView("pindetalis")
  }

  const handleSearch = async (query) => {
    try {
      console.log(query);
      const response = await axios.get(`http://localhost:3000/api/pins/by/${query}`)
      setPins(response.data)
    } catch (error) {
      console.log(error);
    }
  }
  const changeView = (view) => {
    if (view === "allpins") {
      setUpdate(!update)
      setView(view)

    } else {
      setView(view)
    }
  }
  const handlPost = async (pin) => {
    console.log("insise handle psost", pin);
    try {
      const response = await axios.post("http://localhost:3000/api/pins/add", pin)
      console.log(response.data);
      setUpdate(!update)
      setView("allpins")
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div >
      <Nav handleSearch={handleSearch} view={view} changeView={changeView} />
      {view === "allpins" ? <Allpins handelClik={handelClik} pins={pins} /> : view === "pindetalis" ? <Pindetails handelClik={handelClik} categories={categories} pindetalis={pindetalis} /> : < CreatePin handlPost={handlPost} />}
    </div >
  );
}

export default App;
