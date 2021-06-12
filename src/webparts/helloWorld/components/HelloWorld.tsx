import * as React from 'react';
import './HelloWorld.scss';
import { IHelloWorldProps } from './IHelloWorldProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class HelloWorld extends React.Component<IHelloWorldProps, {}> {
  public render(): React.ReactElement<IHelloWorldProps> {
    return (
      <div className={'helloWorld'} id="HelloWorld">
        <div className={'container'}>
          <div className={'row'}>
            <div className={'column'}>
              <span className={'title'}>Welcome to SharePoint!</span>
              <p className={'subTitle'}>Customize SharePoint experiences using Web Parts.</p>
              <p className={'description'}>{escape(this.props.description)}</p>
              <a href="https://aka.ms/spfx" className={'button'}>
                <span className={'label'}>Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
