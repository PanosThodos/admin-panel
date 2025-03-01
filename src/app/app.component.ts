import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  USERS: User[];
  selectedUser: User;
  formData: User;
  enableSaveButton: boolean = false;
  showCancelButton: boolean = false;

  nameData: string = '';
  emailData: string = '';
  phoneData: string = '';
  addressData: string = '';
  companyData: string = '';


  ngOnInit(): void {
    this.USERS = [
      {
        id: '5c093af1c6ee9117a581c7d6',
        photo: 'https://randomuser.me/api/portraits/men/40.jpg',
        name: 'Bates Washington',
        company: 'ZOLAREX',
        email: 'bates.washington@zolarex.io',
        phone: '+1 (915) 447-2207',
        address: '958 Brevoort Place, Ona, Maine, 2433'
      },
      {
        id: '5c093af1aeca1bb00607fb2a',
        photo: 'https://randomuser.me/api/portraits/men/1.jpg',
        name: 'Mollie Oneill',
        company: 'VIAGRAND',
        email: 'mollie.oneill@viagrand.biz',
        phone: '+1 (852) 535-3880',
        address: '120 Cedar Street, Mansfield, Kentucky, 8890'
      },
      {
        id: '5c093af11dc4289c2941bd83',
        photo: 'https://randomuser.me/api/portraits/men/2.jpg',
        name: 'Lana Sharpe',
        company: 'SPEEDBOLT',
        email: '',
        phone: '+1 (876) 475-3370',
        address: '673 Revere Place, Canoochee, New Mexico, 4980'
      },
      {
        id: '5c093af172c42a579bdb685f',
        photo: 'https://randomuser.me/api/portraits/men/3.jpg',
        name: 'Massey Ewing',
        company: 'STOCKPOST',
        email: 'massey.ewing@stockpost.ca',
        phone: '+1 (948) 482-2392',
        address: '716 Hazel Court, Hanover, Louisiana, 9603'
      },
      {
        id: '5c093af1264dbf1a467091cf',
        photo: 'https://randomuser.me/api/portraits/men/4.jpg',
        name: 'Patrica Melton',
        company: 'DIGIAL',
        email: 'patrica.melton@digial.name',
        phone: '',
        address: '371 Cortelyou Road, Farmers, Iowa, 1733'
      },
      {
        id: '5c093af1e39cab35f1c9726e',
        photo: 'https://randomuser.me/api/portraits/men/5.jpg',
        name: 'Viola Serrano',
        company: 'ENTALITY',
        email: '',
        phone: '+1 (909) 489-2270',
        address: '787 Bleecker Street, Nipinnawasee, New York, 6872'
      },
      {
        id: '5c093af1dd7402c939bd490c',
        photo: 'https://randomuser.me/api/portraits/men/6.jpg',
        name: 'Tammy Dixon',
        company: 'XTH',
        email: 'tammy.dixon@xth.net',
        phone: '+1 (810) 472-2762',
        address: '293 Linwood Street, Roulette, Nevada, 7805'
      },
      {
        id: '5c093af15b557da4238bcb0c',
        photo: 'https://randomuser.me/api/portraits/men/7.jpg',
        name: 'Christensen Brown',
        company: 'SKYPLEX',
        email: 'christensen.brown@skyplex.us',
        phone: '+1 (892) 462-2141',
        address: '600 Calder Place, Bourg, Hawaii, 9397'
      },
      {
        id: '5c091af1e39cab35f9c9726n',
        photo: 'https://randomuser.me/api/portraits/men/8.jpg',
        name: 'Wilmer Berends',
        company: 'Dabvine',
        email: 'wberends0@unblog.fr',
        phone: '111-757-1393',
        address: '401 Spaight Way'
      },
      {
        id: '5c693af1dd7402c939bd4806',
        photo: 'https://randomuser.me/api/portraits/men/9.jpg',
        name: 'Yolane Culver',
        company: 'Fivespan',
        email: 'yculver1@netvibes.com',
        phone: '471-485-5905',
        address: '1 Colorado Junction'
      },
      {
        id: '50093af15b557da4248bcb02',
        photo: 'https://randomuser.me/api/portraits/men/10.jpg',
        name: 'Clarance Marthen',
        company: 'Shuffledrive',
        email: 'cmarthen2@alibaba.com',
        phone: '638-994-3228',
        address: '6977 Sugar Trail'
      }
    ];
  }

  selectUser(id) {
    var found = this.USERS.filter((user) => user.id == id);
    if (found.length > 0) {
      this.selectedUser = found[0];
    }
    this.formData = this.initializeUser(); /* Creates New User With SelectedUser Data */
  }

  dataChanged(event, field) {
    console.log(event);
    this.enableSaveButton = true;
    this.showCancelButton = true;

    switch (field) {
      case "name":
        this.formData.name = event.target.value;
        break;
      case "email":
        this.formData.email = event.target.value;
        break;
      case "phone":
        this.formData.phone = event.target.value;
        break;
      case "address":
        this.formData.address = event.target.value;
        break;
      case "company":
        this.formData.company = event.target.value;
        break;
    }
  }

  saved() {
    let index = this.USERS.findIndex((user) => user.id == this.selectedUser.id);

    this.USERS[index] = this.formData;
    this.enableSaveButton = false;
    this.showCancelButton = false;
  }

  canceled() {
    this.nameData = this.selectedUser.name;
    this.emailData = this.selectedUser.email;
    this.phoneData = this.selectedUser.phone;
    this.addressData = this.selectedUser.address;
    this.companyData = this.selectedUser.company;

    this.enableSaveButton = false;
    this.showCancelButton = false;
  }

  initializeUser() {
    return new User({ /* Creates New User With SelectedUser Data */
      id: this.selectedUser.id,
      photo: this.selectedUser.photo,
      name: this.selectedUser.name,
      company: this.selectedUser.company,
      email: this.selectedUser.email,
      phone: this.selectedUser.phone,
      address: this.selectedUser.address
    }
    );
  }

}
