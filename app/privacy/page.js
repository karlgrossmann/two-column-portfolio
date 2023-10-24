import React from 'react';
import {promises as fs} from 'fs';

export default async function PrivacyStatement() {
    const file = await fs.readFile(process.cwd() + '/public/translations/en.json', 'utf-8');
    const data = JSON.parse(file);

    return (
        <main className="flex min-h-screen font-mono text-sm flex-col p-24">
            <div className='flex flex-col'>
                <a href="/" className='mr-4 transition-all flex flex-row mb-6 hover:text-primary-500'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-5 h-5 mr-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                    </svg>
                    <span>{data.general.name} / Home</span>
                </a>
                <h2 className='mb-8 text-2xl font-medium tracking-widest'>Privacy Statement</h2>
            </div>
            <div className='text-surface-600'>
                {/* TODO: Insert your privacy statement text if you need it. */}
            </div>
        </main>
    );
}