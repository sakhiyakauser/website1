import React from 'react'
import taxlist from'./taxlist.pdf'
import Appoftaxagent from './Appoftaxagent.pdf'
import appofother from './appofother.pdf'
import Medicarelevy from'./Medicare levy.pdf'
import Statutory from './s.pdf'
import Taxpayer from'./Taxpayer.pdf'
import changeofname from'./Change of Name.pdf'

import './downloads.css'
function Downloads() {
    return (
        <div>
        <div className="dwn">
       </div>
        <div className="downloads">
            <h1 className="h1f">DOWNLOADS</h1>
           <a href = {taxlist} target = "_blank">Tax Check List</a> 
           <br/>
           <br/>
           <a href = {Appoftaxagent} target = "_blank">Application of Tax Agent - Individuals</a> 
           <br/>     <br/>
           <a href = {appofother} target = "_blank">Application of Tax Agent - Other than Individuals</a> 
           <br/>     <br/>
           <a href = {Medicarelevy} target = "_blank">Statutory Declaration if unable to provide Group Certificate</a> 
           <br/>     <br/>
           <a href = {Statutory} target = "_blank">TaxPayer Leaving Australia Early</a> 
           <br/>     <br/>
           <a href = {Taxpayer} target = "_blank">Medicare Levy Exemption Form</a> 
           <br/>     <br/>
           <a href = {changeofname} target = "_blank">Change of Name and Address for Individual</a> 
           <br/>     <br/>
        </div>
     
        </div>
    )
}

export default Downloads
