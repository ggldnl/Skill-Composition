document.addEventListener('DOMContentLoaded', () => {
  // Mobile navbar toggle
  document.querySelectorAll('.navbar-burger').forEach((burger) => {
    burger.addEventListener('click', () => {
      burger.classList.toggle('is-active');
      document.getElementById(burger.dataset.target).classList.toggle('is-active');
    });
  });

  // Copy the BibTeX entry next to the button
  document.querySelectorAll('.copy-bibtex').forEach((button) => {
    button.addEventListener('click', async () => {
      const code = button.parentElement.querySelector('code').innerText;
      await navigator.clipboard.writeText(code);
      button.textContent = 'Copied';
      setTimeout(() => (button.textContent = 'Copy'), 1500);
    });
  });
});
