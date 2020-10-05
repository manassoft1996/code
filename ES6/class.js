class Test {
    constructor() {
        this.name = "manas";
        this.place = "odisha";
        this.age = 24;
    }
    Exam() {
        console.log("Manas qualified all the exams.");
    }
    data() {
        console.log(this.nmae + " " + this.place + " " + this.age);
    }
}
var s1 = new Test();
s1.Exam();
s1.data();
