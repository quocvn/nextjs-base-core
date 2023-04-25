import React from 'react'
import styled, { keyframes } from 'styled-components'

const defaultProps = {
  loading: true,
  size: 30,
  color: '#006cff',
}

type FlapperProps = {
  loading?: boolean
  size?: number
  color?: string
} & typeof defaultProps

const move = (props: any) => keyframes`
  100% {
    opacity: 0;
    transform: translateX(${props.x}px)
    translateY(${props.y}px) scale(1);
  }
`

const Wrapper = styled.div<any>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => `${props.size}px`};
  height: ${(props) => `${props.size}px`};
`

const Ball = styled.div<any>`
  position: absolute;
  top: ${(props) => `${props.size / 2}px`};
  left: ${(props) => `${props.size / 2}px`};
  width: ${(props) => `${props.ballSize}px`};
  height: ${(props) => `${props.ballSize}px`};
  border-radius: 50%;
  background-color: ${(props) => props.color};
  transform: translateX(${(props) => `${props.x}px`}) translateY(${(props) => `${props.y}px`})
    scale(0);
  animation: ${(props) => move(props)} 0.8s linear infinite;
  animation-delay: ${(props) => props.index * 0.1}s;
`

const getBalls = ({
  countBalls,
  radius,
  angle,
  color,
  size,
  ballSize,
}: {
  countBalls: number
  radius: number
  angle: number
  color: any
  size: number
  ballSize: number
}) => {
  const balls = []
  const offset = ballSize / 2
  for (let i = 0; i < countBalls; i++) {
    const y = Math.sin(angle * i * (Math.PI / 180)) * radius - offset
    const x = Math.cos(angle * i * (Math.PI / 180)) * radius - offset
    balls.push(
      <Ball
        color={color}
        ballSize={ballSize}
        size={size}
        x={y}
        y={x}
        key={i.toString()}
        index={i}
      />
    )
  }
  return balls
}

const FlapperSpinner = ({ size, color, loading }: FlapperProps): JSX.Element | null => {
  const radius = size / 2
  const countBalls = 7
  const ballSize = size / 1.5
  const angle = 360 / countBalls
  return loading ? (
    <Wrapper size={size}>
      {getBalls({
        countBalls,
        radius,
        angle,
        color,
        size,
        ballSize,
      })}
    </Wrapper>
  ) : null
}

FlapperSpinner.defaultProps = defaultProps

export default FlapperSpinner
