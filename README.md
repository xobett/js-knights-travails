# Knight Travails

Practice project where I implement graph traversal using an implicitly represented graph.

In Knight Travails, we are given an 8x8 chessboard and need to find the shortest sequence of knight moves between a starting position and a target position. Each position in our chessboard is a vertex, and the valid knight moves from that position represent its edges. Instead of storing all the edges beforehand, I dynamically generate the possible positions whenever I visit a vertex.

The project covers concepts such as:

- Representing a graph implicitly rather than creating an explicit adjacency list.
- Dynamically generating neighboring vertices while searching for a path.
- Using Breadth First Search to explore the graph level by level and guarantee the shortest path when every move has the same cost.
- Reconstructing the path through backward references after finding the target.

# Notes

An incredible project where I learned a lot about graph representation, traversal, and shortest-path algorithms.