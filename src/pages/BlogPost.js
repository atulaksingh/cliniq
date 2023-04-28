import React from "react";
import BlogCard2 from "../components/Blog/BlogCard2";
import Header from "../components/shared/Header";
import Title from "../components/cards/Title";
import Footer from "../components/shared/Footer";
import BlogCard1 from "../components/Blog/BlogCard1";
function BlogPost() {
  return (
    <>
      <div>
        <Header />
        <div className="px-[105px]">
          <Title title="Blog" desc="Read all the news about our company" />
          <div className="grid grid-cols-12 py-10 gap-7">
            <div className="col-span-9">
              <div class="relative bg-[#F5F8FB]">
                <img
                  src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1682339432/slide8-1920x715_scsae2.jpg"
                  alt="Your Image"
                  className="ḥ-96"
                />
                <div className="absolute  bottom-7 left-7 flex items-center justify-center text-white">
                  <p className="text-[15px] font-[700] rounded-sm  bg-[#9a65a5] cursor-pointer w-32 p-1 text-center ">
                    August 8, 2018
                  </p>
                </div>
              </div>

              <div className=" bg-[#F5F8FB]">
                <div className="text-[#a5a5a5] text-[14px] font-[700] my-4">
                  By QreativeThemes <span className="mx-3">/</span> 0 Comments{" "}
                  <span className="mx-3">/</span> Physio, Studies, Work Injury{" "}
                  <span className="mx-3">/</span> Clinic
                </div>
                <div className="border-b-2 border-gray-200 my-7"></div>
                <div>
                  <h1
                    //   style={fontstyle}
                    className="text-[32px] font-[700] text-[#464646] hover:text-[#56afd5] cursor-pointer my-3"
                  >
                    Identifying And Treating Pain From Nerve Tension
                  </h1>
                </div>
                <p className="text-[15px] text-[#999] py-2 ">
                  Physical therapy is one of the major services which we offer.
                  Our therapists works closely with patients to help them
                  improve their movement potential and gain a healthier and
                  more...
                </p>
                <p className="text-[15px] text-[#999] py-2 ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Huic
                  mori optimum esse propter desperationem sapientiae, illi
                  propter spem vivere. Dic in quovis conventu te omnia facere,
                  ne doleas. Duo Reges: constructio interrete. Hosne igitur
                  laudas et hanc eorum, inquam, sententiam sequi nos censes
                  oportere? Potius inflammat, ut coercendi magis quam dedocendi
                  esse videantur. Quid enim est a Chrysippo praetermissum in
                  Stoicis? Sed quanta sit alias, nunc tantum possitne esse
                  tanta. Ne amores quidem sanctos a sapiente alienos esse
                  arbitrantur. Prodest, inquit, mihi eo esse animo.
                </p>
                <p className="text-[15px] text-[#999] py-2 ">
                  Tibi hoc incredibile, quod beatissimum. An dolor longissimus
                  quisque miserrimus, voluptatem non optabiliorem diuturnitas
                  facit? Quia nec honesto quic quam honestius nec turpi turpius.
                  Quod idem cum vestri faciant, non satis magnam tribuunt
                  inventoribus gratiam. De ingenio eius in his disputationibus,
                  non de moribus quaeritur. Et ille ridens: Video, inquit, quid
                  agas; Tria genera bonorum; Non laboro, inquit, de nomine.
                </p>
                <p className="text-[15px] text-[#999] py-2 ">
                  Non igitur de improbo, sed de callido improbo quaerimus,
                  qualis Q. Haeret in salebra. Aliter homines, aliter
                  philosophos loqui putas oportere? Quod ea non occurrentia
                  fingunt, vincunt Aristonem;
                </p>
                <p className="text-[15px] text-[#999] py-2 ">
                  Nam, ut sint illa vendibiliora, haec uberiora certe sunt. Nemo
                  nostrum istius generis asotos iucunde putat vivere. Ex rebus
                  enim timiditas, non ex vocabulis nascitur. Atqui haec
                  patefactio quasi rerum opertarum, cum quid quidque sit
                  aperitur, definitio est. Videsne quam sit magna dissensio?
                  Numquam facies.
                </p>
              </div>

              <div>
                <h1 className="text-[32px] font-[700] text-[#464646] py-3">
                  Leave a Reply
                </h1>
                <p className="text-[14px] text-[#999]">
                  Your email address will not be published. Required fields are
                  marked *
                </p>
                <form>
                  <label className="text-[14px] font-[700] text-[#999]">
                    Comment *
                  </label>{" "}
                  <br />
                  <textarea
                    className="w-full overflow-hidden px-4 py-3 text-[#999] border-gray-200"
                    id="comment"
                    name="comment"
                    cols="45"
                    rows="8"
                    maxlength="65525"
                    required=""
                  />
                  <div className="flex justify-between align-middle items-center">

                 
                  <p class="comment-form-author">
                  <label className="text-[14px] font-[700] text-[#999] pb-5">
                   Name *
                  </label>{" "}
                    <br />
                     
                   <input type="text"  className="border border-gray-200 p-2 text-[#999] overflow-hidden" />
                  </p>
                  <p class="comment-form-author">
                  <label className="text-[14px] font-[700] text-[#999] pb-5">
                   Email *
                  </label>{" "}
                    <br />
                     
                   <input type="text"  className="border border-gray-200 p-2 text-[#999] overflow-hidden" />
                  </p>
                  <p class="comment-form-author">
                  <label className="text-[14px] font-[700] text-[#999] pb-5">
                   Website 
                  </label>{" "}
                    <br />
                     
                   <input type="text"  className="border border-gray-200 p-2 text-[#999] overflow-hidden" />
                  </p>
                  </div>
                  <div className="flex gap-3 align-middle items-center my-5">
                  <input type="checkbox" /> <p>Save my name, email, and website in this browser for the next time I comment.</p>
                  </div>
                  <div className="bg-[#a175aa] w-40 text-white text-[15.5px] font-[500] py-[11px] px-[25px] rounded-full">
             Post Comment
            </div>
                </form>
              </div>
            </div>
            <div className="col-span-3">
              <BlogCard2 />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default BlogPost;
