import { jsx as _jsx } from "react/jsx-runtime";


const root = ReactDOM.createRoot(document.getElementById('root'));

const element = /*#__PURE__*/_jsx("div", { className: "greeting", children: "Hello world!" });
const heading = React.createElement('h1', {}, 'Hello, React!');

console.log(element, heading)
root.render(heading);