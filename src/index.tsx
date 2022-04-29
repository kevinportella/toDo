import React from 'react';
import ReactDOM from 'react-dom';

import { createServer, Model } from 'miragejs'

import { App } from './App';

createServer({
  models: {
    note: Model,
  },

  seeds(server) {
    server.db.loadData ({
      notes: [
        {
          id: 1,
          title: 'Job Freelancer',
          completed: false,
          createdAt: new Date('2021-02-17 9:00:00'),
          UpdatedAt: new Date('2021-02-17 9:00:00'),
        },
        {
          id: 2,
          title: 'Market',
          completed: false,
          createdAt: new Date('2021-06-14 11:00:00'),
          UpdatedAt: new Date('2021-06-14 11:00:00'),
        },
      ],
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/notes', () => {
      return this.schema.all('note')
    })

    this.post('/notes', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('note', data);
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

