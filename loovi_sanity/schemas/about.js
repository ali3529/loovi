export default {
    name: 'about',
    type: 'document',
      title: 'about us',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name'
      },{
        name: 'mainVideo',
        type: 'string',
        title: 'main_video'
      },{
        name: 'mainimage',
        type: 'image',
        options: {
            hotspot: true,
          },
        title: 'mainimage'
      },{
        name: 'text_first',
        type: 'string',
        title: 'text_first'
      },{
        name: 'text_tab1',
        type: 'string',
        title: 'text_tab1'
      },{
        name: 'text_tab2',
        type: 'string',
        title: 'text_tab2'
      },{
        name: 'text_tab3',
        type: 'string',
        title: 'text_tab3'
      },
    ]
  }