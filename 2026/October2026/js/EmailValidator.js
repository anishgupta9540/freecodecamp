// https://www.freecodecamp.org/learn/daily-coding-challenge/10-16
// Email Validator

function validate(email) {
    const parts = email.split("@");

    if (parts.length !== 2) return false;

    const [local, domain] = parts;

    // Validate the local part
    if (!/^[a-zA-Z0-9_-][a-zA-Z0-9._-]*[a-zA-Z0-9_-]$/.test(local) &&
        !/^[a-zA-Z0-9_-]$/.test(local)) {
        return false;
    }

    if (local.includes("..") || domain.includes("..")) {
        return false;
    }

    // Validate the domain
    if (!domain.includes(".")) return false;
    if (!/\.[a-zA-Z]{2,}$/.test(domain)) return false;

    return true;
}

console.log(validate("a@b.cd"));                    // true
console.log(validate("hell.-w.rld@example.com"));    // true
console.log(validate(".b@sh.rc"));                  // false
console.log(validate("example@test.c0"));            // false
console.log(validate("freecodecamp.org"));           // false
console.log(validate("develop.ment_user@c0D!NG.R.CKS")); // true
console.log(validate("hello.@wo.rld"));              // false
console.log(validate("hello@world..com"));           // false
console.log(validate("develop..ment_user@c0D!NG.R.CKS")); // false
console.log(validate("git@commit@push.io"));         // false