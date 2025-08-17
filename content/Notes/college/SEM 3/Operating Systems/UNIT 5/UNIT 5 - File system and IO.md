---
dg-publish: true
---
### 1. File System

#### 1.1 Files - Basic Concept
- **Definition**: A file is an abstract data type defined by the operating system to store and organize information. Files can hold various types of data, such as text, images, audio, videos, and programs. Files are a critical part of any operating system as they allow users and applications to store, retrieve, and share data in a structured manner.
- **Purpose**: Files ensure data persistence across sessions and are used by programs to manage input/output. They represent the main interface for users and applications to read, write, and modify stored information.

#### 1.2 File Attributes, Operations, and Types
- **File Attributes**:
  - **Name**: The unique identifier for a file within a directory. Typically, a file name has an extension that indicates the type of the file (e.g., `.txt` for text files).
  - **Identifier (File ID)**: A unique tag or number that differentiates the file from all other files in the file system.
  - **Type**: Indicates the kind of content the file contains, such as text, image, audio, video, or executable program.
  - **Location**: The exact address or path of the file in the storage medium. This includes directory and folder information.
  - **Size**: The current size of the file in bytes, which helps in managing storage.
  - **Protection**: Information about file permissions, indicating who can read, write, or execute the file (user, group, or others).
  - **Time, Date, and User ID**: Metadata indicating the file's creation, last access, last modification, and ownership details.

- **File Operations**:
  - **Create**: A new file is created in the file system.
  - **Open**: Allows a process to access the file’s contents.
  - **Read**: Retrieves data from the file.
  - **Write**: Adds or modifies data in the file.
  - **Close**: Closes an opened file to free up resources.
  - **Delete**: Removes the file from the directory and storage.
  - **Rename**: Changes the file name.
  - **Append**: Adds data to the end of the file without deleting existing content.
  - **Truncate**: Shortens or deletes the contents of the file while keeping the file itself.

- **File Types**:
  - **Text Files**: Contain readable characters (ASCII or Unicode).
  - **Binary Files**: Contain non-readable binary data, usually for programs or complex file formats.
  - **Executable Files**: Files that contain programs meant to be run by the operating system (e.g., `.exe` on Windows, `.out` or `.bin` on Linux).
  - **System Files**: Files required by the operating system to function (e.g., drivers, configuration files).

#### 1.3 File Structure and Access Methods
- **File Structure**: 
  - **Unstructured File**: A sequence of bytes where the operating system does not impose any structure (e.g., text files).
  - **Structured File**: A file organized in specific formats, such as records or indices.
  - **Record-based File Structure**: The file contains a collection of records, often used in databases.
  - **Indexed File Structure**: Maintains an index to access records directly without scanning the whole file.

- **Access Methods**:
  - **Sequential Access**: The data in the file is accessed in a specific order, typically starting at the beginning. Common for reading data in log files or streams.
  - **Direct Access (Random Access)**: Data is accessed in any order by specifying the position (offset) in the file. This method is faster and efficient for large databases or files.
  - **Indexed Access**: The system uses an index table to keep track of where data blocks are stored, enabling faster data retrieval.

#### 1.4 Directory Structure
A directory is a special file that contains information about other files and directories. It helps organize files and provides a logical structure for storing them.

- **Single-Level Directory System**:
  - All files are stored in a single directory shared by all users and programs.
  - **Advantage**: Simple and easy to implement.
  - **Disadvantage**: File name collisions as all users must share the same namespace.

- **Two-Level Directory System**:
  - A separate directory is provided for each user, avoiding name collisions.
  - **Advantage**: Each user can organize their own files independently.
  - **Disadvantage**: Collaboration between users is more complex since files cannot be shared easily without a common directory.

- **Hierarchical Directory System**:
  - The most common structure. Directories can contain both files and subdirectories, allowing for a tree-like organization.
  - **Advantage**: Flexible, scalable, and supports efficient file organization.
  - **Disadvantage**: More complex to manage due to multi-level structures.

#### 1.5 Directory Operations
Operations related to directories include:
  - **Create a directory**: Allows users to create new directories.
  - **Delete a directory**: Removes an empty directory.
  - **List contents**: Displays the files and subdirectories contained within a directory.
  - **Rename a directory**: Change the name of a directory.
  - **Search**: Find a file within a directory based on a name or pattern.

#### 1.6 Protection and Security
- **Protection**: Operating systems enforce file access permissions to ensure authorized access. Permissions are typically divided into:
  - **Read (r)**: Allows reading the contents of the file.
  - **Write (w)**: Allows modifying the contents of the file.
  - **Execute (x)**: Allows running the file as a program (for executables).
  - Permissions are usually specified for three categories: user (owner), group, and others (everyone else).
  
- **Security**: Additional measures include encryption, user authentication, and secure file transfer protocols to protect sensitive information from unauthorized access or malicious attacks.

#### 1.7 Allocation Methods
The way in which disk space is allocated to files is critical for both efficiency and management.

- **Contiguous Allocation**:
  - Each file occupies a contiguous set of blocks on the disk.
  - **Advantage**: Fast access since the file is stored sequentially.
  - **Disadvantage**: External fragmentation and difficulty in expanding files.

