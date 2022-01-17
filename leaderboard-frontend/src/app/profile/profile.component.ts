import { ProfileService } from './../profile.service';
import { Component, OnInit } from '@angular/core';
import { Profile } from '../profile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profiles: Profile[];
  langs: Profile[];
  counter = 0;

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.profileService.getProfiles().subscribe((data: Profile[]) => {
      console.log(data);
      
      this.profiles = data.sort((a, b) => {
        // return (b.overall_rank) - (a.overall_rank);
        return (b.honour) - (a.honour);

      });

      this.langs = data.filter(val => val.clan == "turntabl");
      console.log(this.langs);

    });
  }
}
