import React from 'react'


class Sidebar extends React.Component {



    render() {

        return (
            <div id='sidebarGrid'>

                <button className='compassButton' id='north' >N</button>
                <button className='compassButton' id='east' >E</button>
                <button className='compassButton' id='south' >S</button>
                <button className='compassButton' id='west' >W</button>

                <input type='text' readOnly="readonly" className='displayLocationData' id='latitude' placeholder='?' />Latitude
                <input type='text' readOnly="readonly" className='displayLocationData' id='longitude' placeholder='?'/>Longitude
                <input type='text' readOnly="readonly" className='displayLocationData' id='county' placeholder='?'/>County
                <input type='text' readOnly="readonly" className='displayLocationData' id='town' placeholder='?'/>Town
                <input type='text' readOnly="readonly" className='displayLocationData' id='score' placeholder={this.props.points}/>Score

                
                <img id='vtCountyMap' src='https://geology.com/county-map/vermont-county-map.gif' alt='County Map' />

                <button className='button' id='returnButton' >Return</button>


            </div>
        )
    }





}





export default Sidebar