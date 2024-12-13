import React from 'react';
import './styles.css';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const posts = JSON.parse(localStorage.getItem('posts'));

function Post({post, postData, setPostData}) {
    const navigate = useNavigate();
    function handleClick(id){
        navigate(`/item/${id}`);
    }
    function handleReadmoreClick(id){
      setPostData(postData.map(post => {
        if(post.id == id){
          return {...post, fullText: true};
        }
        return post;
      }))
    }
  return (
    <div className={'card'}>
      <img src={`https://picsum.photos/200?random=${post.id}`}/>
      <h4>{post.title}</h4>
      <div className='flexItem'>
        {
          (post.fullText && post.fullText == true) ? 
          <p>{post.body}</p> : 
          <p>{post.body.substring(0, 130)}...<span style={{color: '#F05A22', fontWeight: 'bold', cursor:'pointer'}} onClick={()=>handleReadmoreClick(post.id)}>Read more</span></p>
        }
        <div className='iconBtn' onClick={()=>{handleClick(post.id)}}>
            <i class="fa-solid fa-chevron-right"></i>
        </div>
      </div>
    </div>
  );
}

export default Post;

// 