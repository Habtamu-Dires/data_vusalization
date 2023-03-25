import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import {Search} from 'react-bootstrap-icons'
import { Navigate, useNavigate } from 'react-router-dom'
import Graph from './GraphComponent';
import Header from './HeaderComponent';
import About from './AboutComponent';

function Home(props) {
    var item = '';
    const [selectedItem, setItem] = useState('');
    const [options, setOptions] = useState('');

    const baseUrl = process.env.REACT_APP_SERVER_URL;
    //fetch data from server
    useEffect(()=>{
        fetch(baseUrl +'/elements')
        .then(response => response.json())
        .then(response=>{
            console.log(response.response) 
            const elements = response.response;
            console.log(elements)
            const option = elements.map(op => {
                return(
                    {value: op, label: op.title}
                )
            })
            setOptions(option);
        }  
        )
        .catch(err => console.log(err));
         
    }, [])

    const customStyles = {
        option:(base, state) => ({
            ...base,
            color: 'white',
            backgroundColor: 'black',
            "&:hover": {
                backgroundColor: state.isFocused ? '#4BC4E2' : 'black',   
            },
            backgroundColor: state.isSelected ? '#307181' : 'black',            
        }),
        control: (base, state) => ({
          ...base,    
          background: "inherit",
          borderRadius: state.isFocused ? "3px 3px 0 0" : 3,
          boxShadow: null,
          borderStyle: 'none',
          "&:hover": {
            borderColor: state.isFocused ? null : null
          }
        }),
        menu: (base) => ({
          ...base,
          fontFamily: 'sans-serif',
          fontSize: '18px',
          borderRadius: "30px",
          marginTop: 0,
                
        }),
        menuList: (base, state) => ({
          ...base,
          padding: 0,
          borderRadius: '30px',
          color: 'white',
          fontSize: '20px'
        }),
        singleValue: provided => ({
            ...provided,
            color: 'white',
            fontSize: '20px'
          }),
        input: (base, state) => ({
            ...base,
            fontFamily: 'sans-serif !important',
            fontSize: '18px',
            color: 'white'            
        })  
      };

    const MyComponent = () => (
        <Select options={options} className='col-11'
            styles={customStyles} onChange={e => select_change(e)}
            />
    )

    //onchange
    function select_change (e) {
        document.querySelector('.search-button').classList.remove('d-none');
        item = e.value;        
    }
    //show graph
    const show_graph = () => {
        if(item !== '') {
            console.log(item)
            document.querySelector('.search-button').classList.add('d-none');
            setItem(item);
        }         
    }
     if(!selectedItem){
        return(
            <>
            <Header setItem={setItem} />
            <div className="home-body d-flex align-items-center">
                <div className="container">
                    <div className="d-flex justify-content-center">
                        <h1 style={{fontSize: 40, fontWeight: 'bold'}}>Visualize Ethiopia</h1>
                    </div>
                    <div className="d-flex justify-content-center">
                        <p style={{fontSize: 18}}>See different facts about Ethiopia using graphs</p>
                    </div>                
                    <div className="d-flex justify-content-center">
                        <div className='select-field row'>
                            <Search className='col-1 mt-2' size={24}/>
                            <MyComponent />
                        </div>
                                      
                    </div>
                    
                    <div className="d-flex justify-content-center mt-3">
                        <button type="button" onClick={show_graph} className="search-button d-none">Show Graph</button>
                    </div>  
                
                </div>         
            </div>
            </>
            
        );
     } else if(selectedItem === 'aboutPage'){
        return(
            <>
            <Header setItem={setItem} />
            <About />
            </>
        )
     } else {
        return(
            <>
            <Header setItem={setItem} />
            <Graph item={selectedItem}/>
            </>            
        )
     }    
}

export default Home;
