import useLanguageContext from "../../contexts/LanguageContext";

function LanguageSwitch() {
  const { language, setLanguage } = useLanguageContext();
  const switchLanguage = () => {
    language === "fr-FR" ? setLanguage("en-EN") : setLanguage("fr-FR");
  };
  return (
    <>
      <label className="switch">
        <input type="checkbox" onChange={switchLanguage} />
        <span className="switch__slider switch__slider--round"></span>
      </label>
      <p
        className={
          language === "fr-FR"
            ? "switch__p--fr visible"
            : "switch__p switch__p--fr"
        }
      >
        Fr
      </p>
      <p
        className={
          language === "fr-FR"
            ? "switch__p switch__p--en"
            : "switch__p--en visible"
        }
      >
        En
      </p>
    </>
  );
}

export default LanguageSwitch;
