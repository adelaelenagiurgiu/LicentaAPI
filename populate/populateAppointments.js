const mongoose = require("mongoose");
const Appointment = require("../models/Appointment");
const keys = require("../config/keys");

const appointments = [
  {
    date: {
      day: "23",
      month: "3",
      year: "2018"
    },
    patient: "David Armasescu",
    doctor: "Cristian Mornos",
    doctorImage:
      "http://res.cloudinary.com/dcbisng7a/image/upload/v1528462225/app/35050660_1149445491863256_8259729371615461376_n.jpg",
    weekDay: "Vineri",
    start: "18:00",
    end: "19:00",
    title: "Electrocardiograma (EKG)",
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
        result: "Interval QTc (QT corectat cu frecventa cardiaca): sub 0.44 sec"
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
  },
  {
    date: {
      day: "20",
      month: "3",
      year: "2018"
    },
    patient: "Alina Enache",
    doctor: "Monica-Dorina Borlovan",
    doctorImage:
      "http://res.cloudinary.com/dcbisng7a/image/upload/v1528462225/app/35050660_1149445491863256_8259729371615461376_n.jpg",
    weekDay: "Marti",
    start: "15:00",
    end: "16:00",
    analysis: "Radiografie de membre - Picior drept",
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
];

mongoose.connect(keys.mongoURI);

// Go through each section
appointments.map(data => {
  // Initialize a model with section data
  const appointment = new Appointment(data);
  // Save the record
  appointment.save();
});
