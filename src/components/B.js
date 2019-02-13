import React ,{Component} from 'react';
import MyContainer from './MyContainer';
class B extends Component{
  render(){
    return (
      <p>B组件</p>
    )
  }
}
export default MyContainer(B);
