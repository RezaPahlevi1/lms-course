// src/components/Hero.jsx
import React from "react";
import PropTypes from "prop-types";
import { SearchBar } from "./SearchBar"; // sesuaikan path jika diperlukan
import { Filter } from "./Filter"; // sesuaikan path jika diperlukan

/**
 * Reusable Hero
 * - title: judul utama
 * - bgImage: path background
 * - showSearchCard: jika true tampilkan card search & filter (default true)
 * - children: jika diberikan, akan render di sebelah kiri (di bawah title) menggantikan card
 */
export function Hero({
  title = "",
  courseTitle = "",
  // bgImage = "/hero-placeholder.jpg",
  showSearchCard = true,
  children,
}) {
  return (
    <section
      className="bg-gradient-to-r from-[#000000] to-[#293352] text-white p-8"
      // style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* overlay gelap */}
      <div className="px-6 py-12">
        <div className="max-w-6xl mx-auto text-white grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* KIRI: title + card / custom children */}
          <div>
            {/* Judul (di atas card seperti screenshot) */}
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              {courseTitle}
            </h2>

            {/* Jika parent memberi children => tampilkan (lebih custom) */}
            {children ? (
              <div>{children}</div>
            ) : (
              // fallback: tampilkan card search + filters jika showSearchCard true
              showSearchCard && (
                <div className="bg-gray-700 bg-opacity-90 p-8 rounded">
                  <h2 className="text-2xl md:text-2xl font-semibold mb-6">
                    {title}
                  </h2>
                  <SearchBar />

                  <div className="mt-6 grid grid-cols-3 gap-4 text-sm">
                    <Filter label="Subject" />
                    <Filter label="Instructor" />
                    <Filter label="Difficulty" />
                  </div>
                </div>
              )
            )}
          </div>

          {/* KANAN: dekorasi / area gambar (disembunyikan di mobile) */}
          {/* <div className="hidden md:block"> */}
          {/* area dekorasi, bisa dibiarkan kosong karena background image sudah di section */}
          {/* <div className="w-full h-56 md:h-64 rounded-md bg-gradient-to-r from-black/25 to-transparent" />
          </div> */}
        </div>
      </div>
    </section>
  );
}

Hero.propTypes = {
  title: PropTypes.string,
  courseTitle: PropTypes.string,
  bgImage: PropTypes.string,
  showSearchCard: PropTypes.bool,
  children: PropTypes.node,
};
