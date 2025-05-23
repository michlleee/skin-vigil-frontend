import "./FooterStyles.css"

function Footer(){
    return(
        <footer className="footer">
            <p className="footer-text">&copy; {new Date().getFullYear()} SkinVigil. All rights reserved.</p>
        </footer>
    );
}

export default Footer