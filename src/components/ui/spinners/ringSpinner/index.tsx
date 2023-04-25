import React, { CSSProperties, DetailedHTMLProps, HTMLAttributes } from 'react'

interface RingSpinnerProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
  loading?: boolean
  size?: number
  color?: string
  speedMultiplier?: number
  cssOverride?: CSSProperties
}

const createAnimation = (loaderName: string, frames: string, suffix: string): string => {
  const animationName = `blue-sky-spinners-${loaderName}-${suffix}`

  if (typeof window === 'undefined' || !window.document) {
    return animationName
  }

  const styleEl = document.createElement('style')
  document.head.appendChild(styleEl)
  const styleSheet = styleEl.sheet
  const keyFrames = `
    @keyframes ${animationName} {
      ${frames}
    }
  `

  if (styleSheet) {
    styleSheet.insertRule(keyFrames, 0)
  }

  return animationName
}

const right = createAnimation(
  'RingSpinner',
  '0% {transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg)} 100% {transform: rotateX(180deg) rotateY(360deg) rotateZ(360deg)}',
  'right'
)

const left = createAnimation(
  'RingSpinner',
  '0% {transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg)} 100% {transform: rotateX(360deg) rotateY(180deg) rotateZ(360deg)}',
  'left'
)

const RingSpinner = ({
  loading = true,
  size = 40,
  color = '#006cff',
  speedMultiplier = 1.5,
  cssOverride = {},
  ...otherProps
}: RingSpinnerProps): JSX.Element | null => {
  const wrapper: React.CSSProperties = {
    display: 'inherit',
    position: 'relative',
    width: `${size}px`,
    height: `${size}px`,
    ...cssOverride,
  }

  const getStyle = (index: number): React.CSSProperties => {
    return {
      position: 'absolute',
      top: '0',
      left: '0',
      width: `${size}px`,
      height: `${size}px`,
      border: `${size / 10}px solid ${color}`,
      opacity: '0.4',
      borderRadius: '100%',
      animationFillMode: 'forwards',
      perspective: '800px',
      animation: `${index === 1 ? right : left} ${2 / speedMultiplier}s 0s infinite linear`,
    }
  }

  if (!loading) {
    return null
  }

  return (
    <span style={wrapper} {...otherProps}>
      <span style={getStyle(1)} />
      <span style={getStyle(2)} />
    </span>
  )
}

export default RingSpinner
