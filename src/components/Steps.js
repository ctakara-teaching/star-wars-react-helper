import React from 'react';

const Steps = () => {
    return (
        <div>
            <h1>Steps</h1>
            <ol>
                <li>create the application and set up the folder structure.  Include the following folders in src:
                    <ul>
                        <li>components</li>
                        <li>services</li>
                    </ul>
                </li>
                <li>create my star ships component</li>
                <li>useEffect to load the api data on mount - but make it a helper function </li>
                <li>then move that helper function into a service folder/file and import that into my component</li>
            </ol>
        </div>
    );
}

export default Steps;
