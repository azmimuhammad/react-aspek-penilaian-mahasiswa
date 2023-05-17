import {useState} from "react"

const ASPEK = 4
const MAHASISWA = 10

const HomePage = () => {
  const [score, setScore] = useState({
    aspek_penilaian_1: {
      mahasiswa_1: 0,
      mahasiswa_2: 0,
      mahasiswa_3: 0,
      mahasiswa_4: 0,
      mahasiswa_5: 0,
      mahasiswa_6: 0,
      mahasiswa_7: 0,
      mahasiswa_8: 0,
      mahasiswa_9: 0,
      mahasiswa_10: 0
    },
    aspek_penilaian_2: {
      mahasiswa_1: 0,
      mahasiswa_2: 0,
      mahasiswa_3: 0,
      mahasiswa_4: 0,
      mahasiswa_5: 0,
      mahasiswa_6: 0,
      mahasiswa_7: 0,
      mahasiswa_8: 0,
      mahasiswa_9: 0,
      mahasiswa_10: 0
    },
    aspek_penilaian_3: {
      mahasiswa_1: 0,
      mahasiswa_2: 0,
      mahasiswa_3: 0,
      mahasiswa_4: 0,
      mahasiswa_5: 0,
      mahasiswa_6: 0,
      mahasiswa_7: 0,
      mahasiswa_8: 0,
      mahasiswa_9: 0,
      mahasiswa_10: 0
    },
    aspek_penilaian_4: {
      mahasiswa_1: 0,
      mahasiswa_2: 0,
      mahasiswa_3: 0,
      mahasiswa_4: 0,
      mahasiswa_5: 0,
      mahasiswa_6: 0,
      mahasiswa_7: 0,
      mahasiswa_8: 0,
      mahasiswa_9: 0,
      mahasiswa_10: 0
    }
  })

  const onSubmit = () => {
    console.info("submit", score)
  }

  const onValueChange = (e, mahasiswa, aspek) => {
    setScore({
      ...score,
      [`aspek_penilaian_${aspek}`]: {
        ...score[`aspek_penilaian_${aspek}`],
        [`mahasiswa_${mahasiswa}`]: parseInt(e.target.value)
      }
    })
  }

  return (
    <div className="App">
      <h2>Aplikasi Penilaian Mahasiswa</h2>
      <div className="student-table">
        <table border={1}>
          <thead>
            <tr>
              <td></td>
              {[...Array(ASPEK)].map((ap, idx) => {
                return <td key={idx}>Aspek Penilaian {idx + 1}</td>
              })}
            </tr>
          </thead>
          <tbody>
            {[...Array(MAHASISWA)].map((v, i) => {
              return (
                <tr key={i}>
                  <td>Mahasiswa {i + 1}</td>
                  {[...Array(ASPEK)].map((ap, idx) => {
                    return (
                      <td key={i + idx}>
                        <select
                          style={{width: "60%"}}
                          value={
                            score[`aspek_penilaian_${idx + 1}`][
                              `mahasiswa_${i + 1}`
                            ]
                          }
                          onChange={(e) => onValueChange(e, i + 1, idx + 1)}
                        >
                          <option value={0}>0</option>
                          {[...Array(10)].map((s, key) => {
                            return (
                              <option value={key + 1} key={key + 10}>
                                {key + 1}
                              </option>
                            )
                          })}
                        </select>
                      </td>
                    )
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      <button onClick={onSubmit}>Simpan</button>
    </div>
  )
}

export default HomePage
