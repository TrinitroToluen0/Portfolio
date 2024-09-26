import { useTranslation } from "react-i18next";
import "./Footer.css";
import CustomMarkdown from "../../utils/CustomMarkdown";

export default () => {
    const { t } = useTranslation();
    return (
        <footer className="footer">
            <p>
                <CustomMarkdown>{t("footer.text")}</CustomMarkdown>
            </p>
        </footer>
    );
};
