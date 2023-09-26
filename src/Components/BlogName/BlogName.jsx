import './BlogName.css'
import image1 from "../../images/boy1.png";

const BlogName = (props) => {
    const { img, authorName, date, title } = props.info;
    return (
        <div className='blog-container'>
            <div className='blog-info'>
                <img className='blog-image' src={img} alt="" />
                <div className='info-container'>
                    <div className='Author-container'>
                        <div>
                            <img className='author-image' src={image1} alt="" />
                        </div>
                        <div >
                            <h6>{authorName} </h6>
                            <p> {date}</p>
                        </div>
                    </div>
                    <div>
                        <p>5 min read</p>
                        <button>Submit</button>
                    </div>
                </div>
                <h6>Title : {title}</h6>
                <p>#beginners  #programming</p>
                <a href="/read">Mark as read</a>
            </div>
            <div>
                <p>total spent time : </p>
            </div>
        </div>
    );
};

export default BlogName;