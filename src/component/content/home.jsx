import React, { Component } from 'react';
import Base from './base';

class Home extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                {/* <div className="card" style={{marginTop: "20px"}}>
                    <div className="card-body">
                        <h4>首页</h4>
                    </div>
                </div> */}
                <Base>
                    首页
                </Base>
            </React.Fragment>
        );
    }
}
 
export default Home;