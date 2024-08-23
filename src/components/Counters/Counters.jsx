import Counter from "../Counter/Counter"
import './Counters.css'

const Counters = () => {
  return (
    <div className="counter-container">
        <Counter num="34" text1="Buildings" text2="Finished Now" />
        <Counter num="12" text1="Years" text2="Experience" />
        <Counter num="24" text1="Awwards" text2="Won 2023" />
      </div>
  )
}

export default Counters