// src/pages/Profile.jsx
import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import {
  FaEnvelope,
  FaUserCircle,
  FaGraduationCap,
  FaCheckCircle,
  FaTimesCircle,
  FaEdit,
} from "react-icons/fa";
import { useData } from "../context/DataContext";

/**
 * Props:
 * - showEdit (boolean) : tampilkan tombol Edit (default true)
 * - onEdit (function) : handler ketika tombol Edit diklik (optional)
 */
export default function Profile({ showEdit = true, onEdit = null }) {
  const { users = [], courses = [], enrollments = [] } = useData();

  // demo: pakai user pertama (ganti jika pakai auth)
  const user = users && users.length > 0 ? users[0] : null;

  // hitung KPI berdasarkan enrollments milik user
  const { total, completed, notCompleted } = useMemo(() => {
    if (!user) return { total: 0, completed: 0, notCompleted: 0 };
    const my = enrollments.filter((e) => e.userId === user.id);
    const total = my.length;
    const completed = my.filter((e) => e.completed).length;
    const notCompleted = total - completed;
    return { total, completed, notCompleted };
  }, [user, enrollments]);

  // ambil enrollments detail untuk list course (jika mau)
  const myEnrollments = useMemo(() => {
    if (!user) return [];
    return enrollments
      .filter((e) => e.userId === user.id)
      .map((e) => ({ ...e, course: courses.find((c) => c.id === e.courseId) }));
  }, [user, enrollments, courses]);

  const initials = (name = "") =>
    name
      .split(/\s+/)
      .filter(Boolean)
      .map((n) => n[0] ?? "")
      .slice(0, 2)
      .join("")
      .toUpperCase();

  if (!user) {
    return (
      <div className="max-w-5xl mx-auto p-6">
        <div className="text-center text-gray-600">User tidak ditemukan.</div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* Header: avatar + info + edit button */}
      <div className="relative bg-white rounded-lg p-6 shadow-sm">
        {showEdit && (
          <div className="absolute top-4 right-4">
            <button
              onClick={() => (onEdit ? onEdit() : null)}
              className="flex items-center gap-2 rounded-full border border-blue-200 text-blue-600 px-3 py-1.5 text-sm hover:bg-blue-50 focus:outline-none"
              aria-label="Edit profile"
              title="Edit"
            >
              <FaEdit className="w-4 h-4" />
              <span className="hidden sm:inline">Edit</span>
            </button>
          </div>
        )}

        <div className="flex items-center gap-6">
          {/* avatar */}
          {user.avatar ? (
            <img
              src={user.avatar}
              alt={user.name}
              className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-sm"
            />
          ) : (
            <div className="w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center text-2xl font-bold text-white shadow-sm">
              {initials(user.name)}
            </div>
          )}

          <div>
            <p className="text-sm text-gray-500">Selamat Datang,</p>
            <h2 className="text-2xl font-bold text-gray-800">{user.name}</h2>
            <div className="flex items-center gap-3 text-gray-500 mt-2">
              <FaEnvelope className="w-4 h-4" />
              <span className="text-sm">{user.email}</span>
              <span className="px-2 py-0.5 ml-3 text-xs bg-blue-50 text-blue-700 rounded">
                {user.role}
              </span>
            </div>
          </div>
        </div>

        <hr className="my-6 border-t border-gray-200" />

        {/* KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* Card: Total Enrollments */}
          <div className="flex items-center gap-4 p-4 bg-white border-gray-200 rounded-lg shadow-sm">
            <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
              <FaGraduationCap className="w-6 h-6" />
            </div>
            <div>
              <div className="text-sm text-gray-500">Enrolled</div>
              <div className="text-lg font-semibold text-gray-800">
                {total} Courses
              </div>
            </div>
          </div>

          {/* Card: Completed */}
          <div className="flex items-center gap-4 p-4 bg-white border-gray-200 rounded-lg shadow-sm">
            <div className="w-12 h-12 rounded-lg bg-green-50 flex items-center justify-center text-green-600">
              <FaCheckCircle className="w-6 h-6" />
            </div>
            <div>
              <div className="text-sm text-gray-500">Completed</div>
              <div className="text-lg font-semibold text-gray-800">
                {completed} Courses
              </div>
            </div>
          </div>

          {/* Card: Not completed */}
          <div className="flex items-center gap-4 p-4 bg-white border-gray-200 rounded-lg shadow-sm">
            <div className="w-12 h-12 rounded-lg bg-pink-50 flex items-center justify-center text-pink-600">
              <FaTimesCircle className="w-6 h-6" />
            </div>
            <div>
              <div className="text-sm text-gray-500">Failed</div>
              <div className="text-lg font-semibold text-gray-800">
                {notCompleted} Courses
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* OPTIONAL: My Courses / Enrollments list (re-used from sebelumnya) */}
      <section className="mt-6">
        <h3 className="text-lg font-medium text-gray-800 mb-4">My Courses</h3>

        {myEnrollments.length === 0 ? (
          <div className="p-6 bg-white rounded-lg border border-dashed border-gray-200 text-gray-600">
            Kamu belum terdaftar di course manapun.
          </div>
        ) : (
          <div className="space-y-4">
            {myEnrollments.map((enr) => (
              <div
                key={enr.id}
                className="bg-white rounded-lg p-4 shadow-sm flex flex-col md:flex-row md:items-center md:justify-between gap-4"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-10 bg-gray-50 rounded flex items-center justify-center text-sm text-gray-500">
                    {enr.course?.slug
                      ? enr.course.slug.slice(0, 2).toUpperCase()
                      : "CR"}
                  </div>

                  <div>
                    <Link
                      to={
                        enr.course
                          ? `/courses/${enr.course.slug || enr.course.id}`
                          : "#"
                      }
                      className="text-base font-semibold text-gray-800 hover:text-blue-600"
                    >
                      {enr.course?.title || "Course tidak ditemukan"}
                    </Link>

                    <div className="text-xs text-gray-500 mt-1">
                      Enrolled:{" "}
                      {new Date(enr.enrolled_at).toLocaleDateString("id-ID", {
                        timeZone: "Asia/Makassar",
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })}
                    </div>
                  </div>
                </div>

                <div className="flex-1 md:flex-none md:w-80">
                  <div className="flex items-center justify-between gap-3">
                    <div className="text-sm text-gray-600">Progress</div>
                    <div className="text-sm font-medium text-gray-700">
                      {enr.progress_percent ?? 0}%
                    </div>
                  </div>

                  <div className="w-full mt-2 bg-gray-100 rounded-full h-3 overflow-hidden">
                    <div
                      className="h-3 rounded-full transition-all duration-300"
                      style={{
                        width: `${Math.max(
                          0,
                          Math.min(100, enr.progress_percent || 0)
                        )}%`,
                        background: enr.completed ? "#10B981" : "#3B82F6",
                      }}
                      role="progressbar"
                      aria-valuenow={enr.progress_percent || 0}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>

                  <div className="mt-2 flex items-center justify-between">
                    {enr.completed ? (
                      <span className="text-xs text-green-700 bg-green-50 px-2 py-0.5 rounded">
                        Completed
                      </span>
                    ) : (
                      <span className="text-xs text-gray-500">On progress</span>
                    )}

                    <div className="text-xs text-gray-400">
                      Last updated:{" "}
                      {new Date(enr.enrolled_at).toLocaleDateString("id-ID", {
                        timeZone: "Asia/Makassar",
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
