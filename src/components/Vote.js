import React, { useState } from 'react'
import styled from 'styled-components'
import { Typography, DefaultButton } from '@/components'
import ThreeTriangleIcon from '@/icons/ThreeTriangleIcon'
import CheckRoundIcon from '@/icons/CheckIcon'

const dummyVoteDatas = [
  {
    id: 1,
    content: '모젤 크리스마스 와인',
    percent: 34,
  },
  {
    id: 2,
    content: '모젤 크리스마스 와인',
    percent: 29,
  },
  {
    id: 3,
    content: '모젤 크리스마스 와인',
    percent: 21,
  },
  {
    id: 4,
    content: '모젤 크리스마스 와인',
    percent: 24,
  },
]

export const Vote = (props) => {
  const [selected, setSelected] = useState(null)
  const [clicked, setClicked] = useState(null)

  const handleButtonClick = (idx) => {
    if (clicked === idx) {
      setClicked(null)
    } else {
      setClicked(idx)
    }
  }

  const handleSubmit = () => {
    setSelected(clicked)
    setClicked(null)
  }

  return (
    <Container>
      <ThreeTriangleIcon style={{ alignSelf: 'flex-start' }} />
      <Typography
        style={{
          paddingTop: '16px',
        }}
        size={'14px'}
        weight={600}
        spacing={-0.56}
        color={'#323232'}
      >
        가장 마시고 싶은 와인에 투표해보시고 마시고 싶은 와인에 투표해 보세요!
      </Typography>

      <Typography
        style={{
          alignSelf: 'flex-end',
          paddingTop: '8px',
          marginBottom: '32px',
        }}
        size={'12px'}
        weight={500}
        spacing={-0.48}
        color={'#888888'}
      >
        투표 참여자 601
      </Typography>

      <Box
        style={{
          gap: '16px',
          marginBottom: '32px',
        }}
      >
        {dummyVoteDatas.map((data, idx) => {
          const { percent, content } = data
          const isDefault = idx !== selected && idx !== clicked
          const isClicked = idx === clicked
          const isSelected = idx === selected
          return (
            <VoteButton
              key={idx}
              onClick={() => handleButtonClick(idx)}
              default={isDefault}
              selected={idx === selected}
              disabled={selected !== null}
            >
              <Typography
                size={'14px'}
                weight={600}
                spacing={-0.56}
                color={isSelected ? '#ffffff' : '#323232'}
              >
                {content}
              </Typography>
              {isClicked && <CheckRoundIcon />}
              {selected !== null && (
                <Typography
                  size={'16px'}
                  weight={isSelected ? 700 : 500}
                  spacing={-0.64}
                  color={isSelected ? '#ffffff' : '#595959'}
                >
                  {percent}%
                </Typography>
              )}
            </VoteButton>
          )
        })}
      </Box>

      <DefaultButton
        command={selected !== null ? '투표 완료' : '투표 하기'}
        color={clicked === null ? '#A4A4A4' : '#ffffff'}
        backgroundColor={clicked === null ? '#E2E2E2' : '#00916F'}
        isShowIcon={false}
        isButtonDisable={clicked === null}
        onClick={handleSubmit}
      />
    </Container>
  )
}

export default Vote

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px 32px 0;
  background-color: #f9f9f9;
`

const Box = styled.div`
  display: flex;
  flex-direction: column;
`

const VoteButton = styled.button`
  display: flex;
  justify-content: space-between;
  width: 311px;
  height: 56px;
  padding: 0 16px;
  align-items: center;

  border-radius: 8px;
  border: ${(props) =>
    props.default
      ? '2px solid var(--stroke_grey, #e5e5e5)'
      : '2px solid var(--main_green, #00916F)'};
  background: ${(props) =>
    props.selected ? 'var(--main_green, #00916F)' : 'var(--main_white, #fff)'};
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
`