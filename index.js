const msg = document.getElementById('msg');
const choices = document.getElementById('choices');
let selected = null;

choices.addEventListener('click', (e) => {
 const btn = e.target.closest('button');
 if (!btn) return;
 choices.querySelectorAll('.btn').forEach(b => b.classList.remove('selected'));
 
 btn.classList.add('selected');
 selected = btn.dataset.choice; 
 if (selected === 'chixr') {
   msg.textContent = 'Ta chiher songoloo!';
 } else if (selected === 'baliu') {
   msg.textContent = 'Ta byluu songoloo!';
 } else if (selected === 'zairmag') {
   msg.textContent = 'Ta zairmag songoloo!';
 }
 msg.classList.remove('success');
});




