'use strict';

/**
 * Service to emailing
 * 
 * @author Victor Huerta <vhuertahnz@gmail.com>
 */
import path from 'path';
import fs from 'fs';
import Promise from 'bluebird';
import handlebars from 'handlebars';
import config from './../../config';
import sendgrid, { mail } from 'sendgrid';

Promise.promisifyAll(fs);

const EmailingService = {

  /**
   * Init function, just store the api key and creates an sendgrid instance
   * 
   * @param {String} apiKey The sendgrid api key
   * @returns
   */
  init(apiKey) {
    this.apiKey = apiKey;
    this.sender = sendgrid(this.apiKey);
    return this;
  },

  /**
   * Send a email
   * 
   * @param {String} html     HTML message
   * @param {String} subject  The subject of the mail
   * @param {String} from     Email from
   * @param {String} to       Email to
   * @returns a Promise than resolves when the mail was sended
   */
  send(html, subject, from, to) {
    const mail = this.createMail(html, subject, from, to);

    const request = this.sender.emptyRequest({
      method: 'POST',
      path: '/v3/mail/send',
      body: mail.toJSON()
    });

    // Return a promise than resolves when the mail was sended
    return new Promise((resolve, reject) =>
      this.sender.API(request,
        (err, response) => err ? reject(err) : resolve(response))
    );
  },

  /**
   * Creates an email object to send it using sendgrid api
   * 
   * @param {String} html     HTML message
   * @param {String} subject  The subject of the mail
   * @param {String} from     Email from
   * @param {String} to       Email to
   * @returns an Email instance
   */
  createMail(html, subject, from, to) {
    return new mail.Mail(
      mail.Email(from),
      subject,
      new mail.Email(to),
      new mail.Content('text/html', html)
    );
  },

  /**
   * Compile a template with the given path and data
   * 
   * @param {String}  template         Path to the template
   * @param {String}  data             Object with data to replace
   * @param {Boolean} [noEscape=true]  No escape html
   * @returns {Promise} Promise than resolves when html is generated
   */
  generateHTML(template, data, noEscape = true) {
    const fullpath = path.join(__dirname, '../../templates', template);
    // Verify template access
    return fs.accessAsync(fullpath, fs.constants.R_OK)
      // Get the template on string
      .then(() => fs.readFileAsync(fullpath, { encoding: 'utf-8' }))
      // Compile the template with the data 
      .then(html => handlebars.compile(html, { noEscape })(data))
      // Throws:
      // ENOENT -> no such file
      // EACCES -> denied permission
  }

};

const instance = Object
  .create(EmailingService)
  .init(config.emailing.apiKey);

export default instance;