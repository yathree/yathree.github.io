import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-learner-preview',
  templateUrl: './learner-preview.component.html',
  styleUrls: ['./learner-preview.component.scss']
})
export class LearnerPreviewComponent implements OnInit {

  // kiporo this id inakiwa ivutwe kutoka kwenye link
  id=this.route.snapshot.params['id'];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
