import { Component, OnInit, Input } from '@angular/core';
import { UserService } from './../../user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  selectedFile: File = null;
  // artisans: any;
  images: any;
  // @Input() artis = {
  //   name: '',
  //   surname: '',
  //   description: ''
  // }

  constructor(private _userService : UserService) { }

  ngOnInit() {
  }

  selectImage(event){
     console.log(event);
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.images = file;
    }
    // this.selectedFile = <File>event.target.files[0];
  }
  onUpload(){
    const fd = new FormData();
    fd.append('pic', this.images,this.images);
    this._userService.OnUploadImg(this.images)
    .subscribe(
      res => console.log(res),
      err => console.log(err))
  }
  // getAllArtisans() {
  //   this._userService.getAllArtisans().subscribe(data => {
  //     this.artisans = data.data;
  //     console.log(data.data);
  //   })
  // }

  // GetEachArtisan(art) {
  //   this.artis = art;
  //   console.log(art);
  // }

}
