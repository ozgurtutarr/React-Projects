import { useState } from 'react';
import './JobBoard.css';

const MOCK_JOBS = [
  {
    id: 1,
    title: 'Frontend Developer',
    company: 'TechCorp',
    type: 'Full-time',
    location: 'Remote',
    salary: '$80k - $120k',
    tags: ['React', 'CSS'],
  },
  {
    id: 2,
    title: 'Backend Engineer',
    company: 'DataSystems',
    type: 'Full-time',
    location: 'New York, NY',
    salary: '$100k - $150k',
    tags: ['Node.js', 'SQL'],
  },
  {
    id: 3,
    title: 'UI/UX Designer',
    company: 'CreativeStudio',
    type: 'Contract',
    location: 'Remote',
    salary: '$50/hr',
    tags: ['Figma', 'Design'],
  },
  {
    id: 4,
    title: 'DevOps Specialist',
    company: 'CloudNet',
    type: 'Full-time',
    location: 'San Francisco, CA',
    salary: '$130k+',
    tags: ['AWS', 'Docker'],
  },
  {
    id: 5,
    title: 'Junior Web Dev',
    company: 'StartUp Inc',
    type: 'Part-time',
    location: 'London, UK',
    salary: '£30k',
    tags: ['HTML', 'JS'],
  },
  {
    id: 6,
    title: 'Product Manager',
    company: 'BizSolutions',
    type: 'Full-time',
    location: 'Remote',
    salary: '$110k',
    tags: ['Agile', 'Jira'],
  },
];

const JobBoard = () => {
  const [jobs, setJobs] = useState(MOCK_JOBS);
  const [filters, setFilters] = useState({
    search: '',
    type: 'All',
    location: 'All',
  });

  const handleFilterChange = (key, value) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    applyFilters(newFilters);
  };

  const applyFilters = (currentFilters) => {
    let filtered = MOCK_JOBS;

    if (currentFilters.search) {
      const term = currentFilters.search.toLowerCase();
      filtered = filtered.filter(
        (job) =>
          job.title.toLowerCase().includes(term) ||
          job.company.toLowerCase().includes(term) ||
          job.tags.some((tag) => tag.toLowerCase().includes(term))
      );
    }

    if (currentFilters.type !== 'All') {
      filtered = filtered.filter((job) => job.type === currentFilters.type);
    }

    if (currentFilters.location !== 'All') {
      if (currentFilters.location === 'Remote') {
        filtered = filtered.filter((job) => job.location === 'Remote');
      } else {
        filtered = filtered.filter((job) => job.location !== 'Remote');
      }
    }

    setJobs(filtered);
  };

  return (
    <div className="job-board-container">
      <header className="job-header">
        <h2>🚀 DevJobs Board</h2>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search by title, company, or tag..."
            value={filters.search}
            onChange={(e) => handleFilterChange('search', e.target.value)}
          />
        </div>
      </header>

      <div className="job-content">
        <aside className="job-filters">
          <div className="filter-group">
            <h3>Job Type</h3>
            <label>
              <input
                type="radio"
                name="type"
                checked={filters.type === 'All'}
                onChange={() => handleFilterChange('type', 'All')}
              />{' '}
              All
            </label>
            <label>
              <input
                type="radio"
                name="type"
                checked={filters.type === 'Full-time'}
                onChange={() => handleFilterChange('type', 'Full-time')}
              />{' '}
              Full-time
            </label>
            <label>
              <input
                type="radio"
                name="type"
                checked={filters.type === 'Part-time'}
                onChange={() => handleFilterChange('type', 'Part-time')}
              />{' '}
              Part-time
            </label>
            <label>
              <input
                type="radio"
                name="type"
                checked={filters.type === 'Contract'}
                onChange={() => handleFilterChange('type', 'Contract')}
              />{' '}
              Contract
            </label>
          </div>

          <div className="filter-group">
            <h3>Location</h3>
            <label>
              <input
                type="radio"
                name="loc"
                checked={filters.location === 'All'}
                onChange={() => handleFilterChange('location', 'All')}
              />{' '}
              Any
            </label>
            <label>
              <input
                type="radio"
                name="loc"
                checked={filters.location === 'Remote'}
                onChange={() => handleFilterChange('location', 'Remote')}
              />{' '}
              Remote Only
            </label>
            <label>
              <input
                type="radio"
                name="loc"
                checked={filters.location === 'Onsite'}
                onChange={() => handleFilterChange('location', 'Onsite')}
              />{' '}
              Onsite
            </label>
          </div>
        </aside>

        <main className="job-list">
          <p className="job-count">Showing {jobs.length} jobs</p>
          {jobs.map((job) => (
            <div key={job.id} className="job-card">
              <div className="job-logo">{job.company[0]}</div>
              <div className="job-info">
                <h4>{job.title}</h4>
                <p className="company-name">{job.company}</p>
                <div className="job-meta">
                  <span className="job-type">{job.type}</span>
                  <span className="job-loc">{job.location}</span>
                  <span className="job-salary">{job.salary}</span>
                </div>
              </div>
              <div className="job-tags">
                {job.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
              <button className="apply-btn">Apply</button>
            </div>
          ))}
          {jobs.length === 0 && (
            <div className="no-jobs">No jobs found matching your criteria.</div>
          )}
        </main>
      </div>
    </div>
  );
};

export default JobBoard;
