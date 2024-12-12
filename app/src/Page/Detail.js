import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../component/Header';
import { useSelector } from 'react-redux';
import Post from '../component/Post';

const Detail = () => {
  const { id } = useParams();
  const [current, setCurrent] = useState(null);
  const [filteredPost, setFilteredPost] = useState(null);
  const { posts, loading, error } = useSelector(state => state.postReducer)

  useEffect(() => {
    if (id) {
      setCurrent(posts.find(post => post.id ==id));
      setFilteredPost(posts.filter(post => post.id != id));
    }

  }, [id])
  return (
    <div>
      <Header detailPage={true}/>
      {
        current && (
          <>
            <h1 style={{margin: '10px 20px'}}>Post Number: {id}</h1>
            <div className='fullwidthCard'>
                <div style={{width:'420px'}}><img src={`https://picsum.photos/200?random=${id}`}/></div>
                <div>
                  <div style={{display:'flex', gap:'20px', marginBottom: "20px"}}>
                    <button style={{padding: '7px 20px', backgroundColor: '#F05A22', color:"white", border:'none', borderRadius: '7px'}}>Detail</button>
                    <h4>user info</h4>
                  </div>
                    <h4>{current.title}</h4>
                    <p>{current.body}</p>
                </div>
            </div>
          </>
        )}
      <h1 style={{marginLeft: '20px'}}>More Posts</h1>
      <div className='post-container'>
        {
          filteredPost && filteredPost.map((post, index) => {
            return <Post post={post} fullwidth={false} />
          })
        }
      </div>
    </div>
  );
}

export default Detail;
