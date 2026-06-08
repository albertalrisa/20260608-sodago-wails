import { RevealPlugin } from '../../js/reveal.d.ts';
export interface NotesPlugin extends RevealPlugin {
    id: 'notes';
    open(): void;
}
declare const Notes: () => NotesPlugin;
export default Notes;
