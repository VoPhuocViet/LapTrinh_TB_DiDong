// src/A_2_promiseNumber.ts

function promiseNumber(): Promise<number> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(10);
        }, 1000);
    });
}

// Example usage:
promiseNumber().then(console.log);
