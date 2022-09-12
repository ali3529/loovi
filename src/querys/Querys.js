export const ABOUT_US_QUERY=`*[_type=="about"]{
    about_us_customer_section_title_fa,
    about_us_customer_section_title,
    about_us_customer_number,  
    about_us_customer_number_fa,
    about_us_image{
      asset->{
        url
      }
    },

    about_tab[],
    aboutus_counter[],
    ourteam_title,
    ourteam_title_fa,
    our_team[],
    faq_title,
    faq_title_fa,
    choose_us_title,
    choose_us_title_fa,
    choose_us_image{
      asset->{
        url
      }
    },
    faq[],
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



  export const SERVICE_QUERY=`*[_type=="service"]{
    service_title,
    service_title_fa,
    service_description,
    service_description_fa,  
    seviceimage{
      asset->{
        url
      }
    },
    
    
    
    section_2_seviceimage{
      asset->{
        url
      }
    }, section_2_service_title,
    section_2_service_title_fa,
   


    explore_service_title, 
    explore_service_title_fa, 
    explore_service_description, 
    explore_service_description_fa, 

    serviceContent[], 

    section_3_service_list[],
    
  }`;


  export const PORTFILO_QUERY=`*[_type=="portfolio"]{
    portfoliotitle,
    portfoliotitle_fa,
    portfoliodescription,
    portfoliodescription_fa,
    portfoli_1_image{
      asset->{
        url
      }
    },
    portfolio_1_title,
    portfolio_1_title_fa,
    portfolio_1_description,
    portfolio_1_description_fa,
    portfoli_2_image{
      asset->{
        url
      }
    },
    portfolio_2_title,
    portfolio_2_title_fa,
    portfolio_2_description,
    portfolio_2_description_fa,
    portfoli_3_image{
      asset->{
        url
      }
    },
    portfolio_3_title,
    portfolio_3_title_fa,
    portfolio_3_description,
    portfolio_3_description_fa,



    portfolio_1_detail_description,
    portfolio_1_detail_description_fa, 
    portfolio_2_detail_description,
    portfolio_2_detail_description_fa,
     portfolio_3_detail_description,
    portfolio_3_detail_description_fa,
  
  
  }`;

  