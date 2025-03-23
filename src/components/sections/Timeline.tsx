import React from 'react';

interface TimelineEvent {
  date: string;
  time: string;
  title: string;
  description: string;
}

const Timeline = () => {
  const events: TimelineEvent[] = [
    {
      date: 'March 20, 2025',
      time: '09:00 AM',
      title: 'Registration Opens',
      description: 'Registration opens for teams and individual participants. Early bird registrations get exclusive benefits.'
    },
    {
      date: 'April 2, 2025',
      time: '11:59 PM',
      title: 'Registration Closes',
      description: 'Last day to register for the hackathon. Team formation must be completed by this date.'
    },
    {
      date: 'April 3, 2025',
      time: '06:00 PM',
      title: 'Pre-Hackathon Webinar',
      description: 'Join us for a pre-hackathon webinar to learn about the rules, themes, and get tips from previous winners.'
    },
    {
      date: 'April 4, 2025',
      time: '09:00 AM',
      title: 'Hackathon Begins',
      description: 'Opening ceremony followed by the commencement of the 24-hour hackathon. Get ready to code!'
    },
    {
      date: 'April 4, 2025',
      time: '02:30 PM',
      title: 'Hacking Officially Starts',
      description: 'After workshops and team formation, the official coding period begins.'
    },
    {
      date: 'April 4, 2025',
      time: '09:00 PM',
      title: 'Mentoring Sessions',
      description: 'Scheduled mentoring sessions with industry experts to help guide your project development.'
    },
    {
      date: 'April 5, 2025',
      time: '10:00 AM',
      title: 'Mid-Hackathon Check-in',
      description: 'Teams provide a brief update on their progress. Feedback session with mentors.'
    },
    {
      date: 'April 5, 2025',
      time: '02:30 PM',
      title: 'Submission Deadline',
      description: 'All projects must be submitted by this time. No late submissions will be accepted.'
    },
    {
      date: 'April 5, 2025',
      time: '03:30 PM',
      title: 'Project Presentations',
      description: 'Teams present their projects to judges and other participants.'
    },
    {
      date: 'April 5, 2025',
      time: '06:15 PM',
      title: 'Closing Ceremony',
      description: 'Winners announced, prizes distributed, and closing remarks. Networking session follows.'
    }
  ];

  return (
    <section id="timeline" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Event <span className="text-blue-400">Timeline</span></h2>
          <p className="text-slate-300 max-w-3xl mx-auto">
            Mark your calendar for these important dates and events
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-slate-700 transform md:translate-x-[-50%]"></div>
            
            {/* Timeline events */}
            {events.map((event, index) => (
              <div 
                key={index} 
                className={`relative flex flex-col md:flex-row items-start mb-10 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Date bubble */}
                <div className="absolute left-[-8px] md:left-1/2 top-0 w-4 h-4 rounded-full bg-blue-500 border-4 border-slate-700 transform md:translate-x-[-50%] z-10"></div>
                
                {/* Content */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12 md:text-right'}`}>
                  <div className="bg-slate-800 p-6 rounded-lg shadow-md border border-slate-700">
                    <span className="inline-block px-3 py-1 bg-blue-900/30 text-blue-400 rounded-full text-sm font-medium mb-2">
                      {event.date} • {event.time}
                    </span>
                    <h3 className="text-xl font-bold mb-2 text-white">{event.title}</h3>
                    <p className="text-slate-300">{event.description}</p>
                  </div>
                </div>
                
                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-16">
          <div className="inline-block px-6 py-3 bg-slate-800 text-slate-300 rounded-lg font-medium border border-slate-700">
            Note: All times are in IST (Indian Standard Time)
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline; 