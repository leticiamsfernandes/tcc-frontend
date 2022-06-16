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
      setToken(uuid())
    }
  }, [isGenerateScreen])

  const handleSubmit = useCallback(params => {}, [])

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
