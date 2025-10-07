import { createContext, useContext, useEffect, useState } from "react";

const DataContext = createContext();

export function DataProvider({ children }) {
  const [courses, setCourses] = useState([]);
  const [instructors, setInstructors] = useState([]);
  const [modules, setModules] = useState([]);

  useEffect(() => {
    fetch("/db.json")
      .then((res) => res.json())
      .then((data) => {
        setCourses(data.courses || []);
        setInstructors(data.instructors || []);
        setModules(data.modules || []);
      })
      .catch((err) => console.error("Failed to load db.json:", err));
  }, []);

  return (
    <DataContext.Provider value={{ courses, instructors, modules }}>
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  return useContext(DataContext);
}
