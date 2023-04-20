import React from 'react';

function Article(props) {
  const defaultDate = 'January 1, 1970';
  const date = props.date || defaultDate;
  const minutesToRead = Math.ceil(props.preview.length / 100); 

  function renderMinutesToRead(minutes) {
    const coffeeCups = Math.ceil(minutes / 5);
    const bentoBoxes = Math.ceil(minutes / 10);
    const coffeeCupEmoji = '☕️';
    const bentoBoxEmoji = '🍱';
    const emojis = minutes < 30
      ? coffeeCupEmoji.repeat(coffeeCups)
      : bentoBoxEmoji.repeat(bentoBoxes);
    return `${emojis} ${minutes} min read`;
  }

  return (
    <article>
      <h3>{props.title}</h3>
      <small>{date}</small>
      <p>{props.preview}</p>
      <p>{renderMinutesToRead(minutesToRead)}</p>
    </article>
  );
}

export default Article;
