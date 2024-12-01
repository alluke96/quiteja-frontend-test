export function formatDate(dateStr) {
    if (!dateStr) return '';
    
    const date = new Date(dateStr);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Dois dígitos para o mês
    const day = String(date.getDate()).padStart(2, '0');        // Dois dígitos para o dia
    return `${year}-${month}-${day}`;
  }
  