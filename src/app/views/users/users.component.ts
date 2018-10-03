import { Component, OnInit } from '@angular/core';

import { UserService } from '../../_services/';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService
      .getAll()
      .pipe()
      .subscribe(
        data => {
          console.log('>>> DATA:', data);
        },
        error => {
          console.log('>>> ERROR: ', error);
        }
      );
  }
}

// [{"username":"jason.hick@directlinegroup.co.uk","racf":"HJIE","roles":["ROLE_BS_TEAMLEADER"],"fullname":"Jason Hick","status":"ACTIVE","lastLoginDateTime":[2018,10,3,14,45,24],"creationDateTime":[2018,9,27,13,54,20]},{"username":"admin@directlinegroup.co.uk","racf":"ADMIN","roles":["ROLE_ADMIN"],"fullname":"Mta Admin","status":"ACTIVE","lastLoginDateTime":[2018,10,3,14,53,7]},{"username":"cxg2@directlinegroup.co.uk","racf":"cxg2","roles":["ROLE_BS_SUPERVISOR"],"fullname":"Mta Team Lead","status":"ACTIVE","lastLoginDateTime":[2018,9,27,8,25,50]},{"username":"lead@directlinegroup.co.uk","racf":"LEAD","roles":["ROLE_BS_TEAMLEADER"],"fullname":"Mta Team Lead","status":"ACTIVE","lastLoginDateTime":[2018,10,2,13,51,42]},{"username":"ozey@directlinegroup.co.uk","racf":"OZEY","roles":["ROLE_BS_SUPERVISOR"],"fullname":"Mta Team Lead","status":"ACTIVE","lastLoginDateTime":[2018,10,2,16,7,49]},{"username":"tvba@directlinegroup.co.uk","racf":"TVBA","roles":["ROLE_BS_SUPERVISOR"],"fullname":"Mta Team Lead","status":"ACTIVE","lastLoginDateTime":[2018,9,28,15,46,42]},{"username":"roy.adams@directlinegroup.co.uk","racf":"ADRQ","roles":["ROLE_BS_SUPERVISOR"],"fullname":"Roy Adams","status":"ACTIVE","lastLoginDateTime":[2018,10,2,13,54,42],"creationDateTime":[2018,8,15,13,18,5]}]
