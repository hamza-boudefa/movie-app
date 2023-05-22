import React from 'react'
import { Button, Card } from 'react-bootstrap'
import ReactStars from 'react-stars'
const Movies = ({film}) => {
    // this component get every movie as props ,
  return (
    <div style={{ width:"400px"}}  >
   <Card style={{ width: '300px' }}>
      <Card.Img variant="top" src={film.posterUrl} />
      <Card.Body>
        <Card.Title> {film.title} </Card.Title>
        <Card.Text>
        {film.description}
        </Card.Text>
        <ReactStars
        edit={false}
  count={5}
  value={film.rate}
  size={24}
  color2={'#ffd700'} />
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
    </div>
  )
}

export default Movies