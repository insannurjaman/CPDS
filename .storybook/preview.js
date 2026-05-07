import React from 'react';
import '../src/styles/tokens.css';
import '../src/styles/global.css';

/** @type { import('@storybook/react-vite').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    a11y: {
      test: 'todo'
    }
  },
  globalTypes: {
    brand: {
      name: 'Brand',
      description: 'Design system brand',
      defaultValue: 'voltfunded',
      toolbar: {
        icon: 'paintbrush',
        items: [
          { value: 'voltfunded', title: 'VoltFunded' },
          { value: 'instantfunding', title: 'InstantFunding' }
        ]
      }
    },
    theme: {
      name: 'Theme',
      description: 'Light or dark theme',
      defaultValue: 'light',
      toolbar: {
        icon: 'circlehollow',
        items: [
          { value: 'light', title: 'Light' },
          { value: 'dark', title: 'Dark' }
        ]
      }
    }
  },
  decorators: [
    (Story, context) => {
      const brand = context.globals.brand || 'voltfunded';
      const theme = context.globals.theme || 'light';
      
      return React.createElement(
        'div',
        { 
          'data-brand': brand, 
          'data-theme': theme, 
          style: { 
            minHeight: '100vh',
            width: '100%',
            backgroundColor: 'var(--color-background-page)',
            color: 'var(--color-text-primary)',
            transition: 'background-color 0.3s ease, color 0.3s ease'
          }
        },
        React.createElement(Story)
      )
    }
  ]
};

export default preview;
