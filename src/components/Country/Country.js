import React from 'react';

const Country = (props) => {
     const {name , population , region, flag} = props.country;
     const flagStyle = {height:'80px'}
     const countryStyle ={border :'2px solid red',margin:'10px',padding:'10px'}
    const handleAddCountry = props.handleAddCountry
     return (
        <div style={countryStyle}>
          
           <img style={flagStyle} src={flag} alt=""/>
           <h4>  {name} </h4>
           <p>population:  {population}</p>
           <p><small>Region:{region}</small></p>
           <button onClick={()=> handleAddCountry(props.country)}>Add country</button>
    
        </div>
    );
};

export default Country;