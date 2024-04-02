import React from 'react';
import './App.css';


export default function FlightPlan(){


    return(
        <div className="py-8 px-15 mx-20 max-w mx-auto bg-white shadow-md">
    <h1 className="text-2xl font-bold mb-4">International Flight Plan</h1>
    <form>
        <div className='flex flex-row w-auto border-solid border-2' >

            <div className='w-1/3'>
                <text>PRIORITY</text>
                <br></br>
                <text>Priorite</text>
                <br></br>
                <label> <span classname="text-xxl" >  &lt;&lt; &#8801; FF &rarr;</span> </label>
            </div>
            <div className='w-2/3'> 
                <text>ADDRESSEE(S)</text>
                <br></br>
                <text>Destinatarie(s)</text>
                <br></br>
                <div className='flex flex-col'>
                <textarea rows="3" className='w-full h-20 border border-gray-300' >
                
                <label> <span classname="text-xxl" > &lt;&lt; &#8801; </span> </label>
                </textarea>
                </div>
                <hr></hr>
            </div>
        </div>
        {/* Flight Information */}
        <div className="mb-4">
            <label htmlFor="aircraft">Aircraft Identification & Type</label>
            <input type="text" id="aircraft" name="aircraft" className="form-input mt-1 block w-full" />
        </div>
        <div className="mb-4">
            <label htmlFor="flight_rules">Flight Rules</label>
            <input type="text" id="flight_rules" name="flight_rules" className="form-input mt-1 block w-full" />
        </div>
        {/* Departure and Destination Information */}
        <div className="mb-4">
            <label htmlFor="departure">Departure Aerodrome</label>
            <input type="text" id="departure" name="departure" className="form-input mt-1 block w-full" />
        </div>
        <div className="mb-4">
            <label htmlFor="destination">Destination Aerodrome</label>
            <input type="text" id="destination" name="destination" className="form-input mt-1 block w-full" />
        </div>
        {/* Route of Flight */}
        <div className="mb-4">
            <label htmlFor="route">Route of Flight</label>
            <textarea id="route" name="route" rows="3" className="form-textarea mt-1 block w-full"></textarea>
        </div>
        {/* Alternate Aerodrome(s) */}
        <div className="mb-4">
            <label htmlFor="alternate">Alternate Aerodrome(s)</label>
            <input type="text" id="alternate" name="alternate" className="form-input mt-1 block w-full" />
        </div>
        {/* Aircraft Equipment and Capabilities */}
        <div className="mb-4">
            <label htmlFor="equipment">Aircraft Equipment & Capabilities</label>
            <input type="text" id="equipment" name="equipment" className="form-input mt-1 block w-full" />
        </div>
        {/* Performance Data */}
        <div className="mb-4">
            <label htmlFor="performance">Performance Data</label>
            <input type="text" id="performance" name="performance" className="form-input mt-1 block w-full" />
        </div>
        {/* Mass and Balance Data */}
        <div className="mb-4">
            <label htmlFor="mass_balance">Mass & Balance Data</label>
            <input type="text" id="mass_balance" name="mass_balance" className="form-input mt-1 block w-full" />
        </div>
        {/* Other Information */}
        <div className="mb-4">
            <label htmlFor="other_info">Other Information</label>
            <textarea id="other_info" name="other_info" rows="3" className="form-textarea mt-1 block w-full"></textarea>
        </div>
        {/* Submit Button */}
        <div className="mt-6">
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Submit Flight Plan
            </button>
        </div>
    </form>
</div>

    )

}