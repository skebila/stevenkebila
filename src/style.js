const styles = {
  boxWidth: "xl:max-w-[1280px] w-full",

  heading2: "font-poppins font-semibold xs:text-[2.25em] text-[30px] text-center text-white xs:leading-[76.8px] leading-[66.8px] w-full",
  paragraph: "font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]",

  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",

  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-12 py-4",

  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6",

  unfilledButton: "bg-transparent border-2 border-[#0081CF] hover:bg-[#0081CF] font-poppins cursor-pointer text-[16px] font-normal py-2 px-4 rounded-full  items-center text-white",
  filledButton: "bg-[#0081CF] font-poppins cursor-pointer text-[16px] font-semibold py-4 px-10 rounded-full inline-flex items-center text-white",
};

export const layout = {
  section: `flex flex-col ${styles.paddingY}`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionImg: `grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ${styles.flexCenter}  ml-0 md:mt-0 mt-10 relative`,

  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

export default styles;