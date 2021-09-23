// import React, { useImperativeHandle, useRef } from "react"

// import { Link } from "gatsby"

// import Tshirt from "../../images/svg/t_shirt.svg"

// // import * as styles from "../../style/menu/menu.module.scss"
// // import Logo from "../../images/svg/logo.svg"

// import Close from "../../images/svg/close.svg"
// // import { Table, Thead, Tbody, tr, Th, td } from 'react-super-responsive-table';
// import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
// import { ModalRoutingContext } from 'gatsby-plugin-modal-routing'

// class SizeChart extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             open: false,
//         }
//         this.open = this.open.bind(this);
//         this.close = this.close.bind(this);
//     }
//     open() {
//         !this.state.open ? this.setState({ open: true }) : this.setState({ open: false })
//     }
//     close() {
//         this.setState({ open: false })
//     }
//     render() {
    
//         // console.log(this.location)
//         return (
//             <ModalRoutingContext.Consumer>
//             {({ modal, closeTo }) => (
//             <div className={`${`sizeChart`} ${this.state.open ? `${`open`}` : ""}`}>
//                 <div className="sizeChartdarkbg" ></div>
//                 <div className={`sizeChartChild`} >
//                     <button onClick={this.close} className={`sizeChartclose`} > < Close   /> </button>
                    
//                     <h1>Size Chart</h1>
    
//                     <div className="tshirt" >
//                         <Tshirt />                    
//                     </div>
    
//                     <table >
//                         <thead>
//                             <tr>
//                                 <th>Size</th>
//                                 <th>Width</th>
//                                 <th>Chest</th>                           
//                             </tr>
//                         </thead>
//                         <tbody>
//                             <tr>
//                                 <td>S</td>
//                                 <td>28.00 Cm </td>
//                                 <td>18.00 Cm </td>
//                             </tr>
//                             <tr>
//                                 <td>M</td>
//                                 <td>29.00 Cm</td>
//                                 <td>20.00 Cm</td>
//                             </tr>
//                             <tr>
//                                 <td>L</td>
//                                 <td>30.00 Cm</td>
//                                 <td>22.00 Cm</td>
//                             </tr>
//                             <tr>
//                                 <td>XL</td>
//                                 <td>31.00 Cm</td>
//                                 <td>24.00 Cm</td>
//                             </tr>
//                             <tr>
//                                 <td>2XL</td>
//                                 <td>32.00 Cm</td>
//                                 <td>26.00 Cm</td>
//                             </tr>
//                             <tr>
//                                 <td>3XL</td>
//                                 <td>34.00 Cm</td>
//                                 <td>30.00 Cm</td>
//                             </tr>
//                         </tbody>
//                     </table>
//                     <p style={{
//                         paddingTop:"3rem",
//                         display: "flex",
//                         justifyContent: "center",
//                         fontWeight: "400",
//                     }}>All sizes are in CM with a tolerance of +/- 1</p>
//                 </div>
//             </div>
//             )}
//             </ModalRoutingContext.Consumer>
//         )
//     }


  
// }

// export default React.forwardRef((props, ref) => {
//     const menuRef = useRef()

//     useImperativeHandle(ref, () => ({
//         open() {
//             menuRef.current.open()
//         },
//     }))

//     return <SizeChart ref={menuRef} {...props} />
// })


