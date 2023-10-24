'use client'

import React, { useState, useEffect, useRef } from "react";
import NavItem from "./nav-item";

const Navigation = () => {
    const [activeSection, setActiveSection] = useState(null);
    const observer = useRef(null);

    useEffect(() => {
        observer.current = new IntersectionObserver((entries) => {
            const visibleSection = entries.find((entry) => entry.isIntersecting)?.target;
            if (visibleSection) {
                setActiveSection(visibleSection.id);
            }
        }, {threshold:0.5});

        const sections = document.querySelectorAll('[data-section]');

        sections.forEach((section) => {
            observer.current.observe(section);
        });

        return () => {
            sections.forEach((section) => {
                observer.current.unobserve(section);
            });
        };
    }, []);

    return (
        <div id='navigation' className='flex flex-col py-10 font-medium tracking-widest'>
            <NavItem active={activeSection === 'about' ? true : false} href='#about' num='01' name="ABOUT"></NavItem>
            <NavItem active={activeSection === 'experiences' ? true : false} href='#experiences' num='02' name="EXPERIENCES"></NavItem>
            <NavItem active={activeSection === 'education' ? true : false} href='#education' num='03' name="EDUCATION"></NavItem>
            <NavItem active={activeSection === 'volunteering' ? true : false} href='#volunteering' num='04' name="VOLUNTEERING"></NavItem>
            <NavItem active={(activeSection === 'projects') || (activeSection === 'credits') ? true : false} href='#projects' num='05' name="PROJECTS"></NavItem>
        </div>
    )
}

export default Navigation