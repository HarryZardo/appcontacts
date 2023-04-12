import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ContactsList } from '../interfaces/ContactsList';
import { CommonModule } from '@angular/common';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class HomePage {
  public contacts: ContactsList[] = [
    {
      id: 'ID: 1',
      name: 'Hannie <3',
      image: 'https://i1.sndcdn.com/artworks-ybXJ5PyNvD0ShzpM-3db8Pg-t500x500.jpg',
      email: 'j.one.straykids@gmail.com',
    },
    {
      id: 'ID: 2',
      name: 'Lino :)',
      image: 'https://1409791524.rsc.cdn77.org/data/images/full/620583/stray-kids-lee-know.jpg?w=600?w=430',
      email: 'leeknow.straykids@outlook.com',
    },
    {
      id: 'ID: 3',
      name: 'Chanyeol ',
      image: 'https://img.wattpad.com/7309ea1de861c5eac9e889b4f385c061132a2e60/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f596b612d754f564c73616d6f47673d3d2d3932323830353737352e313632333462306634343436633037613635363930323535393437372e6a7067',
      email: 'chanyeol.maioral_exo@gmail.com',
    },
    {
      id: 'ID: 4',
      name: 'Bang Bang :(:',
      image: 'https://pbs.twimg.com/media/EyAybRzXEA0zK2t.jpg',
      email: 'bangchan_straykids_ofc@outlook.com',
    },
    {
      id: 'ID: 5',
      name: 'Cha Eunwoo',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfXDdUYmFbRHlY2YgbueaV0E6bMxQrHym75A&usqp=CAU',
      email: 'chaeunwooofc@gmail.com',
    },
    {
      id: 'ID: 6',
      name: 'Taehy :^ ',
      image: 'https://akcdn.detik.net.id/community/media/visual/2022/09/19/v-bts-9_43.jpeg?w=250&q=',
      email: 'btstaehy@gmail.com',
    },
  ];

  constructor(private dataService: DataService, private route: Router) {}

  showInfoModal(contact: ContactsList) {
    this.dataService.setData('contact', contact);
    this.route.navigateByUrl('/contact-data');
  }
}
