import React from 'react'

class CardImageMap extends React.Component
{
  constructor()
  {
    super()
    this.state=
    {

    }
  }
  componentDidMount()
  {
    console.log(this.props);
  }
  render()
  {
    return(<div>
     <div>
  {this.props.data.map(person => {
    return (<div>
       <div key={person.title}>
       {person.description} {person.price}{person.title}
       </div>
      </div>
    )
  })}
</div>
    </div>)
   
}
}
export default CardImageMap;
