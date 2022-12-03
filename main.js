var modal=document.getElementById("simplemodal");
var modalBtn=document.getElementById("modalbtn");
var closeBtn=document.getElementsByClassName("CloseBtn")[0];
modalBtn.addEventListener('click',openModal);
closeBtn.addEventListener('click',closeModal);
function openModal()
{
    modal.style.display="block"

}
function closeModal()
{
    modal.style.display="none"
}