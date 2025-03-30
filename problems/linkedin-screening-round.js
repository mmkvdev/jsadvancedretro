// https://imgur.com/wmnmXsX
const Foo = function(a) {
  // function bar() {
  //   return a;
  // }
  this.a = a;
  this.bar = function () {
    return this.a;
  }
  this.baz = function() {
    return this.a;
  };
};

// this => { baz: func() }
// Foo.prototype: { baz: func (), __proto__ => Function => Object }

Foo.prototype = {
  biz() {
    return this.a;
  },
};

const f = new Foo(7);



// f.__proto__ === Foo.prototype

f.bar(); // ? Reference Error
f.baz(); // ? 7
f.biz(); // ? undefined



/*
Implement the function memoize that takes another function(of one parameter) as it’s argument and returns a memoized version of the function passed in. Useful for caching, avoiding duplicate computation, etc.

Write this on the collabedit/whiteboard to express the idea a bit more clearly:
Suppose we have a function fib(n) that computes the nth fibonacci number, on repeated calls, it repeats the computation to give us the same result:
````
fib(1000) => result is computed
fib(1000) => result is computed again
````
When we do,
memoize(fib) ==> a function which is a version of fibonacci which does not do unnecessary re-computation. So we could do this:
````
let memoizedFib = memoize(fib)
memoizedFib(1000) ==> result is computed
memoizedFib(1000) ==> no re-computation, the previous result has been cached and this call simply returns the value.
*/


// cache => DP

// serialization

// const memoizedFn = (func) => {
//   let cache = new Map();
//   // serialization
//   const serialize = (arg) => {
//     // {a: 1, b: 1, c: 1, a: { a: { b: { c: { d: { }}}}}}
//     if (typeof arg === 'object' && arg !== null) {
//       // sorted keys
//       const sortedKeys = Object.keys(arg).sort();
//       return `${sortedKeys.map((key) => `"${key}": ${arg[key]}`).join(',')}`;
//     }
//     return JSON.parse(JSON.stringify(arg));
//   }

//   return function (...args) {
//       const cacheKey = args.map(serialize).join('|');

//       if (cache.has(cacheKey)) {
//         console.log('cache hit');
//         return cache.get(cacheKey);
//       }

//       console.log('cache miss');
//       const result = func.apply(this, args);
//       cache.set(cacheKey, result);
//       return result;
//   }
// }

// const fibonacci = (n) => {
//   if (n <= 1) return 1;
//   return fibonacci(n - 1) + fibonacci(n - 2);
// }

// const memoizedFib = memoizedFn(fibonacci);
// memoizedFib(10);



// https://i.imgur.com/wmnmXsX.png


// Layout
// Header
// UserProfile
// UserCard
// UserDetails
// UserListing


// css
.layout {
  display: flex;
}

.header {
  background-color: grey;
  font-weight: bold;
  text-align: center;
}

.listing {
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  padding: 16px;
}

.user-card {
  display: flex;
  column-gap: 8px;
}

.user-profile {
  width: 20px;
  height: 20px;
}

.user-details {
  width: 40%;
}


state => [{ id: 1, name: '', title: '', company: ''}]


// queue

// newState => currentState.filter(item => item.id !== id)

// loading => true
// const result = axios.get(()).then((res) => res.json())
// loading => false
// newState.push(result);

// setstate(newState);

<html>
    <head></head>

    <body>
        <div class='layout'>
          {/* header */}
          <div class='header'>People You may know</div>
          <div class='listing'>
            <div class='user-card'>
                <div class='user-profile'>
                  <img src='https://linkedin.com/in/mmkvarma?profile_image=""' />
                </div>
                <div class='user-details'>
                  <p>
                    <b>Engineer Name</b>
                    Software Engineer LinkedIn Events team working with Apache Kafka, Real time processing</p>
                </div>
                <button class='delete-user'>x</button>
            </div>
            <div class='user-card'>
                <div class='user-profile'>
                  <img src='https://linkedin.com/in/mmkvarma?profile_image=""' />
                </div>
                <div class='user-details'>
                  <p>
                    <b>Engineer Name</b>
                    Software Engineer LinkedIn Events team working with Apache Kafka, Real time processing</p>
                </div>
                <button class='delete-user'>x</button>
            </div>
            <div class='user-card'>
                <div class='user-profile'>
                  <img src='https://linkedin.com/in/mmkvarma?profile_image=""' />
                </div>
                <div class='user-details'>
                  <p>
                    <b>Engineer Name</b>
                    Software Engineer LinkedIn Events team working with Apache Kafka, Real time processing</p>
                </div>
                <button class='delete-user'>x</button>
            </div>
          </div>
        </div>

    </body>
</html>

