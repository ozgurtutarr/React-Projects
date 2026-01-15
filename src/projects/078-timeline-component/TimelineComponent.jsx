import './TimelineComponent.css';

const TimelineComponent = () => {
  const events = [
    {
      id: 1,
      date: '2023-10-01',
      title: 'Project Kickoff',
      description: 'Initial meeting with stakeholders to define requirements.',
      icon: '🚀',
    },
    {
      id: 2,
      date: '2023-11-15',
      title: 'Design Phase',
      description: 'Completed UI/UX designs and got approval.',
      icon: '🎨',
    },
    {
      id: 3,
      date: '2024-01-10',
      title: 'Development Sprint 1',
      description: 'Frontend core structure and authentication implementation.',
      icon: '💻',
    },
    {
      id: 4,
      date: '2024-03-20',
      title: 'Alpha Release',
      description: 'Internal testing release for QA team.',
      icon: '🧪',
    },
    {
      id: 5,
      date: '2024-05-05',
      title: 'Beta Launch',
      description: 'Public beta opened for registered users.',
      icon: '📢',
    },
  ];

  return (
    <div className="timeline-container">
      <h2>Project Roadmap Timeline</h2>

      <div className="timeline">
        {events.map((event, index) => (
          <div
            key={event.id}
            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
          >
            <div className="timeline-icon">{event.icon}</div>
            <div className="timeline-content">
              <span className="timeline-date">{event.date}</span>
              <h3>{event.title}</h3>
              <p>{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimelineComponent;
