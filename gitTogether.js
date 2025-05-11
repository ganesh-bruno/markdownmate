// User Authentication Module

const users = [
    { id: 1, username: 'user1', password: 'password1' },
    { id: 2, username: 'user2', password: 'password2' }
];

// Function to authenticate user
function authenticate(username, password) {
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        return { success: true, message: 'Authentication successful', userId: user.id };
    } else {
        return { success: false, message: 'Invalid username or password' };
    }
}

// Example usage
const username = 'user1';
const password = 'password1';

const authResult = authenticate(username, password);
console.log(authResult);
// Mermaid diagram flow

// Include Mermaid.js script for rendering diagrams
const mermaidScript = document.createElement('script');
mermaidScript.src = 'https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.js';
mermaidScript.onload = () => {
    mermaid.initialize({ startOnLoad: true });
    console.log('Mermaid.js loaded and initialized.');
};
document.head.appendChild(mermaidScript);