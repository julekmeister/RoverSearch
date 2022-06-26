
const button1 = document.querySelector('.manif');
const button2 = document.querySelector('.solrun')
const button3 = document.querySelector('.pics')
const nazwa = document.querySelector('.nazwa');
const error = document.querySelector('.error');
const land = document.querySelector('.landing');
const launch = document.querySelector('.launch');
const msol = document.querySelector('.max_sol');
const mdate = document.querySelector('.max_date');
const photos = document.querySelector('.photos');
const img = document.querySelector('.image')
const cams = document.querySelector('.kamery');
const date = document.getElementById('date');
var zdj = new Array();
const nazwaK = document.querySelector('.nazwaK');
const nskr = document.querySelector('.nskr');
const solDate = document.querySelector('.solDate');
const earthDate = document.querySelector('.earthDate');
const maxPhotos = document.querySelector('.maxPhotos');
var nazwaKam = new Array();
var nazwaKamSk = new Array();
var mpc = []

/// Manifest
const apiLink = 'https://api.nasa.gov/mars-photos/api/v1/manifests/'
const apiKey = '?api_key=Pc8HRoKL9gWGFwhrP3YHpJKbM2GjWSMBoXj6vHyC'

///Zdjęcia
const apiLink2 = "https://api.nasa.gov/mars-photos/api/v1/rovers/"
const ph = "/photos"





const manifest = () => {

    const URL = apiLink + getOption() + apiKey

    axios.get(URL).then(response => {

        nazwa.textContent = response.data.photo_manifest.name
        var rover = response.data.photo_manifest.name
        land.textContent = response.data.photo_manifest.landing_date
        launch.textContent = response.data.photo_manifest.launch_date
        msol.textContent = response.data.photo_manifest.max_sol
        mdate.textContent = response.data.photo_manifest.max_date
        photos.textContent = response.data.photo_manifest.total_photos

        date.setAttribute('min', response.data.photo_manifest.landing_date)
        date.setAttribute('max', response.data.photo_manifest.max_date)
        date.setAttribute('value', date.max)
        var phArr = []
        phArr = response.data.photo_manifest.photos
        const solArr = []

        error.textContent = ''

    })
        .catch(() => {
            error.textContent = "Error";
            img.setAttribute('src', null);

        })
}
// const picShow = () => {


//     var solos = document.getElementById('date').value;
//     const URL = apiLink2 + getOption() + ph + apiKey + "&earth_date=" + solos + "&camera=" + getCam()

//     axios.get(URL).then(response => {


//         img.setAttribute('src', response.data.photos[0].img_src)

//         error.textContent = ''

//     })
//         .catch(() => {
//             error.textContent = "ERROR";
//             img.setAttribute('src', null);

//         })
// }
const picShow2 = () => {
    img.setAttribute('src', "")
    nazwaK.textContent = ""
    nskr.textContent = ""
    solDate.textContent = ""
    earthDate.textContent = ""
    maxPhotos.textContent = ""
    document.querySelector('.kamery').textContent = ""

    var solos = document.getElementById('date').value;
    const URL = apiLink2 + getOption() + ph + apiKey + "&earth_date=" + solos
    const URL2 = apiLink + getOption() + apiKey


    axios.get(URL).then(response => {


        l = response.data.photos.length

        for (i = 0; i < l; i++) {
            zdj[i] = new Image();
            zdj[i].src = response.data.photos[i].img_src;
            nazwaKamSk[i] = response.data.photos[i].camera.name;
            nazwaKam[i] = response.data.photos[i].camera.full_name;

        }


        img.setAttribute('src', response.data.photos[0].img_src)
        nazwaK.textContent = response.data.photos[0].camera.full_name
        nskr.textContent = response.data.photos[0].camera.name
        solDate.textContent = response.data.photos[0].sol
        earthDate.textContent = response.data.photos[0].earth_date
        maxPhotos.textContent = response.data.photos.length
        var s = response.data.photos[0].sol
        document.querySelector('.kamery').textContent = getCamList(s)



        error.textContent = ''

    })
        .catch(() => {
            error.textContent = "BRAK ZDJĘĆ W TYM DNIU";
            img.setAttribute('src', null);

        })
}
const manifestByEnter = e => {
    if (e.key === 'Enter') {
        manifest();

    }
}
function getOption() {
    return (document.getElementById('lazik').value);

}
function getCam() {
    return (document.getElementById('cam').value);
}

function getCamList(s) {

    const URL = apiLink + getOption() + apiKey
    mpc = []
    axios.get(URL).then(response => {
        var l = response.data.photo_manifest.photos.length
        var sd = 0
        for (var i = 0; i < l; i++) {
            sd = parseInt(response.data.photo_manifest.photos[i].sol)

            if (sd === s) {
                document.querySelector('.kamery').textContent = response.data.photo_manifest.photos[i].cameras
            }
        }


    })
    return mpc

}

// function getCamDets(dets) {
//     var solos = document.getElementById('date').value;
//     const URL = apiLink2 + getOption() + ph + apiKey + "&earth_date=" + solos
//     axios.get(URL).then(response => {
//         detale[0] = response.data.photos[dets].camera.full_name
//         detale[1] = response.data.photos[dets].camera.name
//         detale[2] = response.data.photos[dets].sol
//         detale[3] = response.data.photos[dets].earth_date
//         detale[4] = response.data.photos.length
//     })
//     detale = detale
//     return detale
// }

function getMinDate() {
    return (date(land.textContent))
}
function getMaxDate() {
    return (date(mdate.textContent))
}
function nextImage() {

    for (var i = 0; i < zdj.length; i++) {
        if (zdj[i].src == img.src) {
            if (i === zdj.length - 1) {
                img.src = zdj[0].src;
                nazwaK.textContent = nazwaKam[0]
                nskr.textContent = nazwaKamSk[0]
                break;
            }
            img.src = zdj[i + 1].src;
            nazwaK.textContent = nazwaKam[i + 1]
            nskr.textContent = nazwaKamSk[i + 1]
            break;
        }
    }
}
function previousImage() {

    for (var i = zdj.length - 1; i >= 0; i--) {
        if (zdj[i].src == img.src) {
            if (i === zdj.length - 1) {
                img.src = zdj[zdj.length - 1].src;
                nazwaK.textContent = nazwaKam[zdj.length - 1]
                nskr.textContent = nazwaKamSk[zdj.length - 1]
                break;
            }
            img.src = zdj[i - 1].src;
            nazwaK.textContent = nazwaKam[i - 1]
            nskr.textContent = nazwaKamSk[i - 1]
            break;
        }
    }
}
button1.addEventListener('click', manifest)
button2.addEventListener('click', picShow2)

