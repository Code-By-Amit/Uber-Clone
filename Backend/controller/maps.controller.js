const mapServices = require('../services/maps.service')
const {validationResult} = require('express-validator')


module.exports.getCoordinates = async (req,res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        res.status(400).json({errors:errors.array()})
    }
    const address = req.query;
    try {
        const cordinates = mapServices.getAddressCoordinate(address)
        res.status(200).json(cordinates)
    } catch (error) {
        res.status(404).json({message:"Cordinates not Found"})
    }
}

module.exports.getDistanceTime= async (req,res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        res.status(400).json({errors:errors.array()})
    }
    
    try {
    const {origin,destination} = req.query;
    const distanceTime = await mapServices.getDistanceTime(origin,destination);
    res.status(200).json(distanceTime)
        
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Internal Server Error"})
    }
}

module.exports.getAutoCompleteSuggestion = async (req,res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        res.status(400).json({errors:errors.array()})
    }

    try {
        const {input} = req.query;
        const suggestion = await mapServices.getAutoCompleteSuggestions(input);
        res.status(200).json(suggestion)
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Internal Server Error"})
    }
}
