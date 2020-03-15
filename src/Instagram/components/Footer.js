import React from 'react';
import footerLinksJSON from '../assets/data/links.json';



export const Footer = () => {

    const liJSX = footerLinksJSON.map((link) => {
        return (
            <li
				key = {link.id}	
			>
				{link.message}
			</li>
        )
    });


    return (
        <footer className="footer">
			<ul>
				{liJSX}
			</ul>

			<span>© 2020 INSTAGRAM FROM FACEBOOK</span>
		</footer>
    )
}