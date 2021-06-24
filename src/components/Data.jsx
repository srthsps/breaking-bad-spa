import React, { useContext } from 'react'
import {Table, Nav,Button, Alert, Card, Navbar } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { dataContext } from '../dataContext'
import './Data.css'

const Data = () => {


    const data = useContext(dataContext)
    

    return (
        <div id="outerDiv">
        <div id="headDiv">
        <h1 id="headimp" expand={'sm'}>Character Details</h1>
        <Alert variant="light">Walter White, a chemistry teacher,
             discovers that he has cancer<br/> and decides to get into the meth-making business
              to repay his medical debts. His priorities begin to change when he partners with Jesse.</Alert>
        <Button id="btn-more" variant="outline-dark" style={{width:"150px",height:"50px"}}>More Info</Button>
        </div>
        
        <div className="dataDiv">
            
            <Table id="table" responsive="sm">
                <thead id="thead">
                    <tr id="trow1">
                        <th>#</th>
                        <th>Character Image</th>
                        <th>Character Name</th>
                        <th>Character Ocuupation</th>
                        <th>Date of Birth</th>
                        <th>Actor</th>
                    </tr>
                </thead>
                <tbody id="tbody">
                    {data.map((item, i) => {
                        return (
                                <tr id="trow2" key={i}>
                                    <td id="tchar">{item.char_id}</td>
                                    <td><img id="charimg" style={{ width: "75px", height: "100px" }} src={item.img} alt="img_alt" /></td>
                                    <td id="tname">
                                        {item.name}
                                    </td>
                                    <td id="tocc">{item.occupation}</td>
                                    <td id="tbirth">{item.birthday}</td>
                                    <td id="tact">{item.portrayed}</td>
                                </tr> 
                        )
                    })}
                </tbody>
            </Table>

        </div >
        </div>
    )
}

export default Data
