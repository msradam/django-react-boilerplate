import React from 'react'

const snippets = ({ snippets }) => {
  return (
    <div>
      {snippets.map((snippet) => (
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{snippet.title}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{snippet.code}</h6>
            <h6 class="card-subtitle mb-2 text-muted">{snippet.linenos}</h6>
            <h6 class="card-subtitle mb-2 text-muted">{snippet.language}</h6>
            <h6 class="card-subtitle mb-2 text-muted">{snippet.style}</h6>
            <p class="card-text"></p>
          </div>
        </div>
      ))}
    </div>
  )
};

export default snippets