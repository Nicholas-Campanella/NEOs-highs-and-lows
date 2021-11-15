# Project Overview
ed your Developer Application.
## Project Name

Near earth Objects From Outer Space 


## Project Description
an interactive list of objects orbataing earth that allows you to veiw four vital atributes of of each object.  
<!-- pick one of four catagories 
brightest fastest cloesest largest 
then you will be presented with 2 names of neo's and you have to pick one you think is either (brightest fastest cloesest largest) based on the users disition at the begining of the app  -->

## API and Data Sample

(https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=DEMO_KEY)

```
"element_count": 24,
    "near_earth_objects": {
        "2015-09-08": [
            {
                "links": {
                    "self": "http://www.neowsapp.com/rest/v1/neo/2465633?api_key=DEMO_KEY"
                },
                "id": "2465633",
                "neo_reference_id": "2465633",
                "name": "465633 (2009 JR5)",
                "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=2465633",
                "absolute_magnitude_h": 20.36,
                "estimated_diameter": {
                    "kilometers": {
                        "estimated_diameter_min": 0.2251930467,
                        "estimated_diameter_max": 0.5035469604
                    },
                    "meters": {
                        "estimated_diameter_min": 225.1930466786,
                        "estimated_diameter_max": 503.5469604336
                    },
                    "miles": {
                        "estimated_diameter_min": 0.1399284286,
                        "estimated_diameter_max": 0.3128894784
                    },
                    "feet": {
                        "estimated_diameter_min": 738.8223552649,
                        "estimated_diameter_max": 1652.0570096689
                    }
                },
                "is_potentially_hazardous_asteroid": true,
                "close_approach_data": [
                    {
                        "close_approach_date": "2015-09-08",
                        "close_approach_date_full": "2015-Sep-08 20:28",
                        "epoch_date_close_approach": 1441744080000,
                        "relative_velocity": {
                            "kilometers_per_second": "18.1279547773",
                            "kilometers_per_hour": "65260.6371983344",
                            "miles_per_hour": "40550.4220413761"
                        },
                        "miss_distance": {
                            "astronomical": "0.3027478814",
                            "lunar": "117.7689258646",
                            "kilometers": "45290438.204452618",
                            "miles": "28142173.3303294084"
                        },
                        "orbiting_body": "Earth"
                    }
                ],
                "is_sentry_object": false
            },
```            

## Wireframes
(https://whimsical.com/neo-s-high-or-lows-DF5aj7PRbeN2hgbuKaNpyh)


### MVP/PostMVP
 -make the data display in an organized fastion based on N.E.O. attributes
 -add an appealing syle to the web site 
 

#### MVP 


- Find and use external api check
- Render data on page check
- make the data interactive check



## Project Schedule

|  Day | Tasks | Status
|---|---| ---|
|Novmebr 8| api selection / Wireframes / Project Approval / Timeframes | Complete
|November 9|core application structure (HTML, CSS, etc.)/MVP| Incomplete
|Novemebr 10-11| actual code /Initial Clickable Model | Incomplete
|November 12| Presentations | Incomplete
|November 13|  | Incomplete
|Novemebr 14|  | Incomplete
|November 15|last day for presintations|
## Priority Matrix
(https://whimsical.com/JJxoTSL4jAg9cqi3S1NNX4)


## Timeframes
| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Form | H | 3hrs| 3.5hrs | 3.5hrs |
| Working with API | H | 3hrs| 2.5hrs | 2.5hrs |
| Total | H | 6hrs| 5hrs | 5hrs |
|api selection|M|2|5|
|Wireframes|L|1|1|
|Timeframes|M|1|1/2|
|Project Approval|H|8|8|
|core application structure|H|2|1|
|MVP|H|2|2|
|actual code|H|8|6|
|Initial Clickable Model|H|2|2|
|Presentations|M|10min||
|extra steps|||
||||


## Code Snippet
for a simple idea here is alot of logic 
```
function showNeoData(data) {
  console.log(data[0])
  const title = document.createElement(`h1`)
  title.innerText = `Near Earth Objects from Outer Spaaacce`
  div1.appendChild(title)
  data.forEach(neo => {
    const NeoIdNumber = document.createElement(`h2`)
    NeoIdNumber.innerText = ` N.E.O. id:${neo.id} and Name: ${neo.name}`
    div1.appendChild(NeoIdNumber)
    const forMore = document.createElement('button')
    forMore.innerText = "click for more information"
    div1.appendChild(forMore)

    const neoDiv = document.createElement('div')
    div1.appendChild(neoDiv)
```
## Change Log
 The scope of the my project change form being a conparision statment of two N.E.O. to an organized list of data pulled from an array.  