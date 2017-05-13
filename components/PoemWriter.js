const React = require('react');

function countWords(line) {
  return line.split(' ').filter(l => l).length;
}

function validatePoem(poem) {
  const lines = poem.split('\n').filter(l => l);
  const correctLineCount = lines.length === 3;
  const correctWordCount = countWords(lines[0]) === 5 && countWords(lines[1]) === 3 && countWords(lines[2]) === 5;
  return correctLineCount && correctWordCount;
}

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      content: '',
      isValid: false,
    };

    this.updatePoem = this.updatePoem.bind(this);
  }

  updatePoem(event) {
    const content = event.target.value;

    if (content) {
      this.setState({
        content: content,
        isValid: validatePoem(content),
      });
    }
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.content} onChange={this.updatePoem} />
        {!this.state.isValid ? <div id="poem-validation-error" style={{color: 'red'}}>This poem is not written in the right structure!</div> : null}
      </div>
    );
  }
}

module.exports = PoemWriter;
