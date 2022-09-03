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