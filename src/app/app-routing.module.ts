import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { ContactPageComponent } from "./components/pages/contact-page/contact-page.component";
import { ProjectPageComponent } from "./components/pages/project-page/project-page.component";
import { CvPageComponent } from "./components/pages/cv-page/cv-page.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "ContactPage",
    component: ContactPageComponent,
  },
  { path: "ProjectPage", component: ProjectPageComponent },
  { path: "CvPage", component: CvPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
