import { Component} from '@angular/core';
import { Uploader,UploadFile} from 'dolphinng';
@Component({
    selector: 'uploader-demo',
    templateUrl: './uploader-demo.component.html',
    styleUrls: ['./uploader-demo.component.less'],
})
export class UploaderDemoComponent {

  uploader:Uploader=new Uploader();
  tabIndex:number=1;
  docIndex:number=0;
  constructor(){

    this.uploader.url='http://121.46.18.25:9080/oss/file/upload';
    this.uploader.onSelect((files)=>{//文件选择完毕
      //console.log(files);
    });
    this.uploader.onSelect((files)=>{//文件选择

    });
    this.uploader.onQueue((uploadFile)=>{//文件加入队列
      //uploadFile.addSubmitData('fileId','文件ID');  //发送此字段删除该指定ID的文件
      uploadFile.addSubmitData('businessType','0101');
      uploadFile.addSubmitData('fileName',uploadFile.fileName);
      uploadFile.addSubmitData('fileType',uploadFile.fileExtension);
      uploadFile.addSubmitData('fileSize',uploadFile.fileSize);
      uploadFile.addSubmitData('fileContent',uploadFile.getFile());
    });
    this.uploader.onQueueAll((uploadFiles)=>{//文件全部加入队列
      console.log(uploadFiles);
    });
    this.uploader.onUpload((uploader)=>{//上传之前
      console.log(uploader);
    });
    this.uploader.onProgress((progress,uploadFile,uploader,index)=>{//上传中
      console.log(progress);
      console.log(uploadFile);
      console.log(uploader);
      console.log(index);
    });
    this.uploader.onSuccess((uploadFile,uploader,index)=>{//上传请求成功
      console.log(uploadFile);
      console.log(uploader);
      console.log(index);
    });
    this.uploader.onComplete((uploader)=>{//完成上传
      console.log(uploader);
    });
  }

  changTab(index:number){
    this.tabIndex=index;
  }

  changeDoc(index:number){
    this.docIndex=index;
  }

  isImg(uploadFile:UploadFile):boolean{
    let fileExt=uploadFile.fileExtension.replace('.','').toLowerCase();
    return ['png','jpg','jpeg','gif','bmp'].indexOf(fileExt)>=0;
  }

  removeUploadFile(index:number){
    this.uploader.queue.splice(index,1);
  }

}
