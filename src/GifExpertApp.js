import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {
    //const categories = ['One Punch','Samurai X','Dragon Ball'];
    const [category, setCategory] = useState(['Dragon Ball']);

    // const handleAdd = ()=>{
    //         //useState.setcategory/(newCategory);
    //         setCategory(cats => [...cats, 'Hunter X']);
    // }
  return (
  <>
  <h1>GifExpertApp</h1>
  <AddCategory setCategory={ setCategory }/>
  <hr/>


  <ol>
      {
          category.map(category=> (
               <GifGrid 
               key={category}
               category = { category }/> 
  ))
      }
  </ol>
  </>);
};

export default GifExpertApp;



