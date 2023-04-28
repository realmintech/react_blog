import React, { useState, useEffect } from 'react';
import './Home.css';

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.example.com/posts')
      .then(res => res.json())
      .then(data => {
        setPosts(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
        setLoading(false);
      });
  }, []);

  const handleSearch = event => {
    setSearchTerm(event.target.value);
  };

  const filteredPosts = posts.filter(post =>
    post.title && post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  console.log(filteredPosts)
  return (
    <>
      <div className='homeSection'>
        <b>The blog</b>
        <h1>Writings from our team</h1>
        <p>The latest industry news, interview, technologies, and resources.</p>
      </div>
      <div className='bgSection'>
        <div className='bgContent'>
          <p>Asynchronous Function</p>
          <h4>We use Async to improve user experience.</h4>
          <p>Writing from our team can be the best thing that will happen to a firm.</p>
        </div>
      </div>
      <div>
        <input type='text' placeholder='Search.....' onChange={handleSearch} />
      </div>
      {loading ? (
        <div>Loading...</div>
      ) : (
       filteredPosts.map(post => (
          <div className='card' key={post.id} style={{ width: '18rem' }}>
            <img src={post.imageUrl} className='card-img-top' alt='...' />
            <div className='card-body'>
              <h5 className='card-title'>{post.title}</h5>
              <p className='card-text'>
                {post.description}
              </p>
              <button id='btn_blog' className='btn btn-danger'>
                Read More
              </button>
            </div>
          </div>
        ))
       )}
    </>
  );
}
