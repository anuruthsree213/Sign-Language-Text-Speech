import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  startVideo(selfie_id:any){
    navigator.mediaDevices.getUserMedia({
      video: {width: 300, height: 250},
      audio: false
    }).then(stream => {
      const video_doc:any = document.getElementById(selfie_id);
      video_doc.srcObject = stream;
    })
  }

  stopVideo(selfie_id:any){
    navigator.mediaDevices.getUserMedia({
      video: {width: 300, height: 250},
      audio: false
    }).then(stream => {
      var mediaStream:any = stream.getTracks();
      const video_doc:any = document.getElementById(selfie_id);
      
      // console.log(stream, mediaStream);

      mediaStream.forEach(function(track:any) {
        // console.log(track);
        track.enabled = false;
        track.stop();
      });
      // mediaStream.enabled = false;l

      video_doc.srcObject = null;

    })
  }

}
