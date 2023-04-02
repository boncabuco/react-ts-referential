/// <reference types="react" />
interface PindutanProps {
    pangalan: string;
}

declare const Pindutan: (props: PindutanProps) => JSX.Element;

interface SulatanProps {
    sulat: string;
}

declare const Sulatan: (props: SulatanProps) => JSX.Element;

declare const Pahina: ({}: {}) => JSX.Element;

export { Pahina, Pindutan, PindutanProps, Sulatan, SulatanProps };
