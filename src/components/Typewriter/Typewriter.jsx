import { useState, useEffect } from "react";
import "./TypewriterStyles.css";

function Typewriter({ text, speed = 100, pauseTime = 2000, deleteSpeed = 50 }) {
    const [displayedText, setDisplayedText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [index, setIndex] = useState(0);

    const highlightWords = ["vigilant", "skin"]; // Words to highlight

    useEffect(() => {
        if (isDeleting) {
            if (displayedText.length > 0) {
                const timeout = setTimeout(() => {
                    setDisplayedText((prev) => prev.slice(0, -1));
                }, deleteSpeed);
                return () => clearTimeout(timeout);
            } else {
                setIsDeleting(false);
                setIndex(0);
            }
        } else {
            if (index < text.length) {
                const timeout = setTimeout(() => {
                    setDisplayedText((prev) => prev + text[index]);
                    setIndex((prevIndex) => prevIndex + 1);
                }, speed);
                return () => clearTimeout(timeout);
            } else {
                setTimeout(() => setIsDeleting(true), pauseTime);
            }
        }
    }, [displayedText, isDeleting, index, text, speed, pauseTime, deleteSpeed]);

    // Split text and apply styles to specific words
    const formattedText = displayedText.split(" ").map((word, i) => {
        if (highlightWords.includes(word.replace(/[.,]/g, ""))) {
            return (
                <span key={i} className="highlight">
                    {word}{" "}
                </span>
            );
        }
        return word + " ";
    });

    return <p className="typewriter">{displayedText ? formattedText : '\u00A0'}</p>;
}

export default Typewriter;
