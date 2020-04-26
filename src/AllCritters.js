import fish from './data/fish.json'
import bugs from './data/bugs.json'

// Just for fish right now 
function createCritterObj(id, name, value, 
    location, shadow, precipitation, 
    start_time, end_time, nh_jan, 
    nh_feb, nh_mar, nh_apr, nh_may, 
    nh_jun, nh_jul, nh_aug, nh_sep, 
    nh_oct, nh_nov, nh_dec, sh_jan, 
    sh_feb, sh_mar, sh_apr, sh_may, 
    sh_jun, sh_jul, sh_aug, sh_sep, 
    sh_oct, sh_nov, sh_dec, fileName) {
    return { id, name, 
        value, location, 
        shadow, precipitation, 
        start_time, end_time,
        nh_jan, nh_feb, 
        nh_mar, nh_apr, 
        nh_may, nh_jun, 
        nh_jul, nh_aug, 
        nh_sep, nh_oct, 
        nh_nov, nh_dec, 
        sh_jan, sh_feb, 
        sh_mar, sh_apr, 
        sh_may, sh_jun, 
        sh_jul, sh_aug, 
        sh_sep, sh_oct, 
        sh_nov, sh_dec, fileName }
} 

function createFishes() {
    // Returns an array of critter objects 
    let fishes = [] 
    fish.map( f => {
        let fish_obj = createCritterObj(f.id,
             f.name,
             f.value, 
             f.location, 
             f.shadow,
             f.precipitation,
             f.start_time,
             f.end_time, 
             f["NH Jan"],
             f["NH Feb"],
             f["NH Mar"],
             f["NH Apr"],
             f["NH May"],
             f["NH Jun"],
             f["NH Jul"],
             f["NH Aug"],
             f["NH Sep"],
             f["NH Oct"],
             f["NH Nov"],
             f["NH Dec"],
             f["SH Jan"],
             f["SH Feb"],
             f["SH Mar"],
             f["SH Apr"],
             f["SH May"],
             f["SH Jun"],
             f["SH Jul"],
             f["SH Aug"],
             f["SH Sep"],
             f["SH Oct"],
             f["SH Nov"],
             f["SH Dec"],
             f["Critterpedia Filename"])
        fishes.push(fish_obj)
    })

    return fishes
}

function createBugs() {
    // Returns an array of critter objects 
    let bugArr = [] 
    bugs.map( f => {
        let bug_obj = createCritterObj(f.id,
             f.name,
             f.value, 
             f.location, 
             f.shadow,
             f.precipitation,
             f.start_time,
             f.end_time, 
             f["NH Jan"],
             f["NH Feb"],
             f["NH Mar"],
             f["NH Apr"],
             f["NH May"],
             f["NH Jun"],
             f["NH Jul"],
             f["NH Aug"],
             f["NH Sep"],
             f["NH Oct"],
             f["NH Nov"],
             f["NH Dec"],
             f["SH Jan"],
             f["SH Feb"],
             f["SH Mar"],
             f["SH Apr"],
             f["SH May"],
             f["SH Jun"],
             f["SH Jul"],
             f["SH Aug"],
             f["SH Sep"],
             f["SH Oct"],
             f["SH Nov"],
             f["SH Dec"],
             f["Critterpedia Filename"])
        bugArr.push(bug_obj)
    })

    return bugArr
}


export const bugObjs = createBugs()
export const fishObjs = createFishes()

