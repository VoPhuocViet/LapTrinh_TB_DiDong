// asyncHello.ts

function helloAsync(): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello Async");
        }, 2000);
    });
}

// Example usage:
helloAsync().then(console.log);
