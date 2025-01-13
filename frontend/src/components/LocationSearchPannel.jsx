import React from 'react'

export const LocationSearchPannel = ({  setVehiclePannel, setPanelOpen }) => {

    const location = [
        "24B, Near ABC Cafe, Sheryians Coding School, Bhoopal",
        "24B, Near ABC Cafe, Sheryians Coding School, Bhoopal",
        "24B, Near ABC Cafe, Sheryians Coding School, Bhoopal",
        "24B, Near ABC Cafe, Sheryians Coding School, Bhoopal"
    ]
    return (
        <div>
        {location.map((loc, index) => (
          <div
            key={index}
            onClick={() => {
              setVehiclePannel(true);
              setPanelOpen(false);
            }}
            className="flex justify-start p-3 border-2 rounded-xl active:border-black my-2 items-center gap-4"
          >
            <h2 className="bg-[#eee] p-2 rounded-full h-8 flex items-center justify-center w-12">
              <i className="ri-map-pin-fill"></i>
            </h2>
            <h4 className="font-medium">{loc}</h4>
          </div>
        ))}
      </div>
      
    )
}
