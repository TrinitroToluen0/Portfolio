import React from "react";
import ReactMarkdown from "react-markdown";

interface CustomMarkdownProps {
    children: string;
}

const CustomMarkdown: React.FC<CustomMarkdownProps> = ({ children }) => {
    return (
        <ReactMarkdown
            components={{
                em(props) {
                    return <span className="highlighted" {...props} />;
                },
                a(props) {
                    return <a className="hyperlink" target="_blank" rel="nofollow" {...props}></a>
                }
            }}>
            {children}
        </ReactMarkdown>
    );
};

export default CustomMarkdown;