import {Racism} from '../modals/racism.modal';



const RacismList : Racism[]=[
{
  name:'Individual Racism',
  description:'Institutional racism (also known as institutionalized racism) is a form of racism expressed in the practice of social and political institutions. Institutional racism is also racism by individuals or informal social groups, ' +
  'governed by behavioral norms that support racist thinking and foment active racism.' +
  '\nCan occur between people, e.g treatment in retail stores and restaurants',
  avatar_url:'assets/imgs/user1.png'
},
{
  name:'Systemic Racial Discrimination',
  description:'Embedded in institutional systems; the direct link between residential schools'+
  ' conscious cultural destruction to social issues, such as poverty, education, health and legal '+
  ' issues for indigenous people is an example. ',
  avatar_url:'assets/imgs/security1.png'
},
{
  name:'Cultural Racism',
  description:'Social production and reproduction of values and standards which priviledge one group' +
  ' cultural heritage and identity over those of another; encourafe schools to include indigenous '+
  'perspectives and content, reflect the full diversity of South Africa, especially values '+
  'and beliefs beyond holidays, perfomance and food. ',
    avatar_url:'assets/imgs/monk1.png'
},
{
    name:'Internalized Racism',
    description:'Occurs when people targeted by racism come to believe that the stereotypes and prejudices '+
    ' of racism are valid. They may act out this belief by oppressing others of their own group, or by devaluing' +
    ' themselves through feelings of shame, self-hatred, isolation, powerlessness, self-doubt and despair',
    avatar_url:'assets/imgs/brain.png'

}

]

export  const RACISM_LIST = RacismList;
