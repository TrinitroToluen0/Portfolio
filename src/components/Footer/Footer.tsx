import { useTranslation } from "react-i18next";
import "./Footer.css";

export default () => {
    const { t } = useTranslation();
    return (
        <footer className="footer">
            <p dangerouslySetInnerHTML={{ __html: t("footer.text") }}></p>
        </footer>
    );
};
