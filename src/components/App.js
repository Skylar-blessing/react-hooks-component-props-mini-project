import React from "react";
import Header from "./Header";
import About from "./About";

function App() {
  const blogName = 'blogdata'; 
  const logoImage = 'https://via.placeholder.com/215'; 
  const aboutText = 'To make a static site in React to practice building components, writing JSX, and passing down data as props.'; 
  const posts = [
    { id: 1, title: 'Post 1', date: 'January 1, 1970', preview: 'Preview of post 1...' },
  ];

  return (
    <div className="App">
      <Header blogName={blogName} />
      <About logoImage={logoImage} aboutText={aboutText} />
      <ArticleList posts={posts} />
    </div>
  );
}

export default App;
