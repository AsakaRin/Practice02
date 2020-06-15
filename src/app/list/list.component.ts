import { Component, OnInit } from '@angular/core';
import { IUser } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
	
	private users: IUser[];

	constructor(private userService: UserService) { }

	ngOnInit() {

		this.userService.getUsers().subscribe(next => this.users = next);
	}

	
}
