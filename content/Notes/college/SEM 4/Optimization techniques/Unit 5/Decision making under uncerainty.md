---
dg-publish: true
---

##  Decision Making under Uncertainty

When a decision-maker **doesn't know the probabilities** of various outcomes (states of nature), they use **decision criteria under uncertainty**. Here are five key methods:

---

### **i) Maximax (Gain) or Minimin (Loss) Criterion**

- **Maximax**: Optimistic approach — chooses the alternative with the **maximum possible gain**.
    
- **Minimin**: If dealing with **costs/losses**, chooses the alternative with the **minimum possible loss**.
    

#### Example:

|Alternatives|Outcome 1|Outcome 2|Outcome 3|
|---|---|---|---|
|A1|40|10|20|
|A2|30|25|15|
|A3|20|50|10|

- Maximax:  
    A1 → Max = 40  
    A2 → Max = 30  
    A3 → Max = 50 → **Choose A3**
    

---

### **ii) Maximin Criterion**

- **Pessimistic** approach — choose the alternative whose **minimum payoff is the highest**.
    

#### Example:

From the same table above:

- A1 → Min = 10
    
- A2 → Min = 15
    
- A3 → Min = 10  
    → **Choose A2**
    

---

### **iii) Hurwicz Alpha Criterion**

- **Weighted average** of best and worst outcomes.
    
- Formula: `Hurwicz value = α × (best payoff) + (1 – α) × (worst payoff)`
    
- **α** is the coefficient of optimism (0 ≤ α ≤ 1)
    

#### Example:

Let α = 0.6

- A1 → 0.6×40 + 0.4×10 = 24 + 4 = **28**
    
- A2 → 0.6×30 + 0.4×15 = 18 + 6 = **24**
    
- A3 → 0.6×50 + 0.4×10 = 30 + 4 = **34** → **Choose A3**
    

---

### **iv) Laplace Criterion**

- Assumes **all outcomes are equally likely**.
    
- Take the **average** payoff for each alternative.
    

#### Example:

- A1: (40+10+20)/3 = 23.33
    
- A2: (30+25+15)/3 = 23.33
    
- A3: (20+50+10)/3 = 26.67 → **Choose A3**
    

---

### **v) Minimax Regret Criterion**

- Builds a **regret table**:
    
    1. For each state, find the **maximum payoff**.
        
    2. Subtract actual payoff from the maximum to get **regret**.
        
    3. Pick the alternative with the **minimum of the maximum regrets**.
        

#### Regret Table:

|Alternatives|Regret 1|Regret 2|Regret 3|Max Regret|
|---|---|---|---|---|
|A1|0|40|0|40|
|A2|10|25|5|25|
|A3|20|0|10|20 → **Choose A3**|

---

## 🌳 Simple Decision Tree Example

### Scenario:

You can invest in either **Project A** or **Project B**.

|Project|Success (₹)|Failure (₹)|
|---|---|---|
|A|100,000|20,000|
|B|80,000|50,000|

But you **don’t know the probabilities**, so use a decision tree under **uncertainty**.

```java
                [Decision Node]
                    /       \
               Project A   Project B
                /    \       /    \
          Success  Failure  Success  Failure
         (100k)    (20k)    (80k)    (50k)
```

- Use any of the criteria (maximax, maximin, etc.) to decide:
    
    - **Maximax**: Choose A (100k vs 80k)
        
    - **Maximin**: Choose B (50k vs 20k)
        
