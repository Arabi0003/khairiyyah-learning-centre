'use client';

import { useState, useEffect, useMemo } from 'react';
import PageHero from '@/components/sections/PageHero';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { ChevronLeft, ChevronRight, Clock, MapPin, Calendar, X } from 'lucide-react';

interface CalendarEvent {
  id: string;
  title: string;
  date: string;
  endDate?: string;
  type: 'academic' | 'islamic' | 'holiday' | 'exam' | 'event';
  description: string;
  time?: string;
  location?: string;
}

const EVENTS: CalendarEvent[] = [
  // September 2025
  { id: '1', title: 'First Day of School', date: '2025-09-01', type: 'academic', description: 'Welcome back! New academic year begins for all students.', time: '7:30 AM', location: 'Main Campus' },
  { id: '2', title: 'New Parent Orientation', date: '2025-09-03', type: 'event', description: 'Orientation session for new families joining Khairiyyah.', time: '9:00 AM', location: 'Auditorium' },
  { id: '3', title: 'Rabi ul-Awwal Begins', date: '2025-09-26', type: 'islamic', description: 'The blessed month of the Prophets birth begins.' },

  // October 2025
  { id: '4', title: 'Mawlid al-Nabi', date: '2025-10-06', type: 'islamic', description: 'Celebration of the birth of Prophet Muhammad (PBUH). Special program and nasheeds.', location: 'Prayer Hall' },
  { id: '5', title: 'Mid-Term Exams Begin', date: '2025-10-20', endDate: '2025-10-24', type: 'exam', description: 'First semester mid-term examinations for grades 3-8.' },
  { id: '6', title: 'Parent-Teacher Conference', date: '2025-10-29', type: 'event', description: 'Meet with teachers to discuss student progress.', time: '1:00 PM - 5:00 PM', location: 'Classrooms' },

  // November 2025
  { id: '7', title: 'Science Fair', date: '2025-11-12', type: 'event', description: 'Annual science fair showcasing student projects and experiments.', time: '10:00 AM', location: 'Sports Complex' },
  { id: '8', title: 'Professional Development Day', date: '2025-11-21', type: 'academic', description: 'No school for students. Teachers attend training workshops.' },

  // December 2025
  { id: '9', title: 'Final Exams Begin', date: '2025-12-08', endDate: '2025-12-12', type: 'exam', description: 'First semester final examinations for all grades.' },
  { id: '10', title: 'Quran Competition', date: '2025-12-15', type: 'islamic', description: 'Annual Quran recitation and memorization competition.', time: '9:00 AM', location: 'Prayer Hall' },
  { id: '11', title: 'Winter Break Begins', date: '2025-12-19', endDate: '2026-01-05', type: 'holiday', description: 'Winter holiday break. School resumes January 5th.' },

  // January 2026
  { id: '12', title: 'School Resumes', date: '2026-01-05', type: 'academic', description: 'Second semester begins. Welcome back!' },
  { id: '13', title: 'Islamic Art Exhibition', date: '2026-01-20', type: 'event', description: 'Student showcase of Arabic calligraphy and Islamic geometric art.', location: 'Art Room' },

  // February 2026
  { id: '14', title: 'Rajab Begins', date: '2026-02-01', type: 'islamic', description: 'The sacred month of Rajab begins. Special dhikr programs.' },
  { id: '15', title: 'Open House', date: '2026-02-11', type: 'event', description: 'Prospective families are invited to tour the campus and meet staff.', time: '9:00 AM - 12:00 PM', location: 'Main Campus' },
  { id: '16', title: 'Isra wal Miraj', date: '2026-02-18', type: 'islamic', description: 'Commemoration of the Prophets Night Journey and Ascension.' },

  // March 2026
  { id: '17', title: 'Ramadan Begins', date: '2026-03-01', type: 'islamic', description: 'The blessed month of fasting begins. Adjusted school schedule in effect.' },
  { id: '18', title: 'Mid-Term Exams', date: '2026-03-16', endDate: '2026-03-20', type: 'exam', description: 'Second semester mid-term examinations.' },
  { id: '19', title: 'Ramadan Iftar Program', date: '2026-03-25', type: 'islamic', description: 'Community iftar gathering for students and families.', time: '5:30 PM', location: 'Cafeteria' },

  // April 2026
  { id: '20', title: 'Eid al-Fitr Break', date: '2026-04-01', endDate: '2026-04-07', type: 'holiday', description: 'Eid al-Fitr celebration and break. Eid Mubarak!' },
  { id: '21', title: 'Spring Break', date: '2026-04-13', endDate: '2026-04-17', type: 'holiday', description: 'Spring holiday break for all students and staff.' },

  // May 2026
  { id: '22', title: 'Sports Day', date: '2026-05-06', type: 'event', description: 'Annual sports day with competitions, games, and family fun.', time: '8:00 AM', location: 'Sports Complex' },
  { id: '23', title: 'Final Exams Begin', date: '2026-05-25', endDate: '2026-05-29', type: 'exam', description: 'End-of-year final examinations for all grades.' },

  // June 2026
  { id: '24', title: 'Eid al-Adha', date: '2026-06-07', endDate: '2026-06-10', type: 'islamic', description: 'Eid al-Adha celebration. School closed.' },
  { id: '25', title: 'Graduation Ceremony', date: '2026-06-18', type: 'event', description: 'Commencement ceremony for graduating students.', time: '10:00 AM', location: 'Auditorium' },
  { id: '26', title: 'Last Day of School', date: '2026-06-20', type: 'academic', description: 'Final day of the academic year. Report cards distributed.' },
  { id: '27', title: 'Summer Break Begins', date: '2026-06-21', endDate: '2026-08-31', type: 'holiday', description: 'Summer break. See you in September!' },
];

