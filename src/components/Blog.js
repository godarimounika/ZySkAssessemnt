import React from 'react'
import "./Blog.css"

function Blog() {
    return (
        <div className='blog-container'>
            <div className='blog-header'>
                <div className='blog-text'>
                    <p id='blog-title'>Our blog</p>
                    <h2 id="blog-subTitle">Lastest blog posts</h2>
                    <p id='blog-text'>Tool and strategies modern teams need to help their companies grow.</p>

                </div>
                <div className='blog-button'>
                    <button className='blog-btn'>View all posts</button>
                </div>
            </div>
            <div className='blog-posts'>
                <div className='blog1'>
                    <div className='blg-img'>
                        <img src='/Image1.png' alt='image1' />
                    </div>
                    <div className='blog-imagetext'>
                        <div className='blog-post-title1'>
                            <p>Design</p></div>
                        <div className='blog-text-arrow'>
                            <div><h2>UX review presentations</h2></div>
                            <div><img src='/arrow-up-right.png' /></div>

                        </div>
                        <div><p className='blog-content'>How do you create compelling presentations that wow your colleagues and impress your managers?</p></div>
                        <div className='blogProfile-text'>
                            <div className='blog-profile-image'>
                                <img src="/blogProfile1.png" />
                            </div>
                            <div className='profileName-text'>
                                <p>Olivia Rhye</p>
                                <p>20 Jan 2024</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='blog1'>
                    <div className='blg-img'>
                        <img src='/Image2.png' alt='image1' />

                    </div>
                    <div className='blog-imagetext'>
                    <div className='blog-post-title1'>
                    <p>Product</p></div>
                        <div className='blog-text-arrow'>
                            <div><h2>Migrating to Linear 101</h2></div>
                            <div><img src='/arrow-up-right.png' /></div>

                        </div>
                        <div><p className='blog-content'>Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.</p></div>
                        <div className='blogProfile-text'>
                        <div className='blog-profile-image'>
                                <img src="/blogProfile2.png" />
                            </div>
                            <div className='profileName-text'>
                                <p>Olivia Rhye</p>
                                <p>20 Jan 2024</p>
                            </div>
                        </div>

                    </div>


                </div>
                <div className='blog1'>
                    <div className='blg-img'>
                        <img src='/image3.png' />

                    </div>
                    <div className='blog-imagetext'>
                    <div className='blog-post-title1'>
                    <p>software Engineering</p></div>
                        <div className='blog-text-arrow'>
                            <div className='blog-text-arrowheader' ><h2>Building your API stack</h2></div>
                            <div className='blog-text-arrowimage'><img src='/arrow-up-right.png' /></div>

                        </div>
                        <div className='blog-content'><p>The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.</p></div>
                        <div className='blogProfile-text'>
                        <div className='blog-profile-image'>
                                <img src="/blogProfile3.png" />
                            </div>
                            <div className='profileName-text'>
                                <p>Olivia Rhye</p>
                                <p>20 Jan 2024</p>
                            </div>
                        </div>

                    </div>


                </div>

            </div>

        </div>
    )
}

export default Blog