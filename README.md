# IP_tracker
Imagine your team has developed a web service that receives requests from about 20 million unique IP addresses every day. You want to keep track of the IP addresses that are making the most requests to your service each day. Your job is to write a program that (1) tracks these IP addresses in memory, and (2) returns the 100 most common IP addresses.

# What would you do differently if you had more time?
The way the count dictionary of IP is sorted, I'd use the "Binary Insertion Sort", so this decrease the time of search.

# What is the runtime complexity of each function?
`request_handled()` => `O(1)`

`top100()` => `O(1)`

`clear()` => `O(1)`

Note: The use of sort in `request_handled()` would be `O(T*logT)`, but how `T` is constant (100), it will be `O(1)`.

# How does your code work?

It updates the top 100 IPs, when a new IP request enters.

If the IP already exists on the `IpCount`, it adds to the count dictionary , if not, it creates a new entry

In the list, if the IP is not already on the `top100list`, it's added to it and then the list is organized decreasingly based on the `IPCount`.

After the list is organized it is stripped of any Ip above 100. Showing the 100 IP that are the most repeated.

Finally, `clear()`, clear the list (`top100list`) and the count dictionary (`IPCount`).

# What other approaches did you decide not to pursue?
Use a dictionary, then transform it in to an array, and then use sort. This will make the process much more slower.

# How would you test this?
As general test I'd:
- Make sure that the same IP doesn't repeat on the `top100`.
- Make sure the `top100()` only has 100 elements.
- Do a load testing.
