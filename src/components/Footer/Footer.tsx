import "./Footer.css";

export default () => {
    return (
        <footer className="footer">
            <p>
                Made by <span className="highlighted">Javier Menco</span> using{" "}
                <a href="https://react.dev" className="hyperlink">
                    React
                </a>
                , <a href="https://vitejs.dev" className="hyperlink">Vite</a> and <a href="https://www.typescriptlang.org" className="hyperlink">TypeScript</a>
            </p>
        </footer>
    );
}