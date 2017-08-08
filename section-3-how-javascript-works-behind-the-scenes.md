## Section 3
- Hosted in an **environment** (web browser **client**, nodejs **server**)
- Behind the scenes, there is a **javascript engine** that runs our code
- JavaScript engine: is a program that **executes js code**
- The **code is parsed** by a parser that **reads the code line by line** to check the syntaxe and **validate** the code
- If everything is correct, it is **produced a data structure** called **AbstractSyntaxeTree**
- Which is **translated** to machine code
- Finally ran after this process

##
**Execution Context**
- Is the **order the code is run**
- Execution Context: is an environment (like a container) where are code is evaluated
- Default Execution Context is the **Global Execution Context**
- Global Execution Context: **all the code that is not inside any function**. It is an object
- Properties are variables attached to objects
- Code in **function** when called get **their own its Execution Context** (stacked or on top)
- After the function **ended**, it is **removed** (poped) **from the stack**

##
**How Execution Context is Created**
- Exection Content is **an object with 3 properties**: VO(**Variable Object**), **Scope chain** and **this variables**
- Variable Object: contains **function arguments and their variable declarations** as well as **function declarations**
- Scope Chain: **current** VO and **VO of all its parents**
- This variable
- When a function is called, I new execution context is putten in the execution stack
- This **happens in 2 phases**: the **creation and the execution** phases
- Creation Phase: first there is the creation of the VO; Then the creation of the scope chain and *this* variable is determined and set
- Execution Phase: the code is ran line by line and all the variables are defined. If its a Global Context, a global code is created
- Functions and Variables are **Hosted** in js. Means **they are available before the execution phase** starts.
- Functions are **already defined before** the execution phase starts, while Variables **are set up to undefined** and only be defined on the execution phase
- Error 'Uncaught TypeError: retirement **is not a function**': happens because **function expressions cannot be called** as normal function. **Hosting with functions only works with function declarations**

##
**How Scoping Chain**
- Scoping: **answers** to the question: **Where can I access a certain variable or function?**
- Space or envirnment where it can be accessed
- In JS, the **only way to create a new scope** is to **write a new function**
- In JS, there is **Lexical Scoping**
- Lexical Scoping: function that is **written in another function** gets access to the **scope of the outer function** (parent)
- Getting access to the **parent variables and functions**
- The **Scope Chain** goes only in one direction (in the **parents direction**).
- The **Execution Stack is differente** from the **Scope Chain**
- The execution context is **stacking functions** by the **order they are called**
- While the **scope chain** is ordered by which **function are written** lexically
- The **order by which they are called** has **no influence** over ther **scoping chain**

##
**How 'this' Keyword Works**
- The **this** keyword **points to the global object** (the windows object in the browser is the default or parent)
- More specifically, the **this** keyword refers to the **object that called the method**
- The **exception** is when there is a **regular function** (even if it is inside a function that is inside an object), the **this** keyword still **gets the window** object
- The this skeyword is **only called when a method is invoked**. That way it is possible to **assign a function** to **another object**. And the this keyword will **use the new values** that came from **that object**

##
**xxx**
- yyy
```javascript
zzz
```
