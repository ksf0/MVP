export default function FeelingBored() {
  const [ActList, setActList] = useState([])
  const [CurrentAct, setCurrentAct] = useState(false)

  useEffect(() => {
    const config = {}
    axios.get(`/api/getactivities/${coords.lat}%2C${coords.lng}`).then((result) => {
      console.log(result)
      setActList(result.data)
    })
  }, [])

  useEffect(() => {
    if (ActList.length > 0) {
      let initialAct = getRandom(ActList)
      setCurrentAct(initialAct)
    }
  }, [ActList])
  return <>{CurrentAct ? <div>{CurrentAct.name}</div> : null} </>
}
