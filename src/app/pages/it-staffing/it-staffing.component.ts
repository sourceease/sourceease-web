import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-it-staffing',
  templateUrl: './it-staffing.component.html',
  styleUrls: ['./it-staffing.component.scss']
})
export class ItStaffingComponent implements OnInit {

  selectedTab: number = 1;

  constructor() { }

  ngOnInit(): void {
  }

  technologiesIcon = [

    // web technologies

    { tech: 'web', techName: 'Angular', imageUrl: '../../../assets/sourceease/it-staffing/Technologies logo/Web app dev/angular.png' },
    { tech: 'web', techName: 'Vue.js', imageUrl: '../../../assets/sourceease/it-staffing/Technologies logo/Web app dev/vue.png' },
    { tech: 'web', techName: 'React', imageUrl: '../../../assets/sourceease/it-staffing/Technologies logo/Web app dev/react.png' },
    { tech: 'web', techName: '.Net', imageUrl: '../../../assets/sourceease/it-staffing/Technologies logo/Web app dev/net.png' },
    { tech: 'web', techName: 'JS', imageUrl: '../../../assets/sourceease/it-staffing/Technologies logo/Web app dev/js.png' },
    { tech: 'web', techName: 'Bootstrap', imageUrl: '../../../assets/sourceease/it-staffing/Technologies logo/Web app dev/bootstrap.png' },

    // mobile

    { tech: 'mobile', techName: 'Andriod', imageUrl: '../../../assets/sourceease/it-staffing/Technologies logo/mobile app dev/android.png' },
    { tech: 'mobile', techName: 'Flutter', imageUrl: '../../../assets/sourceease/it-staffing/Technologies logo/mobile app dev/flutter.png' },
    { tech: 'mobile', techName: 'IOS', imageUrl: '../../../assets/sourceease/it-staffing/Technologies logo/mobile app dev/ios.png' },
    { tech: 'mobile', techName: 'Kotlin', imageUrl: '../../../assets/sourceease/it-staffing/Technologies logo/mobile app dev/kotlin.png' },
    { tech: 'mobile', techName: 'React Native', imageUrl: '../../../assets/sourceease/it-staffing/Technologies logo/mobile app dev/native.png' },
    { tech: 'mobile', techName: 'Swift', imageUrl: '../../../assets/sourceease/it-staffing/Technologies logo/mobile app dev/swift.png' },

    // Middleware

    { tech: 'middleware', techName: 'Java', imageUrl: '../../../assets/sourceease/it-staffing/Technologies logo/middleware/java.png' },
    { tech: 'middleware', techName: '.Net', imageUrl: '../../../assets/sourceease/it-staffing/Technologies logo/middleware/net.png' },
    { tech: 'middleware', techName: 'Node', imageUrl: '../../../assets/sourceease/it-staffing/Technologies logo/middleware/node.png' },
    { tech: 'middleware', techName: 'Python', imageUrl: '../../../assets/sourceease/it-staffing/Technologies logo/middleware/py.png' },
    { tech: 'middleware', techName: 'Spring Boot', imageUrl: '../../../assets/sourceease/it-staffing/Technologies logo/middleware/spring.png' },

    // Business/Artifical

    { tech: 'business', techName: 'Domo', imageUrl: '../../../assets/sourceease/it-staffing/Technologies logo/business ai/demo.png' },
    { tech: 'business', techName: 'Qulik', imageUrl: '../../../assets/sourceease/it-staffing/Technologies logo/business ai/quik.png' },
    { tech: 'business', techName: 'Zoho Analytics', imageUrl: '../../../assets/sourceease/it-staffing/Technologies logo/business ai/red.png' },
    { tech: 'business', techName: 'Power BI', imageUrl: '../../../assets/sourceease/it-staffing/Technologies logo/business ai/yel.png' },

    // Automation

    { tech: 'automation', techName: 'Cucumber', imageUrl: '../../../assets/sourceease/it-staffing/Technologies logo/automation testing/a1.png' },
    { tech: 'automation', techName: 'Appium', imageUrl: '../../../assets/sourceease/it-staffing/Technologies logo/automation testing/a2.png' },
    { tech: 'automation', techName: 'Selenium', imageUrl: '../../../assets/sourceease/it-staffing/Technologies logo/automation testing/a3.png' },
    { tech: 'automation', techName: 'Robot Framework', imageUrl: '../../../assets/sourceease/it-staffing/Technologies logo/automation testing/a4.png' },
    { tech: 'automation', techName: 'Mocha', imageUrl: '../../../assets/sourceease/it-staffing/Technologies logo/automation testing/a5.png' },
    { tech: 'automation', techName: 'Playwrite', imageUrl: '../../../assets/sourceease/it-staffing/Technologies logo/automation testing/a6.png' },
    { tech: 'automation', techName: 'JMeter', imageUrl: '../../../assets/sourceease/it-staffing/Technologies logo/automation testing/a7.png' },

    // Cloud Based Solution

    { tech: 'cloud', techName: 'Ansible', imageUrl: '../../../assets/sourceease/it-staffing/Technologies logo/cloud services/a1.png' },
    { tech: 'cloud', techName: 'AWS', imageUrl: '../../../assets/sourceease/it-staffing/Technologies logo/cloud services/aws.png' },
    { tech: 'cloud', techName: 'Microsoft Azure', imageUrl: '../../../assets/sourceease/it-staffing/Technologies logo/cloud services/azore.png' },
    { tech: 'cloud', techName: 'IBM Cloud', imageUrl: '../../../assets/sourceease/it-staffing/Technologies logo/cloud services/cd1.png' },
    { tech: 'cloud', techName: 'Google Cloud Platform', imageUrl: '../../../assets/sourceease/it-staffing/Technologies logo/cloud services/glg.png' },

  ]

  chngTech(tabNumber: number): void {
    this.selectedTab = tabNumber;
  }
  chngTechMob($event: any): void {
    this.selectedTab = $event + 1;
  }

  getFilteredTechnologies(): { tech: string, imageUrl: string, techName?:string }[] {
    switch (this.selectedTab) {
      case 1:
        return this.technologiesIcon.filter(item => item.tech === 'web');
      case 2:
        return this.technologiesIcon.filter(item => item.tech === 'mobile');
      case 3:
        return this.technologiesIcon.filter(item => item.tech === 'middleware');
      case 4:
        return this.technologiesIcon.filter(item => item.tech === 'business');
      case 5:
        return this.technologiesIcon.filter(item => item.tech === 'automation');
      case 6:
        return this.technologiesIcon.filter(item => item.tech === 'cloud');
      default:
        return [];
    }
  }

}
