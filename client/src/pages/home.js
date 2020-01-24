import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

export default class Home extends React.Component {
  static MAX = 4
  constructor(props) {
    super(props)
    this.columns = []
    this.state = {
      data: [],
      offset: 0,
      limit: 4
    }
    this.fetching = this.fetching.bind(this)
  }

  componentDidMount() {
    this.fetching()
  }

  fetching() {
    const { offset, limit } = this.state
    const url = `http://localhost:3001/views?offset=${offset}&limit=${limit}`
    fetch(url)
    .then(response => response.json())
    .then(res => {
      console.log(res)
      this.setState({
        data: res,
        offset: limit,
        limit: limit + Home.MAX
      })
    });
  }

  render() {
    return (
      <Container>
      <a className="btn primary" href={"/add"}><Button variant="primary">Add</Button></a>
      {
        this.state.data.map((item, idx) => {
          this.columns.push(
            <div className="col-md-3 py-3" key={idx}>
              <div className="card card-body view">
                <img src={item.image}></img>
                <a className="btn" href={"view/"+item.id}>{item.name}</a>
              </div>
            </div>
          )
          if ((idx+1)%4===0) {this.columns.push(<div className="w-100" key={null}></div>)}
          }
        )
      }
        <div className="row">
          {this.columns}
        </div>
        <a className="btn primary"><Button variant="primary" onClick={this.fetching}>Load More...</Button></a>
      </Container>
    )
  }
}
