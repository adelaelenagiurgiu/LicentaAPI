const model = require('../models/Section');
const Section = model.sectionModel;

const Sections = (req, res) => {
  // Find all sections and return a JSON response
  Section.find().lean().exec((error, sections) => res.json({
    // Iterate through each section
    sections: sections.map(section => ({
      ...section
    }))
  }));
};

module.exports = {
  Sections
};