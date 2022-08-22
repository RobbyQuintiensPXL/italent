import {Injectable} from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb(): any {
    const project = [
      {
        id: 1,
        name: 'Flutter',
        imgThumb: 'assets/img/projects/flutter.png',
        imgOne: 'assets/img/projects/flutter01.png',
        imgTwo: 'assets/img/projects/flutter02.png',
        description: 'I developed a small fraction of a front end application in Flutter. The back end was created in Java with the Spring Boot' +
          'framework. These screenshots represents an application to find and book hotels based on location, country, region,..' +
          'To learn Dart was quite a steep learning curve, especially for the design aspects.'
      },
      {
        id: 2,
        name: 'AWS',
        imgThumb: 'assets/img/projects/aws.jpeg',
        imgOne: 'assets/img/projects/AWS01.png',
        imgTwo: 'assets/img/projects/AWS02.png',
        description: 'If previous mentioned hotel applicaton needed to be hosted, it is necessary that the code needs to deployed ' +
          'somewhere. Therefor I chose AWS to create a complete pipeline. This pipeline is connected to SonarCloud for code quality to provide ' +
          'valid production code.'
      },
      {
        id: 3,
        name: 'SonarCloud',
        imgThumb: 'assets/img/projects/sonarcloud.png',
        imgOne: 'assets/img/projects/sonar01.png',
        imgTwo: 'assets/img/projects/sonar02.png',
        description: 'SonarCloud is a tool created for continuous inspection of code quality to perform automatic reviews with static analysis of code to fix bugs and code smells ' +
          'Jacoco is the intern dependency in Java which does the first analysing and provides this to SonarCloud to create the necessary reports. ' +
          'SonarCloud is connected to a version of control, in this example Github Actions is used, for those continuous inspection.'
      },
      {
        id: 4,
        name: 'Github Actions',
        imgThumb: 'assets/img/projects/gh.png',
        imgOne: 'assets/img/projects/GH01.png',
        imgTwo: 'assets/img/projects/GH02.png',
        description: 'Github Actions was used to create a YAML-file to create continuous inspection for SonarCloud.'
      },
      {
        id: 5,
        name: 'Extra',
        imgThumb: 'assets/img/projects/extr.png',
        imgOne: 'assets/img/projects/carShop.png',
        imgTwo: 'assets/img/projects/microservices01.png',
        description: 'This is a little side-project I am still working on. In this project I make use of ' +
          'microservices to create a loose coupling of services. For this project I use Consul for creating ' +
          'a local cloud service mesh and KeyCloak to provide the necessary security. This project represents a ' +
          'platform for a car dealer, where he/she can easily add new cars.'
      },
    ];
    return {project};
  }
}
