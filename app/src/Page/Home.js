import React, { useEffect, useState } from 'react';
import Header from '../component/Header';
import SearchBar from '../component/SearchBar';
import Post from '../component/Post';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../state/postsSlice';

const Home = () => {
    const dispatch = useDispatch();
    const { posts, loading, error } = useSelector(state => state.postReducer);

    useEffect(() => {
        dispatch(fetchPosts());
    }, []);

    return (
        <div>
            <Header detailPage={false}/>
            <SearchBar />
            <div className='post-container'>
                {
                    posts && posts.map((post, index) => <Post post={post} fullwidth={false}/>)
                }
            </div>
        </div>
    );
}

export default Home;
