
import React from 'react';
import { TimelineEvent, TimelineEventStatus } from '../types';

interface TimelineEventCardProps {
  event: TimelineEvent;
  isLast: boolean;
}

const TimelineEventCard: React.FC<TimelineEventCardProps> = ({ event, isLast }) => {
  let statusColor = 'text-gray-400';
  let borderColor = 'border-gray-700';
  let iconBgColor = 'bg-gray-700';

  if (event.status === TimelineEventStatus.COMPLETED) {
    statusColor = 'text-green-400';
    borderColor = 'border-green-500';
    iconBgColor = 'bg-green-500';
  } else if (event.status === TimelineEventStatus.IN_PROGRESS) {
    statusColor = 'text-yellow-400';
    borderColor = 'border-yellow-500';
    iconBgColor = 'bg-yellow-500';
  } else if (event.status === TimelineEventStatus.PLANNED) {
    statusColor = 'text-purple-400';
    borderColor = 'border-purple-500';
    iconBgColor = 'bg-purple-500';
  }

  return (
    <div className="relative flex items-start group">
      {/* Timeline Line and Dot */}
      <div className={`absolute left-5 top-5 -ml-px w-0.5 h-full ${isLast ? 'bg-transparent' : 'bg-gray-700 group-hover:bg-blue-500 transition-colors duration-300'}`}></div>
      <div className={`relative z-10 flex items-center justify-center w-10 h-10 rounded-full ${iconBgColor} text-white shadow-md group-hover:scale-110 transition-transform duration-300`}>
        {event.icon || <span className="text-lg">❖</span>}
      </div>

      {/* Content Card */}
      <div className={`ml-6 md:ml-8 p-6 bg-gray-800 rounded-lg shadow-xl border-l-4 ${borderColor} w-full transform transition-all duration-300 group-hover:shadow-blue-500/30`}>
        <p className={`text-sm font-semibold mb-1 ${statusColor}`}>{event.date} - <span className="capitalize">{event.status.replace('-', ' ')}</span></p>
        <h4 className="text-xl font-bold mb-2 text-gray-100 group-hover:text-blue-300 transition-colors duration-300">{event.title}</h4>
        <p className="text-gray-300 text-sm leading-relaxed">{event.description}</p>
      </div>
    </div>
  );
};


interface LearningJourneyProps {
  events: TimelineEvent[];
}

export const LearningJourney: React.FC<LearningJourneyProps> = ({ events }) => {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="space-y-12">
        {events.map((event, index) => (
          <TimelineEventCard key={event.id} event={event} isLast={index === events.length - 1} />
        ))}
      </div>
    </div>
  );
};
