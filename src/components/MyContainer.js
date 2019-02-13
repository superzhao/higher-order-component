import React ,{Component} from 'react';
function MyContainer (WrappedComponent){
  return class extends Component{
    render(){
      return (
        <div>
          以下是传入的组件:
          <WrappedComponent></WrappedComponent>
        </div>
      )
    }
  }
}
export default MyContainer;
