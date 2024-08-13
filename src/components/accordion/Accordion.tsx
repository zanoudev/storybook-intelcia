import React from 'react';
import './Accordion.css';
import AccordionButton from './AccordionButton';

export interface AccordionProps {
    title: string;
    state: 'open' | 'closed';
    placeholder: string;
    addMedia?: boolean;
    mediaType?: 'img' | 'video' | 'none';
    mediaURL?: string;
    width?: string;
}

const Accordion: React.FC<AccordionProps> = ({ title, state, placeholder, addMedia, mediaURL, mediaType, width }) => {

    placeholder = "Placeholder content for this accordion, which is intended to demonstrate the .accordion-flush class. This is the first item's accordion body."
    // get media type via url
    const isImage = (url: string) => /\.(jpg|jpeg|png|gif|bmp|webp)$/i.test(url);
    const isVideo = (url: string) => /\.(mp4|webm|ogg)$/i.test(url);

    return (
        <div className={`accordion ${state}`} style={{ width }}>
            <div className='header'>
                <h2>{title = 'Accordion Item ?'}</h2>
                <AccordionButton initialState={state} />
            </div>
            <div className={`media ${mediaType}`}>
                {addMedia && mediaType === 'img' 
                // && (
                //     <img src={mediaURL} alt='media' />
                // )
                }
                {addMedia && mediaType === 'video' && (
                    <video width='560' height='315' >
                        {/* <source src={mediaURL} type='video/mp4' />
                        Your browser does not support the video tag. */}
                    </video>
                )}
            </div>
            {state === 'open' && (
                <p className='placeholder-text'>
                    {placeholder}
                </p>
            )}
        </div>
    );
};

export default Accordion;
