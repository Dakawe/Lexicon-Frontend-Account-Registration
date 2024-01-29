const q = (_) => (document.querySelector(_)), f = q('form'), p = q('#error')
add = (I, e = ['Name', 'Username', 'Email', 'Password', 'Confirm Password']) => I.map((i) => (f[i].value || (p.innerHTML += `<p><b>Missing:</b> ${e[i]}</p>`)));
f.addEventListener('click', (e) => (e.preventDefault(), e.target.tagName === 'LABEL' ? e.target.nextElementSibling.focus() : e.target)),
f.addEventListener('input', (e) => (f[3].value != f[4].value && f[4].value != '') ? f[4].style.borderColor = 'red' : f[4].style.borderColor = 'grey' );
q('button').addEventListener('click', (e) => ( p.style.visibility = 'visible', p.innerHTML = '', add([0,1,2,3,4]),
f[3].value.length >= 8 || (p.innerHTML += `<p><b>Error:</b> Password need to be 8 or more characters.</p>`),
f[3].value === f[4].value || (p.innerHTML += `<p><b>Error:</b> Passwords do not match.</p>`),
!(p.innerHTML) ? (p.style.visibility = 'hidden', console.log(r())) : null)); const r = () => ({name: f[0].value,username: f[1].value,email: f[2].value,password: f[3].value});

