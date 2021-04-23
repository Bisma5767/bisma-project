








console.log('This is ES6 version of Project 2');
class Book {
    constructor(Date, Confirmed_Cases, Deaths_Cases,Recovered_Cases,Travel_History,Province,City,Out) {
        this.Date = Date;
        this.Confirmed_Cases = Confirmed_Cases;
        this.Deaths_Cases = Deaths_Cases;
        this.Recovered_Cases = Recovered_Cases;
        this.Province = Province;
        this.Travel_History = Travel_History;
        this.City = City;
        this.Out=Out;

    }
}

class Display {
    add(book) {
        console.log("Adding to UI");
        let tableBody = document.getElementById('tableBody');
        let uiString = `<tr>
                            <td>${book.Date}</td>
                            <td>${book.Confirmed_Cases}</td>
                            <td>${book.Deaths_Cases}</td>
                            <td>${book.Recovered_Cases}</td>
                            <td>${book.Province}</td>
                            <td>${book.Travel_History}</td>
                            <td>${book.City}</td>
                            <td>${book.Out}</td>

                        </tr>`;
        tableBody.innerHTML += uiString;
    }
    
}
   
   let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {
        

    console.log('YOu have submitted library form');
    
    let Date = document.getElementById('Date').value;
    let Confirmed_Cases = document.getElementById('Confirmed_Cases').value;
    let Deaths_Cases = document.getElementById('Deaths_Cases').value;
    let Recovered_Cases = document.getElementById('Recovered_Cases').value;
    let Province = document.getElementById('Province').value;
    let Travel_History = document.getElementById('Travel_History').value;
    let City = document.getElementById('City').value;
    let Out = document.getElementById('sample').innerText;



    let book = new Book(Date, Confirmed_Cases, Deaths_Cases,Recovered_Cases,Province,Travel_History,City,Out);
    console.log(book);

    let display = new Display();
    display.add(book);
    e.preventDefault();
}

























/*<br>
     <div id="table">
        <h1>Your books</h1>

        <table class="table table-striped">
            <thead>
                <tr>
                    <th scope="col">Date</th>
                    <th scope="col">Confirmed_Cases</th>
                    <th scope="col">Deaths_Cases</th>
                    <th scope="col">Recovered_Cases</th>
                    <th scope="col">Province</th>
                    <th scope="col">Travel-History</th>
                    <th scope="col">City</th>
                </tr>
            </thead>
            <tbody id='tableBody'></tbody>
        </table>
*/