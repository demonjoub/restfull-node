import React from 'react';

export default class Add extends React.Component {
  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this);
    this.titleRef = React.createRef();
    this.descRef = React.createRef();
    this.imageRef = React.createRef();
  }

  onSubmit(e) {
    const url = "http://localhost:3001/datas"
    const name = this.titleRef.current.value
    const desc = this.descRef.current.value
    const image = this.imageRef.current.value
    const data =  {
      name,
      desc,
      image
    }
    fetch(url, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(res => {
      window.location.replace("/");
      return res.json();
    }).catch(error => {
      alert("crate fail")
    })
  }

  render () {
    return (
      <div style={{ margin: 5 }}>
        <div class="form-group">
          <input ref={this.titleRef} type="title" class="form-control" id="exampleInputtitle1" aria-describedby="titleHelp" placeholder="Enter title" />
        </div>
        <div class="form-group">
          <input ref={this.descRef} type="desc" class="form-control" id="exampleInputdesc1" placeholder="desc"/>
        </div>
        <div class="form-group">
          <input ref={this.imageRef} type="img" class="form-control" id="exampleInputurl" placeholder="image url"/>
        </div>
        <button class="btn btn-primary" onClick={this.onSubmit}>Save</button>
      </div>
    )
  }
}
