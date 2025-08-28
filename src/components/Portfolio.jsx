import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import projects from "../data/projects.js";

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
          Our Work
        </h2>

        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          pagination={{ clickable: true }}
          navigation
          className="pb-12"
        >
          {projects.map((p, index) => (
            <SwiperSlide key={index}>
              <div className="group bg-gray-800 rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:bg-gray-700">
                
                {/* Image with hover zoom */}
                <div className="overflow-hidden relative">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full aspect-video object-cover transform transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Overlay effect */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <button className="px-4 py-2 bg-sky-500 hover:bg-sky-600 rounded-xl text-white text-sm transition-all">
                      View Project
                    </button>
                  </div>
                </div>

                {/* Text content */}
                <div className="p-6 text-left">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {p.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {p.tags.join(", ")}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
