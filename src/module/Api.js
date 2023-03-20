export const fetchData = async () => {
    const response = await fetch("logement.json");
    const data = await response.json();
    console.log("Data:", data);
    return data;
  };
  
  export const fetchById = async (id) => {
    const response = await fetch(`logement.json?id=${id}`);
    const data = await response.json();
    const logement = data.find((logement) => logement.id === id);
    console.log("Logement:", logement); 
    return logement;
  };