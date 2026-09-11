# Dev Stack

Dev Stack is a React and TypeScript project where users can explore different technologies and build their own technology stack.

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- Vite
- React Toastify

## Features

1. **Add to Stack** - Users can add technologies to their personal stack.
2. **Remove Technologies** - Users can remove individual technologies from the stack.
3. **Remove All** - Users can remove all selected technologies at once.

## React Questions & Answers

### 1. What is JSX, and why is it used in React?

Answer: JSX lets us write HTML-like code inside JavaScript. It makes React UI easier to write and understand.

### 2. What is the difference between props and state?

Answer: Props are data passed from a parent to a child. State is data managed inside a component.

### 3. What does the useState hook do, and where did you use it in this project?

Answer: useState stores and updates component data. I used it to manage the selected technologies in the stack.

### 4. What does the useEffect hook do, and why did you need it to load the JSON data?

Answer: useEffect runs code when a component renders or its data changes. I used it to load the JSON data when the app starts.

### 5. Why does every item in a .map() list need a unique key prop?

Answer: A unique key helps React identify each item and update the list efficiently.

### 6. What is conditional rendering? Show one place you used it.

Answer: Conditional rendering means showing different UI based on a condition. I used it to show **"Your stack is empty"** when no technology is selected.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

Answer: The parent passes data using **props**. The child can send data back by calling a function passed through props.