import Ember from 'ember';

export default Ember.Route.extend({
                model() {
    return [
        {nombre:'Juan Carlos',
        poblacion:'Cáceres',
        edad:'25', 
        notas:' Loren ipsum sit amet'},
        {nombre:'Luis Pérez',
        poblacion:'Badajoz',
        edad:'28', 
        notas:' Reside en Mérida, disponibilidad para viajar'},
        {nombre:'Antonio Baena',
        poblacion:'Sevilla',
        edad:'21', 
        notas:'Reside en Camas, Realiza teletrabajo'}
        ];
  }
});
