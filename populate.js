const mongoose = require("mongoose");
const Section = require("./models/Section");
const keys = require("./config/keys");

const sections = [
  {
    firstImage:
      "http://res.cloudinary.com/dcbisng7a/image/upload/v1528461740/app/34792143_1149443325196806_3345205054528290816_n.jpg",
    name: "Cardiologie",
    sectionDescription:
      "Cardiologia este o specialitate medicală care are ca subiect de studiu bolile inimii și ale vaselor de sânge. Cardiologia cuprinde diagnosticul și tratamentul bolilor cardiace congenitale, bolii cardiace ischemice, insuficienței cardiace, valvulopatiilor, aritmiilor și al bolilor pericardului.",
    doctors: [
      {
        doctorName: "Cristian Mornos",
        doctorSpecialization: "Cardiologie",
        doctorProfessionalGrade: "Medic Specialist",
        doctorImage:
          "http://res.cloudinary.com/dcbisng7a/image/upload/v1528462225/app/35050660_1149445491863256_8259729371615461376_n.jpg",
        doctorTelephone: "+40 756 622 559",
        doctorEmail: "cristian.mornos@yahoo.com",
        doctorSchedule: [
          {
            day: "Luni",
            timeFrame: "08:00 - 13:00",
            appointments: [
              {
                start: "8:00",
                end: "9:00"
              },
              {
                start: "9:00",
                end: "10:00"
              },
              {
                start: "10:00",
                end: "11:00"
              },
              {
                start: "11:00",
                end: "12:00"
              },
              {
                start: "12:00",
                end: "13:00"
              }
            ]
          },
          {
            day: "Marti",
            timeFrame: "14:00 - 20:00",
            appointments: [
              {
                start: "14:00",
                end: "15:00"
              },
              {
                start: "15:00",
                end: "16:00"
              },
              {
                start: "16:00",
                end: "17:00"
              },
              {
                start: "17:00",
                end: "18:00"
              },
              {
                start: "18:00",
                end: "19:00"
              },
              {
                start: "19:00",
                end: "20:00"
              }
            ]
          },
          {
            day: "Miercuri",
            timeFrame: "08:00 - 13:00",
            appointments: [
              {
                start: "8:00",
                end: "9:00"
              },
              {
                start: "9:00",
                end: "10:00"
              },
              {
                start: "10:00",
                end: "11:00"
              },
              {
                start: "11:00",
                end: "12:00"
              },
              {
                start: "12:00",
                end: "13:00"
              }
            ]
          },
          {
            day: "Joi",
            timeFrame: "14:00 - 20:00",
            appointments: [
              {
                start: "14:00",
                end: "15:00"
              },
              {
                start: "15:00",
                end: "16:00"
              },
              {
                start: "16:00",
                end: "17:00"
              },
              {
                start: "17:00",
                end: "18:00"
              },
              {
                start: "18:00",
                end: "19:00"
              },
              {
                start: "19:00",
                end: "20:00"
              }
            ]
          },
          {
            day: "Vineri",
            timeFrame: "14:00 - 20:00",
            appointments: [
              {
                start: "14:00",
                end: "15:00"
              },
              {
                start: "15:00",
                end: "16:00"
              },
              {
                start: "16:00",
                end: "17:00"
              },
              {
                start: "17:00",
                end: "18:00"
              },
              {
                start: "18:00",
                end: "19:00"
              },
              {
                start: "19:00",
                end: "20:00"
              }
            ]
          },
          {
            day: "Sambata",
            timeFrame: "08:00 - 13:00",
            appointments: [
              {
                start: "8:00",
                end: "9:00"
              },
              {
                start: "9:00",
                end: "10:00"
              },
              {
                start: "10:00",
                end: "11:00"
              },
              {
                start: "11:00",
                end: "12:00"
              },
              {
                start: "12:00",
                end: "13:00"
              }
            ]
          }
        ]
      }
    ],
    MedicalServicesOffered: [
      {
        ServiceType: "Consultatie",
        price: 155
      },
      {
        ServiceType: "Consultatie + eco + EKG",
        price: 385
      },
      {
        ServiceType: "Consultatie + Ecocardiografie",
        price: 300
      },
      {
        ServiceType: "Consultatie + EKG",
        price: 200
      },
      {
        ServiceType: "Control",
        price: 100
      },
      {
        ServiceType: "Control + int analize",
        price: 125
      },
      {
        ServiceType: "Ecocardiografie",
        price: 200
      },
      {
        ServiceType: "EKG",
        price: 40
      },
      {
        ServiceType: "EKG - test de efort",
        price: 305
      },
      {
        ServiceType: "Holter EKG",
        price: 190
      },
      {
        ServiceType: "Interpretare analize",
        price: 45
      },
      {
        ServiceType: "Troponina- test rapid",
        price: 55
      }
    ]
  },

  {
    firstImage:
      "http://res.cloudinary.com/dcbisng7a/image/upload/v1528462011/app/34822130_1149444078530064_2374319322081263616_n.jpg",
    name: "Dermatologie",
    sectionDescription:
      "Dermato-venerologia reprezintă o specialitate medicală ce se ocupă de totalitatea patofenomenelor care se produc la nivelul organului cutanat (piele, mucoase accesibile, fanere), la orice vârstă, inclusiv boli cu transmitere sexuală (venerice).",
    doctors: [
      {
        doctorName: "Andreea Daniela Tunei",
        doctorSpecialization: "Dermatologie",
        doctorProfessionalGrade: "Medic Primar",
        doctorImage:
          "http://res.cloudinary.com/dcbisng7a/image/upload/v1528461428/app/34844867_1149442041863601_3257251709218455552_n.jpg",
        doctorTelephone: "+40 722 345 923",
        doctorEmail: "andreea.tunei@gmail.com",
        doctorSchedule: [
          {
            day: "Luni",
            timeFrame: "08:00 - 13:00",
            appointments: [
              {
                start: "8:00",
                end: "9:00"
              },
              {
                start: "9:00",
                end: "10:00"
              },
              {
                start: "10:00",
                end: "11:00"
              },
              {
                start: "11:00",
                end: "12:00"
              },
              {
                start: "12:00",
                end: "13:00"
              }
            ]
          },
          {
            day: "Marti",
            timeFrame: "14:00 - 20:00",
            appointments: [
              {
                start: "14:00",
                end: "15:00"
              },
              {
                start: "15:00",
                end: "16:00"
              },
              {
                start: "16:00",
                end: "17:00"
              },
              {
                start: "17:00",
                end: "18:00"
              },
              {
                start: "18:00",
                end: "19:00"
              },
              {
                start: "19:00",
                end: "20:00"
              }
            ]
          },
          {
            day: "Miercuri",
            timeFrame: "08:00 - 13:00",
            appointments: [
              {
                start: "8:00",
                end: "9:00"
              },
              {
                start: "9:00",
                end: "10:00"
              },
              {
                start: "10:00",
                end: "11:00"
              },
              {
                start: "11:00",
                end: "12:00"
              },
              {
                start: "12:00",
                end: "13:00"
              }
            ]
          },
          {
            day: "Joi",
            timeFrame: "14:00 - 20:00",
            appointments: [
              {
                start: "14:00",
                end: "15:00"
              },
              {
                start: "15:00",
                end: "16:00"
              },
              {
                start: "16:00",
                end: "17:00"
              },
              {
                start: "17:00",
                end: "18:00"
              },
              {
                start: "18:00",
                end: "19:00"
              },
              {
                start: "19:00",
                end: "20:00"
              }
            ]
          },
          {
            day: "Vineri",
            timeFrame: "14:00 - 20:00",
            appointments: [
              {
                start: "14:00",
                end: "15:00"
              },
              {
                start: "15:00",
                end: "16:00"
              },
              {
                start: "16:00",
                end: "17:00"
              },
              {
                start: "17:00",
                end: "18:00"
              },
              {
                start: "18:00",
                end: "19:00"
              },
              {
                start: "19:00",
                end: "20:00"
              }
            ]
          },
          {
            day: "Sambata",
            timeFrame: "08:00 - 13:00",
            appointments: [
              {
                start: "8:00",
                end: "9:00"
              },
              {
                start: "9:00",
                end: "10:00"
              },
              {
                start: "10:00",
                end: "11:00"
              },
              {
                start: "11:00",
                end: "12:00"
              },
              {
                start: "12:00",
                end: "13:00"
              }
            ]
          }
        ]
      }
    ],
    MedicalServicesOffered: [
      {
        ServiceType: "Adeverinta medicala",
        price: 30
      },
      {
        ServiceType: "Anestezie crema anestop",
        price: 55
      },
      {
        ServiceType: "Anestezie locala",
        price: 25
      },
      {
        ServiceType: "Aplicatii TCA (1 sedinta)",
        price: 45
      },
      {
        ServiceType: "Biopsie cutanata",
        price: 220
      },
      {
        ServiceType: "Chiuretare veruci vulgare maini sau piciore/ lez.",
        price: 110
      },
      {
        ServiceType: "Consultatie",
        price: 155
      },
      {
        ServiceType: "Consultatie + dermatoscopie",
        price: 220
      },
      {
        ServiceType: "Consultatie + Ex. micologic (analiza)",
        price: 195
      },
      {
        ServiceType: "Consultatie estetica",
        price: 190
      },
      {
        ServiceType: "Control",
        price: 100
      },
      {
        ServiceType: "E - matrix - rejuvenare faciala",
        price: 11
      },
      {
        ServiceType: "Electr. Angioame",
        price: 275
      },
      {
        ServiceType: "Electroexcizie/ excizie chist sebaceu",
        price: 275
      },
      {
        ServiceType: "Excizie unghie incarnata",
        price: 275
      },
      {
        ServiceType:
          "Extractie comedoame/ cm (variabil functie de durata sedintei)",
        price: 165
      },
      {
        ServiceType: "Injectare acid hialuronic (Filorga -Lips) - 1 ml",
        price: 1170
      },
      {
        ServiceType: "Injectare acid hialuronic (Juvederm Volbella)",
        price: 1595
      },
      {
        ServiceType: "Injectare acid hialuronic (Volift retouch) - 0,55 ml",
        price: 825
      },
      {
        ServiceType: "Interpretare analize",
        price: 45
      },
      {
        ServiceType: "Laser angioame / leziune",
        price: 165
      },
      {
        ServiceType: "Laser condiloame/leziune",
        price: 165
      },
      {
        ServiceType: "Laser papiloame virale/leziune",
        price: 135
      },
      {
        ServiceType: "Mezoterapie cu dermapen",
        price: 650
      },
      {
        ServiceType: "Mezoterapie cu dermapen - 6 sedinte",
        price: 3080
      },
      {
        ServiceType: "Mezoterapiei (lipoza)",
        price: 275
      },
      {
        ServiceType: "Peeling mediu",
        price: 415
      },
      {
        ServiceType: "PRP (tehnica vampir)",
        price: 1210
      },
      {
        ServiceType: "PRP (tehnica vampir) - 3 sedinte",
        price: 2905
      }
    ]
  },

  {
    firstImage:
      "http://res.cloudinary.com/dcbisng7a/image/upload/v1528461740/app/34780027_1149443335196805_7120902278931808256_n.jpg",
    name: "Ginecologie",
    sectionDescription:
      "Ginecologia reprezintă ramura medicinei care se ocupă cu diagnosticarea și tratarea bolilor ce afecteaza sistemul genital feminin. Patogenia ginecologică este una extrem de extinsă cuprinzand bolile de la nivelul organelor genitale interne (uter, ovar, trompe uterine, vagin), a organului genital extern (vulva), dar și a glandelor anexe, precum glandele mamare.",
    doctors: [
      {
        doctorName: "Liana Cicala",
        doctorSpecialization:
          "Ginecologie/ Ecografie 2D/ Ecografie 3D/ Ecografie 4D",
        doctorProfessionalGrade: "Medic Specialist",
        doctorImage:
          "http://res.cloudinary.com/dcbisng7a/image/upload/v1528461428/app/34758945_1149442051863600_6418988022993256448_n.jpg",
        doctorTelephone: "+40 789 772 892",
        doctorEmail: "lianacicala@gmail.com",
        doctorSchedule: [
          {
            day: "Luni",
            timeFrame: "08:00 - 13:00",
            appointments: [
              {
                start: "8:00",
                end: "9:00"
              },
              {
                start: "9:00",
                end: "10:00"
              },
              {
                start: "10:00",
                end: "11:00"
              },
              {
                start: "11:00",
                end: "12:00"
              },
              {
                start: "12:00",
                end: "13:00"
              }
            ]
          },
          {
            day: "Marti",
            timeFrame: "16:00 - 20:00",
            appointments: [
              {
                start: "16:00",
                end: "17:00"
              },
              {
                start: "17:00",
                end: "18:00"
              },
              {
                start: "18:00",
                end: "19:00"
              },
              {
                start: "19:00",
                end: "20:00"
              }
            ]
          },
          {
            day: "Miercuri",
            timeFrame: "16:00 - 20:00",
            appointments: [
              {
                start: "16:00",
                end: "17:00"
              },
              {
                start: "17:00",
                end: "18:00"
              },
              {
                start: "18:00",
                end: "19:00"
              },
              {
                start: "19:00",
                end: "20:00"
              }
            ]
          },
          {
            day: "Joi",
            timeFrame: "08:00 - 13:00",
            appointments: [
              {
                start: "8:00",
                end: "9:00"
              },
              {
                start: "9:00",
                end: "10:00"
              },
              {
                start: "10:00",
                end: "11:00"
              },
              {
                start: "11:00",
                end: "12:00"
              },
              {
                start: "12:00",
                end: "13:00"
              }
            ]
          },
          {
            day: "Vineri",
            timeFrame: "12:00 - 16:00",
            appointments: [
              {
                start: "12:00",
                end: "13:00"
              },
              {
                start: "13:00",
                end: "14:00"
              },
              {
                start: "14:00",
                end: "15:00"
              },
              {
                start: "15:00",
                end: "16:00"
              }
            ]
          },
          {
            day: "Sambata",
            timeFrame: "16:00 - 20:00",
            appointments: [
              {
                start: "16:00",
                end: "17:00"
              },
              {
                start: "17:00",
                end: "18:00"
              },
              {
                start: "18:00",
                end: "19:00"
              },
              {
                start: "19:00",
                end: "20:00"
              }
            ]
          }
        ]
      },
      {
        doctorName: "Romeo Ovidiu Nicolae Muntean",
        doctorSpecialization:
          "Ginecologie/ Ecografie 2D/ Ecografie 3D/ Ecografie 4D",
        doctorProfessionalGrade: "Medic Specialist",
        doctorImage:
          "http://res.cloudinary.com/dcbisng7a/image/upload/v1528461740/app/34788478_1149442915196847_4980517554742099968_n.jpg",
        doctorTelephone: "+40 799 782 553",
        doctorEmail: "romeo.muntean@yahoo.com",
        doctorSchedule: [
          {
            day: "Luni",
            timeFrame: "16:00 - 20:00",
            appointments: [
              {
                start: "16:00",
                end: "17:00"
              },
              {
                start: "17:00",
                end: "18:00"
              },
              {
                start: "18:00",
                end: "19:00"
              },
              {
                start: "19:00",
                end: "20:00"
              }
            ]
          },
          {
            day: "Marti",
            timeFrame: "15:00 - 18:00",
            appointments: [
              {
                start: "15:00",
                end: "16:00"
              },
              {
                start: "16:00",
                end: "17:00"
              },
              {
                start: "17:00",
                end: "18:00"
              }
            ]
          },
          {
            day: "Miercuri",
            timeFrame: "09:00 - 12:00",
            appointments: [
              {
                start: "9:00",
                end: "10:00"
              },
              {
                start: "10:00",
                end: "11:00"
              },
              {
                start: "11:00",
                end: "12:00"
              }
            ]
          },
          {
            day: "Joi",
            timeFrame: "09:00 - 12:00",
            appointments: [
              {
                start: "9:00",
                end: "10:00"
              },
              {
                start: "10:00",
                end: "11:00"
              },
              {
                start: "11:00",
                end: "12:00"
              }
            ]
          },
          {
            day: "Vineri",
            timeFrame: "09:00 - 12:00",
            appointments: [
              {
                start: "9:00",
                end: "10:00"
              },
              {
                start: "10:00",
                end: "11:00"
              },
              {
                start: "11:00",
                end: "12:00"
              }
            ]
          },
          {
            day: "Sambata",
            timeFrame: "15:00 - 18:00",
            appointments: [
              {
                start: "15:00",
                end: "16:00"
              },
              {
                start: "16:00",
                end: "17:00"
              },
              {
                start: "17:00",
                end: "18:00"
              }
            ]
          }
        ]
      }
    ],
    MedicalServicesOffered: [
      {
        ServiceType: "Anestezie locala",
        price: 45
      },
      {
        ServiceType: "Aspirat endometrial cu sonda tip Pipell",
        price: 155
      },
      {
        ServiceType: "Avort medicamentos",
        price: 880
      },
      {
        ServiceType: "Biopsie de endometru",
        price: 550
      },
      {
        ServiceType: "Biopsie de exocol",
        price: 330
      },
      {
        ServiceType: "Biopsii vulvare / vaginale",
        price: 550
      },
      {
        ServiceType: "Chiuretaj biopsic etajat",
        price: 550
      },
      {
        ServiceType: "Chiuretaj endocol",
        price: 550
      },
      {
        ServiceType: "Chiuretaj uterin pentru intreruperea sarcinii",
        price: 660
      },
      {
        ServiceType: "Conizatie de col uterin cu ansa",
        price: 770
      },
      {
        ServiceType: "Consiliere planning familial",
        price: 135
      },
      {
        ServiceType: "Consiliere sterilitate",
        price: 135
      },
      {
        ServiceType: "Consultatie",
        price: 155
      },
      {
        ServiceType: "Test Papanicolau in mediu lichid",
        price: 80
      },
      {
        ServiceType: "Test Papanicolau",
        price: 60
      },
      {
        ServiceType: "Ecografie sarcina trim II (fara morfologie fetala)",
        price: 275
      },
      {
        ServiceType: "Electrocauterizare col uterin ( electrocauter )",
        price: 440
      },
      {
        ServiceType: "Incizie drenaj abces Bartholin",
        price: 440
      },
      {
        ServiceType: "Montare sterilet",
        price: 440
      },
      {
        ServiceType: "Perfuzie",
        price: 100
      },
      {
        ServiceType: "Test sarcina",
        price: 30
      },
      {
        ServiceType: "Tratamente topice pentru condiloame",
        price: 70
      }
    ]
  },

  {
    firstImage:
      "http://res.cloudinary.com/dcbisng7a/image/upload/v1528461428/app/34790161_1149442028530269_6178269644516753408_n.jpg",
    name: "Oftalmologie",
    sectionDescription:
      'Oftalmologia este o ramură a medicinei care se ocupă cu tratarea bolilor organului vederii, ceea ce include ochiul și structurile din jurul ochiului, cum ar fi pleoapele și sistemul lacrimar. Patologia căilor vizuale (nervul optic, căile vizuale centrale) și a cortexului vizual reprezintă un domeniu de graniță între neurologie și oftalmologie ("neurooftalmologie").',
    doctors: [
      {
        doctorName: "Cosmina Elena Carabas",
        doctorSpecialization: "Oftalmologie",
        doctorProfessionalGrade: "Medic Primar",
        doctorImage:
          "http://res.cloudinary.com/dcbisng7a/image/upload/v1528462225/app/34790641_1149445508529921_6285505181077471232_n.jpg",
        doctorTelephone: "+40 732 994 625",
        doctorEmail: "elena.carabas@yahoo.com",
        doctorSchedule: [
          {
            day: "Luni",
            timeFrame: "08:00 - 12:00",
            appointments: [
              {
                start: "8:00",
                end: "9:00"
              },
              {
                start: "9:00",
                end: "10:00"
              },
              {
                start: "10:00",
                end: "11:00"
              },
              {
                start: "11:00",
                end: "12:00"
              }
            ]
          },
          {
            day: "Marti",
            timeFrame: "15:00 - 18:00",
            appointments: [
              {
                start: "15:00",
                end: "16:00"
              },
              {
                start: "16:00",
                end: "17:00"
              },
              {
                start: "17:00",
                end: "18:00"
              }
            ]
          },
          {
            day: "Miercuri",
            timeFrame: "09:00 - 13:00",
            appointments: [
              {
                start: "9:00",
                end: "10:00"
              },
              {
                start: "10:00",
                end: "11:00"
              },
              {
                start: "11:00",
                end: "12:00"
              },
              {
                start: "12:00",
                end: "13:00"
              }
            ]
          },
          {
            day: "Joi",
            timeFrame: "08:00 - 12:00",
            appointments: [
              {
                start: "8:00",
                end: "9:00"
              },
              {
                start: "9:00",
                end: "10:00"
              },
              {
                start: "10:00",
                end: "11:00"
              },
              {
                start: "11:00",
                end: "12:00"
              }
            ]
          },
          {
            day: "Vineri",
            timeFrame: "15:00 - 18:00",
            appointments: [
              {
                start: "15:00",
                end: "16:00"
              },
              {
                start: "16:00",
                end: "17:00"
              },
              {
                start: "17:00",
                end: "18:00"
              }
            ]
          },
          {
            day: "Sambata",
            timeFrame: "08:00 - 12:00",
            appointments: [
              {
                start: "8:00",
                end: "9:00"
              },
              {
                start: "9:00",
                end: "10:00"
              },
              {
                start: "10:00",
                end: "11:00"
              },
              {
                start: "11:00",
                end: "12:00"
              }
            ]
          }
        ]
      },
      {
        doctorName: "Claudia Petrea",
        doctorSpecialization: "Oftalmologie",
        doctorProfessionalGrade: "Medic Primar",
        doctorImage:
          "http://res.cloudinary.com/dcbisng7a/image/upload/v1528461428/app/34558722_1149442068530265_7829036472148688896_n.jpg",
        doctorTelephone: "+40 779 224 415",
        doctorEmail: "petreaclaudia@gmail.com",
        doctorSchedule: [
          {
            day: "Luni",
            timeFrame: "08:00 - 12:00",
            appointments: [
              {
                start: "8:00",
                end: "9:00"
              },
              {
                start: "9:00",
                end: "10:00"
              },
              {
                start: "10:00",
                end: "11:00"
              },
              {
                start: "11:00",
                end: "12:00"
              }
            ]
          },
          {
            day: "Marti",
            timeFrame: "12:00 - 15:00",
            appointments: [
              {
                start: "12:00",
                end: "13:00"
              },
              {
                start: "13:00",
                end: "14:00"
              },
              {
                start: "14:00",
                end: "15:00"
              }
            ]
          },
          {
            day: "Miercuri",
            timeFrame: "17:00 - 20:00",
            appointments: [
              {
                start: "17:00",
                end: "18:00"
              },
              {
                start: "18:00",
                end: "19:00"
              },
              {
                start: "19:00",
                end: "20:00"
              }
            ]
          },
          {
            day: "Joi",
            timeFrame: "08:00 - 12:00",
            appointments: [
              {
                start: "8:00",
                end: "9:00"
              },
              {
                start: "9:00",
                end: "10:00"
              },
              {
                start: "10:00",
                end: "11:00"
              },
              {
                start: "11:00",
                end: "12:00"
              }
            ]
          },
          {
            day: "Vineri",
            timeFrame: "17:00 - 20:00",
            appointments: [
              {
                start: "17:00",
                end: "18:00"
              },
              {
                start: "18:00",
                end: "19:00"
              },
              {
                start: "19:00",
                end: "20:00"
              }
            ]
          },
          {
            day: "Sambata",
            timeFrame: "12:00 - 15:00",
            appointments: [
              {
                start: "12:00",
                end: "13:00"
              },
              {
                start: "13:00",
                end: "14:00"
              },
              {
                start: "14:00",
                end: "15:00"
              }
            ]
          }
        ]
      },
      {
        doctorName: "Cristiana Gherman",
        doctorSpecialization: "Oftalmologie",
        doctorProfessionalGrade: "Medic Specialist",
        doctorImage:
          "http://res.cloudinary.com/dcbisng7a/image/upload/v1528461740/app/34560771_1149442948530177_3621380733085417472_n.jpg",
        doctorTelephone: "+40 742 396 155",
        doctorEmail: "florinagherman@yahoo.com",
        doctorSchedule: [
          {
            day: "Luni",
            timeFrame: "12:00-16:00",
            appointments: [
              {
                start: "12:00",
                end: "13:00"
              },
              {
                start: "13:00",
                end: "14:00"
              },
              {
                start: "14:00",
                end: "15:00"
              },
              {
                start: "15:00",
                end: "16:00"
              }
            ]
          },
          {
            day: "Marti",
            timeFrame: "12:00 - 15:00",
            appointments: [
              {
                start: "12:00",
                end: "13:00"
              },
              {
                start: "13:00",
                end: "14:00"
              },
              {
                start: "14:00",
                end: "15:00"
              }
            ]
          },
          {
            day: "Miercuri",
            timeFrame: "12:00 - 15:00",
            appointments: [
              {
                start: "12:00",
                end: "13:00"
              },
              {
                start: "13:00",
                end: "14:00"
              },
              {
                start: "14:00",
                end: "15:00"
              }
            ]
          },
          {
            day: "Joi",
            timeFrame: "15:00 - 18:00",
            appointments: [
              {
                start: "15:00",
                end: "16:00"
              },
              {
                start: "16:00",
                end: "17:00"
              },
              {
                start: "17:00",
                end: "18:00"
              }
            ]
          },
          {
            day: "Vineri",
            timeFrame: "12:00 - 15:00",
            appointments: [
              {
                start: "12:00",
                end: "13:00"
              },
              {
                start: "13:00",
                end: "14:00"
              },
              {
                start: "14:00",
                end: "15:00"
              }
            ]
          },
          {
            day: "Sambata",
            timeFrame: "15:00 - 18:00",
            appointments: [
              {
                start: "15:00",
                end: "16:00"
              },
              {
                start: "16:00",
                end: "17:00"
              },
              {
                start: "17:00",
                end: "18:00"
              }
            ]
          }
        ]
      }
    ],
    MedicalServicesOffered: [
      {
        ServiceType: "Consultatie + Biomicroscopie",
        price: 145
      },
      {
        ServiceType: "Consultatie A: acuitate vizuala",
        price: 165
      },
      {
        ServiceType: "Consultatie B: Consultatie A + FO, test Schirmer",
        price: 220
      },
      {
        ServiceType: "Consultatie fisa",
        price: 65
      },
      {
        ServiceType: "Control",
        price: 100
      },
      {
        ServiceType: "Control + int. analize",
        price: 135
      },
      {
        ServiceType: "Cura chirurgicala a salazionului",
        price: 440
      },
      {
        ServiceType: "Extractie corp strain",
        price: 135
      },
      {
        ServiceType: "Gonioscopie",
        price: 55
      },
      {
        ServiceType: "Incizie abces palpebral",
        price: 440
      },
      {
        ServiceType: "Interpretare analize",
        price: 40
      },
      {
        ServiceType: "Pansament, nitratare",
        price: 45
      },
      {
        ServiceType: "Perimetrie computerizata",
        price: 135
      },
      {
        ServiceType: "Punctie colectie purulenta",
        price: 165
      },
      {
        ServiceType: "Test Schirmer",
        price: 55
      },
      {
        ServiceType: "Tonometrie noncontact / Goldman",
        price: 75
      }
    ]
  },

  {
    firstImage:
      "http://res.cloudinary.com/dcbisng7a/image/upload/v1528461740/app/34668377_1149443328530139_1628378881104805888_n.png",
    name: "Oncologie",
    sectionDescription:
      "Oncologia este un domeniu al științei medicale, care se ocupă de studierea etiologiei, patogenezei, diagnosticului, clinicii, tratamentului, abilitării și profilaxiei cancerului, la baza căreia stau metodele chirurgicale, radiologice și medicamentoase de tratament, efectuând în același timp elaborarea și perfecționarea lor.",
    doctors: [
      {
        doctorName: "Paula Toma",
        doctorSpecialization: "Oncologie medicala",
        doctorProfessionalGrade: "Medic Primar",
        doctorImage:
          "http://res.cloudinary.com/dcbisng7a/image/upload/v1528462224/app/34818212_1149445525196586_259630154567909376_n.jpg",
        doctorTelephone: "+40 744 922 437",
        doctorEmail: "toma.paula@gmail.com",
        doctorSchedule: [
          {
            day: "Luni",
            timeFrame: "15:00 - 19:00",
            appointments: [
              {
                start: "15:00",
                end: "16:00"
              },
              {
                start: "16:00",
                end: "17:00"
              },
              {
                start: "17:00",
                end: "18:00"
              },
              {
                start: "18:00",
                end: "19:00"
              }
            ]
          },
          {
            day: "Marti",
            timeFrame: "9:00 - 13:00",
            appointments: [
              {
                start: "9:00",
                end: "10:00"
              },
              {
                start: "10:00",
                end: "11:00"
              },
              {
                start: "11:00",
                end: "12:00"
              },
              {
                start: "12:00",
                end: "13:00"
              }
            ]
          },
          {
            day: "Miercuri",
            timeFrame: "15:00 - 19:00",
            appointments: [
              {
                start: "15:00",
                end: "16:00"
              },
              {
                start: "16:00",
                end: "17:00"
              },
              {
                start: "17:00",
                end: "18:00"
              },
              {
                start: "18:00",
                end: "19:00"
              }
            ]
          },
          {
            day: "Joi",
            timeFrame: "9:00 - 13:00",
            appointments: [
              {
                start: "9:00",
                end: "10:00"
              },
              {
                start: "10:00",
                end: "11:00"
              },
              {
                start: "11:00",
                end: "12:00"
              },
              {
                start: "12:00",
                end: "13:00"
              }
            ]
          },
          {
            day: "Vineri",
            timeFrame: "9:00 - 13:00",
            appointments: [
              {
                start: "9:00",
                end: "10:00"
              },
              {
                start: "10:00",
                end: "11:00"
              },
              {
                start: "11:00",
                end: "12:00"
              },
              {
                start: "12:00",
                end: "13:00"
              }
            ]
          },
          {
            day: "Sambata",
            timeFrame: "15:00 - 18:00",
            appointments: [
              {
                start: "15:00",
                end: "16:00"
              },
              {
                start: "16:00",
                end: "17:00"
              },
              {
                start: "17:00",
                end: "18:00"
              }
            ]
          }
        ]
      }
    ],
    MedicalServicesOffered: [
      {
        ServiceType: "Consultatie de specialitate",
        price: 200
      },
      {
        ServiceType: "Consultatie interdisciplinara",
        price: 145
      },
      {
        ServiceType: "Punctie biopsie mamara",
        price: 600
      },
      {
        ServiceType: "Tratament de chimioterapie/sedinta",
        price: 100
      }
    ]
  },

  {
    firstImage:
      "http://res.cloudinary.com/dcbisng7a/image/upload/v1528461740/app/34689894_1149444068530065_7263872574755438592_n.jpg",
    name: "Radiologie",
    sectionDescription:
      "Imagistica medicală este o specialitate științifică recentă, care reunește o largă varietate de științe în scopul studierii modului în care se formează, înregistrează, transmit, analizează, procesează, percep și se stochează imagini ale organelor sau țesuturilor, prin diferite tehnici, cu scopul de a le folosi pentru a diagnostica bolile.",
    doctors: [
      {
        doctorName: "Monica-Dorina Borlovan",
        doctorSpecialization: "Radiologie",
        doctorProfessionalGrade: "Medic primar",
        doctorImage:
          "http://res.cloudinary.com/dcbisng7a/image/upload/v1528462250/app/34782417_1149448588529613_1220705627660091392_n.jpg",
        doctorTelephone: "+40 730 104 440",
        doctorEmail: "monicaborlovan@gmail.com",
        doctorSchedule: [
          {
            day: "Luni",
            timeFrame: "10:00 - 13:00",
            appointments: [
              {
                start: "10:00",
                end: "11:00"
              },
              {
                start: "11:00",
                end: "12:00"
              },
              {
                start: "12:00",
                end: "13:00"
              }
            ]
          },
          {
            day: "Marti",
            timeFrame: "15:00 - 18:00",
            appointments: [
              {
                start: "15:00",
                end: "16:00"
              },
              {
                start: "16:00",
                end: "17:00"
              },
              {
                start: "17:00",
                end: "18:00"
              }
            ]
          },
          {
            day: "Miercuri",
            timeFrame: "10:00 - 13:00",
            appointments: [
              {
                start: "10:00",
                end: "11:00"
              },
              {
                start: "11:00",
                end: "12:00"
              },
              {
                start: "12:00",
                end: "13:00"
              }
            ]
          },
          {
            day: "Joi",
            timeFrame: "15:00 - 19:00",
            appointments: [
              {
                start: "15:00",
                end: "16:00"
              },
              {
                start: "16:00",
                end: "17:00"
              },
              {
                start: "17:00",
                end: "18:00"
              },
              {
                start: "18:00",
                end: "19:00"
              }
            ]
          },
          {
            day: "Vineri",
            timeFrame: "10:00 - 13:00",
            appointments: [
              {
                start: "10:00",
                end: "11:00"
              },
              {
                start: "11:00",
                end: "12:00"
              },
              {
                start: "12:00",
                end: "13:00"
              }
            ]
          },
          {
            day: "Sambata",
            timeFrame: "15:00 - 19:00",
            appointments: [
              {
                start: "15:00",
                end: "16:00"
              },
              {
                start: "16:00",
                end: "17:00"
              },
              {
                start: "17:00",
                end: "18:00"
              },
              {
                start: "18:00",
                end: "19:00"
              }
            ]
          }
        ]
      },

      {
        doctorName: "Liliana Marincu",
        doctorSpecialization: "Radiologie",
        doctorProfessionalGrade: "Medic primar",
        doctorImage:
          "http://res.cloudinary.com/dcbisng7a/image/upload/v1528461740/app/34818844_1149442938530178_1716043656151957504_n.jpg",
        doctorTelephone: "+40 723 936 341",
        doctorEmail: "marincu.liliana@gmail.com",
        doctorSchedule: [
          {
            day: "Luni",
            timeFrame: "15:00 - 19:00",
            appointments: [
              {
                start: "15:00",
                end: "16:00"
              },
              {
                start: "16:00",
                end: "17:00"
              },
              {
                start: "17:00",
                end: "18:00"
              },
              {
                start: "18:00",
                end: "19:00"
              }
            ]
          },
          {
            day: "Marti",
            timeFrame: "14:00 - 17:00",
            appointments: [
              {
                start: "14:00",
                end: "15:00"
              },
              {
                start: "15:00",
                end: "16:00"
              },
              {
                start: "16:00",
                end: "17:00"
              }
            ]
          },
          {
            day: "Miercuri",
            timeFrame: "15:00 - 19:00",
            appointments: [
              {
                start: "15:00",
                end: "16:00"
              },
              {
                start: "16:00",
                end: "17:00"
              },
              {
                start: "17:00",
                end: "18:00"
              },
              {
                start: "18:00",
                end: "19:00"
              }
            ]
          },
          {
            day: "Joi",
            timeFrame: "14:00 - 17:00",
            appointments: [
              {
                start: "14:00",
                end: "15:00"
              },
              {
                start: "15:00",
                end: "16:00"
              },
              {
                start: "16:00",
                end: "17:00"
              }
            ]
          },
          {
            day: "Vineri",
            timeFrame: "14:00 - 17:00",
            appointments: [
              {
                start: "14:00",
                end: "15:00"
              },
              {
                start: "15:00",
                end: "16:00"
              },
              {
                start: "16:00",
                end: "17:00"
              }
            ]
          },
          {
            day: "Sambata",
            timeFrame: "14:00 - 17:00",
            appointments: [
              {
                start: "14:00",
                end: "15:00"
              },
              {
                start: "15:00",
                end: "16:00"
              },
              {
                start: "16:00",
                end: "17:00"
              }
            ]
          }
        ]
      }
    ],
    MedicalServicesOffered: [
      {
        ServiceType: "Ex. radiologic centura scapulara",
        price: 50
      },
      {
        ServiceType: "Ex. radiologic cranian standard",
        price: 45
      },
      {
        ServiceType: "Ex. radiologic parti schelet in 2 planuri",
        price: 80
      },
      {
        ServiceType: "Ex. radiologic torace ansamblu",
        price: 50
      },
      {
        ServiceType: "Ex. radiologic torace osos",
        price: 60
      },
      {
        ServiceType: "Ex. radiologic vizualizare abdomen",
        price: 45
      },
      {
        ServiceType: "Examen radiologic articulatii sacro-iliace",
        price: 45
      },
      {
        ServiceType: "Examen radiologic coloana vertebrala / segment",
        price: 45
      },
      {
        ServiceType: "Radiografie de membre",
        price: 45
      }
    ]
  }
];

mongoose.connect(keys.mongoURI);

// Go through each section
sections.map(data => {
  // Initialize a model with section data
  const section = new Section(data);
  // Save the record
  section.save();
});
