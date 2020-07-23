import React from 'react';

const defaultColor = {
    color: {
        baseColor: '#1976d2',
        baseBackgroundColor: '#D9EDFE',
        baseLightColor: '#a3d2fa',
        baseLightBackgroundColor: '#f5fcff',
        baseBoldColor: '#045EA8',
        baseTitleColor: '#444',
        baseTitleLightColor: '#aaa',
    },
}

const ThemeContext = React.createContext(defaultColor);

export default ThemeContext;