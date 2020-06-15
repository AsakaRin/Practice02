import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { IUser } from '../user';

@Component({
	selector: 'app-create',
	templateUrl: './create.component.html',
	styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

	private users: IUser[];

	constructor(private userService: UserService) { }

	ngOnInit() {

		this.userService.getUsers().subscribe(next => this.users = next);
	}

}
