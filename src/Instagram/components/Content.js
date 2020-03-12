import React from 'react';
import avatar from '../assets/images/nasa.jpg';

export const Content = () => {
    return (
        <section className='content'>
            <div className='profile'>
                <img
                    className='avatar'
                    src = { avatar }
                />
            </div>
        </section>
    )
};
