import styles from './drop.module.css'
export default function Drop(){
  return (
    <>
      <select>
        <option>Buenos Aires</option>
        <option selected>Córdoba</option>
        <option>Santa Fé</option>
        <option>Mendoza</option>
      </select>

      <AddStadium></AddStadium>
    </>
  )
}


function AddStadium() {
  return (
    <div className={styles.add}>
      <a target='_blank' href='https://rpp30s246hj.typeform.com/to/QvH2bjho'>Agregá una cancha</a>
    </div>
  )
}