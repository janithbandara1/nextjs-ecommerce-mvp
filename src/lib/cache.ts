import { unstable_cache as nextcashe } from "next/cache";
import { cache as reactCashe } from "react";

type Callback = (...args: any[]) => Promise<any>;
export function cache<T extends Callback>(
  cb: T,
  keyParts: string[],
  options: {
    revalidate?: number | false;
    tags?: string[];
  } = {}
) {
  return nextcashe(reactCashe(cb), keyParts, options);
}
