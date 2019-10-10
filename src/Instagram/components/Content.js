import React from 'react';
import avatar from '../assets/images/nasa.jpg';

export const Content = () => {
    return (
        <section className = 'content'>
            <div className = 'profile'>
                <img
                    className = 'avatar'
                    src = { avatar }
                />
                <div className = 'main'>
                    <span className = 'nickname'>nasa</span>
                    <div className = 'stats'>
                        <div>
                            <span>2.616</span>&nbsp;posts
                        </div>
                        <div>
                            <span>43.6</span>&nbsp;followers
                        </div>
                        <div>
                            <span>91</span>&nbsp;following
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};
