import React, { Component } from 'react';
import PageNav from './PageNav';
import Section from './Section';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {}
    this.connectToServer = this.connectToServer.bind(this);
  }

  connectToServer(){
    fetch('/');
  }

  componentDidMount() {
    this.connectToServer();
  }

  render(){
    return (
      <div className='container'>
        <PageNav />
        <div className='row justify-content-center'>
          <header className='col-6'>
            <h1 className='text-center'>
              A light-speed learner, <br/> and an adept problem solver.
            </h1>
          </header>
        </div>
        <div className='row justify-content-center'>
          <main>
            <Section sectionId='home' checkSection={this.sectionType} />
            <Section sectionId='about' checkSection={this.sectionType} />
            <Section sectionId='projects' checkSection={this.sectionType} />
            <Section sectionId='contact' checkSection={this.sectionType} />
          </main>
        </div>
        <div className='row justify-content-left'>
          <footer className='col-6'>
            <p><small>Adam Dera | Oct 20th, 2021 </small></p>
          </footer>
        </div>
      </div>
    );
  }
}

export default App;
