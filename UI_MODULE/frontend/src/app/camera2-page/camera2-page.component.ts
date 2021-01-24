import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-camera2-page',
  templateUrl: './camera2-page.component.html',
  styleUrls: ['./camera2-page.component.scss']
})
export class Camera2PageComponent implements OnInit {

    @ViewChild("video")
    public video: ElementRef;

    @ViewChild("canvas")
    public canvas: ElementRef;

    public captures: Array<any>;

    public constructor() {
        this.captures = [];
    }

    public ngOnInit() { }

    public ngAfterViewInit() {
        if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
                // this.video.nativeElement.src = window.URL.createObjectURL(stream);
                console.log("stream ==>",stream)
                var binaryData = [];
                binaryData.push(stream);
                // window.URL.createObjectURL(new Blob(binaryData, {type: "application/zip"}))

                this.video.nativeElement.src = window.URL.createObjectURL(new Blob(binaryData, {type: "application/zip"}))
                this.video.nativeElement.play();
            });
        }
    }

    public capture() {
        var context = this.canvas.nativeElement.getContext("2d").drawImage(this.video.nativeElement, 0, 0, 640, 480);
        this.captures.push(this.canvas.nativeElement.toDataURL("image/png"));
    }

}
