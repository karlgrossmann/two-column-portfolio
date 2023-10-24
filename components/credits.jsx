import React from "react";

const Credits = (props) => {
        return (
        <div data-section id='credits' className='group mt-32'>
            <div className='text-surface-600'>
                <div className='mb-4'>
                    This website was built using a <a href="https://github.com/karlgrossmann/two-column-portfolio" target="_blank" rel="noopener noreferrer" className="text-on-background transition-all hover:text-primary-500">template</a> by <a href="https://karlgrossmann.com" target="_blank" rel="noopener noreferrer" className="text-on-background transition-all hover:text-primary-500">Karl Grossmann</a> using <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer" className="text-on-background transition-all hover:text-primary-500">Next.js</a> and 
                    <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer" className="text-on-background transition-all hover:text-primary-500"> Tailwind CSS</a>. 
                    The inspiration for the design comes from <a href="https://www.sarahdayan.dev" target="_blank" rel="noopener noreferrer" className="text-on-background transition-all hover:text-primary-500">Sarah Dayan </a> 
                    and <a href="https://brittanychiang.com" target="_blank" rel="noopener noreferrer" className="text-on-background transition-all hover:text-primary-500">Brittany Chiang</a>. 
                </div>
                <div className='flex flex-row justify-between'>
                    <a href="/imprint" rel="noopener noreferrer" className="scroll-auto transition-all hover:text-on-background">Imprint</a>
                    <a href="/privacy" rel="noopener noreferrer" className="scroll-auto transition-all hover:text-on-background">Privacy Statement</a>
                    <span>{props.data.name} | 2023</span>
                </div>
            </div>
        </div>
    )
}

export default Credits