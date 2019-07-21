var text = "";
for(let i=1;i<=10;i++)
{
  text += 'you are in line : ' + i + '<br>' );
}
let tag = document.getElementById('b');
alert(tag.innerHTML);
tag.innerHTML = text;
