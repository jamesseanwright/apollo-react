import React from 'react';

export default ({ events }) => (
    <ul>
        {(events || []).map(({ id, summary }) => (
            <li key={id}>{summary}</li>
        ))}
    </ul>
);
