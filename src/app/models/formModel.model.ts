export class TheSelection {
  constructor(public name: string, public point: number) {}
}

export class ThePoints {
  constructor(public jobTeer: number, public jobExperience: number, public educationExperience: number, public language: number, public hourlyWage: number, public areaPoint: number){}
  sum(): number {
    return this.jobTeer + this.jobExperience + this.language + this.hourlyWage + this.areaPoint + this.educationExperience;
  }
}

