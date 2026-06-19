import CompB from "./CompB";

const CompA = ({ likes, setLikes }) => {
  return (
    <div>
          <CompB
              likes={likes}
              setLikes={setLikes}
          />      
    </div>
  )
}

export default CompA;