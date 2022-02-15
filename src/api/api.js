import axios from "axios";

const bedsurl = `https://blooming-reaches-30941.herokuapp.com/api/beds?populate=image`;
const sofsaurl = 'https://blooming-reaches-30941.herokuapp.com/api/sofas?populate=image';
const tvstandurl = 'https://blooming-reaches-30941.herokuapp.com/api/tvstands?populate=image';

export const loadBeds = () => axios.get(bedsurl);
export const loadSofsa = () => axios.get(sofsaurl);
export const loadTvstands = () => axios.get(tvstandurl);

export const createBed = newBed => axios.post(bedsurl, newBed);
export const createSofsa = newSofsa => axios.post(sofsaurl, newSofsa);
export const createTvstand = newTvstand => axios.post(tvstandurl, newTvstand);

export const updateBed = (id, updatedBed) => axios.put(`${bedsurl}/${id}`, updatedBed);
export const updateSofsa = (id, updatedSofsa) => axios.put(`${sofsaurl}/${id}`, updatedSofsa);
export const updateTvstand = (id, updatedTvstand) => axios.put(`${tvstandurl}/${id}`, updatedTvstand);

export const deleteBed = id => axios.delete(`${bedsurl}/${id}`);
export const deleteSofsa = id => axios.delete(`${sofsaurl}/${id}`);
export const deleteTvstand = id => axios.delete(`${tvstandurl}/${id}`);