const mongoose = require("mongoose");
const Patient = require("../models/Patient");
const keys = require("../config/keys");

const patients = [
  {
    patientName: "David Armasescu",
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
        doctorName: "Cristian Mornos",
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
            result: "Rezistenta vasculara totala (RVT): 1100 dyne/sec/cm5"
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
        doctorName: "Cristian Mornos",
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
            result: "Rezistenta vasculara totala (RVT): 900 dyne/sec/cm5"
          }
        ],
        disease: "Bradicardie: Ritmul cardiac care este anormal de lent",
        medication: "Antiaritmice + reflexoterapie și masaj"
      }
    ]
  },
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
        doctorName: "Andreea Daniela Tunei",
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
        doctorName: "Andreea Daniela Tunei",
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
  },
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
        doctorName: "Liana Cicala",
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
  },
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
        doctorName: "Romeo Ovidiu Nicolae Muntean",
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
  },
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
        doctorName: "Cosmina Elena Carabas",
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
        doctorName: "Cosmina Elena Carabas",
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
  },
  {
    patientName: "Raluca Andreea Catuneanu",
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
        doctorName: "Claudia Petrea",
        dateOfTheVisit: new Date(2018, 4, 5),
        analysisTitle: "Control",
        results: [
          { result: "Ochelari distanta OD(-0, 75;-0, 75;90)" },
          { result: "Ochelari distanta OS(0, 00):pio=od(19)" },
          {
            result: "OS(17):ex.pol anterior=ao aspect normal gonioscopie"
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
  },
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
        doctorName: "Cristiana Gherman",
        dateOfTheVisit: new Date(2018, 3, 23),
        analysisTitle: "Consultatie B: Consultatie A + FO, test Schirmer",
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
        doctorName: "Cristiana Gherman",
        dateOfTheVisit: new Date(2018, 4, 8),
        analysisTitle: "Consultatie + Test Schirmer",
        results: [
          { result: "Ochii lacrimeaza abundent" },
          { result: "Senzatie de durere, arsura" }
        ],
        disease: "Sindromul de ochi uscat",
        medication: "Picaturi Systene si Floxal + Tobradex - o saptamana"
      }
    ]
  },
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
        doctorName: "Paula Toma",
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
        doctorName: "Paula Toma",
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
  },
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
        doctorName: "Monica-Dorina Borlovan",
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
        doctorName: "Monica-Dorina Borlovan",
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
  },
  {
    patientName: "Loredana Stefanescu",
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
        doctorName: "Liliana Marincu",
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
];

mongoose.connect(keys.mongoURI);

// Go through each section
patients.map(data => {
  // Initialize a model with section data
  const patient = new Patient(data);
  // Save the record
  patient.save();
});
