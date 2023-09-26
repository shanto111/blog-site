import { useEffect, useState } from 'react';
import './Blog.css'
import BlogName from '../BlogName/BlogName';

const Blog = () => {
    const [name, setName] = useState([]);
    useEffect(() => {
        fetch('blogName.json')
            .then(res => res.json())
            .then(data => setName(data))
    }, []);
    return (
        <div>
            {
                name.map(info => <BlogName
                    key={info.id}
                    info={info}
                ></BlogName>)
            }
        </div>
    );
};

export default Blog;