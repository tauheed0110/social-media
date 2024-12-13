import React, { useEffect, useState } from 'react';
import Header from '../component/Header';
import SearchBar from '../component/SearchBar';
import Post from '../component/Post';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../state/postsSlice';

const Home = () => {
    const dispatch = useDispatch();
    const { posts, loading, error } = useSelector(state => state.postReducer);
    const [postData, setPostData]  = useState(null);

    useEffect(() => {
        dispatch(fetchPosts());
        if(posts){
            setPostData(posts);
        }
    }, []);

    return (
        <div>
            <Header detailPage={false}/>
            {
                postData 
                && 
                <>
                    <SearchBar postData={postData} setPostData={setPostData}/>
                    <div className='post-container'>
                        {
                            postData.map((post, index) => <Post post={post} postData={postData} setPostData={setPostData}/>)
                        }
                    </div>
                </>
            }
        </div>
    );
}

export default Home;
