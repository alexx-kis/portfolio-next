// %======================== utils ========================% //

export const splitTextToParagraphs = (text: string) => text.split('\n').filter(Boolean);
export const isEscapeKey = (event: KeyboardEvent) => event.key === 'Escape';
export const executeTransition = (ms: number): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};