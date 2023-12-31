import React from 'react'

type GreetProps = {
    name?: String
}
export const Greet = (props: GreetProps) => {
  return (
    <div>Hello {props.name ? props.name : "guest"}</div>
  )
}
