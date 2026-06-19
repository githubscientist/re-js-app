import CompC from "./CompC";

const CompB = ({ likes, setLikes }) => {
  return (
    <div>
          <CompC
              likes={likes}
              setLikes={setLikes}
          />
    </div>  
  )
}

export default CompB;