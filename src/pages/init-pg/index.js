import React, { useState, useEffect } from 'react';
import api from './../../services/api';

import './../templates/style-main.css';
import Navside from './../templates/header/';


import DevForm from './../DevForm/index';
import DevItem from './../DevItem/index';


export default function InitPg() {
    const [devs, setDevs] = useState([]);
  
    useEffect(() => {
      async function loadDevs() {
        const response = await api.get('/devs');
  
        setDevs(response.data);
      }
  
      loadDevs();
    }, []);
  
    async function handleAddDev(data) {
      let response = await api.post('/devs', data)
  
      setDevs([...devs, response.data]);
    }
  
    return (

      <>

        <Navside />
                
          <aside>
            
            <strong>Cadastrar</strong>
          
            <DevForm onSubmit={handleAddDev} />
        
          </aside>
  
          <main>
          
            <ul>
          
              {devs.map(dev => (
                <DevItem key={dev._id} dev={dev} />
              ))}
          
            </ul>
          </main>

      </>
    );
  }  