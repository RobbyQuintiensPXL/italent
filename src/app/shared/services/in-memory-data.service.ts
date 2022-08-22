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
        description: 'During the security advanced course I was instructed to create an application where messages and files can be securely sent to a receiver.' +
          'I developed this application using ASP.NET and Angular and used Hybrid Encryption. ' +
          'This means that both the messages and the files were encrypted symmetrically AND asymmetrically. This ensures very secure message sharing.'
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
        imgOne: 'assets/img/projects/flutter01.png',
        imgTwo: 'assets/img/projects/flutter01.png',
        description: 'During the security advanced course I was instructed to create an application where messages and files can be securely sent to a receiver.' +
          'I developed this application using ASP.NET and Angular and used Hybrid Encryption. ' +
          'This means that both the messages and the files were encrypted symmetrically AND asymmetrically. This ensures very secure message sharing.'
      },
      {
        id: 4,
        name: 'Github Actions',
        imgThumb: 'assets/img/projects/gh.png',
        imgOne: 'assets/img/projects/flutter01.png',
        imgTwo: 'assets/img/projects/flutter01.png',
        description: 'During the security advanced course I was instructed to create an application where messages and files can be securely sent to a receiver.' +
          'I developed this application using ASP.NET and Angular and used Hybrid Encryption. ' +
          'This means that both the messages and the files were encrypted symmetrically AND asymmetrically. This ensures very secure message sharing.'
      },
      {
        id: 5,
        name: 'Extra',
        imgThumb: 'assets/img/projects/extr.png',
        imgOne: 'assets/img/projects/flutter01.png',
        imgTwo: 'assets/img/projects/flutter01.png',
        description: 'During the security advanced course I was instructed to create an application where messages and files can be securely sent to a receiver.' +
          'I developed this application using ASP.NET and Angular and used Hybrid Encryption. ' +
          'This means that both the messages and the files were encrypted symmetrically AND asymmetrically. This ensures very secure message sharing.'
      },
    ];
    return {project};
  }
}
