import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Camera, MapPin, CheckCircle, Clock, ArrowUpRight } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { Badge } from '../common/Badge';

export const ConstructionDiary = () => {
  const diaryLogs = [
    {
      id: "log-1",
      siteName: "Nipania Luxury Villa #14",
      location: "Nipania, Indore",
      date: "October 2026",
      stage: "RCC Second Floor Slab Casting",
      progressPercent: 68,
      statusBadge: "Slab Curing in Progress",
      engineerNote: "M25 design mix poured using boom placer. 6 test cubes cast for 7-day compressive test. Curing burlap sheets laid and automated ponding active.",
      thumbnail: "/images/ban1.jpg",
      specs: "Tata Tiscon 550D • UltraTech PPC",
    },
    {
      id: "log-2",
      siteName: "The Courtyard Duplex",
      location: "Super Corridor, Indore",
      date: "October 2026",
      stage: "Plumbing Hydrostatic Pressure Test",
      progressPercent: 52,
      statusBadge: "Hydro-Test Passed",
      engineerNote: "Astral CPVC Pro water lines pressurized to 10 Bar for 24 continuous hours. Zero pressure drop recorded. Concealment plaster clearance granted.",
      thumbnail: "/images/project-residential.jpg",
      specs: "Astral CPVC Pro • Havells FRLS",
    },
    {
      id: "log-3",
      siteName: "Central Logistics Terminal",
      location: "Pithampur Sector 3",
      date: "October 2026",
      stage: "FM2 High-Tolerance Laser Screed Flooring",
      progressPercent: 86,
      statusBadge: "Floor Polishing Phase",
      engineerNote: "3,200 sq. m. monolithic floor slab finished with power trowels and quartz dry-shake hardener. Surface flatness audited with laser profilometer.",
      thumbnail: "/images/project-warehouse.jpg",
      specs: "M30 Design Mix • FM2 Tolerance",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#F4F1EB] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <SectionHeading
            number="09"
            badge="SITE PROGRESS DIARY"
            title="Real-Time Construction Diary."
            highlight="Live Site Logs."
            description="Our site engineers maintain photographic daily logs for every active project. Here is an authentic snapshot of ongoing civil progress across our sites."
          />

          <div className="flex items-center gap-2 text-xs font-mono text-gray-500 shrink-0">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Active Site Operations Audited Today</span>
          </div>
        </div>

        {/* 3 Live Site Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {diaryLogs.map((log, index) => (
            <motion.div
              key={log.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-white border border-[#E3DED4] rounded-xs overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              {/* Image & Stage Overlay */}
              <div className="relative h-48 overflow-hidden bg-gray-200">
                <img
                  src={log.thumbnail}
                  alt={log.siteName}
                  className="w-full h-full object-cover object-center filter contrast-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                <div className="absolute top-3 left-3">
                  <Badge variant="white" size="xs">
                    {log.statusBadge}
                  </Badge>
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-white flex items-center justify-between text-[11px] font-mono">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#E09F3E]" />
                    {log.location}
                  </span>
                  <span className="flex items-center gap-1 text-gray-300">
                    <Calendar className="w-3 h-3" />
                    {log.date}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-display font-bold text-lg text-[#0E1318] mb-1">
                    {log.siteName}
                  </h4>
                  <p className="font-mono text-xs text-[#C25E38] font-semibold mb-3">
                    Stage: {log.stage}
                  </p>

                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="flex justify-between text-[11px] font-mono text-gray-500 mb-1">
                      <span>Overall Progress</span>
                      <span className="font-bold text-[#0E1318]">{log.progressPercent}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-[#EAE6DF] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#C25E38] rounded-full transition-all duration-1000"
                        style={{ width: `${log.progressPercent}%` }}
                      />
                    </div>
                  </div>

                  {/* Civil Engineer Log Quote */}
                  <div className="p-3 bg-[#FAF8F5] border-l-2 border-[#C25E38] rounded-r-xs mb-4">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-gray-400 block mb-1">
                      Site Engineer Log:
                    </span>
                    <p className="text-xs text-[#334155] leading-relaxed italic">
                      "{log.engineerNote}"
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#F0ECE4] text-[11px] font-mono text-gray-500 flex justify-between items-center">
                  <span>Materials Verified:</span>
                  <span className="font-semibold text-[#0E1318]">{log.specs}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
