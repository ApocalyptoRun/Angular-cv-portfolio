import { Component, Input } from '@angular/core';
import { ExperienceService } from '../experience.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-one-experience',
  templateUrl: './one-experience.component.html',
  styleUrls: ['./one-experience.component.css']
})
export class OneExperienceComponent {
  @Input() oneExperience : any = {};
  @Input() index : any

  constructor(private experience : ExperienceService){}

  delete(){   
    Swal.fire({
      title: 'Etes vous sûr(e)?',
      text: `De supprimer ${this.oneExperience.poste}?`,
      input: 'text',
      inputPlaceholder: 'supprimer',
      showCancelButton: true,
      confirmButtonColor: '#dc3545',
      confirmButtonText: 'Supprimer',
      cancelButtonText: 'Annuler',
      preConfirm: (inputValue) => {
        if (inputValue === 'supprimer') {
          return true;
        } else {
          Swal.showValidationMessage('tapez "supprimer" pour confirmer !');
          return false;
        }
      },
    }).then((result) => {
      if (result.isConfirmed) {
        this.experience.experiences.splice(this.index, 1)
      }
    });    
 }    
 }
  

