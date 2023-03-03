import { Component, OnInit } from "@angular/core";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "app-contact-page",
  templateUrl: "./contact-page.component.html",
  styleUrls: ["./contact-page.component.css"],
})
export class ContactPageComponent implements OnInit {
  form!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: "",
      email: "",
      message: "",
    });
  }

  public sendEmail(e: Event) {
    emailjs
      .sendForm(
        "service_swls37v",
        "template_ycenb63",
        e.target as HTMLFormElement,
        "VqHhh3VLEnwytN5bx"
      )
      .then(
        (result: EmailJSResponseStatus) => {
          console.log(result.text);
          this.form.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
}
