declare module "ai/react" {
  // Minimal surface for build-time only; actual runtime comes from the installed package.
  export function useChat(...args: any[]): any;
}
