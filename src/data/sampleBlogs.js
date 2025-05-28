export const sampleBlogs = [
  {
    id: '1',
    title: 'Getting Started with React',
    content: `React is a powerful JavaScript library for building user interfaces. It allows developers to create reusable UI components and efficiently update the DOM when data changes.

    React uses a virtual DOM, which is a lightweight representation of the real DOM. When the state of your application changes, React updates the virtual DOM, compares it with the previous version, and then only updates the real DOM with what has actually changed. This approach makes React applications fast and efficient.

    To get started with React, you'll need to have Node.js installed on your machine. Then, you can create a new React application using Create React App, which sets up a new React project with a good default configuration.

    Once you have your project set up, you can start creating components. React components are the building blocks of any React application. They can be either class components or function components, though function components with hooks are now the preferred approach.`,
    date: '2023-04-15',
    summary: 'React is a powerful JavaScript library for building user interfaces. It allows developers to create reusable UI components and efficiently update the DOM when data changes.'
  },
  {
    id: '2',
    title: 'Understanding React Hooks',
    content: `React Hooks were introduced in React 16.8 and have revolutionized how we write React components. Hooks allow you to use state and other React features without writing a class component.

    The most commonly used hooks are useState and useEffect. useState allows you to add state to your functional components, while useEffect lets you perform side effects in your components, such as data fetching or manually changing the DOM.

    There are also other built-in hooks like useContext, useReducer, useCallback, useMemo, and useRef, each serving a specific purpose. You can even create your own custom hooks to reuse stateful logic across different components.

    One of the main advantages of hooks is that they make your code more readable and testable by organizing related logic in one place, rather than splitting it across different lifecycle methods.

    To use hooks effectively, it's important to understand the rules of hooks: only call hooks at the top level of your component (not inside loops, conditions, or nested functions), and only call hooks from React function components or custom hooks.`,
    date: '2023-05-20',
    summary: 'React Hooks were introduced in React 16.8 and have revolutionized how we write React components. Hooks allow you to use state and other React features without writing a class component.'
  },
  {
    id: '3',
    title: 'CSS-in-JS vs. CSS Modules',
    content: `When it comes to styling React components, there are several approaches you can take. Two popular options are CSS-in-JS libraries like Styled Components or Emotion, and CSS Modules.

    CSS-in-JS allows you to write CSS directly in your JavaScript files. This approach offers benefits like scoped styles (no more class name conflicts), dynamic styling based on props, and the ability to share variables between your JavaScript and CSS.

    On the other hand, CSS Modules let you write traditional CSS files, but with local scope by default. When you import a CSS Module into a component, you get an object that maps the class names from your CSS to unique identifiers, preventing style conflicts between components.

    Both approaches have their pros and cons. CSS-in-JS provides a more integrated experience and can be more powerful for dynamic styling, but it can increase your bundle size and may have a slight runtime cost. CSS Modules have less runtime overhead and allow you to use traditional CSS tooling, but they may not be as flexible for dynamic styling.

    Your choice between these approaches should depend on your project's needs, your team's familiarity with the tools, and your personal preferences.`,
    date: '2023-06-10',
    summary: 'When it comes to styling React components, there are several approaches you can take. Two popular options are CSS-in-JS libraries like Styled Components or Emotion, and CSS Modules.'
  }
];