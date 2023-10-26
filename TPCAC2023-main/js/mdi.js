let text = "";
fetch('https://raider.io/api/v1/periods')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        for (let i in data.periods) {

            inf = `
    <table >
  <tr> <th colspan="4"> <h4 id="region">Región: ${data.periods[i].region} </h4></th></tr>
   <tr>  <td> <p>  Periodo Anterior: </p> </td> 
 
   <td> <p> Número: ${data.periods[i].previous.period}</p> </td> 
   <td><p>  Inicio: ${data.periods[i].previous.start}</p></td> 
   <td><p>  Final: ${data.periods[i].previous.end}</p></td> </tr>
   
    <tr>  <td>  <p>  Periodo Actual: </p>
    <td>  <p>  Número: ${data.periods[i].current.period}</p></td> 
    <td>  <p>  Inicio: ${data.periods[i].current.start}</p></td> 
    <td>  <p>  Final: ${data.periods[i].current.end}</p></td> </tr>
    <tr> <td>  <p>  Periodo Siguiente: </p>
    <td>  <p>  Número: ${data.periods[i].next.period}</p></td> 
    <td> <p>  Inicio: ${data.periods[i].next.start}</p></td> 
    <td> <p>  Final: ${data.periods[i].next.end}</p></td> </tr>
</table>
    `
            text += inf
            console.log(data.periods[i])
                ;
        }
        document.querySelector("api").innerHTML = text

    });
