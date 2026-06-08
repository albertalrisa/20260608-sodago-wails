import { RevealPlugin } from '../../js/reveal.d.ts';
export interface ZoomPlugin extends RevealPlugin {
    id: 'zoom';
}
declare const Zoom: () => ZoomPlugin;
export default Zoom;
