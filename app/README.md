# App Structure Documentation

This directory contains the main application code organized in a clean and maintainable structure.

## Directory Structure

```
app/
├── components/          # Reusable UI components
│   ├── Addtodo.tsx
│   ├── Alltask.tsx
│   ├── Category.tsx
│   ├── Categorydetails.tsx
│   ├── Editmodel.tsx
│   ├── storyview.tsx
│   ├── initialtasks.js
│   └── index.js
├── screens/            # Screen components
│   ├── Home/
│   │   └── HomeScreen.jsx
│   └── index.js
├── navigation/         # Navigation configuration
│   ├── AppNavigator.jsx
│   └── index.js
├── redux/             # State management
│   ├── store.js
│   └── index.js
├── constants/         # App constants
│   ├── styles.js
│   └── index.js
├── App.jsx            # Main app component
├── index.js           # Main exports
└── README.md          # Documentation
```

## Key Features

### Components
- Reusable UI components
- Each component has its own file
- Exported through `components/index.js`

### Screens
- Screen-level components
- Organized by feature
- Exported through `screens/index.js`

### Navigation
- `AppNavigator.jsx`: Main navigation configuration

### Redux
- `store.js`: Redux store configuration (ready for future state management)

### Constants
- `styles.js`: Global styles

## Usage

### Importing Components
```javascript
import { Addtodo, Alltask, Category } from './components';
```

### Importing Screens
```javascript
import { HomeScreen } from './screens';
```

### Using Redux
```javascript
import { store } from './redux';
```

### Using Constants
```javascript
import { styles } from './constants';
```

## Best Practices

1. **Component Organization**: Keep components small and focused
2. **State Management**: Use Redux for global state when needed
3. **Navigation**: Use the navigation system for multi-screen apps
4. **Constants**: Use the constants files for all app-wide values

## Adding New Features

1. Create new components in `components/`
2. Create new screens in `screens/`
3. Add new Redux slices in `redux/` when needed
4. Add new constants in `constants/`
5. Update exports in respective `index.js` files
