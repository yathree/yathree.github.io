import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-restriction-form',
  templateUrl: './restriction-form.component.html',
  styleUrls: ['./restriction-form.component.scss'],
})
export class RestrictionFormComponent implements OnInit {
  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      type: new FormControl(null, [Validators.required]),
      description: new FormControl(null),
    });
  }
}
