import * as React from 'react';
import * as ReactDom from 'react-dom';
import HelloWorld from './webparts/helloWorld/components/HelloWorld';
import { IHelloWorldWebPartProps } from './webparts/helloWorld/HelloWorldWebPart';

interface State { }

class Main extends React.Component<IHelloWorldWebPartProps, State> {
  render() {
    return (
      <HelloWorld description={this.props.description} />
    );
  }
}

ReactDom.render(<Main description={'Welcome to all'} />, document.getElementById('app'));
