# Shopping Cart — React Practice Project

This project is a study-focused React application built as part of The Odin Project – React Curriculum.
The goal was to practice core React concepts such as component composition, state management, routing, and side effects.

This is not a production-ready app, but a learning exercise designed to solidify fundamentals and explore best practices.

## Features

- Multi-page application using React Router
- Home page
- Shop page
- Cart page
- Product data fetched from the FakeStore API
- Shopping cart functionality:
    - Add items to cart
    - Adjust item quantities
    - Remove items from cart
    - Live cart item count in the navigation bar
    - Controlled inputs with increment/decrement controls
    - Basic error and loading handling
    - Modular component structure
    - Styled using CSS Modules
    - Prop validation using PropTypes

## Learning Goals

This project was created to practice and understand:

- Component-driven architecture
- State lifting vs local state
- Derived state vs stored state
- React hooks (useState, useEffect)
- Client-side routing with nested layouts
- Immutable state updates
- Basic accessibility considerations
- Separation of UI concerns
- Some architectural decisions favor clarity and learning over scalability.

## Tech Stack

- React
- React Router
- Vite
- CSS Modules
- FakeStore API
- PropTypes

## Notes & Limitations

- This project is intentionally kept simple and aligned with curriculum requirements.
- Cart logic and validation are implemented for learning purposes and are not fully centralized.
- Some patterns could be refactored (e.g. reducer-based state, shared domain utilities) if this project were extended further.
- No real checkout or payment system is implemented.

## Testing

This project was tested using React Testing Library as part of the curriculum, focusing on component behavior rather than external libraries such as react-router-dom.

## Acknowledgements

The Odin Project
 — for the curriculum and project guidance

FakeStore API
 — for mock product data
