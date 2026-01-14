import { useState } from 'react';
import './InteractiveMaps.css';

const InteractiveMaps = () => {
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [tooltip, setTooltip] = useState({
    visible: false,
    x: 0,
    y: 0,
    name: '',
  });

  // Simple SVG Map Data (Mocking a map with 3 regions)
  const regions = [
    {
      id: 'region1',
      name: 'Northern Zone',
      d: 'M10,10 L190,10 L190,90 L10,90 Z',
      color: '#4CAF50',
      info: 'Rainforest area with high biodiversity.',
    },
    {
      id: 'region2',
      name: 'Eastern Zone',
      d: 'M200,10 L390,10 L390,190 L200,190 Z',
      color: '#2196F3',
      info: 'Coastal region known for fisheries.',
    },
    {
      id: 'region3',
      name: 'Southern Zone',
      d: 'M10,100 L190,100 L190,290 L10,290 Z',
      color: '#FF9800',
      info: 'Desert terrain, rich in minerals.',
    },
  ];

  const handleMouseEnter = (e, region) => {
    setTooltip({
      visible: true,
      x: e.clientX,
      y: e.clientY,
      name: region.name,
    });
  };

  const handleMouseMove = (e) => {
    setTooltip((prev) => ({ ...prev, x: e.clientX, y: e.clientY }));
  };

  const handleMouseLeave = () => {
    setTooltip((prev) => ({ ...prev, visible: false }));
  };

  const handleClick = (region) => {
    setSelectedRegion(region);
  };

  return (
    <div className="map-container">
      <h2>Interactive SVG Map</h2>
      <p>Hover and click on regions to see details.</p>

      <div className="map-wrapper">
        <svg viewBox="0 0 400 300" className="svg-map">
          {regions.map((region) => (
            <path
              key={region.id}
              d={region.d}
              fill={region.color}
              stroke="white"
              strokeWidth="2"
              className={`map-region ${
                selectedRegion?.id === region.id ? 'active' : ''
              }`}
              onMouseEnter={(e) => handleMouseEnter(e, region)}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleClick(region)}
            />
          ))}
        </svg>

        {tooltip.visible && (
          <div
            className="tooltip"
            style={{ top: tooltip.y - 40, left: tooltip.x + 10 }}
          >
            {tooltip.name}
          </div>
        )}
      </div>

      <div className="info-panel">
        {selectedRegion ? (
          <div className="region-details">
            <h3 style={{ color: selectedRegion.color }}>
              {selectedRegion.name}
            </h3>
            <p>{selectedRegion.info}</p>
          </div>
        ) : (
          <p className="placeholder-text">Select a region to view details</p>
        )}
      </div>
    </div>
  );
};

export default InteractiveMaps;
