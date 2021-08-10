import { ChatEngine } from "react-chat-engine";
import './App.css';
import ChatFeed from './components/ChatFeed.jsx';
import LoginForm from "./components/LoginForm.jsx";

function App() {

  if(!localStorage.getItem('username')) return <LoginForm />

  return (
    <div className="App">
      <ChatEngine 
        height="100vh"
        projectID="a48ea372-c749-4367-a60c-bd64280346e8"
        userName="john"
        userSecret="qwerty"
        renderChatFeed = { (chatAppProps) => <ChatFeed {...chatAppProps } />}
        onNewMessage = { () => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
      />
    </div>
  );
}

export default App;
