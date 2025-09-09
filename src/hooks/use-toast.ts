export function useToast() {
  return {
    toast: (opts: { title: string; description?: string }) =>
      console.log('Toast:', opts.title, opts.description),
  };
}
