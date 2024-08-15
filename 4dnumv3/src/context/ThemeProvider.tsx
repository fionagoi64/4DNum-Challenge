import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

interface ThemeContextType {
  themeMode: "light" | "dark";
  darkTheme: () => void;
  lightTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [themeMode, setThemeMode] = useState<"light" | "dark">("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("Theme");
    if (savedTheme === "dark") {
      setThemeMode("dark");
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    } else {
      setThemeMode("light");
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    }
  }, []);

  const darkTheme = () => {
    setThemeMode("dark");
    document.body.classList.add("dark");
    document.body.classList.remove("light");
    localStorage.setItem("Theme", "dark");
  };

  const lightTheme = () => {
    setThemeMode("light");
    document.body.classList.add("light");
    document.body.classList.remove("dark");
    localStorage.setItem("Theme", "light");
  };

  return (
    <ThemeContext.Provider value={{ themeMode, darkTheme, lightTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
