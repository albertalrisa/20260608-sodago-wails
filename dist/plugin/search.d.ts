import { RevealPlugin } from '../../js/reveal.d.ts';
export interface SearchPlugin extends RevealPlugin {
    id: 'search';
    open(): void;
    close(): void;
    toggle(): void;
}
declare const Search: () => SearchPlugin;
export default Search;
