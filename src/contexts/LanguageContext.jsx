import { createContext, useContext, useState, useMemo, useEffect } from "react";
import PropTypes from "prop-types";

export const LanguageContext = createContext();

export function ContextProvider({ children }) {
  const [language, setLanguage] = useState("fr-FR");

  useEffect(() => {
    document.documentElement.lang = language.slice(0, 2);
  }, [language]);

  const contextValue = useMemo(() => {
    return {
      language,
      setLanguage,
    };
  }, [language]);

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
}

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

const useLanguageContext = () => {
  return useContext(LanguageContext);
};
export default useLanguageContext;
