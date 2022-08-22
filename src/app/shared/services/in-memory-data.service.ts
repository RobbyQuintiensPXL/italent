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
          'framework. These screenshots represents an application to find and book hotel images based on location, country, region,..' +
          'To learn Dart was quite a steep learning curve, especially for the design aspects.'
      },
      {
        id: 2,
        name: 'AWS',
        imgThumb: 'assets/img/projects/aws.jpeg',
        imgOne: 'assets/img/projects/AWS01.png',
        imgTwo: 'assets/img/projects/AWS02.png',
        description: 'During the security advanced course I was instructed to create an application where messages and files can be securely sent to a receiver.' +
          'I developed this application using ASP.NET and Angular and used Hybrid Encryption. ' +
          'This means that both the messages and the files were encrypted symmetrically AND asymmetrically. This ensures very secure message sharing.'
      },
      {
        id: 3,
        name: 'SonarCloud',
        imgThumb: 'assets/img/projects/sonarcloud.png',
        imgOne: 'assets/img/projects/sonar01.png',
        imgTwo: 'assets/img/projects/sonar02.png',
        description: 'During the security advanced course I was instructed to create an application where messages and files can be securely sent to a receiver.' +
          'I developed this application using ASP.NET and Angular and used Hybrid Encryption. ' +
          'This means that both the messages and the files were encrypted symmetrically AND asymmetrically. This ensures very secure message sharing.'
      },
      {
        id: 4,
        name: 'Github Actions',
        imgThumb: 'assets/img/projects/gh.png',
        imgOne: 'assets/img/projects/GH01.png',
        imgTwo: 'assets/img/projects/GH02.png',
        description: 'During the security advanced course I was instructed to create an application where messages and files can be securely sent to a receiver.' +
          'I developed this application using ASP.NET and Angular and used Hybrid Encryption. ' +
          'This means that both the messages and the files were encrypted symmetrically AND asymmetrically. This ensures very secure message sharing.'
      },
      {
        id: 5,
        name: 'Extra',
        imgThumb: 'assets/img/projects/extr.png',
        imgOne: 'assets/img/projects/carShop.png',
        imgTwo: 'assets/img/projects/microservices01.png',
        description: 'During the security advanced course I was instructed to create an application where messages and files can be securely sent to a receiver.' +
          'I developed this application using ASP.NET and Angular and used Hybrid Encryption. ' +
          'This means that both the messages and the files were encrypted symmetrically AND asymmetrically. This ensures very secure message sharing.'
      },
    ];
    return {project};
  }
}
