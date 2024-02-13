import { createContext, useContext, useState, useMemo, useEffect } from "react";
import PropTypes from "prop-types";

export const GeneralContext = createContext();

export function ContextProvider({ children }) {
  const [page, setPage] = useState(1);
  const [language, setLanguage] = useState("en-EN");
  const [type, setType] = useState("movies");

  function getCurrentUrl(location) {
    const currentURL = location.pathname;
    const urlWithoutID = currentURL.replace(/\/\d+$/, "");
    return urlWithoutID;
  }

  useEffect(() => {
    document.documentElement.lang = language.slice(0, 2);
  }, [language]);

  const contextValue = useMemo(() => {
    return {
      page,
      setPage,
      language,
      setLanguage,
      type,
      setType,
      getCurrentUrl,
    };
  }, [page, language, type]);

  return (
    <GeneralContext.Provider value={contextValue}>
      {children}
    </GeneralContext.Provider>
  );
}

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

const useGeneralContext = () => {
  return useContext(GeneralContext);
};
export default useGeneralContext;
