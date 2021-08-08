// 7 kyu
// https://www.codewars.com/kata/58356a94f8358058f30004b5

function flyBy(lamps, drone){
  const totalLampsTurnOn = drone.length;
  let currentLamp = 0;
  let lampsAfterDrone = '';

  for (let lamp of lamps) {
    lampsAfterDrone += currentLamp < totalLampsTurnOn ? 'o' : lamp;
    currentLamp++;
  };

  return lampsAfterDrone;
};
