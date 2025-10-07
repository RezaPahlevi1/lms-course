import { createContext, useContext, useEffect, useState } from "react";

const DataContext = createContext();

export function DataProvider({ children }) {
  const [courses, setCourses] = useState([]);
  const [instructors, setInstructors] = useState([]);
  const [modules, setModules] = useState([]);
  const [users, setUsers] = useState([]);
  const [enrollments, setEnrollments] = useState([]);

  useEffect(() => {
    fetch("/db.json")
      .then((res) => res.json())
      .then((data) => {
        setCourses(data.courses || []);
        setInstructors(data.instructors || []);
        setModules(data.modules || []);
        setUsers(data.users || []);
        setEnrollments(data.enrollments || []);
      })
      .catch((err) => console.error("Failed to load db.json:", err));
  }, []);

  return (
    <DataContext.Provider
      value={{ courses, instructors, modules, users, enrollments }}
    >
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  return useContext(DataContext);
}