const EVENT_COLORS: Record<string, { bg: string; text: string; dot: string; badge: string }> = {
  academic: { bg: 'bg-blue-50', text: 'text-blue-700', dot: 'bg-blue-500', badge: 'bg-blue-100 text-blue-700' },
  islamic: { bg: 'bg-green-50', text: 'text-green-700', dot: 'bg-green-500', badge: 'bg-green-100 text-green-700' },
  holiday: { bg: 'bg-orange-50', text: 'text-orange-700', dot: 'bg-orange-500', badge: 'bg-orange-100 text-orange-700' },
  exam: { bg: 'bg-red-50', text: 'text-red-700', dot: 'bg-red-500', badge: 'bg-red-100 text-red-700' },
  event: { bg: 'bg-purple-50', text: 'text-purple-700', dot: 'bg-purple-500', badge: 'bg-purple-100 text-purple-700' },
};

const MONTH_NAMES = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const DAY_NAMES = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export default function CalendarContent() {
  const [currentDate, setCurrentDate] = useState<Date | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null);
  const [view, setView] = useState<'calendar' | 'list'>('calendar');
  const [filterType, setFilterType] = useState<string>('all');

  useEffect(() => {
    setCurrentDate(new Date(2025, 8, 1)); // September 2025
  }, []);

  const year = currentDate?.getFullYear() ?? 2025;
  const month = currentDate?.getMonth() ?? 8;

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const prevMonthDays = new Date(year, month, 0).getDate();

  const calendarDays = useMemo(() => {
    const days: { day: number; isCurrentMonth: boolean; date: string }[] = [];

    for (let i = firstDayOfMonth - 1; i >= 0; i--) {
      const d = prevMonthDays - i;
      const prevMonth = month === 0 ? 11 : month - 1;
      const prevYear = month === 0 ? year - 1 : year;
      days.push({ day: d, isCurrentMonth: false, date: `${prevYear}-${String(prevMonth + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}` });
    }

    for (let d = 1; d <= daysInMonth; d++) {
      days.push({ day: d, isCurrentMonth: true, date: `${year}-${String(month + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}` });
    }

    const remaining = 42 - days.length;
    for (let d = 1; d <= remaining; d++) {
      const nextMonth = month === 11 ? 0 : month + 1;
      const nextYear = month === 11 ? year + 1 : year;
      days.push({ day: d, isCurrentMonth: false, date: `${nextYear}-${String(nextMonth + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}` });
    }

    return days;
  }, [year, month, daysInMonth, firstDayOfMonth, prevMonthDays]);

  const getEventsForDate = (dateStr: string) => {
    return EVENTS.filter((event) => {
      if (event.date === dateStr) return true;
      if (event.endDate) {
        return dateStr >= event.date && dateStr <= event.endDate;
      }
      return false;
    });
  };

  const monthEvents = EVENTS.filter((e) => {
    const eventMonth = parseInt(e.date.split('-')[1]) - 1;
    const eventYear = parseInt(e.date.split('-')[0]);
    return eventMonth === month && eventYear === year;
  }).filter((e) => filterType === 'all' || e.type === filterType);

  const prevMonth = () => setCurrentDate(new Date(year, month - 1, 1));
  const nextMonth = () => setCurrentDate(new Date(year, month + 1, 1));

  if (!currentDate) return null;

  return (
    <>
      <PageHero
        title="Academic Calendar"
        subtitle="Stay up to date with important school dates, Islamic events, exams, and activities"
        breadcrumb="Home / Education / Academic Calendar"
      />

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Controls */}
          <AnimatedSection className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-2">
              <button onClick={prevMonth} className="p-2 hover:bg-gray-100 rounded-lg transition-colors" aria-label="Previous month">
                <ChevronLeft size={20} />
              </button>
              <h2 className="text-2xl font-heading font-bold text-charcoal min-w-[220px] text-center">
                {MONTH_NAMES[month]} {year}
              </h2>
              <button onClick={nextMonth} className="p-2 hover:bg-gray-100 rounded-lg transition-colors" aria-label="Next month">
                <ChevronRight size={20} />
              </button>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setView('calendar')}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${view === 'calendar' ? 'bg-white shadow text-primary-600' : 'text-gray-600 hover:text-gray-800'}`}
                >
                  Calendar
                </button>
                <button
                  onClick={() => setView('list')}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${view === 'list' ? 'bg-white shadow text-primary-600' : 'text-gray-600 hover:text-gray-800'}`}
                >
                  List
                </button>
              </div>
            </div>
          </AnimatedSection>

          {/* Type filters */}
          <AnimatedSection delay={100} className="flex flex-wrap justify-center gap-2 mb-8">
            {[
              { key: 'all', label: 'All Events' },
              { key: 'academic', label: 'Academic' },
              { key: 'islamic', label: 'Islamic' },
              { key: 'holiday', label: 'Holidays' },
              { key: 'exam', label: 'Exams' },
              { key: 'event', label: 'Events' },
            ].map((filter) => (
              <button
                key={filter.key}
                onClick={() => setFilterType(filter.key)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filterType === filter.key
                    ? 'bg-primary-500 text-white shadow-md'
                    : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                {filter.key !== 'all' && (
                  <span className={`w-2.5 h-2.5 rounded-full ${EVENT_COLORS[filter.key]?.dot}`} />
                )}
                {filter.label}
              </button>
            ))}
          </AnimatedSection>

          {/* Calendar Grid View */}
          {view === 'calendar' && (
            <AnimatedSection animation="zoom" delay={200}>
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                {/* Day headers */}
                <div className="grid grid-cols-7 bg-primary-50">
                  {DAY_NAMES.map((day) => (
                    <div key={day} className="p-3 text-center text-sm font-bold text-primary-700 border-b border-primary-100">
                      {day}
                    </div>
                  ))}
                </div>

                {/* Calendar cells */}
                <div className="grid grid-cols-7">
                  {calendarDays.map((dayObj, i) => {
                    const dayEvents = getEventsForDate(dayObj.date).filter((e) => filterType === 'all' || e.type === filterType);
                    const isToday = dayObj.date === new Date().toISOString().split('T')[0];

                    return (
                      <div
                        key={i}
                        className={`min-h-[90px] sm:min-h-[110px] p-1.5 sm:p-2 border-b border-r border-gray-100 transition-colors ${
                          dayObj.isCurrentMonth ? 'bg-white' : 'bg-gray-50'
                        } ${dayEvents.length > 0 ? 'cursor-pointer hover:bg-primary-50/50' : ''}`}
                        onClick={() => dayEvents.length > 0 && setSelectedEvent(dayEvents[0])}
                      >
                        <span className={`text-sm font-medium inline-flex items-center justify-center w-7 h-7 rounded-full ${
                          isToday ? 'bg-primary-500 text-white' : dayObj.isCurrentMonth ? 'text-charcoal' : 'text-gray-300'
                        }`}>
                          {dayObj.day}
                        </span>
                        <div className="mt-1 space-y-0.5">
                          {dayEvents.slice(0, 2).map((event) => (
                            <div
                              key={event.id}
                              className={`text-[10px] sm:text-xs px-1.5 py-0.5 rounded truncate ${EVENT_COLORS[event.type].bg} ${EVENT_COLORS[event.type].text}`}
                            >
                              {event.title}
                            </div>
                          ))}
                          {dayEvents.length > 2 && (
                            <div className="text-[10px] text-gray-400 px-1.5">+{dayEvents.length - 2} more</div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </AnimatedSection>
          )}

          {/* List View */}
          {view === 'list' && (
            <AnimatedSection animation="fade-up" delay={200}>
              <div className="space-y-4">
                {monthEvents.length === 0 ? (
                  <div className="text-center py-16 bg-white rounded-2xl border border-gray-100">
                    <Calendar size={48} className="mx-auto mb-4 text-gray-300" />
                    <p className="text-gray-500 text-lg">No events this month</p>
                  </div>
                ) : (
                  monthEvents.map((event, i) => (
                    <div
                      key={event.id}
                      className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-all cursor-pointer hover:-translate-y-0.5 duration-300"
                      onClick={() => setSelectedEvent(event)}
                      style={{ animationDelay: `${i * 50}ms` }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="text-center flex-shrink-0 bg-primary-50 rounded-xl p-3 min-w-[60px]">
                          <div className="text-xs text-primary-500 font-medium uppercase">
                            {MONTH_NAMES[parseInt(event.date.split('-')[1]) - 1].slice(0, 3)}
                          </div>
                          <div className="text-2xl font-heading font-bold text-primary-700">
                            {parseInt(event.date.split('-')[2])}
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-heading font-bold text-charcoal">{event.title}</h3>
                            <span className={`px-2 py-0.5 rounded-full text-[10px] font-medium ${EVENT_COLORS[event.type].badge}`}>
                              {event.type}
                            </span>
                          </div>
                          <p className="text-gray-600 text-sm">{event.description}</p>
                          <div className="flex items-center gap-4 mt-2 text-xs text-gray-400">
                            {event.time && (
                              <span className="flex items-center gap-1"><Clock size={12} /> {event.time}</span>
                            )}
                            {event.location && (
                              <span className="flex items-center gap-1"><MapPin size={12} /> {event.location}</span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </AnimatedSection>
          )}

          {/* Legend */}
          <AnimatedSection delay={300} className="mt-8 flex flex-wrap justify-center gap-4 text-sm">
            {Object.entries(EVENT_COLORS).map(([type, colors]) => (
              <div key={type} className="flex items-center gap-2">
                <span className={`w-3 h-3 rounded-full ${colors.dot}`} />
                <span className="text-gray-600 capitalize">{type}</span>
              </div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* Event Detail Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={() => setSelectedEvent(null)}>
          <div className="bg-white rounded-3xl max-w-md w-full p-8 relative animate-fade-in-up shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setSelectedEvent(null)} className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full" aria-label="Close">
              <X size={20} />
            </button>

            <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${EVENT_COLORS[selectedEvent.type].badge} mb-4`}>
              {selectedEvent.type}
            </span>

            <h3 className="text-2xl font-heading font-bold text-charcoal mb-2">{selectedEvent.title}</h3>

            <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
              <Calendar size={14} />
              <span>{selectedEvent.date}{selectedEvent.endDate ? ` — ${selectedEvent.endDate}` : ''}</span>
            </div>

            <p className="text-gray-600 leading-relaxed mb-4">{selectedEvent.description}</p>

            {(selectedEvent.time || selectedEvent.location) && (
              <div className="border-t border-gray-100 pt-4 space-y-2">
                {selectedEvent.time && (
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Clock size={14} className="text-primary-500" />
                    {selectedEvent.time}
                  </div>
                )}
                {selectedEvent.location && (
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <MapPin size={14} className="text-primary-500" />
                    {selectedEvent.location}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

