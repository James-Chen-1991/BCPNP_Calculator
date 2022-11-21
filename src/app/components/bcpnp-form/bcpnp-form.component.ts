import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ThePoints, TheSelection } from 'src/app/models/formModel.model';
import { FromService } from 'src/app/services/form.service';


@Component({
  selector: 'app-bcpnp-form',
  templateUrl: './bcpnp-form.component.html',
  styleUrls: ['./bcpnp-form.component.scss']
})
export class BcpnpFormComponent implements OnInit {

  @Output() sumPoints = new EventEmitter<number>();

  // Service and Point saving object
  formService: FromService = new FromService();
  points: ThePoints = new ThePoints(1, 0, 0, 0, 0, 0);
  extraPoints: number = 0;


  // Selections
  jobTeer: TheSelection[] = [];
  jobExperience: TheSelection[] = [];
  extraJob: TheSelection[] = [];
  highestEducation: TheSelection[] = [];
  extraEducation: TheSelection[] = [];
  languageLevel: TheSelection[] = [];
  hourlyWage: TheSelection[] = [];
  workingArea: TheSelection[] = [];
  workingAreaExtra: TheSelection[] = [];
  extraLanguage!: TheSelection;

  constructor() { }

  ngOnInit(): void {
    this.jobTeer = this.formService.teers;
    this.jobExperience = this.formService.experience;
    this.extraJob = this.formService.extraJob;
    this.highestEducation = this.formService.highestEducation;
    this.extraEducation = this.formService.extraEducation;
    this.hourlyWage = this.formService.getHourlyWage();
    this.workingArea = this.formService.workingArea;
    this.workingAreaExtra = this.formService.workingAreaExtra;
    this.languageLevel = this.formService.languageLevel;
    this.extraLanguage = new TheSelection('Secondary Language(Engish or French) is CLB4 or above', 10)
  }

  setPoint($event: TheSelection) {
    switch($event.name) {
      case "Job Teer":
        this.points.jobTeer = $event.point;
        break;
      case "Directly Job Experience":
        this.points.jobExperience = $event.point;
        break;
      case "Highest Level of Education":
        this.points.educationExperience = $event.point;
        break;
      case "Wage of the B.C. Job Offer":
        this.points.hourlyWage = $event.point;
        break;
      case "Area of Employment within B.C.":
        this.points.areaPoint = $event.point;
        break;
      case "Language":
        this.points.language = $event.point;
        break;
      default:
        break;
    }
  }

  setExtraPoints($event: TheSelection) {
    this.extraPoints += $event.point;
  }

  submit() {
    const sum = this.points.sum() + this.extraPoints;
    console.log(this.points);
    this.sumPoints.emit(sum);
  }




}
