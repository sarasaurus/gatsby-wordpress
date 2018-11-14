import React, { Component } from 'react'
import styles from './todo-list.module.css'
console.log(styles);

class ToDoList extends Component {
  render () {
    const uuidv4 = require('uuid/v4');
    return (
<div class="todo-list">
<h4>TODO:</h4>
      <ul>
          <li>write a function to alphabetize the list of links on this page</li>
          <li class={styles.done}>write a function to generate unique keys.  Check old assignments for reference
            <ul><li>using uuid, ids are generated</li></ul>
          </li>
          <li class={styles.done}>Turn this list component into a react component so can style it</li>
          <li class={styles.indent}>for more info on css modules see this: <a href="https://www.gatsbyjs.org/tutorial/part-two/">Gatsby Docs</a></li>
        </ul>
</div>
    );
  }
}

export default ToDoList;