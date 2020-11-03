import * as React from 'react';

interface LockedIconProps {
    className?: string;
}

export const LockedIcon: React.FC<LockedIconProps> = (props: LockedIconProps) => (
    <svg
        width="328"
        height="400"
        viewBox="0 0 328 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={props.className}>
        <path
            d="M8.05417 189.773C13.3587 184.47 19.7955 181.82 27.3747 181.82H36.4603V127.271C36.4603 92.4233 48.9569 62.5018 73.958 37.5017C98.9571 12.5006 128.876 0 163.729 0C198.581 0 228.505 12.5006 253.502 37.5007C278.503 62.5018 291 92.4224 291 127.271V181.82H300.09C307.663 181.82 314.104 184.47 319.407 189.773C324.711 195.073 327.361 201.513 327.361 209.094V372.728C327.361 380.301 324.71 386.744 319.407 392.049C314.104 397.347 307.663 400 300.09 400H27.3677C19.7886 400 13.3527 397.35 8.04722 392.049C2.74868 386.744 0.0929568 380.301 0.0929568 372.728V209.091C0.0889766 201.516 2.74867 195.077 8.05417 189.773ZM91.0029 181.82H236.454V127.271C236.454 107.197 229.351 90.0552 215.147 75.8531C200.941 61.6491 183.802 54.5485 163.726 54.5485C143.647 54.5485 126.513 61.6481 112.305 75.8531C98.1054 90.0542 91.0029 107.197 91.0029 127.271V181.82Z"
            fill="var(--primary-cta-color)"
        />
    </svg>
);
