import Head from "next/head";
import Image, { ImageLoader } from "next/image";
const imageLoader: ImageLoader = ({ src }) => {
  return `${src}`;
};

export default function HomePage() {
  const openYT = () => {
    window.open("https://www.youtube.com/watch?v=jvD-8vTHPVM", "_blank");
  };
  return (
    <>
      <Head>
        <title>Bizfit</title>
        <meta
          name="description"
          content="Bizfit is a doctor-developed program focused on sustainable weight loss through personalized care, medical insight, and modern lifestyle alignment."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph / Facebook */}
        <meta
          property="og:title"
          content="Bizfit – Personalized Weight Loss by Medical Experts"
        />
        <meta
          property="og:description"
          content="Founded by Dr. Surin and Dr. Ann, Bizfit offers a results-driven, holistic approach to health and weight loss, tailored to your body and lifestyle."
        />
        <meta
          property="og:image"
          content="https://bizfitofficial.com/images/vdo.jpg"
        />
        <meta property="og:url" content="https://bizfitofficial.com" />
        <meta property="og:type" content="website" />
      </Head>
      <div className="banner stretch_container">
        <div className="text_header">
          <h1 className="h1">THE LEADER</h1>
          <h2 className="h2">
            IN A BETTER <br />
            LIFESTYLE
          </h2>
        </div>
      </div>

      <div className="bg_b stretch_container">
        <div className="youtube_wrapper">
          <div className="video_wrapper" onClick={openYT}>
            <Image
              unoptimized={false}
              loader={imageLoader}
              src={"/images/vdo.jpg"}
              alt={"video"}
              width={1170}
              height={493}
              layout="responsive"
              objectFit="contain"
            />
          </div>

          <div className="play" onClick={openYT}>
            <Image
              unoptimized={false}
              loader={imageLoader}
              src={"/images/icons/play-button.png"}
              alt={"play"}
              width={64}
              height={64}
              layout="fixed"
            />
          </div>
        </div>
      </div>

      <div className="bg_green stretch_container">
        <div className="text">
          <div className="text_container">
            <h2>FOUNDER</h2>
            <p>
              “ปี 2014 ผมกับหมอแอนนั่งเครื่องบินกลับจากทริปที่สวิสเซอร์แลนด์
              <br />
              เป็นทริปที่ประทับใจมาก ทุกอย่างเฟิร์สคลาสหมด
              ดีมากจนหมอแอนพูดขึ้นมาว่า
            </p>
            <p className="ceo_quote">
              “ทำอย่างไร เพื่อน พี่ น้อง ร่วมทีมของเรา
              <br />
              จึงจะได้รับประสบการณ์สุดยอดแบบนี้เหมือนกันกับเราบ้าง”
            </p>
            <p>
              นั่นเลยเป็นที่มาให้ผมสร้างแบรนด์บิสฟิตจากมุมมองของความเป็นหมอ
              <br />
              และความเป็นผู้บริโภคที่ได้รับประสบการณ์จริงจากโปรแกรมที่คิดขึ้นมา
              <br />
              แล้วเห็นผลกับตัวเอง จนสามารถทำให้สุขภาพและชีวิตเรา
              <br />
              ชีวิตคนรอบข้างของเรา รวมถึงลูกค้าดีขึ้นได้จริงๆ”
            </p>
            <p className="ceo_name">
              <br />
              นายแพทย์ สุรินทร์ โตสุโขวงศ์
              <br />
              แพทย์จีน ชญานิษฐ์ ชาญพรพิพัฒน์กิจ
            </p>

            <h2>OUR APPROACH</h2>
            <p>
              <b>บิสฟิต</b>{" "}
              คือโปรแกรมการลดน้ำหนักที่เน้นในเรื่องของผลลัพธ์ที่ยั่งยืน
              <br />
              และการออกแบบโปรแกรมที่เฉพาะตัวสำหรับแต่ละบุคคล
              <br />
              โดยได้รับการพัฒนาหลักสูตรขึ้นมาจากความเชี่ยวชาญและประสบการณ์
              <br />
              ของแพทย์ผู้ซึ่งมีความเข้าใจลึกซึ้งเกี่ยวกับระบบการทำงานของร่างกาย
              <br />
              ประกอบกับการเลือกใช้ผลิตภัณฑ์ที่เหมาะสมพอดีกับความต้องการของร่างกาย
              <br />
              และวิถีชีวิตของผู้คนในยุคปัจจุบัน ความมุ่งมั่นของเราคือการ
              <br />
              มอบสุขภาพกายที่ดีขึ้นในแบบยั่งยืน เราเชื่อว่าเมื่อสุขภาพกายดี
              <br />
              ร่างกายแข็งแรง บุคลิกภาพดูดีขึ้น สุขภาพใจจะดีตามกันมา
              <br />
              กลายเป็นองค์รวมของวิถีชีวิตที่ดีขึ้นในทุกๆ วัน
            </p>
          </div>
        </div>
        <div className="ceo">
          <Image
            unoptimized={false}
            loader={imageLoader}
            src={"/images/ceo.png"}
            alt={"ceo"}
            width={1050}
            height={"1310"}
            layout="responsive"
            objectFit="contain"
          />
        </div>
      </div>
    </>
  );
}
