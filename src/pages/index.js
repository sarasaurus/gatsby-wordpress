import React, { Component } from 'react'
import uuid from 'uuid';
import { Link } from 'gatsby'

import Layout from '../components/layout'
import ToDoList from '../components/todo-list'
import Notes from '../components/notes'
class IndexPage extends Component {
render() {
  const uuidv4 = require('uuid/v4');
  const exampleSites= [
  <a href="https://portfolio.dangercode.net/">Danger Code</a>,
  <a href="https://wideeye.co/">Wide Eye</a>, 
  <a href="/k-create.com">Kristoffer Hedstrom</a>,
  <a href="https://formidable.com/">Formidable Labs</a>,
  <a href="https://www.walltowall.com/">Wall to Wall</a>,
  ];
  return (
    <Layout>
    <h1>Gatsby with Wordpress</h1>
    <h2>GOALS:</h2>
    <ul>
      <li>Build a portfolio site using wordpress as the CMS</li>
      <li>Use good CSS and CSS organization</li>
      <li>Practice using react components to organize the site structure</li>
      <li>Explore this set up as a possible option for client websites</li>
    </ul>
    <h2>PLAN/FILE STRUCTURE:</h2>
    <pre>
   {`src
  ├── components
  |   ├── header.css
  │   ├── header.js
  │   ├── post.css
  │   ├── post.js
  |   ├── footer.css
  │   ├── footer.js
  │   ├── layout.css
  │   └── layout.js
  ├── assets
  │   └── logo.png
  └── pages
      ├── 404.js
      ├── about.js
      ├── blog.js
      ├── contact.js
      ├── index.js
      └── portfolio.js
       `}
    </pre>
  <h2>Example Sites:</h2>
  <ul>
    {exampleSites.map(ele=>{
      // const regex=/">/gm;
      // const liKey = ele.search(regex);
      // console.log('list key', liKey);
      return <li key= {uuidv4()} >{ ele }</li>;
    })}
  </ul>
<ToDoList />
<Notes />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
  )
}
}

export default IndexPage;
