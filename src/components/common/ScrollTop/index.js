import React, { useEffect, useState } from 'react'
import "./style.css"
import ArrowCircleUpRoundedIcon from '@mui/icons-material/ArrowCircleUpRounded';
import { Tooltip } from '@mui/material';

function ScrollTop() {

    const [visible, setVisible] = useState(false);

    // scroll listener
    useEffect(() => {
        const scrollFunction = () => {
            if (window.scrollY > 300) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };

        window.addEventListener("scroll", scrollFunction);

        // cleanup (VERY IMPORTANT)
        return () => window.removeEventListener("scroll", scrollFunction);
    }, []);

    // scroll to top
    const topFunction = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <Tooltip title="Scroll to top">
            {visible && (
                <div className='scrolltop' onClick={topFunction}>
                    <ArrowCircleUpRoundedIcon
                        style={{ color: "var(--violet)" }}
                        fontSize='large'
                    />
                </div>
            )}
        </Tooltip>
    );
}

export default ScrollTop;
