let dataInfo = [
    {'id':'1','ime':'Peter Parker', 'oib':'12345678900', 'datumRodenja':'01.01.1991.'},
    {'id':'2','ime':'Bruce Wayne', 'oib':'12345678912', 'datumRodenja':'01.01.1992.'},
    {'id':'3','ime':'Tony Stark', 'oib':'12345678913', 'datumRodenja':'01.01.1993.'},
    {'id':'4','ime':'Bruce Banner', 'oib':'12345678914', 'datumRodenja':'01.01.1994.'},
    {'id':'5','ime':'Hulk', 'oib':'12345678915', 'datumRodenja':'01.01.1995.'},
    {'id':'6','ime':'Iron Man', 'oib':'12345678916', 'datumRodenja':'01.01.1996.'},
    {'id':'7','ime':'Wonder Woman', 'oib':'12345678917', 'datumRodenja':'01.01.1997.'},
    {'id':'8','ime':'Jason Bourne', 'oib':'12345678919', 'datumRodenja':'01.01.1998.'},
    {'id':'9','ime':'Michael Jackson', 'oib':'12345678910', 'datumRodenja':'01.01.1999.'},
    {'id':'10','ime':'Ronaldo', 'oib':'12345678911', 'datumRodenja':'01.01.2000.'},
]

buildTable (dataInfo)
buildModulo (dataInfo)

const btns = document.querySelectorAll('button[id^=button]');

// Funkcija dinamički kreira redke u tablici u odnosu na podatke u arrayu
function buildTable(data) {
        let table = document.getElementById('myTable')

        for (let i = 0; i < data.length; i++) {
            let row = `<tr class="rowWrap">
                            <td>${data[i].id}</td>
                            <td>${data[i].ime}</td>
                            <td>${data[i].oib}</td>
                            <td>${data[i].datumRodenja}</td>
                            <td><button class="myBtn" id=${'button'+data[i].id}>Otvori Pop Up</button></td>
                        </tr>`
                        table.innerHTML += row;
        }
}

// Funkcija koja dinamički kreira module ovisi koliko ih je u arrayu
function buildModulo(data) {
    let container = document.querySelector('.container')

    for (let i = 0; i < data.length; i++) {
        let modulo = `<div class="moduloContainer" id=${'modulobutton'+data[i].id}>
                            Pop Up forma
                        <div class="moduloWrapper">
                            <ul>
                                <li>Ime i prezime: <span class="moduloData">${data[i].ime}</span> </li>
                                <li>Oib: <span class="moduloData">${data[i].oib}</span> </li> 
                                <li>Datum Rodjenja: <span class="moduloData">${data[i].datumRodenja}</span></li>
                            </ul>
                        </div>
                        <div class="divBtn">
                        <button class="moduloBtn" id=${'button'+data[i].id}>Zatvori</button>
                        </div>
                    </div>`
                    container.innerHTML += modulo;
    }
}

//  Dohvacanje svih gumbova koji togglaju classe za 'active'
btns.forEach(btn => {

    btn.addEventListener('click', event => {
        const overlay = document.querySelector('#overlay');
         let moduloA = document.getElementById('modulo'+event.target.id)
         moduloA.classList.toggle('active')
         overlay.classList.toggle('active')

    });
 
 });