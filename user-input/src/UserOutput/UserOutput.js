import React from 'react';
import './UserOutput.css';

class UserOutput extends React.Component {
  render() {
    let name= this.props.name;

    return (
      <div className='user-output'>
        <div className='name'>
          {name && <p>Name: {name}</p>}
        </div>

        <div className='text-holder'>
          <div className='child'>
            <p>Paragraph Ennervate inflamarae quietus momentum totalus charm totalus finite. Incantartem immobulus funnunculus mobilicorpus sonorus momentum peskipiksi. Aparecium finite quietus alohomora. Finite expecto tarantallegra wingardium pesternomi bulbadox imperius. Aparecium quietus protego aparecium relashio locomotor patronum patronum.</p>
          </div>
          <div className='child'>
            <p>Paragraph Aresto mobilicorpus drought portus funnunculus. Mobilicorpus sonorous impedimenta reparo serpensortia. Felix accio portus wingardium mobilicorpus imperio lumos. Dissendium inflamarae leviosa expecto.</p>
          </div>
        </div>

        <div className='footer'>
          <p>Thank you, <a href='https://potteripsum.netlify.app/'>Potter Ipsum</a></p>
        </div>
      </div>
    )
  }  
}

export default UserOutput;