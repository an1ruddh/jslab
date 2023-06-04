/*. In the Martian land faraway, a new virus has evolved and is attacking the individuals at a fast pace. The scientists have figured out the virus composition, V. The big task is to identify the people who are infected. The sample of N people is taken to check if they are POSITIVE or NEGATIVE. A report is generated which provides the current blood composition B of the person.
POSITIVE or NEGATIVE?
If the blood composition of the person is a subsequence of the virus composition V, then the person is identified as POSITIVE otherwise NEGATIVE.

Example:
Virus Composition, V = coronavirus
Blood Composition of the person, B = ravus
The person in question is POSITIVE as B is the subsequence of the V.
The scientists are busy with their research for medicine and request you to build a program which can quickly figure out if the person is POSITIVE or NEGATIVE. They will provide you with the virus composition V and all the people’s current blood composition. Can you help them?
                Note: The virus and blood compositions are lowercase alphabet strings.                                     CO2, CO4
*/
function identifyInfection(V, bloodSamples) {
    const results = [];
  
    for (const blood of bloodSamples) {
      let virusIndex = 0;
      let bloodIndex = 0;
  
      while (virusIndex < V.length && bloodIndex < blood.length) {
        if (V[virusIndex] === blood[bloodIndex]) {
          virusIndex++;
          bloodIndex++;
        } else {
          virusIndex++;
        }
      }
  
      if (bloodIndex === blood.length) {
        results.push("POSITIVE");
      } else {
        results.push("NEGATIVE");
      }
    }
  
    return results;
  }
  
  // Example usage
  const virusComposition = "coronavirus";
  const bloodCompositions = ["ravus", "oron", "covirus", "coronaviruss", "viruscorna"];
  
  const results = identifyInfection(virusComposition, bloodCompositions);
  console.log(results);
  