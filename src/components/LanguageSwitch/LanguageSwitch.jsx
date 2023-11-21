import useLanguageContext from "../../contexts/LanguageContext";

function LanguageSwitch() {
  const { language, setLanguage } = useLanguageContext();
  const switchLanguage = () => {
    language === "fr-FR" ? setLanguage("en-EN") : setLanguage("fr-FR");
  };
  return (
    <label className="switch">
      <input type="checkbox" onChange={switchLanguage} />
      <span className="switch__slider switch__slider--round"></span>
    </label>
  );
}

export default LanguageSwitch;
