export const normalize = (value: string) => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase('es');
export function initFilters() {
  document.querySelectorAll<HTMLElement>('[data-filter-root]').forEach(root => {
    if (root.dataset.ready) return;
    root.dataset.ready = 'true';
    const query = root.querySelector<HTMLInputElement>('[data-query]');
    const category = root.querySelector<HTMLSelectElement>('[data-category]');
    const date = root.querySelector<HTMLInputElement>('[data-date]');
    const items = [...root.querySelectorAll<HTMLElement>('[data-item]')];
    const render = () => {
      let count = 0;
      items.forEach(item => {
        item.hidden = !(normalize(item.dataset.search || item.textContent || '').includes(normalize(query?.value.trim() || '')) &&
          (!category?.value || item.dataset.category === category.value) &&
          (!date?.value || (item.dataset.date || '') >= date.value));
        if (!item.hidden) count++;
      });
      const status = root.querySelector<HTMLElement>('[data-count]');
      if (status) status.textContent = `${count} ${count === 1 ? 'resultado' : 'resultados'}`;
      const empty = root.querySelector<HTMLElement>('[data-empty]');
      if (empty) empty.hidden = count > 0;
      root.dispatchEvent(new CustomEvent('filtered'));
    };
    query?.addEventListener('input', render);
    category?.addEventListener('change', render);
    date?.addEventListener('change', render);
    date?.addEventListener('input', render);
    root.querySelector('[data-clear]')?.addEventListener('click', () => {
      if (query) query.value = '';
      if (category) category.value = '';
      if (date) date.value = '';
      render(); query?.focus();
    });
    render();
  });
}
export function downloadFile(name: string, content: string, type: string) {
  const url = URL.createObjectURL(new Blob([content], { type }));
  const a = document.createElement('a'); a.href = url; a.download = name; a.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
