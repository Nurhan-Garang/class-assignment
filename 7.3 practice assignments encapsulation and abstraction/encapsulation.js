class Student {
  #marks = [];

  addMark(mark) {
    if (typeof mark === "number" && mark >= 0 && mark <= 100) {
      this.#marks.push(mark);
    } else {
      console.log("Invalid mark. Must be a number between 0 and 100.");
    }
  }

  getAverage() {
    if (this.#marks.length === 0) return 0;
    const total = this.#marks.reduce((sum, m) => sum + m, 0);
    return total / this.#marks.length;
  }

  getMarks() {
    return [...this.#marks];
  }
}

// 🌸 Sample usage:
const student1 = new Student();
student1.addMark(85);
student1.addMark(95);
student1.addMark(110); // will be rejected
console.log("Marks:", student1.getMarks()); // [85, 95]
console.log("Average:", student1.getAverage()); // 90
