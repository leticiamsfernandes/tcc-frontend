import React, { useCallback, useEffect, useState } from 'react'
import { uuid } from 'uuidv4'
import PageWithHeader from '../../components/PageWithHeader'

interface IProps {
  isGenerateScreen?: boolean
}

const GenerateToken: React.FC<IProps> = ({ isGenerateScreen }) => {
  const [token, setToken] = useState('')

  useEffect(() => {
    if (isGenerateScreen) {
      const id = uuid().split('-')
      console.log(id)
      setToken(`${id[1]}-${id[3]}`)
    }
  }, [isGenerateScreen])

  const handleSubmit = useCallback(e => {
    e.preventDefault()
    const token = e.target.token.value

    window.location.href = `/relatorio/${token}`
  }, [])

  return (
    <PageWithHeader>
      {isGenerateScreen ? (
        <div>{token}</div>
      ) : (
        <div>
          <form onSubmit={handleSubmit}>
            <input type="text" name="token" />
            <button type="submit">Enviar</button>
          </form>
        </div>
      )}
    </PageWithHeader>
  )
}

export default GenerateToken