- **Linked Allocation**:
  - Each file is a linked list of blocks scattered on the disk. Each block contains a pointer to the next block.
  - **Advantage**: No external fragmentation, and files can grow easily.
  - **Disadvantage**: Slower access due to pointer chasing, and there is overhead for storing pointers.

- **Indexed Allocation**:
  - A separate index block contains pointers to the actual data blocks of the file.
  - **Advantage**: Direct access to blocks, making file retrieval faster.
  - **Disadvantage**: The index block requires extra overhead, and large files may require multiple index blocks.

---

### 2. Input/Output System

#### 2.1 Principles of I/O Hardware
- I/O hardware includes all devices that transfer data to/from the computer system, such as keyboards, monitors, printers, and storage devices. These devices can be classified as:
  - **Input devices**: Devices that send data to the computer (e.g., keyboard, mouse).
  - **Output devices**: Devices that receive data from the computer (e.g., monitors, printers).

#### 2.2 I/O Devices
- **Input Devices**:
  - **Keyboard**: Converts user keystrokes into input signals for the computer.
  - **Mouse**: Converts movement and clicks into input signals.
  - **Scanners**: Convert physical documents into digital data.

- **Output Devices**:
  - **Monitors**: Display graphical and text output from the system.
  - **Printers**: Produce hard copies of documents and images.
  - **Speakers**: Output audio signals from the computer.

- **Storage Devices**:
  - **Hard Disk Drives (HDDs)**: Mechanical devices that store large amounts of data magnetically.
  - **Solid-State Drives (SSDs)**: Faster, non-mechanical storage devices based on flash memory.
  - **Optical Drives**: Devices that use lasers to read/write data from optical disks (CDs, DVDs).

#### 2.3 Device Controller, DMA
- **Device Controller**:
  - Hardware that acts as an interface between the operating system and the I/O device. It translates commands from the CPU into device-specific instructions.
  - **Examples**: Disk controllers, network interface controllers.

- **DMA (Direct Memory Access)**:
  - A technique where the device controller can directly read or write data to/from the system’s memory without CPU intervention. This improves the system's performance by freeing the CPU from handling I/O operations directly.

#### 2.4 Principles of I/O Software - Goals
- I/O software manages the communication between hardware devices and the operating system. The primary goals of I/O software are:
  - **Device independence**: Programs should be able to access any device without needing specific details about it.
  - **Uniform naming**: All devices should be accessed using a standard naming convention.
  - **Error handling**: Errors should be handled appropriately, often by retrying the operation or notifying the user.
  - **Buffering**: Temporary storage is used to smooth out speed differences between devices and the CPU.
  - **Shared access**: Multiple processes can access devices simultaneously without conflict, using mechanisms like spooling or queues.

#### 2.5 Interrupt Handler,

 Device Driver
- **Interrupt Handler**: 
  - An interrupt is a signal from a device to the CPU, indicating that an event (e.g., input completion) has occurred. The interrupt handler processes these signals, allowing the CPU to manage device communication efficiently.
  
- **Device Driver**:
  - A device driver is a software program that enables the operating system to communicate with hardware devices. It provides a standardized interface between the OS and the hardware, translating high-level instructions into device-specific commands.

---

### 3. Mass Storage Structure

#### 3.1 Disk Structure
- A **disk** is divided into concentric circles called **tracks**. Each track is further divided into **sectors**, which are the smallest physical storage unit.
- **Cylinders** are groups of tracks on different disk platters that are equidistant from the spindle.
- **Seek time**: The time taken by the disk arm to move to the correct track.
- **Rotational latency**: The time for the desired sector to rotate under the read/write head.

#### 3.2 Disk Scheduling
Disk scheduling algorithms manage the order in which disk I/O requests are serviced.

- **FCFS (First-Come, First-Served)**:
  - Requests are serviced in the order they arrive.
  - **Advantage**: Simple to implement.
  - **Disadvantage**: May result in long wait times, especially if the requests are scattered across the disk.

- **SSTF (Shortest Seek Time First)**:
  - The request closest to the current head position is serviced next.
  - **Advantage**: Reduces seek time compared to FCFS.
  - **Disadvantage**: May lead to **starvation** for requests that are far from the current head position.

- **SCAN (Elevator Algorithm)**:
  - The disk arm moves in one direction, servicing all requests until the end of the disk is reached. It then reverses direction.
  - **Advantage**: Provides more uniform waiting times compared to SSTF.
  - **Disadvantage**: Some requests may still wait longer.

- **LOOK**:
  - Similar to SCAN, but the disk arm only moves as far as the furthest request in each direction before reversing.
  - **Advantage**: Avoids unnecessary travel to the ends of the disk.
  
- **C-SCAN (Circular SCAN)**:
  - The disk arm moves in one direction to the end of the disk, then jumps back to the beginning and starts again.
  - **Advantage**: Provides more uniform wait times, especially for requests near the beginning of the disk.

- **C-LOOK**:
  - Like C-SCAN, but the arm only travels as far as the last request in each direction before jumping back.
  - **Advantage**: More efficient than C-SCAN, as it avoids traversing empty space.