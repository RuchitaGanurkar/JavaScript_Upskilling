// SYNCHRONOUS — top to bottom, no surprises
console.log("1");
console.log("2");
console.log("3");
// Output: 1, 2, 3


// ASYNCHRONOUS — setTimeout schedules; doesn't pause
console.log("1");
setTimeout(() => console.log("2"), 0); // scheduled — runs LATER
console.log("3");
// Output: 1, 3, 2

// Simulate fetching a user from a server
function fetchUser(id, callback) {
  console.log(`Fetching user ${id}...`);
  setTimeout(() => {
    const user = { id, name: "Priya" };
    callback(null, user); // Node-style: (err, data)
  }, 5000);
}
fetchUser(7, (err, user) => {
  if (err) {
    console.error("Failed:", err);
    return;
  }
  console.log("Got user:", user);
});
// Logs:
// Fetching user 7...
// (1 second later)
// Got user: { id: 7, name: "Priya" }


// The "pyramid of doom"
fetchUser(7, (err, user) => {
  if (err) { console.error(err); return; }
  fetchOrders(user.id, (err, orders) => {
    if (err) { console.error(err); return; }
    fetchItems(orders[0].id, (err, items) => {
      if (err) { console.error(err); return; }
      console.log(items); // finally got there!
    });
  });
});


// Create a promise
const p = new Promise((resolve, reject) => {
  // do async work...
  setTimeout(() => {
    const success = true;
    if (success) resolve("Done!"); // → fulfilled
    else reject(new Error("Oops")); // → rejected
  }, 5000);
});
// p is now PENDING. After 1s, it settles.
// Real-world: wrapping an async API
function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms); // resolve with no value
  });
}
delay(500).then(() => console.log("half a second passed"));


const p = new Promise((res) => {
  setTimeout(
    () => res(42),
    100
  );
});
console.log(p);
p.then((v) => console.log(v));

function fetchUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id < 0) reject(new Error("Bad id"));
      else resolve({ id, name: "Priya" });
    }, 500);
  });
}
// Chain — flat, not nested
fetchUser(1)
  .then((user) => {
    console.log("got user:", user);
    return user.id; // value passed to next .then
  })
  .then((id) => {
    return fetchUser(id + 1); // returning a Promise — chain awaits it
  })
  .then((nextUser) => {
    console.log("next user:", nextUser);
  })
  .then((id) => {
    return fetchUser(id + 2); 
  })
  .then((nextUser) => {
    console.log("next user:", nextUser);
  })
  .catch((err) => {
    console.error("any failure caught here:", err.message);
  })
  .finally(() => {
    console.log("done — runs whether success or fail");
  });


const p1 = fetch("/user");
const p2 = fetch("/orders");
const p3 = fetch("/items");
// 1. all — wait for everything; fail if any fails
Promise.all([p1, p2, p3])
  .then(([user, orders, items]) => console.log("all done"))
  .catch((err) => console.error("at least one failed:", err));
// 2. allSettled — wait for everything, never throws
Promise.allSettled([p1, p2, p3])
  .then((results) => {
    results.forEach((r) => {
      if (r.status === "fulfilled") console.log("ok:", r.value);
      else console.log("fail:", r.reason);
    });
});
// 3. race — first to settle wins (success OR fail)
Promise.race([p1, delay(5000)]) // timeout pattern
  .then((winner) => console.log("first done:", winner));
// 4. any — first to FULFILL wins; all-reject = AggregateError
Promise.any([p1, p2, p3])
  .then((firstSuccess) => console.log("got one:", firstSuccess))
  .catch((err) => console.error("everyone failed"));

// Already-fulfilled promise
const cached = Promise.resolve({ id: 1, name: "Priya" });
cached.then((u) => console.log(u)); // logs the cached value
// Already-rejected promise
const failed = Promise.reject(new Error("nope"));
failed.catch((e) => console.log("caught:", e.message));
// Common pattern: cache or fetch
function getUser(id, cache) {
  if (cache[id]) return Promise.resolve(cache[id]); // instant
  return fetchUser(id); // real async
}
// Caller doesn't care which path — both return a Promise
getUser(7, {}).then(console.log);


console.log("a");
setTimeout(() => console.log("b"), 0);
console.log("c");
Promise.resolve().then(() => console.log("d"));

// first it's plain console log to print "a"
// then next console log goes to print "c"
// then due to timeout, it gets print after promise "d"
// then come to print "c"

function delayLog(msg, ms, cb) {
  setTimeout(() => {
    console.log(msg);
    cb(null);
  }, ms);
}

// Promise returning statement means function which return promise

function delayLogPromise(){

}
delayLogPromise("1", 300)
  .then(() => delayLogPromise("2", 200))
  .then(() => delayLogPromise("3", 100));





// Fetch a single post using Promises
function fetchPostWithPromise(postId) {
  fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(post => {
      console.log('Post:', post.title);
      console.log('Content:', post.body);
    })
    .catch(error => {
      console.error('Error fetching post:', error.message);
    });
}

fetchPostWithPromise(100);

// // Fetch user and their posts using Async/Await
async function fetchUserWithPosts(userId) {
  try {
    // Fetch user data
    const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    if (!userResponse.ok) throw new Error('User not found');
    const user = await userResponse.json();
    
    // Fetch user's posts
    const postsResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`);
    const posts = await postsResponse.json();
    
    console.log(`User: ${user.name} (${user.email})`);
    console.log(`Number of posts: ${posts.length}`);
    console.log('First post title:', posts[0]?.title);
    
    return { user, posts };
  } catch (error) {
    console.error('Error:', error.message);
  }
}

fetchUserWithPosts(100);

// // Create a new post using Async/Await
async function createNewPost() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: 'My New Post',
        body: 'This is the content of my post',
        userId: 1
      })
    });
    
    const newPost = await response.json();
    console.log('Post created with ID:', newPost.id);
    console.log('New post:', newPost);
  } catch (error) {
    console.error('Failed to create post:', error);
  }
}

createNewPost();

function fetchTodoWithPromise(userId) {
  fetch(`https://jsonplaceholder.typicode.com/todos/${userId}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(get => {
      console.log('Title:', todo.title);
    })
    .catch(error => {
      console.error('Error fetching user todo:', error.message);
    });
}

fetchTodoWithPromise(11);