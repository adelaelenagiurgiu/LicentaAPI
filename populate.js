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
        ],
        patients: [
          {
            patientName: "David Armășescu",
            patientGender: "Masculin",
            patientCNP: "1700909350911",
            patientTelephone: "+40 714 992 188",
            patientEmail: "david.arms@yahoo.com",
            patientAddress: {
              country: "Romania",
              city: "Timisoara",
              streetName: "Iancu Brezeanu",
              streetNumber: 11,
              postalCode: "300001"
            },
            patientAge: 48,
            patientWeight: 90,
            patientHeight: 179,
            doctorVisits: [
              {
                dateOfTheVisit: new Date(2018, 3, 23),
                analysisTitle: "Electrocardiograma (EKG)",
                results: [
                  {
                    result: "Unda P: amplitudine maxima 2.5 mm, durata 0.10 sec"
                  },
                  { result: "Interval PR/PQ: 0.13-0.20 sec" },
                  {
                    result:
                      "Unda Q: amplitudine maxima frac. 14; din unda R, durata 0.06 sec"
                  },
                  { result: "Complex QRS: 0.08-0.10 sec" },
                  {
                    result:
                      "Interval QTc (QT corectat cu frecventa cardiaca): sub 0.44 sec"
                  },
                  { result: "Unda T: amplitudine 8 mm, durata 0.23 sec" },
                  { result: "Frecventa cardiaca: 80-100/minut" },
                  { result: "Debitul cardiac: 6 litri/minut" },
                  { result: "Volum bataie: 80 ml/minut" },
                  { result: "Indexul cardiac: 3.2 litri/minut/m2" },
                  { result: "Tensiunea arteriala: sub 130/80 mmHg" },
                  {
                    result:
                      "Rezistenta vasculara totala (RVT): 1100 dyne/sec/cm5"
                  }
                ],
                disease: "Ritmul cardiac neregulat",
                medication: "Artecardiven"
              }
            ]
          },
          {
            patientName: "Alexandra Becheru",
            patientGender: "Feminin",
            patientCNP: "2840417358601",
            patientTelephone: "+40 727 811 545",
            patientEmail: "becheru.ale@yahoo.com",
            patientAddress: {
              country: "Romania",
              city: "Timisoara",
              streetName: "Babes Vincentiu",
              streetNumber: 2,
              postalCode: "300004"
            },
            patientAge: 34,
            patientWeight: 60,
            patientHeight: 171,
            doctorVisits: [
              {
                dateOfTheVisit: new Date(2018, 4, 5),
                analysisTitle: "Electrocardiograma (EKG) de efort",
                results: [
                  {
                    result: "Unda P: amplitudine maxima 2.2 mm, durata 0.10 sec"
                  },
                  { result: "Interval PR/PQ: 0.10-0.19 sec" },
                  {
                    result:
                      "Unda Q: amplitudine maxima frac. 14; din unda R, durata 0.06 sec"
                  },
                  { result: "Complex QRS: 0.08 sec" },
                  {
                    result:
                      "Interval QTc (QT corectat cu frecventa cardiaca): sub 0.44 sec"
                  },
                  { result: "Unda T: amplitudine 7 mm, durata 0.20 sec" },
                  { result: "Frecventa cardiaca: 80/minut" },
                  { result: "Debitul cardiac: 4 litri/minut" },
                  { result: "Volum bataie: 80 ml/minut" },
                  { result: "Indexul cardiac: 2.8 litri/minut/m2" },
                  { result: "Tensiunea arteriala: sub 120/70 mmHg" },
                  {
                    result:
                      "Rezistenta vasculara totala (RVT): 900 dyne/sec/cm5"
                  }
                ],
                disease:
                  "Bradicardie: Ritmul cardiac care este anormal de lent",
                medication: "Antiaritmice + reflexoterapie și masaj"
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
        ],
        patients: [
          {
            patientName: "Andreea Bujor",
            patientGender: "Feminin",
            patientCNP: "2930819350355",
            patientTelephone: "+40 742 548 602",
            patientEmail: "andreea.bujor@yahoo.com",
            patientAddress: {
              country: "Romania",
              city: "Timisoara",
              streetName: "Olariu Petre",
              streetNumber: 10,
              postalCode: "300262"
            },
            patientAge: 25,
            patientWeight: 52,
            patientHeight: 163,
            doctorVisits: [
              {
                dateOfTheVisit: new Date(2018, 3, 3),
                analysisTitle: "Consultatie",
                results: [
                  { result: "Hipersecretie de sebum" },
                  {
                    result:
                      "Blocarea glandelor sebacee prin acumularea de celule moarte si sebum cu formarea microcomedoanelor"
                  },
                  { result: "Eliberare de factori inflamatori" },
                  { result: "Expunere intensa la soare/ultraviolete" },
                  { result: "Leziuni inflamatorii: papule, pustule sau noduli" }
                ],
                disease: "Acnee",
                medication:
                  "Tratamnetul local cu retinoizi, antibiotice , peroxid de benzoil"
              }
            ]
          },
          {
            patientName: "Bogdan Grindea",
            patientGender: "Masculin",
            patientCNP: "1891103350173",
            patientTelephone: "+40 742 690 243",
            patientEmail: "grindea.bogdan@gmail.com",
            patientAddress: {
              country: "Romania",
              city: "Timisoara",
              streetName: "Miron Ion",
              streetNumber: 22,
              postalCode: "300290"
            },
            patientAge: 29,
            patientWeight: 70,
            patientHeight: 169,
            doctorVisits: [
              {
                dateOfTheVisit: new Date(2018, 3, 12),
                analysisTitle: "Consultatie",
                results: [
                  { result: "Scuame aderente, cu aspect grasos" },
                  { result: "Roseata" },
                  {
                    result:
                      "Leziuni localizate pe scalp, pe linia de insertie frontala a parului"
                  },
                  { result: "Pe torace: leziuni presternale si interscapulare" }
                ],
                disease: "Dermatita seboreică",
                medication:
                  "Creme pe baza de cortizon, cu potenta redusa si la nivelul scalpului se va folosi un sampon pe baza de sulf, ketoconazol, seleniu, acid salicilic, zinc."
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
        ],
        patients: [
          {
            patientName: "Claudia Cornea",
            patientGender: "Feminin",
            patientCNP: "2981030353050",
            patientTelephone: "+40 760 422 835",
            patientEmail: "claudia_cornea@yahoo.com",
            patientAddress: {
              country: "Romania",
              city: "Timisoara",
              streetName: "Musicescu",
              streetNumber: 1,
              postalCode: "300778"
            },
            patientAge: 20,
            patientWeight: 59,
            patientHeight: 170,
            doctorVisits: [
              {
                dateOfTheVisit: new Date(2018, 3, 3),
                analysisTitle: "Consultatie + Test Papanicolau in mediu lichid",
                results: [
                  { result: "Secretii vaginale galbui" },
                  { result: "Miros neplacut" },
                  { result: "Inflamarea vulvei, dureri" },
                  { result: "Senzatie de disconfort (usturime) la urinare" }
                ],
                disease: "Candidoza vulvo-vaginala",
                medication: "Cervugid - Ovule"
              }
            ]
          },
          {
            patientName: "Cristiana Lucaciu",
            patientGender: "Feminin",
            patientCNP: "2810726352667",
            patientTelephone: "+40 760 420 100",
            patientEmail: "lucaciu.cristiana@gmail.com",
            patientAddress: {
              country: "Romania",
              city: "Timisoara",
              streetName: "Apicultorilor",
              streetNumber: 14,
              postalCode: "300776"
            },
            patientAge: 37,
            patientWeight: 75,
            patientHeight: 167,
            doctorVisits: [
              {
                dateOfTheVisit: new Date(2018, 3, 22),
                analysisTitle: "Consultatie",
                results: [
                  { result: "Secretii vaginale abundente, de culoare galbena" },
                  { result: "Senzatie de mancarime (prurit vulvar)" },
                  { result: "Iritatie si senzatie de arsura" },
                  { result: "Usturime si durerere in timpul mictiunii" },
                  { result: "Miros neplacut" },
                  {
                    result:
                      "Este necesara inca o vizita la medic pentru prelevarea de secretii vaginale"
                  }
                ],
                disease: "Infectie vulvo-vaginala - Trichomoniaza vaginala",
                medication: "Canesten Gyn 3 - 200 mg"
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
        ],
        patients: [
          {
            patientName: "Madalina Popescu",
            patientGender: "Feminin",
            patientCNP: "2780219357055",
            patientTelephone: "+40 720 432 510",
            patientEmail: "mada.popescu@yahoo.com",
            patientAddress: {
              country: "Romania",
              city: "Timisoara",
              streetName: "Averescu Alexandru",
              streetNumber: 11,
              postalCode: "300778"
            },
            patientAge: 40,
            patientWeight: 70,
            patientHeight: 167,
            doctorVisits: [
              {
                dateOfTheVisit: new Date(2018, 3, 5),
                analysisTitle: "Consultatie + Test Papanicolau",
                results: [
                  {
                    result:
                      "Este prezenta o usoara inflamatie la nivelul colului uterin"
                  },
                  { result: "Miros neplacut" },
                  { result: "Senzatie de disconfort (usturime) la urinare" }
                ],
                disease: "Candidoza vulvo-vaginala",
                medication: "Cervugid - Ovule"
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
        ],
        patients: [
          {
            patientName: "Cristian Joldea",
            patientGender: "Masculin",
            patientCNP: "1740114350915",
            patientTelephone: "+40 741 596 802",
            patientEmail: "joldea.cristi@yahoo.com",
            patientAddress: {
              country: "Romania",
              city: "Timisoara",
              streetName: "Juganaru Dumitru",
              streetNumber: 19,
              postalCode: "300776"
            },
            patientAge: 44,
            patientWeight: 92,
            patientHeight: 186,
            doctorVisits: [
              {
                dateOfTheVisit: new Date(2018, 4, 3),
                analysisTitle: "Consultatie",
                results: [
                  { result: "VD:13.5" },
                  { result: "-3.00-0.25 30A -3.25-1.00 8A" },
                  { result: "-3.00+0.00 A -3.25-1.00 3A" },
                  { result: "-3.00-0.50 17A -3.25-1.25 4A" },
                  { result: "-3.00+0.00 A -3.25-1.00 1A" },
                  { result: "-3.25-0.50 11A -3.25-1.00 2A" },
                  { result: "AVE -3.00-0.25 19 AVE -3.25-1.00 4" },
                  { result: "Distanta interpupilara este de 62 mm" }
                ],
                disease: "Miopie",
                medication: "Prescriptie de ochelari"
              }
            ]
          },
          {
            patientName: "Razvan Butnariu",
            patientGender: "Masculin",
            patientCNP: "1950323352952",
            patientTelephone: "+40 741 572 027",
            patientEmail: "butnariu_razvan@gmail.com",
            patientAddress: {
              country: "Romania",
              city: "Timisoara",
              streetName: "Doicescu Octav",
              streetNumber: 6,
              postalCode: "300253"
            },
            patientAge: 23,
            patientWeight: 79,
            patientHeight: 177,
            doctorVisits: [
              {
                dateOfTheVisit: new Date(2018, 4, 12),
                analysisTitle: "Consultatie",
                results: [
                  { result: "VD:13.5" },
                  { result: "-3.00-0.50 30A -3.25-1.00 8A" },
                  { result: "-3.00+0.00 A -3.25-1.00 3A" },
                  { result: "-3.00-0.75 17A -3.25-1.25 4A" },
                  { result: "-3.25+0.25 A -3.50-1.25 1A" },
                  { result: "-3.00-0.25 11A -3.25-1.25 2A" },
                  { result: "AVE -3.00-0.25 19 AVE -3.00-1.25 4" },
                  { result: "Distanta interpupilara este de 59 mm" }
                ],
                disease: "Miopie",
                medication: "Prescriptie de ochelari"
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
        ],
        patients: [
          {
            patientName: "Raluca Andreea Cătuneanu",
            patientGender: "Feminin",
            patientCNP: "2530430356010",
            patientTelephone: "+40 760 330 043",
            patientEmail: "raluca_catuneanu@yahoo.com",
            patientAddress: {
              country: "Romania",
              city: "Timisoara",
              streetName: "Vadul Calugareni",
              streetNumber: 17,
              postalCode: "300237"
            },
            patientAge: 65,
            patientWeight: 74,
            patientHeight: 165,
            doctorVisits: [
              {
                dateOfTheVisit: new Date(2018, 4, 5),
                analysisTitle: "Control",
                results: [
                  { result: "Ochelari distanta OD(-0, 75;-0, 75;90)" },
                  { result: "Ochelari distanta OS(0, 00):pio=od(19)" },
                  {
                    result:
                      "OS(17):ex.pol anterior=ao aspect normal gonioscopie"
                  },
                  {
                    result:
                      "OD ung. deschis pe 360 grt, usor pigmentat, aspect iris in platou"
                  }
                ],
                disease: "Anizometropie, OD- Astigmatism miopic mic",
                medication: "Medicatie cu Travatan - 1 luna"
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
        ],
        patients: [
          {
            patientName: "Marius Codreanu",
            patientGender: "Masculin",
            patientCNP: "1911112355934",
            patientTelephone: "+40 760 333 613",
            patientEmail: "marius_codreanu@yahoo.com",
            patientAddress: {
              country: "Romania",
              city: "Timisoara",
              streetName: "Bojinca Damaschin",
              streetNumber: 1,
              postalCode: "300216"
            },
            patientAge: 27,
            patientWeight: 80,
            patientHeight: 179,
            doctorVisits: [
              {
                dateOfTheVisit: new Date(2018, 3, 23),
                analysisTitle:
                  "Consultatie B: Consultatie A + FO, test Schirmer",
                results: [
                  { result: "Senzatie de durere, arsura" },
                  { result: "Camp vizual bun" }
                ],
                disease: "Sindromul de ochi uscat",
                medication:
                  "Prescriptie de ochelari: Lentile cu filtru pentru calculator, ideal, filtru verde"
              }
            ]
          },
          {
            patientName: "Laura Pavelescu",
            patientGender: "Feminin",
            patientCNP: "2661203353046",
            patientTelephone: "+40 720 310 090",
            patientEmail: "laura_pavelescu@yahoo.com",
            patientAddress: {
              country: "Romania",
              city: "Timisoara",
              streetName: "Ghica Ion",
              streetNumber: 37,
              postalCode: "300161"
            },
            patientAge: 52,
            patientWeight: 73,
            patientHeight: 168,
            doctorVisits: [
              {
                dateOfTheVisit: new Date(2018, 4, 8),
                analysisTitle: "Consultatie + Test Schirmer",
                results: [
                  { result: "Ochii lacrimeaza abundent" },
                  { result: "Senzatie de durere, arsura" }
                ],
                disease: "Sindromul de ochi uscat",
                medication:
                  "Picaturi Systene si Floxal + Tobradex - o saptamana"
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
        ],
        patients: [
          {
            patientName: "Ramona Irimie",
            patientGender: "Feminin",
            patientCNP: "2800606359271",
            patientTelephone: "+40 720 313 683",
            patientEmail: "irimie_ramona@yahoo.com",
            patientAddress: {
              country: "Romania",
              city: "Timisoara",
              streetName: "Vulturilor",
              streetNumber: 29,
              postalCode: "300150"
            },
            patientAge: 38,
            patientWeight: 72,
            patientHeight: 177,
            doctorVisits: [
              {
                dateOfTheVisit: new Date(2018, 4, 8),
                analysisTitle: "Consultatie de specialitate",
                results: [
                  {
                    result:
                      "Leziunile eczematoase ale pielii în afectarea mamară sunt asociate eritem, ulceraţie, sângerare"
                  },
                  { result: "Prezenţa unor noduli palpabili" },
                  { result: "Leziuni care au dimensiuni de 6 mm" }
                ],
                disease: "Boala Paget",
                medication: "Plan de tratament"
              }
            ]
          },
          {
            patientName: "Vlad Gligor",
            patientGender: "Masculin",
            patientCNP: "1571021356517",
            patientTelephone: "+40 722 797 610",
            patientEmail: "gligor.vlad@yahoo.com",
            patientAddress: {
              country: "Romania",
              city: "Timisoara",
              streetName: "Barac Ioan",
              streetNumber: 3,
              postalCode: "300152"
            },
            patientAge: 61,
            patientWeight: 90,
            patientHeight: 184,
            doctorVisits: [
              {
                dateOfTheVisit: new Date(2018, 3, 17),
                analysisTitle:
                  "Consultatie de specialitate (include si biopsia hepatică)",
                results: [
                  { result: "Dureri abdominale superioare" },
                  { result: "Icter" },
                  {
                    result:
                      "Rezultate de la teste imagistice, radiografie toracică şi scanare osoasă"
                  }
                ],
                disease: "Cancerul hepatic - Stadiul II",
                medication: "Plan de tratament"
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
        ],
        patients: [
          {
            patientName: "Alina Enache",
            patientGender: "Feminin",
            patientCNP: "2940709351938",
            patientTelephone: "+40 722 799 205",
            patientEmail: "alina_enache@gmail.com",
            patientAddress: {
              country: "Romania",
              city: "Timisoara",
              streetName: "Stefan cel Mare",
              streetNumber: 12,
              postalCode: "300117"
            },
            patientAge: 24,
            patientWeight: 72,
            patientHeight: 168,
            doctorVisits: [
              {
                dateOfTheVisit: new Date(2018, 3, 20),
                analysisTitle: "Radiografie de membre - Picior drept",
                results: [
                  {
                    result:
                      "Piese scheletice cu raporturi normale si cu semnal IRM in limite normale "
                  },
                  {
                    result:
                      "Fara traiecte de fractura la nivelul segmentelor osoase examinate"
                  },
                  {
                    result:
                      "Interlinii articulare surprinse cu o grosime si semnal in limite normale "
                  },
                  {
                    result:
                      "Hipersemnal T2 cu aspect inflamator la nivelul tesutului adipos plantar si la nivelul filetelor musculare ai flexorilor degetelor si muschilor lumbricali ai degetelor II, III si IV "
                  }
                ],
                disease: "Usoare dureri de oase",
                medication: "Vitamine MILLGAMA + Fizioterapie"
              }
            ]
          },
          {
            patientName: "Darius Giurescu",
            patientGender: "Masculin",
            patientCNP: "1850914354908",
            patientTelephone: "+40 741 457 084",
            patientEmail: "darius.giurescu@yahoo.com",
            patientAddress: {
              country: "Romania",
              city: "Timisoara",
              streetName: "Comanesti",
              streetNumber: 9,
              postalCode: "300116"
            },
            patientAge: 33,
            patientWeight: 94,
            patientHeight: 182,
            doctorVisits: [
              {
                dateOfTheVisit: new Date(2018, 3, 26),
                analysisTitle: "Examen radiologic coloana vertebrala / segment",
                results: [
                  { result: "Vertebre inflamate" },
                  { result: "Compresiune S1 stanga in recesul lateral" },
                  {
                    result:
                      "Fara modificari de semnal in structura conului terminal medular"
                  }
                ],
                disease: "Spondilita anchilozanta",
                medication: "Sedinte de fizioterapie si kinetoterapie"
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
        ],
        patients: [
          {
            patientName: "Loredana Ștefănescu",
            patientGender: "Feminin",
            patientCNP: "2710210354541",
            patientTelephone: "+40 762 509 200",
            patientEmail: "loredana_stefanescu@gmail.com",
            patientAddress: {
              country: "Romania",
              city: "Timisoara",
              streetName: "Istrati Panait",
              streetNumber: 12,
              postalCode: "300004"
            },
            patientAge: 47,
            patientWeight: 88,
            patientHeight: 171,
            doctorVisits: [
              {
                dateOfTheVisit: new Date(2018, 4, 10),
                analysisTitle: "Examen radiologic coloana vertebrala / segment",
                results: [
                  { result: "Usor edem osos vertebral L5" },
                  { result: "Spondilita" },
                  { result: "Degenerarea discurilor intervertebrale L4,L5" },
                  { result: "Prolapsuri L3-L5 cu atingeri radiculare L3 " }
                ],
                disease: "Spondilita nediferentiata",
                medication: "Naproxen pentru zonele inflamate"
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
