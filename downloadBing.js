var generatePrefix = function() {
  var d = new Date();
  var month = d.getMonth() < 9 ? '0'+(d.getMonth()+1) : d.getMonth() + 1;
  var day = d.getDate() < 10 ? '0'+(d.getDate()) : d.getDate();
  var prefix = `bw_${d.getFullYear()}${month}${day}_`;
  return prefix;
}
function titleCaseAndRemoveSpace(string) {
  var sentence = string.toLowerCase().split(" ");
  for(var i = 0; i< sentence.length; i++){
    sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
  }
  return generatePrefix() + sentence.join('') + '.jpg';
}

function createBgImgATage_download() {
  var a = document.createElement('a');
  var link = document.createTextNode("bgImg link"); 
  a.appendChild(link);
  a.href = document.querySelector('.img_cont').style.backgroundImage.split('"')[1]; 
  a.setAttribute('download', titleCaseAndRemoveSpace(window.document.querySelector('.vs_bs_title').innerText));
  document.body.appendChild(a); 
  a.click();
}


//var tc = titleCaseAndRemoveSpace(window.document.querySelector('.vs_bs_title').innerText);
//console.log(tc);

//titleCaseAndRemoveSpace(window.document.querySelector('.vs_bs_title').innerText);
createBgImgATage_download();