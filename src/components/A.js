import React ,{Component} from 'react';
import MyContainer from './MyContainer';
class A extends Component{
  render(){
    return (
      <p>A组件</p>
    )
  }
}
export default MyContainer(A);
