import React from 'react';

const Guide = () => {
  const renderCode = 
`class HelloMessage extends React.Component {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}

ReactDOM.render(<HelloMessage name="John" />, mountNode)`

  return (
    <article>
      <h2>H2 태그 테스트</h2>
      <h3>H3 태그 테스트</h3>
      <h4>H4 태그 테스트</h4>
      <p>
        React는 사용자 인터페이스를 만들기위해 페이스북과 인스타그램에서 개발한 오픈소스 자바스크립트 라이브러리로써, 사용자 인터페이스(User Interface)에 집중하며, Virtual DOM을 통해 속도와 편의를 높이고, 단방향 데이터플로우를 지원하여 보일러플레이트 코드를 감소시켜, 많은 사람들이 React를 MVC의 V를 고려하여 선택합니다. 즉, React는 지속해서 데이터가 변하는 대규모어플리케이션의 구축이라는 하나의 문제를 풀기 위해서 만들어졌습니다. 아래는 React에서 강점들입니다.
      </p>
      <p>
        <br />
      </p>
      <p>
        React 사용자 인터페이스를 <a href="https://reactjs.org/docs/hello-world.html">React</a> 사용자 인터페이스를
      </p>
      <div className="code">
        <pre>
          <code>
            {renderCode}
          </code>
        </pre>
      </div>
      <p>
        <br />
      </p>
      <p>
        React는 사용자 인터페이스를 만들기위해 페이스북과 인스타그램에서 개발한 오픈소스 자바스크립트 라이브러리로써, 사용자 인터페이스(User Interface)에 집중하며, Virtual DOM을 통해 속도와 편의를 높이고, 단방향 데이터플로우를 지원하여 보일러플레이트 코드를 감소시켜, 많은 사람들이 React를 MVC의 V를 고려하여 선택합니다. 즉, React는 지속해서 데이터가 변하는 대규모어플리케이션의 구축이라는 하나의 문제를 풀기 위해서 만들어졌습니다. 아래는 React에서 강점들입니다.
      </p>
    </article>
  )
}

export default Guide;