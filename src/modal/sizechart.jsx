import React, { useImperativeHandle, useRef } from "react"
import Tshirt from "../images/svg/t_shirt.svg"
// import Close from "../../images/svg/close.svg"

const  SizeChart = () =>{
        return (
            <div className={`${`sizeChart`} `}>
                <div className="sizeChartdarkbg" ></div>
                <div className={`sizeChartChild`} >                    
                    <h1>Size Chart</h1>
    
                    <div className="tshirt" >
                        <Tshirt />                    
                    </div>
    
                    <table >
                        <thead>
                            <tr>
                                <th>Size</th>
                                <th>Width</th>
                                <th>Chest</th>                           
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>S</td>
                                <td>28.00 Cm </td>
                                <td>18.00 Cm </td>
                            </tr>
                            <tr>
                                <td>M</td>
                                <td>29.00 Cm</td>
                                <td>20.00 Cm</td>
                            </tr>
                            <tr>
                                <td>L</td>
                                <td>30.00 Cm</td>
                                <td>22.00 Cm</td>
                            </tr>
                            <tr>
                                <td>XL</td>
                                <td>31.00 Cm</td>
                                <td>24.00 Cm</td>
                            </tr>
                            <tr>
                                <td>2XL</td>
                                <td>32.00 Cm</td>
                                <td>26.00 Cm</td>
                            </tr>
                            <tr>
                                <td>3XL</td>
                                <td>34.00 Cm</td>
                                <td>30.00 Cm</td>
                            </tr>
                        </tbody>
                    </table>
                    <p style={{
                        paddingTop:"3rem",
                        display: "flex",
                        justifyContent: "center",
                        fontWeight: "400",
                    }}>All sizes are in CM with a tolerance of +/- 1</p>
                </div>
            </div>
        )
    }

export default SizeChart


