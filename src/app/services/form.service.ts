import { TheSelection } from "../models/formModel.model"

export class FromService {
  teers : TheSelection[] = [
    new TheSelection("Please Select One", -2),
    new TheSelection("TEER 0", 0),
    new TheSelection("TEER 1", 0),
    new TheSelection("TEER 2", 0),
    new TheSelection("TEER 3", 0),
    new TheSelection("TEER 4", -1),
    new TheSelection("TEER 5", -1),
  ]

  experience: TheSelection[] = [
    new TheSelection("Please Select One", -2),
    new TheSelection("5 or more years", 20),
    new TheSelection("At least 4 but less than 5 years", 16),
    new TheSelection("At least 3 but less than 4 years", 12),
    new TheSelection("At least 2 but less than 3 years", 8),
    new TheSelection("At least 1 but less than 2 years", 4),
    new TheSelection("Less than 1 year", 1),
    new TheSelection("No experience", 0),
  ]

  extraJob: TheSelection[] = [
    new TheSelection("At least 1 year of directly related experience in Canada", 10),
    new TheSelection("Currently working full-time in B.C. for the employer in the occupation identified in the BCPNP registration", 10),
  ]

  highestEducation: TheSelection[] = [
    new TheSelection("Please Select One", -2),
    new TheSelection("Dotoral Degree", 27),
    new TheSelection("Master's Degree", 22),
    new TheSelection("Post-graduate Certificate or Diploma or Bachelor's Degree", 15),
    new TheSelection("Associate Degree or Post-secondary Diploma", 5),
    new TheSelection("Secondary School(High School) or Less", 0),
  ]

  extraEducation: TheSelection[] = [
    new TheSelection("Finish Secondary Schoo or above in B.C.", 8),
    new TheSelection("Finish Secondary Schoo or above out of B.C. but in Canada", 6),
    new TheSelection("Eligible Professional Designation in B.C.", 5)
  ]

  languageLevel: TheSelection[] = [
    new TheSelection("Please Select One", -2),
    new TheSelection("CLB9+", 30),
    new TheSelection("CLB8", 25),
    new TheSelection("CLB7", 20),
    new TheSelection("CLB6", 15),
    new TheSelection("CLB5", 10),
    new TheSelection("CLB4", 5),
    new TheSelection("Under CLB4", 0),
  ]

  hourlyWage: TheSelection[] = [];


  getHourlyWage(): TheSelection[] {
    this.hourlyWage.push(new TheSelection("Please Select One", -2));
    for (let i = 70; i >= 16; i--) {
      if (i === 70) {
        this.hourlyWage.push(new TheSelection("$70.00 and above", 55));
      } else {
        this.hourlyWage.push(new TheSelection(`$${i.toFixed(2)} to $${i + 0.99}`, i - 15));
      }
    }
    this.hourlyWage.push(new TheSelection("Less than $16.00", 0));

    return this.hourlyWage;
  }

  workingArea: TheSelection[] = [
    new TheSelection("Please Select One", -2),
    new TheSelection("Area 1: Metro Vancouver Regional District", 0),
    new TheSelection("Area 2: Squamish, Abbotsford, Agassiz, Mission, and Chillwack", 5),
    new TheSelection("Area 3: Areas of B.C. not inculded in Area 1 or 2", 15)
  ]

  workingAreaExtra: TheSelection[] = [
    new TheSelection("Regional Experience: working as a full time employee in area 2 or 3(within 5 years)", 10),
    new TheSelection("Regional Alumni: graduate from post-secondary school in area 2 or 3 (within 3 years)", 10),
  ]
}

