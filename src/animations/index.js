
export const headerVariant = {
    initial: {
        opacity: 0,
        x:'10vw',
    },
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            type: 'spring',
            duration: 2,
            bounce: 0.4,
        },
    },
};

export const subHeaderVariant = {
    initial: {
        opacity: 0,
        x: '-10vw'
    },
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            type: 'spring',
            duration: 2,
            bounce: 0.4,
        },
    },
};

export const headerCTAVariant = {
    initial: {
        opacity: 0,
        y: '100vh'
    },
    animate: {
       opacity: 1,
        y: 0,
        transition: {
            type: 'spring',
            duration: 2.5,
            bounce: 0.3,
        },
    },
};