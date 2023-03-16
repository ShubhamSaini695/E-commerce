import React from 'react';
import Product from './Product';

const Posts = ({ posts }) => {

    return (
        <div className="grid grid-three-column">
            {posts.map((post) => {
                return <Product key={post.id} {...post} />;
            })}
        </div>
    );
};

export default Posts;