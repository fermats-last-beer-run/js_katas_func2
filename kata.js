function add(x, y) {
    return x + y;
}

function multiply(x, y) {
    if (y == 0) {
        return 0;
    } else {
        return x + multiply(x, y - 1)
    }
}

function power(x, n) {
    function pow(y, n) {
        if (n == 0) {
            return 1;
        } else if (n == 1) {
            return y;
        } else {
            return pow(multiply(y,x), n - 1);
        }
    };
    
    return pow(x,n);
};

function factorial(n) {
    if (n <= 1) {
        return 1
    } else {
        return multiply(n, factorial(n-1));
    }
}

function fibonacci(n) {
    if (n == 1) {
        return 0
    }
    if (n == 2) {
        return 1
    } else {
        return fibonacci(n-2) + fibonacci(n-1)
    }
}