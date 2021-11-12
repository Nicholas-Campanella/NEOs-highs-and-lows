

async function fetchData(Neo) {
  const url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=DEMO_KEY`;
  try {
    const res = await axios.get(url);
    // console.log(res.data.near_earth_objects['2015-09-07'])
    const NeoData = res.data.near_earth_objects['2015-09-07'];
    showNeoData(NeoData);
  } catch (error) {
    alert(`${Neo} closest approch ${close_approach_data.miss_distance.lunar}`)
  }

}
fetchData()
const div1 = document.querySelector(`#div1`);

function showNeoData(data) {
  console.log(data[0])

  //name
  const NeoIdNumber = document.createElement(`h1`)
  NeoIdNumber.innerText = ` N.E.O. id:${data[0].id} and name: ${data[0].name}`
  div1.appendChild(NeoIdNumber)


  //   //speed
  //   const NeoRelativeVelocity = document.createElement(`h4`);
  //   NeoRelativeVelocity.innerText = `${near_earth_objects.close_approach_data.relative.kilometers_per_second}`;
  //   div1.appendChild(NeoRelativeVelocity);
  //   //closets approch
  //   const NeoClosestsApproch = document.createElement(`h4`);
  //   NeoClosestsApproch.innerText = `${near_earth_objects.close_approach_data.miss_distance.lunar}`;
  //   div1.appendChild(NeoClosestsApproch)
  //   //estimated diameter
  //   const NeoDiameter = document.createElement(`h4`);
  //   NeoDiameter.innerText = `${near_earth_objects.estimated_diameter.kilometers.estimated_diameter_max}`;
  //   div1.appendChild(NeoDiameter)
}






// function getData() {
//   const response = await fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=DEMO_KEY`)
//   const data = await response.json()

//   function geInput(prompt) {
//     return readlinesSync.question(`${prompt}: `)
//   }
//   function buildNeo() {
//     const largets = JSON.estimated_diameter.meters.estimated_diameter_max();

//     const fastest = JSON.close_approach_data.miss_distance.relative_velocity.kilometers_per_second();

//     const closest = JSON.close_approach_data.miss_distance.lunar();

//     const brightest = JSON.absolute_magnitude_h();

//     const deck = []
//     for (let i = 0; i < ranks.length; i++) {
//       for (let o = 0; o < largets.length; o++) {
//         deck.push({ largets: largets[o], ranks: ranks[i], value: i })

//       }else if (let p = 0; p <.length; p++) {
//         for (let a = 0; a <.lengths; a++) {
//           deck.push({ fastest: fastest[a], ranks: ranks[p], value: p })
//         }
//       } else if (let s = 0; s <.length; s++) {
//         for (let d = 0; d <.length; d++) {
//           deck.push({ closest: closest[d], ranks: rank[s], value: s })
//         }
//       } else (let f = 0; f <.length; f++) {
//         for (let g = 0; g <.legth; g++) {
//           deck.push({ brightest: brightest[g], ranks: ranks[f], value: f })
//         }
//       }
//     }
//     return deck
//   }
//   function shuffleNeo(deck) {
//     const shuffleNeo = deck
//     let currentIndex = deck.length
//     let temporaryValue;
//     let randomIndex;
//     while (currentIndex !== 0) {
//       randomIndex = math.floor(math.random() * currentIndex)
//       currentIndex--
//       temporaryValue = shuffleNeo[currnetIndex]
//       shuffleNeo[randomIndex] = temporaryValue

//     }
//     return shuffledNeo
//   }
// }
// comsole.log(shuffle(buildNeo()))