import React, { Component } from 'react'
import styles from './notes.module.css'
console.log(styles);

class Notes extends Component {
  render () {
    const uuidv4 = require('uuid/v4');
    return (
<div class={styles.notes}>
<h4>NOTES:</h4>
<h5>CSS</h5>
<p></p>

</div>
    );
  }
}

export default Notes;