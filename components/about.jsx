import React from "react";

const About = (props) => {
    return (
        <div data-section id='about' className='mb-16 group'>
            <div className='text-surface-600'>
                {props.data.about.map(function(paragraph, index){
                    return <div className='mb-6'>{paragraph}</div>
                })}
            </div>
        </div>
    )
}

export default About