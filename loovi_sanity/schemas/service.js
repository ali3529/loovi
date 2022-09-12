export default {
    name: 'service',
    type: 'document',
    title: 'service',
    fields: [
        {
            name: 'seviceimage',
            type: 'image',
            options: {
                hotspot: true,
            },
            title: 'ServiceImage'
        }, {
            name: 'service_title',
            type: 'string',
            title: 'ServiceTitle'
        }, {
            name: 'service_title_fa',
            type: 'string',
            title: 'ServiceTitle_FA'
        }, {
            name: 'service_description',
            type: 'string',
            title: 'ServiceDescription'
        }, {
            name: 'service_description_fa',
            type: 'string',
            title: 'ServiceDescription_FA'
        },


        {
            name: 'section_2_seviceimage',
            type: 'image',
            options: {
                hotspot: true,
            },
            title: 'Section2ServiceImage'
        }, {
            name: 'section_2_service_title',
            type: 'string',
            title: 'Section2ServiceDescription'
        }, {
            name: 'section_2_service_title_fa',
            type: 'string',
            title: 'Section2ServiceDescription_FA'
        },



        {
            name: 'section_3_service_list',
            type: 'document',
            title: 'SectionServiceList',
            fields: [
                {
                    name: 'title1',
                    title: 'Title1',
                    type: 'string',
                }, {
                    name: 'title1_fa',
                    title: 'Title1_FA',
                    type: 'string',
                }, {
                    name: 'description1',
                    title: 'Description1',
                    type: 'string',
                }, {
                    name: 'description1_fa',
                    title: 'Description1_FA',
                    type: 'string',
                }, {
                    name: 'title2',
                    title: 'Title2',
                    type: 'string',
                }, {
                    name: 'title2_fa',
                    title: 'Title2_FA',
                    type: 'string',
                }, {
                    name: 'description2',
                    title: 'Description2',
                    type: 'string',
                }, {
                    name: 'description2_fa',
                    title: 'Description2_FA',
                    type: 'string',
                }, {
                    name: 'title3',
                    title: 'Title3',
                    type: 'string',
                }, {
                    name: 'title3_fa',
                    title: 'Title3_FA',
                    type: 'string',
                }, {
                    name: 'description3',
                    title: 'Description3',
                    type: 'string',
                }, {
                    name: 'description3_fa',
                    title: 'Description3_FA',
                    type: 'string',
                },
            ]
        },
        {
            name: 'explore_service_title',
            type: 'string',
            title: 'ExploreServiceTitle'
        }, {
            name: 'explore_service_title_fa',
            type: 'string',
            title: 'ExploreServiceTitle_FA'
        }, {
            name: 'explore_service_description',
            type: 'string',
            title: 'ExploreServiceDescription'
        }, {
            name: 'explore_service_description_fa',
            type: 'string',
            title: 'ExploreServiceDescription_FA'
        },






        {
            name: 'serviceContent',
            type: 'document',
            title: 'serviceContent',
            fields: [
                {
                    name: 'serviceContent_image1',
                    type: 'image',
                    options: {
                        hotspot: true,
                    },
                },
                {
                    name: 'service_content_titleTextOne',
                    type: 'string',
                    title: 'ServiceContentTitleTextOne'
                }, {
                    name: 'service_content_titleTextOne_fa',
                    type: 'string',
                    title: 'ServiceContentTitleTextOne_FA'
                },
                {
                    name: 'serviceContent_2_image2',
                    type: 'image',
                    options: {
                        hotspot: true,
                    },
                },
                {
                    name: 'service_content_2_titleTextOne',
                    type: 'string',
                    title: 'ServiceContent2TitleTextOne'
                }, {
                    name: 'service_content_2_titleTextOne_fa',
                    type: 'string',
                    title: 'ServiceContent2TitleTextOne_FA'
                },
                {
                    name: 'serviceContent_3_image3',
                    type: 'image',
                    options: {
                        hotspot: true,
                    },
                },
                {
                    name: 'service_content_3_titleTextOne',
                    type: 'string',
                    title: 'ServiceContent3TitleTextOne'
                }, {
                    name: 'service_content_3_titleTextOne_fa',
                    type: 'string',
                    title: 'ServiceContent3TitleTextOne_FA'
                },

            ]
        },




    ]
}