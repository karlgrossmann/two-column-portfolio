import React from "react";

function VolunteeringItem(props) {
    return (
        <div className="group flex flex-row mb-4 p-5 transition-all bg-background hover:bg-surface-200">
            <div className='mr-2 text-surface-600 text-xs basis-1/4'>{props.startDate} {checkEndDate(props)}</div>
            <div className='basis-3/4 flex flex-col'>
                <a href={props.href} target="_blank" rel="noopener noreferrer" className='font-medium transition-all'>{props.position} at {props.event}</a>
                <a href={props.href} target="_blank" rel="noopener noreferrer" className='text-surface-600 mb-4 flex flex-row items-center'>
                    <span>{props.organisation}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-3 h-3 ml-1 invisible transition ease-in-out scale-50 group-hover:visible group-hover:scale-100">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                </a>
                <div className='text-surface-600'>{props.description}</div>
            </div>
        </div>
    )
}

function checkEndDate(props) {
    if (!props.endDate) {
        return '';
    } else {
        return ('- ' + props.endDate); 
    }  
}

export default VolunteeringItem