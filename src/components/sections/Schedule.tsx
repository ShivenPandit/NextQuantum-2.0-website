import Image from 'next/image';

interface ScheduleItem {
  time: string;
  title: string;
  description: string;
  icon: string;
  day: 1 | 2;
}

const Schedule = () => {
  const scheduleItems: ScheduleItem[] = [
    // Day 1 - April 4, 2025 (Friday)
    {
      time: "08:00 AM - 09:30 AM",
      title: "Registration & Check-in",
      description: "Welcome pack distribution and team registration verification",
      icon: "🎫",
      day: 1
    },
    {
      time: "09:30 AM - 10:30 AM",
      title: "Opening Ceremony",
      description: "Welcome address, introduction to themes and tracks, rules briefing",
      icon: "🎭",
      day: 1
    },
    {
      time: "10:30 AM - 12:00 PM",
      title: "Team Formation & Networking",
      description: "Opportunity for solo participants to form teams and initial brainstorming",
      icon: "👥",
      day: 1
    },
    {
      time: "12:00 PM - 01:00 PM",
      title: "Lunch Break",
      description: "Networking lunch with mentors",
      icon: "🍽️",
      day: 1
    },
    {
      time: "01:00 PM - 02:00 PM",
      title: "Workshop: API Integration",
      description: "Hands-on workshop on integrating popular APIs into your projects",
      icon: "🔌",
      day: 1
    },
    {
      time: "02:00 PM",
      title: "Hacking Begins!",
      description: "Official start of the 24-hour hackathon",
      icon: "🚀",
      day: 1
    },
    {
      time: "03:30 PM - 04:30 PM",
      title: "Workshop: UI/UX Design",
      description: "Creating compelling user experiences for your hackathon projects",
      icon: "🎨",
      day: 1
    },
    {
      time: "07:00 PM - 08:00 PM",
      title: "Dinner",
      description: "Refuel and continue hacking",
      icon: "🍕",
      day: 1
    },
    {
      time: "09:00 PM - 10:00 PM",
      title: "Mentor Sessions",
      description: "One-on-one mentoring with industry experts",
      icon: "👨‍🏫",
      day: 1
    },
    {
      time: "12:00 AM",
      title: "Midnight Snacks",
      description: "Energy boost for the night owls",
      icon: "🌙",
      day: 1
    },
    
    // Day 2 - April 5, 2025 (Saturday)
    {
      time: "07:00 AM - 08:00 AM",
      title: "Breakfast",
      description: "Morning fuel for hackers",
      icon: "☕",
      day: 2
    },
    {
      time: "10:00 AM - 11:00 AM",
      title: "Progress Check-in",
      description: "Teams share their progress with mentors",
      icon: "📊",
      day: 2
    },
    {
      time: "12:00 PM - 01:00 PM",
      title: "Lunch Break",
      description: "Final lunch before submission deadline",
      icon: "🥗",
      day: 2
    },
    {
      time: "02:30 PM",
      title: "Code Freeze",
      description: "Submission deadline - all coding stops",
      icon: "❄️",
      day: 2
    },
    {
      time: "02:30 PM - 03:30 PM",
      title: "Preparation Time",
      description: "Teams prepare their presentations",
      icon: "⏱️",
      day: 2
    },
    {
      time: "03:30 PM - 05:30 PM",
      title: "Project Presentations",
      description: "Teams present their solutions to judges and audience",
      icon: "🎤",
      day: 2
    },
    {
      time: "05:30 PM - 06:15 PM",
      title: "Judging & Deliberation",
      description: "Judges evaluate projects while participants network",
      icon: "⚖️",
      day: 2
    },
    {
      time: "06:15 PM - 07:30 PM",
      title: "Awards Ceremony",
      description: "Announcement of winners and prize distribution",
      icon: "🏆",
      day: 2
    }
  ];
  
  // Filter by day
  const day1Items = scheduleItems.filter(item => item.day === 1);
  const day2Items = scheduleItems.filter(item => item.day === 2);

  return (
    <section id="schedule" className="py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Event <span className="text-blue-400">Schedule</span></h2>
          <p className="text-slate-300 max-w-3xl mx-auto">
            24 hours of innovation, learning, and creativity
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-slate-900 p-6 rounded-lg border border-slate-700 text-center">
              <div className="w-16 h-16 bg-blue-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🗓️</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Day 1</h3>
              <p className="text-blue-400 font-semibold">Friday, April 4, 2025</p>
              <p className="text-slate-400 mt-2">Registration, Opening, and Hacking Begins</p>
            </div>
            
            <div className="bg-slate-900 p-6 rounded-lg border border-slate-700 text-center">
              <div className="w-16 h-16 bg-purple-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🏆</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Day 2</h3>
              <p className="text-purple-400 font-semibold">Saturday, April 5, 2025</p>
              <p className="text-slate-400 mt-2">Final Coding, Submissions, and Awards</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Day 1 Schedule */}
            <div>
              <div className="sticky top-24">
                <h3 className="text-xl font-bold mb-6 text-center bg-blue-900/40 text-white py-3 px-4 rounded-lg">
                  Day 1 <span className="text-blue-400">Schedule</span>
                </h3>
                <div className="space-y-6">
                  {day1Items.map((item, index) => (
                    <div key={`day1-${index}`} className="bg-slate-900 rounded-lg p-4 border border-slate-700 relative overflow-hidden">
                      <div className="flex gap-4">
                        <div className="w-10 h-10 bg-blue-900/20 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-lg">{item.icon}</span>
                        </div>
                        <div>
                          <span className="text-blue-400 text-sm font-medium">{item.time}</span>
                          <h4 className="text-white font-bold">{item.title}</h4>
                          <p className="text-slate-400 text-sm mt-1">{item.description}</p>
                        </div>
                      </div>
                      <div className="absolute left-0 top-0 w-1 h-full bg-blue-500"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Day 2 Schedule */}
            <div>
              <div className="sticky top-24">
                <h3 className="text-xl font-bold mb-6 text-center bg-purple-900/40 text-white py-3 px-4 rounded-lg">
                  Day 2 <span className="text-purple-400">Schedule</span>
                </h3>
                <div className="space-y-6">
                  {day2Items.map((item, index) => (
                    <div key={`day2-${index}`} className="bg-slate-900 rounded-lg p-4 border border-slate-700 relative overflow-hidden">
                      <div className="flex gap-4">
                        <div className="w-10 h-10 bg-purple-900/20 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-lg">{item.icon}</span>
                        </div>
                        <div>
                          <span className="text-purple-400 text-sm font-medium">{item.time}</span>
                          <h4 className="text-white font-bold">{item.title}</h4>
                          <p className="text-slate-400 text-sm mt-1">{item.description}</p>
                        </div>
                      </div>
                      <div className="absolute left-0 top-0 w-1 h-full bg-purple-500"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-slate-300 mb-6">The schedule is subject to minor changes. All participants will receive updated agendas via email.</p>
            <a href="https://nextquantum2.devfolio.co/" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition duration-200">
              Register on Devfolio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule; 