export type AnyFAQ = { q?: string; a?: string; question?: string; answer?: string };
export type FAQ = { question: string; answer: string };

export function normalizeFaq(item: AnyFAQ): FAQ {
  return {
    question: item.q ?? item.question ?? "",
    answer: item.a ?? item.answer ?? ""
  };
}

export function normalizeFaqs(list: AnyFAQ[]): FAQ[] {
  return list.map(normalizeFaq);
}
