import { Component, OnInit } from '@angular/core';
import {Editorial} from '../../../objects/editorial';
import {EditorialListService} from '../../../services/editorial-list.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../services/auth.service';
import {UserService} from '../../../services/user.service';

@Component({
  selector: 'app-editorial-create',
  templateUrl: './editorial-create.component.html',
  styleUrls: ['./editorial-create.component.scss']
})
export class EditorialCreateComponent implements OnInit {
  editor: Editorial;
  editorId: number;
  formEditor: FormGroup;
  userId: number;

  constructor(
    private editorialListService: EditorialListService,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private userService: UserService,
    private fb: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.editorId = +this.route.snapshot.paramMap.get('id');
    this.createForm();
    this.getEditor();
  }

  getEditor() {
    this.editorialListService.getEditorialById(this.editorId).subscribe(res => {
      this.editor = res;
      this.setFormData();
    });
  }

  getUser() {
    this.userService.getUserByLogin(this.authService.authUserLogin).subscribe(resUser => {
      this.userId = resUser[0].id;
    });
  }

  createForm() {
    this.formEditor = this.fb.group({
      id: [-1],
      userId: [-1],
      photoUrl: ['', Validators.required],
      title: ['', Validators.required],
      movieIds: this.fb.array([
        // this.fb.control(-1, Validators.required),
      ]),
      subscriber: this.fb.array([
        // this.fb.control(-1),
      ]),
      texts: this.fb.array([
        // this.fb.control(-1, Validators.required),
      ]),
      price: [0]
    });
  }

  setFormData() {
    for(let i = 0; i < this.editor.movieIds.length; i++) {
      this.addMovieIds();
    }
    for(let i = 0; i < this.editor.subscriber.length; i++) {
      this.addSubs();
    }
    for(let i = 0; i < this.editor.texts.length; i++) {
      this.addTexts();
    }
    this.formEditor.setValue(this.editor);
  }

  get subscriber() {
    return this.formEditor.get('subscriber') as FormArray;
  }

  get movieIds() {
    return this.formEditor.get('movieIds') as FormArray;
  }

  get texts() {
    return this.formEditor.get('texts') as FormArray;
  }

  get title() {
    return this.formEditor.get('title') as FormControl;
  }

  addMovieIds() {
    this.movieIds.push(new FormControl(-1, [Validators.required]));
    // this.addTexts();
  }

  addTexts() {
    this.texts.push(new FormControl('', [Validators.required]));
  }

  addSubs() {
    this.subscriber.push(new FormControl(-1, [Validators.required]));
  }

  deleteMovie(index: number) {
    this.movieIds.push(new FormControl(-1, [Validators.required]));
  }

  save() {
    console.log(this.formEditor.value)
  }
}
