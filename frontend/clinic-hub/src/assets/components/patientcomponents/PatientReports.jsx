
import { React, useState, useEffect } from 'react'
import "./PatientReports.css"
import profile from "../../img/image.png"

export default function PatientReports() {

    const [tableRenderer, settableRenderer] = useState();


    const table = () => {
        if (tableRenderer == 1) {
            document.getElementById("pt-das1").style.backgroundColor = "cyan";
            document.getElementById("pt-das2").style.backgroundColor = "white";
            document.getElementById("pt-das4").style.backgroundColor = "white";
            document.getElementById("pt-das3").style.backgroundColor = "white";
            return (
                <table>
                    <tr>
                        <th>ID</th>
                        <th>Test Name</th>
                        <th>Date</th>
                        <th>Reffred By</th>
                        <th>Amount</th>
                        <th>Comments</th>
                        <th>Status</th>
                    </tr>
                    <tr>
                        <td>IRE4343</td>
                        <td>Electro Cardiography</td>
                        <td>21 Mar 2024</td>
                        <td>Edallin Hendry</td>
                        <td>$300</td>
                        <td>Good Take Rest</td>
                        <td><div className='pd-das-status'>Normal</div></td>
                    </tr>
                    <tr>
                        <td>IRE4343</td>
                        <td>Electro Cardiography</td>
                        <td>21 Mar 2024</td>
                        <td>Edallin Hendry</td>
                        <td>$300</td>
                        <td>Good Take Rest</td>
                        <td><div className='pd-das-status'>Normal</div></td>                    </tr>
                    <tr>
                        <td>IRE4343</td>
                        <td>Electro Cardiography</td>
                        <td>21 Mar 2024</td>
                        <td>Edallin Hendry</td>
                        <td>$300</td>
                        <td>Good Take Rest</td>
                        <td><div className='pd-das-status'>Normal</div></td>                    </tr>
                </table>
            )
        }
        else if (tableRenderer == 2) {
            document.getElementById("pt-das1").style.backgroundColor = "white";
            document.getElementById("pt-das2").style.backgroundColor = "cyan";
            document.getElementById("pt-das3").style.backgroundColor = "white";
            document.getElementById("pt-das4").style.backgroundColor = "white";
           return(
            <table>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Date</th>
                <th>Description</th>
                <th>Action</th>
            </tr>
            <tr>
                <td>IRE4343</td>
                <td>Electro Cardiography</td>
                <td>21 Mar 2024</td>
                <td>Edallin Hendry</td>
                <td><div className='pd-das-status'>Download</div></td>
            </tr>
            <tr>
                <td>IRE4343</td>
                <td>Electro Cardiography</td>
                <td>21 Mar 2024</td>
                <td>Edallin Hendry</td>
                <td><div className='pd-das-status'>Download</div></td>                    </tr>
            <tr>
                <td>IRE4343</td>
                <td>Electro Cardiography</td>
                <td>21 Mar 2024</td>
                <td>Edallin Hendry</td>
                <td><div className='pd-das-status'>Download</div></td>                    </tr>
        </table>
           )
        }
        else if (tableRenderer == 3) {
            document.getElementById("pt-das1").style.backgroundColor = "white";
            document.getElementById("pt-das2").style.backgroundColor = "white";
            document.getElementById("pt-das3").style.backgroundColor = "cyan";
            document.getElementById("pt-das4").style.backgroundColor = "white";
           return(
            <table>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Created Date</th>
                <th>Prescribed By</th>
                <th>Action</th>
            </tr>
            <tr>
                <td>IRE4343</td>
                <td>Electro Cardiography</td>
                <td>21 Mar 2024</td>
                <td>Edallin Hendry</td>
                <td><div className='pd-das-status'>Download</div></td>
            </tr>
            <tr>
                <td>IRE4343</td>
                <td>Electro Cardiography</td>
                <td>21 Mar 2024</td>
                <td>Edallin Hendry</td>
                <td><div className='pd-das-status'>Download</div></td>                    </tr>
            <tr>
                <td>IRE4343</td>
                <td>Electro Cardiography</td>
                <td>21 Mar 2024</td>
                <td>Edallin Hendry</td>
                <td><div className='pd-das-status'>Download</div></td>                    </tr>
        </table>
           )
        }
        else if (tableRenderer == 4) {
            document.getElementById("pt-das1").style.backgroundColor = "white";
            document.getElementById("pt-das2").style.backgroundColor = "white";
            document.getElementById("pt-das3").style.backgroundColor = "white";
            document.getElementById("pt-das4").style.backgroundColor = "cyan";
           return(
            <table>
            <tr>
                <th>ID</th>
                <th>Doctor</th>
                <th>Appointment Date</th>
                <th>Booked On</th>
                <th>Amount</th>
                <th>Action</th>
            </tr>
            <tr>
                <td>IRE4343</td>
                <td>Electro Cardiography</td>
                <td>21 Mar 2024</td>
                <td>Edallin Hendry</td>
                <td>Edallin Hendry</td>
                <td><div className='pd-das-status'>Download</div></td>
            </tr>
            <tr>
                <td>IRE4343</td>
                <td>Electro Cardiography</td>
                <td>21 Mar 2024</td>
                <td>Edallin Hendry</td>
                <td>Edallin Hendry</td>
                <td><div className='pd-das-status'>Download</div></td>                    </tr>
            <tr>
                <td>IRE4343</td>
                <td>Electro Cardiography</td>
                <td>21 Mar 2024</td>
                <td>Edallin Hendry</td>
                <td>Edallin Hendry</td>
                <td><div className='pd-das-status'>Download</div></td>                    </tr>
        </table>
           )
        }
        else {
            return "No Data Available";
        }
    }
    useEffect(() => {
        table();
    }, [tableRenderer])




    return (
        <div className='patient-report-r3'>
            {/* -----------Reports HEaader----------- */}
            <div className="dashboard-header">
                <h3>Reports</h3>
                <div className="dashboard-patient-select">
                    <img src={profile} alt="" />
                    <h6>Mohit Soni</h6>
                </div>
            </div>
            {/* -------------Fileter select option--------- */}
            <div className="pat-das-select">
                <div className="pat-das-option" onClick={() => settableRenderer(1)} id='pt-das1'>Appointments</div>
                <div className="pat-das-option" onClick={() => settableRenderer(2)} id='pt-das2'>Medical Reports</div>
                <div className="pat-das-option" onClick={() => settableRenderer(3)} id='pt-das3'>Prescription </div>
                <div className="pat-das-option" onClick={() => settableRenderer(4)} id='pt-das4'>Invoices</div>
            </div>
            {/* ---------------patient Reports List-------------- */}
            <div className="pat-das-list">

                {table()}
            </div>
        </div>

    )
}
