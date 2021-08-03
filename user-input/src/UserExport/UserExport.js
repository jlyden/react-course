import React from 'react';

class UserExport extends React.Component {
  render() {
    let username= this.props.username;

    return (
      <div>
        <div className='text'>
          {username && <p>Username: {username}</p>}
          <p>Paragraph Ennervate inflamarae quietus momentum totalus charm totalus finite. Incantartem immobulus funnunculus mobilicorpus sonorus momentum peskipiksi. Aparecium finite quietus alohomora. Finite expecto tarantallegra wingardium pesternomi bulbadox imperius. Aparecium quietus protego aparecium relashio locomotor patronum patronum.</p>
          <p>Paragraph Aresto mobilicorpus drought portus funnunculus. Mobilicorpus sonorous impedimenta reparo serpensortia. Felix accio portus wingardium mobilicorpus imperio lumos. Dissendium inflamarae leviosa expecto.</p>
        </div>

        <div className='footer'>
          <p>Thank you, <a href='https://potteripsum.netlify.app/'>Potter Ipsum</a></p>
        </div>
      </div>
    )
  }  
}

export default UserExport;