import React, { Component } from 'react'
import styles from './todo-list.module.css'
console.log(styles);

class ToDoList extends Component {
  render () {
    const uuidv4 = require('uuid/v4');
    return (
<div className="todo-list">
<h4>TODO:</h4>
      <ul>
          <li className={styles.normal}> Turn list of blog posts into a drop down menu, display the blog post on the page so can scroll through, or maybe create two display options like instagram-- a page of thumbnail/preview links vs a scroll through</li>
          <li>write a function to alphabetize the list of links on this page</li>
          <li className={styles.done}>write a function to generate unique keys.  Check old assignments for reference
            <ul><li>using uuid, ids are generated</li></ul>
          </li>
          <li className={styles.done}>Turn this list component into a react component so can style it</li>
          <li className={styles.indent}>for more info on css modules see this: <a href="https://www.gatsbyjs.org/tutorial/part-two/">Gatsby Docs</a></li>
        </ul>
</div>
    );
  }
}

export default ToDoList;