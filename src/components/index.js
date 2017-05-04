import 'ignore-styles';
import './index.css';
import React from 'react';
import { Helmet } from "react-helmet";
import { connect } from 'react-redux'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ready: false,
    };
  }
  
  render() {
    const people = this.props.content.data.allPeople;
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Helmet worked!</title>
          <script src="http://localhost:8081/bundle.js" async></script>
          <link rel="stylesheet" href="http://localhost:8081/app.css" />
        </Helmet>
        <section>
          {people.map((person, index) => {
            return <div key={index}>
              <div className='name'>{person.firstName} {person.lastName}</div>
              <div className='data'>
                {person.email}
              </div>
              <div className='friends'>
                <strong>Friends:</strong>
                {person.friends.map((friend, index) => {
                  return <div key={index}>{friend.firstName}</div>
                })}
              </div>
            </div>
          })}
        </section>
      </div>
    )
  }
}

export default connect(p => p)(App);
