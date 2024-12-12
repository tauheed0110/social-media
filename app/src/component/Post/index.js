import React from 'react';
import './styles.css';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const posts = JSON.parse(localStorage.getItem('posts'));

function Post({post, fullwidth}) {
    const navigate = useNavigate();
    function handleClick(id){
        navigate(`/item/${id}`);
    }
  return (
    <div className={fullwidth? 'maxCard': 'card'}>
      <img src={`https://picsum.photos/200?random=${post.id}`}/>
      <h4>{post.title}</h4>
      <div className='flexItem'>
        <p>{post.body.substring(0, 130)}...<span style={{color: '#F05A22', fontWeight: 'bold'}}>Read more</span></p>
        <div className='iconBtn' onClick={()=>{handleClick(post.id)}}>
            <i class="fa-solid fa-chevron-right"></i>
        </div>
      </div>
    </div>
  );
}

export default Post;

// 