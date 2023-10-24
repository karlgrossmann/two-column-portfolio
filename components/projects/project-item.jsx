function ProjectItem(props) {
    return (
        <a href={props.href} target="_blank" rel="noopener noreferrer" className="group flex flex-col p-5 transition-all bg-surface-200 hover:scale-110 brightness-75 hover:brightness-100 hover:z-10">
            <div className='text-surface-600 mb-4 flex flex-row items-center justify-between'>
                <div className='flex flex-row items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                    </svg>
                    <span className='ml-1 text-xs'>{props.stars}</span>
                </div>
                <div className='text-xs font-medium tracking-widest uppercase'>
                    {props.lib}
                </div>
            </div>
            <h1 className="mb-4 text-xl subpixel-antialiased">{props.name}</h1>
            <div className="text-surface-600 text-xs">{props.description}</div>
            
        </a>
    )
}

export default ProjectItem