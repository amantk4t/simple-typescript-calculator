import { Vue, Component } from "vue-property-decorator";
import { ref } from "vue";

@Component({
  name: "Vue-Calculator",
})
export default class extends Vue {
  current: any = "";
  error: any = null;
  operations = ref<Array<string>>([
    "Rad",
    "Deg",
    "x!",
    "(",
    ")",
    "%",
    "AC",
    "Inv",
    "sin",
    "ln",
    "7",
    "8",
    "9",
    "÷",
    "π",
    "cos",
    "log",
    "4",
    "5",
    "6",
    "x",
    "e",
    "tan",
    "√",
    "1",
    "2",
    "3",
    "-",
    "Ans",
    "EXP",
    "x y",
    "0",
    ".",
    "=",
    "+",
  ]);

  handleKeyPress(event: any) {
    let key = event.target.textContent.trim();
    if (key === "x") {
      key = "*";
    }
    try {
      if (key === "AC") {
        this.current = "";
        return;
      } else if (key !== "=") {
        this.current += key;
      } else if (key === "=") {
        if (this.current.indexOf("^") > -1) {
          const base = this.current.slice(0, this.current.indexOf("^"));
          const exponent = this.current.slice(this.current.indexOf("^") + 1);
          this.current = eval(`Math.pow(${base}, ${exponent})`);
        } else {
          this.current = eval(this.current);
        }
      } else if (key === "%") {
        this.current = Number(this.current) / 100;
      }
    } catch (err) {
      console.log(err);
      this.error = err;
      const self = this;
      setTimeout(function () {
        self.error = null;
      }, 3000);
    }
  }
}
