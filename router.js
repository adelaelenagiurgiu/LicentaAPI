const express = require('express');
const { Router } = express;
const sectionController = require('./controllers/SectionController');
const sections = sectionController.Sections;

const router = Router();

router.route('/sections').get(sections);

module.exports = {
  Router: router
};