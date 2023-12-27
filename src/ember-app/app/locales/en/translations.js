import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISProba21ВакантДолжнLForm from './forms/i-i-s-proba21-вакант-должн-l';
import IISProba21ГрафСобесLForm from './forms/i-i-s-proba21-граф-собес-l';
import IISProba21ДолжнСотрLForm from './forms/i-i-s-proba21-должн-сотр-l';
import IISProba21ОрганизацияLForm from './forms/i-i-s-proba21-организация-l';
import IISProba21ПланирСобесLForm from './forms/i-i-s-proba21-планир-собес-l';
import IISProba21РегРезультLForm from './forms/i-i-s-proba21-рег-результ-l';
import IISProba21РегистАнкетыLForm from './forms/i-i-s-proba21-регист-анкеты-l';
import IISProba21СотрудникиLForm from './forms/i-i-s-proba21-сотрудники-l';
import IISProba21ВакантДолжнEForm from './forms/i-i-s-proba21-вакант-должн-e';
import IISProba21ГрафСобесEForm from './forms/i-i-s-proba21-граф-собес-e';
import IISProba21ДолжнСотрEForm from './forms/i-i-s-proba21-должн-сотр-e';
import IISProba21ОрганизацияEForm from './forms/i-i-s-proba21-организация-e';
import IISProba21ПланирСобесEForm from './forms/i-i-s-proba21-планир-собес-e';
import IISProba21РегРезультEForm from './forms/i-i-s-proba21-рег-результ-e';
import IISProba21РегистАнкетыEForm from './forms/i-i-s-proba21-регист-анкеты-e';
import IISProba21СотрудникиEForm from './forms/i-i-s-proba21-сотрудники-e';
import IISProba21ВакантДолжнModel from './models/i-i-s-proba21-вакант-должн';
import IISProba21ГрафСобесModel from './models/i-i-s-proba21-граф-собес';
import IISProba21ДолжнСотрModel from './models/i-i-s-proba21-должн-сотр';
import IISProba21ОрганизацияModel from './models/i-i-s-proba21-организация';
import IISProba21ПланирСобесModel from './models/i-i-s-proba21-планир-собес';
import IISProba21РегРезультModel from './models/i-i-s-proba21-рег-результ';
import IISProba21РегистАнкетыModel from './models/i-i-s-proba21-регист-анкеты';
import IISProba21СотрудникиModel from './models/i-i-s-proba21-сотрудники';
import IISProba21ТЧГрафСобесModel from './models/i-i-s-proba21-т-ч-граф-собес';
import IISProba21ТЧРегРезультModel from './models/i-i-s-proba21-т-ч-рег-результ';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-proba21-вакант-должн': IISProba21ВакантДолжнModel,
    'i-i-s-proba21-граф-собес': IISProba21ГрафСобесModel,
    'i-i-s-proba21-должн-сотр': IISProba21ДолжнСотрModel,
    'i-i-s-proba21-организация': IISProba21ОрганизацияModel,
    'i-i-s-proba21-планир-собес': IISProba21ПланирСобесModel,
    'i-i-s-proba21-рег-результ': IISProba21РегРезультModel,
    'i-i-s-proba21-регист-анкеты': IISProba21РегистАнкетыModel,
    'i-i-s-proba21-сотрудники': IISProba21СотрудникиModel,
    'i-i-s-proba21-т-ч-граф-собес': IISProba21ТЧГрафСобесModel,
    'i-i-s-proba21-т-ч-рег-результ': IISProba21ТЧРегРезультModel
  },

  'application-name': 'Proba21',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Proba21',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Proba21',
          title: 'Proba21'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'информация-об-организации': {
          caption: 'Информация об организации',
          title: 'Информация об организации',
          'i-i-s-proba21-организация-l': {
            caption: 'Организация',
            title: ''
          },
          'i-i-s-proba21-вакант-должн-l': {
            caption: 'Вакант должн',
            title: ''
          }
        },
        документы: {
          caption: 'Документы',
          title: 'Документы',
          'i-i-s-proba21-граф-собес-l': {
            caption: 'Граф собес',
            title: ''
          },
          'i-i-s-proba21-регист-анкеты-l': {
            caption: 'Регист анкеты',
            title: ''
          },
          'i-i-s-proba21-планир-собес-l': {
            caption: 'Планир собес',
            title: ''
          },
          'i-i-s-proba21-рег-результ-l': {
            caption: 'Рег результ',
            title: ''
          }
        },
        'информация-о-сотрудниках': {
          caption: 'Информация о сотрудниках',
          title: 'Информация о сотрудниках',
          'i-i-s-proba21-сотрудники-l': {
            caption: 'Сотрудники',
            title: ''
          },
          'i-i-s-proba21-должн-сотр-l': {
            caption: 'Должн сотр',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-proba21-вакант-должн-l': IISProba21ВакантДолжнLForm,
    'i-i-s-proba21-граф-собес-l': IISProba21ГрафСобесLForm,
    'i-i-s-proba21-должн-сотр-l': IISProba21ДолжнСотрLForm,
    'i-i-s-proba21-организация-l': IISProba21ОрганизацияLForm,
    'i-i-s-proba21-планир-собес-l': IISProba21ПланирСобесLForm,
    'i-i-s-proba21-рег-результ-l': IISProba21РегРезультLForm,
    'i-i-s-proba21-регист-анкеты-l': IISProba21РегистАнкетыLForm,
    'i-i-s-proba21-сотрудники-l': IISProba21СотрудникиLForm,
    'i-i-s-proba21-вакант-должн-e': IISProba21ВакантДолжнEForm,
    'i-i-s-proba21-граф-собес-e': IISProba21ГрафСобесEForm,
    'i-i-s-proba21-должн-сотр-e': IISProba21ДолжнСотрEForm,
    'i-i-s-proba21-организация-e': IISProba21ОрганизацияEForm,
    'i-i-s-proba21-планир-собес-e': IISProba21ПланирСобесEForm,
    'i-i-s-proba21-рег-результ-e': IISProba21РегРезультEForm,
    'i-i-s-proba21-регист-анкеты-e': IISProba21РегистАнкетыEForm,
    'i-i-s-proba21-сотрудники-e': IISProba21СотрудникиEForm
  },

});

export default translations;
