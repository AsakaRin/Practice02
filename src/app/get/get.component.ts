import { UserService } from '../user.service';
import { IUser } from '../user';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-get',
	templateUrl: './get.component.html',
	styleUrls: ['./get.component.scss']
})
export class GetComponent implements OnInit {

	private users: IUser[];

	constructor(private userService: UserService) { }

	ngOnInit() {

		this.userService.getUsers().subscribe(next => this.users = next);
	}
}
