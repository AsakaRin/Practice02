import { Component, OnInit } from '@angular/core';
import { IUser } from '../user';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { UserService } from '../user.service';

@Component({

	selector: 'app-edit',
	templateUrl: './edit.component.html',
	styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
	
	user: IUser;

	id: string;

	constructor(private actRoute: ActivatedRoute, private userService: UserService, private router: Router) { }

	ngOnInit() {

		//this.userService.getUsers().subscribe(next => this.users = next);

		this.actRoute.paramMap.subscribe(params => {

			this.id = params.get('id');
		});

		this.userService.getUserById(this.id).subscribe(next => this.user = next);

	}

	UpdateUser() {

		this.userService.updateUser(this.user);
		this.router.navigate(['/list']);
	}

}
