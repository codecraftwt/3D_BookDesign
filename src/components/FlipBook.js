import React, { useEffect, useRef } from "react";
import './css/FlipBook.css'
const Flipbook = () => {

    const bookRef = useRef(null);

    useEffect(() => {
        const elBook = bookRef.current;
        elBook.style.setProperty("--c", 0); // Set current page
        elBook.querySelectorAll(".page").forEach((page, idx) => {
            page.style.setProperty("--i", idx);
            page.addEventListener("click", (evt) => {
                if (evt.target.closest("a")) return;
                const curr = evt.target.closest(".back") ? idx : idx + 1;
                elBook.style.setProperty("--c", curr);
            });
        });
    }, []);

    return (
        <div className="book-container">
            <div className="book" ref={bookRef}>
                <div className="page">
                    <div className="front cover">
                        <h1>FlipBook</h1>
                        <p>2024.<br />Second edition</p>
                    </div>
                    <div className="back">
                        <h2>Responsive</h2>
                        <p>Fully responsive CSS flip book, thanks to the <code>cqmin</code> unit.</p>
                    </div>
                </div>
                <div className="page">
                    <div className="front">
                        <p>Even more, the book height is dicated by the amount of content in the tallest page.
                            The only thing you need to take care of is how much text you put into a page.</p>
                    </div>
                    <div className="back">
                        <img src="https://picsum.photos/id/24/600/600" alt="Img 1" />
                    </div>
                </div>
                <div className="page">
                    <div className="front">
                        <h2>JS at its minimum</h2>
                        <p>JavaScript is at its minimum. Basically it's only used to set the initial
                            page index and assign click listeners to the pages. Modifies the CSS <b>Var</b>
                            for the <i>current</i> page, and the rest is handled entirely by CSS.</p>
                    </div>
                    <div className="back">
                        <p>Additionally JavaScript allows you to click on an anchor link in your
                            text — without turning the page. You can also have multiple independent
                            flip books in a single document. You're all covered.</p>
                    </div>
                </div>
                <div className="page">
                    <div className="front">
                        <h2>Crafting CSS magic</h2>
                        <p>The opened (<i>viewing</i>) pages of the flip book are always kept at the same elevation.
                            This is necessary if your book has no inclination (is top-down-view).
                            Have you noticed that you can also click on the pages edge? CSS will nicely animate the group
                            of pages to skip with a staggered animation.</p>
                    </div>
                    <div className="back">
                        <p>Like in this demo, you can change the perspective of the parent container and change the
                            X axis rotation of the book for extra effect.</p>

                        {/* Responsive Cards */}
                        <div className="cards-container">
                            <div className="card">
                                <h4>Card Title 1</h4>
                                <p>This is a sample card.</p>
                            </div>
                            <div className="card">
                                <h4>Card Title 2</h4>
                                <p>This is another sample card.</p>
                            </div>
                            <div className="card">
                                <h4>Card Title 3</h4>
                                <p>Yet another sample card.</p>
                            </div>
                        </div>
                        {/* Responsive Cards */}
                    </div>
                </div>
                <div className="page">
                    <div className="front">
                        <p>The necessary FlipBook's CSS is barely 30 lines, there is no swipe, natural page flip angling,
                            complex shadows, etc. in order to keep it as simple as possible.</p>
                    </div>
                    <div className="back">
                        <p>Feel free to use and abuse this code. Drop me a line if you find it cool or useful, or just
                            want to say <i>hi</i>.</p>
                        {/*  */}
                        <div className="table-container">
                            <table className="responsive-table">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Age</th>
                                        <th>Occupation</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>John Doe</td>
                                        <td>30</td>
                                        <td>Engineer</td>
                                    </tr>
                                    <tr>
                                        <td>Jane Smith</td>
                                        <td>25</td>
                                        <td>Designer</td>
                                    </tr>
                                    <tr>
                                        <td>Sam Brown</td>
                                        <td>40</td>
                                        <td>Manager</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        {/*  */}
                    </div>
                </div>
                <div className="page">
                    <div className="front">
                        <img src="https://picsum.photos/id/1073/600/600" alt="Img 2" />
                    </div>
                    <div className="back cover">
                        <h3>That's all, folks</h3>
                        <p>FlipBook code and content:<br /><a href="https://stackoverflow.com/users/383904/roko-c-buljan" target="_blank" rel="nofollow">Roko C. Buljan</a>
                            <br />Original idea:<br /><a href="https://stackoverflow.com/a/76978444/383904" target="_blank" rel="nofollow">Stack Overflow answer</a>
                            <br />Images by: picsum.photos</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Flipbook;