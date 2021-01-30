import React, { useRef, useEffect } from 'react'
import { mount } from 'marketing/MarketingApp'

// export default class Marketing extends React.Component{
//    constructor(props) {
//     super(props);
//     this.myRef = React.createRef();
//   }
//   componentDidMount(){
//       mount(this.myRef.current);
//   }
//   render() {
//     return <div id="container" ref={this.myRef} />;
//   }
// }

export default () =>{
    const ref = useRef(null);
    useEffect(() =>{
        mount(ref.current);
    })

    return <div ref={ref}></div>
}