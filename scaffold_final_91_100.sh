#!/bin/bash

# Define projects 91-100
projects=(
  "091-trello-clone"
  "092-video-streaming-mock"
  "093-google-docs-clone"
  "094-zoom-clone-ui"
  "095-figma-clone-basic"
  "096-survey-creator"
  "097-codepen-clone"
  "098-finance-dashboard"
  "099-admin-panel-charts"
  "100-final-project-showcase"
)

base_dir="src/projects"

for project in "${projects[@]}"; do
  # Convert project name to PascalCase for component name (e.g., 091-trello-clone -> TrelloClone)
  component_name=$(echo "$project" | awk -F- '{for(i=2;i<=NF;i++) $i=toupper(substr($i,1,1)) substr($i,2)} 1' | sed 's/-//g')

  mkdir -p "$base_dir/$project"
  
  # Create JSX file
  cat <<EOF > "$base_dir/$project/$component_name.jsx"
import { useState } from 'react';
import './$component_name.css';

const $component_name = () => {
  return (
    <div className="$project-container">
      <h2>$component_name</h2>
      <p>Implementation coming soon...</p>
    </div>
  );
};

export default $component_name;
EOF

  # Create CSS file
  cat <<EOF > "$base_dir/$project/$component_name.css"
.$project-container {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
}
EOF

  echo "Scaffolding complete for $project"
done
