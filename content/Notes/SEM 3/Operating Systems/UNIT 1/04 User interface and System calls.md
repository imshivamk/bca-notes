---
dg-publish: true
---

- [[#Operating System Interface|Operating System Interface]]
		- [[#1. Command Line Interface (CLI)|1. Command Line Interface (CLI)]]
		- [[#2. Graphical User Interface (GUI)|2. Graphical User Interface (GUI)]]
- [[#System Calls|System Calls]]

### Operating System Interface

#### 1. Command Line Interface (CLI)
1. Definition: A text-based interface where users input commands to perform specific tasks.
2. Requires users to learn and type commands.
3. Commands are often case-sensitive and require precise syntax.

- Advantages:
  - More efficient for experienced users; quicker execution of commands.
  - Low resource usage compared to graphical interfaces.
  - Powerful scripting capabilities for automation.
- Disadvantages:
  - Steeper learning curve for beginners.
  - Less intuitive; may be intimidating for non-technical users.

#### 2. Graphical User Interface (GUI)
1. Definition: A visual interface that allows users to interact with the operating system using graphical elements like windows, icons, and menus
2. Provides a point-and-click environment for ease of use.
3. Often includes drag-and-drop functionality.

- Advantages:
  - User-friendly; more accessible for the general public.
  - Intuitive navigation through visual elements.
  - Better for multitasking with the ability to see multiple windows at once.
- Disadvantages:
  - Higher resource consumption (CPU and memory) than CLI.
  - Can be slower for advanced tasks compared to direct command input.

## System Calls

1. Definition: Interfaces through which user applications interact with the operating system, allowing programs to request services from the OS kernel.
2. Provides a standardized interface for various services (e.g., file manipulation, process control).
3. Typically invoked using a specific set of API functions.

- Advantages:
  - Enables communication between user programs and the operating system.
  - Ensures controlled access to hardware and system resources.
- Disadvantages:
  - Requires understanding of the OS’s API, which can be complex.
  - Overhead of user mode to kernel mode **trasinition**

