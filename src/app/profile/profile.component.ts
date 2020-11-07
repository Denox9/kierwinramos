import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  greet = "Hi my name is";
  logo = "Δdenox";
  name = "KIERWIN RAMOS";
  age = "AGE: 19";
  add = "Add: Oogong Sta. Cruz, Laguna Philippines";
  sect = "BSCPE 2A";
  job = "Future Computer Engineer";
  intro =
    "Hi my name is Kierwin but you can call me Denox, I'm 19, I like designing graphics. I am a cyclist, I ride my bike every weekend. I 	am an introvert, and I like writing in baybayin. And I consider	myself a minimalist.";
  footer = "DENOX PROJECT 4HXC CPE6 2020";
}
