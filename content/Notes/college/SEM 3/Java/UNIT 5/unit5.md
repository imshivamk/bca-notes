---
dg-publish: true
---

- [[#GUI Programming: AWT and Swing|GUI Programming: AWT and Swing]]
	- [[#GUI Programming: AWT and Swing#1. Introduction to GUI Controls|1. Introduction to GUI Controls]]
	- [[#GUI Programming: AWT and Swing#2. Button|2. Button]]
	- [[#GUI Programming: AWT and Swing#3. Label|3. Label]]
	- [[#GUI Programming: AWT and Swing#4. Text Field|4. Text Field]]
	- [[#GUI Programming: AWT and Swing#5. Text Area|5. Text Area]]
	- [[#GUI Programming: AWT and Swing#6. List|6. List]]
	- [[#GUI Programming: AWT and Swing#7. Checkbox|7. Checkbox]]
	- [[#GUI Programming: AWT and Swing#8. Radio Button|8. Radio Button]]
	- [[#GUI Programming: AWT and Swing#9. Scrollbar|9. Scrollbar]]
	- [[#GUI Programming: AWT and Swing#10. Menu|10. Menu]]
- [[#Applet|Applet]]
	- [[#GUI Programming: AWT and Swing#1. Applet Concept|1. Applet Concept]]
	- [[#GUI Programming: AWT and Swing#2. Creating an Applet|2. Creating an Applet]]
	- [[#GUI Programming: AWT and Swing#3. Applet Lifecycle|3. Applet Lifecycle]]
	- [[#GUI Programming: AWT and Swing#4. Content in Applets|4. Content in Applets]]

### GUI Programming: AWT and Swing

#### 1. Introduction to GUI Controls

- GUI (Graphical User Interface): Enables user interaction through graphical components (e.g., buttons, text fields).
- AWT (Abstract Window Toolkit): Part of Java's original GUI framework; uses native OS components.
- Swing: Advanced GUI library in Java; lightweight and platform-independent.

---

#### 2. Button

- Description: Used to trigger actions/events when clicked.
- AWT Class: `Button`
- Swing Class: `JButton`
- Example:
    
    ```java
    JButton btn = new JButton("Click Me");
    btn.addActionListener(e -> System.out.println("Button clicked!"));
    ```
    

---

#### 3. Label

- Description: Displays non-editable text or images.
- AWT Class: `Label`
- Swing Class: `JLabel`
- Example:
    
    ```java
    JLabel label = new JLabel("Welcome to GUI!");
    ```
    

---

#### 4. Text Field

- Description: Single-line input field for text.
- AWT Class: `TextField`
- Swing Class: `JTextField`
- Example:
    
    ```java
    JTextField textField = new JTextField(20); // 20 columns
    ```
    

---

#### 5. Text Area

- Description: Multi-line text input or display area.
- AWT Class: `TextArea`
- Swing Class: `JTextArea`
- Example:
    
    ```java
    JTextArea textArea = new JTextArea(5, 20); // 5 rows, 20 columns
    ```
    

---

#### 6. List

- Description: Displays a list of items for selection.
- AWT Class: `List`
- Swing Class: `JList`
- Example:
    
    ```java
    String[] items = {"Item1", "Item2", "Item3"};
    JList<String> list = new JList<>(items);
    ```
    

---

#### 7. Checkbox

- Description: Used for selecting/deselecting options.
- AWT Class: `Checkbox`
- Swing Class: `JCheckBox`
- Example:
    
    ```java
    JCheckBox checkBox = new JCheckBox("Accept Terms");
    ```
    

---

#### 8. Radio Button

- Description: Used for mutually exclusive selection in a group.
- Swing Class: `JRadioButton` (AWT doesn't have a direct equivalent).
- Example:
    
    ```java
    JRadioButton rb1 = new JRadioButton("Option 1");
    JRadioButton rb2 = new JRadioButton("Option 2");
    ButtonGroup bg = new ButtonGroup();
    bg.add(rb1);
    bg.add(rb2);
    ```
    

---

#### 9. Scrollbar

- Description: Used to scroll content vertically or horizontally.
- AWT Class: `Scrollbar`
- Swing Alternative: `JScrollBar` or `JScrollPane`
- Example:
    
    ```java
    JScrollBar scrollBar = new JScrollBar(JScrollBar.HORIZONTAL);
    ```
    

---

#### 10. Menu

- Description: Adds drop-down menus in the application.
- AWT Classes: `Menu`, `MenuBar`, `MenuItem`
- Swing Classes: `JMenu`, `JMenuBar`, `JMenuItem`
- Example:
    
    ```java
    JMenuBar menuBar = new JMenuBar();
    JMenu fileMenu = new JMenu("File");
    JMenuItem openItem = new JMenuItem("Open");
    fileMenu.add(openItem);
    menuBar.add(fileMenu);
    ```
    

Would you like a sample program implementing all these components?


## Applet

#### 1. Applet Concept

- Definition: A small Java program embedded in web pages, executed by a Java-enabled browser.
- Framework: Part of the `java.applet` package; uses `Applet` or `JApplet` (Swing) class.
- Characteristics:
    - Runs in a sandbox (restricted access).
    - Requires an HTML file to load.
    - Now outdated and replaced by modern web technologies.

---

#### 2. Creating an Applet

- Steps to Create:
    
    1. Extend the `Applet` class.
    2. Override methods like `paint()`.
    3. Use an HTML file with the `<applet>` tag to run the applet.
- Example:
    
    ```java
    import java.applet.Applet;
    import java.awt.Graphics;
    
    public class SimpleApplet extends Applet {
        public void paint(Graphics g) {
            g.drawString("Hello, Applet!", 50, 50);
        }
    }
    ```
    
- HTML to Run:
    
    ```html
    <applet code="SimpleApplet.class" width="300" height="200"></applet>
    ```
    

---

#### 3. Applet Lifecycle

- Lifecycle Methods:
    
    1. `init()`: Initializes the applet.
    2. `start()`: Starts or resumes the applet.
    3. `paint(Graphics g)`: Draws graphics on the screen.
    4. `stop()`: Stops execution temporarily.
    5. `destroy()`: Cleans up resources before applet termination.
- Execution Order: `init()` → `start()` → `paint()` → (`stop()` → `start()`) → `destroy()`
    

---

#### 4. Content in Applets

- Text and Graphics: Use the `paint(Graphics g)` method to draw text, shapes, or images.
    
    - Drawing Shapes:
        
        ```java
        g.drawRect(50, 50, 100, 50); // Rectangle
        g.drawOval(50, 120, 100, 50); // Oval
        ```
        
    - Displaying Images:
        
        ```java
        Image img = getImage(getDocumentBase(), "image.jpg");
        g.drawImage(img, 50, 50, this);
        ```
        
- User Interaction: Add listeners for mouse and keyboard input.
    

Would you like a full applet example with interactivity?