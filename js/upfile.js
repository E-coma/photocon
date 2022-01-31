$(document).on("dragover drop", function(e){
    e.preventDefault();
  });
   
  var fileup = $("#preview-area");
   
  fileup.on("drop", function(e){
   
      $("[name='file']").prop('files', e.originalEvent.dataTransfer.files); 
   
      var reader = new FileReader();
   
      reader.onload = function (e) {
        fileup.attr('src', e.target.result);
      }
      reader.readAsDataURL(e.originalEvent.dataTransfer.files[0]);
      
  });