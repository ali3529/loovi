export const ABOUT_US_QUERY=`*[_type=="about"]{
    name,
    mainVideo,
    text_first,
    text_tab1,  
    mainimage{
      asset->{
        url
      }
    }
  }`;
  export const Home_QUERY=`*[_type=="home"]{
    section_1_title,
    section_1_title_fa,
    section_1_discription,
    section_1_discription_fa, 
    section_2_title,
    section_2_title_fa,
    section_1_image{
      asset->{
        url
      }
    }, section_2_image{
      asset->{
        url
      }
    },

    section_3_upper_title,
    section_3_upper_title_fa,
    section_3_title,
    section_3_title_fa,
    section_3_description,
    section_3_description_fa
    , section_3_image{
      asset->{
        url
      }
    }

    , section_3_small_image{
      asset->{
        url
      }
    },

    section_4_upper_title,
    section_4_upper_title_fa,
    section_4_title,
    section_4_title_fa,
    section_4_description,
    section_4_description_fa
    , section_4_image{
      asset->{
        url
      }
    }

    , section_4_small_image{
      asset->{
        url
      }
    },
    section_5_title,
    section_5_link,
    section_5_title_fa,
    section_5_description,
    section_5_description_fa ,
     section_5_image{
      asset->{
        url
      }
    }
  }`;