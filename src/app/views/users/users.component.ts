import { Component, OnInit, ViewChild } from '@angular/core';

import { UserService } from '../../_services/';

import { User } from '../../_models';

import { MatSort, MatTableDataSource } from '@angular/material';

const ELEMENT_DATA = [
  {
    username: 'jason.hick@directlinegroup.co.uk',
    racf: 'HJIE',
    roles: ['ROLE_BS_TEAMLEADER'],
    fullname: 'Jason Hick',
    status: 'ACTIVE',
    lastLoginDateTime: [2018, 10, 3, 14, 45, 24],
    creationDateTime: [2018, 9, 27, 13, 54, 20]
  },
  {
    username: 'admin@directlinegroup.co.uk',
    racf: 'ADMIN',
    roles: ['ROLE_ADMIN'],
    fullname: 'Mta Admin',
    status: 'ACTIVE',
    lastLoginDateTime: [2018, 10, 3, 14, 53, 7]
  },
  {
    username: 'cxg2@directlinegroup.co.uk',
    racf: 'cxg2',
    roles: ['ROLE_BS_SUPERVISOR'],
    fullname: 'Mta Team Lead',
    status: 'ACTIVE',
    lastLoginDateTime: [2018, 9, 27, 8, 25, 50]
  },
  {
    username: 'lead@directlinegroup.co.uk',
    racf: 'LEAD',
    roles: ['ROLE_BS_TEAMLEADER'],
    fullname: 'Mta Team Lead',
    status: 'ACTIVE',
    lastLoginDateTime: [2018, 10, 2, 13, 51, 42]
  },
  {
    username: 'ozey@directlinegroup.co.uk',
    racf: 'OZEY',
    roles: ['ROLE_BS_SUPERVISOR'],
    fullname: 'Mta Team Lead',
    status: 'ACTIVE',
    lastLoginDateTime: [2018, 10, 2, 16, 7, 49]
  }
];

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  displayedColumns: string[] = ['racf', 'fullname', 'username', 'status'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort: MatSort;

  // constructor(private userService: UserService) {}

  ngOnInit() {
    this.dataSource.sort = this.sort;
    //   this.userService
    //     .getAll()
    //     .pipe()
    //     .subscribe(
    //       data => {
    //         console.log('>>> DATA:', data);
    //       },
    //       error => {
    //         console.log('>>> ERROR: ', error);
    //       }
    //     );
    // }
  }
}
