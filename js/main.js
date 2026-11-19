// Scripts for Eletrica A

document.addEventListener('DOMContentLoaded', () => {
  // Ano dinâmico no rodapé
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // FAQ acordeão com acessibilidade ARIA
  const faqToggles = document.querySelectorAll('.faq-toggle');
  faqToggles.forEach((btn) => {
    btn.addEventListener('click', () => {
      const item = btn.parentElement;
      const isOpen = item.classList.contains('open');

      // Fecha todos os outros itens e atualiza ARIA
      faqToggles.forEach((otherBtn) => {
        const otherItem = otherBtn.parentElement;
        otherItem.classList.remove('open');
        otherBtn.setAttribute('aria-expanded', 'false');
      });

      // Alterna o item atual
      if (!isOpen) {
        item.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // Formulário para WhatsApp com sanitização e fallback seguro
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const nome = document.getElementById('nome')?.value.trim() || '';
      const telefone = document.getElementById('telefone')?.value.trim() || '';
      const servico = document.getElementById('servico')?.value.trim() || '';
      const mensagem = document.getElementById('mensagem')?.value.trim() || '';

      if (!nome || !telefone || !servico || !mensagem) {
        alert('Por favor, preencha todos os campos do formulário.');
        return;
      }

      const texto = `Olá, meu nome é ${nome}.\nTelefone: ${telefone}\nServiço: ${servico}\nMensagem: ${mensagem}`;
      const url = `https://api.whatsapp.com/send?phone=5511988840073&text=${encodeURIComponent(texto)}`;

      // Tenta abrir em nova aba; se bloqueado pelo navegador, redireciona diretamente
      const win = window.open(url, '_blank');
      if (!win || win.closed || typeof win.closed === 'undefined') {
        window.location.href = url;
      }
    });
  }

  // Animações ao rolar (lazy reveal)
  const revealElements = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealElements.forEach((el) => observer.observe(el));
  } else {
    // Fallback caso IntersectionObserver não esteja disponível
    revealElements.forEach((el) => el.classList.add('visible'));
  }
});
