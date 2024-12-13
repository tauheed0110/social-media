import React, { useState } from 'react';
import './styles.css';
import { useSelector } from 'react-redux';

function SearchBar({postData, setPostData}) {
    const [input, setInput] = useState();
    const { posts, loading, error } = useSelector(state => state.postReducer);
    function handleChange(e){
      const inputValue = e.target.value;
      setInput(inputValue);
      if(inputValue === ""){
        setPostData(posts);
      }else{
        setPostData(postData.filter(post => post.title.toLowerCase().includes(inputValue.toLowerCase())));
      }
      
    }
  return (
    <div className='searchbar'>
      <h1>Social Media For Travellers</h1>
      <div className='input'>
        <i class="fa-solid fa-magnifying-glass" style={{color: 'gray'}}></i>
        <input type='text' placeholder='Search here' value={input} onChange={(e)=>handleChange(e)}/>
      </div>
    </div>
  );
}

export default SearchBar;