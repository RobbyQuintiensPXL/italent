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
        description: 'I developed a small fraction of a front end application in Flutter. The back end was created in Java with the Spring Boot framework. These screenshots represents an application to find and book hotels based on location, country, region,.. \n' +
          '\n' +
          'Flutter is an open-source UI software development kit created by Google. \n' +
          'Its popularity is increasing significantly among application developers because of its use for cross platform development. With this framework it’s possible to create applications for Android, iOS, Windows, Mac, Linux, and the web. Flutter uses Dart as the programming language.\n' +
          '\n' +
          'To learn Dart was quite a steep learning curve, especially for the design aspects.\n' +
          'It took me more time as I expected to understand how a UI was build in it. For this reason, I couldn’t finish the whole project as what I initially envisioned.\n' +
          '\n' +
          'I love to combine design and code, and for that reason I want to grow as a full stack developer. Choosing Flutter was a great opportunity to further develop these skills. \n' +
          'I hope to learn and create more applications like these in my spare time.\n'
      },
      {
        id: 2,
        name: 'AWS',
        imgThumb: 'assets/img/projects/aws.jpeg',
        imgOne: 'assets/img/projects/AWS01.png',
        imgTwo: 'assets/img/projects/AWS02.png',
        description: 'If previous mentioned hotel applicaton needed to be hosted, it is necessary that the project needs to deployed somewhere. Therefor I chose AWS to create a complete pipeline. This pipeline is connected to SonarCloud for code quality.\n' +
          '\n' +
          'AWS CodePipeline is a fully managed continuous delivery service. With this service you can automate your release pipeline for application and infrastructure updates.\n' +
          '\n' +
          'This pipeline was build up with an envisioned architecture where tested features/branches can be deployed directly to a UAT-environment or production environment. The pipeline source (CodeCommit) retrieves its code from Github, then it creates an artifact (CodeArtifact) of that code which will be used by the build phase (CodeBuild). The CodeBuild consists of a YAML-file containing steps of this build. The first steps of the build are to run the artifact, checking if there are no build fails included and all tests succeed. Another one of these steps is the set quality gate of SonarCloud. If one of these steps fails, the whole pipeline will fail. This will ensure you that a specific minimum set of requirements must be achieved.\n' +
          '\n' +
          'I chose this technology because it’s Important to provide quality code. A company/project must be protected against sloppy or breakable code, especially if there is an architecture where developed features are deployed to a UAT-environment or production environment.\n' +
          '\n' +
          'I’ve learned the Importance of setting good and secure rules before deploying, because a chain is only as strong as its weakest link.\n'
      },
      {
        id: 3,
        name: 'SonarCloud',
        imgThumb: 'assets/img/projects/sonarcloud.png',
        imgOne: 'assets/img/projects/sonar01.png',
        imgTwo: 'assets/img/projects/sonar02.png',
        description: 'SonarCloud is a tool created for continuous inspection of code quality to perform automatic reviews with static analysis of code to fix bugs and code smells. Jacoco is the dependency in Java which does the first analysing and provides this to SonarCloud to create the necessary reports. SonarCloud is connected to a version of control, for this project I used Github.\n' +
          '\n' +
          'The use of this tool surely is a great recommendation for providing quality code. Therefore, I found it important to learn and use this tool. The tool is provided with a lot of good documentation and tutorials on how to do the setup. SonarCloud is quite straightforward on using, creating and modifying conditions to help you know whether your project is ready for production. \n' +
          '\n' +
          'By using this tool I’ve learned more about common security issues and how to fix them. It gives you an explanation why some parts of code can create a security issue or why it can create difficulties for maintainability. It taught me why it’s important to use tools like SonarCloud, so you can provide a secure and (almost) bug-free project or feature.\n' +
          '\n' +
          'I chose this technology because it’s Important to provide quality code, especially when you’re a developer in a large company. If you’re working with a lot of people on same projects, it’s necessary your code meets certain requirements.\n'
      },
      {
        id: 4,
        name: 'Github Actions',
        imgThumb: 'assets/img/projects/gh.png',
        imgOne: 'assets/img/projects/GH01.png',
        imgTwo: 'assets/img/projects/GH02.png',
        description: 'Github Actions was used to create a YAML-file to create continuous inspection for SonarCloud. Github Actions can be compared to Jenkins, they both create workflows using declarative pipelines. \n' +
          '\n' +
          'In Github Actions a .yaml file was created, this pipeline contains the steps necessary for connection and interaction with SonarCloud. \n' +
          '\n' +
          'I found this tool very useful and interesting. It was a good practice comparing Github Actions with Jenkins.\n'
      },
      {
        id: 5,
        name: 'Extra',
        imgThumb: 'assets/img/projects/extr.png',
        imgOne: 'assets/img/projects/carShop.png',
        imgTwo: 'assets/img/projects/microservices01.png',
        description: 'This is a little side-project I am still working on. In this project I make use of microservices to create a loose coupling of services. For this project I use Consul for creating \n' +
          'a local cloud service mesh. KeyCloak is used to provide the necessary security based on the OAuth2.O protocol. The project represents a platform for a car dealer, where he/she can easily add new cars.\n' +
          '\n' +
          'I started this side project to combine all the things I learned. Even now, when I read something new about a technology, I try to combine or implement it in this project. For example QueryDSL. QueryDSL is an annotation processing tool, which helps with creating and running type-safe SQL-queries. \n'
      },
    ];
    return {project};
  }
}
