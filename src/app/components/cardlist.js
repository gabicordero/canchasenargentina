import styles from "./card.module.css";

const canchas = [
  {
    id: 1,
    name: "Gran 7",
    phone: 3515395629,
    address: "Av. Concepción Arenal",
    horary: "",
    socialmedia: "",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27231.638366571522!2d-64.18886767941015!3d-31.442911394814757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432a2ed17f69df1%3A0x4b6c077a65895199!2sLa%20Gran%207%20%5BComplejo%20Tribunales%5D!5e0!3m2!1ses!2sar!4v1701472266420!5m2!1ses!2sar"
  }, {
    id: 2,
    name: "Complejo América",
    phone: 3512469794,
    address: "Friuli 1996",
    horary: "",
    socialmedia: "",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.125557881167!2d-64.19738001228907!3d-31.438210160807355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432a3ec4de6d0a1%3A0x7cc7848eb13fa79c!2sComplejo%20Am%C3%A9rica!5e0!3m2!1ses!2sar!4v1701472351197!5m2!1ses!2sar"
  }, {
    id: 3,
    name: "Manfrey",
    phone: 3516352777,
    address: "Colectora",
    horary: "",
    socialmedia: "",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1702.159984110439!2d-64.11326684127805!3d-31.43285709999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432bd04b5797bf1%3A0x3e2b26d8e03b3466!2sCancha%20De%20F%C3%BAtbol%20Manfrey!5e0!3m2!1ses!2sar!4v1701472449998!5m2!1ses!2sar"
  }, {
    id: 3,
    name: "Don Balón",
    phone: 3515852185,
    address: "Manuel Cardeñosa 4400",
    horary: "",
    socialmedia: "",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3407.1134981745604!2d-64.23289675913999!3d-31.35584707439675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432994625850aed%3A0xda51c038d1e1e61e!2sDon%20Balon!5e0!3m2!1ses-419!2sar!4v1703641525215!5m2!1ses-419!2sar"
  }, {
    id: 4,
    name: "Sportino",
    phone: 3516470782,
    address: "11 de Septiembre 5113, Córdoba",
    horary: "",
    socialmedia: "",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.900407418168!2d-64.1478151!3d-31.471925700000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432bcb4cb590b63%3A0xc1bb25f21f8f612b!2sSportino%20Espacio%20Deportivo%20Recreativo!5e0!3m2!1ses!2sar!4v1717797599428!5m2!1ses!2sar"
  }
]

function Card({ name, phone, address, map }) {

  return (
    <div className={styles.card}>
      <div className={styles.info}>
        <h3>{name}</h3>
        <ul>
          <li>{phone}</li>
          <li>{address}</li>
        </ul>
      </div>
      <iframe
        src={map}
        className={styles.map}
        width="250" height="200" style={{ border: 0 }} allowfullscreen="" loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )

}

export default function CampList() {
  return (
    <div className={styles.camplist}>
      {canchas.map(cancha => (
        <Card
          key={cancha.id}
          name={cancha.name}
          phone={cancha.phone}
          address={cancha.address}
          map={cancha.map}
        />
      ))}
    </div>
  )
}