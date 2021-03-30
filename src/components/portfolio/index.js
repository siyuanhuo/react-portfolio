import React, {Component} from 'react';
import './style.css'
import projects from'./projects.json'

class Portfolio extends Component {
  state = {
    projectList: projects
  }

  render() {
    return(
      <div className='row justify-content-center'>
        {this.state.projectList.map((item) => {
          return(
            <div className='col-4' key={item.id}>
              <div className="card" style={{width: '18rem'}}>
                <img src={item.image} className="card-img-top" alt={item.name}/>
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">{item.discription}</p>
                  <a href={item.link} className="btn btn-dark">Go to repo</a>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}


export default Portfolio